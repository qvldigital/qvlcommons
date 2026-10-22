# QVL Brand Kit — Export für andere Apps

Stand: 21. Oktober 2026. Quelle der Wahrheit bleibt das Design System (`../styles.css`, `../readme.md`). Diese Dateien sind daraus abgeleitet.

## Inhalt
- `QVL Brand Kit.html` — Übersicht zum Ausdrucken / als PDF speichern (Farben, Gelb-Regeln, Verläufe, Nacht, Schriften, Logos, Formensprache, Tonalität).
- `tokens/primitives.tokens.json` — alle Farben, Schriften, Größen, Abstände, Fasen, Verläufe, Schatten (W3C Design Tokens / DTCG).
- `tokens/light.tokens.json`, `tokens/dark.tokens.json` — semantische Farben je Modus (verweisen auf primitives).
- `tokens/tokens-studio.json` — dasselbe als eine Datei mit Themes „Hell“ und „Nacht“.
- `palettes/qvl-palette.gpl` — Farbfelder für GIMP, Inkscape, Krita.
- `palettes/qvl-colors.csv` — Hex-Liste zum Abtippen/Kopieren.
- `logos/`, `icons/`, `backgrounds/`, `patterns/` — Bildmaterial (PNG).

## So importieren
**Figma (Variables):** Lokale Variablen → Import → `primitives.tokens.json` als Collection „Primitives“; dann `light.tokens.json` und `dark.tokens.json` als zwei Modi einer Collection „Theme“. Verläufe und Typografie kann Figma nicht als Variablen — als Styles anlegen (Werte in primitives unter `gradient` / `typography`).
**Figma (Tokens Studio Plugin):** `tokens-studio.json` laden → Themes Hell/Nacht → „Create Variables“ bzw. „Create Styles“ (legt auch Verlaufs- und Text-Styles an).
**Penpot:** Tokens → Import → `tokens-studio.json` (oder die drei Einzeldateien).
**Canva (Pro / Teams, Brand Kit):** Kein Datei-Import möglich — Farben aus `qvl-colors.csv` einfügen, Schriften „Bebas Neue“ (Überschriften) und „Oswald“ (Text) wählen, Logos aus `logos/` hochladen. Verläufe in Canva als Farbverlauf mit den Hex-Werten aus dem Brand-Kit-Dokument.
**Adobe / Affinity:** `qvl-palette.gpl` importieren (Affinity: Palette → Importieren; Illustrator/Photoshop: Hex-Werte aus `qvl-colors.csv` als Farbfelder anlegen und dort als .ase exportieren).

## Wichtig
- Verläufe, die erweiterte Gelb-Regel und die abgeleiteten Pink-Töne sind seit dem 13.10.2026 von der QVL-CI freigegeben.
- Schrift auf Orange ist Ink, Fokusring ist ein Doppelring (Hell: Gelb innen, Ink außen; Nacht: Gelb außen). Token: `border.focus-ring`, `border.focus-ring-inner`, `border.focus`, `border.focus-inner`.
- Fehlertext in Hell ist Orange Tief (`color.orange-deep`, `#AD4500`, Token `text.danger`), das gedrückte Orange entspricht dem Hover (`#E05A00`). Text auf Soft-Flächen ist `text.on-soft` (Hell Petrol, Nacht Petrol Pale).
- Pride-Verlauf ist für OKLCH gedacht; Apps ohne OKLCH: Mittelstopp `#6E5A9E` bei 50 %.
- Logos sind nur als PNG vorhanden — für Druck/Vektor beim Verband SVG/PDF anfragen.
