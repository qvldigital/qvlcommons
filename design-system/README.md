# Queer League Design System

Design system for **Queer Volleyball League (QVL e.V.)** — externally always **“Queer League”**: the sport is subordinate to the league.

## 1. Company & product context

QVL e.V. is a Europe-wide **queer volleyball league, active since 1992, with roughly 1,000 members**. Competition runs in **Levels A–D** with regional groups (**Nord, Ost, Süd, West, Mitte**) plus a **FLINTA\*** and a **Senior\*innen** Spielklasse, tournaments, and a **Wall of Fame**. It is a community, not a governing body — volunteers, not officials, run it.

Digital surfaces:

| Surface | What it is | State |
| --- | --- | --- |
| **queerleague.de** | Multilingual public website (WordPress, 11 languages) — league info, Spielpläne, Tabellen, Turniere, Wall of Fame, joining | live |
| **Queer League Manager** (`manager.queerleague.de`) | PWA for team & Spieler\*innen registration and season administration | live |
| **Spielbetriebs-Tool** | Spielpläne, Ergebnisse, Tabellen | planned |
| **Digitaler Spielberichtsbogen** | Courtside match report / score entry | planned |

Tech stack the tokens are written for: **Next.js + Tailwind + shadcn/ui**, tokens consumed as **CSS custom properties**.

### Sources used to build this system

Everything here derives from the brand material the user supplied. There was **no codebase, Figma file or screenshot access** — so the UI kits are brand-faithful *proposals*, not recreations of shipped screens (see §8).

- `assets/QVL_CI_COLORPALLET_V1.pdf` in the repo root, outside `design-system/` (colours + type, read and transcribed into `tokens.json`)
- Logo PNGs: `QVL_LOGO_LANG_PETROL_ORANGE_RAHMEN`, `QVL_LOGO_LANG_ORANGE_PETROL_RAHMEN`, `QVL_LOGO_KURZ_PETROL_ORANGE_RAHMEN2`, `QVL_ICON_PETROL_ORANGE`
- 8 net/ball background PNGs (`HINTERGRUND_FELD_*`) and 3 icon-net pattern PNGs (`HINTERGRUND_DOKUMENTE_INFO`, `HINTERGRUND_TABELLE_MEDAILLE`, `HINTERGRUND_SCHONER_KARTEN`)
- Written CI notes from the user (colour roles, typography, Formensprache, tonality, principles)

Not available to the reader of this repo but referenced for completeness: `queerleague.de`, `manager.queerleague.de`.

---

## 2. Principles (non-negotiable)

1. **Safe Space** — never display hall names, addresses, maps or venue data publicly. Components deliberately have no venue field; where a user would expect one, show the `Alert tone="safe"` notice instead.
2. **11 languages** — every component must survive strings 2× the German length. No fixed widths on labels, no `nowrap` on anything translatable, tabs and nav scroll horizontally.
3. **Mobile first** — the PWA is used standing at the side of a court. 44 px minimum targets (`--tap-min`), big numerals, thumb-reachable actions. **One exception:** data tables and their toolbars in admin views may switch to compact density (`density="compact"`: rows `--row-compact` 36 px, row actions `--tap-compact` 32 px, at least 8 px apart). It applies with a mouse only; on touch (`pointer: coarse`) both tokens fall back to 44 px. Buttons, fields, navigation and everything public keep 44 px. *Added 27.11.2026 (CI review).*
4. **Fixed CI** — the palette is closed. Never invent a hue. Interaction shades are the CI hues mixed toward black (`--qvl-petrol-hover` etc.).
5. **Community, not Verband** — copy and visuals are warm and a bit cheeky, never bureaucratic.

---

## 3. Content fundamentals

**Voice:** inclusive, warm, sporty, with a wink. We are a community of volunteers talking to other volunteers.

**Person:** “**wir**” for the league, “**du**” for the reader (never “Sie”). Imperatives are friendly, not barked.

