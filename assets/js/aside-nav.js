// assets/js/aside-nav.js
// Purpose: Load the aside navigation component and handle behavior
// - Uses COMPONENT_BASE_PATH from main.js to build the correct component URL
// - Highlights the active page based on body[data-page-id]
// - Handles expand/collapse of the aside nav
// - On the ROOT index.html only, rewrites hrefs so links point to /modules/*.html correctly
// - On mobile (<= 768px), starts collapsed (hamburger / drawer pattern)

document.addEventListener("DOMContentLoaded", () => {
  const asideContainer = document.getElementById("aside-nav-container");
  if (!asideContainer) return; // This page doesn't use the aside nav

  // Reuse the same base path logic as main.js
  // main.js defines COMPONENT_BASE_PATH using getBasePath()
  // ('.' at root, '..' in /modules/)
  const basePath =
    typeof COMPONENT_BASE_PATH !== "undefined" ? COMPONENT_BASE_PATH : ".";

  const url = basePath + "/components/aside-nav.html";

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to load " + url + ": " + res.status);
      }
      return res.text();
    })
    .then((html) => {
      asideContainer.innerHTML = html;
      initAsideNav(basePath);
    })
    .catch((err) => {
      console.error("[aside-nav] Error injecting aside nav:", err);
    });
});

function initAsideNav(basePath) {
  const body = document.body;
  const currentPageId = body.dataset.pageId || "";

  const asideRoot = document.querySelector(".km-aside-nav");
  if (!asideRoot) return;

  // Decide initial state based on viewport:
  // - Desktop: expanded rail
  // - Mobile (<= 768px): collapsed drawer (hamburger)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    body.classList.add("nav-collapsed");
    body.classList.remove("nav-expanded");
  } else {
    body.classList.add("nav-expanded");
    body.classList.remove("nav-collapsed");
  }

  // 1) Highlight active page
  if (currentPageId) {
    const activeLink = asideRoot.querySelector(
      '.km-aside-nav-link[data-page-id="' + currentPageId + '"]'
    );
    if (activeLink) {
      activeLink.classList.add("is-active");
    }
  }

  // 2) Fix hrefs ONLY when we're on the root index.html (basePath === '.')
  //    - components/aside-nav.html is authored from the /modules/ perspective:
  //        home  -> ../index.html
  //        other -> foundations.html, process-tools.html, etc.
  //    - On the root, we want:
  //        home  -> index.html
  //        other -> modules/foundations.html, modules/process-tools.html, etc.
  if (basePath === ".") {
    const navLinks = asideRoot.querySelectorAll(".km-aside-nav-link");

    navLinks.forEach((link) => {
      const pageId = link.dataset.pageId || "";
      let href = link.getAttribute("href") || "";

      // Overview (home) should point to the root index.html
      if (pageId === "home") {
        link.setAttribute("href", "index.html");
        return;
      }

      // For module pages, prefix with "modules/" if it's a simple relative file
      // e.g., "foundations.html" -> "modules/foundations.html"
      if (
        href &&
        !href.startsWith("modules/") &&
        !href.startsWith("http") &&
        !href.startsWith("#")
      ) {
        link.setAttribute("href", "modules/" + href);
      }
    });
  }

  // 3) Collapse/expand toggle
  const toggleBtn = asideRoot.querySelector("[data-nav-toggle]");
  if (toggleBtn) {
    // Match the initial state we set above
    const initiallyExpanded = body.classList.contains("nav-expanded");
    toggleBtn.setAttribute(
      "aria-expanded",
      initiallyExpanded ? "true" : "false"
    );

    toggleBtn.addEventListener("click", () => {
      const isExpanded = body.classList.contains("nav-expanded");

      if (isExpanded) {
        body.classList.remove("nav-expanded");
        body.classList.add("nav-collapsed");
        toggleBtn.setAttribute("aria-expanded", "false");
      } else {
        body.classList.add("nav-expanded");
        body.classList.remove("nav-collapsed");
        toggleBtn.setAttribute("aria-expanded", "true");
      }
    });
  }
}
