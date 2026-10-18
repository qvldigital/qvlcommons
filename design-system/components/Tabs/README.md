`Tabs` switches between views of the same object (Spielplan / Tabelle / Ergebnisse).

```jsx
<Tabs items={[{value:"plan",label:"Spielplan"},{value:"tab",label:"Tabelle"}]} value={tab} onChange={setTab} />
```

Keyboard: the selected tab is the only one in the Tab order; Left/Right/Home/End move between tabs and select them. Pass `panelPrefix="liga"` to link tabs and panels for screen readers: tab ids `liga-tab-<value>`, `aria-controls` `liga-panel-<value>`; give each panel `role="tabpanel"`, `id="liga-panel-<value>"` and `aria-labelledby="liga-tab-<value>"`.

Keep it scrollable — translated labels can be twice as long as the German ones.
