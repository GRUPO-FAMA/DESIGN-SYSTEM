# FAMA · Design System

Sistema de diseño del grupo FAMA. Una sola fuente de verdad para cualquier línea de negocio (FAMA Academy, FAMA Management, FAMA Spaces, FAMA Agency) y para cualquier herramienta: Claude Design, Framer, Canva, código.

Estética: editorial de moda, mínima y aspiracional. Blanco, negro y un gris. Fotografía en blanco y negro. Tipografía en mayúsculas. Sin degradados, sin color, sin adornos.

## Cómo usarlo

**Diseñar una pieza (post, reel, cartel, PDF, email)**
1. En Claude Design crea un proyecto *Design* y vincula este sistema (Sync from GitHub → `GRUPO-FAMA/DESIGN-SYSTEM`).
2. Elige una plantilla del grupo *Templates* y rellena foto y textos. No muevas nada de sitio.
3. Exporta PNG o PDF.

**Diseñar en Canva**
Usa la plantilla de marca publicada «FAMA · Maestras v2». Guía en `canva/Kit para Canva.html`.

**Programar (web, app)**
Enlaza `styles.css` (tokens y fuentes) y usa los componentes de `components/`. La web v2 de FAMA Academy en `ui_kits/website/` es la referencia de cómo se aplican.

**Con Claude Code**
`SKILL.md` convierte este repo en una skill: Claude lee `readme.md` y trabaja con la marca.

## Las reglas (no negociables)

1. **Color.** `#FFFFFF` fondo · `#000000` texto, logos y títulos · `#F1F1F1` acentos. Nada más. Prohibidos degradados, texturas y colores saturados.
2. **Tipografía, tres voces.**
   - **Syne ExtraBold** mayúsculas, interletraje −0,05 em: solo titulares de **2 a 4 palabras** y un elemento gigante por pieza. **Nunca la palabra FAMA** (va en la fuente del logotipo, Montserrat SemiBold).
   - **Space Grotesk** Light 300 (subtítulos, frases largas, citas) y Medium 500 (cabeceras intermedias, nombres, preguntas).
   - **Roboto** Regular (cuerpo) y Medium (etiquetas 0,26 em / botones 0,28 em, 11 px).
   Frases largas: Space Grotesk Light con una o dos palabras en Syne.
3. **Márgenes.** 10 % de seguridad en todos los bordes. El texto nunca toca el borde.
4. **Fotografía.** Es la protagonista. En blanco y negro; vuelve al color solo al interactuar. El texto nunca cubre una cara.
5. **Alternado.** Las secciones alternan blanco y negro, nunca dos iguales seguidas. La última sección antes del pie es blanca.
6. **Sin viñetas, sin cajas, sin sombras, sin esquinas redondeadas.** Listas y separaciones con líneas finas al 18 %.
7. **Testimonios.** Reseñas reales, literales, firma en tres líneas: nombre / rol / fecha.
8. **Precio.** Nunca cifras en público: «Financiación sin intereses · Consulta condiciones».
9. **Promesa.** Nunca prometemos trabajo. «Tus probabilidades crecen porque nos ocupamos de todo».
10. **Logotipo.** Solo negro o blanco, nunca sobre una cara, área de respeto igual a la barra de la F.

Detalle completo y razonado: `readme.md`.

## Qué hay en el repo

| Carpeta | Contenido |
|---|---|
| `readme.md` | Guía completa: fundamentos, tono, patrones de página, iconografía, índice. |
| `SKILL.md` | Skill para Claude Code. |
| `styles.css` · `tokens/` | Variables CSS: colores, tipografía, espaciado, fuentes (`@font-face`). |
| `assets/fonts/` | Space Grotesk, Roboto, Montserrat (variables). Syne se carga de Google Fonts. |
| `assets/logo/` | Logotipos en SVG (apilado, horizontal, monograma; negro/blanco), favicons. |
| `components/` | Componentes React: `core`, `forms`, `feedback`, `navigation`, `surfaces`, `web` (patrones de página). |
| `guidelines/` | Tarjetas de especificación (colores, tipos, layout, contenido). |
| `templates/` | 11 plantillas: post, story, cita, fecha, curso, carrusel, portada de reel, miniatura YouTube, póster A3, guía PDF A4, cabecera de email. |
| `ui_kits/website/` | Web v2 de FAMA Academy, 26 páginas con contenido real. |
| `canva/` | Kit para Canva y maestras PNG. |

## Por línea de negocio

Las reglas son las mismas para todo el grupo. Cambia solo el logotipo y el contenido:
- **FAMA Academy** — escuela. Referencia completa en este repo.
- **FAMA Management** — agencia. Mismo sistema; sustituir logotipo y textos.
- **FAMA Spaces** — espacios. Idem.
- **FAMA Agency** — idem.

Si una línea necesita una excepción, se documenta aquí antes de usarla. Nada de estilos paralelos.

## Contribuir

- Los cambios se hacen desde el proyecto Design System de la cuenta de empresa de Claude y se sincronizan a este repo, o por pull request.
- No editar a mano `_ds_bundle.js`, `_ds_manifest.json` ni `_adherence.oxlintrc.json`: se regeneran.
- Toda regla nueva se escribe primero en `readme.md`; después se aplica a plantillas y componentes.

© FAMA. Uso interno.
