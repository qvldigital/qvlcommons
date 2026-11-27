# CI-Review November 2026

Durchgang durch sechs Fragen an die QVL-CI und das Design System, mit den drei Design-Skills `impeccable`, `ui-ux-pro-max` und `design-taste-frontend` als zweite Meinung. Ziel: CI-Regeln dort aufpolieren, wo die Kritik berechtigt ist, statt sie reflexhaft zu verteidigen. Entschieden hat Sebi (Sebastian Schoett) am 27.11.2026, Punkt für Punkt. Vorschauen liegen in `docs/ci-review/`.

Nicht verhandelbar und hier nicht zur Debatte: Safe Space (keine Hallen, Adressen, Orte), 11 Sprachen (kein `nowrap`, keine festen Breiten), du-Ansprache, Genderstern, kein Emoji.

## 1. Oswald Light als Fließtext

**Heute:** `README.md` „Body: Oswald Light (300); emphasis is Oswald Regular (400)“. `tokens.json`: `weight-body` 300 für Lead, Body, Small und Caption (bis 12 px).

**Skills:** impeccable (typeset) verlangt, hellen Text auf dunklem Grund mit etwas mehr Zeilenhöhe, Laufweite und notfalls einem Schnitt mehr Gewicht auszugleichen, und deutlich getrennte Gewichtsstufen. ui-ux-pro-max: Fließtext mindestens 16 px mit gutem Kontrast. design-taste-frontend nutzt Light-Schnitte nur ab etwa 28 px, nie als Fließtext.

**Varianten:** A so lassen; B nach Fläche (400 in Apps, 300 auf Werbeflächen); C nach Größe (Light nur für Lead ab 19 px, sonst überall 400, Nacht mit mehr Luft). Vorschau: `docs/ci-review/01-oswald.html`.

**Entscheidung: C übernommen.** Umgesetzt:
- `weight-lead` 300 (neu), `weight-body` 400, `weight-emphasis` 500, `weight-strong` 600.
- Nacht: `leading-body-night` 1.7 und `tracking-body-night` 0.01em, vom Dark-Theme automatisch auf `--leading-body` und `--tracking-body` gelegt; `body` setzt jetzt `letter-spacing: var(--tracking-body)`.
- Geändert in `tokens.json`, `tokens.css`, `tokens/typography.css`, `tokens/dark.css`, `tokens/base.css`, `components/bundle.css`, beiden Brand-Kit-Kopien (DTCG und Tokens Studio, Brand-Kit-Dokument), `guidelines/type-body.card.html`, `README.md` und `CLAUDE.md` (Regel 6).
- Kein Vorstandsthema: Schriftschnitt ist Umsetzung, keine Marke.
- Offen: Apps (Manager) übernehmen die Werte mit dem nächsten Commons-Update; Komponenten nutzen bereits die Variablen.

## 2. Bebas in kleinen Größen und lange Wörter

**Heute:** Eyebrows, Labels und Spaltenköpfe Bebas 13 px mit Laufweite 0.14em; Überschriften fest (h1 36, h2 28, h3 22 px); weder `hyphens` noch `overflow-wrap` im CSS.

**Messung** (`docs/ci-review/02-bebas.html`, 12 Überschriften in den 11 Sprachen bei 390 px; dazu taste-`inspect.mjs --widths 390`):
- Sprachabdeckung: Die 11 Sprachen (DE PL CS DA SV FR PT ES IT NL EN) sind alle lateinisch; Bebas und Oswald (latin + latin-ext) haben alle geprüften Zeichen, auch ł ř ů ĳ ẞ. Kein Handlungsbedarf.
- Bebas ist schmal genug, dass „SPIELER*INNEN-MELDUNG“ bei 36 px passt. Nur „MANNSCHAFTSVERANTWORTLICHE“ lief über (1 von 12); mit `hyphens: auto` und `lang` kein Überlauf mehr.
- `inspect.mjs` meldet keinen Seitenüberlauf, wohl aber „micro-label“ für die 13-px-Eyebrows.

