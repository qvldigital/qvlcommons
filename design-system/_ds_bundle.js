/* @ds-bundle: {"format":4,"namespace":"QueerLeagueDesignSystem_ae47b3","components":[{"name":"NetHero","sourcePath":"components/brand/NetHero.jsx"},{"name":"NetPattern","sourcePath":"components/brand/NetPattern.jsx"},{"name":"PatternBand","sourcePath":"components/brand/PatternBand.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"BallIcon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"LevelBadge","sourcePath":"components/league/LevelBadge.jsx"},{"name":"MatchCard","sourcePath":"components/league/MatchCard.jsx"},{"name":"PlayerRow","sourcePath":"components/league/PlayerRow.jsx"},{"name":"SetScoreInput","sourcePath":"components/league/SetScoreInput.jsx"},{"name":"StandingsTable","sourcePath":"components/league/StandingsTable.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"brand-kit/doc-page.js":"f52ae9c02fca","components/brand/NetHero.jsx":"6e1a166a0ecb","components/brand/NetPattern.jsx":"bad27b6542ac","components/brand/PatternBand.jsx":"56a679951bad","components/core/Badge.jsx":"281d2f0e7f26","components/core/Button.jsx":"1a5655696449","components/core/Card.jsx":"363e2bb73376","components/core/Icon.jsx":"98a9620908aa","components/core/IconButton.jsx":"2d48509503d6","components/core/Logo.jsx":"2a4bc1b2fa93","components/core/Tag.jsx":"bfb079fb42ac","components/core/ThemeToggle.jsx":"3dff1de68f5e","components/feedback/Alert.jsx":"4ef1adf8ea44","components/feedback/Dialog.jsx":"c685f6e11743","components/feedback/EmptyState.jsx":"213e42b18f88","components/feedback/Toast.jsx":"644a252406d6","components/feedback/Tooltip.jsx":"9deb7a377d3c","components/forms/Checkbox.jsx":"e05751dec040","components/forms/Input.jsx":"222ec3caa9f3","components/forms/Radio.jsx":"c27c2ebd3efd","components/forms/Select.jsx":"3be668e4055b","components/forms/Switch.jsx":"031b731282dd","components/league/LevelBadge.jsx":"e44ed40b6ec6","components/league/MatchCard.jsx":"9c866d7de1b5","components/league/PlayerRow.jsx":"9e8dcd66dcfa","components/league/SetScoreInput.jsx":"f8550fd9bda9","components/league/StandingsTable.jsx":"d770070982e3","components/navigation/BottomNav.jsx":"9f14b1d061f7","components/navigation/Breadcrumb.jsx":"6bf5186be755","components/navigation/SiteFooter.jsx":"71803ad77632","components/navigation/SiteHeader.jsx":"6754ae863828","components/navigation/Tabs.jsx":"24d8bce471a5","doc-page.js":"f52ae9c02fca","theme.js":"3c0e4743d8d2","ui_kits/manager/Dashboard.jsx":"7e2431784425","ui_kits/manager/Login.jsx":"a1943f7f7d9e","ui_kits/manager/Roster.jsx":"96bfcc327d00","ui_kits/manager/Spielbericht.jsx":"1f70ece95f2a","ui_kits/spielbetrieb/FixtureAdmin.jsx":"62459c75d85b","ui_kits/spielbetrieb/ReportSheet.jsx":"c721aab93f09","ui_kits/website/HomeScreen.jsx":"afd7cc4f9f4e","ui_kits/website/LigaScreen.jsx":"8e41fb77f516","ui_kits/website/MitmachenScreen.jsx":"cce91359c8bc","ui_kits/website/WallOfFameScreen.jsx":"2dd078e0c1f9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QueerLeagueDesignSystem_ae47b3 = window.QueerLeagueDesignSystem_ae47b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// brand-kit/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-kit/doc-page.js", error: String((e && e.message) || e) }); }

// components/brand/NetHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});

/* Resolve /assets against the project root by locating the linked styles.css.
   Works whether the page sits at the root or three folders deep. */
const dsBase = () => {
  if (typeof document === "undefined") return "/";
  const l = document.querySelector('link[rel="stylesheet"][href$="styles.css"]') || document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if (l && l.href) return l.href.replace(/styles\.css.*$/, "");
  return "/";
};
const asset = p => dsBase() + p.replace(/^\//, "");
const BGS = {
  "grey-petrol": "/assets/backgrounds/net-ball-grey-petrol.png",
  "grey-orange": "/assets/backgrounds/net-ball-grey-orange.png",
  "grey-yellow": "/assets/backgrounds/net-ball-grey-yellow.png",
  "grey-grey": "/assets/backgrounds/net-ball-grey-grey.png",
  "petrol-grey": "/assets/backgrounds/net-ball-petrol-grey.png",
  "petrol-petrol": "/assets/backgrounds/net-ball-petrol-petrol.png",
  "orange-petrol": "/assets/backgrounds/net-ball-orange-petrol.png",
  "orange-petrol-v2": "/assets/backgrounds/net-ball-orange-petrol-v2.png"
};
function NetHero({
  background = "grey-petrol",
  eyebrow,
  title,
  lead,
  actions,
  align = "left",
  minHeight = 380,
  inkOnDark,
  style,
  ...rest
}) {
  const dark = background.startsWith("petrol");
  const ink = inkOnDark !== undefined ? inkOnDark ? "var(--qvl-white)" : "var(--text-heading)" : dark ? "var(--qvl-white)" : "var(--text-heading)";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      minHeight,
      display: "flex",
      alignItems: "flex-end",
      backgroundImage: `url(${asset(BGS[background] || BGS["grey-petrol"])})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      width: "100%",
      margin: "0 auto",
      padding: "var(--space-16) var(--gutter-desktop) var(--space-12)",
      textAlign: align,
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "var(--space-4)"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--qvl-orange)",
      color: "var(--text-on-accent)",
      padding: "4px 12px",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      ...chamfer(5, 2)
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-1)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: ink,
      maxWidth: "20ch"
    }
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "48ch",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-tight)",
      color: dark ? "var(--qvl-white)" : "var(--text-body-color)",
      background: dark ? "transparent" : "color-mix(in srgb,var(--surface-card) 82%,transparent)",
      padding: dark ? 0 : "8px 10px"
    }
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { NetHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NetHero.jsx", error: String((e && e.message) || e) }); }

// components/brand/NetPattern.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dsBase = () => {
  if (typeof document === "undefined") return "/";
  const l = document.querySelector('link[rel="stylesheet"][href$="styles.css"]') || document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if (l && l.href) return l.href.replace(/styles\.css.*$/, "");
  return "/";
};
const asset = p => dsBase() + p.replace(/^\//, "");
const BASES = {
  petrol: "var(--qvl-petrol)",
  orange: "var(--qvl-orange)",
  "petrol-orange": "linear-gradient(135deg,var(--qvl-petrol) 0%,var(--qvl-petrol) 55%,var(--qvl-orange) 130%)",
  "orange-petrol": "linear-gradient(135deg,var(--qvl-orange) 0%,var(--qvl-orange) 45%,var(--qvl-petrol) 120%)",
  "petrol-mid": "linear-gradient(160deg,var(--qvl-petrol) 0%,var(--qvl-petrol-mid) 100%)",
  pink: "var(--qvl-pink)",
  "petrol-pink": "linear-gradient(135deg,var(--qvl-petrol) 0%,var(--qvl-petrol) 45%,var(--qvl-pink) 130%)",
  "pink-petrol": "linear-gradient(135deg,var(--qvl-pink) 0%,var(--qvl-pink) 45%,var(--qvl-petrol) 120%)",
  "orange-pink": "linear-gradient(135deg,var(--qvl-orange) 0%,var(--qvl-pink) 100%)",
  grey: "var(--surface-sunken)"
};
const BALLS = {
  petrol: "ball-petrol.png",
  "petrol-dark": "ball-petrol-dark.png",
  orange: "ball-orange.png",
  white: "ball-white.png"
};

/**
 * Generative net-and-ball fill for arbitrary sections — a parametric alternative to the fixed
 * HINTERGRUND_* artwork, built only from CSS gradients (the wavy net) and the real extracted
 * ball PNG (tiled), never a hand-drawn or generated image.
 */
function NetPattern({
  base = "petrol",
  ball = "white",
  meshOpacity = 0.35,
  ballOpacity = 0.16,
  ballSize = 64,
  mesh = 64,
  style,
  ...rest
}) {
  const meshLine = "rgba(255,255,255," + meshOpacity + ")";
  const meshBg = [`repeating-linear-gradient(45deg,${meshLine} 0 2px,transparent 2px ${mesh}px)`, `repeating-linear-gradient(-45deg,${meshLine} 0 2px,transparent 2px ${mesh}px)`].join(",");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: BASES[base] || BASES.petrol,
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-50%",
      width: "200%",
      height: "200%",
      backgroundImage: meshBg,
      backgroundSize: `${mesh}px ${mesh}px`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-50%",
      width: "200%",
      height: "200%",
      opacity: ballOpacity,
      backgroundImage: `url(${asset("assets/icons/" + (BALLS[ball] || BALLS.white))})`,
      backgroundSize: `${ballSize}px ${ballSize}px`,
      backgroundRepeat: "repeat",
      transform: "rotate(18deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, rest.children));
}
Object.assign(__ds_scope, { NetPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NetPattern.jsx", error: String((e && e.message) || e) }); }

// components/brand/PatternBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});

/* Resolve /assets against the project root by locating the linked styles.css.
   Works whether the page sits at the root or three folders deep. */
const dsBase = () => {
  if (typeof document === "undefined") return "/";
  const l = document.querySelector('link[rel="stylesheet"][href$="styles.css"]') || document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if (l && l.href) return l.href.replace(/styles\.css.*$/, "");
  return "/";
};
const asset = p => dsBase() + p.replace(/^\//, "");
const PATTERNS = {
  documents: "/assets/patterns/pattern-documents-info.png",
  table: "/assets/patterns/pattern-table-medal.png",
  gear: "/assets/patterns/pattern-pads-cards.png"
};
function PatternBand({
  pattern = "table",
  height = 160,
  children,
  plate = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      minHeight: height,
      backgroundImage: `url(${asset(PATTERNS[pattern] || PATTERNS.table)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      ...style
    }
  }, rest), children ? plate ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--space-5) var(--space-6)",
      maxWidth: 640,
      textAlign: "center",
      ...chamfer(12, 4)
    }
  }, children) : children : null);
}
Object.assign(__ds_scope, { PatternBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternBand.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});

