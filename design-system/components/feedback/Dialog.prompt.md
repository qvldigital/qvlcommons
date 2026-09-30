`Dialog` for confirmations and short forms (Ergebnis bestätigen, Spieler*in hinzufügen).

```jsx
<Dialog open={open} title="Ergebnis bestätigen" onClose={close}
  footer={<><Button variant="secondary" onClick={close}>Abbrechen</Button><Button variant="accent">Bestätigen</Button></>}>
  <p>Satzergebnisse 25:21 / 23:25 / 15:12 werden veröffentlicht.</p>
</Dialog>
```
