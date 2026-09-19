Editorial button: uppercase Inter 500 at 11px with 0.28em tracking, 1px border, zero radius; colours flip on hover. Use `outline` by default and `solid` for the single primary action on a surface.

```jsx
<Button variant="solid" size="lg" href="/openday">Reservar Openday</Button>
<Button>+ Madrid</Button>
<Button variant="ghost">Ver programa</Button>
<div className="fa-band"><Button variant="solid">Reservar casting</Button></div>
```

Inside a `.fa-band` (black section) the button inverts by itself; `inverse` forces white ink over photography. Never two solid buttons side by side.
