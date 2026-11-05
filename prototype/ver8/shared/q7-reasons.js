// 【参数编辑入口】
// 第 7 题｜最适合先修改的参数表。base 是未提供原因时的基准。
// rules 中每个原因只写一个 key 和一个 value；每次只改 value，查看对应微粒效果。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

window.Q7Reasons = {
  base: {
    motionCycle: 0,
    scatterAmount: 0,
    hueSpread: 0,
    clusterPull: 0,
    particleRadius: 0.43,
    echoOpacity: 0,
    glowStrength: 0,
  },
  rules: {
    "Enjoying the process": {
      key: "motionCycle",
      value: 1,
      label: "Enjoying the process",
      meaning:
        "A repeated motion path suggests an ongoing process. Frequency is fixed; it does not measure enjoyment.",
    },
    "Having breathing space": {
      key: "scatterAmount",
      value: 0.055,
      label: "Having breathing space",
      meaning: "Looser particles and more open edges suggest breathing space.",
    },
    "Discovering new things": {
      key: "hueSpread",
      value: 80,
      label: "Discovering new things",
      meaning:
        "A wider hue range suggests discovery. HSL lightness stays fixed; this is not a curiosity score.",
    },
    "Connecting with people": {
      key: "clusterPull",
      value: 0.7,
      label: "Connecting with people",
      meaning:
        "Local particle clusters suggest connection, not a friend count or actual social network.",
    },
    "Practicing a skill": {
      key: "particleRadius",
      value: 0.28,
      label: "Practicing a skill",
      meaning: "Finer particles suggest careful practice, not a measure of skill.",
    },
    "A memory associated with it": {
      key: "echoOpacity",
      value: 0.17,
      label: "A memory associated with it",
      meaning:
        "A faint echo suggests a memory trace without inferring its content or emotion.",
    },
    "I simply enjoy it": {
      key: "glowStrength",
      value: 0.38,
      label: "I simply enjoy it",
      meaning:
        "A soft glow emphasizes enjoyment as a design convention, not a happiness score.",
    },
  },
  resolve(item) {
    const result = { ...this.base };
    for (const reason of item.reasons || []) {
      const rule = this.rules[reason];
      if (rule) result[rule.key] = rule.value;
    }
    return result;
  },
};
