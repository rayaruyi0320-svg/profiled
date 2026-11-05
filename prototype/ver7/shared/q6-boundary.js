// 【参数编辑入口】
// 第 6 题｜这里组合并绘制选中的模板；模板造型在 q6-templates.js。
// 不要用选项数重新排列已有选项，避免产生额外映射。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 第六题：透明折片。类别选择固定的折片关系；没有数值强弱映射。
window.Q6Art = {
  colors: ["#8bd5db", "#e5b694", "#c2a0f0", "#9bcfa5", "#e6a5b7", "#92b8ee", "#c9cfc9"],
  smooth(t) {
    t = Math.max(0, Math.min(1, t));
    return t * t * (3 - 2 * t);
  },
  // 左右两片共享纸张尺寸。回答决定如何折合、连接或悬置。
  sheet(id, side, u, v) {
    let x = (side === 0 ? -1 : 1) * u,
      y = (v - 0.5) * 1.55,
      z = 0.055 * Math.sin(v * Math.PI) * Math.sin(u * Math.PI);
    if (side === 0) return [x, y, z];
    let angle = 0,
      gap = 0;
    if (id === "yes") angle = -0.32;
    if (id === "frustrated") {
      angle = -0.32;
      z += 0.4 * Math.max(0, 1 - Math.abs(u - 0.4) / 0.23);
    }
    if (id === "no") angle = 2.7;
    if (id === "smaller") {
      angle = u < 0.32 ? -0.32 : 1.6;
      const hinge = 0.32;
      if (u >= hinge) {
        x = hinge + (u - hinge) * Math.cos(angle);
        z += (u - hinge) * Math.sin(angle);
        return [x, y, z];
      }
    }
    if (id === "delay") {
      angle = -0.32;
      gap = 0.3;
      z += 0.16;
    }
    if (id === "depends") {
      angle = v < 0.5 ? -0.7 : 1.65;
      y += v < 0.5 ? -0.055 : 0.055;
    }
    if (id === "other") angle = 0;
    return [x * Math.cos(angle) + gap, y, z + x * Math.sin(angle)];
  },
  project(id, side, u, v, group, progress, unit, w, h) {
    const q = this.sheet(id, side, u, v),
      join = this.smooth((progress - 0.12) / 0.76);
    // 演示布局分离后汇合。类别在合成后保留自己的折面，避免平均。
    const spread = (1 - join) * group.spread;
    const x = q[0] + group.x + spread,
      y = q[1] + group.y,
      z = q[2] + group.z;
    return [
      w * 0.5 + unit * (x * 0.9 + y * 0.24),
      h * 0.52 + unit * (x * 0.14 + y * 0.6 - z * 0.72),
      z - y * 0.2,
    ];
  },
  groups(mode, selection) {
    if (mode === "profile")
      return Q6_DATA.selves.flatMap((self, i) =>
        (window.SelfViews && !SelfViews.allows(self.id) ? [] : self.answers).map(
          (id) => ({
            id,
            color: self.color,
            key: self.id,
            ...Q6_TEMPLATES[id].layout,
            x: Q6_TEMPLATES[id].layout.x + (i - 0.5) * 0.25,
          }),
        ),
      );
    return Q6_OPTIONS.filter((o) => mode === "all" || selection.includes(o.id)).map(
      (o) => ({
        id: o.id,
        color: mode === "all" ? this.colors[Q6_OPTIONS.indexOf(o)] : "#e3e8dc",
        key: o.id,
        ...Q6_TEMPLATES[o.id].layout,
      }),
    );
  },
  draw(
    c,
    w,
    h,
    {
      mode = "profile",
      selection = ["frustrated", "no"],
      focus = "all",
      progress = 1,
      time = 0,
    } = {},
  ) {
    c.clearRect(0, 0, w, h);
    const unit = Math.min(w * 0.235, h * 0.34);
    const groups = this.groups(mode, selection);
    const reveal = this.smooth(progress / 0.12),
      faces = [];
    for (const group of groups) {
      const dim = (focus === "all" || focus === group.key ? 1 : 0.06) * reveal;
      // 每片用固定面片表现折面明暗，不使用轮廓丝束。
      for (let side = 0; side < 2; side++) {
        for (let i = 0; i < 24; i++)
          for (let j = 0; j < 16; j++) {
            const u = i / 24,
              v = j / 16,
              uv = [
                [u, v],
                [u + 1 / 24, v],
                [u + 1 / 24, v + 1 / 16],
                [u, v + 1 / 16],
              ],
              pts = uv.map(([a, b]) =>
                this.project(group.id, side, a, b, group, progress, unit, w, h),
              );
            faces.push({
              pts,
              depth: pts.reduce((a, p) => a + p[2], 0) / 4,
              color: group.color,
              alpha:
                dim * (0.055 + 0.145 * Math.pow(Math.sin(u * 2.1 + v * 0.8 + 0.3), 6)),
            });
          }
      }
    }
    faces.sort((a, b) => a.depth - b.depth);
    for (const f of faces) {
      c.fillStyle = f.color;
      c.globalAlpha = f.alpha;
      c.beginPath();
      f.pts.forEach((p, i) => (i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])));
      c.closePath();
      c.fill();
    }
    for (const group of groups) {
      const dim = (focus === "all" || focus === group.key ? 1 : 0.06) * reveal;
      c.strokeStyle = group.color;
      c.fillStyle = group.color;
      for (let side = 0; side < 2; side++) {
        // 细边和稀疏压纹只是材质，不编码额外分数。
        for (const edge of [0, 1, 2, 3]) {
          c.globalAlpha = 0.62 * dim;
          c.lineWidth = 0.65;
          c.beginPath();
          for (let k = 0; k <= 64; k++) {
            const t = k / 64,
              u = edge === 0 ? 0 : edge === 1 ? 1 : t,
              v = edge === 2 ? 0 : edge === 3 ? 1 : t,
              p = this.project(group.id, side, u, v, group, progress, unit, w, h);
            k ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1]);
          }
          c.stroke();
        }
        for (let j = 1; j < 8; j++) {
          c.globalAlpha = 0.075 * dim;
          c.lineWidth = 0.45;
          c.beginPath();
          for (let k = 0; k <= 48; k++) {
            const p = this.project(
              group.id,
              side,
              k / 48,
              j / 8,
              group,
              progress,
              unit,
              w,
              h,
            );
            k ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1]);
          }
          c.stroke();
        }
        let seed = 79;
        for (let j = 0; j < 150; j++) {
          seed = (seed * 1664525 + 1013904223) >>> 0;
          const u = seed / 4294967296;
          seed = (seed * 1664525 + 1013904223) >>> 0;
          const v = seed / 4294967296;
          const p = this.project(group.id, side, u, v, group, progress, unit, w, h);
          c.globalAlpha = 0.13 * dim;
          c.beginPath();
          c.arc(p[0], p[1], 0.45, 0, Math.PI * 2);
          c.fill();
        }
      }
    }
    c.globalAlpha = 1;
  },
};
