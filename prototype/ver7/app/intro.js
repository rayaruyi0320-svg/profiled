/* First-arrival sky narrative. No timers advance the story.
 * Real portraits, one original response, one exact shared-choice record.
 * Edit copy here; data and mapping stay in their existing sources.
 */
(() => {
  const key = "profiled-v7-sky-intro";
  const a = CATALOG.people.find(p => p.id === "p05");
  const b = CATALOG.people.find(p => p.id === "p12");
  const shared = ConnectionRules.derive(a, b).find(l => l.type === "choice");
  let panel, step = 0, running = false, frame = 0, lastPaint = 0, previousFocus;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const node = (tag, text, id) => {
    const n = document.createElement(tag);
    if (text) n.textContent = text;
    if (id) n.id = id;
    return n;
  };
  function close() {
    running = false;
    cancelAnimationFrame(frame);
    panel?.remove();
    document.querySelector("main").inert = false;
    document.querySelector("header").inert = false;
    try { localStorage.setItem(key, "seen"); } catch (_) {}
    previousFocus?.focus({ preventScroll: true });
  }
  function paint(now = performance.now()) {
    if (!running) return;
    if (document.hidden || now - lastPaint < 55) {
      if (!reduced) frame = requestAnimationFrame(paint);
      return;
    }
    lastPaint = now;
    ProfiledScene.draw(document.getElementById("intro-a"), a.id, step === 1 ? "q7" : step === 2 ? shared?.topic : null);
    if (step === 2) ProfiledScene.draw(document.getElementById("intro-b"), b.id, shared?.topic);
    if (!reduced) frame = requestAnimationFrame(paint);
  }
  function show() {
    panel.dataset.step = step;
    const titles = ["Every galaxy begins with a person.",
      "Move closer. There is a story inside.",
      "Two worlds. A place to begin talking."];
    document.getElementById("intro-title").textContent = titles[step];
    document.getElementById("intro-evidence").textContent = step === 1
      ? "An original response · “" + (a.answers.Q16_1 || "") + "”"
      : step === 2 && shared ? "Shared choice · " + shared.a : "";
    document.getElementById("intro-caption").textContent = [
      "These portraits take shape from people's own answers.",
      "Each part has an original response you can explore.",
      "A connection marks a shared answer—not the whole relationship."
    ][step];
    document.getElementById("intro-next").textContent = step === 2 ? "Enter the sky" : step === 0 ? "Move closer" : "Find common ground";
    if (reduced) { lastPaint = 0; paint(); }
  }
  async function open() {
    if (running) return;
    Experience.dismiss();
    previousFocus = document.activeElement;
    step = 0; running = true;
    panel = node("section", "", "sky-intro");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "intro-title");
    const top = node("div"); top.className = "intro-top";
    const skip = node("button", "Skip intro"); skip.onclick = close;
    top.append(node("span", "PROFILEd"), skip);
    const cosmos = node("div"); cosmos.className = "intro-cosmos";
    cosmos.append(node("div", "", "intro-link"));
    for (const [p, id, wrapper] of [[a,"intro-a","intro-first"],[b,"intro-b","intro-second"]]) {
      const group = node("div", "", wrapper); group.className = "intro-person";
      const canvas = node("canvas", "", id); canvas.setAttribute("aria-label", "Example personal galaxy");
      // The introduction explains the concept without naming participants.
      group.append(canvas); cosmos.append(group);
    }
    const copy = node("div"); copy.className = "intro-narration";
    const next = node("button", "Preparing portraits…", "intro-next"); next.disabled = true;
    next.onclick = () => { if (step === 2) close(); else { step++; show(); } };
    copy.append(node("h1", "A sky of personal stories", "intro-title"),
      node("p", "", "intro-evidence"), node("p", "", "intro-caption"), next);
    panel.append(top, cosmos, copy); document.body.append(panel);
    document.querySelector("main").inert = true;
    document.querySelector("header").inert = true;
    skip.focus();
    panel.onkeydown = e => {
      if (e.key === "Escape") { e.stopPropagation(); close(); }
      if (e.key === "Tab") {
        const buttons = [...panel.querySelectorAll("button:not(:disabled)")];
        if (e.shiftKey && document.activeElement === buttons[0]) { e.preventDefault(); buttons.at(-1).focus(); }
        else if (!e.shiftKey && document.activeElement === buttons.at(-1)) { e.preventDefault(); buttons[0].focus(); }
      }
    };
    try {
      await Promise.all([GalaxyCache.ensure(a.id), GalaxyCache.ensure(b.id)]);
      if (!running) return;
      next.disabled = false; show(); paint();
    } catch (_) {
      if (!running) return;
      document.getElementById("intro-caption").textContent = "The portraits could not load. You can skip this introduction and explore the sky.";
    }
  }
  // Replay is explicit; never re-open because of hover or a route update.
  const restart = document.getElementById("guide-restart");
  restart.textContent = "About this sky";
  restart.onclick = open;
  let seen = false;
  try { seen = !!localStorage.getItem(key); } catch (_) {}
  if (!seen && (!location.hash || location.hash.startsWith("#universe"))) open();
})();
