# qvlcommons

Gemeinsame Basis für die Tools der Queer Volleyball League e.V.:
den **Queer League Manager** (`qvlmanager`), den Planner (`qvlplanner`)
und die Referee-Software (`qvlreferee`).

## Inhalt

| Pfad | Was |
| --- | --- |
| `CLAUDE.md` | Übergabe aus Claude Design: Aufbau und die nicht verhandelbaren Regeln (Safe Space, 11 Sprachen, Mobile first, feste CI, Ton). |
| `design-system/` | Das Queer League Design System: `README.md` (Brand Book), `tokens.json` als Quelle aller Werte (hell + Nacht), `tokens.css` daraus kompiliert, Einzeldateien in `tokens/` (inkl. `dark.css`, `gradients.css`), Komponenten unter `components/<Name>/`, Guidelines, UI-Kits, Vorlagen. |
| `brand-kit/` | Export für andere Werkzeuge (Figma, Penpot, Canva, Adobe, GIMP): DTCG- und Tokens-Studio-JSON, Paletten, Logos, Bildmaterial, `QVL Brand Kit.html`, `brand-kit-import.pdf` (Vorlage für den Canva Brand Kit Builder). |
| `assets/` | Original-Markendateien (Logos, Hintergründe, CI-Farbpalette als PDF) und `assets/fonts/`: Bebas Neue und Oswald als woff2 (latin + latin-ext, Fontsource 5.3.0, SIL OFL 1.1). |

Die Quelle ist dieses Repository. Das Artefakt „Queer League Design System“ in Claude (Typ Design System) ist daraus abgeleitet und dient als Übersicht; es wird nach einem Release aus dem Repo veröffentlicht. **Exporte aus dem Artefakt nie in `design-system/` einspielen:** Sie würden die Änderungen seit dem 18.10.2026 überschreiben (Fokusring, semantische Tokens, Kontraste, Bundles).

## Das Design System ändern

_Freigabe: Die Verläufe, die erweiterte Gelb-Regel und die abgeleiteten Pink-Töne sind am 13.10.2026 von der QVL-CI freigegeben._

1. **Werte** in `design-system/tokens.json` ändern (Quelle aller Werte). Daraus abgeleitet und von Hand nachzuziehen: `design-system/tokens.css`, `design-system/tokens/*.css`, die Token-Exporte in `brand-kit/tokens/`.
2. **Komponenten** unter `design-system/components/<Kategorie>/*.jsx` ändern. Jede Änderung steht zusätzlich in beiden Bundles (`design-system/_ds_bundle.js` und `design-system/components/bundle.js`), auch Änderungen an den UI-Kits. Danach die Prüfsummen-Zeile am Dateianfang beider Bundles neu berechnen (SHA-256 der Quelldatei, die ersten 12 Zeichen).
3. **Brand Kit:** `brand-kit/` und `design-system/brand-kit/` bleiben identisch (das PDF liegt nur im Root).
4. **Prüfen:** im Browser Hell und Nacht, 390 und 1440 px, Kontrast messen.
5. **Release:** `version` in `package.json` hochzählen, committen, taggen (`v2.1.0`, …), pushen.
6. Die Apps ziehen eine neue Version erst bewusst nach, getestet über ihre Staging-Umgebung.
7. Danach das Artefakt aus dem Repo aktualisieren (Dateien unter `project/` ersetzen).

## Nutzung

- **Für Claude Code:** `~/.claude/skills/queer-league-design-system` ist ein Symlink auf
  `design-system/`. Jede neue Version hier ist damit sofort in allen Projekten als
  Skill verfügbar.
- **In den Apps (später):** als Git-Abhängigkeit auf ein festes Tag, z. B.
  `"@qvl/commons": "github:qvldigital/qvlcommons#v2.1.0"`, und die Tokens aus
  `design-system/tokens/` importieren. Vercel baut nur aus dem jeweiligen App-Repo;
  ein relativer Pfad wie `../qvlcommons` funktioniert dort nicht.

Die Inhalte sind öffentlich einsehbar (Logos und Farben stehen ohnehin auf
queerleague.de), die Rechte an Marke und Logos liegen bei der Queer Volleyball League e.V.
Es gilt die Datei `LICENSE`: alle Rechte vorbehalten, Schriften und Icons behalten ihre eigene Lizenz.
