// main.js
document.addEventListener("DOMContentLoaded", () => {
  // SVG slice ids from your wheel
  const sliceIds = [
    "Identify_Opportunity",
    "Create_Opportunity",
    "Customer_Credit_Worthiness",
    "Review_Credit_Decision",
    "Type_of_Lease",
    "Build_Quote",
    "Submit_Paperwork",
    "Lease_Documents",
    "Ship_and_Fund",
    "Need_for_Bundled_Lease",
    "Installation_and_Invoicing",
    "Customer_Follow_Up",
    "Present_Lease_Options",
  ];

  const modal = document.getElementById("slice-modal");
  const modalTitle = document.getElementById("slice-modal-title");
  const modalBody = document.getElementById("slice-modal-body");

  if (!modal || !modalTitle || !modalBody) {
    console.error("Modal markup not found in the page.");
    return;
  }

  function openModal(sliceId) {
    // Find the hidden template block for this slice
    const template = document.getElementById("slice-content-" + sliceId);

    if (!template) {
      // Fallback if you don’t have content yet
      modalTitle.textContent = sliceId.replace(/_/g, " ");
      modalBody.innerHTML = "<p>Content coming soon for this step.</p>";
    } else {
      const heading = template.querySelector("h3");
      modalTitle.textContent =
        heading?.textContent || sliceId.replace(/_/g, " ");
      modalBody.innerHTML = template.innerHTML;
    }

    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  }

  // Attach handlers to each SVG slice by id
  sliceIds.forEach((id) => {
    const slice = document.getElementById(id);
    if (!slice) {
      console.warn("No SVG element found with id:", id);
      return;
    }

    // Make it feel like a button
    slice.classList.add("slice-hotspot");
    slice.setAttribute("tabindex", "0");
    slice.setAttribute("role", "button");
    slice.setAttribute("aria-label", id.replace(/_/g, " "));

    slice.addEventListener("click", () => openModal(id));

    slice.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(id);
      }
    });
  });

  // Clicking overlay background or close button closes modal
  modal.addEventListener("click", (event) => {
    if (
      event.target === modal ||
      event.target.hasAttribute("data-close-modal")
    ) {
      closeModal();
    }
  });

  // ESC closes modal
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeModal();
    }
  });
});
