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
    { label: "Production Projects", value: 20, suffix: "+" },
    { label: "Test Assertions", value: 756, suffix: "+" },
    { label: "FHIR R4 Resources", value: 42, suffix: "" },
    { label: "Cost Reduction", value: "99.3", suffix: "%" }
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
    { label: "Process", href: "#process" },
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
        "Problem: Healthcare platforms are expensive, non-compliant, and vendor-locked to a single cloud. Solution: A production-grade, tri-cloud telehealth ecosystem (AWS + GCP + Azure) with 7 microservices (5 Node.js + 2 Python FastAPI), Kafka event streaming, AI Circuit Breaker (Bedrock/Vertex/Azure OpenAI), 13-step RAG pipeline with PII scrubbing, 414 Terraform resources, 42 FHIR R4 resource types with 10 medical terminology systems, and 756+ test assertions across 39+ test files — all at $2/mo idle cost (99.3% reduction from $300/mo). 44,500+ lines of code.",

      fullDescription: `MediConnect is a production-grade, multi-cloud healthcare platform that evolved through 3 major versions — from a serverless prototype (V1) to a fully compliant tri-cloud ecosystem (V3) across AWS, GCP, and Azure. 7 backend microservices (5 Node.js/Express, 2 Python/FastAPI), 4 Lambda functions across 2 AWS regions, 44,500+ lines of code.

INFRASTRUCTURE & COST
Zero-Cost Idle Architecture: $300+/month reduced to $2/month (99.3% reduction) across 3 clouds with 414 Terraform resources — verified by Prowler on HIPAA, GDPR, SOC 2, ISO 27001. Active-active Kubernetes clusters on AKS (Azure) + EKS (AWS), hidden behind Cloudflare Tunnels with zero exposed ports. Auto-failover to GCP Cloud Run within 5 seconds.

COMPLIANCE (Architecturally Enforced)
HIPAA 2026: KMS envelope encryption, immutable FHIR AuditEvent logs, breach detection, 15-min auto-logout, KMS-signed prescriptions, DICOM de-identification. GDPR/Schrems II: EU data locked to Frankfurt, consent ledger, cascading erasure. SOC 2 Type II: 13 CloudWatch metrics, idempotency guard, PITR 35-day recovery. 96 Checkov IaC security fixes, GuardDuty + Macie + CloudTrail.

FHIR R4 & CLINICAL
42 FHIR R4 resource types with 10 medical terminology systems (RxNorm, SNOMED CT, ICD-10-CM, ICD-11, LOINC, CVX, MVX, NDC, CPT, HCPCS). SMART on FHIR STU 2.0, full DICOMweb REST API (PS3.18), C-CDA 2.1 document generation, ONC-compliant interoperability. Clinical modules: CDS Hooks, med-reconciliation, prior-auth, MPI, bulk export, emergency access.

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
        "HL7 FHIR R4 (42 Resources) + SMART on FHIR 2.0 + DICOMweb",
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
        "42 FHIR R4 resources with 10 medical terminology systems — SMART on FHIR 2.0, full DICOMweb REST API (PS3.18), C-CDA 2.1 document generation, ONC-compliant interoperability",
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
        { label: "Technical Overview", url: "https://github.com/user-attachments/files/26647740/MediConnect.Comprehensive.Technical.Overview.pdf" },
        { label: "Enterprise Architecture", url: "https://github.com/user-attachments/files/26647741/MediConnect_Enterprise_Architecture.pdf" },
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
        fhirResources: "42 FHIR R4 Resources \u00b7 SMART on FHIR 2.0 \u00b7 DICOMweb \u00b7 C-CDA 2.1",
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
      id: "rag-production-stack",
      title: "RAG Production Stack \u2014 Healthcare AI Infrastructure",
      category: ["ai-ml", "hybrid-cloud", "healthcare"],
      images: [
        "https://github.com/user-attachments/assets/ae15af25-9d1f-4d85-aa9c-d949a775f8ed",
        "https://github.com/user-attachments/assets/3717f990-a7af-486c-a015-5eaeac1b6566",
        "https://github.com/user-attachments/assets/52babe2f-1ecd-4b03-bbaf-64e03d80868f",
      ],
      description: "Problem: RAG demos are everywhere — production-grade RAG infrastructure with security, observability, and compliance scanning is not. Solution: Production-hardened RAG infrastructure with 23 containerized services on a single 8GB machine — 3-network isolation (frontend/backend/monitoring), zero-trust 2FA on every route, container hardening (read-only root, dropped capabilities, no-new-privileges), 6 compliance scanners (Checkov, Trivy, SonarQube, OWASP ZAP, HAPI FHIR, Inferno ONC G10), full observability stack, all at zero additional cost.",
      fullDescription: "A self-hosted, production-grade RAG (Retrieval-Augmented Generation) infrastructure stack designed for healthcare AI applications. Deploys 23 containerized services on a single 8GB RAM machine with carefully calibrated resource limits.\n\nCORE SERVICES\nLightRAG 1.4.6 for knowledge graph-based retrieval with Gemini 2.5 Flash, ragAnything for multi-format document processing (PDF, DOCX, images), Nginx reverse proxy with SSL termination, Authelia SSO with single-user admin access, and Certbot for automated Let's Encrypt certificates.\n\nINFRASTRUCTURE\n3-network isolation (frontend/backend/monitoring), zero-trust 2FA on every route, container hardening (read-only root, dropped capabilities, no-new-privileges). Docker Compose orchestration, Restic encrypted backups with verification scripts.\n\nOBSERVABILITY\nPrometheus metrics collection, Grafana dashboards, Loki log aggregation, Jaeger distributed tracing, and AlertManager for incident routing \u2014 full production monitoring at zero additional cost.\n\nSECURITY SCANNING\n6 compliance scanners: Checkov for IaC security, SonarQube for code quality, Trivy for container vulnerability scanning, OWASP ZAP for web app security, HAPI FHIR validator, and Inferno ONC G10 for FHIR compliance testing.\n\nHosted on healthcodeanalysis.com with Let's Encrypt SSL.",
      thumbnail: "",
      technologies: [
        "Docker Compose (23 Services)",
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
      pdfLinks: [
        { label: "Technical Overview", url: "https://github.com/user-attachments/files/26647758/RAG_Production_Stack_Technical_Overview.pdf" },
      ],
      featured: true,
      isHybridCloud: true,
      metrics: {
        services: "23 Containerized Services (Single 8GB Machine)",
        isolation: "3-Network Isolation \u00b7 Zero-Trust 2FA \u00b7 Container Hardening",
        scanners: "6 Compliance Scanners (Checkov, Trivy, SonarQube, OWASP ZAP, HAPI FHIR, Inferno)",
        monitoring: "Prometheus + Grafana + Loki + Jaeger + AlertManager",
        cost: "Zero Additional Cost (Full Production Stack)",
      },
    },
    {
      id: "chronos",
      title: "Chronos V2 — Headless E-Commerce Platform",
      category: ["wordpress", "fullstack"],
      description: "Problem: Traditional WordPress e-commerce is slow and monolithic — themes are tightly coupled to the CMS. Solution: Production-ready headless e-commerce for luxury watches — React 18 SPA (48 shadcn/ui components, 11 routes, 9 lazy-loaded) decoupled from WordPress 7.0/WooCommerce via WPGraphQL + REST API. Custom OOP PHP 8.1+ plugin (27 classes, 4,613 LOC, PSR-4), real Stripe Checkout with webhook signature verification, WordPress 7.0 AI Client for auto-generated descriptions, 52 tests (0 PHPCS errors), 3 CI/CD workflows, WCAG 2.1 AA + GDPR compliance.",
      fullDescription: `Chronos is a production-ready headless e-commerce platform for luxury watches using a decoupled architecture where a React SPA communicates with WordPress 7.0 backend via GraphQL and REST APIs.

