`StandingsTable` renders Tabellen and any other tabular league data (Ergebnislisten, Spielpläne with custom `columns`).

```jsx
<StandingsTable caption="Level B · Nord" promotion={2} relegation={1} highlightTeam="Berlin Bumpers"
  rows={[{rank:1,team:"Berlin Bumpers",played:10,won:9,lost:1,sets:"27:8",points:27}]} />
```

In narrow columns (PWA, grid tracks) pass a 3-column `columns` set and, if needed, `minWidth` — the wrapper scrolls horizontally rather than pushing its container wider.

Zebra striping uses white / #E5E5E5 — never colour whole rows in orange; use `highlightTeam` (orange tint) or the zone bars.
