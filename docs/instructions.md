# KMPF Leasing Playbook – Build & Contribution Instructions

This document explains **how to build, extend, and maintain** the KMPF Leasing Playbook site.

The goal is to:

- Keep the site **consistent, on-brand, and easy to maintain**
- Avoid duplicated code (especially nav, footer, breadcrumbs)
- Make it simple for future contributors to add new content and modules

---

## 1. Project Purpose (Quick Reminder)

The KMPF Leasing Playbook is the **single source of truth** for all KMPF leasing learning content, including:

- Leasing fundamentals and key concepts
- Lease types and when to use them
- Discovery questions and customer conversation flows
- Objection handling and competitive positioning
- KMPF process & tools (CPQ, MyKM, portals, etc.)
- Job aids, PDFs, and leasing partner info

All of this is delivered in a **responsive Bootstrap 5 website** using **Konica Minolta brand colors**.

---

## 2. Folder & File Structure

```text
kmpf-leasing-playbook/
│
├── index.html
├── README.md
├── docs/
│   └── instructions.md
│
├── components/
│   ├── nav.html
│   ├── breadcrumb.html
│   └── footer.html
│
├── modules/
│   ├── foundations.html
│   ├── lease-types.html
│   ├── conversations.html
│   ├── objections.html
│   ├── process-tools.html
│   ├── leasing-partners.html
│   └── more-resources.html
│
├── assets/
│   ├── css/
│   │   ├── km-theme.css
│   │   └── styles.css        # optional custom styles
│   │
│   ├── js/
│   │   └── main.js
│   │
│   ├── images/
│   │   ├── headers/
│   │   │   ├── home-hero.jpg
│   │   │   ├── foundations-hero.jpg
│   │   │   ├── lease-types-hero.jpg
│   │   │   ├── conversations-hero.jpg
│   │   │   ├── objections-hero.jpg
│   │   │   ├── process-tools-hero.jpg
│   │   │   ├── leasing-partners-hero.jpg
│   │   │   └── more-resources-hero.jpg
│   │   └── icons/
│   │
│   ├── pdfs/
│   │   └── (all official KMPF PDFs)
│   │
│   └── data/
│       ├── glossary.json
│       ├── lease_types.json
│       ├── objections.json
│       └── scenarios.json
│
└── .gitignore
```

---

## 3. Core Tech Choices

- **HTML5, CSS3, JavaScript (ES6+)**
- **Bootstrap 5.3** (CDN) for responsive layout and components
- **KM brand theming** via `km-theme.css`
- **Reusable components** (nav, breadcrumb, footer) inserted by JavaScript
- **Static JSON** files in `/assets/data` for glossary, lease types, objections, and scenarios

> ❗ Do **not** hardcode colors or layout styles inline in HTML.  
> Use Bootstrap classes and KM theme utilities instead.

---

## 4. Bootstrap & KM Brand Theme

Every HTML page must:

1. **Include Bootstrap CSS** from CDN in the `<head>`
2. **Include KM theme CSS** after Bootstrap
3. **Include Bootstrap JS bundle** before `main.js` at the bottom

Example (root-level pages like `index.html`):

```html
<head>
  <meta charset="UTF-8" />
  <title>KMPF Leasing Playbook</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Bootstrap 5 -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet" />

  <!-- KM brand theme -->
  <link rel="stylesheet" href="assets/css/km-theme.css" />
</head>
<body>
  ...
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/main.js"></script>
</body>
```

For module pages (inside `/modules`), adjust the KM theme path:

```html
<link rel="stylesheet" href="../assets/css/km-theme.css" />
<script src="../assets/js/main.js"></script>
```

KM brand colors are already mapped to Bootstrap variables in `km-theme.css`.  
Do not introduce new arbitrary colors unless approved.

---

## 5. Page Layout Standards

### 5.1 All Pages Must Include

1. **Site Header** with:

   - KMPF logo/title area
   - Injected main navigation

2. **Hero Section**:

   - Full-width hero image from `/assets/images/headers`
   - Text overlay with:
     - H1 page title
     - Short supporting description
     - Optional CTA button (e.g., “Start Learning”)

3. **Breadcrumb Navigation**:

   - Appears immediately under the hero
   - Shows `Home > [Current Page]`

4. **Main Content**:

   - Uses Bootstrap containers, rows, and columns
   - Organized into logical sections (`.content-section`)

