# DRY (Don't Repeat Yourself) --- Overview & Rationale

## 1. Reduces Duplication

**What:** Avoids multiple copies of the same code, content, or
component.\
**Why:** Prevents inconsistencies, reduces maintenance time, and
eliminates repeated fixes.\
**How:** Centralizing components (navbar, footer, hero, JS modules) and
injecting them into pages ensures everything updates from one source.

## 2. Enforces Consistency

**What:** Ensures a unified user experience and visual identity.\
**Why:** Saves time, improves brand trust, and removes accidental design
variations.\
**How:** Shared HTML components, shared CSS files, and global JavaScript
structures guarantee uniformity across all modules.

## 3. Simplifies Debugging

**What:** Bugs exist only in one place instead of many.\
**Why:** Faster fixes, fewer errors, and easier long-term maintenance.\
**How:** Logic lives in modular JS files; layout components live in
`components/`; styles live in `km-theme.css`.

## 4. Supports Scalability

**What:** Architecture can grow from 5 pages to 500 pages without
chaos.\
**Why:** Large-scale playbooks require predictable, repeatable
patterns.\
**How:** Reusable templates, content injection, and modular folder
hierarchy keep development predictable.

## 5. Avoids Bloat & Cognitive Overload

**What:** Prevents cluttered files, duplicated code, and confusing
structures.\
**Why:** Leaner code is easier to teach, maintain, and grow.\
**How:** HTML files focus on content; CSS and JS are centralized;
components handle layout.

## 6. Makes Onboarding Easier

**What:** New developers understand the system faster.\
**Why:** Reduces onboarding time and prevents mistakes from inconsistent
patterns.\
**How:** DRY architecture plus reusable `instructions.md` guides create
predictable workflows.

## 7. Future-Proofs the Playbook (React/Next.js Ready)

**What:** Modern frameworks depend on component-driven, DRY
architecture.\
**Why:** Reduces cost and complexity of future migrations.\
**How:** Current setup mirrors React's structure---components,
injection, modular code, unified styles.

------------------------------------------------------------------------

## Summary for Managers & Teammates

We use the DRY (Don't Repeat Yourself) principle to ensure the KMPF
Playbook is:

-   **Consistent**
-   **Maintainable**
-   **Scalable**
-   **Professional**
-   **Future‑proof**
-   **Easy to onboard**

By centralizing navigation, layout, components, and logic, updates
happen once and automatically propagate across the entire
playbook---reducing maintenance, improving reliability, and delivering a
polished learner experience.
