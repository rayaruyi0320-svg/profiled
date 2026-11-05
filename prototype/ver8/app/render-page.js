// 单题画布控制器。每个 iframe 用自己的 canvas 保留单题动画与参数报告。
// 真正的回答→视觉规则在 shared/；本文件只接收首页的播放/暂停/时间信息。
(() => {
  const query = new URLSearchParams(location.search),
    person = CATALOG.people.find((p) => p.id === query.get("person"));
  const topic = person?.topics.find((t) => t.id === query.get("topic"));
  const canvas = document.getElementById("art"),
    view = query.get("view") || "all",
    item = Number(query.get("item") || 0);
  const status = document.getElementById("art-status");
  if (!topic?.data || (topic.id === "q7" && !topic.data.interests[item])) {
    status.textContent = "No visual is available for this response.";
    return;
  }
  const duration = APP_CONFIG.galaxy.formationSeconds;
  let time = 0,
    progress = 0,
    paused = matchMedia("(prefers-reduced-motion: reduce)").matches,
    last = null,
    paint = 0;
  const transition = ["q6", "q21", "q22", "q42"].includes(topic?.id);
  // 浮动预览统一只提供播放/暂停；完整题页保留形成进度与重播。
  const preview = query.get("preview") === "1";
  document.getElementById("replay").hidden = !transition || preview;
  document.getElementById("scrub").hidden = !transition || preview;
  document.getElementById("note").textContent =
    view !== "all" && Number(topic?.id.slice(1)) >= 7
      ? "Context · not assigned to this self"
      : topic?.id === "q7"
        ? "Motion follows assigned reasons only"
        : "";
  // 兴趣只有已确认的 motionCycle 规则才产生动态，不用无效按钮暗示它能播放。
  const staticInterest = topic?.id === "q7" &&
    !Q7MeaningArt.params(topic.data.interests[item]).motionCycle;
  document.getElementById("motion").hidden = staticInterest;
  if (staticInterest) {
    paused = true;
    document.getElementById("note").textContent = "Static mapping · no motion rule assigned to this interest";
  }
  document.body.classList.add("controls-ready");
  function draw() {
    if (!topic?.data) return;
    const box = canvas.getBoundingClientRect(),
      d = Math.min(devicePixelRatio || 1, 2);
    // 只有尺寸真正变化时才重建像素缓冲区，避免每帧清空画布和触发尺寸反馈。
    const width = Math.round(box.width * d), height = Math.round(box.height * d);
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;
    const c = canvas.getContext("2d");
    c.setTransform(d, 0, 0, d, 0, 0);
    const cycle = (time / duration) % 2;
    const drawingTime = (cycle <= 1 ? cycle : 2 - cycle) * duration;
    VisualBridge.draw(canvas, topic, { view, time: drawingTime, progress, item });
    document.getElementById("scrub").value = Math.round(progress * 100);
    document.getElementById("motion").textContent = paused ? "Play" : "Pause";
  }
  document.getElementById("motion").onclick = () => {
    paused = !paused;
    draw();
  };
  document.getElementById("replay").onclick = () => {
    progress = 0;
    time = 0;
    paused = false;
    draw();
  };
  document.getElementById("scrub").oninput = (e) => {
    progress = +e.target.value / 100;
    paused = true;
    draw();
  };
  window.addEventListener("keydown", event => {
    if (preview && event.key === "Escape") parent.postMessage({type:"profiled-close-preview"}, "*");
  });
  window.addEventListener("message", (e) => {
    if (e.source !== parent || e.data?.type !== "profiled-control") return;
    ({ time, progress, paused } = e.data);
    if (staticInterest) paused = true;
    draw();
  });
  new ResizeObserver(draw).observe(canvas);
  let visible = true;
  new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(canvas);
  function frame(now) {
    if (!paused && !document.hidden && visible) {
      if (last !== null) {
        time += Math.min(0.25, (now - last) / 1000);
        if (transition) progress = (1 - Math.cos(Math.PI * time / duration)) / 2;
      }
      if (now - paint > 55) {
        draw();
        paint = now;
      }
    }
    last = now;
    requestAnimationFrame(frame);
  }
  if (topic?.data) {
    draw();
    status.hidden = true;
    parent.postMessage(
      {
        type: "profiled-metrics",
        person: person.id,
        parameters: VisualBridge.parameters(topic),
      },
      "*",
    );
    parent.postMessage({ type: "profiled-ready" }, "*");
    requestAnimationFrame(frame);
  }
})();
