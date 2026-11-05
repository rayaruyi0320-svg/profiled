// 【参数编辑入口】
// 第 5 题｜七种选项的路径总览。point 中按选项 id 分支。
// 参与者答案在 profiles/<姓名>/q5-data.js，改此处会同时影响两人共用的路径。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

window.Q5_ATLAS_OPTIONS = [
  [
    "listen",
    "Listen before responding",
    "Listen before responding",
    "Returning",
    "A returning path makes room to receive and stay with the response.",
    "return",
    "Not a measurement of listening.",
  ],
  [
    "ask",
    "Ask what they need",
    "Ask what they need",
    "Outward and back",
    "A path reaches out and returns, suggesting asking and waiting for a reply.",
    "exchange",
    "Not a one-way output.",
  ],
  [
    "advice",
    "Offer advice",
    "Offer advice",
    "Extending",
    "A path extends outward, suggesting a possible direction.",
    "outward",
    "Does not assess whether advice is correct or accepted.",
  ],
  [
    "practical",
    "Help with something practical",
    "Help with something practical",
    "Bridging",
    "A path bridges two sides, suggesting practical action.",
    "bridge",
    "Does not score the effectiveness of help.",
  ],
  [
    "space",
    "Give them space",
    "Give them space",
    "Leaving room",
    "A path goes around the center, leaving an open space.",
    "bypass",
    "Does not imply indifference.",
  ],
  [
    "depends",
    "It depends on the situation",
    "It depends on the situation",
    "Fixed branching",
    "A shared path branches into two possibilities.",
    "branch",
    "Does not imply indecision or probabilities.",
  ],
  [
    "other",
    "Something else",
    "Something else",
    "Shared neutral path",
    "A continuous strand joins the shared path. The original text supplies its meaning.",
    "unclassified",
    "Free text is not automatically assigned a behavior.",
  ],
];

window.Q5Atlas = {
  cubic(t, a, b, c, d) {
    const u = 1 - t;
    return [
      u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
      u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
    ];
  },
  route(id, t, s) {
    // 归一化坐标；这些控制点是固定设计常量，不是问卷分数。
    const A = [-1.05, 0.3],
      J = [0.35, -0.1];
    if (id === "other") return [-0.44 + 0.8 * t, 0.72 + 0.06 * Math.sin(t * 3)];
    if (id === "practical")
      return this.cubic(t, A, [-0.52, 0.14], [0.46, -0.03], [1.1, 0.1]);
    if (id === "space")
      return this.cubic(t, A, [-1.12, -1.18], [1.0, -1.24], [1.12, -0.04]);
    if (t < 0.5) return this.cubic(t * 2, A, [-0.78, -0.6], [0.34, -0.69], J);
    const u = (t - 0.5) * 2;
    if (id === "listen")
      return this.cubic(u, J, [0.48, 0.63], [-0.74, 0.64], [-0.4, 0.01]);
    if (id === "advice")
      return this.cubic(u, J, [0.47, 0.16], [0.88, 0.35], [1.16, -0.4]);
    if (id === "ask") {
      if (u < 0.5) return this.cubic(u * 2, J, [0.63, -0.39], [1.05, -0.3], [0.85, 0.16]);
      return this.cubic(
        (u - 0.5) * 2,
        [0.85, 0.16],
        [0.7, 0.49],
        [0.3, 0.48],
        [0.1, 0.22],
      );
    }
    if (id === "depends") {
      const side = s < 0 ? -1 : 1;
      return this.cubic(u, J, [0.49, 0.06], [0.6, side * 0.53], [0.96, side * 0.67]);
    }
    throw new Error("Unknown category: " + id);
  },
  point(id, t, s, time = 0) {
    const p = this.route(id, t, s),
      e = Math.sin(Math.PI * t),
      z = 0.18 * e * s * Math.sin(t * 8 + 0.6);
    p[0] +=
      0.18 * e * s * Math.cos(t * 6.5) +
      0.018 * e * Math.sin(t * 17 + s * 8 + time * 0.23) +
      z * 0.3;
    p[1] +=
      0.18 * e * s * Math.sin(t * 6.5) +
      0.026 * e * Math.sin(t * 12 + s * 8 + time * 0.23) -
      z * 0.5;
    return p;
  },
  draw(c, w, h, ids, focus = "all", time = 0) {
    c.clearRect(0, 0, w, h);
    const selected = Q5_ATLAS_OPTIONS.filter((o) => ids.includes(o[0]));
    if (!selected.length) return;
    const scale = Math.min(w * 0.36, h * 0.44),
      count = 210 / selected.length;
    if (!Number.isInteger(count)) throw new Error("Use one, two or seven categories");
    // 同一画布、同一中心；不按类别平移图形。固定总量210根，平均分配。
    for (const o of selected)
      for (let j = 0; j < count; j++) {
        const id = o[0],
          s = -1 + (2 * j) / (count - 1),
          dim = focus === "all" || focus === id ? 1 : 0.06;
        c.strokeStyle = "#e3e8dc";
        c.lineWidth = 0.48;
        c.globalAlpha = (0.22 + 0.12 * Math.sin(j * 2.399) ** 2) * dim;
        c.setLineDash(id === "other" ? [2, 6] : []);
        c.beginPath();
        for (let k = 0; k <= 180; k++) {
          const p = this.point(id, k / 180, s, time),
            x = w * 0.48 + p[0] * scale,
            y = h * 0.55 + p[1] * scale;
          k ? c.lineTo(x, y) : c.moveTo(x, y);
        }
        c.stroke();
      }
    c.setLineDash([]);
    c.globalAlpha = 1;
  },
};
