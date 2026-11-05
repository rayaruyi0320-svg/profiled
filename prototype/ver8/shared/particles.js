// 【参数编辑入口】
// 第 4 题｜这里负责画微粒。回答到参数的规则在 mapping.js。
// 调整质感可找粒子数量、半径和 draw；不要在这里额外用回答控制颜色/速度。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 只负责绘图，不读取 CSV、题目或问卷列名。
window.ParticlePortrait = class {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.time = 0;
    this.last = 0;
    this.layers = [];
    this.paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.visible = true;
    let seed = 1429;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    // 固定粒子种子，避免逐帧重采样造成闪烁。
    this.points = Array.from({ length: 4400 }, () => ({
      a: rand() * Math.PI * 2,
      layer: rand(),
      j: rand(),
      z: rand(),
      size: rand(),
    }));
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas);
    this.visibilityObserver = new IntersectionObserver((entries) => {
      this.visible = entries[0].isIntersecting;
    });
    this.visibilityObserver.observe(canvas);
    this.resize();
    this.frame = this.frame.bind(this);
    requestAnimationFrame(this.frame);
  }
  resize() {
    this.w = this.canvas.clientWidth;
    this.h = this.canvas.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    this.canvas.width = this.w * ratio;
    this.canvas.height = this.h * ratio;
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.draw();
  }
  setLayers(layers) {
    this.layers = layers.map((l, i) => {
      const old = this.layers.find((p) => p.perspective === l.perspective);
      return {
        ...l,
        index: i,
        current: this.paused ? l.offset : (old?.current ?? l.offset),
      };
    });
    this.canvas.setAttribute(
      "aria-label",
      layers.map((l) => `${l.label} ${l.value}`).join("；") +
        ". Each response controls contour amplitude; relative displacement represents the difference between responses.",
    );
    this.draw();
  }
  setPaused(value) {
    this.paused = value;
    if (value) this.layers.forEach((l) => (l.current = l.offset));
    this.draw();
  }
  // 核心造型：环带 + 正弦波轮廓 + 扭转 + 微小散布。
  // 共用相同波形与粒子种子；只用每层数值改变径向起伏的幅度。
  project(a, band, j, z, layer) {
    const scale = Math.min(this.w * 0.265, this.h * 0.325),
      t = this.time;
    const contourWave =
      (0.13 * Math.sin(3 * a + 0.7 + t * 0.09) +
        0.09 * Math.cos(5 * a - 1.1) +
        0.045 * Math.sin(9 * a + t * 0.07)) /
      0.265;
    const warp = layer.contourAmplitude * contourWave;
    const radius =
      scale * (0.81 + 0.26 * band + warp + 0.057 * Math.sin(a * 7 + band * 13));
    // 固定扭转减弱，让回答控制的轮廓幅度成为可见的主要差异。
    const angle = a + 0.06 * Math.sin(band * 5 + a * 2) + t * 0.016;
    const x = Math.cos(angle) * radius,
      y = Math.sin(angle) * radius,
      twist = 0.1 * Math.sin(a * 2 + 0.5) + 0.086;
    const xx = x * Math.cos(twist) - y * Math.sin(twist) * 0.38,
      yy = y * Math.cos(twist) + x * Math.sin(twist) * 0.55;
    // 关系参数单独处理：差值只控制横向位移，不改变轮廓或纹理。
    const dataShift = layer.current * scale * 0.82;
    return [
      this.w / 2 + xx + dataShift + (j - 0.5) * scale * 0.052,
      this.h * 0.53 + yy * 0.95 + (z - 0.5) * scale * 0.035,
    ];
  }
  draw() {
    const c = this.ctx;
    if (!this.w || !this.h) return;
    c.clearRect(0, 0, this.w, this.h);
    if (!this.layers.length) return;
    // 两层时叠加All光点；多层时降低透明度，避免数量变成重要程度。
    const exposure = Math.min(1, 2 / this.layers.length);
    this.layers.forEach((layer) => {
      if (window.SelfViews && !SelfViews.allows(layer.perspective)) return;
      c.strokeStyle = layer.color;
      c.lineWidth = 0.55;
      for (let k = 0; k < 25; k++) {
        c.globalAlpha = (0.045 + (k % 4) * 0.012) * exposure;
        c.beginPath();
        for (let s = 0; s <= 180; s++) {
          const p = this.project((s / 180) * Math.PI * 2, k / 24, 0.5, 0.5, layer);
          s ? c.lineTo(...p) : c.moveTo(...p);
        }
        c.stroke();
      }
      this.points.forEach((p) => {
        const q = this.project(p.a, p.layer, p.j, p.z, layer),
          bright = (Math.sin(p.a * 2.1 + p.layer * 5 + this.time * 0.12) + 1) * 0.5;
        c.fillStyle = layer.color;
        c.globalAlpha = (0.15 + 0.57 * bright * p.size) * exposure;
        const size = 0.35 + p.size * 0.85;
        c.fillRect(q[0], q[1], size, size);
        if (p.size > 0.987) {
          c.globalAlpha = 0.055 * exposure;
          c.beginPath();
          c.arc(q[0], q[1], 3.4, 0, Math.PI * 2);
          c.fill();
        }
      });
      c.strokeStyle = layer.color;
      c.globalAlpha = 0.019 * exposure;
      c.lineWidth = 0.6;
      for (let i = 0; i < 30; i++) {
        const a = (i / 30) * Math.PI * 2,
          p = this.project(a, 0.2, 0.5, 0.5, layer),
          q = this.project(a + 1.25, 0.7, 0.5, 0.5, layer);
        c.beginPath();
        c.moveTo(...p);
        c.bezierCurveTo(
          this.w / 2 + (p[0] - this.w / 2) * 0.35,
          this.h * 0.53 - 45,
          this.w / 2 + (q[0] - this.w / 2) * 0.6,
          this.h * 0.53 + 30,
          ...q,
        );
        c.stroke();
      }
    });
    c.globalAlpha = 1;
  }
  frame(now) {
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    if (!this.paused && this.visible && !document.hidden) {
      this.time += dt;
      this.layers.forEach(
        (l) => (l.current += (l.offset - l.current) * (1 - Math.exp(-dt * 5))),
      );
      this.draw();
    }
    requestAnimationFrame(this.frame);
  }
};
