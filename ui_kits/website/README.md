# UI kit · Website v2 (famaacademy.es)

The approved site redesign (Sept 2026), page by page, with the real content of famaacademy.es. This folder is a synced copy of `proposals/web/` — edit there and re-copy, or edit here once Framer is the source of truth.

- **Shared:** `site.css` (chrome, lists, quotes, footer, mobile), `course.css` (course blocks), `guide.css` (guide/blog article), `chrome.js` (nav + footer injected into `#nav` / `#footer`), `site.js` (curtain on Home only, reveal, `fitHeads()`, sticky CTA, nav state).
- **Pages (26):** Home · Openday · MasterMadrid · MasterBarcelona · IntensivoVerano · Online · CursoCasting · CursoPosado · MetodoFama · FamaAcademy · Contacto · Faqs · Blog · BlogPost · EscuelaMadrid · ComoSerModelo · Castings · Autoestima · Padres · AdmisionMadrid · AdmisionBarcelona (private, no nav) · AvisoLegal · Privacidad · Cookies · CondicionesGenerales · index.
- **Rules applied:** see readme.md → PAGE PATTERNS. React equivalents of the patterns live in `components/web/`.
- **Pending:** heros are still photos; swap to the 1080p videos when FAMA re-exports them (list of current low-res sources in each page's `<!-- vídeo: … -->` comment).
