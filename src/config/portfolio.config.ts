/* ========================================
   📝 EDIT THIS SECTION TO UPDATE PORTFOLIO
   ========================================
   
   This is your centralized content configuration.
   Simply change the values below to update your entire portfolio.
   NO code modifications needed anywhere else!
   
   ======================================== */

export const portfolioConfig = {
  /* ========================================
     👤 PERSONAL INFORMATION
     ======================================== */
  personal: {
    name: "Zahidul Islam",
    title: "AI Automation Engineer",
    // Small accent label shown next to the headline
    frontierTag: "Frontier AI",
    // Plain-English explainer line under the headline (so the title is instantly understood)
    tagline: "AI agents, voice tools and business automation—with full-stack, cloud and commerce engineering behind them.",
    // Secondary anchor terms shown as a muted line beneath the headline
    roles: [
      "AI Automation Engineer",
      "RAG & Chatbot Developer",
      "n8n Workflow Developer",
      "API & MCP Integrations"
    ],
    bio: "AI automation engineer building voice-agent tools, browser workflows, RAG assistants and n8n integrations. Recent independent systems include VoiceBridge, Fleetwright, RegenAI and custom Claude Code/Codex workflows with a knowledge MCP. Paid client work covers multilingual RAG, content approvals, lead follow-up and WordPress automation. Full-stack, cloud, WordPress and Shopify engineering support delivery across the whole system.",
    shortBio: "AI agents and automation, custom Claude Code/Codex workflows, full-stack and cloud delivery.",
    location: "Dhaka, Bangladesh",
    email: "muhammadzahidulislam2222@gmail.com", // Replace with your email
    phone: "+8801794739339", // Replace with your phone
    whatsapp: "+8801794739339", // WhatsApp Number
    availability: "Available for Projects", // or "Currently Busy" / "Open to Opportunities"
    availabilityColor: "success", // "success" | "warning" | "destructive"
    resumeUrl: "/Zahidul_Islam_CV.pdf", // Add your resume to public folder
  },

  /* ========================================
     📊 STATISTICS (Animated Counters)
     ======================================== */
  stats: [
    { label: "Selected Projects", value: 23, suffix: "" },
    { label: "VoiceBridge Backend Tests", value: 150, suffix: "" },
    { label: "Kindred Browser Passes", value: 55, suffix: "" },
    { label: "RegenAI Concept Products", value: 6, suffix: "" }
  ],

  /* ========================================
     🔗 SOCIAL MEDIA LINKS
     ======================================== */
  socials: {
    github: "https://github.com/Zahidulislam2222", 
    linkedin: "https://www.linkedin.com/in/zahidul-islam-developer/", 
    twitter: "https://x.com/MdZahid67023693", 
    youtube: "https://www.youtube.com/@FromZahidsKnowledgeofficial", 
    email: "mailto:muhammadzahidulislam2222@gmail.com",
  },

  /* ========================================
     🧭 NAVIGATION LINKS
     ======================================== */
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  /* ========================================
     🚀 FEATURED PROJECTS
     ======================================== */

  projects: [
  {
    "id": "voicebridge",
    "title": "VoiceBridge — Voice-Agent Business Platform",
    "category": [
      "ai-ml",
      "automation",
      "fullstack"
    ],
    "description": "Authenticated booking, owner recovery and bounded records/transcript downloads with durable audits.",
    "fullDescription": "A deployed single-business voice-agent platform with owner sign-in, grounded knowledge, scoped Retell/Vapi and MCP tools, explicit booking confirmation and durable worker recovery. The October 15 release adds exact-call terminal recovery, sanitized MCP denial audits and authenticated, tenant-scoped records and ended-call transcript downloads with CSRF checks, size limits and redaction tombstones. Recorded gates passed 252 backend checks, 108 frontend tests and 21 public browser routes. Two live owner exports produced durable audits without changing business records; nonempty, redacted and foreign-tenant cases were verified locally. Earlier bounded Calendar/CRM/Gmail receipts remain dated evidence. Real Retell/Vapi speak-and-listen, provider-data deletion and backup replay remain open. Operator API wiring remains incomplete; voice creation and general external email stay disabled. Scale and availability objectives remain unmeasured.",
    "thumbnail": "/studio/voicebridge-cover.webp",
    "technologies": [
      "Python",
      "PostgreSQL",
      "Retell / Vapi",
      "MCP"
    ],
    "achievements": [
      "Deployed owner tools and exports · voice acceptance pending",
      "Verified release October 15, 2026 · dated evidence"
    ],
    "liveUrl": "https://voicebridge.zahidul-islam.com/",
    "githubUrl": "https://github.com/Zahidulislam2222/voicebridge",
    "featured": true,
    "metrics": {
      "delivery": "Deployed owner tools and exports · voice acceptance pending"
    },
    "pdfUrl": "/docs/voicebridge-technical-overview.pdf"
  },
  {
    "id": "mediconnect-v3",
    "title": "MediConnect — Multi-Cloud Healthcare Ecosystem",
    "category": [
      "hybrid-cloud",
      "ai-ml",
      "mobile",
      "healthcare"
    ],
    "description": "Connected-care website, regional services and preserved CMS content with separate clinical gates.",
    "fullDescription": "A connected-care project spanning a React website, Strapi CMS, regional backend services, document processing and a separate knowledge stack. The recorded public website release passed 676 unit tests and 77 browser cases with 43 matching local/live files. CMS verification preserved five original articles, all 51 ordered paragraphs and three cover images; two legacy covers remain unavailable. The processor recorded 98 local tests, while live knowledge-stack activation failed before model generation or grounded retrieval was verified. Today’s local checkpoint resumes engineering with changes not yet deployed; phases 3–8, privacy verification and clinical acceptance remain open.",
    "images": [
      "https://github.com/user-attachments/assets/bf8cc79b-d429-4cce-9988-8dc490876cc2",
      "https://github.com/user-attachments/assets/e9fada93-745f-4cf3-b5cd-f7a624242409",
      "https://github.com/user-attachments/assets/2316b86e-b873-40c8-b77f-6fb5bd09a200",
      "https://github.com/user-attachments/assets/909d8852-cb19-4c46-a56d-f0dbefbf9909",
      "https://github.com/user-attachments/assets/7ab08ede-ac83-4a86-9d80-3fdab4b89984",
      "https://github.com/user-attachments/assets/d8988bd6-8923-4dcf-ac95-43ddbf51b589",
      "https://github.com/user-attachments/assets/99c5f98b-bdaf-424e-a293-b3586e056a62"
    ],
    "thumbnail": "https://i9.ytimg.com/vi_webp/vPviXZOjx68/maxresdefault.webp",
    "technologies": [
      "React",
      "Multi-cloud",
      "FHIR"
    ],
    "achievements": [
      "Website and CMS deployed · platform in development",
      "Source review October 14, 2026 · dated verification"
    ],
    "liveUrl": "https://mediconnect.zahidul-islam.com/",
    "githubLinks": [
      {
        "label": "Frontend",
        "url": "https://github.com/Zahidulislam2222/mediconnect-hub"
      },
      {
        "label": "Infrastructure (Production)",
        "url": "https://github.com/Zahidulislam2222/mediconnect-infrastructure-production"
      },
      {
        "label": "Infrastructure (Develop)",
        "url": "https://github.com/Zahidulislam2222/mediconnect-infrastructure-develop"
      },
      {
        "label": "Backend (Strapi CMS)",
        "url": "https://github.com/Zahidulislam2222/mediconnect-cms"
      },
      {
        "label": "RAG knowledge service",
        "url": "https://github.com/Zahidulislam2222/mediconnect-rag"
      }
    ],
    "pdfLinks": [
      {
        "label": "Technical Overview",
        "url": "/docs/mediconnect-technical-overview.pdf"
      }
    ],
    "videoId": "vPviXZOjx68",
    "playlistId": "PLMcNHEox3lJWlpHKrZwpWaA3ZMHrB2al1",
    "featured": false,
    "isHealthcare": true,
    "isHybridCloud": true,
    "isStrapi": true,
    "metrics": {
      "delivery": "Website and CMS deployed · platform in development"
    }
  },
  {
    "id": "rag-production-stack",
    "title": "RAG Production Stack — Healthcare AI Infrastructure",
    "category": [
      "ai-ml",
      "hybrid-cloud",
      "healthcare"
    ],
    "images": [
      "https://github.com/user-attachments/assets/ae15af25-9d1f-4d85-aa9c-d949a775f8ed",
      "https://github.com/user-attachments/assets/3717f990-a7af-486c-a015-5eaeac1b6566",
      "https://github.com/user-attachments/assets/52babe2f-1ecd-4b03-bbaf-64e03d80868f"
    ],
    "description": "Retrieval infrastructure with explicit operational boundaries.",
    "fullDescription": "Containerized retrieval infrastructure with nine core services and fourteen profile-activated services, authentication, network isolation, metrics/logs/traces and encrypted-backup workflows. Published as MIT-licensed open source, with hosted Gitleaks, Semgrep and Bandit checks passing. The documentation establishes configuration and source intent; it does not claim a currently healthy deployment or compliance certification.",
    "thumbnail": "/studio/rag-production-stack-cover.webp",
    "technologies": [
      "Docker",
      "LightRAG",
      "Observability"
    ],
    "achievements": [
      "Source-reconciled infrastructure",
      "Open-source public edition, September 24, 2026"
    ],
    "githubLinks": [
      {
        "label": "Infrastructure",
        "url": "https://github.com/Zahidulislam2222/rag-production-stack"
      }
    ],
    "pdfLinks": [
      {
        "label": "Technical Overview",
        "url": "/docs/rag-production-stack-technical-overview.pdf"
      }
    ],
    "featured": false,
    "isHybridCloud": true,
    "metrics": {
      "delivery": "Source-reconciled infrastructure"
    }
  },
  {
    "id": "chronos",
    "title": "Chronos V2 — Headless E-Commerce Platform",
    "category": [
      "wordpress",
      "fullstack"
    ],
    "description": "Connected WordPress commerce, verified test checkout and maintainable storefront operations.",
    "fullDescription": "A React/TypeScript storefront connected to WordPress and WooCommerce for five photographed products, editorial content, customer accounts, stock and orders. Hosted Stripe test checkout uses server-resolved prices, ownership checks, idempotency and reconciliation. The October 12 release recorded 222 browser checks, 107 navigation checks, 33 HTTP responses and 99 frontend plus two backend file matches. A separate dependency-security repair merged on main with zero known findings in both full npm audits; the publication PR remains a draft requiring reconciliation before promotion. Live payments and physical fulfilment are outside the demonstration.",
    "images": [
      "https://github.com/user-attachments/assets/0e39a15d-5c5e-4ee4-ae00-2b3142826883",
      "https://github.com/user-attachments/assets/d9d62479-f198-4e0f-8df2-64fc045f5392",
      "https://github.com/user-attachments/assets/37d02e7d-d9a8-4965-a47b-9e47eb6a35b4",
      "https://github.com/user-attachments/assets/5bcea2d0-7e62-47ce-80d6-20096fd6cd36",
      "https://github.com/user-attachments/assets/2ceb6440-cd38-4bd7-845f-d43c8d7f2d3a",
      "https://github.com/user-attachments/assets/6b7c0786-58e2-4403-9264-6334c7c4e54e",
      "https://github.com/user-attachments/assets/aa52d0e0-eeae-405c-8aff-f97db1ae33ed",
      "https://github.com/user-attachments/assets/32429d45-492f-4aae-9aa7-8cb316afd639",
      "https://github.com/user-attachments/assets/e0ec35e0-08bb-43e6-ae2b-3571d1297062",
      "https://github.com/user-attachments/assets/6db323fd-31dd-4f98-a71e-096004027647"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/0e39a15d-5c5e-4ee4-ae00-2b3142826883",
    "technologies": [
      "React",
      "WordPress",
      "WooCommerce"
    ],
    "achievements": [
      "Deployed commerce demo · test checkout only",
      "Source review October 14, 2026 · dated verification"
    ],
    "liveUrl": "https://chronos.zahidul-islam.com/",
    "githubLinks": [
      {
        "label": "Project",
        "url": "https://github.com/Zahidulislam2222/Chronos"
      }
    ],
    "pdfLinks": [
      {
        "label": "Full Documentation",
        "url": "/docs/chronos-technical-overview.pdf"
      }
    ],
    "featured": false,
    "isHeadless": true,
    "isWordpress": true,
    "metrics": {
      "delivery": "Deployed commerce demo · test checkout only"
    }
  },
  {
    "id": "equipcert",
    "title": "EquipCert AI — Safety Inspection SaaS",
    "category": [
      "mobile",
      "ai-ml",
      "fullstack"
    ],
    "description": "Web and mobile inspection evidence with offline capture and explicit certification boundaries.",
    "fullDescription": "An equipment-inspection application with Next.js, Flutter, Supabase records, offline evidence capture, signatures, optional AI assistance and PDF reporting. October 14 verification recorded 104 web unit tests, seven production probes, three dependency checks and zero configuration-boundary violations across 157 files. The database keepalive now requires an actual database query. The 429 native-client tests and mobile build results remain dated October 1 evidence. Authenticated inspection walkthroughs, persisted signature-consent evidence, commercial payments, an off-machine signing-key backup and a completed restore drill remain open; inspection evidence is not regulatory certification.",
    "images": [
      "https://github.com/user-attachments/assets/8d305d49-f097-49fd-bd19-f6dbd12b131c",
      "https://github.com/user-attachments/assets/840c5056-8fcc-43ab-a04d-ad6dc14e87f8",
      "https://github.com/user-attachments/assets/59c83cf7-4b42-4b64-8747-33269a3492e8",
      "https://github.com/user-attachments/assets/65c64ba9-7617-4b43-8aa4-421b252409ff",
      "https://github.com/user-attachments/assets/ee679dff-4198-4237-a82c-ba9085b5fa5c",
      "https://github.com/user-attachments/assets/e51500e1-7432-4726-8b7a-b5648d662240",
      "https://github.com/user-attachments/assets/4effeab9-be92-4df2-ab5e-6e5cdfe5eec8",
      "https://github.com/user-attachments/assets/48e681c8-586e-4b8f-8a7a-65d6943aae41",
      "https://github.com/user-attachments/assets/40a505dd-2915-4aac-bda5-49449ab677bb",
      "https://github.com/user-attachments/assets/4ff44b00-a35c-4d07-9d1b-6bfe13a88d08"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/8d305d49-f097-49fd-bd19-f6dbd12b131c",
    "technologies": [
      "Next.js",
      "Flutter",
      "Supabase"
    ],
    "achievements": [
      "Deployed inspection app · operational probes verified",
      "Source review October 14, 2026 · dated verification"
    ],
    "liveUrl": "https://equipcert.zahidul-islam.com/",
    "githubLinks": [
      {
        "label": "Project",
        "url": "https://github.com/Zahidulislam2222/equip-cert"
      }
    ],
    "pdfLinks": [
      {
        "label": "AI Blueprint",
        "url": "/docs/equipcert-technical-overview.pdf"
      }
    ],
    "featured": false,
    "isHeadless": true,
    "isContentful": true,
    "metrics": {
      "delivery": "Deployed inspection app · operational probes verified"
    }
  },
  {
    "id": "jwalker-knowledge-assistant",
    "title": "Creator Knowledge Assistant — Public WordPress RAG",
    "category": [
      "ai-ml",
      "wordpress",
      "fullstack"
    ],
    "description": "Turn a creator’s public videos into source-linked answers.",
    "fullDescription": "A public WordPress knowledge assistant grounded in approved YouTube material. FastAPI combines SQLite FTS5, local embeddings and rank fusion without a hosted vector database. Relevance checks and source citations constrain answers; paid membership and course material are excluded from the public release. Manifest checks, atomic knowledge updates, daily refresh and scheduled backups support operations. The September 29 go-live record includes a real grounded answer with five sources, a public homepage check and execution of the actual scheduled backup command. The earlier members-only brief is historical.",
    "thumbnail": "/studio/jwalker-knowledge-assistant-cover.webp",
    "technologies": [
      "FastAPI",
      "SQLite FTS5",
      "WordPress"
    ],
    "achievements": [
      "Public WordPress assistant · deployed September 29",
      "September 29 release records · October 10 public case study"
    ],
    "featured": true,
    "isWordpress": true,
    "metrics": {
      "delivery": "Public WordPress assistant · deployed September 29"
    },
    "pdfUrl": "/docs/jwalker-knowledge-assistant-technical-overview.pdf"
  },
  {
    "id": "everyday-dental-surgery",
    "title": "Everyday Dental — Fictional Clinic Demonstration (Synthetic Data)",
    "category": [
      "healthcare",
      "fullstack",
      "compliance"
    ],
    "description": "Explore a fictional patient journey without real health data.",
    "fullDescription": "A fictional dental-practice presentation with an interactive synthetic patient journey, consent examples, access-denial states and a sample FHIR-shaped export. State lives in browser memory. Real intake, clinical authentication, payments, messaging and the historical clinical endpoints are disabled. It demonstrates interface behavior and engineering boundaries, not an operating clinical portal. Source and documentation were published on GitHub with all 255 file hashes matching.",
    "images": [
      "https://github.com/user-attachments/assets/62a8b78c-4d66-4f62-8998-cc71edd2cb32",
      "https://github.com/user-attachments/assets/1fe6bd5b-8f25-4601-80bc-a52d93fcfca8",
      "https://github.com/user-attachments/assets/bb0618a9-50ff-4fa4-acc2-7bc21bdeb7aa",
      "https://github.com/user-attachments/assets/f3f117cc-fd7d-4079-a13f-1aa7cf7f2200",
      "https://github.com/user-attachments/assets/7a961f32-9563-48d2-ad60-35d8aa4455e3"
    ],
    "thumbnail": "/studio/everyday-dental-surgery-cover.webp",
    "technologies": [
      "Responsive UI",
      "Bilingual",
      "Privacy flows"
    ],
    "achievements": [
      "Synthetic portfolio demonstration",
      "Synthetic portfolio release and GitHub publication, September 24, 2026"
    ],
    "liveUrl": "https://dental.zahidul-islam.com/",
    "githubLinks": [
      {
        "label": "Full Stack",
        "url": "https://github.com/Zahidulislam2222/dental-clinic"
      }
    ],
    "pdfLinks": [
      {
        "label": "Project Documentation",
        "url": "/docs/everyday-dental-surgery-technical-overview.pdf"
      }
    ],
    "videoId": "8QjGhAE7gpw",
    "featured": false,
    "isHealthcare": true,
    "metrics": {
      "delivery": "Synthetic portfolio demonstration"
    }
  },
  {
    "id": "groza-ada-compliance",
    "title": "Groza Learning Center — Accessibility & Cookie Consent (Client Project)",
    "category": [
      "wordpress",
      "compliance",
      "fullstack"
    ],
    "description": "Problem: A Los Angeles learning center's WordPress/Elementor site had 100+ accessibility errors across 30+ pages, 200+ color contrast failures, tracking scripts firing without consent, and an accessibility overlay requiring review. Solution: Accessibility remediation targeting WCAG 2.1 AA via 6 server-side PHP code snippets (zero theme modifications), GDPR cookie consent with CookieYes (25 cookies categorized), and custom PHP output buffer that strips 4 hardcoded tracking scripts (Meta Pixel, AdRoll, Google Ads, Bing UET) before consent and reloads after — verified 0 Facebook requests before consent across 16 pages.",
    "fullDescription": "Groza Learning Center is a real client project (Upwork contract, April 2026) — accessibility remediation and cookie-consent implementation for a WordPress/Elementor education website in Los Angeles.\n\nPHASE 1: ACCESSIBILITY REMEDIATION\nFull WAVE + Lighthouse audit across 30+ pages. Fixed 100+ accessibility errors: 50+ missing alt texts (WP_HTML_Tag_Processor), broken ARIA references on mega-menus, empty buttons/links (search, nav, social icons), missing form labels (reCAPTCHA, CF7), broken skip navigation, heading hierarchy issues. Resolved 200+ color contrast failures with 15 distinct color corrections (all meeting 4.5:1 AA minimum). Disabled the UserWay overlay widget. All fixes via server-side PHP Code Snippets — zero theme or plugin files modified, fully reversible.\n\nPHASE 2: TRACKING & PRIVACY CLEANUP\nRemoved dead Universal Analytics (loading for ~2 years to shut-down endpoint). Restricted reCAPTCHA v3 to form pages only (was loading on all 30+ pages). Switched YouTube embeds to privacy-enhanced mode (youtube-nocookie.com), future-proof for any new videos.\n\nPHASE 3: COOKIE CONSENT CONTROLS\nInstalled CookieYes consent banner shown worldwide. Scanned and categorized 25 cookies across 4 categories (Necessary, Analytics, Advertisement, Functional). Manually fixed 3 cookies auto-scan missed. Enabled Google Consent Mode and Microsoft UET Consent Mode.\n\nPHASE 4: CONSENT-BASED SCRIPT BLOCKING\nDiscovered 4 tracking scripts hardcoded directly in HTML (not managed by any WordPress plugin). Built custom PHP output buffer solution: strips scripts from HTML at server level using preg_replace, stores in JS function in footer, reads cookieyes-consent cookie, loads scripts only after \"advertisement\" consent, listens for real-time consent changes. Verified: 0 Facebook requests before consent, full tracking after Accept, across 16 pages.\n\nKEY PHP TECHNIQUES\nWP_HTML_Tag_Processor for alt text injection, style_loader_tag filter for contrast CSS overrides, str_ireplace for site-wide text replacements, ob_start output buffer for GDPR script masking, preg_replace for tracking script removal, wp_dequeue_script for conditional reCAPTCHA loading.",
    "images": [
      "https://github.com/user-attachments/assets/d10d1fad-7eb2-4b19-b0fe-264645c063d3",
      "https://github.com/user-attachments/assets/9c02e98d-5551-4ae9-a206-c870d57e07d8",
      "https://github.com/user-attachments/assets/664c7d2c-1dd1-4eb8-b8a8-f42c578f079d",
      "https://github.com/user-attachments/assets/fe3d08ad-0156-41b9-8f23-a8d5f04a9b0b"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/d10d1fad-7eb2-4b19-b0fe-264645c063d3",
    "technologies": [
      "WordPress + Elementor (Client Site)",
      "PHP 8.x (6 Custom Code Snippets)",
      "WP_HTML_Tag_Processor (Alt Text Injection)",
      "style_loader_tag Filter (Contrast CSS Overrides)",
      "PHP Output Buffer (GDPR Script Masking)",
      "preg_replace (Tracking Script Removal)",
      "CookieYes (GDPR Consent — 25 Cookies Categorized)",
      "Google Consent Mode + Microsoft UET Consent Mode",
      "WAVE Accessibility Evaluator",
      "Google Lighthouse",
      "WCAG 2.1 Level AA Standard",
      "Contact Form 7 + reCAPTCHA v3"
    ],
    "achievements": [
      "Real client project (Upwork contract) — not a personal project or demo",
      "100+ accessibility errors fixed across 30+ pages — all via server-side PHP, zero theme modifications",
      "200+ color contrast failures resolved with 15 distinct corrections (all meeting WCAG AA 4.5:1 minimum)",
      "Removed the accessibility overlay and applied native code-level accessibility fixes",
      "Built custom PHP output buffer to strip 4 hardcoded tracking scripts before consent and reload after — verified 0 Facebook requests before consent",
      "GDPR cookie consent system: 25 cookies scanned, categorized, and managed across 4 categories",
      "Restricted reCAPTCHA v3 to form pages only (was loading on all 30+ pages unnecessarily)",
      "YouTube embeds switched to privacy-enhanced mode site-wide — future-proof for new videos",
      "All 6 code snippets fully reversible — deactivate to revert any change",
      "16 pages checked after accessibility remediation and consent-control changes"
    ],
    "liveUrl": "https://grozalearningcenter.com",
    "pdfLinks": [
      {
        "label": "Case Study",
        "url": "https://github.com/user-attachments/files/26782337/ADA.GDPR.Compliance.Case.Study.Groza.Learning.Center._.Zahidul.Islam.pdf"
      }
    ],
    "featured": false,
    "isWordpress": true,
    "metrics": {
      "client": "Real Upwork Client (Los Angeles, CA)",
      "pages": "30+ Pages Audited & Fixed",
      "errors": "100+ ADA Errors Fixed + 200+ Contrast Fixes",
      "scope": "Accessibility remediation and consent controls",
      "method": "6 PHP Code Snippets (Zero Theme Modifications)",
      "cookies": "25 Cookies Categorized + 4 Tracking Scripts Blocked Before Consent",
      "verification": "WAVE 0 Errors + 16 Pages Individually Tested",
      "reversibility": "100% Reversible (Snippet-Based Architecture)"
    }
  },
  {
    "id": "healthcode-analysis",
    "title": "HealthCode Analysis — Native WordPress Editorial Demonstration",
    "category": [
      "wordpress",
      "ai-ml",
      "automation"
    ],
    "description": "Native Elementor publishing, browser-only reader tools and documented operating boundaries.",
    "fullDescription": "A deployed WordPress/Elementor editorial demonstration with 66 native layouts, a device-local library/search and six educational tools. The September release recorded browser/security checks, administrator editing, an independent restore and 141-file parity. The later documentation review recorded 316 passing offline checks, one failing retained AskMe test and two unrun runtime-dependent suites. October 14 confirmed an HTTP 200 response and the known duplicate HSTS header. Visual, screen-reader, physical-device and recurring restore acceptance remain open; clinical validity, full compliance and million-reader capacity are not claimed.",
    "images": [
      "https://github.com/user-attachments/assets/477fc801-f7da-436e-b8a7-574368524761",
      "https://github.com/user-attachments/assets/cc032c66-001f-489c-b268-034cd2f2a0d3",
      "https://github.com/user-attachments/assets/4970ec40-054d-444e-aa21-be5ca70c1c5d",
      "https://github.com/user-attachments/assets/8e83b63e-a7f3-4a9f-8b25-125cc8bf99fd",
      "https://github.com/user-attachments/assets/fe990c5c-2bb5-4b39-8026-38d8d9b6b246",
      "https://github.com/user-attachments/assets/c468b2dc-7b13-4d79-82d8-fd23c1ce34bb",
      "https://github.com/user-attachments/assets/595c9b9f-c638-451e-a3f9-bb8a9a7ccc15",
      "https://github.com/user-attachments/assets/fe85be49-936a-40c9-98c8-cf7edb45fd5c",
      "https://github.com/user-attachments/assets/5bf5b759-4804-4c34-a10e-6f24fac56552",
      "https://github.com/user-attachments/assets/3314894b-1c7d-421b-8805-bce79550bacf",
      "https://github.com/user-attachments/assets/60ade495-282a-461b-b080-a2cd92f1076d",
      "https://github.com/user-attachments/assets/ba672bdf-f5b7-4a2c-ba28-3631aef04230",
      "https://github.com/user-attachments/assets/d5c41b2f-6c6f-4932-9133-e95d328ea144"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/477fc801-f7da-436e-b8a7-574368524761",
    "technologies": [
      "WordPress",
      "Elementor",
      "Browser tools"
    ],
    "achievements": [
      "Native WordPress demo · quality backlog documented",
      "Source review October 14, 2026 · dated verification"
    ],
    "liveUrl": "https://healthcodeanalysis.zahidul-islam.com/",
    "githubLinks": [
      {
        "label": "Project",
        "url": "https://github.com/Zahidulislam2222/healthcodeanalysis"
      }
    ],
    "pdfLinks": [
      {
        "label": "Analysis Engine",
        "url": "/docs/healthcode-analysis-technical-overview.pdf"
      }
    ],
    "featured": false,
    "isWordpress": true,
    "metrics": {
      "delivery": "Native WordPress demo · quality backlog documented"
    }
  },
  {
    "id": "n8n-automations",
    "title": "n8n Automation Workflows",
    "category": [
      "automation",
      "ai-ml"
    ],
    "description": "Demonstration workflows for research, lead scoring and alert routing.",
    "fullDescription": "A collection of n8n workflow demonstrations for public-source research, lead scoring and alert routing. Production use, delivery rates and scale are not established by the retained overview. See the paid client follow-up and campaign projects for verified business delivery.",
    "images": [
      "https://github.com/user-attachments/assets/532f7e9f-23fd-4135-9b28-d7c3f0814b74",
      "https://github.com/user-attachments/assets/75756f74-5d72-4e7f-8425-a8a7fc65ef8a",
      "https://github.com/user-attachments/assets/5aa347a2-b07e-4c3d-ad90-8cffd177b56a",
      "https://github.com/user-attachments/assets/f82acfd2-eec3-4075-b29a-a8eb161808e5",
      "https://github.com/user-attachments/assets/f504a8ce-f0ce-4a3b-bb65-7b82e2714b88"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/532f7e9f-23fd-4135-9b28-d7c3f0814b74",
    "technologies": [
      "n8n",
      "Node.js",
      "Python",
      "Google Gemini API",
      "Trello",
      "Wikipedia Tool",
      "Docker"
    ],
    "achievements": [
      "Workflow demonstrations"
    ],
    "githubLinks": [
      {
        "label": "Project",
        "url": "https://github.com/Zahidulislam2222/n8n-workflows"
      }
    ],
    "featured": false,
    "metrics": {
      "scope": "Demonstration collection"
    }
  },
  {
    "id": "digital-agency-automation",
    "title": "Agency - Lead Generation & Automation",
    "category": [
      "wordpress"
    ],
    "description": "Historical website demonstration with lead-capture interface concepts.",
    "fullDescription": "Historical portfolio demonstration of website design and lead-capture interfaces. The current evidence does not establish commercial conversion improvements, measured performance or a fully automated production sales pipeline.",
    "images": [
      "https://github.com/user-attachments/assets/496aa811-c40f-447d-b846-8460417500aa",
      "https://github.com/user-attachments/assets/8abf74d0-f7a9-4071-b34e-98e4884ce876",
      "https://github.com/user-attachments/assets/ffbcfe7f-7818-4f6b-b4ba-9d006e3034a7",
      "https://github.com/user-attachments/assets/ad941c42-557a-4875-b655-541136b73af3",
      "https://github.com/user-attachments/assets/95fe75f3-abbd-4dbd-b6ec-976e93cbbbf1",
      "https://github.com/user-attachments/assets/c097b561-c74f-43ba-b896-5786118e4554",
      "https://github.com/user-attachments/assets/5771cf5c-af0a-4af5-9a96-ad860f6016c2",
      "https://github.com/user-attachments/assets/0f0b4429-a086-4dac-a5c6-cc3b0512a6c8",
      "https://github.com/user-attachments/assets/ff9fdb6e-5cc1-4298-86ca-3e5687e2b184"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/496aa811-c40f-447d-b846-8460417500aa",
    "technologies": [
      "Cloudflare Workers",
      "Calendly API",
      "MetForm",
      "Elementor Pro",
      "Jeg Kit",
      "Custom CSS"
    ],
    "achievements": [
      "Historical website demonstration"
    ],
    "featured": false,
    "isWordpress": true,
    "metrics": {
      "scope": "Historical demonstration"
    }
  },
  {
    "id": "medical-clinic-hub",
    "title": "Clinic - Healthcare Service & Trust Platform",
    "category": [
      "wordpress",
      "healthcare"
    ],
    "description": "Historical website demonstration with lead-capture interface concepts.",
    "fullDescription": "Historical portfolio demonstration of website design and lead-capture interfaces. The current evidence does not establish commercial conversion improvements, measured performance or a fully automated production sales pipeline.",
    "images": [
      "https://github.com/user-attachments/assets/79558be8-09f7-4f7e-9a70-10d3ba281264",
      "https://github.com/user-attachments/assets/c80cdf44-f757-467a-a347-4480018b69fa",
      "https://github.com/user-attachments/assets/77245363-5ed0-435f-8dcf-0346e13a1760",
      "https://github.com/user-attachments/assets/61931431-956f-45ae-a5c8-a2f0b3120d9f",
      "https://github.com/user-attachments/assets/f0a7788a-c883-4531-8fe0-4d8a657a0774",
      "https://github.com/user-attachments/assets/ec2a6e62-4ef5-491c-a118-e94839cf4c84",
      "https://github.com/user-attachments/assets/976b9c5e-b84f-482b-b029-97130b05c6e1",
      "https://github.com/user-attachments/assets/09daa3bf-e27a-4266-9354-c46a6604710b",
      "https://github.com/user-attachments/assets/c99ba202-15f5-40c0-9c40-f35e64789605",
      "https://github.com/user-attachments/assets/156dd930-4f8a-4c0a-b407-50deb06c1654"
    ],
    "thumbnail": "https://github.com/user-attachments/assets/79558be8-09f7-4f7e-9a70-10d3ba281264",
    "technologies": [
      "WordPress",
      "Elementor",
      "Royal Addons",
      "MetForm",
      "Jeg Kit",
      "Google Maps API"
    ],
    "achievements": [
      "Historical website demonstration"
    ],
    "featured": false,
    "isWordpress": true,
    "metrics": {
      "scope": "Historical demonstration"
    }
  },
  {
    "id": "email-finder",
    "title": "EmailFinder — Public Web & DNS Research Tool",
    "category": [
      "fullstack",
      "automation"
    ],
    "description": "Explainable business-email research using HTTP and DNS signals.",
    "fullDescription": "A Python research CLI with find, verify, scrape and batch commands. Public website evidence, DNS configuration and address patterns produce explainable candidates without SMTP probing. October 14 local verification passed all 23 collected tests with the declared dnspython dependency and checked CLI help. No live DNS, website, avatar or code-hosting lookup was repeated in that review. A candidate score does not prove mailbox ownership, deliverability or consent.",
    "thumbnail": "/studio/email-finder-cover.webp",
    "technologies": [
      "Python",
      "HTTP",
      "DNS"
    ],
    "achievements": [
      "Local CLI · 23 deterministic tests verified",
      "Source review October 14, 2026 · dated verification"
    ],
    "githubLinks": [
      {
        "label": "Project",
        "url": "https://github.com/Zahidulislam2222/email-finder"
      }
    ],
    "featured": false,
    "metrics": {
      "delivery": "Local CLI · 23 deterministic tests verified"
    },
    "pdfUrl": "/docs/emailfinder-technical-overview.pdf"
  },
  {
    "id": "yuktha-wellness",
    "title": "Yuktha Wellness — Multi-Condition AI Health Chatbot (M1–M3, Client Project)",
    "category": [
      "ai-ml",
      "fullstack",
      "healthcare"
    ],
    "description": "A better answer starts with better retrieval.",
    "fullDescription": "Paid client engineering for a multilingual health assistant: hybrid dense and keyword retrieval, cross-encoder reranking, emergency/crisis handling, structured grounding checks, SSE streaming and Redis caching. Web chat and controlled WhatsApp routing connect to the platform. Later work separates user-authored memory from generated replies and improves multilingual retrieval and image-only handling. The August release record includes 28 passing backend test files and a nine-check namespace migration. The recorded full latency target remains unmet; clinical content and final tone require human review. Historical deployment drift remains documented, so these records do not establish current source-to-live parity.",
    "thumbnail": "/studio/yuktha-wellness-cover.webp",
    "technologies": [
      "Node.js",
      "Hybrid RAG",
      "Pinecone"
    ],
    "achievements": [
      "Production assistant · human judgment required",
      "August release records · October 10 public case study"
    ],
    "featured": true,
    "isHealthcare": true,
    "metrics": {
      "delivery": "Production assistant · human judgment required"
    },
    "pdfUrl": "/docs/yuktha-wellness-technical-overview.pdf",
    "liveUrl": "https://yuktha.com/"
  },
  {
    "id": "regenai-shopify",
    "thumbnail": "/studio/regenai-shopify-cover.webp",
    "title": "RegenAI — Shopify Hydrogen & AI Support Studio",
    "category": [
      "shopify",
      "fullstack",
      "ai-ml"
    ],
    "description": "Shopify-backed Hydrogen concepts and an assistant with versioned human-reviewed decisions.",
    "fullDescription": "A Shopify-backed Hydrogen storefront with six concept products and a deployed Python Support Studio. Contextual chat, encrypted preferences, image understanding, bounded web retrieval and versioned human approvals support ticket recommendations. The October 8 release recorded 86 Python tests, 184 JavaScript tests with one existing skip, six workflow regressions and 17 public HTTP checks. October 14 read-only probes found storefront, studio and cart responding; they did not renew Shopify/Gmail grants or replay a full journey. Ordering, customer sign-in, external refunds and outbound email remain closed. Real action receipts and client handoff remain open.",
    "technologies": [
      "Hydrogen",
      "Python",
      "Shopify",
      "AI support"
    ],
    "achievements": [
      "Deployed storefront and support · ordering closed",
      "Source review October 14, 2026 · dated verification"
    ],
    "liveUrl": "https://regenai.zahidul-islam.com/",
    "githubUrl": "https://github.com/Zahidulislam2222/regenai",
    "featured": true,
    "isHeadless": true,
    "metrics": {
      "delivery": "Deployed storefront and support · ordering closed"
    },
    "pdfUrl": "/docs/regenai-build-snapshot.pdf"
  },
  {
    "id": "kindred-grove",
    "thumbnail": "/studio/kindred-grove-cover.webp",
    "title": "Kindred Grove — Published Custom Shopify Storefront",
    "category": [
      "shopify",
      "fullstack"
    ],
    "description": "A cinematic storefront with careful cart and consent engineering.",
    "fullDescription": "A premium pantry storefront concept built with Shopify Liquid, CSS and vanilla JavaScript Web Components. The published cinematic design includes a cart drawer, pantry quiz, consent controls and seven native content pages. The October 8 overview records 55 browser passes, three catalog-dependent skips and matching hashes for all 154 shipping files. Shopify development-store policy requires a shared visitor password and prevents real transactions or commercial transfer. Source is published on a review branch; approving review for main remains outstanding.",
    "technologies": [
      "Shopify",
      "Liquid",
      "Web Components"
    ],
    "achievements": [
      "Published Shopify storefront · password protected",
      "Project status document, October 8, 2026"
    ],
    "githubUrl": "https://github.com/Zahidulislam2222/kindred-grove",
    "featured": false,
    "metrics": {
      "delivery": "Published Shopify storefront · password protected"
    },
    "pdfUrl": "/docs/kindred-grove-project-status.pdf"
  },
  {
    "id": "abcker-technologies",
    "title": "Abcker Technologies — WordPress Healthcare IT Site (Client Project, Canada)",
    "category": [
      "wordpress",
      "healthcare"
    ],
    "description": "Problem: An Ottawa-based healthcare IT consultancy had a WordPress site full of placeholder content, fake stats, broken nav, lorem-ipsum FAQs, 24 plugins (most unused), no SMTP, no SEO, and 12 irrelevant template pages. Solution: Full content + technical cleanup — wrote a real Healthcare Solutions page, 6 unique service descriptions, full Privacy Policy; deleted 12 template pages and 13 junk plugins (24 → 11); fixed all broken navigation and 404s; configured SMTP with a successful test submission; installed and configured Yoast SEO with meta titles and descriptions on the four main pages.",
    "fullDescription": "Abcker Technologies is a paid WordPress engagement (April 2026) — full content and technical cleanup for an Ottawa-based healthcare IT consultancy at abckertechnologies.com.\n\nCONTENT CLEANUP\nRemoved all fake/placeholder stats — '5K+ Reviews', '0k+ Applications', '0%' counters. Removed 'Innovative Healthcare Solutions' page heading per client request. Replaced entire Email Marketing content on Healthcare Solutions page with real Healthcare IT content. Replaced all 6 identical service card descriptions on Services page with unique real descriptions. Removed Lorem Ipsum placeholder text from all FAQ answers. Replaced stock office photos on Services page with healthcare-relevant images. Removed unrelated stock photo from 'Who we are' section on Home page. Fixed awkward footer tagline across all pages.\n\nPAGE DELETION — 12 IRRELEVANT TEMPLATE PAGES\nBusiness Strategy, Content Writer, Email Marketing, Extras, PixelPulse Media, Pricing, Projects, Sample Page, SEO Management, Social Media Management, Hello, Blog — all permanently deleted.\n\nCONTACT DETAILS — UPDATED ALL PAGES\nPhone: +1 613 800 0310 · Email: contact@abckertechnologies.com · Address: Ottawa ON Canada. Removed all fake placeholder contact details (fake US address, fake phone numbers, template emails). Google Map on Contact page updated to Ottawa, ON, Canada.\n\nBROKEN LINKS FIXED\n'Let's Talk Now' nav button — was pointing to /mediazen/contact/ (broken). Fixed to /contact/. 'Get Started' hero button — had no link. Fixed to /contact/. 'More About Us' button — was pointing to old broken URL. Fixed to /healthcare-solutions/.\n\nSEO OPTIMIZATION\nURL slug fixed from /halthcare-solutions/ (typo) to /healthcare-solutions/. Meta title and description added to the four main pages (Home, Services, Healthcare Solutions, Contact). Yoast SEO plugin installed and configured. Heading structure reviewed across all pages.\n\nNEW CONTENT WRITTEN\nHealthcare Solutions page — full new page content: main description, Our Approach section (4 subsections), 6 FAQ answers all healthcare IT specific. Services page — 6 unique service descriptions written for each card. Privacy Policy — complete Privacy Policy written and published.\n\nEMAIL & FORM CONFIGURATION\nWP Mail SMTP plugin activated and configured. The site mailer was configured. SMTP test submission succeeded.\n\nPLUGIN CLEANUP\nSite reduced from 24 plugins to 11 plugins. 13 junk/unused plugins removed.",
    "thumbnail": "",
    "technologies": [
      "WordPress",
      "Yoast SEO",
      "WP Mail SMTP (Configured + Submission Tested)",
      "Elementor (Cleanup + Manual Edits)",
      "Custom WordPress Privacy Policy",
      "Google Maps (Embed Update)",
      "URL Slug + Permalinks",
      "Meta Titles + Descriptions (Four Main Pages)",
      "SMTP Configuration"
    ],
    "achievements": [
      "Real paid WordPress engagement — Ottawa, Canada healthcare IT consultancy (April 2026)",
      "Plugin count reduced from 24 → 11 (13 junk/unused plugins removed)",
      "Wrote full new Healthcare Solutions page, 6 unique service descriptions, and complete Privacy Policy",
      "Removed all fake stats ('5K+ Reviews', '0k+ Applications', '0%' counters) and placeholder Lorem Ipsum FAQ answers",
      "Deleted 12 irrelevant template pages (Business Strategy, Content Writer, Email Marketing, Pricing, Sample Page, Hello, Blog, etc.)",
      "Fixed 3 broken navigation buttons (Let's Talk Now, Get Started, More About Us) and URL slug typo (/halthcare-solutions/ → /healthcare-solutions/)",
      "Configured WP Mail SMTP — test submission succeeded",
      "Installed and configured Yoast SEO with meta titles and descriptions on the four main pages; reviewed heading hierarchy across the site",
      "Updated Google Map embed and replaced all fake US contact details with real Ottawa contact info"
    ],
    "liveUrl": "https://abckertechnologies.com",
    "featured": false,
    "isWordpress": true,
    "isHealthcare": true,
    "metrics": {
      "client": "Abcker Technologies (Ottawa, Canada) — paid WordPress cleanup",
      "plugins": "24 → 11 (13 Junk Plugins Removed)",
      "pages": "12 Template Pages Deleted · 4 Real Pages With New Meta Titles + Descriptions",
      "content": "New Healthcare Solutions Page · 6 Service Descriptions · Privacy Policy",
      "smtp": "WP Mail SMTP Configured · Test Submission Passed",
      "seo": "Yoast SEO Installed + Configured · URL Slug Typo Fixed",
      "nav": "3 Broken Buttons Fixed (Let's Talk Now · Get Started · More About Us)"
    }
  },
  {
    "id": "ftm-seo-automation",
    "title": "Fine Touch Marketing — WordPress SEO Automation (Client Project)",
    "category": [
      "automation",
      "ai-ml",
      "wordpress"
    ],
    "description": "AI metadata jobs with validation, per-item results and recovery.",
    "fullDescription": "A protected operator interface queues WordPress metadata work through a PHP/Python runtime. Title normalization, industry and location constraints, deterministic repair and per-item results govern AIOSEO updates. September recovery work added supervised restart and boot recovery, separate frontend/API health checks and fault-injection verification. Twelve scoped recovery criteria passed in the retained record. Later headline, quality and article features were deployed, but their paid end-to-end generation test still needs a usable WordPress test target. The historical n8n implementation is separate from the current runtime.",
    "thumbnail": "/studio/ftm-seo-automation-cover.webp",
    "technologies": [
      "Flask",
      "WordPress",
      "Async jobs"
    ],
    "achievements": [
      "Operational PHP/Python workflow",
      "September 4 recovery records · October 10 public case study"
    ],
    "featured": false,
    "metrics": {
      "delivery": "Operational PHP/Python workflow"
    },
    "pdfUrl": "/docs/ftm-seo-automation-technical-overview.pdf"
  },
  {
    "id": "ftm-sms-followup",
    "title": "Fine Touch Marketing — Multi-Site SMS Follow-Up Automation (Client Project)",
    "category": [
      "automation",
      "wordpress"
    ],
    "description": "Multi-site lead routing with provider-acceptance checks and consent-aware follow-ups.",
    "fullDescription": "Client automation connecting JotForm, n8n, Google Sheets and Twilio for site-specific lead intake, welcome messages and scheduled follow-ups. October 11 repairs require matched provider acceptance before updating sent-state and preserve prior stage markers; explicit opt-outs revoke marketing consent, and all-failed batches continue to the next site. A credential-free six-request behavioral flow verified exactly three updates, and all three workflows matched local structure. Provider acceptance is distinct from delivery; no new paid message was sent during those repairs. The older Google Doc predates these local release records.",
    "thumbnail": "/studio/ftm-sms-followup-cover.webp",
    "technologies": [
      "n8n",
      "Twilio",
      "Configuration"
    ],
    "achievements": [
      "Client automation · October repair evidence",
      "Source review October 14, 2026 · dated verification"
    ],
    "metrics": {
      "delivery": "Client automation · October repair evidence"
    },
    "featured": true,
    "pdfUrl": "/docs/ftm-sms-followup-technical-overview.pdf"
  },
  {
    "id": "ftm-social-media",
    "title": "Fine Touch Marketing — Social Content Generation & Approval Platform (Client Project)",
    "category": [
      "automation",
      "ai-ml"
    ],
    "description": "Creative automation with a human approval loop.",
    "fullDescription": "A media-first campaign workflow with approved asset intake, background copy generation, client media/date selection, revisions, internal approval and controlled asset delivery. The August release included real client dashboard/calendar approval checks and deployment parity. Approved deliverables are downloaded for manual publishing; direct social-network publishing is not the verified path.",
    "thumbnail": "/studio/ftm-social-media-cover.webp",
    "technologies": [
      "n8n",
      "Python",
      "Client portals"
    ],
    "achievements": [
      "Production workflow",
      "Current platform snapshot, August 11, 2026"
    ],
    "metrics": {
      "delivery": "Production workflow"
    },
    "featured": true,
    "pdfUrl": "/docs/ftm-social-media-technical-overview.pdf"
  },
  {
    "id": "wordpress-incident-response",
    "title": "Server-Wide WordPress Malware Containment & Incident Response (Client Engagement)",
    "category": [
      "security",
      "wordpress",
      "compliance"
    ],
    "description": "Trace persistence. Contain carefully. Verify recovery.",
    "fullDescription": "A backup-first response to a multi-layer WordPress compromise. Process inspection and writer tracing expanded the investigation beyond known filenames. Repeated scans found zero known indicators after containment, and 21 checked sites returned successful public responses. Successful containment is distinct from rebuilding a historically compromised environment from a trusted image.",
    "thumbnail": "/studio/wordpress-incident-response-cover.webp",
    "technologies": [
      "Linux",
      "WordPress",
      "Forensics"
    ],
    "achievements": [
      "Documented containment engagement",
      "Anonymized technical case study, August 26, 2026"
    ],
    "metrics": {
      "delivery": "Documented containment engagement"
    },
    "featured": false,
    "isWordpress": true,
    "pdfUrl": "/docs/cybersecurity-incident-response-case-study.pdf"
  },
  {
    "id": "secure-hybrid-ai-hub",
    "title": "Secure Hybrid AI Development Hub — Fail-Closed Local AI Broker",
    "category": [
      "ai-ml",
      "fullstack",
      "compliance"
    ],
    "description": "A local policy broker for scoped AI work, typed artifacts and verification evidence.",
    "fullDescription": "An experimental Python broker and CLI for governed Codex, Claude Code, VS Code and local Ollama workflows. Deterministic controls mediate scope, policy, artifacts and privileged transitions while models propose work. The September public snapshot recorded 257 passing tests with one expected private-dossier skip and Python 3.11–3.13 CI/security checks. The October review did not rerun those gates. Phase 1 closure, authority enforcement and synthetic end-to-end acceptance remain incomplete; real-client operation, browser/API delivery and distributed capacity retain separate gates.",
    "thumbnail": "/studio/secure-hybrid-ai-hub-cover.webp",
    "technologies": [
      "Python",
      "Typed artifacts",
      "Policy broker"
    ],
    "achievements": [
      "Experimental open source · synthetic acceptance open",
      "Source review October 14, 2026 · dated verification"
    ],
    "featured": false,
    "metrics": {
      "delivery": "Experimental open source · synthetic acceptance open"
    },
    "pdfUrl": "/docs/secure-hybrid-ai-hub-technical-overview.pdf",
    "githubUrl": "https://github.com/Zahidulislam2222/secure-hybrid-hub"
  },
  {
    "id": "vitalprobe",
    "title": "VitalProbe — Healthcare AI Safety Testing & Evidence",
    "category": [
      "ai-ml",
      "healthcare",
      "compliance"
    ],
    "description": "Fictional healthcare AI scenarios, inspectable evidence and regression comparison.",
    "fullDescription": "A Python healthcare-AI testing engine and published React product website. Fictional scenarios exercise REST/MCP targets with deterministic checks, optional semantic judging, multi-turn simulation, HTML/JSON dossiers and baseline comparison. Recorded engineering gates include 190 Python tests, 39 frontend tests and a 226-check local verifier. The completed 1:51 evidence film demonstrates a deliberately weak target across 25 fictional cases: three PASS, 22 FAIL and zero ERROR. New audits execute locally; the public website has no hosted audit, upload or payment service. Human clinical/legal calibration remains open, and the film’s social publication is not claimed.",
    "thumbnail": "/studio/vitalprobe-cover.webp",
    "technologies": [
      "Python",
      "FastAPI",
      "MCP"
    ],
    "achievements": [
      "Published product website · local audit engine",
      "Source review October 14, 2026 · dated verification"
    ],
    "featured": false,
    "isHealthcare": true,
    "metrics": {
      "delivery": "Published product website · local audit engine"
    },
    "pdfUrl": "/docs/vitalprobe-technical-overview.pdf",
    "githubUrl": "https://github.com/Zahidulislam2222/vitalprobe",
    "liveUrl": "https://vitalprobe.zahidul-islam.com/"
  },
  {
    "id": "fleetwright",
    "title": "Fleetwright MCP — Reliable Browser Operations",
    "category": [
      "automation",
      "fullstack",
      "security"
    ],
    "description": "Approved browser workflows, durable crawling and supervised recovery with inspectable receipts.",
    "fullDescription": "A deployed browser-operations platform with six scoped MCP tools, owner-approved freight and maintenance workflows on owned destinations, PostgreSQL fencing, a durable catalogue crawler and a local SQLite/Ollama agent. The October 14 correction adds browser supervision and readiness checks; the October 15 release publishes the operating, privacy, security and scale guides. Recorded regression passed 289 tests with six accounted skips; all 146 deployed artifact hashes and eight signed image identities matched. Actual owner booking, both approved MCP workflows, crawler export and all 15 CSP routes passed. A fresh archive restored into two new databases with matching workflow history, and scheduler/monitor recovery was exercised. Encrypted off-host restore and installed-model evidence retain their October 13 dates. Arbitrary-site execution, million-user capacity and measured monthly availability remain unproven.",
    "thumbnail": "",
    "technologies": [
      "Python",
      "Playwright",
      "Postgres",
      "MCP",
      "FastAPI"
    ],
    "achievements": [
      "Deployed release · browser supervision and recovery verified",
      "Verified release October 15, 2026 · dated evidence"
    ],
    "liveUrl": "https://fleetwright.zahidul-islam.com/",
    "githubUrl": "https://github.com/Zahidulislam2222/fleetwright",
    "pdfUrl": "/docs/fleetwright-technical-overview.pdf",
    "featured": true,
    "metrics": {
      "delivery": "Deployed release · browser supervision and recovery verified",
      "workflows": "2 owned workflows",
      "verification": "146 deployed manifest entries matched local"
    }
  },
  {
    "id": "adrevora-ai",
    "title": "AdRevora AI — Advertising-to-Revenue Intelligence",
    "category": [
      "ai-ml",
      "automation",
      "fullstack"
    ],
    "description": "Reconciled revenue, role metrics, daily reports and human-reviewed private CPU AI in a deployed workspace.",
    "fullDescription": "A deployed advertising-to-revenue workspace with mandatory MFA, tenant membership, a persistent financial ledger, first/last-touch attribution and private CPU inference. The October 14 release adds reconciled campaign/unknown/total CSV rows, CEO/marketing/operations metrics, immutable creative revision history, conservative source freshness, bounded history and stored daily UTC reports. Recorded verification passed 120 application tests, 56 deployment tests, 17 HTTPS workflow checks and 23 scoped accessibility scans; all 68 release artifacts matched and all 20 database table hashes were preserved across the final upgrade. Encrypted isolated recovery matched eight key tables. Company-account activation, campaign writes, commercial pilot reconciliation and distributed capacity remain open. Reference revenue is illustrative. Full manual accessibility acceptance remains open.",
    "thumbnail": "/studio/adrevora-ai.png",
    "technologies": [
      "React",
      "TypeScript",
      "Node.js",
      "SQLite",
      "Meta / GoHighLevel",
      "Stripe"
    ],
    "achievements": [
      "Deployed revenue workspace · company activation pending",
      "Source review October 14, 2026 · dated verification"
    ],
    "liveUrl": "https://adrevora.zahidul-islam.com/",
    "pdfUrl": "/docs/adrevora-ai-technical-overview.pdf",
    "featured": false,
    "metrics": {
      "delivery": "Deployed revenue workspace · company activation pending",
      "verification": "120 application + 56 deployment tests"
    },
    "githubLinks": [
      {
        "label": "Private repository",
        "url": "https://github.com/Zahidulislam2222/AdRevora-AI"
      }
    ]
  },
  {
    "id": "vericommerce-ai",
    "title": "VeriCommerce AI",
    "category": [
      "ai-ml",
      "fullstack",
      "automation"
    ],
    "description": "Versioned catalog evidence, cited quotations and durable drafts with approval and provenance-preserving export.",
    "fullDescription": "An independently built commerce evidence platform with JSON catalog ingestion, immutable source revisions, keyword/local CPU hybrid retrieval, cited quotations, durable draft jobs and explicit approval before JSON export. React/TypeScript and FastAPI/PostgreSQL run together in the deployed release. October 15 records 49 PostgreSQL/CPU/infrastructure checks, 11 frontend checks and 44 browser journeys with no skips; 84 deployment artifact hashes matched. Populated database restoration and actual rollback/forward recovery preserved the approved draft. Access uses temporary cookie-bound workspaces and generated catalog records. Answers are retrieved quotations and drafts use evidence-only templates, rather than unrestricted language-model generation. Accounts, Shopify publishing, document/image ingestion, model training and actual three-cloud deployments remain roadmap work. Million-user capacity and rolling availability are future targets, not measured results.",
    "thumbnail": "/studio/vericommerce-ai-cover.webp",
    "technologies": [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "ONNX"
    ],
    "achievements": [
      "Deployed evidence core · Shopify publishing remains roadmap work",
      "Source review October 16, 2026 · dated release evidence"
    ],
    "liveUrl": "https://vericommerce.zahidul-islam.com/",
    "githubUrl": "https://github.com/Zahidulislam2222/VeriCommerce-AI",
    "featured": true,
    "metrics": {
      "delivery": "Deployed evidence core · Shopify publishing remains roadmap work"
    },
    "pdfUrl": "/docs/vericommerce-ai-technical-overview.pdf"
  },
  {
    "id": "praxisforge-ai",
    "title": "PraxisForge AI",
    "category": [
      "ai-ml",
      "fullstack",
      "automation"
    ],
    "description": "Three bounded Hermes roles turn permitted knowledge into reviewed drafts, commitments and internal receipts.",
    "fullDescription": "A self-hosted agent operations platform using Nous Research's Hermes Agent, PostgreSQL workflow ownership and bounded coordinator, researcher and operator roles. Authenticated Operations provides versioned text knowledge, durable tasks, retries/cancellation, source-linked structured outputs, exact human approval, internal receipts and persisted workflow memory. The October 15 live workflow recovered after a worker interruption, completed all three roles and recorded two source-backed commitments with an internal receipt. Altered approval and replay were rejected; encrypted off-host database restoration matched schema and business records. This is one successful workflow, not a statistical reliability benchmark. Approval commits internal records; email delivery and third-party CRM updates are not enabled. Open registration, subscription checkout, broader customer admission, scheduled recovery guarantees and million-user capacity remain separate gates.",
    "thumbnail": "/studio/praxisforge-ai-cover.webp",
    "technologies": [
      "Hermes Agent",
      "Python",
      "PostgreSQL",
      "Next.js",
      "Local inference"
    ],
    "achievements": [
      "Deployed owner operations · external delivery remains gated",
      "Source review October 16, 2026 · dated release evidence"
    ],
    "liveUrl": "https://praxisforge.zahidul-islam.com/",
    "githubUrl": "https://github.com/Zahidulislam2222/PraxisForge-AI",
    "featured": true,
    "metrics": {
      "delivery": "Deployed owner operations · external delivery remains gated"
    },
    "pdfUrl": "/docs/praxisforge-ai-technical-overview.pdf"
  }
],

  /* ========================================
     💼 SKILLS & EXPERTISE
     ========================================
     
     Skill Template:
     {
       category: "Category Name",
       icon: "icon-name", // Lucide icon name
       skills: [
         { name: "Skill Name", level: 90 } // level: 0-100
       ]
     }
     
     ======================================== */
  skillCategories: [
    {
      category: "AI, RAG & Agents",
      icon: "Brain",
      color: "primary",
      skills: [
        { name: "Agentic AI Harness Orchestration (Claude Code / Agent SDK)", tier: "expert" },
        { name: "MCP + Tool-Use / Function Calling Integration", tier: "proficient" },
        { name: "AI Circuit Breaker (Bedrock / Vertex / Azure OpenAI)", tier: "expert" },
        { name: "LightRAG + RAG-Anything", tier: "proficient" },
        { name: "Pinecone + Cohere Rerank + BM25 Hybrid Retrieval", tier: "expert" },
        { name: "OpenAI GPT-4o (Structured Outputs + Query Rewriting)", tier: "expert" },
        { name: "Anthropic Claude API (Agentic + Content Generation)", tier: "expert" },
        { name: "BGE-M3 Multilingual Embeddings (1024-dim) + Self-Hosted Cross-Encoder Rerank", tier: "expert" },
        { name: "LangChain + n8n Automation", tier: "proficient" },
        { name: "LangGraph Agent Orchestration", tier: "proficient" },
        { name: "WhatsApp AI Chatbots (Interakt Webhooks, HMAC, SSE Streaming)", tier: "expert" },
        { name: "Dialogflow ES", tier: "proficient" },
        { name: "Prometheus / Grafana / Loki / Jaeger", tier: "proficient" },
        { name: "AI Safety Evaluation Harnesses (Deterministic Checks + Semantic Judges)", tier: "expert" },
        { name: "LLM Regression Baselines (PASS→WARN / PASS→FAIL Drift Detection)", tier: "expert" },
        { name: "MCP Server Authoring + REST/MCP Target Adapters", tier: "proficient" },
        { name: "Fail-Closed AI Policy Brokering (Deterministic Authority Separation)", tier: "proficient" },
        { name: "Local Model Workers (Ollama) + Bounded Provider Fallback", tier: "proficient" },
        { name: "Multi-Turn Synthetic Scenario Simulation + Trajectory Evaluation", tier: "proficient" },
        { name: "Evidence Artifacts for AI Runs (Canonical JSON + Self-Contained HTML Dossier)", tier: "expert" },
        { name: "Reciprocal Rank Fusion over SQLite FTS5 + NumPy Cosine (Hybrid RAG, No Vector Database)", tier: "proficient" },
        { name: "Measured Relevance Floors + Refusal Guardrails (Per-Embedding-Model Thresholds)", tier: "proficient" },
        { name: "Pluggable Embedding Providers + Dimension Contract (Local CPU 384-dim / Hosted 768-dim)", tier: "proficient" },
        { name: "Google Gemini Flash (Grounded Generation + Restricted, Fail-Closed Web Search)", tier: "proficient" },
        { name: "Atomic Snapshot Sync for RAG Corpora (Stable Source Keys + Content Hashes, Add/Edit/Delete)", tier: "proficient" },
        { name: "Editable Persona Separated from Locked No-Fabrication Rules", tier: "proficient" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      color: "primary",
      skills: [
        { name: "AWS (Cognito, DynamoDB, KMS, Bedrock, IoT, Lambda, MSK)", tier: "expert" },
        { name: "GCP (Cloud Run, Compute Engine, BigQuery, Vertex AI)", tier: "expert" },
        { name: "Azure (AKS, Cosmos DB, OpenAI)", tier: "proficient" },
        { name: "Terraform (Multi-Cloud IaC, 414 Resources)", tier: "expert" },
        { name: "Docker & Kubernetes (AKS/EKS)", tier: "proficient" },
        { name: "GitHub Actions CI/CD", tier: "expert" },
        { name: "Cloudflare (Tunnels, Pages, Workers)", tier: "proficient" },
        { name: "nginx (FastCGI Micro-Cache, Multi-Tenant TLS) + PM2 + Vercel", tier: "expert" },
        { name: "Zero-Cost Hosting Architecture (Cloudflare Pages + Always-Free GCP VM + Let's Encrypt)", tier: "expert" },
        { name: "Security & Compliance Scanning (Checkov, Prowler, Trivy, OWASP ZAP, SonarQube, Inferno)", tier: "expert" },
        { name: "AWS GuardDuty + Security Hub (Threat Detection)", tier: "proficient" },
        { name: "Health-Based Service Supervision + Watchdogs (Not Process-Name Checks)", tier: "expert" },
        { name: "Deployment Parity Verification (Local vs Published/Live State)", tier: "expert" },
        { name: "Capability-Based Secret Handling (Values Never Enter Model Context)", tier: "proficient" },
        { name: "Ruff + strict mypy + Python Quality Gates", tier: "expert" },
        { name: "gitleaks + Pre-Commit Security Gates", tier: "expert" },
        { name: "Additive Deployment Templates (systemd + nginx) onto Hosts Running Unrelated Services", tier: "proficient" },
        { name: "Allowlist Release Packaging + Forbidden-Path Audit (Secret-Safe Client Archives)", tier: "proficient" },
        { name: "Semgrep Python/OWASP + Bandit (Zero Findings, Zero Suppressions)", tier: "proficient" },
      ],
    },
    {
      category: "Frontend",
      icon: "Code",
      color: "primary",
      skills: [
        { name: "React 18/19 + TypeScript", tier: "expert" },
        { name: "Next.js 16", tier: "expert" },
        { name: "Tailwind CSS + shadcn/ui", tier: "expert" },
        { name: "Vite + Framer Motion + GSAP", tier: "expert" },
        { name: "Capacitor 8 (Mobile)", tier: "proficient" },
        { name: "TanStack React Query + React Router v7", tier: "expert" },
      ],
    },
    {
      category: "Backend & Data",
      icon: "Database",
      color: "primary",
      skills: [
        { name: "Node.js / Express", tier: "expert" },
        { name: "Python / FastAPI", tier: "proficient" },
        { name: "PHP 8.1+ / WordPress 7.0", tier: "expert" },
        { name: "GraphQL + REST APIs + Kafka + MQTT", tier: "expert" },
        { name: "PostgreSQL (RLS, pgcrypto) + DynamoDB + Supabase", tier: "expert" },
        { name: "Redis + MySQL + BigQuery", tier: "proficient" },
        { name: "Stripe (Subscriptions + Webhooks)", tier: "expert" },
        { name: "Strapi + Contentful (Headless CMS)", tier: "proficient" },
        { name: "MongoDB / Mongoose", tier: "proficient" },
        { name: "Twilio (SMS) + AWS SES / Mailgun (Transactional Email)", tier: "proficient" },
        { name: "Python Flask (Async Job APIs, Background Workers, Status Polling)", tier: "proficient" },
        { name: "SQLite Transactional State + Content-Addressed Artifact Stores", tier: "proficient" },
        { name: "AIOSEO API (Bulk WordPress Metadata Persistence)", tier: "expert" },
        { name: "SQLite FTS5 Full-Text Search + Online Backup + Legacy Schema Migration", tier: "proficient" },
        { name: "HMAC-Signed Short-Lived Member Tokens from WordPress (Signing Secret Never in Browser JS)", tier: "proficient" },
        { name: "Google Drive Service Account (Read-Only Scope, Recursive Discovery)", tier: "proficient" },
        { name: "Multi-Format Text Extraction (PDF, Word, HTML, Markdown) with No Network Access", tier: "proficient" },
      ],
    },
    {
      category: "Shopify & E-Commerce",
      icon: "ShoppingBag",
      color: "primary",
      skills: [
        { name: "Shopify Plus + Hydrogen 2026.4 + React Router v7", tier: "expert" },
        { name: "Shopify Functions (Rust → WASM, Cargo Tested)", tier: "expert" },
        { name: "Custom Shopify Theme Blocks (Horizon-Style 8-Level Nesting)", tier: "expert" },
        { name: "Shopify Polaris (Custom Merchant Apps)", tier: "expert" },
        { name: "Shopify OAuth + HMAC (Hand-Rolled, No Library)", tier: "proficient" },
        { name: "Liquid + theme-check (Zero Offenses)", tier: "expert" },
        { name: "Metaobjects + Markets API (5 Markets, 5 Locales incl. Arabic RTL)", tier: "expert" },
        { name: "WooCommerce + WPGraphQL (Headless WordPress E-Commerce)", tier: "expert" },
      ],
    },
    {
      category: "ADA / WCAG Accessibility",
      icon: "Shield",
      color: "primary",
      skills: [
        { name: "WCAG 2.1 Level AA (Full Site Remediation)", tier: "expert" },
        { name: "WAVE + Lighthouse Accessibility Auditing", tier: "expert" },
        { name: "Alt Text, ARIA Labels, Skip Navigation, Form Labels", tier: "expert" },
        { name: "Color Contrast Remediation (4.5:1 AA Minimum)", tier: "expert" },
        { name: "Keyboard Navigation & Focus Management", tier: "proficient" },
        { name: "WordPress/Elementor ADA Fixes (PHP Code Snippets)", tier: "expert" },
        { name: "Accessibility Overlay Investigation & Removal", tier: "proficient" },
      ],
    },
    {
      category: "Automation & Workflow Ops",
      icon: "Workflow",
      color: "primary",
      skills: [
        { name: "n8n Multi-Site Workflow Suites (Cloud + Self-Hosted VPS)", tier: "expert" },
        { name: "Config-Driven Multi-Tenancy (One Row Per Site, Zero Hardcoded Values)", tier: "expert" },
        { name: "Webhook Intake Boundaries + Payload Validation", tier: "expert" },
        { name: "Idempotency + Delivery-State Integrity (Post-Send State Writes)", tier: "expert" },
        { name: "Per-Site Failure Containment (Per-site malformed-data isolation with fault-injection verification)", tier: "expert" },
        { name: "Scheduled Follow-Up Engines (Explicit Due Dates + Sent Markers)", tier: "expert" },
        { name: "Tokenized Client Approval Portals (Two-Layer Approval Gates)", tier: "expert" },
        { name: "Watermarking + Protected Clean-Asset Delivery + ZIP Packaging", tier: "proficient" },
        { name: "Google Sheets as Controlled Config & Operational State", tier: "expert" },
        { name: "Google OAuth 2.0 Token Refresh Handling", tier: "proficient" },
      ],
    },
    {
      category: "Security & Incident Response",
      icon: "ShieldAlert",
      color: "primary",
      skills: [
        { name: "Linux / WordPress Malware Incident Response (Containment \u2192 Verification \u2192 Monitoring)", tier: "expert" },
        { name: "Self-Healing Persistence Chain Analysis (MU-Plugins, Drop-ins, auto_prepend_file Loaders, Cache Twins)", tier: "expert" },
        { name: "Process-Level Forensics (Memory-Resident Runners, Open File Descriptor Recovery of Deleted Payloads)", tier: "expert" },
        { name: "Structural Malware Classification (Markers, Decoder Structure, Path Relationships, Archive Members)", tier: "expert" },
        { name: "Backup-First Quarantine (Dry-Run Default, Manifests, Atomic Replace + Syntax Check, Reclassify on Drift)", tier: "expert" },
        { name: "Convergence Verification (Request-Triggered + Delayed Rescans, Not Deletion Counts)", tier: "expert" },
        { name: "PHP-FPM Shared Worker State Handling (Account-Scoped Recycle Before Approved Shared Reload/Restart)", tier: "proficient" },
        { name: "WordPress Database Compromise Repair (Rogue Admins, Malicious Options, Attacker Posts, Page-Builder Metadata)", tier: "expert" },
        { name: "HTTP Presence Probing with Randomized Negative Controls", tier: "proficient" },
        { name: "Alert-Only Recurrence Monitoring with Proven Off-Box Transport (No Auto-Remediation)", tier: "expert" },
        { name: "Change Control on Shared Production Hosts (Explicit Approval Gates per Mutation Class)", tier: "proficient" },
        { name: "Residual-Risk Reporting + Clean-Rebuild Planning (Containment \u2260 Restored Trust)", tier: "expert" },
      ],
    },
    {
      category: "Healthcare & Compliance",
      icon: "Heart",
      color: "success",
      skills: [
        { name: "Healthcare Privacy & Security Controls", tier: "expert" },
        { name: "GDPR / Schrems II + SOC 2 + CCPA", tier: "expert" },
        { name: "FHIR R4 (42 Resources) + SMART on FHIR + HL7 v2.x", tier: "expert" },
        { name: "C-CDA 2.1 + DICOMweb + OSHA + ESIGN", tier: "proficient" },
        { name: "Medical Terminology (LOINC, SNOMED CT, RxNorm, ICD-10/11, CVX, NDC, CPT, HCPCS)", tier: "proficient" },
        { name: "PHI Encryption (KMS / AES-256 / pgcrypto)", tier: "expert" },
      ],
    },
  ],

  /* ========================================
     💰 SERVICES & PRICING
     ========================================
     
     Service Template:
     {
       name: "Package Name",
       price: "$XXX",
       period: "/month" or "/project" or "custom",
       description: "Brief description",
       features: ["Feature 1", "Feature 2"],
       highlighted: false, // Set true for recommended package
       ctaText: "Get Started"
     }
     
     ======================================== */
  services: [
    {
      name: "AI Agents & Automation",
      price: "Custom",
      period: "pricing",
      description: "AI assistants, n8n integrations and custom agent tools, with the full-stack engineering needed to connect them to your workflow.",
      features: [
        "RAG & Knowledge Assistants",
        "n8n & Business API Integrations",
        "Custom MCP Servers & Agent Tools",
        "Claude Code / Codex Engineering Workflows",
        "Browser Automation & Durable Jobs",
        "Operator Interfaces & Cloud Deployment",
        "Acceptance Checks & Documented Handoff",
      ],
      highlighted: true,
      ctaText: "Discuss Your Workflow",
    },
    {
      name: "WordPress & CMS",
      price: "From $500",
      period: "/project",
      description: "Professional WordPress sites with custom themes, headless architecture, and Gutenberg blocks.",
      features: [
        "Custom Theme or Headless Build",
        "WooCommerce / E-Commerce Setup",
        "Performance Investigation & Optimization",
        "SEO + Structured Data",
        "Accessibility Checks & Remediation",
        "CI/CD Pipeline + cPanel/Cloudflare Deploy",
        "3 Months Support",
      ],
      highlighted: false,
      ctaText: "Get Started",
    },
    {
      name: "Full Stack Application",
      price: "From $2,000",
      period: "/project",
      description: "Production-grade web applications with cloud infrastructure, real-time features, and AI integration.",
      features: [
        "React/Next.js + Node.js/Python Backend",
        "Cloud Infrastructure (AWS/GCP/Azure)",
        "Database Design + API Development",
        "AI/ML Integration (Multi-Provider)",
        "Stripe Payments + Webhooks",
        "CI/CD + Docker + Monitoring",
        "6 Months Support",
      ],
      highlighted: true,
      ctaText: "Most Popular",
    },
    {
      name: "Healthcare & Compliance",
      price: "Custom",
      period: "pricing",
      description: "Healthcare systems with privacy controls, FHIR interoperability, audit infrastructure and documentation for compliance review.",
      features: [
        "Healthcare Privacy & Security Controls",
        "GDPR / Schrems II Data Sovereignty",
        "HL7 FHIR R4 Interoperability",
        "SOC 2 Type II Readiness",
        "PHI Encryption + Audit Logging",
        "Compliance Audit Scanner",
        "Dedicated Support + SLA",
      ],
      highlighted: false,
      ctaText: "Let's Discuss",
    },
  ],

  /* ========================================
     🤝 ETHICAL COMMITMENT
     ======================================== */
  ethicalCommitment: {
    title: "MY ETHICAL & PROFESSIONAL COMMITMENT",
    subtitle: "I believe in technical honesty. I do not \"check boxes\"; I verify data integrity.",
    items: [
      {
        key: "Ethical Boundaries",
        value: "I do not work on projects involving interest-based finance (Riba), conventional insurance, gambling, adult content, or any haram activities."
      },
      {
        key: "Transparency",
        value: "You get 100% ownership of the source code (GitHub/GitLab) and complete documentation."
      },
      {
        key: "Communication",
        value: "I provide clear, technical updates and am available for deep-dive architectural discussions."
      }
    ]
  },

  /* ========================================
     ⭐ TESTIMONIALS
     ========================================
     
     Testimonial Template:
     {
       name: "Client Name",
       role: "Job Title",
       company: "Company Name",
       image: "/client-image.jpg", // Optional
       content: "Testimonial text...",
       rating: 5 // 1-5 stars
     }
     
     ======================================== */
  upworkProfileUrl: "https://www.upwork.com/freelancers/~015799bfae8562d0eb",

  testimonials: [
    {
      name: "Verified Upwork Client",
      role: "Freelance RAG Engineer (LLM Systems) — Evaluation & Optimization",
      company: "via Upwork",
      image: "",
      content: "We had an excellent experience working with this freelancer on enhancing our RAG (Retrieval-Augmented Generation) chatbot. From the beginning, he demonstrated strong technical expertise, a clear understanding of our requirements, and exceptional professionalism. The quality of work delivered exceeded our expectations. He successfully improved the accuracy, performance, and overall functionality of our RAG bot while maintaining high development standards. All deliverables were completed on time, and communication throughout the project was outstanding. What impressed us the most was his quick response time, attention to detail, and ability to provide effective solutions whenever challenges arose. He was proactive, reliable, and consistently focused on delivering the best possible outcome. Additionally, his services were very affordable compared to the value and quality of work provided, making him an excellent choice for any AI, chatbot, or RAG-related project. We are extremely happy with the results and would highly recommend him to anyone looking for a skilled, dependable, and cost-effective freelancer. We look forward to working with him again in the future.",
      rating: 5,
      date: "Jul 2026",
      tags: ["RAG / LLM Systems", "Accuracy & Performance", "On-Time Delivery", "Proactive", "Cost-Effective"],
      upwork: true,
    },
    {
      name: "Verified Upwork Client",
      role: "Claude Code Expert Needed",
      company: "via Upwork",
      image: "",
      content: "We needed a true Claude Code expert, and Zahidul exceeded every expectation. From the start, he fully understood the project requirements, communicated clearly, and got to work immediately. His knowledge of AI development, Claude-based projects, and automation workflows is outstanding, and the final results were beyond impressive. He also worked extensively with the n8n platform and our server environment to successfully implement everything we needed. Zahidul handled the integrations, automation setup, and technical deployment smoothly and professionally, making the entire process stress-free for our team. What really stood out was his speed, problem-solving ability, and attention to detail throughout the entire project. If you need someone reliable, skilled, and highly experienced in AI, Claude projects, n8n automations, or server-side implementations, Zahidul is absolutely the person to hire. Highly recommended, and I look forward to working with him again.",
      rating: 5,
      date: "May 2026",
      tags: ["Reliable", "Clear Communicator", "Detail Oriented", "Accountable for Outcomes", "Professional"],
      upwork: true,
    },
    {
      name: "Verified Upwork Client",
      role: "WordPress Website Content Cleanup",
      company: "via Upwork",
      image: "",
      content: "Excellent freelancer. Very professional and quick delivery. Will rehire for future projects.",
      rating: 5,
      date: "Apr–May 2026",
      tags: ["Committed to Quality", "Clear Communicator", "Accountable for Outcomes", "Professional"],
      upwork: true,
    },
  ],

  /* ========================================
     ⚙️ HOW I WORK
     ======================================== */
  process: [
    {
      step: "01",
      title: "Discovery & Architecture",
      description: "I start by understanding the business problem — not just the feature list. Together we define scope, compliance requirements, and success metrics. Then I design the system architecture and present it for review before writing a single line of code.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Build & Iterate",
      description: "I ship working software in short cycles — not slides. Every sprint delivers deployable code with automated tests, CI/CD pipelines, and compliance checks baked in from day one. You get access to the repo and see every commit.",
      icon: "Code",
    },
    {
      step: "03",
      title: "Test & Harden",
      description: "Security and compliance are not afterthoughts. I run Prowler, Checkov, and Trivy scans on infrastructure. I write test assertions that verify business logic, not just code coverage. Implemented controls and scoped checks provide evidence for compliance review; they do not establish certification or whole-system legal compliance.",
      icon: "Shield",
    },
    {
      step: "04",
      title: "Ship & Support",
      description: "You get 100% source code ownership, complete documentation, and a production-ready deployment. I provide post-launch support, monitoring setup, and knowledge transfer so your team can maintain the system independently.",
      icon: "Rocket",
    },
  ],

  /* ========================================
     🎨 THEME CUSTOMIZATION
     ======================================== */
  theme: {
    // Gradient for hero section background animation
    heroGradient: "from-primary/20 via-blue-500/10 to-transparent",
    // Card hover effects
    cardGlow: true,
    // Enable particle animation in hero
    particles: true,
  },
};

/* ========================================
   📁 PROJECT CATEGORIES (for filtering)
   ======================================== */
export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "shopify", label: "Shopify" },
  { id: "hybrid-cloud", label: "Hybrid Cloud" },
  { id: "wordpress", label: "WordPress" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "automation", label: "Automation" },
  { id: "healthcare", label: "Healthcare" },
  { id: "fullstack", label: "Full Stack" },
  { id: "compliance", label: "Compliance" },
  { id: "security", label: "Security" },
];

/* ========================================
   ℹ️ HELPER TYPES (for TypeScript)
   ======================================== */

export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  fullDescription: string;
  thumbnail: string;
  images?: string[];         // Optional array for slider
  technologies: string[];
  achievements: string[];
  liveUrl?: string;          
  githubUrl?: string;        // Optional (Single link)
  githubLinks?: {            // Optional (Multiple links)
    label: string;
    url: string;
  }[];
  pdfUrl?: string;           // Optional PDF link (single)
  pdfLinks?: {               // Optional (Multiple PDFs)
    label: string;
    url: string;
  }[];
  videoId?: string;          // Optional
  playlistId?: string;       // Optional YouTube playlist ID
  featured?: boolean;        // Optional
  isHealthcare?: boolean;    // Optional
  isHybridCloud?: boolean;
  isHeadless?: boolean;   // Optional
  isWordpress?: boolean;
  isStrapi?: boolean;
  isContentful?: boolean;
  metrics?: Record<string, string>;
  // Before → After state change pairs (shown in the project modal)
  beforeAfter?: {
    label?: string;          // optional row label e.g. "Cost", "Security"
    before: string;
    after: string;
  }[];
  // Problems faced and how they were solved (scrubbed — no exploit/vuln detail)
  challenges?: {
    problem: string;
    solution: string;
    outcome?: string;
  }[];
}

// Update these to use the new Interface
export type SkillCategory = typeof portfolioConfig.skillCategories[0];
export type Service = typeof portfolioConfig.services[0];
export type Testimonial = typeof portfolioConfig.testimonials[0];
