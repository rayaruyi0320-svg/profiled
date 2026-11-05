# PROFILEd · ver7 source archive

This is the source snapshot of the local prototype shown to Augustus, including the latest performance fixes. The existing synthetic public demo remains available at `../PROFILEd_public_demo.html`.

**This archive is not a standalone public demo.** Participant responses, reviewed individual data, generated catalogues and sampled portraits are intentionally excluded. Opening this index without the private data bundle will not render the research prototype. The original local ver7 folder remains complete and unchanged.

## Included

- `app/`: interactive sky, profile exploration, exact-evidence connections, introductory scene, reading panels and styling.
- `shared/`: question renderers and reusable visual mapping rules.
- `assets/`: decorative sky artwork.
- `tools/`: portrait sampling helpers and animation-player checks; private catalogue assembly is excluded.

## Editing

- `app/config.js`: particle size, opacity, saturation, brightness, composition spacing, sky movement and connection styling.
- `shared/`: individual question mapping and drawing rules.
- `app/app.js`: selection, hover feedback, source windows and portrait rendering.
- `app/intro.js` and `app/intro.css`: anonymous introductory narrative.
- `app/ui-polish.css`: interface refinement.

Connections describe exact shared responses, choices or reasons, not relationship strength. Missing responses create no invented artwork. Local comparison testing does not change recorded participant permissions.

The latest revision removes scripted conversation prompts, hides names in the intro, stops drawing the covered sky during the intro, and caches particle colours without changing mapping rules.
