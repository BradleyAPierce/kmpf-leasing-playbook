# KMPF Leasing Playbook — Engineering Documentation (Style 1, Option 3)

## 1. Introduction
This document provides the complete engineering documentation for the **KMPF Leasing Playbook**. It defines the architecture, file structure, standards, reusable components, naming conventions, and development workflow for maintaining and extending the playbook. This guide serves as the source of truth for all development.

---

## 2. Repository Structure

```
kmpf-leasing-playbook/
│
├── index.html
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── km-theme.css
│   │
│   ├── js/
│       ├── main.js
│       ├── headers.js
│       ├── modal.js (if implemented)
│       ├── loader.js
│
├── components/
│   ├── nav.html
│   ├── breadcrumb.html
│   ├── footer.html
│   ├── hero.html
│
├── modules/
│   ├── glossary/
│   ├── enablement/
│   ├── lifecycle/
│   └── key-concepts/
│
└── docs/
    ├── instructions.md   (this file)
```

---

## 3. Global Architecture Overview

### 3.1 Design Philosophy
- **Atomic, reusable components**
- **Consistent HTML structure**
- **JavaScript-driven component injection**
- **CSS separation of concerns**
- **Zero duplication across modules**
- **Avoid hallucinated, inconsistent, or one-off code**

### 3.2 Page Assembly Model
Each page is assembled using:
1. Static root HTML file
2. Injected components (nav, hero, breadcrumb, footer)
3. Main content markup
4. JavaScript behavior
5. Shared styling (main.css + km-theme.css)

---

## 4. Component Injection System

### 4.1 How Components Load
`headers.js` handles injection:

```
/components/nav.html → Injected into #nav-placeholder
/components/breadcrumb.html → Injected into #breadcrumb-placeholder
/components/footer.html → Injected into #footer-placeholder
/components/hero.html → Injected into #hero-placeholder
```

### 4.2 Adding a New Component
1. Create component in `/components/`
2. Include a placeholder `<div id="component-name"></div>` in any .html file
3. Register injection in `headers.js`

---

## 5. CSS Architecture

### 5.1 Files
- `main.css` → Layout, spacing, mobile grid, global resets
- `km-theme.css` → Brand color tokens, typography, reusable utility classes

### 5.2 Rules
- No inline CSS
- No per-module CSS snippets
- Use theme variables where possible
- Use BEM-inspired naming

---

## 6. JavaScript System

### 6.1 File Responsibilities
**main.js**  
- Global initialization  
- Event listeners  
- Modal interactions  
- Page behavior  

**headers.js**  
- Loads nav, breadcrumb, footer, hero  
- Ensures consistency across all modules  

**modal.js** *(optional)*  
- SVG modal logic isolated for clarity  

### 6.2 File Loading Order
```
<script src="/assets/js/headers.js"></script>
<script src="/assets/js/main.js"></script>
```
Components must load **before** scripts referencing them.

---

## 7. Creating a New Module / Page

### 7.1 Steps
1. Duplicate a template page (recommended: `/modules/template.html`)
2. Change the `<title>`
3. Add placeholders for:
```
<div id="nav-placeholder"></div>
<div id="hero-placeholder"></div>
<div id="breadcrumb-placeholder"></div>
<div id="footer-placeholder"></div>
```
4. Add main content within `<main></main>`
5. Add any SVG or modal structures
6. Test build locally

---

## 8. Image Handling (GitHub CDN)

### 8.1 Format
```
https://raw.githubusercontent.com/{username}/{repo}/{branch}/assets/images/{file}
```

### 8.2 Rules
- No relative paths for images
- Only use GitHub-hosted CDN images
- Always use `.png` for UI assets, `.svg` for icons or diagrams

---

## 9. Coding Standards

### 9.1 HTML Rules
- Semantic structure (`header`, `main`, `section`)
- No inline styles
- No script tags in body except at bottom
- Component placeholders follow kebab-case

### 9.2 CSS Rules
- Use classes, never IDs for styling
- Use utility classes when possible
- Avoid custom per-module overrides

### 9.3 JavaScript Rules
- No direct DOM injection except through main.js or headers.js
- All event listeners must use delegation when possible
- SVG interactions must be modular

---

## 10. SVG + Modal Interaction Standards

### 10.1 IDs for SVG slices
Each slice ID must match its modal ID.

Example:
```
SVG ID: Identify_Opportunity
Modal ID: modal-Identify_Opportunity
```

### 10.2 Behavior (main.js)
- Click slice → open modal
- Modal close → remove active state
- Remove default blue outline using:
```
slice { outline: none; }
slice:focus { outline: none; }
```

---

## 11. Git Workflow Standards

### 11.1 Branching
Use feature-based branching:

```
feature/new-module
feature/update-glossary
fix/modal-bug
```

### 11.2 Commit Conventions
Format:
```
[component] - action: description
```

Examples:
```
[nav] - update: changed layout spacing
[modal] - fix: removed default focus outline
```

### 11.3 Pull Process
1. Pull main
2. Commit changes on feature branch
3. Push
4. PR only after testing

---

# APPENDIX A — File-by-File Reference

### components/nav.html
- Main navigation
- Loaded via JS into all pages

### components/breadcrumb.html
- Auto-updated per module

### components/footer.html
- Global footer

### components/hero.html
- Header image + overlay text

### assets/js/main.js
- Modals  
- Events  
- SVG interactions  
- Utility behaviors  

### assets/js/headers.js
- Component injection loader

---

# APPENDIX B — Naming Conventions

### Folder Names
- lowercase  
- hyphen-separated

### File Names
- main.js, headers.js, modal.js  
- No uppercase

### CSS Classes
Use BEM-lite:
```
section-title
module-card
card-header
card-body
```

---

# APPENDIX C — Troubleshooting

### Problem: Component not loading
Check:
- Placeholder ID
- Path in headers.js
- File exists in /components/

### Problem: Modal not opening
Check:
- SVG slice ID matches modal ID
- JS listener active

### Problem: Blue outline on click
Add:
```
*:focus { outline: none; }
```

---

# End of Document
