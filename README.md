# Queer League Commons (`qvlcommons`)

Gemeinsame Basis der Queer-League-Tools: das Queer League Design System (Brand Book, Tokens, Komponenten), das Brand Kit für andere Werkzeuge und die Original-Markendateien. Die Apps übernehmen daraus Farben, Schriften, Logos und Regeln.

> **Stand:** Version 2.5.0 (Bewegung in den Komponenten, quadratische Felder als Test). Releases als Git-Tags `vX.Y.Z`.

## Die drei Repos

| Repo | Was | Prod | Staging |
| --- | --- | --- | --- |
| [`qvlmanager`](https://github.com/qvldigital/qvlmanager) | Queer League Manager: Stammdaten, Meldungen, DV, Koordination | [manager.queerleague.de](https://manager.queerleague.de) | [staging.manager.queerleague.org](https://staging.manager.queerleague.org) |
| [`qvlplanner`](https://github.com/qvldigital/qvlplanner) | Queer League Planner: Spielbetrieb | [planner.queerleague.de](https://planner.queerleague.de) | [staging.planner.queerleague.org](https://staging.planner.queerleague.org) |
| **`qvlcommons`** | Design System, Tokens, Marken-Assets | – | – |

Die Referee-Software (`qvlreferee`) folgt später und nutzt dieselbe Basis.

## Inhalt

| Pfad | Was |
| --- | --- |
| `design-system/` | Das Queer League Design System: `README.md` (Brand Book), `tokens.json` als Quelle aller Werte (hell + Nacht), `tokens.css` daraus kompiliert, Einzeldateien in `tokens/` (inkl. `dark.css`, `gradients.css`), Komponenten unter `components/<Name>/`, Guidelines, UI-Kits, Vorlagen. |
| `brand-kit/` | Export für andere Werkzeuge (Figma, Penpot, Canva, Adobe, GIMP): DTCG- und Tokens-Studio-JSON, Paletten, Logos, Bildmaterial, `QVL Brand Kit.html`, `brand-kit-import.pdf` (Vorlage für den Canva Brand Kit Builder). |
| `assets/` | Original-Markendateien (Logos, Hintergründe, CI-Farbpalette als PDF) und `assets/fonts/`: Bebas Neue und Oswald als woff2 (latin + latin-ext, Fontsource 5.3.0, SIL OFL 1.1). |
| `CLAUDE.md` | Aufbau, nicht verhandelbare Regeln und Leitplanken für Design-Skills. |

Die Quelle ist dieses Repository. Das Artefakt „Queer League Design System“ in Claude (Typ Design System) ist daraus abgeleitet und dient als Übersicht; es wird nach einem Release aus dem Repo veröffentlicht. **Exporte aus dem Artefakt nie in `design-system/` einspielen:** Sie würden die Änderungen seit dem 18.10.2026 überschreiben (Fokusring, semantische Tokens, Kontraste, Bundles).

## Nutzung

- **In den Apps:** Manager und Planner übernehmen Tokens und Fonts heute als Kopie (`globals.css`, `src/app/fonts`); die App-Logos liegen unter `design-system/assets/apps`. Später als Git-Abhängigkeit auf ein festes Tag, z. B. `"@qvl/commons": "github:qvldigital/qvlcommons#v2.5.0"`. Vercel baut nur aus dem jeweiligen App-Repo, ein relativer Pfad wie `../qvlcommons` funktioniert dort nicht.
- **Für Claude Code:** `~/.claude/skills/queer-league-design-system` ist ein Symlink auf `design-system/`. Jede neue Version hier ist damit sofort in allen Projekten als Skill verfügbar.
- Die Apps ziehen eine neue Version erst bewusst nach, getestet über ihre Staging-Umgebung.

## Das Design System ändern

_Freigabe: Die Verläufe, die erweiterte Gelb-Regel und die abgeleiteten Pink-Töne sind am 13.10.2026 von der QVL-CI freigegeben._

1. **Werte** in `design-system/tokens.json` ändern (Quelle aller Werte). Daraus abgeleitet und von Hand nachzuziehen: `design-system/tokens.css`, `design-system/tokens/*.css`, die Token-Exporte in `brand-kit/tokens/`.
2. **Komponenten** unter `design-system/components/<Kategorie>/*.jsx` ändern. Jede Änderung steht zusätzlich in beiden Bundles (`design-system/_ds_bundle.js` und `design-system/components/bundle.js`), auch Änderungen an den UI-Kits. Danach die Prüfsummen-Zeile am Dateianfang beider Bundles neu berechnen (SHA-256 der Quelldatei, die ersten 12 Zeichen).
3. **Brand Kit:** `brand-kit/` und `design-system/brand-kit/` bleiben identisch (das PDF liegt nur im Root).
4. **Prüfen:** im Browser Hell und Nacht, 390 und 1440 px, Kontrast messen. Dazu zwei Messgeräte (Node 22+, Chrome oder Edge; kein Build-Gate, von Hand und vor jedem Release):
   - `npm run check:design` — der Detektor des `impeccable`-Skills über alle Komponenten-Vorschauen und UI-Kits bei 390 und 1280 px. Regeln, die der CI widersprechen, stehen mit Begründung als Ausnahme in `.impeccable/config.json` (bisher: `kicker-above-heading`, weil Eyebrows Teil der CI sind).
   - `npm run check:i18n` — 11-Sprachen-Belastungstest: Alle Texte werden pseudo-lokalisiert (rund 40 % länger, mit Sonderzeichen der Ligasprachen, `scripts/pseudo-l10n.js`), dann misst `inspect.mjs` des `design-taste-frontend`-Skills Überlauf, abgeschnittenen und verdeckten Text, Kontrast und kaputte Bilder. Dessen Stilregeln zählen nicht.
   - Einzelne Komponente ansehen: `scripts/harness.html?c=Button` (Optionen `&theme=dark`, `&pseudo=1`, `&fallback=1` für den `clip-path`-Rückfall der Fasen), über einen lokalen Server aus dem Repo-Root.

## Release

1. Diese README auf den aktuellen Stand bringen (Regel in `CLAUDE.md`).
2. `version` in `package.json` hochzählen, committen, taggen (`v2.5.0`, …), pushen. Es gibt nur den Branch `main`.
3. Danach das Artefakt aus dem Repo aktualisieren (Dateien unter `project/` ersetzen).

## Doku im Repo

| Datei | Inhalt |
| --- | --- |
| `design-system/README.md` | Brand Book mit allen Regeln (Einstieg) |
| `CLAUDE.md` | Übergabe an Claude Code, Regeln, Leitplanken für Design-Skills |
| `design-system/components/<Name>/README.md` | Nutzung der einzelnen Komponenten |
| `design-system/assets/<Gruppe>/README.md` | Logos, Ball-Icons, Hintergründe, Muster |

## Regeln in Kürze

- **Safe Space:** nie Hallennamen, Adressen, Karten oder Spielorte öffentlich anzeigen.
- **11 Sprachen:** nichts mit fester Breite oder `nowrap` auf übersetzbaren Texten.
- **Mobile first:** Tap-Ziele mindestens 44 px. Einzige Ausnahme: Datentabellen in Admin-Ansichten mit `density="compact"`, nur bei Maus.
- **Feste CI:** keine neuen Farbtöne; Texte und Flächen mit semantischen Tokens (`surface-*`, `text-*`, `border-*`).
- **Icons:** Software mit Lucide, die Website mit den Material Icons des Themes.
- **Ton:** du-Ansprache, Genderstern (Spieler*innen), FLINTA* mit Sternchen, kein Emoji, Headlines in Bebas Neue GROSS, Fließtext in Oswald Regular (Light nur für Lead ab 19 px).

## Rechte

Die Inhalte sind öffentlich einsehbar (Logos und Farben stehen ohnehin auf queerleague.de), die Rechte an Marke und Logos liegen bei der Queer Volleyball League e.V. Es gilt die Datei `LICENSE`: alle Rechte vorbehalten, Schriften und Icons behalten ihre eigene Lizenz.