FRONTEND
React 18 SPA with TypeScript, Vite, Tailwind CSS, and 48 shadcn/ui components on Radix UI primitives. 14 routes (9 lazy-loaded for code splitting), TanStack React Query for server state management, real Stripe Checkout redirect, JWT authentication, Framer Motion page transitions, and react-helmet-async for SEO meta tags.

BACKEND
WordPress 7.0 with WooCommerce, custom OOP PHP 8.1+ plugin "chronos-bridge" (27 classes, 4,613 LOC, PSR-4 autoloading). Custom Gutenberg blocks (watch showcase, collection grid, contact form). Custom Post Type (chronos_watch) with custom taxonomies (chronos_brand, chronos_movement). TransientCache with Redis-ready object cache.

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
        "48 shadcn/ui Components (Radix UI)",
        "TanStack React Query + React Router 6",
        "Framer Motion 12 (Page Transitions)",
        "Tailwind CSS (Custom Luxury Design Tokens)",
        "WordPress 7.0 + WooCommerce + WPGraphQL",
        "OOP PHP 8.1+ Plugin (27 Classes, 4,613 LOC, PSR-4)",
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
        "3x faster page loads via decoupled headless architecture — custom OOP PHP 8.1+ plugin (27 classes, 4,613 LOC, PSR-4)",
        "WordPress 7.0 AI Client for auto-generated watch descriptions and smart contact auto-responder",
        "Real Stripe Checkout with webhook signature verification and custom checkout fields",
        "52 tests (33 PHPUnit + 19 Jest), 0 PHPCS errors, 3 CI/CD workflows (PHP + blocks + frontend)",
        "48 shadcn/ui components, 14 routes (9 lazy-loaded), TanStack React Query caching",
        "WCAG 2.1 AA accessibility, GDPR data export/erase via WordPress Privacy API, cookie consent",
        "Custom Post Type + Taxonomies (chronos_watch, chronos_brand, chronos_movement)",
        "GitHub Actions CI/CD with auto-deploy via cPanel API, Dependabot scanning, manual deploy with dry-run gate",
      ],
      liveUrl: "https://chronos.healthcodeanalysis.com/",

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/Chronos" },
      ],

      pdfLinks: [
        { label: "Full Documentation", url: "https://github.com/user-attachments/files/26647807/Chronos.pdf" },
        { label: "The Blueprint", url: "https://github.com/user-attachments/files/26647808/The_Chronos_Blueprint.pdf" },
      ],

      featured: true,
      isHeadless: true,
      isWordpress: true,
      metrics: {
        architecture: "Headless: React SPA + WordPress 7.0 + WPGraphQL + REST API",
        plugin: "chronos-bridge: 27 OOP PHP 8.1+ Classes \u00b7 4,613 LOC \u00b7 PSR-4",
        frontend: "48 shadcn/ui Components \u00b7 14 Routes (9 Lazy-Loaded)",
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
      description: "Problem: Paper-based equipment inspections have a 73% audit failure rate, take 30+ minutes each, and provide zero verifiable proof of on-site completion. Solution: Replaced 30-minute paper inspection with 60-second digital workflow — AI identifies equipment from photo, loads dynamic CMS checklist, captures GPS evidence, generates OSHA-compliant PDF report with legally-binding digital signature. Multi-AI provider abstraction (Gemini/OpenAI/Claude switchable via single env var), offline-first IndexedDB with SHA-256 integrity, 3-tier Stripe billing with DB-level feature gating, 25 security vulnerabilities fixed.",
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

      pdfLinks: [
        { label: "AI Blueprint", url: "https://github.com/user-attachments/files/26647775/EquipCert_AI_Blueprint.pdf" },
        { label: "Full Documentation", url: "https://github.com/user-attachments/files/26647776/EquipCert.pdf" },
      ],

      featured: true,
      isHeadless: true,
      isContentful: true,
      metrics: { ai: "3 AI Providers", offline: "SHA-256 Integrity", security: "25 Vulns Fixed" },
    },

    {
      id: "everyday-dental-surgery",
      title: "EDS Dental — Clinic Platform for Real Client",
      category: ["healthcare", "fullstack", "compliance"],

      description:
        "Problem: A real dental clinic in Dhaka needed a compliant digital platform — not a WordPress template, but a system that passes HIPAA audits. Solution: A production-grade, HIPAA / FHIR R4 / SOC 2 Type II-ready dental clinic platform with Supabase backend, 11 Edge Functions, 11 database migrations, AES-256 PHI encryption, 4-role RBAC with Row-Level Security, FHIR R4 interoperability (10 resource types, 3 terminology systems), Stripe payments, bilingual i18n (English/Bengali), three-tier animation system (GSAP + Framer Motion + Tailwind), 93% compliance audit score (56/60 checks), and premium UI components (TiltCard, MagneticButton, CursorGlow).",

      fullDescription: `Everyday Dental Surgery & Implant Center is a production-grade healthcare web application built to HIPAA 2026, FHIR R4, and SOC 2 Type II compliance standards for a dental clinic in Dhaka, Bangladesh.

PLATFORM
23 routes (16 public + 5 auth + 2 protected) with lazy loading, 11 Supabase Edge Functions, 11 database migrations, 4 user roles (Patient, Doctor, Receptionist, Admin), bilingual interface (English + Bengali).

COMPLIANCE (93% Audit Score \u2014 56/60 Checks)
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
        "React Router v6 (23 Routes, Lazy-Loaded)",
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
        "10 SOC 2 Policy Documents",
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
        "23 routes, 12 service categories, 50+ pricing items, bilingual (English + Bengali)",
        "Admin Panel: 10 modules including audit logs, user management, security incidents, data retention",
        "60-check compliance audit scanner as CI/CD deploy gate (npm run predeploy)",
        "PWA with service worker, Cloudflare Pages deployment with security headers",
      ],

      liveUrl: "https://dental-clinic-anq.pages.dev",

      githubLinks: [
        { label: "Full Stack", url: "https://github.com/Zahidulislam2222/dental-clinic" },
      ],

      pdfLinks: [
        { label: "Project Documentation", url: "https://github.com/user-attachments/files/26647795/EDS_Project_Documentation.pdf" },
      ],

      videoId: "8QjGhAE7gpw",
      featured: false,
      isHealthcare: true,

      metrics: {
        compliance: "HIPAA 2026 (95%) \u00b7 FHIR R4 (100%) \u00b7 SOC 2 Type II Ready (83%) \u00b7 93% Overall",
        pages: "23 Routes (16 Public + 5 Auth + 2 Protected) \u00b7 12 Service Categories \u00b7 50+ Pricing Items",
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
      id: "groza-ada-compliance",
      title: "Groza Learning Center — ADA & GDPR Compliance (Client Project)",
      category: ["wordpress", "compliance", "fullstack"],

      description:
        "Problem: A Los Angeles learning center's WordPress/Elementor site had 100+ accessibility errors across 30+ pages, 200+ color contrast failures, tracking scripts firing without consent, and a UserWay overlay increasing legal liability. Solution: Full ADA/WCAG 2.1 AA remediation via 6 server-side PHP code snippets (zero theme modifications), GDPR cookie consent with CookieYes (25 cookies categorized), and custom PHP output buffer that strips 4 hardcoded tracking scripts (Meta Pixel, AdRoll, Google Ads, Bing UET) before consent and reloads after — verified 0 tracking requests before consent across 16 pages.",

      fullDescription: `Groza Learning Center is a real client project (Upwork contract, April 2026) — full ADA accessibility remediation and GDPR compliance implementation for a WordPress/Elementor education website in Los Angeles.

PHASE 1: ADA / WCAG 2.1 AA COMPLIANCE
Full WAVE + Lighthouse audit across 30+ pages. Fixed 100+ accessibility errors: 50+ missing alt texts (WP_HTML_Tag_Processor), broken ARIA references on mega-menus, empty buttons/links (search, nav, social icons), missing form labels (reCAPTCHA, CF7), broken skip navigation, heading hierarchy issues. Resolved 200+ color contrast failures with 15 distinct color corrections (all meeting 4.5:1 AA minimum). Disabled UserWay overlay widget (active class action lawsuit Feb 2026, 1,023 companies sued while using overlays). All fixes via server-side PHP Code Snippets — zero theme or plugin files modified, fully reversible.

PHASE 2: TRACKING & PRIVACY CLEANUP
Removed dead Universal Analytics (loading for ~2 years to shut-down endpoint). Restricted reCAPTCHA v3 to form pages only (was loading on all 30+ pages). Switched YouTube embeds to privacy-enhanced mode (youtube-nocookie.com), future-proof for any new videos.

PHASE 3: GDPR COOKIE CONSENT
Installed CookieYes consent banner (GDPR worldwide). Scanned and categorized 25 cookies across 4 categories (Necessary, Analytics, Advertisement, Functional). Manually fixed 3 cookies auto-scan missed. Enabled Google Consent Mode and Microsoft UET Consent Mode.

PHASE 4: GDPR SCRIPT BLOCKING
Discovered 4 tracking scripts hardcoded directly in HTML (not managed by any WordPress plugin). Built custom PHP output buffer solution: strips scripts from HTML at server level using preg_replace, stores in JS function in footer, reads cookieyes-consent cookie, loads scripts only after "advertisement" consent, listens for real-time consent changes. Verified: 0 Facebook requests before consent, full tracking after Accept, across 16 pages.

KEY PHP TECHNIQUES
WP_HTML_Tag_Processor for alt text injection, style_loader_tag filter for contrast CSS overrides, str_ireplace for site-wide text replacements, ob_start output buffer for GDPR script masking, preg_replace for tracking script removal, wp_dequeue_script for conditional reCAPTCHA loading.`,

      images: [
        "https://github.com/user-attachments/assets/d10d1fad-7eb2-4b19-b0fe-264645c063d3",
        "https://github.com/user-attachments/assets/9c02e98d-5551-4ae9-a206-c870d57e07d8",
        "https://github.com/user-attachments/assets/664c7d2c-1dd1-4eb8-b8a8-f42c578f079d",
        "https://github.com/user-attachments/assets/fe3d08ad-0156-41b9-8f23-a8d5f04a9b0b",
      ],
      thumbnail: "https://github.com/user-attachments/assets/d10d1fad-7eb2-4b19-b0fe-264645c063d3",

      technologies: [
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
        "Contact Form 7 + reCAPTCHA v3",
      ],

      achievements: [
        "Real client project (Upwork contract) — not a personal project or demo",
        "100+ accessibility errors fixed across 30+ pages — all via server-side PHP, zero theme modifications",
        "200+ color contrast failures resolved with 15 distinct corrections (all meeting WCAG AA 4.5:1 minimum)",
        "Disabled UserWay overlay (legal liability — 1,023 companies sued in 2024 while using overlays) and replaced with native code-level ADA fixes",
        "Built custom PHP output buffer to strip 4 hardcoded tracking scripts before consent and reload after — verified 0 tracking requests before consent",
        "GDPR cookie consent system: 25 cookies scanned, categorized, and managed across 4 categories",
        "Restricted reCAPTCHA v3 to form pages only (was loading on all 30+ pages unnecessarily)",
        "YouTube embeds switched to privacy-enhanced mode site-wide — future-proof for new videos",
        "All 6 code snippets fully reversible — deactivate to revert any change",
        "16 pages individually verified post-fix for ADA + GDPR compliance",
      ],

      liveUrl: "https://grozalearningcenter.com",

      pdfLinks: [
        { label: "Case Study", url: "https://github.com/user-attachments/files/26782337/ADA.GDPR.Compliance.Case.Study.Groza.Learning.Center._.Zahidul.Islam.pdf" },
      ],

      featured: false,
      isWordpress: true,

      metrics: {
        client: "Real Upwork Client (Los Angeles, CA)",
        pages: "30+ Pages Audited & Fixed",
        errors: "100+ ADA Errors Fixed + 200+ Contrast Fixes",
        compliance: "WCAG 2.1 AA + GDPR (Worldwide)",
        method: "6 PHP Code Snippets (Zero Theme Modifications)",
        cookies: "25 Cookies Categorized + 4 Tracking Scripts Blocked Before Consent",
        verification: "WAVE 0 Errors + 16 Pages Individually Tested",
        reversibility: "100% Reversible (Snippet-Based Architecture)",
      },
    },

    {
      id: "healthcode-analysis",
      title: "HealthCode Analysis — WordPress Automation Engine",
      category: ["wordpress", "ai-ml", "automation"],
      description: "Problem: Deploying identical WordPress sites for multiple clients required hours of manual content swapping, image replacement, and SEO updates per site. Solution: Full-stack WordPress automation platform that clones Elementor-based template websites and programmatically replaces all content for multiple customers via a single command. Features NeuroScan v5.0 custom PHP engine, AskMe AI chatbot on Cloudflare Workers with Dialogflow ES ($0/month), 313 tests (55% coverage), 2 CI/CD pipelines, and Dark Glassmorphism Design System.",
      fullDescription: `HealthCode Analysis is a full-stack WordPress automation platform that clones Elementor-based template websites and programmatically replaces all content — photos, text, headings, and SEO metadata — for multiple customers via a single command.

AUTOMATION ENGINE
WordPress REST API Bridge Plugin (healthcode-api-bridge.php) with timing-safe API key authentication. Elementor JSON Parser recursively walks nested JSON trees to find and replace images, headings, text editors, and repeater fields. One-Command Customer Deployment reads a customer JSON config and executes the full pipeline: upload photos, swap Elementor JSON, update Rank Math SEO metadata, upload logo/favicon, and flush caches. Dry-run mode previews every change without touching the live site.

NEUROSCAN v5.0
Custom PHP framework with modular grid system, intelligent metadata calculation (server-side read time), and multi-instance architecture with scoped JavaScript for zero-conflict grids. Zero-reload AJAX filtering, live contextual search, and smart routing protection.

AI & CLOUD
AskMe AI chatbot on Cloudflare Workers with Dialogflow ES — $0/month, scales to unlimited posts. AI content augmentation with auto-generated summaries and medical prompt engineering.

DESIGN & TESTING
Dark Glassmorphism Design System (vanilla JS, zero dependencies). 313 automated tests (unit + integration + end-to-end swap verification), 59% code coverage with enforcement threshold. 2 CI/CD pipelines with Ruff linter, Bandit security scan, pre-commit hooks, and Dependabot.`,

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
        "281 Automated Tests (55% Coverage)",
        "cPanel Git + SSH Deploy Key (RSA 4096)",
      ],
      achievements: [
        "Automated multi-customer site deployment — single command swaps all content, images, and SEO metadata via custom REST API bridge with dry-run preview",
        "313 automated tests (unit + integration + E2E swap verification), 59% code coverage with enforcement threshold",
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

      pdfLinks: [
        { label: "Analysis Engine", url: "https://github.com/user-attachments/files/26647772/HealthCode_Analysis_Engine.pdf" },
        { label: "Full Documentation", url: "https://github.com/user-attachments/files/26647771/HealthCode.Analysis.pdf" },
      ],

      featured: false,
      isWordpress: true,
      metrics: {
        automation: "Single-Command Multi-Customer Deployment",
        tests: "313 Tests \u00b7 55% Coverage \u00b7 2 CI/CD Pipelines",
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
      id: "email-finder",
      title: "EmailFinder — HTTP Email Discovery & Verification",
      category: ["fullstack", "automation"],
      description: "Problem: Email finder tools charge per lookup and rely on SMTP verification that most ISPs block (port 25). Solution: HTTP-only email discovery tool with a 5-step waterfall pipeline — DNS validation, web scraping (15+ pages per domain), pattern generation (8 formats), multi-signal verification (Gravatar + GitHub + disposable detection), and confidence scoring (0-99%). Single dependency. 46 test assertions. Works from any internet connection.",
      fullDescription: `EmailFinder is a Python CLI tool that discovers and verifies business emails using only HTTP requests — no SMTP, no paid API keys, no rate limits.

PIPELINE
5-step waterfall: DNS/MX validation with provider detection (Google/Microsoft/Zoho), web scraping across 15+ pages per domain (HTML, mailto links, obfuscated patterns), pattern generation (8 common email formats), multi-signal verification (Gravatar avatar lookup, GitHub commit search, disposable domain detection), and weighted confidence scoring (0-99%).

DNS INTELLIGENCE
MX record resolution, SPF record parsing, DMARC policy detection, email provider identification (Google Workspace, Microsoft 365, Zoho, ProtonMail, Fastmail, self-hosted).

WEB SCRAPING
Crawls homepage, about, team, contact, staff, people pages with both www and non-www variants. Extracts standard emails, mailto links, and obfuscated patterns (name [at] domain [dot] com). Filters junk domains and non-email patterns.

VERIFICATION
Gravatar check (MD5 hash → avatar lookup), GitHub user search (public commit email), disposable domain detection (100+ providers), RFC 5322 syntax validation. All HTTP-based — works behind ISP port 25 blocks.

SCORING
Weighted confidence engine: scraped + name match + Gravatar = 99%. Pattern + Gravatar = 65-75%. Pattern only = 45-50%. Disposable domain = 0%.`,

      thumbnail: "",
      technologies: [
        "Python 3.10+",
        "dnspython (DNS/MX Resolution)",
        "urllib (HTTP Client — stdlib)",
        "hashlib (Gravatar MD5 — stdlib)",
        "Modular Architecture (scrapers, verifiers, utils)",
        "CLI + Python Module (Dual Interface)",
        "CSV Batch Processing",
        "46 Test Assertions (4 Suites)",
      ],
      achievements: [
        "5-step waterfall pipeline: DNS → scrape → patterns → verify → score",
        "Web scraper crawls 15+ pages per domain, extracts emails from HTML, mailto links, and obfuscated patterns",
        "Multi-signal verification: Gravatar (MD5 avatar check), GitHub (commit search), disposable detection (100+ domains)",
        "DNS intelligence: MX records, SPF, DMARC, provider detection (Google/Microsoft/Zoho/ProtonMail)",
        "Confidence scoring engine: 0-99% weighted by discovery method and verification signals",
        "Zero SMTP required — works from any internet connection (ISP port 25 blocks don't matter)",
        "Single external dependency (dnspython). 1,092 lines of Python. 46 test assertions.",
        "Security: no eval/exec, no subprocess, no POST requests, rate limited, read-only HTTP",
      ],

      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/email-finder" },
      ],

      featured: false,
      metrics: {
        pipeline: "5-Step Waterfall (DNS → Scrape → Patterns → Verify → Score)",
        verification: "Gravatar + GitHub + Disposable Detection",
        scraping: "15+ Pages Per Domain (HTML + mailto + Obfuscated)",
        tests: "46 Assertions · 4 Test Suites",
        dependencies: "1 (dnspython) · 1,092 LOC",
      },
    },

    {
      id: "yuktha-wellness",
      title: "Yuktha Wellness — PCOS RAG Chatbot Hardening (Client Project)",
      category: ["ai-ml", "fullstack", "healthcare"],

      description:
        "Problem: An India-based women's health startup had a PCOS chatbot leaking errors, missing safety gates, and returning ungrounded answers. Solution: 8-commit, +1,484-line rebuild of the RAG pipeline — PCOS knowledge corpus ingestion (SHA-256 idempotent upserts), native Pinecone retriever with 0.7 score threshold, GPT-4o-mini query rewriting, hybrid dense+BM25 retrieval with Cohere rerank-english-v3.0, code-enforced safety gates (structured-output JSON schema, cosine grounding gate, 47-pattern emergency detector firing before any LLM call), and Redis-backed embedding + response caches.",

      fullDescription: `Yuktha Wellness is a paid Milestone 1 engagement (April 2026, ongoing) — backend / AI engineering for an India-based women's health startup's PCOS chatbot. Static-verified delivery contract: 8 commits, +1,484 / -175 lines across 18 files, all locally committed and pending client funding.

PIPELINE REBUILD
Native Pinecone retriever (replaced LangChain wrapper) with hoisted lazy singletons for Pinecone client, embedder, and index handle. Score threshold 0.7 enforced. GPT-4o-mini query rewriting (max 80 tokens, temp 0.2) before retrieval. Hybrid dense top-20 + BM25 top-20 merge with deduplication, then Cohere rerank-english-v3.0 to top-5. Cohere failure or missing API key falls back to dense-only top-5 with 0.7 threshold.

KNOWLEDGE INGESTION
PCOS corpus ingestion script with recursive splitter (size 1000, overlap 200), per-chunk metadata (source_id, title, section, last_reviewed_date, reviewer_initials, jurisdiction), SHA-256 idempotent upserts, Pinecone describeIndex dimension safety check before any work. Static-only ship per "engineer ships code, clinician ships content" decision.

SAFETY GATES (CODE-ENFORCED)
Structured outputs json_schema with {reply, confidence, citations[], emergency_flag}. Empty citations OR confidence < 0.6 triggers safe fallback. Cosine grounding gate at threshold 0.55, skipped only when confidence ≥ 0.9. Emergency detector with 47 patterns (cardiac, respiratory, neurological, stroke FAST, bleeding, anaphylaxis, mental-health crisis) fires BEFORE any LLM round-trip — 17/17 true positives, 15/15 false-positive guards.

LATENCY WINS
Promise.allSettled for parallel weather + geocode (soft geocode failure no longer poisons weather). Redis-backed embedding cache (SHA-256 of normalized rewritten query, 1h TTL) and response cache (SHA-256 of query + age + category, 1h TTL) via utils/cache.js. Cache key normalization (lowercase, collapse whitespace, strip trailing punctuation). Lazy Redis client + isReady gate ensures Redis-down does not break the request path.

CONTEXT LEAKAGE FIXES
XML-tagged userCtx (<user_query>, <user_profile>, <rag_context>, <conversation_history>). Both system prompts reference all four tag names verbatim. Topic-aware history filter via cosine similarity threshold 0.5, cap 6, preserve chronological order. embedTurn caches per-turn embeddings via the same Redis embedding cache.

VERIFICATION
node --check clean on 17 files. /security-review NO_FINDINGS at confidence ≥8 — NoSQL/Mongoose injection, SSRF, path traversal, hardcoded secrets, weak crypto, JWT bypass, response cache cross-user leakage, embedding cache poisoning, error/stack-trace exposure all checked. cosineSimilarity, sha256Hex, normalizeKey, detectEmergency all unit-tested. Trust contract: every change labeled "static-verified, runtime-untested" — runtime gates explicitly named.`,

      thumbnail: "",

      technologies: [
        "Node.js / Express",
        "Pinecone (Vector DB, 1536-dim, native client)",
        "OpenAI GPT-4o + GPT-4o-mini (Structured Outputs)",
        "Cohere rerank-english-v3.0",
        "BM25 (Custom utils/bm25.js)",
        "Redis (Embedding + Response Caches, 1h TTL)",
        "Mongoose / MongoDB (Chat History, additive embedding field)",
        "SHA-256 Idempotent Upserts",
        "47-Pattern Emergency Detector",
        "Cosine Grounding Gate (Threshold 0.55)",
        "Promise.allSettled (Parallel External Calls)",
        "/security-review NO_FINDINGS at Confidence ≥8",
      ],

      achievements: [
        "Real paid milestone (India client, ongoing) — 8 commits / +1,484 lines / 18 files in static-verified hand-off",
        "Rebuilt RAG pipeline end-to-end — native Pinecone retriever (0.7 score threshold), GPT-4o-mini query rewriting, hybrid dense + BM25 + Cohere rerank-english-v3.0",
        "Code-enforced safety gates — structured JSON schema, cosine grounding gate at 0.55, 47-pattern emergency detector firing BEFORE any LLM call (17/17 true positives, 15/15 false-positive guards)",
        "Redis-backed embedding + response caches with SHA-256 keys, normalized for hit rate, 1h TTL — graceful no-op when Redis is down",
        "XML-tagged userCtx (<user_query>, <user_profile>, <rag_context>, <conversation_history>) closes context-leakage bugs",
        "Topic-aware history filter — cosine similarity ≥0.5, cap 6, chronological-tail fallback when fewer than 2 entries embedded",
        "PCOS corpus ingestion script — recursive splitter (1000/200), per-chunk metadata, SHA-256 idempotent upserts, dimension safety check",
        "/security-review NO_FINDINGS at confidence ≥8 — NoSQL injection, SSRF, prompt injection, cache cross-user leakage, stack-trace exposure all checked",
        "node --check clean on all 17 modified files — full unit-test pass on cosineSimilarity, sha256Hex, normalizeKey, detectEmergency",
      ],

      featured: true,
      isHealthcare: true,

      metrics: {
        client: "Yuktha Wellness (India) — paid Milestone 1, ongoing",
        scope: "8 commits · +1,484 / -175 lines · 18 files",
        retrieval: "Hybrid Dense (Pinecone top-20) + BM25 top-20 → Cohere Rerank → top-5",
        safety: "47-Pattern Emergency Detector (17/17 TP · 15/15 FP guards)",
        grounding: "Structured JSON Output + Cosine Gate at 0.55",
        caching: "Redis Embedding + Response Caches · SHA-256 Keys · 1h TTL",
        verification: "/security-review NO_FINDINGS at confidence ≥8",
        contract: "Static-Verified, Runtime-Untested (Smoke-Gated by Client)",
      },
    },

    {
      id: "regenai-shopify",
      title: "RegenAI — Shopify Plus + Hydrogen Headless Commerce",
      category: ["shopify", "fullstack", "ai-ml"],

      description:
        "Problem: Build a clinician-grade wellness commerce platform with FDA-claim linting, DSHEA supplement validation, and contraindication-presence as compile-time concerns. Solution: 105-day Shopify Plus + Hydrogen build (Day 19/105 shipped) — 4 Shopify Functions in Rust → WASM (cart contraindication, B2B tiered pricing, delivery customization, discount stacking) with 47 cargo tests passing, custom Polaris merchant app on Cloudflare Workers + D1 with hand-rolled OAuth + HMAC, 150+ SKUs across 5 markets and 5 locales (including Arabic RTL), 17 ADRs, and 10 honest-green CI workflows.",

      fullDescription: `RegenAI is a 105-day portfolio build of a clinician-reviewed wellness commerce platform on Shopify Plus + Hydrogen — scoped as commerce + content + data + regulatory across four engineering layers. Day 19 of 105 delivered as of April 2026.

LAYER 1 — STOREFRONT
Hydrogen 2026.4 on React Router v7, deployed to Cloudflare Workers (pivoted from Shopify Oxygen at Day 10 / ADR-011 after Shopify confirmed Hydrogen channel is not available on dev stores). Tailwind v4 @theme block drives the token system. Radix primitives wrapped in @regenai/ui design-system package (15 primitives + Storybook). Sentry client + web-vitals integration ships as first-class concern.

LAYER 2 — CUSTOM MERCHANT APP
Remix application on Cloudflare Worker + D1, OAuth install flow 302-redirects to real Shopify authorize URL with correct scopes + state + redirect (tested end-to-end). Polaris-rendered clinician-review queue UI. Hand-rolled Shopify OAuth + HMAC helpers (no library dependency).

LAYER 3 — SHOPIFY FUNCTIONS (RUST → WASM)
4 functions written in Rust, compiled to WASM, all under 200 KB (Shopify cap is 1.5 MB per extension). 47 pure-rules-core cargo tests pass.
- cart-contraindication — blocks checkout when customer's medical-flag metafield conflicts with product's contraindication tag
- b2b-tiered-pricing — wholesale tier pricing logic
- delivery-customization — market-aware delivery routing
- discount-stacking — combinable discount rules

LAYER 4 — REGULATORY POSTURE
FDA claim linting (regex-based, runs in CI on every PDP copy change). DSHEA supplement validator (flags unsubstantiated structure/function claims). Contraindication presence check (any PDP for a Class II device fails compliance-lint workflow if it lacks a ContraindicationCallout block). Age-gated checkout via Shopify Function. WCAG 2.2 AA as default — skip link, semantic main landmark, focus-visible rings, nonce-respecting inline scripts, ARIA role-descriptions on gallery + body-area carousel.

CATALOG
150+ SKUs across 7 categories (recovery devices, sleep systems, mental recovery, biomarker diagnostics, supplements, home gym, women's health). All modeled as real commerce objects with variants, metaobjects, and compliance-critical metafields.

MARKETS & LOCALES
5 markets — US, CA, UK, EU, AU — with FDA vs CE-marked SKU segmentation, market-aware storefront routing, checkout profiles, per-market inventory routing, and tax profiles.
5 locales — English, Spanish, French, German, Arabic — with full right-to-left layout flipping for Arabic.

CI / QUALITY
10 CI workflows run honest-green (no masked failures): 7 truly pass, 2 intentionally warn-only with documented Day-16 and Day-36 resolution dates, 1 clean-skip until Percy specs land. 17 Architecture Decision Records on file. $0 spent on infrastructure (one paid item, $5 OpenAI credit, deferred to Day 31).`,

      thumbnail: "",

      technologies: [
        "Shopify Plus",
        "Hydrogen 2026.4",
        "React Router v7",
        "Rust → WASM (4 Shopify Functions, all under 200 KB)",
        "Polaris (Custom Merchant App UI)",
        "Cloudflare Workers + D1",
        "Hand-Rolled Shopify OAuth + HMAC Helpers",
        "Tailwind v4 (@theme Block Token System)",
        "Radix Primitives + @regenai/ui Design System",
        "Storybook (15 Primitives)",
        "Sentry + Web Vitals",
        "FDA Claim Linting (Regex CI Gate)",
        "DSHEA Supplement Validator",
        "Contraindication Presence Check (Compile-Time)",
        "Age-Gated Checkout (Shopify Function)",
        "WCAG 2.2 AA",
        "Markets API (5 markets — US/CA/UK/EU/AU)",
        "5 Locales incl. Arabic RTL",
        "10 GitHub Actions CI Workflows",
      ],

      achievements: [
        "Day 19 of 105 — 4 Shopify Functions in Rust → WASM with 47 cargo tests passing, all 4 WASM artefacts under 200 KB (Shopify cap is 1.5 MB)",
        "Custom Polaris merchant app on Cloudflare Workers + D1 — hand-rolled Shopify OAuth + HMAC, end-to-end install flow tested",
        "Pivoted Hydrogen hosting from Shopify Oxygen to Cloudflare Workers at Day 10 (ADR-011) when dev-store hosting limitation surfaced",
        "150+ SKUs across 7 categories with variants, metaobjects, and compliance-critical metafields",
        "5 markets (US, CA, UK, EU, AU) with FDA vs CE-marked SKU segmentation, per-market routing and tax profiles",
        "5 locales including Arabic with full right-to-left layout flipping",
        "Compliance-as-code: FDA claim linting (regex CI gate), DSHEA supplement validator, contraindication presence check on every PDP, age-gated checkout via WASM Function",
        "WCAG 2.2 AA default — skip link, semantic main landmark, focus-visible rings, nonce-respecting inline scripts, ARIA role-descriptions",
        "17 Architecture Decision Records on file — every architectural pivot documented with context and consequence",
        "10 CI workflows honest-green (no masked failures) — $0 infrastructure spend through Day 19",
      ],

      featured: true,
      isHeadless: true,

      metrics: {
        platform: "Shopify Plus + Hydrogen 2026.4 + React Router v7",
        hosting: "Cloudflare Workers + D1 (Pivoted from Oxygen at Day 10 / ADR-011)",
        functions: "4 Shopify Functions (Rust → WASM) · 47 Cargo Tests · All Under 200 KB",
        catalog: "150+ SKUs · 7 Categories · Compliance Metafields",
        markets: "5 Markets (US, CA, UK, EU, AU) · FDA vs CE-Marked Segmentation",
        locales: "5 Locales (EN, ES, FR, DE, AR with RTL Layout Flipping)",
        compliance: "FDA Claim Linting + DSHEA Validator + Contraindication Check + Age Gate",
        a11y: "WCAG 2.2 AA Default",
        ci: "10 GitHub Actions Workflows · Honest-Green · No Masked Failures",
        infra: "$0 Through Day 19 · 17 ADRs",
      },
    },

    {
      id: "kindred-grove",
      title: "Kindred Grove — Custom Shopify Theme (DTC Pantry Brand)",
      category: ["shopify", "fullstack"],

      description:
        "Problem: Pre-launch single-origin pantry-staples DTC brand (olive oil, dates, honey, saffron, black seed) needed an agency-tier Shopify storefront with Arabic RTL support and CI-enforced quality bars. Solution: 21-day build sprint, 14/14 storefront templates shipped, Theme Blocks architecture (Horizon-style 8-level nesting), zero front-end framework runtime (vanilla JS + Web Components), English + Arabic with CLDR-correct plural forms, and CI quality gates (Lighthouse Perf 0.90 / A11y 0.95, axe-core, Playwright E2E, Percy visual regression, gitleaks, Dependabot).",

      fullDescription: `Kindred Grove is a Phase 1 portfolio build (April 2026, code-complete in 21 days) — a custom, agency-tier Shopify storefront for a pre-launch single-origin pantry-staples DTC brand. 14 of 14 SOW build-sprint days shipped and tagged (v0.0-day1 through v0.0-day21-complete), 13 public documentation artifacts in the repo, 9 continuous-integration workflows configured and passing.

STOREFRONT — 14 of 14 TEMPLATES
1. Homepage with editorial hero + section blocks
2. Collection / product listing
3. Product detail with 3D model viewer, variant picker, subscription, farm story, recipes, FAQ
4. Cart drawer + full cart page (no-JavaScript fallback)
5. Predictive search with debounced live results across products, pages, articles
6. Origin / farm detail pages — metaobject-driven
7. Build Your Pantry quiz — merchant-editable questions and personas
8. Recipes blog with article template and comment system
9. Wholesale inquiry page with honeypot, rate limit, optional Admin-API draft-order creation
10. Gift boxes collection with curated hero
11. Customer account — sign-in, register, dashboard, order history, addresses, order detail, password reset, activation
12. Checkout extension scaffolded
13. Styleguide at /pages/styleguide — living component library
14. 404 page + Shopify-native policy pages

ARCHITECTURE
Theme Blocks architecture throughout (Horizon-style, 8-level nesting). Every storefront surface block-composable by the merchant. Vanilla JavaScript with Web Components — zero runtime dependency on any front-end framework, theme ships unbundled. Modern design-token CSS with full brand system (cream, olive, saffron, terracotta, espresso). Serif-heading + sans-body pair with Arabic fallback stack (Aref Ruqaa and IBM Plex Sans Arabic under [dir="rtl"]). Spacing, motion, radii, shadows all tokenized. Metaobjects first for editorial content (Farm, Farmer, Region, Certification, Recipe). Full WCAG 2.1 AA — deeper olive tokens (5.76 contrast on cream), axe-core scanned on every PR. English and Arabic locales shipped with hreflang tags and CLDR-correct Arabic plural forms.

OBSERVABILITY
Sentry frontend error tracking (CDN Loader pattern, PII scrubbing in beforeSend hook). Web Vitals library reporting Core Web Vitals as custom events to GA4. localStorage-based feature-flag system with URL override, Do-Not-Track compliance, and exposure analytics events.

CI / QUALITY GATES (every PR)
Liquid lint via Shopify theme-check — 181 tracked files, zero offenses. Shopify Lighthouse CI with Performance 0.90 and Accessibility 0.95 thresholds. Accessibility scan via axe-core through Playwright across home, cart, collection, search routes. Playwright golden-path E2E tests for PDP, cart, quiz, search, navigation. Percy visual regression with 6 snapshots across 4 viewport widths. Secret scanning via gitleaks on every PR, every push, plus weekly scheduled deep scan. Dependabot weekly updates grouped by vendor. Deploy workflows for dev, staging, production — production gated by required-reviewer rule.

PUBLIC DOCS — 13 ARTIFACTS
README, CONTRIBUTING, LICENSE (MIT), ARCHITECTURE, SECURITY (threat model, CSP breakdown, form hardening, escape audit), TESTING runbook, plus ADRs.`,

      thumbnail: "",

      technologies: [
        "Shopify (Custom Theme, Theme Blocks)",
        "Liquid (181 Tracked Files, Zero theme-check Offenses)",
        "Vanilla JavaScript + Web Components (Zero Framework Runtime)",
        "Modern Design-Token CSS",
        "Shopify Metaobjects (Farm, Farmer, Region, Certification, Recipe)",
        "Theme Blocks Architecture (Horizon-Style 8-Level Nesting)",
        "English + Arabic (RTL) with CLDR Plural Forms",
        "Sentry (CDN Loader + PII Scrubbing)",
        "Web Vitals → GA4 Custom Events",
        "localStorage Feature-Flag System (DNT-Compliant)",
        "Shopify theme-check (Liquid Lint)",
        "Shopify Lighthouse CI (Perf 0.90 / A11y 0.95 Thresholds)",
        "axe-core via Playwright",
        "Playwright Golden-Path E2E",
        "Percy Visual Regression (6 Snapshots × 4 Viewports)",
        "gitleaks Secret Scanning",
        "Dependabot Weekly Grouped Updates",
      ],

      achievements: [
        "21-day build sprint — 14 of 14 storefront templates shipped and tagged (v0.0-day1 through v0.0-day21-complete)",
        "Theme Blocks architecture with Horizon-style 8-level nesting — every surface block-composable by merchant",
        "Zero front-end framework runtime — vanilla JS + Web Components, theme ships unbundled (npm only needed for tests)",
        "English + Arabic locales with hreflang tags and CLDR-correct Arabic plural forms; deeper olive tokens (5.76 contrast on cream) for small-text WCAG AA",
        "9 CI workflows passing on every PR — Liquid lint (zero offenses), Lighthouse Perf 0.90 / A11y 0.95, axe-core, Playwright E2E, Percy 6×4 snapshots, gitleaks, Dependabot",
        "13 public documentation artifacts — README, CONTRIBUTING, LICENSE (MIT), ARCHITECTURE, SECURITY threat model, TESTING runbook, ADRs",
        "Sentry CDN Loader with beforeSend PII scrubbing; Web Vitals → GA4; DNT-compliant feature-flag system",
        "Production deploy workflow gated by required-reviewer rule",
      ],

      githubLinks: [
        { label: "GitHub Repository", url: "https://github.com/Zahidulislam2222/kindred-grove" },
      ],

      featured: false,
      isHeadless: false,

      metrics: {
        sprint: "21 Days · 14/14 Templates Shipped · v0.0-day21-complete Tagged",
        architecture: "Theme Blocks (Horizon-Style 8-Level Nesting) · Zero Framework Runtime",
        a11y: "WCAG 2.1 AA · 5.76 Contrast Ratio (Olive on Cream) · axe-core on Every PR",
        ci: "9 Workflows · Lighthouse Perf 0.90 / A11y 0.95 · 181 Liquid Files Zero Offenses",
        i18n: "English + Arabic (RTL) · CLDR Plural Forms · hreflang Tags",
        observability: "Sentry CDN Loader (PII Scrub) · Web Vitals → GA4 · Feature-Flag System (DNT-Compliant)",
        regression: "Percy Visual (6 Snapshots × 4 Viewports) · Playwright Golden-Path E2E",
        docs: "13 Public Artifacts (README, ARCHITECTURE, SECURITY, TESTING, ADRs)",
      },
    },

    {
      id: "abcker-technologies",
      title: "Abcker Technologies — WordPress Healthcare IT Site (Client Project, Canada)",
      category: ["wordpress", "healthcare"],

      description:
        "Problem: An Ottawa-based healthcare IT consultancy had a WordPress site full of placeholder content, fake stats, broken nav, lorem-ipsum FAQs, 24 plugins (most unused), no SMTP, no SEO, and 12 irrelevant template pages. Solution: Full content + technical cleanup — wrote a real Healthcare Solutions page, 6 unique service descriptions, full Privacy Policy; deleted 12 template pages and 13 junk plugins (24 → 11); fixed all broken navigation and 404s; configured SMTP with verified delivery; installed and configured Yoast SEO with meta titles and descriptions on all pages.",

      fullDescription: `Abcker Technologies is a paid WordPress engagement (April 2026) — full content and technical cleanup for an Ottawa-based healthcare IT consultancy at abckertechnologies.com.

CONTENT CLEANUP
Removed all fake/placeholder stats — '5K+ Reviews', '0k+ Applications', '0%' counters. Removed 'Innovative Healthcare Solutions' page heading per client request. Replaced entire Email Marketing content on Healthcare Solutions page with real Healthcare IT content. Replaced all 6 identical service card descriptions on Services page with unique real descriptions. Removed Lorem Ipsum placeholder text from all FAQ answers. Replaced stock office photos on Services page with healthcare-relevant images. Removed unrelated stock photo from 'Who we are' section on Home page. Fixed awkward footer tagline across all pages.

PAGE DELETION — 12 IRRELEVANT TEMPLATE PAGES
Business Strategy, Content Writer, Email Marketing, Extras, PixelPulse Media, Pricing, Projects, Sample Page, SEO Management, Social Media Management, Hello, Blog — all permanently deleted.

CONTACT DETAILS — UPDATED ALL PAGES
Phone: +1 613 800 0310 · Email: contact@abckertechnologies.com · Address: Ottawa ON Canada. Removed all fake placeholder contact details (fake US address, fake phone numbers, template emails). Google Map on Contact page updated to Ottawa, ON, Canada.

BROKEN LINKS FIXED
'Let's Talk Now' nav button — was pointing to /mediazen/contact/ (broken). Fixed to /contact/. 'Get Started' hero button — had no link. Fixed to /contact/. 'More About Us' button — was pointing to old broken URL. Fixed to /healthcare-solutions/.

SEO OPTIMIZATION
URL slug fixed from /halthcare-solutions/ (typo) to /healthcare-solutions/. Meta title and description added to all 4 pages (Home, Services, Healthcare Solutions, Contact). Yoast SEO plugin installed and configured. Heading structure reviewed across all pages.

NEW CONTENT WRITTEN
Healthcare Solutions page — full new page content: main description, Our Approach section (4 subsections), 6 FAQ answers all healthcare IT specific. Services page — 6 unique service descriptions written for each card. Privacy Policy — complete Privacy Policy written and published.

EMAIL & FORM CONFIGURATION
WP Mail SMTP plugin activated and configured. SMTP Host: secure.emailsrvr.com · Port: 465 · From: contact@abckertechnologies.com. SMTP test email sent successfully — email delivery confirmed working.

PLUGIN CLEANUP
Site reduced from 24 plugins to 11 plugins. 13 junk/unused plugins removed.`,

      thumbnail: "",

      technologies: [
        "WordPress",
        "Yoast SEO",
        "WP Mail SMTP (Configured + Verified)",
        "Elementor (Cleanup + Manual Edits)",
        "Custom WordPress Privacy Policy",
        "Google Maps (Embed Update)",
        "URL Slug + Permalinks",
        "Meta Titles + Descriptions (All Pages)",
        "SMTP (secure.emailsrvr.com · Port 465)",
      ],

      achievements: [
        "Real paid WordPress engagement — Ottawa, Canada healthcare IT consultancy (April 2026)",
        "Plugin count reduced from 24 → 11 (13 junk/unused plugins removed)",
        "Wrote full new Healthcare Solutions page, 6 unique service descriptions, and complete Privacy Policy",
        "Removed all fake stats ('5K+ Reviews', '0k+ Applications', '0%' counters) and placeholder Lorem Ipsum FAQ answers",
        "Deleted 12 irrelevant template pages (Business Strategy, Content Writer, Email Marketing, Pricing, Sample Page, Hello, Blog, etc.)",
        "Fixed 3 broken navigation buttons (Let's Talk Now, Get Started, More About Us) and URL slug typo (/halthcare-solutions/ → /healthcare-solutions/)",
        "Configured WP Mail SMTP (secure.emailsrvr.com, port 465) — verified delivery test passed",
        "Installed and configured Yoast SEO with meta titles and descriptions on all 4 pages; reviewed heading hierarchy across the site",
        "Updated Google Map embed and replaced all fake US contact details with real Ottawa contact info",
      ],

      liveUrl: "https://abckertechnologies.com",

      featured: false,
      isWordpress: true,
      isHealthcare: true,

      metrics: {
        client: "Abcker Technologies (Ottawa, Canada) — paid WordPress cleanup",
        plugins: "24 → 11 (13 Junk Plugins Removed)",
        pages: "12 Template Pages Deleted · 4 Real Pages With New Meta Titles + Descriptions",
        content: "New Healthcare Solutions Page · 6 Service Descriptions · Privacy Policy",
        smtp: "WP Mail SMTP Configured · Verified Delivery Test Passed",
        seo: "Yoast SEO Installed + Configured · URL Slug Typo Fixed",
        nav: "3 Broken Buttons Fixed (Let's Talk Now · Get Started · More About Us)",
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
        { name: "Pinecone + Cohere Rerank + BM25 Hybrid Retrieval", tier: "expert" },
        { name: "OpenAI GPT-4o (Structured Outputs + Query Rewriting)", tier: "expert" },
        { name: "LangChain + n8n Automation", tier: "proficient" },
        { name: "Dialogflow ES", tier: "proficient" },
        { name: "Prometheus / Grafana / Loki / Jaeger", tier: "proficient" },
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
        { name: "ADA Lawsuit Risk Reduction (Overlay Removal)", tier: "proficient" },
      ],
    },
    {
      category: "Healthcare & Compliance",
      icon: "Heart",
      color: "success",
      skills: [
        { name: "HIPAA 2026 (Architecturally Enforced)", tier: "expert" },
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
      name: "WordPress & CMS",
      price: "From $500",
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
      description: "Security and compliance are not afterthoughts. I run Prowler, Checkov, and Trivy scans on infrastructure. I write test assertions that verify business logic, not just code coverage. HIPAA, GDPR, and SOC 2 controls are architecturally enforced.",
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
