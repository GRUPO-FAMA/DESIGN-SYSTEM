FAQ list between hairlines with +/– toggles; always ship the matching FAQPage schema.

```jsx
const items=[{q:'¿Necesito experiencia previa?',a:'No. El 90 % de los alumnos empieza de cero.'}];
<Faq items={items}/>
<script type="application/ld+json">{JSON.stringify(faqSchema(items))}</script>
```