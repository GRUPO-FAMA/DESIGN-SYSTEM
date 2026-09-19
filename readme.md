# FAMA Academy Design System

FAMA Academy is a high-end modelling school based in Madrid and Barcelona. Its visual identity is editorial fashion at its most reduced: white pages punctuated by full-bleed black bands, Syne ExtraBold headlines set tight with Space Grotesk Light as the quiet second voice, hairlines instead of boxes, and photography (black-and-white at rest) that does all the talking. Everything in this system exists to stay out of the photograph's way.

> **v2 «Noche / Alternado»** (Sept 2026). The system was re-based on the approved redesign in `proposals/Propuesta 2 — Noche · contenido real.html`. The three brand colours and the 10 % margin are unchanged; the headline face, the button style, the page rhythm (alternating white / black bands) and the photography treatment are new. Where this readme and the STRICT DESIGN RULES differ, the rules below win.

Language of the brand: Spanish (Castilian). Cities: Madrid · Barcelona.

## Sources

Everything here was built from the files uploaded to `uploads/` in this project (no Figma, no codebase, no live site was supplied):

- Logo suite (AI / EPS / PDF / PNG / JPG / SVG): `FAMA-ACADEMY.ai`, `FAMA-ACADEMY-01…05.*`, `FAMA-ACADEMY-06 ICONO.jpg`, `FAMA-ACADEMY-01 invertida.png`, `FAMA-ACADEMY-ICONO.png`, `FAMA.png`, `JPG-01…05.jpg`
- Monogram suite: `ICONO.ai`, `ICONO-01…06.*`, `FAMA-ACADEMY-ICON.psd`
- Fonts: `Montserrat-VariableFont_wght.ttf` (+ italic), `Roboto-VariableFont_wdth,wght.ttf` (+ italic), `SpaceGrotesk-VariableFont_wght.ttf`
- Written brand rules ("STRICT DESIGN RULES"): colors 60/30/10, typography, 10 % safety margin, photography-first canvas rules for Canva-locked social/poster templates.

No photography, no product screens and no copy samples were supplied. UI kits therefore use gray image placeholders and original Spanish copy written to the tone rules below. Replace with real material.

## The rules (non-negotiable)

1. **Colors.** `#FFFFFF` background (≈60 %), `#000000` text, logos and titles (≈30 %), `#F1F1F1` accents and subtle containers (≈10 %). No gradients, textures or saturated color, ever. Hairlines and disabled states may use mixes of these three only (`--gray-line #E4E4E4`, `--gray-mid #9A9A9A`, `--gray-dark #4A4A4A`).
2. **Typography — three voices, strict hierarchy.** (a) **Syne ExtraBold (800)** UPPERCASE, tracking `-0.05em`, line-height 0.86: **only** short headlines of 2–4 words — the page H1 ("Máster Modelo Profesional"), the one giant element (date, price, word), KPI numbers. Max 3–4 Syne elements per page; never for section heads, list titles, cards or FAQ. **Never the brand name:** the word FAMA (and FAMA Academy / FAMA Management) is never set in Syne. Inside a headline it takes the wordmark font — Montserrat SemiBold 600, `+0.02em` (`.fama`, `--font-wordmark`) — so "MÉTODO **FAMA**" reads Syne + wordmark, exactly like the logo. "FAMA Academy" as a title is the full wordmark: FAMA 600 + ACADEMY 300. **Never a sentence:** anything longer than 4 words is unreadable in Syne (18-Sept review). Long headlines and closing statements use the **statement** pattern: Space Grotesk Light 300 uppercase with 1–2 key words in Syne 800 (`.stmt` / `--type-statement`: "Conviértete en un gran modelo… de **FAMA Management**"). (b) **Space Grotesk Medium (500)** UPPERCASE, tracking `+0.02em`, 16–28px (`--type-h3`, `--type-h4`, `--type-section`): every mid-level head — numbered section titles, list/step titles, convocatoria and card titles, FAQ questions, footer-level heads. Same weight as the wordmark. (c) **Space Grotesk Light (300)** UPPERCASE `+0.14em` (subtitles, statements, quotes, ticker). Montserrat Black (900) survives only in the wordmark and legacy print. Body, dates, conditions, data: Roboto Regular (400); labels and buttons Roboto Medium (500) 11px, tracking `0.26em` / `0.28em`.
3. **Margins.** 10 % safety margin on every outer edge of any canvas (poster, social, slide, hero). Text never touches the border.
4. **Photography is the hero.** Text never covers faces or key garment details. Maximize white space. Layouts must survive being locked as Canva brand templates: fixed text zones, photo zones, no overlaps.

