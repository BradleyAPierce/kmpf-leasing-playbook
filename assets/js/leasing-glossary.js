/**
 * leasing-glossary.js
 * -------------------
 * Renders the KMPF Leasing Glossary cards and modals from a JSON file.
 *
 * JSON source of truth:
 *   ../assets/data/leasing-glossary.json
 *
 * HTML injection targets (provided by content-modules/content-lease-types.html):
 *   <div class="row gy-4" id="kmpf-leasing-glossary-body"></div>
 *   <div id="kmpf-leasing-glossary-modals"></div>
 *
 * This file:
 *  - Waits for those DOM nodes to exist (because content is injected)
 *  - Fetches the JSON
 *  - Builds 8 cards (full-width, stacked vertically)
 *  - Builds 8 corresponding Bootstrap 5 modals
 *  - Uses .btn.btn-primary for CTAs
 *  - Uses .km-h3-blue for modal headings
 */

// Path to the JSON data file relative to modules/lease-types.html
const LEASING_GLOSSARY_JSON_PATH = "../assets/data/leasing-glossary.json";

// Image root: if the global CDN constant exists, use it; otherwise fall back to ../assets/images/
const LEASING_IMAGE_ROOT =
  typeof CDN !== "undefined" ? CDN : "../assets/images/";

// How long to keep retrying while waiting for injected content
const GLOSSARY_MAX_ATTEMPTS = 25; // 25 * 200ms = 5 seconds max
const GLOSSARY_RETRY_DELAY_MS = 200;

/**
 * Initialize the leasing glossary module once the DOM is ready.
 * We can't rely only on DOMContentLoaded because the page's main content
 * is injected afterwards by main.js. So we wait until our containers exist.
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLeasingGlossary);
} else {
  initLeasingGlossary();
}

/**
 * Kick off the retry loop that waits for the containers to appear.
 */
function initLeasingGlossary() {
  waitForLeasingGlossaryContainers(0);
}

/**
 * Waits for #kmpf-leasing-glossary-body and #kmpf-leasing-glossary-modals
 * to exist in the DOM. Retries a few times before giving up.
 *
 * @param {number} attempt - Current attempt count.
 */
function waitForLeasingGlossaryContainers(attempt) {
  const cardsContainer = document.getElementById("kmpf-leasing-glossary-body");
  const modalsContainer = document.getElementById(
    "kmpf-leasing-glossary-modals"
  );

  if (!cardsContainer || !modalsContainer) {
    if (attempt >= GLOSSARY_MAX_ATTEMPTS) {
      console.warn(
        "[leasing-glossary] Target containers not found after waiting. " +
          "Ensure #kmpf-leasing-glossary-body and #kmpf-leasing-glossary-modals exist in the injected HTML."
      );
      return;
    }

    // Try again after a short delay – content is probably still being injected
    setTimeout(
      () => waitForLeasingGlossaryContainers(attempt + 1),
      GLOSSARY_RETRY_DELAY_MS
    );
    return;
  }

  // Once containers exist, load the JSON and render
  loadLeasingGlossary(cardsContainer, modalsContainer);
}

/**
 * Fetch the JSON data and render cards + modals.
 *
 * @param {HTMLElement} cardsContainer
 * @param {HTMLElement} modalsContainer
 */
function loadLeasingGlossary(cardsContainer, modalsContainer) {
  // Clear any existing content (defensive, in case the script is re-run)
  cardsContainer.innerHTML = "";
  modalsContainer.innerHTML = "";

  fetch(LEASING_GLOSSARY_JSON_PATH)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to load leasing glossary JSON: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.groups)) {
        throw new Error("Leasing glossary JSON is missing a 'groups' array.");
      }

      renderLeasingGlossary(cardsContainer, modalsContainer, data.groups);
    })
    .catch((error) => {
      console.error("[leasing-glossary] Error loading glossary data:", error);
      cardsContainer.innerHTML =
        '<div class="col-12"><p class="text-danger">Unable to load leasing glossary content at this time.</p></div>';
    });
}

/**
 * Render all cards and modals using the groups array from JSON.
 *
 * @param {HTMLElement} cardsContainer - The row where cards will be injected.
 * @param {HTMLElement} modalsContainer - The element where modals will be injected.
 * @param {Array} groups - Array of glossary group objects from leasing-glossary.json.
 */
