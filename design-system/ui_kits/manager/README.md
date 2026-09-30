# UI kit — Queer League Manager (PWA)

Mobile-first recreation shown in two 390 × 712 frames: the **login** screen and the **app shell** (compact `SiteHeader` + `BottomNav`) with four tabs — **Start** (team dashboard), **Spiele** (digitaler Spielberichtsbogen), **Kader** (roster, add-player dialog, join requests) and **Mehr**. Logging in hides the login frame.

Screens: `Login.jsx`, `Dashboard.jsx`, `Roster.jsx`, `Spielbericht.jsx`. Entry: `index.html`.

Interactive: log in, switch tabs, change set scores with the steppers, add a player via the dialog, submit a result and see the confirmation dialog + toast.

## Assumptions (flagged)

The live PWA's code and screens were not available — **brand-faithful proposal, not a recreation**. Invented: information architecture, tab set, copy, all team and player data. Pronouns, FLINTA\* wording and the Safe-Space notices follow the brand's stated principles.

Courtside constraints honoured: 44 px minimum targets, `SetScoreInput` numerals at display size, primary action pinned to the bottom of the scroll area.
