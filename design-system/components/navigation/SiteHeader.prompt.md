`SiteHeader` is the top bar for queerleague.de and the Manager.

```jsx
<SiteHeader items={[{value:"liga",label:"Liga"},{value:"turniere",label:"Turniere"}]} active="liga" cta="Mitmachen" language="DE" />
```

`compact` switches to the burger layout — use below 900 px. The language switcher is never hidden; 11 locales are a core feature.
