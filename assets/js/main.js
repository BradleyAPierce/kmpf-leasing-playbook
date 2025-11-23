// main.js
// KMPF Leasing Playbook
// Handles component injection, theme toggle, scroll progress, and back-to-top behavior.

// -------------------------
// Component Injection
// -------------------------

/**
 * Determine the correct base path for components depending on
 * whether the current page is at root (index.html) or in /modules/.
 */
function getBasePath() {
  const path = window.location.pathname || "";
  // If URL has "/modules/" in it, components live one level up.
  if (path.includes("/modules/")) {
    return "..";
  }
  return ".";
}

const COMPONENT_BASE_PATH = getBasePath();

/**
 * Inject an HTML fragment into a target container.
 * @param {string} targetSelector - CSS selector for the container element.
 * @param {string} relativePath - Path to the fragment relative to the project root.
 * @param {Function} [callback] - Optional callback after injection.
 */
function injectFragment(targetSelector, relativePath, callback) {
  const container = document.querySelector(targetSelector);
  if (!container) return;

  const url = COMPONENT_BASE_PATH + "/" + relativePath;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to load " + url + ": " + res.status);
      }
      return res.text();
    })
    .then((html) => {
      container.innerHTML = html;
      if (typeof callback === "function") {
        callback(container);
      }
    })
    .catch((err) => {
      console.error("Error injecting fragment:", err);
    });
}

// -------------------------
// Navigation & Breadcrumb
// -------------------------

/**
 * Highlight the active nav link based on data-page-id on <body>.
 * Also initializes theme toggle once nav is injected.
 */
function setupNav(navContainer) {
  const pageId = document.body.dataset.pageId;
  if (pageId) {
    const activeLink = navContainer.querySelector(
      '[data-nav-id="' + pageId + '"]'
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Initialize theme toggle after nav is present
  initTheme();
}

/**
 * Set the current breadcrumb label from data-page-label on <body>.
 */
function setupBreadcrumb(breadcrumbContainer) {
  const label =
    document.body.dataset.pageLabel || document.title || "Current Page";
  const current = breadcrumbContainer.querySelector(
    "[data-breadcrumb-current]"
  );
  if (current) {
    current.textContent = label;
  }
}

// -------------------------
// Theme: Light / Dark
// -------------------------

const THEME_KEY = "kmpf-theme";

/**
 * Get the preferred theme:
 * - Use stored preference if present
 * - Otherwise fall back to system preference
 */
function getPreferredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch (e) {
    // localStorage may be unavailable; ignore and fall back
  }

  // System preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

/**
 * Apply the given theme by setting data-theme on <html>.
 * @param {"light" | "dark"} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

/**
 * Initialize theme selection and toggle behavior.
 * Uses a minimal checkbox switch with id="theme-toggle".
 * Should be called after nav is injected so the toggle exists.
 */
function initTheme() {
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  // Set initial position
  toggle.checked = currentTheme === "dark";

  toggle.addEventListener("change", () => {
    const nextTheme = toggle.checked ? "dark" : "light";
    applyTheme(nextTheme);
    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch (e) {
      // localStorage might be unavailable; ignore
    }
  });
}

// -------------------------
// Back-to-Top Button
// -------------------------

function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  function toggleVisibility() {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  window.addEventListener("scroll", toggleVisibility);
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize state
  toggleVisibility();
}

// -------------------------
// Scroll Progress Indicator
// -------------------------

function setupScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;

  function updateScrollProgress() {
    const docElement = document.documentElement;
    const scrollTop = docElement.scrollTop || document.body.scrollTop;
    const scrollHeight = docElement.scrollHeight - docElement.clientHeight;

    if (scrollHeight <= 0) {
      bar.style.width = "0%";
      return;
    }

    const progress = (scrollTop / scrollHeight) * 100;
    bar.style.width = progress + "%";
  }

  window.addEventListener("scroll", updateScrollProgress);
  window.addEventListener("resize", updateScrollProgress);

  // Initialize
  updateScrollProgress();
}

// -------------------------
// DOMContentLoaded Hook
// -------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Inject shared components
  injectFragment("#nav-container", "components/nav.html", setupNav);
  injectFragment("#hero-container", "components/hero.html", window.setupHero);
  injectFragment(
    "#breadcrumb-container",
    "components/breadcrumb.html",
    setupBreadcrumb
  );
  injectFragment("#footer-container", "components/footer.html");

  // Behavior
  setupBackToTop();
  setupScrollProgress();
});
