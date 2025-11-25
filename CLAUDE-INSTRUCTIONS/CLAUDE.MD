# CLAUDE.MD - AI Assistant Guide

## Project Overview

The **KMPF Leasing Playbook** is a sales enablement website for Konica Minolta Premier Finance (KMPF). It serves as the single source of truth for leasing-related learning, tools, job aids, and sales resources used by Konica Minolta Direct Sales Representatives.

**Key Purpose**: Provide a centralized, mobile-friendly learning and reference experience for sales reps covering leasing fundamentals, lease types, discovery questions, objection handling, competitive positioning, and KMPF process & tools.

---

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3 (responsive, mobile-first design)
- **Styling**: KM Brand Theme Overrides (km-theme.css)
- **Architecture**: Component-based with JavaScript injection
- **Data**: JSON-driven content for dynamic features
- **Deployment**: GitHub Pages compatible

---

## Project Structure

```
kmpf-leasing-playbook/
├── index.html                    # Homepage
├── README.md                     # Project documentation
├── CLAUDE.MD                     # This file
├── docs/
│   └── instructions.md          # Detailed guidelines
│
├── components/                  # Reusable UI components
│   ├── nav.html                # Global navigation
│   ├── breadcrumb.html         # Breadcrumb navigation
│   └── footer.html             # Global footer
│
├── modules/                     # Main content pages
│   ├── foundations.html        # Leasing fundamentals
│   ├── lease-types.html        # Lease type explanations
│   ├── conversations.html      # Discovery questions & frameworks
│   ├── objections.html         # Objection handling
│   ├── process-tools.html      # KMPF process & tools
│   ├── leasing-partners.html   # Partner contacts
│   └── more-resources.html     # Additional resources
│
├── content-modules/             # Modular content sections
│   ├── lease-comparison.html
│   ├── glossary.html
│   └── [other content modules]
│
└── assets/
    ├── css/
    │   ├── km-theme.css        # KM Brand Bootstrap overrides
    │   └── styles.css          # Additional custom styles
    │
    ├── js/
    │   └── main.js             # Component injection & behaviors
    │
    ├── images/
    │   ├── headers/            # Hero banner images
    │   └── icons/              # UI icons
    │
    ├── pdfs/                   # Official KMPF documents
    │
    └── data/                   # JSON data files
        ├── glossary.json
        ├── lease_types.json
        ├── objections.json
        └── scenarios.json
```

---

## KM Brand Guidelines

### Official Brand Colors

**Primary Palette:**
- KM Blue: `#0062C2` (Primary brand color)
- White: `#FFFFFF`
- Black: `#000000`
- Cool Gray: `#E5E3DF`
- Light Green: `#C1E5F4`
- Light Blue: `#BEE2DD`

**Secondary Palette:**
- Pink: `#C0167B`
- Gold: `#CEA100`
- Purple: `#826FB0`
- Turquoise: `#009EB7`

### Design Principles

