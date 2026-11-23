The QVL illustrations: free-standing spot graphics for slides, mails, social posts, empty pages and the website. First set 23.11.2026, generated from code; they replace the island illustrations of 2.3.0 and 2.4.0. `overview.png` shows all of them on one sheet.

## Style

- Flat CI colours only (petrol, petrol-mid, petrol-pale, orange, orange-pale, yellow, pink, pink-pale, greys, ink). No gradients, no new tones, no vendor logos or vendor colours (no WhatsApp green, no Microsoft blue).
- Petrol outline 6 px on a 600 px canvas, hard petrol block shadow offset 12/12, 45° chamfers top right and bottom left, like buttons and cards.
- Accents: yellow for the ball and highlights (never behind text), orange for badges, pink for motion and emphasis.
- The volleyball is the recurring mark; it appears in many motifs.
- Text inside a motif is Bebas Neue converted to paths, so the SVGs need no font.
- Safe Space: no motif shows a real hall, address or map. `location-private` stands for exactly that rule.

## Files

- `qvl-illu-<name>.svg` is the master; `qvl-illu-<name>.png` is 1200 × 1200 px with a transparent background.
- `index.json` lists every motif with its group and German label.
- `brand-kit/illustrations/` holds the same files for Canva and other apps.
- Illustrations are spot graphics, not UI icons. In Manager, Planner and Referee, UI glyphs stay Lucide through `Icon`.

## Adding or changing a motif

The source is `assets/illustrations/build.py` (one function per motif, shared primitives for boxes, ball, people, envelopes, tags). Add a function with the `@motif(group, name, label)` decorator, then run from the repository root:

```
pip install fonttools brotli playwright pillow
python3 assets/illustrations/build.py && python3 assets/illustrations/render.py
```

`render.py` writes the PNGs and `overview.png` and copies everything to `brand-kit/illustrations/`. Look at the result before committing.

## Motifs

### Volleyball and league

| File `qvl-illu-<name>` | Shows |
|---|---|
| `ball` | Volleyball |
| `net` | Netz mit Ball |
| `court` | Spielfeld |
| `whistle` | Pfeife |
| `scoreboard` | Anzeigetafel |
| `trophy` | Pokal |
| `medal` | Medaille |
| `jersey` | Trikot |
| `kneepads` | Knieschoner |
| `lineup` | Aufstellung |
| `standings` | Tabelle |
| `matchday` | Spieltag |
| `team` | Team |
| `stopwatch` | Auszeit |

### Digital contact channels

| File `qvl-illu-<name>` | Shows |
|---|---|
| `website` | Website |
| `mail` | Mail |
| `newsletter` | Newsletter |
| `community` | Community-Chat |
| `push` | Push-Nachricht |
| `social` | Social Media |
| `livestream` | Livestream |
| `videocall` | Videocall |
| `qr-code` | QR-Code |
| `cloud` | Cloud & Dateien |
| `forms` | Formular |
| `magic-link` | Magic Link |

### Organisation

| File `qvl-illu-<name>` | Shows |
|---|---|
| `tickets-50` | Tickets -50 % |
| `tickets-10-free` | 10 Free Tickets |
| `vote` | Abstimmung |
| `agenda` | Tagesordnung |
| `statute` | Satzung |
| `finance` | Finanzen |
| `receipt` | Auslagen |
| `membership` | Mitgliedsausweis |
| `megaphone` | Ankündigung |
| `press` | Presse |
| `safe-space` | Safe Space |
| `location-private` | Ort geschützt |
| `stats` | Statistik |
| `folder` | Ablage |
| `checklist` | Checkliste |
| `volunteer` | Ehrenamt |
| `costs-rising` | Steigende Kosten |
