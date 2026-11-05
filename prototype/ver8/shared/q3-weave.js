// 【参数编辑入口】
// 第 3 题（survey Q5）｜connectionCount 的 120 是最多跨接线数，指数 1.7 拉开低高值疏密。
// 若改上限，constructor 中候选 connections 的 length: 120 也需相同。其余角度/线迹不读取回答。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// Q5：回答只控制跨接线数量。固定候选连接保证可比较、可复现。
window.Q3Mapping = {
  connectionCount: (v) =>
    Number.isFinite(v) ? Math.round(120 * (Math.max(0, Math.min(100, v)) / 100) ** 1.7) : null,
};
window.WovenPortrait = class {
  constructor(canvas, selves) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.selves = selves;
    this.focus = null;
    this.time = 0;
    this.last = 0;
    this.visible = true;
    this.paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seed = 530;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    this.connections = Array.from({ length: 120 }, () => ({
      a: 0.06 + random() * 0.76,
      b: 0.18 + random() * 0.76,
      bend: (random() - 0.5) * 0.8,
    }));
    new ResizeObserver(() => this.resize()).observe(canvas);
    new IntersectionObserver((e) => {
      this.visible = e[0].isIntersecting;
    }).observe(canvas);
    this.resize();
    this.frame = this.frame.bind(this);
    requestAnimationFrame(this.frame);
  }
  resize() {
    this.w = this.canvas.clientWidth;
    this.h = this.canvas.clientHeight;
    const d = Math.min(devicePixelRatio || 1, 2);
    this.canvas.width = this.w * d;
    this.canvas.height = this.h * d;
    this.ctx.setTransform(d, 0, 0, d, 0, 0);
    this.draw();
  }
  // 两条流动的线迹带，没有封闭边界或中心放射点。几何不读取回答。
  point(t, side, strand, self) {
    const u = Math.min(this.w * 0.7, this.h * 0.95),
      n = strand / 17;
    const x = (t - 0.5) * u;
    const y =
      u *
      (side * (0.052 + 0.022 * Math.sin(t * 5 + 0.4)) +
        0.042 * Math.sin(t * 6.2 + 0.5) +
        (n - 0.5) * 0.027 +
        0.007 * Math.sin(t * 16 + n * 8 + this.time * 0.23));
    // 三组只作垂直平移，基础方向与形状完全相同。
    const index = this.selves.findIndex((s) => s.id === self.id);
    return [this.w * 0.5 + x, this.h * (0.28 + index * 0.22) + y];
  }
  path(points, color, alpha, width) {
    const c = this.ctx;
    c.strokeStyle = color;
    c.globalAlpha = alpha;
    c.lineWidth = width;
    c.beginPath();
    points.forEach((p, i) => (i ? c.lineTo(...p) : c.moveTo(...p)));
    c.stroke();
  }
  draw() {
    if (!this.w || !this.h) return;
    const c = this.ctx;
    c.clearRect(0, 0, this.w, this.h);
    this.selves.forEach((self) => {
      if (window.SelfViews && !SelfViews.allows(self.id)) return;
      const count = Q3Mapping.connectionCount(self.value);
      if (count === null) return;
      const dim = this.focus && this.focus !== self.id ? 0.07 : 1;
      for (const side of [-1, 1])
        for (let j = 0; j < 18; j++) {
          const pts = [];
          const start = (j % 5) * 0.008,
            end = 1 - (j % 7) * 0.009;
          for (let k = 0; k <= 110; k++)
            pts.push(this.point(start + ((end - start) * k) / 110, side, j, self));
          this.path(pts, self.color, (0.045 + 0.02 * Math.sin(j * 3) ** 2) * dim, 0.42);
        }
      // 唯一数据入口：从共同的固定候选集合中取前 count 条。
      for (let j = 0; j < count; j++) {
        const link = this.connections[j],
          a = this.point(link.a, -1, 8, self),
          b = this.point(link.b, 1, 8, self);
        const dx = b[0] - a[0],
          dy = b[1] - a[1],
          bend = Math.min(this.w, this.h) * link.bend * 0.1;
        c.strokeStyle = self.color;
        // 固定提高跨接线可见度；回答仍然只控制 count，不控制线宽/亮度。
        c.globalAlpha = 0.62 * dim;
        c.lineWidth = 0.9;
        c.beginPath();
        c.moveTo(...a);
        c.bezierCurveTo(
          a[0] + dx * 0.42,
          a[1] + dy * 0.12 + bend,
          b[0] - dx * 0.42,
          b[1] - dy * 0.12 - bend,
          ...b,
        );
        c.stroke();
      }
      // 固定数量微光，运动、亮度不随回答改变。
      c.fillStyle = self.color;
      for (let j = 0; j < 8; j++) {
        const p = this.point(
          (j / 8 + this.time * 0.014) % 1,
          j % 2 ? 1 : -1,
          j * 2,
          self,
        );
        c.globalAlpha = 0.5 * dim;
        c.beginPath();
        c.arc(...p, 0.65, 0, Math.PI * 2);
        c.fill();
      }
    });
    c.globalAlpha = 1;
  }
  frame(now) {
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    if (!this.paused && this.visible && !document.hidden) {
      this.time += dt;
      this.draw();
    }
    requestAnimationFrame(this.frame);
  }
};
