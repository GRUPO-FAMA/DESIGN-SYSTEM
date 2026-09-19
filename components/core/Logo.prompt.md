Renders the correct FAMA Academy logo file (stacked, horizontal, wordmark-only or FF monogram), black or white, from the vector set in `assets/logo/svg/`.

```jsx
<Logo variant="horizontal" height={24} />
<Logo variant="stacked" inverse height={120} />
<Logo variant="mark-circle" height={40} base="../../assets" />
```

Files: `assets/logo/svg/fama-academy-{variant}-{black|white}.svg`; PNG exports in `assets/logo/png/` (512–4096 px), favicons in `assets/logo/favicon/`, OG images in `assets/logo/social/`. Set `base` (or `window.FAMA_ASSETS_BASE`) to the relative path of the DS `assets/` folder. Never recolor beyond black/white, outline, rotate or stretch.
