// 【参数编辑入口】
// 第 7 题｜masks 定义勺子/调色盘/耳机/书的微粒轮廓；init 创建固定采样。
// 原因参数在 q7-reasons.js；兴趣 motif / depthThickness 在各自 q7-meaning-data.js。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 单一微粒渲染器 + 简单语义遮罩。没有物件描边、封闭路径或实体填色。
window.Q7MeaningArt = {
  masks: {
    // Listening to Albums：封套与唱片是固定编辑性识别线索，不推断实际媒介。
    "album-sleeve"(x, y) {
  const u = x - 0.34, v = y + 0.01;
  const radius = Math.hypot(u, v);
  if (x > 0.07 && radius < 0.50) {
    const groove = [0.47, 0.30];
    if (groove.some(r => Math.abs(radius - r) < 0.025))
      return { anchor: [0.34, -0.01], part: "record-groove" };
    if (radius > 0.045 && radius < 0.095)
      return { anchor: [0.34, -0.01], part: "record-label" };
    return null;
  }
  const sx = x + 0.37, sy = y - 0.02;
  const sleeve = Math.abs(sx) < 0.47 && Math.abs(sy) < 0.47;
  if (!sleeve) return null;
  const edge = Math.abs(sx) > 0.42 || Math.abs(sy) > 0.42;
  if (edge) return { anchor: [-0.37, 0.02], part: "sleeve-edge" };
  // 封套内部稀疏颗粒暗示可更换的封面，不画任何特定专辑封面。
  const mark = Math.sin(sx * 63.7 + sy * 94.1) * 23947.18;
  if (mark - Math.floor(mark) < 0.008)
    return { anchor: [-0.37, 0.02], part: "sleeve-grain" };
  return null;
},
    // Anime：错位动画帧是活动识别造型；帧数与角度都是固定设计常量。
    "anime-frames"(x, y) {
  const frames = [
    { cx: -0.24, cy: -0.12, tilt: -0.12, scale: 0.74, part: "frame-back" },
    { cx: 0.02, cy: 0.01, tilt: 0.06, scale: 0.85, part: "frame-middle" },
    { cx: 0.23, cy: 0.13, tilt: -0.04, scale: 0.94, part: "frame-front" },
  ];
  for (const frame of frames) {
    const dx = x - frame.cx, dy = y - frame.cy;
    const u = (dx * Math.cos(frame.tilt) + dy * Math.sin(frame.tilt)) / frame.scale;
    const v = (-dx * Math.sin(frame.tilt) + dy * Math.cos(frame.tilt)) / frame.scale;
    const inside = Math.abs(u) < 0.55 && Math.abs(v) < 0.42;
    const rim = Math.abs(u) > 0.50 || Math.abs(v) > 0.37;
    if (inside && rim) return { anchor: [frame.cx, frame.cy], part: frame.part };
    if (frame.part === "frame-front" && inside) {
      // 内部三段相移的开放弧暗示 successive frames，不构成具体角色。
      const arc = Math.abs(v - (0.13 * Math.sin((u + 0.25) * 9) - 0.08));
      if (arc < 0.018 && u > -0.4 && u < 0.42)
        return { anchor: [frame.cx, frame.cy], part: "animated-trace" };
    }
  }
  return null;
},

    // Photography：固定机身、取景窗和镜头，仅用于微粒采样。
    // 这些尺寸是识别造型常量，不编码技巧、设备或兴趣强度。
    camera(x, y) {
      const lens = Math.hypot(x - 0.08, y - 0.06);
      if (lens > 0.22 && lens < 0.29) return { anchor: [0.08, 0.06], part: "lens-ring" };
      if (lens < 0.16) return { anchor: [0.08, 0.06], part: "lens-glass" };
      // 镜头周围留白，不画实体描边。
      const body = Math.abs(x / 0.65) ** 8 + Math.abs((y - 0.06) / 0.37) ** 8 < 1;
      const viewfinder = x > -0.51 && x < -0.28 && y > -0.2 && y < -0.07;
      if (body && lens > 0.34 && !viewfinder)
        return { anchor: [0, 0.06], part: "camera-body" };
      if (x > -0.19 && x < 0.25 && y > -0.44 && y < -0.29)
        return { anchor: [0.03, -0.35], part: "camera-top" };
      if (x > -0.51 && x < -0.31 && y > -0.36 && y < -0.29)
        return { anchor: [-0.41, -0.31], part: "shutter" };
      return null;
    },
    // Dormitory：床铺作为场所识别线索，不代表睡眠或安全感。
    dormitory(x, y) {
      // 床头和床脚为固定侧视构图，所有部件仅采样微粒。
      if (x > -0.73 && x < -0.66 && y > -0.42 && y < 0.48)
        return { anchor: [-0.695, 0], part: "bed-head" };
      if (x > 0.61 && x < 0.67 && y > 0.21 && y < 0.48)
        return { anchor: [0.64, 0.34], part: "bed-foot" };
      // 微微弧起的床面与床沿，中间细缝保留层次。
      if (x > -0.65 && x < 0.64) {
        const top = 0.01 - 0.045 * Math.cos(x * 2);
        if (y > top && y < 0.17) return { anchor: [0, 0.08], part: "mattress" };
        if (y > 0.2 && y < 0.26) return { anchor: [0, 0.23], part: "bed-frame" };
      }
      // 圆角枕头与床面之间留白；尺寸不编码任何回答量。
      if (Math.abs((x + 0.43) / 0.18) ** 4 + Math.abs((y + 0.12) / 0.075) ** 4 < 1)
        return { anchor: [-0.43, -0.12], part: "bed-pillow" };
      return null;
    },
    // Tennis：固定球拍与球的识别造型；拍线数量不表示技能或练习次数。
    tennis(x, y) {
      const u = x + 0.18;
      const v = y + 0.23;
      const ellipse = Math.hypot(u / 0.29, v / 0.36);
      if (ellipse > 0.88 && ellipse < 1.02)
        return { anchor: [-0.18, -0.23], part: "racket-frame" };
      // 球拍网格也是微粒，不画实体直线。
      const grid = (value, spacing) =>
        Math.abs(value - Math.round(value / spacing) * spacing);
      if (ellipse < 0.88 && (grid(u, 0.075) < 0.006 || grid(v, 0.085) < 0.006))
        return { anchor: [-0.18, -0.23], part: "racket-strings" };
      // Y 形拍喉与短握柄。
      if (y >= 0.08 && y < 0.29) {
        const branch = (0.11 * (0.29 - y)) / 0.21;
        if (Math.abs(Math.abs(u) - branch) < 0.018)
          return { anchor: [-0.18, 0.2], part: "racket-throat" };
      }
      if (y >= 0.28 && y < 0.62 && Math.abs(u) < 0.041)
        return { anchor: [-0.18, 0.45], part: "racket-handle" };
      const bx = x - 0.43,
        by = y - 0.24;
      if (Math.hypot(bx, by) < 0.145) {
        // 一条弧形留白提示网球接缝，不额外改变颜色。
        const seam = -0.035 + 3.2 * by * by;
        if (Math.abs(bx - seam) > 0.012)
          return { anchor: [0.43, 0.24], part: "tennis-ball" };
      }
      return null;
    },
    // dancing：裙摆舞者是用户确认的识别符号，不推断舞种或参与者性别。
    dancer(x, y) {
      // 固定构图：裙摆向右展开。轮廓只用于采样，绝不实体填色。
      if (y > -0.03 && y < 0.53) {
        const t = (y + 0.03) / 0.56;
        const center = -0.08 + 0.2 * t;
        const width = 0.075 + 0.55 * Math.pow(t, 0.85);
        const hem = 0.49 + 0.045 * Math.cos((x - 0.12) * 15);
        if (Math.abs(x - center) < width && y < hem) {
          // 少量开放褶皱留白；不编码原因或强度。
          const fold = Math.sin(((x + 0.08) / (0.12 + t)) * 18);
          if (!(t > 0.4 && t < 0.93 && Math.abs(fold) < 0.065))
            return { anchor: [-0.08, 0], part: "dancer-skirt" };
        }
      }
      if (((x + 0.1) / 0.073) ** 2 + ((y + 0.44) / 0.09) ** 2 < 1)
        return { anchor: [-0.1, -0.44], part: "dancer-head" };
      if (y > -0.36 && y < 0.02) {
        const t = (y + 0.36) / 0.38;
        const center = -0.1 + 0.02 * t;
        const width = 0.035 + 0.055 * Math.sin(Math.PI * t);
        if (Math.abs(x - center) < width)
          return { anchor: [-0.09, -0.16], part: "dancer-body" };
      }
      // 手臂连续弯举；腿只在裙摆下方略作提示，避免骨架感。
      const gestures = [
        [-0.13, -0.28, -0.32, -0.43, 0.033],
        [-0.32, -0.43, -0.21, -0.65, 0.03],
        [-0.04, -0.28, 0.19, -0.12, 0.033],
        [0.19, -0.12, 0.36, 0.04, 0.028],
        [-0.08, 0.46, -0.13, 0.63, 0.026],
        [0.08, 0.47, 0.25, 0.6, 0.024],
      ];
      for (const [ax, ay, bx, by, width] of gestures) {
        const dx = bx - ax,
          dy = by - ay;
        const t = Math.max(
          0,
          Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy)),
        );
        if (Math.hypot(x - ax - t * dx, y - ay - t * dy) < width)
          return { anchor: [(ax + bx) / 2, (ay + by) / 2], part: "dancer-gesture" };
      }
      return null;
    },
    // shopping online：购物袋是固定识别线索，不编码消费量或商品类别。
    "shopping-bag"(x, y) {
      // 弧形提手留空；用同一微粒采样器形成柔散边缘。
      const handle = Math.hypot(x / 0.23, (y + 0.28) / 0.36);
      if (y < -0.23 && handle > 0.8 && handle < 1.06)
        return { anchor: [0, -0.36], part: "bag-handle" };
      if (y < -0.26 || y > 0.56) return null;
      const width = 0.4 + 0.1 * ((y + 0.26) / 0.82);
      if (Math.abs(x) > width) return null;
      // 窄留白提示侧折面，属于固定造型，不引入新的数据参数。
      const fold = width - 0.09;
      if (y > -0.16 && y < 0.48 && Math.abs(Math.abs(x) - fold) < 0.012) return null;
      return { anchor: [0, 0.15], part: "bag-body" };
    },
    // TV series：微粒屏幕与底座。几何比例和内部稀疏度仅为固定识别造型。
    // 不表示观看时间、剧集数量或它们对参与者的影响程度。
    screen(x, y) {
      const screenY = -0.1;
      const outer = Math.abs(x / 0.76) ** 8 + Math.abs((y - screenY) / 0.43) ** 8;
      if (outer < 1) {
        const inner = Math.abs(x / 0.7) ** 8 + Math.abs((y - screenY) / 0.37) ** 8;
        if (inner >= 1) return { anchor: [0, screenY], part: "screen-edge" };
        // 固定坐标散列仅让内部透空；不会随时间闪烁，也不编码回答。
        const hash = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
        if (hash - Math.floor(hash) < 0.06)
          return { anchor: [0, screenY], part: "screen-interior" };
      }
      if (Math.abs(x) < 0.055 && y >= 0.3 && y < 0.49)
        return { anchor: [0, 0.4], part: "screen-support" };
      if ((x / 0.29) ** 2 + ((y - 0.5) / 0.045) ** 2 < 1)
        return { anchor: [0, 0.5], part: "screen-base" };
      return null;
    },
    // latte：椭圆杯口、微粒杯身和留空杯柄。尺寸不表示摄入量。
    "coffee-cup"(x, y) {
      const centerX = -0.13;
      const u = x - centerX;
      const rim = Math.hypot(u / 0.48, (y + 0.3) / 0.16);
      if (rim > 0.86 && rim < 1.04) return { anchor: [centerX, -0.3], part: "cup-rim" };
      // 开口保持透空；杯身从杯口前缘向下收拢，底部略圆。
      const frontEdge = -0.3 + 0.16 * Math.sqrt(Math.max(0, 1 - (u / 0.48) ** 2));
      const width = 0.48 - 0.11 * Math.max(0, (y + 0.3) / 0.82);
      const bottom = 0.52 - 0.06 * (u / 0.37) ** 2;
      if (y > frontEdge && y < bottom && Math.abs(u) < width)
        return { anchor: [centerX, 0.12], part: "cup-body" };
      // C 形杯柄：中心空白，不添蒸汽或代表兴奋程度的动态。
      const handle = Math.hypot((x - 0.4) / 0.28, (y - 0.05) / 0.27);
      if (x > 0.29 && handle > 0.67 && handle < 1)
        return { anchor: [0.4, 0.05], part: "cup-handle" };
      return null;
    },
    // daydreaming with my roommate：两个固定来源交叠成同一个云状主体。
    // 这是经确认的造型隐喻；间距、孔隙和起伏不代表关系强度或情绪。
    "shared-cloud"(x, y) {
      const sources = [
        { x: -0.25, y: -0.04, phase: 0 },
        { x: 0.25, y: 0.04, phase: 1.7 },
      ];
      let nearest = null;
      let bestRadius = Infinity;
      for (const source of sources) {
        const u = (x - source.x) / 0.53;
        const v = (y - source.y) / 0.39;
        const angle = Math.atan2(v, u);
        const edge =
          1 +
          0.1 * Math.sin(3 * angle + source.phase) +
          0.06 * Math.cos(5 * angle - source.phase);
        const radius = Math.hypot(u, v) / edge;
        if (radius < 1 && radius < bestRadius) {
          nearest = source;
          bestRadius = radius;
        }
      }
      if (!nearest) return null;
      // 固定的细碎空隙让云体透空；所有点仍使用共同的柔散边缘规则。
      const pores =
        Math.sin(24 * x + 3 * Math.sin(7 * y)) * Math.cos(26 * y + 2 * Math.sin(8 * x));
      if (pores > 0.56) return null;
      return {
        anchor: [nearest.x, nearest.y],
        part: nearest === sources[0] ? "cloud-left" : "cloud-right",
      };
    },
    // guitar：通用吉他识别线索；不编码当前技能、练习量或情绪强度。
    guitar(x, y) {
      // 统一留出画布边距，避免琴头及边缘微粒被裁切。
      x /= 0.68;
      y /= 0.68;
      // 固定倾角仅为构图；同一造型在不同参与者之间保持一致。
      const tilt = 0.28;
      const u = x * Math.cos(tilt) + y * Math.sin(tilt);
      const v = -x * Math.sin(tilt) + y * Math.cos(tilt);
      const lower = (u / 0.36) ** 2 + ((v - 0.44) / 0.35) ** 2 < 1;
      const upper = (u / 0.27) ** 2 + ((v - 0.12) / 0.25) ** 2 < 1;
      const neck = Math.abs(u) < 0.065 && v > -0.65 && v < 0.02;
      const head = Math.abs(u) < 0.105 && v > -0.88 && v <= -0.65;
      // 琴弦也由散点采样；音孔为留白，几何上无实体填色。
      const string =
        [-0.036, 0, 0.036].some((s) => Math.abs(u - s) < 0.005) && v > -0.7 && v < 0.5;
      if (string) return { anchor: [0, 0], part: "guitar-string" };
      if (u * u + (v - 0.15) ** 2 < 0.105 ** 2) return null;
      // 琴桥与琴颈上的细小间隔帮助识别，数量不表示回答值。
      if (Math.abs(u) < 0.16 && Math.abs(v - 0.51) < 0.018) return null;
      if (neck && Math.abs(Math.sin((v + 0.65) * 48)) < 0.15) return null;
      return lower || upper || neck || head ? { anchor: [0, 0], part: "guitar" } : null;
    },
    // keep a diary：复用展开的书页语法，加入斜放的笔作为书写线索。
    // 造型常量不表示写作频率或内容；原因仍由 q7-reasons.js 独立处理。
    diary(x, y) {
      // 笔从右上方指向书页中央偏下的位置，留白把笔与页面区分开。
      const start = [0.7, -0.72];
      const end = [0.16, 0.42];
      const dx = end[0] - start[0],
        dy = end[1] - start[1];
      const length = Math.hypot(dx, dy);
      const along = ((x - start[0]) * dx + (y - start[1]) * dy) / length;
      const across = Math.abs((x - start[0]) * dy - (y - start[1]) * dx) / length;
      const tipLength = 0.16;
      const width =
        along > length - tipLength ? (0.048 * (length - along)) / tipLength : 0.048;
      if (along >= 0 && along <= length && across < width)
        return { anchor: [0.43, -0.15], part: "diary-pen" };
      if (along > -0.04 && along < length + 0.04 && across < 0.09) return null;
      return this.book(x, y);
    },
    // game → gamepad：固定识别造型，不推断游戏种类、设备或熟练度。
    // 原因只通过共享 clusterPull 规则影响粒子，不改变手柄尺寸或按钮数。
    gamepad(x, y) {
      const body = Math.abs(x / 0.69) ** 4 + Math.abs((y + 0.14) / 0.35) ** 4 < 1;
      const grip = (side) => {
        const dx = x - side * 0.57;
        const dy = y - 0.17;
        const u = dx - side * 0.25 * dy;
        return (u / 0.25) ** 2 + (dy / 0.44) ** 2 < 1;
      };
      if (!body && !grip(-1) && !grip(1)) return null;
      // 方向键与四枚按钮以留白呈现；散点边缘仍由共同渲染器柔化。
      const crossX = Math.abs(x + 0.4),
        crossY = Math.abs(y + 0.16);
      if ((crossX < 0.045 && crossY < 0.145) || (crossY < 0.045 && crossX < 0.145))
        return null;
      const buttons = [
        [0.4, -0.31],
        [0.55, -0.16],
        [0.4, -0.01],
        [0.25, -0.16],
      ];
      if (buttons.some(([bx, by]) => Math.hypot(x - bx, y - by) < 0.052)) return null;
      if (Math.abs(x) < 0.075 && Math.abs(y + 0.16) < 0.022) return null;
      return { anchor: [0, 0], part: "gamepad" };
    },
    // blue · 衣服：来自“减肥而穿上美美的衣服”，用户确认采用宽松上衣。
    // 以下坐标只负责识别造型，不代表体型、减重幅度或情绪。
    "loose-shirt"(x, y) {
      const outline = [
        [-0.2, -0.62],
        [-0.46, -0.56],
        [-0.84, -0.22],
        [-0.64, 0.02],
        [-0.43, -0.12],
        [-0.48, 0.65],
        [0.48, 0.65],
        [0.43, -0.12],
        [0.64, 0.02],
        [0.84, -0.22],
        [0.46, -0.56],
        [0.2, -0.62],
      ];
      // 点是否位于衣服内部；只采样微粒，不绘制实体填色或描边。
      let inside = false;
      for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
        const [ax, ay] = outline[i];
        const [bx, by] = outline[j];
        if (ay > y !== by > y && x < ((bx - ax) * (y - ay)) / (by - ay) + ax)
          inside = !inside;
      }
      if (!inside) return null;
      // 圆领留白与两道开放褶皱都是固定造型，不是新的原因映射。
      if ((x / 0.205) ** 2 + ((y + 0.63) / 0.2) ** 2 < 1) return null;
      const foldX = 0.27 + 0.055 * Math.sin((y + 0.1) * 4);
      if (y > 0.1 && y < 0.52 && Math.abs(Math.abs(x) - foldX) < 0.012) return null;
      return { anchor: [0, 0], part: "shirt" };
    },
    // delicious food → food-plate：微粒浅盘配左叉右刀，不指定菜品。
    // 餐具和盘沿都是固定造型；两条原因仍只控制 motionCycle / glowStrength。
    "food-plate"(x, y) {
      const rim = Math.hypot(x / 0.57, y / 0.4);
      const inner = Math.hypot(x / 0.46, y / 0.32);
      if ((rim > 0.95 && rim < 1.03) || (inner > 0.97 && inner < 1.02))
        return { anchor: [0, 0], part: "plate-rim" };
      const lip = Math.hypot(x / 0.54, (y - 0.04) / 0.4);
      if (y > 0.25 && lip > 0.98 && lip < 1.03)
        return { anchor: [0, 0.04], part: "plate-lip" };
      const forkX = -0.78;
      const tine = [-0.075, 0, 0.075].some(
        (offset) => Math.abs(x - forkX - offset) < 0.016,
      );
      if (y > -0.57 && y < -0.26 && tine)
        return { anchor: [forkX, -0.4], part: "fork-tines" };
      if (y >= -0.28 && y < -0.16 && Math.abs(x - forkX) < 0.09 - (y + 0.28) * 0.48)
        return { anchor: [forkX, -0.22], part: "fork-neck" };
      if (y >= -0.17 && y < 0.6 && Math.abs(x - forkX) < 0.027)
        return { anchor: [forkX, 0.2], part: "fork-handle" };
      const knifeX = 0.76;
      const blade = Math.sin((Math.PI * (y + 0.59)) / 0.65);
      if (
        y > -0.59 &&
        y < 0.06 &&
        x > knifeX - 0.025 &&
        x < knifeX + 0.025 + 0.07 * blade
      )
        return { anchor: [knifeX, -0.25], part: "knife-blade" };
      if (y >= 0.06 && y < 0.6 && Math.abs(x - knifeX) < 0.034)
        return { anchor: [knifeX, 0.3], part: "knife-handle" };
      return null;
    },
    // 拼豆 → fuse-beads：材料网格而非替参与者指定的成品图案。
    // 列数、行数、孔径与间距为固定识别造型，不代表投入或熟练度。
    "fuse-beads"(x, y) {
      const spacing = 0.3;
      const column = Math.round(x / spacing);
      const row = Math.round((y + 0.45) / spacing);
      if (column < -2 || column > 2 || row < 0 || row > 3) return null;
      const cx = column * spacing;
      const cy = row * spacing - 0.45;
      const radius = Math.hypot(x - cx, y - cy);
      if (radius < 0.064 || radius > 0.132) return null;
      return { anchor: [cx, cy], part: "bead" };
    },
    // sleep → pillow：固定枕头造型，不编码睡眠质量、疲惫程度或情绪。
    pillow(x, y) {
      // 饱满的圆角矩形：提高超椭圆指数以保留四角，中部不收腰。
      const halfWidth = 0.83;
      const halfHeight = 0.52;
      const roundness = 6.0;
      if (
        Math.abs(x / halfWidth) ** roundness + Math.abs(y / halfHeight) ** roundness >
        1
      )
        return null;
      // 一道短而开放的弧形留白提示中央浅凹；不是洞或硬描边。
      const crease = 0.11 + 0.55 * x * x;
      const gap = 0.012 * Math.max(0, 1 - (x / 0.21) ** 2);
      if (Math.abs(y - crease) < gap) return null;
      return { anchor: [0, 0], part: "pillow" };
    },
    // planning to travel → folded-map：固定三折地图，表示规划活动的识别符号。
    // 这些坐标只定义造型；折面数量不代表旅行次数、目的地或冒险性。
    "folded-map"(x, y) {
      const folds = [-0.86, -0.28, 0.28, 0.86];
      const heights = [0.14, -0.14, 0.14, -0.14];
      if (x < folds[0] || x > folds[3]) return null;
      const panel = x < folds[1] ? 0 : x < folds[2] ? 1 : 2;
      const across = (x - folds[panel]) / (folds[panel + 1] - folds[panel]);
      const offset = heights[panel] * (1 - across) + heights[panel + 1] * across;
      if (Math.abs(y - offset) > 0.48) return null;
      // 轻微留白提示折痕；共用的微粒散布使接缝和边缘仍然柔软。
      if (Math.min(Math.abs(x - folds[1]), Math.abs(x - folds[2])) < 0.022) return null;
      return {
        anchor: [(folds[panel] + folds[panel + 1]) / 2, 0],
        part: "map-panel-" + panel,
      };
    },
    // singing → microphone：通用唱歌识别符号，不推断舞台表演或性格。
    // 固定倾角、头部与手柄比例都是造型常量，不由参与者原因改变。
    microphone(x, y) {
      const tilt = -0.42;
      const u = x * Math.cos(tilt) + y * Math.sin(tilt);
      const v = -x * Math.sin(tilt) + y * Math.cos(tilt);
      const head = (u / 0.29) ** 2 + ((v + 0.4) / 0.33) ** 2;
      if (head < 1) return { anchor: [0, -0.4], part: "microphone-head" };
      if (v > -0.025 && v < 0.73 && Math.abs(u) < 0.105 - 0.035 * ((v + 0.025) / 0.755))
        return { anchor: [0, 0.35], part: "microphone-handle" };
      return null;
    },
    // piano → keyboard：选择琴键造型。固定深浅用于识别黑白键，不编码原因或能力。
    // 七个长键 + 两组（2、3）短键；空隙使琴键可辨认，没有描边或实体填色。
    keyboard(x, y) {
      const pitch = 0.25;
      const left = -0.875;
      const shortKeys = [1, 2, 4, 5, 6];
      const shortCenter = shortKeys.find((n) => Math.abs(x - (left + n * pitch)) < 0.055);
      if (shortCenter !== undefined && y > -0.55 && y < 0.1)
        return { anchor: [left + shortCenter * pitch, -0.23], part: "short-key" };
      const key = Math.floor((x - left) / pitch);
      if (key < 0 || key > 6 || y < -0.55 || y > 0.55) return null;
      const center = left + (key + 0.5) * pitch;
      if (Math.abs(x - center) > 0.112) return null;
      // 长键延伸到同一顶端，在短键所在的上半部留槽；下半部连续展开。
      if (y < 0.13 && shortKeys.some((n) => Math.abs(x - (left + n * pitch)) < 0.082))
        return null;
      return { anchor: [center, 0.17], part: "long-key" };
    },
    headphones(x, y) {
      const radius = Math.sqrt((x / 0.72) ** 2 + ((y + 0.04) / 0.79) ** 2);
      const band = y < 0.04 && radius > 0.83 && radius < 1;
      const left = ((x + 0.61) / 0.16) ** 2 + ((y - 0.24) / 0.37) ** 2 < 1;
      const right = ((x - 0.61) / 0.16) ** 2 + ((y - 0.24) / 0.37) ** 2 < 1;
      return band || left || right ? { anchor: [0, 0], part: "headphones" } : null;
    },
    book(x, y) {
      const a = Math.abs(x),
        inside =
          a < 0.8 &&
          a > 0.025 &&
          y > -0.5 - 0.15 * Math.sin(a * 3.5) &&
          y < 0.57 - 0.17 * Math.sin(a * 3.5);
      const edge =
        inside &&
        (a > 0.73 ||
          a < 0.06 ||
          Math.abs(y - (-0.5 - 0.15 * Math.sin(a * 3.5))) < 0.05 ||
          Math.abs(y - (0.57 - 0.17 * Math.sin(a * 3.5))) < 0.05);
      const page =
        inside && Math.abs(Math.sin((y + 0.5 + 0.15 * Math.sin(a * 3.5)) * 18)) < 0.25;
      return edge || page ? { anchor: [0, 0], part: "book" } : null;
    },
    spoon(x, y) {
      const bowl = ((x + 0.43) / 0.32) ** 2 + ((y + 0.39) / 0.43) ** 2;
      const t = ((x + 0.21) * 0.68 + (y + 0.04) * 0.88) / (0.68 * 0.68 + 0.88 * 0.88);
      const distance =
        Math.abs((x + 0.21) * 0.88 - (y + 0.04) * 0.68) / Math.hypot(0.68, 0.88);
      if (bowl < 1) return { anchor: [-0.43, -0.39], part: "bowl" };
      if (t >= 0 && t <= 1 && distance < 0.055 + 0.015 * t)
        return { anchor: [-0.21 + t * 0.68, -0.04 + t * 0.88], part: "handle" };
      return null;
    },
    palette(x, y) {
      const radius = (x / 0.77) ** 2 + (y / 0.62) ** 2;
      const thumb = ((x - 0.28) / 0.14) ** 2 + ((y + 0.17) / 0.17) ** 2;
      const notch = ((x - 0.73) / 0.31) ** 2 + ((y + 0.32) / 0.31) ** 2;
      if (radius < 1 && thumb > 1 && notch > 1)
        return { anchor: [0, 0], part: "palette" };
      // 同一种颗粒组成简化画笔，颜色不按物件涂色。
      const t = (y + 0.87) / 1.6,
        axis = 0.56 + 0.26 * t;
      if (t >= 0 && t <= 1 && Math.abs(x - axis) < (t > 0.78 ? 0.065 : 0.027))
        return { anchor: [axis, y], part: "brush" };
      return null;
    },
  },
  fields: null,
  init() {
    if (this.fields) return;
    this.fields = {};
    for (const key of Object.keys(this.masks)) {
      let seed = 791;
      const rand = () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
      };
      const points = [];
      while (points.length < 11000) {
        const x = rand() * 2 - 1,
          y = rand() * 2 - 1,
          hit = this.masks[key](x, y);
        if (!hit) continue;
        const angle = rand() * Math.PI * 2,
          blur = Math.sqrt(rand()) * (rand() < 0.1 ? 0.19 : 0.027);
        points.push({
          x: x + Math.cos(angle) * blur,
          y: y + Math.sin(angle) * blur,
          anchor: hit.anchor,
          part: hit.part,
          depth: rand() * 2 - 1,
          light: rand(),
          halo: blur > 0.045,
        });
      }
      // 固定空间网格的重心，供“连接”控制局部聚拢。网格由素材决定，不读取回答。
      const cells = new Map();
      for (const q of points) {
        const code = Math.floor(q.x / 0.08) + ":" + Math.floor(q.y / 0.08);
        q.cell = code;
        const cell = cells.get(code) || { x: 0, y: 0, n: 0 };
        cell.x += q.x;
        cell.y += q.y;
        cell.n++;
        cells.set(code, cell);
      }
      for (const q of points) {
        const cell = cells.get(q.cell);
        q.cluster = [cell.x / cell.n, cell.y / cell.n];
      }
      this.fields[key] = points;
    }
  },

  params(
    item,
    { baseline = false, common = false, previewTarget = null, previewReasons = [] } = {},
  ) {
    const source = item.id === previewTarget ? { reasons: previewReasons } : item;
    const reasons = baseline ? { ...Q7Reasons.base } : Q7Reasons.resolve(source);
    return { depthThickness: common ? 0.25 : (item.depthThickness ?? 0.25), ...reasons };
  },
  point(sample, params, time) {
    const angleNoise = sample.light * Math.PI * 2;
    const x =
      sample.x +
      (sample.cluster[0] - sample.x) * params.clusterPull +
      Math.cos(angleNoise) * params.scatterAmount;
    const y =
      sample.y +
      (sample.cluster[1] - sample.y) * params.clusterPull +
      Math.sin(angleNoise) * params.scatterAmount;
    const z = params.depthThickness * sample.depth * 0.22;
    const phase = params.motionCycle * Math.sin((time * Math.PI) / 5) * 0.16,
      angle = 0.1 + phase;
    return [
      x * Math.cos(angle) + z * Math.sin(angle),
      y - (z * Math.cos(angle) - x * Math.sin(angle)) * 0.42,
    ];
  },
  draw(c, w, h, settings = {}) {
    this.init();
    c.clearRect(0, 0, w, h);
    const single = Q7_MEANING_DATA.interests.length === 1;
    const r = Math.min(w * (single ? 0.4 : 0.207), h * (single ? 0.65 : 0.41)),
      time = settings.time || 0;
    Q7_MEANING_DATA.interests.forEach((item, index) => {
      const params = this.params(item, settings),
        key = item.motif || (item.id === "cooking" ? "spoon" : "palette"),
        cx = w * (single ? 0.5 : index === 0 ? 0.265 : 0.735),
        cy = h * 0.5;
      // 少量固定色桶避免每颗粒计算颜色字符串，所有颜色维持同样饱和度/明度。
      const buckets = Array.from(
        { length: 17 },
        (_, i) => `hsl(${165 + ((i / 16) * 2 - 1) * params.hueSpread} 24% 82%)`,
      );
      for (let j = 0; j < this.fields[key].length; j++) {
        const sample = this.fields[key][j],
          p = this.point(sample, params, time),
          x = cx + p[0] * r,
          y = cy + p[1] * r;
        const keyboard = key === "keyboard";
        const darkKey = keyboard && sample.part === "short-key";
        const alpha = sample.halo
            ? 0.09
            : keyboard
              ? 0.5 + 0.45 * sample.light
              : 0.2 + 0.34 * sample.light,
          radius = params.particleRadius * (0.7 + 0.58 * sample.light);
        c.fillStyle = buckets[Math.min(16, Math.floor(sample.light * 17))];
        // 这是琴键图案的固定明暗，不是新增的数据映射；原因仍只改各自的参数。
        if (darkKey) c.fillStyle = "hsl(165 12% 30%)";
        if (params.echoOpacity) {
          const prev = this.point(sample, params, time - 1.4);
          c.globalAlpha = alpha * params.echoOpacity;
          c.beginPath();
          c.arc(
            cx + prev[0] * r - r * 0.013,
            cy + prev[1] * r + r * 0.012,
            radius,
            0,
            Math.PI * 2,
          );
          c.fill();
        }
        if (params.glowStrength && j % 9 === 0) {
          c.globalAlpha = alpha * params.glowStrength * 0.32;
          c.beginPath();
          c.arc(x, y, radius * 4.5, 0, Math.PI * 2);
          c.fill();
        }
        c.globalAlpha = alpha;
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2);
        c.fill();
      }
    });
    c.globalAlpha = 1;
  },
};
