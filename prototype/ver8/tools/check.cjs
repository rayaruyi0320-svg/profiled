// 离线检查：不替代真实浏览器的布局与交互验收。
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");
const root = path.resolve(__dirname, "..");
const context = { console };
context.window = context;
vm.createContext(context);
for (const file of [
  "generated/catalog.js",
  "generated/galaxies.js",
  "app/config.js",
  "shared/self-views.js",
  "app/connections.js",
]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
}
const { CATALOG, GALAXIES, ConnectionRules, APP_CONFIG } = context;
// A moved or renamed script must not leave the offline HTML unable to load.
for (const page of ["index.html", "render.html"]) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  for (const [, source] of html.matchAll(/<script src="([^"]+)"/g))
    assert(fs.existsSync(path.join(root, source.split("?")[0])), `${page} references missing ${source}`);
}
assert.equal(CATALOG.people.length, 14);
let mapped = 0;
let links = 0;
const kinds = {};
for (const person of CATALOG.people) {
  for (const topic of person.topics) {
    if (!topic.data) continue;
    mapped++;
    assert(GALAXIES[person.id][topic.id], `${person.id}/${topic.id} missing sample`);
    const samples = GALAXIES[person.id][topic.id].all;
    assert(samples.length > 0, `${person.id}/${topic.id} empty render`);
    for (const point of samples) assert(point.every(Number.isFinite));
  }
}
for (let i = 0; i < CATALOG.people.length; i++) {
  for (let j = i + 1; j < CATALOG.people.length; j++) {
    const a = CATALOG.people[i],
      b = CATALOG.people[j];
    for (const link of ConnectionRules.derive(a, b)) {
      links++;
      kinds[link.type] = (kinds[link.type] || 0) + 1;
      assert(ConnectionRules.eligible(a.topics.find((t) => t.id === link.topic)));
      assert(ConnectionRules.eligible(b.topics.find((t) => t.id === link.topic)));
      if (link.type === "value") assert.equal(Number(link.a), Number(link.b));
      if (link.type === "choice") assert.equal(link.a, link.b);
      assert(!ConnectionRules.visible(link, "all", "not-this-topic", [link.type]));
    }
  }
}
const blankScopePerson = CATALOG.people.find((person) => person.name === "Participant B");
assert(blankScopePerson.topics.every((topic) => topic.scope !== "May share and compare after my review"));
const testMode = APP_CONFIG.localComparisonTestMode;
if (testMode)
  for (const other of CATALOG.people.filter((person) => person.id !== blankScopePerson.id))
    assert(
      ConnectionRules.derive(blankScopePerson, other).length > 0,
      `Local test mode has no evidence-backed connection for Participant B × ${other.name}`,
    );
APP_CONFIG.localComparisonTestMode = false;
assert(
  CATALOG.people.every((person) => person.id === blankScopePerson.id ||
    ConnectionRules.derive(blankScopePerson, person).length === 0),
  "Turning off the local override must restore the original Q37 comparison restriction",
);
APP_CONFIG.localComparisonTestMode = testMode;
// Q19 is a source-selected reason for Q18, even when a reviewed visual uses
// researcher-approved attribution across two Q18 activities.
const byName = (name) => CATALOG.people.find((person) => person.name === name);
assert(
  ConnectionRules.derive(byName("Participant E"), byName("Participant J")).some(
    (link) => link.topic === "q7" && link.type === "reason" &&
      link.a.endsWith("Enjoying the process"),
  ),
  "Q19 shared reason missing from an approved multi-activity Q18 response",
);
assert(
  !ConnectionRules.derive(byName("Participant H"), byName("Participant L")).some(
    (link) => link.topic === "q8" && link.field === "Q17b",
  ),
  "A skipped Q17a event must not create a Q17b connection",
);
console.log({
  people: CATALOG.people.length,
  mappedTopics: mapped,
  exactConnections: links,
  kinds,
});

// Regression guard: a mistaken write once replaced the stylesheet with app.js.
const css = fs.readFileSync(path.join(root, "app/style.css"), "utf8");
assert(!css.includes("document.getElementById"), "JavaScript was written into the stylesheet");
assert(!css.includes("requestAnimationFrame("), "Unexpected JavaScript in CSS");
for (const selector of [":root", "#stage.sky", "#topic-preview", ".reading-panel", "#preview-reading"])
  assert(css.includes(selector), `Required stylesheet section missing: ${selector}`);

// 已确认试稿必须进入目录，防止下次构建再次退回 pending。
for (const [id, topics] of Object.entries({p02:["q8","q22"],p03:["q21","q22"],p11:["q8"],p13:["q7"]}))
  for (const topic of topics)
    assert(CATALOG.people.find(p => p.id === id).topics.find(t => t.id === topic).data, `${id}/${topic}: reviewed mapping lost`);
