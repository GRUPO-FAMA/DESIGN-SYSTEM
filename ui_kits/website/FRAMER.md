# Inventario Framer · famaacademy.es v2

Todo lo que hay que crear en Framer, en orden, con valores exactos. Referencia visual: `ui_kits/website/` (abrir cada HTML al lado). Fuente de los valores: `tokens/`, `ui_kits/website/site.css`, `course.css`, `guide.css`.

Dominio de desarrollo: `dev.famaacademy.es` (CNAME a Framer) o el `*.framer.app` del proyecto. Publicar en `famaacademy.es` solo tras el paso 7.

---

## 0. Ajustes del proyecto

- Breakpoints: Desktop ≥ 1100 · Tablet 810–1099 · Phone ≤ 809. (Todo el CSS cambia en 1100 px; en Framer usa Desktop 1200, Tablet 810, Phone 390.)
- Ancho de contenido: **sin contenedor fijo**. Margen lateral = **10 % del viewport** en todos los breakpoints (`--m:10vw`). En Framer: padding izquierdo/derecho = `10vw` en cada sección (Framer admite vw en padding).
- Ritmo vertical: entre secciones **clamp(96px, 12vw, 200px)** → Desktop 200 · Tablet 120 · Phone 96. Dentro de sección, del título al contenido **clamp(48px, 6vw, 96px)** → 96 · 64 · 48.
- Curva de movimiento: `cubic-bezier(.2,.6,.2,1)`. Aparición de bloques: opacidad 0→1 + Y 32→0, 1,3 s, escalonado 0/100/200 ms. Nada más se anima.
- Imágenes: todas en B/N (`grayscale(1)`); al hover vuelven a color y escalan 1,03 en 1,6 s. En Framer: filtro Saturación 0 → 100 en hover, Escala 1 → 1.03.

## 1. Colores (Styles → Colors)

| Nombre | Valor | Uso |
|---|---|---|
| Blanco | `#FFFFFF` | Fondo base (60 %) |
| Negro | `#000000` | Texto, bandas negras, botones (30 %) |
| Gris | `#F1F1F1` | Fondo de imagen mientras carga, contenedores sutiles (10 %) |
| Texto secundario | `#4A4A4A` | Cuerpo, descripciones |
| Texto secundario / negro | `#D0D0D0` | Cuerpo sobre banda negra |
| Atenuado | `#4A4A4A` / `#9A9A9A` | Etiquetas `dim` (sobre blanco / sobre negro) |
| Línea | `rgba(0,0,0,.18)` / `rgba(255,255,255,.18)` | Todas las líneas finas |

Prohibido: cualquier otro color, degradado o sombra (excepto la sombra de texto del menú sobre vídeo).

## 2. Fuentes

Subir a Framer (Custom fonts) desde `assets/fonts/`: **Space Grotesk** (variable 300–700) y **Roboto** (variable). **Syne** desde Google Fonts dentro de Framer (peso 800). **Montserrat** solo va en el logotipo (SVG), no hace falta cargarla.

## 3. Estilos de texto (Styles → Text)

Todos en MAYÚSCULAS salvo Body, Small, Caption y Quote. Tamaños Desktop / Tablet / Phone.

