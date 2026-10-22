`Icon` wraps Lucide (CDN, mask-based so `color`/`currentColor` works). `BallIcon` is the brand volleyball.

```jsx
<Icon name="calendar-days" size={20} />
<BallIcon tone="orange" size={28} />
```

Lucide is a **substitution** — QVL has no icon set of its own. Keep stroke-style Lucide icons only; never mix in filled sets or emoji.

**Which set where (decided 21.10.2026):** the software uses Lucide through `Icon`. The public website (WordPress theme Zephyr) keeps the theme's Material Icons; Font Awesome only for brand marks. Never mix sets within one surface. The website kit shows Lucide as a stand-in.
