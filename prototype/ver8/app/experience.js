/* Contextual coach: real actions unlock Continue; hover never advances a step.
 * Positioning follows stable UI anchors, not moving galaxies. No drawing changes.
 */
window.Experience = (() => {
  const elements = new Map();
  const $ = id => {
    if (!elements.has(id)) elements.set(id, document.getElementById(id));
    return elements.get(id);
  };
  let active = false, step = 0, mode = 'universe', locked = false, pairCount = 0, evidence = false;
  let visibleLinks = 0, totalLinks = 0;
  let target = null, raf = 0;
  const panel = $('welcome-guide');
  const labels = {all:'All perspectives',now:'What I usually do',prefer:'What I’d prefer',
    expected:'What I feel expected to do',seen:'How I think others see me'};
  const pages = [
    ['Meet someone through their answers.', 'A portrait, a shared answer, a conversation. Try a short guided exploration—or wander on your own.'],
    ['Choose someone to get to know.', 'Click a galaxy. Take your time looking around; continue when their portrait is open.'],
    ['Let one part tell its story.', 'Choose a bright part, or open a topic from Explore topics, to read the person’s answer.'],
    ['Choose two people.', 'In the sky, use “Select two galaxies”, then click two people. Their shared answers will appear as lines.'],
    ['Read what they share.', 'Hover a line to see the shared answer. Click it to read both responses. No line? That pair has no recorded match in this view—try another pair.']
  ];
  function ready() {
    return step === 0 || (step === 1 && mode === 'profile') ||
      (step === 2 && mode === 'profile' && locked) ||
      (step === 3 && mode === 'universe' && pairCount === 2 && visibleLinks > 0) || (step === 4 && evidence);
  }
  function position() {
    raf = 0;
    if (!active) return;
    const anchors = ['#guide-restart', '#worlds .world', '#worlds canvas', '#pair-mode', '#links .link-hit'];
    const selector = anchors[step];
    const next = document.querySelector(selector);
    if (target !== next) { target?.classList.remove('coach-target'); target = next; target?.classList.add('coach-target'); }
    // Fixed reading dock: hovering artwork must never relocate the guide.
    // Wide screens reserve the left corner; source/preview panels stay right.
    // Narrow screens reserve the upper band; content stays in the lower half.
    const margin = 16;
    panel.style.left = margin + 'px';
    panel.style.top = innerWidth <= 850 ? margin + 'px' : 'auto';
    panel.style.bottom = innerWidth <= 850 ? 'auto' : margin + 'px';
    panel.style.maxHeight = innerWidth <= 850 ? '38dvh' : 'calc(100dvh - 32px)';

  }
  function schedule() { if (active && !raf) raf = requestAnimationFrame(position); }
  function draw() {
    $('welcome-guide').hidden = !active;
    if (!active) { target?.classList.remove('coach-target'); target = null; return; }
    $('guide-step').textContent = step === 0 ? 'EXPLORATION GUIDE' : `EXPLORATION GUIDE · ${step} OF 4`;
    $('guide-title').textContent = pages[step][0];
    $('guide-copy').textContent = pages[step][1];
    const action = $('guide-action');
    // Keep the action's space reserved to avoid a jumping panel height.
    action.hidden = false;
    action.style.visibility = ready() ? 'visible' : 'hidden';
    action.disabled = !ready();
    action.textContent = step === 0 ? 'Show me' : step === 4 && ready() ? 'Explore on my own' : ready() ? 'Continue →' : 'Try it above';
    if (ready() && step > 0 && step < 4) {
      const feedback = ['', 'The portrait is open. Explore it at your own pace.', 'The original response is open. Read it alongside the image.', 'Your pair is selected.', 'Both responses are open. Read them together.'];
      $('guide-copy').textContent = feedback[step];
      action.textContent = ['', 'Explore one answer →', 'Find common ground →', 'Explore the lines →'][step];
    }
    if ((step === 3 || step === 4) && mode === 'universe' && !evidence && pairCount === 2 && !visibleLinks) {
      const filtered = totalLinks > 0;
      $('guide-title').textContent = filtered ? 'This view hides their shared answers.' : 'This pair has no recorded match.';
      $('guide-copy').textContent = filtered ? 'Show all perspectives, themes and line types to read their shared answers.' : 'You can explore another pair or finish here.';
      action.hidden = false;
      action.style.visibility = "visible";
      action.disabled = false;
      action.textContent = filtered ? 'Show all connections' : 'Choose another pair';
      $('guide-skip').textContent = 'Finish guide';
    } else {
      $('guide-skip').textContent = 'Skip guide';
    }
    // Recover gracefully when someone navigates away rather than trapping them.
    if ((step === 2 && mode !== 'profile') || (step >= 3 && step <= 4 && mode !== 'universe' && !evidence)) {
      $('guide-copy').textContent = step === 2 ? 'Open a portrait from the sky to try this step. You can skip the guide at any time.' : 'Return to the sky to choose two people and explore their shared answers.';
      action.hidden = false; action.disabled = false; action.textContent = 'Return to the sky';
    }
    schedule();
  }
  function close() { active = false; draw(); try { localStorage.setItem('profiled-v6-guide','done'); } catch (_) {} }
  $('guide-skip').onclick = close;
  $('guide-restart').onclick = () => { active = true; step = 0; draw(); };
  $('guide-action').onclick = () => {
    if (step === 4 && ready()) return close();
    if (step === 2 && mode !== 'profile') { step = 1; location.hash = 'universe'; draw(); return; }
    if (step >= 3 && mode !== 'universe' && !evidence) { location.hash = 'universe'; draw(); return; }
    if ((step === 3 || step === 4) && mode === 'universe' && !evidence && pairCount === 2 && !visibleLinks) {
      step = 3;
      if (totalLinks) $('reset-filters').click();
      else { $('clear-pair').click(); $('pair-mode').click(); }
      return;
    }
    if (!ready()) return;
    step++;
    if (step === 1 || step === 3) { location.hash = 'universe'; mode = 'universe'; }
    draw();
  };
  window.addEventListener('resize', schedule);
  window.addEventListener('scroll', schedule, {passive:true});

  active = false; // The opening scene now handles first arrival; this guide is optional.
  if (location.hash && !location.hash.startsWith('#universe')) active = false;
  draw();
  return {
    labels,
    dismiss() { if (!active) return false; close(); $('guide-restart').focus(); return true; },
    sync(current) {
      mode = current.mode;
      locked = current.reading;
      pairCount = current.count;
      visibleLinks = current.visibleLinks;
      totalLinks = current.totalLinks;
      evidence = current.evidence;
      draw();
    }
  };
})();
