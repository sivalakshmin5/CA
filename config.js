/*
==========================================================
 PAVAN REDDY & CO. — WEBSITE CONFIGURATION
==========================================================

 This is the MAIN configuration file for the website.

 You should normally edit this file when changing:

 ✓ Business information
 ✓ Phone / WhatsApp / Email
 ✓ Office address & timings
 ✓ Google Maps / Google Business / Reviews
 ✓ Social media links
 ✓ Website URL
 ✓ Images
 ✓ Services
 ✓ Who We Help
 ✓ WhatsApp quick-contact messages
 ✓ Google Sheet updates
 ✓ SEO information
 ✓ Analytics
 ✓ Feature switches
 ✓ Theme settings

 IMPORTANT:
 - Do NOT put passwords, API keys or private credentials here.
 - Blank URLs are intentional until the real links are available.
 - The website will hide social buttons whose URL is blank.
==========================================================
*/


const SITE_CONFIG = {


  /* =====================================================
     1. BUSINESS / BRAND
  ===================================================== */

  business: {

    name:
      "Pavan Reddy & Co.",

    shortName:
      "Pavan Reddy & Co.",

    designation:
      "CHARTERED ACCOUNTANTS",

    establishedYear:
      "2018",

    heroEyebrow:
      "CHARTERED ACCOUNTANTS • TAX • BUSINESS & FINANCE",

    heroTitle:
      "Got a tax or business headache? Let's sort it out.",

    heroDescription:
      "From tax returns and GST to accounts, finance and business decisions — tell us what's going on. We'll help you figure out what to do next.",

    heroSupportingText:
      "Proddatur · Serving clients across India · NRI support",

    brandLine:
      "Tax, GST, Accounts & Business — sorted.",

    heroPrimaryCTA:
      "WhatsApp Us",

    heroSecondaryCTA:
      "Call Us"
  },


  /* =====================================================
     2. CONTACT
  ===================================================== */

  contact: {

    phoneDisplay:
      "+91 91107 27236",

    phoneLink:
      "tel:+919110727236",

    whatsappNumber:
      "919110727236",

    whatsappDisplay:
      "+91 91107 27236",

    email:
      "pavanca@gmail.com",

    emailLink:
      "mailto:pavanca@gmail.com",

    whatsappDefaultMessage:
      "Hi Pavan Reddy & Co., I'd like to discuss a requirement."
  },


  /* =====================================================
     3. OFFICE / LOCATION
  ===================================================== */

  office: {

    addressLine1:
      "Ground Floor, Sai Ram Paradise",

    addressLine2:
      "Aravind Ashram Road, YMR Colony",

    city:
      "Proddatur",

    district:
      "YSR Kadapa District",

    state:
      "Andhra Pradesh",

    pincode:
      "516360",

    country:
      "India",

    landmark:
      "Near Satya Narayana Swamy Temple",

    mapsUrl:
      "https://maps.app.goo.gl/uLCC9TvLqffiFw4M7",

    openingTime:
      "9:30 AM",

    closingTime:
      "6:30 PM",

    workingHours:
      "9:30 AM–6:30 PM",

    closedNote:
      "Public holidays closed",

    visitPolicy:
      "Walk-ins welcome · Appointments preferred",

    consultationNote:
      "Appointments are preferred for dedicated consultations."
  },


  /* =====================================================
     4. SERVICE AREA / COVERAGE
  ===================================================== */

  coverage: {

    local:
      "Proddatur & surrounding areas",

    india:
      "Clients across India",

    nri:
      "NRI clients",

    supportingText:
      "Proddatur · India-wide · NRI support"
  },


  /* =====================================================
     5. LANGUAGES
  ===================================================== */

  languages: [

    "English",
    "Telugu",
    "Hindi",
    "Tamil"

  ],


  /* =====================================================
     6. SOCIAL & ONLINE PRESENCE

     enabled:
       true  = show the item
       false = hide the item

     url:
       Leave blank until the real profile/link exists.

     icon:
       Used by the website icon system.
  ===================================================== */

  social: {

    googleBusiness: {

      enabled: true,

      label:
        "Google Business",

      shortLabel:
        "Google",

      icon:
        "google",

      url:
        ""
    },


    googleReviews: {

      enabled: true,

      label:
        "Google Reviews",

      shortLabel:
        "Reviews",

      icon:
        "star",

      url:
        ""
    },


    googleMaps: {

      enabled: true,

      label:
        "Get Directions",

      shortLabel:
        "Directions",

      icon:
        "map-pin",

      url:
        "https://maps.app.goo.gl/uLCC9TvLqffiFw4M7"
    },


    whatsapp: {

      enabled: true,

      label:
        "WhatsApp",

      shortLabel:
        "WhatsApp",

      icon:
        "whatsapp",

      url:
        ""
    },


    instagram: {

      enabled: true,

      label:
        "Instagram",

      shortLabel:
        "Instagram",

      icon:
        "instagram",

      url:
        ""
    },


    facebook: {

      enabled: true,

      label:
        "Facebook",

      shortLabel:
        "Facebook",

      icon:
        "facebook",

      url:
        ""
    },


    linkedin: {

      enabled: false,

      label:
        "LinkedIn",

      shortLabel:
        "LinkedIn",

      icon:
        "linkedin",

      url:
        ""
    },


    youtube: {

      enabled: false,

      label:
        "YouTube",

      shortLabel:
        "YouTube",

      icon:
        "youtube",

      url:
        ""
    },


    email: {

      enabled: true,

      label:
        "Email",

      shortLabel:
        "Email",

      icon:
        "mail",

      url:
        "mailto:pavanca@gmail.com"
    }

  },


  /* =====================================================
     7. WEBSITE SETTINGS
  ===================================================== */

  website: {

    name:
      "Pavan Reddy & Co.",

    url:
      "https://sivalakshmi5.github.io/PavanCA/",

    language:
      "en",

    country:
      "IN",

    defaultTheme:
      "dark",

    allowThemeToggle:
      true,

    rememberTheme:
      true,

    scrollBehavior:
      "smooth"
  },


  /* =====================================================
     8. NAVIGATION
  ===================================================== */

  navigation: [

    {
      id: "services",
      label: "What We Do",
      href: "#services"
    },

    {
      id: "who-we-help",
      label: "Who We Help",
      href: "#who-we-help"
    },

    {
      id: "our-story",
      label: "Our Story",
      href: "#our-story"
    },

    {
      id: "updates",
      label: "Updates",
      href: "#updates"
    },

    {
      id: "faq",
      label: "FAQ",
      href: "#faq"
    },

    {
      id: "contact",
      label: "Contact",
      href: "#contact"
    }

  ],


  /* =====================================================
     9. SERVICES
  ===================================================== */

  services: [

    {

      id: "tax",

      title:
        "Tax & Income Tax",

      icon:
        "landmark",

      shortDescription:
        "Tax returns, planning, notices and practical tax guidance.",

      details: [

        "Income Tax Return Filing",
        "Income Tax Consultation",
        "Tax Planning",
        "Income Tax Notices & Representation",
        "Tax Audit"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I need help with Income Tax."

    },


    {

      id: "gst",

      title:
        "GST",

      icon:
        "receipt",

      shortDescription:
        "GST registration, returns, compliance, reconciliation and notices.",

      details: [

        "GST Registration",
        "GST Return Filing",
        "GST Compliance",
        "GST Reconciliation",
        "GST Notices & Representation"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I need help with GST."

    },


    {

      id: "accounts",

      title:
        "Accounts & Compliance",

      icon:
        "calculator",

      shortDescription:
        "Accounting, bookkeeping, TDS, payroll and regular compliance support.",

      details: [

        "Accounting & Bookkeeping",
        "TDS Return Filing",
        "Financial Statements",
        "Payroll",
        "Compliance Support"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I need help with Accounts & Compliance."

    },


    {

      id: "audit",

      title:
        "Audit & Assurance",

      icon:
        "search-check",

      shortDescription:
        "Audit and assurance support for businesses and organisations.",

      details: [

        "Statutory Audit",
        "Tax Audit",
        "Internal Audit"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I need help with Audit."

    },


    {

      id: "business",

      title:
        "Business & Finance Advisory",

      icon:
        "briefcase-business",

      shortDescription:
        "Business guidance, financial planning, MIS and management reporting.",

      details: [

        "Business Registration",
        "Project Reports",
        "Financial Planning",
        "Business Advisory",
        "MIS / Management Reporting"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss my business."

    },


    {

      id: "cfo",

      title:
        "CFO & Outsourced Finance",

      icon:
        "chart-no-axes-combined",

      shortDescription:
        "Virtual CFO, outsourced finance, MIS and management support.",

      details: [

        "Virtual CFO",
        "Outsourced CFO",
        "Finance & Accounts Outsourcing",
        "MIS Reporting",
        "Management Reporting",
        "Financial Planning",
        "Business Finance Support"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss CFO / outsourced finance support."

    },


    {

      id: "nri",

      title:
        "NRI & International Services",

      icon:
        "globe",

      shortDescription:
        "Support for NRIs and suitable cross-border tax and compliance matters.",

      details: [

        "NRI Taxation",
        "International Taxation",
        "Cross-border Compliance",
        "Related Tax Advisory"
      ],

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'm an NRI and would like to discuss a requirement."

    }

  ],


  /* =====================================================
     10. WHO WE HELP
  ===================================================== */

  audiences: [

    {

      id: "individuals",

      title:
        "Individuals",

      icon:
        "user-round",

      description:
        "ITR filing, tax questions, notices, TDS and personal tax matters.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I need help with a personal tax matter."

    },


    {

      id: "professionals",

      title:
        "Professionals",

      icon:
        "user-cog",

      description:
        "Tax, GST, accounts and compliance support for professionals.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'm a professional and would like to discuss my requirement."

    },


    {

      id: "small-businesses",

      title:
        "Small Businesses",

      icon:
        "store",

      description:
        "Practical support for GST, accounts, tax and everyday compliance.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss my small business."

    },


    {

      id: "startups",

      title:
        "Startups",

      icon:
        "rocket",

      description:
        "Support as you start, organise and grow your business.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss my startup."

    },


    {

      id: "growing-businesses",

      title:
        "Growing Businesses",

      icon:
        "trending-up",

      description:
        "MIS, reporting, finance planning and CFO-level support.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss my growing business."

    },


    {

      id: "companies",

      title:
        "Companies & Corporates",

      icon:
        "building-2",

      description:
        "Audit, accounting, tax, compliance and business support.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss our company's requirement."

    },


    {

      id: "nris",

      title:
        "NRIs",

      icon:
        "plane",

      description:
        "Indian tax and related financial matters handled remotely where suitable.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'm an NRI and would like to discuss a requirement."

    },


    {

      id: "organisations",

      title:
        "Trusts, Societies & NGOs",

      icon:
        "heart-handshake",

      description:
        "Accounting, audit, tax and compliance support.",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss our organisation's requirement."

    }

  ],


  /* =====================================================
     11. INDUSTRIES / SECTORS
  ===================================================== */

  industries: [

    {
      title: "Manufacturing",
      icon: "factory"
    },

    {
      title: "Trading & Retail",
      icon: "shopping-bag"
    },

    {
      title: "Construction & Real Estate",
      icon: "building"
    },

    {
      title: "Transport & Logistics",
      icon: "truck"
    },

    {
      title: "Healthcare",
      icon: "heart-pulse"
    },

    {
      title: "Education",
      icon: "graduation-cap"
    },

    {
      title: "IT & Professional Services",
      icon: "laptop"
    },

    {
      title: "Hospitality & Food",
      icon: "utensils"
    },

    {
      title: "Agriculture & Allied Businesses",
      icon: "sprout"
    },

    {
      title: "Finance & Financial Services",
      icon: "banknote"
    },

    {
      title: "Startups & New Businesses",
      icon: "rocket"
    },

    {
      title: "Trusts, Societies & NGOs",
      icon: "hand-heart"
    }

  ],


  /* =====================================================
     12. PROFESSIONAL STORY
  ===================================================== */

  professionalStory: {

    sectionEyebrow:
      "THE PERSON BEHIND THE PRACTICE",

    title:
      "CA expertise. Business experience. Technology mindset.",

    introduction:
      "Pavan Reddy combines Chartered Accountancy with experience in banking, technology and business processes.",

    currentRole:
      "Chartered Accountant & Founder",

    education:
      "B.Com. (Computers)",

    career: [

      {

        organisation:
          "ICICI Bank",

        role:
          "Bank Manager",

        icon:
          "landmark",

        description:
          "Experience in banking, finance and understanding how businesses operate."

      },


      {

        organisation:
          "Infosys",

        role:
          "Business Analyst — Finacle",

        icon:
          "monitor-smartphone",

        description:
          "Worked on the Finacle banking product with professional exposure across India, Denmark, the UK and Australia."

      },


      {

        organisation:
          "2018 → Today",

        role:
          "CA Practice",

        icon:
          "briefcase",

        description:
          "Bringing banking, technology and business-process experience into Chartered Accountancy practice."

      }

    ],

    countries: [

      "India",
      "Denmark",
      "UK",
      "Australia"

    ],

    expertiseNote:
      "Strong practical expertise in software, automation and digital workflows."
  },


  /* =====================================================
     13. DIGITAL / PAPERLESS OFFICE
  ===================================================== */

  digitalOffice: {

    sectionEyebrow:
      "HOW WE WORK",

    title:
      "We don't run a paper-heavy CA office.",

    description:
      "Our office works largely through cloud-based workflows and digital collaboration.",

    benefits: [

      {

        title:
          "Cloud-based",

        icon:
          "cloud",

        description:
          "Shared cloud data helps our team work together without depending on files stored on individual desktops."

      },


      {

        title:
          "Less paperwork",

        icon:
          "file-check",

        description:
          "Clients can share invoices and documents digitally through Google Drive and suitable online workflows."

      },


      {

        title:
          "Work from anywhere",

        icon:
          "globe-2",

        description:
          "Digital workflows make it easier to work with clients across India and for suitable NRI services."

      }

    ],

    closingLine:
      "Technology should make your CA experience easier — not more complicated."
  },


  /* =====================================================
     14. START HERE / QUICK CONTACT
  ===================================================== */

  startHere: {

    title:
      "Not sure where to begin? Start here.",

    description:
      "You don't need to know the right CA term or prepare a perfect explanation. Just tell us what's going on.",

    steps: [

      {

        number:
          "01",

        title:
          "Tell us what's going on",

        description:
          "Call, WhatsApp, walk in or request an online consultation."

      },


      {

        number:
          "02",

        title:
          "We'll understand what you need",

        description:
          "We'll ask the relevant questions and explain things in simple language."

      },


      {

        number:
          "03",

        title:
          "Decide the next step",

        description:
          "We'll explain the work involved, documents needed and what happens next."

      }

    ],

    reassurance:
      "You don't have to know everything before you call us. That's our job."
  },


  /* =====================================================
     15. WHATSAPP QUICK OPTIONS
  ===================================================== */

  whatsappOptions: [

    {

      id:
        "tax",

      label:
        "Tax",

      icon:
        "landmark",

      message:
        "Hi Pavan Reddy & Co., I need help with Tax."

    },


    {

      id:
        "gst",

      label:
        "GST",

      icon:
        "receipt",

      message:
        "Hi Pavan Reddy & Co., I need help with GST."

    },


    {

      id:
        "accounts",

      label:
        "Accounts",

      icon:
        "calculator",

      message:
        "Hi Pavan Reddy & Co., I need help with Accounts."

    },


    {

      id:
        "audit",

      label:
        "Audit",

      icon:
        "search-check",

      message:
        "Hi Pavan Reddy & Co., I need help with Audit."

    },


    {

      id:
        "business",

      label:
        "Business",

      icon:
        "briefcase-business",

      message:
        "Hi Pavan Reddy & Co., I'd like to discuss my business."

    },


    {

      id:
        "finance",

      label:
        "Finance / CFO",

      icon:
        "chart-no-axes-combined",

      message:
        "Hi Pavan Reddy & Co., I'd like to discuss Finance / CFO support."

    },


    {

      id:
        "nri",

      label:
        "NRI",

      icon:
        "globe",

      message:
        "Hi Pavan Reddy & Co., I'm an NRI and would like to discuss a requirement."

    },


    {

      id:
        "not-sure",

      label:
        "Not sure",

      icon:
        "circle-help",

      message:
        "Hi Pavan Reddy & Co., I need some help but I'm not sure which service I need. Can I explain my requirement?"

    }

  ],


  /* =====================================================
     16. HOW WE WORK
  ===================================================== */

  contactMethods: [

    {

      id:
        "walk-in",

      title:
        "Walk In",

      icon:
        "building-2",

      description:
        "Prefer face-to-face? Come over. Walk-ins are welcome.",

      actionLabel:
        "Get Directions",

      actionType:
        "maps"

    },


    {

      id:
        "call",

      title:
        "Call",

      icon:
        "phone",

      description:
        "Have a quick question? Give us a call.",

      actionLabel:
        "Call Us",

      actionType:
        "phone"

    },


    {

      id:
        "whatsapp",

      title:
        "WhatsApp",

      icon:
        "whatsapp",

      description:
        "Prefer to message? Send us your question.",

      actionLabel:
        "WhatsApp Us",

      actionType:
        "whatsapp"

    },


    {

      id:
        "online",

      title:
        "Online",

      icon:
        "video",

      description:
        "Not in Proddatur? Phone, video and digital document sharing are available for suitable work.",

      actionLabel:
        "Talk to Us",

      actionType:
        "whatsapp"

    }

  ],


  /* =====================================================
     17. APPOINTMENTS
  ===================================================== */

  appointments: {

    enabled:
      true,

    title:
      "Need dedicated time to discuss your requirement?",

    description:
      "Appointments are preferred for longer consultations.",

    buttonLabel:
      "Request an Appointment",

    method:
      "whatsapp",

    whatsappMessage:
      "Hi Pavan Reddy & Co., I'd like to request an appointment."
  },


  /* =====================================================
     18. REVIEWS / TESTIMONIALS
  ===================================================== */

  reviews: {

    enabled:
      true,

    sectionTitle:
      "What our clients say",

    sectionDescription:
      "Real experiences from people and businesses we've worked with.",

    googleCTA:
      "See our Google Reviews",

    googleReviewsUrl:
      "",

    /* IMPORTANT:
       Only add genuine testimonials here.
       Do not create fictional reviews.
    */

    testimonials: [

      /*
      Example format:

      {
        quote: "Genuine client testimonial goes here.",
        name: "Client Name",
        role: "Business Owner",
        location: "Proddatur"
      }

      Add only after receiving permission where appropriate.
      */

    ]

  },


  /* =====================================================
     19. IMPORTANT UPDATES
     
     These will eventually be controlled through
     Google Sheets.
  ===================================================== */

  updates: {

    enabled:
      true,

    sheetUrl:
      "",

    sheetName:
      "Updates",

    refreshMinutes:
      10,

    maxFeatured:
      3,

    showExpired:
      false,

    fallbackMessage:
      "No current updates right now.",

    types: [

      "Due Date",
      "Tax Update",
      "GST Update",
      "TDS Update",
      "Office Notice",
      "General"

    ]

  },


  /* =====================================================
     20. IMAGES
  ===================================================== */

  images: {

    logo:
      "assets/logo.svg",

    logoLight:
      "assets/logo.svg",

    logoDark:
      "assets/logo-dark.svg",

    pavanPortrait:
      "assets/pavan-reddy.jpg",

    officeExterior:
      "assets/office-exterior.jpg",

    officeInterior:
      "assets/office-interior.jpg",

    consultation:
      "assets/consultation.jpg",

    cloudOffice:
      "assets/cloud-office.jpg",

    socialShare:
      "assets/social-share.jpg"

  },


  /* =====================================================
     21. SEO
  ===================================================== */

  seo: {

    title:
      "Pavan Reddy & Co. | Chartered Accountants",

    description:
      "Pavan Reddy & Co. provides practical tax, GST, accounting, audit, finance and business support for individuals and businesses across India and suitable NRI clients.",

    canonicalUrl:
      "https://sivalakshmi5.github.io/PavanCA/",

    ogTitle:
      "Pavan Reddy & Co. | Chartered Accountants",

    ogDescription:
      "Tax, GST, Accounts & Business — sorted. Practical support for individuals, startups and businesses.",

    ogImage:
      "assets/social-share.jpg",

    twitterCard:
      "summary_large_image",

    locale:
      "en_IN",

    keywords:
      "Chartered Accountant, CA, Tax, GST, Income Tax, Accounting, Audit, Virtual CFO, Business Advisory, Proddatur, Andhra Pradesh, NRI Tax"

  },


  /* =====================================================
     22. LOCAL SEO
  ===================================================== */

  localSEO: {

    primaryArea:
      "Proddatur",

    surroundingAreas:
      "Proddatur and surrounding areas",

    serviceCoverage:
      "India",

    country:
      "India",

    businessCategory:
      "Chartered Accountant",

    landmark:
      "Near Satya Narayana Swamy Temple",

    address:
      "Ground Floor, Sai Ram Paradise, Aravind Ashram Road, YMR Colony, Proddatur, Andhra Pradesh 516360, India"

  },


  /* =====================================================
     23. ANALYTICS
     
     Leave disabled initially.
  ===================================================== */

  analytics: {

    enabled:
      false,

    googleAnalyticsId:
      "",

    googleTagManagerId:
      "",

    trackWhatsAppClicks:
      true,

    trackPhoneClicks:
      true,

    trackMapClicks:
      true,

    trackAppointmentClicks:
      true

  },


  /* =====================================================
     24. PRIVACY / DISCLAIMER
  ===================================================== */

  legal: {

    privacyPolicyEnabled:
      true,

    disclaimerEnabled:
      true,

    privacyPolicyLabel:
      "Privacy Policy",

    disclaimerLabel:
      "Disclaimer",

    disclaimerText:
      "Information on this website is provided for general awareness and should not be treated as professional advice. Tax laws, rules and due dates may change. Please contact us for advice specific to your situation.",

    externalLinksNote:
      "External links lead to third-party websites and services."
  },


  /* =====================================================
     25. FEATURE FLAGS
     
     Turn website features ON/OFF here.
  ===================================================== */

  features: {

    quickAlerts:
      true,

    importantUpdates:
      true,

    testimonials:
      true,

    googleReviews:
      true,

    socialLinks:
      true,

    googleBusiness:
      true,

    googleMaps:
      true,

    themeToggle:
      true,

    whatsappQuickOptions:
      true,

    onlineConsultation:
      true,

    appointmentRequest:
      true,

    industries:
      true,

    digitalOfficeStory:
      true,

    professionalTimeline:
      true,

    faq:
      true

  },


  /* =====================================================
     26. UI / THEME
  ===================================================== */

  theme: {

    default:
      "dark",

    allowToggle:
      true,

    rememberChoice:
      true,

    darkModeLabel:
      "Dark mode",

    lightModeLabel:
      "Light mode",

    animation:
      true,

    reducedMotionSupport:
      true,

    smoothScrolling:
      true

  },


  /* =====================================================
     27. MOBILE EXPERIENCE
  ===================================================== */

  mobile: {

    stickyActions:
      true,

    stickyActions: [

      {
        id:
          "call",

        label:
          "Call",

        icon:
          "phone",

        action:
          "phone"
      },


      {
        id:
          "whatsapp",

        label:
          "WhatsApp",

        icon:
          "whatsapp",

        action:
          "whatsapp"
      },


      {
        id:
          "directions",

        label:
          "Directions",

        icon:
          "map-pin",

        action:
          "maps"
      }

    ]

  },


  /* =====================================================
     28. FOOTER
  ===================================================== */

  footer: {

    tagline:
      "Practical CA support for individuals, businesses and NRIs.",

    copyright:
      "© 2026 Pavan Reddy & Co. All rights reserved.",

    showSocialLinks:
      true,

    showGoogleReviews:
      true,

    showAddress:
      true,

    showContact:
      true

  }


};


/*
==========================================================
 DO NOT EDIT BELOW THIS LINE
==========================================================

 Small helper functions used by the website.
==========================================================
*/


/* Create a WhatsApp URL from a message */

function createWhatsAppUrl(message) {

  const number =
    SITE_CONFIG.contact.whatsappNumber;

  const encodedMessage =
    encodeURIComponent(message);

  return `https://wa.me/${number}?text=${encodedMessage}`;
}


/* Default WhatsApp URL */

function getDefaultWhatsAppUrl() {

  return createWhatsAppUrl(
    SITE_CONFIG.contact.whatsappDefaultMessage
  );

}


/* Phone URL */

function getPhoneUrl() {

  return SITE_CONFIG.contact.phoneLink;

}


/* Email URL */

function getEmailUrl() {

  return SITE_CONFIG.contact.emailLink;

}


/* Google Maps URL */

function getMapsUrl() {

  return SITE_CONFIG.office.mapsUrl;

}


/* Check whether a social link is usable */

function isSocialLinkAvailable(platform) {

  if (!SITE_CONFIG.social[platform]) {
    return false;
  }

  if (!SITE_CONFIG.social[platform].enabled) {
    return false;
  }

  if (!SITE_CONFIG.social[platform].url) {
    return false;
  }

  return true;

}
