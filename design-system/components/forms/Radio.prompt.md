Use `RadioGroup` + `Radio` for 2–5 exclusive options (Spielklasse, Heim/Auswärts, Ergebnisart).

```jsx
<RadioGroup legend="Spielklasse">
  <Radio name="klasse" label="Offene Liga" checked={v==="offen"} onChange={()=>setV("offen")} />
  <Radio name="klasse" label="FLINTA*" checked={v==="flinta"} onChange={()=>setV("flinta")} />
</RadioGroup>
```
