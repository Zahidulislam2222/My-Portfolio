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
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Clients Served", value: "Ongoing", suffix: "" },
    { label: "Cloud Services Mastered", value: 50, suffix: "+" },
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
      title: "MediConnect V3 — Multi-Cloud Global Telehealth Ecosystem",
      category: ["hybrid-cloud", "ai-ml", "mobile", "healthcare"],

      description:
        "A production-grade, forensically verified HIPAA / GDPR / FHIR R4 / SOC 2 Type II-ready telemedicine platform across AWS, GCP & Azure. Features Zero-Cost Idle architecture ($2/mo idle), active-active Kubernetes HA clusters, 7 microservices, 35 FHIR R4 resource types, 10 medical terminology systems, AI Circuit Breaker (Claude 4.5 / Gemini 2.5 / GPT-4), AI Scribe with SOAP notes, sub-second IoT vitals, 424+ test assertions, and 35+ DynamoDB tables across US/EU regions.",

      fullDescription: `MediConnect V3 is a forensically verified, multi-cloud healthcare platform built to 2026 HIPAA, GDPR, FHIR R4, and SOC 2 Type II compliance standards.

\u2501\u2501\u2501 PLATFORM SCALE \u2501\u2501\u2501
\u2022 7 backend microservices (5 Node.js/Express + 2 Python/FastAPI)
\u2022 4 Lambda functions across 2 AWS regions
\u2022 35 FHIR R4 resource types supported
\u2022 10 medical terminology systems (RxNorm, SNOMED CT, ICD-10-CM, ICD-11, LOINC, CVX, MVX, NDC, CPT, HCPCS)
\u2022 35+ DynamoDB tables across US + EU regions
\u2022 424+ test assertions (229 backend TS + 129 Python + 66 Vitest + 10 Playwright E2E)
\u2022 4 verification scripts (33 consolidation checks, 7-service health, data integrity, SOC 2 failover)
\u2022 4 user roles: Patient, Doctor, Admin, Staff

\u2501\u2501\u2501 INFRASTRUCTURE \u2501\u2501\u2501
Active-active Kubernetes clusters on AKS (Azure, US) and EKS (AWS, EU Frankfurt), each with Horizontal Pod Autoscalers, Pod Disruption Budgets, and Prometheus/Grafana/Slack Alertmanager observability stacks. All clusters hidden behind Cloudflare Tunnels \u2014 zero inbound ports exposed to the public internet. Auto-failover to GCP Cloud Run within 5 seconds if primary clusters fail.

Zero-Cost Idle: $300/month infrastructure reduced to $2.00/month at idle via GCP Cloud Run + Azure Container Apps scale-to-zero, DynamoDB on-demand, and GCP Cloud SQL auto-pause after 15 minutes.

\u2501\u2501\u2501 HIPAA 2026 COMPLIANCE (ARCHITECTURALLY ENFORCED) \u2501\u2501\u2501
\u2022 PHI Encryption at Rest: AWS KMS envelope encryption (separate keys per region) for all patient names, DOB, phone, email, chat messages \u2014 format: phi:kms:<base64_ciphertext>
\u2022 PHI Encryption in Transit: HTTPS enforced via Helmet HSTS (1-year max-age + preload), CSP headers restricting connections to AWS/GCP/Azure domains only
\u2022 AES-GCM 256-bit client-side encryption before any localStorage write
\u2022 Immutable Audit Logs: Every PHI access logged to mediconnect-audit-logs (FHIR R4 AuditEvent format, DICOM ontology coding) with 7-year TTL retention, actor/patient ID masking
\u2022 Breach Detection: Automated system \u2014 >50 PHI accesses per actor within 5 minutes triggers HIGH alert; 9 security event types trigger CRITICAL alerts via SNS to security team
\u2022 Session Security: HipaaGuard enforces 15-minute inactivity auto-logout; 12px CSS blur on tab blur (shoulder surfing prevention); JWT tokens never cached in localStorage
\u2022 MFA Enforcement: requireMFA middleware blocks non-MFA sessions in production (403)
\u2022 KMS-Signed Prescriptions: AWS KMS RSA-256 \u2014 doctors cannot deny authorship (non-repudiation)
\u2022 S3 PHI URLs: 15-minute presigned URL expiry (900s hardcoded)
\u2022 DICOM De-Identification: HIPAA Safe Harbor \u2014 18 tag categories removed, PatientName anonymized, UIDs regenerated to prevent cross-referencing
\u2022 Break-Glass Emergency Access: Full audit trail for emergency PHI access (mediconnect-emergency-access table)
\u2022 AWS Macie: Automated PHI scanning in S3 buckets
\u2022 AWS GuardDuty: Threat detection across all AWS resources
\u2022 CloudTrail: Every AWS API call audited

\u2501\u2501\u2501 GDPR / SCHREMS II COMPLIANCE \u2501\u2501\u2501
\u2022 Data Residency: EU patient data physically locked to Frankfurt (eu-central-1 + europe-west3) \u2014 never crosses the Atlantic
\u2022 normalizeRegion() maps all region variants to exactly us-east-1 or eu-central-1; requireRegionHeader() middleware rejects requests without valid x-user-region header
\u2022 Separate resources per region: Cognito pools, DynamoDB tables, S3 buckets, KMS keys, SNS topics, audit log tables
\u2022 Consent Management (GDPR Art. 7): Append-only consent ledger (mediconnect-consent-ledger) \u2014 records never mutated, complete tamper-evident history, 365-day default expiry
\u2022 Right to Erasure (Art. 17): Cascading soft-delete across 15+ tables \u2014 immediate PII anonymization, 30-day hard-delete TTL balancing GDPR erasure with HIPAA 7-year retention
\u2022 Right to Data Portability (Art. 20): GET /me/export exports all patient data from 19 sources as FHIR Bundle with SHA-256 integrity hash in X-Export-Integrity header
\u2022 Right to Rectification (Art. 16): PUT endpoints with full Zod validation
\u2022 GDPR Cookie Consent Banner: Granular consent (Essential / Functional / Analytics), push notifications blocked without functional consent
\u2022 CloudWatch metrics: GDPRErasure + GDPRExport published on each operation

\u2501\u2501\u2501 SOC 2 TYPE II READINESS \u2501\u2501\u2501
\u2022 SOC 2 CC6 (Logical Access): 13 CloudWatch custom metric types \u2014 AuthFailure, BreachAlert, PHIAccess, MFABypassAttempt, EmergencyAccess, RequestLatency/Count, ErrorCount, AppointmentBooked/Cancelled, PrescriptionIssued, GDPRErasure, GDPRExport
\u2022 SOC 2 PI1 (Processing Integrity): Idempotency Guard middleware \u2014 Idempotency-Key header, Redis-cached responses (24hr TTL), prevents duplicate write operations
\u2022 SOC 2 A1 (Availability): verify_failover.js script \u2014 validates health endpoints, failover URLs, WebSocket proxy, multi-region, K8s probes, CI/CD failover, frontend API failover, AI circuit breaker
\u2022 RTO/RPO Configuration: CRITICAL tier (RTO 5min / RPO 0), HIGH (15min / 5min), MEDIUM (1hr / 1hr)
\u2022 DynamoDB PITR: 35-day point-in-time recovery
\u2022 S3 Cross-Region Replication + BigQuery 90-day snapshots
\u2022 Optimistic Locking: DynamoDB _version field with HTTP ETag \u2014 prevents lost updates on concurrent writes
\u2022 Rate Limiting (Tiered): Global 500 req/15min, Sensitive data 15 req/min, AI endpoints 5 req/min, Admin 100 req/15min \u2014 Redis-backed with in-memory fallback
\u2022 0 npm vulnerabilities after surgical supply-chain hardening
\u2022 OIDC Workload Identity Federation: all static AWS keys eliminated

\u2501\u2501\u2501 FHIR R4 INTEGRATION \u2501\u2501\u2501
\u2022 35 FHIR R4 resource types: Patient, Practitioner, Appointment, Observation, MedicationRequest, AuditEvent, RiskAssessment, CarePlan, ServiceRequest, DocumentReference, Consent, DiagnosticReport, ImagingStudy, AllergyIntolerance, Immunization, Medication, MedicationDispense, Encounter, Condition, Procedure, ClinicalImpression, CommunicationRequest, Coverage, ExplanationOfBenefit, ClaimResponse, Task, Schedule, Slot, Organization, Location, Practitioner, PractitionerRole, RelatedPerson, Subscription, CapabilityStatement
\u2022 SMART on FHIR STU 2.0: EHR launch context, scope validation, token exchange proxy to Cognito
\u2022 C-CDA 2.1: Clinical document generation (Continuity of Care Documents)
\u2022 10 Terminology Systems: RxNorm, SNOMED CT, ICD-10-CM, ICD-11, LOINC, CVX, MVX, NDC, CPT, HCPCS
\u2022 IoT Vitals: FHIR Observation (LOINC 8867-4) for real-time heart rate from wearables
\u2022 HL7 v2.x Message Log: mediconnect-hl7-messages table for legacy interoperability
\u2022 CMS Blue Button 2.0: Patient insurance claims OAuth integration
\u2022 Bulk FHIR $export: Job tracking with mediconnect-bulk-exports table
\u2022 DICOM Service (Python/FastAPI): Full imaging study management with HIPAA Safe Harbor de-identification

\u2501\u2501\u2501 AI LAYER \u2501\u2501\u2501
Multi-cloud Circuit Breaker: Claude 4.5 (AWS Bedrock) \u2192 Gemini 2.5 (GCP Vertex AI) \u2192 GPT-4 (Azure OpenAI), routing on real-time latency for 99.99% AI availability. AI Symptom Checker with graceful demo-mode fallback when Bedrock quota hit. AI Diabetes Risk Score displayed in doctor records tab.

AI Scribe: Amazon Transcribe Medical captures audio during live Amazon Chime SDK video calls \u2192 Claude 4.5 generates professional SOAP Notes \u2192 "Save to EHR" pushes directly to patient's permanent medical record in one click.

\u2501\u2501\u2501 NEW V2 FEATURES \u2501\u2501\u2501
\u2022 Google Calendar Sync: OAuth 2.0 \u2014 confirmed bookings auto-pushed to Doctor's Google Calendar (Refresh Tokens encrypted via KMS, stored in GCP Cloud SQL)
\u2022 Sub-second IoT Telemetry: Upgraded from 5-second polling to Socket.io + MQTT bridge for real-time wearable vitals with hospital-grade Heartbeat Pulse CSS animation + AreaCharts
\u2022 Mobile Push Notifications: Capacitor Android/iOS with FCM Token synced to DynamoDB profile
\u2022 QR Code Privacy: Pharmacy pickup QR generated locally in browser via react-qr-code \u2014 zero PHI sent to third-party APIs
\u2022 Patient Queue: Pulsing green badge on arrival, red alert >10min late, 30-second auto-refresh
\u2022 Doctor Schedule Builder: 7-day toggle interface (Mon: 9-5, Tue: Closed)
\u2022 Prescription Master-Detail UX: Patient-first selection prevents wrong-patient prescription errors
\u2022 Full Refill Lifecycle: Request \u2192 Approve \u2192 Dispensed with dedicated Refill tab
\u2022 Billing Professional Timeline: Chronological ledger with clinical terminology, net revenue math (Sales - Refunds)
\u2022 Knowledge Base CMS: Public FHIR DocumentReference articles, URL-encoded IDs, HIPAA audit logging
\u2022 Skeleton Loaders + Promise.allSettled: Dashboard never crashes partially on any API failure
\u2022 Care Network Graph: Hierarchical clinical tree (Patient \u2192 Doctor \u2192 Medication chain of care)
\u2022 GDPR Consent Banner: Granular frontend consent management`,

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
        // Identity & Security
        "AWS Cognito (Multi-Pool US/EU, 4 Roles)",
        "AWS KMS (RSA-256 + AES-GCM PHI Encryption)",
        "AWS SSM Parameter Store (Batched Secrets)",
        "OIDC Workload Identity Federation (Zero Static Keys)",
        "AWS GuardDuty + Macie + CloudTrail",

        // Compute & Orchestration
        "AKS + EKS (Kubernetes Active-Active HA)",
        "GCP Cloud Run (Scale-to-Zero, US + EU)",
        "Azure Container Apps (Scale-to-Zero)",
        "Cloudflare Tunnels (Zero Exposed Ports)",
        "AWS Lambda (4 Functions, 2 Regions)",

        // Databases
        "AWS DynamoDB (35+ Tables, Multi-Region, PITR 35-day)",
        "GCP Cloud SQL PostgreSQL 15 (EHR + Google Calendar tokens)",
        "Azure Cosmos DB (Serverless)",
        "Google BigQuery (Streaming Analytics US + EU)",
        "Redis (Rate Limiting + Idempotency Cache)",

        // AI & ML
        "AWS Bedrock (Claude 4.5) \u2014 Primary AI",
        "GCP Vertex AI (Gemini 2.5) \u2014 AI Failover",
        "Azure OpenAI (GPT-4) \u2014 AI Failover",
        "AI Circuit Breaker (99.99% Availability)",
        "Amazon Transcribe Medical (AI Scribe)",
        "AWS Rekognition (Biometric Face Verification)",
        "AWS Textract (Diploma OCR + Name Matching)",
        "AWS Comprehend Medical (Clinical NLP)",

        // Real-time & IoT
        "AWS IoT Core (MQTT/SigV4)",
        "Socket.io (Sub-second Telemetry Bridge)",
        "AWS API Gateway (WebSocket)",
        "Amazon Chime SDK (HD Video Consultations)",

        // Mobile & Notifications
        "React Native Capacitor (Android APK)",
        "FCM Push Notifications (Cross-Platform)",

        // Integrations
        "Google Calendar API (OAuth 2.0 Doctor Sync)",
        "Stripe Connect + PaymentIntents + Webhooks",
        "CMS Blue Button 2.0 (Insurance Claims)",
        "ShareThis + react-qr-code (Local QR Privacy)",

        // Compliance Standards
        "HIPAA 2026 (Forensically Verified)",
        "GDPR / Schrems II (Data Sovereignty)",
        "SOC 2 Type II Ready (CC6, PI1, A1)",
        "HL7 FHIR R4 (35 Resource Types)",
        "SMART on FHIR STU 2.0",
        "C-CDA 2.1 Clinical Documents",
        "DICOM (HIPAA Safe Harbor De-identification)",
        "10 Terminology Systems (LOINC, SNOMED, RxNorm, ICD-10/11, CVX, MVX, NDC, CPT, HCPCS)",
        "HL7 v2.x Message Log",

        // DevOps & Observability
        "Terraform (Infrastructure as Code)",
        "Docker (Multi-Stage Alpine, Non-Root User)",
        "GitHub Actions (Parallel Multi-Cloud CI/CD)",
        "Prometheus + Grafana + Slack Alertmanager",
        "Winston Logger (PII Auto-Masking)",
        "Zod (Input Validation + Sanitization)",
        "Helmet (HSTS + CSP Security Headers)",

        // Frontend
        "React 18 + TypeScript + Vite 5",
        "Tailwind CSS 3 + shadcn/ui (Radix)",
        "TanStack React Query",
        "Vitest + Playwright E2E (424+ assertions)",
        "Node.js / Express (5 Microservices)",
        "Python FastAPI (2 Microservices: Admin + DICOM)",
      ],

      achievements: [
        // ── INFRASTRUCTURE ──
        "Zero-Cost Idle: $300/mo AWS bill \u2192 $2.00/mo at idle across 3 clouds",
        "Active-Active HA: simultaneous AKS (Azure) + EKS (AWS) with HPA, PDB, and Prometheus/Grafana/Slack Alertmanager",
        "5-second automatic failover from Kubernetes clusters to GCP Cloud Run",
        "Zero exposed ports: entire cluster hidden behind Cloudflare Tunnels",
        "7 backend microservices (5 Node.js + 2 Python FastAPI) with 4 Lambda functions across 2 AWS regions",

        // ── HIPAA 2026 ──
        "HIPAA PHI Encryption at Rest: AWS KMS envelope encryption (separate keys per region) on all patient PII fields",
        "HIPAA PHI Encryption in Transit: Helmet HSTS (1-year max-age), CSP headers, AES-GCM 256-bit localStorage encryption",
        "HIPAA Audit Logs: FHIR R4 AuditEvent format, DICOM ontology coding, 7-year TTL, actor/patient ID masking, SQS event bus",
        "HIPAA Breach Detection: >50 PHI accesses in 5min = HIGH alert; 9 CRITICAL event types trigger SNS to security team instantly",
        "HIPAA Session Security: 15-min HipaaGuard auto-logout, 12px tab-blur (shoulder surfing), JWT never in localStorage, MFA enforcement (403)",
        "HIPAA KMS-Signed Prescriptions: AWS KMS RSA-256 \u2014 non-repudiation, legal e-prescription integrity",
        "HIPAA S3 URL Expiry: 15-minute presigned URLs (900s hardcoded) for all PHI file access",
        "HIPAA DICOM De-Identification: Safe Harbor \u2014 18 tag categories removed, PatientName anonymized, UIDs regenerated",
        "HIPAA Break-Glass: Full emergency access audit trail (mediconnect-emergency-access table)",
        "HIPAA GuardDuty + Macie + CloudTrail: Threat detection, PHI scanning in S3, every AWS API call audited",

        // ── GDPR / SCHREMS II ──
        "GDPR Data Sovereignty: EU patient data physically locked to Frankfurt \u2014 eu-central-1 + europe-west3, never crosses Atlantic",
        "GDPR Regional Enforcement: normalizeRegion() + requireRegionHeader() \u2014 every request validated for data residency",
        "GDPR Consent Ledger (Art. 7): Append-only, tamper-evident consent history with 365-day expiry tracking",
        "GDPR Right to Erasure (Art. 17): Cascading delete across 15+ tables, immediate PII anonymization, 30-day hard-delete TTL",
        "GDPR Right to Portability (Art. 20): Full FHIR Bundle export from 19 data sources with SHA-256 X-Export-Integrity header",
        "GDPR Cookie Consent Banner: Granular Essential/Functional/Analytics consent, push notifications blocked without consent",

        // ── SOC 2 TYPE II ──
        "SOC 2 CC6 (Logical Access): 13 CloudWatch custom metric types including AuthFailure, BreachAlert, PHIAccess, MFABypassAttempt",
        "SOC 2 PI1 (Processing Integrity): Idempotency Guard \u2014 Redis-cached Idempotency-Key responses (24hr TTL), prevents duplicate writes",
        "SOC 2 A1 (Availability): verify_failover.js validates health endpoints, multi-region, K8s probes, AI circuit breaker, CI/CD failover",
        "SOC 2 RTO/RPO: CRITICAL tier RTO 5min/RPO 0; DynamoDB PITR 35-day; S3 cross-region replication; BigQuery 90-day snapshots",
        "SOC 2 Optimistic Locking: DynamoDB _version + HTTP ETag \u2014 prevents lost updates on concurrent writes",
        "SOC 2 Rate Limiting (Tiered): Global 500/15min, Sensitive 15/min, AI 5/min \u2014 Redis-backed with in-memory fallback",

        // ── FHIR R4 ──
        "FHIR R4: 35 resource types \u2014 Patient, Practitioner, Appointment, Observation, MedicationRequest, AuditEvent, CarePlan, Consent, DICOM, and 26+ more",
        "SMART on FHIR STU 2.0: EHR launch context, scope validation, Cognito token exchange proxy",
        "C-CDA 2.1: Clinical document generation (Continuity of Care Documents) for care transitions",
        "10 Medical Terminology Systems: RxNorm, SNOMED CT, ICD-10-CM, ICD-11, LOINC, CVX, MVX, NDC, CPT, HCPCS",
        "HL7 v2.x Message Log + CMS Blue Button 2.0 insurance claims integration",
        "Bulk FHIR $export with job tracking and SHA-256 integrity verification",

        // ── SECURITY ──
        "Zero-Trust Identity: OIDC Workload Identity Federation \u2014 all static AWS keys eliminated",
        "Biometric Verification: AWS Rekognition face-match selfie vs government ID at registration",
        "Diploma OCR: AWS Textract with name-matching to prevent credential fraud",
        "Attribute Tampering Closed: Cognito custom attributes set Mutable: False \u2014 role escalation impossible",
        "0 npm vulnerabilities after surgical supply-chain hardening",
        "Zod schema validation on all mutation endpoints \u2014 prevents injection attacks",
        "Helmet CSP + HSTS blocking unauthorized external connections",

        // ── AI ──
        "AI Circuit Breaker: 99.99% AI availability \u2014 Claude 4.5 \u2192 Gemini 2.5 \u2192 GPT-4 routing on real-time latency",
        "AI Scribe: Transcribe Medical \u2192 Claude 4.5 SOAP Notes \u2192 EHR save in one click during live video call",
        "AI Symptom Checker: demo-mode graceful fallback on Bedrock quota \u2014 zero error shown to patient",
        "AI Diabetes Risk Score: displayed in doctor's patient records tab",
        "AWS Comprehend Medical: Clinical NLP for symptom extraction and FHIR coding",

        // ── REAL-TIME & IoT ──
        "Sub-second IoT Telemetry: Socket.io + MQTT bridge replacing 5-second polling for wearable vitals",
        "Hospital-grade IoT UI: Heartbeat Pulse CSS animation + smooth AreaCharts on LiveMonitoring dashboard",
        "FHIR Observation (LOINC 8867-4) for real-time IoT heart rate data",
        "SQS Event Bus: 6 queue categories, 20 event types, Dead Letter Queue pairs \u2014 no emergency alert lost",

        // ── NEW V2 FEATURES ──
        "Google Calendar Sync: OAuth 2.0 \u2014 bookings auto-pushed to Doctor's Google Calendar (KMS-encrypted tokens)",
        "Mobile Push Notifications: Capacitor Android/iOS with FCM Token synced to DynamoDB",
        "QR Code Privacy: Pharmacy pickup QR generated locally in browser via react-qr-code \u2014 zero PHI to third-party",
        "Patient Queue: Pulsing green badge on arrival, red alert >10min late, 30-second auto-refresh",
        "Doctor Schedule Builder: 7-day toggle interface with per-day working hours",
        "Prescription Master-Detail: Patient-first UX preventing wrong-patient prescription errors",
        "Full Refill Lifecycle: Request \u2192 Approve \u2192 Dispensed cycle with Refill tab",
        "Billing Professional Timeline: Chronological ledger, clinical terminology, net revenue = Sales - Refunds",
        "Knowledge Base CMS: Public FHIR DocumentReference articles with HIPAA audit logging",
        "Skeleton Loaders + Promise.allSettled: Dashboard never crashes partially",
        "Care Network Clinical Graph: Hierarchical Patient \u2192 Doctor \u2192 Medication chain of care visualization",
        "35+ DynamoDB tables across US/EU: allergies, immunizations, care plans, DICOM, SDOH, MPI, prior auth, lab orders, referrals",
        "BigQuery streaming analytics: revenue, appointments, IoT vitals, symptom logs across US + EU datasets",
        "Atomic Locking + Stripe Webhook: payment confirmed via Stripe event only \u2014 prevents ghost charges",
        "Pharmacy supply chain: drug interaction shield, refill lifecycle, KMS-signed PDF receipts",

        // ── TESTING ──
        "424+ test assertions: 229 backend TS + 129 Python pytest + 66 Vitest + 10 Playwright E2E",
        "4 verification scripts: consolidation (33 checks), health (7 services), data integrity, SOC 2 failover",
        "Full CI/CD: GitHub Actions parallel deploy to 3 clouds in one pipeline",
        "Kubernetes observability: Prometheus + Grafana + Slack Alertmanager on both AKS + EKS",
      ],

      liveUrl: "https://askme-82f72.web.app/",

      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        {
          label: "Infrastructure (Terraform)",
          url: "https://github.com/Zahidulislam2222/mediconnect-infrastructure-develop",
        },
      ],

      pdfLinks: [
        { label: "Technical Overview", url: "/MediConnect_Technical_Overview.pdf" },
        { label: "Project Info", url: "/Mediconnect_Info.pdf" },
        { label: "Architecture PDF", url: "https://github.com/user-attachments/files/25336017/MediConnect_2.0_Multi-Cloud_Zero_Cost_compressed.pdf" },
      ],

      videoId: "vPviXZOjx68",
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
      id: "mediconnect-v2",
      title: "MediConnect V2 Multi-Cloud Healthcare Ecosystem",
      category: ["hybrid-cloud", "ai-ml", "mobile"],
      description: "A production-grade, HIPAA/GDPR/FHIR-compliant telemedicine platform across AWS, GCP & Azure. Features Zero-Cost Idle architecture, Kubernetes HA clusters, AI diagnostics, IoT vitals, KMS-signed e-prescriptions, and real-time video consultations.",
      fullDescription: "MediConnect V2 is a forensically verified, multi-cloud healthcare platform built to 2026 compliance standards.\n\nThe core infrastructure runs simultaneous production Kubernetes clusters on AKS (Azure, US) and EKS (AWS, EU Frankfurt), each with Horizontal Pod Autoscalers, Pod Disruption Budgets, and Prometheus/Grafana observability stacks. All clusters are hidden behind Cloudflare Tunnels — zero inbound ports are exposed to the public internet. If the primary clusters go down, traffic automatically fails over to GCP Cloud Run within 5 seconds.\n\nThe 'Zero-Cost Idle' pattern reduces a traditional $300/month AWS bill to $2.00/month at idle: GCP Cloud Run and Azure Container Apps scale to zero replicas, DynamoDB runs on-demand, and GCP Cloud SQL auto-pauses after 15 minutes of inactivity.\n\nCompliance is architecturally enforced, not promised. EU patient data is physically locked to Frankfurt (eu-central-1 + europe-west3), satisfying Schrems II. Every clinical action triggers an immutable FHIR AuditEvent log. AWS KMS RSA-256 signs every e-prescription. PII is recursively masked before reaching any log or AI model.\n\nThe AI layer uses a multi-cloud Circuit Breaker: Claude (AWS Bedrock) → Gemini (GCP Vertex AI) → GPT (Azure OpenAI), routing on real-time latency. An AI Scribe captures Amazon Transcribe Medical audio during video calls and generates SOAP notes automatically.",

      images: [
        "https://github.com/user-attachments/assets/bf8cc79b-d429-4cce-9988-8dc490876cc2",
        "https://github.com/user-attachments/assets/e9fada93-745f-4cf3-b5cd-f7a624242409",
        "https://github.com/user-attachments/assets/2316b86e-b873-40c8-b77f-6fb5bd09a200",
        "https://github.com/user-attachments/assets/909d8852-cb19-4c46-a56d-f0dbefbf9909",
        "https://github.com/user-attachments/assets/7ab08ede-ac83-4a86-9d80-3fdab4b89984",
        "https://github.com/user-attachments/assets/d8988bd6-8923-4dcf-ac95-43ddbf51b589",
        "https://github.com/user-attachments/assets/99c5f98b-bdaf-424e-a293-b3586e056a62"
      ],
      thumbnail: "https://i9.ytimg.com/vi_webp/vPviXZOjx68/maxresdefault.webp",

      technologies: [
        "AWS Cognito (Multi-Pool US/EU)",
        "AWS KMS (RSA-256 Signing)",
        "AWS SSM Parameter Store",

        "AKS + EKS (Kubernetes HA)",
        "GCP Cloud Run (Scale-to-Zero)",
        "Azure Container Apps (Scale-to-Zero)",

        "AWS DynamoDB (On-Demand)",
        "GCP Cloud SQL (PostgreSQL 15)",
        "Azure Cosmos DB (Serverless)",

        "AWS Bedrock",
        "GCP Vertex AI",
        "Azure OpenAI",
        "AWS Rekognition (Biometrics)",
        "AWS Textract (OCR)",
        "Amazon Transcribe Medical",

        "AWS IoT Core (MQTT/SigV4)",
        "AWS API Gateway (WebSocket)",
        "Amazon Chime SDK (Video)",

        "Terraform (IaC)",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Cloudflare Tunnels",
        "Prometheus + Grafana",

        "HL7 FHIR R4",
        "TypeScript",
        "Stripe Connect",
        "Node.js / Express",
        "React / Vite",
      ],

      achievements: [
        "Zero-Cost Idle: reduced $300/mo infrastructure to $2.00/mo at idle across 3 clouds",
        "Active-Active HA: simultaneous AKS (Azure) + EKS (AWS) clusters with HPA and PDB",
        "5-second automatic failover from primary Kubernetes clusters to GCP Cloud Run backup",
        "Zero exposed ports: full cluster hidden behind Cloudflare Tunnels",

        "100% HIPAA 2026: immutable audit logs, KMS-signed prescriptions, PII masking, 15-min S3 URL expiry",
        "100% GDPR / Schrems II: EU data physically locked to Frankfurt, never crosses Atlantic",
        "FHIR R4 Interoperability: Patient, Practitioner, Appointment, Observation, MedicationRequest, AuditEvent, RiskAssessment resources",

        "Zero-Trust identity: OIDC Workload Identity Federation replacing all static AWS keys",
        "Biometric verification: AWS Rekognition face-match selfie vs government ID",
        "AWS Textract AI diploma OCR with name-matching to prevent credential fraud",
        "Attribute Tampering closed: Cognito custom attributes set Mutable: False",

        "AI Circuit Breaker: 99.99% AI availability across Bedrock → Vertex AI → Azure OpenAI",
        "AI Scribe: Amazon Transcribe Medical + Claude generates SOAP notes from video calls",
        "IoT vitals: real-time wearable heart rate via MQTT/SigV4, FHIR Observation (LOINC 8867-4)",
        "Atomic Locking: DynamoDB conditional writes prevent appointment double-booking",
        "Stripe + Webhook: payment only confirmed via Stripe event, prevents ghost charges",
        "Pharmacy supply chain: drug interaction shield, refill lifecycle, KMS-signed PDF receipts",
        "SQS Dead Letter Queue: 14-day retention ensures no emergency alert is ever lost",

        "Full CI/CD: GitHub Actions deploys all 4 microservices to Clouds in parallel",
        "Kubernetes observability: Prometheus + Grafana + Slack Alertmanager on both clusters",
        "npm audit: 0 vulnerabilities after surgical supply-chain hardening",
      ],

      liveUrl: "https://askme-82f72.web.app/",

      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        { label: "Infrastructure (Terraform)", url: "https://github.com/Zahidulislam2222/mediconnect-infrastructure-develop" },
      ],

      pdfUrl: "https://github.com/user-attachments/files/25336017/MediConnect_2.0_Multi-Cloud_Zero_Cost_compressed.pdf",

      videoId: "vPviXZOjx68",
      featured: false,
      isHealthcare: true,
      isHybridCloud: true,
      isStrapi: true,

      metrics: {
        cost: "$2.00/mo Idle Cost",
        compliance: "HIPAA · GDPR · FHIR R4",
        clouds: "AWS + GCP + Azure",
        clusters: "AKS + EKS (Active-Active)",
        services: "4 Microservices",
        aiProviders: "3-Cloud AI Failover",
      },
    },
    {
      id: "mediconnect",
      title: "MediConnect v1 - Hybrid Cloud Telemedicine",
      category: ["hybrid-cloud", "mobile", "ai-ml"],
      description: "Enterprise-grade telemedicine platform leveraging 35+ AWS and GCP services for seamless healthcare delivery.",
      fullDescription: "Mediconnect is a full-scale, cloud-native telehealth platform designed with a serverless-first architecture.The project focuses on real production-grade backend logic, covering authentication, appointments, video consultations, AI diagnostics, billing, analytics, and HIPAA-aligned security — all implemented using AWS and Google Cloud services.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://img.youtube.com/vi/Oo_Lilyasi0/maxresdefault.jpg",
        "https://github.com/user-attachments/assets/bf8cc79b-d429-4cce-9988-8dc490876cc2",
        "https://github.com/user-attachments/assets/4c1a707b-6b39-43bf-8ce1-f9ce7745b47b",
        "https://github.com/user-attachments/assets/dcd440c3-37ac-4fc2-b9a1-02d6d430b171",
        "https://github.com/user-attachments/assets/86004fe6-0a8f-4e47-a52c-ee152f7201d4",
        "https://github.com/user-attachments/assets/2ea14bd5-1310-49d7-9f21-9bea6fd5dba2",
        "https://github.com/user-attachments/assets/62d9365d-d203-4400-8028-80676fce5149",
        "https://github.com/user-attachments/assets/1b0a8b78-1557-4b3e-81d3-b31f0797a356",
        "https://github.com/user-attachments/assets/035b3c5c-64b5-493a-a0ea-d205ad815064",
        "https://github.com/user-attachments/assets/799d1b29-cfa0-47c1-be1f-8df82e94346a",
        "https://github.com/user-attachments/assets/d2d263fb-b196-47f4-93e7-885f68b8f3ee",
        "https://github.com/user-attachments/assets/15ac977e-3068-4d65-bf58-cf4bb767e15f",
        "https://github.com/user-attachments/assets/4cf305c8-55e4-4a7c-b7a2-6bc1c7aaf1c2",
        "https://github.com/user-attachments/assets/1c6bdcaa-191b-41fd-9342-7bd8c45f6e0c",
        "https://github.com/user-attachments/assets/f75bf806-225d-4f0e-89ff-2015295b6b5b",
        "https://github.com/user-attachments/assets/c0154db8-8be5-4d57-b468-c501c02c691f",
        "https://github.com/user-attachments/assets/84ec82d4-19e4-44a4-83bf-4050d25c3907",
        "https://github.com/user-attachments/assets/564e2f77-37c7-49f6-b0bc-54c5a5ff32d7",
        "https://github.com/user-attachments/assets/dc5fcfd1-ef7a-4b40-8931-3678231cb4d9",
        "https://github.com/user-attachments/assets/403e3ef4-7f2f-498f-aab5-e52157459b70",
        "https://github.com/user-attachments/assets/c2b767e5-8376-461f-9d93-836f98a130f8"

      ],
      thumbnail: "https://img.youtube.com/vi/Oo_Lilyasi0/maxresdefault.jpg",

      technologies: ["React", "Node.js", "AWS", "GCP", "Terraform", "Docker", "Kubernetes", "PostgreSQL", "Redis", "WebRTC"],
      achievements: [
        "Integrated 35+ cloud services across AWS and GCP",
        "Can Achievable 99.9% uptime with multi-region failover",
        "Reduced patient wait times by 60%",
        "HIPAA aligned architecture",
        "capable of serving 10,000+ telemedicine consultations"
      ],
      liveUrl: "https://d3ligzc3b5cdix.cloudfront.net/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        { label: "Backend", url: "https://github.com/Zahidulislam2222/mediconnect-cms" },
        //{ label: "Infrastructure", url: "" }
      ],

      videoId: "Oo_Lilyasi0",
      featured: false,
      isHealthcare: true,
      isHybridCloud: true,
      isStrapi: true,
      metrics: { users: "10K+", uptime: "99.9%", services: "50+" },
    },
    {
      id: "chronos",
      title: "Chronos - Headless E-Commerce",
      category: ["wordpress"],
      description: "Modern headless e-commerce solution combining React frontend with WooCommerce backend via GraphQL.",
      fullDescription: "Chronos is a cutting-edge headless e-commerce platform that decouples the frontend from WooCommerce, enabling lightning-fast performance and unlimited customization. Built with React and GraphQL, it delivers sub-second page loads, real-time inventory updates, and seamless checkout experiences.",

      // 1. ADD THIS: Array of images for the slider
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

      technologies: ["React", "GraphQL", "WooCommerce", "Node.js", "Redis", "Stripe", "Tailwind CSS"],
      achievements: [
        "3x faster page loads vs traditional WooCommerce",
        "50% increase in conversion rate",
        "Real-time inventory sync",
        "Multi-currency support"
      ],
      liveUrl: "https://chronos.healthcodeanalysis.com/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/Chronos" }
        //{ label: "Infrastructure", url: "" }
      ],

      //videoId: "Oo_Lilyasi0",
      featured: true,
      isHeadless: true,
      isWordpress: true,
      metrics: { speed: "3x faster", conversion: "+50%" },
    },
    {
      id: "equipcert",
      title: "EquipCert - AI Inspection App",
      category: ["mobile"],
      description: "AI-powered mobile inspection application with computer vision for automated equipment certification.",
      fullDescription: "EquipCert revolutionizes equipment inspection through AI-powered computer vision. Built with Next.js and Capacitor for cross-platform deployment, it uses Supabase for real-time data sync and custom ML models for defect detection. Inspectors can complete certifications 5x faster with automated photo analysis and report generation.",

      // 1. ADD THIS: Array of images for the slider
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

      technologies: ["Next.js", "Capacitor", "Supabase", "TensorFlow", "Computer Vision", "React Native"],
      achievements: [
        "5x faster inspection completion",
        "98% defect detection accuracy",
        "Offline-first architecture",
        "Automated PDF report generation"
      ],
      liveUrl: "https://equip-cert.vercel.app/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/equip-cert" },
      ],

      //videoId: "Oo_Lilyasi0",
      featured: true,
      isHeadless: true,
      isContentful: true,
      metrics: { accuracy: "98%", speed: "5x faster" },
    },

    {
      id: "healthcode-analysis",
      title: "HealthCode Analysis - AI Medical Intelligence",
      category: ["wordpress", "ai-ml"],
      description: "A hybrid medical intelligence platform featuring a custom-coded 'NeuroScan' content engine, serverless AI chat, and app-like AJAX performance.",
      fullDescription: "HealthCode Analysis is a high-performance medical intelligence hub that bypasses standard WordPress limitations. I engineered 'NeuroScan v5.0,' a custom PHP/AJAX content engine that delivers instant search, multi-grid filtering, and zero-latency interactions without page reloads. The platform utilizes a hybrid architecture, combining WordPress for content management with Cloudflare Workers for serverless AI chat functionality and strict ACF data modeling for clinical accuracy.",

      // 1. ADD THIS: Array of images for the slider
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

      /* 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        { label: "Backend", url: "https://github.com/Zahidulislam2222/mediconnect-cms" },
        //{ label: "Infrastructure", url: "" }
      ],*/

      //videoId: "Oo_Lilyasi0",
      featured: true,
      isHybrid: true,
      isWordpress: true,
      metrics: { speed: "< 0.5s Interactions", architecture: "Hybrid Serverless" },
    },

    {
      id: "n8n-automations",
      title: "n8n Automation Workflows",
      category: ["automation", "ai-ml"],
      description: "Collection of powerful automation workflows including price monitoring, AI agents, and intelligent web scraping.",
      fullDescription: "A high-performance collection of serverless automation workflows designed to streamline business operations. Includes an AI-powered competitor pricing monitor that parses raw data via Google Gemini, an autonomous research agent for lead qualification using Wikipedia tools, and a critical safety alert system with instant multi-channel routing. Each workflow is optimized for logical precision and reliability.",

      // 1. ADD THIS: Array of images for the slider
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
      //liveUrl: "https://equip-cert.vercel.app/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/n8n-workflows" },
      ],

      //videoId: "Oo_Lilyasi0",
      featured: false,
      metrics: { workflows: "50+", reliability: "99.5%" },
    },

    {
      id: "digital-agency-automation",
      title: "Agency - Lead Generation & Automation",
      category: ["wordpress"],
      description: "A high-conversion agency platform featuring an immersive dark-mode UX, integrated API scheduling, and serverless booking automation.",
      fullDescription: "This project is a business automation engine built for a premium digital agency. Beyond its high-end 'Dark UI' aesthetic, I engineered a friction-less sales pipeline by integrating the Calendly API for real-time scheduling. The platform's 'killer feature' is a serverless 'Booking & Payment Bot' running on Cloudflare Workers, which automates lead qualification and discovery call bookings at the network edge, ensuring the agency operates 24/7 without manual intervention.",

      // 1. ADD THIS: Array of images for the slider
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

      /* 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/n8n-workflows" },
      ],*/

      //videoId: "Oo_Lilyasi0",
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

      //liveUrl: "https://clinic.healthcodeanalysis.com/",

      featured: false,
      isWordpress: true,

      metrics: { conversion: "High Patient Intent", performance: "Optimized for Local SEO" },
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
      category: "Hybrid Cloud Architecture",
      icon: "Cloud",
      color: "primary",
      skills: [
        { name: "Amazon Web Services (AWS)", level: 95 },
        { name: "Google Cloud Platform (GCP)", level: 90 },
        { name: "Microsoft Azure", level: 90 },
        { name: "Terraform (IaC)", level: 90 },
        { name: "Multi-Cloud Strategy", level: 88 },
        { name: "AWS DynamoDB (Multi-Region)", level: 92 },
        { name: "GCP Cloud SQL / BigQuery", level: 88 },
        { name: "Azure Cosmos DB (Serverless)", level: 85 },
        { name: "Cloudflare Tunnels / CDN", level: 88 },
        { name: "AWS Lambda (Serverless)", level: 90 },
      ],
    },
    {
      category: "Full Stack Development",
      icon: "Code",
      color: "primary",
      skills: [
        { name: "React 18 / Next.js", level: 95 },
        { name: "Node.js / Express", level: 92 },
        { name: "Python / FastAPI", level: 85 },
        { name: "TypeScript", level: 92 },
        { name: "PostgreSQL / MongoDB", level: 88 },
        { name: "GraphQL / REST APIs", level: 90 },
        { name: "Tailwind CSS / shadcn/ui", level: 92 },
        { name: "Socket.io / WebSocket", level: 88 },
        { name: "Zod / React Hook Form", level: 90 },
        { name: "TanStack React Query", level: 88 },
      ],
    },
    {
      category: "DevOps & Automation",
      icon: "Settings",
      color: "primary",
      skills: [
        { name: "Docker & Kubernetes (AKS/EKS)", level: 90 },
        { name: "CI/CD Pipelines (Multi-Cloud)", level: 90 },
        { name: "n8n Workflow Automation", level: 95 },
        { name: "GitHub Actions", level: 88 },
        { name: "Prometheus / Grafana / Alertmanager", level: 88 },
        { name: "Horizontal Pod Autoscaling (HPA)", level: 85 },
        { name: "Winston Logger (PII Masking)", level: 85 },
        { name: "Helmet (HSTS / CSP Headers)", level: 88 },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      color: "primary",
      skills: [
        { name: "AWS Bedrock (Claude)", level: 90 },
        { name: "GCP Vertex AI (Gemini)", level: 88 },
        { name: "Azure OpenAI (GPT-4)", level: 88 },
        { name: "AI Circuit Breaker (Multi-Cloud)", level: 90 },
        { name: "Amazon Transcribe Medical", level: 85 },
        { name: "AWS Comprehend Medical (NLP)", level: 85 },
        { name: "AWS Rekognition (Biometrics)", level: 85 },
        { name: "AWS Textract (OCR)", level: 85 },
        { name: "Dialogflow ES / Chatbots", level: 92 },
        { name: "Computer Vision", level: 80 },
      ],
    },
    {
      category: "WordPress & CMS",
      icon: "Globe",
      color: "primary",
      skills: [
        { name: "Custom Theme Development", level: 95 },
        { name: "Plugin Development", level: 90 },
        { name: "WooCommerce", level: 88 },
        { name: "Headless WordPress", level: 90 },
        { name: "Contentful", level: 85 },
        { name: "Strapi", level: 90 },
        { name: "Performance Optimization", level: 90 },
      ],
    },
    {
      category: "Healthcare Solutions",
      icon: "Heart",
      color: "success",
      skills: [
        { name: "HIPAA 2026 Compliance", level: 92 },
        { name: "GDPR / Schrems II", level: 90 },
        { name: "SOC 2 Type II Readiness", level: 88 },
        { name: "HL7 FHIR R4 (35 Resources)", level: 90 },
        { name: "SMART on FHIR STU 2.0", level: 85 },
        { name: "C-CDA 2.1 / DICOM", level: 85 },
        { name: "EHR/EMR Integration", level: 88 },
        { name: "Telemedicine Platforms", level: 92 },
        { name: "Medical Terminology (SNOMED/LOINC/ICD)", level: 85 },
        { name: "PHI Encryption (KMS / AES-GCM)", level: 90 },
      ],
    },
    {
      category: "Security & Compliance",
      icon: "Shield",
      color: "primary",
      skills: [
        { name: "AWS KMS (Envelope Encryption)", level: 90 },
        { name: "AWS Cognito (Multi-Pool MFA)", level: 92 },
        { name: "OIDC Workload Identity Federation", level: 88 },
        { name: "AWS GuardDuty / Macie / CloudTrail", level: 85 },
        { name: "Rate Limiting (Tiered, Redis)", level: 88 },
        { name: "Idempotency Guard (SOC 2 PI1)", level: 85 },
        { name: "Breach Detection & Alerting", level: 88 },
        { name: "Immutable Audit Logging", level: 90 },
      ],
    },
    {
      category: "Real-Time & IoT",
      icon: "Zap",
      color: "primary",
      skills: [
        { name: "AWS IoT Core (MQTT / SigV4)", level: 88 },
        { name: "Socket.io (Sub-second Telemetry)", level: 88 },
        { name: "Amazon Chime SDK (Video)", level: 85 },
        { name: "AWS API Gateway (WebSocket)", level: 88 },
        { name: "Stripe Connect / Webhooks", level: 90 },
        { name: "FCM Push Notifications", level: 85 },
        { name: "Google Calendar API (OAuth 2.0)", level: 85 },
        { name: "SQS Event Bus / Dead Letter Queue", level: 88 },
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
      name: "Starter",
      price: "$350+",
      period: "/project",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      features: [
        "Custom WordPress Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
        "Performance Optimization",
      ],
      highlighted: false,
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$1,500+",
      period: "/project",
      description: "Ideal for growing businesses needing advanced functionality and cloud integration.",
      features: [
        "Full Stack Web Application",
        "Cloud Infrastructure Setup",
        "API Development & Integration",
        "Database Design & Optimization",
        "AI Chatbot Integration",
        "3 Months Support",
        "CI/CD Pipeline Setup",
        "Performance Monitoring",
      ],
      highlighted: true,
      ctaText: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solutions for enterprises requiring hybrid cloud architecture and healthcare compliance.",
      features: [
        "Multi Cloud Architecture",
        "Multi-Region Deployment",
        "HIPAA/GDPR Compliance",
        "FHIR Integration",
        "Custom AI/ML Solutions",
        "24/7 Support & Monitoring",
        "Dedicated DevOps Engineer",
        "SLA Guarantees",
        "Unlimited Revisions",
      ],
      highlighted: false,
      ctaText: "Contact Sales",
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
