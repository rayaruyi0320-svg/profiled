/* Q22 · shared particle material for feared-pattern answers.
 * Most reviewed categories use one open, broken-spiral orbit. A response about
 * an unresolved future destination uses an open path instead: a recurring
 * spiral would wrongly imply an already-repeated behaviour.
 * Each category still has one scalar parameter. No text is auto-scored.
 */
window.Q22Art = (() => {
  const CATEGORIES = {
    microTurbulence: {
      label: "Repeated small snags in the orbit",
      parameter: "snagDepth",
      open: 0.0,
      feared: 0.95,
      unit: "radians of angular setback",
    },
    constriction: {
      label: "Room to move contracts",
      parameter: "radialCompression",
      open: 1.0,
      feared: 0.43,
      unit: "× original orbital radius",
    },
    stall: {
      label: "A broad hesitation in the orbit",
      parameter: "stallDepth",
      open: 0.0,
      feared: 1.42,
      unit: "radians of local angular hold",
    },
    pushback: {
      label: "Pushed outward near the center",
      parameter: "pushbackDistance",
      open: 0.0,
      feared: 0.67,
      unit: "× drawing unit of outward travel",
    },
    unresolvedDestination: {
      label: "An unresolved future destination",
      parameter: "terminalSpread",
      open: 0.0,
      feared: 0.78,
      unit: "× drawing unit of endpoint spread",
    },
    externalPull: {
      label: "Drawn toward an outside point",
      parameter: "externalPull",
      open: 0.0,
      feared: 0.63,
      unit: "fraction of the fixed pull",
    },
    repetition: {
      label: "More returns around the center",
      parameter: "orbitTurns",
      open: 1.68,
      feared: 2.72,
      unit: "turns around the center",
    },
    visibilityTension: {
      label: "A narrower clear arc",
      parameter: "clearArcFraction",
      open: 1.0,
      feared: 0.29,
      unit: "fraction of the orbit fully visible",
    },
  };

  // These constants are identical for all participants. Changing them changes
  // the common visual material, not an individual participant's mapping.
  const DESIGN = {
    particleCount: 3100,
    background: "#101615",
    colors: ["231,235,226", "168,190,177", "226,179,149", "199,181,208"],
    formationSeconds: 7,
    ambientSpeed: 0.2,
    ghostOpacity: 0.068,
  };

  function random(seed) {
    let state = seed >>> 0;
    return () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }
  const rand = random(2207);
  const particles = Array.from({ length: DESIGN.particleCount }, (_, i) => ({
    u: rand(),
    offset: ((rand() + rand() + rand()) / 3 - 0.5) * 2,
    phase: rand() * Math.PI * 2,
    radius: 0.48 + rand() * 0.74,
    alpha: 0.32 + rand() * 0.43,
    color: i % 13 === 0 ? 3 : i % 7 === 0 ? 2 : i % 3 === 0 ? 1 : 0,
  }));

  function clamp01(x) {
    return Math.max(0, Math.min(1, x));
  }
  function ease(x) {
    const t = clamp01(x);
    return t * t * (3 - 2 * t);
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function parameterAt(record, progress) {
    const rule = CATEGORIES[record.category];
    return rule ? lerp(rule.open, rule.feared, ease(progress)) : null;
  }

  function pathPoint(particle, category, value, time, width, height) {
    const unit = Math.min(width * 0.26, height * 0.47);
    const u = particle.u;
    if (category === "unresolvedDestination") {
      // Fixed open path: this answer is about a possible future outcome, not
      // an already-recurring loop. Only terminalSpread varies with formation.
      const arrival = ease((u - 0.69) / 0.25);
      const lane = Math.sin(particle.phase);
      const x =
        width * (0.12 + 0.72 * u) +
        unit * value * arrival * lane * 0.24 +
        1.5 * Math.sin(time * 0.31 + particle.phase);
      const y =
        height * 0.5 +
        unit * (0.075 * Math.sin(u * 4.6) + 0.08 * particle.offset * Math.sin(Math.PI * u)) +
        unit * value * arrival * lane * 0.9 +
        1.5 * Math.cos(time * 0.27 + particle.phase);
      return [x, y];
    }

    // Other categories share a scattered spiral with two unjoined ends.
    const turns = category === "repetition" ? value : CATEGORIES.repetition.open;
    let angle = -Math.PI * 0.94 + u * Math.PI * 2 * turns;
    let radius = unit * (0.84 - 0.57 * u + 0.13 * particle.offset);

    if (category === "microTurbulence") {
      // Only snagDepth changes. Five fixed local setbacks interrupt the same
      // outward-to-inward orbit; no extra radius, color or speed is mapped.
      const snags = [0.14, 0.32, 0.51, 0.71, 0.87];
      let setback = 0;
      for (const center of snags) {
        const distance = (u - center) / 0.027;
        setback += Math.exp(-distance * distance);
      }
      angle -= value * setback;
    } else if (category === "constriction") {
      // Only radialCompression changes; the orbit's angle and particle count
      // are untouched. The common faint orbit makes lost room visible.
      radius *= value;
    } else if (category === "stall") {
      // One broad angular hold, rather than the reference pattern’s five small catches.
      const distance = (u - 0.53) / 0.105;
      angle -= value * Math.exp(-distance * distance);
    } else if (category === "pushback") {
      // The same orbit approaches the center until a fixed point near its end.
      // Only the radial distance of the outward push changes with the answer.
      const onset = ease((u - 0.72) / 0.09);
      radius += unit * value * onset;
    }

    // Shared slow orbital drift: constant for every response and value.
    angle += time * DESIGN.ambientSpeed * 0.32;
    let x =
      width * 0.5 +
      radius * Math.cos(angle) +
      1.5 * Math.sin(time * 0.31 + particle.phase);
    let y =
      height * 0.5 +
      radius * 0.88 * Math.sin(angle) +
      1.5 * Math.cos(time * 0.27 + particle.phase);
    if (category === "externalPull") {
      // One scalar moves each point toward the same external location.
      // The attractor position is a shared design constant, not participant data.
      x = lerp(x, width * 0.76, value);
      y = lerp(y, height * 0.19, value);
    }
    return [x, y];
  }

  function particleOpacity(particle, category, value) {
    if (category !== "visibilityTension") return particle.alpha;
    // The answer changes only the length of the fully visible arc. Location,
    // fade width, colors and particle population stay fixed.
    const halfArc = value * 0.5;
    const distance = Math.abs(particle.u - 0.5);
    const outside = ease((distance - halfArc) / 0.08);
    return particle.alpha * lerp(1, 0.075, outside);
  }

  function dot(ctx, x, y, radius, rgb, opacity) {
    ctx.fillStyle = `rgba(${rgb},${opacity})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function draw(ctx, width, height, record, progress, time) {
    if (window.PROFILED_TRANSPARENT_ART) ctx.clearRect(0, 0, width, height);
    else {
      ctx.fillStyle = DESIGN.background;
      ctx.fillRect(0, 0, width, height);
    }
    const rule = CATEGORIES[record.category];
    if (!rule) return null;
    const current = parameterAt(record, progress);

    // A faint zero-parameter reference uses the same fixed base geometry as
    // the active drawing. It is not another self or answer-driven variable.
    for (const p of particles) {
      const [x, y] = pathPoint(p, record.category, rule.open, time, width, height);
      dot(ctx, x, y, p.radius, DESIGN.colors[1], DESIGN.ghostOpacity);
    }

    // The selected category alone changes the active particle orbit.
    for (const p of particles) {
      const [x, y] = pathPoint(p, record.category, current, time, width, height);
      dot(
        ctx,
        x,
        y,
        p.radius,
        DESIGN.colors[p.color],
        particleOpacity(p, record.category, current),
      );
    }
    return {
      parameter: rule.parameter,
      current,
      open: rule.open,
      feared: rule.feared,
      unit: rule.unit,
    };
  }

  return { CATEGORIES, DESIGN, parameterAt, draw };
})();
