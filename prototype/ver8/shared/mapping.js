// 【参数编辑入口】
// 第 4 题｜contourAmplitude 的 0.01 是基础起伏，1.0 是增益，平方让高值起伏更明显。
// offset 是相对 Now 的有符号差值；两种映射的职责不要混用。
// 改完执行 VS Code 的「更新所有视觉」任务；具体步骤见 START-HERE.md。

// 数据→视觉的唯一入口。颜色、粒子数量与速度不从回答中推断。
window.ProfileMapping = (() => {
  const perspectives = {
    now: { label: "Actual / Now", short: "Now", color: "#e3e8dc" },
    prefer: { label: "Desired / Prefer", short: "Prefer", color: "#d9a078" },
    expected: { label: "Ought / Expected", short: "Expected", color: "#9aaea0" },
    seen: { label: "Reflected / Seen", short: "Seen", color: "#aaa0bd" },
  };
  function mapTopic(topic, all = false) {
    const baseline = topic.answers.find((a) => a.perspective === "now")?.value;
    return topic.answers
      .filter(
        (a) =>
          (all || ["now", "prefer"].includes(a.perspective)) && Number.isFinite(a.value),
      )
      .map((a) => ({
        ...a,
        ...perspectives[a.perspective],
        // 单个回答只控制轮廓起伏幅度；频率、散布、粒子数及速度均固定。
        // 单调平方曲线：0 → 0.01，100 → 1.01（基础半径的比例）。
        // 放大中高值的轮廓差异；仍然只输出一个形态参数，不是心理强度量表。
        contourAmplitude: 0.01 + 1.0 * (a.value / 100) ** 2,
        // 有 Now 时，差值 [-100,100] 映射到 [-1,1]。Now 缺答时保持中性位置，不能冒充 0。
        offset: Number.isFinite(baseline) ? (a.value - baseline) / 100 : 0,
        relativeAvailable: Number.isFinite(baseline),
      }));
  }
  return { perspectives, mapTopic };
})();
