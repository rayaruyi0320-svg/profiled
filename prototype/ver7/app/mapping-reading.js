/* Reader-facing mapping descriptions. Keep technical parameter names in source files.
 * Answer values below are survey values, not newly calculated personality scores.
 * Categorical and interest explanations reuse the approved mapping registries.
 */
window.MappingReading = {
  explain(topic, itemIndex, view = 'all') {
    const d = topic.data;
    if (!d) return [{title: 'No visual interpretation', meaning: topic.note}];
    const rows = [];
    const add = (title, meaning, source) => rows.push({title, meaning, source});
    const label = id => APP_CONFIG.selfLabels[({likely:'now',should:'expected'})[id] || id] || id;
    const visible = id => view === 'all' || (({likely:'now',should:'expected'})[id] || id) === view;
    const scalar = {
      q1: 'A longer filament represents stepping in to shape the direction; a shorter one represents waiting, observing or supporting someone else’s direction. Only filament length follows this answer.',
      q2: 'A wider opening represents naming the problem directly; a narrower opening represents holding it back to protect the atmosphere. Only the membrane’s opening follows this answer.',
      q3: 'More cross-links represent letting someone know or asking for help; fewer represent trying to handle the overload privately. The tilt and underlying threads remain fixed.',
      q4: 'A more uneven contour represents following possibilities as they emerge; a smoother contour represents making a structure first and refining it. Contour depth follows this answer. Displacement relative to Actual / Now separately shows the difference between the two answers; no difference is calculated when Now is missing.'
    };
    if (scalar[topic.id]) {
      for (const s of d.selves || d.answers || []) {
        const id = s.id || s.perspective;
        if (visible(id)) add(`${label(id)} · ${s.value} / 100`, scalar[topic.id], s.field);
      }
      add('Reading the layers', 'Colours identify self-perspectives consistently. They do not measure the strength or quality of a response.');
    } else if (topic.id === 'q5' || topic.id === 'q6') {
      const options = topic.id === 'q5' ? CATALOG.options5 : CATALOG.options6;
      for (const self of d.selves) if (visible(self.id)) {
        for (const id of self.answers) {
          const option = options.find(o => o.id === id);
          if (option) add(`${label(self.id)} · ${option.raw}`, option.meaning, self.field);
        }
      }
      add('Together in one image', topic.id === 'q5'
        ? 'Each selected answer contributes its own path to the shared particle field. The paths form together; selecting two answers combines their forms, rather than assigning a higher score.'
        : 'Each selected answer contributes its own fold to the same composition. Formation reveals how these surfaces meet. Fold types are categories, not measurements of emotional intensity.');
    } else if (topic.id === 'q7') {
      const interests = itemIndex === undefined ? d.interests : [d.interests[itemIndex]];
      for (const interest of interests.filter(Boolean)) {
        add(interest.text, 'The reviewed particle silhouette is a recognisable cue for this interest. It identifies the activity; it does not assign a personality trait.', interest.field);
        for (const reason of interest.reasons || []) {
          const rule = Q7Reasons.rules[reason];
          if (rule) add(reason, rule.meaning, (interest.reasonFields || []).join(' · ') || 'Reviewed reason assignment');
        }
        if (!interest.reasons?.length) add('No reason assigned', 'The interest keeps its particle silhouette. No reason-based colour, motion or texture is inferred from the activity name.');
      }
    } else if (topic.id === 'q8') {
      add('What was shown / what remained unseen', 'The two portions of the trace represent the visible and unexpressed sides of the same account. Their lengths follow the amount of written text, not importance, emotional strength or honesty. The veil marks the boundary between those sides.', Object.keys(topic.raw).filter(k => topic.raw[k]).join(' · '));
      if (d.evidence) add('Why this form', d.evidence);
      add('Selected influences', 'Each selected influence adds one small particle knot at its fixed place along the shown trace. The knot identifies a category; its location and size do not rank psychological strength.');
    } else if (topic.id === 'q21') {
      const meanings = {activation:'the proportion of particles that begin moving',engagement:'the proportion of particles taking part in motion',reach:'the horizontal reach of the field',permeability:'the proportion passing the central boundary',alignment:'the alignment of particle paths',irregularity:'the irregular offset in particle motion',spacing:'the distance between neighbouring particles',tempo:'the speed of particle flow'};
      add(`${d.before} → ${d.now}`, `This reviewed change is expressed through ${meanings[d.channel] || 'one reviewed visual property'}. The animation moves between two visual presets; these are not measured psychological scores.`, Object.keys(topic.raw).filter(k => topic.raw[k]).join(' · '));
      if (d.evidence) add('Why this change', d.evidence);
    } else if (topic.id === 'q22') {
      const meanings = {microTurbulence:'Small setbacks interrupt the orbit.',constriction:'The available radius contracts.',stall:'A section of the orbit hesitates.',pushback:'The path pushes outward as it approaches the centre.',unresolvedDestination:'The endpoint spreads into an unresolved destination.',externalPull:'The path is pulled toward an outside point.',repetition:'The path returns around the centre more often.',visibilityTension:'The clearly visible portion of the orbit narrows.'};
      add(d.answer || 'A feared pattern', `${meanings[d.category] || 'A reviewed path expresses this account.'} This is a metaphor for the feared possibility, not a claim about current behaviour, frequency or a prediction.`, Object.keys(topic.raw).filter(k => topic.raw[k]).join(' · '));
      if (d.evidence) add('Why this form', d.evidence);
    } else if (topic.id === 'q42') {
      add('A chosen story', 'The story is represented by a satellite. Its reviewed direction places it inward, outward or neutral relative to the portrait; this is a narrative relationship, not a score.', Object.keys(topic.raw).filter(k => topic.raw[k]).join(' · '));
      if (d.relationEvidence) add('Why this direction', d.relationEvidence);
    }
    return rows;
  }
};
