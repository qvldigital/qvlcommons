# QVL Design System — Übergabe an Claude Code

Queer Volleyball League e.V. — extern immer "Queer League". Einstieg ist `design-system/README.md` (Brand Book mit allen Regeln).

## Aufbau
- `design-system/tokens.json` — Quelle aller Werte (Farben hell + dunkel, Typografie, Abstände, Radien, Schatten, Rahmen, Größen). `design-system/tokens.css` ist daraus kompiliert.
- `design-system/components/<Name>/` — `README.md` (Nutzung), `<Name>.d.ts`, `preview.html`; alle Props in `components/index.d.ts`.
- `design-system/components/bundle.js` + `bundle.css` — alle Komponenten als `window.QueerLeagueDesignSystem_ae47b3`; React 18 vorher laden.
- `design-system/assets/<Gruppe>/` — Logos, Ball-Icons, Netz-Hintergründe, Muster; je Gruppe eine `README.md`.
- `design-system/ui_kits/`, `design-system/templates/` — Website, Manager-PWA, Spielbetrieb (Vorschläge); sie nutzen `_ds_bundle.js` und `styles.css` im Wurzelordner des Design Systems.
- `brand-kit/` — fertiges Brand Kit: DTCG-Tokens hell/dunkel, Tokens-Studio, Paletten (CSV, GPL), Logos, Icons, Hintergründe, Muster, Brand-Kit-Dokument; `brand-kit-import.pdf` ist die Vorlage für den Canva Brand Kit Builder.

## Regeln (aus dem README, nicht verhandelbar)
1. Safe Space: nie Hallennamen, Adressen, Karten oder Spielorte öffentlich anzeigen.
2. 11 Sprachen: nichts mit fester Breite oder `nowrap` auf übersetzbaren Texten.
3. Mobile first: Tap-Ziele mindestens 44 px. Einzige Ausnahme: Datentabellen in Admin-Ansichten mit `density="compact"` (Zeilen 36 px, Aktionen 32 px), nur bei Maus; bei Touch automatisch 44 px.
4. Feste CI: keine neuen Farbtöne erfinden; Texte und Flächen mit semantischen Tokens (`surface-*`, `text-*`, `border-*`) setzen, nicht mit rohen `qvl-*`-Werten.
5. Icons nach Fläche: Software (Manager, Planner, Referee) und alles aus dem Design System mit Lucide über `Icon`; die Website (Zephyr) behält die Material Icons des Themes, Font Awesome nur für Marken-Symbole. Nie mischen innerhalb einer Fläche.
6. Ton: du-Ansprache, Genderstern (Spieler*innen), FLINTA* immer mit Sternchen, kein Emoji, Headlines in Bebas Neue GROSS, Fließtext in Oswald Regular (Light nur für Lead ab 19 px).

## README bei jedem Release
Vor jedem Release (Tag `vX.Y.Z`) die `README.md` prüfen und im selben Commit nachziehen: Stand und Version, Inhalt, Nutzung, Doku-Tabelle. Die Repo-Tabelle oben ist in `qvlplanner`, `qvlmanager` und `qvlcommons` gleich; ändert sich dort etwas (z. B. eine Adresse), in allen drei Repos anpassen, jeweils mit eigenem Commit oder PR im betroffenen Repo. Aufbau aller drei READMEs gleich halten.

## Leitplanken für Design-Skills (gilt für alle Apps)
Farben, Schriften, Nacht-Modus und Tokens kommen ausschließlich aus `design-system/tokens.json`. Kein Skill schlägt eigenmächtig neue Paletten, Schriften, Radien oder Schatten vor.
- impeccable: Standard für App-Bildschirme. Erlaubt sind audit, critique, harden, polish, clarify, distill, adapt, layout; nicht bolder, colorize, overdrive, new-work.
- ui-ux-pro-max: nur als Nachschlagewerk mit `--domain ux|chart|react` und `--stack nextjs|shadcn|react`, nie `--design-system`, `--persist` oder `--tokens`. Next.js-Hinweise gegen die Docs der installierten Next-Version prüfen. Tap-Ziele 44 px, nicht 24.
- design-taste-frontend: nur für öffentliche Werbe- oder Kampagnenseiten, nicht für Manager, Planner, Referee. Seine Verbote von Verläufen, Haarlinien und Eyebrows gelten nicht; Fotos nie mit Hallen, Orten oder Adressen.
- Vorrang bei der Umsetzung: Regeln dieses Repos > impeccable > ui-ux-pro-max > design-taste-frontend.
- Widerspricht ein Skill der CI, wird das nicht weggewischt, sondern als Frage an die CI notiert (Regel bleibt, wird verfeinert oder fällt). Marke (Farben, Formen) entscheidet Sebi bzw. der Vorstand; reine Umsetzung (Schriftschnitt, Mindestgrößen, Dichte) kann in Commons verbessert werden.
- Jede App verweist in ihrer eigenen `CLAUDE.md` auf diesen Abschnitt.

## QVL To-Do-Liste (Source of Truth für offene Punkte)

Zentrale Liste aller offenen QVL-Punkte: https://claude.ai/artifact/QQ4TjdruSP4SC6SPSqPcBP

Wenn Sebi um einen Abgleich bittet oder eine Session mit offenen Folgeaufgaben endet:

1. Sammle offene Aufgaben, offene Entscheidungen und in der Session Erledigtes. Nur Besprochenes oder Beschlossenes, keine Vermutungen.
2. Mit Zugriff auf die Artefakt-Datenbank (ArtifactData):
   - Zuerst `items` lesen und abgleichen: Vorhandenes aktualisieren, Erledigtes auf status "done" mit doneAt setzen, nichts löschen.
   - Neue Punkte in `items` anlegen. Felder: title, detail (1–3 Sätze), area (manager | design | website | newsletter | dv | planner), group, status "open", priority ("" oder P1–P3, nur wenn Sebi sie nennt), due (YYYY-MM-DD oder ""), kind ("" | entscheidung | vorstand | merker | selbst), label (z. B. Version oder Commit), source ("Claude Code: <Repo>"), order (über dem bisherigen Höchstwert), createdAt, updatedAt. doc_id kurz und eindeutig.
   - Offene Entscheidungen zusätzlich in `questions`. Felder: text, context, options, itemId, status "open", answer "", note "", createdAt, answeredAt "". `options` ist eine Liste von Texten (`["A", "B"]`), kein einzelner Text mit „|“; alle Textfelder sind Strings.
   - Alles in einer Batch-Operation schreiben, danach melden, was neu, geändert und erledigt ist.
3. Ohne Zugriff: Die Punkte als JSON-Block im obigen Format ausgeben, Überschrift „Für die QVL To-Do-Liste“.
4. Technische Entscheidungen gehören zusätzlich ins Repo (CLAUDE.md, Docs, Commit-Message), nicht nur in die Liste.