5. **Footer**:

   - Injected from `/components/footer.html`
   - Includes KM legal / tax disclaimers

6. **Back-to-top button**:
   - A floating button in the bottom-right
   - Behavior handled by `main.js`

---

### 5.2 Hero Section Pattern

All hero sections follow the same structure:

```html
<section class="page-hero position-relative">
  <img
    src="../assets/images/headers/foundations-hero.jpg"
    class="hero-image img-fluid w-100"
    alt="Foundations of KMPF leasing" />
  <div class="hero-overlay">
    <h1>Foundations</h1>
    <p>
      Build your baseline understanding of leasing, KMPF, and key financial
      concepts.
    </p>
    <!-- Optional CTA -->
    <!-- <a href="#content" class="btn btn-primary btn-lg mt-2">Start Learning</a> -->
  </div>
</section>
```

Hero styling is controlled in `km-theme.css`.

---

## 6. Component Injection (Nav, Breadcrumb, Footer)

To avoid duplication, we **do not** copy/paste nav, breadcrumbs, and footer into each page.  
Instead, we inject them via JavaScript using small HTML fragments stored in `/components`.

### 6.1 Components

- `components/nav.html`  
  Contains the main navigation `<nav>` and links to all modules.

- `components/breadcrumb.html`  
  Contains the basic breadcrumb markup with a placeholder for the current page.

- `components/footer.html`  
  Contains the footer text and disclaimers.

### 6.2 Page Metadata for JS

Each HTML page (including `index.html`) must define:

```html
<body data-page-id="foundations" data-page-label="Foundations"></body>
```

- `data-page-id` → used to highlight the correct nav link
- `data-page-label` → used to set the breadcrumb’s current page text

For the home page:

```html
<body data-page-id="home" data-page-label="Home"></body>
```

### 6.3 Injection Logic (main.js)

`main.js`:

- Loads `/components/nav.html` into `#nav-container`
- Loads `/components/breadcrumb.html` into `#breadcrumb-container`
- Loads `/components/footer.html` into `#footer-container`
- Uses `data-page-id` and `data-page-label` to:
  - Set the active nav item
  - Update the breadcrumb text

> When creating a new page, **do not** manually recreate nav or breadcrumb.  
> Just ensure `data-page-id` and `data-page-label` are correct.

---

## 7. Index Page (Landing) Rules

`index.html` is the **entry point**. It must:

- Use a **hero image** (`home-hero.jpg`)
- Introduce the KMPF Leasing Playbook in 1–2 short paragraphs
- Provide **cards** that link to each major module:

  - Foundations
  - Lease Types & Positioning
  - Customer Conversations
  - Objections & Competitive
  - KMPF Process & Tools
  - KMPF Leasing Partners
  - More Resources

### Card Layout

- Uses Bootstrap grid:
  - `col-12` on mobile
  - `col-md-6` on tablets
  - `col-lg-4` on desktop (max 3 per row)
- Each card has:
  - A header image (matching the module hero image)
  - Title
  - Short description
  - CTA button or link

Example card:

```html
<div class="col-12 col-md-6 col-lg-4">
  <div class="card card-km h-100 shadow-sm">
    <img
      src="assets/images/headers/foundations-hero.jpg"
      class="card-img-top"
      alt="" />
    <div class="card-body">
      <h5 class="card-title">Foundations</h5>
      <p class="card-text">
        Learn leasing basics, why KMPF matters, and key terms every rep should
        know.
      </p>
      <a href="modules/foundations.html" class="btn btn-primary"
        >Go to Foundations</a
      >
    </div>
  </div>
</div>
```

`card-km` is styled in `km-theme.css`.

---

## 8. Module Page Standards

Each `modules/*.html` file must:

- Use the standard hero pattern
- Include the breadcrumb container
- Wrap main content in a Bootstrap `.container` or `.page` wrapper
- Organize learning content into `.content-section` blocks

Minimum structure:

