Native select styled as a square black-outlined field with a 1.5px chevron.

```jsx
<Select label="Sede" placeholder="Elige ciudad" options={['Madrid','Barcelona']} value={city} onChange={e=>setCity(e.target.value)} />
```