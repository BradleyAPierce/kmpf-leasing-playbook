# KMPF Leasing Playbook

The **KMPF Leasing Playbook** is a modular, component-driven learning and sales enablement resource designed to support Konica Minolta sales representatives, managers, and instructional designers. It centralizes all leasing concepts, tools, glossary definitions, job aids, and sales conversation frameworks into one accessible, professional, and scalable web-based experience.

---

## ⭐ Purpose of the Playbook

This playbook aims to:

- Strengthen leasing knowledge across the Direct Sales organization  
- Improve understanding of payment streams, tools, and leasing pathways  
- Support consistent sales messaging and customer conversations  
- Ensure accurate and unified training across teams  
- Provide a reusable, scalable template for future KM playbooks  

---

## 📁 Repository Structure

```
kmpf-leasing-playbook/
│
├── index.html
│
├── components/          # Global shared elements (nav, breadcrumb, hero, footer)
│
├── modules/             # Topic-based content sections
│   ├── glossary/
│   ├── lifecycle/
│   ├── enablement/
│   └── key-concepts/
│
├── assets/
│   ├── css/             # Global styling
│   └── js/              # Interactivity + component injection
│
└── docs/
    ├── instructions.md  # Full engineering documentation
    ├── instructions_style3.md
    └── other internal docs
```

---

## 🧩 How the Playbook Works

This playbook uses a **component injection system**. Global elements (navigation, footer, hero header, breadcrumb) are dynamically loaded into each page via JavaScript.

This ensures:

- Consistency across all modules  
- Centralized updates (one change updates all pages)  
- Reduced duplication and maintenance time  
- A professional, unified user experience  

---

## 🛠 Key Technologies

- **HTML** for modular page structure  
- **CSS** for layout, theme, and standardized KM styling  
- **JavaScript** for loading components and handling interactivity  
- **GitHub CDN** for images and asset hosting  
- **Modular folder structure** for scalability and clarity  

---

## 📚 Documentation

### **Engineering Documentation (Style 1)**  
Provides full system architecture, component logic, coding conventions, and developer guidance.  
Located at:  
`/docs/instructions.md`

### **Enterprise Playbook Documentation (Style 3)**  
Instructional, non-technical resource for content creators and stakeholders.  
Located at:  
`/docs/instructions_style3.md`

---

## ✨ Creating New Pages or Modules

To create new content:

1. Duplicate an existing module page  
2. Update the main content section (keep component placeholders)  
3. Add images using GitHub-hosted links  
4. Follow formatting rules and KM style guidelines  
5. Test in browser to ensure components load correctly  

---

## 🎨 Design Principles & Standards

- Clean, structured layout  
- Consistent spacing and visual hierarchy  
- Concise, readable content  
- KM brand-aligned colors and fonts  
- Reusable components and patterns  

For detailed rules, see:  
`/docs/instructions.md` and `/docs/instructions_style3.md`

---

## 🔧 Development Workflow

### Branching
```
feature/<feature-name>
fix/<bug-name>
update/<module-name>
```

### Commits
Use descriptive, structured commit messages:
```
[module] - action: description
```

### Pull Process
1. Pull latest main  
2. Work in a feature branch  
3. Test locally  
4. Open PR when stable  

---

## 🧪 Testing

Before pushing changes:

- Confirm all components load correctly  
- Ensure mobile and desktop layouts function properly  
- Verify image links  
- Test navigation pathways  
- Review content for clarity and accuracy  

---

## 🆘 Support & Maintenance

This project supports ongoing updates. Content should be refreshed when:

- Leasing terminology changes  
- New tools or job aids are released  
- Pricing, processes, or policy changes occur  
- New training or sales initiatives launch  

For technical changes, refer to the engineering documentation.

---

## © Konica Minolta Business Solutions U.S.A., Inc.

This playbook is a proprietary internal learning asset.  
All rights reserved.

