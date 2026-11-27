# QVL Commons — gemeinsame Regeln für alle QVL-Apps

Queer Volleyball League e.V., extern immer „Queer League“. Manager und Planner binden diese Datei per `@../qvlcommons/CLAUDE.md` ein.

## Design System
- Einstieg: `design-system/README.md` (Brand Book). Quelle aller Werte ist `design-system/tokens.json`; `tokens.css` ist daraus kompiliert.
- Komponenten: `design-system/components/bundle.js` + `bundle.css` als `window.QueerLeagueDesignSystem_ae47b3`, React 18 vorher laden; Props in `components/index.d.ts`.

## Markenregeln (nicht verhandelbar)
1. Safe Space: nie Hallennamen, Adressen, Karten oder Spielorte öffentlich zeigen, auch nicht auf Fotos.
2. 11 Sprachen: keine feste Breite und kein `nowrap` auf übersetzbarem Text.
3. Tap-Ziele mindestens 44 px.
4. Keine neuen Farbtöne, Schriften, Radien oder Schatten; Texte und Flächen mit semantischen Tokens (`surface-*`, `text-*`, `border-*`), nie mit rohen `qvl-*`-Werten.
5. Icons: Software und Design System nur Lucide über `Icon`; die Website (Zephyr) Material Icons, Font Awesome nur für Marken. Nie mischen.
6. Ton: du, Genderstern (Spieler*innen), FLINTA* mit Sternchen, kein Emoji, Headlines Bebas Neue in Versalien, Fließtext Oswald Regular (Light nur für Leadtext ab 19 px).

## READMEs
- Alle drei Repos haben dieselbe README-Struktur und oben dieselbe Repo-Tabelle mit den Adressen.
- Vor jedem Prod-Release (Apps: PR `staging` → `main`, Commons: Tag `vX.Y.Z`) die `README.md` prüfen und im selben PR nachziehen: Stand und Version, Adressen und Umgebungen, Variablen, Befehle, Doku-Tabelle. Ändert sich die Repo-Tabelle, in allen drei Repos anpassen, je Repo eigener Commit oder PR.

## Design-Skills
- impeccable ist Standard für App-Bildschirme, nur audit, critique, harden, polish, clarify, distill, adapt, layout.
- ui-ux-pro-max nur als Nachschlagewerk (`--domain ux|chart|react`, `--stack nextjs|shadcn|react`), nie `--design-system`, `--persist`, `--tokens`.
- design-taste-frontend nur für öffentliche Kampagnenseiten; seine Verbote von Verläufen, Haarlinien und Eyebrows gelten hier nicht.
- Vorrang: diese Regeln > impeccable > ui-ux-pro-max > design-taste-frontend.
- Widerspricht ein Skill der CI, als Frage an die CI notieren statt still zu entscheiden. Marke entscheidet Sebi bzw. der Vorstand.

## QVL To-Do-Liste
Source of Truth für offene Punkte: https://claude.ai/artifact/QQ4TjdruSP4SC6SPSqPcBP (Collections `items`, `questions`).

Wenn Sebi um einen Abgleich bittet oder eine Session mit offenen Folgeaufgaben endet:
1. Nur Besprochenes oder Beschlossenes sammeln: offene Aufgaben, offene Entscheidungen, Erledigtes.
2. Mit ArtifactData: erst `items` lesen; Vorhandenes aktualisieren, Erledigtes auf status "done" mit doneAt, nichts löschen. Alles in einem Batch schreiben, dann melden, was neu, geändert und erledigt ist.
   - `items`: title, detail (1–3 Sätze), area (manager | design | website | newsletter | dv | planner), group, status "open", priority ("" oder P1–P3, nur wenn Sebi sie nennt), due (YYYY-MM-DD oder ""), kind ("" | entscheidung | vorstand | merker | selbst), label, source ("Claude Code: <Repo>"), order (über dem Höchstwert), createdAt, updatedAt; doc_id kurz und eindeutig.
   - `questions`: text, context, options (Liste von Strings), itemId, status "open", answer "", note "", createdAt, answeredAt "".
3. Ohne Zugriff: dieselben Felder als JSON-Block unter „Für die QVL To-Do-Liste“ ausgeben.
4. Technische Entscheidungen zusätzlich ins Repo (CLAUDE.md, Docs, Commit-Message).
