==================== script.js ====================

/*
================================================================
 PAVAN REDDY & CO. — WEBSITE APPLICATION
================================================================

 ARCHITECTURE
 ------------

 config.js
     ↓
 SITE_CONFIG
     ↓
 script.js
     ↓
 index.html
     ↓
 style.css


 PRINCIPLE
 ---------

 This file contains BEHAVIOUR and RENDERING.

 Business content should NOT be hard-coded here when it
 already exists in config.js.

 If something is business content:
     → config.js

 If something is page structure:
     → index.html

 If something is visual:
     → style.css

 If something is behaviour:
     → script.js

================================================================
*/


"use strict";


/* ==============================================================
   GLOBAL APPLICATION
============================================================== */

const APP = {

  initialized:
    false,

  currentTheme:
    null,

  selectedWhatsAppOption:
    null,

  updateTimer:
    null

};


/* ==============================================================
   DOM HELPERS
============================================================== */


/*
--------------------------------------------------------------
 Get an element by ID
--------------------------------------------------------------
*/

function $(id) {

  return document.getElementById(id);

}


/*
--------------------------------------------------------------
 Set text safely
--------------------------------------------------------------
*/

function setText(id, value) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.textContent =
    value ?? "";

}


/*
--------------------------------------------------------------
 Set HTML only where dynamic markup is intentionally required
--------------------------------------------------------------
*/

function setHTML(id, html) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.innerHTML =
    html ?? "";

}


/*
--------------------------------------------------------------
 Set an attribute
--------------------------------------------------------------
*/

function setAttribute(id, attribute, value) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.setAttribute(
    attribute,
    value ?? ""
  );

}


/*
--------------------------------------------------------------
 Show / hide
--------------------------------------------------------------
*/

function setVisible(id, visible) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.hidden =
    !visible;

}


/*
--------------------------------------------------------------
 Escape HTML

 Used when rendering external/dynamic content such as
 Google Sheet updates.
--------------------------------------------------------------
*/

