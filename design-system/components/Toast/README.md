`Toast` inside `ToastStack` confirms saves — critical on the PWA where people tap between sets.

```jsx
<ToastStack><Toast message="Ergebnis gespeichert" action="Rückgängig" onAction={undo} /></ToastStack>
```

**Motion:** rises in with `--ease-snap` on mount. To animate the exit, set `className="qvl-leave"` and remove the toast after `--duration-fast` (120 ms).