## CONTENT FUNDAMENTALS

- **Language:** Spanish. Formal-but-warm second person (`tú`, never `usted`); the school speaks as "nosotros" sparingly, mostly it states facts.
- **Casing:** Headlines and labels are fixed uppercase (`CASTING ABIERTO`, `MADRID · BARCELONA`). Body copy is normal sentence case with Spanish punctuation (¿ ¡, « » optional, never straight quotes as decoration).
- **Tone:** aspirational, precise, restrained. Short declaratives. No exclamation marks in headlines, no superlatives stacked (`la mejor`, `única`); prestige is implied by restraint.
- **Data formatting:** dates as `12 OCT 2026` in labels, `12 de octubre de 2026` in body. Times `18:00 h`. Prices `1.200 €`. Cities separated by a middle dot `·`.
- **Emoji:** never. Unicode ornaments limited to `·`, `—`, `→`, `↗`, `+`.
- **Calls to action:** verb-first, two or three words, uppercase: `SOLICITAR PLAZA`, `VER PROGRAMA`, `RESERVAR CASTING`, `INSCRÍBETE`.
- **Vibe words:** editorial, silent, exact, premium, Madrid/Barcelona.

Examples
- Hero: `FORMAMOS LA PRÓXIMA GENERACIÓN` / `Escuela de modelos de alta gama. Madrid · Barcelona.`
- Program card: `PASARELA` — `12 semanas · Presencial · Madrid` — `Técnica de pasarela, postura, castings y book profesional.`
- Casting post: `CASTING ABIERTO` / `MADRID · 12 OCT 2026 · 18:00 H` / `Inscripción en famaacademy.es`
- Footer: `© 2026 FAMA Academy. Madrid · Barcelona.`

## VISUAL FOUNDATIONS

**Color.** Three values, nothing more. White is the page. Black is ink and the **band**: a full-bleed black section used as an accent in a fixed rhythm ("alternado"): the opening (hero video + headline), the people (Modelos rail) and the close (footer with the monogram) go black; everything in between stays white. Never two bands in a row. `#F1F1F1` is the only surface (placeholders, subtle containers). Hairlines are the ink colour at 18 % (`--line-on-white`, `--line-on-black`) — the only sanctioned transparency. Body text on black may use `#D0D0D0`; muted labels `#9A9A9A` on black, `#4A4A4A` on white. Wrap a black section in `.fa-band` (or the `Band` component) and every token inverts.

**Type.** Syne 800 is the headline voice (`--font-display`) but it is rationed: the H1, the giant element, the closing band, model names in the rail — nothing else (the 18-Sept review found all-Syne pages tiring). Every other heading is Space Grotesk 500 uppercase, small, `+0.02em` (`--type-section`, `--type-h3`). It is an extended face — never let it wrap mid-word: size headlines to their column (shrink until the longest word fits; the proposal ships a `fitHeads()` helper). Space Grotesk Light 300 is the second voice (`--font-display-secondary`): the subtitle under a headline (`--type-secondary`), big statements with one Syne-bold word (`--type-statement`: "Menos ruido. **Más presencia.**"), quotes (`--type-quote`), the ticker. One element per page may be **giant** (`--type-giant`, ≈16vw, nowrap, `-0.07em`): a date ("12 OCT") or a single word ("VERANO 2026"). Roboto 400 16/1.55 for reading; Roboto 500 11px uppercase for labels (0.26em) and buttons (0.28em). Headlines left-aligned; the masthead and the footer monogram are the only centred elements.

**Spacing.** 4 px base scale (`--space-1…11`). The 10 % safety margin *is* the web page margin (`--page-margin: 10vw`). Sections separated by `--section-gap: clamp(96px,12vw,200px)`. Canvases (poster, social, slide) keep the 10 % inset on all sides.