function escapeHTML(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* ==============================================================
   URL HELPERS
============================================================== */


/*
--------------------------------------------------------------
 Resolve a relative asset URL
--------------------------------------------------------------
*/

function resolveAsset(path) {

  if (!path) {
    return "";
  }

  return path;

}


/*
--------------------------------------------------------------
 Create action URL
--------------------------------------------------------------
*/

function getActionUrl(type, message = "") {

  switch (type) {

    case "phone":
      return getPhoneUrl();

    case "email":
      return getEmailUrl();

    case "maps":
      return getMapsUrl();

    case "whatsapp":
      return createWhatsAppUrl(
        message ||
        SITE_CONFIG.contact.whatsapp.defaultMessage
      );

    default:
      return "#";

  }

}



/* ==============================================================
   NAVIGATION NORMALIZATION
============================================================== */

function normalizeNavigation() {

  const navigation = SITE_CONFIG.navigation || [];

  const hasClientExperiences = navigation.some(
    item => item && (
      item.href === "#client-experiences" ||
      item.href === "#reviews"
    )
  );

  if (!hasClientExperiences) {
    console.warn(
      'Add { label: "Client Experiences", href: "#client-experiences" } to SITE_CONFIG.navigation.'
    );
  }

}

/* ==============================================================
   INITIAL PAGE SETUP
============================================================== */

function initializeApplication() {

  if (APP.initialized) {
    return;
  }

  if (
    typeof SITE_CONFIG === "undefined"
  ) {

    console.error(
      "SITE_CONFIG is not available. Make sure config.js loads before script.js."
    );

    return;
  }


  APP.initialized =
    true;


  /*
  Render in logical order
  */

  renderDocumentMetadata();

  renderBrand();

  normalizeNavigation();

  renderNavigation();

  renderHero();

  renderQuickAlert();

  renderServices();

  renderAudiences();

  renderIndustries();

  renderReviews();

  renderProfessionalStory();

  renderDigitalOffice();

  renderStartHere();

  renderUpdates();

  renderContactMethods();

  renderAppointment();

  renderFAQ();

  renderContact();

  renderFooter();

  renderLegal();

  renderMobileActions();

  initializeTheme();

  initializeMobileMenu();
  initializeBackToTop();
  initializeResponsiveMenuSafety();

  initializeSmoothScrolling();

  initializeModalHandling();

  initializeWhatsAppSelection();

  initializeImageFallbacks();

  initializeKeyboardAccessibility();

  refreshIcons();

  initializeUpdates();

  hidePageLoader();

}


/* ==============================================================
   DOCUMENT METADATA
============================================================== */

function renderDocumentMetadata() {

  const seo =
    SITE_CONFIG.seo;

  const website =
    SITE_CONFIG.website;


  /*
  Title
  */

  document.title =
    seo.title;


  /*
  Description
  */

  setAttribute(
    "meta-description",
    "content",
    seo.description
  );


  /*
  Canonical
  */

  setAttribute(
    "canonical-url",
    "href",
    seo.canonicalUrl ||
    website.url
  );


  /*
  Open Graph
  */

  setAttribute(
    "og-title",
    "content",
    seo.ogTitle
  );

  setAttribute(
    "og-description",
    "content",
    seo.ogDescription
  );

  setAttribute(
    "og-url",
    "content",
    website.url
  );

  setAttribute(
    "og-image",
    "content",
    resolveAsset(seo.ogImage)
  );

  setAttribute(
    "og-locale",
    "content",
    seo.locale
  );


  /*
  Twitter
  */

  setAttribute(
    "twitter-title",
    "content",
    seo.ogTitle
  );

  setAttribute(
    "twitter-description",
    "content",
    seo.ogDescription
  );

  setAttribute(
    "twitter-image",
    "content",
    resolveAsset(seo.ogImage)
  );


  /*
  Favicon
  */

  setAttribute(
    "site-favicon",
    "href",
    resolveAsset(
      SITE_CONFIG.brand.logo.dark
    )
  );


  /*
  HTML language
  */

  document.documentElement.lang =
    website.language ||
    "en";

}


/* ==============================================================
   BRAND
============================================================== */

function renderBrand() {

  const brand =
    SITE_CONFIG.brand;

  const website =
    SITE_CONFIG.website;


  setAttribute(
    "brand-link",
    "aria-label",
    `${brand.firmName} home`
  );


  setAttribute(
    "brand-logo",
    "src",
    resolveAsset(
      brand.logo.dark
    )
  );


  setAttribute(
    "brand-logo",
    "alt",
    brand.logo.alt
  );


  /*
  Loader initials
  */

  const initials =
    brand.firmName
      .replace("& Co.", "")
      .trim()
      .split(/\s+/)
      .map(word => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();


  setText(
    "loader-initials",
    initials
  );

}


/* ==============================================================
   NAVIGATION
============================================================== */

function renderNavigation() {

  const navigation =
    SITE_CONFIG.navigation;

  const desktop =
    $("desktop-navigation");

  const mobile =
    $("mobile-navigation");


  if (!desktop || !mobile) {
    return;
  }


  desktop.innerHTML =
    "";

  mobile.innerHTML =
    "";


  navigation.forEach(item => {

    const desktopLink =
      document.createElement("a");

    desktopLink.href =
      item.href === "#reviews" ? "#client-experiences" : item.href;

    desktopLink.textContent =
      item.label;

    desktop.appendChild(
      desktopLink
    );


    const mobileLink =
      document.createElement("a");

    mobileLink.href =
      item.href === "#reviews" ? "#client-experiences" : item.href;

    mobileLink.textContent =
      item.label;

    mobile.appendChild(
      mobileLink
    );

  });


  /*
  Mobile WhatsApp
  */

  const whatsapp =
    document.createElement("a");

  whatsapp.href =
    getDefaultWhatsAppUrl();

  whatsapp.target =
    "_blank";

  whatsapp.rel =
    "noopener";

  whatsapp.className =
    "mobile-menu-whatsapp";

  whatsapp.innerHTML = `
    <i data-lucide="message-circle"></i>
    ${escapeHTML(
      SITE_CONFIG.social.whatsapp.label
    )}
  `;

  mobile.appendChild(
    whatsapp
  );

}


/* ==============================================================
   HERO
============================================================== */

function renderHero() {

  const hero =
    SITE_CONFIG.hero;

  const brand =
    SITE_CONFIG.brand;

  const coverage =
    SITE_CONFIG.coverage;


  setText(
    "hero-eyebrow",
    hero.eyebrow
  );

  setText(
    "hero-title",
    hero.title
  );

  setText(
    "hero-description",
    hero.description
  );

  setText(
    "hero-supporting-text",
    hero.supportingText
  );

  setText(
    "hero-brand-line",
    hero.brandLine
  );


  /*
  Primary action
  */

  configureAction(
    "hero-primary-action",
    hero.primaryAction
  );


  /*
  Secondary action
  */

  configureAction(
    "hero-secondary-action",
    hero.secondaryAction
  );


  /*
  Portrait
  */

  const portrait =
    $("hero-portrait");

  const fallback =
    $("hero-portrait-fallback");


  if (portrait) {

    portrait.src =
      resolveAsset(
        hero.visual.portraitImage
      );

    portrait.alt =
      hero.visual.portraitAlt;

  }


  setText(
    "hero-placeholder-title",
    hero.visual.placeholderTitle
  );

  setText(
    "hero-placeholder-text",
    hero.visual.placeholderText
  );


  /*
  Established
  */

  const heroLabels =
    SITE_CONFIG.ui?.heroLabels || {};

  setText(
    "hero-established",
    `${heroLabels.since || "Since"} ${brand.establishedYear}`
  );

  setText(
    "hero-established-label",
    heroLabels.practice || "CA Practice"
  );


  /*
  Coverage
  */

  setText(
    "hero-coverage-label",
    heroLabels.coverageLabel || "WORK WITH US"
  );

  setText(
    "hero-coverage",
    coverage.heroLine
  );


  /*
  Hero portrait fallback

  If the image exists, hide fallback.
  If it fails, show fallback.
  */

  if (portrait) {

    portrait.addEventListener(
      "load",
      () => {

        portrait.hidden =
          false;

        if (fallback) {
          fallback.hidden =
            true;
        }

      }
    );

    portrait.addEventListener(
      "error",
      () => {

        portrait.hidden =
          true;

        if (fallback) {
          fallback.hidden =
            false;
        }

      }
    );

  }

}


/* ==============================================================
   ACTION CONFIGURATION
============================================================== */

function configureAction(
  elementId,
  action
) {

  const element =
    $(elementId);

  if (!element || !action) {
    return;
  }


  element.textContent =
    action.label;


  element.href =
    getActionUrl(
      action.type
    );


  if (
    action.type === "whatsapp" ||
    action.type === "maps"
  ) {

    element.target =
      "_blank";

    element.rel =
      "noopener";

  }


  /*
  Add appropriate icon
  */

  let iconName =
    "arrow-right";


  if (action.type === "whatsapp") {
    iconName =
      "message-circle";
  }

  if (action.type === "phone") {
    iconName =
      "phone";
  }

  if (action.type === "maps") {
    iconName =
      "map-pin";
  }


  element.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${escapeHTML(action.label)}</span>
  `;

}


/* ==============================================================
   QUICK ALERT
============================================================== */

function renderQuickAlert() {

  const config =
    SITE_CONFIG.quickAlert;

  const featureEnabled =
    SITE_CONFIG.features.quickAlert;


  if (
    !config.enabled ||
    !featureEnabled
  ) {

    setVisible(
      "quick-alert",
      false
    );

    return;

  }


  const container =
    $("quick-alert-content");

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div class="quick-alert-icon">
      <i data-lucide="bell-ring"></i>
    </div>

    <div class="quick-alert-content-text">

      <span class="mini-label">
        ${escapeHTML(config.defaultTitle)}
      </span>

      <strong>
        ${escapeHTML(config.defaultMessage)}
      </strong>

    </div>

    <a
      href="${escapeHTML(config.actionHref)}"
      class="quick-alert-action"
    >

      ${escapeHTML(config.actionLabel)}

      <i data-lucide="arrow-right"></i>

    </a>

  `;

}


/* ==============================================================
   SERVICES
============================================================== */

function renderServices() {

  const section =
    SITE_CONFIG.sections.services;

  const services =
    SITE_CONFIG.services;


  if (
    !SITE_CONFIG.features.services
  ) {

    setVisible(
      "services",
      false
    );

    return;

  }


  setText(
    "services-eyebrow",
    section.eyebrow
  );

  setText(
    "services-title",
    section.title
  );

  setText(
    "services-description",
    section.description
  );


  const grid =
    $("services-grid");

  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  services.forEach(
    service => {

      const card =
        document.createElement("article");

      card.className =
        "service-card";


      card.innerHTML = `

        <div class="service-card-top">

          <div class="service-icon">

            <i data-lucide="${escapeHTML(
              service.icon
            )}"></i>

          </div>

          <span class="service-number">
            ${escapeHTML(
              String(
                services.indexOf(service) + 1
              ).padStart(2, "0")
            )}
          </span>

        </div>


        <h3>
          ${escapeHTML(service.title)}
        </h3>


        <p>
          ${escapeHTML(
            service.shortDescription
          )}
        </p>


        <ul class="service-details">

          ${service.details
            .map(detail => `
              <li>
                <i data-lucide="check"></i>
                <span>${escapeHTML(detail)}</span>
              </li>
            `)
            .join("")}

        </ul>


        <a
          href="${escapeHTML(
            getServiceWhatsAppUrl(service.id)
          )}"
          class="service-action"
          target="_blank"
          rel="noopener"
        >

          Ask us about this

          <i data-lucide="arrow-up-right"></i>

        </a>

      `;


      grid.appendChild(
        card
      );

    }
  );


  /*
  Not sure card
  */

  const notSure =
    section.notSure;


  setText(
    "services-not-sure-eyebrow",
    notSure.eyebrow
  );

  setText(
    "services-not-sure-title",
    notSure.title
  );

  setText(
    "services-not-sure-description",
    notSure.description
  );

  setText(
    "services-not-sure-action",
    notSure.actionLabel
  );

  setAttribute(
    "services-not-sure-action",
    "href",
    notSure.actionHref
  );

}


/* ==============================================================
   WHO WE HELP
============================================================== */

function renderAudiences() {

  if (
    !SITE_CONFIG.features.whoWeHelp
  ) {

    setVisible(
      "who-we-help",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.whoWeHelp;

  const audiences =
    SITE_CONFIG.audiences;


  setText(
    "audience-eyebrow",
    section.eyebrow
  );

  setText(
    "audience-title",
    section.title
  );

  setText(
    "audience-description",
    section.description
  );


  const grid =
    $("audience-grid");

  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  audiences.forEach(
    audience => {

      const card =
        document.createElement("article");

      card.className =
        "audience-card";


      card.innerHTML = `

        <div class="audience-icon">

          <i data-lucide="${escapeHTML(
            audience.icon
          )}"></i>

        </div>


        <h3>
          ${escapeHTML(
            audience.title
          )}
        </h3>


        <p>
          ${escapeHTML(
            audience.description
          )}
        </p>


        <a
          href="${escapeHTML(
            getAudienceWhatsAppUrl(
              audience.id
            )
          )}"
          target="_blank"
          rel="noopener"
          class="audience-action"
        >

          Talk to us

          <i data-lucide="arrow-up-right"></i>

        </a>

      `;


      grid.appendChild(
        card
      );

    }
  );

}


/* ==============================================================
   INDUSTRIES
============================================================== */

function renderIndustries() {

  if (
    !SITE_CONFIG.features.industries
  ) {

    setVisible(
      "industries",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.industries;

  const industries =
    SITE_CONFIG.industries;


  setText(
    "industries-eyebrow",
    section.eyebrow
  );

  setText(
    "industries-title",
    section.title
  );

  setText(
    "industries-description",
    section.description
  );


  const grid =
    $("industries-grid");

  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  industries.forEach(
    industry => {

      const item =
        document.createElement("div");

      item.className =
        "industry-item";


      item.innerHTML = `

        <i data-lucide="${escapeHTML(
          industry.icon
        )}"></i>

        <span>
          ${escapeHTML(
            industry.title
          )}
        </span>

      `;


      grid.appendChild(
        item
      );

    }
  );

}


/* ==============================================================
   REVIEWS
============================================================== */

function renderReviews() {

  const config =
    SITE_CONFIG.reviews;


  if (
    !SITE_CONFIG.features.reviews ||
    !config.enabled
  ) {

    setVisible(
      "reviews",
      false
    );

    return;

  }


  setText(
    "reviews-eyebrow",
    config.eyebrow
  );

  setText(
    "reviews-title",
    config.title
  );

  setText(
    "reviews-description",
    config.description
  );


  /*
  Google Reviews
  */

  const googleLink =
    $("google-reviews-link");


  if (
    googleLink &&
    config.googleReviewsUrl
  ) {

    googleLink.href =
      config.googleReviewsUrl;

    googleLink.target =
      "_blank";

    googleLink.rel =
      "noopener";

    googleLink.innerHTML = `

      <i data-lucide="star"></i>

      ${escapeHTML(
        config.googleActionLabel
      )}

      <i data-lucide="arrow-up-right"></i>

    `;

  }
  else if (googleLink) {

    googleLink.hidden =
      true;

  }


  /*
  Testimonials
  */

  const grid =
    $("testimonials-grid");

  const empty =
    $("reviews-empty");


  if (!grid) {
    return;
  }


  const testimonials =
    config.testimonials || [];


  grid.innerHTML =
    "";


  if (
    testimonials.length === 0
  ) {

    if (empty) {

      empty.hidden =
        false;

      const paragraph =
        empty.querySelector("p");

      if (paragraph) {

        paragraph.textContent =
          config.emptyMessage ||
          "We're collecting genuine client experiences. Check back soon.";

      }

    }

    return;

  }


  if (empty) {
    empty.hidden =
      true;
  }


  testimonials.forEach(
    testimonial => {

      const card =
        document.createElement("article");

      card.className =
        "testimonial-card";


      card.innerHTML = `

        <div class="testimonial-stars">

          ${[1, 2, 3, 4, 5]
            .map(() =>
              `<i data-lucide="star"></i>`
            )
            .join("")}

        </div>


        <blockquote>
          “${escapeHTML(
            testimonial.quote
          )}”
        </blockquote>


        <div class="testimonial-author">

          <strong>
            ${escapeHTML(
              testimonial.name
            )}
          </strong>

          <span>
            ${escapeHTML(
              testimonial.role || ""
            )}
          </span>

          <small>
            ${escapeHTML(
              testimonial.location || ""
            )}
          </small>

        </div>

      `;


      grid.appendChild(
        card
      );

    }
  );

}


/* ==============================================================
   PROFESSIONAL STORY
============================================================== */

function renderProfessionalStory() {

  if (
    !SITE_CONFIG.features.professionalStory
  ) {

    setVisible(
      "our-story",
      false
    );

    return;

  }


  const story =
    SITE_CONFIG.professionalStory;


  setText(
    "story-eyebrow",
    story.eyebrow
  );

  setText(
    "story-title",
    story.title
  );

  setText(
    "story-description",
    story.description
  );


  const timeline =
    $("career-timeline");

  if (!timeline) {
    return;
  }


  timeline.innerHTML =
    "";


  story.career.forEach(
    (item, index) => {

      const element =
        document.createElement("article");

      element.className =
        "career-item";


      element.innerHTML = `

        <div class="career-number">

          ${String(
            index + 1
          ).padStart(2, "0")}

        </div>


        <div class="career-icon">

          <i data-lucide="${escapeHTML(
            item.icon
          )}"></i>

        </div>


        <div class="career-content">

          <span class="career-organisation">

            ${escapeHTML(
              item.organisation
            )}

          </span>


          <h3>

            ${escapeHTML(
              item.role
            )}

          </h3>


          <p>

            ${escapeHTML(
              item.description
            )}

          </p>

        </div>

      `;


      timeline.appendChild(
        element
      );

    }
  );


  /*
  Countries
  */

  const countries =
    $("countries");


  if (!countries) {
    return;
  }


  countries.innerHTML =
    "";


  story.countries.forEach(
    country => {

      const element =
        document.createElement("span");

      element.textContent =
        country;

      countries.appendChild(
        element
      );

    }
  );

}


/* ==============================================================
   DIGITAL OFFICE
============================================================== */

function renderDigitalOffice() {

  if (
    !SITE_CONFIG.features.digitalOffice
  ) {

    setVisible(
      "digital-office",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.digitalOffice;


  setText(
    "digital-office-eyebrow",
    section.eyebrow
  );

  setText(
    "digital-office-title",
    section.title
  );

  setText(
    "digital-office-description",
    section.description
  );

  setText(
    "digital-office-closing",
    section.closingLine
  );


  const grid =
    $("digital-benefits");

  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  section.benefits.forEach(
    benefit => {

      const item =
        document.createElement("article");

      item.className =
        "digital-benefit";


      item.innerHTML = `

        <div class="digital-benefit-icon">

          <i data-lucide="${escapeHTML(
            benefit.icon
          )}"></i>

        </div>


        <div>

          <h3>
            ${escapeHTML(
              benefit.title
            )}
          </h3>

          <p>
            ${escapeHTML(
              benefit.description
            )}
          </p>

        </div>

      `;


      grid.appendChild(
        item
      );

    }
  );

}


/* ==============================================================
   START HERE
============================================================== */

function renderStartHere() {

  if (
    !SITE_CONFIG.features.startHere
  ) {

    setVisible(
      "start-here",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.startHere;


  setText(
    "start-eyebrow",
    section.eyebrow
  );

  setText(
    "start-title",
    section.title
  );

  setText(
    "start-description",
    section.description
  );

  setText(
    "mind-eyebrow",
    section.mindEyebrow
  );

  setText(
    "mind-title",
    section.mindTitle
  );

  setText(
    "mind-description",
    section.mindDescription
  );

  setText(
    "start-reassurance",
    section.reassurance
  );


  /*
  Steps
  */

  const steps =
    $("start-steps");

  if (!steps) {
    return;
  }


  steps.innerHTML =
    "";


  section.steps.forEach(
    step => {

      const element =
        document.createElement("article");

      element.className =
        "start-step";


      element.innerHTML = `

        <span class="start-step-number">

          ${escapeHTML(
            step.number
          )}

        </span>


        <h3>

          ${escapeHTML(
            step.title
          )}

        </h3>


        <p>

          ${escapeHTML(
            step.description
          )}

        </p>

      `;


      steps.appendChild(
        element
      );

    }
  );


  renderWhatsAppOptions();

}


/* ==============================================================
   WHATSAPP OPTIONS
============================================================== */

function renderWhatsAppOptions() {

  if (
    !SITE_CONFIG.features.whatsappOptions
  ) {

    setVisible(
      "whatsapp-options",
      false
    );

    return;

  }


  const options =
    SITE_CONFIG.whatsappOptions;

  const container =
    $("whatsapp-options");

  if (!container) {
    return;
  }


  container.innerHTML =
    "";


  options.forEach(
    option => {

      const button =
        document.createElement("button");

      button.type =
        "button";

      button.className =
        "whatsapp-option";

      button.dataset.optionId =
        option.id;


      button.innerHTML = `

        <i data-lucide="${escapeHTML(
          option.icon
        )}"></i>

        <span>

          ${escapeHTML(
            option.label
          )}

        </span>

      `;


      button.addEventListener(
        "click",
        () => {

          selectWhatsAppOption(
            option.id
          );

        }
      );


      container.appendChild(
        button
      );

    }
  );

}


/* ==============================================================
   WHATSAPP OPTION SELECTION
============================================================== */

function initializeWhatsAppSelection() {

  /*
  Selection listeners are attached during rendering.
  This function intentionally remains as the initialization
  point for future extensions.
  */

}


function selectWhatsAppOption(optionId) {

  const option =
    SITE_CONFIG.whatsappOptions.find(
      item => item.id === optionId
    );


  if (!option) {
    return;
  }


  APP.selectedWhatsAppOption =
    optionId;


  /*
  Update selected styling
  */

  document
    .querySelectorAll(
      ".whatsapp-option"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "selected",
          button.dataset.optionId === optionId
        );

      }
    );


  /*
  Show result
  */

  const result =
    $("whatsapp-option-result");

  const link =
    $("selected-whatsapp-link");


  if (!result || !link) {
    return;
  }


  link.href =
    getQuickWhatsAppUrl(
      optionId
    );


  result.hidden =
    false;


  result.scrollIntoView({
    behavior:
      "smooth",

    block:
      "nearest"
  });

}


/* ==============================================================
   UPDATES
============================================================== */

function renderUpdates(updates = []) {

  if (
    !SITE_CONFIG.features.updates ||
    !SITE_CONFIG.updates.enabled
  ) {

    setVisible(
      "updates",
      false
    );

    return;

  }


  const config =
    SITE_CONFIG.updates;


  const grid =
    $("updates-grid");

  const empty =
    $("updates-empty");


  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  if (
    !updates ||
    updates.length === 0
  ) {

    grid.hidden =
      true;

    if (empty) {

      empty.hidden =
        false;

      setText(
        "updates-empty-title",
        config.emptyTitle
      );

      setText(
        "updates-empty-description",
        config.emptyDescription
      );

    }

    return;

  }


  grid.hidden =
    false;


  if (empty) {
    empty.hidden =
      true;
  }


  updates
    .slice(
      0,
      config.maxFeatured
    )
    .forEach(
      update => {

        const card =
          document.createElement("article");

        card.className =
          "update-card";


        const date =
          update.date
            ? formatUpdateDate(
                update.date
              )
            : "";


        card.innerHTML = `

          <div class="update-card-top">

            <span class="update-type">

              ${escapeHTML(
                update.type ||
                "General"
              )}

            </span>


            ${
              date
                ? `
                  <time datetime="${escapeHTML(
                    update.date
                  )}">
                    ${escapeHTML(date)}
                  </time>
                `
                : ""
            }

          </div>


          <h3>

            ${escapeHTML(
              update.title ||
              ""
            )}

          </h3>


          <p>

            ${escapeHTML(
              update.description ||
              ""
            )}

          </p>


          ${
            update.link
              ? `
                <a
                  href="${escapeHTML(update.link)}"
                  target="_blank"
                  rel="noopener"
                  class="text-link"
                >

                  ${escapeHTML(
                    update.linkLabel ||
                    "Read more"
                  )}

                  <i data-lucide="arrow-up-right"></i>

                </a>
              `
              : ""
          }

        `;


        grid.appendChild(
          card
        );

      }
    );

}


function initializeUpdates() {

  /*
  The website starts with the configured fallback state.

  Google Sheet integration can be connected later without
  changing the HTML architecture.
  */

  renderUpdates([]);


  if (
    SITE_CONFIG.updates.sheetUrl
  ) {

    fetchUpdatesFromSheet();

  }

}


async function fetchUpdatesFromSheet() {

  /*
  The actual Google Sheet publishing/fetching method will be
  connected once the Sheet structure is finalized.

  Keeping this function isolated means we can change the data
  source without changing the rest of the website.
  */

  try {

    /*
    Placeholder intentionally left without making assumptions
    about the future Google Sheet API format.
    */

    console.info(
      "Google Sheet updates are configured but the data endpoint has not been connected yet."
    );

  }
  catch (error) {

    console.error(
      "Unable to load updates.",
      error
    );

  }

}


function formatUpdateDate(dateValue) {

  const date =
    new Date(dateValue);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return dateValue;

  }


  return date.toLocaleDateString(
    "en-IN",
    {
      day:
        "numeric",

      month:
        "short",

      year:
        "numeric"
    }
  );

}


/* ==============================================================
   CONTACT METHODS
============================================================== */

function renderContactMethods() {

  if (
    !SITE_CONFIG.features.contactMethods
  ) {

    setVisible(
      "how-we-work",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.contactMethods;

  const methods =
    SITE_CONFIG.contactMethods;


  setText(
    "contact-methods-eyebrow",
    section.eyebrow
  );

  setText(
    "contact-methods-title",
    section.title
  );

  setText(
    "contact-methods-description",
    section.description
  );


  const grid =
    $("contact-methods-grid");

  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  methods.forEach(
    method => {

      const card =
        document.createElement("article");

      card.className =
        "contact-method-card";


      const url =
        getActionUrl(
          method.actionType
        );


      card.innerHTML = `

        <div class="contact-method-icon">

          <i data-lucide="${escapeHTML(
            method.icon
          )}"></i>

        </div>


        <h3>

          ${escapeHTML(
            method.title
          )}

        </h3>


        <p>

          ${escapeHTML(
            method.description
          )}

        </p>


        <a
          href="${escapeHTML(url)}"
          class="text-link"
          ${
            method.actionType === "maps" ||
            method.actionType === "whatsapp"
              ? `
                target="_blank"
                rel="noopener"
              `
              : ""
          }
        >

          ${escapeHTML(
            method.actionLabel
          )}

          <i data-lucide="arrow-up-right"></i>

        </a>

      `;


      grid.appendChild(
        card
      );

    }
  );

}


/* ==============================================================
   APPOINTMENT
============================================================== */

function renderAppointment() {

  if (
    !SITE_CONFIG.features.appointments ||
    !SITE_CONFIG.appointments.enabled
  ) {

    setVisible(
      "appointment-card",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.appointment;

  const appointment =
    SITE_CONFIG.appointments;


  setText(
    "appointment-eyebrow",
    section.eyebrow
  );

  setText(
    "appointment-title",
    section.title
  );

  setText(
    "appointment-description",
    section.description
  );


  const button =
    $("appointment-button");

  if (!button) {
    return;
  }


  button.textContent =
    appointment.label;


  button.href =
    getAppointmentWhatsAppUrl();


  button.target =
    "_blank";

  button.rel =
    "noopener";


  button.innerHTML = `

    ${escapeHTML(
      appointment.label
    )}

    <i data-lucide="arrow-right"></i>

  `;

}


/* ==============================================================
   FAQ
============================================================== */

function renderFAQ() {

  if (
    !SITE_CONFIG.features.faq
  ) {

    setVisible(
      "faq",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.faq;

  const faq =
    SITE_CONFIG.faq;


  setText(
    "faq-eyebrow",
    section.eyebrow
  );

  setText(
    "faq-title",
    section.title
  );

  setText(
    "faq-description",
    section.description
  );


  const action =
    $("faq-action");

  if (action) {

    action.textContent =
      section.actionLabel;

    action.href =
      "#contact";

  }


  const list =
    $("faq-list");

  if (!list) {
    return;
  }


  list.innerHTML =
    "";


  faq.forEach(
    (item, index) => {

      const wrapper =
        document.createElement("div");

      wrapper.className =
        "faq-item";


      wrapper.innerHTML = `

        <button
          type="button"
          class="faq-question"
          aria-expanded="false"
          aria-controls="faq-answer-${index}"
        >

          <span>
            ${escapeHTML(
              item.question
            )}
          </span>

          <i data-lucide="plus"></i>

        </button>


        <div
          id="faq-answer-${index}"
          class="faq-answer"
          hidden
        >

          <p>
            ${escapeHTML(
              item.answer
            )}
          </p>

        </div>

      `;


      const button =
        wrapper.querySelector(
          ".faq-question"
        );

      const answer =
        wrapper.querySelector(
          ".faq-answer"
        );


      button.addEventListener(
        "click",
        () => {

          const expanded =
            button.getAttribute(
              "aria-expanded"
            ) === "true";


          button.setAttribute(
            "aria-expanded",
            String(!expanded)
          );


          answer.hidden =
            expanded;


          wrapper.classList.toggle(
            "open",
            !expanded
          );


          refreshIcons();

        }
      );


      list.appendChild(
        wrapper
      );

    }
  );

}


/* ==============================================================
   CONTACT
============================================================== */

function renderContact() {

  const section =
    SITE_CONFIG.sections.contact;

  const contact =
    SITE_CONFIG.contact;

  const office =
    SITE_CONFIG.office;

  const brand =
    SITE_CONFIG.brand;


  setText(
    "contact-eyebrow",
    section.eyebrow
  );

  setText(
    "contact-title",
    section.title
  );

  setText(
    "contact-description",
    section.description
  );

  setText(
    "contact-reassurance",
    section.reassurance
  );


  /*
  Contact actions
  */

  setAttribute(
    "contact-call",
    "href",
    getPhoneUrl()
  );

  setAttribute(
    "contact-whatsapp",
    "href",
    getDefaultWhatsAppUrl()
  );

  setAttribute(
    "contact-email",
    "href",
    getEmailUrl()
  );

  setAttribute(
    "contact-maps",
    "href",
    getMapsUrl()
  );

  setAttribute(
    "address-directions",
    "href",
    getMapsUrl()
  );


  setText(
    "contact-phone-display",
    contact.phone.display
  );

  setText(
    "contact-whatsapp-display",
    contact.whatsapp.display
  );

  setText(
    "contact-email-display",
    contact.email.display
  );

  setText(
    "contact-office-name",
    brand.firmName
  );


  /*
  Address
  */

  const address =
    office.address;


  setText(
    "contact-firm-name",
    brand.firmName
  );


  setHTML(
    "contact-address",
    `
      ${escapeHTML(address.line1)}<br>
      ${escapeHTML(address.line2)}<br>
      ${escapeHTML(address.city)}
      – ${escapeHTML(address.pincode)}<br>
      ${escapeHTML(address.state)},
      ${escapeHTML(address.country)}
    `
  );


  const landmark =
    $("contact-landmark");

  if (landmark) {

    const span =
      landmark.querySelector("span");

    if (span) {

      span.textContent =
        office.landmark;

    }

  }


  setText(
    "find-us-label",
    section.findUsLabel
  );

  setText(
    "hours-label",
    section.hoursLabel
  );


  setText(
    "office-hours",
    office.hours.display
  );

  setText(
    "office-closed-note",
    office.hours.closedNote
  );

  setText(
    "office-visit-policy",
    office.visitPolicy
  );


  setText(
    "contact-final-message",
    section.finalMessage
  );


  /*
  External actions
  */

  [
    "contact-whatsapp",
    "contact-maps",
    "address-directions"
  ]
    .forEach(id => {

      const element =
        $(id);

      if (element) {

        element.target =
          "_blank";

        element.rel =
          "noopener";

      }

    });

}


/* ==============================================================
   FOOTER
============================================================== */

function renderFooter() {

  const footer =
    SITE_CONFIG.footer;

  const brand =
    SITE_CONFIG.brand;

  const contact =
    SITE_CONFIG.contact;


  /*
  Logo
  */

  setAttribute(
    "footer-logo",
    "src",
    resolveAsset(
      brand.logo.dark
    )
  );

  setAttribute(
    "footer-logo",
    "alt",
    brand.logo.alt
  );


  /*
  Footer content
  */

  setText(
    "footer-tagline",
    footer.tagline
  );

  setText(
    "footer-copyright",
    footer.copyright
  );

  setText(
    "footer-location",
    footer.locationLine
  );


  /*
  Footer labels
  */

  const uiLabels =
    SITE_CONFIG.ui?.labels || {};

  setText(
    "footer-explore-label",
    uiLabels.footerExplore || "Explore"
  );

  setText(
    "footer-social-title",
    uiLabels.footerSocial || "Find us online"
  );

  setText(
    "footer-contact-title",
    uiLabels.footerContact || "Talk to us"
  );


  /*
  Navigation
  */

  const navigation =
    $("footer-navigation-links");

  if (navigation) {

    navigation.innerHTML =
      "";


    SITE_CONFIG.navigation.forEach(
      item => {

        const link =
          document.createElement("a");

        link.href =
          item.href;

        link.textContent =
          item.label;

        navigation.appendChild(
          link
        );

      }
    );

  }


  /*
  Footer contact
  */

  const phone =
    $("footer-phone");

  if (phone) {

    phone.href =
      getPhoneUrl();

    phone.textContent =
      contact.phone.display;

  }


  const email =
    $("footer-email");

  if (email) {

    email.href =
      getEmailUrl();

    email.textContent =
      contact.email.display;

  }


  const whatsapp =
    $("footer-whatsapp");

  if (whatsapp) {

    whatsapp.href =
      getDefaultWhatsAppUrl();

    whatsapp.textContent =
      "WhatsApp us";

    whatsapp.target =
      "_blank";

    whatsapp.rel =
      "noopener";

  }


  /*
  Social
  */

  renderSocialLinks();


  /*
  Legal
  */

  const privacy =
    SITE_CONFIG.legal.privacyPolicy;

  const disclaimer =
    SITE_CONFIG.legal.disclaimer;


  setText(
    "footer-privacy-link",
    privacy.label
  );

  setText(
    "footer-disclaimer-link",
    disclaimer.label
  );


  setVisible(
    "footer-privacy-link",
    privacy.enabled
  );

  setVisible(
    "footer-disclaimer-link",
    disclaimer.enabled
  );

}


/* ==============================================================
   SOCIAL LINKS
============================================================== */

function renderSocialLinks() {

  const container =
    $("footer-social-links");

  if (!container) {
    return;
  }


  if (
    !SITE_CONFIG.features.socialLinks ||
    !SITE_CONFIG.footer.showSocialLinks
  ) {

    container.innerHTML =
      "";

    return;

  }


  container.innerHTML =
    "";


  Object.entries(
    SITE_CONFIG.social
  )
    .forEach(
      ([key, item]) => {

        if (
          !item.enabled ||
          !item.url
        ) {
          return;
        }


        const link =
          document.createElement("a");

        link.href =
          item.url;

        link.className =
          "social-link";

        link.target =
          "_blank";

        link.rel =
          "noopener";

        link.setAttribute(
          "aria-label",
          item.label
        );

        link.title =
          item.label;


        link.innerHTML = `

          <i data-lucide="${escapeHTML(
            item.icon
          )}"></i>

          <span>
            ${escapeHTML(
              item.shortLabel
            )}
          </span>

        `;


        container.appendChild(
          link
        );

      }
    );

}


/* ==============================================================
   LEGAL
============================================================== */

function renderLegal() {

  const privacy =
    SITE_CONFIG.legal.privacyPolicy;

  const disclaimer =
    SITE_CONFIG.legal.disclaimer;


  /*
  Privacy
  */

  if (privacy.enabled) {

    setText(
      "privacy-eyebrow",
      privacy.label
    );

    setText(
      "privacy-title",
      privacy.title
    );


    const privacyContent =
      $("privacy-content");

    if (privacyContent) {

      privacyContent.innerHTML =
        privacy.content
          .map(
            paragraph =>
              `<p>${escapeHTML(
                paragraph
              )}</p>`
          )
          .join("");

    }

  }


  /*
  Disclaimer
  */

  if (disclaimer.enabled) {

    setText(
      "disclaimer-eyebrow",
      disclaimer.label
    );

    setText(
      "disclaimer-title",
      disclaimer.title
    );


    const disclaimerContent =
      $("disclaimer-content");

    if (disclaimerContent) {

      disclaimerContent.innerHTML =
        disclaimer.content
          .map(
            paragraph =>
              `<p>${escapeHTML(
                paragraph
              )}</p>`
          )
          .join("");

    }

  }

}


/* ==============================================================
   MOBILE ACTIONS
============================================================== */

function renderMobileActions() {

  if (
    !SITE_CONFIG.features.mobileStickyActions ||
    !SITE_CONFIG.mobile.stickyActions
  ) {

    setVisible(
      "mobile-sticky-actions",
      false
    );

    return;

  }


  const container =
    $("mobile-sticky-actions");

  if (!container) {
    return;
  }


  container.innerHTML =
    "";


  SITE_CONFIG.mobile.actions.forEach(
    item => {

      let href =
        "#";


      if (
        item.action === "phone"
      ) {

        href =
          getPhoneUrl();

      }


      if (
        item.action === "whatsapp"
      ) {

        href =
          getDefaultWhatsAppUrl();

      }


      if (
        item.action === "maps"
      ) {

        href =
          getMapsUrl();

      }


      const link =
        document.createElement("a");

      link.href =
        href;


      if (
        item.action === "whatsapp" ||
        item.action === "maps"
      ) {

        link.target =
          "_blank";

        link.rel =
          "noopener";

      }


      link.innerHTML = `

        <i data-lucide="${escapeHTML(
          item.icon
        )}"></i>

        <span>
          ${escapeHTML(
            item.label
          )}
        </span>

      `;


      container.appendChild(
        link
      );

    }
  );

}


/* ==============================================================
   THEME
============================================================== */

function initializeTheme() {

  const config =
    SITE_CONFIG.theme;


  let theme =
    config.default ||
    "dark";


  if (
    config.rememberChoice
  ) {

    const saved =
      localStorage.getItem(
        "pavanca-theme"
      );


    if (
      saved === "dark" ||
      saved === "light"
    ) {

      theme =
        saved;

    }

  }


  applyTheme(
    theme
  );


  const toggle =
    $("theme-toggle");


  if (!toggle) {
    return;
  }


  toggle.addEventListener(
    "click",
    () => {

      const current =
        document.documentElement
          .getAttribute("data-theme");


      const next =
        current === "dark"
          ? "light"
          : "dark";


      applyTheme(
        next
      );


      if (
        config.rememberChoice
      ) {

        localStorage.setItem(
          "pavanca-theme",
          next
        );

      }

    }
  );

}


function applyTheme(theme) {

  if (
    theme !== "dark" &&
    theme !== "light"
  ) {

    theme =
      "dark";

  }


  APP.currentTheme =
    theme;


  document.documentElement
    .setAttribute(
      "data-theme",
      theme
    );


  const toggle =
    $("theme-toggle");


  if (toggle) {

    const isDark =
      theme === "dark";


    toggle.setAttribute(
      "aria-label",
      isDark
        ? SITE_CONFIG.theme.lightLabel
        : SITE_CONFIG.theme.darkLabel
    );


    toggle.setAttribute(
      "title",
      isDark
        ? SITE_CONFIG.theme.lightLabel
        : SITE_CONFIG.theme.darkLabel
    );

  }

}


/* ==============================================================
   MOBILE MENU
============================================================== */

function initializeMobileMenu() {

  const button =
    $("mobile-menu-button");

  const navigation =
    $("mobile-navigation");


  if (
    !button ||
    !navigation
  ) {
    return;
  }


  button.addEventListener(
    "click",
    () => {

      const isOpen =
        navigation.classList.toggle(
          "open"
        );

      document.body.classList.toggle(
        "mobile-menu-open",
        navigation.classList.contains("open")
      );


      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      button.innerHTML = `

        <i data-lucide="${
          isOpen
            ? "x"
            : "menu"
        }"></i>

      `;


      refreshIcons();

    }
  );


  /*
  Close after navigation click
  */

  navigation.addEventListener(
    "click",
    event => {

      if (
        event.target.closest("a")
      ) {

        navigation.classList.remove(
          "open"
        );

        document.body.classList.remove(
          "mobile-menu-open"
        );

        button.setAttribute(
          "aria-expanded",
          "false"
        );


        button.innerHTML = `

          <i data-lucide="menu"></i>

        `;


        refreshIcons();

      }

    }
  );

}



/* ==============================================================
   RESPONSIVE MENU SAFETY
============================================================== */

function initializeResponsiveMenuSafety() {

  const navigation = $("mobile-navigation");
  const button = $("mobile-menu-button");

  if (!navigation || !button) {
    return;
  }

  const closeMenuIfDesktop = () => {

    if (window.innerWidth > 900) {

      navigation.classList.remove("open");

      document.body.classList.remove(
        "mobile-menu-open"
      );

      button.setAttribute("aria-expanded", "false");

      button.innerHTML = `
        <i data-lucide="menu"></i>
      `;

      refreshIcons();

    }

  };

  window.addEventListener(
    "resize",
    closeMenuIfDesktop,
    { passive: true }
  );

}

/* ==============================================================
   SMOOTH SCROLLING
============================================================== */

function initializeSmoothScrolling() {

  if (
    !SITE_CONFIG.theme.smoothScrolling
  ) {
    return;
  }


  document.addEventListener(
    "click",
    event => {

      const link =
        event.target.closest(
          'a[href^="#"]'
        );


      if (!link) {
        return;
      }


      const href =
        link.getAttribute(
          "href"
        );


      if (
        !href ||
        href === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(
          href
        );


      if (!target) {
        return;
      }


      /*
      Legal modals use their own handling.
      */

      if (
        href === "#privacy" ||
        href === "#disclaimer"
      ) {
        return;
      }


      event.preventDefault();


      target.scrollIntoView({
        behavior:
          "smooth",

        block:
          "start"
      });

    }
  );

}



/* ==============================================================
   BACK TO TOP
============================================================== */

function initializeBackToTop() {

  const button = $("back-to-top");

  if (!button) {
    return;
  }

  const updateVisibility = () => {

    const shouldShow = window.scrollY > 500;

    button.hidden = !shouldShow;
    button.classList.toggle("visible", shouldShow);

  };

  window.addEventListener(
    "scroll",
    updateVisibility,
    { passive: true }
  );

  button.addEventListener(
    "click",
    () => {
      window.scrollTo({
        top: 0,
        behavior: SITE_CONFIG.theme.smoothScrolling ? "smooth" : "auto"
      });
    }
  );

  updateVisibility();

}

/* ==============================================================
   MODALS
============================================================== */

function initializeModalHandling() {

  const links = [

    {
      href:
        "#privacy",

      modal:
        "privacy"
    },

    {
      href:
        "#disclaimer",

      modal:
        "disclaimer"
    }

  ];


  links.forEach(
    item => {

      document
        .querySelectorAll(
          `a[href="${item.href}"]`
        )
        .forEach(
          link => {

            link.addEventListener(
              "click",
              event => {

                event.preventDefault();

                openModal(
                  item.modal
                );

              }
            );

          }
        );

    }
  );


  document
    .querySelectorAll(
      ".legal-modal-close"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            closeAllModals();

          }
        );

      }
    );


  document
    .querySelectorAll(
      ".legal-modal"
    )
    .forEach(
      modal => {

        modal.addEventListener(
          "click",
          event => {

            if (
              event.target === modal
            ) {

              closeAllModals();

            }

          }
        );

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeAllModals();

      }

    }
  );

}


function openModal(id) {

  const modal =
    $(id);

  if (!modal) {
    return;
  }


  modal.hidden =
    false;

  document.body.classList.add(
    "modal-open"
  );

}


function closeAllModals() {

  document
    .querySelectorAll(
      ".legal-modal"
    )
    .forEach(
      modal => {

        modal.hidden =
          true;

      }
    );


  document.body.classList.remove(
    "modal-open"
  );

}


/* ==============================================================
   IMAGE FALLBACKS
============================================================== */

function initializeImageFallbacks() {

  document
    .querySelectorAll(
      "img"
    )
    .forEach(
      image => {

        image.addEventListener(
          "error",
          () => {

            image.classList.add(
              "image-error"
            );

          }
        );

      }
    );

}


/* ==============================================================
   ACCESSIBILITY
============================================================== */

function initializeKeyboardAccessibility() {

  /*
  Allow keyboard users to see focus clearly.

  The visual appearance itself is controlled by CSS.
  */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Tab"
      ) {

        document.body.classList.add(
          "keyboard-navigation"
        );

      }

    }
  );


  document.addEventListener(
    "mousedown",
    () => {

      document.body.classList.remove(
        "keyboard-navigation"
      );

    }
  );

}


/* ==============================================================
   LUCIDE ICONS
============================================================== */

function refreshIcons() {

  if (
    typeof lucide === "undefined"
  ) {
    return;
  }


  lucide.createIcons();

}


/* ==============================================================
   PAGE LOADER
============================================================== */

function hidePageLoader() {

  const loader =
    $("page-loader");


  if (!loader) {
    return;
  }


  window.setTimeout(
    () => {

      loader.classList.add(
        "hidden"
      );


      window.setTimeout(
        () => {

          loader.remove();

        },
        500
      );

    },
    150
  );

}


/* ==============================================================
   STRUCTURED DATA
============================================================== */

function renderStructuredData() {

  const brand =
    SITE_CONFIG.brand;

  const contact =
    SITE_CONFIG.contact;

  const office =
    SITE_CONFIG.office;

  const seo =
    SITE_CONFIG.seo;

  const website =
    SITE_CONFIG.website;


  const structuredData = {

    "@context":
      "https://schema.org",

    "@type":
      "AccountingService",

    "name":
      brand.firmName,

    "description":
      seo.description,

    "url":
      website.url,

    "telephone":
      contact.phone.display,

    "email":
      contact.email.display,

    "foundingDate":
      brand.establishedYear,

    "address": {

      "@type":
        "PostalAddress",

      "streetAddress":
        `${office.address.line1}, ${office.address.line2}`,

      "addressLocality":
        office.address.city,

      "addressRegion":
        office.address.state,

      "postalCode":
        office.address.pincode,

      "addressCountry":
        office.address.country

    },

    "areaServed": [

      {
        "@type":
          "City",

        "name":
          office.address.city

      },

      {
        "@type":
          "Country",

        "name":
          office.address.country

      }

    ],

    "sameAs":
      getAvailableSocialUrls(),

    "image":
      resolveAsset(
        seo.ogImage
      )

  };


  const element =
    $("structured-data");


  if (element) {

    element.textContent =
      JSON.stringify(
        structuredData
      );

  }

}


function getAvailableSocialUrls() {

  return Object.values(
    SITE_CONFIG.social
  )
    .filter(
      item =>
        item.enabled &&
        item.url
    )
    .map(
      item =>
        item.url
    );

}


/* ==============================================================
   UPDATE HEADER ACTIONS
============================================================== */

function initializeHeaderActions() {

  const whatsapp =
    getDefaultWhatsAppUrl();


  const headerWhatsApp =
    $("header-whatsapp");


  if (headerWhatsApp) {

    headerWhatsApp.href =
      whatsapp;

    headerWhatsApp.target =
      "_blank";

    headerWhatsApp.rel =
      "noopener";

  }


  setText(
    "header-whatsapp-label",
    SITE_CONFIG.social.whatsapp.shortLabel
  );

}


/* ==============================================================
   INITIALIZE STRUCTURED DATA + HEADER
============================================================== */


/*
We call these separately so that the rest of the application
remains modular.
*/

function initializeSecondarySystems() {

  renderStructuredData();

  initializeHeaderActions();

}


/* ==============================================================
   DOM READY
============================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initializeApplication();

    initializeSecondarySystems();

  }
);


/* ==============================================================
   WINDOW LOAD
============================================================== */

window.addEventListener(
  "load",
  () => {

    refreshIcons();

  }
);