**Gender-fair language:** German uses the **Genderstern** — *Spieler\*innen, Schiedsrichter\*innen, Senior\*innen*. Never generic masculine, never “(m/w/d)”. In other locales use the established inclusive form (EN: *players*; FR: *joueur·euses*; ES: *jugadoras y jugadores* / *jugadorxs* per local usage; PL: *zawodniczki i zawodnicy*). **FLINTA\*** is always written with the asterisk. Pronouns are shown when someone supplies them (`PlayerRow pronouns`), never guessed, never mandatory.

**Casing:** headlines and button labels are **UPPERCASE** (Bebas Neue does the work). Body copy is normal sentence case. Never uppercase a full sentence of body text.

**Length:** headlines ≤ 6 words. Buttons 1–3 words. Body paragraphs 2–3 sentences; translated versions get longer, so never design to a line count.

**Volleyball metaphors:** welcome, but they must survive a non-technical volunteer and a translation. “Wir spielen dir den Ball zu” ✅. “Deine Fünf-Eins-Formation im Backoffice” ❌.

**Emoji:** not part of the brand. Do not use them in product UI or headlines. (The Genderstern and the `*` in FLINTA\* are typography, not decoration — keep them.)

**Numbers & abbreviations:** league shorthand is used in tables and explained via `Tooltip`: SP (Spiele), S (Siege), N (Niederlagen), SV (Satzverhältnis), PKT (Punkte). Dates in German short form: `Sa 14.11.`, times `14:00`.

Examples:

- Hero: **“Volleyball, wie es sein soll”** / “Rund 1.000 Mitglieder, Levels A–D, fünf Regionen — und Platz für dich.”
- CTA: **“Team anmelden”**, **“Mitmachen”**, **“Ergebnis eintragen”**
- Empty state: “Noch kein Spielplan — sobald alle Teams gemeldet sind, geht der Plan hier online.”
- Safe Space: “Hallenadressen sind nur für angemeldete Teams sichtbar.”
- Error: “Da ist uns der Ball durchgerutscht. Bitte nochmal probieren.”

---

## 4. Visual foundations

### Colour

Closed CI palette (`tokens.json`):

| Role | Token | Hex |
| --- | --- | --- |
| Hauptfarbe | `--qvl-petrol` | `#006666` |
| Akzent 1 | `--qvl-orange` | `#FF6600` |
| Akzent 2 | `--qvl-yellow` | `#FFFF00` |
| Akzent 3 | `--qvl-pink` | `#D04E97` |
| Weiß | `--qvl-white` | `#FFFFFF` |
| Grau | `--qvl-grey` | `#CCCCCC` |
| Hellgrau (page) | `--qvl-grey-light` | `#E5E5E5` |
| Tints | `--qvl-petrol-mid/-pale`, `--qvl-orange-mid/-pale` | `#4C9393` `#CCE0E0` `#FFA366` `#FFC199` |