1. **Always use KM Blue (#0062C2)** for primary actions, headers, and key UI elements
2. **Maintain brand consistency** across all pages
3. **Mobile-first approach** - ensure responsive design works on all devices
4. **Accessibility** - follow WCAG guidelines for contrast and readability
5. **Use Bootstrap 5 components** with KM theme overrides

---

## Component Architecture

### Component Injection System

Components (nav, breadcrumb, footer) are **injected via JavaScript** using `main.js` to ensure consistency across all pages.

**How it works:**
1. Each HTML page includes a placeholder element with a specific ID
2. `main.js` loads the component HTML and injects it into the placeholder
3. This ensures all pages share the same navigation, breadcrumb, and footer

**When modifying components:**
- Edit the source files in `/components/`
- Changes automatically propagate to all pages
- Test injection on multiple pages to ensure consistency

---

## Content Guidelines

### Page Structure

Each module page should include:
1. **Hero image banner** with overlay text
2. **Breadcrumb navigation** for context
3. **Bootstrap container layout** for content
4. **KM-branded cards** for organizing information
5. **Clear CTAs** (Call-to-Actions)
6. **PDF download links** where applicable

### Content Modules

Content modules in `/content-modules/` are reusable sections that can be included in multiple pages. These promote consistency and reduce duplication.

### JSON-Driven Content

Interactive features use JSON data files in `/assets/data/`:
- **glossary.json**: Leasing terminology definitions
- **lease_types.json**: Lease type details and comparisons
- **objections.json**: Common objections and responses
- **scenarios.json**: Customer scenario examples

**When updating JSON:**
- Maintain the existing schema structure
- Validate JSON syntax before committing
- Test the UI to ensure data displays correctly

---

## Development Guidelines

### When Adding New Pages

1. **Follow the existing module structure** in `/modules/`
2. **Include component placeholders** for nav, breadcrumb, footer
3. **Use KM brand colors** from the official palette
4. **Apply Bootstrap 5 classes** for layout and components
5. **Add hero banner** with appropriate image
6. **Include breadcrumb** with proper hierarchy
7. **Test responsive design** on mobile, tablet, and desktop

### When Modifying Styles

1. **Prefer km-theme.css** for Bootstrap overrides
2. **Use styles.css** for additional custom styles
3. **Follow mobile-first approach** (write base styles, then add media queries)
4. **Maintain brand consistency** with KM colors
5. **Test across different screen sizes**

### When Adding Assets

- **Images**: Place in `/assets/images/` (headers/ for banners, icons/ for UI icons)
- **PDFs**: Place in `/assets/pdfs/`
- **Data files**: Place in `/assets/data/`
- **Optimize images** for web (compress, appropriate dimensions)
- **Use descriptive filenames** (e.g., `lease-types-comparison-chart.png`)

---

## Common Tasks

### Adding a New Module Page

1. Create new HTML file in `/modules/`
2. Copy structure from existing module page
3. Update page title, meta tags, and hero image
4. Add content using Bootstrap grid and cards
5. Update navigation links in `/components/nav.html`
6. Test component injection and responsive design

### Updating Navigation

1. Edit `/components/nav.html`
2. Follow existing Bootstrap navbar structure
3. Maintain KM brand styling
4. Test on all pages to ensure injection works

### Adding New JSON Data

1. Create or edit JSON file in `/assets/data/`
2. Follow existing schema patterns
3. Validate JSON syntax
4. Update JavaScript in `main.js` to consume new data
5. Test UI rendering

### Adding PDF Resources

1. Place PDF in `/assets/pdfs/`
2. Add download link on appropriate module page
3. Use Bootstrap button styling with KM colors
4. Include file size in link text for user clarity

---

## Testing Checklist

Before committing changes:

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify component injection works correctly
- [ ] Check all links and PDFs are accessible
- [ ] Validate HTML (no console errors)
- [ ] Verify KM brand colors are used consistently
- [ ] Test navigation and breadcrumbs
- [ ] Check for typos and content accuracy
- [ ] Ensure JSON data renders correctly
- [ ] Test on GitHub Pages preview (if applicable)

---

## Important Notes

### Security & Access

- **Internal use only** - This is proprietary Konica Minolta content
- **No sensitive data** should be committed to the repository
- **PDFs and materials** are official KMPF documents for sales use

### Best Practices

1. **Never hardcode navigation** - use component injection
2. **Always use relative paths** for GitHub Pages compatibility
3. **Optimize images** before adding to repository
4. **Comment complex JavaScript** for maintainability
5. **Keep JSON data clean** and well-structured
6. **Test thoroughly** before deploying

### File Naming Conventions

- HTML pages: lowercase with hyphens (e.g., `lease-types.html`)
- CSS files: lowercase with hyphens (e.g., `km-theme.css`)
- JavaScript: camelCase (e.g., `main.js`)
- Images: descriptive, lowercase with hyphens
- PDFs: descriptive, follow naming from source documents

---

## Deployment

### GitHub Pages

- Repository is configured for GitHub Pages deployment
- All links should use relative paths
- Test locally before pushing changes
- Verify deployment after pushing to main branch

### Alternative Hosting

Compatible with:
- KM Internal Hosting
- Vercel
- Netlify

---

## Troubleshooting

### Components Not Loading

- Check `main.js` for correct paths
- Verify placeholder IDs match injection targets
- Check browser console for errors

### Styles Not Applying

- Verify `km-theme.css` is loaded before `styles.css`
- Check for CSS specificity conflicts
- Inspect element in browser DevTools

### JSON Data Not Rendering

- Validate JSON syntax (use JSONLint)
- Check JavaScript console for errors
- Verify fetch paths are correct

---

## Maintainers

**Instructional Design Lead**: Bradley Pierce

---

## Questions?

For questions about this project or to request changes, contact the Instructional Design Lead or refer to `/docs/instructions.md` for detailed development guidelines.
