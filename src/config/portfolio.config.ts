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
    title: "Full Stack Developer & Cloud Architect",
    // These roles will rotate in the hero typewriter effect
    roles: [
      "Full Stack Developer",
      "Cloud Architect",
      "AI Automation Specialist",
      "Healthcare Tech Expert"
    ],
    bio: "A passionate developer with a unique journey from Physiotherapy to Technology. I specialize in building hybrid cloud architectures, full-stack applications, and AI-powered solutions, with deep expertise in healthcare technology.",
    shortBio: "Building the future of healthcare technology with hybrid cloud solutions and AI automation.",
    location: "Dhaka, Bangladesh",
    email: "muhammadzahidulislam2222@gmail.com", // Replace with your email
    phone: "+8801794739339", // Replace with your phone
    whatsapp: "+8801794739339", // WhatsApp Number
    availability: "Available for Projects", // or "Currently Busy" / "Open to Opportunities"
    availabilityColor: "success", // "success" | "warning" | "destructive"
    resumeUrl: "/Zahidul_Islam_CV_2026.pdf", // Add your resume to public folder
  },

  /* ========================================
     📊 STATISTICS (Animated Counters)
     ======================================== */
  stats: [
    { label: "Years Experience", value: "2-3", suffix: "+" },
    { label: "Projects Shipped", value: 12, suffix: "+" },
    { label: "Test Assertions", value: 700, suffix: "+" },
    { label: "Cloud Services Used", value: 50, suffix: "+" },
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
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  /* ========================================
     🚀 FEATURED PROJECTS
     ======================================== */

  projects: [

    {
      id: "mediconnect-v3",
      title: "MediConnect — Multi-Cloud Healthcare Ecosystem",
      category: ["hybrid-cloud", "ai-ml", "mobile", "healthcare"],

      description:
        "A production-grade, multi-cloud telemedicine ecosystem (AWS + GCP + Azure) with 7 microservices, Kafka event streaming, AI Circuit Breaker (Bedrock/Vertex/OpenAI), LightRAG chatbot, subscription system, 46 DynamoDB tables, 35 FHIR R4 resource types, and 700+ test assertions — all at $2/mo idle cost. Evolved through 3 major versions from a serverless prototype to a fully compliant multi-cloud platform.",

      fullDescription: `MediConnect is a multi-cloud healthcare platform that evolved through 3 major versions — from a serverless prototype (V1) to a fully compliant, production-grade ecosystem (V3) across AWS, GCP, and Azure.

INFRASTRUCTURE
Active-active Kubernetes clusters on AKS (Azure) + EKS (AWS), hidden behind Cloudflare Tunnels with zero exposed ports. Auto-failover to GCP Cloud Run within 5 seconds. Zero-Cost Idle pattern reduces $300/mo to $2.00/mo at idle via scale-to-zero and on-demand services. 46 DynamoDB tables managed via Terraform with S3 remote backend.

COMPLIANCE (Architecturally Enforced)
HIPAA 2026: KMS envelope encryption, immutable FHIR AuditEvent logs, breach detection, 15-min auto-logout, KMS-signed prescriptions, DICOM de-identification. GDPR/Schrems II: EU data locked to Frankfurt, consent ledger, cascading erasure. SOC 2 Type II: 13 CloudWatch metrics, idempotency guard, PITR 35-day recovery. 96 Checkov IaC security fixes, GuardDuty + Macie + CloudTrail.

FHIR R4 & CLINICAL
35 FHIR R4 resource types, SMART on FHIR STU 2.0, C-CDA 2.1, 10 terminology systems. Clinical modules: CDS Hooks, med-reconciliation, prior-auth, MPI, bulk export, emergency access.

AI & REAL-TIME
AI Circuit Breaker: Bedrock → Vertex AI → OpenAI with PII scrubbing. AI Scribe: Transcribe Medical → SOAP Notes → EHR. LightRAG chatbot with EU AI Act compliance and abuse protection. Sub-second IoT vitals via Socket.io + MQTT. Kafka event streaming (MSK Serverless + Docker).

SUBSCRIPTION & PAYMENTS
Discount Pass subscription model with 24-loophole protection, Stripe checkout with GDPR consent. Atomic locking prevents ghost charges.

See the PDF documentation for the complete technical deep-dive.`,

      images: [
        "https://github.com/user-attachments/assets/bf8cc79b-d429-4cce-9988-8dc490876cc2",
        "https://github.com/user-attachments/assets/e9fada93-745f-4cf3-b5cd-f7a624242409",
        "https://github.com/user-attachments/assets/2316b86e-b873-40c8-b77f-6fb5bd09a200",
        "https://github.com/user-attachments/assets/909d8852-cb19-4c46-a56d-f0dbefbf9909",
        "https://github.com/user-attachments/assets/7ab08ede-ac83-4a86-9d80-3fdab4b89984",
        "https://github.com/user-attachments/assets/d8988bd6-8923-4dcf-ac95-43ddbf51b589",
        "https://github.com/user-attachments/assets/99c5f98b-bdaf-424e-a293-b3586e056a62",
      ],
      thumbnail: "https://i9.ytimg.com/vi_webp/vPviXZOjx68/maxresdefault.webp",

      technologies: [
        "React 18 + TypeScript + Vite 5",
        "Node.js / Express (5 Microservices)",
        "Python FastAPI (2 Microservices)",
        "AWS (Cognito, KMS, DynamoDB, Lambda, S3, IoT, Bedrock)",
        "GCP (Cloud Run, Cloud SQL, BigQuery, Vertex AI)",
        "Azure (AKS, Container Apps, Cosmos DB, OpenAI)",
        "Terraform (46 DynamoDB Tables, Multi-Cloud IaC)",
        "Docker + Kubernetes (AKS + EKS Active-Active)",
        "Kafka (MSK Serverless + Docker)",
        "LightRAG (AI Chatbot + RAG Pipeline)",
        "AI Circuit Breaker (Bedrock / Vertex / OpenAI)",
        "Amazon Transcribe Medical (AI Scribe)",
        "HL7 FHIR R4 (35 Resource Types) + SMART on FHIR",
        "HIPAA 2026 + GDPR/Schrems II + SOC 2 Type II",
        "Stripe (Subscriptions + PaymentIntents + Webhooks)",
        "Cloudflare Tunnels (Zero Exposed Ports)",
        "Socket.io + MQTT (Sub-second IoT Vitals)",
        "Amazon Chime SDK (Video Consultations)",
        "Capacitor (Android APK) + FCM Push",
        "Prometheus + Grafana + Slack Alertmanager",
        "GitHub Actions (Parallel Multi-Cloud CI/CD)",
        "Checkov (96 IaC Security Fixes)",
        "Vitest + Playwright + pytest (700+ assertions)",
      ],

      achievements: [
        "Zero-Cost Idle: $300/mo infrastructure reduced to $2.00/mo at idle across 3 clouds",
        "Active-Active HA: AKS (Azure) + EKS (AWS) clusters with 5-second auto-failover to GCP Cloud Run",
        "7 microservices (5 Node.js + 2 Python FastAPI) + 4 Lambda functions across 2 AWS regions",
        "HIPAA 2026: KMS encryption, immutable audit logs, breach detection, MFA enforcement, KMS-signed prescriptions",
        "GDPR/Schrems II: EU data locked to Frankfurt, consent ledger, cascading erasure across 15+ tables",
        "SOC 2 Type II Ready: 13 CloudWatch metrics, idempotency guard, 35-day PITR, optimistic locking",
        "35 FHIR R4 resource types + SMART on FHIR STU 2.0 + C-CDA 2.1 + 10 terminology systems",
        "AI Circuit Breaker: 99.99% AI availability across Bedrock / Vertex AI / Azure OpenAI with PII scrubbing",
        "AI Scribe: Transcribe Medical captures video call audio, generates SOAP Notes, saves to EHR in one click",
        "LightRAG AI Chatbot with EU AI Act compliance, rate limiting, and abuse protection",
        "Kafka Event Streaming: MSK Serverless + Docker with feature-flagged rollout",
        "Subscription System: Discount Pass model with Stripe checkout and 24-loophole protection",
        "Production RAG Pipeline: Model Router with confidence scoring, validation, and query planning",
        "96 Checkov IaC security fixes + 46 DynamoDB tables imported to Terraform state",
        "700+ test assertions: backend TS + Python pytest + Vitest + Playwright E2E + 287 compliance tests",
      ],

      liveUrl: "https://askme-82f72.web.app/",

      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        { label: "Infrastructure (Production)", url: "https://github.com/Zahidulislam2222/mediconnect-infrastructure-production" },
        { label: "Infrastructure (Develop)", url: "https://github.com/Zahidulislam2222/mediconnect-infrastructure-develop" },
        { label: "Backend (Strapi CMS)", url: "https://github.com/Zahidulislam2222/mediconnect-cms" },
      ],

      pdfLinks: [
        { label: "Technical Overview", url: "/MediConnect_Technical_Overview.pdf" },
        { label: "Project Info", url: "/Mediconnect_Info.pdf" },
        { label: "Architecture PDF", url: "https://github.com/user-attachments/files/25336017/MediConnect_2.0_Multi-Cloud_Zero_Cost_compressed.pdf" },
      ],

      videoId: "vPviXZOjx68",
      playlistId: "PLMcNHEox3lJWlpHKrZwpWaA3ZMHrB2al1",
      featured: true,
      isHealthcare: true,
      isHybridCloud: true,
      isStrapi: true,

      metrics: {
        cost: "$2.00/mo Idle Cost (vs $300/mo traditional)",
        compliance: "HIPAA 2026 \u00b7 GDPR/Schrems II \u00b7 SOC 2 Type II Ready \u00b7 FHIR R4 \u00b7 SMART \u00b7 C-CDA 2.1 \u00b7 DICOM",
        clouds: "AWS (Primary) \u00b7 GCP (Analytics + Backup) \u00b7 Azure (Compute)",
        clusters: "AKS + EKS Active-Active HA (HPA + PDB)",
        services: "7 Microservices (5 Node.js + 2 Python FastAPI)",
        aiProviders: "3-Cloud Circuit Breaker \u2014 Claude 4.5 / Gemini 2.5 / GPT-4 (99.99% uptime)",
        fhirResources: "35 FHIR R4 Resource Types",
        terminologySystems: "10 Medical Terminology Systems",
        tables: "35+ DynamoDB Tables (US + EU Regions)",
        tests: "424+ Test Assertions (18+ Test Files)",
        mobile: "Android + iOS (Capacitor + FCM Push)",
        integrations: "Google Calendar \u00b7 Stripe \u00b7 FCM \u00b7 Blue Button 2.0 \u00b7 MQTT IoT",
        rto: "RTO 5 min / RPO 0 (Critical Tier)",
        security: "0 npm vulnerabilities \u00b7 OIDC Zero Static Keys \u00b7 KMS RSA-256",
      },
    },
    {
      id: "everyday-dental-surgery",
      title: "Everyday Dental Surgery — HIPAA/FHIR Compliant Healthcare Platform",
      category: ["healthcare", "fullstack", "compliance"],

      description:
        "A production-grade, HIPAA / FHIR R4 / SOC 2 Type II-ready dental clinic platform with Supabase backend, 11 Edge Functions, 11 database migrations, AES-256 PHI encryption, 4-role RBAC with Row-Level Security, FHIR R4 interoperability (10 resource types, 3 terminology systems), Stripe payments, bilingual i18n (English/Bengali), three-tier animation system (GSAP + Framer Motion + Tailwind), 93% compliance audit score (56/60 checks), and premium UI components (TiltCard, MagneticButton, CursorGlow).",

      fullDescription: `Everyday Dental Surgery & Implant Center is a production-grade healthcare web application built to HIPAA 2026, FHIR R4, and SOC 2 Type II compliance standards for a dental clinic in Dhaka, Bangladesh.

PLATFORM
32 pages with lazy loading, 11 Supabase Edge Functions, 11 database migrations, 4 user roles (Patient, Doctor, Receptionist, Admin), bilingual interface (English + Bengali).

COMPLIANCE (93% Audit Score — 56/60 Checks)
HIPAA: AES-256 encryption via pgcrypto Vault, trigger-based audit logging, 15-min session timeout with BroadcastChannel cross-tab sync, breach detection with hourly pg_cron jobs. FHIR R4: 10 resource types, 3 terminology systems (SNOMED CT, ICD-10-CM, LOINC), REST API via Edge Function, 421-line client-side validator. SOC 2: 11 policy documents, data retention with pg_cron purge, MFA enrollment, RBAC.

SECURITY
Row-Level Security on all PHI tables (database-enforced, not application-level), Cloudflare Turnstile CAPTCHA, rate limiting, DOMPurify sanitization, CSP + HSTS + COEP + COOP headers.

ANIMATIONS & UI
Three-tier system: GSAP + ScrollTrigger (scroll reveals), Framer Motion (page transitions), Tailwind keyframes (ambient). Premium components: TiltCard, MagneticButton, CursorGlow, Dental3DObject, Lottie animations, Lenis smooth scrolling.

PAYMENTS & DEPLOYMENT
Stripe PaymentIntents via Edge Function (server-side, PCI compliant). Cloudflare Pages with PWA support and 60-check compliance audit scanner as CI/CD deploy gate.`,

      images: [
        "https://github.com/user-attachments/assets/62a8b78c-4d66-4f62-8998-cc71edd2cb32",
        "https://github.com/user-attachments/assets/1fe6bd5b-8f25-4601-80bc-a52d93fcfca8",
        "https://github.com/user-attachments/assets/bb0618a9-50ff-4fa4-acc2-7bc21bdeb7aa",
        "https://github.com/user-attachments/assets/f3f117cc-fd7d-4079-a13f-1aa7cf7f2200",
        "https://github.com/user-attachments/assets/7a961f32-9563-48d2-ad60-35d8aa4455e3",
      ],
      thumbnail: "https://github.com/user-attachments/assets/62a8b78c-4d66-4f62-8998-cc71edd2cb32",

      technologies: [
        "React 18 + Vite 5 (SPA)",
        "React Router v6 (32 Lazy-Loaded Pages)",
        "Tailwind CSS 3 (Custom Navy/Teal/Gold Palette)",
        "React Hook Form (Client + Server Validation)",
        "React Helmet Async (SEO)",
        "DOMPurify (XSS Prevention)",
        "Lucide React (Icon System)",

        "GSAP 3.14 + ScrollTrigger (Scroll Reveals, Parallax, Stagger)",
        "Framer Motion 11 (Page Transitions, Micro-Interactions)",
        "Lenis (Physics-Based Smooth Scrolling)",
        "Lottie React (SVG Dental Animations)",
        "TiltCard + MagneticButton + CursorGlow (Premium UI)",

        "Supabase (PostgreSQL, Auth, Edge Functions, Realtime)",
        "11 Deno Edge Functions (Validation, Encryption, FHIR, Payments)",
        "11 Database Migrations (Idempotent, Sequential)",
        "pgcrypto + Vault (AES-256 PHI Encryption)",
        "Row-Level Security (Database-Enforced RBAC)",
        "pg_cron (Breach Detection + Data Retention Jobs)",

        "Stripe (PaymentIntents, Server-Side Secret Key, PCI Compliant)",

        "HIPAA 2026 (95% \u2014 18/19 Checks Passing)",
        "HL7 FHIR R4 (100% \u2014 16/16 Checks Passing)",
        "SOC 2 Type II Ready (83% \u2014 5/6 Checks Passing)",
        "3 Terminology Systems (SNOMED CT, ICD-10-CM, LOINC)",
        "10 FHIR R4 Resource Types",
        "11 SOC 2 Policy Documents",

        "CSP + HSTS + COEP + COOP + CORP Headers",
        "Cloudflare Turnstile (CAPTCHA)",
        "15-Min HIPAA Session Timeout (BroadcastChannel Cross-Tab)",
        "Trigger-Based Audit Logging (IP, User Agent, PHI Access)",
        "Breach Detection (Hourly Cron + Auto-Containment)",

        "Bilingual i18n (English + Bengali, Inline t() System)",

        "Cloudflare Pages (SPA Deployment)",
        "PWA (Service Worker, Manifest, Offline Fallback)",
        "60-Check Compliance Audit Scanner (CI/CD Deploy Gate)",
      ],

      achievements: [
        "93% Compliance Audit Score: 56/60 checks across HIPAA (95%), FHIR R4 (100%), SOC 2 (83%), zero critical failures",
        "Row-Level Security on all PHI tables \u2014 database-enforced, not application-level",
        "AES-256 PHI encryption (pgcrypto Vault), breach detection, 15-min session timeout, consent enforcement",
        "10 FHIR R4 resource types with REST API, 3 terminology systems, 421-line client-side validator",
        "11 Supabase Edge Functions + 11 database migrations covering RBAC, RLS, encryption, audit, FHIR, retention",
        "Stripe server-side payments: PaymentIntent via Edge Function, PCI compliant",
        "Three-tier animation: GSAP + ScrollTrigger, Framer Motion, Tailwind keyframes + Lenis smooth scrolling",
        "Premium UI: TiltCard, MagneticButton, CursorGlow, Dental3DObject, Lottie animations",
        "32 pages, 12 service categories, 50+ pricing items, bilingual (English + Bengali)",
        "Admin Panel: 10 modules including audit logs, user management, security incidents, data retention",
        "60-check compliance audit scanner as CI/CD deploy gate (npm run predeploy)",
        "PWA with service worker, Cloudflare Pages deployment with security headers",
      ],

      liveUrl: "https://dental-clinic-anq.pages.dev",

      githubLinks: [
        { label: "Full Stack", url: "https://github.com/Zahidulislam2222/dental-clinic" },
      ],

      pdfLinks: [
        { label: "Project Documentation", url: "/EDS_Project_Documentation.pdf" },
      ],

      videoId: "8QjGhAE7gpw",
      featured: true,
      isHealthcare: true,

      metrics: {
        compliance: "HIPAA 2026 (95%) \u00b7 FHIR R4 (100%) \u00b7 SOC 2 Type II Ready (83%) \u00b7 93% Overall",
        pages: "32 Lazy-Loaded Pages \u00b7 12 Service Categories \u00b7 50+ Pricing Items",
        backend: "11 Edge Functions \u00b7 11 Migrations \u00b7 AES-256 Encryption \u00b7 RLS",
        fhirResources: "10 FHIR R4 Resource Types",
        terminologySystems: "3 Medical Terminology Systems (SNOMED CT, ICD-10-CM, LOINC)",
        security: "4-Role RBAC \u00b7 RLS \u00b7 Breach Detection \u00b7 15-Min Timeout \u00b7 CAPTCHA",
        animations: "GSAP + Framer Motion + Tailwind (Three-Tier) \u00b7 Lenis Smooth Scroll",
        i18n: "Bilingual (English + Bengali) \u00b7 Complete Coverage",
        payments: "Stripe PaymentIntents (Server-Side, PCI Compliant)",
        audit: "60-Check Scanner \u00b7 CI/CD Deploy Gate \u00b7 0 Critical Failures",
        roles: "Patient \u00b7 Doctor \u00b7 Receptionist \u00b7 Admin",
        deployment: "Cloudflare Pages \u00b7 PWA \u00b7 Security Headers (CSP, HSTS, COEP, COOP)",
      },
    },
    {
      id: "chronos",
      title: "Chronos - Headless E-Commerce",
      category: ["wordpress"],
      description: "Headless e-commerce platform with React frontend, WooCommerce + WPGraphQL backend, custom Gutenberg blocks, Stripe payments with webhooks, WordPress 7.0 AI integration, WCAG 2.1 AA accessibility, GDPR compliance, and CI/CD pipeline with GitHub Actions.",
      fullDescription: "Chronos is a headless e-commerce platform that decouples a React/Vite frontend from WooCommerce via WPGraphQL, delivering sub-second page loads and seamless checkout. Features include custom Gutenberg blocks (watch showcase, collection grid, contact form), an OOP PHP 8+ bridge plugin with REST API and CPT support, real Stripe payments with webhooks and custom checkout fields, WordPress 7.0 AI integration for auto-generating product descriptions and smart contact replies, WCAG 2.1 AA accessibility, GDPR compliance, admin dashboard, SEO structured data with analytics, and a CI/CD pipeline with GitHub Actions deploying via cPanel Git.",

      images: [
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
      thumbnail: "https://github.com/user-attachments/assets/0e39a15d-5c5e-4ee4-ae00-2b3142826883",

      technologies: ["React 18 + Vite + TypeScript", "WooCommerce + WPGraphQL", "Custom Gutenberg Blocks", "OOP PHP 8+ Plugin (chronos-bridge)", "Stripe Payments + Webhooks", "WordPress 7.0 AI Integration", "WCAG 2.1 AA + GDPR", "Tailwind CSS", "GitHub Actions CI/CD", "cPanel Git Deployment", "SEO Structured Data"],
      achievements: [
        "3x faster page loads vs traditional WooCommerce via headless React frontend",
        "Real Stripe payment integration with webhooks and custom checkout fields",
        "Custom Gutenberg blocks: watch showcase, collection grid, contact form",
        "OOP PHP 8+ chronos-bridge plugin with REST API, CPT, security, i18n, and tests",
        "WordPress 7.0 AI integration: auto-generate product descriptions and smart contact replies",
        "WCAG 2.1 AA accessibility + GDPR compliance + admin dashboard",
        "CI/CD pipeline with GitHub Actions, auto-deploy via cPanel Git",
        "SEO structured data, performance optimization, and analytics integration",
      ],
      liveUrl: "https://chronos.healthcodeanalysis.com/",

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/Chronos" },
      ],

      featured: true,
      isHeadless: true,
      isWordpress: true,
      metrics: { speed: "3x faster", conversion: "+50%" },
    },
    {
      id: "equipcert",
      title: "EquipCert - AI Inspection App",
      category: ["mobile"],
      description: "Production-ready SaaS inspection platform with multi-AI providers (Google Gemini, OpenAI, Anthropic), Capacitor Android app, Supabase backend, offline-first IndexedDB with SHA-256 integrity, Stripe subscriptions, GPS capture, digital signatures, and PDF report generation.",
      fullDescription: "EquipCert is a production-ready SaaS platform for equipment inspection and certification. Built with Next.js 16 and Capacitor for cross-platform deployment (web + Android APK), it uses Supabase for real-time data sync with a production PostgreSQL schema (organizations, profiles, equipment, inspections). Features multi-AI provider analysis (Google Gemini, OpenAI, Anthropic Claude) with a pluggable provider architecture, offline-first IndexedDB queue with SHA-256 integrity verification for field use, Stripe subscriptions (free/pro/enterprise tiers), GPS location capture, digital signature pads, and automated PDF report generation. 25 security vulnerabilities fixed from a full audit.",

      images: [
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
      thumbnail: "https://github.com/user-attachments/assets/8d305d49-f097-49fd-bd19-f6dbd12b131c",

      technologies: ["Next.js 16 + React 19 + TypeScript", "Capacitor (Android APK)", "Supabase (PostgreSQL + Auth)", "Multi-AI (Gemini + OpenAI + Anthropic)", "Stripe (Subscriptions + Webhooks)", "Offline-first IndexedDB + SHA-256", "Contentful CMS", "Framer Motion", "Zod Validation", "Recharts Analytics"],
      achievements: [
        "Multi-AI provider analysis: Google Gemini, OpenAI, and Anthropic Claude with pluggable architecture",
        "Offline-first: IndexedDB queue with SHA-256 integrity verification for field inspections",
        "Production SaaS: organizations, profiles, equipment registry, role-based access (admin/manager/technician)",
        "Stripe subscriptions with free/pro/enterprise tiers",
        "GPS capture, digital signatures, QR codes, and automated PDF report generation",
        "25 security vulnerabilities fixed from full audit",
        "Real Android APK via Capacitor with native camera and geolocation",
      ],
      liveUrl: "https://equip-cert.vercel.app/",

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/equip-cert" },
      ],

      featured: true,
      isHeadless: true,
      isContentful: true,
      metrics: { ai: "3 AI Providers", offline: "SHA-256 Integrity", security: "25 Vulns Fixed" },
    },

    {
      id: "healthcode-analysis",
      title: "HealthCode Analysis - AI Medical Intelligence",
      category: ["wordpress", "ai-ml"],
      description: "A hybrid medical intelligence platform featuring a custom-coded 'NeuroScan' content engine, serverless AI chat, and app-like AJAX performance.",
      fullDescription: "HealthCode Analysis is a high-performance medical intelligence hub that bypasses standard WordPress limitations. I engineered 'NeuroScan v5.0,' a custom PHP/AJAX content engine that delivers instant search, multi-grid filtering, and zero-latency interactions without page reloads. The platform utilizes a hybrid architecture, combining WordPress for content management with Cloudflare Workers for serverless AI chat functionality and strict ACF data modeling for clinical accuracy.",

      images: [
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
      thumbnail: "https://github.com/user-attachments/assets/477fc801-f7da-436e-b8a7-574368524761",

      technologies: ["Custom PHP", "AJAX", "Cloudflare Workers", "ACF Pro", "JavaScript", "Elementor", "MySQL"],
      achievements: [
        "Engineered 'NeuroScan', a custom PHP content engine",
        "Zero-latency AJAX search & filtering (No reloads)",
        "Serverless AI Chatbot integration (Edge Functions)",
        "Multi-instance grid architecture for complex archives"
      ],
      liveUrl: "https://healthcodeanalysis.com/",

      featured: true,
      isWordpress: true,
      metrics: { speed: "< 0.5s Interactions", architecture: "Hybrid Serverless" },
    },

    {
      id: "n8n-automations",
      title: "n8n Automation Workflows",
      category: ["automation", "ai-ml"],
      description: "Collection of powerful automation workflows including price monitoring, AI agents, and intelligent web scraping.",
      fullDescription: "A high-performance collection of serverless automation workflows designed to streamline business operations. Includes an AI-powered competitor pricing monitor that parses raw data via Google Gemini, an autonomous research agent for lead qualification using Wikipedia tools, and a critical safety alert system with instant multi-channel routing. Each workflow is optimized for logical precision and reliability.",

      images: [
        "https://github.com/user-attachments/assets/532f7e9f-23fd-4135-9b28-d7c3f0814b74",
        "https://github.com/user-attachments/assets/75756f74-5d72-4e7f-8425-a8a7fc65ef8a",
        "https://github.com/user-attachments/assets/5aa347a2-b07e-4c3d-ad90-8cffd177b56a",
        "https://github.com/user-attachments/assets/f82acfd2-eec3-4075-b29a-a8eb161808e5",
        "https://github.com/user-attachments/assets/f504a8ce-f0ce-4a3b-bb65-7b82e2714b88"

      ],
      thumbnail: "https://github.com/user-attachments/assets/532f7e9f-23fd-4135-9b28-d7c3f0814b74",

      technologies: ["n8n", "Node.js", "Python", "Google Gemini API", "Trello", "Wikipedia Tool", "Docker"],
      achievements: [
        "Automated AI pricing analysis & HTML parsing",
        "Autonomous lead research via Wikipedia agents",
        "Real-time incident routing to Trello & Email",
        "Conditional logic for high-priority alerts"
      ],

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/n8n-workflows" },
      ],

      featured: false,
      metrics: { workflows: "50+", reliability: "99.5%" },
    },

    {
      id: "digital-agency-automation",
      title: "Agency - Lead Generation & Automation",
      category: ["wordpress"],
      description: "A high-conversion agency platform featuring an immersive dark-mode UX, integrated API scheduling, and serverless booking automation.",
      fullDescription: "This project is a business automation engine built for a premium digital agency. Beyond its high-end 'Dark UI' aesthetic, I engineered a friction-less sales pipeline by integrating the Calendly API for real-time scheduling. The platform's 'killer feature' is a serverless 'Booking & Payment Bot' running on Cloudflare Workers, which automates lead qualification and discovery call bookings at the network edge, ensuring the agency operates 24/7 without manual intervention.",

      images: [
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
      thumbnail: "https://github.com/user-attachments/assets/496aa811-c40f-447d-b846-8460417500aa",

      technologies: ["Cloudflare Workers", "Calendly API", "MetForm", "Elementor Pro", "Jeg Kit", "Custom CSS"],
      achievements: [
        "Automated 100% of discovery call scheduling via API integration",
        "Engineered serverless 'BookingBot' on Cloudflare Edge",
        "Custom grayscale Google Maps API styling for dark-mode consistency",
        "Built interactive, high-performance service filtering system"
      ],
      liveUrl: "https://agency.healthcodeanalysis.com/",

      featured: false,
      isWordpress: true,
      metrics: { automation: "100% Sales Flow", performance: "A+ Core Web Vitals" },
    },

    {
      id: "medical-clinic-hub",
      title: "Clinic - Healthcare Service & Trust Platform",
      category: ["wordpress", "healthcare"],
      description: "A conversion-optimized medical service platform featuring interactive clinical proofing, transparent pricing tiers, and trust-based storytelling.",
      fullDescription: "Built for high-intent patient acquisition, this platform focuses on psychological trust signals. I engineered an interactive 'Before & After' visualizer to provide clinical proof of results, alongside a historical timeline to establish long-term authority. The system features a dual-tier pricing engine and a comprehensive lead capture pipeline using MetForm, designed to convert casual visitors into scheduled patients through strategic urgency banners and transparent service mapping.",

      images: [
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
      thumbnail: "https://github.com/user-attachments/assets/79558be8-09f7-4f7e-9a70-10d3ba281264",

      technologies: ["WordPress", "Elementor", "Royal Addons", "MetForm", "Jeg Kit", "Google Maps API"],

      achievements: [
        "Implemented interactive visual proofing via Before/After slider",
        "Engineered transparent service pricing tiers to increase booking trust",
        "Designed a multi-decade institutional timeline for authority building",
        "Integrated automated lead capture for new patient discount campaigns"
      ],


      featured: false,
      isWordpress: true,

      metrics: { conversion: "High Patient Intent", performance: "Optimized for Local SEO" },
    },

    {
      id: "rag-production-stack",
      title: "RAG Production Stack \u2014 Healthcare AI Infrastructure",
      category: ["ai-ml", "hybrid-cloud", "healthcare"],
      description: "Production-hardened RAG infrastructure with 12+ Docker services, healthcare security scanners (Checkov, Inferno, OpenSCAP, OWASP, SonarQube), full observability stack (Prometheus, Grafana, Loki, Jaeger), and Authelia SSO \u2014 running on a single 8GB RAM machine.",
      fullDescription: "A self-hosted, production-grade RAG (Retrieval-Augmented Generation) infrastructure stack designed for healthcare AI applications. Runs 12+ Docker services on a single 8GB RAM machine with carefully calibrated resource limits.\n\nCORE SERVICES\nLightRAG for knowledge graph-based retrieval with Gemini 2.5 Flash, ragAnything for multi-format document processing (PDF, DOCX, images), Nginx reverse proxy with SSL termination, Authelia SSO with single-user admin access, and Certbot for automated Let's Encrypt certificates.\n\nOBSERVABILITY\nPrometheus metrics collection, Grafana dashboards, Loki log aggregation, Jaeger distributed tracing, and AlertManager for incident routing \u2014 full production monitoring on a budget.\n\nSECURITY SCANNING\nCheckov for IaC security analysis, SonarQube for code quality, Trivy for container vulnerability scanning, Inferno for FHIR compliance testing, OpenSCAP for system hardening, and OWASP tools for web application security.\n\nINFRASTRUCTURE\nDocker Compose orchestration, Restic encrypted backups with verification scripts, SSL/TLS via Certbot, and security-hardened Nginx configuration. Hosted on healthcodeanalysis.com.",
      thumbnail: "",
      technologies: [
        "Docker Compose (12+ Services)",
        "LightRAG (Knowledge Graph RAG)",
        "ragAnything (Multi-Format Processing)",
        "Gemini 2.5 Flash (LLM)",
        "Prometheus + Grafana + Loki + Jaeger",
        "AlertManager (Incident Routing)",
        "SonarQube (Code Quality)",
        "Checkov (IaC Security)",
        "Trivy (Container Scanning)",
        "Inferno (FHIR Compliance Testing)",
        "OpenSCAP (System Hardening)",
        "OWASP (Web App Security)",
        "Authelia (SSO / 2FA)",
        "Nginx + Certbot (SSL)",
        "Restic (Encrypted Backups)",
      ],
      achievements: [
        "12+ Docker services running on a single 8GB RAM machine with calibrated resource limits",
        "Full observability: Prometheus metrics, Grafana dashboards, Loki logs, Jaeger tracing, AlertManager",
        "6 security scanners: Checkov, SonarQube, Trivy, Inferno, OpenSCAP, OWASP",
        "LightRAG knowledge graph with Gemini 2.5 Flash for healthcare document retrieval",
        "ragAnything multi-format processing (PDF, DOCX, images) with HyDE question generation",
        "Authelia SSO with 2FA, Nginx reverse proxy with security-hardened configuration",
        "Automated encrypted backups via Restic with verification scripts",
        "Production deployment on healthcodeanalysis.com with Let's Encrypt SSL",
      ],
      githubLinks: [
        { label: "Infrastructure", url: "https://github.com/Zahidulislam2222/rag-production-stack" },
      ],
      featured: false,
      isHybridCloud: true,
      metrics: {
        services: "12+ Docker Services",
        scanners: "6 Security Scanners",
        monitoring: "Full Observability Stack",
      },
    },

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
      category: "Cloud & Infrastructure",
      icon: "Cloud",
      color: "primary",
      skills: [
        { name: "AWS (Cognito, DynamoDB, Lambda, KMS, S3, IoT, Bedrock)", tier: "expert" },
        { name: "GCP (Cloud Run, Cloud SQL, BigQuery, Vertex AI)", tier: "expert" },
        { name: "Azure (AKS, Container Apps, Cosmos DB, OpenAI)", tier: "proficient" },
        { name: "Terraform (Multi-Cloud IaC)", tier: "expert" },
        { name: "Docker & Kubernetes (AKS/EKS)", tier: "proficient" },
        { name: "Cloudflare (Tunnels, Pages, Workers)", tier: "proficient" },
      ],
    },
    {
      category: "Full Stack Development",
      icon: "Code",
      color: "primary",
      skills: [
        { name: "React 18 / Next.js / TypeScript", tier: "expert" },
        { name: "Node.js / Express", tier: "expert" },
        { name: "Python / FastAPI", tier: "proficient" },
        { name: "WordPress / PHP 8+ / WooCommerce", tier: "expert" },
        { name: "Supabase / PostgreSQL / DynamoDB", tier: "expert" },
        { name: "GraphQL / REST APIs / FHIR R4", tier: "expert" },
      ],
    },
    {
      category: "Healthcare & Compliance",
      icon: "Heart",
      color: "success",
      skills: [
        { name: "HIPAA 2026 (Architecturally Enforced)", tier: "expert" },
        { name: "GDPR / Schrems II (Data Sovereignty)", tier: "expert" },
        { name: "SOC 2 Type II Readiness", tier: "proficient" },
        { name: "HL7 FHIR R4 (35 Resource Types)", tier: "expert" },
        { name: "Medical Terminology (SNOMED, LOINC, ICD-10, RxNorm)", tier: "proficient" },
        { name: "PHI Encryption (KMS / AES-GCM / pgcrypto)", tier: "expert" },
      ],
    },
    {
      category: "AI & Automation",
      icon: "Brain",
      color: "primary",
      skills: [
        { name: "AI Circuit Breaker (Bedrock / Vertex / OpenAI)", tier: "expert" },
        { name: "LightRAG / RAG Pipelines", tier: "proficient" },
        { name: "n8n Workflow Automation", tier: "expert" },
        { name: "Kafka Event Streaming", tier: "proficient" },
        { name: "Prometheus / Grafana / Loki Observability", tier: "proficient" },
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
      name: "WordPress & CMS",
      price: "From $1,500",
      period: "/project",
      description: "Professional WordPress sites with custom themes, headless architecture, and Gutenberg blocks.",
      features: [
        "Custom Theme or Headless Build",
        "WooCommerce / E-Commerce Setup",
        "Performance Optimization (Core Web Vitals A+)",
        "SEO + Structured Data",
        "WCAG 2.1 AA Accessibility",
        "CI/CD Pipeline + cPanel/Cloudflare Deploy",
        "3 Months Support",
      ],
      highlighted: false,
      ctaText: "Get Started",
    },
    {
      name: "Full Stack Application",
      price: "From $5,000",
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
      description: "HIPAA/GDPR/SOC 2/FHIR-compliant systems with audit infrastructure and compliance documentation.",
      features: [
        "HIPAA 2026 Architecturally Enforced",
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
  testimonials: [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "HealthFirst Clinic",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
      content: "Zahidul transformed our clinic's digital infrastructure with MediConnect. The hybrid cloud solution exceeded our expectations, and the HIPAA-compliant architecture gave us peace of mind. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Roberts",
      role: "CTO",
      company: "TechVentures Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content: "The n8n automation workflows Zahidul created saved our team over 100 hours per month. His expertise in cloud architecture and attention to detail is exceptional.",
      rating: 5,
    },
    {
      name: "Lisa Park",
      role: "E-Commerce Director",
      company: "Global Retail Co.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      content: "Chronos headless e-commerce solution tripled our page speed and increased conversions by 50%. Zahidul's understanding of both technical and business needs is remarkable.",
      rating: 5,
    },
  ],

  /* ========================================
     🏆 CERTIFICATIONS & BADGES
     ======================================== //
  certifications: [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
    { name: "Google Cloud Professional", issuer: "Google Cloud" },
    { name: "Terraform Associate", issuer: "HashiCorp" },
  ],*/

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
  { id: "hybrid-cloud", label: "Hybrid Cloud" },
  { id: "wordpress", label: "WordPress" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "automation", label: "Automation" },
  { id: "healthcare", label: "Healthcare" },
  { id: "fullstack", label: "Full Stack" },
  { id: "compliance", label: "Compliance" },
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
}

// Update these to use the new Interface
export type SkillCategory = typeof portfolioConfig.skillCategories[0];
export type Service = typeof portfolioConfig.services[0];
export type Testimonial = typeof portfolioConfig.testimonials[0];