**Skills:** impeccable (typeset) fordert Belastungstests für lange Überschriften und Übersetzungen; sein generelles Eyebrow-Verbot ist ein Widerspruch zur CI, Eyebrows bleiben (Spaltenköpfe, Formular-Labels). ui-ux-pro-max empfiehlt Abschneiden mit „…“ — verworfen, verstößt gegen die 11-Sprachen-Regel. taste wertet kleine gesperrte Versalien als Fehler.

**Varianten:** A so lassen; B Silbentrennung als Grundregel plus Eyebrow mindestens 14 px; C wie B plus fließende h1-Größe (28–36 px) und `text-wrap: balance` — brachte in der Messung keine Zeile weniger.

**Entscheidung: B mit Eyebrow 14 px übernommen.** Umgesetzt:
- `text-eyebrow` 0.875rem (14 px), `tracking-eyebrow` 0.1em; 14 px ist die Untergrenze für Bebas.
- Überschriften `h1`–`h6` in den Basis-Styles: `hyphens: auto; overflow-wrap: break-word`. README-Regel: korrektes `lang` an `<html>` und an fremdsprachigen Blöcken, nie mit „…“ abschneiden, Überschriften in der Quelle in normaler Schreibung.
- Komponenten mit Bebas unter 14 px auf `text-small` gehoben: `Badge size="sm"`, `LevelBadge size="sm"` (Region/Klasse), `BottomNav`-Labels; in beiden Bundles nachgezogen, Quell-Hashes neu berechnet. Im Manager-Kit nachgemessen: alle Bebas-Labels 14 px.
- Geändert außerdem: `tokens.json`, `tokens.css`, `tokens/typography.css`, beide Brand-Kit-Token-Kopien, `guidelines/type-eyebrow.card.html`, `ui_kits/manager/index.html` (feste 0.14em durch Token ersetzt).
- Nicht angefasst: die Remotion-Videos in `videos/` setzen 0.14em fest; bei der nächsten Video-Überarbeitung angleichen.

## 3. 44-px-Tap-Ziele überall

**Heute:** `README.md` „44 px minimum targets (`--tap-min`)“ ohne Ausnahme; Tabs, Select, Checkbox, Radio, Switch und Navigation setzen 44 px; `StandingsTable` hatte keine kompakte Variante.

**Skills:** impeccable (adapt): 44 × 44 px für Touch, Desktop darf dichter sein, aber Touch am Desktop nicht ignorieren (Touch-Laptops). ui-ux-pro-max: im Web gilt WCAG 2.2 AA mit 24 px Mindestziel oder Abstand; 44 pt ist iOS-Norm; mindestens 8 px zwischen kleinen Zielen. taste: nicht zuständig (keine App-Bildschirme).

**Varianten** (Vorschau `docs/ci-review/03-dichte.html`, 12 Zeilen: 568 gegen 472 px): A so lassen; B global 44 px bei Touch, 32 px bei Maus für alle Bedienelemente; C 44 px bleibt Standard, kompakter Modus nur für Datentabellen und ihre Werkzeugleisten, nur bei Maus.

**Entscheidung: C übernommen.** Umgesetzt:
- Neue Tokens `row-compact` 36 px und `tap-compact` 32 px; bei `pointer: coarse` fallen beide per Media Query auf `--tap-min` (44 px) zurück (`tokens.json`, `tokens.css`, `tokens/spacing.css`).
- `StandingsTable` hat die Prop `density="comfortable" | "compact"` (Quelle, beide `.d.ts`, `components/index.d.ts`, README der Komponente, beide Bundles mit neuem Quell-Hash). Gemessen: Zeilen 47 px normal, rund 36 px kompakt mit Maus, 44 px kompakt bei Touch-Emulation.
- Regel 3 in `README.md` und `CLAUDE.md` verfeinert: einzige Ausnahme sind Datentabellen in Admin-Ansichten mit `density="compact"`, nur bei Maus.
- Offen: Der Manager (shadcn-Tabellen) und der Planner übernehmen den Modus beim Umstieg auf Commons-Komponenten oder bilden ihn mit denselben Tokens nach.

