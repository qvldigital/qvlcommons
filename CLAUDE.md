# QVL Design System — Übergabe an Claude Code

Queer Volleyball League e.V. — extern immer "Queer League". Einstieg ist `design-system/README.md` (Brand Book mit allen Regeln).

## Aufbau
- `design-system/tokens.json` — Quelle aller Werte (Farben hell + dunkel, Typografie, Abstände, Radien, Schatten, Rahmen, Größen). `design-system/tokens.css` ist daraus kompiliert.
- `design-system/components/<Name>/` — `README.md` (Nutzung), `<Name>.d.ts`, `preview.html`; alle Props in `components/index.d.ts`.
- `design-system/components/bundle.js` + `bundle.css` — alle Komponenten als `window.QueerLeagueDesignSystem_ae47b3`; React 18 vorher laden.
- `design-system/assets/<Gruppe>/` — Logos, Ball-Icons, Netz-Hintergründe, Muster; je Gruppe eine `README.md`.
- `design-system/ui_kits/`, `design-system/templates/` — Website, Manager-PWA, Spielbetrieb (Vorschläge); sie nutzen `_ds_bundle.js` und `styles.css` im Wurzelordner des Design Systems.
- `brand-kit/` — fertiges Brand Kit: DTCG-Tokens hell/dunkel, Tokens-Studio, Paletten (CSV, GPL), Logos, Icons, Hintergründe, Muster, Brand-Kit-Dokument; `brand-kit-import.pdf` ist die Vorlage für den Canva Brand Kit Builder.

## Regeln (aus dem README, nicht verhandelbar)
1. Safe Space: nie Hallennamen, Adressen, Karten oder Spielorte öffentlich anzeigen.
2. 11 Sprachen: nichts mit fester Breite oder `nowrap` auf übersetzbaren Texten.
3. Mobile first: Tap-Ziele mindestens 44 px.
4. Feste CI: keine neuen Farbtöne erfinden; Texte und Flächen mit semantischen Tokens (`surface-*`, `text-*`, `border-*`) setzen, nicht mit rohen `qvl-*`-Werten.
5. Icons nach Fläche: Software (Manager, Planner, Referee) und alles aus dem Design System mit Lucide über `Icon`; die Website (Zephyr) behält die Material Icons des Themes, Font Awesome nur für Marken-Symbole. Nie mischen innerhalb einer Fläche.
6. Ton: du-Ansprache, Genderstern (Spieler*innen), FLINTA* immer mit Sternchen, kein Emoji, Headlines in Bebas Neue GROSS, Fließtext in Oswald Light.