function renderLeasingGlossary(cardsContainer, modalsContainer, groups) {
  groups.forEach((group) => {
    const modalId = `modal-${group.id}`;
    const imageSrc = buildImageUrl(group.imageName);

    const cardHtml = buildCardHtml(group, modalId, imageSrc);
    const modalHtml = buildModalHtml(group, modalId);

    cardsContainer.insertAdjacentHTML("beforeend", cardHtml);
    modalsContainer.insertAdjacentHTML("beforeend", modalHtml);
  });
}

/**
 * Build the URL for the group image.
 * Uses LEASING_IMAGE_ROOT + imageName if provided, otherwise a fallback.
 *
 * @param {string} imageName - File name from JSON (e.g., "leasing-lease-types.jpg")
 * @returns {string} Full URL or path to the image.
 */
function buildImageUrl(imageName) {
  if (!imageName) {
    // Fallback image name you can replace later
    return `${LEASING_IMAGE_ROOT}leasing-placeholder.jpg`;
  }
  return `${LEASING_IMAGE_ROOT}${imageName}`;
}

/**
 * Build the HTML for a single glossary card.
 *
 * @param {Object} group - One glossary group object from JSON.
 * @param {string} modalId - The HTML id for the modal this card opens.
 * @param {string} imageSrc - Resolved image URL for the card.
 * @returns {string} Card HTML string.
 */
function buildCardHtml(group, modalId, imageSrc) {
  const title = group.title || "";
  const shortDescription = group.shortDescription || "";
  const tooltip = group.tooltip || "";

  return `
    <div class="col-12">
      <div class="card km-leasing-card shadow-sm">
        <div class="row g-0 align-items-center">
          <div class="col-4 col-md-3">
            <img
              src="${imageSrc}"
              class="img-fluid km-leasing-card-img"
              alt="${escapeHtml(title)}"
            />
          </div>
          <div class="col-8 col-md-9">
            <div class="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
              <div>
                <h3 class="card-title km-card-title h5 mb-2">${escapeHtml(
                  title
                )}</h3>
                <p class="card-text small text-muted mb-0">
                  ${escapeHtml(shortDescription)}
                </p>
              </div>
              <button
                type="button"
                class="btn btn-primary ms-md-3 mt-3 mt-md-0"
                data-bs-toggle="modal"
                data-bs-target="#${modalId}"
                title="${escapeHtml(tooltip)}"
              >
                View details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Build the HTML for a single glossary modal.
 *
 * @param {Object} group - One glossary group object from JSON.
 * @param {string} modalId - The HTML id for this modal.
 * @returns {string} Modal HTML string.
 */
function buildModalHtml(group, modalId) {
  const modal = group.modal || {};
  const heading = modal.heading || group.title || "";
  const intro = modal.intro || "";
  const bullets = Array.isArray(modal.bullets) ? modal.bullets : [];
  const imageSrc = buildImageUrl(group.imageName);

  const bulletsHtml = bullets
    .map((item) => {
      const label = item.label || "";
      const body = item.body || "";
      return `
        <li>
          <strong>${escapeHtml(label)}:</strong> ${escapeHtml(body)}
        </li>
      `;
    })
    .join("");

  const introHtml = intro ? `<p class="mb-2">${escapeHtml(intro)}</p>` : "";
  const bulletsBlock = bulletsHtml
    ? `<ul class="mb-0">${bulletsHtml}</ul>`
    : "";

  return `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content km-modal">
          <div class="modal-header">
            <h3 class="modal-title km-h3-blue" id="${modalId}Label">${escapeHtml(
    heading
  )}</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-center">
              <div class="col-md-9">
                ${introHtml}
                ${bulletsBlock}
              </div>
              <div class="col-md-3 d-flex justify-content-center align-items-center" style="min-height:300px;">
                <img src="${imageSrc}" class="img-fluid" alt="${escapeHtml(
    group.title
  )}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Utility: escape HTML special characters to prevent breaking the DOM.
 *
 * @param {string} value - Raw text value.
 * @returns {string} Escaped text safe for HTML injection.
 */
function escapeHtml(value) {
  if (typeof value !== "string") return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
