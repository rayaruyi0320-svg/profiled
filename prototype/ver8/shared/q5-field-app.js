(() => {
  const canvas = document.getElementById("art"),
    c = canvas.getContext("2d");
  let self = "all",
    focus = "all",
    time = 0,
    last = 0,
    paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function draw() {
    const w = canvas.clientWidth,
      h = canvas.clientHeight,
      d = Math.min(devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(w * d) || canvas.height !== Math.round(h * d)) {
      canvas.width = Math.round(w * d);
      canvas.height = Math.round(h * d);
    }
    c.setTransform(d, 0, 0, d, 0, 0);
    Q5Field.draw(c, w, h, { self, focus, time });
  }
  for (const kind of [...new Set(Q5_DATA.selves.flatMap((s) => s.answers))]) {
    const b = document.createElement("button");
    b.dataset.focus = kind;
    b.textContent = Q5_ATLAS_OPTIONS.find((o) => o[0] === kind)[2];
    document.getElementById("contributions").append(b);
  }
  for (const b of document.querySelectorAll("[data-self]"))
    b.addEventListener("click", () => {
      self = b.dataset.self;
      for (const x of document.querySelectorAll("[data-self]"))
        x.setAttribute("aria-pressed", String(x === b));
      draw();
    });
  for (const b of document.querySelectorAll("[data-focus]"))
    b.addEventListener("click", () => {
      focus = b.dataset.focus;
      for (const x of document.querySelectorAll("[data-focus]"))
        x.setAttribute("aria-pressed", String(x === b));
      draw();
    });
  const motion = document.getElementById("motion");
  function label() {
    motion.textContent = paused ? "Resume motion" : "Pause motion";
    motion.setAttribute("aria-pressed", String(!paused));
  }
  motion.addEventListener("click", () => {
    paused = !paused;
    label();
  });
  label();
  new ResizeObserver(draw).observe(canvas);
  draw();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!paused && !document.hidden) {
      time += dt;
      draw();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