## 4. Fasen an jedem Bedienelement

**Heute:** `README.md` „45° chamfered corners, never rounding“; 24 Komponenten setzen die Fase per `clip-path`. Weil `clip-path` `outline` und `box-shadow` abschneidet, brauchen Button, IconButton und Tabs den `.qvl-focus`-Wrapper (Ring aus acht `drop-shadow`s, Füllung für Elemente ohne Fläche); Input und Select färbten stattdessen ihre Hülle per React-State ein und hatten so einen einfachen 3-px-Rahmen statt des doppelten Rings.

**Skills:** impeccable (audit, craft-floor) und ui-ux-pro-max verlangen einen sichtbaren, einheitlichen Fokusring an jedem Bedienelement. Gegen Fasen sagen sie nichts; das Problem ist die Technik. taste: nicht zuständig.

**Befund:** Chromium unterstützt `corner-shape: bevel` (im Browser-Bereich geprüft); damit ist die Fase eine echte Form, `outline` und Rahmen folgen ihr ohne Wrapper. iOS-Safari ist ungeprüft und für die PWA entscheidend.

**Varianten** (Vorschau `docs/ci-review/04-fasen.html`): A so lassen; B gleiche Formen mit `corner-shape` und `clip-path` als Rückfall; C Fasen nur an Haupt-Buttons, Karten, Badges und Hero, Felder, Selects, Tabs und Checkboxen eckig (Radius 0).

**Entscheidung: C geht als Frage an den Vorstand, der Feldfokus wird sofort angeglichen, B ist ein Merker.**
- **Vorstandsfrage:** Sollen Fasen künftig nur an Haupt-Buttons, Karten, Badges und Hero sitzen, Eingabefelder, Selects, Tabs und Checkboxen dagegen gerade Ecken haben (weiter nie rund)? Fachliche Empfehlung: ja — weniger Sonderbau, einheitlicher Fokus, Fasen wirken stärker, weil seltener. Bis zur Entscheidung bleiben alle Formen wie sie sind.
- **Umgesetzt:** `Input` und `Select` bekommen den doppelten Fokusring wie Button und Tabs. Neue Klasse `.qvl-focus-field` (unbeschnittene Hülle, Ring per `:focus-within` mit denselben `drop-shadow`s wie `.qvl-focus`) in `tokens/base.css` und `components/bundle.css`; der React-Fokus-State in beiden Komponenten entfällt. Beide Bundles nachgezogen, Hashes neu. Per Tastatur geprüft, hell und Nacht.
- **Offen:** `Checkbox`, `Radio` und `Switch` nutzen noch das alte Muster (Hülle per State umgefärbt); angleichen, sobald die Vorstandsfrage entschieden ist, weil C sie ohnehin ändern würde.
- ~~Merker B~~ → siehe Nachtrag: B wurde am selben Tag umgesetzt.

**Nachtrag 27.11.2026 (Recherche auf Sebis Nachfrage):** `corner-shape` ist in Chrome und Edge ab 139 und Firefox Desktop ab 163 stabil. Safari hat es seit Technology Preview 251 (26.08.2026) und in der **Safari-27.3-Beta vom 16.11.2026, laut Release Notes auch für iOS 27.3** („Added support for the `corner-shape` property.“); das stabile Safari 27.2 noch nicht. Damit wird B in Kürze für alle Zielplattformen tragfähig.

