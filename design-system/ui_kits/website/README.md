# UI kit — queerleague.de (public website)

Interactive recreation of the public league site: header nav switches between **Start**, **Liga** (Spielplan / Tabelle / Ergebnisse tabs, level + region filters), **Mitmachen** (team registration form with a success state) and **Wall of Fame** (season picker, title table).

Screens: `HomeScreen.jsx`, `LigaScreen.jsx`, `MitmachenScreen.jsx`, `WallOfFameScreen.jsx`. Entry: `index.html`.

Composes design-system components only — `SiteHeader`, `SiteFooter`, `NetHero`, `PatternBand`, `Card`, `Button`, `Badge`, `Tag`, `Tabs`, `Breadcrumb`, `Select`, `Input`, `Checkbox`, `Radio`, `Alert`, `Tooltip`, `MatchCard`, `StandingsTable`, `LevelBadge`, `BallIcon`.

## Assumptions (flagged)

No code, Figma file or screenshots of the live WordPress site were available, so **this is a brand-faithful proposal, not a recreation**. Specifically invented: page inventory, navigation labels, copy, team names and all league data. The **language switcher** shows 11 locales as required but only renders German copy.

Safe Space is enforced structurally: no venue appears anywhere, and the Spielplan carries the `Alert tone="safe"` explanation instead.
