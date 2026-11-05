# PROFILEd · ver8 letter-alias demo

Open **index.html** directly in a browser. No build, server, API key or installation is required. Keep the app, shared, assets and generated folders alongside it.

This is a separate snapshot of ver7. Participant display names are replaced with Participant A through Participant N, including source panels and connection descriptions. Original survey files and name-to-alias lookup tables are not included.

The response content and visual mappings are retained. Letter aliases are pseudonymisation, not a guarantee that narratives cannot be recognised. This is a research demonstration, not a personality assessment or compatibility score. Recorded survey scopes remain source metadata; the existing comparison test override remains enabled.

## Edit the demo

- `app/config.js`: colour saturation, brightness, opacity, particle size, layout and motion settings.
- `shared/`: question-specific mapping rules and visual renderers.
- `app/app.js`: sky, selection, profile and connection interactions.
- `app/intro.js` and `app/intro.css`: introductory scene.
- `app/ui-polish.css`: interface styles.
- `generated/catalog.js`: letter-alias response snapshot used by the demo.
- `generated/profiles/`: precomputed portrait particles; no build needed.

Changes to individual renderers appear in topic views immediately. Sky portraits use the included precomputed samples; changing their underlying geometry requires resampling with the private authoring tools.
