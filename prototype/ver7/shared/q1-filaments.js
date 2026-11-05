// 【参数编辑入口】
// 第 1 题｜改 lengthRatio 的 0.10（最短比例）和 0.90（增量）。回答 0–100 只影响长度。
// 造型常量：strands 的 125 是丝线数；draw 内 lineWidth 是线宽；time 是动画时间。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 第一题：回答只映射到纵向伸展长度。其余造型设置固定。
window.Q1Mapping = {
  lengthRatio: (value) =>
    value === null || !Number.isFinite(value)
      ? null
      : 0.10 + (0.90 * Math.max(0, Math.min(100, value))) / 100,
};
window.FilamentPortrait = class {
  constructor(canvas, selves) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.selves = selves;
    this.focus = null;
    this.time = 0;
    this.last = 0;
    this.paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.visible = true;
    let seed = 71;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    // 每束都用同一组丝线配置，避免随机差异被误认为问卷差异。
    this.strands = Array.from({ length: 125 }, () => ({
      s: rand() * 2 - 1,
      phase: rand() * Math.PI * 2,
      light: rand(),
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
  // t：沿丝束的位置；长度数据只进入 localX，横向宽度、波动不读数值。
  point(t, strand, self) {
    const unit = Math.min(this.w * 0.38, this.h * 0.36),
      length = unit * Q1Mapping.lengthRatio(self.value),
      envelope = Math.sin(Math.PI * t);
    const localX = 10 + length * t;
    const localY =
      unit * 0.22 * envelope * strand.s +
      unit * 0.17 * Math.sin(Math.PI * t) * Math.sin(t * 2.8 + 0.3) +
      unit * 0.025 * envelope * Math.sin(t * 13 + strand.phase + this.time * 0.25);
    const a = (self.angle * Math.PI) / 180;
    return [
      this.w / 2 + localX * Math.cos(a) - localY * Math.sin(a),
      this.h * 0.54 + localX * Math.sin(a) + localY * Math.cos(a),
    ];
  }
  draw() {
    if (!this.w || !this.h) return;
    const c = this.ctx;
    c.clearRect(0, 0, this.w, this.h);
    this.selves.forEach((self) => {
      if (window.SelfViews && !SelfViews.allows(self.id)) return;
      if (Q1Mapping.lengthRatio(self.value) === null) return;
      const focusAlpha = this.focus && this.focus !== self.id ? 0.1 : 1;
      c.strokeStyle = self.color;
      c.fillStyle = self.color;
      for (const strand of this.strands) {
        c.lineWidth = 0.45;
        c.globalAlpha = (0.13 + strand.light * 0.18) * focusAlpha;
        c.beginPath();
        for (let k = 0; k <= 92; k++) {
          const p = this.point(k / 92, strand, self);
          k ? c.lineTo(...p) : c.moveTo(...p);
        }
        c.stroke();
        // 少量亮点沿固定路径缓慢移动，速度不读取回答值。
        if (strand.light > 0.76) {
          const t = (strand.light + this.time * 0.028) % 1,
            p = this.point(t, strand, self);
          c.globalAlpha = 0.65 * focusAlpha;
          c.beginPath();
          c.arc(p[0], p[1], 0.65, 0, Math.PI * 2);
          c.fill();
        }
      }
    });
    // 四束共享的中心，固定尺寸，不增加一条数据映射。
    c.fillStyle = "#e3e8dc";
    c.globalAlpha = 0.55;
    c.beginPath();
    c.arc(this.w / 2, this.h * 0.54, 1.6, 0, Math.PI * 2);
    c.fill();
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
