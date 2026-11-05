/* PROFILEd · topic 08: A moment others did not fully see.
 * This renderer receives one event and draws one continuous particle trace.
 * Survey text is never classified as an emotion or personality trait.
 */
window.Q8Art = (() => {
  const OPTIONS = [
    "My own needs",
    "A responsibility",
    "Someone’s expectations",
    "The role I was in",
    "Habit",
    "Uncertainty",
    "Something else",
  ];

  const PALETTE = {
    shown: "227,232,220", // Existing pale Actual / Now family.
    unseen: "170,160,189", // A separate, quieter Private / Unseen layer.
    influence: "207,177,143",
  };

  // One written answer -> one number: the extent of its own part of the trace.
  // Graphemes make emoji/combined characters count as one; whitespace is ignored.
  // This measures amount of text recorded, never significance or emotional strength.
  function graphemeCount(answer) {
    const letters = String(answer || "")
      .trim()
      .replace(/\s+/gu, "");
    if (!letters) return 0;
    if (typeof Intl.Segmenter !== "function") return Array.from(letters).length;
    return [
      ...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(letters),
    ].length;
  }

  // Q8 trace-length mapping. These four values can be tuned independently.
  // A shorter cap and a gentler exponent make short/medium answers visibly
  // different while keeping long answers inside the canvas. This still measures
  // only written length, never the importance or strength of a feeling.
  const LENGTH_CAP = 180; // Graphemes at which the trace reaches its full extent.
  const MIN_EXTENT = 0.12; // Minimum extent for any non-empty answer.
  const EXTENT_RANGE = 1.6; // Added extent between the minimum and the cap.
  const LENGTH_EXPONENT = 0.75;

  function extent(answer) {
    const n = graphemeCount(answer);
    return n
      ? MIN_EXTENT +
        EXTENT_RANGE * (Math.min(n, LENGTH_CAP) / LENGTH_CAP) ** LENGTH_EXPONENT
      : 0;
  }

  function selectedReasons(response) {
    return String(response || "")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => OPTIONS.includes(s));
  }

  // A fixed pseudo-random sample keeps both participants' material comparable.
  function random(seed) {
    let state = seed >>> 0;
    return () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  function rgba(rgb, opacity) {
    return `rgba(${rgb},${opacity})`;
  }

  // Q17a_1 has one manually reviewed, categorical mapping: path geometry.
  // "incident" = an identifiable event; "unlocated" = the answer does not
  // identify a specific event/action. This does not guess a psychological state.
  // Both portions still meet at one boundary; geometry never changes their values.
  function centerline(cx, cy, unit, s, time, geometry) {
    const motion = Math.sin(time * 0.28 + s * 3.8) * 0.012;
    if (geometry === "unlocated") {
      // Open, opposing arcs avoid implying a chronological event sequence.
      const arc = Math.sign(s) * 0.38 * Math.abs(s) ** 1.25;
      return [cx + s * unit, cy + unit * (arc + 0.025 * Math.sin(s * 5) + motion)];
    }
    return [
      cx + s * unit,
      cy + unit * (0.17 * Math.sin(s * 2.2) + 0.09 * Math.sin(s * 4.7) + motion),
    ];
  }

  function drawVeil(ctx, cx, cy, unit, time) {
    const r = random(7409);
    for (let i = 0; i < 74; i++) {
      const x = cx + (r() - 0.5) * unit * 0.33;
      const length = unit * (0.62 + r() * 0.85);
      const y0 = cy - length * 0.5;
      ctx.beginPath();
      for (let j = 0; j <= 35; j++) {
        const t = j / 35;
        const px = x + unit * 0.03 * Math.sin(t * 6 + i * 0.25 + time * 0.12);
        const py = y0 + length * t;
        j ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.strokeStyle = rgba("177,193,183", 0.008 + 0.012 * r());
      ctx.lineWidth = 0.45;
      ctx.stroke();
    }
  }

  function drawTrace(ctx, cx, cy, unit, span, direction, color, time, geometry) {
    if (!span) return;
    const r = random(8132); // Same strand configuration on both sides.
    const end = span * direction;
    const unseen = direction > 0;
    const scatter = unseen ? 0.068 : 0.035; // Fixed material treatment.

    for (let lane = 0; lane < 48; lane++) {
      const lift = (r() - 0.5) * unit * scatter;
      const phase = r() * Math.PI * 2;
      ctx.beginPath();
      for (let step = 0; step <= 70; step++) {
        const t = step / 70;
        const s = end * t;
        const [x, y] = centerline(cx, cy, unit, s, time, geometry);
        const taper = Math.sin(Math.PI * t);
        const yy =
          y +
          lift * taper +
          unit * 0.011 * taper * Math.sin(t * 16 + phase + time * 0.22);
        step ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy);
      }
      ctx.strokeStyle = rgba(color, (unseen ? 0.22 : 0.28) + r() * 0.14);
      ctx.lineWidth = 0.42;
      ctx.stroke();
    }

    for (let i = 0; i < 1350; i++) {
      const t = r();
      const s = end * t;
      const [x, y] = centerline(cx, cy, unit, s, time, geometry);
      const envelope = Math.sin(Math.PI * t);
      const scatterY = (r() - 0.5) * unit * scatter * 2.4 * envelope;
      const scatterX = (r() - 0.5) * unit * scatter * 0.5 * envelope;
      const alpha = (unseen ? 0.1 : 0.15) + r() * (unseen ? 0.3 : 0.4);
      ctx.fillStyle = rgba(color, alpha);
      ctx.beginPath();
      ctx.arc(x + scatterX, y + scatterY, 0.28 + r() * 0.55, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Q17b is categorical. Each chosen option adds exactly one local knot at a
  // fixed site along the shown trace; knot number/position is not a score.
  function drawInfluences(ctx, cx, cy, unit, shownSpan, response, time, geometry) {
    if (!shownSpan) return;
    const selected = selectedReasons(response);
    for (const option of selected) {
      const index = OPTIONS.indexOf(option);
      const s = -shownSpan * (0.17 + index * 0.105);
      const [x, y] = centerline(cx, cy, unit, s, time, geometry);
      const r = random(4500 + index);
      for (let i = 0; i < 95; i++) {
        const angle = r() * Math.PI * 2;
        const distance = unit * (0.011 + r() * 0.026);
        ctx.fillStyle = rgba(PALETTE.influence, 0.12 + r() * 0.52);
        ctx.beginPath();
        ctx.arc(
          x + Math.cos(angle) * distance,
          y + Math.sin(angle) * distance * 0.75,
          0.3 + r() * 0.45,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
    }
  }

  function draw(ctx, width, height, record, time = 0) {
    ctx.clearRect(0, 0, width, height);
    const cx = width * 0.5;
    const cy = height * 0.49;
    const unit = Math.min(width * 0.235, height * 0.42);
    const shownSpan = extent(record.shown);
    const unseenSpan = extent(record.unseen);
    const geometry = record.contextGeometry === "unlocated" ? "unlocated" : "incident";

    // Draw the quieter layer first so both fragments appear to pass through
    // the same translucent boundary rather than become separate pictures.
    drawTrace(ctx, cx, cy, unit, unseenSpan, 1, PALETTE.unseen, time, geometry);
    drawVeil(ctx, cx, cy, unit, time);
    drawTrace(ctx, cx, cy, unit, shownSpan, -1, PALETTE.shown, time, geometry);
    drawInfluences(ctx, cx, cy, unit, shownSpan, record.influences, time, geometry);

    return {
      shownCharacters: graphemeCount(record.shown),
      unseenCharacters: graphemeCount(record.unseen),
      shownExtent: shownSpan,
      unseenExtent: unseenSpan,
      contextGeometry: geometry,
      selected: selectedReasons(record.influences),
    };
  }

  return {
    OPTIONS,
    LENGTH_CAP,
    MIN_EXTENT,
    EXTENT_RANGE,
    LENGTH_EXPONENT,
    graphemeCount,
    extent,
    selectedReasons,
    draw,
  };
})();
