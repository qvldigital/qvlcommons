`Card` is the default container for anything grouped — team info, match summary, a form section.

```jsx
<Card tone="default" header={<h3>Level B · Nord</h3>} footer={<Button size="sm">Details</Button>}>
  <p>14 Teams, Saison 2026/27</p>
</Card>
```

All four corners are chamfered. `tone="brand"` for petrol inverse blocks; `block` only for hero/feature cards (one per view).

Gradient tones `tiefe` / `pride` (white text) and `sunset` / `flutlicht` (ink text) are for a single feature card per view — never in grids or lists.