**Layout.** Editorial, magazine-like. Devices: a **masthead** line under the hero (issue number · horizontal logo · cities) between two hairlines; **numbered sections** ("02 · Máster") as muted labels; a **vertical caption** rotated in the left margin; **sticky text column** (5/12) beside a scrolling column of 4:5 photos, one photo offset at 70 % width; a **horizontal rail** for models (3:4 cards, scroll-snap); brand logos in a hairline grid (5 × 2). Hairlines, never boxes. Nav is fixed, transparent, in `mix-blend-mode: difference` so it stays legible over both white and black. Stacks to one column below 1100 px.

**Backgrounds.** Flat white or flat black (bands). Hero is a full-bleed 100vh video/photo with no text on it. No illustrations, patterns, textures, gradients or blur.

**Imagery.** Editorial fashion photography. **Rests in black-and-white (`grayscale(1)`) and returns to colour on hover**, with a 3 % scale over 1.6 s. Ratios: 16:9 hero, 4:5 cards, 3:4 model portraits, 2:3 posters. Text never sits on a photo; beside or below it. Brand/press logos: grayscale, inverted to white on bands.

**Corners.** `0px` everywhere: buttons, cards, inputs, images. The only round shapes are the circular monogram badge (`mark-circle.svg`) and the radio dot. Even the switch is square.

**Borders.** Cards have none (gray fill on white, or white on gray). Outline buttons and inputs use `1px solid #000`. Subtle separators `1px #E4E4E4`.

**Shadows.** None. Depth = gray surface or black inverse. Dialogs sit on a 60 % black overlay.

**Motion.** Slow and editorial, ease `cubic-bezier(.2,.6,.2,1)`. Page load: black curtain with the monogram lifts after 1.3 s (1.2 s, ease `.7 0 .2 1`). Scroll reveal: opacity 0→1 + 32 px rise over 1.3 s, 100 ms stagger. Buttons flip colour in 0.5 s. Ticker: linear, 48 s per loop, the only continuous animation. No bounce, no parallax.

**Hover.** Buttons invert (outline fills, solid hollows). Ghost links slide their arrow 6 px. Photos: colour + 3 % scale. Nav links: a 1 px underline draws in from the left. No opacity dimming.

**Press.** Opacity 0.6. No shrink.

**Focus.** Double ring `0 0 0 2px #FFF, 0 0 0 4px #000`.

**Transparency/blur.** Never for surfaces. Only the dialog overlay (`rgba(0,0,0,.6)`).

**Cards.** Mostly none: content is separated by hairlines and whitespace. Where a container is unavoidable, a flat `#F1F1F1` rectangle or a 1 px outline, 24–32 px padding, no radius, no shadow.


## PAGE PATTERNS (closed during the Sept 2026 site build — apply to every format)

These were decided page by page with FAMA and are now rules. `proposals/web/site.css`, `course.css`, `guide.css` are the reference CSS; the `components/web/` React set implements them.

