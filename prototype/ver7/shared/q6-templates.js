// 【参数编辑入口】
// 第 6 题｜authorPoint 定义七种折叠模板；angle 为弧度，gap 为模型单位间距。
// 每个选项使用固定模板，NU/NV 是采样精度，不是回答含义。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 模板制作层：七种形态在启动时生成一次，之后只读。
// 这些常量用于设计形态，不受问卷选择、选项数量或组合次序影响。
(() => {
  function authorPoint(id, side, u, v) {
    let x = (side === 0 ? -1 : 1) * u,
      y = (v - 0.5) * 1.55,
      z = 0.055 * Math.sin(v * Math.PI) * Math.sin(u * Math.PI);
    if (side === 0) return [x, y, z];
    let angle = 0,
      gap = 0;
    if (id === "yes") angle = -0.32;
    if (id === "frustrated") {
      angle = -0.32;
      z += 0.8 * Math.max(0, 1 - Math.abs(u - 0.4) / 0.23);
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
      gap = 0.65;
      z += 0.16;
    }
    if (id === "depends") {
      angle = v < 0.5 ? -1.05 : 2.1;
      y += v < 0.5 ? -0.055 : 0.055;
    }
    if (id === "other") angle = 0;
    return [x * Math.cos(angle) + gap, y, z + x * Math.sin(angle)];
  }
  const ids = ["yes", "frustrated", "no", "smaller", "delay", "depends", "other"];
  const NU = 96,
    NV = 64;
  const registry = {};
  ids.forEach((id, index) => {
    const grids = [0, 1].map((side) =>
      Object.freeze(
        Array.from({ length: NU + 1 }, (_, i) =>
          Object.freeze(
            Array.from({ length: NV + 1 }, (_, j) =>
              Object.freeze(authorPoint(id, side, i / NU, j / NV)),
            ),
          ),
        ),
      ),
    );
    const layout = Object.freeze({
      x: 0,
      y: (index - 3) * 0.08,
      z: (index - 3) * 0.055,
      spread: (index - 3) * 0.34,
    });
    registry[id] = Object.freeze({
      id,
      layout,
      point(side, u, v) {
        const a = Math.max(0, Math.min(NU, u * NU)),
          b = Math.max(0, Math.min(NV, v * NV));
        const i = Math.min(NU - 1, Math.floor(a)),
          j = Math.min(NV - 1, Math.floor(b)),
          du = a - i,
          dv = b - j,
          g = grids[side];
        return [0, 1, 2].map(
          (k) =>
            (1 - du) * (1 - dv) * g[i][j][k] +
            du * (1 - dv) * g[i + 1][j][k] +
            (1 - du) * dv * g[i][j + 1][k] +
            du * dv * g[i + 1][j + 1][k],
        );
      },
    });
  });
  window.Q6_TEMPLATES = Object.freeze(registry);
})();