```html
<body data-page-id="foundations" data-page-label="Foundations">
  <header class="site-header bg-km-primary text-white">
    <div
      class="container d-flex align-items-center justify-content-between py-2">
      <div class="logo fw-bold">KMPF Leasing Playbook</div>
      <div id="nav-container"></div>
    </div>
  </header>

  <section class="page-hero">...</section>

  <div id="breadcrumb-container"></div>

  <main class="page" id="content">
    <section class="content-section">
      <h2>Section Title</h2>
      <p>Body content...</p>
    </section>

    <!-- Additional content-section blocks -->

    <section class="content-section">
      <h2>Downloads</h2>
      <ul>
        <li>
          <a href="../assets/pdfs/filename.pdf" target="_blank">PDF Name</a>
        </li>
      </ul>
    </section>
  </main>

  <div id="footer-container"></div>

  <button id="back-to-top" class="back-to-top" aria-label="Back to top">
    ↑
  </button>
</body>
```

---

## 9. Assets: Images, PDFs, Data

### 9.1 Images

- Hero images go in: `/assets/images/headers`
- Recommended size: ~1920×500 (or similar wide format)
- Filenames should match the module purpose:
  - `foundations-hero.jpg`
  - `lease-types-hero.jpg`
  - etc.

### 9.2 PDFs

All official KMPF assets go in `/assets/pdfs`.

Name them clearly, e.g.:

- `leasing-glossary.pdf`
- `kmpf-guide-to-selling.pdf`
- `life-cycle-of-a-lease.pdf`
- `battlecard-lease-vs-purchase.pdf`

When linking to PDFs from module pages, use relative paths and descriptive link text.

### 9.3 JSON Data

Files in `/assets/data` store structured content used for interactive features:

- `glossary.json` → term & definition pairs
- `lease_types.json` → lease types, descriptions, when-to-use, examples
- `objections.json` → objection text, persona, recommended response(s)
- `scenarios.json` → scenario prompts for role-play / practice

Example (glossary.json):

```json
[
  {
    "term": "Fair Market Value (FMV) Lease",
    "slug": "fmv-lease",
    "definition": "A lease where the customer can purchase the equipment at its fair market value at end of term."
  },
  {
    "term": "$1 Out Lease",
    "slug": "dollar-out-lease",
    "definition": "A lease structure where the customer owns the equipment at the end of term for $1."
  }
]
```

> When updating JSON: maintain valid JSON syntax (double quotes, commas, etc.).

---

## 10. Adding a New Module Page (Checklist)

1. **Copy an existing module file** (e.g., `foundations.html`) into a new filename under `/modules`.
2. Update:
   - `<title>` tag
   - `<body data-page-id="...">` and `data-page-label`
   - Hero image source (`src="../assets/images/headers/...-hero.jpg"`)
   - H1 text & intro paragraph
3. Replace content in `.content-section` blocks with the new module’s content.
4. Add PDF download links (if needed) in the Downloads section.
5. Add a card for this module on `index.html` (if it should be a top-level entry point).
6. Make sure the nav item points to the new module if it’s part of the main navigation.

---

## 11. Updating Navigation

To update nav links:

1. Edit `/components/nav.html`
2. Add, remove, or rename `<a>` items
3. Ensure each link has a matching `data-nav-id` value that corresponds to the `data-page-id` on the target page.

Example:

```html
<a href="/modules/foundations.html" data-nav-id="foundations">Foundations</a>
```

Target page:

```html
<body data-page-id="foundations" ...></body>
```

---

## 12. Local Development & Git Workflow

### 12.1 Run Locally

Interactive component loading via `fetch()` works best with a local HTTP server.

From the project root, run:

```bash
# Python 3
python -m http.server 8000
```

Then visit:  
`http://localhost:8000`

### 12.2 Basic Git Commands

```bash
git status
git add .
git commit -m "Describe your change here"
git push origin main
```

---

## 13. Future Enhancements

The current structure is intentionally simple and static. It is designed so that it can be migrated later into:

- React / Next.js
- A headless CMS-driven experience
- An AI-powered sales coach interface
- LMS / xAPI integrations

Keep content modular and clean to support this evolution.

---

## 14. General Principles

- **Keep it simple.** Prefer Bootstrap components and utility classes.
- **Stay DRY.** Reuse components, don’t duplicate nav/footer/breadcrumbs.
- **Be on-brand.** Use KM colors and `km-theme.css`, not custom ad-hoc colors.
- **Write clear content.** Sales reps should immediately understand what each page offers.
- **Document decisions.** If you do something non-obvious, leave a short comment or update this `instructions.md`.

If you’re unsure whether something is clear enough, ask:

> “Would a future developer or instructional designer understand this change without asking me?”

If the answer is “maybe not,” add a comment or expand this document.
