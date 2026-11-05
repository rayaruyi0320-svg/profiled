/* PROFILEd Q21 · one shared particle grammar for an open-ended change pair.
 * The reviewed CHANNEL selects one visual property. The two phrases supply
 * that property's Before and Beginning-to endpoint; no text is auto-scored.
 */
window.Q21Art = (() => {
  const CHANNELS = {
    activation: {
      label: "Particles beginning to move",
      parameter: "movingFraction",
      low: 0.0,
      high: 0.76,
      unit: "of particles",
    },
    engagement: {
      label: "Particles taking part in motion",
      parameter: "engagementFraction",
      low: 0.2,
      high: 0.76,
      unit: "of particles",
    },
    reach: {
      label: "Horizontal reach of the particle field",
      parameter: "reachScale",
      low: 0.7,
      high: 1.25,
      unit: "× base reach",
    },
    permeability: {
      label: "Particles passing the central boundary",
      parameter: "boundaryPassFraction",
      low: 0.15,
      high: 0.8,
      unit: "of eligible particles",
    },
    alignment: {
      label: "Alignment of particle paths",
      parameter: "pathAlignment",
      low: 0.15,
      high: 0.82,
      unit: "of the fixed alignment range",
    },
    irregularity: {
      label: "Irregular motion offset",
      parameter: "jitterAmplitude",
      low: 0.012,
      high: 0.135,
      unit: "× drawing unit",
    },
    spacing: {
      label: "Local distance between particles",
      parameter: "neighborSpacing",
      low: 0.62,
      high: 1.32,
      unit: "× base spacing",
    },
    tempo: {
      label: "Particle flow speed",
      parameter: "flowSpeed",
      low: 0.15,
      high: 0.52,
      unit: "relative rate setting",
    },
  };

  // Fixed for every person. Editing these changes the material, not the
  // interpretation of any participant's answer.
  const DESIGN = {
    particleCount: 2400,
    background: "#101615",
    colors: ["231,236,225", "164,188,175", "224,181,143", "183,172,199"],
    baselineMotion: 0.018,
    trailSeconds: 0.27,
  };

  function random(seed) {
    let state = seed >>> 0;
    return () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  const rand = random(2165);
  const particles = Array.from({ length: DESIGN.particleCount }, (_, i) => ({
    u: rand() * 2 - 1,
    v: (rand() * 2 - 1) * (rand() < 0.76 ? 0.53 : 1),
    phase: rand() * Math.PI * 2,
    gate: rand(),
    color: i % 11 === 0 ? 3 : i % 7 === 0 ? 2 : i % 3 === 0 ? 1 : 0,
    radius: 0.55 + rand() * 0.78,
    alpha: 0.46 + rand() * 0.39,
  }));

  function clamp01(x) {
    return Math.max(0, Math.min(1, x));
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function ease(t) {
    const x = clamp01(t);
    return x * x * (3 - 2 * x);
  }

  function parameterAt(record, progress) {
    const rule = CHANNELS[record.channel];
    if (
      !rule ||
      !["low", "high"].includes(record.beforeLevel) ||
      !["low", "high"].includes(record.nowLevel)
    )
      return null;
    if (progress <= 0) return rule[record.beforeLevel];
    if (progress >= 1) return rule[record.nowLevel];
    return lerp(rule[record.beforeLevel], rule[record.nowLevel], ease(progress));
  }

  function position(p, channel, value, time, unit) {
    // One fixed, open particle sheet: it has no closed outline or literal icon.
    const envelope = Math.pow(Math.max(0, 1 - p.u * p.u), 0.65);
    let x = unit * 1.42 * p.u;
    let y = unit * (0.22 * Math.sin(p.u * 3.2) + 0.58 * p.v * envelope);
    let commonX = unit * DESIGN.baselineMotion * Math.sin(time * 0.31 + p.phase);
    let commonY = unit * DESIGN.baselineMotion * Math.cos(time * 0.23 + p.phase);

    if (channel === "activation") {
      // One scalar decides which fixed particles move. At 0 every particle
      // rests; a moving particle has the same excursion at every progress.
      const active = value <= 0 ? 0 : clamp01((value - p.gate) * 16 + 0.5);
      x += unit * 0.16 * active * Math.sin(time * 1.05 + p.phase);
      y += unit * 0.075 * active * Math.cos(time * 0.81 + p.phase);
      commonX *= active;
      commonY *= active;
    } else if (channel === "reach") {
      x *= value;
    } else if (channel === "engagement") {
      // Exactly this one scalar decides how much of the fixed population moves.
      const active = clamp01((value - p.gate) * 16 + 0.5);
      x += unit * 0.16 * active * Math.sin(time * 1.05 + p.phase);
      y += unit * 0.075 * active * Math.cos(time * 0.81 + p.phase);
    } else if (channel === "permeability") {
      // The same random gate for all participants; only the pass fraction moves.
      const crossing = clamp01((value - p.gate) * 18 + 0.5);
      if (p.u < 0) x = lerp(x, Math.abs(x) * 0.78, crossing);
    } else if (channel === "alignment") {
      const line = Math.round(y / (unit * 0.14)) * unit * 0.14;
      y = lerp(y, line, value);
    } else if (channel === "irregularity") {
      x += unit * value * Math.sin(time * 3.7 + p.phase * 2.3);
      y += unit * value * Math.cos(time * 4.1 + p.phase * 1.7);
    } else if (channel === "spacing") {
      const lane = Math.round(y / (unit * 0.2)) * unit * 0.2;
      y = lane + (y - lane) * value;
    } else if (channel === "tempo") {
      // Keep excursion distance fixed; value changes only the rate of travel.
      x += unit * 0.14 * Math.sin(time * value * 3.5 + p.phase);
      y += unit * 0.055 * Math.cos(time * value * 3.0 + p.phase);
    }
    return [x + commonX, y + commonY];
  }

  function drawBoundary(ctx, cx, cy, unit, time) {
    // A fixed material cue for the permeability channel, never an answer value.
    for (let i = 0; i < 28; i++) {
      const y = cy + unit * (-0.75 + i * 0.055);
      const x = cx + unit * 0.018 * Math.sin(i * 0.53 + time * 0.15);
      ctx.strokeStyle = `rgba(180,199,185,${0.025 + (i % 4) * 0.008})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + unit * 0.025, y + unit * 0.075);
      ctx.stroke();
    }
  }

  function draw(ctx, width, height, record, progress = 0, time = 0) {
    if (window.PROFILED_TRANSPARENT_ART) ctx.clearRect(0, 0, width, height);
    else {
      ctx.fillStyle = DESIGN.background;
      ctx.fillRect(0, 0, width, height);
    }
    const value = parameterAt(record, progress);
    if (value === null) return null;
    const unit = Math.min(width * 0.36, height * 0.46);
    const cx = width * 0.5;
    const cy = height * 0.49;

    if (record.channel === "permeability") drawBoundary(ctx, cx, cy, unit, time);

    // Sparse ghost particles expose motion without drawing a web of hard lines.
    // The same two time samples and alpha are used for every response.
    for (let i = 0; i < particles.length; i += 3) {
      const p = particles[i];
      for (const step of [1, 2]) {
        const [x, y] = position(
          p,
          record.channel,
          value,
          time - DESIGN.trailSeconds * step,
          unit,
        );
        ctx.fillStyle = `rgba(${DESIGN.colors[p.color]},${step === 1 ? 0.17 : 0.09})`;
        ctx.beginPath();
        ctx.arc(cx + x, cy + y, p.radius * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (const p of particles) {
      const [x, y] = position(p, record.channel, value, time, unit);
      ctx.fillStyle = `rgba(${DESIGN.colors[p.color]},${p.alpha})`;
      ctx.beginPath();
      ctx.arc(cx + x, cy + y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    return {
      channel: record.channel,
      parameter: CHANNELS[record.channel].parameter,
      before: CHANNELS[record.channel][record.beforeLevel],
      now: CHANNELS[record.channel][record.nowLevel],
      current: value,
      unit: CHANNELS[record.channel].unit,
    };
  }

  return { CHANNELS, DESIGN, parameterAt, draw };
})();
