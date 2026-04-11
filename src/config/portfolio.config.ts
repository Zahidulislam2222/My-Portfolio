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
    title: "Full Stack Engineer & Cloud Architect",
    // These roles will rotate in the hero typewriter effect
    roles: [
      "Full Stack Engineer",
      "Cloud Architect",
      "HealthTech Specialist",
      "AI & RAG Engineer"
    ],
    bio: "The rare developer who has treated patients AND built the platforms they use. Former Physiotherapy Technologist (4 years clinical care) turned Full Stack Engineer. I architect multi-cloud healthcare platforms that pass HIPAA/GDPR compliance scans — not on slides, but in production code verified by Prowler and Checkov. I reduced a $300/month cloud bill to $2/month. I ship with 756+ automated test assertions.",
    shortBio: "Former clinician turned engineer — building HIPAA/FHIR-compliant healthcare platforms with multi-cloud infrastructure and AI.",
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
    { label: "Production Projects", value: 7, suffix: "" },
    { label: "Cloud Providers", value: 3, suffix: "" },
    { label: "Test Assertions", value: 756, suffix: "+" },
    { label: "FHIR R4 Resources", value: 35, suffix: "" },
    { label: "Cost Reduction", value: "99.3", suffix: "%" },
    { label: "Lines of Code", value: "44.5", suffix: "K" },
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
        "A production-grade, tri-cloud telehealth ecosystem (AWS + GCP + Azure) with 7 microservices (5 Node.js + 2 Python FastAPI), Kafka event streaming, AI Circuit Breaker (Bedrock/Vertex/Azure OpenAI), 13-step RAG pipeline with PII scrubbing, 414 Terraform resources, 35 FHIR R4 resource types with 10 medical terminology systems, and 756+ test assertions across 39+ test files — all at $2/mo idle cost (99.3% reduction from $300/mo). 44,500+ lines of code.",

      fullDescription: `MediConnect is a production-grade, multi-cloud healthcare platform that evolved through 3 major versions — from a serverless prototype (V1) to a fully compliant tri-cloud ecosystem (V3) across AWS, GCP, and Azure. 7 backend microservices (5 Node.js/Express, 2 Python/FastAPI), 4 Lambda functions across 2 AWS regions, 44,500+ lines of code.

INFRASTRUCTURE & COST
Zero-Cost Idle Architecture: $300+/month reduced to $2/month (99.3% reduction) across 3 clouds with 414 Terraform resources — verified by Prowler on HIPAA, GDPR, SOC 2, ISO 27001. Active-active Kubernetes clusters on AKS (Azure) + EKS (AWS), hidden behind Cloudflare Tunnels with zero exposed ports. Auto-failover to GCP Cloud Run within 5 seconds.

COMPLIANCE (Architecturally Enforced)
HIPAA 2026: KMS envelope encryption, immutable FHIR AuditEvent logs, breach detection, 15-min auto-logout, KMS-signed prescriptions, DICOM de-identification. GDPR/Schrems II: EU data locked to Frankfurt, consent ledger, cascading erasure. SOC 2 Type II: 13 CloudWatch metrics, idempotency guard, PITR 35-day recovery. 96 Checkov IaC security fixes, GuardDuty + Macie + CloudTrail.

FHIR R4 & CLINICAL
35 FHIR R4 resource types with 10 medical terminology systems (RxNorm, SNOMED CT, ICD-10-CM, ICD-11, LOINC, CVX, MVX, NDC, CPT, HCPCS). SMART on FHIR STU 2.0, full DICOMweb REST API (PS3.18), C-CDA 2.1 document generation, ONC-compliant interoperability. Clinical modules: CDS Hooks, med-reconciliation, prior-auth, MPI, bulk export, emergency access.

AI & REAL-TIME
99.99% AI availability via Circuit Breaker across Bedrock (Claude) / Vertex (Gemini) / Azure (GPT-4) — 13-step RAG pipeline with PII scrubbing, confidence scoring, and hallucination detection. Model Router with dynamic model selection per task type. AI Scribe: Transcribe Medical → SOAP Notes → EHR. Sub-second IoT vitals via Socket.io + MQTT. Kafka event streaming (MSK Serverless + Docker, 7 topics).

TESTING & PAYMENTS
756+ test assertions across 39+ test files (483 backend TS compliance + 53 RAG pipeline + 50 RAG red team + 15 RAG evaluation + 129 Python + 66 frontend Vitest + 10 Playwright E2E + 4 IaC verification scripts). 3-tier Stripe subscriptions with 24-loophole protection.`,

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
        "Python FastAPI (2 Microservices — Admin + DICOM)",
        "AWS (Cognito, KMS, DynamoDB, Lambda, S3, IoT, Bedrock, MSK)",
        "GCP (Cloud Run, Cloud SQL, BigQuery, Vertex AI)",
        "Azure (AKS, Container Apps, Cosmos DB, OpenAI)",
        "Terraform (414 Resources, Multi-Cloud IaC)",
        "Docker + Kubernetes (AKS + EKS Active-Active)",
        "Kafka (MSK Serverless + Docker, 7 Topics)",
        "LightRAG (13-Step RAG Pipeline + PII Scrubbing)",
        "AI Circuit Breaker (Bedrock / Vertex / Azure OpenAI — 99.99% Uptime)",
        "Model Router (Dynamic Model Selection per Task Type)",
        "Amazon Transcribe Medical (AI Scribe → SOAP Notes → EHR)",
        "HL7 FHIR R4 (35 Resources) + SMART on FHIR 2.0 + DICOMweb",
        "10 Medical Terminology Systems (RxNorm, SNOMED CT, ICD-10/11, LOINC, CVX, NDC, CPT, HCPCS)",
        "C-CDA 2.1 Document Generation + ONC-Compliant Interoperability",
        "HIPAA 2026 + GDPR/Schrems II + SOC 2 Type II + ISO 27001",
        "Stripe (3-Tier Subscriptions + 24-Loophole Protection)",
        "Cloudflare Tunnels (Zero Exposed Ports)",
        "Socket.io + MQTT (Sub-second IoT Vitals)",
        "Amazon Chime SDK (Video Consultations)",
        "Capacitor (Android APK) + FCM Push",
        "Prometheus + Grafana + Loki + Jaeger + AlertManager",
        "GitHub Actions (Parallel Multi-Cloud CI/CD)",
        "Prowler + Checkov (96 IaC Security Fixes)",
        "756+ Test Assertions (Vitest + Playwright + pytest + 39+ Test Files)",
      ],

      achievements: [
        "Zero-Cost Idle: $300+/mo reduced to $2/mo (99.3% reduction) across 3 clouds with 414 Terraform resources — verified by Prowler on HIPAA, GDPR, SOC 2, ISO 27001",
        "99.99% AI availability via Circuit Breaker across Bedrock (Claude) / Vertex (Gemini) / Azure (GPT-4) — 13-step RAG pipeline with PII scrubbing, confidence scoring, and hallucination detection",
        "35 FHIR R4 resources with 10 medical terminology systems — SMART on FHIR 2.0, full DICOMweb REST API (PS3.18), C-CDA 2.1 document generation, ONC-compliant interoperability",
        "756+ test assertions across 39+ test files (483 backend TS + 53 RAG pipeline + 50 RAG red team + 15 RAG evaluation + 129 Python + 66 Vitest + 10 Playwright E2E + 4 IaC verification)",
        "7 microservices (5 Node.js + 2 Python FastAPI) + 4 Lambda functions across 2 AWS regions — 44,500+ LOC",
        "Kafka event streaming (MSK Serverless + Docker, 7 topics), IoT vitals via MQTT, Chime video consultations",
        "3-tier Stripe subscriptions with 24-loophole protection, atomic locking prevents ghost charges",
        "Active-Active HA: AKS (Azure) + EKS (AWS) with 5-second auto-failover to GCP Cloud Run",
        "HIPAA 2026 + GDPR/Schrems II + SOC 2 Type II: KMS encryption, immutable audit logs, breach detection, EU data sovereignty",
        "Model Router with dynamic model selection per task type, AI Scribe (Transcribe Medical → SOAP Notes → EHR)",
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
        cost: "$2/mo Idle Cost (99.3% reduction from $300+/mo)",
        compliance: "HIPAA 2026 \u00b7 GDPR/Schrems II \u00b7 SOC 2 Type II \u00b7 ISO 27001 \u00b7 Prowler Verified",
        clouds: "AWS (Primary) \u00b7 GCP (Analytics + Backup) \u00b7 Azure (Compute)",
        infrastructure: "414 Terraform Resources \u00b7 AKS + EKS Active-Active HA",
        services: "7 Microservices (5 Node.js + 2 Python FastAPI) \u00b7 4 Lambda Functions",
        aiProviders: "3-Cloud Circuit Breaker \u2014 Claude / Gemini / GPT-4 (99.99% uptime)",
        fhirResources: "35 FHIR R4 Resources \u00b7 SMART on FHIR 2.0 \u00b7 DICOMweb \u00b7 C-CDA 2.1",
        terminologySystems: "10 Medical Terminology Systems (RxNorm, SNOMED CT, ICD-10/11, LOINC, CVX, NDC, CPT, HCPCS)",
        tests: "756+ Test Assertions (39+ Test Files) \u00b7 44,500+ LOC",
        streaming: "Kafka (MSK Serverless + Docker, 7 Topics) \u00b7 MQTT IoT Vitals",
        mobile: "Android + iOS (Capacitor + FCM Push)",
        payments: "3-Tier Stripe Subscriptions \u00b7 24-Loophole Protection",
        rto: "RTO 5 min / RPO 0 (Critical Tier)",
        security: "96 Checkov IaC Fixes \u00b7 OIDC Zero Static Keys \u00b7 KMS RSA-256",
      },
    },
    {
      id: "everyday-dental-surgery",
      title: "EDS Dental — Clinic Platform for Real Client",
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
      title: "Chronos V2 — Headless E-Commerce Platform",
      category: ["wordpress", "fullstack"],
      description: "Production-ready headless e-commerce for luxury watches — React 18 SPA (60+ shadcn/ui components, 11 routes, 9 lazy-loaded) decoupled from WordPress 7.0/WooCommerce via WPGraphQL + REST API. Custom OOP PHP 8.1+ plugin (27 classes, 4,791 LOC, PSR-4), real Stripe Checkout with webhook signature verification, WordPress 7.0 AI Client for auto-generated descriptions, 52 tests (0 PHPCS errors), 3 CI/CD workflows, WCAG 2.1 AA + GDPR compliance.",
      fullDescription: `Chronos is a production-ready headless e-commerce platform for luxury watches using a decoupled architecture where a React SPA communicates with WordPress 7.0 backend via GraphQL and REST APIs.

FRONTEND
React 18 SPA with TypeScript, Vite, Tailwind CSS, and 60+ shadcn/ui components on Radix UI primitives. 11 routes (9 lazy-loaded for code splitting), TanStack React Query for server state management, real Stripe Checkout redirect, JWT authentication, Framer Motion page transitions, and react-helmet-async for SEO meta tags.

BACKEND
WordPress 7.0 with WooCommerce, custom OOP PHP 8.1+ plugin "chronos-bridge" (27 classes, 4,791 LOC, PSR-4 autoloading). Custom Gutenberg blocks (watch showcase, collection grid, contact form). Custom Post Type (chronos_watch) with custom taxonomies (chronos_brand, chronos_movement). TransientCache with Redis-ready object cache.

AI & PAYMENTS
WordPress 7.0 AI Client for auto-generated watch descriptions and smart contact auto-responder. Real Stripe Checkout Sessions with webhook handling and signature verification, custom checkout fields.

TESTING & CI/CD
52 tests (33 PHPUnit + 19 Jest), 0 PHPCS errors. GitHub Actions CI/CD with 4 jobs: PHP Tests, Blocks Build & Tests, Frontend Build, Deploy to Production via cPanel API. Dependabot weekly scanning. Manual deploy with dry-run gate.

COMPLIANCE
WCAG 2.1 AA accessibility, GDPR data export/erase via WordPress Privacy API, cookie consent.`,

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

      technologies: [
        "React 18 + TypeScript + Vite",
        "60+ shadcn/ui Components (Radix UI)",
        "TanStack React Query + React Router 6",
        "Framer Motion 12 (Page Transitions)",
        "Tailwind CSS (Custom Luxury Design Tokens)",
        "WordPress 7.0 + WooCommerce + WPGraphQL",
        "OOP PHP 8.1+ Plugin (27 Classes, 4,791 LOC, PSR-4)",
        "Custom Gutenberg Blocks (3 Blocks)",
        "WordPress 7.0 AI Client (Auto-Generated Descriptions)",
        "Stripe Checkout Sessions + Webhook Signature Verification",
        "JWT Authentication (Stateless Headless Auth)",
        "Docker + Docker Compose (Local Dev)",
        "GitHub Actions CI/CD (4 Jobs) + Dependabot",
        "cPanel API Deployment + Manual Deploy with Dry-Run",
        "PHPUnit + Jest (52 Tests) + PHPCS (0 Errors)",
        "WCAG 2.1 AA + GDPR (WordPress Privacy API)",
        "SEO (react-helmet-async, JSON-LD, Open Graph)",
      ],
      achievements: [
        "3x faster page loads via decoupled headless architecture — custom OOP PHP 8.1+ plugin (27 classes, 4,791 LOC, PSR-4)",
        "WordPress 7.0 AI Client for auto-generated watch descriptions and smart contact auto-responder",
        "Real Stripe Checkout with webhook signature verification and custom checkout fields",
        "52 tests (33 PHPUnit + 19 Jest), 0 PHPCS errors, 3 CI/CD workflows (PHP + blocks + frontend)",
        "60+ shadcn/ui components, 11 routes (9 lazy-loaded), TanStack React Query caching",
        "WCAG 2.1 AA accessibility, GDPR data export/erase via WordPress Privacy API, cookie consent",
        "Custom Post Type + Taxonomies (chronos_watch, chronos_brand, chronos_movement)",
        "GitHub Actions CI/CD with auto-deploy via cPanel API, Dependabot scanning, manual deploy with dry-run gate",
      ],
      liveUrl: "https://chronos.healthcodeanalysis.com/",

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/Chronos" },
      ],

      featured: true,
      isHeadless: true,
      isWordpress: true,
      metrics: {
        architecture: "Headless: React SPA + WordPress 7.0 + WPGraphQL + REST API",
        plugin: "chronos-bridge: 27 OOP PHP 8.1+ Classes \u00b7 4,791 LOC \u00b7 PSR-4",
        frontend: "60+ shadcn/ui Components \u00b7 11 Routes (9 Lazy-Loaded)",
        tests: "52 Tests (33 PHPUnit + 19 Jest) \u00b7 0 PHPCS Errors",
        ai: "WordPress 7.0 AI Client (Auto Descriptions + Smart Replies)",
        payments: "Real Stripe Checkout + Webhook Signature Verification",
        compliance: "WCAG 2.1 AA \u00b7 GDPR \u00b7 Cookie Consent",
        cicd: "GitHub Actions (4 Jobs) \u00b7 Dependabot \u00b7 cPanel API Deploy",
      },
    },
    {
      id: "equipcert",
      title: "EquipCert AI — Safety Inspection SaaS",
      category: ["mobile", "ai-ml", "fullstack"],
      description: "Replaced 30-minute paper inspection with 60-second digital workflow — AI identifies equipment from photo, loads dynamic CMS checklist, captures GPS evidence, generates OSHA-compliant PDF report with legally-binding digital signature. Multi-AI provider abstraction (Gemini/OpenAI/Claude switchable via single env var), offline-first IndexedDB with SHA-256 integrity, 3-tier Stripe billing with DB-level feature gating, 25 security vulnerabilities fixed.",
      fullDescription: "EquipCert is a production-ready SaaS platform that replaced 30-minute paper inspections with a 60-second digital workflow. AI identifies equipment from photo, loads dynamic CMS checklist, captures GPS evidence, generates OSHA-compliant PDF report with legally-binding digital signature.\n\nBuilt with Next.js 16 and Capacitor 8 for cross-platform deployment (web + Android APK), it uses Supabase for real-time data sync with a production PostgreSQL schema (organizations, profiles, equipment, inspections).\n\nFeatures multi-AI provider abstraction (Gemini/OpenAI/Claude switchable via single env var) with pluggable architecture, offline-first IndexedDB queue with SHA-256 integrity verification for field use, 3-tier Stripe billing (free/pro/enterprise) with DB-level feature gating, GPS location capture, digital signature pads, and automated OSHA-compliant PDF report generation.\n\n25 security vulnerabilities fixed from a full audit.",

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

      technologies: ["Next.js 16 + React 19 + TypeScript", "Capacitor 8 (Android APK)", "Supabase (PostgreSQL + Auth)", "Multi-AI (Gemini/OpenAI/Claude — Single Env Var Switch)", "Stripe (3-Tier Billing + DB-Level Feature Gating)", "Offline-first IndexedDB + SHA-256 Integrity", "Contentful CMS (Dynamic Checklists)", "OSHA-Compliant PDF Generation", "GPS Evidence Capture + Digital Signatures", "Framer Motion", "Zod Validation", "Recharts Analytics"],
      achievements: [
        "Replaced 30-minute paper inspection with 60-second digital workflow — AI identifies equipment from photo, loads dynamic CMS checklist, captures GPS evidence, generates OSHA-compliant PDF",
        "Multi-AI provider abstraction: Gemini/OpenAI/Claude switchable via single env var with pluggable architecture",
        "Offline-first IndexedDB queue with SHA-256 integrity verification for field inspections without connectivity",
        "3-tier Stripe billing (free/pro/enterprise) with DB-level feature gating — not application-level",
        "25 security vulnerabilities fixed from full audit — legally-binding digital signatures",
        "Production SaaS: organizations, profiles, equipment registry, role-based access (admin/manager/technician)",
        "Real Android APK via Capacitor 8 with native camera and geolocation",
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
      title: "HealthCode Analysis — WordPress Automation Engine",
      category: ["wordpress", "ai-ml", "automation"],
      description: "Full-stack WordPress automation platform that clones Elementor-based template websites and programmatically replaces all content for multiple customers via a single command. Features NeuroScan v5.0 custom PHP engine, AskMe AI chatbot on Cloudflare Workers with Dialogflow ES ($0/month), 281 tests (59% coverage), 2 CI/CD pipelines, and Dark Glassmorphism Design System.",
      fullDescription: `HealthCode Analysis is a full-stack WordPress automation platform that clones Elementor-based template websites and programmatically replaces all content — photos, text, headings, and SEO metadata — for multiple customers via a single command.

AUTOMATION ENGINE
WordPress REST API Bridge Plugin (healthcode-api-bridge.php) with timing-safe API key authentication. Elementor JSON Parser recursively walks nested JSON trees to find and replace images, headings, text editors, and repeater fields. One-Command Customer Deployment reads a customer JSON config and executes the full pipeline: upload photos, swap Elementor JSON, update Rank Math SEO metadata, upload logo/favicon, and flush caches. Dry-run mode previews every change without touching the live site.

NEUROSCAN v5.0
Custom PHP framework with modular grid system, intelligent metadata calculation (server-side read time), and multi-instance architecture with scoped JavaScript for zero-conflict grids. Zero-reload AJAX filtering, live contextual search, and smart routing protection.

AI & CLOUD
AskMe AI chatbot on Cloudflare Workers with Dialogflow ES — $0/month, scales to unlimited posts. AI content augmentation with auto-generated summaries and medical prompt engineering.

DESIGN & TESTING
Dark Glassmorphism Design System (vanilla JS, zero dependencies). 281 automated tests (unit + integration + end-to-end swap verification), 59% code coverage with enforcement threshold. 2 CI/CD pipelines with Ruff linter, Bandit security scan, pre-commit hooks, and Dependabot.`,

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

      technologies: [
        "WordPress 6.9 + PHP 8.2 + MariaDB 10.11",
        "Elementor + ACF Pro + Rank Math SEO",
        "Python (Elementor JSON Parser + Deployment Scripts)",
        "Cloudflare Workers (AskMe AI Chatbot)",
        "Dialogflow ES (Conversational AI)",
        "Custom PHP Framework (NeuroScan v5.0)",
        "AJAX Pipeline (Zero-Reload Filtering)",
        "WordPress REST API Bridge Plugin",
        "Dark Glassmorphism Design System (Vanilla JS)",
        "LiteSpeed Cache + Cloudflare CDN",
        "GitHub Actions CI/CD (2 Pipelines)",
        "Ruff + Bandit (Linting + Security)",
        "281 Automated Tests (59% Coverage)",
        "cPanel Git + SSH Deploy Key (RSA 4096)",
      ],
      achievements: [
        "Automated multi-customer site deployment — single command swaps all content, images, and SEO metadata via custom REST API bridge with dry-run preview",
        "281 automated tests (unit + integration + E2E swap verification), 59% code coverage with enforcement threshold",
        "Built Dark Glassmorphism Design System (vanilla JS, zero dependencies) and AskMe AI chatbot on Cloudflare Workers with Dialogflow ES — $0/month",
        "NeuroScan v5.0: custom PHP content engine with modular grid system, zero-reload AJAX filtering, and multi-instance scoped architecture",
        "Elementor JSON Parser recursively walks nested trees to replace images, headings, testimonials, and CSS backgrounds",
        "2 CI/CD pipelines: auto-deploy plugin via cPanel File Manager API + manual customer deployment with approval gate",
        "WordPress REST API Bridge Plugin with timing-safe API key auth and Application Password fallback",
        "Idempotent operations, filename-based image matching, per-post Elementor CSS cache clearing",
      ],
      liveUrl: "https://healthcodeanalysis.com/",

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/healthcodeanalysis" },
      ],

      featured: true,
      isWordpress: true,
      metrics: {
        automation: "Single-Command Multi-Customer Deployment",
        tests: "281 Tests \u00b7 59% Coverage \u00b7 2 CI/CD Pipelines",
        engine: "NeuroScan v5.0 Custom PHP Framework",
        ai: "AskMe AI Chatbot (Cloudflare Workers + Dialogflow) \u00b7 $0/month",
        design: "Dark Glassmorphism Design System (Zero Dependencies)",
        deployment: "REST API Bridge + Elementor JSON Parser + Dry-Run Preview",
      },
    },

    {
      id: "n8n-automations",
      title: "n8n Automation Workflows",
      category: ["automation", "ai-ml"],
      description: "Competitor pricing monitor (daily AI scraping via Google Gemini → Google Sheets) + autonomous lead qualification agent (LangChain + Wikipedia research + scoring + cold email generation). Real-time incident routing with multi-channel alerts.",
      fullDescription: "A high-performance collection of serverless automation workflows designed to streamline business operations. Includes a competitor pricing monitor that performs daily AI scraping via Google Gemini and outputs to Google Sheets, an autonomous lead qualification agent using LangChain with Wikipedia research, scoring, and cold email generation, and a critical safety alert system with instant multi-channel routing. Each workflow is optimized for logical precision and reliability.",

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
      description: "Production-hardened RAG infrastructure with 23 containerized services on a single 8GB machine — 3-network isolation (frontend/backend/monitoring), zero-trust 2FA on every route, container hardening (read-only root, dropped capabilities, no-new-privileges), 6 compliance scanners (Checkov, Trivy, SonarQube, OWASP ZAP, HAPI FHIR, Inferno ONC G10), full observability stack, all at zero additional cost.",
      fullDescription: "A self-hosted, production-grade RAG (Retrieval-Augmented Generation) infrastructure stack designed for healthcare AI applications. Deploys 23 containerized services on a single 8GB RAM machine with carefully calibrated resource limits.\n\nCORE SERVICES\nLightRAG 1.4.6 for knowledge graph-based retrieval with Gemini 2.5 Flash, ragAnything for multi-format document processing (PDF, DOCX, images), Nginx reverse proxy with SSL termination, Authelia SSO with single-user admin access, and Certbot for automated Let's Encrypt certificates.\n\nINFRASTRUCTURE\n3-network isolation (frontend/backend/monitoring), zero-trust 2FA on every route, container hardening (read-only root, dropped capabilities, no-new-privileges). Docker Compose orchestration, Restic encrypted backups with verification scripts.\n\nOBSERVABILITY\nPrometheus metrics collection, Grafana dashboards, Loki log aggregation, Jaeger distributed tracing, and AlertManager for incident routing \u2014 full production monitoring at zero additional cost.\n\nSECURITY SCANNING\n6 compliance scanners: Checkov for IaC security, SonarQube for code quality, Trivy for container vulnerability scanning, OWASP ZAP for web app security, HAPI FHIR validator, and Inferno ONC G10 for FHIR compliance testing.\n\nHosted on healthcodeanalysis.com with Let's Encrypt SSL.",
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
        "23 containerized services on a single 8GB machine — 3-network isolation (frontend/backend/monitoring)",
        "Zero-trust 2FA on every route, container hardening (read-only root, dropped capabilities, no-new-privileges)",
        "Full observability stack (Prometheus + Loki + Jaeger + Grafana + AlertManager) — all at zero additional cost",
        "6 compliance scanners: Checkov, Trivy, SonarQube, OWASP ZAP, HAPI FHIR, Inferno ONC G10",
        "LightRAG 1.4.6 knowledge graph with Gemini 2.5 Flash for healthcare document retrieval",
        "ragAnything multi-format processing (PDF, DOCX, images) with HyDE question generation",
        "Authelia SSO with 2FA, security-hardened Nginx reverse proxy with SSL termination",
        "Production deployment on healthcodeanalysis.com with automated Let's Encrypt certificates",
      ],
      githubLinks: [
        { label: "Infrastructure", url: "https://github.com/Zahidulislam2222/rag-production-stack" },
      ],
      featured: false,
      isHybridCloud: true,
      metrics: {
        services: "23 Containerized Services (Single 8GB Machine)",
        isolation: "3-Network Isolation \u00b7 Zero-Trust 2FA \u00b7 Container Hardening",
        scanners: "6 Compliance Scanners (Checkov, Trivy, SonarQube, OWASP ZAP, HAPI FHIR, Inferno)",
        monitoring: "Prometheus + Grafana + Loki + Jaeger + AlertManager",
        cost: "Zero Additional Cost (Full Production Stack)",
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
      category: "Cloud & DevOps",
      icon: "Cloud",
      color: "primary",
      skills: [
        { name: "AWS (Cognito, DynamoDB, KMS, Bedrock, IoT, Lambda, MSK)", tier: "expert" },
        { name: "GCP (Cloud Run, BigQuery, Vertex AI)", tier: "expert" },
        { name: "Azure (AKS, Cosmos DB, OpenAI)", tier: "proficient" },
        { name: "Terraform (Multi-Cloud IaC, 414 Resources)", tier: "expert" },
        { name: "Docker & Kubernetes (AKS/EKS)", tier: "proficient" },
        { name: "GitHub Actions CI/CD", tier: "expert" },
        { name: "Cloudflare (Tunnels, Pages, Workers)", tier: "proficient" },
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
      ],
    },
    {
      category: "AI & RAG",
      icon: "Brain",
      color: "primary",
      skills: [
        { name: "AI Circuit Breaker (Bedrock / Vertex / Azure OpenAI)", tier: "expert" },
        { name: "LightRAG + RAG-Anything", tier: "proficient" },
        { name: "LangChain + n8n Automation", tier: "proficient" },
        { name: "Dialogflow ES", tier: "proficient" },
        { name: "Prometheus / Grafana / Loki / Jaeger", tier: "proficient" },
      ],
    },
    {
      category: "Healthcare & Compliance",
      icon: "Heart",
      color: "success",
      skills: [
        { name: "HIPAA 2026 (Architecturally Enforced)", tier: "expert" },
        { name: "GDPR / Schrems II + SOC 2 + CCPA", tier: "expert" },
        { name: "FHIR R4 (35 Resources) + SMART on FHIR + HL7 v2.x", tier: "expert" },
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
