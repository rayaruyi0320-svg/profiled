// 【连接规则】只比较同一字段/同一 self 的精确相等或明确选择。
// value = 相同数值；choice = 相同固定选项；reason = 两人明确选择的 Q19 原因。
// 不用关键词相似度，不因为两人「数值接近」就画线。
// localComparisonTestMode 仅临时覆盖 Q37 的两人测试资格；不改任何答案。
window.ConnectionRules = {
  eligible(topic) {
    if (!topic) return false;
    // Story cards have their own permission field, separate from Q37.
    // The local Q37 test override does not change story-card permissions.
    if (APP_CONFIG.localComparisonTestMode && topic.id !== "q42") return true;
    return ["May share and compare after my review", "compare_after_review"].includes(
      topic.scope,
    );
  },
  derive(a, b) {
    const links = [];
    const selectedReasons = (raw) => new Set(
      (raw || "").split(",").map((value) => value.trim()).filter(Boolean),
    );
    for (const ta of a.topics) {
      const tb = b.topics.find((t) => t.id === ta.id);
      if (!tb || !this.eligible(ta) || !this.eligible(tb)) continue;
      const q = Number(ta.id.slice(1));
      if (q <= 6 && (!ta.data || !tb.data)) continue;
      if (q <= 4) {
        for (const f of ta.fields) {
          if (
            a.answers[f] !== "" &&
            b.answers[f] !== "" &&
            Number(a.answers[f]) === Number(b.answers[f])
          )
            links.push({
              type: "value",
              topic: ta.id,
              field: f,
              self: SelfViews.fieldSelf[f],
              label: "Same response",
              a: a.answers[f],
              b: b.answers[f],
              evidence: CATALOG.prompts[f],
            });
        }
      }
      if (q === 5 || q === 6) {
        ta.data.selves.forEach((s, i) => {
          const other = tb.data.selves[i];
          for (const id of s.answers) {
            if (id === "other" || !other.answers.includes(id)) continue;
            const option = (q === 5 ? CATALOG.options5 : CATALOG.options6).find(
              (o) => o.id === id,
            );
            links.push({
              type: "choice",
              topic: ta.id,
              field: s.field,
              self: SelfViews.canonical(s.id),
              label: "Shared choice",
              a: option.raw,
              b: option.raw,
              evidence: CATALOG.prompts[s.field],
            });
          }
        });
      }
      if (q === 7) {
        // Q19 explicitly asks why each person's Q18 activity draws them back.
        // Match the selected reasons once per person, independent of whether a
        // Q18 answer has one activity or several approved visual motifs.
        // This does not assign a reason to every Q16 interest.
        const chosenA = (a.answers.Q18 || "").trim();
        const chosenB = (b.answers.Q18 || "").trim();
        if (!chosenA || !chosenB) continue;
        const reasonsB = selectedReasons(b.answers.Q19);
        for (const reason of selectedReasons(a.answers.Q19))
          if (reasonsB.has(reason) && reason !== "Something else")
            links.push({
              type: "reason",
              reason,
              topic: "q7",
              field: "Q19",
              self: null,
              label: "Shared reason",
              a: `${chosenA}: ${reason}`,
              b: `${chosenB}: ${reason}`,
              evidence:
                "Both participants selected this Q19 reason for the activity or activities they named in Q18. It is not automatically assigned to their other interests.",
            });
      }
      if (q === 8) {
        // Q17b only describes the moment if the participant supplied the
        // event, what was shown, and what remained unseen in Q17a_1–3.
        const complete = (person) => ["Q17a_1", "Q17a_2", "Q17a_3"]
          .every((field) => (person.answers[field] || "").trim());
        if (!complete(a) || !complete(b)) continue;
        const choicesB = selectedReasons(b.answers.Q17b);
        for (const choice of selectedReasons(a.answers.Q17b))
          if (choicesB.has(choice) && choice !== "Something else")
            links.push({
              type: "choice",
              topic: "q8",
              field: "Q17b",
              self: null,
              label: "Shared choice",
              a: choice,
              b: choice,
              evidence: CATALOG.prompts.Q17b,
            });
      }
    }
    return links.map((l, i) => ({
      ...l,
      id: `${a.id}-${b.id}-${i}`,
      from: a.id,
      to: b.id,
      review:
        "Local researcher preview; participant and connection review still required.",
    }));
  },
  visible(link, view, topic, types) {
    return (
      types.includes(link.type) &&
      (!topic || link.topic === topic) &&
      (view === "all" || link.self === view)
    );
  },
};
