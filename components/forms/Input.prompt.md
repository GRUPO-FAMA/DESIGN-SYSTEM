Text field with uppercase label; square, 1px black border (or underline for editorial forms).

```jsx
<Input label="Nombre y apellidos" placeholder="Tu nombre" required />
<Input label="Email" type="email" variant="underline" hint="Te enviaremos la confirmación" />
<Input label="Mensaje" multiline variant="filled" />
<Input label="Altura" error="Introduce tu altura en cm" />
```

Errors are black bold with an em dash — the palette has no red.