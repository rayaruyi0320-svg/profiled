/* Q42 · a structured story satellite, not a word-count chart.
 * Context and Actual Self are two fixed particle populations. The only
 * story-specific visual variable is relationDirection: +1 inward, -1 outward,
 * or 0 suspended. The human-reviewed interpretation lives in q42-data.js.
 */
window.Q42Art = (() => {
  const RULE = {
    parameter: "relationDirection",
    inward: 1,
    suspended: 0,
    outward: -1,
  };

  const DESIGN = {
    background: "#101615",
    contextColor: "163,187,174",
    selfColor: "233,222,200",
    flowColor: "226,177,151",
    contextParticles: 1500,
    selfParticles: 950,
    relationParticles: 1350,
    formationSeconds: 8,
    ambientSpeed: 0.35,
  };

  function random(seed) {
    let state = seed >>> 0;
    return () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }
  const rand = random(4227);
  const context = Array.from({ length: DESIGN.contextParticles }, () => ({
    angle: -2.55 + rand() * 4.15,
    radius: 0.68 + (rand() + rand()) * 0.19,
    phase: rand() * Math.PI * 2,
    size: 0.45 + rand() * 0.76,
    alpha: 0.18 + rand() * 0.39,
  }));
  const self = Array.from({ length: DESIGN.selfParticles }, () => ({
    angle: rand() * Math.PI * 2,
    radius: Math.sqrt(rand()) * (0.06 + rand() * 0.24),
    phase: rand() * Math.PI * 2,
    size: 0.47 + rand() * 0.86,
    alpha: 0.25 + rand() * 0.46,
  }));
  const relation = Array.from({ length: DESIGN.relationParticles }, () => ({
    angle: -2.47 + rand() * 4.0,
    spread: (rand() - 0.5) * 0.28,
    delay: rand() * 0.45,
    phase: rand() * Math.PI * 2,
    size: 0.44 + rand() * 0.78,
    alpha: 0.28 + rand() * 0.46,
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
  function dot(ctx, x, y, radius, rgb, opacity) {
    ctx.fillStyle = `rgba(${rgb},${opacity})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function relationPosition(particle, direction, progress, time, cx, cy, unit) {
    // Progress is a universal playback control. The story chooses only the
    // sign of the flow; it never adjusts particle count, color, or distance.
    const travel = ease((progress - particle.delay) / 0.55);
    const inward = direction > 0;
    const start = inward ? 0.83 : direction < 0 ? 0.15 : 0.49;
    const end = inward ? 0.15 : direction < 0 ? 0.83 : 0.49;
    const radius = unit * (lerp(start, end, travel) + particle.spread);
    const angle = particle.angle + 0.27 * (1 - radius / unit);
    return [
      cx + radius * Math.cos(angle) + 1.7 * Math.sin(time * 0.31 + particle.phase),
      cy + radius * 0.83 * Math.sin(angle) + 1.7 * Math.cos(time * 0.29 + particle.phase),
    ];
  }

  function draw(ctx, width, height, story, progress, time) {
    if (window.PROFILED_TRANSPARENT_ART) ctx.clearRect(0, 0, width, height);
    else {
      ctx.fillStyle = DESIGN.background;
      ctx.fillRect(0, 0, width, height);
    }
    if (!story || ![-1, 0, 1].includes(story.relationDirection)) return null;

    const unit = Math.min(width * 0.32, height * 0.46);
    const cx = width * 0.54;
    const cy = height * 0.51;

    // The outer context field is fixed for every story. It is a broken arc,
    // not a literal event illustration or a closed data-chart shape.
    for (const p of context) {
      const radius = unit * p.radius;
      const x = cx + radius * Math.cos(p.angle) + 1.4 * Math.sin(time * 0.26 + p.phase);
      const y =
        cy + radius * 0.83 * Math.sin(p.angle) + 1.4 * Math.cos(time * 0.23 + p.phase);
      dot(ctx, x, y, p.size, DESIGN.contextColor, p.alpha);
    }

    // The inner field indicates the filled Actual Self statement, without
    // inferring a score from its wording or length.
    for (const p of self) {
      const radius = unit * p.radius;
      const x = cx + radius * Math.cos(p.angle) + 1.5 * Math.sin(time * 0.28 + p.phase);
      const y =
        cy + radius * 0.86 * Math.sin(p.angle) + 1.5 * Math.cos(time * 0.25 + p.phase);
      dot(ctx, x, y, p.size, DESIGN.selfColor, p.alpha);
    }

    // Sparse earlier positions expose direction without drawing hard lines.
    for (let i = 0; i < relation.length; i++) {
      const p = relation[i];
      if (i % 3 === 0) {
        const [tx, ty] = relationPosition(
          p,
          story.relationDirection,
          Math.max(0, progress - 0.035),
          time,
          cx,
          cy,
          unit,
        );
        dot(ctx, tx, ty, p.size * 0.75, DESIGN.flowColor, 0.13);
      }
      const [x, y] = relationPosition(
        p,
        story.relationDirection,
        progress,
        time,
        cx,
        cy,
        unit,
      );
      dot(ctx, x, y, p.size, DESIGN.flowColor, p.alpha);
    }
    return { parameter: RULE.parameter, value: story.relationDirection };
  }

  return { RULE, DESIGN, draw };
})();