| Estilo | Fuente · peso | Tamaño | Interlineado | Tracking | Uso |
|---|---|---|---|---|---|
| **H1 Syne** | Syne 800 | 150 / 96 / 44 (ajustar al ancho, nunca partir palabra) | 0.86 | −0.05em | H1 de página, 2–4 palabras. Nunca la palabra FAMA |
| **Giant** | Syne 800 | 300 / 160 / 72 | 0.80 | −0.07em | Un elemento por página: fecha, «NO», «10 €» |
| **KPI** | Syne 800 | 72 / 56 / 36 | 0.90 | −0.05em | Cifras (2010, +3.000) |
| **Section title** | Space Grotesk 500 | 28 / 22 / 18 | 1.10 | +0.02em | Título junto al 0X (si tiene ≤4 palabras y no es FAMA, puede ir en Syne 72/48/28, −0.05em) |
| **Section num** | Space Grotesk 300 | 44 / 34 / 28 | 1.0 | +0.04em | El «01» de cada sección |
| **Light** | Space Grotesk 300 | 40 / 28 / 20 | 1.20 | +0.08em | Subtítulo bajo el H1, frases de apoyo |
| **Statement** | Space Grotesk 400 | 64 / 44 / 28 | 1.10 | 0 | Frases largas (>4 palabras) con 1–2 palabras en **Syne 800 −0.04em al 90 %** |
| **List title** | Space Grotesk 500 | 18 | 1.05 | +0.02em | Títulos de lista numerada, FAQ, convocatoria |
| **Menu item** | Space Grotesk 300 | 44 / 32 / 22 | 1.10 | +0.08em | Enlaces del panel Menú |
| **Quote** | Space Grotesk 300 | 24 / 20 / 18 | 1.40 | 0 | Testimonio (sin mayúsculas) |
| **Name** | Space Grotesk 500 | 14 | 1.2 | +0.02em | Nombre en la firma |
| **Label** | Roboto 500 | 11 | 1.0 | +0.26em | Etiquetas, migas, firma (rol y fecha), pie |
| **Button** | Roboto 500 | 11 | 1.0 | +0.28em | Texto de botón |
| **Lead** | Roboto 400 | 18 | 1.6 | 0 | Entradilla |
| **Body** | Roboto 400 | 16 | 1.7 | 0 | Cuerpo, color `#4A4A4A` (`#D0D0D0` sobre negro) |
| **Small** | Roboto 400 | 14 | 1.7 | 0 | Fechas, condiciones |
| **Caption** | Roboto 400 | 12 | 1.2 | 0 | Pie de página |

## 4. Componentes (en este orden; cada uno con las variantes indicadas)

**4.1 Button**
- Alto 60 · padding 0 44 · borde 1 px · texto Button.
- Variantes: `Outline/Negro` (borde y texto negros, fondo transparente; hover: fondo negro, texto blanco) · `Solid/Negro` (fondo negro, texto blanco; hover: invertido) · `Outline/Blanco` y `Solid/Blanco` (sobre banda negra).
- Transición 0,5 s. Sin radio, sin sombra.
- Par de botones (`acts`): gap 16, cada botón flex 1 y mínimo 220 px; en Phone se apilan.
- Variante `Nav`: alto 40, padding 0 22, texto 10 px, blanco.

**4.2 Label** — texto Label; variantes `Normal` y `Dim`; sobre negro `Dim` = `#9A9A9A`.

**4.3 SectionHead** («0X · Título · etiqueta»)
- Fila con línea superior 1 px, padding-top 28.
- Grid: auto · 1fr · auto; gap 32; alineado a la línea base.
- Num (Section num) · Título (Section title, o Syne si ≤4 palabras) · Label Dim a la derecha (oculta en Phone).
- Variantes `Blanco` / `Negro`.

**4.4 HairlineList** (lista numerada entre líneas)
- Cada fila: línea superior 1 px, padding 28 0; grid 56 px · 1fr; gap 16.
- Número «0X» en Space Grotesk 300 14 px, +0.2em, `dim`. Título List title. Descripción Small `#4A4A4A`, máx. 48 caracteres de ancho.
- Variante `Thoughts` (sin descripción, texto Space Grotesk 300 26/22/18 +0.06em, padding 22 0, número de 48 px).

**4.5 Testimonial**
- Cita en Quote, entre comillas tipográficas “ ”.
- Firma en **tres líneas** (gap 6, margen superior 24): Nombre (Name) / Rol (Label Dim) / Fecha (Label Dim). Sin la palabra Google.
- Rejilla de testimonios: auto-fit mínimo 280 px, gap 48 40. Desktop 3 columnas, Tablet 2, Phone 1.

**4.6 Rating** — «★★★★★ 4,9 · 1.638 reseñas en Google»; estrellas 13 px +0.12em; texto Small; el 4,9 en peso 500. Enlace a la ficha de Google.

**4.7 Faq** — `details/summary`: línea superior 1 px, padding 24 0; pregunta en List title con «+» a la derecha (Space Grotesk 300 28 px; pasa a «–» abierto); respuesta Body, máx. 60 caracteres, margen superior 16. Cierre con línea inferior.