- **Section head.** `0X` (Space Grotesk 300, 28–44px) · title · a muted label on the right, on a top hairline. Title in Syne **only if ≤ 4 words** and never containing FAMA; otherwise Space Grotesk 500. Component: `SectionHead`.
- **Alternado.** Sections alternate white/black strictly, never two of the same in a row. Mandatory black: the title block right after the hero, testimonials, brands ("Han confiado"), and the footer. The **last section before the footer is always white**. Legal, guide and blog pages follow the same rule.
- **Nav.** Fixed. Transparent over the hero; after 40 px of scroll it turns solid black (64 px tall, bottom hairline) and **stays** (never hides). Content: logo left, one outline button (`Solicitar plaza`) and the word `Menú` — the link list is collapsed on **every** breakpoint; it opens a full-screen black panel with the 10 pages in Space Grotesk 300 large. Sales landings (Admisión) have no nav at all: only logo and a phone-call button. Component: `SiteNav`.
- **Footer.** Black. Centred monogram (discreet, ≈15 % of width), four columns (Explora in two sub-columns · Legal · Grupo · RRSS), a bottom line with only the copyright — no address, no phone. Component: `SiteFooter`.
- **Sticky CTA.** A single solid button fixed bottom-right (`Solicitar plaza` / `Reservar plaza`) on every long page; hidden while the closing section or footer is in view.
- **Convocatorias table.** One row per group: day + time (Space Grotesk 500 uppercase) with the **time under the day**, dates (Roboto small muted), free places (Space Grotesk 300 large + label), button. All cells vertically centred in a single 52 px row; full rows share one hairline grid with vertical rules. Sold out rows at 45 % with a disabled outline. Summer intensives sit in the same table as extra rows. Component: `ScheduleRow`.
- **KPIs.** 3–4 cells in a hairline grid, number in Syne (`data-fit`), label under it. Component: `Kpis`.
- **Testimonials.** Real Google reviews only, verbatim, ≤ 45 words. Cite in **three lines**: name / role (Alumna · Madre de alumna · Padre de alumno) / date — never the word "Google" in the cite. Above the grid a **rating seal** `★★★★★ 4,9 · 1.638 reseñas en Google` linking to the Maps listing. 4–6 quotes, auto-fit grid ≥ 280 px. Components: `Testimonial`, `Rating`.
- **FAQ.** `<details>` list between hairlines, question in Space Grotesk 500 20px, `+`/`–` in Space Grotesk 300 on the right, answer Roboto 16/1.7 max 60ch. Mirrored 1:1 in `FAQPage` schema. Component: `Faq`.
- **Hairline lists.** Numbered ("01", Space Grotesk 300, 0.2em) or dashed ("–") lists between hairlines replace bullets everywhere. Never bullets, never boxes.
- **"NO" pattern.** For "what you don't need": one giant `NO` in Syne left, the items as a hairline list right. One Syne element, not three.
- **Statement close.** Every page ends with a white close: label · statement (Space Grotesk 300 with 1–2 Syne words) · Light sub-line · two buttons (solid + outline).
- **Price.** Never a number on public pages. Say `Financiación sin intereses · Consulta condiciones`; the price is given in the admission call. Real conditions live only on the private Admisión pages (350 € enrolment + 4 × 395 €).
- **Promise.** We never promise work: brands select, agencies propose. Say "tus probabilidades crecen porque nos ocupamos de todo" — training, book, representation via FAMA Management.
- **Copy voice for guides.** First paragraph answers the search query in bold ("¿Cómo ser modelo?" → direct answer); sections numbered; each section links 2–3 real blog posts in a hairline "reads" list.
- **Photography.** B/W at rest, colour on hover, full-bleed 100vh hero with no text on it; the hero is a photo until FAMA exports 1080p video. Never crop faces; `object-position` tuned per image.
- **Mobile.** One column under 1100 px; headlines fitted by `fitHeads()` and never more than 3 lines; hairline grids collapse to stacked rows with one hairline between; the footer goes to two columns on tablet, one on phone.

## ICONOGRAPHY

- **Brand mark.** The `FF` monogram (two mirrored Fs sharing a crossbar). Vector masters: `assets/logo/svg/fama-academy-mark-{black,white}.svg`; container versions `mark-square-{black,white,gray}.svg`, `mark-circle-{black,white}.svg` (favicons, avatars).
- **Logos.** Rebuilt as clean vectors from the brand's own Illustrator PDF (exact glyph positions, Montserrat SemiBold for FAMA, Space Grotesk Light for ACADEMY). `assets/logo/svg/fama-academy-{stacked,stacked-wordmark,horizontal,horizontal-wordmark}-{black,white}.svg`. `stacked` is the primary lockup; `horizontal` for nav/footer; wordmark versions only when the mark appears elsewhere on the same surface. PNG exports in `assets/logo/png/` (512–4096 px), favicons in `assets/logo/favicon/`, OG images in `assets/logo/social/`. `assets/logo/_vectors.json` holds the raw path data.
- **Clear space:** the height of the `F` crossbar on all sides. Minimum width: 120 px horizontal, 80 px stacked, 24 px mark.
- **Never** recolor the logo beyond black/white, add outlines, rotate, or place on a photo where it overlaps a face.
- **UI icons.** The brand supplies none. Use **Lucide** (CDN `https://unpkg.com/lucide@latest`) at `1.5px` stroke, 20 px, `currentColor`, square caps — its geometry matches the monogram's flat strokes. Keep icon use minimal: arrows (`arrow-right`, `arrow-up-right`), `menu`, `x`, `plus`, `minus`, `chevron-down`, `check`, `instagram`. No filled icons, no two-tone, no colored icons.
- **Unicode as icon:** `→` and `↗` in links are preferred over an SVG arrow in running text.
- **Emoji:** never.

