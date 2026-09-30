# UI kit — Spielbetriebs-Tool & digitaler Spielberichtsbogen (planned products)

Two surfaces behind one header:

- **Spielbetrieb** (`FixtureAdmin.jsx`) — desktop admin: level + region filters, tabs for Spielplan / Ergebnisse / Tabelle / Spielberichte, a Spieltag summary panel, export and reminder actions, and an empty state for pending reports.
- **Spielbericht** (`ReportSheet.jsx`) — the courtside match report at 520 px: set steppers, Aufstellung, Schiri checklist, submit dialog with double-confirmation and a toast.

Entry: `index.html`.

## Assumptions (flagged)

Both products are **planned, not built** — nothing existed to recreate. Everything here is a proposal derived from the brand rules and the stated feature list (Spielpläne, Ergebnisse, Tabellen, digitaler Spielberichtsbogen). Invented: workflow (submit → Gegenbestätigung → öffentlich), tab structure, copy, data.

Design decisions worth reviewing: results stay private until both teams confirm; venue data is deliberately absent even in the internal tool view (only "intern zugeordnet, nie veröffentlicht" is stated); the report sheet is one-column and thumb-first because it is filled in standing up.
