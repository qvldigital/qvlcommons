---
name: queer-league-design
description: Use this skill to generate well-branded interfaces and assets for the Queer Volleyball League (Queer League, QVL e.V.), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors (light + dark "Nacht"), type, fonts, gradients, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `README.md` in this folder first (the brand book with all rules), then `../CLAUDE.md` for the hand-off summary and the non-negotiable rules (Safe Space, 11 languages, mobile first, closed CI palette with semantic tokens, tone).

- Values: `tokens.json` is the source of all values; `tokens.css` is compiled from it; the split files live in `tokens/` (incl. `dark.css`, `gradients.css`).
- Components: `components/<Name>/` (README, `.d.ts`, `preview.html`), all props in `components/index.d.ts`, runtime in `components/bundle.js` + `bundle.css`.
- Assets: `assets/<group>/` with a README per group; font files (Bebas Neue, Oswald, latin + latin-ext, SIL OFL) in `../assets/fonts/`.
- Brand kit for other tools (Figma, Penpot, Canva, Adobe, GIMP): `../brand-kit/`.

If creating visual artifacts (mocks, prototypes), copy assets out and build static HTML. If working on production code, read the rules here and apply them through the app's own tokens.
