# KMPF Leasing Playbook — Enterprise Playbook Documentation (Style 3)

## 1. Purpose of This Document
The KMPF Leasing Playbook is a core learning and sales enablement resource designed to support Konica Minolta sales teams, managers, instructional designers, and business stakeholders. This document explains how the playbook is structured, how each part functions, and how teams can consistently expand and maintain the playbook without introducing errors, visual inconsistencies, or off‑brand content.

This is the **official guide** for creating, updating, and publishing content inside the playbook. It is written in a clear, instructional style and aligned with the tone, clarity, and structure of KM learning materials.

---

## 2. How the Playbook Works

### What This Playbook Is
The KMPF Leasing Playbook is a **modular, component-driven web resource**. It brings together all leasing concepts, glossary terms, tools, job aids, training materials, and sales conversation guidance into one unified experience.

### Why It Matters
The playbook allows teams to:
- Present consistent, accurate leasing information  
- Reduce time spent searching for answers  
- Build confidence in leasing conversations  
- Guide new sales reps through structured learning pathways  
- Scale content without recreating the structure from scratch  

---

## 3. Playbook Structure (High-Level View)

The playbook is organized into four main areas:

### **1. Global Components**  
Reusable elements shared across every page:  
- Navigation  
- Hero header  
- Breadcrumb trail  
- Footer  

### **2. Modules**  
Each module focuses on one learning topic, such as:  
- Glossary & Key Concepts  
- Life Cycle of a Lease  
- Leasing Enablement Tools  
- Conversation Starters  
- Objection Handling  
- Financial Concepts  

### **3. Assets**  
Shared styling (CSS), interactivity (JavaScript), icons, and images.

### **4. Docs Folder**  
Houses documentation, instructions, and internal guidance.

This structure ensures the playbook can grow over time while maintaining a professional and consistent user experience.

---

## 4. How Pages Are Built

Every page in the playbook follows the same template:

1. **Global navigation loads automatically**  
2. **Hero header appears at the top**  
3. **Breadcrumb trail shows where the learner is inside the playbook**  
4. **The main content section displays learning materials**  
5. **Footer appears at the bottom for continuity**

This ensures a consistent experience regardless of where the user navigates.

---

## 5. Component System Overview

### What Are Components?
Components are reusable content blocks stored in the `/components/` folder. Examples include:

- Navigation  
- Footer  
- Breadcrumb  
- Hero header  

### Why This Matters
Using components ensures:
- Consistency across the entire playbook  
- Faster updates (one edit updates every page)  
- Reduced development errors  
- Predictable user experience  

### How Components Load
JavaScript automatically loads each component into its placeholder on every page. This allows instructional designers and developers to focus on the content rather than rebuilding the same structure repeatedly.

---

## 6. Design System: Look & Feel

### Visual Standards
The playbook uses KM's brand-aligned design system. Key principles:

- Simple, uncluttered layouts  
- Strong visual hierarchy  
- Clear spacing and readable typography  
- Consistent color palette  
- Space-efficient design for both desktop and mobile  

### Why Consistency Matters
Consistent design:
- Builds learner trust  
- Enhances credibility  
- Helps reps locate information faster  
- Reduces cognitive load  

---

## 7. Creating a New Playbook Page

Creating new content follows a repeatable process:

### Step 1 — Duplicate a Template  
Reuse an existing module page as a starting point.

### Step 2 — Update Content Only  
Replace the main content section while keeping:
- Navigation  
- Hero  
- Breadcrumb  
- Footer  
- Component placeholders  

### Step 3 — Add Supporting Images or Icons  
Always use GitHub-hosted image links to ensure predictable behavior.

### Step 4 — Follow Established Content Formatting  
Use:
- Clear section headers  
- Short paragraphs  
- Bullet points  
- Visual patterns consistent with other modules  

### Step 5 — Review and Test  
Before publishing:
- Test component loading  
- Check mobile responsiveness  
- Verify navigation pathways  
- Review for clarity, grammar, and tone  

---

## 8. Writing Style & Tone Guide

This playbook supports sales representatives and managers. All content should follow these principles:

### Be Clear  
Avoid jargon unless it’s defined in the glossary.

### Be Actionable  
Tell learners what to do, when to do it, and why it matters.

### Be Constructive  
Offer examples, definitions, conversation phrases, and scenarios.

### Be Concise  
Short paragraphs, clean formatting, no unnecessary complexity.

### Be Aligned  
Use KM’s terminology, branding, and messaging consistently.

---

## 9. Image & Media Standards

### Where Images Come From
All images are hosted via GitHub using a predictable URL path.

### Image Best Practices
- Use `.png` for sharp UI visuals  
- Use `.svg` for icons and diagrams  
- Keep file names short and descriptive  
- Avoid embedding local images  

---

## 10. Maintaining the Playbook Over Time

### Routine Maintenance Includes:
- Ensuring glossary terms stay updated  
- Adding new tools or job aids  
- Updating training materials when processes change  
- Refreshing navigation links  
- Ensuring all modules reflect current program language  

### When Content Should Be Added
Add new content when:
- A new leasing initiative launches  
- A finance process changes  
- New sales tools or job aids are released  
- Training materials receive an update  

### When Content Should NOT Be Added
Avoid adding:
- Content that contradicts KM’s official messaging  
- One-off experiments  
- Inconsistent formatting or unapproved components  

---

## 11. Quality Control Checklist

Before any page is published:

### ✓ Content is accurate and aligned  
### ✓ All links work  
### ✓ Navigation loads correctly  
### ✓ Page displays consistently across devices  
### ✓ Spelling, grammar, tone, and clarity have been reviewed  
### ✓ Visual spacing and formatting match the rest of the playbook  

This checklist protects the learner experience and ensures long-term maintainability.

---

# APPENDIX A — Playbook Structure Diagram

```
kmpf-leasing-playbook/
│
├── components/        ← Shared headers, footers, nav, hero
│
├── modules/           ← Topic-specific content sections
│
├── assets/
│   ├── css/           ← Brand-aligned styling
│   └── js/            ← Interactivity + component loading
│
└── docs/              ← Internal documentation & instructions
```

---

# APPENDIX B — Content Guidelines

### Formatting Rules
- Headings should be descriptive  
- Keep paragraphs to 2–3 sentences  
- Use bullets for clarity  
- Use bold text to highlight key concepts  

### Visual Structure Examples

**Good Formatting**
- Title  
- Intro paragraph  
- 3–5 bullet points  
- Short example or definition  
- Section break  

**Poor Formatting**
- Long blocks of text  
- Inconsistent spacing  
- Overuse of bold or underline  
- No visual structure  

---

# APPENDIX C — Troubleshooting Guide

### Problem: Navigation missing  
**Solution:** Ensure component placeholders and JS loader are present.

### Problem: Page layout looks inconsistent  
**Solution:** Confirm CSS classes follow the established design system.

### Problem: Images not appearing  
**Solution:** Verify GitHub CDN links and file names.

### Problem: Breadcrumb trail wrong or missing  
**Solution:** Update the breadcrumb file or adjust the placeholder path.

### Problem: Spacing looks off compared to other modules  
**Solution:** Reuse spacing classes defined in `main.css` and `km-theme.css`.

---

# End of Document  
This Enterprise Playbook version ensures that instructional designers, developers, managers, and business stakeholders all share the same understanding of how the KMPF Leasing Playbook should be created, maintained, and expanded.
