`Dialog` for confirmations and short forms (Ergebnis bestätigen, Spieler*in hinzufügen).

```jsx
<Dialog open={open} title="Ergebnis bestätigen" onClose={close}
  footer={<><Button variant="secondary" onClick={close}>Abbrechen</Button><Button variant="accent">Bestätigen</Button></>}>
  <p>Satzergebnisse 25:21 / 23:25 / 15:12 werden veröffentlicht.</p>
</Dialog>
```

**Motion:** the panel rises in over a fading scrim; on close it stays mounted for its 120 ms exit, ignores clicks meanwhile and is hidden from screen readers.
