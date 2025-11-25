document.addEventListener("DOMContentLoaded", () => {
  // Get all SVG groups with data-slice attribute
  const sliceHotspots = document.querySelectorAll("[data-slice]");

  // Get all modal overlays
  const modalOverlays = document.querySelectorAll(".slice-modal-overlay");

  if (sliceHotspots.length === 0) {
    console.warn(
      "No slice hotspots found. Make sure SVG elements have data-slice attributes."
    );
    return;
  }

  // Add click handlers to each slice
  sliceHotspots.forEach(function (slice) {
    // Make it feel interactive
    slice.classList.add("slice-hotspot");
    slice.style.cursor = "pointer";

    slice.addEventListener("click", function () {
      const sliceName = this.getAttribute("data-slice");
      console.log("Slice clicked:", sliceName); // Debug log
      openModal(sliceName);
    });

    // Keyboard accessibility
    slice.setAttribute("tabindex", "0");
    slice.setAttribute("role", "button");

    slice.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const sliceName = this.getAttribute("data-slice");
        openModal(sliceName);
      }
    });
  });

  // Add click handlers to close buttons and overlays
  modalOverlays.forEach(function (overlay) {
    // Close when clicking the overlay background
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });

    // Close when clicking the close button
    const closeBtn = overlay.querySelector(".slice-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        closeModal(overlay);
      });
    }
  });

  // Close modals on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Function to open a specific modal
  function openModal(sliceName) {
    const modal = document.getElementById("modal-" + sliceName);
    if (modal) {
      console.log("Opening modal:", "modal-" + sliceName); // Debug log
      modal.classList.add("is-visible");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      console.error("Modal not found:", "modal-" + sliceName);
    }
  }

  // Function to close a specific modal
  function closeModal(modal) {
    modal.classList.remove("is-visible");
    document.body.style.overflow = ""; // Restore scrolling
  }

  // Function to close all modals
  function closeAllModals() {
    modalOverlays.forEach(function (overlay) {
      closeModal(overlay);
    });
  }
});