// outline / yellow are bordered — see Button.jsx for why that needs two nested chamfer layers
// instead of a clipped inset box-shadow (which leaves the diagonal cut with no stroke).
const BORDERED = {
  outline: {
    border: "var(--border-default)",
    fg: "var(--text-heading)",
    width: 2
  },
  yellow: {
    border: "var(--qvl-yellow)",
    fg: "var(--text-heading)",
    width: 3
  }
};
const FILLED = {
  petrol: {
    background: "var(--qvl-petrol)",
    color: "var(--qvl-white)"
  },
  orange: {
    background: "var(--qvl-orange)",
    color: "var(--text-on-accent)"
  },
  soft: {
    background: "var(--surface-brand-soft)",
    color: "var(--text-heading)"
  },
  pink: {
    background: "var(--qvl-pink)",
    color: "var(--qvl-white)"
  },
  "pink-soft": {
    background: "var(--qvl-pink-pale)",
    color: "var(--qvl-ink)"
  },
  grey: {
    background: "var(--qvl-grey)",
    color: "var(--qvl-ink)"
  },
  highlight: {
    background: "var(--qvl-yellow)",
    color: "var(--qvl-ink)"
  }
};
function Badge({
  tone = "petrol",
  size = "md",
  children,
  style,
  ...rest
}) {
  const s = size === "sm" ? {
    height: 20,
    padding: "0 8px",
    fontSize: "var(--text-caption)",
    ch: 4
  } : {
    height: 26,
    padding: "0 10px",
    fontSize: "var(--text-small)",
    ch: 5
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-1)",
    height: s.height,
    fontFamily: "var(--font-display)",
    fontSize: s.fontSize,
    letterSpacing: "var(--tracking-display)",
    textTransform: "uppercase",
    lineHeight: 1,
    whiteSpace: "nowrap"
  };
  if (BORDERED[tone]) {
    const b = BORDERED[tone];
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        padding: b.width,
        background: b.border,
        ...chamfer(s.ch, 2),
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        height: s.height - b.width * 2,
        padding: s.padding,
        color: b.fg,
        background: "var(--surface-card)",
        ...chamfer(Math.max(s.ch - b.width, 2), 2)
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      padding: s.padding,
      ...chamfer(s.ch, 2),
      ...(FILLED[tone] || FILLED.petrol),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
const SIZES = {
  sm: {
    padding: "0 14px",
    height: 36,
    fontSize: "var(--text-small)",
    ch: 6
  },
  md: {
    padding: "0 20px",
    height: 44,
    fontSize: "var(--text-body)",
    ch: 8
  },
  lg: {
    padding: "0 28px",
    height: 56,
    fontSize: "var(--text-h3)",
    ch: 10
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  href,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const solid = (bg, hov, pr, fg) => ({
    background: disabled ? "var(--button-disabled-bg)" : press ? pr : hover ? hov : bg,
    color: disabled ? "var(--button-disabled-fg)" : fg,
    border: "none"
  });
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick
  };

  // clip-path clips outline and box-shadow, so the focus ring is drawn on this unclipped wrapper (see .qvl-focus in bundle.css).
  const wrap = el => /*#__PURE__*/React.createElement("span", {
    className: "qvl-focus",
    style: fullWidth ? {
      display: "flex",
      width: "100%"
    } : undefined
  }, el);

  // Outlined variant: clip-path can't carry a border along its own diagonal cut (an inset
  // box-shadow/border is drawn parallel to the ORIGINAL rectangle, not the chamfered edge, so the
  // cut corner ends up with no stroke — the "open corner" bug). Fix: two nested chamfers — the outer
  // layer IS the border colour, the inner layer is the fill, so the diagonal itself is border-coloured.
  if (variant === "secondary") {
    const borderColor = disabled ? "var(--border-subtle)" : "var(--button-secondary-border)";
    const fillBg = hover && !disabled ? "var(--surface-brand-soft)" : "var(--button-secondary-fill)";
    const fg = disabled ? "var(--button-disabled-fg)" : "var(--button-secondary-fg)";
    const outerCss = {
      display: "inline-flex",
      alignItems: "stretch",
      verticalAlign: "middle",
      height: s.height,
      boxSizing: "border-box",
      width: fullWidth ? "100%" : "auto",
      background: borderColor,
      padding: 2,
      cursor: disabled ? "not-allowed" : "pointer",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "transform var(--duration-instant) var(--ease-standard)",
      ...chamfer(s.ch, 2),
      ...style
    };
    const innerCss = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      width: "100%",
      height: "100%",
      padding: s.padding,
      boxSizing: "border-box",
      background: fillBg,
      color: fg,
      fontFamily: "var(--font-display)",
      fontSize: s.fontSize,
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...chamfer(Math.max(s.ch - 2, 2), 2)
    };
    const kids = /*#__PURE__*/React.createElement("span", {
      style: innerCss
    }, iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
    if (href && !disabled) return wrap(/*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: outerCss
    }, handlers, rest), kids));
    return wrap(/*#__PURE__*/React.createElement("button", _extends({
      type: type,
      disabled: disabled,
      style: outerCss
    }, handlers, rest), kids));
  }
  let skin;
  if (variant === "primary") skin = solid("var(--button-primary-bg)", "var(--button-primary-bg-hover)", "var(--button-primary-bg-press)", "var(--button-primary-fg)");else if (variant === "accent") skin = solid("var(--button-accent-bg)", "var(--button-accent-bg-hover)", "var(--button-accent-bg-press)", "var(--button-accent-fg)");else if (variant === "pink") skin = solid("var(--button-pink-bg)", "var(--button-pink-bg-hover)", "var(--button-pink-bg-press)", "var(--button-pink-fg)");else skin = {
    background: hover && !disabled ? "var(--surface-brand-soft)" : "var(--qvl-ghost-bg, transparent)",
    color: disabled ? "var(--button-disabled-fg)" : "var(--button-ghost-fg)"
  };
  const css = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    minHeight: s.height,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-display)",
    fontSize: s.fontSize,
    letterSpacing: "var(--tracking-display)",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)",
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    ...chamfer(s.ch, 2),
    ...skin,
    ...style
  };
  const kids = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
  if (href && !disabled) return wrap(/*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: css
  }, handlers, rest), kids));
  return wrap(/*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: css
  }, handlers, rest), kids));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Card({
  tone = "default",
  border = true,
  block = false,
  blockColor = "petrol",
  ch = 12,
  padding = "var(--space-6)",
  header,
  footer,
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: "var(--surface-card)",
      color: "var(--text-body-color)",
      edge: "var(--border-subtle)"
    },
    brand: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      edge: "var(--border-default)"
    },
    soft: {
      background: "var(--surface-brand-soft)",
      color: "var(--text-body-color)",
      edge: "var(--qvl-petrol-mid)"
    },
    accent: {
      background: "var(--surface-accent-soft)",
      color: "var(--text-body-color)",
      edge: "var(--border-accent)"
    },
    pink: {
      background: "var(--surface-accent2-soft)",
      color: "var(--text-body-color)",
      edge: "var(--border-accent-2)"
    },
    // gradient tones: feature card only, one per view. Edge = same gradient so the 2 px rim disappears.
    tiefe: {
      background: "var(--qvl-gradient-tiefe)",
      color: "var(--qvl-white)",
      edge: "var(--qvl-gradient-tiefe)"
    },
    pride: {
      background: "var(--qvl-gradient-pride)",
      color: "var(--qvl-white)",
      edge: "var(--qvl-gradient-pride)"
    },
    sunset: {
      background: "var(--qvl-gradient-sunset)",
      color: "var(--qvl-ink)",
      edge: "var(--qvl-gradient-sunset)"
    },
    flutlicht: {
      background: "var(--qvl-gradient-flutlicht)",
      color: "var(--qvl-ink)",
      edge: "var(--qvl-gradient-flutlicht)"
    }
  };
  const t = tones[tone] || tones.default;
  const inner = {
    background: t.background,
    color: t.color,
    padding,
    ...chamfer(border ? ch - 2 : ch, 4)
  };
  const edge = {
    background: border ? t.edge : "transparent",
    padding: border ? 2 : 0,
    ...chamfer(ch, 4)
  };
  // clip-path clips box-shadow, so the block shadow is a drop-shadow filter on an unclipped wrapper.
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      filter: block ? `drop-shadow(6px 6px 0 var(--qvl-${blockColor}))` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: edge
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, header ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-4)"
    }
  }, header) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--surface-divider)"
    }
  }, footer) : null)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Resolve /assets against the project root by locating the linked styles.css.
   Works whether the page sits at the root or three folders deep. */
const dsBase = () => {
  if (typeof document === "undefined") return "/";
  const l = document.querySelector('link[rel="stylesheet"][href$="styles.css"]') || document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if (l && l.href) return l.href.replace(/styles\.css.*$/, "");
  return "/";
};
const asset = p => dsBase() + p.replace(/^\//, "");
const BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth,
  label,
  style,
  ...rest
}) {
  const url = `${BASE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: color,
      WebkitMask: `url(${url}) center / contain no-repeat`,
      mask: `url(${url}) center / contain no-repeat`,
      ...style
    }
  }, rest));
}

/** Brand volleyball mark as a raster icon (extracted from the CI backgrounds). */
function BallIcon({
  size = 24,
  tone = "petrol",
  style,
  ...rest
}) {
  const src = {
    petrol: "ball-petrol.png",
    "petrol-dark": "ball-petrol-dark.png",
    orange: "ball-orange.png",
    white: "ball-white.png"
  }[tone] || "ball-petrol.png";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: asset("assets/icons/" + src),
    alt: "",
    width: size,
    height: size,
    style: {
      flex: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon, BallIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
const SIZES = {
  sm: {
    box: 36,
    ch: 6
  },
  md: {
    box: 44,
    ch: 8
  },
  lg: {
    box: 52,
    ch: 10
  }
};
function IconButton({
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };

  // clip-path clips outline and box-shadow: the focus ring is drawn on this unclipped wrapper (see .qvl-focus in bundle.css).
  const wrap = el => /*#__PURE__*/React.createElement("span", {
    className: "qvl-focus"
  }, el);

  // See Button.jsx: an outlined chamfer needs two nested layers, not a clipped box-shadow border —
  // a box-shadow ring stays parallel to the rectangle and leaves the diagonal cut unstroked.
  if (variant === "secondary") {
    const borderColor = disabled ? "var(--border-subtle)" : "var(--button-secondary-border)";
    const fillBg = hover && !disabled ? "var(--surface-brand-soft)" : "var(--button-secondary-fill)";
    return wrap(/*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      "aria-label": label,
      title: label,
      disabled: disabled,
      onClick: disabled ? undefined : onClick
    }, handlers, {
      style: {
        display: "inline-flex",
        alignItems: "stretch",
        verticalAlign: "middle",
        boxSizing: "border-box",
        width: s.box,
        height: s.box,
        padding: 2,
        border: "none",
        background: borderColor,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...chamfer(s.ch, 2),
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: fillBg,
        color: disabled ? "var(--button-disabled-fg)" : "var(--button-secondary-fg)",
        transition: "background var(--duration-fast) var(--ease-standard)",
        ...chamfer(Math.max(s.ch - 2, 2), 2)
      }
    }, children)));
  }
  let skin;
  if (variant === "primary") skin = {
    background: hover && !disabled ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
    color: "var(--button-primary-fg)"
  };else if (variant === "pink") skin = {
    background: hover && !disabled ? "var(--button-pink-bg-hover)" : "var(--button-pink-bg)",
    color: "var(--button-pink-fg)"
  };else if (variant === "accent") skin = {
    background: hover && !disabled ? "var(--button-accent-bg-hover)" : "var(--button-accent-bg)",
    color: "var(--button-accent-fg)"
  };else skin = {
    background: hover && !disabled ? "var(--surface-brand-soft)" : "var(--qvl-ghost-bg, transparent)",
    color: "var(--button-ghost-fg)"
  };
  return wrap(/*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick
  }, handlers, {
    style: {
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...chamfer(s.ch, 2),
      ...skin,
      ...style
    }
  }, rest), children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Resolve /assets against the project root by locating the linked styles.css.
   Works whether the page sits at the root or three folders deep. */
const dsBase = () => {
  if (typeof document === "undefined") return "/";
  const l = document.querySelector('link[rel="stylesheet"][href$="styles.css"]') || document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  if (l && l.href) return l.href.replace(/styles\.css.*$/, "");
  return "/";
};
const asset = p => dsBase() + p.replace(/^\//, "");
const FILES = {
  "long-petrol": "/assets/logo/qvl-logo-long-petrol-orange.png",
  "long-orange": "/assets/logo/qvl-logo-long-orange-petrol.png",
  short: "/assets/logo/qvl-logo-short-petrol-orange.png",
  icon: "/assets/logo/qvl-icon-petrol-orange.png"
};
function Logo({
  variant = "long-petrol",
  height = 48,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: asset(FILES[variant] || FILES["long-petrol"]),
    alt: "Queer Volleyball League",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  const remove = onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Entfernen",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      font: "inherit",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null;
  if (selected) {
    return /*#__PURE__*/React.createElement("span", _extends({
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        height: 32,
        padding: "0 10px",
        background: "var(--qvl-petrol)",
        color: "var(--qvl-white)",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-emphasis)",
        fontSize: "var(--text-small)",
        cursor: interactive ? "pointer" : "default",
        ...chamfer(6, 2),
        ...style
      }
    }, rest), children, remove);
  }
  // Unselected has a 1px border — a clipped inset box-shadow leaves the chamfer's diagonal cut
  // unstroked (see Button.jsx), so the border is a second, outer chamfer layer instead.
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      height: 32,
      padding: 1,
      background: "var(--border-subtle)",
      cursor: interactive ? "pointer" : "default",
      ...chamfer(6, 2),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 30,
      padding: "0 9px",
      background: hover && interactive ? "var(--surface-brand-soft)" : "var(--surface-card)",
      color: "var(--text-heading)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-emphasis)",
      fontSize: "var(--text-small)",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...chamfer(5, 2)
    }
  }, children, remove));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ThemeToggle({
  mode,
  onChange,
  style,
  ...rest
}) {
  const T = typeof window !== "undefined" ? window.QVLTheme : null;
  const [own, setOwn] = React.useState(() => T ? T.resolved() : "light");
  React.useEffect(() => {
    const h = e => setOwn(e.detail);
    addEventListener("qvl-theme", h);
    return () => removeEventListener("qvl-theme", h);
  }, []);
  const cur = mode || own,
    next = cur === "dark" ? "light" : "dark";
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, _extends({
    label: next === "dark" ? "Dunkles Design" : "Helles Design",
    variant: "ghost",
    style: style
  }, rest, {
    onClick: () => {
      onChange ? onChange(next) : T && T.set(next);
      setOwn(next);
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: cur === "dark" ? "sun" : "moon",
    size: 20
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
const TONES = {
  info: {
    bg: "var(--status-info-bg)",
    fg: "var(--status-info-fg)",
    edge: "var(--border-default)",
    icon: "info"
  },
  success: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-fg)",
    edge: "var(--border-default)",
    icon: "circle-check"
  },
  warn: {
    bg: "var(--status-warn-bg)",
    fg: "var(--text-heading)",
    edge: "var(--qvl-orange)",
    icon: "triangle-alert"
  },
  danger: {
    bg: "var(--status-danger-bg)",
    fg: "var(--qvl-white)",
    edge: "var(--qvl-orange)",
    icon: "octagon-alert"
  },
  safe: {
    bg: "var(--surface-card)",
    fg: "var(--text-heading)",
    edge: "var(--qvl-yellow)",
    icon: "shield-check"
  }
};
function Alert({
  tone = "info",
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === "danger" ? "alert" : "status",
    style: {
      background: t.edge,
      padding: 3,
      ...chamfer(10, 4),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.fg,
      padding: "var(--space-4)",
      display: "flex",
      gap: "var(--space-3)",
      ...chamfer(8, 4)
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 22,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      lineHeight: 1.05,
      marginBottom: children ? "var(--space-1)" : 0
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      lineHeight: "var(--leading-tight)"
    }
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Schlie\xDFen",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      opacity: "var(--overlay-scrim-alpha)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      filter: "var(--drop-block-orange)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--border-default)",
      padding: 3,
      ...chamfer(14, 4),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      ...chamfer(12, 4)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: 1,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      lineHeight: 1.05
    }
  }, title), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Schlie\xDFen",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-heading)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 22
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5)",
      fontSize: "var(--text-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-2)",
      padding: "0 var(--space-5) var(--space-5)"
    }
  }, footer) : null))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function EmptyState({
  title,
  description,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--border-subtle)",
      padding: 2,
      ...chamfer(12, 4),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-12) var(--space-6)",
      background: "var(--surface-card)",
      ...chamfer(10, 4)
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BallIcon, {
    size: 56,
    tone: "petrol",
    style: {
      margin: "0 auto var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-2)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "var(--text-heading)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto var(--space-5)",
      maxWidth: "44ch",
      color: "var(--text-muted)"
    }
  }, description) : null, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Toast({
  tone = "petrol",
  message,
  action,
  onAction,
  onClose,
  style,
  ...rest
}) {
  const tones = {
    petrol: {
      bg: "var(--qvl-petrol)",
      fg: "var(--qvl-white)"
    },
    orange: {
      bg: "var(--qvl-orange)",
      fg: "var(--text-on-accent)"
    },
    pink: {
      bg: "var(--qvl-pink)",
      fg: "var(--qvl-white)"
    }
  };
  const t = tones[tone] || tones.petrol;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      filter: "var(--drop-block-sm-petrol)",
      maxWidth: 420,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      background: t.bg,
      color: t.fg,
      padding: "12px 14px",
      ...chamfer(8, 2)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "var(--text-small)",
      fontWeight: "var(--weight-emphasis)"
    }
  }, message), action ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      textDecoration: "underline",
      textDecorationThickness: 2,
      textUnderlineOffset: 3,
      padding: 0
    }
  }, action) : null, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Schlie\xDFen",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null));
}
function ToastStack({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "fixed",
      left: "50%",
      bottom: "var(--space-6)",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      zIndex: 60,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)"
  } : {
    bottom: "calc(100% + 8px)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      ...pos,
      background: "var(--qvl-petrol)",
      color: "var(--qvl-white)",
      padding: "6px 10px",
      whiteSpace: "nowrap",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-emphasis)",
      zIndex: 40,
      ...chamfer(5, 2)
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const uid = React.useId();
  const fid = id || uid;
  const [focus, setFocus] = React.useState(false);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(Boolean(defaultChecked));
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: 2,
      background: focus ? "var(--focus-ring)" : on ? "var(--qvl-petrol)" : "var(--border-subtle)",
      padding: focus ? 3 : 2,
      ...chamfer(5, 4),
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      background: on ? "var(--qvl-petrol)" : "var(--surface-card)",
      color: "var(--qvl-white)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1,
      ...chamfer(4, 4)
    }
  }, on ? "✓" : "")), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-emphasis)",
      fontSize: "var(--text-body)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      marginBottom: "var(--space-2)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--qvl-orange)"
    }
  }, " *") : null), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--text-small)",
      fontWeight: "var(--weight-emphasis)",
      color: "var(--qvl-orange-press)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const fid = id || uid;
  const edge = error ? "var(--qvl-orange)" : focus ? "var(--focus-ring)" : "var(--border-subtle)";
  const shell = {
    background: edge,
    padding: error || focus ? 3 : 1,
    ...chamfer(8, 4),
    transition: "background var(--duration-fast) var(--ease-standard)"
  };
  const field = {
    width: "100%",
    border: "none",
    outline: "none",
    background: "var(--surface-card)",
    font: "inherit",
    fontWeight: "var(--weight-body)",
    color: "var(--text-body-color)",
    padding: multiline ? "10px 12px" : "0 12px",
    height: multiline ? "auto" : 42,
    minHeight: multiline ? undefined : 42,
    ...chamfer(7, 4),
    resize: multiline ? "vertical" : undefined
  };
  const el = multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest));
  const control = /*#__PURE__*/React.createElement("div", {
    style: {
      ...shell,
      ...style
    }
  }, el);
  return label ? /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: fid
  }, control) : control;
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const uid = React.useId();
  const fid = id || uid;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: 2,
      background: focus ? "var(--focus-ring)" : checked ? "var(--qvl-petrol)" : "var(--border-subtle)",
      padding: focus ? 3 : 2,
      ...chamfer(5, 4)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      background: "var(--surface-card)",
      ...chamfer(4, 4)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: checked ? "var(--qvl-orange)" : "transparent",
      ...chamfer(3, 4)
    }
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-emphasis)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, description) : null));
}
function RadioGroup({
  legend,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), legend ? /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      padding: 0,
      marginBottom: "var(--space-3)"
    }
  }, legend) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      marginBottom: "var(--space-2)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--qvl-orange)"
    }
  }, " *") : null), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--text-small)",
      fontWeight: "var(--weight-emphasis)",
      color: "var(--qvl-orange-press)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const fid = id || uid;
  const edge = error ? "var(--qvl-orange)" : focus ? "var(--focus-ring)" : "var(--border-subtle)";
  const control = /*#__PURE__*/React.createElement("div", {
    style: {
      background: edge,
      padding: error || focus ? 3 : 1,
      ...chamfer(8, 4),
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: 42,
      border: "none",
      outline: "none",
      background: "var(--surface-card)",
      font: "inherit",
      fontWeight: "var(--weight-body)",
      color: "var(--text-body-color)",
      padding: "0 36px 0 12px",
      appearance: "none",
      ...chamfer(7, 4)
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "7px solid var(--text-heading)",
      pointerEvents: "none"
    }
  }));
  return label ? /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: fid
  }, control) : control;
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Switch({
  label,
  description,
  checked = false,
  disabled,
  onChange,
  id,
  style,
  ...rest
}) {
  const uid = React.useId();
  const fid = id || uid;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-emphasis)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, description) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      background: focus ? "var(--focus-ring)" : "transparent",
      padding: focus ? 3 : 0,
      ...chamfer(6, 2)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 52,
      height: 28,
      padding: 3,
      background: checked ? "var(--qvl-petrol)" : "var(--switch-off)",
      transition: "background var(--duration-base) var(--ease-standard)",
      ...chamfer(5, 2)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 22,
      height: 22,
      background: checked ? "var(--qvl-orange)" : "var(--qvl-white)",
      transform: checked ? "translateX(24px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-standard),background var(--duration-base) var(--ease-standard)",
      ...chamfer(4, 2)
    }
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/league/LevelBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function LevelBadge({
  level,
  region,
  klasse,
  size = "md",
  style,
  ...rest
}) {
  const s = size === "lg" ? {
    box: 44,
    font: "var(--text-h2)"
  } : size === "sm" ? {
    box: 26,
    font: "var(--text-small)"
  } : {
    box: 34,
    font: "var(--text-h3)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "stretch",
      gap: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--qvl-petrol)",
      color: "var(--qvl-white)",
      fontFamily: "var(--font-display)",
      fontSize: s.font,
      lineHeight: 1,
      letterSpacing: 0,
      ...chamfer(6, 2)
    }
  }, level), region || klasse ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 10px",
      height: s.box,
      background: "var(--surface-brand-soft)",
      color: "var(--text-heading)",
      fontFamily: "var(--font-display)",
      fontSize: size === "sm" ? "var(--text-caption)" : "var(--text-small)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      ...chamfer(6, 2)
    }
  }, [region, klasse].filter(Boolean).join(" · ")) : null);
}
Object.assign(__ds_scope, { LevelBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/league/LevelBadge.jsx", error: String((e && e.message) || e) }); }

// components/league/MatchCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function MatchCard({
  date,
  time,
  level,
  region,
  home,
  away,
  homeSets,
  awaySets,
  status = "geplant",
  sets = [],
  onClick,
  style,
  ...rest
}) {
  const played = status === "gespielt";
  const homeWon = played && Number(homeSets) > Number(awaySets);
  const awayWon = played && Number(awaySets) > Number(homeSets);
  const side = (name, won) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: won ? "var(--text-heading)" : "var(--text-body-color)",
      lineHeight: 1.05,
      overflowWrap: "anywhere"
    }
  }, name));
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      background: "var(--border-subtle)",
      padding: 2,
      cursor: onClick ? "pointer" : "default",
      ...chamfer(10, 4),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      ...chamfer(8, 4)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "8px 12px",
      background: "var(--surface-sunken)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-emphasis)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, date), /*#__PURE__*/React.createElement("span", null, time), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, level ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline",
    size: "sm"
  }, [level, region].filter(Boolean).join(" · ")) : null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: played ? "petrol" : status === "läuft" ? "orange" : "grey",
    size: "sm"
  }, status))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-4)"
    }
  }, side(home, homeWon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      lineHeight: 1,
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("span", null, played ? homeSets : "–"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--qvl-orange)"
    }
  }, ":"), /*#__PURE__*/React.createElement("span", null, played ? awaySets : "–")), side(away, awayWon)), sets.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      padding: "0 var(--space-4) var(--space-4)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)",
      fontWeight: "var(--weight-emphasis)"
    }
  }, sets.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: "var(--surface-sunken)",
      padding: "2px 8px",
      clipPath: "polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px)"
    }
  }, s))) : null));
}
Object.assign(__ds_scope, { MatchCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/league/MatchCard.jsx", error: String((e && e.message) || e) }); }

// components/league/PlayerRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function PlayerRow({
  number,
  name,
  pronouns,
  role,
  status,
  action,
  alt = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "10px 12px",
      background: alt ? "var(--table-row-bg-alt)" : "var(--table-row-bg)",
      borderTop: "1px solid var(--table-border)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 34,
      height: 34,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-brand-soft)",
      color: "var(--text-heading)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-body)",
      ...chamfer(5, 2)
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-emphasis)",
      overflowWrap: "anywhere"
    }
  }, name, pronouns ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontWeight: "var(--weight-body)"
    }
  }, " (", pronouns, ")") : null), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, role) : null), status ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status === "gemeldet" ? "petrol" : "grey",
    size: "sm"
  }, status) : null, action);
}
Object.assign(__ds_scope, { PlayerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/league/PlayerRow.jsx", error: String((e && e.message) || e) }); }

// components/league/SetScoreInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function SetScoreInput({
  setNumber = 1,
  home = 0,
  away = 0,
  onChange,
  homeLabel = "Heim",
  awayLabel = "Gast",
  disabled = false,
  style,
  ...rest
}) {
  const bump = (which, d) => {
    if (disabled || !onChange) return;
    const next = {
      home,
      away
    };
    next[which] = Math.max(0, Number(next[which]) + d);
    onChange(next);
  };
  const cell = (which, label, value) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: `${label} minus`,
    size: "md",
    variant: "secondary",
    disabled: disabled,
    onClick: () => bump(which, -1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 72,
      padding: "6px 4px",
      background: "var(--qvl-petrol)",
      color: "var(--qvl-white)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-2)",
      lineHeight: 1,
      ...chamfer(8, 2)
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: `${label} plus`,
    size: "md",
    variant: "primary",
    disabled: disabled,
    onClick: () => bump(which, 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 18
  }))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--border-subtle)",
      padding: 2,
      ...chamfer(12, 4),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--space-4)",
      ...chamfer(10, 4)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--qvl-orange)",
      color: "var(--text-on-accent)",
      padding: "2px 10px",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      ...chamfer(5, 2)
    }
  }, "Satz ", setNumber)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, cell("home", homeLabel, home), cell("away", awayLabel, away))));
}
Object.assign(__ds_scope, { SetScoreInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/league/SetScoreInput.jsx", error: String((e && e.message) || e) }); }

// components/league/StandingsTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
const COLS = [{
  key: "rank",
  label: "#",
  align: "right",
  width: 44
}, {
  key: "team",
  label: "Team",
  align: "left"
}, {
  key: "played",
  label: "SP",
  align: "right",
  width: 48
}, {
  key: "won",
  label: "S",
  align: "right",
  width: 44
}, {
  key: "lost",
  label: "N",
  align: "right",
  width: 44
}, {
  key: "sets",
  label: "SV",
  align: "right",
  width: 64
}, {
  key: "points",
  label: "PKT",
  align: "right",
  width: 60
}];
function StandingsTable({
  rows = [],
  columns = COLS,
  highlightTeam,
  caption,
  promotion = 0,
  relegation = 0,
  minWidth,
  style,
  ...rest
}) {
  const min = minWidth !== undefined ? minWidth : Math.max(240, columns.length * 74);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--border-default)",
      padding: 3,
      minWidth: 0,
      ...chamfer(10, 4),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      overflowX: "auto",
      minWidth: 0,
      ...chamfer(8, 4)
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      minWidth: min,
      borderCollapse: "collapse",
      fontSize: "var(--text-small)"
    }
  }, caption ? /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: "top",
      textAlign: "left",
      padding: "10px 12px",
      background: "var(--qvl-petrol)",
      color: "var(--qvl-white)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-body)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase"
    }
  }, caption) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--table-head-bg)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      textAlign: c.align || "left",
      padding: "10px 10px",
      width: c.width,
      color: "var(--table-head-fg)",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-table)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const me = highlightTeam && r.team === highlightTeam;
    const zone = i < promotion ? "var(--qvl-petrol)" : i >= rows.length - relegation ? "var(--qvl-orange)" : "transparent";
    return /*#__PURE__*/React.createElement("tr", {
      key: r.team + i,
      style: {
        background: me ? "var(--surface-accent-soft)" : i % 2 ? "var(--table-row-bg-alt)" : "var(--table-row-bg)",
        borderLeft: `4px solid ${zone}`
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        textAlign: c.align || "left",
        padding: "10px 10px",
        borderTop: "1px solid var(--table-border)",
        fontWeight: c.key === "points" || c.key === "team" ? "var(--weight-emphasis)" : "var(--weight-body)",
        fontFamily: c.key === "rank" || c.key === "points" ? "var(--font-display)" : "var(--font-body)",
        fontSize: c.key === "rank" || c.key === "points" ? "var(--text-body)" : "inherit",
        color: c.key === "points" ? "var(--text-heading)" : "inherit",
        whiteSpace: "nowrap"
      }
    }, r[c.key])));
  })))));
}
Object.assign(__ds_scope, { StandingsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/league/StandingsTable.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function BottomNav({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      background: "var(--qvl-petrol)",
      borderTop: "3px solid var(--qvl-orange)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: 1,
        border: "none",
        background: on ? "color-mix(in srgb,var(--qvl-petrol) 78%,#000)" : "transparent",
        color: on ? "var(--qvl-orange)" : "var(--qvl-white)",
        minHeight: "var(--tap-min)",
        padding: "8px 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
        transition: "background var(--duration-fast) var(--ease-standard)"
      }
    }, it.icon, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-caption)",
        letterSpacing: "var(--tracking-display)",
        textTransform: "uppercase",
        lineHeight: 1
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--space-2)",
      fontSize: "var(--text-small)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === "string" ? it : it.label;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)"
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--weight-emphasis)",
        color: "var(--text-muted)"
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(typeof it === "string" ? it : it.value);
      },
      style: {
        color: "var(--text-link)"
      }
    }, label), last ? null : /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--qvl-orange)",
        fontWeight: 600
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--qvl-petrol)",
      color: "var(--qvl-white)",
      padding: "var(--space-12) var(--gutter-desktop) var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--qvl-white)",
      padding: "8px 12px",
      display: "inline-block",
      clipPath: "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "long-petrol",
    height: 30
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-small)",
      maxWidth: "32ch",
      opacity: 0.9
    }
  }, note)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--qvl-orange)",
      margin: "0 0 var(--space-3)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--qvl-white)",
      fontSize: "var(--text-small)",
      textDecoration: "none",
      borderBottom: "1px solid color-mix(in srgb,var(--qvl-white) 40%,transparent)"
    }
  }, l))))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function SiteHeader({
  items = [],
  active,
  onNavigate,
  language = "DE",
  languages = ["DE", "EN", "FR", "PL", "CS", "DA", "SV", "PT", "ES", "IT", "NL"],
  onLanguage,
  cta,
  compact = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: "var(--qvl-petrol)",
      color: "var(--qvl-white)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: compact ? "10px var(--gutter-mobile)" : "14px var(--gutter-desktop)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && (items[0].value || items[0]));
    },
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      flex: "none",
      background: "var(--qvl-white)",
      padding: "6px 10px",
      ...chamfer(8, 2)
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "long-petrol",
    height: compact ? 24 : 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: compact ? "none" : "flex",
      gap: "var(--space-1)",
      marginLeft: "auto",
      alignItems: "center"
    }
  }, items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(v);
      },
      style: {
        textDecoration: "none",
        padding: "0 14px",
        height: 40,
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-body)",
        letterSpacing: "var(--tracking-display)",
        textTransform: "uppercase",
        color: on ? "var(--qvl-petrol)" : "var(--qvl-white)",
        background: on ? "var(--qvl-white)" : "transparent",
        borderBottom: on ? "none" : "3px solid transparent",
        ...chamfer(6, 2)
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginLeft: compact ? "auto" : 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--qvl-white)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "globe",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)"
    }
  }, "Sprache"), /*#__PURE__*/React.createElement("select", {
    value: language,
    onChange: e => onLanguage && onLanguage(e.target.value),
    style: {
      background: "transparent",
      color: "var(--qvl-white)",
      border: "none",
      font: "inherit",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      cursor: "pointer",
      padding: "4px 2px"
    }
  }, languages.map(l => /*#__PURE__*/React.createElement("option", {
    key: l,
    value: l,
    style: {
      color: "var(--qvl-ink)"
    }
  }, l)))), cta && !compact ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "sm",
    href: "#"
  }, cta) : null, compact ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Men\xFC",
    onClick: () => setOpen(!open),
    style: {
      color: "var(--qvl-white)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "x" : "menu",
    size: 22
  })) : null)), compact && open ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      borderTop: "2px solid var(--qvl-orange)"
    }
  }, items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: "#",
      onClick: e => {
        e.preventDefault();
        setOpen(false);
        onNavigate && onNavigate(v);
      },
      style: {
        padding: "14px var(--gutter-mobile)",
        color: "var(--qvl-white)",
        textDecoration: "none",
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-display)",
        borderBottom: "1px solid color-mix(in srgb,var(--qvl-white) 22%,transparent)"
      }
    }, l);
  })) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chamfer = (ch = 10, corners = 2) => ({
  clipPath: corners === 4 ? `polygon(${ch}px 0,calc(100% - ${ch}px) 0,100% ${ch}px,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,${ch}px 100%,0 calc(100% - ${ch}px),0 ${ch}px)` : `polygon(${ch}px 0,100% 0,100% calc(100% - ${ch}px),calc(100% - ${ch}px) 100%,0 100%,0 ${ch}px)`
});
function Tabs({
  items = [],
  value,
  onChange,
  scrollable = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-1)",
      borderBottom: "2px solid var(--surface-divider)",
      padding: "4px 4px 0",
      overflowX: scrollable ? "auto" : "visible",
      ...style
    }
  }, rest), items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("span", {
      key: id,
      className: "qvl-focus"
    }, /*#__PURE__*/React.createElement("button", {
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        flex: "none",
        border: "none",
        cursor: "pointer",
        background: active ? "var(--qvl-petrol)" : "var(--qvl-ghost-bg, transparent)",
        color: active ? "var(--qvl-white)" : "var(--text-heading)",
        padding: "0 16px",
        height: 44,
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-body)",
        letterSpacing: "var(--tracking-display)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        transition: "background var(--duration-fast) var(--ease-standard)",
        ...chamfer(8, 2)
      }
    }, label, typeof it !== "string" && it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        opacity: 0.8,
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "var(--text-small)"
      }
    }, it.count) : null));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// theme.js
try { (() => {
/* QVL theme switch. window.QVLTheme.get()/set("light"|"dark"|"system")/toggle(). Persists in localStorage("qvl-theme"); "system" follows the OS live. Include in <head> before paint. */
(function () {
  var K = "qvl-theme",
    r = document.documentElement,
    mq = matchMedia("(prefers-color-scheme:dark)");
  var T = {
    get: function () {
      try {
        return localStorage.getItem(K) || "system";
      } catch (e) {
        return "system";
      }
    },
    resolved: function () {
      var m = T.get();
      return m === "system" ? mq.matches ? "dark" : "light" : m;
    },
    apply: function () {
      r.setAttribute("data-theme", T.resolved());
      dispatchEvent(new CustomEvent("qvl-theme", {
        detail: T.resolved()
      }));
    },
    set: function (m) {
      try {
        m === "system" ? localStorage.removeItem(K) : localStorage.setItem(K, m);
      } catch (e) {}
      T.apply();
    },
    toggle: function () {
      T.set(T.resolved() === "dark" ? "light" : "dark");
    }
  };
  mq.addEventListener("change", function () {
    if (T.get() === "system") T.apply();
  });
  T.apply();
  window.QVLTheme = T;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "theme.js", error: String((e && e.message) || e) }); }

// ui_kits/manager/Dashboard.jsx
try { (() => {
(function () {
  const {
    Card,
    Badge,
    Button,
    MatchCard,
    LevelBadge,
    Alert,
    StandingsTable,
    Icon
  } = window.QueerLeagueDesignSystem_ae47b3;
  function Dashboard({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr)",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-eyebrow)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        opacity: .85
      }
    }, "Mein Team"), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: "var(--qvl-white)",
        margin: "var(--space-1) 0 var(--space-3)",
        fontSize: "var(--text-h1)"
      }
    }, "Berlin Bumpers"), /*#__PURE__*/React.createElement(LevelBadge, {
      level: "B",
      region: "Nord"
    })), /*#__PURE__*/React.createElement(Badge, {
      tone: "orange"
    }, "Platz 2"))), /*#__PURE__*/React.createElement(Alert, {
      tone: "warn",
      title: "Spielbericht offen"
    }, "F\xFCr das Spiel vom 31.10. fehlt noch die Best\xE4tigung."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0
      }
    }, "N\xE4chstes Spiel"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go("spiele")
    }, "Alle")), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "14:00",
      level: "B",
      region: "Nord",
      home: "Berlin Bumpers",
      away: "Hamburg Hurricanes",
      status: "geplant"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-display-2)",
        color: "var(--qvl-petrol)",
        lineHeight: 1
      }
    }, "11"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, "Spieler*innen gemeldet")), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-display-2)",
        color: "var(--qvl-petrol)",
        lineHeight: 1
      }
    }, "24"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, "Punkte"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Tabelle"), /*#__PURE__*/React.createElement(StandingsTable, {
      columns: [{
        key: "rank",
        label: "#",
        align: "right",
        width: 34
      }, {
        key: "team",
        label: "Team"
      }, {
        key: "points",
        label: "PKT",
        align: "right",
        width: 54
      }],
      highlightTeam: "Berlin Bumpers",
      rows: [{
        rank: 1,
        team: "Hamburg Hurricanes",
        points: 27
      }, {
        rank: 2,
        team: "Berlin Bumpers",
        points: 24
      }, {
        rank: 3,
        team: "Bremen Blockers",
        points: 15
      }, {
        rank: 4,
        team: "Kiel Kraken",
        points: 9
      }]
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "clipboard-list",
        size: 20
      }),
      onClick: () => go("bericht")
    }, "Spielbericht starten"));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/manager/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/manager/Login.jsx
try { (() => {
(function () {
  const {
    Input,
    Button,
    Card,
    Logo,
    Alert,
    Icon
  } = window.QueerLeagueDesignSystem_ae47b3;
  function Login({
    onLogin
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "var(--space-6)",
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "long-petrol",
      height: 40,
      style: {
        margin: "0 auto"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-3)",
        fontFamily: "var(--font-display)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        fontSize: "var(--text-eyebrow)",
        color: "var(--text-muted)"
      }
    }, "Manager")), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 var(--space-4)"
      }
    }, "Anmelden"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "E-Mail",
      defaultValue: "alex@bumpers.berlin"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Passwort",
      type: "password",
      defaultValue: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      onClick: onLogin
    }, "Einloggen"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true
    }, "Passwort vergessen?"))), /*#__PURE__*/React.createElement(Alert, {
      tone: "safe",
      title: "Safe Space",
      style: {
        marginTop: "var(--space-5)"
      }
    }, "Hallen- und Personendaten sind nur f\xFCr dein Team sichtbar."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-5)",
        textAlign: "center",
        display: "flex",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        color: "var(--text-muted)",
        fontSize: "var(--text-small)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "globe",
      size: 16
    }), " Deutsch \xB7 English \xB7 Polski \xB7 +8"));
  }
  Object.assign(window, {
    Login
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/manager/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/manager/Roster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Card,
    PlayerRow,
    Button,
    IconButton,
    Icon,
    Input,
    Dialog,
    Badge,
    Alert,
    Tabs
  } = window.QueerLeagueDesignSystem_ae47b3;
  function Roster() {
    const [open, setOpen] = React.useState(false);
    const [tab, setTab] = React.useState("kader");
    const [players, setPlayers] = React.useState([{
      number: 7,
      name: "Alex Winter",
      pronouns: "they/them",
      role: "Zuspiel",
      status: "gemeldet"
    }, {
      number: 12,
      name: "Mira Kowalski",
      pronouns: "sie/ihr",
      role: "Außen",
      status: "gemeldet"
    }, {
      number: 4,
      name: "Jon Sørensen",
      role: "Mitte",
      status: "gemeldet"
    }, {
      number: 9,
      name: "Tessa Ferreira",
      pronouns: "sie/ihr",
      role: "Diagonal",
      status: "offen"
    }, {
      number: 2,
      name: "Kim Novák",
      pronouns: "dey/deren",
      role: "Libero",
      status: "gemeldet"
    }]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr)",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0
      }
    }, "Kader"), /*#__PURE__*/React.createElement(Badge, {
      tone: "soft"
    }, players.length, " Personen")), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: "kader",
        label: "Kader"
      }, {
        value: "anfragen",
        label: "Anfragen",
        count: 2
      }]
    }), tab === "kader" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
      padding: "0"
    }, players.map((p, i) => /*#__PURE__*/React.createElement(PlayerRow, _extends({
      key: p.number
    }, p, {
      alt: i % 2 === 1,
      action: /*#__PURE__*/React.createElement(IconButton, {
        label: "Bearbeiten",
        size: "sm"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "pencil",
        size: 16
      }))
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "user-plus",
        size: 20
      }),
      onClick: () => setOpen(true)
    }, "Spieler*in hinzuf\xFCgen"), /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Pronomen"
    }, "Pronomen sind freiwillig und werden nur angezeigt, wenn sie angegeben wurden.")) : /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Zwei Personen m\xF6chten dem Team beitreten."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm"
    }, "Annehmen"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Ablehnen"))), /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      title: "Spieler*in hinzuf\xFCgen",
      onClose: () => setOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setOpen(false)
      }, "Abbrechen"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          setPlayers([...players, {
            number: 15,
            name: "Noa Berg",
            pronouns: "er/ihm",
            role: "Außen",
            status: "offen"
          }]);
          setOpen(false);
        }
      }, "Hinzuf\xFCgen"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Vor- und Nachname"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Pronomen",
      placeholder: "optional",
      hint: "Wird im Kader angezeigt."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Trikotnummer",
      type: "number",
      placeholder: "15"
    }))));
  }
  Object.assign(window, {
    Roster
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/manager/Roster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/manager/Spielbericht.jsx
try { (() => {
(function () {
  const {
    SetScoreInput,
    Button,
    Card,
    Badge,
    Dialog,
    Toast,
    ToastStack,
    LevelBadge,
    Alert
  } = window.QueerLeagueDesignSystem_ae47b3;
  function Spielbericht() {
    const [sets, setSets] = React.useState([{
      home: 25,
      away: 21
    }, {
      home: 23,
      away: 25
    }, {
      home: 0,
      away: 0
    }]);
    const [confirm, setConfirm] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const won = sets.filter(s => s.home > s.away && s.home >= 15).length;
    const lost = sets.filter(s => s.away > s.home && s.away >= 15).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr)",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "soft",
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-h3)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-display)",
        color: "var(--qvl-petrol)"
      }
    }, "Bumpers vs. Hurricanes"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, "Sa 14.11. \xB7 14:00")), /*#__PURE__*/React.createElement(LevelBadge, {
      level: "B",
      region: "Nord",
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-display-2)",
        lineHeight: 1,
        color: "var(--qvl-petrol)"
      }
    }, won, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--qvl-orange)"
      }
    }, ":"), lost), /*#__PURE__*/React.createElement(Badge, {
      tone: "orange"
    }, "l\xE4uft"))), sets.map((s, i) => /*#__PURE__*/React.createElement(SetScoreInput, {
      key: i,
      setNumber: i + 1,
      home: s.home,
      away: s.away,
      homeLabel: "Bumpers",
      awayLabel: "Hurricanes",
      onChange: n => setSets(sets.map((x, j) => j === i ? n : x))
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => setSets([...sets, {
        home: 0,
        away: 0
      }])
    }, "+ Satz"), /*#__PURE__*/React.createElement(Alert, {
      tone: "safe",
      title: "Safe Space"
    }, "Der Spielort wird nicht mitgespeichert."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      onClick: () => setConfirm(true)
    }, "Ergebnis einreichen"), /*#__PURE__*/React.createElement(Dialog, {
      open: confirm,
      title: "Ergebnis best\xE4tigen",
      onClose: () => setConfirm(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setConfirm(false)
      }, "Zur\xFCck"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          setConfirm(false);
          setSaved(true);
        }
      }, "Best\xE4tigen"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--space-3)"
      }
    }, "Beide Teams best\xE4tigen: ", sets.map(s => s.home + ":" + s.away).join(" / ")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, "Danach ist das Ergebnis \xF6ffentlich sichtbar.")), saved ? /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
      message: "Ergebnis gespeichert",
      action: "R\xFCckg\xE4ngig",
      onAction: () => setSaved(false),
      onClose: () => setSaved(false)
    })) : null);
  }
  Object.assign(window, {
    Spielbericht
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/manager/Spielbericht.jsx", error: String((e && e.message) || e) }); }

// ui_kits/spielbetrieb/FixtureAdmin.jsx
try { (() => {
(function () {
  const {
    Card,
    Tabs,
    Tag,
    Select,
    Button,
    Badge,
    MatchCard,
    StandingsTable,
    Breadcrumb,
    Alert,
    IconButton,
    Icon,
    Tooltip,
    EmptyState
  } = window.QueerLeagueDesignSystem_ae47b3;
  function FixtureAdmin() {
    const [tab, setTab] = React.useState("plan");
    const [region, setRegion] = React.useState("Nord");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-6) var(--gutter-desktop)"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        value: "tool",
        label: "Spielbetrieb"
      }, {
        value: "b",
        label: "Level B"
      }, `Gruppe ${region}`]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: "var(--space-4)",
        margin: "var(--space-4) 0 var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: "var(--text-display-2)"
      }
    }, "Spielbetrieb"), /*#__PURE__*/React.createElement(Badge, {
      tone: "soft"
    }, "Saison 2026/27"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 18
      })
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar-plus",
        size: 18
      })
    }, "Spieltag anlegen"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-3)",
        alignItems: "flex-end",
        marginBottom: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Level",
      options: ["A", "B", "C", "D"],
      style: {
        minWidth: 110
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-eyebrow)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-heading)",
        marginBottom: "var(--space-2)"
      }
    }, "Region"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        flexWrap: "wrap"
      }
    }, ["Nord", "Ost", "Süd", "West", "Mitte"].map(r => /*#__PURE__*/React.createElement(Tag, {
      key: r,
      selected: r === region,
      onClick: () => setRegion(r)
    }, r)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Tooltip, {
      label: "Spiele ohne Ergebnis"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "orange"
    }, "3 offen")))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: "var(--space-5)"
      },
      items: [{
        value: "plan",
        label: "Spielplan",
        count: 20
      }, {
        value: "erg",
        label: "Ergebnisse",
        count: 12
      }, {
        value: "tab",
        label: "Tabelle"
      }, {
        value: "berichte",
        label: "Spielberichte",
        count: 3
      }]
    }), tab === "plan" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "14:00",
      level: "B",
      region: region,
      home: "Berlin Bumpers",
      away: "Hamburg Hurricanes",
      status: "geplant"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "16:30",
      level: "B",
      region: region,
      home: "Bremen Blockers",
      away: "Kiel Kraken",
      status: "l\xE4uft"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "So 29.11.",
      time: "11:00",
      level: "B",
      region: region,
      home: "Praha Pride Spikers",
      away: "Berlin Bumpers",
      status: "geplant"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 31.10.",
      time: "14:00",
      level: "B",
      region: region,
      home: "Berlin Bumpers",
      away: "Kiel Kraken",
      homeSets: 3,
      awaySets: 1,
      status: "gespielt",
      sets: ["25:21", "23:25", "25:19", "25:17"]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)",
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "safe",
      title: "Safe Space"
    }, "Hallen werden intern zugeordnet, aber nie ver\xF6ffentlicht."), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 var(--space-3)"
      }
    }, "Spieltag 6"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-2)",
        fontSize: "var(--text-small)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Spiele"), /*#__PURE__*/React.createElement("strong", null, "4")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Best\xE4tigt"), /*#__PURE__*/React.createElement("strong", null, "1")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Offen"), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--qvl-orange)"
      }
    }, "3"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary"
    }, "Erinnern"), /*#__PURE__*/React.createElement(IconButton, {
      label: "Spieltag bearbeiten",
      size: "sm",
      variant: "secondary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 16
    })))))) : null, tab === "tab" ? /*#__PURE__*/React.createElement(StandingsTable, {
      caption: `Level B · Gruppe ${region}`,
      promotion: 1,
      relegation: 1,
      rows: [{
        rank: 1,
        team: "Hamburg Hurricanes",
        played: 10,
        won: 9,
        lost: 1,
        sets: "28:7",
        points: 27
      }, {
        rank: 2,
        team: "Berlin Bumpers",
        played: 10,
        won: 8,
        lost: 2,
        sets: "26:11",
        points: 24
      }, {
        rank: 3,
        team: "Bremen Blockers",
        played: 10,
        won: 5,
        lost: 5,
        sets: "18:18",
        points: 15
      }, {
        rank: 4,
        team: "Kiel Kraken",
        played: 10,
        won: 3,
        lost: 7,
        sets: "12:23",
        points: 9
      }, {
        rank: 5,
        team: "Praha Pride Spikers",
        played: 10,
        won: 1,
        lost: 9,
        sets: "6:29",
        points: 3
      }]
    }) : null, tab === "erg" ? /*#__PURE__*/React.createElement(StandingsTable, {
      caption: "Ergebnisse \xB7 Spieltag 5",
      columns: [{
        key: "date",
        label: "Datum",
        width: 110
      }, {
        key: "home",
        label: "Heim"
      }, {
        key: "away",
        label: "Gast"
      }, {
        key: "result",
        label: "Sätze",
        align: "right",
        width: 80
      }, {
        key: "status",
        label: "Status",
        align: "right",
        width: 120
      }],
      rows: [{
        date: "Sa 31.10.",
        home: "Berlin Bumpers",
        away: "Kiel Kraken",
        result: "3:1",
        status: "bestätigt"
      }, {
        date: "Sa 31.10.",
        home: "Hamburg Hurricanes",
        away: "Bremen Blockers",
        result: "3:0",
        status: "bestätigt"
      }, {
        date: "So 18.10.",
        home: "Praha Pride Spikers",
        away: "Hamburg Hurricanes",
        result: "0:3",
        status: "offen"
      }]
    }) : null, tab === "berichte" ? /*#__PURE__*/React.createElement(EmptyState, {
      title: "Drei Berichte warten",
      description: "Spielberichte werden erst \xF6ffentlich, wenn beide Teams best\xE4tigt haben.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "accent"
      }, "Offene Berichte pr\xFCfen")
    }) : null);
  }
  Object.assign(window, {
    FixtureAdmin
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/spielbetrieb/FixtureAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/spielbetrieb/ReportSheet.jsx
try { (() => {
(function () {
  const {
    Card,
    SetScoreInput,
    PlayerRow,
    Button,
    Badge,
    Alert,
    Checkbox,
    Dialog,
    Toast,
    ToastStack,
    LevelBadge,
    Tabs,
    Icon
  } = window.QueerLeagueDesignSystem_ae47b3;
  function ReportSheet() {
    const [sets, setSets] = React.useState([{
      home: 25,
      away: 21
    }, {
      home: 23,
      away: 25
    }, {
      home: 15,
      away: 12
    }]);
    const [tab, setTab] = React.useState("saetze");
    const [confirm, setConfirm] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const won = sets.filter(s => s.home > s.away).length,
      lost = sets.filter(s => s.away > s.home).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 520,
        margin: "0 auto",
        padding: "var(--space-4)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr)",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-eyebrow)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        opacity: .85
      }
    }, "Spielberichtsbogen"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-h2)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-display)",
        lineHeight: 1.05
      }
    }, "Bumpers \xB7 Hurricanes")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-display-2)",
        lineHeight: 1
      }
    }, won, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--qvl-orange)"
      }
    }, ":"), lost)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(LevelBadge, {
      level: "B",
      region: "Nord",
      size: "sm"
    }))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: "saetze",
        label: "Sätze"
      }, {
        value: "kader",
        label: "Aufstellung"
      }, {
        value: "schiri",
        label: "Schiri"
      }]
    }), tab === "saetze" ? /*#__PURE__*/React.createElement(React.Fragment, null, sets.map((s, i) => /*#__PURE__*/React.createElement(SetScoreInput, {
      key: i,
      setNumber: i + 1,
      home: s.home,
      away: s.away,
      homeLabel: "Bumpers",
      awayLabel: "Hurricanes",
      onChange: n => setSets(sets.map((x, j) => j === i ? n : x))
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => setSets([...sets, {
        home: 0,
        away: 0
      }])
    }, "+ Satz")) : null, tab === "kader" ? /*#__PURE__*/React.createElement(Card, {
      padding: "0"
    }, /*#__PURE__*/React.createElement(PlayerRow, {
      number: 7,
      name: "Alex Winter",
      pronouns: "they/them",
      role: "Zuspiel",
      status: "auf dem Feld"
    }), /*#__PURE__*/React.createElement(PlayerRow, {
      alt: true,
      number: 12,
      name: "Mira Kowalski",
      pronouns: "sie/ihr",
      role: "Au\xDFen",
      status: "auf dem Feld"
    }), /*#__PURE__*/React.createElement(PlayerRow, {
      number: 4,
      name: "Jon S\xF8rensen",
      role: "Mitte",
      status: "auf dem Feld"
    }), /*#__PURE__*/React.createElement(PlayerRow, {
      alt: true,
      number: 2,
      name: "Kim Nov\xE1k",
      pronouns: "dey/deren",
      role: "Libero",
      status: "Bank"
    })) : null, tab === "schiri" ? /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-5)",
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Schiedsrichter*in gestellt",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Netzh\xF6he gepr\xFCft",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Besondere Vorf\xE4lle",
      description: "Nur intern sichtbar."
    })) : null, /*#__PURE__*/React.createElement(Alert, {
      tone: "safe",
      title: "Safe Space"
    }, "Kein Spielort, keine Adressen \u2014 nur Ergebnis und Aufstellung."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 20
      }),
      onClick: () => setConfirm(true)
    }, "Bericht einreichen"), /*#__PURE__*/React.createElement(Dialog, {
      open: confirm,
      title: "Bericht einreichen",
      onClose: () => setConfirm(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setConfirm(false)
      }, "Zur\xFCck"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          setConfirm(false);
          setDone(true);
        }
      }, "Einreichen"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--space-3)"
      }
    }, "Ergebnis ", won, ":", lost, " \u2014 ", sets.map(s => s.home + ":" + s.away).join(" / ")), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Beide Teams haben das Ergebnis gesehen",
      defaultChecked: true
    })), done ? /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
      message: "Bericht eingereicht \u2014 wartet auf Gegenbest\xE4tigung",
      onClose: () => setDone(false)
    })) : null);
  }
  Object.assign(window, {
    ReportSheet
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/spielbetrieb/ReportSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
(function () {
  const {
    NetHero,
    PatternBand,
    Card,
    Button,
    Badge,
    LevelBadge,
    MatchCard,
    StandingsTable,
    Alert,
    Icon,
    BallIcon
  } = window.QueerLeagueDesignSystem_ae47b3;
  function HomeScreen({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NetHero, {
      background: "grey-petrol",
      eyebrow: "Saison 2026/27",
      title: "Volleyball, wie es sein soll",
      lead: "Rund 1.000 Mitglieder, Levels A\u2013D, f\xFCnf Regionen \u2014 und Platz f\xFCr dich. Seit 1992.",
      minHeight: 420,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        size: "lg",
        onClick: () => go("mitmachen")
      }, "Team anmelden"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "lg",
        onClick: () => go("liga")
      }, "Zur Liga"))
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-16) var(--gutter-desktop)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: "var(--space-4)",
        marginBottom: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: "var(--text-display-2)",
        lineHeight: 1
      }
    }, "Die Liga"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginBottom: 6,
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, "Vier Levels, f\xFCnf Regionen, zwei Spielklassen")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "var(--space-4)"
      }
    }, [["A", "Ambitioniert", "Wer schon lange spielt und es wissen will."], ["B", "Solide", "Das Herz der Liga — die meisten Teams spielen hier."], ["C", "Entspannt", "Spielpraxis ohne Leistungsdruck."], ["D", "Einstieg", "Neu dabei? Hier fängt alles an."]].map(([l, t, d]) => /*#__PURE__*/React.createElement(Card, {
      key: l,
      tone: "default"
    }, /*#__PURE__*/React.createElement(LevelBadge, {
      level: l,
      size: "lg"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "var(--space-4) 0 var(--space-2)"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "var(--space-4)",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "soft"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 var(--space-2)"
      }
    }, "FLINTA*-Spielklasse"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-small)"
      }
    }, "Eigene Runde, eigener Spielplan, gleiche Liga.")), /*#__PURE__*/React.createElement(Card, {
      tone: "soft"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 var(--space-2)"
      }
    }, "Senior*innen"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-small)"
      }
    }, "Ab 40 \u2014 mit Turnierwochenenden.")), /*#__PURE__*/React.createElement(Card, {
      tone: "brand"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 var(--space-2)",
        color: "var(--qvl-white)"
      }
    }, "F\xFCnf Regionen"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-small)"
      }
    }, "Nord \xB7 Ost \xB7 S\xFCd \xB7 West \xB7 Mitte")))), /*#__PURE__*/React.createElement(PatternBand, {
      pattern: "table",
      plate: true,
      height: 220
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 var(--space-2)",
        fontSize: "var(--text-display-2)"
      }
    }, "Ergebnisse & Tabellen"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--space-4)",
        color: "var(--text-muted)"
      }
    }, "Jedes Spiel, jeder Satz, jede Saison seit 1992."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => go("liga")
    }, "Zu den Tabellen")), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-16) var(--gutter-desktop)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-h1)"
      }
    }, "N\xE4chste Spiele"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "14:00",
      level: "B",
      region: "Nord",
      home: "Berlin Bumpers",
      away: "Hamburg Hurricanes",
      status: "geplant"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "16:30",
      level: "C",
      region: "Nord",
      home: "Bremen Blockers",
      away: "Kiel Kraken",
      status: "geplant"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "So 15.11.",
      time: "11:00",
      level: "B",
      region: "West",
      home: "K\xF6ln Kicks",
      away: "Aachen Aces",
      status: "geplant"
    })), /*#__PURE__*/React.createElement(Alert, {
      tone: "safe",
      title: "Safe Space",
      style: {
        marginTop: "var(--space-4)"
      }
    }, "Hallenadressen ver\xF6ffentlichen wir nicht. Angemeldete Teams finden sie im Queer League Manager.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-h1)"
      }
    }, "Tabelle Level B \xB7 Nord"), /*#__PURE__*/React.createElement(StandingsTable, {
      promotion: 1,
      relegation: 1,
      rows: [{
        rank: 1,
        team: "Hamburg Hurricanes",
        played: 10,
        won: 9,
        lost: 1,
        sets: "28:7",
        points: 27
      }, {
        rank: 2,
        team: "Berlin Bumpers",
        played: 10,
        won: 8,
        lost: 2,
        sets: "26:11",
        points: 24
      }, {
        rank: 3,
        team: "Bremen Blockers",
        played: 10,
        won: 5,
        lost: 5,
        sets: "18:18",
        points: 15
      }, {
        rank: 4,
        team: "Kiel Kraken",
        played: 10,
        won: 3,
        lost: 7,
        sets: "12:23",
        points: 9
      }, {
        rank: 5,
        team: "Praha Pride Spikers",
        played: 10,
        won: 1,
        lost: 9,
        sets: "6:29",
        points: 3
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--qvl-petrol)",
        color: "var(--qvl-white)",
        padding: "var(--space-16) var(--gutter-desktop)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-narrow)",
        margin: "0 auto",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(BallIcon, {
      tone: "white",
      size: 64,
      style: {
        margin: "0 auto var(--space-5)"
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: "var(--qvl-white)",
        fontSize: "var(--text-display-2)",
        margin: "0 0 var(--space-3)"
      }
    }, "Wir spielen dir den Ball zu"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--space-6)",
        fontSize: "var(--text-lead)"
      }
    }, "Egal ob du seit 20 Jahren spielst oder das erste Mal in einer Halle stehst \u2014 melde dich, wir finden ein Team f\xFCr dich."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "user-plus",
        size: 22
      }),
      onClick: () => go("mitmachen")
    }, "Mitmachen"))));
  }
  Object.assign(window, {
    HomeScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LigaScreen.jsx
try { (() => {
(function () {
  const {
    Tabs,
    Tag,
    Card,
    Breadcrumb,
    StandingsTable,
    MatchCard,
    Select,
    Alert,
    Badge,
    Tooltip
  } = window.QueerLeagueDesignSystem_ae47b3;
  function LigaScreen() {
    const [tab, setTab] = React.useState("tabelle");
    const [region, setRegion] = React.useState("Nord");
    const [level, setLevel] = React.useState("B");
    const regions = ["Nord", "Ost", "Süd", "West", "Mitte"];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--gutter-desktop) var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        value: "home",
        label: "Start"
      }, {
        value: "liga",
        label: "Liga"
      }, `Level ${level} · ${region}`]
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-display-2)",
        margin: "var(--space-4) 0 var(--space-5)"
      }
    }, "Liga ", level, " \xB7 Gruppe ", region), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-3)",
        alignItems: "flex-end",
        marginBottom: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Level",
      value: level,
      onChange: e => setLevel(e.target.value),
      options: ["A", "B", "C", "D"],
      style: {
        minWidth: 120
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-eyebrow)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-heading)",
        marginBottom: "var(--space-2)"
      }
    }, "Region"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-2)"
      }
    }, regions.map(r => /*#__PURE__*/React.createElement(Tag, {
      key: r,
      selected: r === region,
      onClick: () => setRegion(r)
    }, r)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: "var(--space-2)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "soft"
    }, "Saison 2026/27"), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Satzverh\xE4ltnis"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "outline"
    }, "SV")))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: "var(--space-6)"
      },
      items: [{
        value: "plan",
        label: "Spielplan",
        count: 20
      }, {
        value: "tabelle",
        label: "Tabelle",
        count: 5
      }, {
        value: "erg",
        label: "Ergebnisse",
        count: 12
      }]
    }), tab === "tabelle" ? /*#__PURE__*/React.createElement(StandingsTable, {
      caption: `Level ${level} · Gruppe ${region}`,
      promotion: 1,
      relegation: 1,
      rows: [{
        rank: 1,
        team: "Hamburg Hurricanes",
        played: 10,
        won: 9,
        lost: 1,
        sets: "28:7",
        points: 27
      }, {
        rank: 2,
        team: "Berlin Bumpers",
        played: 10,
        won: 8,
        lost: 2,
        sets: "26:11",
        points: 24
      }, {
        rank: 3,
        team: "Bremen Blockers",
        played: 10,
        won: 5,
        lost: 5,
        sets: "18:18",
        points: 15
      }, {
        rank: 4,
        team: "Kiel Kraken",
        played: 10,
        won: 3,
        lost: 7,
        sets: "12:23",
        points: 9
      }, {
        rank: 5,
        team: "Praha Pride Spikers",
        played: 10,
        won: 1,
        lost: 9,
        sets: "6:29",
        points: 3
      }]
    }) : null, tab === "plan" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "safe",
      title: "Safe Space"
    }, "Spielorte sind nur im Manager sichtbar \u2014 f\xFCr angemeldete Teams."), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "14:00",
      level: level,
      region: region,
      home: "Berlin Bumpers",
      away: "Hamburg Hurricanes",
      status: "geplant"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 14.11.",
      time: "16:30",
      level: level,
      region: region,
      home: "Bremen Blockers",
      away: "Kiel Kraken",
      status: "geplant"
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "So 29.11.",
      time: "11:00",
      level: level,
      region: region,
      home: "Praha Pride Spikers",
      away: "Berlin Bumpers",
      status: "geplant"
    })) : null, tab === "erg" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 31.10.",
      time: "14:00",
      level: level,
      region: region,
      home: "Berlin Bumpers",
      away: "Kiel Kraken",
      homeSets: 3,
      awaySets: 1,
      status: "gespielt",
      sets: ["25:21", "23:25", "25:19", "25:17"]
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "Sa 31.10.",
      time: "16:30",
      level: level,
      region: region,
      home: "Hamburg Hurricanes",
      away: "Bremen Blockers",
      homeSets: 3,
      awaySets: 0,
      status: "gespielt",
      sets: ["25:18", "25:22", "25:14"]
    }), /*#__PURE__*/React.createElement(MatchCard, {
      date: "So 18.10.",
      time: "11:00",
      level: level,
      region: region,
      home: "Praha Pride Spikers",
      away: "Hamburg Hurricanes",
      homeSets: 0,
      awaySets: 3,
      status: "gespielt",
      sets: ["19:25", "17:25", "21:25"]
    })) : null);
  }
  Object.assign(window, {
    LigaScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LigaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MitmachenScreen.jsx
try { (() => {
(function () {
  const {
    Card,
    Input,
    Select,
    Checkbox,
    RadioGroup,
    Radio,
    Button,
    Alert,
    PatternBand,
    Badge
  } = window.QueerLeagueDesignSystem_ae47b3;
  function MitmachenScreen() {
    const [klasse, setKlasse] = React.useState("offen");
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PatternBand, {
      pattern: "documents",
      plate: true,
      height: 220
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "0 0 var(--space-2)",
        fontSize: "var(--text-display-2)"
      }
    }, "Mitmachen"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-muted)"
      }
    }, "Team melden, Spieler*innen registrieren, Saison starten.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-narrow)",
        margin: "0 auto",
        padding: "var(--space-12) var(--gutter-desktop)"
      }
    }, sent ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Danke!",
      style: {
        marginBottom: "var(--space-6)"
      }
    }, "Wir melden uns innerhalb einer Woche bei dir.") : null, /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        marginBottom: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "orange"
    }, "Anmeldung offen"), /*#__PURE__*/React.createElement(Badge, {
      tone: "soft"
    }, "Meldeschluss 30. Juni")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Teamname",
      required: true,
      placeholder: "z. B. Berlin Bumpers",
      hint: "So erscheint das Team im Spielplan."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Gew\xFCnschtes Level",
      required: true,
      options: ["A", "B", "C", "D"],
      placeholder: "Bitte w\xE4hlen"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Region",
      required: true,
      options: ["Nord", "Ost", "Süd", "West", "Mitte"],
      placeholder: "Bitte w\xE4hlen"
    })), /*#__PURE__*/React.createElement(RadioGroup, {
      legend: "Spielklasse"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "kl",
      label: "Offene Liga",
      checked: klasse === "offen",
      onChange: () => setKlasse("offen")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "kl",
      label: "FLINTA*",
      description: "Eigene Runde mit eigenem Spielplan.",
      checked: klasse === "flinta",
      onChange: () => setKlasse("flinta")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "kl",
      label: "Senior*innen",
      description: "Ab 40.",
      checked: klasse === "senior",
      onChange: () => setKlasse("senior")
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Kontakt-E-Mail",
      required: true,
      placeholder: "team@example.org"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Erz\xE4hl uns kurz von euch",
      multiline: true,
      rows: 3,
      placeholder: "Wie lange spielt ihr schon zusammen?"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Wir haben die Safe-Space-Regeln gelesen",
      description: "Keine Weitergabe von Hallen- und Personendaten."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => setSent(true)
    }, "Anmeldung senden"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg"
    }, "Erst Fragen stellen"))))));
  }
  Object.assign(window, {
    MitmachenScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MitmachenScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WallOfFameScreen.jsx
try { (() => {
(function () {
  const {
    Card,
    Badge,
    StandingsTable,
    PatternBand,
    LevelBadge,
    Select,
    BallIcon
  } = window.QueerLeagueDesignSystem_ae47b3;
  function WallOfFameScreen() {
    const [season, setSeason] = React.useState("2025/26");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PatternBand, {
      pattern: "table",
      plate: true,
      height: 200
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "0 0 var(--space-2)",
        fontSize: "var(--text-display-2)"
      }
    }, "Wall of Fame"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-muted)"
      }
    }, "Meister*innen seit 1992.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-12) var(--gutter-desktop)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-4)",
        alignItems: "flex-end",
        marginBottom: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Saison",
      value: season,
      onChange: e => setSeason(e.target.value),
      options: ["2025/26", "2024/25", "2023/24", "2022/23"],
      style: {
        minWidth: 160
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "soft"
    }, "34 Saisons")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: "var(--space-4)",
        marginBottom: "var(--space-8)"
      }
    }, [["A", "Amsterdam Ace Attack"], ["B", "Hamburg Hurricanes"], ["C", "Wien Wildcats"], ["D", "Lisboa Libero Love"]].map(([l, t]) => /*#__PURE__*/React.createElement(Card, {
      key: l,
      tone: "default",
      block: l === "A"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        marginBottom: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(LevelBadge, {
      level: l,
      size: "lg"
    }), /*#__PURE__*/React.createElement(BallIcon, {
      size: 30,
      tone: "orange"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 var(--space-1)"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, "Meister*innen ", season)))), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-h1)"
      }
    }, "Titel nach Team"), /*#__PURE__*/React.createElement(StandingsTable, {
      columns: [{
        key: "rank",
        label: "#",
        align: "right",
        width: 44
      }, {
        key: "team",
        label: "Team"
      }, {
        key: "titles",
        label: "Titel",
        align: "right",
        width: 80
      }, {
        key: "first",
        label: "Erster",
        align: "right",
        width: 90
      }, {
        key: "last",
        label: "Letzter",
        align: "right",
        width: 90
      }],
      rows: [{
        rank: 1,
        team: "Hamburg Hurricanes",
        titles: 7,
        first: "1998",
        last: "2025/26"
      }, {
        rank: 2,
        team: "Amsterdam Ace Attack",
        titles: 6,
        first: "2001",
        last: "2025/26"
      }, {
        rank: 3,
        team: "Berlin Bumpers",
        titles: 5,
        first: "1994",
        last: "2021/22"
      }, {
        rank: 4,
        team: "Wien Wildcats",
        titles: 3,
        first: "2010",
        last: "2025/26"
      }]
    })));
  }
  Object.assign(window, {
    WallOfFameScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WallOfFameScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NetHero = __ds_scope.NetHero;

__ds_ns.NetPattern = __ds_scope.NetPattern;

__ds_ns.PatternBand = __ds_scope.PatternBand;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BallIcon = __ds_scope.BallIcon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.LevelBadge = __ds_scope.LevelBadge;

__ds_ns.MatchCard = __ds_scope.MatchCard;

__ds_ns.PlayerRow = __ds_scope.PlayerRow;

__ds_ns.SetScoreInput = __ds_scope.SetScoreInput;

__ds_ns.StandingsTable = __ds_scope.StandingsTable;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
