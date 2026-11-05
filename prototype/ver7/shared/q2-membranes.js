// 【参数编辑入口】
// 第 2 题｜改 openingDegrees 的 8（最小角度）与 164（角度增量），单位为度。
// 回答 0–100 只影响展开角度；膜片大小与纹理是固定造型。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 第二题：数值只决定两半薄膜绕中央折线的展开角度。
window.Q2Mapping = {
  openingDegrees: (value) =>
    Number.isFinite(value) ? 8 + (164 * Math.max(0, Math.min(100, value))) / 100 : null,
};
window.MembranePortrait = class {
  constructor(canvas, selves) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.selves = selves;
    this.focus = null;
    this.time = 0;
    this.last = 0;
    this.visible = true;
    this.paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
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
  // t 沿中央折线，v ∈ [-1,1] 横跨两片相同的膜面。
  // 原始膜面长度、宽度和纹理固定。投影变宽是展开的几何结果，不是第二条数据映射。
  point(t, v, self) {
    const unit = Math.min(this.w * 0.34, this.h * 0.34),
      half = (Q2Mapping.openingDegrees(self.value) * Math.PI) / 360;
    const width = unit * 0.44 * Math.pow(Math.sin(Math.PI * t), 0.8);
    const x = unit * (0.08 + 0.94 * t);
    const y = width * v * Math.sin(half);
    const z =
      width * Math.abs(v) * Math.cos(half) +
      unit * 0.12 * Math.sin(Math.PI * t) +
      unit * 0.015 * Math.sin(t * 19 + v * 8 + this.time * 0.32) * Math.sin(Math.PI * t);
    const a = (self.angle * Math.PI) / 180;
    return [
      this.w / 2 + x * Math.cos(a) - y * Math.sin(a) + z * 0.3,
      this.h * 0.54 + x * Math.sin(a) + y * Math.cos(a) - z * 0.42,
    ];
  }
  line(points, color, alpha, width) {
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
      if (Q2Mapping.openingDegrees(self.value) === null) return;
      const dim = this.focus && this.focus !== self.id ? 0.09 : 1;
      // 半透明膜面由固定网格构成，每一格均使用同样透明度。
      c.fillStyle = self.color;
      c.globalAlpha = 0.017 * dim;
      for (let i = 0; i < 32; i++)
        for (let j = 0; j < 20; j++) {
          const t = i / 32,
            v = -1 + j / 10,
            pts = [
              this.point(t, v, self),
              this.point(t + 1 / 32, v, self),
              this.point(t + 1 / 32, v + 0.1, self),
              this.point(t, v + 0.1, self),
            ];
          c.beginPath();
          pts.forEach((p, k) => (k ? c.lineTo(...p) : c.moveTo(...p)));
          c.closePath();
          c.fill();
        }
      // 纵向纤维与横向织纹：数量、线宽、透明度不由回答控制。
      for (let j = 0; j <= 100; j++) {
        const v = -1 + j / 50,
          pts = [];
        for (let i = 0; i <= 100; i++) pts.push(this.point(i / 100, v, self));
        this.line(pts, self.color, (0.12 + 0.07 * Math.cos(j * 0.6) ** 2) * dim, 0.42);
      }
      for (let i = 1; i < 46; i++) {
        const pts = [];
        for (let j = 0; j <= 70; j++) pts.push(this.point(i / 46, -1 + j / 35, self));
        this.line(pts, self.color, 0.085 * dim, 0.38);
      }
      for (const v of [-1, 0, 1]) {
        const pts = [];
        for (let i = 0; i <= 100; i++) pts.push(this.point(i / 100, v, self));
        this.line(pts, self.color, 0.5 * dim, 0.65);
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