## Intentional additions

- `Icon` wrapper (Lucide) — the brand has no glyph set; a thin wrapper enforces stroke/size.
- `Logo` component — renders the correct lockup/variant from `assets/` instead of letting consumers pick the wrong file.

## Fonts supplied vs. required

- Space Grotesk (secondary + mid voice): shipped (`assets/fonts/SpaceGrotesk-VariableFont_wght.ttf`, variable 300–700). Chosen over Montserrat on 18 Sept 2026: it is the headline face of the live famaacademy.es (Regular, uppercase, no tracking), so it carries brand memory. The logo itself stays Montserrat SemiBold + Light (embedded in the Illustrator PDF).
- Montserrat: shipped (`assets/fonts/`, variable 100–900) — wordmark only (`--font-wordmark`).
- Roboto (body, labels, buttons): shipped (`assets/fonts/Roboto-VariableFont_wdth,wght.ttf` + italic). Replaced Inter on 18 Sept 2026 — it is the body face of the live site.
- Syne (headline): **not supplied** — loaded from Google Fonts in `tokens/fonts.css`. Please upload a licensed TTF/WOFF2 to ship offline.


## Components

All React primitives live under `components/<group>/` (`<Name>.jsx` + `.d.ts` + `.prompt.md`, one `*.card.html` per group). Bundle namespace: `window.FAMAAcademyDesignSystem_4e70e5`.