**4.8 ScheduleRow** (convocatoria)
- Una fila por convocatoria sobre línea; padding 26 0; grid `1.5fr · 160 · 56 · 190 · 240`, gap 28, alineado al centro.
- Columnas: **Horario** (List title, p. ej. «Viernes de 16:30 a 20:30») · **Fechas** (Small, p. ej. «25 sep – 11 dic») · **Plazas** (Space Grotesk 300 48 px) · «Plazas disponibles» (Label Dim) · **Botón** (Solid, alto 52, «Solicitar plaza»; agotada: Outline «Convocatoria agotada» y fila al 45 % de opacidad).
- Agrupación por mes con Label encima y línea superior. En Phone: grid 1 columna, horario arriba, botón al ancho.
- Debajo de la tabla, una línea con: «Financiación sin intereses · Consulta condiciones» y el Rating.

**4.9 Kpis** — 4 celdas sobre líneas superior e inferior; padding 40 24 40 0; cifra en KPI + Label Dim debajo (margen 14). Variante `Word` para valores de texto (Space Grotesk 500 32 px). Phone: 1 columna con línea entre celdas.

**4.10 Photo** — contenedor con fondo `#F1F1F1`, `object-fit: cover`, B/N; hover: color + escala 1,03. Ratios usados: 3/4, 2/3, 4/5, 3/2, 16/9.

**4.11 SiteNav**
- Fijo arriba, alto 88 (76 con scroll), padding 10vw, texto blanco con sombra 0 1 12 rgba(0,0,0,.55) sobre vídeo.
- Con scroll > 40 px: fondo negro, línea inferior 1 px al 18 %, sin sombra de texto. Siempre visible (no se oculta al bajar).
- Contenido: logotipo monograma blanco 20 px (enlace a Home) · derecha: Botón `Nav` «Solicitar plaza» + texto «Menú» (Label). **Sin enlaces sueltos en la barra en ningún breakpoint.**
- Panel Menú: overlay negro a pantalla completa, entra desde arriba 0,7 s; cabecera de 88 px con logotipo y «Cerrar»; lista en Menu item con línea entre ítems (padding 24 0): Home · Openday · Máster Madrid · Máster Barcelona · Intensivos de verano · Online · Método FAMA · FAMA Academy · Blog · Contacto; al pie del panel: Label Dim con dirección y teléfono.
- Variante `Venta` (Admisión): sin Menú, solo logotipo y teléfono `919 49 32 53` como enlace `tel:`.

**4.12 SiteFooter** (fondo negro)
- Padding superior 120/96/64; padding lateral 10vw; inferior 32.
- Monograma blanco centrado, **alto 56 px** (discreto), gap 96/64/48 hasta las columnas.
- 5 columnas (Tablet 2, Phone 1), gap 32; cada una con Label Dim de cabecera: **Explora** (Método FAMA · FAMA Academy · Blog · Contacto · Preguntas frecuentes · Escuela de modelos en Madrid) · **Guías** (Cómo ser modelo · Castings · Autoestima y confianza · Para padres · Curso online de Casting · Curso online de Posado) · **Legal** (Aviso legal · Privacidad · Cookies · Condiciones generales) · **Grupo** (FAMA Management · FAMA Spaces · FAMA Academy · FAMA Agency) · **RRSS** (Instagram · TikTok · YouTube). Enlaces en Small, gap 12.
- Línea inferior: solo «© 2026 FAMA Academy. Madrid · Barcelona.» en Caption Dim, alineado a la derecha. **Sin dirección ni teléfono.**

**4.13 StickyCta** — botón Solid fijo abajo a la derecha (margen 24), aparece tras pasar el título y desaparece al llegar al cierre. Solo Phone y Tablet.

**4.14 StatementClose** — última sección, **siempre blanca**: Label Dim · Statement con 1–2 palabras en Syne · Light de apoyo (máx. 44 caracteres) · par de botones. Padding 200/120/96 arriba y abajo.

**4.15 Masthead** — banda negra bajo el hero: Label Dim · logotipo horizontal blanco 18 px · Label Dim, en 3 columnas centradas, padding 28 10vw, línea inferior. Tablet/Phone: 2 columnas sin logotipo.

**4.16 Hero** — 100vh (mín. 640), vídeo o foto `cover` en B/N, dos Labels blancos abajo a izquierda y derecha (a 40 px del borde). **De momento fotos**: cambiar a vídeo cuando lleguen los 1080p.

