Use `Button` for every action; `variant="accent"` is reserved for the single most important CTA on a view.

```jsx
<Button variant="accent" size="lg" iconLeft={<Icon name="user-plus" />}>Team anmelden</Button>
<Button variant="secondary">Abbrechen</Button>
```

- `primary` petrol / `accent` orange / `secondary` petrol outline / `ghost` bare.
- Sizes 44 / 44 / 56 px: every size meets the 44 px courtside tap target; `sm` only sets smaller type and padding.
- Labels are uppercase Bebas; German labels are long, so avoid fixed widths (`fullWidth` on mobile).
