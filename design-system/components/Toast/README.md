`Toast` inside `ToastStack` confirms saves — critical on the PWA where people tap between sets.

```jsx
<ToastStack><Toast message="Ergebnis gespeichert" action="Rückgängig" onAction={undo} /></ToastStack>
```
