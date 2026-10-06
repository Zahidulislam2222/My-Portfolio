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
    title: "AI Harness Engineer",
    // Small accent label shown next to the headline
    frontierTag: "Frontier AI",
    // Plain-English explainer line under the headline (so the title is instantly understood)
    tagline: "I orchestrate frontier AI to ship production-grade systems — HealthTech, multi-cloud, and automation.",
    // Secondary anchor terms shown as a muted line beneath the headline
    roles: [
      "Cloud Architect",
      "HealthTech Engineer",
      "AI & RAG Engineer",
      "Full Stack Engineer"
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

      liveUrl: "https://mediconnect.zahidul-islam.com/",

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
        scopeNote: "Reconciled July 2026 against the integrated source tree. Control implementation is evidence of engineering readiness, not an independent compliance certification \u2014 and it does not claim every local change is deployed or that every Terraform resource exists in the active cloud",
      },

      beforeAfter: [
        { label: "Idle cost", before: "$300+/month sitting idle", after: "$2/month idle \u2014 99.3% reduction" },
        { label: "IaC vs cloud", before: "Terraform state drifted from the real cloud", after: "Every table imported with a zero-change plan; stale resources reconciled" },
        { label: "Encryption", before: "Many resources unencrypted or unlogged", after: "96 fixes \u2014 KMS encryption across the stack plus access logging" },
        { label: "Threat detection", before: "None", after: "GuardDuty + Security Hub against HIPAA / CIS / NIST / PCI" },
      ],

      challenges: [
        {
          problem: "The infrastructure code had drifted away from what was actually running in the cloud.",
          solution: "Reconciled it first \u2014 imported every table with a zero-change plan to prove the code matched reality, and removed resources that no longer existed \u2014 before building anything new.",
          outcome: "Infrastructure-as-code that genuinely mirrors the live cloud.",
        },
        {
          problem: "A compliance scanner flagged dozens of resources that weren't encrypted or logged.",
          solution: "Worked through 96 fixes in one pass \u2014 KMS encryption across queues, parameters, repositories and logs, plus access logging and threat detection.",
          outcome: "The compliance scan came back clean: 129 pass, 0 fail.",
        },
        {
          problem: "Latent bugs in the subscription and event-streaming code weren't showing up at runtime.",
          solution: "Added a strict type-check gate that surfaced 15 hidden issues \u2014 including audit-logging calls with the wrong shape \u2014 and fixed every one.",
          outcome: "Zero type errors and audit logging verified across every service.",
        },
        {
          problem: "A discount system invites abuse if pricing can be influenced from the client side.",
          solution: "Calculated every discount on the server, gated activation on a confirmed payment, and proved the platform stays profitable across all plan and tier combinations.",
          outcome: "A subscription system that holds up against the obvious loopholes.",
        },
        {
          problem: "Local event-streaming wouldn't run reliably on Windows Docker.",
          solution: "Switched to a known-good image with dual listeners and verified publish and consume before building on top of it.",
          outcome: "Stable local streaming with topics created and message flow verified.",
        },
      ],
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
      fullDescription: "A self-hosted, production-grade RAG (Retrieval-Augmented Generation) infrastructure stack designed for healthcare AI applications. Deploys 23 containerized services on a single 8GB RAM machine with carefully calibrated resource limits.\n\nCORE SERVICES\nLightRAG 1.4.6 for knowledge graph-based retrieval with Gemini 2.5 Flash, ragAnything for multi-format document processing (PDF, DOCX, images), Nginx reverse proxy with SSL termination, Authelia SSO with single-user admin access, and Certbot for automated Let's Encrypt certificates.\n\nINFRASTRUCTURE\n3-network isolation (frontend/backend/monitoring), zero-trust 2FA on every route, container hardening (read-only root, dropped capabilities, no-new-privileges). Docker Compose orchestration, Restic encrypted backups with verification scripts.\n\nOBSERVABILITY\nPrometheus metrics collection, Grafana dashboards, Loki log aggregation, Jaeger distributed tracing, and AlertManager for incident routing \u2014 full production monitoring at zero additional cost.\n\nSECURITY SCANNING\n6 compliance scanners: Checkov for IaC security, SonarQube for code quality, Trivy for container vulnerability scanning, OWASP ZAP for web app security, HAPI FHIR validator, and Inferno ONC G10 for FHIR compliance testing.\n\nSelf-hosted behind a hardened Nginx reverse proxy with automated Let's Encrypt SSL.",
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
        "Production deployment behind a hardened Nginx reverse proxy with automated Let's Encrypt certificates",
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
        verifiedJul2026: "Source reconciliation: 23 Compose services (9 core + 14 profile-activated) · 3 declared networks · 9 core services with source-defined health checks",
        retention: "Prometheus 15s scrape interval · 5 alert rules · Loki 744h (31-day) retention · Restic encrypted backup + isolated restore-verification workflows",
        engine: "LightRAG v1.4.6 + RAG-Anything v1.2.10 · Gemini 2.5 Flash · Authelia zero-trust 2FA · ~4.3GB of containers on an 8GB host",
        scopeNote: "Documents architecture and configuration intent — does not claim a particular live environment is deployed, healthy, certified, or processing production data",
      },

      beforeAfter: [
        { label: "Auth", before: "Open localhost RAG, no gate", after: "Zero-trust 2FA gateway in front of the engine" },
        { label: "Observability", before: "None", after: "Metrics, logs and traces in one place" },
        { label: "Compliance", before: "None", after: "Built-in scanning (Prowler, OWASP ZAP, Inferno, HAPI FHIR)" },
        { label: "Footprint", before: "Assumed a cloud cluster", after: "Runs the full stack on a single 8GB machine" },
      ],

      challenges: [
        {
          problem: "Most RAG setups stop at 'it works on localhost' — no auth, observability or compliance story.",
          solution: "Wrapped the engine in a zero-trust 2FA gateway, full metrics/logs/traces, and built-in compliance scanning — all on a single modest machine.",
          outcome: "A production-shaped stack rather than a demo.",
        },
        {
          problem: "The repo needed to be safe to open-source.",
          solution: "Audited and removed all secrets, machine-specific paths and cloud identifiers, replaced them with environment variables, and excluded all scanner output from version control.",
          outcome: "A clean public repository with nothing sensitive in it.",
        },
        {
          problem: "The documentation claimed more than the stack actually did.",
          solution: "Reconciled the docs against the real running services — corrected the inaccurate claims, added the missing services, and split them into core vs on-demand.",
          outcome: "Docs that match reality, which matters most for a security-focused project.",
        },
      ],
    },
    {
      id: "chronos",
      title: "Chronos V2 — Headless E-Commerce Platform",
      category: ["wordpress", "fullstack"],
      description: "Problem: Traditional WordPress e-commerce is slow and monolithic — themes are tightly coupled to the CMS. Solution: Production-ready headless e-commerce for luxury watches — React 18 SPA (48 shadcn/ui components, 14 routes, 9 lazy-loaded) decoupled from WordPress 7.0/WooCommerce via WPGraphQL + REST API. Custom OOP PHP 8.1+ plugin (27 classes, 4,613 LOC, PSR-4), real Stripe Checkout with webhook signature verification, WordPress 7.0 AI Client for auto-generated descriptions, 52 tests (0 PHPCS errors), WCAG 2.1 AA + GDPR compliance. Runs 24/7 at $0/month — static frontend on Cloudflare Pages, WordPress backend on a GCP always-free VM.",
      fullDescription: `Chronos is a production-ready headless e-commerce platform for luxury watches using a decoupled architecture where a React SPA communicates with WordPress 7.0 backend via GraphQL and REST APIs.

FRONTEND
React 18 SPA with TypeScript, Vite, Tailwind CSS, and 48 shadcn/ui components on Radix UI primitives. 14 routes (9 lazy-loaded for code splitting), TanStack React Query for server state management, real Stripe Checkout redirect, JWT authentication, Framer Motion page transitions, and react-helmet-async for SEO meta tags.

BACKEND
WordPress 7.0 with WooCommerce, custom OOP PHP 8.1+ plugin "chronos-bridge" (27 classes, 4,613 LOC, PSR-4 autoloading). Custom Gutenberg blocks (watch showcase, collection grid, contact form). Custom Post Type (chronos_watch) with custom taxonomies (chronos_brand, chronos_movement). TransientCache with Redis-ready object cache.

AI & PAYMENTS
WordPress 7.0 AI Client for auto-generated watch descriptions and smart contact auto-responder. Real Stripe Checkout Sessions with webhook handling and signature verification, custom checkout fields.

TESTING & CI/CD
52 tests (33 PHPUnit + 19 Jest), 0 PHPCS errors. GitHub Actions CI/CD with 4 jobs: PHP Tests, Blocks Build & Tests, Frontend Build, and a manual production deploy gated behind dry-run validation and an explicit enable flag (no automatic infrastructure activity). Dependabot weekly scanning.

HOSTING — $0/MONTH, ALWAYS ON
Static React frontend on Cloudflare Pages; WordPress/WooCommerce backend on a GCP always-free e2-micro VM behind nginx with a free hostname and Let's Encrypt TLS. Migrated off an expiring custom domain: nginx server_name change, fresh certificate, WP_HOME/WP_SITEURL constants, and 108 database URL replacements — verified live with GraphQL returning products and correct CORS for the Pages origin, and zero old-domain references in the deployed bundle.

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
        "Cloudflare Pages (Frontend) + GCP Always-Free e2-micro (Backend, $0/month)",
        "nginx + Let's Encrypt (Backend TLS)",
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
        "Migrated frontend + backend off an expiring domain to a $0/month always-on stack (Cloudflare Pages + GCP always-free e2-micro) — 108 DB URL replacements, fresh Let's Encrypt cert, live GraphQL verified from the new origin",
        "GitHub Actions CI/CD with Dependabot scanning and a manual production deploy gated by dry-run validation",
      ],
      liveUrl: "https://chronos.zahidul-islam.com/",

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
        cicd: "GitHub Actions (4 Jobs, Manual Deploy Gate) \u00b7 Dependabot",
        hosting: "$0/month \u2014 Cloudflare Pages (Frontend) + GCP Always-Free e2-micro (Backend)",
        verifiedJul2026: "Source reconciliation: 240 tracked files \u00b7 55 commits \u00b7 92 tracked frontend files \u00b7 13 concrete application routes \u00b7 41 bridge-plugin + 52 block-plugin files \u00b7 27 production PHP classes",
        gutenberg: "All 3 Gutenberg suites passed \u2014 19 tests total",
        openIssues: "Open and documented: server-authority gap in checkout pricing (most consequential) \u00b7 2 TypeScript landing-page prop-contract errors \u00b7 PHP and live-system evidence not re-run in that pass",
      },

      beforeAfter: [
        { label: "Hosting", before: "Frontend + backend tied to an expiring custom domain", after: "Cloudflare Pages + free GCP VM \u2014 $0/month, zero old-domain references in the deployed bundle" },
        { label: "Infrastructure truth", before: "Conflicting deployment claims in docs vs reality", after: "Every claim verified read-only (GitHub, Cloudflare, GCP CLIs) before any change" },
        { label: "Baseline safety", before: "90 modified files of unknown origin in the worktree", after: "Proven to be line-ending-only drift, preserved under a SHA-256 manifest" },
      ],

      challenges: [
        {
          problem: "The repository had 90 modified files of unknown origin before work began \u2014 a risky baseline to build on.",
          solution: "Characterized the diff before touching anything: an end-of-line-insensitive comparison proved every change was whitespace-only, and a read-only SHA-256 manifest preserved the exact state.",
          outcome: "A scary 14,000-line diff turned out to be transport noise \u2014 and all pre-existing work was protected.",
        },
        {
          problem: "Both the storefront and the WordPress backend lived on a domain that was expiring \u2014 on expiry the shop would have shown no products.",
          solution: "Re-pointed the backend to a free hostname on the existing VM with a fresh TLS certificate, updated the WordPress URL constants (which silently override the database), replaced 108 database URLs, and rebuilt the frontend against the new API endpoint.",
          outcome: "The store runs 24/7 at $0/month, verified live \u2014 GraphQL returns products with correct CORS for the new origin.",
        },
        {
          problem: "A database-only URL change appeared to work but was silently ignored in production.",
          solution: "Traced it to WP_HOME/WP_SITEURL being pinned as wp-config constants, which override the database \u2014 changed the constants, not just the option.",
          outcome: "URL migration that actually holds; the lesson is baked into the deploy checklist.",
        },
      ],
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
      liveUrl: "https://equipcert.zahidul-islam.com/",

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
      metrics: {
        ai: "3 AI Providers",
        offline: "SHA-256 Integrity",
        security: "25 Vulns Fixed",
        verifiedJul2026: "14 production route entries emitted by the verified static build · source-scoped CI lint completed with 0 errors and 6 warnings",
        data: "1 database migration defines core tenant, equipment, action, schedule, notification and audit controls while extending an assumed inspections table",
        stack: "Statically exported Next.js client (packageable to Android via Capacitor) · Supabase auth, RLS, storage and realtime · Contentful checklist content · server-side AI analysis handler · payment webhook",
        openGaps: "Repository-wide lint command is over-broad and currently fails after scanning generated mobile assets · several screens intentionally limited · some integrations depend on external configuration",
        scopeNote: "Not equivalent to a completed certification authority — verified gaps materially affect production readiness. No live database, content service, AI provider, payment provider or installed mobile app was exercised in that documentation pass",
      },

      beforeAfter: [
        { label: "Inspections", before: "Paper checklists and filing cabinets (~73% audit failure)", after: "Phone-based AI inspections with signed, timestamped OSHA reports (~96% digital)" },
        { label: "Security", before: "Pre-launch gaps across the stack", after: "25 issues fixed — auth, validation, rate limiting, access rules, integrity checks" },
        { label: "Plan limits", before: "Enforced only in the UI", after: "Enforced at the database level" },
        { label: "Uptime", before: "Managed DB auto-paused, app went dark", after: "Scheduled keep-alive, always on" },
      ],

      challenges: [
        {
          problem: "The AI endpoint and some data-access rules needed locking down before launch.",
          solution: "Ran a full security audit and closed 25 issues in one pass — added authentication, input validation and rate limiting to the AI endpoint, tightened row-level data access, and added integrity checks to the offline sync.",
          outcome: "A hardened, compliant platform ready for real OSHA-grade use.",
        },
        {
          problem: "Plan limits were only enforced in the interface, which isn't real enforcement.",
          solution: "Moved enforcement into the database itself so the limits can't be bypassed by calling the API directly.",
          outcome: "Free-plan limits hold no matter how the request is made.",
        },
        {
          problem: "The Android build kept failing in continuous integration.",
          solution: "Pinned the correct Java version, fixed the build permissions and wired in the signing secrets.",
          outcome: "Reliable one-tap Android builds.",
        },
        {
          problem: "The managed database kept pausing and taking the app offline.",
          solution: "Added a scheduled keep-alive so it never sleeps.",
          outcome: "The app and live demo stay up.",
        },
      ],
    },

    {
      id: "jwalker-knowledge-assistant",
      title: "JWALKER Knowledge Assistant — Grounded RAG for a WordPress Membership Site",
      category: ["ai-ml", "wordpress", "fullstack"],

      description:
        "Status first: implemented and locally verified as of 15 July 2026, but production is not proven — live deployment, live source pulls for three of the four connectors, and the production WordPress flow are all blocked on client-controlled access. Problem: a creator's material sat in five disconnected silos (two YouTube channels, a membership platform, a course platform, a cloud drive, and selected reference sites), so members had no way to query any of it and answering one question meant hunting through hours of video. Solution: a members-only chat front door on WordPress backed by a single FastAPI process and one portable SQLite file — hybrid dense + keyword retrieval fused by Reciprocal Rank Fusion, a measured relevance floor that returns a configured refusal instead of inventing an answer, and no-fabrication rules locked in code beneath an editable persona. No vector database, no paid plugin, no monthly SaaS.",

      fullDescription: `A members-only knowledge assistant for a WordPress membership site. A member asks a plain question in an embedded chat interface and gets an answer drawn from the creator's own material, with source citations, instead of a generic chatbot answer or an open-internet result.

HONEST STATUS — READ THIS FIRST
As of the 15 July 2026 verification run, the local package is complete and verified; the deployed system is not, and is not represented as such. Not claimed as passed: live server inventory and deployment (the provided cloud login cannot enumerate instances and no usable address, login user or installed key was supplied), live Drive/membership/course/restricted-web pulls (machine access, exports, folder identifiers and approved lists were not supplied), the production WordPress logged-out/logged-in HTTPS flow, PHP syntax validation of the plugin (no PHP interpreter in the verification environment), and an independent fresh-context review of the final diff. A development credential exposed during container configuration validation requires rotation before any further provider use.

THE CONSTRAINTS THAT SHAPED EVERYTHING
Three client constraints drove every architecture decision: no recurring subscription costs (no paid plugins, no hosted vector database, no flat monthly SaaS — only a small server and pay-as-you-go model usage on the client's own account), answers must stay grounded in the creator's own content with internet search restricted rather than open, and members-only access at go-live. Two infrastructure facts changed the plan mid-build: the WordPress site runs on shared managed hosting that serves PHP only, so the engine could never live where the site lives; and the deployment target became an existing cloud instance already running six unrelated agents that must not be disturbed, which turned deployment from a routine install into an isolation problem.

GROUNDING IS NOT LEFT TO THE PROMPT
A relevance gate runs on the retrieved passages before generation. When nothing clears the threshold, the assistant returns a configured refusal — produced without a model call at all — instead of an invented answer. The rules forbidding fabrication live in code and cannot be removed by editing the assistant's configurable personality. Every grounded reply carries deduplicated source citations.

HYBRID RETRIEVAL WITHOUT A VECTOR DATABASE
Dense semantic similarity is computed in NumPy over embeddings stored in a single SQLite file; keyword matching uses SQLite FTS5 over the same rows; the two rankings are combined with Reciprocal Rank Fusion. Pure vector search reliably misses exact terms such as a program name or a job title, and the keyword arm recovers them. Embeddings are pluggable: a local CPU sentence-transformer model (384-dim) is the zero-cost production default, and a hosted API (768-dim) is the torch-free alternative, selected by configuration.

ATOMIC SOURCE SYNCHRONIZATION
Four connectors feed the knowledge base: public YouTube transcripts, Google Drive via a read-only service account, a membership platform, and a course platform. YouTube ingestion is additive by stable video URL. The other three synchronize a complete snapshot atomically — discovery, extraction and embedding all complete before a single database transaction — so a re-index adds new documents, replaces edited documents, removes deleted documents, and leaves the last good database intact when a connector fails.

MEMBERS-ONLY BY CONSTRUCTION
The WordPress plugin renders nothing for logged-out visitors and mints a short-lived HMAC-signed token; the long-lived signing secret never reaches browser JavaScript. Ingestion runs under a separate secret. Rate limiting is per resolved client identity and returns HTTP 429. The engine refuses to start when production configuration is unsafe.

RESTRICTED INTERNET SEARCH THAT FAILS CLOSED
A separate query-time web source exists but is never ingested, and it cannot run unless the operator has supplied both an approved keyword allowlist and an approved list of HTTPS sites. Both fallback and equal-source modes preserve honest provenance and label web-sourced results.

ISOLATED DEPLOYMENT
Because six unrelated agents already run on the target instance, every deployment artifact is additive: a dedicated user, directory, virtual environment, localhost port, new systemd service and timer units, and a new nginx server block on its own hostname. No existing agent is edited or restarted.

VERIFIED EVIDENCE (15 JULY 2026 LOCAL RUN)
Eleven offline integration and behavior scripts covering connector parsing, hybrid retrieval, atomic synchronization, recursive Drive discovery, membership and course API contracts, production configuration, backup and retention, signed HTTP authentication, ingestion-secret separation, rate limiting, source filters, restricted-web provenance, deployment rendering, release and configuration auditing, and legacy database migration. Ruff, MyPy, Bandit (zero findings, zero suppressions), Semgrep Python/OWASP, dependency consistency and JavaScript syntax all pass. A fresh container image build and quiet compose validation succeeded, and a temporary isolated container returned success from both health routes. The release archive passed integrity, forbidden-path audit and an independent Gitleaks scan. Packaged knowledge base: 228 chunks from 10 distinct video URLs. These describe one dated verification run of the local package, not a production proof.`,

      thumbnail: "",

      technologies: [
        "Python + FastAPI (Single-Process Engine)",
        "SQLite + FTS5 (Single-File Knowledge Store, No Vector DB)",
        "NumPy Cosine + Reciprocal Rank Fusion (Hybrid Retrieval)",
        "Pluggable Embeddings (Local Sentence-Transformer 384-dim / Hosted 768-dim)",
        "Google Gemini Flash (Grounded Generation + Restricted Web Search)",
        "WordPress Plugin (PHP) — HMAC-Signed Short-Lived Member Tokens",
        "Pydantic Settings (One Typed Configuration Surface)",
        "Four Content Connectors (YouTube, Drive Service Account, Membership API, Course API)",
        "Atomic Snapshot Sync (Stable Source Keys + Content Hashes)",
        "systemd Hardened Units + Re-Index & Backup Timers",
        "nginx Additive Server Block + localhost Bind",
        "SQLite Online Backup + Retention Pruning",
        "Allowlist Release Builder + Gitleaks Secret Audit",
        "Docker (Verified Optional Packaging, Not Required)",
      ],

      achievements: [
        "Hybrid retrieval with no vector database — dense NumPy cosine plus SQLite FTS5 keyword ranking fused by RRF over one portable file, meeting the client's hard no-subscription constraint",
        "Grounding enforced by a measured relevance floor rather than a prompt instruction: below threshold the assistant refuses without ever calling the model, so a refusal costs nothing",
        "No-fabrication rules locked in code beneath an editable persona — the client can retune voice, temperature and the refusal wording without being able to edit away the safety rules",
        "Atomic snapshot synchronization for three of four connectors: add, edit and delete all reflected, and a failed discovery leaves the last good database untouched",
        "Members-only by construction — the plugin renders nothing when logged out, and the long-lived signing secret never reaches browser JavaScript",
        "Restricted web search fails closed: it cannot run without both an approved keyword allowlist and an approved HTTPS site list, and both modes preserve honest provenance",
        "Deployment designed as an isolation problem because six unrelated agents already run on the target box — every artifact is additive and no existing agent is touched",
        "Release packaging built from an explicit allowlist and independently scanned, so no .env, credential file, private key, dossier or log can reach the client archive",
        "Verification report separates what passed from what is explicitly not claimed, including the exposed development credential that requires rotation",
      ],

      featured: false,

      isWordpress: true,

      metrics: {
        status: "Local package verified 15 Jul 2026 · production NOT proven (client access blocked)",
        corpus: "228 chunks from 10 distinct video URLs (verified packaged state)",
        retrieval: "Dense NumPy cosine + SQLite FTS5, fused by Reciprocal Rank Fusion",
        infra: "One FastAPI process + one SQLite file · no vector database, no paid plugin, no monthly SaaS",
        auth: "HMAC-signed short-lived member tokens · separate ingest secret · per-client rate limiting",
        gates: "Ruff · MyPy · Bandit (0 findings, 0 suppressions) · Semgrep OWASP · Gitleaks · container health",
        blocked: "Live EC2 deploy, live Drive/membership/course pulls, production WordPress flow, PHP syntax check, independent review",
      },

      beforeAfter: [
        { label: "Content access", before: "Five disconnected silos with no query surface; answering one question meant hunting through long-form video and scattered posts", after: "One members-only chat entry point over a unified knowledge base, with source citations on every answer" },
        { label: "Architecture", before: "A container-orchestrated stack with a dedicated vector database, sized far above the corpus and against the client's cost constraint", after: "One Python process and one portable SQLite file; containers kept as optional packaging, not a requirement" },
        { label: "Grounding", before: "No gate between retrieval output and the model", after: "A per-provider cosine floor, a configured refusal returned without a model call, and no-fabrication rules locked beneath an editable persona" },
        { label: "Refresh", before: "Transcript ingestion could only add, and re-running risked duplicates", after: "Idempotent additive transcript ingestion plus atomic add/edit/delete sync for the three snapshot sources" },
        { label: "Failure behavior", before: "A transcript provider block was swallowed and reported as \"no transcript\", which could empty the store silently", after: "Genuine absence is distinguished from a provider block; a block stops the run loudly and leaves stored data untouched" },
        { label: "Access control", before: "Open endpoints", after: "Signed short-lived member tokens, a separate ingestion secret, per-client rate limiting, and startup refusal on unsafe production configuration" },
      ],

      challenges: [
        {
          problem: "The first architecture used a dedicated vector database and container orchestration for a modest corpus — chosen out of habit rather than sized to the work or the client's explicit no-subscription constraint.",
          solution: "Collapsed it to a single FastAPI process with a file-based hybrid store (NumPy cosine + FTS5 + RRF) and re-verified retrieval end to end.",
          outcome: "Running cost dropped to a small server plus pay-as-you-go model usage, with no external database to run, secure or pay for.",
        },
        {
          problem: "After switching embedding providers, an off-topic question came back marked grounded with sources, even though the model itself correctly refused — the relevance floor had been tuned for the previous model.",
          solution: "Measured the actual cosine distributions for known-relevant and known-irrelevant pairs and set a provider-specific floor, documented per provider in configuration.",
          outcome: "Off-topic questions now return ungrounded with zero sources; a similarity threshold is treated as a property of the embedding model, never inherited across models.",
        },
        {
          problem: "Growing the demo corpus meant clearing the knowledge database and re-ingesting — every fetch then returned \"no transcript\" and the store was left empty, because the ingester swallowed a provider IP block into the same outcome as genuine absence.",
          solution: "Separated genuine absence from a provider block so a block raises and stops the run loudly with the database untouched, and made ingestion idempotent by recording ingested URLs so there is never a reason to wipe the store.",
          outcome: "A third-party block can no longer produce a success-shaped empty result, and good data is never deleted before its replacement is verified.",
        },
        {
          problem: "Two independent free-tier limits collided: a full-corpus ingest failed on an embedding quota, and re-running to recover re-fetched every transcript and triggered the transcript provider's burst block.",
          solution: "Batched and paced embedding requests with backoff honoring the server-supplied retry delay, cached each transcript to disk the instant it was fetched, and added a deliberate delay between transcript fetches.",
          outcome: "The expensive-to-fetch step is now persisted before the rate-limited step, so an embedding retry never touches the transcript provider again.",
        },
        {
          problem: "Connectors skipped known URLs, which made re-runs cheap but also made edits and deletions invisible — a changed document at a known URL was simply skipped.",
          solution: "Introduced stable source keys and content hashes and replaced skip-based ingestion with atomic snapshot synchronization for the three sources where a complete snapshot is meaningful.",
          outcome: "Idempotency by URL was recognized as not being synchronization; edits and deletions now propagate correctly.",
        },
        {
          problem: "A container configuration validation command was treated as a structural syntax check, but it expands environment files by default and printed a resolved development credential into tool output.",
          solution: "Treated the credential as compromised and recorded it as requiring rotation; future validation uses a generated fake environment file or quiet output and never prints resolved secrets.",
          outcome: "The rotation requirement is stated openly in the verification report rather than quietly dropped, and the release archive builder excludes and scans for the same material.",
        },
      ],
    },

    {
      id: "everyday-dental-surgery",
      title: "Everyday Dental — Fictional Clinic Demonstration (Synthetic Data)",
      category: ["healthcare", "fullstack", "compliance"],

      description:
        "Fictional portfolio demonstration (Sep 2026 source doc): a synthetic dental-practice site with a sample patient journey — no real clinic, patients or payments. All 11 historical Edge Functions are disabled by a deployed guard. Historical clinical prototype (documented with known security defects, not production-ready): Supabase backend, 11 Edge Functions, 11 database migrations, AES-256 PHI encryption, 4-role RBAC with Row-Level Security, FHIR R4 interoperability (10 resource types, 3 terminology systems), Stripe payments, bilingual i18n (English/Bengali), three-tier animation system (GSAP + Framer Motion + Tailwind), 93% compliance audit score (56/60 checks), and premium UI components (TiltCard, MagneticButton, CursorGlow).",

      fullDescription: `Everyday Dental Surgery & Implant Center is a fictional portfolio demonstration using synthetic data only. It is not a real clinic, a working patient portal or a HIPAA/SOC 2 certified system. The sections below describe the historical clinical prototype, whose known defects (including unauthenticated notification and breach handlers) are documented in the current technical overview; its public endpoints are disabled.

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
        "Stripe (PaymentIntents via Edge Function — historical prototype, disabled)",
        "HIPAA 2026 (95% \u2014 18/19 Checks Passing)",
        "HL7 FHIR R4 (100% \u2014 16/16 Checks Passing)",
        "SOC 2-style policy drafts (historical self-assessment, not an audit)",
        "3 Terminology Systems (SNOMED CT, ICD-10-CM, LOINC)",
        "10 FHIR R4 Resource Types",
        "10 SOC 2 Policy Documents",
        "CSP + HSTS + COEP + COOP + CORP Headers",
        "Cloudflare Turnstile (CAPTCHA)",
        "15-Min HIPAA Session Timeout (BroadcastChannel Cross-Tab)",
        "Trigger-Based Audit Logging (IP, User Agent, PHI Access)",
        "Breach-detection jobs (historical prototype; handler documented as unauthenticated)",
        "Bilingual i18n (English + Bengali, Inline t() System)",
        "Cloudflare Pages (SPA Deployment)",
        "PWA (Service Worker, Manifest, Offline Fallback)",
        "60-Check Compliance Audit Scanner (CI/CD Deploy Gate)",
      ],

      achievements: [
        "Historical self-assessment checklist (56/60 items) — not a certification; current doc lists material security defects",
        "Row-Level Security on all PHI tables \u2014 database-enforced, not application-level",
        "AES-256 PHI encryption (pgcrypto Vault), breach detection, 15-min session timeout, consent enforcement",
        "10 FHIR R4 resource types with REST API, 3 terminology systems, 421-line client-side validator",
        "11 Supabase Edge Functions + 11 database migrations covering RBAC, RLS, encryption, audit, FHIR, retention",
        "Stripe PaymentIntent via Edge Function in the historical prototype; payments disabled in the public demo",
        "Three-tier animation: GSAP + ScrollTrigger, Framer Motion, Tailwind keyframes + Lenis smooth scrolling",
        "Premium UI: TiltCard, MagneticButton, CursorGlow, Dental3DObject, Lottie animations",
        "23 routes, 12 service categories, 50+ pricing items, bilingual (English + Bengali)",
        "Admin Panel: 10 modules including audit logs, user management, security incidents, data retention",
        "60-check compliance audit scanner as CI/CD deploy gate (npm run predeploy)",
        "PWA with service worker, Cloudflare Pages deployment with security headers",
      ],

      liveUrl: "https://dental.zahidul-islam.com/",

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
        compliance: "None claimed — fictional synthetic demonstration; historical self-assessment only",
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
        verifiedJul2026: "Fresh read-only static compliance scan: 52 passes \u00b7 4 failures \u00b7 4 warnings across 60 checks",
        build: "Verified production build processed 2,071 modules and completed successfully with 1 dependency security warning",
        openGaps: "Documented current gaps: form writes to columns removed by a later migration \u00b7 missing active medical-data consent \u00b7 over-broad serverless query/read authority \u00b7 unauthenticated notification and breach handlers \u00b7 inactive schedules \u00b7 incomplete payment verification",
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
      description: "Problem: Deploying identical WordPress sites for multiple clients required hours of manual content swapping, image replacement, and SEO updates per site. Solution: Full-stack WordPress automation platform that clones Elementor-based template websites and programmatically replaces all content for multiple customers via a single command. Features NeuroScan v5.0 custom PHP engine, AskMe AI chatbot on Cloudflare Workers with a bundled static content index ($0/month), a domain-independent static publishing pipeline to Cloudflare Pages — verified to keep serving with WordPress, the tunnel, and the custom domain all offline — 292 tests (281 core + 11 exporter), 2 CI/CD pipelines, and Dark Glassmorphism Design System.",
      fullDescription: `HealthCode Analysis is a full-stack WordPress automation platform that clones Elementor-based template websites and programmatically replaces all content — photos, text, headings, and SEO metadata — for multiple customers via a single command.

AUTOMATION ENGINE
WordPress REST API Bridge Plugin (healthcode-api-bridge.php) with timing-safe API key authentication. Elementor JSON Parser recursively walks nested JSON trees to find and replace images, headings, text editors, and repeater fields. One-Command Customer Deployment reads a customer JSON config and executes the full pipeline: upload photos, swap Elementor JSON, update Rank Math SEO metadata, upload logo/favicon, and flush caches. Dry-run mode previews every change without touching the live site.

NEUROSCAN v5.0
Custom PHP framework with modular grid system, intelligent metadata calculation (server-side read time), and multi-instance architecture with scoped JavaScript for zero-conflict grids. Zero-reload AJAX filtering, live contextual search, and smart routing protection.

AI & CLOUD
AskMe AI chatbot on Cloudflare Workers with Dialogflow ES — $0/month, scales to unlimited posts. Publishing bundles a generated public content index directly into the Worker, so the chatbot answers from real site content without needing WordPress at request time. AI content augmentation with auto-generated summaries and medical prompt engineering.

DOMAIN-INDEPENDENT PUBLISHING
Local WordPress is the authoring source; a deterministic static exporter publishes the site to Cloudflare Pages and the chatbot reaches its Worker through a same-origin proxy. Verified in production: with WordPress, Docker, the tunnel, and the custom domain all offline, the Pages frontend and chatbot still return HTTP 200 with real content. Bundle validation fails the build if any localhost, private-IP, tunnel, or expired-domain reference leaks into HTML, CSS, JS, or JSON.

ZERO-COST LIVE DEMO
A 24/7 live WordPress admin/Elementor demo runs co-hosted on an existing always-free GCP e2-micro — isolated memory-capped PHP-FPM pool, dedicated database, its own nginx server block and Let's Encrypt cert — at $0, with an nginx FastCGI micro-cache serving cached pages in ~8ms on a 0.25 vCPU machine.

DESIGN & TESTING
Dark Glassmorphism Design System (vanilla JS, zero dependencies). 292 automated tests — 281 core (unit + integration + end-to-end swap verification, ~59% coverage with enforcement threshold) + 11 static-exporter tests. 2 CI/CD pipelines with Ruff linter, Bandit security scan, pre-commit hooks, and Dependabot.`,

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
        "Cloudflare Pages (Domain-Independent Static Publishing)",
        "nginx FastCGI Micro-Cache (~8ms Cached Loads on a Free VM)",
        "GitHub Actions CI/CD (2 Pipelines)",
        "Ruff + Bandit (Linting + Security)",
        "292 Automated Tests (281 Core + 11 Exporter)",
      ],
      achievements: [
        "Automated multi-customer site deployment — single command swaps all content, images, and SEO metadata via custom REST API bridge with dry-run preview",
        "Domain-independent publishing: static export to Cloudflare Pages + content index bundled into the chatbot — production verified to keep serving with WordPress, the tunnel, and the custom domain all offline",
        "24/7 live WordPress demo co-hosted on an always-free GCP VM at $0 — isolated PHP-FPM pool, dedicated DB, nginx FastCGI micro-cache serving cached pages in ~8ms",
        "292 automated tests (281 core: unit + integration + E2E swap verification, ~59% coverage with enforcement threshold; + 11 exporter tests)",
        "Built Dark Glassmorphism Design System (vanilla JS, zero dependencies) and AskMe AI chatbot on Cloudflare Workers with Dialogflow ES — $0/month",
        "NeuroScan v5.0: custom PHP content engine with modular grid system, zero-reload AJAX filtering, and multi-instance scoped architecture",
        "Elementor JSON Parser recursively walks nested trees to replace images, headings, testimonials, and CSS backgrounds",
        "2 CI/CD pipelines: auto-deploy plugin via cPanel File Manager API + manual customer deployment with approval gate",
        "WordPress REST API Bridge Plugin with timing-safe API key auth and Application Password fallback",
        "Idempotent operations, filename-based image matching, per-post Elementor CSS cache clearing",
      ],
      liveUrl: "https://healthcodeanalysis.zahidul-islam.com/",

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
        tests: "292 Tests (281 Core + 11 Exporter) \u00b7 ~59% Coverage \u00b7 2 CI/CD Pipelines",
        engine: "NeuroScan v5.0 Custom PHP Framework",
        ai: "AskMe AI Chatbot (Cloudflare Workers + Bundled Content Index) \u00b7 $0/month",
        publishing: "Domain-Independent: Static Pages + Same-Origin Chatbot Proxy \u00b7 Survives Backend Fully Offline",
        demo: "$0 Live WordPress Demo on an Always-Free VM \u00b7 ~8ms Cached Loads",
        design: "Dark Glassmorphism Design System (Zero Dependencies)",
        deployment: "REST API Bridge + Elementor JSON Parser + Dry-Run Preview",
        verifiedJul2026: "247 safely executed Python checks passed (2026-07-21) · 51 tracked files · 43 commits · 11 Python automation scripts · 3 PHP files · 9 REST route registrations",
        known: "2 AskMe tests blocked by a Node 22 JSON-import compatibility boundary · 3 retained workflow files are manual and guarded in current source · no live WordPress, Docker, DNS, tunnel or credential-dependent workflow executed in that pass",
      },

      beforeAfter: [
        { label: "New site setup", before: "Manual content swap per customer", after: "One-command clone with content and SEO replaced" },
        { label: "Runtime dependency", before: "Site and chatbot depended on a paid domain and live WordPress", after: "Static Pages + bundled index \u2014 verified serving with the backend fully offline" },
        { label: "Demo hosting", before: "Heavy Elementor pages took 33s to render on a free VM (timeouts)", after: "~8ms cached loads via nginx FastCGI micro-cache, at $0" },
        { label: "Animations", before: "Heavy external library", after: "Built-in browser APIs, zero dependency" },
        { label: "Security headers", before: "None / applied late", after: "CSP + HSTS from the earliest hook" },
        { label: "Rate limiting", before: "Keyed on the CDN's IP (ineffective)", after: "Keyed on the real visitor IP" },
      ],

      challenges: [
        {
          problem: "Another script on the site kept overwriting the chatbot's styling, so messages were unreadable.",
          solution: "Used a MutationObserver to re-apply the correct styles whenever they were overwritten, and handled the CDN's delayed script loading.",
          outcome: "Chat bubbles stay readable on every message.",
        },
        {
          problem: "Tightening the security policy broke the login form.",
          solution: "Pinpointed the exact plugin requirement, restored only the minimum it needed, and documented it as a known exception.",
          outcome: "A strict security policy with a working login.",
        },
        {
          problem: "Animations relied on a heavy external library.",
          solution: "Replaced it with built-in browser APIs — IntersectionObserver, CSS transitions and requestAnimationFrame.",
          outcome: "The same animations with zero external dependency.",
        },
        {
          problem: "Rate limiting behind the CDN was keyed on the wrong IP, so it wasn't actually limiting anyone.",
          solution: "Switched to the CDN's forwarded client-IP header.",
          outcome: "Rate limiting that works per real visitor.",
        },
        {
          problem: "Exported CSS still pointed at a local development address, so visitors' browsers asked for permission to reach the local network.",
          solution: "Extended the exporter to rewrite origins inside CSS, recursively collect nested url(...) assets, and fail the build if any local, private, or expired-domain reference survives in any file type.",
          outcome: "A clean production bundle — zero local references across HTML, CSS, JS, and JSON.",
        },
        {
          problem: "The 'live' chatbot URL recorded in every document returned empty answers — it looked like the chatbot was broken.",
          solution: "Probed the endpoint the frontend actually calls and diffed the responses byte-for-byte, proving the documented URL was a stale older deployment while the real one was healthy.",
          outcome: "Docs corrected — and a rule learned: an HTTP 200 that says 'no results' is a stale backend, not a working service.",
        },
        {
          problem: "A tiny free-tier VM took 33 seconds to render heavy page-builder pages — visitors got timeouts.",
          solution: "Added an nginx micro-cache that serves cached HTML instantly and refreshes in the background, and pre-warmed the heavy pages once.",
          outcome: "Public pages load in ~8ms from cache, and the co-hosted neighbor site stayed healthy throughout.",
        },
        {
          problem: "After moving web servers, a path everyone assumed was protected turned out to be publicly reachable.",
          solution: "The old protection relied on Apache-style rules the new server silently ignores — removed the exposed files, added explicit deny rules for sensitive paths, and re-audited every previously 'protected' path.",
          outcome: "Sensitive paths now return 403, with the audit habit built into every server migration.",
        },
      ],
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
      featured: false,
      isWordpress: true,
      metrics: {
        automation: "100% Sales Flow",
        performance: "A+ Core Web Vitals",
        stack: "WordPress + Elementor Pro + Jeg Kit — dark, high-end agency UI with scroll-animated skill bars, sticky nav and tabbed service showcase",
        booking: "Calendly scheduling embedded directly in the contact flow — removes the email back-and-forth to find a slot",
        forms: "MetForm captures inquiries into the backend rather than relying on a single email that can land in spam",
        edge: "Cloudflare Worker (booking + payment bot) running an edge chat agent for preliminary questions ahead of a human",
        localSeo: "Interactive Google Maps API embed with a custom grayscale/dark filter matched to the theme",
      },
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
        tests: "60 Assertions · 4 Test Suites — all 4 deterministic test scripts passed 2026-07-21",
        dependencies: "1 declared external dependency (dnspython) · 20 Python files · 1,092 LOC",
        commands: "4 CLI Commands: find · verify · scrape · batch",
        version: "v1.0.0",
        boundary: "Local research assistant — not a mailbox-existence authority, deliverability guarantee, consent decision, or hardened multi-user service. Confidence values are deterministic heuristic scores, not calibrated probabilities",
      },

      beforeAfter: [
        { label: "Verification", before: "SMTP checks (blocked on most home connections)", after: "HTTP-only signals — scrape, Gravatar, GitHub and DNS" },
        { label: "Cost", before: "Per-lookup SaaS fees", after: "$0, no API keys" },
        { label: "Where it runs", before: "Needs an unblocked mail port", after: "Any internet connection" },
      ],

      challenges: [
        {
          problem: "The obvious way to verify an email — an SMTP check — is blocked on most home internet connections.",
          solution: "Redesigned around HTTP-only signals stacked together (on-page scrape, Gravatar, GitHub and DNS) with a weighted confidence score.",
          outcome: "Reliable verification that works from any connection, with no paid API.",
        },
        {
          problem: "Some verification signals only cover part of the population, so confidence varies.",
          solution: "Made the score honest — anything without an external signal is flagged 'verify manually' rather than shown as confirmed.",
          outcome: "Actionable confidence bands instead of false certainty.",
        },
      ],
    },

    {
      id: "yuktha-wellness",
      title: "Yuktha Wellness — Multi-Condition AI Health Chatbot (M1–M3, Client Project)",
      category: ["ai-ml", "fullstack", "healthcare"],

      description:
        "Problem: An India-based women's health startup had a PCOS chatbot leaking stack traces, missing safety gates, and returning ungrounded answers — and needed expansion to 6 conditions with multilingual support for 1 billion Indian users (Hindi/Tamil/Telugu/Bengali). Solution: Two paid milestones ($500 total) — M1 (8 commits, +1,484 lines, 18 files): native Pinecone RAG pipeline, hybrid dense+BM25+Cohere rerank, 47-pattern emergency detector, structured-output grounding gates, Redis caching. M2 (9 tasks, 302 tests all pass): BGE-M3 multilingual embedding (1024-dim), 6 condition namespaces (PCOS + diabetes + MASLD + obesity + mental wellness + home remedies), self-hosted cross-encoder reranking (zero Cohere cost), per-user Pinecone health memory, eval framework (220+ queries — 97.2% routing, 100% safety, 80%+ Hindi retrieval). M3 (live): WhatsApp channel via Interakt — HMAC-verified webhook, SSE token streaming, Redis caching in production, and one-orchestrator gating so the AI answers only Health-Query conversations.",

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

VERIFICATION (M1)
node --check clean on 17 files. /security-review NO_FINDINGS at confidence ≥8 — NoSQL/Mongoose injection, SSRF, path traversal, hardcoded secrets, weak crypto, JWT bypass, response cache cross-user leakage, embedding cache poisoning, error/stack-trace exposure all checked. cosineSimilarity, sha256Hex, normalizeKey, detectEmergency all unit-tested.

MILESTONE 2 — MULTI-CONDITION + MULTILINGUAL EXPANSION (9 tasks, 302 tests all pass)
BGE-M3 multilingual embedding (BAAI/bge-m3 via @xenova/transformers, 1024-dim) — supports Hindi, Tamil, Telugu, Bengali and 100+ languages. Pinecone index recreated at 1024 dims, all 6 conditions re-ingested (346 chunks total across 6 namespaces). Self-hosted cross-encoder: Xenova/ms-marco-MiniLM-L-6-v2 loads once at server boot, eliminates Cohere per-request cost, warmup at startup. 6 condition namespaces: pcos-knowledge, diabetes-knowledge, masld-knowledge, obesity-knowledge, mental-wellness-knowledge, home-remedies-knowledge. conditionRouter.js classifies queries into conditions — supports cross-condition queries (e.g., "PCOS with insulin resistance" → [pcos, diabetes]). Mental wellness crisis detection: detectMentalCrisis with Hindi transliterations (marna chahta hoon, jina nahi chahta, khud ko hurt karna) + iCall/Vandrevala Foundation escalation. Per-user health profile: {conditions, symptoms, labValues, medications} persisted to user-{id} Pinecone namespace and injected into every response. Evaluation framework: 220 reference queries + 30 Hindi transliteration queries — routing 97.2%, safety 100%, fallback 100%. Branch: milestone-2, final commit: ea5bf7c.

MILESTONE 3 — WHATSAPP CHANNEL + STREAMING (LIVE, July 2026)
Interakt WhatsApp Business webhook with HMAC signature verification (valid → 200, tampered or missing → 401), SSE token streaming via /ask/stream, Redis-backed caching live in production, product suggestions, and human handoff. Orchestration gating: the client's no-code Interakt flow owns greetings and menus, so the AI stays silent on greetings and button taps and answers only conversations routed to it via a per-user Health-Query lane marker (stored in chat history — no schema change). A "free-answer limit reached" CTA fires exactly once per user via a persisted marker turn instead of re-firing on every message. Deploy discipline on every release: drift-check live vs local first, full server backup, SHA-256 parity between deployed and committed files, and flat process restart counts (no crash loops) — verified with a stubbed end-to-end harness run on the live server with zero real WhatsApp sends.`,

      thumbnail: "",

      technologies: [
        "Node.js / Express",
        "BGE-M3 (BAAI/bge-m3 via @xenova/transformers, 1024-dim, Multilingual)",
        "Pinecone (6 Condition Namespaces + Per-User Namespaces, 1024-dim)",
        "OpenAI GPT-4o + GPT-4o-mini (Structured Outputs + Query Rewriting)",
        "Self-Hosted Cross-Encoder (Xenova/ms-marco-MiniLM-L-6-v2, Zero Cohere Cost)",
        "Cohere rerank-english-v3.0 (M1 fallback)",
        "BM25 (Custom utils/bm25.js, Per-Namespace)",
        "Redis (Embedding + Response Caches, 1h TTL)",
        "Mongoose / MongoDB (Chat History + healthProfile Schema)",
        "conditionRouter.js (Multi-Condition Detection, Cross-Condition Support)",
        "Mental Wellness Crisis Detector (Hindi Transliterations + English Patterns)",
        "Per-User Pinecone Namespace (user-{id}) + Personalization Service",
        "Evaluation Framework (220 Queries + 30 Hindi, 97.2% Routing Accuracy)",
        "47-Pattern Emergency Detector",
        "Cosine Grounding Gate (Threshold 0.55)",
        "Promise.allSettled (Parallel External Calls)",
        "Interakt WhatsApp Business API (HMAC-Verified Webhook)",
        "SSE Streaming (/ask/stream Token Deltas)",
        "PM2 + nginx (SHA-256 Parity-Verified Deploys)",
        "/security-review NO_FINDINGS at Confidence ≥8",
      ],

      achievements: [
        "Two completed paid milestones — M1 ($200, April 2026) + M2 ($300, May 2026) — $500 total engagement for India-based women's health startup",
        "M1: RAG pipeline rebuilt end-to-end — native Pinecone retriever (0.7 threshold), GPT-4o-mini query rewriting, hybrid dense+BM25+Cohere rerank-english-v3.0",
        "M1: Code-enforced safety gates — structured JSON schema, cosine grounding gate at 0.55, 47-pattern emergency detector BEFORE any LLM call (17/17 true positives, 15/15 false-positive guards)",
        "M1: Redis-backed embedding + response caches (SHA-256 keys, 1h TTL) — graceful no-op when Redis is down",
        "M1: XML-tagged userCtx closes context-leakage bugs; topic-aware history filter (cosine ≥0.5, cap 6, chronological fallback)",
        "M2: BGE-M3 multilingual embedding (1024-dim via @xenova/transformers) — Hindi, Tamil, Telugu, Bengali, 100+ languages; Pinecone index recreated + 346 chunks re-ingested across 6 namespaces",
        "M2: Self-hosted cross-encoder (Xenova/ms-marco-MiniLM-L-6-v2) — zero Cohere cost, singleton loads at boot, under 200ms reranking for 20 candidates",
        "M2: 6 condition namespaces with conditionRouter — PCOS, diabetes, MASLD, obesity, mental wellness, home remedies; cross-condition queries supported",
        "M2: Mental wellness crisis detection with Hindi transliterations (marna chahta hoon, etc.) + iCall/Vandrevala Foundation escalation paths",
        "M2: Per-user Pinecone namespace (user-{id}) with health profile memory — HbA1c mentioned in turn 1 reflected in turn 5",
        "M2: Evaluation framework — 220 reference queries + 30 Hindi queries: 97.2% routing accuracy, 100% safety gate, 80%+ Hindi retrieval",
        "M2: 302 test assertions across 9 tasks, 0 failed — milestone-2 branch, commit ea5bf7c",
        "M3: WhatsApp channel live via Interakt — HMAC-verified webhook (valid 200 / tampered 401), SSE token streaming, Redis caching in production",
        "M3: One-orchestrator gating — the AI defers to the client's no-code WhatsApp flow and answers only Health-Query conversations; 'limit reached' CTA fires exactly once per user via a persisted marker",
        "M3: Every live deploy drift-checked and SHA-256 parity-verified against the committed artifact, with full server backups and flat restart counts — verified on the live server with zero real WhatsApp sends",
        "/security-review NO_FINDINGS at confidence ≥8 — NoSQL injection, SSRF, prompt injection, cache cross-user leakage, stack-trace exposure all checked",
      ],

      featured: true,
      isHealthcare: true,

      metrics: {
        client: "Yuktha Wellness (India) — M1 ($200) + M2 ($300) = $500 paid · M3 (WhatsApp) live",
        scope: "M1: 8 commits · +1,484 lines · 18 files | M2: 9 tasks · 302 tests · 346 chunks | M3: WhatsApp + streaming live",
        whatsapp: "Interakt Webhook (HMAC) · SSE Streaming · CTA-Once · Health-Query Lane Gating",
        retrieval: "Hybrid Dense (Pinecone top-20) + BM25 top-20 → Self-Hosted Cross-Encoder → top-5",
        embedding: "BGE-M3 (1024-dim) — Hindi · Tamil · Telugu · Bengali · 100+ Languages",
        conditions: "6 Namespaces: PCOS · Diabetes · MASLD · Obesity · Mental Wellness · Home Remedies",
        eval: "97.2% Routing · 100% Safety · 80%+ Hindi Retrieval (220 Queries + 30 Hindi)",
        safety: "47-Pattern Emergency Detector (17/17 TP · 15/15 FP guards) + Mental Crisis Hindi Detection",
        personalization: "Per-User Pinecone Namespace (user-{id}) · Health Profile Memory Across Sessions",
        grounding: "Structured JSON Output + Cosine Gate at 0.55",
        caching: "Redis Embedding + Response Caches · SHA-256 Keys · 1h TTL",
        verification: "/security-review NO_FINDINGS at confidence ≥8",
        models: "GPT-4.1-mini produces the final structured RAG answer · GPT-4o-mini rewrites the retrieval query — roles kept deliberately separate",
        verifiedJul2026: "Integrated backend + frontend source verified 18 July 2026 · 20-candidate rerank window · 5-result final set · 0.7 relevance threshold",
        latency: "Controlled 7-case live suite: 6.956s and 8.716s uncached · 5.666s contextual · 0.161s exact cached repeat · emergency/off-topic/ambiguous fast paths 0.146–0.214s (observed samples, not a service-level bound)",
        frontendTests: "Production build passes with existing static-analysis warnings; the frontend source contains no automated test files",
      },

      beforeAfter: [
        { label: "Grounding", before: "Ungrounded answers — the bot confidently made things up", after: "Citation + confidence gate and a cosine grounding gate, with a safe fallback" },
        { label: "Errors", before: "Stack traces leaked straight to users", after: "Caught and handled — security review came back clean" },
        { label: "Coverage", before: "PCOS only, English only", after: "6 conditions across Hindi, Tamil, Telugu and Bengali (1024-dim multilingual model)" },
        { label: "Reranking", before: "Reranker silently dead — couldn't tell relevant from irrelevant", after: "Self-hosted cross-encoder with real separation and zero per-request rerank cost" },
        { label: "Caching", before: "In-memory caches lost between requests", after: "Redis-backed, ~100x faster on repeat questions" },
        { label: "Channels", before: "Website chat only", after: "Website + WhatsApp via HMAC-verified Interakt webhook with token streaming" },
        { label: "WhatsApp behaviour", before: "Two systems answered every message — stacked duplicate replies", after: "One orchestrator: the AI answers only Health-Query conversations, silent otherwise" },
      ],

      challenges: [
        {
          problem: "The reranker looked like it worked, but it wasn't actually ranking anything.",
          solution: "Traced it to a silent fallback plus a saturated scoring path, then loaded the model directly and read its raw relevance score one pair at a time.",
          outcome: "Relevant answers now clearly outrank irrelevant ones, and all 302 tests still pass.",
        },
        {
          problem: "Messages about self-harm were getting a cold emergency-room reply instead of a compassionate one.",
          solution: "Reordered the safety detectors so crisis language reaches the mental-wellness layer with real helplines before the medical-emergency path.",
          outcome: "Those messages now return supportive replies with verified crisis helplines.",
        },
        {
          problem: "Old personal details resurfaced on unrelated questions, and the bot started interrogating users instead of answering them.",
          solution: "Added a relevance gate on personal memory and fixed the behaviour at the prompt layer — answer first, use at most one remembered detail, never stack conditions.",
          outcome: "Replies stay on-topic and conversational; the client kept these fixes through every later change.",
        },
        {
          problem: "The multilingual model could quietly fall back to the wrong setup and only fail once real users hit it.",
          solution: "Warmed the model up at server boot so any degraded mode shows in the logs before a single user query.",
          outcome: "Boot logs now confirm the correct multilingual model for both English and Hindi.",
        },
        {
          problem: "Two production hotfixes lived only on the live server and were missing from the next milestone.",
          solution: "Ported them forward into the milestone before deploying and made location data optional so a missing value never crashes the chat.",
          outcome: "No regression of fixes the client had already seen — and the test suite stayed green.",
        },
        {
          problem: "After a WhatsApp user hit their free-answer limit, the upgrade prompt re-fired on every later message — greetings, menu taps, everything.",
          solution: "The gate recomputed from a counter that could never change, so it stayed true forever. Persisted a one-time marker in the existing chat history the moment the prompt is sent, and stayed silent afterwards.",
          outcome: "The prompt fires exactly once per user — verified with a stubbed end-to-end harness on the live server, zero real messages sent.",
        },
        {
          problem: "The client's no-code WhatsApp flow and the AI webhook both answered every message, so users got stacked duplicate replies.",
          solution: "Made the AI defer: greetings and menu taps stay silent, and a per-user marker switches the AI on only when the user picks 'Health Query' — one brain per conversation.",
          outcome: "Duplicate replies gone, verified live with signed test messages producing zero unwanted sends.",
        },
      ],
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

    {
      id: "ftm-seo-automation",
      title: "Fine Touch Marketing — WordPress SEO Automation (Client Project)",
      category: ["automation", "ai-ml", "wordpress"],

      description:
        "Problem: A med-spa marketing agency running 15-20 WordPress client sites hand-wrote on-page SEO one page at a time — titles, meta descriptions, focus keyphrases and tags — with no consistency across sites and no way to work in bulk. Solution: An operator submits existing page or post titles with optional location context; the system matches them to live WordPress content, generates industry-locked and location-aware SEO copy with Claude, repairs the output against deterministic length and shape rules, writes it through AIOSEO, and assigns WordPress tags on a best-effort basis. The current live runtime is a protected PHP operator interface in front of a supervised Python Flask job API, so a long run no longer depends on one browser request staying open. July 2026 added an independent heatmap analyzer, a geo relevance planner, plan-by-address without a heatmap, and full-article generation for pages and posts.",

      fullDescription: `Fine Touch Marketing (FTM) is an ongoing paid client engagement — a med-spa marketing agency operating 15-20 WordPress client sites. This is the SEO system of three separate production systems built for them.

WHAT IT DOES
An authorized operator supplies a WordPress site, selects pages or posts, and submits one or more existing titles with optional location context. The system discovers the matching content over the WordPress REST API, validates that AIOSEO is available, generates a structured SEO draft, validates and repairs that draft against deterministic rules, persists it through AIOSEO, assigns relevant WordPress tags where supported, and returns a per-item result summary as CSV and in the interface.

CURRENT RUNTIME — PHP INTERFACE + SUPERVISED PYTHON API
The live path is a protected PHP web interface proxying same-origin authenticated operator actions to a local Python Flask API. The API creates a job, returns a job identifier immediately, runs the work in the background, and exposes safe status summaries the browser polls. This removes the original constraint where a long SEO run depended on a single browser request remaining open. The project also retains a substantial n8n workflow history — that earlier automation path established the title matching, structured generation, AIOSEO updates, tag creation and result aggregation that the current runtime inherited. The n8n lineage is history, not the current live runtime.

GENERATION CONTRACT AND DETERMINISTIC REPAIR
The AI output path constrains industry, location, title length, description length, focus keyword shape and keyword count. Claude produces the draft inside those supplied constraints; deterministic repair rules then fix what the model got wrong rather than trusting the output as-is. Location is derived per page rather than hardcoded, so one run can cover pages for different cities.

JULY 2026 ADDITIONS — PLANNING AND ARTICLE GENERATION
An independent heatmap analyzer, a geo relevance planner, plan-by-address without a heatmap, and full-article generation for both pages and posts with factual controls on the generated content.

OPERATIONAL POSTURE
Public interface health and backend API health are checked separately — a page that loads does not prove the worker API is alive — and a health-based watchdog restarts the API when the service is genuinely unavailable. Local and deployed sources were compared during the latest recovery evidence. The system is presented as an automation accelerator with operational controls, not as a ranking guarantee: it makes no promise about rankings, traffic or indexing time, and client review of location accuracy, branding and regulated wording is still required.`,

      thumbnail: "",

      technologies: [
        "PHP + Browser JavaScript (Protected Operator Interface, Same-Origin Proxy)",
        "Python Flask (Job Creation, Background Execution, Health, Status, Timeout)",
        "Python Automation Worker (Preflight, Matching, Repair, Writes, Reporting)",
        "Claude API (Anthropic) — Structured SEO Draft Generation",
        "WordPress REST API (Content Discovery + Metadata Persistence)",
        "AIOSEO API (Title, Description, Focus Keyphrase, Keywords, Social Metadata)",
        "Deterministic Output Repair (Length, Shape, Keyword Count Rules)",
        "Asynchronous Job Status + CSV Result Reporting",
        "Health-Based Backend Supervision (Not Process-Name Checks)",
        "n8n (Retained Workflow History — Earlier Automation Path)",
      ],

      achievements: [
        "Real ongoing paid client engagement — Fine Touch Marketing (med-spa marketing agency, 15-20 WordPress client sites)",
        "Migrated the live runtime off a workflow-tool-only path onto a protected PHP interface plus supervised Python job API, so long SEO runs no longer depend on one open browser request",
        "Industry-locked, location-aware generation: location is derived per page instead of hardcoded, so one run covers pages across different cities",
        "Deterministic repair layer validates and fixes AI output against title length, description length, focus keyword shape and keyword count rules rather than trusting the model",
        "Writes the full AIOSEO field set — title, description, focus keyphrase, keywords, social metadata and analysis support — plus WordPress tags on a best-effort basis",
        "Separated AIOSEO save success from optional tag behavior, so a tag failure no longer reports the whole item as failed",
        "Health-based watchdog supervises the backend API by actual health rather than process name, after a live incident where the page was up while the API was down",
        "July 2026: added an independent heatmap analyzer, geo relevance planner, plan-by-address without a heatmap, and full-article generation for pages and posts with factual controls",
        "Historical workflow evidence includes a three-title run with all three targets matched and updated, a forty-tag concurrency repair, entity-clean output, and verified page and post flows",
      ],

      featured: true,

      metrics: {
        client: "Fine Touch Marketing (med-spa marketing agency) — ongoing paid engagement",
        status: "Live maintenance — production project",
        runtime: "Protected PHP Operator Interface → Supervised Python Flask Job API → SEO Worker",
        ai: "Claude structured generation inside supplied industry + location constraints, then deterministic repair",
        writes: "AIOSEO Title + Description + Focus Keyphrase + Keywords + Social Metadata · WordPress Tags (best-effort)",
        modes: "Pages · Posts · Content creation · Heatmap analyzer · Geo relevance planner · Full-article generation",
        scale: "15-20 WordPress client sites · Per-site industry, location and service context preserved",
      },

      beforeAfter: [
        { label: "SEO editing", before: "Open and edit each page by hand, one at a time", after: "Submit a batch of existing titles and get matched, generated, repaired and saved metadata with a per-item report" },
        { label: "Long runs", before: "A run died if the browser request timed out", after: "Job identifier returned immediately, work continues in the background, browser polls status" },
        { label: "Output quality", before: "Whatever the model returned went in", after: "Deterministic repair enforces length, shape and keyword-count rules before anything is saved" },
        { label: "Uptime signal", before: "A loading page was treated as proof the system worked", after: "Interface and backend health checked separately, with a health-based watchdog that restarts the API" },
        { label: "Location", before: "City hardcoded per run", after: "Location derived per page, so one run spans multiple cities" },
      ],

      challenges: [
        {
          problem: "The public page loaded normally while the backend that does the actual work was offline, so the system looked healthy when it was not.",
          solution: "Split the health checks — the interface and the worker API are probed separately — and added a watchdog that restarts the API based on real health rather than whether a process name exists.",
          outcome: "An outage now shows up as an outage, and the backend comes back without manual intervention.",
        },
        {
          problem: "Page titles would not match because the site and the operator encoded the same characters differently — HTML entities, curly quotes and dash variants.",
          solution: "Normalised both sides symmetrically before comparing, covering entities, punctuation variation and dash differences.",
          outcome: "Titles match reliably, so updates land on the intended page instead of silently skipping.",
        },
        {
          problem: "Creating a large batch of tags exceeded practical timing and stalled the run.",
          solution: "Reworked tag creation for concurrency and separated tag success from metadata success.",
          outcome: "Metadata still saves and reports success even when optional tagging cannot finish.",
        },
        {
          problem: "The AI examples leaked the wrong business context into generated copy, and it sometimes hardcoded a city or emitted characters that hurt SEO.",
          solution: "Locked the prompt to the supplied industry, made it derive the city from each page, forbade the problem characters explicitly, and added deterministic repair as a second line of defence.",
          outcome: "Copy stays on-industry and location-correct with clean formatting, verified per item.",
        },
      ],
    },

    {
      id: "ftm-sms-followup",
      title: "Fine Touch Marketing — Multi-Site SMS Follow-Up Automation (Client Project)",
      category: ["automation", "wordpress"],

      description:
        "Problem: New patient leads arrived through web forms across 15-20 med-spa client sites and follow-up was manual and inconsistent — no guarantee a lead got a reply, and no way to run one messaging system across many sites without rebuilding it per site. Solution: A validated form submission resolves the correct client site, records the contact in that site's own data boundary, sends the approved welcome message from that site's own sender, and later evaluates the contact for scheduled follow-ups. Three lanes stay deliberately separate — immediate submission handling, scheduled follow-up evaluation, and operator broadcasts — so a marketing blast cannot interfere with lead capture. Routing, senders, templates, reply information, activation state and follow-up timing are all controlled sheet configuration, not code.",

      fullDescription: `Fine Touch Marketing (FTM) is an ongoing paid client engagement — a med-spa marketing agency operating 15-20 WordPress client sites. This is the SMS follow-up system of three separate production systems built for them.

WHAT IT DOES
A customer submits a web form. The system resolves which client site the submission belongs to, records the contact inside that site's own data area, sends the configured welcome message from that site's configured sender, and later evaluates that contact against explicit due dates for scheduled follow-ups. A separate broadcast lane lets an authorized operator send or schedule approved campaign messages through the same site-aware configuration model.

THREE SEPARATE LANES, ON PURPOSE
Immediate submission handling, scheduled follow-up evaluation, and broadcast processing are kept apart. That separation makes a failure easy to isolate, lets each lane be tested on its own, and stops a marketing operation from interfering with form capture.

CONFIGURATION OWNS CLIENT BEHAVIOR
The platform serves many client websites without duplicating the workflow set per site. Routing, sender selection, message-template selection, reply information, activation state and follow-up timing are all driven by controlled sheet data. The automation code owns reusable behavior; client-specific wording and routing data stay configuration. Templates resolve site-specific first with a global fallback, and inbound reply guidance is assembled from per-site configuration rather than hardcoded client details.

VERIFIED IMPLEMENTATION CHARACTERISTICS
A registered form route is authoritative — an untrusted hidden field in the submission cannot redirect a lead into another client's messaging path. Active sites are evaluated from configuration rather than a hardcoded list in control code. A valid first submission can provision the canonical contact structure without a workflow edit. One broken or missing site data area is isolated so it cannot abort follow-up processing for every other site. Day-one sent state is written only after the messaging provider reports a successful send. Deployment checks compare editable workflow state against the active published state before completion is claimed.

EXPLICIT NON-GOALS
No credentials or secret material in business-facing documentation. No uncontrolled messaging to an unverified form, an inactive site, or an ambiguous destination. No client-specific message text embedded in reusable workflow code. No assumption that a provider accepted a message merely because a workflow step started.

HONEST STATUS
Presented as controlled and production-oriented, not infallible. Historical evidence includes a complete 29-case end-to-end suite from the earlier release cycle, later production incident reproductions, controlled repair tests, and a live missing-site fault-injection check. Those results demonstrate specific behaviors at their recorded dates. Ongoing value depends on disciplined site onboarding, approved message content, provider health, consent controls, active monitoring, and verification after every workflow or configuration change.`,

      thumbnail: "",

      technologies: [
        "JotForm (Lead + Booking Field Capture)",
        "Server-Side Webhook Boundary (Validated External Event Intake)",
        "n8n (Routing, Persistence, Scheduling, Broadcasting, State Transitions)",
        "Twilio SMS API (Per-Site Sender Number)",
        "Google Sheets API (Config, Per-Site Contacts, Templates, Broadcast, SMS Log)",
        "Scheduled Follow-Up Engine (Explicit Due Dates + Sent-State Markers)",
        "Idempotency + Delivery-State Integrity Controls",
        "Deployment Parity Verification (Editable vs Published Workflow State)",
        "Node.js (Workflow Code Nodes — Business Logic)",
        "Python (Deployment Scripts + Automated Tests)",
      ],

      achievements: [
        "Real ongoing paid client engagement — Fine Touch Marketing (med-spa marketing agency, 15-20 WordPress client sites)",
        "Registered form route is authoritative: an untrusted hidden field cannot redirect a submission into another client's messaging path",
        "Per-site failure containment — one missing or broken site data area no longer aborts follow-up processing for every other site",
        "Sent state is written only after the provider confirms a successful send, so a failed send is no longer recorded as delivered",
        "Canonical contact structure is provisioned on a valid first submission without requiring a workflow edit",
        "Deployment parity check compares editable workflow state against the active published state before completion is claimed",
        "Inbound reply guidance and active-site evaluation both come from configuration rather than hardcoded client details",
        "Three isolated lanes — immediate, scheduled follow-up, broadcast — so a campaign blast cannot interfere with lead capture",
        "Historical 29-case end-to-end suite passed, plus incident reproductions, controlled repair tests, and a live missing-site fault-injection check",
      ],

      metrics: {
        client: "Fine Touch Marketing (med-spa marketing agency) — ongoing paid engagement",
        status: "Operational multi-site SMS automation — controlled, not infallible",
        lanes: "3 Separate Lanes: Immediate Welcome · Scheduled Follow-Ups · Operator Broadcast",
        config: "Per-Site Routing, Sender, Templates, Reply Info, Activation, Follow-Up Timing — All Sheet-Driven",
        isolation: "Per-Site Contact Boundaries · One Broken Site Cannot Stop the Others",
        integrity: "Post-Send State Writes · Idempotent Webhook Handling · Deployment Parity Checks",
        scale: "15-20 WordPress client sites from one workflow set — no per-site rebuild",
      },

      beforeAfter: [
        { label: "Lead follow-up", before: "Manual and inconsistent — a lead might get no reply at all", after: "Instant welcome message plus scheduled follow-ups evaluated against explicit due dates" },
        { label: "Routing trust", before: "A submitted hidden field could decide which client a lead belonged to", after: "The registered form route is authoritative and unknown routes fail safely" },
        { label: "Blast radius", before: "One site's missing data aborted follow-up processing for every site", after: "Per-site containment — the other sites keep processing" },
        { label: "Delivery truth", before: "State moved to sent when the step started", after: "State moves only after the provider confirms the send succeeded" },
        { label: "Adding a site", before: "Duplicate the whole workflow set per site", after: "One configuration row — code stays untouched" },
      ],

      challenges: [
        {
          problem: "Routing relied on a hint submitted with the form, which meant the submission itself could decide which client's messaging path it entered.",
          solution: "Made the registered form route the only authority for site resolution and made unknown routes fail safely instead of guessing.",
          outcome: "Cross-client message leakage is structurally prevented, not just unlikely.",
        },
        {
          problem: "One site with missing data blocked the scheduled follow-up run for every other site.",
          solution: "Isolated per-site processing so a missing or malformed data area is contained and reported rather than aborting the whole run.",
          outcome: "Verified with a live fault-injection check — the remaining sites processed normally.",
        },
        {
          problem: "Sent state was written when the send step began, so failed sends were recorded as delivered and never retried.",
          solution: "Moved the state write to after the provider reports success.",
          outcome: "Delivery records now match what actually happened.",
        },
        {
          problem: "The editable draft of a workflow and the published version that actually runs had quietly diverged, so fixes appeared applied but were not live.",
          solution: "Added a deployment check that compares editable state against active published state before any completion claim.",
          outcome: "Deploys are proven rather than assumed.",
        },
        {
          problem: "An authentication change drifted and silently broke calls that had been working.",
          solution: "Added operational checks specifically for authentication regressions alongside routing-gap and missing-tab checks.",
          outcome: "The failure surfaces as a monitored condition instead of a silent gap in follow-ups.",
        },
      ],
    },

    {
      id: "ftm-social-media",
      title: "Fine Touch Marketing — Social Content Generation & Approval Platform (Client Project)",
      category: ["automation", "ai-ml"],

      description:
        "Problem: The agency needed a dependable way to turn either brand research or client-supplied media into dated social campaigns without hand-writing every caption or losing approval state in email threads. Solution: A generally enabled n8n/Python/PHP platform with a protected Media Library, account-scoped client dashboard, background media-aware copy generation, calendar review, two-stage approval, and clean ZIP delivery. The client chooses dates and images/videos; the copy model sees the selected visual but does not replace it. Latest live evidence includes two 50-post paid HTTPS runs (100 captions, zero image-generation calls), two 23/23 media-aware flows, and a 22/22 real Chrome approval run.",

      fullDescription: `Fine Touch Marketing (FTM) is an ongoing paid client engagement — a med-spa marketing agency. This is the social content system of three separate production systems built for them. Stage: generally enabled live-maintenance platform.

THE ACTUAL PRODUCT RISK
The trial architecture deliberately validates the workflow and the commercial process before committing to a full multi-tenant SaaS rewrite. The main product risk was never whether content could be generated — it was whether clients reliably review, request changes and approve through a portal. The system is built to answer that question.

TWO PRODUCTION PATHS
The established path researches a brand from its website and social profiles, then generates scheduled concepts with captions, hashtags and images. The additive media-first path starts with approved client photography, video or artwork in a protected Media Library. Fine Touch Marketing creates a dated campaign and durable client-dashboard link; the client chooses dates and eligible media, gives one campaign-wide instruction, and completing selection starts caption work automatically.

MEDIA-AWARE BACKGROUND COPY
Caption and hashtag generation runs as persisted background work rather than a browser request that must stay open. The provider receives the selected image, or a video's confined poster frame, as visual evidence alongside bounded brand/campaign context. It remains copy-only: the selected media is preserved and the verified path records zero image-generation calls. The dashboard renders labels and controls immediately, hydrates protected previews through scoped tickets and a generation-safe cache, and reads terminal copy/usage state back from the operational store.

REVIEW AND DELIVERY
The client reviews the prepared campaign in a calendar, can approve, request changes, request repeated image changes, or edit caption and hashtag text. After client approval the agency sees a separate internal queue and gives or withholds final approval. Only then are authorized clean assets and matching copy packaged for download.

ROLES AND BOUNDARIES
Three roles: administrator, team member, end client. Team visibility is isolated — a team member sees their own clients. Generated-media review assets are watermarked; Media Library previews remain protected by session, campaign scope and short-lived preview tickets. Clean assets stay behind internal approval. The verified boundary ends at generation, review, internal approval and clean-asset packaging: approved assets are downloaded for manual scheduling. Direct social publishing, a production-grade multi-tenant identity platform, guaranteed scraping coverage and a transactional database are not claimed.

ARCHITECTURE
Static browser applications (admin/team dashboard, protected Media Library and client campaign dashboard) call a protected API/proxy boundary. n8n owns the established orchestration and state transitions against Google Sheets. Server-side Python/PHP services handle private media intake, normalization, categorization, confined visual-context reads, protected previews, per-minute copy jobs, usage records, revisions, approval and archive creation.

VERIFIED TEST EVIDENCE
The established system retains an 18-phase full workflow pass, a 17/17 reliability suite and a 21/21 live feature suite. The released Media Library then completed Phase 10 acceptance and Phase 11 controlled general release. The 11 August media-aware release passed 18/18 admin campaign-link persistence checks, 23/23 twice on fresh client campaigns, two independent 23/23 paid HTTPS scale runs on fresh 50-post campaigns (100 captions total, every post in review, usage recorded, image_calls=0), a 22/22 real Chrome calendar approval, and 32/32 protected-thumbnail checks. Final scoped release parity was 38 files in sync, with no local-ahead, absent or live-ahead file.

HONEST STATUS
These are dated verification records, not permanent guarantees. Local snapshots are never assumed to be the active production revision. A separate broad storage audit still reports historical archived-row debris and orphan files, although no ready row is currently broken; cleanup remains an ownership-gated task. Direct design-tool-link PDF ingestion is parked by owner decision, so the released intake path expects actual media files or a ZIP bundle.`,

      thumbnail: "",

      technologies: [
        "n8n Workflow Suite (Orchestration + State Transitions)",
        "Static HTML/CSS/JavaScript Admin + Media Library + Client Campaign Dashboards",
        "Public Webhook Proxy + Protected API Boundary",
        "Python Background Copy Worker + PHP 7.4 API Runtime",
        "Claude API (Anthropic) — Media-Aware Captions, Hashtags, Post Concepts",
        "Protected Preview Tickets + Generation-Safe Catalog Cache",
        "AI Image Generation + Server-Side Image Editing Utilities",
        "Watermarking Pipeline (Protected Clean Assets vs Review Assets)",
        "Google Sheets API (Clients, Posts, Users, Settings, Logs)",
        "Brand Research (Website + Social Profile Enrichment)",
        "ZIP Archive Generation (Clean Asset Delivery)",
        "Twilio SMS (Optional Admin Notification on Client Approval)",
      ],

      achievements: [
        "Real ongoing paid client engagement — Fine Touch Marketing (med-spa marketing agency)",
        "Two fresh 50-post paid HTTPS runs: 100 real captions, every post reached review, usage recorded, image_calls=0",
        "Media-aware client flow passed 23/23 twice; real Chrome calendar approval passed 22/22",
        "Admin campaign-link persistence passed 18/18 across navigation, reload, closed tab and sign-in",
        "Protected thumbnail coverage passed 32/32; final scoped deployment parity was 38 in sync with none ahead or absent",
        "Client-selected image or video poster frame grounds the copy call without replacing the selected media",
        "18-phase full workflow trial passed, including team visibility isolation and exact test-data cleanup",
        "Earlier reliability 17/17 and live feature 21/21 suites remain recorded for the established generated-media path",
        "Two-layer approval: client calendar review → internal agency approval → authorized clean package",
        "Scope stated honestly: the verified boundary ends at clean-asset packaging for manual scheduling — direct social publishing is not claimed",
      ],

      metrics: {
        client: "Fine Touch Marketing (med-spa marketing agency) — ongoing paid engagement",
        status: "Generally enabled live-maintenance platform (trial architecture before a multi-tenant rewrite)",
        evidence: "2 × 50-post paid runs · 23/23 twice media-aware · 22/22 Chrome approval · 38-file parity",
        approval: "Two Layers: Client Calendar Review → Internal Agency Approval → Clean Asset Release",
        roles: "Administrator · Team Member · End Client (team visibility isolated)",
        assets: "Private Media Library · Scoped Preview Tickets · Protected Clean Assets · ZIP Packaging",
        boundary: "Research/Media Selection → Background Copy → Review → Approval → Packaging. Publishing remains manual",
      },

      beforeAfter: [
        { label: "Campaign setup", before: "Loose client files, dates and instructions coordinated manually", after: "Protected media library, guided date/media selection and one campaign-wide instruction" },
        { label: "Caption writing", before: "Write every caption by hand without reliable visual context", after: "Background copy jobs see the selected image/video poster while preserving the source media" },
        { label: "Approval", before: "Email back-and-forth with no durable state", after: "Client calendar review then separate agency approval, tracked per version" },
        { label: "Delivery", before: "Manually match approved copy to the correct clean files", after: "Only internally approved media and matching copy enter the authorized ZIP" },
      ],

      challenges: [
        {
          problem: "Caption AI could write generic copy because it could not see the exact image or video the client selected.",
          solution: "Resolved the selected image or a video's poster frame inside the private media root and supplied it as bounded visual context to the copy provider, while keeping the call copy-only.",
          outcome: "Two 50-post live runs produced 100 review-ready captions with usage recorded and image_calls=0.",
        },
        {
          problem: "A power interruption left the release genuinely split between already-live frontend files and local-only backend/admin files.",
          solution: "Ran a read-only drift audit, resumed from the exact local-ahead bytes, verified server imports and PHP parsing, then repeated independent parity checks.",
          outcome: "Final release parity was 38 in sync, 0 local ahead, 0 absent and 0 live ahead.",
        },
        {
          problem: "Protected previews and campaign links felt fragile: media controls waited on thumbnail work, and a useful dashboard URL could disappear after navigation or closing a tab.",
          solution: "Painted media metadata immediately, reused scoped preview tickets through a generation-safe cache, and persisted links in account-scoped storage while retaining server-side revocation.",
          outcome: "Protected thumbnails passed 32/32 and campaign-link persistence passed 18/18 across navigation, reload, closed-tab and sign-in scenarios.",
        },
        {
          problem: "A working interface hid missing or stale backend behavior, so the UI implied features that the deployed automation did not actually perform.",
          solution: "Established source-of-truth rules — confirm active workflow identity and source parity before trusting any local snapshot — and traced single actions end to end.",
          outcome: "Deployment drift is caught deliberately instead of being discovered by a client.",
        },
        {
          problem: "A workflow tool's routing nodes produced empty outputs, so branches that should have carried data silently carried nothing.",
          solution: "Stopped depending on those nodes for routing and rebuilt the paths with explicit logic, then audited the rest of the suite for the same trap.",
          outcome: "Approve, reject and edit each do the right thing, verified in the live suite.",
        },
        {
          problem: "One logical result was multiplied into duplicates, and multi-slot generation ran in the wrong execution mode.",
          solution: "Fixed item propagation so one logical result stays one record, and corrected the execution mode for multi-slot generation.",
          outcome: "Post counts and per-day scheduling match what the operator asked for.",
        },
        {
          problem: "The data provider hit quota pressure under real usage, which stalled the pipeline.",
          solution: "Reworked access patterns to reduce read/write pressure and added explicit failure behavior for quota conditions.",
          outcome: "Recorded in the 17/17 reliability pass after the repair.",
        },
        {
          problem: "Image editing had no fallback, so a failed edit blocked the post entirely.",
          solution: "Added fallback behavior so a copy success with an image failure degrades instead of dead-ending.",
          outcome: "A partial failure produces a recoverable state the operator can act on.",
        },
      ],
    },

    {
      id: "wordpress-incident-response",
      title: "Server-Wide WordPress Malware Containment & Incident Response (Client Engagement)",
      category: ["security", "wordpress", "compliance"],

      description:
        "Problem: A shared hosting estate carrying many WordPress installations was running a self-healing malware chain. Sites still returned HTTP 200, so availability hid the compromise. The first scope estimate was wrong because it searched for known filenames on disk \u2014 while memory-resident PHP runners kept executing from files that had already been deleted, and an older persistence layer sat on accounts nobody had counted. Solution: A backup-first, dry-run-by-default containment operation that classified artifacts by structure rather than suspicion, quarantined original bytes before every mutation, traced the final request-time writer instead of deleting symptoms repeatedly, and refused to call the estate clean until scans stayed at zero after real page requests and after a delay. Closeout: 94 dynamically discovered WordPress roots scanned with zero identified artifacts, zero exact malware runners, 21 public sites returning HTTP 200 with no checked casino or loader indicators, database layer repaired from a validated backup, and an alert-only recurrence monitor running every ten minutes with proven off-box email delivery.",

      fullDescription: `A production incident-response engagement on a shared hosting estate running many WordPress installations. Published as a public, client-safe technical case study \u2014 client names, credentials, addresses, access commands and backup locations are deliberately omitted.

WHY THE FIRST SCOPE WAS WRONG
Three assumptions caused an undercount. Known filenames were treated as the whole threat, so a site without those names was called clean when it could still carry a different loader, a hidden MU-plugin, injected database content or a memory-only runner. Disk state was treated as runtime state, so self-deleting runners stayed invisible to file inventory while still executing. And an HTTP 200 was treated as identity evidence, when some hosts return success-like responses for arbitrary missing paths. The correction was methodological: scope became evidence-driven across files, processes, PHP worker behaviour, database rows, HTTP probes with randomized negative controls, account boundaries and request-triggered regeneration together.

THE PERSISTENCE MODEL
The chain behaved as a system, not a file. Runtime runners executed randomized hidden files and survived their own source path being removed. WordPress auto-load locations \u2014 MU-plugins and drop-ins \u2014 re-executed on ordinary requests. Configuration directives loaded randomized PHP before application code, with a visible loader, a hidden twin and an obfuscated cache copy able to restore the active layer. Shared PHP-FPM workers retained executable state after on-disk cleanup, so known artifacts could reappear with no exact runner visible. A final resistant account held a fake generator-style MU-plugin, an obfuscated cache payload and multiple identical archive seeds. Alongside the file layer sat rogue administrators, a dangerous default registration role, malicious plugin activation, attacker options, casino posts and revisions, and poisoned page-builder data.

NON-NEGOTIABLE RESPONSE RULES
Back up before mutation \u2014 every apply pass wrote original bytes and a manifest into a fresh restricted quarantine checkpoint, and the database repair began only after a full compressed dump was created and validated as readable. Match structure, not broad suspicion \u2014 nothing was deleted merely for being recent, minified, encoded or unfamiliar. Never execute a suspected payload \u2014 the classifier read bytes, parsed archives without extraction, and syntax-checked cleaned PHP through a separate interpreter invocation. Make the smallest operational change \u2014 only workers owned by affected accounts were recycled, and shared PHP reloads or a full restart required separate explicit approval. Verify after real requests. And separate containment from restored trust.

CONVERGENCE, NOT DELETION COUNT
The first server-wide pass cut the file and process count dramatically but did not converge \u2014 a small group of accounts kept regenerating artifacts. Hidden loader twins and obfuscated cache loaders were found and added to the classifier. One account on a different PHP-FPM version survived a graceful reload and even a full restart with symptom-only cleanup, which proved an on-request source still existed. A temporary self-removing audit rule captured the actual writer during a controlled homepage request, static tracing found the source and its seeds, and the complete 12-artifact chain was quarantined in one atomic pass while the affected runtime was controlled. The account held at zero, and so did two later full-estate scans and delayed request testing.

DATABASE AND CONTENT REPAIR \u2014 SEPARATE ACCEPTANCE
Residual casino material survived in one database after the reinjector was gone. The repair restored page content and page-builder metadata from the latest clean revision, dropped the generated page cache, removed attacker-owned posts, revisions, metadata and term relationships with dependency-aware queries, removed rogue administrators and malicious options, restored the safe default role while keeping registration closed, validated serialized plugin state, then recounted indicators and inspected the rendered public page. More than two thousand attacker-controlled post and revision records were removed.

MULTI-LAYER VERIFICATION
No single check was treated as sufficient. Static: the expanded classifier scanned all 94 discovered roots and returned zero artifacts with no affected users. Runtime: the exact runner pattern returned zero and every required PHP, web, database, scheduler and automation service was active. Request-triggered: normal public requests were sent to the previously affected estate, including the site that had reproduced the final reinfection, and scans repeated afterwards. Delayed: clean results were re-confirmed after a wait rather than accepted straight after a service recycle. Public content: 21 known sites returned HTTP 200 with homepage HTML checked for casino strings, loader infrastructure, injector names and final-source indicators. Database: targeted queries confirmed zero checked casino posts, zero known malicious post metadata, zero malicious options, zero rogue administrators, and safe role and plugin configuration.

RECURRENCE MONITORING \u2014 ALERT-ONLY BY DESIGN
Every ten minutes the monitor takes a lock so scans cannot overlap, dynamically discovers current WordPress roots rather than trusting a fixed list, runs the expanded classifier in dry-run with a bounded timeout, treats an unparseable or failed scan or a zero root count as an alert condition, counts exact runner patterns, checks required services, confirms the automation engine is still bound to its intended local listener, sends on transition to alert with periodic reminders, and sends a recovery notice on return to clean. It does not auto-delete \u2014 automatic remediation during an alert could destroy evidence, act on a false positive, or cause an outage. The acceptance test ran a fresh 94-root scan with zero findings and zero runners, and the off-box mail provider accepted the health message with nothing left deferred in the local queue.

HONEST RESIDUAL RISK
Containment succeeded and was verified at several independent layers. It is not the same as restored trust. The environment showed long-lived persistence, cross-account activity, memory-resident execution, hidden loaders, shared-runtime replay and database abuse \u2014 so a host with that history cannot claim the assurance of a freshly provisioned system just because known indicators are gone. The recorded recommendation is a clean rebuild from a new image with fresh OS, PHP, database, WordPress core, plugin and theme code, scrubbed content and media only, no copied executable PHP, recreated automation services and credentials, full secret rotation, per-site validation on a temporary hostname before DNS cutover, an independently hosted external heartbeat, and retirement of the historical host after evidence retention. The on-box monitor closes the recurrence-detection gap, not the total-outage gap.`,

      thumbnail: "",

      technologies: [
        "Linux Incident Response (Shared Production Host)",
        "WordPress Security (MU-Plugins, Drop-ins, Core File Injection)",
        "PHP-FPM Shared Worker State Handling (Account-Scoped Recycle \u2192 Approved Reload/Restart)",
        "Process Forensics (Memory-Resident Runners, Open File Descriptor Recovery)",
        "Structural Malware Classifier (Content Markers, Decoder Structure, Path Relationships, Archive Members)",
        "Backup-First Quarantine (Dry-Run Default, Manifests, Atomic Replace + Syntax Check)",
        "auto_prepend_file Loader Chain Analysis",
        "MySQL / WordPress Database Repair (Dependency-Aware Deletes, Revision Restore, Serialized State Validation)",
        "HTTP Presence Probing with Randomized Negative Controls",
        "Cron-Scheduled Alert-Only Recurrence Monitoring (Locked, Bounded, Off-Box Email)",
        "Python + Shell Tooling (Classifier, Scrubber, Verification, Monitor)",
      ],

      achievements: [
        "94 dynamically discovered WordPress roots scanned \u2014 zero artifacts identified by the expanded structural classifier, with no affected users",
        "Zero exact malware runner processes observed after containment, confirmed again after real requests and after a delay",
        "21 known public sites returned HTTP 200 with no checked casino, loader, injector or source-chain indicator in homepage HTML",
        "Traced the final request-time writer with a temporary self-removing audit rule instead of repeating symptom deletion, then removed the complete 12-artifact source chain in one atomic pass",
        "Corrected a materially wrong initial scope \u2014 process-level observation proved the compromise crossed hosting-account boundaries, which filename scanning had missed",
        "Every mutation was recoverable: original bytes plus a manifest quarantined before removal, and a validated compressed database dump before the content repair",
        "Database layer repaired separately \u2014 more than two thousand attacker-controlled post and revision records removed, rogue administrators and malicious options cleared, safe default role restored with registration kept closed",
        "Alert-only recurrence monitor installed on a ten-minute schedule, clean-baselined against a fresh 94-root scan, with off-box email delivery proven rather than assumed",
        "Reported the residual-risk boundary explicitly \u2014 containment verified, trust restoration deliberately not claimed, with a documented clean-rebuild path",
      ],

      metrics: {
        scope: "94 Dynamically Discovered WordPress Roots \u2014 Scope Derived from Evidence, Not a Hand-Maintained List",
        artifacts: "0 Identified Artifacts \u00b7 0 Exact Malware Runners at Closeout",
        publicSites: "21 Known Sites Returning HTTP 200 with No Checked Malware or Casino Indicators",
        database: "2,000+ Attacker Posts & Revisions Removed \u00b7 0 Rogue Admins \u00b7 0 Malicious Options Remaining",
        sourceChain: "Final 12-Artifact Source Chain Removed Atomically After Request-Time Writer Tracing",
        safety: "Dry-Run by Default \u00b7 Backup Before Every Mutation \u00b7 Suspected Payloads Never Executed",
        monitoring: "Alert-Only Recurrence Monitor Every 10 Minutes \u00b7 Off-Box Email Delivery Proven",
        honesty: "Containment Verified \u2014 Trust Restoration Not Claimed \u00b7 Clean Rebuild Recommended",
      },

      beforeAfter: [
        { label: "Scope", before: "Counted from known filenames on a handful of reported sites", after: "94 roots discovered dynamically, with process, database and HTTP evidence agreeing" },
        { label: "Detection", before: "Filename scanning \u2014 clean result on sites that were actually infected", after: "Structural classification across files, processes, worker state, database rows and request behaviour" },
        { label: "Cleanup", before: "Delete the visible files, watch them return within seconds", after: "Source chain traced to the request-time writer and removed atomically \u2014 estate held at zero" },
        { label: "Proof", before: "A zero-result scan taken immediately after cleanup", after: "Zero confirmed again after real page requests and after a deliberate delay" },
        { label: "Database", before: "Casino posts, rogue admins and open registration surviving a clean file scan", after: "Repaired from a clean revision after a validated backup \u2014 indicators recounted to zero" },
        { label: "Recurrence", before: "No detection \u2014 reinfection would surface only when a client noticed", after: "Locked, bounded, alert-only monitor every 10 minutes with proven off-box delivery" },
        { label: "Reporting", before: "\u201cIt\u2019s clean now\u201d", after: "Dated evidence per layer, plus an explicit residual-risk boundary and rebuild plan" },
      ],

      challenges: [
        {
          problem: "Deleted files kept coming back within seconds, and a site could return HTTP 200 while malicious code was still executing.",
          solution: "Stopped treating regeneration as a reason to delete more broadly and started treating it as evidence of an unresolved source \u2014 a temporary self-removing audit rule captured the actual writer during a controlled homepage request.",
          outcome: "The real source and its seeds were identified and removed in one atomic pass instead of another round of symptom deletion.",
        },
        {
          problem: "Filename-based scanning proved infection but could never prove absence, so the first reported scope was materially too small.",
          solution: "Replaced known-name matching with structural classification \u2014 confirmed markers, decoder structure, path relationships and archive contents \u2014 and paired it with process inspection across account boundaries.",
          outcome: "The compromise was shown to be server-wide rather than limited to the originally reported sites.",
        },
        {
          problem: "Malware launched PHP processes and then removed the file, so file inventory reported nothing while the runner stayed alive.",
          solution: "Added process-level visibility and recovered a live runner through its open file descriptor for static analysis, without ever executing it.",
          outcome: "The persistence chain could be modelled from the actual payload rather than guessed from what remained on disk.",
        },
        {
          problem: "A graceful PHP-FPM reload preserved enough shared runtime state that reinfection continued even after the files were gone.",
          solution: "Inspected service behaviour instead of assuming it, recycled only workers owned by affected accounts first, and escalated to a full restart only after the wider interruption risk was explicitly approved.",
          outcome: "Shared runtime replay was eliminated without converting a security incident into a broad outage.",
        },
        {
          problem: "Aggressive cleanup on a live shared host risked destroying evidence or breaking unrelated sites.",
          solution: "Made dry-run the default for every scanner and scrubber, quarantined original bytes with a manifest before any mutation, syntax-checked rewritten PHP before atomic replacement, and reclassified any file whose bytes changed between planning and apply.",
          outcome: "Every apply pass stayed recoverable and auditable, and no unrelated site was taken down.",
        },
        {
          problem: "A clean file and process state still left casino content rendering publicly on one site.",
          solution: "Treated the database as its own acceptance layer \u2014 full validated backup, restore from the latest clean revision including page-builder metadata, dependency-aware deletion of attacker records, then a recount and a rendered-page inspection.",
          outcome: "Public content came back clean and the database indicators recounted to zero.",
        },
        {
          problem: "A comprehensive zero-result scan is easy to over-sell as \u201cthe server is safe now\u201d.",
          solution: "Reported containment and trust restoration as separate things \u2014 dated evidence per layer, an explicit statement of what remains uncertain after long-lived cross-account compromise, and a concrete clean-rebuild path.",
          outcome: "The client got neither alarmism nor false assurance, and the rebuild recommendation stands on record.",
        },
      ],

      featured: true,
      isWordpress: true,
    },

    {
      id: "secure-hybrid-ai-hub",
      title: "Secure Hybrid AI Development Hub — Fail-Closed Local AI Broker",
      category: ["ai-ml", "fullstack", "compliance"],

      description:
        "Status first: Phase 1 is incomplete and validation is synthetic only as of 30 July 2026 — no live client onboarding, no real provider transmission, no real credentials, no regulated data, no staging or production use. Problem: Handing a coding agent unrestricted access means the model itself decides its own filesystem scope, network access, credentials, provider choice and whether work is 'done'. Solution: A fail-closed local control plane that owns those decisions instead. Models reason and propose; deterministic code grants scope, egress, credentials and completion status, and every privileged transition is a typed record. Private local coding is separated from internet research, credentials are used as capabilities without their values entering model context, and the strictest applicable policy always wins.",

      fullDescription: `A fail-closed local control plane for software work performed with Codex, Claude Code, VS Code, terminal workflows, local Ollama models, and separately approved provider-backed workers. It replaces the idea of one unrestricted coding agent with a deterministic broker that owns scope, policy, task state, isolation, artifacts, verification evidence and release decisions.

HONEST STATUS — READ THIS FIRST
As of 30 July 2026, Phase 1 is incomplete and validation remains synthetic only. The most recent integrated authority-foundation source passed its scoped synthetic gates before integration; the latest Phase 1 closure task was cancelled before complete quality, independent review, integration, release, deployment or push. Live client onboarding, real provider transmission, real credentials, regulated data, staging, production and deployment remain prohibited until later evidence and exact per-project authorization exist. Historical results establish only the tested synthetic state of their reviewed revision — they do not establish Phase 1 closure, authorize a real provider, prove every operating system configuration, or replace per-client production acceptance.

THE CENTRAL SECURITY RULE — SEPARATION OF AUTHORITY
Models may reason and propose; they do not grant themselves filesystem scope, network access, credentials, providers, production authority or completion status. Every privileged transition is mediated by deterministic code and a typed record. Design principles: deterministic authority, credentials as capabilities, private coding separated from internet research, strictest policy wins, evidence establishes completion, and recovery is part of correctness.

ARCHITECTURE
The broker core provides typed schemas, SQLite-backed transactional state, content-addressed artifacts, atomic writes, safe path handling, task transitions, leases, approvals, audit events and dossier checkpoints, with the hub CLI as its public entry point. Around it sit a registry, worker boundaries and an evidence plane. Supported topologies are single repository, monorepo, polyrepo microservices, hybrid systems, and client separation — with explicit registration and opt-in rather than ambient discovery.

INTENDED OPERATING PATH (STILL UNDER SYNTHETIC VERIFICATION)
A developer submits one outcome-oriented request such as "add appointment cancellation and fully verify it". The broker resolves the registered system, applies the strictest effective policy, prepares isolated workspaces, records an explicit task-specific worker selection, validates changes, runs quality gates, repairs within configured limits, records evidence, and ends in an explicit verified, paused, blocked, cancelled or infrastructure-failure state.

WHAT IT IS FOR
Start work from a familiar developer surface without bypassing central policy. Avoid re-explaining a large system to every new model session. Keep unrelated clients, repositories, caches, artifacts and task state separated. Use local models for private high-volume implementation, and provider-backed workers only when the project profile and human approvals permit. Isolate public internet research from private repository access. Use credentials through controlled capabilities without placing their values in model context. Produce reproducible evidence for tests, reviews, releases, deployment decisions and recovery. Fail visibly when information, authority, quality, isolation or infrastructure is insufficient.

FAILURE MODES ARE PART OF THE DESIGN
Explicit handling for worker unavailable, malformed or incomplete worker output, resource conflict, missing authorization, scanner or isolation unavailable, quality gate failure, deployment health failure and process interruption.

SNAPSHOT
Package baseline secure-hybrid-hub 0.11.0 with reviewed development commits beyond the public baseline. Python 3.11+, standard library only. Target hosts Linux, WSL2 and macOS, subject to phase-specific validation. Source and test inventories are evolving — only deterministic results for the exact reviewed revision are authoritative, which is why no line or test counts are quoted here. Apache-2.0.`,

      thumbnail: "",

      technologies: [
        "Python 3.11+ (Standard Library Only — No Runtime Dependencies)",
        "SQLite-Backed Transactional Task State",
        "Typed Schemas + Typed Privileged-Transition Records",
        "Content-Addressed Artifact Store + Atomic Writes + Safe Path Handling",
        "Policy Engine (Classification-Based Egress, Strictest-Policy-Wins)",
        "Capability-Based Secret Handling (Values Never Enter Model Context)",
        "Worker Boundary Isolation (Local Ollama + Approved Provider Workers)",
        "Isolated Research Lane (Internet Research Separated from Repo Access)",
        "Leases + Approvals + Audit Events + Dossier Checkpoints",
        "Quality Engine (Layered Verification Gates)",
        "Hub CLI (Public Entry Point)",
        "Apache-2.0 Licensed",
      ],

      achievements: [
        "Designed around separation of authority: the model proposes, deterministic code decides scope, egress, credentials, providers and completion — every privileged transition is a typed record",
        "Fail-closed by default — insufficient information, authority, quality, isolation or infrastructure produces a visible failure rather than a silent best-effort result",
        "Credentials modelled as capabilities: a worker can use a secret without the secret's value ever entering model context",
        "Private coding and public internet research are separate lanes by construction, not by prompt instruction",
        "Strictest-policy-wins evaluation across project, client and task scope, with explicit registration and opt-in instead of ambient repository discovery",
        "Completion is an evidence claim: verified, paused, blocked, cancelled and infrastructure-failure are distinct explicit end states",
        "Multi-topology design — single repo, monorepo, polyrepo microservices, hybrid systems, and hard client separation",
        "Documented failure-and-recovery behavior for worker outage, malformed output, resource conflict, missing authorization, scanner unavailability, gate failure, deployment health failure and process interruption",
        "Scope stated honestly in the technical overview: Phase 1 incomplete, synthetic validation only, no real providers or regulated data until per-project authorization exists",
      ],

      featured: true,

      metrics: {
        status: "Phase 1 INCOMPLETE — synthetic validation only as of 30 July 2026",
        prohibited: "No live client onboarding, real provider transmission, real credentials, regulated data, staging or production",
        baseline: "secure-hybrid-hub 0.11.0 · Python 3.11+ · standard library only",
        hosts: "Linux · WSL2 · macOS (subject to phase-specific validation)",
        principle: "Models propose; deterministic code grants scope, egress, credentials and completion",
        surfaces: "Codex · Claude Code · VS Code · terminal · local Ollama · approved provider workers",
        license: "Apache-2.0",
      },

      beforeAfter: [
        { label: "Authority", before: "The coding agent decides its own filesystem scope, network access and provider", after: "A deterministic broker grants each of those, and records the grant as a typed transition" },
        { label: "Credentials", before: "Secrets pasted into model context to get work done", after: "Secrets used through capabilities — the value never enters the model's context" },
        { label: "Research vs code", before: "One agent with both private repo access and open internet access", after: "Separate lanes — isolated research cannot reach private repositories" },
        { label: "\"Done\"", before: "The model says it finished", after: "Completion is an evidence claim with distinct verified / paused / blocked / cancelled / infrastructure-failure states" },
        { label: "Failure", before: "Silent best-effort when something is missing", after: "Fail-closed and visible when information, authority, quality or isolation is insufficient" },
      ],

      challenges: [
        {
          problem: "An assistant that can grant itself scope, network access or credentials makes every safety rule advisory — a prompt instruction is not an access control.",
          solution: "Moved every privileged decision out of the model and into deterministic code with typed records, so policy is enforced by the code path rather than requested politely in a prompt.",
          outcome: "Scope, egress, credentials, provider choice and completion status are all decisions the model can propose but never make.",
        },
        {
          problem: "Work across multiple clients in one environment risks bleeding repositories, caches, artifacts and task state across boundaries that must stay separate.",
          solution: "Bounded per-task workspaces with leases, explicit registration and opt-in, and hard client separation as a supported topology.",
          outcome: "Client separation is structural rather than a convention someone has to remember.",
        },
        {
          problem: "A closure task was pushed toward completion before quality, independent review and integration were actually finished — the exact pattern this project exists to prevent.",
          solution: "Cancelled the task rather than declaring it done, and recorded the cancellation as the current state in the technical overview instead of publishing a completion claim.",
          outcome: "The documented status says Phase 1 incomplete with synthetic validation only — which is what the evidence supports.",
        },
      ],
    },

    {
      id: "vitalprobe",
      title: "VitalProbe — Healthcare AI Safety Testing & Evidence",
      category: ["ai-ml", "healthcare", "compliance"],

      description:
        "Problem: A healthcare assistant that correctly escalated chest pain last month can quietly become vague, dismissive or unsafe after a prompt, model, retrieval-corpus or provider version change — and ordinary application tests rarely express conversational safety expectations at all. Solution: A local-first tool that runs chatbots, RAG applications and AI agents through synthetic patient scenarios, evaluates the responses with deterministic checks plus optional semantic judges, and produces reviewable JSON and self-contained HTML evidence showing what was tested, what passed, what failed and why each verdict was assigned. No-PHI by architecture — fictional synthetic patients only, no hosted accounts, no telemetry, no silent third-party transmission. Current evidence: 149 tests passing, Ruff clean, strict mypy clean.",

      fullDescription: `A local-first safety and evidence-testing product for healthcare and wellness AI assistants. It runs chatbots, retrieval applications and AI agents through synthetic patient scenarios, evaluates the observed responses, and produces reviewable JSON and self-contained HTML evidence showing what was tested, what passed, what failed, and why each verdict was assigned.

WHY IT EXISTS
Healthcare-oriented assistants change behavior when prompts, models, code, retrieval corpora, safety policies or provider versions change. A response that previously escalated chest pain or crisis language may later become vague, dismissive, overly reassuring or unsafe. Ordinary application tests rarely express those conversational safety expectations clearly. VitalProbe converts them into repeatable synthetic scenarios and explicit evidence — so a builder can test an assistant before a demonstration, compare a release against a baseline, inspect individual checks, and hand a self-contained dossier to a reviewer.

NO-PHI BY ARCHITECTURE
Fictional synthetic patients only. No production conversations, no real patient records, no hosted accounts, no server-side customer-response storage, no telemetry, no analytics, no silent third-party transmission. This boundary is enforced in project rules and tests because it is part of the product design rather than a policy note.

ARCHITECTURE — DEPENDENCIES FLOW TOWARD THE CORE
Contracts (typed test cases, responses, checks, verdicts, run artifacts) · Packs (suite discovery, YAML loading, schema validation, draft/review status) · Targets (shared adapter protocol with REST and MCP implementations) · Evaluators (deterministic response and trajectory checks) · Judges (semantic judge protocol with local and opt-in provider backends) · Runner (concurrency, retries, target calls, checks, aggregation, timing) · Reporting (canonical JSON and self-contained HTML dossier) · Experience (local runs, baselines, regressions, labels, learning inputs) · Entitlements (offline signed-license verification and feature gates) · Simulator (multi-turn fictional patient generation and trajectory evaluation) · Dashboard (local clinical-ledger views and trigger-run workflow) · MCP (target adapter and licensed product-side agent tools). New product behavior belongs in the engine rather than being duplicated in a UI or command shell.

WHAT IT DELIVERS
Reproduce important safety scenarios without real patient data. Distinguish product findings from network and configuration errors. Combine deterministic checks with optional semantic scoring. Preserve exact synthetic inputs, observed outputs, evidence, latency and limitations. Detect PASS-to-WARN or PASS-to-FAIL regressions between runs. Track run history locally without accounts or hosted storage. Generate adversarial draft variants from failures while keeping a human review gate. Test both single-turn and multi-turn behavior. Integrate through CLI, dashboard, REST, MCP, Docker and agent-oriented tooling.

VERIFICATION EVIDENCE
55 Python source modules, approximately 4,836 source lines, 74 classes and 187 functions. 21 top-level test modules and approximately 3,169 test lines. 149 automated tests passing at the current checkpoint, Ruff clean, strict mypy clean. The automated suite verifies the implemented source and synthetic scenarios — it does not replace human clinical review, human calibration labels, attorney review, or a customer-specific acceptance process.

DELIBERATE LIMITS
VitalProbe does not certify a target, grant regulatory approval, replace clinical judgment, or provide legal advice. Reports describe observed results and limitations. Clinical and legal interpretation stays with qualified humans, and the product tiers keep explicit human-only gates. Law mapping is informational. Pre-release: package version 0.1.0.dev0, Python 3.12+, Apache-2.0 for the public code repository. Default operating cost is zero — local and synthetic workflows run without paid provider calls.`,

      thumbnail: "",

      technologies: [
        "Python 3.12+ (55 Modules, ~4,836 Source Lines)",
        "Typed Test Contracts (Cases, Responses, Checks, Verdicts, Run Artifacts)",
        "YAML Suite Loading + Schema Validation (Draft/Review Status)",
        "REST + MCP Target Adapters (Shared Adapter Protocol)",
        "Deterministic Evaluators (Response + Trajectory Checks)",
        "Semantic Judges (Local + Opt-In Provider Backends)",
        "Concurrent Runner with Bounded Retries + Timing Capture",
        "Canonical JSON + Self-Contained HTML Evidence Dossier",
        "Baseline + Regression Comparison (PASS→WARN / PASS→FAIL Detection)",
        "Multi-Turn Synthetic Patient Simulator",
        "Offline Signed-License Entitlements (Open-Core Feature Gates)",
        "Local Dashboard (Clinical Ledger Views + Trigger Runs)",
        "LangGraph Example + Product-Side MCP Server",
        "Docker Packaging + CLI",
        "Ruff + strict mypy (both clean) · 149 Tests Passing",
      ],

      achievements: [
        "149 automated tests passing at the current checkpoint, with Ruff clean and strict mypy clean",
        "21 top-level test modules and approximately 3,169 test lines against 55 source modules and roughly 4,836 source lines",
        "No-PHI architecture enforced in project rules and tests — synthetic fictional patients only, no hosted accounts, no telemetry, no silent third-party transmission",
        "Deterministic checks combined with optional semantic judges, so a finding can be traced to a rule rather than a model's opinion",
        "Product findings are separated from network and configuration errors, so an infrastructure failure is not reported as a safety failure",
        "Regression detection between runs — catches PASS-to-WARN and PASS-to-FAIL drift after a prompt, model, corpus or provider change",
        "Self-contained HTML dossier plus canonical JSON, so a reviewer can be handed evidence without needing the tool installed",
        "Multi-turn synthetic patient simulator with trajectory evaluation, not just single-turn prompts",
        "Both REST and MCP target adapters, plus a licensed product-side MCP server and a LangGraph example",
        "Runs at zero provider cost by default — local and synthetic workflows need no paid calls",
        "Explicit human-only gates: the tool does not certify a target, grant regulatory approval, replace clinical judgment or give legal advice",
      ],

      featured: true,
      isHealthcare: true,

      metrics: {
        status: "Pre-release — package 0.1.0.dev0, public source distribution",
        tests: "149 automated tests passing · Ruff clean · strict mypy clean",
        source: "55 Python modules · ~4,836 source lines · 74 classes · 187 functions",
        testSource: "21 top-level test modules · ~3,169 test lines",
        privacy: "No-PHI by architecture — synthetic fictional patients only, no telemetry, no hosted storage",
        surfaces: "CLI · Local Dashboard · Docker Demo · JSON/HTML Evidence · REST/MCP Targets · LangGraph Example",
        cost: "Zero default operating cost — local and synthetic workflows need no paid provider calls",
        license: "Apache-2.0 (public code repository)",
      },

      beforeAfter: [
        { label: "Safety testing", before: "Nobody notices the assistant stopped escalating chest pain until a user reports it", after: "Synthetic scenarios re-run on every change, with PASS→WARN and PASS→FAIL regressions flagged" },
        { label: "Evidence", before: "\"We tested it\" with nothing a reviewer can inspect", after: "Canonical JSON plus a self-contained HTML dossier showing inputs, outputs, verdicts and why" },
        { label: "Patient data", before: "Safety testing tempts you toward real conversations and real records", after: "No-PHI by architecture — fictional synthetic patients only, enforced in rules and tests" },
        { label: "Failure attribution", before: "A network timeout looks the same as an unsafe answer", after: "Product findings are separated from network and configuration errors" },
        { label: "Turn depth", before: "Single-prompt spot checks", after: "Multi-turn synthetic patient trajectories evaluated end to end" },
      ],

      challenges: [
        {
          problem: "A safety tool that scores answers with a model alone produces findings nobody can audit — the verdict is just another opinion.",
          solution: "Made deterministic checks the base layer and semantic judges optional on top, with a documented calibration boundary between them.",
          outcome: "Every verdict traces to either an explicit rule or a clearly labelled semantic score.",
        },
        {
          problem: "An unreachable target or a malformed judge response can be misread as the assistant failing a safety check.",
          solution: "Separated product findings from network and configuration errors, and gave each failure mode explicit handling — invalid suite, target unreachable, judge unavailable, learning generator failure, license invalid, dashboard trigger error.",
          outcome: "An infrastructure problem reports as an infrastructure problem, not as a safety regression.",
        },
        {
          problem: "Testing healthcare AI safety creates pressure to use real conversations and real patient records, which is exactly the data that must not be involved.",
          solution: "Built the no-PHI boundary into the architecture and enforced it in project rules and tests rather than documenting it as a policy.",
          outcome: "The tool cannot quietly drift into handling PHI, because the tests would fail.",
        },
        {
          problem: "Auto-generating adversarial test variants from failures risks a tool that grades itself and drifts away from clinical reality.",
          solution: "Kept learning-draft generation behind a mandatory human review gate, with human-only gates preserved in the product tiers.",
          outcome: "Drafts accelerate coverage while a qualified human still decides what counts as a valid safety expectation.",
        },
      ],
    },

    {
      id: "fleetwright",
      title: "Fleetwright — Control Plane for Fleets of Real Browsers",
      category: ["automation", "fullstack", "security"],

      description:
        "Problem: Independent automation scripts that share many logged-in accounts book the same job twice, lose track of bookings when they crash, and cannot say how fast the fleet reacts. Solution: One coordinated system of Playwright workers with a database-enforced claim state machine, fencing tokens, a reconciler for uncertain outcomes and per-stage latency measurement. Against a fictitious load board built in the same repository: 0 duplicate bookings with 200 concurrent competitors over 10,000 jobs, and 99 automated tests passing. Live public console with capped demo controls; metrics, the crawler and the AI agent are still planned.",

      fullDescription: `Fleetwright runs many logged-in Playwright browser sessions, watches a job feed, and books each matching job exactly once, even when workers crash, networks drop or two machines race for the same job. It is tested end to end against a fictitious freight load board built in the same repository (emailed one-time codes, captcha, live feed with ground-truth publish times, first-booker-wins booking and failure switches). It is never pointed at a real third-party site; that boundary is a legal requirement, not a convenience.

STATUS (evidence checked October 6, 2026)
Phases 1 to 5 complete: design prototype and live site, mock load board, coordination core, browser runtime and live engine. Phase 6, the live console, is shipped and running on the public site, with metrics and alerting still to do. The crawler, a local AI browser agent and the large-scale proof runs are planned.

ARCHITECTURE
Postgres is the source of truth: claims with full history, fencing tokens, an outbox and an append-only audit log, with row-level security enabled and forced on every tenant table. Redis Streams carry fast, short-lived traffic per cell; losing Redis loses speed, never correctness. Worker processes run one Chromium each with many isolated browser contexts (watcher and claimer slots). A control process per cell runs the dispatcher, outbox relay and reconciler.

CLAIM STATE MACHINE
Exactly one claim per job through a unique constraint. Leasing takes a fresh fencing token from a database sequence, so a worker that wakes up late is rejected. Lease expiry uses only the database clock. A claim that crashes mid-action becomes unknown and is never retried; the reconciler asks the target what the account actually booked.

LIVE CONSOLE AND DEMO
Next.js console served from the same origin as a versioned API with an exported OpenAPI contract. Password (argon2id) plus mandatory TOTP sign-in, four roles, CSRF protection, audit log and server-sent-event live updates. Anyone can watch a read-only view; a shared demo login can start a capped run and switch on failure modes, which reset automatically after 15 minutes.

PRODUCTION
One shared server running a single hardened container project behind a CDN: internal network, read-only file systems, no Linux capabilities, resource limits. Releases are rehearsed locally as the exact production stack and deployed with SHA-256 hash parity before and after. The demo has no redundancy or backup job yet and claims no availability figure.`,

      thumbnail: "",

      technologies: [
        "Python 3.12",
        "Playwright (Chromium)",
        "PostgreSQL (Forced Row-Level Security)",
        "Redis Streams",
        "FastAPI",
        "Next.js Console",
        "Server-Sent Events",
        "OpenAPI Contract",
        "Argon2id + TOTP",
        "AES-256-GCM Envelope Encryption",
        "Docker Compose",
        "GitHub Actions + Gitleaks + Bandit + Semgrep",
      ],

      achievements: [
        "0 duplicate bookings with 200 concurrent competitors over 10,000 jobs; 9,897 claims confirmed equal 9,897 bookings on the board's own log",
        "184 crashes after leasing and 213 during the action injected in the load test, all re-queued or reconciled",
        "Detection to confirmed booking: median about 365 ms, 95th percentile about 540 ms",
        "About 70 to 103 MB per browser context and about 1.8 cores at 32 contexts, measured on one developer PC",
        "Tenant A cannot read or write tenant B rows, even as the table owner (mutation-checked)",
        "99 automated tests against real Postgres, Redis, a mail server, Chromium and the mock board",
        "Live end-to-end check through the CDN: 0 failures with three demo visitors at once, capped controls, owner TOTP sign-in, audit and live updates",
      ],

      liveUrl: "https://fleetwright.zahidul-islam.com/",
      githubUrl: "https://github.com/Zahidulislam2222/fleetwright",
      pdfUrl: "/docs/fleetwright-technical-overview.pdf",
      featured: true,

      metrics: {
        duplicates: "0 across 10,000 jobs with 200 concurrent competitors",
        latency: "p50 about 365 ms · p95 about 540 ms (detection to confirmed booking)",
        capacity: "About 70–103 MB per context · about 1.8 cores at 32 contexts",
        tests: "99 automated tests against real infrastructure",
        scale: "Single shared demo server; 1M sessions and 99.9% are design targets, not achieved",
      },

      challenges: [
        {
          problem: "The first passing concurrency test booked only 77 of 10,000 jobs, so \"zero duplicates\" was trivially true.",
          solution: "Switched to production-like timings and added coverage assertions: at least 95% of jobs booked and at least one crash during the action reconciled.",
          outcome: "A passing run now proves it exercised the dangerous path.",
        },
        {
          problem: "The public demo login let in only one visitor per 30 seconds, because one-time codes are single use per account.",
          solution: "The shared demo account skips the per-account replay check while every personal account keeps it.",
          outcome: "A test signs in three visitors with the same code, and the live check passed with three demo visitors at once.",
        },
        {
          problem: "The first capacity number was wrong by a factor of two: summed memory counted shared Chromium memory many times and CPU always read zero.",
          solution: "Measured unique memory per process with persistent process objects, and fixed the same CPU bug in the worker heartbeat.",
          outcome: "About 70 to 103 MB per context and about 1.8 cores at 32 contexts.",
        },
      ],
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
        { name: "ADA Lawsuit Risk Reduction (Overlay Removal)", tier: "proficient" },
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
        { name: "Per-Site Failure Containment (One Broken Tenant Cannot Stop the Rest)", tier: "expert" },
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