- **core/** — `Button` (outline · solid · ghost; sm/md/lg; `inverse`; auto-inverts inside `.fa-band`), `Label` (uppercase micro-label; `muted`, `rule`, `vertical`), `IconButton`, `Icon` (curated Lucide subset, exports `ICON_NAMES`), `Logo` (stacked · horizontal · wordmarks · mark · mark-square · mark-circle; `inverse`).
- **forms/** — `Field` (label / hint / error wrapper), `Input` (outline · underline · filled; `multiline`), `Select`, `Checkbox`, `Radio` + `RadioGroup`, `Switch`.
- **web/** — page-level patterns from the site build: `SectionHead`, `Kpis`, `ScheduleRow`, `Testimonial`, `Rating`, `Faq`, `SiteNav`, `SiteFooter`, `StickyCta`, `HairlineList`, `StatementClose`.
- **surfaces/** — `Band` (full-bleed black section, inverts children), `Photo` (B/W at rest, colour on hover; ratio, caption), `ModelCard` (3:4 portrait + Syne name + "Ver ficha"), `Quote` (Space Grotesk Light testimonial + author), `Card` (gray · white · outline · inverse · plain), `Badge`, `Tag`.
- **navigation/** — `Tabs` (underline, `inverse`).
- **feedback/** — `Dialog`, `Toast`, `Tooltip`.

Errors have no color: black bold text with an em dash. Nothing has a radius except Radio and the circular mark.

## Proposals

- `proposals/Propuesta 1 — Editorial de lujo.html` — first direction (white, Montserrat Black + Light). Kept for reference.
- `proposals/web/` — **site v2, page by page** for the Framer rebuild: `index.html` lists them. Shared `site.css` (chrome, lists, quotes, footer), `course.css` (course-page blocks: title band, KPIs, convocatoria slots, programme, brands), `chrome.js` (nav + footer injected into `#nav`/`#footer`), `site.js` (curtain, reveal, `fitHeads`). Pages: Home · Openday · MasterMadrid · MasterBarcelona · IntensivoVerano · Online · MetodoFama · FamaAcademy · Contacto. Content is verbatim from famaacademy.es (Sept 2026).
- `proposals/Propuesta 2 — Noche · contenido real.html` — **approved direction**, home page rebuilt with the real famaacademy.es content (video, 21 models, testimonials, brands, footer). Theme switcher bottom-right (Negro / Blanco / Alternado — Alternado is the chosen default). This file is the visual source of truth for v2.

## Canva

- `canva/Kit para Canva.html` — Brand Kit guide (3 colours, 4 text styles, logo files, composition rules) and the 11 PNG masters at real size in `canva/masters/` (post, story, quote, date, course, carousel cover/inner/close, poster A3, reel cover, YouTube) for rebuilding the templates as locked Canva brand templates. `canva/_render.html` regenerates the masters. `canva/README.md` is the short version for the team.

## UI kits

- `ui_kits/website/` — **the approved v2 site** (26 pages, real famaacademy.es content, synced copy of `proposals/web/`): Home, course pages (Madrid · Barcelona · Verano), Openday, Online + 2 online courses, Método, FAMA Academy, Contacto, FAQs, Blog + post, Escuela de modelos en Madrid, 4 SEO guides, 2 private Admisión landings, 4 legal pages. Shared `site.css` / `course.css` / `guide.css` / `chrome.js` / `site.js`. React equivalents of its patterns: `components/web/`.

## Templates (for consuming projects)

All in v2 style: Syne headline + Space Grotesk Light second line, Inter labels at 0.26em, hairlines, photography B/W (tweak `blackAndWhite`), 10 % safety margin (content box = inner 80 %), text zones never overlap photo zones — ready to be rebuilt as locked Canva brand templates.

- `templates/instagram-post/` — 1080×1350 post, B/W photo hero + title band. Tweaks: photo share, band black/white.
- `templates/instagram-story/` — 1080×1920 story, full-bleed photo, masthead line, black band with headline + outline CTA. Tweaks: band size, solid CTA.
- `templates/instagram-quote/` — 1080×1350 testimonial, no photo, Space Grotesk Light quote + Syne author. Tweak: inverse.
- `templates/instagram-date/` — 1080×1350 the date as a giant headline (casting, openday), black by default. Tweak: white.
- `templates/instagram-course/` — 1080×1350 programme announcement, 3:4 photo left, title + data list right. Tweak: inverse.
- `templates/instagram-carousel/` — cover + 3 inner slides + closing slide (01/05…): black cover with Syne, white inners (Space Grotesk 500 title + 4:3 photo), black close with statement + button. Tweak: white cover.
- `templates/reel-cover/` — 1080×1920 reel cover: title kept inside the feed 4:5 crop and out of Instagram UI zones (guides toggle). Tweaks: guides, scrim, B/W.
- `templates/youtube-thumbnail/` — 1280×720: half photo, half black panel with a 2–4 word Syne title. Tweaks: photo side, inverse.
- `templates/email-header/` — 600 px newsletter: logo bar, 2:1 photo, black title band, Roboto body, solid button, legal line. Tweak: white band.
- `templates/guia-pdf/` — A4 PDF guide on `doc-page`: black cover, index, chapter page (0X head, photo 3:4, hairline list), close with CTAs. Export via the PDF menu.
- `templates/poster/` — A3 poster (1123×1587 px @96dpi): masthead, giant date, headline, photo, details, mark. Tweak: inverse.
- `templates/shared/image-slot.js` — drag-and-drop photo slot used by all photo templates.

## Index

- `readme.md` — this guide. `SKILL.md` — agent skill entry point.
- `styles.css` → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/base.css`.
- `assets/logo/{svg,png,favicon,social}/` (full logo set, see ICONOGRAPHY), `assets/fonts/` (Montserrat variable).
- `guidelines/` — specimen cards: Colors (core, derived, semantic, prohibited), Type (display Syne, secondary Light, giant, labels & buttons, body, scale, pairing), Layout (alternado rhythm, editorial devices), Spacing (scale, safe margin, controls, shape, motion), Brand (logo lockups, inverse, mark, clear space, files, photography).
- `components/` — see above. `proposals/`. `canva/` (Brand Kit + masters). `ui_kits/website/`. `templates/` (11 templates, see above).
- `thumbnail.html` — homepage tile.
- `uploads/` — original source files (untouched).
