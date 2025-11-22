# KMPF Leasing Playbook
**Konica Minolta Premier Finance — Sales Enablement Website**

The KMPF Leasing Playbook is the single source of truth for all leasing-related learning, tools, job aids, and sales resources used by Konica Minolta Direct Sales Representatives. This site is built as a fully responsive Bootstrap 5 website with KM-branded theming and reusable components for consistency, scalability, and maintainability.

---

## Purpose
This playbook provides:

- Leasing fundamentals and key concepts
- Detailed lease type explanations
- Discovery questions and customer conversation frameworks
- Objection handling and competitive positioning
- Full KMPF process & tools overview
- Direct access to official job aids, PDFs, and partner contacts
- A centralized, mobile-friendly learning and reference experience for sales reps

---

## Technology Stack
- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5.3 (responsive, mobile-first)
- KM Brand Theme Overrides (km-theme.css)
- Reusable components injected via JavaScript (nav, breadcrumb, footer)
- JSON-driven content for glossary, lease types, objections, and scenarios
- GitHub Pages compatible

---

## Project Structure
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
│   │   ├── km-theme.css        # KM Brand Bootstrap overrides
│   │   └── styles.css          # Optional additional styles
│   │
│   ├── js/
│   │   └── main.js             # Component injection + behaviors
│   │
│   ├── images/
│   │   ├── headers/            # Hero images (top banners)
│   │   └── icons/              # UI icons (optional)
│   │
│   ├── pdfs/                   # All official KMPF learning documents
│   │
│   └── data/                   # JSON-driven interactive content
│       ├── glossary.json
│       ├── lease_types.json
│       ├── objections.json
│       └── scenarios.json
│
└── .gitignore

---

## KM Brand Colors
Primary:
- KM Blue #0062C2
- White #FFFFFF
- Black #000000
- Cool Gray #E5E3DF
- Light Green #C1E5F4
- Light Blue #BEE2DD

Secondary:
- Pink #C0167B
- Gold #CEA100
- Purple #826FB0
- Turquoise #009EB7

---

## Component Injection
Components are injected using main.js to maintain global consistency.

---

## Page Content Structure
Each module page includes:
- Hero image banner with overlay
- Breadcrumb navigation
- Bootstrap container layout
- KM-branded cards and CTAs
- PDF downloads

---

## Responsive Design
Supports desktop, tablet, and mobile using Bootstrap grid.

---

## JSON-Powered Content
Interactive content uses glossary.json, lease_types.json, objections.json, and scenarios.json.

---

## Deployment
- GitHub Pages
- KM Internal Hosting
- Vercel/Netlify

---

## Contributing
Follow instructions.md and KM brand theme guidelines.

---

## License
Internal Konica Minolta use only.

---

## Maintainers
- Instructional Design Lead: Bradley Pierce
