// Selves 是观察视角，domain/topic 是情境；两者不互相替代。
// 修改 labels / topicSelves / fieldSelf 即可扩展视角，不要根据颜色判断数据身份。
window.SelfViews = {
  labels: {
    all: "All self-perspectives",
    now: "Actual / Now",
    prefer: "Desired / Prefer",
    expected: "Ought / Expected",
    seen: "Reflected / Seen",
  },
  topicSelves: [
    ["now", "prefer", "expected", "seen"],
    ["now", "prefer", "expected", "seen"],
    ["now", "prefer", "expected"],
    ["now", "prefer"],
    ["now", "prefer"],
    ["now", "expected"],
    [], // 兴趣不强行归属 Actual；作为弱化的共同背景。
  ],
  fieldSelf: {
    Q1_1: "now",
    Q1_2: "prefer",
    Q1_3: "expected",
    Q1_4: "seen",
    Q3_1: "now",
    Q3_2: "prefer",
    Q3_3: "expected",
    Q3_4: "seen",
    Q5_1: "now",
    Q5_2: "prefer",
    Q5_3: "expected",
    Q6_1: "now",
    Q6_2: "prefer",
    Q9a: "now",
    Q9b: "prefer",
    Q12a: "now",
    Q12b: "expected",
  },
  // Q6 的局部 id 与问卷措辞对应；should 不是 prefer。
  canonical(id) {
    return { likely: "now", should: "expected" }[id] || id;
  },
  current() {
    return window.PROFILE_SELF_VIEW || "all";
  },
  allows(id) {
    return this.current() === "all" || this.canonical(id) === this.current();
  },
  includesConnection(item) {
    return this.current() === "all" || this.fieldSelf[item.field] === this.current();
  },
  contextOpacity: 0.28,
  topicMessage(q, view) {
    if (view === "all") return "Showing all recorded self-perspectives.";
    if (q === 6)
      return "Interests remain as shared context; they are not assigned to a self-perspective.";
    if (!this.topicSelves[q].includes(view))
      return (
        "This topic does not ask for " + this.labels[view] + ". No layer is invented."
      );
    return (
      "Showing " +
      this.labels[view] +
      ". Original responses below retain all perspectives for context."
    );
  },
  // 配置在绘制脚本运行前注入。原始回答不改写，几何位置不重排。
  topicHTML(html, q, view) {
    const config =
      "<script>window.PROFILE_SELF_VIEW=" + JSON.stringify(view) + ";</scr" + "ipt>";
    const banner =
      '<p role="status" style="padding:12px 20px;color:#b7c5af;font:13px/1.5 sans-serif">' +
      this.topicMessage(q, view) +
      "</p>";
    const style =
      q === 6 && view !== "all"
        ? "<style>canvas{opacity:" + this.contextOpacity + "}</style>"
        : "";
    return html
      .replace(/<head\b[^>]*>/i, "$&" + config + style)
      .replace(/<body\b[^>]*>/i, "$&" + banner);
  },
  // 个人 profile 同样继承视角，保留 domain → topic 导航和所有原文。
  profileHTML(profile, view) {
    if (view === "all") return profile.html;
    const bundle = profile.selfViews[view];
    const pages = profile.pages.map((page, q) => ({
      ...page,
      preview: bundle.previews[q],
      views: page.views.map((entry) => ({
        ...entry,
        html: this.topicHTML(entry.html, q, view),
      })),
    }));
    const encode = (value) => JSON.stringify(value).replace(/</g, "\\u003c");
    return profile.html
      .replace(
        /<head\b[^>]*>/i,
        "$&<script>window.PROFILE_SELF_VIEW=" +
          JSON.stringify(view) +
          ";window.PROFILE_CONTEXT_OPACITY=" +
          this.contextOpacity +
          ";</scr" +
          "ipt>",
      )
      .replace(
        /const pages=[\s\S]*?;\s*(?=\(\(\)\s*=>)/,
        () => "const pages=" + encode(pages) + ";\n",
      )
      .replace(
        /window\.PROFILE_CLUSTER_POINTS=[\s\S]*?;/,
        () => "window.PROFILE_CLUSTER_POINTS=" + encode(bundle.points) + ";",
      );
  },
};