## 5. CMS (colecciones y campos)

| Colección | Campos |
|---|---|
| **Cursos** | nombre, ciudad, slug, título SEO, description, H1, subtítulo Light, entradilla, KPIs (4 pares valor/etiqueta), programa (rich), incluye (lista), FAQ (referencia múltiple), vídeo/foto hero, foto muestra, precio-texto («Financiación sin intereses»), enlace admisión |
| **Convocatorias** | curso (ref), mes, horario, fechas, plazas (número), estado (abierta/agotada), enlace pago HubSpot |
| **Testimonios** | cita, nombre, rol (Alumna / Madre de alumna / Hermano…), fecha, curso (ref), destacado (bool) |
| **FAQs** | pregunta, respuesta (rich), página(s) donde aparece |
| **Equipo** | nombre, rol, sede, bio corta, foto |
| **Marcas** | nombre, logo SVG/WebP |
| **Blog** | título, slug, fecha, categoría, resumen, contenido, relacionados |
| **Guías** | título, slug, entradilla, secciones (rich), lecturas relacionadas |
| **Legal** | título, slug, contenido, fecha de actualización |

## 6. Páginas y plantillas (orden de montaje)

1. **Home** (`/`).
2. **Plantilla Curso** → `/curso-modelo-madrid/`, `/curso-modelo-barcelona/`, `/curso-modelo-verano/` desde CMS Cursos.
3. **Openday** (`/openday/`), página fija.
4. **Plantilla Curso online** → `/curso-online-casting/`, `/curso-online-posado/`; índice `/online/`.
5. **Método FAMA**, **FAMA Academy**, **Contacto**, **FAQs**, **Escuela de modelos en Madrid**: fijas.
6. **Plantilla Guía** → `/como-ser-modelo/`, `/castings-de-modelos/`, `/autoestima-confianza-modelos/`, `/guia-padres-hijo-modelo/`.
7. **Plantilla Blog** → `/blog/` y `/[slug]/` (los posts están en la raíz, mantener).
8. **Plantilla Legal** → `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`, `/condiciones-generales/`.
9. **Admisión** (privadas, `noindex`, sin menú) → `/admision-curso-modelo-madrid/`, `/admision-curso-modelo-barcelona/`.

Orden de secciones y alternado de cada página: copiar del HTML correspondiente. Regla: nunca dos secciones seguidas del mismo color; la última antes del footer es blanca.

## 7. SEO antes de publicar

- Copiar de cada HTML el `<title>`, `meta description`, `canonical`, `og:*` y el bloque **JSON-LD** (Framer: Page settings → Custom code → head). Las URL son las actuales de WordPress: **no cambian**, así no hacen falta redirecciones salvo las de la tabla siguiente.
- Redirecciones 301 nuevas: ninguna obligatoria. Recomendadas: `/index.php` → `/`; cualquier URL de WordPress que quede sin equivalente → su página más cercana.
- Sitemap: Framer lo genera. Enviar en Search Console tras publicar.
- Imágenes: `alt` descriptivo (están en los HTML). Formato WebP. Heros ≤ 400 KB.
- Vídeos (cuando lleguen): MP4 H.264 1920×1080, 24–30 fps, sin audio, ≤ 8 MB, `autoplay muted loop playsinline`, con póster.
- Fuentes: `font-display: swap`.
- Core Web Vitals objetivo: LCP < 2,5 s, CLS < 0,1. Reservar siempre el alto de imágenes y vídeo.

## 8. Comprobación final (checklist)

- [ ] Menú recogido en Desktop, Tablet y Phone; botón «Solicitar plaza» en la barra.
- [ ] Ningún H1 partido por sílabas; ninguno de más de 4 palabras en Syne; «FAMA» nunca en Syne.
- [ ] Alternado correcto y última sección blanca en las 26 páginas.
- [ ] Testimonios en 3 líneas, reseñas literales.
- [ ] Sin cifras de precio en público.
- [ ] Footer sin dirección/teléfono; monograma 56 px.
- [ ] Todas las fotos en B/N con color al hover.
- [ ] Márgenes 10 vw en todos los breakpoints.
- [ ] JSON-LD válido (Rich Results Test) en Home, cursos, FAQs, guías.
