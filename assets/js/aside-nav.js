// assets/js/aside-nav.js
// Purpose: Load the new aside navigation component and handle basic behavior
// - Injects components/aside-nav.html into #aside-nav-container
// - Highlights the active page based on body[data-page-id]
// - Handles expand/collapse of the aside nav

document.addEventListener("DOMContentLoaded", () => {
  const asideContainer = document.getElementById("aside-nav-container");
  if (!asideContainer) return; // This page isn't using the aside nav

  // 1. Load the aside component HTML
  fetch("../components/aside-nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load aside-nav.html");
      }
      return response.text();
    })
    .then((html) => {
      asideContainer.innerHTML = html;
      initAsideNav();
    })
    .catch((error) => {
      console.error("[aside-nav] Error loading aside nav:", error);
    });
});

function initAsideNav() {
  const body = document.body;
  const currentPageId = body.dataset.pageId || "";

  const asideRoot = document.querySelector(".km-aside-nav");
  if (!asideRoot) return;

  // Start in expanded state by default
  body.classList.add("nav-expanded");
  body.classList.remove("nav-collapsed");

  // 2. Highlight the active page based on body[data-page-id]
  if (currentPageId) {
    const activeLink = asideRoot.querySelector(
      '.km-aside-nav-link[data-page-id="' + currentPageId + '"]'
    );
    if (activeLink) {
      activeLink.classList.add("is-active");
    }
  }

  // 3. Handle collapse/expand toggle
  const toggleBtn = asideRoot.querySelector("[data-nav-toggle]");
  if (toggleBtn) {
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
