(() => {
  const $ = (id) => document.getElementById(id),
    canvas = $("art"),
    c = canvas.getContext("2d");
  let time = 0,
    last = null,
    playing = !matchMedia("(prefers-reduced-motion: reduce)").matches,
    previewTarget = null,
    chosen = new Set(Q7_MEANING_DATA.interests[0].reasons);
  const buttons = [];
  for (const item of Q7_MEANING_DATA.interests) {
    const section = document.createElement("section"),
      title = document.createElement("h2"),
      desc = document.createElement("p"),
      details = document.createElement("details"),
      summary = document.createElement("summary");
    title.textContent = item.text;
    desc.textContent =
      item.reasonStatus === "described"
        ? "Original response: " + item.reasons.join(" · ")
        : "Original response: no reason provided";
    summary.textContent = "View original response";
    details.append(summary);
    for (const text of [item.text, item.story, item.detail].filter(Boolean)) {
      const para = document.createElement("p");
      para.textContent = text;
      details.append(para);
    }
    section.append(title, desc, details);
    $("sources").append(section);
  }
  for (const [id, rule] of Object.entries(Q7Reasons.rules)) {
    const b = document.createElement("button");
    b.textContent = rule.label;
    b.addEventListener("click", () => {
      if (!previewTarget) {
        previewTarget = $("target").value;
      }
      if (chosen.has(id)) chosen.delete(id);
      else if (chosen.size < 2) chosen.add(id);
      sync();
    });
    $("reason-options").append(b);
    buttons.push([id, b]);
  }
  function sync() {
    for (const [id, b] of buttons) {
      b.setAttribute("aria-pressed", String(chosen.has(id)));
      b.disabled = chosen.size === 2 && !chosen.has(id);
    }
    const actual = previewTarget
      ? Array.from(chosen)
          .map((id) => Q7Reasons.rules[id].label)
          .join(" ＋ ") || "No reason effects"
      : null;
    $("preview-state").textContent = previewTarget
      ? "Preview · " +
        Q7_MEANING_DATA.interests.find((i) => i.id === previewTarget).text +
        "：" +
        actual +
        " (original response unchanged)"
      : "Showing the participant’s original response";
    const item = Q7_MEANING_DATA.interests.find((i) => i.id === $("target").value);
    const params = Q7MeaningArt.params(item, {
      baseline: !$("reasons").checked,
      common: !$("activity").checked,
      previewTarget,
      previewReasons: [...chosen],
    });
    $("live-values").textContent = JSON.stringify(params, null, 2);
    draw();
  }
  $("target").addEventListener("change", () => {
    previewTarget = $("target").value;
    chosen = new Set(
      Q7_MEANING_DATA.interests.find((i) => i.id === previewTarget).reasons,
    );
    sync();
  });
  $("clear-reasons").addEventListener("click", () => {
    previewTarget = $("target").value;
    chosen.clear();
    sync();
  });
  $("restore").addEventListener("click", () => {
    previewTarget = null;
    chosen = new Set(
      Q7_MEANING_DATA.interests.find((i) => i.id === $("target").value).reasons,
    );
    sync();
  });
  function draw() {
    const w = canvas.clientWidth,
      h = canvas.clientHeight,
      d = Math.min(devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(w * d) || canvas.height !== Math.round(h * d)) {
      canvas.width = Math.round(w * d);
      canvas.height = Math.round(h * d);
    }
    c.setTransform(d, 0, 0, d, 0, 0);
    Q7MeaningArt.draw(c, w, h, {
      time,
      baseline: !$("reasons").checked,
      common: !$("activity").checked,
      previewTarget,
      previewReasons: [...chosen],
    });
    $("play").textContent = playing ? "Pause" : "Play";
    $("play").setAttribute("aria-pressed", String(playing));
    $("scrub").value = String(time % 10);
    $("mode").textContent =
      (!$("activity").checked
        ? "Shared-depth comparison."
        : "Activity-depth hypothesis enabled.") +
      (!$("reasons").checked
        ? " Reason effects are off."
        : " Each reason controls one particle parameter. Play or scrub to inspect motion.");
  }
  $("play").addEventListener("click", () => {
    playing = !playing;
    draw();
  });
  for (const id of ["reasons", "activity"]) $(id).addEventListener("change", sync);
  $("scrub").addEventListener("input", () => {
    time = Number($("scrub").value);
    playing = false;
    draw();
  });
  for (const b of document.querySelectorAll("[data-step]"))
    b.addEventListener("click", () => {
      const n = Number(b.dataset.step);
      $("activity").checked = n >= 1;
      $("reasons").checked = n >= 2;
      time = 0;
      playing = false;
      sync();
    });
  new ResizeObserver(draw).observe(canvas);
  sync();
  function frame(now) {
    const dt = last === null ? 0 : Math.min((now - last) / 1000, 0.05);
    last = now;
    if (playing && !document.hidden) {
      time += dt;
      draw();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
