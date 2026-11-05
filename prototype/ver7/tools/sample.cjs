// 【生成步骤 2/2】从 shared/ 原绘图函数采样整体星系。
// 生成的点坐标写到 generated/galaxies.js；它们是缓存，不是调参入口。
// 改 shared/ 的映射后运行 build.py，才能同步更新首页的整体星系。
const fs = require("fs"),
  vm = require("vm"),
  path = require("path");
const { createCanvas } = require("./canvas-runtime.cjs");
const root = path.resolve(__dirname, "..");
const files = [
  "generated/catalog.js",
  "app/config.js",
  "shared/self-views.js",
  "shared/q1-filaments.js",
  "shared/q2-membranes.js",
  "shared/q3-weave.js",
  "shared/mapping.js",
  "shared/particles.js",
  "shared/q5-atlas.js",
  "shared/q5-field.js",
  "shared/q6-templates.js",
  "shared/q6-boundary.js",
  "shared/q7-reasons.js",
  "shared/q7-meaning-art.js",
  "shared/q8-art.js",
  "shared/q21-art.js",
  "shared/q22-art.js",
  "shared/q42-art.js",
  "app/render-bridge.js",
];
const c = {
  console,
  devicePixelRatio: 1,
  matchMedia: () => ({ matches: true }),
  ResizeObserver: class {
    observe() {}
  },
  IntersectionObserver: class {
    observe() {}
  },
  requestAnimationFrame: () => 0,
};
c.window = c;
vm.createContext(c);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), c);
// 可选 TOPIC_ONLY=q5：只重建一题，其余缓存保持不变。
const only = process.env.TOPIC_ONLY;
if (only) vm.runInContext(fs.readFileSync(path.join(root, "generated/galaxies.js"), "utf8"), c);
const output = only ? c.GALAXIES : {};
let renders = 0;
const pending = [];
for (const p of c.CATALOG.people) {
  output[p.id] ||= {};
  for (const topic of p.topics) {
    if (!topic.data || (only && topic.id !== only)) continue;
    const result = {};
    for (const view of ["all", "now", "prefer", "expected", "seen"]) {
      if (Number(topic.id.slice(1)) >= 7 && view !== "all") continue;
      for (const phase of ["Start", "F1", "F2", "F3", ""]) {
      const phaseIndex = ["Start", "F1", "F2", "F3", ""].indexOf(phase);
      const motionTime = phaseIndex * c.APP_CONFIG.galaxy.formationSeconds / 4;
      const motionProgress = (1 - Math.cos(Math.PI * phaseIndex / 4)) / 2;
      const count = topic.id === "q7" ? topic.data.interests.length : 1;
      const points = [];
      for (let item = 0; item < count; item++) {
        // Center each row, including an odd final interest. Preserve motif size.
        const row = Math.floor(item / 2);
        const rowCount = Math.min(2, count - row * 2);
        const interestX = count > 1
          ? (item % 2 - (rowCount - 1) / 2) * c.APP_CONFIG.galaxy.interestSpacing.x : 0;
        const interestY = count > 1
          ? (row - (Math.ceil(count / 2) - 1) / 2) * c.APP_CONFIG.galaxy.interestSpacing.y : 0;
        const canvas = createCanvas(600, 600),
          ctx = canvas.getContext("2d");
        const el = {
          width: 600,
          height: 600,
          clientWidth: 600,
          clientHeight: 600,
          getContext: () => ctx,
          setAttribute() {},
        };
        c.VisualBridge.draw(el, topic, { view, item, time: motionTime, progress: motionProgress });
        renders++;
        const raw = ctx.getImageData(0, 0, 600, 600).data,
          candidates = [];
        for (let y = 0; y < 600; y += 2)
          for (let x = 0; x < 600; x += 2) {
            const at = (y * 600 + x) * 4;
            // 排除深色背景，避免背景像素占满粒子预算。
            if (raw[at + 3] > 12 && Math.max(raw[at], raw[at + 1], raw[at + 2]) > 65)
              candidates.push([
                +((x / 600 - 0.5) * (count > 1 ? 0.65 : 1) + interestX).toFixed(4),
                +((y / 600 - 0.5) * (count > 1 ? 0.65 : 1) + interestY).toFixed(4),
                raw[at],
                raw[at + 1],
                raw[at + 2],
                raw[at + 3],
              ]);
          }
        // 先保留候选像素，稍后跨所有人按同题/同 self 的统一上限采样。
        // 不能给稀疏图和密集图强行分配相同点数，否则抹掉数量映射。
        // 预抽样只限制构建内存；保留原像素量用于所有人共用的密度比例。
        const population = candidates.length;
        let seed = 187;
        for (let n = 0; n < Math.min(c.APP_CONFIG.galaxy.pointsPerTopic, population); n++) {
          seed = (seed * 1664525 + 1013904223) >>> 0;
          const k = n + Math.floor(seed / 4294967296 * (population - n));
          [candidates[n], candidates[k]] = [candidates[k], candidates[n]];
        }
        candidates.length = Math.min(candidates.length, c.APP_CONFIG.galaxy.pointsPerTopic);
        pending.push({ key: topic.id + "/" + view, candidates, population, points, count: topic.id === "q7" ? 1 : count });
      }
      result[view + phase] = points;
      }
    }
    output[p.id][topic.id] = result;
  }
  console.log("Sampled", p.name);
}
const maxima = {};
for (const sample of pending)
  maxima[sample.key] = Math.max(maxima[sample.key] || 0, sample.population);
for (const { key, candidates, population, points, count } of pending) {
  let seed = 187;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const limit = Math.min(candidates.length, Math.round(
    c.APP_CONFIG.galaxy.pointsPerTopic / count * population / (maxima[key] || 1)));
  for (let n = 0; n < limit; n++) {
    const k = n + Math.floor(random() * (candidates.length - n));
    [candidates[n], candidates[k]] = [candidates[k], candidates[n]];
    points.push(candidates[n]);
  }
}
fs.writeFileSync(
  path.join(root, "generated/galaxies.js"),
  "// AUTO-GENERATED point samples, not editable art rules.\nwindow.GALAXIES=" +
    JSON.stringify(output) +
    ";\n",
);
console.log("Rendered", renders, "topic/self/item samples.");

// 浏览器按人加载压缩缓存；原始可读数据保留供离线检查，手工参数仍在 shared/。
const cacheDir = path.join(root, "generated/cache");
fs.mkdirSync(cacheDir, { recursive: true });
for (const [id, data] of Object.entries(output)) {
  const packed = require("zlib").gzipSync(JSON.stringify(data)).toString("base64");
  fs.writeFileSync(path.join(cacheDir, `${id}.js`),
    `// Generated binary cache — do not edit. Rebuild with build.py.\nGalaxyCache.receive(${JSON.stringify(id)},${JSON.stringify(packed)});\n`);
}

require("./write-profile-samples.cjs")(output);
