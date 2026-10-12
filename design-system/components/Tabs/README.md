`Tabs` switches between views of the same object (Spielplan / Tabelle / Ergebnisse).

```jsx
<Tabs items={[{value:"plan",label:"Spielplan"},{value:"tab",label:"Tabelle"}]} value={tab} onChange={setTab} />
```

Keep it scrollable — translated labels can be twice as long as the German ones.
