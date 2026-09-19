Modal on a 60% black overlay; square white panel, 40px padding, fade + 8px rise.

```jsx
<Dialog open={open} onClose={()=>setOpen(false)} eyebrow="Admisiones" title="Solicitud enviada" actions={<Button onClick={…}>Cerrar</Button>}>Te contactaremos en 48 h.</Dialog>
```