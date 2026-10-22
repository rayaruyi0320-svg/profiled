# PROFILEd

**An independent research and interaction-design project about authorship, disclosure, and control in generative identity systems.**

## The question

Static profiles compress people into fixed fields. A generative profile can express more context and change over time, but it also raises a harder question: who decides which parts of a person are represented, and how? PROFILEd studies the difference between human-defined rules, human–AI collaboration, and algorithm-led selection. Its visuals are *digital impressions*, not claims to a person's complete or “true” identity.

## Research and design process

1. **Frame the control models.** I created three early prototypes using a shared visual vocabulary so that the distribution of decision-making, rather than an unrelated visual style, was the main variable.
2. **Ask about context and disclosure.** I designed a branching Qualtrics guided self-interview with scenario questions, follow-ups, and participant-controlled sharing choices.
3. **Translate responses into rules.** I mapped structured answers to visual behavior and kept the original wording and mapping parameters auditable in the local research workbench.
4. **Make comparison evidence-based.** Later JavaScript prototypes let viewers explore individual profiles and compare two profiles. Connections appear only for exact shared values, explicitly shared options, or explicitly shared reasons. They are not compatibility scores or inferred similarities.
5. **Iterate from feedback.** Testing informed the move from separate visual concepts toward a unified interaction system, with a proposed input → structured data → rules → dynamic feedback pipeline.

## Interaction details

- A profile opens as a constellation assembled from topic-level visuals; viewers can move from the overview to the underlying response, visual mapping, and parameters.
- Comparison keeps both profiles visible and lets viewers filter connection types and inspect the source evidence behind a link.
- Missing or unmapped answers are shown as such rather than filled with invented visuals.
- The research explores plural and revisable representations, including what a person chooses to show and what remains unseen.

## My role and tools

I defined the research question, designed the survey and interaction framework, developed visual mappings, built Processing and JavaScript/p5.js prototypes, and reviewed outputs against source responses. Tools and methods include Qualtrics, Processing, JavaScript, p5.js, HTML/CSS, generative systems, and qualitative analysis.

## Status and publication boundary

This is an **ongoing research prototype**, not a deployed AI identity service. The public repository currently provides portfolio documentation and selected approved materials. The latest local research workbench contains participant responses and comparison previews that have **not** been cleared for public release; it is intentionally not uploaded here. AI and database integration are a roadmap, not a current feature.
