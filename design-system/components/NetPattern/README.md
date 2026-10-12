`NetPattern` fills an arbitrary section (any aspect ratio) with a net mesh + tiled ball, built only from CSS and the real ball icon asset — never a new illustration.

```jsx
<NetPattern base="petrol-orange" ball="white" style={{minHeight:260,padding:32}}>
  <h2 style={{color:"#fff"}}>Turniere 2026</h2>
</NetPattern>
```

- Use it where the fixed `HINTERGRUND_*` backgrounds (used by `NetHero`/`PatternBand`) don't fit — a square card, a sidebar, a full-width band of unusual height.
- Gradients are two CI colours only (`petrol-orange`, `orange-petrol`, `petrol-pink`, `pink-petrol`, `orange-pink`, `petrol-mid`) — never introduce a third hue.
- Always put text on a solid or near-solid plate on top, same rule as `NetHero`/`PatternBand`.
- Turn `ballOpacity` down (0.1–0.16) behind text-heavy content, up (0.25+) for a decorative-only panel.
