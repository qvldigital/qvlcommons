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

Die Quelle ist das Artefakt „Queer League Design System“ in Claude (Typ Design System); Exporte daraus werden hier eingespielt.

## Neue Design-System-Version einspielen

_Freigabe: Die Verläufe, die erweiterte Gelb-Regel und die abgeleiteten Pink-Töne sind am 13.10.2026 von der QVL-CI freigegeben. Hinweise „flagged for approval“ / „noch freizugeben“ im Design System und Brand Kit sind damit erledigt, bis Claude Design sie beim nächsten Export entfernt._

1. Export aus dem Claude-Artefakt entpacken; `design-system/`, `brand-kit/` und `CLAUDE.md` damit ersetzen. Eine `design-system/SKILL.md` muss erhalten bleiben (der Export bringt keine mit), sonst findet Claude Code den Skill nicht.
2. Diff prüfen (`git diff --stat`), committen, `version` in `package.json` hochzählen und taggen (`v1.1.0`, …).
3. Die Apps ziehen eine neue Version erst bewusst nach, getestet über ihre Staging-Umgebung.

## Nutzung

- **Für Claude Code:** `~/.claude/skills/queer-league-design-system` ist ein Symlink auf
  `design-system/`. Jede neue Version hier ist damit sofort in allen Projekten als
  Skill verfügbar.
- **In den Apps (später):** als Git-Abhängigkeit auf ein festes Tag, z. B.
  `"@qvl/commons": "github:qvldigital/qvlcommons#v1.0.0"`, und die Tokens aus
  `design-system/tokens/` importieren. Vercel baut nur aus dem jeweiligen App-Repo;
  ein relativer Pfad wie `../qvlcommons` funktioniert dort nicht.

Die Inhalte sind öffentlich einsehbar (Logos und Farben stehen ohnehin auf
queerleague.de), die Rechte an Marke und Logos liegen bei der Queer Volleyball League e.V.