Rules: **petrol** carries headers, primary buttons, headlines and table heads. **Orange** is the single loudest thing on a view — CTA, highlight, badge, the `:` between set scores. Labels on orange fills are `--qvl-ink` (5.9:1), never white (2.9:1). **Pink (#D04E97) is a second highlight that behaves like orange** — CTA, badge, tournament/Pride highlights, gradients with petrol or orange. Pink fills that carry small text (buttons, badges, toasts) use `--button-pink-bg`, pink mixed 88 % with black (`#B74585`), where white is 5.0:1; plain `#D04E97` (white 4.0:1) stays for fills without small text, headlines of 24 px and up, edges and gradients. Body copy goes on `--qvl-pink-pale` in ink. One loudest accent per view (orange *or* pink). Use `Button variant="pink"`, `Badge tone="pink"|"pink-soft"`, `Card tone="pink"`, `NetPattern base="pink|petrol-pink|pink-petrol|orange-pink"`. Pink tints (`-mid/-pale/-hover/-press`) are derived mixes, approved by the QVL CI on 13.10.2026.

**Yellow (Gelb) — needs dark grounds or ink.** Yellow on white is 1.07:1, so it is never text, an icon or a thin line on light surfaces. Allowed: focus ring and selection; text, score digits, eyebrows and active-nav bars **on petrol or night** (6.3:1 / 15:1); a fill **under ink** (16:1) via `<mark>` and `Badge tone="highlight"` ("Live", "Platz 1"); the Flutlicht gradient. Never white text on yellow, never yellow beside orange text. *Widening this rule (formerly "borders only") is flagged for QVL CI approval.*

**Gradients** (`components/bundle.css`) — four 135° surfaces plus one line: `--qvl-gradient-tiefe` (petrol-mid→petrol, default hero; white headlines anywhere, body text toward the petrol end), `-pride` (petrol→pink in OKLCH, white headlines), `-sunset` (orange→pink, ink text), `-flutlicht` (yellow→orange, ink text) and `-spektrum` (all four accents, lines ≤8 px only). Rules: only between CI hues; large surfaces only (hero, campaign/tournament header, Wall-of-Fame head, splash, one feature card via `Card tone="tiefe|pride|sunset|flutlicht"`); one gradient surface per view; never on buttons, inputs, tables, badges or text; never behind the raster net artwork; chamfers and block shadows stay solid; check contrast at the weakest stop. In dark mode Tiefe fades into the night surface. *Supersedes the earlier "no gradients" note — flagged for QVL CI approval.* Orange/white fails WCAG AA (2.9:1): labels on orange fills are `--qvl-ink` (5.9:1); orange stays a fill or pairs with petrol. Body copy uses `--qvl-ink` (see *Intentional additions*).

**Zebra tables:** white / `#E5E5E5` alternating rows under a petrol head — used for Spielpläne, Tabellen and Ergebnisse.

### Type

- **Headlines: Bebas Neue Regular, uppercase**, tracking `+0.02em`, line-height `0.92–1.1`. One weight only; hierarchy comes from size.
- **Body: Oswald Regular (400)**; emphasis is **Oswald Medium (500)**, strong emphasis SemiBold (600) — never Bebas inline. **Oswald Light (300) only for lead text from 19 px up** (`text-lead`, `weight-lead`) and larger statements; never for body, small copy, captions, labels or table cells. In night mode running text gets a little more air (`leading-body-night` 1.7, `tracking-body-night` 0.01em), set automatically by the dark theme. *Changed 27.11.2026 (CI review, was Light 300 for all running text): Light was too thin at 16 px and below and on night grounds.*
- **Eyebrows / labels / column heads:** Bebas 14 px, tracking `0.1em`, uppercase. **14 px is the floor for Bebas** — never smaller, also not in badges or table heads. *Changed 27.11.2026 (CI review, was 13 px / 0.14em): too fiddly on phones.*
- **Long words in 11 languages:** headings hyphenate (`hyphens: auto; overflow-wrap: break-word`, set in the base styles). This only works with the right language tag: `<html lang>` per page and `lang` on every block in another language. Never truncate translatable text with an ellipsis. Write headings in sentence case in the source and let `text-transform` uppercase them; hand-typed capitals hyphenate worse.
- **Scores, ranks, points:** Bebas. Everything countable inside prose: Oswald.
- Both faces carry the diacritics for DE, PL, CS, DA, SV, FR, PT, ES, IT, NL, EN.
- **Fonts are self-hosted:** `tokens/fonts.css` and `components/bundle.css` declare `@font-face` rules for Bebas Neue 400 and Oswald 300/400/500/600 (latin and latin-ext woff2, Fontsource 5.3.0, SIL OFL 1.1) from `/assets/fonts` at the repository root. No request goes to Google.

### Spacing & layout

4 px base scale (`--space-1` … `--space-24`). Gutter 16 px mobile / 32 px desktop, `--container-max` 1200 px, `--container-narrow` 720 px for prose. Card padding 24, stack gap 16, inline gap 8. Tap targets ≥ 44 px. Nothing is fixed-position except the header (sticky, optional) and the PWA `BottomNav`.

### Shape (Formensprache)

Derived from the logo's block letterforms: **45° chamfered corners, never rounding. All radii are 0.** Chamfer sizes `--chamfer-sm/md/lg/xl` = 6 / 10 / 16 / 24 px, applied via the `--clip-chamfer-2` (top-left + bottom-right — buttons, badges, tabs) and `--clip-chamfer-4` (all corners — cards, panels, dialogs) clip paths. Because `clip-path` eats borders, bordered blocks are a coloured outer chamfer with a 2–3 px pad around an inner chamfer — that is how `Card`, `Input`, `StandingsTable` and `Alert` get their edge.

**Where (trial since 27.11.2026, CI review):** chamfers sit on the elements that carry the brand — buttons, cards, badges, tags, alerts, dialogs, hero, score boxes. Input fields, selects, tabs, checkboxes, radios and switches have square corners (still never round), so the chamfer reads stronger because it is rarer and the fields stay calm. One token decides it: `--chamfer-field-scale` (`0` square, `1` chamfered as before). Sebi and the board have a free hand on form; the trial runs in the apps and gets judged in use (comparison: `docs/ci-review/04-fasen-versuch-*.png`).

**Technique (changed 27.11.2026, CI review):** where the browser supports `corner-shape` (Chrome/Edge 139+, Firefox 163+, Safari 27.3+ incl. iOS), a chamfer is a real shape — `border-radius` + `corner-shape: bevel` — so outline, borders and box-shadow follow the bevel and children are clipped with `overflow: clip`. Older browsers fall back to the `clip-path` polygons. Components switch automatically through their `chamfer()` helper (custom properties `--qvl-chamfer-clip`, `--qvl-bevel`, `--qvl-bevel-overflow`, set in an `@supports` block). **Apps** (Tailwind, shadcn) use `class="qvl-chamfer"` (top-left + bottom-right) or `"qvl-chamfer-4"` (all four corners) with the size in `--ch`; on the new path a normal `:focus-visible` outline works. The outer/inner pad pattern and the wrappers stay until the `clip-path` fallback is dropped (when Safari 27.3 is widespread).

### Borders, shadows, transparency

1 px `#CCCCCC` hairlines in tables; 2 px petrol card edges; a **double focus ring** on every focusable element: on light grounds 1 px yellow inside, 2 px ink outside (`--focus-ring-inner`, `--focus-ring`; ink is 13.8:1 on the page, 17.4:1 on cards); in dark mode 1 px night gap inside, 2 px yellow outside. Chamfered controls (`Button`, `IconButton`, `Tabs`) sit in a `.qvl-focus` wrapper, fields (`Input`, `Select`) in a `.qvl-focus-field` wrapper. With `corner-shape` support the ring is a native outline that follows the bevel; on the `clip-path` fallback the wrapper draws it as drop-shadows. 3 px orange for error states. **No soft/blurred shadows anywhere** — depth is a solid 6 px offset block (`--shadow-block-petrol/-orange/-pink`; on chamfered elements use the `--drop-block-*` filters on an unclipped wrapper — `clip-path` clips `box-shadow`), used sparingly (one hero/feature card per view). No backdrop blur. Transparency is used in exactly two places: the petrol modal scrim (`--overlay-scrim`, 88 %) and the white 82 % plate that protects lead text sitting on net artwork. Text is never set on a photographic or patterned ground without a solid or near-solid plate.

### Imagery & backgrounds

Two families, both supplied as PNG — **never redraw, regenerate or recolour them**:

1. **Net + ball artwork** (`assets/backgrounds/`): flat colour field, a diagonal white net edge with wavy meshes across the lower right, and the ball mark in the empty upper-left. Nine colourways; `NetHero` puts the headline in that empty field.
2. **Icon-net patterns** (`assets/patterns/`): wavy net grid with icons sitting in the meshes — *documents/info* (rules, downloads), *table/medal* (results, Wall of Fame), *pads/cards/whistle* (referees, equipment). Used as section bands behind a white plate.

Colour vibe: flat, saturated, no grain, no photography in the supplied material. If photography is added later it should be warm, candid, in-hall, and cropped so faces are consenting participants — treat it as a Safe-Space decision, not a design one.

### Cards

White, 2 px petrol or grey chamfered edge, 24 px padding, flat. Tones: `default` (white), `brand` (petrol inverse), `soft` (petrol-pale), `accent` (orange-pale). `block` adds the solid offset shadow.

### Motion, hover, press

**Precise and fast, with momentum in the moments that matter.** Everyday state changes stay quick and quiet (`--duration-fast` 120 ms for colour, `--duration-base` 180 ms for toggles, `--ease-standard`). The moments that matter — a point, a set won, saved, arrived on a view — get a short, confident flourish built from the brand itself (block shadow, chamfer, Bebas digits, the Spektrum line): `--duration-moment` 420 ms with `--ease-snap` (a short overshoot that settles fast, never a rubber-band bounce) or `--ease-arrive`. *Changed 27.11.2026 (CI review, was "fast and mechanical, never bouncy, fades and colour swaps only"): UX and a wow effect must not exclude each other.*

- **Press:** elements with a block shadow sink into it by `--press-depth` (4 px) and snap back with `--ease-snap`; others scale to `--press-scale` (0.98). Press down takes `--duration-instant`.
- **Overlays** (Toast, Dialog, Tooltip): rise `--motion-rise` (12 px) and fade in over `--duration-moment` / `--duration-base` with `--ease-snap` or `--ease-out`; they leave faster than they arrive (`--duration-fast`, `--ease-in`).
- **Values that change** (score, points, counters): Bebas digits roll in with `--ease-snap`; a set or match won sweeps the Spektrum line (≤ 8 px) once across the board.
- **Views and lists:** moving between list and detail uses View Transitions (`--ease-arrive`), the tapped item becomes the new view. Lists that appear as lists may stagger by `--stagger` (40 ms), at most 6 items.
- **In the components (since 2.5.0):** `Button` and `IconButton` press on pointer down (mouse and touch) and snap back; `Dialog` rises in over a fading scrim and leaves in `--duration-fast`; `Toast` rises in (give it `className="qvl-leave"` before removing it to animate the exit); `Tooltip` fades and rises 4 px; `SetScoreInput` rolls changed digits up or down. For apps, `bundle.css` and `tokens/base.css` carry the classes `.qvl-enter`, `.qvl-leave`, `.qvl-fade-enter`, `.qvl-fade-leave`, `.qvl-roll-up`, `.qvl-roll-down` and `.qvl-stagger` (on a list: its first 6 children rise in one after the other). Still with the apps: View Transitions between list and detail, and the Spektrum sweep when a set or match is won (Referee scoreboard).
- **Budget:** at most one big effect per view; animate `transform` and `opacity` only; input never waits for an animation; no parallax, no endless loops, no scroll-linked motion without meaning.

- **Hover:** solid buttons darken (CI hue mixed 86 % with black); outline/ghost buttons fill with `--qvl-petrol-pale`; links go petrol → dark orange; table rows do not change.
- **Press colour:** a further darken (74 %); the movement is described above.
- **Focus:** double ring (yellow 1 px inside, ink 2 px outside; on night a 1 px gap and a 2 px yellow line), always visible, never removed.
- **Disabled:** grey fill `#CCCCCC`, muted ink, `not-allowed`.
- `prefers-reduced-motion`: spatial movement stops (`--press-depth`, `--motion-rise`, `--stagger` and the press scale fall away, `--ease-snap` becomes `--ease-out`), but short colour and opacity changes stay at up to 120–160 ms, because they confirm what happened. The Spektrum sweep and digit roll become a plain fade.

---

## 5. Iconography

- **No icon set was supplied with the brand material.** ⚠️ **Substitution:** the system uses **Lucide** (stroke, 2 px, `lucide-static@0.544.0`, ISC; the glyphs the system uses are embedded in `Icon`, so no icon request leaves the page; a name that is not embedded falls back to the unpkg CDN) via the `Icon` component, rendered as a CSS mask so it inherits `currentColor`. Sizes 16 / 20 / 22 px. Keep to the stroke set — never mix in filled icon families. Note: Lucide has **no whistle glyph** — for referee contexts use `siren`, `megaphone` or the whistle that already sits inside the `pattern-pads-cards` artwork.
- **Which set where (decided 21.10.2026):** the software (Manager, Planner, Referee) and everything built from this system uses **Lucide** through `Icon`. The public website (queerleague.de, WordPress theme Zephyr) keeps the theme's own **Material Icons** (filled, classic); Font Awesome stays for brand marks only (social logos), not for controls. Never mix sets within one surface. The website UI kit and template show Lucide as a stand-in for the Material Icons the real site renders. Videos follow the surface they show.
- **The only brand-owned graphic icon is the volleyball**, extracted programmatically from the supplied CI backgrounds into `assets/icons/ball-{petrol,petrol-dark,orange,white}.png` and exposed as `BallIcon`. It is the illustration used in `EmptyState` and anywhere a spot graphic is needed. For slides, mails and posts there are also 43 illustrations in `assets/illustrations/` (volleyball and league, digital contact channels, organisation), generated from `../assets/illustrations/build.py`; see their README.
- The icons *inside* the pattern PNGs (document, info-i, table, medal, whistle, cards, knee pads) are part of that artwork — use the pattern, don't extract them as UI icons.
- **No emoji**, no unicode characters as icons. In the software no icon font and no hand-drawn SVG icons: use Lucide or the supplied artwork. (The website's theme icon font is the one exception, see above.)
- Logos are raster PNGs (`assets/logo/`), used through `Logo`. No SVG logo was supplied — see *Caveats*.

---

## 6. Components

Authored from the brand guidelines (no source component library existed). Grouped by concern under `components/`.

**core/** — `Button`, `IconButton`, `Icon`, `BallIcon`, `Card`, `Badge`, `Tag`, `Logo`
**brand/** — `NetHero`, `PatternBand`, `NetPattern`
**forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Switch`
**navigation/** — `SiteHeader`, `SiteFooter`, `Tabs`, `Breadcrumb`, `BottomNav`
**feedback/** — `Alert`, `Toast`, `ToastStack`, `Dialog`, `Tooltip`, `EmptyState`
**league/** — `StandingsTable`, `MatchCard`, `SetScoreInput`, `LevelBadge`, `PlayerRow`

Each group directory holds the `<Name>.jsx` sources; each component has its guide, types and live preview at `components/<Name>/README.md`, `<Name>.d.ts` and `preview.html`.

### Intentional additions

- **`--qvl-ink` / `--qvl-ink-muted` (`#1A1A1A` / `#4D4D4D`)** — the CI sheet lists no dark neutral, but body copy needs one to pass WCAG AA. Also the label colour on orange fills (5.9:1; changed 16.10.2026). Flagged for approval.
- **Derived interaction shades** (`--qvl-*-hover/-press`) — the CI hues mixed toward black, so hover/press never lowers contrast.
- **`Icon`** — a wrapper so the substituted Lucide glyph set has one controlled entry point.
- **`league/` family and `brand/` family** — product-driven (Spielbetrieb, Spielberichtsbogen, Safe-Space rules) rather than generic primitives.

---

## 7. Starting points

Marked for the consuming-project picker: `Button`, `Card`, `Alert`, `SiteHeader`, `StandingsTable`, `MatchCard`, `SetScoreInput`, `NetHero`, `PatternBand`, plus each UI-kit `index.html`.

---

## 8. UI kits

| Kit | Covers |
| --- | --- |
| `ui_kits/website/` | queerleague.de — home, Liga (Spielplan/Tabelle/Ergebnisse), Mitmachen, Wall of Fame |
| `ui_kits/manager/` | Queer League Manager PWA — login, team dashboard, roster, season registration |
| `ui_kits/spielbetrieb/` | Spielbetriebs-Tool & digitaler Spielberichtsbogen — fixtures admin, live score entry, confirmation |

⚠️ These are **brand-faithful proposals**, not recreations: no code, Figma file or screenshots of the live products were available. Read each kit's `README.md` for what was assumed.

---

## 9. Index

```
tokens.json               the tokens: colour (light + dark), type, spacing, radius, shadow, border, size
tokens.css                compiled from tokens.json
components/bundle.js      all components as window.QueerLeagueDesignSystem_ae47b3
components/bundle.css     gradients, clip paths, drop shadows, motion, base rules
components/index.d.ts     props of every component
components/<Name>/        README.md (guide), <Name>.d.ts, preview.html per component; Cover/ is the cover
styles.css                single entry point — @import list only (used by the UI kits and templates)
tokens/                    colors, typography, spacing, shape, elevation, motion, semantic, base, fonts
assets/logo/               4 supplied logo lockups (PNG)
assets/backgrounds/        9 net + ball colourways (PNG)
assets/patterns/           3 icon-net patterns (PNG)
assets/icons/              ball mark, 4 colourways (extracted PNG)
assets/apps/               app lockups and app icons for Manager, Planner, Referee
assets/illustrations/      43 illustrations (SVG + PNG), overview.png
assets/<group>/README.md   usage notes per asset group
components/{core,forms,navigation,feedback,league,brand}/
guidelines/                23 foundation specimen cards (Colors, Type, Spacing, Shape, Brand)
ui_kits/{website,manager,spielbetrieb}/
thumbnail.html             homepage tile
SKILL.md                   Agent Skills wrapper
readme.md                  this file
```

---

## 10. Caveats / open questions

1. **Fonts live outside `design-system/`.** The woff2 files are in `assets/fonts/` at the repository root (`../../assets/fonts/` from `tokens/` and `components/`); a copy of `design-system/` alone loses them. `tokens/fonts.css` and `components/bundle.css` both declare the faces; that is harmless, the browser loads each file once.
2. **No SVG logo.** All lockups are raster; small sizes and print will suffer. An SVG set would be a real improvement.
3. **No icon set of its own.** Lucide is a substitution for the software, the website keeps the theme's Material Icons (decided 21.10.2026, see §5).
4. **`--qvl-ink` is an addition**, not CI. Needs sign-off.
5. **Products were not accessible.** UI kits are proposals; real screens or code would make them recreations.


## Dark mode (Nacht)
- The `dark` theme in `tokens.json` remaps the semantic tokens only — CI hues are unchanged. Surfaces are petrol mixed toward black (`--qvl-night*`), body text `--qvl-paper`.
- Activate with `<html data-theme="dark">`; `theme.js` sets it from the OS (`prefers-color-scheme`, live) unless the user chose explicitly, and (`window.QVLTheme.set/toggle`) persists the choice; `<ThemeToggle/>` is the UI.
- Petrol as text/line/frame → `--text-heading`/`--border-default` (petrol-mid in dark). Filled petrol and pink keep white labels (pink buttons, badges and toasts on the darker `--button-pink-bg`); orange fills take `--qvl-ink` labels in both themes. The focus ring swaps to a yellow outer line with a night gap inside.
- Logos are PNG only: always on a white chamfer plate in dark mode (header/footer already do this).
- Components must use semantic tokens (`--surface-*`, `--text-*`, `--border-*`), never raw `--qvl-white/grey/ink` for surfaces or text.

## Brand-Kit-Export
`brand-kit/` enthält abgeleitete Dateien für Figma, Penpot, Canva, Adobe & Co. (DTCG-Tokens hell/nacht, ASE/GPL-Paletten, Brand-Kit-Dokument). Bei Token-Änderungen neu erzeugen.
