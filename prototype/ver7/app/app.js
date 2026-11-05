/* 首页控制器：导航、两人选择、画布播放与连接线交互。
   全局设计参数在 app/config.js；回答到图形的规则在 shared/；
   原始回答在 source-data/，构建结果在 generated/。
   这里不自动解释开放回答，也不生成近似相似关系。 */
(() => {
  const $ = (id) => document.getElementById(id);
  const people = CATALOG.people;

  // 当前页面状态：mode 决定首页/单人/比较；view 决定 self-perspective。
  // skySelection 只有选满两人后才绘制连接；冻结时间用于定住选中星系。
  const state = {
    mode: "universe",
    a: "p05",
    b: "p12",
    topic: null,
    view: "all",
    domain: "all",
    skySelection: [],
    skyFreezeTime: null,
    skyFreezeProgress: null,
    pairMode: false,
    hoveredLinkId: null,
    activeLinkId: null,
    time: 0,
    progress: 0,
    paused: false,
    topicHover: null,
    topicSelected: null,
    topicCandidates: [],
  };

  const particleHits = new WeakMap(); // 当前帧真实粒子位置，用于点选题目。
  const person = (id) => people.find((p) => p.id === id);
  const types = () => [...$("legend").querySelectorAll("input:checked")]
    .map((input) => input.value);
  const el = (tag, text, cls) => {
    const n = document.createElement(tag);
    if (text !== undefined) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  };
  const option = (value, text) => {
    const n = el("option", text);
    n.value = value;
    return n;
  };
  for (const p of people) {
    $("person-a").append(option(p.id, p.name));
    $("person-b").append(option(p.id, p.name));
  }
  $("person-a").value = state.a;
  $("person-b").value = state.b;
  for (const [key, label] of Object.entries(Experience.labels))
    $("self").append(option(key, label));
  $("domain").append(option("all", "All domains"));
  CATALOG.domains.forEach((d, i) => $("domain").append(option(String(i), d)));
  // 连接依据只计算一次。筛选 View / Domain / 线型时复用这些依据。
  const allLinks = [];
  for (let i = 0; i < people.length; i++)
    for (let j = i + 1; j < people.length; j++)
      allLinks.push(...ConnectionRules.derive(people[i], people[j]));
  function selected() {
    if (state.mode === "universe") return people.filter(p => p.topics.some(hasVisibleTopic));
    if (state.mode === "profile") return [person(state.a)];
    return [person(state.a), person(state.b)];
  }
  // 严格按当前 self 找回答。开放题没有 self 字段，只进入 All selves。
  function hasVisibleTopic(t) {
    if (!t?.data || !relevant(t) || !isAllowed(t)) return false;
    if (state.view === "all") return true;
    if (Number(t.id.slice(1)) >= 7) return false;
    const layers = t.data.selves || t.data.answers || [];
    return layers.some(layer =>
      SelfViews.canonical(layer.id || layer.perspective) === state.view &&
      (Number.isFinite(layer.value) || (Array.isArray(layer.answers) && layer.answers.length > 0)));
  }
  function isAllowed(t) {
    return state.mode !== "compare" || ConnectionRules.eligible(t);
  }
  function relevant(t) {
    return state.domain === "all" || t.domain === Number(state.domain);
  }
  function visibleEvidenceLinks() {
    return allLinks.filter(
      (l) =>
        ConnectionRules.visible(l, state.view, state.topic, types()) &&
        (state.domain === "all" ||
          CATALOG.topics.find((t) => t.id === l.topic).domain === +state.domain),
    );
  }
  // 同一份真实连接依据同时用于候选提示与绘线，不产生额外关系。
  function pairLinks(first, second, links = allLinks) {
    return links.filter(link =>
      (link.from === first && link.to === second) ||
      (link.from === second && link.to === first));
  }
  function updateDiscovery() {
    const first = state.mode === "universe" && state.skySelection.length === 1
      ? state.skySelection[0] : null;
    const visible = visibleEvidenceLinks();
    for (const card of $("worlds").children) {
      const hint = card.querySelector(".match-hint");
      if (!hint) continue;
      const count = first ? pairLinks(first, card.dataset.person, visible).length : 0;
      hint.hidden = !count;
      // 颜色作数量分档，数字提供精确值；不表示连接类型或关系强弱。
      const colour = APP_CONFIG.connections.hintColours[Math.min(Math.max(count - 1, 0), 4)];
      hint.style.setProperty("--match-colour", colour);
      hint.style.setProperty("--match-glow", colour);
      hint.dataset.count = String(count);
      const message = `${count} exact shared answers with ${person(first)?.name || ""} in the current filters. Dot colours show counts: 1, 2, 3, 4, 5+. Not relationship strength or connection type. Shift-click to select.`;
      hint.querySelector(".match-hint-label").textContent = message;
      card.setAttribute("aria-label", `${person(card.dataset.person).name} profile galaxy. Click to open; Shift-click to select for connections.${count ? " " + message : ""}`);
    }
    const pair = state.mode === "compare" ? [state.a, state.b]
      : state.mode === "universe" ? state.skySelection : [];
    const hiddenLinks = pair.length === 2 && !currentLinks().length
      ? pairLinks(...pair) : [];
    const suggestions = $("connection-suggestions");
    suggestions.replaceChildren();
    const noEvidence = pair.length === 2 && !pairLinks(...pair).length;
    suggestions.hidden = !noEvidence;
    if (noEvidence) {
      suggestions.append(el("span", "No exact common ground for this pair. Explore with " + person(pair[0]).name + ": "));
      people.filter(p => !pair.includes(p.id)).map(p => ({p, count: pairLinks(pair[0], p.id).length}))
        .filter(x => x.count).sort((a,b) => b.count-a.count).slice(0,3).forEach(({p,count}) => {
          const button = el("button", `${p.name} · ${count} shared answers (all views)`);
          button.onclick = () => {
            state.view = "all"; state.domain = "all";
            $("self").value = "all"; $("domain").value = "all";
            $("legend").querySelectorAll("input").forEach(input => input.checked = true);
            route("compare", pair[0], p.id);
          };
          suggestions.append(button);
        });
    }
    $("explore-connections").hidden = !hiddenLinks.length;
    if (hiddenLinks.length) {
      const domains = [...new Set(hiddenLinks.map(link =>
        CATALOG.domains[CATALOG.topics.find(topic => topic.id === link.topic).domain]))];
      $("explore-connections").textContent = `Explore ${hiddenLinks.length} shared answers · reset View, Domain, topic and line filters`;
      $("link-note").textContent += ` Available in: ${domains.join("; ")}.`;
    }
  }
  function currentLinks() {
    if (state.mode === "compare") return visibleEvidenceLinks().filter((l) =>
      [l.from, l.to].includes(state.a) && [l.from, l.to].includes(state.b));
    if (state.mode !== "universe" || state.skySelection.length !== 2) return [];
    const [first, second] = state.skySelection;
    return visibleEvidenceLinks().filter((l) =>
      [l.from, l.to].includes(first) && [l.from, l.to].includes(second));
  }
  function emptyPairReason(firstId, secondId) {
    const first = person(firstId), second = person(secondId);
    const comparableTopic = first.topics.some((topic) =>
      ConnectionRules.eligible(topic) &&
      ConnectionRules.eligible(second.topics.find((other) => other.id === topic.id)));
    if (!comparableTopic)
      return "No topic is available for comparison from both profiles. No connection is drawn.";
    if (allLinks.some((link) =>
      [link.from, link.to].includes(firstId) &&
      [link.from, link.to].includes(secondId)))
      return "Exact connections exist, but the current View, Domain or connection-type filters hide them.";
    return "These answers have no exact shared value, choice or selected reason under the current rules.";
  }

  // 保留完整的解释文字，但把首页的三层嵌套条件改成可逐段阅读的判断。
  function connectionNote(count) {
    if (state.mode === "profile")
      return state.topic ? "Original responses and mapping rules are shown below. Missing answers create no artwork." : "Hover a visual part or topic card to pause and highlight both. Click a visual part to lock it; Escape clears selection.";
    if (state.mode === "compare")
      return `${count} exact connections. ${count
        ? "Hover a line to explore; click for its source."
        : emptyPairReason(state.a, state.b)}`;
    if (state.skySelection.length === 0)
      return "Open a galaxy to explore a person. Select two to discover shared answers.";
    if (state.skySelection.length === 1)
      return `${person(state.skySelection[0]).name} selected. Dots and numbers show shared-answer counts in these filters: blue 1–2, teal 3, yellow 4, amber 5+. Choose a second galaxy to reveal their lines.`;
    const [first, second] = state.skySelection;
    return `${person(first).name} × ${person(second).name}: ${count} exact shared answers in this local test. ${count
      ? "Hover a line for its meaning; click for the source."
      : emptyPairReason(first, second)}`;
  }

  // URL hash 是页面导航状态；这样单人、两人和单题页面可以直接收藏。
  function route(mode, a = state.a, b = state.b, topic = null) {
    location.hash = [mode, a, b, topic || ""].join("/");
  }
  function readRoute() {
    const [mode, a, b, topic] = location.hash.slice(1).split("/");
    state.mode = ["profile", "compare"].includes(mode) ? mode : "universe";
    if (person(a)) state.a = a;
    if (person(b)) state.b = b;
    state.topic = CATALOG.topics.some((t) => t.id === topic) ? topic : null;
    $("person-a").value = state.a;
    $("person-b").value = state.b;
    render();
  }
  function chooseWorld(p, event) {
    if (state.mode === "universe" && (event.shiftKey || state.pairMode)) {
      event.preventDefault();
      const choice = state.skySelection;
      state.skySelection = choice.includes(p.id)
        ? choice.filter((id) => id !== p.id)
        : choice.length < 2
          ? [...choice, p.id]
          : [p.id];
      state.hoveredLinkId = null;
      state.activeLinkId = null;
      if (state.skySelection.length === 2) {
        state.skyFreezeTime = state.time;
        state.skyFreezeProgress = state.progress;
        state.pairMode = false;
        [state.a, state.b] = state.skySelection;
        $("person-a").value = state.a;
        $("person-b").value = state.b;
      } else {
        state.skyFreezeTime = null;
        state.skyFreezeProgress = null;
      }
      render();
      return;
    }
    route("profile", p.id);
  }
  // 命中当前帧真实粒子；悬停是临时预览，点击是持续锁定。
  function hitTopic(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * canvas.clientWidth / rect.width;
    const y = (event.clientY - rect.top) * canvas.clientHeight / rect.height;
    const distances = new Map();
    for (const hit of particleHits.get(canvas) || []) {
      const d = (hit.x - x) ** 2 + (hit.y - y) ** 2;
      if (d < 24 ** 2 && (!distances.has(hit.topic) || d < distances.get(hit.topic)))
        distances.set(hit.topic, d);
    }
    state.topicCandidates = [...distances].sort((a, b) => a[1] - b[1]).map(([id]) => id);
    return state.topicCandidates[0] || null;
  }
  // 预览复用单题页面，独立播放真实动画。只有题目/兴趣改变才替换 iframe。
  let previewKey = "";
  let previewHoverTimer = null;
  let previewHoverTarget = null;
  function cancelPreviewHover() {
    clearTimeout(previewHoverTimer);
    previewHoverTimer = null;
    previewHoverTarget = null;
  }
  function updateTopicPreview(active) {
    const panel = $("topic-preview");
    document.body.classList.toggle("preview-visible", !!active && state.mode === "profile" && !state.topic);
    panel.hidden = !active || state.mode !== "profile" || !!state.topic;
    if (panel.hidden) {
      // 隐藏时保留同一题的 iframe，避免鼠标短暂离开就重播动画。
      return;
    }
    const topic = person(state.a).topics.find(t => t.id === active);
    if (!topic?.data) return;
    const key = `${state.a}/${active}/${state.view}`;
    if (key !== previewKey) {
      previewKey = key;
      panel.classList.remove("collapsed");
      document.body.classList.remove("preview-collapsed");
      $("preview-collapse").textContent = "Minimise";
      $("preview-collapse").setAttribute("aria-expanded", "true");
      $("preview-title").textContent = topic.title;
      $("preview-item").replaceChildren();
      $("preview-item-label").hidden = topic.id !== "q7";
      if (topic.id === "q7") topic.data.interests.forEach((interest, i) =>
        $("preview-item").append(option(String(i), interest.text)));
      loadPreviewFrame(active, 0);
    }
    $("preview-help").textContent = state.topicSelected
      ? "Locked · profile paused, topic preview below"
      : "Topic preview · click the visual to lock";
    $("preview-open").onclick = () => route("profile", state.a, state.b, active);
  }
  function loadPreviewFrame(topic, item) {
    const frame = el("iframe");
    frame.title = `Live preview · ${CATALOG.topics.find(t => t.id === topic).title}`;
    frame.src = `render.html?person=${state.a}&topic=${topic}&item=${item}&view=${state.view}&preview=1`;
    $("preview-frame").replaceChildren(frame);
    renderPreviewSource(topic, item);
  }
  // 原文与视觉并排留在同一窗口。文本均用 textContent，保持原始回答。
  // 用户说明与绘图分离；选项意义直接读取既有映射表，不推断新的人格特征。
  function mappingExplanation(topic, itemIndex) {
    const box = el("div", undefined, "mapping-explanation");
    for (const entry of MappingReading.explain(topic, itemIndex, state.view)) {
      const section = el("section", undefined, "mapping-entry");
      section.append(el("strong", entry.title), el("p", entry.meaning));
      if (entry.source) section.append(el("small", `Response source · ${entry.source}`));
      box.append(section);
    }
    return box;
  }
  function renderPreviewSource(topicId, item) {
    const profile = person(state.a);
    const topic = profile.topics.find(t => t.id === topicId);
    const reading = $("preview-reading");
    reading.replaceChildren();
    reading.append(el("small", `${profile.name} · Original response`));
    if (topicId === "q7") {
      const interest = topic.data.interests[item];
      reading.append(el("strong", interest.text));
      reading.append(el("p", "The records below provide the topic context; reasons are not automatically assigned to every interest.", "muted"));
    }
    const fields = Object.entries(topic.raw).filter(([field]) => {
      if (state.view === "all") return true;
      const base = Object.keys(SelfViews.fieldSelf).find(key => field === key || field.startsWith(key + "_"));
      return !base || SelfViews.fieldSelf[base] === state.view;
    });
    for (const [field, answer] of fields) {
      const block = el("section", undefined, "preview-response");
      const self = SelfViews.fieldSelf[field];
      block.append(el("small", `${field}${self ? " · " + APP_CONFIG.selfLabels[self] : ""}`));
      block.append(el("p", answer || "No response recorded"));
      const question = el("details");
      question.append(el("summary", "Source question"), el("p", CATALOG.prompts[field] || field));
      block.append(question);
      reading.append(block);
    }
    const mapping = el("details");
    mapping.append(el("summary", "How this becomes the visual"), mappingExplanation(topic, item));
    reading.append(mapping);
  }
  function syncTopicFocus() {
    const active = state.topicHover || state.topicSelected;
    document.querySelectorAll(".topic[data-topic]").forEach(node =>
      node.classList.toggle("visual-active", node.dataset.topic === active));
    $("link-note").textContent = active
      ? `${state.topicHover ? "Preview" : "Selected"}: ${CATALOG.topics.find(t => t.id === active).title}. Motion paused. Click to lock or unlock; Escape clears selection.`
      : "Hover a visual part to pause and highlight its topic. Click to keep it selected; Escape clears selection.";
    updateTopicPreview(active);
    syncGuide();
    draw();
  }
  // 星系画布的透明空白不是图形按钮；保留名称和键盘作为另一条入口。
  function hitsVisibleGalaxy(canvas, event) {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height || !canvas.width || !canvas.height) return false;
    const x = (event.clientX - r.left) * canvas.width / r.width;
    const y = (event.clientY - r.top) * canvas.height / r.height;
    const radius = Math.ceil(12 * canvas.width / r.width);
    const left = Math.max(0, Math.floor(x-radius)), top = Math.max(0, Math.floor(y-radius));
    const width = Math.min(canvas.width-left, radius*2+1), height = Math.min(canvas.height-top, radius*2+1);
    if (width <= 0 || height <= 0) return false;
    const pixels = canvas.getContext("2d").getImageData(left, top, width, height).data;
    for (let i=3; i<pixels.length; i+=4) if (pixels[i] > 20) return true;
    return false;
  }
  function makeWorld(p) {
    const card = el(
      "article",
      undefined,
      "world" + (state.skySelection.includes(p.id) && state.mode === "universe" ? " selected" : ""),
    );
    card.dataset.person = p.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${p.name} profile galaxy. Click to open; Shift-click to select for connections.`);
    card.setAttribute("aria-pressed", String(state.mode === "universe" && state.skySelection.includes(p.id)));
    card.onclick = (event) => {
      if (state.mode === "universe" && event.target === canvas && !hitsVisibleGalaxy(canvas, event)) {
        if (state.skySelection.length || state.pairMode) $("clear-pair").click();
        return;
      }
      if (state.mode === "profile" && event.target === canvas) {
        cancelPreviewHover();
        const topic = hitTopic(canvas, event);
        state.topicSelected = state.topicSelected === topic ? null : topic;
        state.topicHover = null;
        syncTopicFocus();
        return;
      }
      chooseWorld(p, event);
    };
    card.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Space 选择星系时不同时滚动页面。
        if (state.mode === "profile") {
          $("explore-panel").open = true;
          $("topics").querySelector("button, summary")?.focus();
        } else chooseWorld(p, event);
      }
    };
    const canvas = el("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.onpointermove = event => {
      if (event.pointerType === "touch" || state.mode !== "profile" || state.topicSelected) return;
      const next = hitTopic(canvas, event);
      if (next === state.topicHover) { cancelPreviewHover(); return; }
      if (next === previewHoverTarget && previewHoverTimer) return;
      cancelPreviewHover();
      previewHoverTarget = next;
      // 边缘微小鼠标移动不重载 iframe；稳定停留 180ms 后才切换。
      previewHoverTimer = setTimeout(() => {
        previewHoverTimer = null;
        if (state.mode !== "profile" || state.topicSelected) return;
        state.topicHover = next;
        syncTopicFocus();
      }, 180);
    };
    canvas.onpointerleave = event => {
      cancelPreviewHover();
      if (state.mode !== "profile" || event.relatedTarget?.closest?.("#topic-preview")) return;
      state.topicHover = null;
      syncTopicFocus();
    };
    const name = el("h2", p.name);
    const hint = el("span", undefined, "match-hint");
    hint.hidden = true;
    hint.setAttribute("aria-hidden", "true");
    hint.append(el("span", "", "match-hint-label"));
    name.append(hint);
    card.append(canvas, name);
    const mapped = p.topics.filter((t) => t.data && isAllowed(t)).length;
    card.append(
      el(
        "p",
        `${mapped} mapped topics · ${p.topics.filter((t) => ["pending", "partial"].includes(t.status)).length} awaiting mapping`,
      ),
    );
    return card;
  }

  // 单人页以图形为入口；探索与资料在下方按需展开。
  function updateImmersiveUI() {
    const solo = state.mode === "profile";
    const comparing = state.mode === "compare";
    document.body.classList.toggle("compare-mode", comparing);
    const options = $("comparison-options");
    options.hidden = !comparing;
    if (options.dataset.route !== `${state.mode}/${state.a}/${state.b}/${state.topic || ""}`) options.open = false;
    options.dataset.route = `${state.mode}/${state.a}/${state.b}/${state.topic || ""}`;
    $("comparison-options-label").textContent = comparing
      ? `${person(state.a).name} × ${person(state.b).name} · Options` : "Comparison options";
    $("sky-options").hidden = state.mode !== "universe";
    if (state.mode === "universe") {
      $("sky-options-content").append($("main-toolbar"), $("coverage-note"));
    }
    else if (comparing) $("comparison-options-content").append($("main-toolbar"));
    else $("self-switch").before($("main-toolbar"));
    if (state.mode !== "universe") $("stage").before($("coverage-note"));
    $("compare").textContent = comparing ? "Apply pair" : "Compare two profiles";
    document.body.classList.toggle("profile-mode", solo);
    document.body.classList.toggle("topic-mode", !!state.topic);
    $("pair-controls").hidden = state.mode !== "compare";
    $("explore-panel").hidden = !!state.topic || state.mode === "universe";
    if ($("explore-panel").dataset.mode !== state.mode)
      $("explore-panel").open = false;
    $("explore-panel").dataset.mode = state.mode;
    $("explore-toggle").hidden = !solo || !!state.topic;
    $("explore-toggle").setAttribute("aria-expanded", String($("explore-panel").open));
    (solo ? $("explore-filters") : $("main-toolbar")).append($("domain-label"));
    $("domain-label").hidden = !!state.topic;
    $("self-label").hidden = solo;
    $("self-switch").hidden = !solo;
    $("self-switch").replaceChildren();
    if (!solo) return;
    const topic = person(state.a).topics.find(t => t.id === state.topic);
    if (topic && Number(topic.id.slice(1)) >= 7) {
      $("self-switch").hidden = true;
      return;
    }
    for (const [id, label] of Object.entries(Experience.labels)) {
      if (topic && id !== "all" && !topic.fields.some(field => SelfViews.fieldSelf[field] === id)) continue;
      const button = el("button", label);
      button.setAttribute("aria-pressed", String(state.view === id));
      button.onclick = () => { state.view = id; $("self").value = id; render(); };
      $("self-switch").append(button);
    }
  }
  // 总渲染入口。双选时复用首页星系节点，避免放大/退让动画闪跳。
  // Read the same selection and visible panels used by the actual page.
  function syncGuide() {
    const record = person(state.a)?.topics.find(topic => topic.id === state.topic);
    const fullAnswer = state.mode === "profile" && record && hasVisibleTopic(record);
    Experience.sync({
      mode: state.mode,
      reading: Boolean(fullAnswer || (state.topicSelected && !$("topic-preview").hidden)),
      count: state.skySelection.length,
      visibleLinks: currentLinks().length,
      totalLinks: state.skySelection.length === 2 ? pairLinks(...state.skySelection).length : 0,
      evidence: !$("evidence").hidden
    });
  }
  function render() {
    cancelPreviewHover();
    updateTopicPreview(null);
    state.topicCandidates = [];
    state.topicHover = null;
    state.topicSelected = null;
    $("evidence").hidden = true;
    $("link-tooltip").hidden = true;
    state.activeLinkId = null;
    state.hoveredLinkId = null;
    // Keep the same sky elements through pair selection so CSS can animate
    // scale and displacement instead of snapping between rebuilt cards.
    const shownPeople = selected();
    if (state.mode === "universe") {
      state.skySelection = state.skySelection.filter(id => shownPeople.some(p => p.id === id));
      if (state.skySelection.length < 2) {
        state.skyFreezeTime = null;
        state.skyFreezeProgress = null;
      }
    }
    const reuseSky = state.mode === "universe" && !state.topic &&
      $("worlds").children.length === shownPeople.length &&
      [...$("worlds").children].every((card, i) => card.dataset.person === shownPeople[i].id);
    if (!reuseSky) $("worlds").replaceChildren();
    $("topics").replaceChildren();
    $("detail").replaceChildren();
    $("detail").hidden = !state.topic;
    $("stage").hidden = !!state.topic;
    $("stage").classList.toggle("sky", state.mode === "universe" && !state.topic);
    document.body.classList.toggle("universe-mode", state.mode === "universe");
    $("sky-controls").hidden = state.mode !== "universe" || !!state.topic;
    $("pair-mode").setAttribute("aria-pressed", String(state.pairMode));
    $("open-pair").hidden = state.skySelection.length !== 2;
    $("clear-pair").hidden = state.skySelection.length === 0;
    $("worlds").className =
      state.mode === "compare" ? "pair" : state.mode === "profile" ? "single" : "";
    // Sky is the root: show return navigation only after entering another view.
    $("page-navigation").hidden = state.mode === "universe" && !state.topic;
    $("back").hidden = !state.topic;
    $("back").textContent = state.mode === "compare" ? "Back to comparison" : "Back to profile";
    $("heading").textContent = state.topic
      ? CATALOG.topics.find((t) => t.id === state.topic).title
      : state.mode === "profile"
        ? person(state.a).name
        : state.mode === "compare"
          ? `${person(state.a).name} × ${person(state.b).name}`
          : "Find a place to begin.";
    $("eyebrow").textContent =
      state.mode === "universe"
        ? `${shownPeople.length} OF ${people.length} PERSONAL WORLDS`
        : state.mode === "profile"
          ? "ONE PROFILE · MANY PERSPECTIVES"
          : "COMMON GROUND · TWO PROFILES";
    $("breadcrumb").textContent = state.topic
      ? "Topic detail"
      : state.mode === "universe"
        ? "Universe"
        : state.mode === "profile"
          ? "Personal constellation"
          : "Comparison";
    $("subtitle").textContent =
      state.mode === "universe"
        ? "Choose a person to explore their answers, or select two to see what they share."
        : state.mode === "profile"
          ? "Local researcher view. Explore domains and questions below; every mapped visual retains its source and editable rule."
          : "Local test comparison. Recorded survey permissions remain unchanged; participant and connection reviews remain pending.";
    $("legend").hidden = state.mode === "profile";
    updateImmersiveUI();
    if (state.topic) renderDetail();
    else {
      if (reuseSky) {
        for (const card of $("worlds").children) {
          const selected = state.skySelection.includes(card.dataset.person);
          card.classList.toggle("selected", selected);
          card.setAttribute("aria-pressed", String(selected));
        }
      } else selected().forEach((p) => $("worlds").append(makeWorld(p)));
      if (state.mode !== "universe") renderTopics();
    }
    $("link-note").textContent = state.mode === "universe" && !shownPeople.length
      ? "No mapped responses for this View and Domain. Choose All perspectives or another theme."
      : state.mode === "profile" && !state.topic && !person(state.a).topics.some(hasVisibleTopic)
        ? "No mapped response for this self and domain. Choose All perspectives or another theme; original responses remain in Explore topics."
        : connectionNote(currentLinks().length);
    $("reset-filters").hidden = state.view === "all" && state.domain === "all" && types().length === 3;
    updateDiscovery();
    const coverage = people.filter(p => p.topics.some(hasVisibleTopic)).length;
    $("coverage-note").textContent = `${coverage} of ${people.length} profiles have mapped responses in this view. Blank responses add no visual.`;
    syncGuide();
    draw();
  }

  // 每题卡片只提供导航；题目原回答与动画在 renderDetail 中展开。
  function topicStatusLabel(topic) {
    if (!isAllowed(topic)) return "excluded by scope";
    const labels = {
      mapped: "mapped",
      partial: "partly mapped",
      skipped: "event skipped · no visual",
      incomplete: "incomplete pair · no visual",
      "source-only": "source text only · no visual",
      blank: "no response",
    };
    return labels[topic.status] || "mapping pending";
  }
  function renderTopics() {
    for (const meta of CATALOG.topics) {
      if (!relevant(meta)) continue;
      const records = selected().map((p) => p.topics.find((t) => t.id === meta.id));
      if (state.mode === "compare" && !records.some(isAllowed)) continue;
      if (state.mode === "profile" && !records[0].data) {
        const record = el("details", undefined, "source-record");
        record.append(el("summary", `${meta.title} · ${topicStatusLabel(records[0])}`));
        record.append(el("p", noVisualExplanation(records[0].status)));
        for (const [field, answer] of Object.entries(records[0].raw)) {
          record.append(el("small", CATALOG.prompts[field] || field));
          record.append(el("p", answer || "No response recorded"));
        }
        $("topics").append(record);
        continue;
      }
      const b = el(
        "button",
        undefined,
        "topic" + (records.every((t) => !t.data) ? " pending" : ""),
      );
      b.dataset.topic = meta.id;
      b.append(el("span", CATALOG.domains[meta.domain], "domain"), el("h3", meta.title));
      b.append(
        el(
          "p",
          records
            .map(
              (t, i) =>
                `${selected()[i].name}: ${topicStatusLabel(t)}`,
            )
            .join(" · "),
        ),
      );
      if (state.mode === "profile") {
        const p = person(state.a);
        if (p.invitations.includes(meta.id)) b.classList.add("invited");
      }
      b.onpointerenter = b.onfocus = () => {
        if (state.mode !== "profile" || !hasVisibleTopic(records[0])) return;
        state.topicCandidates = [meta.id];
        state.topicHover = meta.id;
        syncTopicFocus();
      };
      b.onpointerleave = b.onblur = event => {
        if (state.mode !== "profile" || event.relatedTarget?.closest?.("#topic-preview")) return;
        state.topicHover = null;
        syncTopicFocus();
      };
      b.onclick = () => route(state.mode, state.a, state.b, meta.id);
      $("topics").append(b);
    }
  }
  function makeFrame(p, t, item = 0) {
    const f = el("iframe");
    f.title = `${p.name} · ${t.title}`;
    f.src = `render.html?person=${p.id}&topic=${t.id}&item=${item}&view=${state.view}`;
    f.dataset.visual = "true";
    f.dataset.item = String(item);
    f.loading = "lazy";
    return f;
  }

  // 单题页保留「原文 / 视觉 / 映射解释」三种证据，不替参与者补答案。
  function noVisualExplanation(status) {
    const explanations = {
      blank: "No response recorded. No visual is invented.",
      skipped: "The event description was skipped. Its selected factors remain in the source record; no visual is drawn.",
      incomplete: "Only the Before response was recorded. No change can be drawn without the second answer.",
      "source-only": "This response comments on the survey rather than naming a feared pattern. Its original text is preserved below.",
    };
    return explanations[status] ||
      "This response is preserved below. Its individual mapping has not been confirmed.";
  }
  function renderDetail() {
    const grid = el(
      "div",
      undefined,
      "detail-grid" + (state.mode === "profile" ? " solo" : ""),
    );
    for (const p of selected()) {
      const t = p.topics.find((t) => t.id === state.topic),
        card = el("section", undefined, "detail-card");
      card.dataset.person = p.id;
      if (state.mode !== "profile") card.append(el("h2", p.name));
      const scopeText = APP_CONFIG.localComparisonTestMode && state.mode === "compare" && t.id !== "q42"
        ? `Recorded scope: ${t.scope} · local test comparison override` : `Recorded scope: ${t.scope}`;
      if (!isAllowed(t)) {
        card.append(
          el("p", "This topic is excluded from comparison by its recorded scope."),
        );
        grid.append(card);
        continue;
      }
      const visual = el("div", undefined, "topic-artwork");
      if (t.data && !hasVisibleTopic(t)) {
        visual.append(el("p", "No mapped visual for this View and Domain. The original response remains below.", "muted"));
        const reset = el("button", "Show this topic · All selves");
        reset.onclick = () => {
          state.view = "all";
          state.domain = String(t.domain);
          $("self").value = "all";
          $("domain").value = state.domain;
          render();
        };
        visual.append(reset);
      } else if (t.data) {
        if (t.id === "q7") {
          const interests = el("div", undefined, "interests");
          t.data.interests.forEach((i, n) => {
            const block = el("div");
            block.append(el("h3", i.text), makeFrame(p, t, n));
            interests.append(block);
          });
          visual.append(interests);
        } else visual.append(makeFrame(p, t));
      } else
        visual.append(
          el("p", noVisualExplanation(t.status)),
        );
      card.append(visual);
      const response = el("details", undefined, "reading-panel");
      response.append(el("summary", state.mode === "compare" ? `${p.name} · Response` : "Response"));
      for (const [field, answer] of Object.entries(t.raw)) {
        if (!answer) continue;
        const self = SelfViews.fieldSelf[field];
        response.append(el("small", self ? APP_CONFIG.selfLabels[self] : CATALOG.prompts[field] || t.title), el("p", answer));
      }
      if (!Object.values(t.raw).some(Boolean)) response.append(el("p", "No response recorded."));
      card.append(response);
      const m = el("details", undefined, "mapping reading-panel");
      m.append(
        el("summary", ["skipped", "incomplete", "source-only"].includes(t.status) ? "Why no visual" : (state.mode === "compare" ? `${p.name} · Mapping` : "Mapping")),
        el("p", t.data ? "Read how this response shapes the image." : t.note),
      );
      if (t.data) m.append(mappingExplanation(t));
      card.append(m);
      const source = el("details");
      source.open = false;
      source.className = "reading-panel";
      source.append(el("summary", state.mode === "compare" ? `${p.name} · Source` : "Source"), el("p", scopeText, "scope"));
      for (const [f, value] of Object.entries(t.raw)) {
        const block = el("div", undefined, "source");
        block.append(
          el("small", f + " · " + CATALOG.prompts[f]),
          el("strong", value || "No response recorded"),
        );
        source.append(block);
      }
      card.append(source);
      if (t.id === "q7" && t.data) {
        const coverage = el(
          "p",
          "Only the reviewed interest motifs above are rendered. All original responses are preserved in Source, including any interest still awaiting mapping.",
          "muted",
        );
        m.append(coverage);
      }
      if (state.mode === "profile") {
        const anchors = {
          p02: { FU1: "q3" },
          p09: { FU1: "q1" },
          p13: { FU1: "q2", FU2: "q2" },
          p06: { FU3: "q2" },
        };
        const follow = el("details");
        follow.append(el("summary", "Follow-up context & interpretation status"));
        for (const f of ["FU1", "FU2", "FU3"])
          if (p.answers[f]) {
            const assigned = anchors[p.id]?.[f];
            if (assigned === t.id || !assigned)
              follow.append(
                el(
                  "p",
                  `${f} · ${assigned ? "Reviewed source topic" : "Unanchored researcher note"}: ${p.answers[f]}`,
                ),
              );
          }
        follow.append(
          el(
            "p",
            "Follow-up material stays within this local researcher view; unanchored notes do not generate visual connections.",
            "muted",
          ),
        );
        card.append(follow);
      }
      grid.append(card);
    }
    $("detail").append(grid);
    if (state.mode === "compare") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.id = "detail-lines";
      $("detail").append(svg);
      const list = el("div", undefined, "connection-list");
      for (const l of currentLinks()) {
        const b = el("button", `${l.label} · ${l.a}`);
        b.onclick = () => showEvidence(l);
        list.append(b);
      }
      $("detail").append(list);
      if (!currentLinks().length)
        $("detail").append(
          el(
            "p",
            "No eligible exact connection for this topic and self-perspective.",
            "muted",
          ),
        );
    }
  }
  // 首页星系位置：固定锚点 + 共享缓慢漂移；选中两人定格，邻近星系退让。
  // 这些位移均为交互/构图常量，不从任何问卷回答推断人格或亲密度。
  function positionSkyWorlds() {
    if (state.mode !== "universe" || state.topic) return;
    const width = $("stage").clientWidth;
    const sky = APP_CONFIG.sky;
    const mobile = width < 650;
    const tablet = width < 950 && !mobile;
    const layout = mobile ? sky.mobile : tablet ? sky.tablet : sky.desktop;
    const height = mobile
      ? sky.mobileHeight
      : tablet
        ? sky.tabletHeight
        : sky.desktopHeight;
    $("stage").style.setProperty("--sky-height", `${height}px`);
    const movement = mobile ? 0.3 : tablet ? 0.65 : 1;
    const pushRadius = sky.pushRadius * (mobile ? 0.65 : tablet ? 0.85 : 1);
    const pushDistance = sky.pushDistance * (mobile ? 0.6 : tablet ? 0.8 : 1);
    const focusScale = sky.selectedScale * (mobile ? 0.9 : tablet ? 0.96 : 1);
    const cards = [...$("worlds").children];
    const pairSelected = state.skySelection.length === 2;
    const positions = cards.map((card, index) => {
      const [x, y] = layout[index];
      const phase = index * 2.39996; // Fixed, evenly dispersed motion phases.
      const held = pairSelected && state.skySelection.includes(card.dataset.person);
      const t = (held ? state.skyFreezeTime : state.time) * sky.driftSpeed;
      const dx = sky.driftX * movement * (
        Math.sin(t + phase) + 0.25 * Math.sin(t * 0.61 + phase * 1.8)
      );
      const dy = sky.driftY * movement * (
        Math.cos(t * 0.82 + phase * 1.3) + 0.28 * Math.sin(t * 0.47 + phase)
      );
      const scale = held ? focusScale : 1;
      const half = card.offsetWidth * scale / 2;
      const halfHeight = card.offsetHeight * scale / 2;
      const clampX = (value) => Math.max(half + 8 - x * width,
        Math.min(value, width - half - 8 - x * width));
      const clampY = (value) => Math.max(halfHeight + 8 - y * height,
        Math.min(value, height - halfHeight - 8 - y * height));
      return { x, y, dx: clampX(dx), dy: clampY(dy), held, scale, clampX, clampY };
    });
    const heldCenters = positions.filter((p) => p.held).map((p) => ({
      x: p.x * width + p.dx,
      y: p.y * height + p.dy,
    }));
    for (const [index, card] of cards.entries()) {
      const { x, y, dx, dy, held, scale, clampX, clampY } = positions[index];
      card.style.left = `${x * 100}%`;
      card.style.top = `${y * 100}%`;
      card.classList.toggle("pair-focus", held);
      card.style.setProperty("--focus-scale", scale);
      let pushX = 0, pushY = 0;
      if (pairSelected && !held) {
        const centerX = x * width + dx;
        const centerY = y * height + dy;
        for (const target of heldCenters) {
          const vx = centerX - target.x;
          const vy = centerY - target.y;
          const distance = Math.max(1, Math.hypot(vx, vy));
          const force = Math.max(0, 1 - distance / pushRadius);
          pushX += (vx / distance) * force * pushDistance;
          pushY += (vy / distance) * force * pushDistance;
        }
      }
      // Keep the full interactive galaxy within the sky at narrow widths.
      const safeDx = clampX(dx + pushX);
      const safeDy = clampY(dy + pushY);
      card.style.setProperty("--drift-x", `${safeDx.toFixed(2)}px`);
      card.style.setProperty("--drift-y", `${safeDy.toFixed(2)}px`);
    }
  }
  // 从局部原图采样，将各领域等预算汇合；未映射回答从未生成假点。
  // 选中时冻结时间并整体缩放；各题自身的映射规则不在此处改变。
  // 固定题目槽位：同一个题对所有人位置相同，缺答不挤占其他题的位置。
  // Composition grammar: Q23 changes area only; Q24 changes radial distance only.
  // Domain directions are a shared reading key, not personality measurements.
  // Place siblings across their domain's direction rather than on parallel rows.
  function topicOffset(topic, profile) {
    const siblings = CATALOG.topics.filter(t => t.domain === topic.domain);
    const slot = siblings.findIndex(t => t.id === topic.id) - (siblings.length - 1) / 2;
    const base = state.domain === "all" ? APP_CONFIG.domains[topic.domain] : [0, 0];
    const direction = APP_CONFIG.domains[topic.domain];
    const length = Math.hypot(...direction) || 1;
    const ux = direction[0] / length, uy = direction[1] / length;
    const outward = profile?.invitations.includes(topic.id)
      ? APP_CONFIG.galaxy.invitationOutward : 0;
    const spacing = APP_CONFIG.galaxy.domainSeparation[topic.domain]
      || APP_CONFIG.galaxy.topicSeparation;
    return [
      (base[0] - uy * slot * spacing + ux * outward) * APP_CONFIG.galaxy.clusterPacking,
      (base[1] + ux * slot * spacing + uy * outward) * APP_CONFIG.galaxy.clusterPacking
    ];
  }
  // Cache colour conversion by sampled point. Refresh when editable colour settings change.
  const particleColours = new WeakMap();
  function particleColour(point) {
    const { saturation, brightness } = APP_CONFIG.galaxy;
    const cached = particleColours.get(point);
    if (cached && cached.saturation === saturation && cached.brightness === brightness) return cached.rgb;
    const grey = (point[2] + point[3] + point[4]) / 3;
    const rgb = point.slice(2, 5).map(channel => Math.round(Math.max(0, Math.min(255,
      (grey + (channel - grey) * saturation) * brightness)))).join(",");
    particleColours.set(point, { saturation, brightness, rgb });
    return rgb;
  }
  function galaxy(canvas, p) {
    if (!GALAXIES[p.id] && window.GalaxyCache) {
      if (!canvas.dataset.loading) {
        canvas.dataset.loading = "true";
        canvas.setAttribute("aria-busy", "true");
        canvas.parentElement?.classList.add("visual-loading");
        GalaxyCache.ensure(p.id).then(() => {
          canvas.removeAttribute("aria-busy");
          canvas.parentElement?.classList.remove("visual-loading"); draw();
        }).catch(() => {
          canvas.dataset.loading = "error";
          canvas.removeAttribute("aria-busy");
          canvas.parentElement?.classList.remove("visual-loading");
          $("link-note").textContent = "A visual cache could not load. Reload this page to retry.";
        });
      }
      return;
    }
    // clientWidth/Height exclude the selected card's CSS zoom. The particle
    // drawing stays the same size internally, then the card scales as one unit.
    const width = canvas.clientWidth, height = canvas.clientHeight;
    if (!width || !height) return;
    const d = Math.min(devicePixelRatio || 1, 2);
    if (
      canvas.width !== Math.round(width * d) ||
      canvas.height !== Math.round(height * d)
    ) {
      canvas.width = Math.round(width * d);
      canvas.height = Math.round(height * d);
    }
    const c = canvas.getContext("2d");
    c.setTransform(d, 0, 0, d, 0, 0);
    c.shadowBlur = 0;
    c.clearRect(0, 0, width, height);
    const hitPoints = [];
    particleHits.set(canvas, hitPoints);
    const unit = Math.min(width, height) * APP_CONFIG.galaxy.radius * APP_CONFIG.galaxy.layoutScale;
    const held = state.mode === "universe" && state.skySelection.length === 2 &&
      state.skySelection.includes(p.id);
    const visualTime = held ? state.skyFreezeTime : state.time;
    const visualProgress = held ? state.skyFreezeProgress : state.progress;
    const ts = p.topics.filter(hasVisibleTopic);
    const domainCounts = {};
    for (const t of ts) domainCounts[t.domain] = (domainCounts[t.domain] || 0) + 1;
    for (const t of ts) {
      const data = GALAXIES[p.id]?.[t.id];
      if (!data) continue;
      const context = Number(t.id.slice(1)) >= 7;
      const key = context ? "all" : state.view;
      const finalPoints = data[key] || [];
      const startPoints = Array.isArray(data[key + "Start"]) ? data[key + "Start"] : finalPoints;
      // 两张原题快照交叉淡化，保留原有规则的形成/变化；不是按人随机运动。
      // 与局部使用同一往返时钟，插值相邻真实绘图阶段，不再只切换首尾。
      const cycle = (visualTime / APP_CONFIG.galaxy.formationSeconds) % 2;
      const position = (cycle <= 1 ? cycle : 2 - cycle) * 4;
      const low = Math.min(3, Math.floor(position)), mix = position - low;
      const stages = [startPoints, data[key + "F1"] || startPoints,
        data[key + "F2"] || finalPoints, data[key + "F3"] || finalPoints, finalPoints];
      const frames = [[stages[low], 1 - mix], [stages[low + 1], mix]];
      for (const [pts, frameAlpha] of frames) {
      if (frameAlpha < 0.015) continue;
      const offset = topicOffset(t, p);
      const budget = Math.floor(
        pts.length / domainCounts[t.domain],
      );
      // Q23 现在只编码面积，不再同时编码透明度。
      const emphasis = 1;
      const activeTopic = state.mode === "profile" ? state.topicHover || state.topicSelected : null;
      const lit = activeTopic === t.id;
      c.shadowBlur = lit ? 9 : 0;
      c.shadowColor = "#ffe0a8";
      const focusAlpha = activeTopic && !lit ? APP_CONFIG.galaxy.focusOtherOpacity : 1;
      for (let i = 0; i < Math.min(budget, pts.length); i++) {
        const point = pts[Math.floor((i * pts.length) / Math.min(budget, pts.length))];
        const phase = i * 0.61 + t.domain;
        const expansion = 1 + (1 - visualProgress) * 0.35;
        // Gentle bounded sway replaces the shared continuous roll.
        // This is camera motion only: never a personality score.
        const angle = Math.sin(visualTime * APP_CONFIG.galaxy.motionSpeed)
          * APP_CONFIG.galaxy.swayRadians;
        const topicScale = (t.id === "q7"
          ? (state.domain === "all" ? APP_CONFIG.galaxy.interestGroupScale.all : APP_CONFIG.galaxy.interestGroupScale.focused)
          : (state.domain === "all" ? APP_CONFIG.galaxy.topicScale : APP_CONFIG.galaxy.focusedTopicScale))
          * Math.sqrt(p.foreground.includes(t.id) ? APP_CONFIG.galaxy.foregroundArea : 1)
          * (APP_CONFIG.galaxy.topicDisplayScale[t.id] || 1);
        const dx = offset[0] * expansion + point[0] * topicScale,
          dy = offset[1] * expansion + point[1] * topicScale;
        const xx = dx * Math.cos(angle) - dy * Math.sin(angle);
        const yy = dx * Math.sin(angle) + dy * Math.cos(angle);
        const drift = 0.018 * Math.sin(visualTime * 0.8 + phase);
        c.fillStyle = `rgba(${particleColour(point)},${(0.65 + (point[5] / 255) * 0.35) * emphasis * frameAlpha * focusAlpha * APP_CONFIG.galaxy.opacity})`;
        if (state.mode === "profile" && frameAlpha > 0.15)
          hitPoints.push({ x: width * 0.5 + (xx + drift) * unit,
            y: height * 0.5 + (yy + drift * 0.4) * unit, topic: t.id });
        // Sparse halos use the SAME sampled points and colours; never invent
        // a central personality score or decorative links. Small crisp cores
        // retain the original motif while the shared glow joins its texture.
        if (i % 12 === 0 && !activeTopic) {
          c.save();
          c.globalAlpha = APP_CONFIG.galaxy.starHaloOpacity;
          c.beginPath();
          c.arc(width * 0.5 + (xx + drift) * unit,
            height * 0.5 + (yy + drift * 0.4) * unit,
            APP_CONFIG.galaxy.particleRadius * APP_CONFIG.galaxy.starHaloRadius, 0, Math.PI * 2);
          c.fill();
          c.restore();
        }
        c.beginPath();
        c.arc(
          width * 0.5 + (xx + drift) * unit,
          height * 0.5 + (yy + drift * 0.4) * unit,
          APP_CONFIG.galaxy.particleRadius * (lit ? 1.3 : 1) + (point[5] / 255) * 0.35,
          0,
          Math.PI * 2,
        );
        c.fill();
      }
      }
    }
  }
  // 连接线层：依据来自 app/connections.js。首页只合并同一题/类型的线，
  // 不新造任何「相似度线」。保留 SVG 节点可让悬停提示在漂移时稳定。
  const linkCache = new WeakMap();
  function lineItems() {
    const links = currentLinks();
    if (state.mode !== "universe") return links.map((l) => ({ ...l, members: [l] }));
    const groups = new Map();
    for (const l of links) {
      const key = `${l.from}-${l.to}-${l.topic}-${l.type}`;
      if (!groups.has(key)) groups.set(key, { ...l, id: key, members: [] });
      groups.get(key).members.push(l);
    }
    return [...groups.values()].slice(0, APP_CONFIG.connections.maxOverviewLines);
  }
  function setLineStates() {
    for (const svg of [$('links'), $('detail-lines')].filter(Boolean)) {
      for (const entry of linkCache.get(svg)?.values() || []) {
        for (const path of entry.strokes) {
          path.classList.toggle("hovered", entry.link.id === state.hoveredLinkId);
          path.classList.toggle("active", entry.link.id === state.activeLinkId);
        }
      }
    }
  }
  function moveTooltip(event) {
    const tip = $("link-tooltip");
    const x = Math.min(event.clientX + 16, innerWidth - tip.offsetWidth - 12);
    const y = Math.min(event.clientY + 15, innerHeight - tip.offsetHeight - 12);
    tip.style.left = `${Math.max(12, x)}px`;
    tip.style.top = `${Math.max(12, y)}px`;
  }
  function hoverLine(entry, event) {
    const l = entry.link;
    state.hoveredLinkId = l.id;
    const tip = $("link-tooltip");
    const title = CATALOG.topics.find((t) => t.id === l.topic).title;
    const count = l.members.length;
    const preview = l.members.slice(0, 2).map((m) => m.reason || m.a).join(" · ");
    tip.replaceChildren(
      el("strong", `In common: ${preview}${count > 2 ? " · …" : ""}`),
      el("span", `${title} · ${l.label}`),
      el("span", "Click to read the source"),
    );
    tip.hidden = false;
    moveTooltip(event);
    setLineStates();
  }
  function leaveLine(entry) {
    if (state.hoveredLinkId !== entry.link.id) return;
    state.hoveredLinkId = null;
    $("link-tooltip").hidden = true;
    setLineStates();
  }
  function createLine(svg, l) {
    const NS = "http://www.w3.org/2000/svg";
    const group = document.createElementNS(NS, "g");
    group.style.color = APP_CONFIG.connections.colours[l.type];
    const entry = { group, strokes: [], hit: null, link: l };
    for (const parallel of l.type === "choice" ? [-2, 2] : [0]) {
      const path = document.createElementNS(NS, "path");
      path.classList.add("link-stroke");
      path.dataset.parallel = String(parallel);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", APP_CONFIG.connections.colours[l.type]);
      path.setAttribute("stroke-width", "1.6");
      path.setAttribute("opacity", ".78");
      if (l.type === "reason") path.setAttribute("stroke-dasharray", "2 7");
      group.append(path);
      entry.strokes.push(path);
    }
    const hit = document.createElementNS(NS, "path");
    hit.classList.add("link-hit");
    hit.setAttribute("stroke", "transparent");
    // 透明命中带比可见线宽，触控/鼠标都不必精确点细线。
    hit.setAttribute("stroke-width", "26");
    hit.setAttribute("fill", "none");
    hit.setAttribute("tabindex", "0");
    hit.setAttribute("role", "button");
    hit.onpointerenter = (e) => hoverLine(entry, e);
    hit.onpointermove = (e) => {
      if (state.hoveredLinkId !== entry.link.id || $("link-tooltip").hidden) hoverLine(entry, e);
      else moveTooltip(e);
    };
    hit.onpointerleave = () => leaveLine(entry);
    hit.onfocus = () => {
      const r = hit.getBoundingClientRect();
      hoverLine(entry, { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 });
    };
    hit.onblur = () => leaveLine(entry);
    hit.onclick = event => {
      event.stopPropagation(); // 点连接线绝不触发天空取消选择。
      showEvidence(entry.link, hit);
    };
    hit.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showEvidence(entry.link, hit);
      }
    };
    group.append(hit);
    entry.hit = hit;
    svg.append(group);
    return entry;
  }
  function lineCurve(x1, y1, x2, y2, bend, parallel = 0) {
    const dx = x2 - x1, dy = y2 - y1;
    const length = Math.max(1, Math.hypot(dx, dy));
    const nx = -dy / length, ny = dx / length;
    const px = nx * parallel, py = ny * parallel;
    return `M ${x1 + px} ${y1 + py} C ${x1 + dx * 0.35 + nx * bend + px} ${y1 + dy * 0.35 + ny * bend + py}, ${x1 + dx * 0.65 + nx * bend + px} ${y1 + dy * 0.65 + ny * bend + py}, ${x2 + px} ${y2 + py}`;
  }
  function drawLinks() {
    const svg = state.topic ? $("detail-lines") : $("links");
    if (!svg) return;
    const box = (state.topic ? $("detail") : $("stage")).getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    const list = lineItems();
    let cache = linkCache.get(svg);
    if (!cache) {
      cache = new Map();
      linkCache.set(svg, cache);
    }
    const visible = new Set(list.map((l) => l.id));
    for (const [id, entry] of cache)
      if (!visible.has(id)) {
        entry.group.remove();
        cache.delete(id);
      }
    list.forEach((l, i) => {
      let a, b;
      if (state.topic) {
        a = $("detail").querySelector(`[data-person="${l.from}"] iframe`);
        b = $("detail").querySelector(`[data-person="${l.to}"] iframe`);
      } else {
        a = $("worlds").querySelector(`[data-person="${l.from}"] canvas`);
        b = $("worlds").querySelector(`[data-person="${l.to}"] canvas`);
      }
      if (!a || !b) return;
      const ra = a.getBoundingClientRect(),
        rb = b.getBoundingClientRect();
      const topic = CATALOG.topics.find(t => t.id === l.topic);
      const anchor = (r, id) => {
        if (state.topic) return [r.left - box.left + r.width / 2, r.top - box.top + r.height / 2];
        const offset = topicOffset(topic, person(id));
        const held = state.mode === "universe" && state.skySelection.length === 2 && state.skySelection.includes(id);
        const time = held ? state.skyFreezeTime : state.time;
        const progress = held ? state.skyFreezeProgress : state.progress;
        const angle = Math.sin(time * APP_CONFIG.galaxy.motionSpeed) * APP_CONFIG.galaxy.swayRadians;
        const unit = Math.min(r.width, r.height) * APP_CONFIG.galaxy.radius * APP_CONFIG.galaxy.layoutScale;
        const expansion = 1 + (1 - progress) * 0.35;
        return [r.left - box.left + r.width / 2 + (offset[0] * Math.cos(angle) - offset[1] * Math.sin(angle)) * expansion * unit,
          r.top - box.top + r.height / 2 + (offset[0] * Math.sin(angle) + offset[1] * Math.cos(angle)) * expansion * unit];
      };
      const [x1, y1] = anchor(ra, l.from), [x2, y2] = anchor(rb, l.to);
      let entry = cache.get(l.id);
      if (!entry) {
        entry = createLine(svg, l);
        cache.set(l.id, entry);
      }
      entry.link = l;
      entry.hit.setAttribute(
        "aria-label",
        `${person(l.from).name} and ${person(l.to).name}: ${l.label} in ${CATALOG.topics.find((t) => t.id === l.topic).title}`,
      );
      const bend = (i - (list.length - 1) / 2) * 15;
      for (const path of entry.strokes) {
        path.setAttribute("d", lineCurve(x1, y1, x2, y2, bend, Number(path.dataset.parallel)));
        if (l.type === "reason") path.setAttribute("stroke-dashoffset", String(-state.time * 5));
      }
      entry.hit.setAttribute("d", lineCurve(x1, y1, x2, y2, bend));
    });
    if (state.hoveredLinkId && !visible.has(state.hoveredLinkId)) {
      state.hoveredLinkId = null;
      $("link-tooltip").hidden = true;
    }
    setLineStates();
  }
  let evidenceTrigger;
  function showEvidence(l, trigger = document.activeElement) {
    evidenceTrigger = trigger;
    state.activeLinkId = l.id;
    setLineStates();
    $("link-tooltip").hidden = true;
    $("evidence").hidden = false;
    $("evidence-type").textContent = l.label;
    $("evidence-title").textContent = CATALOG.topics.find((t) => t.id === l.topic).title;
    const members = l.members || [l];
    $("evidence-text").textContent =
      members.map((m, i) => `${i + 1}. ${person(m.from).name}: ${m.a}\n   ${person(m.to).name}: ${m.b}`).join("\n\n") +
      `\n\n${l.evidence}\n\n${l.review}`;
    syncGuide();
    $("close-evidence").focus({preventScroll:true});
    $("inspect").hidden = false;
    $("inspect").onclick = () => route("compare", l.from, l.to, l.topic);
  }

  // 画面刷新：整体星系、证据连线与播放控制使用同一个时间轴。
  function draw() {
    // The opaque introduction covers the sky; do not paint both scenes.
    if (document.getElementById("sky-intro")) return;
    positionSkyWorlds();
    if (!state.topic)
      for (const p of selected()) {
        const c = $("worlds").querySelector(`[data-person="${p.id}"] canvas`);
        if (c) {
          const bounds = c.getBoundingClientRect();
          if (bounds.bottom >= 0 && bounds.top <= innerHeight) galaxy(c, p);
        }
      }
    drawLinks();

  }
  // 页面控件事件。单击一个星系进入个人页；Shift/双选模式才选两人。
  $("preview-collapse").onclick = () => {
    const collapsed = $("topic-preview").classList.toggle("collapsed");
    document.body.classList.toggle("preview-collapsed", collapsed);
    $("preview-collapse").textContent = collapsed ? "Expand" : "Minimise";
    draw();
    $("preview-collapse").setAttribute("aria-expanded", String(!collapsed));
  };
  $("preview-close").onclick = () => {
    cancelPreviewHover();
    state.topicSelected = null;
    state.topicHover = null;
    state.topicCandidates = [];
    syncTopicFocus();
    $("worlds").querySelector(".world")?.focus({preventScroll:true});
  };
  $("preview-item").onchange = () => {
    const active = state.topicHover || state.topicSelected;
    if (active) loadPreviewFrame(active, Number($("preview-item").value));
  };
  $("topic-preview").onpointerdown = () => {
    // 操作候选/播放按钮前锁定，避免焦点离开题目卡片时预览消失。
    if (!state.topicSelected && state.topicHover) {
      state.topicSelected = state.topicHover;
      syncTopicFocus();
    }
  };
  $("topic-preview").onpointerleave = event => {
    // 进入 iframe 时 relatedTarget 可能为空；以整个面板边界判断真正离开。
    const box = $("topic-preview").getBoundingClientRect();
    if (event.clientX >= box.left && event.clientX <= box.right &&
        event.clientY >= box.top && event.clientY <= box.bottom) return;
    if (!state.topicSelected) {
      state.topicHover = null;
      syncTopicFocus();
    }
  };
  $("explore-toggle").onclick = () => {
    $("explore-panel").open = !$("explore-panel").open;
    if ($("explore-panel").open) $("explore-panel").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };
  $("explore-panel").ontoggle = () => $("explore-toggle").setAttribute("aria-expanded", String($("explore-panel").open));
  $("home").onclick = () => route("universe");
  $("back").onclick = () => route(state.mode);
  $("pair-mode").onclick = () => {
    state.pairMode = !state.pairMode;
    $("pair-mode").setAttribute("aria-pressed", String(state.pairMode));
    $("link-note").textContent = state.pairMode
      ? "Pair selection is on. Click two galaxies; click empty sky to return to free exploration."
      : "Click a galaxy to open it; Shift-click two galaxies to reveal connections.";
  };
  $("open-pair").onclick = () => {
    if (state.skySelection.length === 2)
      route("compare", state.skySelection[0], state.skySelection[1]);
  };
  $("clear-pair").onclick = () => {
    state.pairMode = false;
    state.skySelection = [];
    state.skyFreezeTime = null;
    state.skyFreezeProgress = null;
    state.activeLinkId = null;
    state.hoveredLinkId = null;
    render();
  };
  // 仅背景上的短点击退出。图形、连接线、控件与拖动都保留选择。
  const isBlankSky = target => !target.closest(
    ".world, .link-hit, .link-stroke, #sky-controls, button, a, input, select"
  );
  let skyPress = null;
  $("stage").addEventListener("pointerdown", event => {
    skyPress = event.button === 0 && isBlankSky(event.target)
      ? { x: event.clientX, y: event.clientY } : null;
  });
  $("stage").addEventListener("pointercancel", () => skyPress = null);
  $("stage").addEventListener("click", event => {
    const press = skyPress;
    skyPress = null;
    if (state.mode !== "universe" || !press || !isBlankSky(event.target)) return;
    if (Math.hypot(event.clientX - press.x, event.clientY - press.y) > 8) return;
    if (state.skySelection.length || state.pairMode) $("clear-pair").click();
  });
  $("compare").onclick = () => {
    const a = $("person-a").value,
      b = $("person-b").value;
    if (a === b) {
      $("link-note").textContent = "Choose two different profiles.";
      return;
    }
    route("compare", a, b, state.topic);
  };
  $("self").onchange = () => {
    state.view = $("self").value;
    render();
  };
  $("domain").onchange = () => {
    state.domain = $("domain").value;
    render();
  };
  $("legend").onchange = () => render();
  $("reset-filters").onclick = () => {
    state.view = "all";
    state.domain = "all";
    $("self").value = "all";
    $("domain").value = "all";
    $("legend").querySelectorAll("input").forEach(input => input.checked = true);
    render();
  };
  // 只有用户主动点击才扩大范围；保留已选两人及冻结状态。
  $("explore-connections").onclick = () => {
    state.view = "all";
    state.domain = "all";
    state.topic = null;
    $("self").value = "all";
    $("domain").value = "all";
    $("legend").querySelectorAll("input").forEach(input => input.checked = true);
    route(state.mode, state.a, state.b);
    render();
  };

  // 单题 iframe 收到同一播放时间；每个兴趣保留自己的参数记录。
  function broadcast() {
    for (const f of document.querySelectorAll("iframe[data-visual]"))
      f.contentWindow?.postMessage(
        {
          type: "profiled-control",
          time: state.time,
          progress: state.progress,
          paused: state.paused,
        },
        "*",
      );
  }
  $("close-evidence").onclick = () => {
    $("evidence").hidden = true;
    state.activeLinkId = null;
    syncGuide();
    setLineStates();
    if (evidenceTrigger?.isConnected) evidenceTrigger.focus({preventScroll:true});
  };
  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || event.repeat || event.defaultPrevented) return;
    if (!$("evidence").hidden) { $("close-evidence").click(); return; }
    cancelPreviewHover();
    if (state.mode === "profile" && (state.topicHover || state.topicSelected)) {
      $("preview-close").click();
      return;
    }
    if (Experience.dismiss()) return;
    if (state.mode === "universe" && state.skySelection.length)
      $("clear-pair").click();
  });
  window.addEventListener("message", (event) => {
    if (event.data?.type === "profiled-close-preview" &&
        event.source === $("preview-frame").querySelector("iframe")?.contentWindow) {
      $("preview-close").click();
      $("worlds").querySelector(".world")?.focus({preventScroll:true});
      return;
    }
    const frame = [...document.querySelectorAll("iframe[data-visual]")].find(
      (f) => f.contentWindow === event.source,
    );
    if (!frame) return;
    if (event.data?.type === "profiled-ready") broadcast();
  });
  window.addEventListener("hashchange", readRoute);
  window.addEventListener("resize", draw);
  let scrollQueued = false;
  window.addEventListener("scroll", () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => { scrollQueued = false; draw(); });
  }, { passive: true });
  // 按帧推进共享时间；约每 70 ms 重绘一次首页，避免无谓的连续采样。
  let last = null,
    paint = 0;
  function frame(now) {
    if (!document.hidden) {
      const dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000);
      if (!state.paused && !(state.mode === "profile" && (state.topicHover || state.topicSelected))) {
        state.time += dt;
        // 自动往返：0 → 1 → 0；平滑端点避免 formation 换向时跳动。
        const phase = state.time / APP_CONFIG.galaxy.formationSeconds;
        state.progress = (1 - Math.cos(Math.PI * phase)) / 2;
      }
      // 预览独立播放时，大画像已经定格；只在选择变化时由 syncTopicFocus 重画。
      const frozenPortrait = state.mode === "profile" && (state.topicHover || state.topicSelected);
      if (!frozenPortrait && now - paint > 70) {
        draw();
        paint = now;
      }
    }
    last = now;
    requestAnimationFrame(frame);
  }
  // Opening scene reuses the exact portrait renderer, not decorative substitutes.
  window.ProfiledScene = {
    draw(canvas, id, topic = null) {
      // Replay must not inherit an unrelated page filter or selected pair.
      const saved = { mode: state.mode, view: state.view, domain: state.domain,
        skySelection: state.skySelection, topicHover: state.topicHover, topicSelected: state.topicSelected };
      Object.assign(state, { mode: topic ? "profile" : "universe", view: "all",
        domain: "all", skySelection: [], topicHover: topic, topicSelected: null });
      try { galaxy(canvas, person(id)); } finally { Object.assign(state, saved); }
    }
  };
  readRoute();
  requestAnimationFrame(frame);
})();
