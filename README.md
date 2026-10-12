# qvlcommons

Gemeinsame Basis für die Tools der Queer Volleyball League e.V.:
den **Queer League Manager** (`qvlmanager`), den Planner (`qvlplanner`)
und die Referee-Software (`qvlreferee`).

## Inhalt

| Ordner | Was |
| --- | --- |
| `design-system/` | Das Queer League Design System aus Claude Design, entpackt: Tokens (`tokens/*.css`, inkl. Dark Mode), Komponenten, Guidelines, UI-Kits. `design-system/readme.md` ist die ausführliche Doku. |
| `design-system/brand-kit/` | Export für andere Werkzeuge (Figma, Penpot, Canva, Adobe, Affinity, GIMP): Design-Tokens als JSON (W3C/DTCG und Tokens Studio, Hell + Nacht), Farbpaletten (`.ase`, `.gpl`, `.csv`), Logos und Bildmaterial, plus `QVL Brand Kit.html` als druckbare Übersicht. Quelle der Wahrheit bleibt das Design System selbst. |
| `assets/` | Die Original-Markendateien (Logos, Hintergründe, CI-Farbpalette als PDF). |

## Neue Design-System-Version einspielen

_Verläufe und die erweiterte Gelb-Regel (Brand Kit, Oktober 2026) sind noch von der QVL-CI freizugeben._

1. Export aus Claude Design entpacken und den Inhalt von `design-system/` damit ersetzen.
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
