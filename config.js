/*
================================================================
 PAVAN REDDY & CO. — WEBSITE CONFIGURATION
================================================================

 PURPOSE
 -------
 This file is the SINGLE SOURCE OF TRUTH for website content,
 business information, links, settings and feature switches.

 PRINCIPLE
 ---------
 If a piece of information may change without changing the
 website's design/structure, it belongs here.

 Examples:
   ✓ Phone / WhatsApp
   ✓ Email
   ✓ Address
   ✓ Office hours
   ✓ Google Maps
   ✓ Google Business
   ✓ Social links
   ✓ Hero content
   ✓ Section headings
   ✓ Services
   ✓ Industries
   ✓ Who We Help
   ✓ Professional story
   ✓ Testimonials
   ✓ FAQ
   ✓ Updates
   ✓ SEO
   ✓ Images
   ✓ Theme settings
   ✓ Feature switches

 The HTML should provide STRUCTURE.
 script.js should RENDER this DATA.
 style.css should control DESIGN.

 IMPORTANT
 ---------
 Do NOT put passwords, API keys or private credentials here.

================================================================
*/


const SITE_CONFIG = {


  /* ============================================================
     01. BRAND
  ============================================================ */

  brand: {

    firmName:
      "Pavan Reddy & Co.",

    shortName:
      "Pavan Reddy & Co.",

    designation:
      "CHARTERED ACCOUNTANTS",

    establishedYear:
      "2018",

    logo: {
      dark:
        "assets/logo.svg",

      light:
        "assets/logo.svg",

      alt:
        "Pavan Reddy & Co. Chartered Accountants"
    }

  },


  /* ============================================================
     02. WEBSITE
  ============================================================ */

  website: {

    url:
      "https://sivalakshmi5.github.io/PavanCA/",

    language:
      "en",

    locale:
      "en_IN",

    country:
      "IN",

    defaultTheme:
      "dark",

    allowThemeToggle:
      true,

    rememberThemeChoice:
      true,

    smoothScrolling:
      true

  },


  /* ============================================================
     03. CONTACT
  ============================================================ */

  contact: {

    phone: {
      display:
        "+91 91107 27236",

      href:
        "tel:+919110727236"
    },

    whatsapp: {

      number:
        "919110727236",

      display:
        "+91 91107 27236",

      defaultMessage:
        "Hi Pavan Reddy & Co., I'd like to discuss a requirement."
    },

    email: {

      display:
        "pavanca@gmail.com",

      href:
        "mailto:pavanca@gmail.com"
    }

  },


  /* ============================================================
     04. OFFICE / LOCATION
  ============================================================ */

  office: {

    address: {

      line1:
        "Ground Floor, Sai Ram Paradise",

      line2:
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
        "India"
    },

    landmark:
      "Near Satya Narayana Swamy Temple",

    mapsUrl:
      "https://maps.app.goo.gl/uLCC9TvLqffiFw4M7",

    hours: {

      display:
        "9:30 AM – 6:30 PM",

      openingTime:
        "9:30 AM",

      closingTime:
        "6:30 PM",

      closedNote:
        "Public holidays closed"
    },

    visitPolicy:
      "Walk-ins welcome · Appointments preferred",

    consultationNote:
      "Appointments are preferred for longer consultations."

  },


  /* ============================================================
     05. SERVICE COVERAGE
  ============================================================ */

  coverage: {

    local:
      "Proddatur & surrounding areas",

    india:
      "Clients across India",

    nri:
      "NRI clients",

    heroLine:
      "Proddatur · Serving clients across India · NRI support"

  },


  /* ============================================================
     06. LANGUAGES
  ============================================================ */

  languages: [

    "English",
    "Telugu",
    "Hindi",
    "Tamil"

  ],


  /* ============================================================
     07. NAVIGATION
  ============================================================ */

  navigation: [

    {
      id:
        "services",

      label:
        "What We Do",

      href:
        "#services"
    },

    {
      id:
        "who-we-help",

      label:
        "Who We Help",

      href:
        "#who-we-help"
    },

    {
      id:
        "our-story",

      label:
        "Our Story",

      href:
        "#our-story"
    },
   
    {
     id:
       "client-experiences",
 
     label:
       "Client Reviews",
 
     href:
       "#client-experiences"
   },

    {
      id:
        "updates",

      label:
        "Updates",

      href:
        "#updates"
    },

    {
      id:
        "faq",

      label:
        "FAQ",

      href:
        "#faq"
    },

    {
      id:
        "contact",

      label:
        "Contact",

      href:
        "#contact"
    }

  ],


  /* ============================================================
     08. HERO
  ============================================================ */

  hero: {

    eyebrow:
      "CHARTERED ACCOUNTANTS • TAX • BUSINESS & FINANCE",

    title:
      "Got a tax or business headache? Let's sort it out.",

    description:
      "From tax returns and GST to accounts, finance and business decisions — tell us what's going on. We'll help you figure out what to do next.",

    supportingText:
      "Proddatur · Serving clients across India · NRI support",

    brandLine:
      "Tax, GST, Accounts & Business — sorted.",

    primaryAction: {
      label:
        "WhatsApp Us",

      type:
        "whatsapp"
    },

    secondaryAction: {
      label:
        "Call Us",

      type:
        "phone"
    },

    visual: {

      portraitImage:
        "assets/pavan-reddy.jpg",

      portraitAlt:
        "CA Pavan Reddy",

      placeholderTitle:
        "CA Pavan Reddy",

      placeholderText:
        "Professional portrait will be added"
    }

  },


  /* ============================================================
     09. QUICK ALERT
  ============================================================ */

  quickAlert: {

    enabled:
      true,

    defaultTitle:
      "Quick Alert",

    defaultMessage:
      "Important tax, GST and compliance updates will appear here.",

    actionLabel:
      "View updates",

    actionHref:
      "#updates"

  },


  /* ============================================================
     10. SECTION CONTENT
     
     Section structure stays in HTML.
     Section copy lives here.
  ============================================================ */

  sections: {

    services: {

      eyebrow:
        "WHAT WE DO",

      title:
        "Tax, GST, accounts — and everything around them.",

      description:
        "You don't need to know the technical term. Tell us what's going on and we'll help you find the right place to start.",

      notSure: {

        eyebrow:
          "NOT SURE?",

        title:
          "You don't have to know what service you need.",

        description:
          "Just tell us what's going on. We'll help you figure out where to start.",

        actionLabel:
          "Tell us what's going on",

        actionHref:
          "#start-here"

      }

    },


    whoWeHelp: {

      eyebrow:
        "WHO WE HELP",

      title:
        "Is this you?",

      description:
        "Whether you're filing your first ITR, running a business, building a startup or managing things from abroad, we're here to help."

    },


    industries: {

      eyebrow:
        "SECTORS",

      title:
        "Different businesses. Same goal: keeping things sorted.",

      description:
        "We work with a wide range of businesses and organisations."

    },


    reviews: {

      eyebrow:
        "CLIENT EXPERIENCES",

      title:
        "What our clients say.",

      description:
        "Real experiences from people and businesses we've worked with.",

      googleActionLabel:
        "See our Google Reviews"

    },


    story: {

      eyebrow:
        "THE PERSON BEHIND THE PRACTICE",

      title:
        "CA expertise. Business experience. Technology mindset.",

      description:
        "Pavan Reddy combines Chartered Accountancy with experience in banking, technology and business processes."

    },


    digitalOffice: {

      eyebrow:
        "HOW WE WORK",

      title:
        "We don't run a paper-heavy CA office.",

      description:
        "Our office works largely through cloud-based workflows and digital collaboration.",

      closingLine:
        "Technology should make your CA experience easier — not more complicated."

    },


    startHere: {

      eyebrow:
        "START HERE",

      title:
        "Not sure where to begin? Start here.",

      description:
        "You don't need to know the right CA term, prepare a perfect explanation or figure everything out before contacting us.",

      mindEyebrow:
        "WHAT'S ON YOUR MIND?",

      mindTitle:
        "Just pick what sounds closest.",

      mindDescription:
        "We'll help you take it from there.",

      reassurance:
        "You don't have to know everything before you call us. That's our job."

    },


    updates: {

      eyebrow:
        "KEEPING YOU IN THE LOOP",

      title:
        "Important updates.",

      description:
        "Due dates, tax updates, GST changes and useful office notices — without the jargon.",

      statusLabel:
        "Updated regularly",

      emptyTitle:
        "Nothing urgent right now.",

      emptyDescription:
        "We'll post important dates and updates here when needed."

    },


    contactMethods: {

      eyebrow:
        "YOUR WAY",

      title:
        "Talk to us your way.",

      description:
        "Come in, call, WhatsApp or meet us online — whatever works for you."

    },


    appointment: {

      eyebrow:
        "NEED DEDICATED TIME?",

      title:
        "Need more time to discuss your requirement?",

      description:
        "Appointments are preferred for longer consultations.",

      buttonLabel:
        "Request an Appointment",

      whatsappMessage:
        "Hi Pavan Reddy & Co., I'd like to request an appointment."

    },


    faq: {

      eyebrow:
        "FAQ",

      title:
        "Still have a question?",

      description:
        "You don't need to figure everything out before contacting us.",

      actionLabel:
        "Ask us directly"

    },


    contact: {

      eyebrow:
        "LET'S TALK",

      title:
        "Got a question? Let's talk.",

      description:
        "A deadline coming up? A notice you don't understand? Starting a business? Or simply not sure where to start?",

      reassurance:
        "Don't worry about finding the right words. Just tell us what's going on.",

      findUsLabel:
        "FIND US",

      hoursLabel:
        "OFFICE HOURS",

      finalMessage:
        "Not sure where to start? That's exactly what we're here for."

    }

  },


  /* ============================================================
     11. SERVICES
  ============================================================ */

  services: [

    {
      id:
        "tax",

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
      id:
        "gst",

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
      id:
        "accounts",

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
      id:
        "audit",

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
      id:
        "business",

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
      id:
        "cfo",

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
      id:
        "nri",

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


  /* ============================================================
     12. WHO WE HELP
  ============================================================ */

  audiences: [

    {
      id:
        "individuals",

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
      id:
        "professionals",

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
      id:
        "small-businesses",

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
      id:
        "startups",

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
      id:
        "growing-businesses",

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
      id:
        "companies",

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
      id:
        "nris",

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
      id:
        "organisations",

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


  /* ============================================================
     13. INDUSTRIES / SECTORS
  ============================================================ */

  industries: [

    {
      title:
        "Manufacturing",

      icon:
        "factory"
    },

    {
      title:
        "Trading & Retail",

      icon:
        "shopping-bag"
    },

    {
      title:
        "Construction & Real Estate",

      icon:
        "building"
    },

    {
      title:
        "Transport & Logistics",

      icon:
        "truck"
    },

    {
      title:
        "Healthcare",

      icon:
        "heart-pulse"
    },

    {
      title:
        "Education",

      icon:
        "graduation-cap"
    },

    {
      title:
        "IT & Professional Services",

      icon:
        "laptop"
    },

    {
      title:
        "Hospitality & Food",

      icon:
        "utensils"
    },

    {
      title:
        "Agriculture & Allied Businesses",

      icon:
        "sprout"
    },

    {
      title:
        "Finance & Financial Services",

      icon:
        "banknote"
    },

    {
      title:
        "Startups & New Businesses",

      icon:
        "rocket"
    },

    {
      title:
        "Trusts, Societies & NGOs",

      icon:
        "hand-heart"
    }

  ],


  /* ============================================================
     14. PROFESSIONAL STORY
  ============================================================ */

  professionalStory: {

    eyebrow:
      "THE PERSON BEHIND THE PRACTICE",

    title:
      "CA expertise. Business experience. Technology mindset.",

    description:
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

    countries:
      [
        "India",
        "Denmark",
        "UK",
        "Australia"
      ],

    expertiseNote:
      "Strong practical expertise in software, automation and digital workflows."

  },


  /* ============================================================
     15. DIGITAL OFFICE
  ============================================================ */

  digitalOffice: {

    eyebrow:
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


  /* ============================================================
     16. START HERE
  ============================================================ */

  startHere: {

    eyebrow:
      "START HERE",

    title:
      "Not sure where to begin? Start here.",

    description:
      "You don't need to know the right CA term, prepare a perfect explanation or figure everything out before contacting us.",

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

    mindEyebrow:
      "WHAT'S ON YOUR MIND?",

    mindTitle:
      "Just pick what sounds closest.",

    mindDescription:
      "We'll help you take it from there.",

    reassurance:
      "You don't have to know everything before you call us. That's our job."

  },


  /* ============================================================
     17. WHATSAPP QUICK OPTIONS
  ============================================================ */

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


  /* ============================================================
     18. CONTACT METHODS
  ============================================================ */

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


  /* ============================================================
     19. REVIEWS / TESTIMONIALS
     
     ONLY genuine reviews/testimonials should be added.
  ============================================================ */

  reviews: {

    enabled:
      true,

    eyebrow:
      "CLIENT EXPERIENCES",

    title:
      "What our clients say.",

    description:
      "Real experiences from people and businesses we've worked with.",

    googleActionLabel:
      "See our Google Reviews",

    googleReviewsUrl:
      "",

    testimonials: [

      /*
        Example:

        {
          quote:
            "Genuine client testimonial.",

          name:
            "Client Name",

          role:
            "Business Owner",

          location:
            "Proddatur"
        }

        Add only genuine testimonials.
      */

    ]

  },


  /* ============================================================
     20. IMPORTANT UPDATES
     
     Future Google Sheet integration reads this section.
  ============================================================ */

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

    emptyTitle:
      "Nothing urgent right now.",

    emptyDescription:
      "We'll post important dates and updates here when needed.",

    types: [

      "Due Date",
      "Tax Update",
      "GST Update",
      "TDS Update",
      "Office Notice",
      "General"

    ]

  },


  /* ============================================================
     21. FAQ
  ============================================================ */

  faq: [

    {
      question:
        "Do I need an appointment before visiting?",

      answer:
        "Walk-ins are welcome, but appointments are preferred for longer or dedicated consultations."
    },


    {
      question:
        "Can I contact you through WhatsApp?",

      answer:
        "Yes. WhatsApp is available for enquiries and suitable client communication."
    },


    {
      question:
        "Do you provide online consultations?",

      answer:
        "Yes. Phone and video consultations can be arranged for suitable requirements."
    },


    {
      question:
        "Can I share documents digitally?",

      answer:
        "Yes. Our office uses cloud-based workflows and clients can share suitable documents digitally."
    },


    {
      question:
        "Do you work with clients outside Proddatur?",

      answer:
        "Yes. We work with clients across India, and suitable services can also be handled remotely for NRIs."
    },


    {
      question:
        "I don't know which service I need. Can I still contact you?",

      answer:
        "Absolutely. Just explain what's going on in simple words. We'll help you understand what you need."
    }

  ],


  /* ============================================================
     22. APPOINTMENTS
  ============================================================ */

  appointments: {

    enabled:
      true,

    label:
      "Request an Appointment",

    description:
      "Appointments are preferred for longer consultations.",

    method:
      "whatsapp",

    whatsappMessage:
      "Hi Pavan Reddy & Co., I'd like to request an appointment."

  },


  /* ============================================================
     23. ONLINE CONSULTATION
  ============================================================ */

  onlineConsultation: {

    enabled:
      true,

    methods: [

      "Phone",
      "WhatsApp",
      "Google Meet",
      "Zoom",

    ],

    description:
      "Phone, video and digital document sharing are available for suitable work."

  },


  /* ============================================================
     24. IMAGES
  ============================================================ */

  images: {

    logo:
      "assets/logo.svg",

    logoDark:
      "assets/logo.svg",

    logoLight:
      "assets/logo.svg",

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


  /* ============================================================
     25. SEO
  ============================================================ */

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

    /*
      Keywords are kept here only as a content reference.
      We will NOT depend on the obsolete meta-keywords tag.
    */

    keywordReference:
      "Chartered Accountant, CA, Tax, GST, Income Tax, Accounting, Audit, Virtual CFO, Business Advisory, Proddatur, Andhra Pradesh, NRI Tax"

  },


  /* ============================================================
     26. LOCAL SEO
  ============================================================ */

  localSEO: {

    primaryArea:
      "Proddatur",

    surroundingAreas:
      "Proddatur and surrounding areas",

    serviceCoverage:
      "India",

    businessCategory:
      "Chartered Accountant",

    landmark:
      "Near Satya Narayana Swamy Temple",

    address:
      "Ground Floor, Sai Ram Paradise, Aravind Ashram Road, YMR Colony, Proddatur, Andhra Pradesh 516360, India"

  },


  /* ============================================================
     27. SOCIAL / ONLINE PRESENCE
     
     URLS intentionally blank until actual profiles are supplied.
  ============================================================ */

  social: {

    googleBusiness: {

      enabled:
        true,

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

      enabled:
        true,

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

      enabled:
        true,

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

      enabled:
        true,

      label:
        "WhatsApp",

      shortLabel:
        "WhatsApp",

      icon:
        "message-circle",

      url:
        ""

    },


    instagram: {

      enabled:
        true,

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

      enabled:
        true,

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

      enabled:
        false,

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

      enabled:
        false,

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

      enabled:
        true,

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


  /* ============================================================
     28. ANALYTICS
     
     Disabled until we decide to activate it.
  ============================================================ */

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


  /* ============================================================
     29. LEGAL / DISCLAIMER
  ============================================================ */

  legal: {

    privacyPolicy: {

      enabled:
        true,

      label:
        "Privacy Policy",

      title:
        "Privacy Policy",

      content: [
        "We respect your privacy.",

        "Information shared with us through phone, WhatsApp, email or other communication channels is used for responding to your enquiry and providing services where an engagement is established.",

        "We do not request sensitive passwords or confidential credentials through this website."
      ]

    },


    disclaimer: {

      enabled:
        true,

      label:
        "Disclaimer",

      title:
        "General Information",

      content: [
        "Information on this website is provided for general awareness and should not be treated as professional advice.",

        "Tax laws, rules, regulations and due dates may change. Please contact us for advice specific to your situation.",

        "External links lead to third-party websites and services."
      ]

    }

  },


  /* ============================================================
     30. THEME / UI
  ============================================================ */

  theme: {

    default:
      "dark",

    allowToggle:
      true,

    rememberChoice:
      true,

    darkLabel:
      "Dark mode",

    lightLabel:
      "Light mode",

    animations:
      true,

    reducedMotionSupport:
      true,

    smoothScrolling:
      true

  },


  /* ============================================================
     31. MOBILE
  ============================================================ */

  mobile: {

    stickyActions:
      true,

    actions: [

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
          "message-circle",

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


  /* ============================================================
     32. FOOTER
  ============================================================ */

  footer: {

    tagline:
      "Practical CA support for individuals, businesses and NRIs.",

    copyright:
      "© 2026 Pavan Reddy & Co. All rights reserved.",

    locationLine:
      "Proddatur · Andhra Pradesh · India",

    showSocialLinks:
      true,

    showGoogleReviews:
      true,

    showAddress:
      true,

    showContact:
      true

  },


  /* ============================================================
     33. FEATURE FLAGS
     
     These control whether major features appear.
  ============================================================ */

  features: {

    quickAlert:
      true,

    services:
      true,

    whoWeHelp:
      true,

    industries:
      true,

    reviews:
      true,

    professionalStory:
      true,

    digitalOffice:
      true,

    startHere:
      true,

    whatsappOptions:
      true,

    updates:
      true,

    contactMethods:
      true,

    appointments:
      true,

    onlineConsultation:
      true,

    faq:
      true,

    socialLinks:
      true,

    googleBusiness:
      true,

    googleReviews:
      true,

    themeToggle:
      true,

    mobileStickyActions:
      true

  }

};


/*
================================================================
 HELPER FUNCTIONS
================================================================

 These are generic utilities.

 The rest of the website should use these instead of manually
 constructing phone, WhatsApp, email or maps URLs.
================================================================
*/


/* ------------------------------------------------------------
   WhatsApp URL
------------------------------------------------------------ */

function createWhatsAppUrl(message) {

  const number =
    SITE_CONFIG.contact.whatsapp.number;

  const text =
    encodeURIComponent(
      message ||
      SITE_CONFIG.contact.whatsapp.defaultMessage
    );

  return `https://wa.me/${number}?text=${text}`;
}


/* ------------------------------------------------------------
   Default WhatsApp URL
------------------------------------------------------------ */

function getDefaultWhatsAppUrl() {

  return createWhatsAppUrl(
    SITE_CONFIG.contact.whatsapp.defaultMessage
  );

}


/* ------------------------------------------------------------
   Phone URL
------------------------------------------------------------ */

function getPhoneUrl() {

  return SITE_CONFIG.contact.phone.href;

}


/* ------------------------------------------------------------
   Email URL
------------------------------------------------------------ */

function getEmailUrl() {

  return SITE_CONFIG.contact.email.href;

}


/* ------------------------------------------------------------
   Google Maps URL
------------------------------------------------------------ */

function getMapsUrl() {

  return SITE_CONFIG.office.mapsUrl;

}


/* ------------------------------------------------------------
   Check social link
------------------------------------------------------------ */

function isSocialLinkAvailable(platform) {

  const item =
    SITE_CONFIG.social[platform];

  if (!item) {
    return false;
  }

  if (!item.enabled) {
    return false;
  }

  if (!item.url) {
    return false;
  }

  return true;

}


/* ------------------------------------------------------------
   Get complete office address
------------------------------------------------------------ */

function getFullAddress() {

  const address =
    SITE_CONFIG.office.address;

  return [
    address.line1,
    address.line2,
    address.city,
    address.pincode,
    address.state,
    address.country
  ]
    .filter(Boolean)
    .join(", ");

}


/* ------------------------------------------------------------
   Get WhatsApp URL for a service
------------------------------------------------------------ */

function getServiceWhatsAppUrl(serviceId) {

  const service =
    SITE_CONFIG.services.find(
      item => item.id === serviceId
    );

  if (!service) {
    return getDefaultWhatsAppUrl();
  }

  return createWhatsAppUrl(
    service.whatsappMessage
  );

}


/* ------------------------------------------------------------
   Get WhatsApp URL for an audience
------------------------------------------------------------ */

function getAudienceWhatsAppUrl(audienceId) {

  const audience =
    SITE_CONFIG.audiences.find(
      item => item.id === audienceId
    );

  if (!audience) {
    return getDefaultWhatsAppUrl();
  }

  return createWhatsAppUrl(
    audience.whatsappMessage
  );

}


/* ------------------------------------------------------------
   Get WhatsApp URL for a quick option
------------------------------------------------------------ */

function getQuickWhatsAppUrl(optionId) {

  const option =
    SITE_CONFIG.whatsappOptions.find(
      item => item.id === optionId
    );

  if (!option) {
    return getDefaultWhatsAppUrl();
  }

  return createWhatsAppUrl(
    option.message
  );

}


/* ------------------------------------------------------------
   Get appointment WhatsApp URL
------------------------------------------------------------ */

function getAppointmentWhatsAppUrl() {

  return createWhatsAppUrl(
    SITE_CONFIG.appointments.whatsappMessage
  );

}
