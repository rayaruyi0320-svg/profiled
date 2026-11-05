// 整体视觉参数入口：这些是共同构图常量，不读取人格分数。
window.APP_CONFIG = {
  // Local research demo only: allow every participant's Q37 topics to enter
  // pair comparison without changing the recorded survey permissions.
  // Switch to false before any participant-facing or public use.
  localComparisonTestMode: true,
  galaxy: {
    pointsPerTopic: 1400, // 每个题目进入整体星系前的最大采样预算。
    radius: 0.48, // 星系相对于 canvas 较短边的尺寸比例。
    motionSpeed: 0.2, // 共同的轻微摆动频率；不表示个人回答。
    formationSeconds: 7, // 自动往返形成动画的单程秒数。
    topicScale: 1.35, // 全领域：放大题目自身形态，原为 0.9。
    focusedTopicScale: 1.9, // 单领域：统一放大，不按个人归一化。
    saturation: 1.2, // 全局统一增强色彩；不改变 self 的色相含义。
    brightness: 1, // 亮度：1 为原色，越大越亮；过高会变白。
    opacity: 0.7, // 整体不透明度：0–1；0.7 更通透，1 最清晰。
    focusOtherOpacity: 0.22, // 悬停/锁定区块时，其他区块的不透明度。
    swayRadians: 0.07, // 整体仅轻微摆动（约 ±4°），不再同步旋转成同一倾斜方向。
    foregroundArea: 3.2, // Q23 被选题目的面积倍数，线性尺寸取平方根。
    invitationOutward: 0.65, // Q24 被选题目沿领域方向向外移动的距离。
    layoutScale: 0.44, // 给放大的题目和外缘位置留白；所有人统一缩放。
    clusterPacking: 0.64, // 整体区块中心收拢；不是人格分数，Q24 外移关系仍保留。
    starHaloOpacity: 0.09, // 原有粒子的淡光晕，不增加数据或连接。
    starHaloRadius: 3.2, // 光晕相对于星点的尺寸。
    particleRadius: 0.65, // 首页微粒基础半径 px。
    topicSeparation: 0.48,
    // 共同的排版留白：只按题型调整，不把位置/颜色伪装成人格分数。
    domainSeparation: { 2: 1.15, 3: 1.05 },
    interestSpacing: { x: 0.36, y: 0.32 }, // 仅整体画像的兴趣中心间距；不缩小兴趣轮廓。
    interestGroupScale: { all: 0.95, focused: 1.3 }, // 五项兴趣也留在画幅内；所有人同一尺度。
    topicDisplayScale: { q3: 1.1, q6: 1.05, q4: 0.8, q7: 1.0 }, // 同领域不同题目的固定间距，不表示回答分数。
  },
  // Universe only. Normalized positions are editorial layout anchors, never
  // participant scores. Gentle motion is shared; the different phases prevent
  // a synchronized grid. Edit these values to tune the sky without touching
  // any individual's question-level visual mapping.
  sky: {
    driftX: 60, // 水平方向最大漂移的基准，单位 px。
    driftY: 44, // 垂直方向最大漂移的基准，单位 px。
    driftSpeed: 0.19, // 漂移速度；所有人使用相同规则。
    selectedScale: 1.24, // 选中两人后的放大倍数。
    pushRadius: 390, // 周围星系开始退让的影响半径，单位 px。
    pushDistance: 115, // 最近的未选中星系最多退让的基准距离，单位 px。
    desktopHeight: 1450, // 星空在不同屏幕宽度下的高度，单位 px。
    tabletHeight: 1770,
    mobileHeight: 2260,
    // 下列 0–1 坐标是固定排版锚点，不读取问卷回答。
    // Editorial sky placement only: proximity never encodes similarity.
    desktop: [
      [0.15, 0.12], [0.48, 0.19], [0.79, 0.09],
      [0.29, 0.34], [0.73, 0.31], [0.91, 0.47],
      [0.09, 0.52], [0.49, 0.48], [0.70, 0.62],
      [0.29, 0.66], [0.12, 0.84], [0.50, 0.85],
      [0.87, 0.81], [0.69, 0.94],
    ],
    tablet: [
      [0.17, 0.10], [0.51, 0.09], [0.83, 0.12],
      [0.25, 0.29], [0.58, 0.31], [0.84, 0.28],
      [0.16, 0.49], [0.47, 0.47], [0.78, 0.51],
      [0.23, 0.68], [0.57, 0.67], [0.83, 0.70],
      [0.35, 0.87], [0.70, 0.88],
    ],
    mobile: Array.from({ length: 14 }, (_, i) => [
      i % 2 === 0 ? 0.27 : 0.73,
      (Math.floor(i / 2) + 0.5) / 7,
    ]),
  },
  connections: {
    // 提示点按共同依据条数分档；最后一档表示 5+，精确数量始终显示。
    hintColours: ["#667da6", "#50a8ce", "#43dfc4", "#e8db68", "#ffb15c"],
    maxOverviewLines: 24, // 首页最多显示的合并后线条数。
    colours: {
      value: "#b8d7d3", // 同一题/同一 self 的完全相同数值。
      choice: "#dcb48a", // 两人选择了相同选项。
      reason: "#b6a0dc", // 两人明确选择了相同原因。
    },
  },
  foregroundOpacity: { selected: 1, other: 0.85 },
  selfLabels: {
    all: "All selves",
    now: "Actual / Now",
    prefer: "Desired / Prefer",
    expected: "Ought / Expected",
    seen: "Reflected / Seen",
  },
  domains: [
    [-0.36, -0.2],
    [0.25, -0.3],
    [0.37, 0.2],
    [-0.25, 0.3],
    [0, -0.48],
    [0, 0.48],
    [0.49, 0],
  ],
};
