/* ================================================================
   PAVAN REDDY & CO.
   WEBSITE SCRIPT
   ================================================================

   ARCHITECTURE

   config.js  → content / configuration
   script.js  → behaviour
   index.html → structure
   style.css  → design

   IMPORTANT:
   - Keep website content in config.js wherever practical.
   - Keep behaviour here.
   - Avoid hardcoding business-specific information here.

================================================================ */


/* ================================================================
   01. GLOBAL APP STATE
================================================================ */

const APP = {

  currentTheme:
    "dark",

  initialized:
    false

};


/* ================================================================
   02. HELPERS
================================================================ */

function $(id) {

  return document.getElementById(id);

}


function setText(id, value) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.textContent =
    value ?? "";

}


function setHTML(id, value) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.innerHTML =
    value ?? "";

}


function setAttribute(
  id,
  attribute,
  value
) {

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


function setVisible(
  id,
  visible
) {

  const element =
    $(id);

  if (!element) {
    return;
  }

  element.hidden =
    !visible;

}


function escapeHTML(value) {

  return String(
    value ?? ""
  )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


function resolveAsset(path) {

  if (!path) {
    return "";
  }

  return path;

}


function refreshIcons() {

  if (
    window.lucide &&
    typeof window.lucide.createIcons ===
      "function"
  ) {

    window.lucide.createIcons();

  }

}


/* ================================================================
   03. URL HELPERS
================================================================ */

function getPhoneUrl() {

  return `tel:${SITE_CONFIG.contact.phone.value}`;

}


function getEmailUrl() {

  return `mailto:${SITE_CONFIG.contact.email.value}`;

}


function getMapsUrl() {

  return SITE_CONFIG.office.mapsUrl;

}


function getDefaultWhatsAppUrl() {

  const number =
    SITE_CONFIG.contact.whatsapp.value;

  const message =
    SITE_CONFIG.contact.whatsapp.defaultMessage ||
    "";

  return `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;

}


function getActionUrl(
  actionType
) {

  switch (
    actionType
  ) {

    case "phone":
      return getPhoneUrl();

    case "whatsapp":
      return getDefaultWhatsAppUrl();

    case "email":
      return getEmailUrl();

    case "maps":
      return getMapsUrl();

    default:
      return "#";

  }

}


function getAppointmentWhatsAppUrl() {

  const appointment =
    SITE_CONFIG.appointments;

  const number =
    SITE_CONFIG.contact.whatsapp.value;

  const message =
    appointment.message ||
    SITE_CONFIG.contact.whatsapp.defaultMessage ||
    "";

  return `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;

}


/* ================================================================
   04. NAVIGATION
================================================================ */

function renderNavigation() {

  const desktop =
    $("desktop-navigation");

  const mobile =
    $("mobile-navigation");

  const navigation =
    SITE_CONFIG.navigation || [];


  /*
  Desktop
  */

  if (desktop) {

    desktop.innerHTML =
      "";


    navigation.forEach(
      item => {

        const link =
          document.createElement("a");

        link.href =
          item.href === "#reviews"
            ? "#client-experiences"
            : item.href;

        link.textContent =
          item.label;

        desktop.appendChild(
          link
        );

      }
    );

  }


  /*
  Mobile
  */

  if (mobile) {

    mobile.innerHTML =
      "";


    navigation.forEach(
      item => {

        const link =
          document.createElement("a");

        link.href =
          item.href === "#reviews"
            ? "#client-experiences"
            : item.href;

        link.textContent =
          item.label;

        mobile.appendChild(
          link
        );

      }
    );


    /*
    WhatsApp action
    */

    const whatsapp =
      document.createElement("a");

    whatsapp.href =
      getDefaultWhatsAppUrl();

    whatsapp.className =
      "mobile-menu-whatsapp";

    whatsapp.target =
      "_blank";

    whatsapp.rel =
      "noopener";

    whatsapp.innerHTML = `

      <i data-lucide="message-circle"></i>

      <span>
        ${
          SITE_CONFIG.mobile.menuWhatsAppLabel ||
          "WhatsApp"
        }
      </span>

    `;

    mobile.appendChild(
      whatsapp
    );

  }


  refreshIcons();

}


/* ==============================================================
   NAVIGATION NORMALIZATION
============================================================== */

function normalizeNavigation() {

  const navigation =
    SITE_CONFIG.navigation || [];


  const hasClientExperiences =
    navigation.some(
      item =>
        item &&
        (
          item.href ===
            "#client-experiences" ||
          item.href ===
            "#reviews"
        )
    );


  if (!hasClientExperiences) {

    console.warn(
      'Add { label: "Client Experiences", href: "#client-experiences" } to SITE_CONFIG.navigation.'
    );

  }

}


/* ================================================================
   05. HEADER
================================================================ */

function renderHeader() {

  const brand =
    SITE_CONFIG.brand;


  /*
  Logo
  */

  setAttribute(
    "header-logo",
    "src",
    resolveAsset(
      brand.logo.dark
    )
  );


  setAttribute(
    "header-logo",
    "alt",
    brand.logo.alt
  );


  /*
  WhatsApp
  */

  const headerWhatsApp =
    $("header-whatsapp");

  if (headerWhatsApp) {

    headerWhatsApp.href =
      getDefaultWhatsAppUrl();

    headerWhatsApp.target =
      "_blank";

    headerWhatsApp.rel =
      "noopener";

  }


  /*
  Theme button
  */

  const themeToggle =
    $("theme-toggle");

  if (themeToggle) {

    themeToggle.setAttribute(
      "type",
      "button"
    );

  }

}


/* ================================================================
   06. HERO
================================================================ */

function renderHero() {

  const hero =
    SITE_CONFIG.sections.hero;

  const brand =
    SITE_CONFIG.brand;

  const office =
    SITE_CONFIG.office;


  /*
  Text
  */

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
    "hero-supporting",
    hero.supporting
  );


  setText(
    "hero-brand-line",
    hero.brandLine
  );


  /*
  Buttons
  */

  setText(
    "hero-call-label",
    hero.callLabel
  );


  setText(
    "hero-whatsapp-label",
    hero.whatsappLabel
  );


  setText(
    "hero-find-label",
    hero.findLabel
  );


  setAttribute(
    "hero-call",
    "href",
    getPhoneUrl()
  );


  setAttribute(
    "hero-whatsapp",
    "href",
    getDefaultWhatsAppUrl()
  );


  setAttribute(
    "hero-find",
    "href",
    getMapsUrl()
  );


  /*
  External links
  */

  [
    "hero-whatsapp",
    "hero-find"
  ]
    .forEach(
      id => {

        const element =
          $(id);

        if (element) {

          element.target =
            "_blank";

          element.rel =
            "noopener";

        }

      }
    );


  /*
  Hero image
  */

  if (
    hero.image &&
    hero.image.enabled
  ) {

    const image =
      $("hero-portrait-image");

    if (image) {

      image.src =
        resolveAsset(
          hero.image.src
        );

      image.alt =
        hero.image.alt || "";

      image.hidden =
        false;

    }

  }


  /*
  Established / practice
  */

  const heroLabels =
    SITE_CONFIG.ui?.heroLabels || {};


  setText(
    "hero-established",
    `${heroLabels.since || "Since"} ${
      brand.establishedYear
    }`
  );


  setText(
    "hero-established-label",
    heroLabels.practice ||
      "CA Practice"
  );


  setText(
    "hero-coverage-label",
    heroLabels.coverageLabel ||
      "WORK WITH US"
  );


  setText(
    "hero-coverage",
    office.coverage ||
      ""
  );

}


/* ================================================================
   07. QUICK ALERT
================================================================ */

function renderQuickAlert() {

  if (
    !SITE_CONFIG.features.quickAlert
  ) {

    setVisible(
      "quick-alert-section",
      false
    );

    return;

  }


  const alert =
    SITE_CONFIG.quickAlert;


  if (!alert) {

    setVisible(
      "quick-alert-section",
      false
    );

    return;

  }


  setText(
    "quick-alert-label",
    alert.label
  );


  setText(
    "quick-alert-message",
    alert.message
  );


  setText(
    "quick-alert-action-label",
    alert.actionLabel
  );


  const action =
    $("quick-alert-action");

  if (action) {

    action.href =
      alert.actionUrl ||
      getDefaultWhatsAppUrl();

    if (
      alert.external !== false
    ) {

      action.target =
        "_blank";

      action.rel =
        "noopener";

    }

  }

}


/* ================================================================
   08. SERVICES
================================================================ */

function renderServices() {

  if (
    !SITE_CONFIG.features.services
  ) {

    setVisible(
      "services",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.services;

  const services =
    SITE_CONFIG.services;


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
    (
      service,
      index
    ) => {

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "service-card";


      const details =
        Array.isArray(
          service.details
        )
          ? service.details
          : [];


      card.innerHTML = `

        <div class="service-card-top">

          <div class="service-icon">

            <i data-lucide="${escapeHTML(
              service.icon
            )}"></i>

          </div>

          <span class="service-number">

            ${String(
              index + 1
            ).padStart(
              2,
              "0"
            )}

          </span>

        </div>


        <h3>
          ${escapeHTML(
            service.title
          )}
        </h3>


        <p>
          ${escapeHTML(
            service.description
          )}
        </p>


        ${
          details.length
            ? `
              <ul class="service-details">

                ${details
                  .map(
                    detail => `
                      <li>

                        <i data-lucide="check"></i>

                        <span>
                          ${escapeHTML(
                            detail
                          )}
                        </span>

                      </li>
                    `
                  )
                  .join("")}

              </ul>
            `
            : ""
        }


        ${
          service.actionLabel
            ? `
              <a
                href="${escapeHTML(
                  service.actionUrl ||
                  "#contact"
                )}"
                class="service-action"
              >

                ${escapeHTML(
                  service.actionLabel
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


  /*
  Not sure card
  */

  const notSure =
    SITE_CONFIG.notSure;


  if (notSure) {

    setText(
      "not-sure-eyebrow",
      notSure.eyebrow
    );

    setText(
      "not-sure-title",
      notSure.title
    );

    setText(
      "not-sure-description",
      notSure.description
    );

    setText(
      "not-sure-button-label",
      notSure.buttonLabel
    );


    const button =
      $("not-sure-button");

    if (button) {

      button.href =
        notSure.buttonUrl ||
        getDefaultWhatsAppUrl();

      if (
        !notSure.buttonUrl ||
        notSure.external !== false
      ) {

        button.target =
          "_blank";

        button.rel =
          "noopener";

      }

    }

  }


  refreshIcons();

}


/* ================================================================
   09. WHO WE HELP
================================================================ */

function renderAudience() {

  if (
    !SITE_CONFIG.features.audience
  ) {

    setVisible(
      "who-we-help",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.audience;

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
        document.createElement(
          "article"
        );

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


        ${
          audience.actionLabel
            ? `
              <a
                href="${escapeHTML(
                  audience.actionUrl ||
                  "#contact"
                )}"
                class="audience-action"
              >

                ${escapeHTML(
                  audience.actionLabel
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


  /*
  Industries
  */

  const industries =
    SITE_CONFIG.industries;


  const industriesGrid =
    $("industries-grid");


  if (
    industriesGrid &&
    Array.isArray(
      industries
    )
  ) {

    industriesGrid.innerHTML =
      "";


    industries.forEach(
      industry => {

        const item =
          document.createElement(
            "div"
          );

        item.className =
          "industry-item";


        item.innerHTML = `

          <i data-lucide="${escapeHTML(
            industry.icon
          )}"></i>

          <span>
            ${escapeHTML(
              industry.label
            )}
          </span>

        `;


        industriesGrid.appendChild(
          item
        );

      }
    );

  }


  refreshIcons();

}


/* ================================================================
   10. CLIENT EXPERIENCES / REVIEWS
================================================================ */

function renderReviews() {

  if (
    !SITE_CONFIG.features.reviews
  ) {

    setVisible(
      "client-experiences",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.reviews;

  const reviews =
    SITE_CONFIG.reviews;


  setText(
    "reviews-eyebrow",
    section.eyebrow
  );


  setText(
    "reviews-title",
    section.title
  );


  setText(
    "reviews-description",
    section.description
  );


  const action =
    $("reviews-action");

  if (action) {

    action.textContent =
      section.actionLabel ||
      "";


    action.href =
      SITE_CONFIG.social?.googleReviews?.url ||
      "#";


    if (
      action.href !== "#"
    ) {

      action.target =
        "_blank";

      action.rel =
        "noopener";

    }

  }


  const grid =
    $("testimonials-grid");

  const empty =
    $("reviews-empty");


  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  if (
    !Array.isArray(
      reviews
    ) ||
    reviews.length === 0
  ) {

    if (empty) {

      empty.hidden =
        false;


      const paragraph =
        empty.querySelector(
          "p"
        );


      if (paragraph) {

        paragraph.textContent =
          SITE_CONFIG.reviews.emptyMessage ||
          "We're collecting genuine client experiences. Check back soon.";

      }

    }

    return;

  }


  if (empty) {

    empty.hidden =
      true;

  }


  reviews.forEach(
    review => {

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "testimonial-card";


      const rating =
        Math.max(
          0,
          Math.min(
            5,
            Number(
              review.rating ||
              5
            )
          )
        );


      card.innerHTML = `

        <div
          class="testimonial-stars"
          aria-label="${rating} out of 5 stars"
        >

          ${Array.from(
            {
              length: 5
            },
            (
              _,
              index
            ) =>
              `
                <i
                  data-lucide="star"
                  class="${
                    index < rating
                      ? "filled"
                      : ""
                  }"
                ></i>
              `
          ).join("")}

        </div>


        <blockquote>

          “${escapeHTML(
            review.text ||
            review.quote ||
            ""
          )}”

        </blockquote>


        <div class="testimonial-author">

          <strong>
            ${escapeHTML(
              review.name ||
              ""
            )}
          </strong>


          ${
            review.role
              ? `
                <span>
                  ${escapeHTML(
                    review.role
                  )}
                </span>
              `
              : ""
          }


          ${
            review.location
              ? `
                <small>
                  ${escapeHTML(
                    review.location
                  )}
                </small>
              `
              : ""
          }

        </div>

      `;


      grid.appendChild(
        card
      );

    }
  );


  refreshIcons();

}


/* ================================================================
   11. STORY
================================================================ */

function renderStory() {

  if (
    !SITE_CONFIG.features.story
  ) {

    setVisible(
      "our-story",
      false
    );

    return;

  }


  const section =
    SITE_CONFIG.sections.story;

  const story =
    SITE_CONFIG.story;


  setText(
    "story-eyebrow",
    section.eyebrow
  );


  setText(
    "story-title",
    section.title
  );


  setText(
    "story-description",
    section.description
  );


  const timeline =
    $("career-timeline");


  if (!timeline) {
    return;
  }


  timeline.innerHTML =
    "";


  story.timeline.forEach(
    (
      item,
      index
    ) => {

      const article =
        document.createElement(
          "article"
        );

      article.className =
        "career-item";


      article.innerHTML = `

        <div class="career-number">

          ${String(
            index + 1
          ).padStart(
            2,
            "0"
          )}

        </div>


        <div class="career-icon">

          <i data-lucide="${escapeHTML(
            item.icon
          )}"></i>

        </div>


        <div class="career-content">

          ${
            item.organisation
              ? `
                <span class="career-organisation">
                  ${escapeHTML(
                    item.organisation
                  )}
                </span>
              `
              : ""
          }


          <h3>
            ${escapeHTML(
              item.title
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
        article
      );

    }
  );


  /*
  Countries
  */

  const countries =
    story.countries || [];


  const countriesContainer =
    $("countries");


  if (countriesContainer) {

    countriesContainer.innerHTML =
      "";


    countries.forEach(
      country => {

        const span =
          document.createElement(
            "span"
          );

        span.textContent =
          country;

        countriesContainer.appendChild(
          span
        );

      }
    );

  }


  setText(
    "countries-label",
    story.countriesLabel
  );


  refreshIcons();

}


/* ================================================================
   12. DIGITAL OFFICE
================================================================ */

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
    SITE_CONFIG.sections.digitalOffice;

  const digital =
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


  const benefits =
    $("digital-benefits");


  if (benefits) {

    benefits.innerHTML =
      "";


    digital.benefits.forEach(
      benefit => {

        const item =
          document.createElement(
            "div"
          );

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


        benefits.appendChild(
          item
        );

      }
    );

  }


  setText(
    "digital-closing-line",
    digital.closingLine
  );


  refreshIcons();

}


/* ================================================================
   13. START HERE
================================================================ */

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
    SITE_CONFIG.sections.startHere;

  const start =
    SITE_CONFIG.startHere;


  setText(
    "start-here-eyebrow",
    section.eyebrow
  );


  setText(
    "start-here-title",
    section.title
  );


  setText(
    "start-here-description",
    section.description
  );


  /*
  Steps
  */

  const steps =
    $("start-steps");


  if (steps) {

    steps.innerHTML =
      "";


    start.steps.forEach(
      (
        step,
        index
      ) => {

        const article =
          document.createElement(
            "article"
          );

        article.className =
          "start-step";


        article.innerHTML = `

          <span class="start-step-number">

            ${
              step.number ||
              String(
                index + 1
              ).padStart(
                2,
                "0"
              )
            }

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
          article
        );

      }
    );

  }


  /*
  WhatsApp options
  */

  const options =
    $("whatsapp-options");


  if (options) {

    options.innerHTML =
      "";


    start.whatsappOptions.forEach(
      option => {

        const button =
          document.createElement(
            "button"
          );

        button.type =
          "button";

        button.className =
          "whatsapp-option";


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

            options
              .querySelectorAll(
                ".whatsapp-option"
              )
              .forEach(
                item =>
                  item.classList.remove(
                    "selected"
                  )
              );


            button.classList.add(
              "selected"
            );


            const result =
              $("whatsapp-option-result");


            const resultText =
              $("whatsapp-option-result-text");


            if (result) {

              result.hidden =
                false;

            }


            if (resultText) {

              resultText.textContent =
                option.result ||
                option.label;

            }


            const resultButton =
              $("whatsapp-option-button");


            if (resultButton) {

              const number =
                SITE_CONFIG.contact.whatsapp.value;


              const message =
                option.message ||
                SITE_CONFIG.contact.whatsapp.defaultMessage ||
                "";


              resultButton.href =
                `https://wa.me/${number}?text=${encodeURIComponent(
                  message
                )}`;


              resultButton.target =
                "_blank";

              resultButton.rel =
                "noopener";

            }

          }
        );


        options.appendChild(
          button
        );

      }
    );

  }


  setText(
    "start-reassurance",
    start.reassurance
  );


  refreshIcons();

}


/* ================================================================
   14. UPDATES
================================================================ */

function renderUpdates(
  updates = []
) {

  const section =
    SITE_CONFIG.sections.updates;


  setText(
    "updates-eyebrow",
    section.eyebrow
  );


  setText(
    "updates-title",
    section.title
  );


  setText(
    "updates-description",
    section.description
  );


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
    !Array.isArray(
      updates
    ) ||
    updates.length === 0
  ) {

    if (empty) {

      empty.hidden =
        false;

    }

    return;

  }


  if (empty) {

    empty.hidden =
      true;

  }


  updates.forEach(
    update => {

      const card =
        document.createElement(
          "article"
        );

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
                  ${escapeHTML(
                    date
                  )}
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
                href="${escapeHTML(
                  update.link
                )}"
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


  refreshIcons();

}


function initializeUpdates() {

  /*
  Website starts with configured fallback state.

  Google Sheet integration can be connected later without
  changing the HTML architecture.
  */

  renderUpdates([]);


  if (
    SITE_CONFIG.updates &&
    SITE_CONFIG.updates.sheetUrl
  ) {

    fetchUpdatesFromSheet();

  }

}


async function fetchUpdatesFromSheet() {

  /*
  Actual Google Sheet publishing/fetching method can be
  connected once the Sheet structure is finalized.
  */

  try {

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


function formatUpdateDate(
  dateValue
) {

  const date =
    new Date(
      dateValue
    );


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


/* ================================================================
   15. CONTACT METHODS
================================================================ */

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
        document.createElement(
          "article"
        );

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
          href="${escapeHTML(
            url
          )}"
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


  refreshIcons();

}


/* ================================================================
   16. APPOINTMENT
================================================================ */

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


  button.innerHTML = `

    ${escapeHTML(
      appointment.label
    )}

    <i data-lucide="arrow-right"></i>

  `;


  button.href =
    getAppointmentWhatsAppUrl();


  button.target =
    "_blank";

  button.rel =
    "noopener";


  refreshIcons();

}


/* ================================================================
   17. FAQ
================================================================ */

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
    (
      item,
      index
    ) => {

      const wrapper =
        document.createElement(
          "div"
        );

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
            String(
              !expanded
            )
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


  refreshIcons();

}


/* ================================================================
   18. CONTACT
================================================================ */

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
      ${escapeHTML(
        address.line1
      )}<br>

      ${escapeHTML(
        address.line2
      )}<br>

      ${escapeHTML(
        address.city
      )}
      – ${escapeHTML(
        address.pincode
      )}<br>

      ${escapeHTML(
        address.state
      )},
      ${escapeHTML(
        address.country
      )}
    `
  );


  const landmark =
    $("contact-landmark");


  if (landmark) {

    const span =
      landmark.querySelector(
        "span"
      );


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
    .forEach(
      id => {

        const element =
          $(id);


        if (element) {

          element.target =
            "_blank";

          element.rel =
            "noopener";

        }

      }
    );

}


/* ================================================================
   19. FOOTER
================================================================ */

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
    uiLabels.footerExplore ||
      "Explore"
  );


  setText(
    "footer-social-title",
    uiLabels.footerSocial ||
      "Find us online"
  );


  setText(
    "footer-contact-title",
    uiLabels.footerContact ||
      "Talk to us"
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
          document.createElement(
            "a"
          );


        link.href =
          item.href === "#reviews"
            ? "#client-experiences"
            : item.href;


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


/* ================================================================
   20. SOCIAL LINKS
================================================================ */

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
      (
        [key, item]
      ) => {

        if (
          !item.enabled ||
          !item.url
        ) {
          return;
        }


        const link =
          document.createElement(
            "a"
          );


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


  refreshIcons();

}


/* ================================================================
   21. LEGAL
================================================================ */

function renderLegal() {

  const privacy =
    SITE_CONFIG.legal.privacyPolicy;

  const disclaimer =
    SITE_CONFIG.legal.disclaimer;


  /*
  Privacy
  */

  if (
    privacy.enabled
  ) {

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

  if (
    disclaimer.enabled
  ) {

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


/* ================================================================
   22. MOBILE ACTIONS
================================================================ */

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
        document.createElement(
          "a"
        );


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


  refreshIcons();

}


/* ================================================================
   23. THEME
================================================================ */

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
          .getAttribute(
            "data-theme"
          );


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


function applyTheme(
  theme
) {

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


/* ================================================================
   24. MOBILE MENU
================================================================ */

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
        isOpen
      );


      button.setAttribute(
        "aria-expanded",
        String(
          isOpen
        )
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
        event.target.closest(
          "a"
        )
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


/* ================================================================
   25. RESPONSIVE MENU SAFETY
================================================================ */

function initializeResponsiveMenuSafety() {

  const navigation =
    $("mobile-navigation");

  const button =
    $("mobile-menu-button");


  if (
    !navigation ||
    !button
  ) {

    return;

  }


  const closeMenuIfDesktop =
    () => {

      if (
        window.innerWidth >
        900
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

    };


  window.addEventListener(
    "resize",
    closeMenuIfDesktop,
    {
      passive:
        true
    }
  );

}


/* ================================================================
   26. SMOOTH SCROLLING
================================================================ */

function initializeSmoothScrolling() {

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


      event.preventDefault();


      target.scrollIntoView(
        {
          behavior:
            SITE_CONFIG.theme.smoothScrolling
              ? "smooth"
              : "auto",

          block:
            "start"
        }
      );


      /*
      Update URL without forcing a jump.
      */

      try {

        history.pushState(
          null,
          "",
          href
        );

      }
      catch (
        error
      ) {

        console.warn(
          "Unable to update URL.",
          error
        );

      }

    }
  );

}


/* ================================================================
   27. BACK TO TOP
================================================================ */

function initializeBackToTop() {

  const button =
    $("back-to-top");


  if (!button) {
    return;
  }


  const updateVisibility =
    () => {

      const shouldShow =
        window.scrollY >
        500;


      button.hidden =
        !shouldShow;


      button.classList.toggle(
        "visible",
        shouldShow
      );

    };


  window.addEventListener(
    "scroll",
    updateVisibility,
    {
      passive:
        true
    }
  );


  button.addEventListener(
    "click",
    () => {

      window.scrollTo(
        {
          top:
            0,

          behavior:
            SITE_CONFIG.theme.smoothScrolling
              ? "smooth"
              : "auto"
        }
      );

    }
  );


  updateVisibility();

}


/* ================================================================
   28. LEGAL MODALS
================================================================ */

function initializeLegalModals() {

  const modalTriggers =
    document.querySelectorAll(
      "[data-legal-modal]"
    );


  modalTriggers.forEach(
    trigger => {

      trigger.addEventListener(
        "click",
        event => {

          event.preventDefault();


          const modalId =
            trigger.getAttribute(
              "data-legal-modal"
            );


          const modal =
            $(modalId);


          if (!modal) {
            return;
          }


          modal.hidden =
            false;


          document.body.classList.add(
            "modal-open"
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

            const modal =
              button.closest(
                ".legal-modal"
              );


            if (!modal) {
              return;
            }


            modal.hidden =
              true;


            document.body.classList.remove(
              "modal-open"
            );

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
              event.target ===
              modal
            ) {

              modal.hidden =
                true;


              document.body.classList.remove(
                "modal-open"
              );

            }

          }
        );

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      document
        .querySelectorAll(
          ".legal-modal:not([hidden])"
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
  );

}


/* ================================================================
   29. IMAGE FALLBACKS
================================================================ */

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


/* ================================================================
   30. ACTIVE NAVIGATION
================================================================ */

function initializeActiveNavigation() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const links =
    document.querySelectorAll(
      ".desktop-navigation a, .mobile-navigation a"
    );


  if (
    !sections.length ||
    !links.length
  ) {

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            const id =
              entry.target.id;


            links.forEach(
              link => {

                const href =
                  link.getAttribute(
                    "href"
                  );


                link.classList.toggle(
                  "active",
                  href ===
                    `#${id}`
                );

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-25% 0px -65% 0px"
      }
    );


  sections.forEach(
    section =>
      observer.observe(
        section
      )
  );

}


/* ================================================================
   31. PAGE LOADER
================================================================ */

function initializePageLoader() {

  const loader =
    $("page-loader");


  if (!loader) {
    return;
  }


  window.addEventListener(
    "load",
    () => {

      window.setTimeout(
        () => {

          loader.classList.add(
            "hidden"
          );

        },
        250
      );

    }
  );

}


/* ================================================================
   32. INITIAL PAGE SETUP
================================================================ */

function initializePage() {

  if (
    APP.initialized
  ) {

    return;

  }


  /*
  Configuration safety
  */

  if (
    typeof SITE_CONFIG ===
    "undefined"
  ) {

    console.error(
      "SITE_CONFIG is not available. Make sure config.js loads before script.js."
    );

    return;

  }


  APP.initialized =
    true;


  /*
  Theme first
  */

  initializeTheme();


  /*
  Header
  */

  renderHeader();


  /*
  Navigation
  */

  normalizeNavigation();

  renderNavigation();


  /*
  Page sections
  */

  renderHero();

  renderQuickAlert();

  renderServices();

  renderAudience();

  renderReviews();

  renderStory();

  renderDigitalOffice();

  renderStartHere();

  initializeUpdates();

  renderContactMethods();

  renderAppointment();

  renderFAQ();

  renderContact();

  renderFooter();

  renderLegal();

  renderMobileActions();


  /*
  Behaviour
  */

  initializeMobileMenu();

  initializeResponsiveMenuSafety();

  initializeSmoothScrolling();

  initializeBackToTop();

  initializeLegalModals();

  initializeImageFallbacks();

  initializeActiveNavigation();

  initializePageLoader();


  /*
  Icons
  */

  refreshIcons();

}


/* ================================================================
   33. START
================================================================ */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializePage
  );

}
else {

  initializePage();

}
