// =======================================================
// headers.js
// Modular hero configuration + injection logic
// =======================================================

// Base CDN URL for hosted images
const CDN = "https://cdn.jsdelivr.net/gh/BradleyAPierce/KMPF_Images/";

// ----------------------------------------------
// HERO CONFIGURATION
// ----------------------------------------------
const HERO_CONFIG = {
  home: {
    img: CDN + "KMPF_Home_Banner.jpg",
    title: "Konica Minolta Premier Finance",
    subtitle:
      "Your single source of truth for leasing fundamentals, customer conversations, process guidance, and official KMPF sales resources.",
    ctaText: "Konica Minolta and First Citizens Bank Forge New Agreement",
    ctaHref:
      "https://www.thecannatareport.com/konica-minolta-1st-citizens-bank-agree/",
  },

  foundations: {
    img: CDN + "foundations.jpg",
    title: "Foundations",
    subtitle:
      "Build your baseline understanding of leasing, KMPF, and key financial concepts every sales rep should know.",
  },

  "lease-types": {
    img: CDN + "lease-types.jpg",
    title: "Lease Types & Positioning",
    subtitle:
      "Learn when to position FMV, $1 Out, TELP, and bundled options to support customer outcomes.",
  },

  conversations: {
    img: CDN + "customer-conversations.jpg",
    title: "Customer Conversations",
    subtitle:
      "Use discovery questions, talk tracks, and sales frameworks to lead confident leasing conversations.",
  },

  objections: {
    img: CDN + "objections.jpg",
    title: "Objections & Competitive",
    subtitle:
      "Anticipate and handle common objections while positioning KMPF against cash and bank competition.",
  },

  "process-tools": {
    img: CDN + "process-tools.jpg",
    title: "KMPF Process & Tools",
    subtitle:
      "Follow the Life Cycle of a Lease and understand the tools and systems that support every step.",
  },

  "leasing-partners": {
    img: CDN + "leasing-partners.jpg",
    title: "KMPF Lease Partners",
    subtitle:
      "Meet your leasing partners and learn how to collaborate with them to support your deals.",
  },

  "more-resources": {
    img: CDN + "more-resources.jpg",
    title: "More Resources",
    subtitle:
      "Quick access to glossaries, job aids, battlecards, and supporting reference materials.",
  },
};

// ----------------------------------------------
// HERO SETUP FUNCTION
// ----------------------------------------------
function setupHero(heroContainer) {
  const pageId = document.body.dataset.pageId;

  if (!pageId || !HERO_CONFIG[pageId]) {
    console.warn("No HERO_CONFIG found for:", pageId);
    return;
  }

  const config = HERO_CONFIG[pageId];

  const imgEl = heroContainer.querySelector("#page-hero-img");
  const titleEl = heroContainer.querySelector("#page-hero-title");
  const subtitleEl = heroContainer.querySelector("#page-hero-subtitle");
  const ctaEl = heroContainer.querySelector("#page-hero-cta");

  if (imgEl) {
    imgEl.src = config.img;
    imgEl.alt = config.title || "";
  }

  if (titleEl) titleEl.textContent = config.title || "";
  if (subtitleEl) subtitleEl.textContent = config.subtitle || "";

  if (ctaEl) {
    if (config.ctaText && config.ctaHref) {
      ctaEl.textContent = config.ctaText;
      ctaEl.href = config.ctaHref;
      ctaEl.style.display = "inline-flex";
    } else {
      ctaEl.style.display = "none";
    }
  }
}

// Export globally so main.js can access
window.setupHero = setupHero;
