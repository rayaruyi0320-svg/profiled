// 【参数编辑入口】
// 第 5 题｜选项选择对应路径；point 决定路径形状，draw 负责线宽、透明度与动画。
// 55 根/选项、109 的采样分母、j/55 的进度是一组数量约定，调整数量时需一起检查。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 第五题：两个 self 同时显示。每个 self 110 根细丝，每项55根。
// 共享同一几何模板，奇偶细丝位置仅用于双色显示，不编码回答差异。
window.Q5Field = {
  cubic(t, a, b, c, d) {
    const u = 1 - t;
    return [
      u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
      u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
    ];
  },
  point(t, s, kind, time = 0) {
    if (!["listen", "advice"].includes(kind))
      return Q5Atlas.point(
        kind === "other" ? "listen" : kind,
        kind === "other" ? t * 0.5 : t,
        s,
        time,
      );
    let p;
    // 两种线迹共用来路和转折区域，随后分别回旋或延伸。
    // 缩短公共来路，让选项独有的回旋/伸展占路径的 75%。
    if (t < 0.25)
      p = this.cubic(t / 0.25, [-1.05, 0.3], [-0.78, -0.6], [0.4, -0.72], [0.43, -0.12]);
    else if (kind === "listen")
      p = this.cubic(
        (t - 0.25) / 0.75,
        [0.43, -0.12],
        [0.48, 0.61],
        [-0.74, 0.64],
        [-0.4, 0.01],
      );
    else
      p = this.cubic(
        (t - 0.25) / 0.75,
        [0.43, -0.12],
        [0.45, 0.16],
        [0.86, 0.38],
        [1.16, -0.4],
      );
    const e = Math.sin(Math.PI * t),
      phase = s * 8;
    // 共享的空间扭转、散布与微动不读取回答；每个选项使用同样的种子。
    const width = 0.21 * e;
    const z = width * s * Math.sin(t * 8 + 0.6);
    p[0] +=
      width * s * Math.cos(t * 6.5) +
      0.018 * e * Math.sin(t * 17 + phase + time * 0.23) +
      z * 0.3;
    p[1] +=
      width * s * Math.sin(t * 6.5) +
      0.026 * e * Math.sin(t * 12 + phase + time * 0.23) -
      z * 0.5;
    return p;
  },
  draw(c, w, h, { self = "all", focus = "all", time = 0 } = {}) {
    c.clearRect(0, 0, w, h);
    const scale = Math.min(w * 0.37, h * 0.62);
    const selves = Q5_DATA.selves;
    c.lineWidth = 0.5;
    for (const kind of Q5_ATLAS_OPTIONS.map((o) => o[0]))
      for (let j = 0; j < 55; j++)
        for (let lane = 0; lane < 2; lane++) {
          const identity = selves[lane];
          if (window.SelfViews && !SelfViews.allows(identity.id)) continue;
          if (!identity.answers.includes(kind)) continue;
          // 两种身份交替占据相邻细丝槽位；共用中心、轮廓和运动时间。
          const s = -1 + (2 * (j * 2 + lane)) / 109;
          const dim =
            (focus === "all" || focus === kind ? 1 : 0.065) *
            (self === "all" || self === identity.id ? 1 : 0.1);
          c.strokeStyle = identity.color;
          c.fillStyle = identity.color;
          c.globalAlpha = (0.21 + 0.11 * Math.sin(j * 2.399) ** 2) * dim;
          c.beginPath();
          for (let k = 0; k <= 180; k++) {
            const p = this.point(k / 180, s, kind, time),
              x = w * 0.48 + p[0] * scale,
              y = h * 0.51 + p[1] * scale;
            k ? c.lineTo(x, y) : c.moveTo(x, y);
          }
          c.stroke();
          if (j % 11 === 0) {
            const t = (j / 55 + time * 0.025) % 1,
              p = this.point(t, s, kind, time);
            c.globalAlpha = 0.64 * dim;
            c.beginPath();
            c.arc(w * 0.48 + p[0] * scale, h * 0.51 + p[1] * scale, 0.65, 0, Math.PI * 2);
            c.fill();
          }
        }
    c.globalAlpha = 1;
  },
};