**Entscheidung Sebi: B jetzt umsetzen** („die Apps werden ja noch nicht richtig ausgerollt — und bis es soweit ist, ist 27.3 auch stabil“). Umgesetzt:
- Der `chamfer()`-Helfer in allen 25 Komponenten- und Kit-Quellen (und in beiden Bundles, Quell-Hashes neu) setzt jetzt `clip-path: var(--qvl-chamfer-clip, polygon(…))`, `border-radius: calc(var(--qvl-bevel,0) * ch)`, `corner-shape: bevel` und `overflow: var(--qvl-bevel-overflow, visible)`. Ein `@supports (corner-shape: bevel)`-Block in `tokens/base.css` und `components/bundle.css` schaltet auf `clip-path: none`, Radius und `overflow: clip`; ohne Unterstützung bleibt alles wie bisher.
- Auf dem neuen Weg ist der Fokusring ein natives `outline` (2 px) mit 1-px-Innenring als `box-shadow`; die `drop-shadow`-Filter der Wrapper sind dort aus. Wrapper und Hüllen bleiben für den Rückfall.
- Neue Klassen `.qvl-chamfer` und `.qvl-chamfer-4` (Größe über `--ch`) für Tailwind- und shadcn-Apps.
- `StandingsTable`: `overflowX: auto` steht jetzt nach dem Helfer, damit die Tabelle weiter seitlich scrollt.
- Geprüft: alle 35 Komponenten-Vorschauen per Headless-Edge (158, mit `corner-shape`) fotografiert, neuer Weg gegen Rückfall: höchstens 872 abweichende Pixel (Kantenglättung der Diagonalen bei Input/Select), sichtbar gleich; der Rückfall ist deterministisch. Fokus per Tastatur an Tabs und Input geprüft. Hülle für solche Vergleiche: `scripts/harness.html?c=<Komponente>[&fallback=1][&theme=dark][&pseudo=1]`.
- README: Abschnitt Fasen und Fokus beschreibt Technik, Rückfall und die neuen Klassen.
- Offen: Rückfall (`clip-path`, Wrapper, Hüllen) entfernen, sobald Safari 27.3 verbreitet ist; drei feste `clipPath`-Polygone (`SiteFooter`, `MatchCard`, Kit-`Login`) stehen noch direkt im Code; `--clip-chamfer-2/-4` in `bundle.css` werden am `:root` aufgelöst, ein `--ch` am Element wirkt dort nicht (älteres Problem, die neuen Klassen haben es nicht). Quellen: [Safari 27.3 Beta Release Notes](https://developer.apple.com/documentation/safari-release-notes/safari-27_3-release-notes.md), [Safari TP 251](https://webkit.org/blog/18194/release-notes-for-safari-technology-preview-251/), [caniuse corner-shape](https://caniuse.com/mdn-css_properties_corner-shape).

## 5. Bewegung

**Heute:** `README.md` „Fast and mechanical, never bouncy … Fades and colour swaps only“; Tokens nur in `tokens/motion.css` und `components/bundle.css`, nicht in `tokens.json` und nicht in `tokens.css`; reduzierte Bewegung setzte alle Dauern auf 0; keine Regeln für Overlays, Wertwechsel und Ansichtswechsel.

**Skills:** impeccable (animate): Rückmeldung 100–150 ms, Zustandswechsel 150–300 ms, Overlays 300–500 ms, Ausblenden schneller als Einblenden; reduzierte Bewegung heißt weniger und sanfter, nicht keine — Farbe und Deckkraft bleiben. ui-ux-pro-max: gemeinsame Motion-Tokens, höchstens ein bis zwei bewegte Elemente pro Ansicht. taste: nicht zuständig.

**Varianten:** A nur Tokens aufräumen; B kleines Regelwerk im bisherigen „mechanischen“ Charakter (Vorschau `docs/ci-review/05-bewegung.html`); C modernes System mit WOW-Momenten.

**Entscheidung: C übernommen** — Sebi: „UX und WOW dürfen sich nicht ausschließen.“ Die Effekte kommen aus der Marke selbst (Block-Schatten, Fase, Bebas-Ziffern, Spektrum-Linie). Vorschau: `docs/ci-review/05-bewegung-c.html`. Umgesetzt:
- Leitsatz im README: „Precise and fast, with momentum in the moments that matter“ statt „fast and mechanical, never bouncy“; Regeln für Press (in den Block-Schatten sinken), Overlays, Wertwechsel (rollende Ziffern, Spektrum-Linie bei Satzgewinn), View Transitions zwischen Liste und Detail, gestaffelte Listen (höchstens 6) und ein Budget (ein großer Effekt pro Ansicht, nur `transform` und `opacity`, Eingaben warten nie).
- Neue Tokens: `ease-snap` (kurzes Überschwingen per `linear()`), `ease-arrive`, `duration-moment` 420 ms, `press-depth` 4 px, `motion-rise` 12 px, `stagger` 40 ms.
- Motion-Tokens jetzt auch in `tokens.json` (neue Gruppe `motion` mit `reducedMotion`) und `tokens.css`; außerdem `tokens/motion.css` und `components/bundle.css`.
- Reduzierte Bewegung: räumliche Bewegung fällt weg, Farb- und Deckkraft-Übergänge bleiben kurz (120–160 ms) statt auf 0 zu springen.
- Kein Vorstandsthema (weder Farbe noch Form); Sebi hat entschieden.
- **Offen (Umsetzung in Komponenten):** `Button` (Druck in den Block-Schatten), `Toast`, `Dialog`, `Tooltip` (Ein- und Ausblenden), `SetScoreInput` und Anzeigetafel (rollende Ziffern, Spektrum-Linie), View Transitions in Manager und Referee. Die Remotion-Videos (`videos/src/components/SubtitledSeries.tsx`) berufen sich noch auf „schnelle, mechanische Übergänge“.

## 6. Werkzeuge als Messgeräte

**Heute:** Der impeccable-Hook lief nur lokal (`.claude/settings.local.json`, `.impeccable/` per `.gitignore` ausgeschlossen); taste-`inspect.mjs` wurde nicht genutzt.

**Messung:** `impeccable detect` auf Dateien (Komponenten, Kits, Tokens) fand 0 Funde, auch ohne Projektkonfig — Inline-Styles in JSX sieht es nicht; per URL fand es im Manager-Kit 2 × `kicker-above-heading` (der CI-Eyebrow, eine Stilregel). `inspect.mjs` hat 51 Regeln, davon sind etwa 8 echte Messungen (Überlauf, seitliches Scrollen, abgeschnittener und verdeckter Text, Kontrast, kaputte Bilder …), der Rest Hausstil. Pseudo-Lokalisierung im Manager-Kit (53 Texte, rund 40 % länger): kein Seitenüberlauf, ein überlaufendes Element. Die UI-Kits haben kein `<meta name="viewport">` und rendern bei Handy-Emulation mit 980 px; sie werden deshalb nur am Desktop gemessen.

**Varianten:** A so lassen; B Messgeräte versioniert, von Hand und vor jedem Release; C wie B plus GitHub-Action als Gate.

**Entscheidung: B übernommen.** Umgesetzt:
- `npm run check:design` (`scripts/check-design.mjs`): impeccable-Detektor per URL über alle 35 Komponenten-Vorschauen und die 3 UI-Kits bei 390 und 1280 px, sechs Läufe parallel.
- `npm run check:i18n` (`scripts/check-i18n.mjs`): Pseudo-Lokalisierung (`scripts/pseudo-l10n.js`), dann `inspect.mjs` bei 390, 768 und 1280 px; gezählt werden nur `overflow`, `side-scroll`, `clipped-text`, `covered-text`, `contrast`, `broken-image`, `blend-text`.
- `scripts/harness.html` rendert jede Komponenten-Vorschau einzeln (mit Viewport-Meta; Optionen `theme=dark`, `pseudo=1`, `fallback=1`); `scripts/lib.mjs` stellt einen lokalen Server bereit.
- `.impeccable/config.json` ist jetzt versioniert (`.gitignore`: `.impeccable/*` mit Ausnahme `!.impeccable/config.json`); neue geteilte Ausnahme `kicker-above-heading` — Begründung: Eyebrows, Labels und Spaltenköpfe sind Teil der CI (siehe Punkt 2). `design.json`, Cache und `config.local.json` bleiben lokal.
- README des Repos, Abschnitt „Das Design System ändern“, Schritt 4 beschreibt beide Befehle.
- Erster Lauf (27.11.2026): `check:design` 15 Funde in 44 s — `NetPattern` (4: das CI-Netzmuster wird als „Cyan-Verlauf“, Streifen und Gitter gelesen), `monotonous-spacing` bei `Badge`, `Alert`, `StandingsTable` (gewollt gleichmäßig), dazu ein echter: im Spielbetrieb-Kit folgt auf `<h1>` direkt `<h3>`. Ob NetPattern und `monotonous-spacing` bei Einzelkomponenten als CI-Ausnahmen eingetragen werden, ist offen. (Ein erster, serieller Lauf meldete fälschlich 0 Funde, weil der Detektor still scheiterte; das Skript bricht jetzt in diesem Fall mit Exit-Code 2 ab.) `check:i18n` 2 Funde: **`Cover` lässt die Seite bei 768 px um 192 px seitlich scrollen** (dekorative Polygone ragen hinaus) — bestand schon vor dieser Überarbeitung, mit und ohne Pseudo-Text und auf beiden Fasen-Wegen; `StandingsTable` scrollt bei 390 px seitlich — gewollt.
- Voraussetzungen: Node 22+, Chrome oder Edge, der impeccable-Skill global (`~/.claude/skills/impeccable`, sonst `IMPECCABLE=…`) und der taste-Skill in `.claude/skills/` (sonst `TASTE_INSPECT=…`).

## Bonus: als „flagged for QVL CI approval“ markierte Regeln

Nicht mehr durchgesprochen. Befund: Das Repo-README sagt, Verläufe, erweiterte Gelb-Regel und abgeleitete Pink-Töne seien am 13.10.2026 von der QVL-CI freigegeben; `design-system/README.md` markiert Gelb (Zeile 90) und Verläufe (Zeile 92) aber noch als „flagged for QVL CI approval“, `--qvl-ink` (Zeile 177) ebenso. Offene Frage an Sebi: Gilt die Freigabe vom 13.10. auch für `--qvl-ink`, und sollen die Vermerke im Design-System-README entfernt werden?

## Überblick

| # | Thema | Entscheidung | Stand |
|---|---|---|---|
| 1 | Oswald Light als Fließtext | C: Regular 400, Light nur für Lead ab 19 px, Nacht mit mehr Luft | umgesetzt |
| 2 | Bebas klein, lange Wörter | B: Silbentrennung mit `lang`, Bebas nie unter 14 px | umgesetzt |
| 3 | 44-px-Tap-Ziele | C: kompakter Tabellenmodus nur bei Maus | umgesetzt (`StandingsTable`) |
| 4 | Fasen und Fokusring | Feldfokus angeglichen; `corner-shape` mit `clip-path`-Rückfall; Fasen nur an Hauptelementen → **Vorstand** | umgesetzt, Vorstandsfrage offen |
| 5 | Bewegung | C: modern, mit WOW-Momenten aus der Marke | Regeln und Tokens umgesetzt, Komponenten offen |
| 6 | Werkzeuge als Messgeräte | B: `check:design`, `check:i18n` | umgesetzt |

**Vorstandsfrage:** Fasen künftig nur an Haupt-Buttons, Karten, Badges und Hero; Eingabefelder, Selects, Tabs und Checkboxen mit geraden Ecken (weiter nie rund)?

**Offene Umsetzungen:** CI-Ausnahmen für `check:design` (NetPattern, `monotonous-spacing` bei Einzelkomponenten) festlegen; Überschriften-Reihenfolge im Spielbetrieb-Kit; UI-Kits ohne `<meta name="viewport">`; Bewegung in den Komponenten (Button, Toast, Dialog, Tooltip, SetScoreInput, View Transitions) und Videos; `Cover`-Überlauf bei 768 px; Checkbox, Radio und Switch auf das neue Fokusmuster (nach der Vorstandsfrage); `clip-path`-Rückfall entfernen, sobald Safari 27.3 verbreitet ist; drei feste `clipPath`-Polygone (`SiteFooter`, `MatchCard`, Kit-`Login`); Videos mit Eyebrow-Laufweite 0.14em; Manager und Planner ziehen die neue Commons-Version nach (Fließtext 400, Eyebrow 14 px, kompakte Tabellen, Fokus, Motion).
