// 【参数编辑入口】
// 整体星系｜anchors 是四领域位置，angles 是领域旋转弧度；draw 中变换是展示布局。
// 注意：connections.js 的整体 anchor 与这里共用投影约定，改投影时需同步检查线端。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// Overview samples inherit the accepted topic geometry and color; all transforms below are fixed layout.
window.ProfileCluster = {
  domains: [
    "In Groups",
    "With People Close to Me",
    "When I’m Stretched",
    "Making & Enjoying",
  ],
  anchors: [
    [-0.11, -0.09],
    [0.12, -0.065],
    [0.065, 0.11],
    [-0.08, 0.085],
  ],
  angles: [-0.42, 0.35, -0.65, 0.18],
  draw(ctx, w, h, time = 0, focus = -1, progress = 1) {
    ctx.clearRect(0, 0, w, h);
    const scale = Math.min(w * 0.76, h * 0.91),
      yaw = 0.32 * Math.sin(time * 0.32),
      tilt = 0.2;
    const c = Math.cos(yaw),
      s = Math.sin(yaw),
      v = Math.max(0, Math.min(1, progress)),
      ease = v * v * (3 - 2 * v),
      apart = 1 - ease;
    for (const p of PROFILE_CLUSTER_POINTS) {
      const [u, v, z, r, g, b, alpha, d, q] = p,
        a = this.angles[d],
        anchor = this.anchors[d],
        split = [1, 2, 3].includes(q) ? -0.045 : 0.045;
      const x =
        (u * Math.cos(a) - v * Math.sin(a)) * 0.83 * (1 - 0.4 * apart) +
        anchor[0] * (1 + 2.2 * apart) +
        split;
      const y =
        (u * Math.sin(a) + v * Math.cos(a)) * 0.67 * (1 - 0.4 * apart) +
        anchor[1] * (1 + 2.2 * apart);
      const depth = z + 0.18 * Math.sin(d * 1.5) + u * 0.13;
      const px = x * c + depth * s,
        pz = depth * c - x * s,
        py = y * Math.cos(tilt) - pz * Math.sin(tilt),
        perspective = 1 / (1 + pz * 0.24);
      const xx = w * 0.5 + px * scale * perspective,
        yy = h * 0.5 + py * scale * perspective;
      const contextOpacity =
        window.PROFILE_SELF_VIEW && window.PROFILE_SELF_VIEW !== "all" && q === 6
          ? (window.PROFILE_CONTEXT_OPACITY ?? 0.28)
          : 1;
      const opacity =
        contextOpacity *
        (0.35 + (alpha / 255) * 0.65) *
        (focus < 0 || d === focus ? 1 : 0.09);
      ctx.fillStyle = `rgba(${r},${g},${b},${opacity.toFixed(3)})`;
      const radius = 1.0 + (0.25 + pz) * 0.6;
      ctx.fillRect(xx, yy, radius, radius);
    }
  },
};
(() => {
  if (typeof document === "undefined") return;
  const $ = (id) => document.getElementById(id),
    canvas = $("cluster-art");
  if (!canvas) return;
  const ctx = canvas.getContext("2d"),
    reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let t = 0,
    progress = reduced ? 1 : 0,
    last = null,
    lastPaint = -Infinity,
    paused = reduced,
    focus = -1;
  const duration = 10,
    toggle = $("cluster-motion"),
    scrub = $("cluster-scrub");
  function label() {
    toggle.textContent = paused ? "Play" : "Pause";
    toggle.setAttribute("aria-pressed", String(!paused));
    scrub.value = String(Math.round(progress * 100));
    $("cluster-percent").textContent = Math.round(progress * 100) + "%";
    $("cluster-stage").textContent =
      progress < 0.15
        ? "Four domains · separate contributions"
        : progress < 1
          ? "Coming together · one shared profile"
          : "One profile · four domain contributions";
  }
  function draw() {
    const box = canvas.getBoundingClientRect(),
      d = Math.min(devicePixelRatio || 1, 2);
    if (!box.width || !box.height) return;
    if (
      canvas.width !== Math.round(box.width * d) ||
      canvas.height !== Math.round(box.height * d)
    ) {
      canvas.width = Math.round(box.width * d);
      canvas.height = Math.round(box.height * d);
    }
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ProfileCluster.draw(ctx, box.width, box.height, t, focus, progress);
    label();
  }
  toggle.onclick = () => {
    paused = !paused;
    last = null;
    draw();
  };
  $("cluster-replay").onclick = () => {
    progress = 0;
    t = 0;
    paused = false;
    last = null;
    draw();
  };
  scrub.oninput = () => {
    progress = Number(scrub.value) / 100;
    paused = true;
    last = null;
    draw();
  };
  for (const button of document.querySelectorAll("[data-cluster-domain]")) {
    button.onmouseenter = () => {
      focus = Number(button.dataset.clusterDomain);
      draw();
    };
    button.onmouseleave = () => {
      focus = -1;
      draw();
    };
    button.onfocus = () => {
      focus = Number(button.dataset.clusterDomain);
      draw();
    };
    button.onblur = () => {
      focus = -1;
      draw();
    };
  }
  new ResizeObserver(draw).observe(canvas);
  function frame(now) {
    const active = !document.hidden && !$("macro").hidden;
    // Accumulate every animation-frame interval; throttle painting only.
    if (active) {
      const dt = last === null ? 0 : Math.max(0, (now - last) / 1000);
      if (!paused) {
        t += dt;
        progress = Math.min(1, progress + dt / duration);
      }
      last = now;
      if (now - lastPaint >= 45) {
        draw();
        lastPaint = now;
      }
    } else last = null;
    requestAnimationFrame(frame);
  }
  document.addEventListener("visibilitychange", () => {
    last = null;
  });
  requestAnimationFrame(frame);
  draw();
})();
