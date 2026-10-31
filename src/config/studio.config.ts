import { z } from "zod";
import { portfolioConfig, type Project } from "./portfolio.config";

const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["AI & Agents", "Cloud & Systems", "Web & Commerce"]),
  domain: z.string(),
  summary: z.string(),
  status: z.string(),
  detail: z.string(),
  stack: z.array(z.string()),
  image: z.string().optional(),
  imageKind: z.enum(["screenshot", "illustration", "reference"]).default("screenshot"),
  imageAlt: z.string().min(1).optional(),
  visual: z
    .enum(["capture", "network", "terminal", "pipeline"])
    .default("network"),
  featured: z.boolean().default(false),
  evidence: z.string(),
}).superRefine((project, context) => {
  if (project.image && project.imageKind !== "screenshot" && !project.imageAlt) {
    context.addIssue({code: "custom", path: ["imageAlt"], message: "Illustrations and references require descriptive alternative text."});
  }
});

export const studioProjects = z.array(projectSchema).parse([
  {
    "id": "voicebridge",
    "name": "VoiceBridge",
    "category": "AI & Agents",
    "domain": "VOICE & BUSINESS AUTOMATION",
    "summary": "A live Retell web call booked an appointment and completed calendar and CRM jobs through guarded releases.",
    "status": "Deployed · live Retell call booked a test appointment end to end",
    "detail": "A deployed single-business voice-agent platform with owner sign-in, grounded knowledge, scoped Retell/Vapi and MCP tools, explicit booking confirmation and durable worker recovery. On October 25 an owner Retell web call joined audio, checked availability and booked a repair visit; the worker then completed the Google Calendar and HubSpot CRM jobs. The caller was a clearly labelled test voice; the agent, engine, worker, database, calendar and CRM were live. Four earlier calls exposed case-sensitive service matching, low caller audio, a missing year and an expired Google token, and each cause was fixed before the next call. Three guarded backend releases each took a database backup, kept a rollback target, matched 16/16 release files and 15/15 image modules and preserved 77 unrelated containers. The backend suite passed 258/258. The Vapi path, phone numbers, Google OAuth production publishing, a pre-call token check, provider-data deletion and backup replay remain open, and general follow-up email stays disabled. One booked call is a functional result, not a reliability or capacity measurement.",
    "stack": [
      "Python",
      "PostgreSQL",
      "Retell / Vapi",
      "MCP"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Google Doc reviewed October 25, 2026; open gates stated above",
    "image": "/studio/voicebridge-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "VoiceBridge public voice-agent website"
  },
  {
    "id": "fleetwright",
    "name": "Fleetwright MCP",
    "category": "Cloud & Systems",
    "domain": "RELIABLE BROWSER OPERATIONS",
    "summary": "Approved browser workflows, durable crawling and supervised recovery with inspectable receipts.",
    "status": "Deployed release · browser supervision and recovery verified",
    "detail": "A deployed browser-operations platform with six scoped MCP tools, owner-approved freight and maintenance workflows on owned destinations, PostgreSQL fencing, a durable catalogue crawler and a local SQLite/Ollama agent. The October 14 correction adds browser supervision and readiness checks; the October 15 release publishes the operating, privacy, security and scale guides. Recorded regression passed 289 tests with six accounted skips; all 146 deployed artifact hashes and eight signed image identities matched. Actual owner booking, both approved MCP workflows, crawler export and all 15 CSP routes passed. A fresh archive restored into two new databases with matching workflow history, and scheduler/monitor recovery was exercised. Encrypted off-host restore and installed-model evidence retain their October 13 dates. Arbitrary-site execution, million-user capacity and measured monthly availability remain unproven.",
    "stack": [
      "Python",
      "Playwright",
      "Postgres",
      "MCP",
      "FastAPI"
    ],
    "image": "/studio/fleetwright.webp",
    "visual": "capture",
    "featured": true,
    "evidence": "Source review October 15, 2026; dated verification and open gates stated above"
  },
  {
    "id": "agentic-environment",
    "name": "Claude Code & Codex Workflows",
    "category": "AI & Agents",
    "domain": "ENGINEERING WORKFLOWS",
    "summary": "Claude Code and Codex workflows with custom MCP, bounded evidence retrieval and recovery.",
    "status": "Working Claude Code/Codex tooling · 45 tests pass",
    "detail": "A project-aware development environment integrating Claude Code, Codex, provider-isolated launchers, project-scoped checkpoints and a custom SQLite FTS5 career-knowledge MCP. Typed tool contracts, bounded exact-source retrieval, browser-integration diagnosis and edit/repository security gates support evidence-based engineering. October 14 records eight knowledge-index tests and 37 switcher tests passing from a local snapshot; the installed-suite attempt had two filesystem-permission errors. The browser connection has dated 13-step functional evidence, without a reliability benchmark. Cross-provider transcript resume, productivity multipliers and unrestricted automation are not established.",
    "stack": [
      "Claude Code",
      "Codex",
      "MCP",
      "Python",
      "SQLite FTS5"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above",
    "image": "/studio/agentic-environment-cover.webp",
    "imageKind": "reference",
    "imageAlt": "Claude Code & Codex Workflows actual command-line help"
  },
  {
    "id": "regenai-shopify",
    "name": "RegenAI / Shopify Support Studio",
    "category": "Web & Commerce",
    "domain": "HEADLESS WELLNESS COMMERCE",
    "summary": "A Shopify-backed Hydrogen storefront and an assistant with versioned human-reviewed decisions.",
    "status": "Deployed storefront and support studio · ordering closed",
    "detail": "A Shopify-backed Hydrogen storefront with six sample products and a deployed Python Support Studio. Contextual chat, encrypted preferences, image understanding, bounded web retrieval and versioned human approvals support ticket recommendations. The October 8 release recorded 86 Python tests, 184 JavaScript tests with one existing skip, six workflow regressions and 17 public HTTP checks. October 14 read-only probes found storefront, studio and cart responding; they did not renew Shopify/Gmail grants or replay a full journey. Ordering, customer sign-in, external refunds and outbound email remain closed. Real action receipts and client handoff remain open.",
    "stack": [
      "Hydrogen",
      "Python",
      "Shopify",
      "AI support"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above",
    "image": "/studio/regenai-shopify-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "RegenAI public wellness storefront"
  },
  {
    "id": "yuktha-wellness",
    "name": "Yuktha Wellness",
    "category": "AI & Agents",
    "domain": "GROUNDED HEALTH AI",
    "summary": "Paid multilingual health assistant: hybrid retrieval, reranking and an emergency check that runs before any answer.",
    "status": "Paid client work · production assistant",
    "detail": "Paid client engineering for a multilingual health assistant: hybrid dense and keyword retrieval, cross-encoder reranking, emergency/crisis handling, structured grounding checks, SSE streaming and Redis caching. Web chat and controlled WhatsApp routing connect to the platform. Later work separates user-authored memory from generated replies and improves multilingual retrieval and image-only handling. The August release record includes 28 passing backend test files and a nine-check namespace migration. The recorded full latency target remains unmet; clinical content and final tone require human review. Historical deployment drift remains documented, so these records do not establish current source-to-live parity.",
    "stack": [
      "Node.js",
      "Hybrid RAG",
      "Pinecone"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "August release records · October 10 public case study",
    "image": "/studio/yuktha-wellness-cover.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of Yuktha Wellness: a web-chat answer with a cleared emergency check beside the emergency-first retrieval pipeline"
  },
  {
    "id": "ftm-social-media",
    "name": "Campaign operations",
    "category": "AI & Agents",
    "domain": "CLIENT AUTOMATION",
    "summary": "Paid campaign workflow: approved media in, AI copy drafts, client selection and revisions, then approved assets delivered.",
    "status": "Paid client work · production workflow",
    "detail": "A media-first campaign workflow with approved asset intake, background copy generation, client media/date selection, revisions, internal approval and controlled asset delivery. The August release included real client dashboard/calendar approval checks and deployment parity. Approved deliverables are downloaded for manual publishing; direct social-network publishing is not the verified path.",
    "stack": [
      "n8n",
      "Python",
      "Client portals"
    ],
    "visual": "pipeline",
    "featured": true,
    "evidence": "Current platform snapshot, August 11, 2026",
    "image": "/studio/ftm-social-media-cover.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of Campaign operations: a client content calendar with selection, revision and approval states"
  },
  {
    "id": "jwalker-knowledge-assistant",
    "name": "Creator Knowledge Assistant",
    "category": "AI & Agents",
    "domain": "PUBLIC KNOWLEDGE RAG",
    "summary": "A public WordPress assistant that answers from a creator’s approved YouTube videos, with linked sources.",
    "status": "Public WordPress assistant · restored and domain-ready October 21",
    "detail": "A public WordPress knowledge assistant grounded in approved YouTube material. FastAPI combines SQLite FTS5, local embeddings and rank fusion without a hosted vector database. Relevance checks and source citations constrain answers; paid membership and course material are excluded from the public release. Manifest checks, atomic knowledge updates, daily refresh and scheduled backups support operations. The September 29 go-live record includes a real grounded answer with five sources, a public homepage check and execution of the actual scheduled backup command. On October 21 the missing homepage loader was restored, both question boxes were republished and browser-checked, and the engine (26,634 indexed passages, 28 running services) was prepared for the client’s final domain, which waits on one DNS record from the client. The earlier members-only brief is historical.",
    "stack": [
      "FastAPI",
      "SQLite FTS5",
      "WordPress"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "September 29 release records · October 10 public case study",
    "image": "/studio/jwalker-knowledge-assistant-cover.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of Creator Knowledge Assistant: a WordPress question box with an answer linked to public video sources"
  },
  {
    "id": "ftm-sms-followup",
    "name": "Multi-Site Follow-up",
    "category": "AI & Agents",
    "domain": "MESSAGING OPERATIONS",
    "summary": "Multi-site lead routing with complete booking confirmations, provider-acceptance checks and consent-aware follow-ups.",
    "status": "Client automation · October 20 booking-confirmation release live",
    "detail": "Client automation connecting JotForm, n8n, Google Sheets and Twilio for site-specific lead intake, welcome messages and scheduled follow-ups across nine active routes. The October 20 release gives one client site a complete booking confirmation (service, contact details, appointment time, timezone and consent choices) in warmer wording, sent identically to the customer and the business. The other eight routes keep their behavior, and all three deployed workflows matched local source. An earlier controlled booking test reached provider status delivered for both messages; the revised wording was checked offline without paid sends. Twelve site-specific follow-ups are prepared but switched off pending cost confirmation. October 11 repairs require matched provider acceptance before marking a message sent and suppress marketing after an explicit opt-out. Blank or unknown marketing consent is not yet rejected, so this is not a general fail-closed consent guarantee.",
    "stack": [
      "n8n",
      "Twilio",
      "Configuration"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Google Doc release note reviewed October 25, 2026; verification dates and open gates stated above",
    "image": "/studio/ftm-sms-followup-cover.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of Multi-Site Follow-up: a booking form routed through n8n, Sheets and Twilio to a booking-summary text with tracked outcomes"
  },
  {
    "id": "ftm-seo-automation",
    "name": "SEO Operations",
    "category": "AI & Agents",
    "domain": "WORDPRESS AUTOMATION",
    "summary": "AI metadata jobs with validation, per-item results and recovery.",
    "status": "Operational PHP/Python workflow",
    "detail": "A protected operator interface queues WordPress metadata work through a PHP/Python runtime. Title normalization, industry and location constraints, deterministic repair and per-item results govern AIOSEO updates. September recovery work added supervised restart and boot recovery, separate frontend/API health checks and fault-injection verification. Twelve scoped recovery criteria passed in the retained record. Later headline, quality and article features were deployed, but their paid end-to-end generation test still needs a usable WordPress test target. The historical n8n implementation is separate from the current runtime.",
    "stack": [
      "Flask",
      "WordPress",
      "Async jobs"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "September 4 recovery records · October 10 public case study",
    "image": "/studio/ftm-seo-automation-cover.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of SEO Operations: a metadata job table with per-item validation results and worker health"
  },
  {
    "id": "adrevora-ai",
    "name": "AdRevora AI",
    "category": "AI & Agents",
    "domain": "ADVERTISING & REVENUE INTELLIGENCE",
    "summary": "Reconciled revenue, role metrics, daily reports and human-reviewed private CPU AI in a deployed workspace.",
    "status": "Deployed revenue workspace · 120 app tests pass",
    "detail": "A deployed advertising-to-revenue workspace with mandatory MFA, tenant membership, a persistent financial ledger, first/last-touch attribution and private CPU inference. The October 14 release adds reconciled campaign/unknown/total CSV rows, CEO/marketing/operations metrics, immutable creative revision history, conservative source freshness, bounded history and stored daily UTC reports. Recorded verification passed 120 application tests, 56 deployment tests, 17 HTTPS workflow checks and 23 scoped accessibility scans; all 68 release artifacts matched and all 20 database table hashes were preserved across the final upgrade. Encrypted isolated recovery matched eight key tables. Company-account activation, campaign writes, commercial pilot reconciliation and distributed capacity remain open. The revenue figures shown are reference data, not client results. Full manual accessibility acceptance remains open.",
    "stack": [
      "React",
      "Node.js",
      "SQLite",
      "Meta / GoHighLevel"
    ],
    "image": "/studio/adrevora-ai.png",
    "visual": "capture",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "vitalprobe",
    "name": "VitalProbe",
    "category": "AI & Agents",
    "domain": "AI SAFETY & EVALUATION",
    "summary": "Healthcare AI test scenarios, inspectable evidence and regression comparison.",
    "status": "Published product website · local audit engine",
    "detail": "A Python healthcare-AI testing engine and published React product website. Test scenarios exercise REST/MCP targets with deterministic checks, optional semantic judging, multi-turn simulation, HTML/JSON dossiers and baseline comparison. Recorded engineering gates include 190 Python tests, 39 frontend tests and a 226-check local verifier. The completed 1:51 evidence film runs a deliberately weak target through 25 test cases: three PASS, 22 FAIL and zero ERROR. New audits execute locally; the public website has no hosted audit, upload or payment service. Human clinical/legal calibration remains open, and the film’s social publication is not claimed.",
    "stack": [
      "Python",
      "FastAPI",
      "MCP"
    ],
    "visual": "terminal",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above",
    "image": "/studio/vitalprobe-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "VitalProbe public evaluation website"
  },
  {
    "id": "rag-production-stack",
    "name": "RAG Production Stack",
    "category": "Cloud & Systems",
    "domain": "AI INFRASTRUCTURE",
    "summary": "Open-source retrieval stack: nine core services, authentication, network isolation, metrics, logs, traces and encrypted backups.",
    "status": "Source-reconciled infrastructure",
    "detail": "Containerized retrieval infrastructure with nine core services and fourteen profile-activated services, authentication, network isolation, metrics/logs/traces and encrypted-backup workflows. Published as MIT-licensed open source, with hosted Gitleaks, Semgrep and Bandit checks passing. The documentation establishes configuration and source intent; it does not claim a currently healthy deployment or compliance certification.",
    "stack": [
      "Docker",
      "LightRAG",
      "Observability"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Open-source public edition, September 24, 2026",
    "image": "/studio/rag-production-stack-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "RAG Production Stack public repository documentation"
  },
  {
    "id": "secure-hybrid-ai-hub",
    "name": "Secure Hybrid AI Hub",
    "category": "AI & Agents",
    "domain": "AGENT GOVERNANCE",
    "summary": "A local policy broker for scoped AI work, typed artifacts and verification evidence.",
    "status": "Open-source policy broker · 257 tests passed in September",
    "detail": "An experimental Python broker and CLI for governed Codex, Claude Code, VS Code and local Ollama workflows. Deterministic controls mediate scope, policy, artifacts and privileged transitions while models propose work. The September public snapshot recorded 257 passing tests with one expected private-dossier skip and Python 3.11–3.13 CI/security checks. The October review did not rerun those gates. Phase 1 closure, authority enforcement and end-to-end acceptance remain incomplete; real-client operation, browser/API delivery and distributed capacity retain separate gates.",
    "stack": [
      "Python",
      "Typed artifacts",
      "Policy broker"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above",
    "image": "/studio/secure-hybrid-ai-hub-cover.webp",
    "imageKind": "reference",
    "imageAlt": "Secure Hybrid AI Hub actual command-line help"
  },
  {
    "id": "equipcert",
    "name": "EquipCert AI",
    "category": "Web & Commerce",
    "domain": "INSPECTION SOFTWARE",
    "summary": "Web and mobile inspection evidence with offline capture and explicit certification boundaries.",
    "status": "Deployed inspection app · operational probes verified",
    "detail": "An equipment-inspection application with Next.js, Flutter, Supabase records, offline evidence capture, signatures, optional AI assistance and PDF reporting. October 14 verification recorded 104 web unit tests, seven production probes, three dependency checks and zero configuration-boundary violations across 157 files. The database keepalive now requires an actual database query. The 429 native-client tests and mobile build results remain dated October 1 evidence. Authenticated inspection walkthroughs, persisted signature-consent evidence, commercial payments, an off-machine signing-key backup and a completed restore drill remain open; inspection evidence is not regulatory certification.",
    "stack": [
      "Next.js",
      "Flutter",
      "Supabase"
    ],
    "image": "/studio/equipcert.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "mediconnect-v3",
    "name": "MediConnect",
    "category": "Cloud & Systems",
    "domain": "CONNECTED HEALTHCARE",
    "summary": "Connected-care website, regional services and preserved CMS content with separate clinical gates.",
    "status": "Website and CMS deployed · 676 unit and 77 browser tests",
    "detail": "A connected-care project spanning a React website, Strapi CMS, regional backend services, document processing and a separate knowledge stack. The recorded public website release passed 676 unit tests and 77 browser cases with 43 matching local/live files. CMS verification preserved five original articles, all 51 ordered paragraphs and three cover images; two legacy covers remain unavailable. The processor recorded 98 local tests, while live knowledge-stack activation failed before model generation or grounded retrieval was verified. Today’s local checkpoint resumes engineering with changes not yet deployed; phases 3–8, privacy verification and clinical acceptance remain open.",
    "stack": [
      "React",
      "Multi-cloud",
      "FHIR"
    ],
    "image": "/studio/mediconnect.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "email-finder",
    "name": "EmailFinder",
    "category": "Cloud & Systems",
    "domain": "RESEARCH TOOLING",
    "summary": "Explainable business-email research using HTTP and DNS signals.",
    "status": "Local CLI · 23 deterministic tests verified",
    "detail": "A Python research CLI with find, verify, scrape and batch commands. Public website evidence, DNS configuration and address patterns produce explainable candidates without SMTP probing. October 14 local verification passed all 23 collected tests with the declared dnspython dependency and checked CLI help. No live DNS, website, avatar or code-hosting lookup was repeated in that review. A candidate score does not prove mailbox ownership, deliverability or consent.",
    "stack": [
      "Python",
      "HTTP",
      "DNS"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above",
    "image": "/studio/email-finder-cover.webp",
    "imageKind": "reference",
    "imageAlt": "EmailFinder actual command-line help"
  },
  {
    "id": "chronos",
    "name": "Chronos",
    "category": "Web & Commerce",
    "domain": "HEADLESS COMMERCE",
    "summary": "Headless WooCommerce storefront with a bounded AI guide, verified test checkout and tested rollback.",
    "status": "Deployed WooCommerce storefront · 9/9 AI guide tasks pass",
    "detail": "A React/TypeScript storefront where WordPress and WooCommerce own content, accounts, prices and orders. The October 21 release, merged to GitHub main, adds a project-specific AI guide on an approved remote route: it passed 9/9 held-out tasks and 3 boundary checks, has no customer-record access or action tools and runs inside a USD 0.10 lifetime allowance with reservations, deadlines and quotas. Runtime images moved to patched Node 22.23.3 and Nginx 1.30.4 with zero reported vulnerabilities, and the Stripe SDK to 20.3.1 with native rollback tested. 222 commerce checks and 33 browser checks across three engines passed, including a hosted Stripe TEST payment; twelve privacy checks with test data passed. Guide restart and frontend rollback/resume passed, and 140 frontend and 611 guide files match their artifacts. Live payments and shipping are not enabled; million-session capacity and uptime objectives are roadmap gates, not measurements.",
    "stack": [
      "React",
      "WordPress",
      "WooCommerce"
    ],
    "image": "/studio/chronos.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Google Doc release record reviewed October 25, 2026; October 21 release evidence and open gates stated above"
  },
  {
    "id": "kindred-grove",
    "name": "Kindred Grove",
    "category": "Web & Commerce",
    "domain": "SHOPIFY STOREFRONT",
    "summary": "An independent Shopify storefront build with careful cart and consent engineering.",
    "status": "Published Shopify storefront · password protected",
    "detail": "An independent build, not client work: a premium pantry storefront made with Shopify Liquid, CSS and vanilla JavaScript Web Components. The published cinematic design includes a cart drawer, pantry quiz, consent controls and seven native content pages. The October 8 overview records 55 browser passes, three catalog-dependent skips and matching hashes for all 154 shipping files. Shopify development-store policy requires a shared visitor password and prevents real transactions or commercial transfer. Source is published on a review branch; approving review for main remains outstanding.",
    "stack": [
      "Shopify",
      "Liquid",
      "Web Components"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Project status document, October 8, 2026",
    "image": "/studio/kindred-grove-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "Kindred Grove development storefront screenshot; anonymous public access remains password-gated"
  },
  {
    "id": "healthcode-analysis",
    "name": "HealthCode Analysis",
    "category": "Web & Commerce",
    "domain": "NATIVE CMS & EDITORIAL",
    "summary": "Native Elementor publishing, browser-only reader tools and documented operating boundaries.",
    "status": "Native WordPress site · 66 native layouts",
    "detail": "A deployed WordPress/Elementor editorial site with 66 native layouts, a device-local library/search and six educational tools. The September release recorded browser/security checks, administrator editing, an independent restore and 141-file parity. The later documentation review recorded 316 passing offline checks, one failing retained AskMe test and two unrun runtime-dependent suites. October 14 confirmed an HTTP 200 response and the known duplicate HSTS header. Visual, screen-reader, physical-device and recurring restore acceptance remain open; clinical validity, full compliance and million-reader capacity are not claimed.",
    "stack": [
      "WordPress",
      "Elementor",
      "Browser tools"
    ],
    "image": "/studio/healthcode.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "everyday-dental-surgery",
    "name": "Everyday Dental",
    "category": "Web & Commerce",
    "domain": "INTERACTIVE PATIENT JOURNEY",
    "summary": "Independent build of a dental practice website with an interactive patient journey, consent and access-denial states. No real patient records.",
    "status": "Independent build · source published on GitHub",
    "detail": "An independent build of a dental practice website, not a client project and not a real practice, with an interactive patient journey, consent examples, access-denial states and a FHIR-shaped export. State lives in browser memory and no real patient records are stored. Real intake, clinical authentication, payments, messaging and the historical clinical endpoints are disabled. It shows interface behavior and engineering boundaries; it is not an operating clinical portal. Source and documentation were published on GitHub with all 255 file hashes matching.",
    "stack": [
      "Responsive UI",
      "Bilingual",
      "Privacy flows"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Portfolio release and GitHub publication, September 24, 2026",
    "image": "/studio/everyday-dental-surgery-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "Everyday Dental independent website build, home page"
  },
  {
    "id": "wordpress-incident-response",
    "name": "Incident Response & Recovery",
    "category": "Cloud & Systems",
    "domain": "SECURITY ENGINEERING",
    "summary": "Found and contained a self-repairing WordPress infection, then proved recovery with a full rescan of 114 WordPress installs.",
    "status": "Client engagement · reinfection contained October 16",
    "detail": "A backup-first response to a multi-layer WordPress compromise. Process inspection and writer tracing expanded the investigation beyond known filenames. Repeated scans found zero known indicators after containment, and 21 checked sites returned successful public responses. On October 16 a new infection on the same hosting account was found and contained: five malware runners stopped, 79 artifact files and six hidden token APIs quarantined, rogue users and 53 persistence rows removed, and seven database credentials, nine administrator passwords and seven key sets rotated. A full scan of 114 WordPress roots and 119 option tables then found zero artifacts, and a real administrator login passed with 21 regression tests. Successful containment is distinct from rebuilding a historically compromised environment from a trusted image.",
    "stack": [
      "Linux",
      "WordPress",
      "Forensics"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Anonymized technical case study, August 26, 2026",
    "image": "/studio/wordpress-incident-response-cover.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of Incident Response & Recovery: an incident log, response timeline and 21 site checks"
  },
  {
    "id": "groza-accessibility",
    "name": "Groza Learning Center Accessibility",
    "category": "Web & Commerce",
    "domain": "WORDPRESS ACCESSIBILITY",
    "summary": "Paid WCAG 2.1 AA fixes for a learning center’s WordPress site: a checked article went from 7 WAVE errors and 180 contrast errors to zero.",
    "status": "Paid client work · delivered April 2026",
    "detail": "My first Upwork contract: an accessibility audit and fixes for a learning center’s WordPress and Elementor site. I audited more than 30 pages with WAVE and Lighthouse, then fixed more than 100 errors (missing alt text, broken ARIA references, empty buttons and links, missing form labels, a broken skip link and empty headings) and more than 200 color contrast failures. Most fixes run from a server-side PHP snippet, with a few buttons and links edited directly in Elementor, so no theme or plugin file was changed. Keyboard navigation was tested on video. On the checked “SAT vs ACT” article, WAVE went from 7 errors, 180 contrast errors and an AIM score of 1/10 to 0 errors, 0 contrast errors and 9.1/10. WAVE is an automated check, not a legal accessibility certification.",
    "stack": [
      "WordPress",
      "Elementor",
      "PHP",
      "WCAG 2.1 AA"
    ],
    "visual": "capture",
    "featured": false,
    "evidence": "Client delivery records, April 2026, and WAVE screenshots of the live site",
    "image": "/studio/groza-accessibility-cover.webp",
    "imageKind": "reference",
    "imageAlt": "WAVE results for the same Groza Learning Center article before and after the fixes: 7 errors and 180 contrast errors before, 0 and 0 after"
  },
  {
    "id": "vericommerce-ai",
    "name": "VeriCommerce AI",
    "category": "AI & Agents",
    "domain": "EVIDENCE-GROUNDED COMMERCE",
    "summary": "Versioned catalog evidence, cited quotations and approved drafts across account roles and multi-format ingestion.",
    "status": "Deployed release 02 · 102 browser cases pass",
    "detail": "An independently built commerce evidence platform. Live release 02 (October 18) adds persistent account workspaces with four roles, bounded JSON/CSV/PDF/image ingestion, current-source retrieval with context inspection, cited quotations, temporal review, durable jobs, explicit approval and provenance export. React/TypeScript and FastAPI/PostgreSQL run together; Shopify access is read-products-only. Hosted checks on the newer published source passed 155 PostgreSQL/CPU/infrastructure checks, 17 Node checks and 102 desktop/mobile browser cases with zero skips. The live release matched 228 local/archive/live artifacts, passed 46 public browser cases and reproduced 27 SQL table snapshots with restricted-role/RLS probes. A newer release 03 was stopped before promotion at the owner's request, so its source-only assistant changes are not live. Shopify publishing and model training remain roadmap work; million-user capacity and 99% availability are future targets, not measurements.",
    "stack": [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "ONNX"
    ],
    "visual": "pipeline",
    "featured": true,
    "evidence": "Google Doc release record reviewed October 25, 2026; October 18 release evidence and open gates stated above",
    "image": "/studio/vericommerce-ai-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "VeriCommerce AI public evidence-commerce website"
  },
  {
    "id": "praxisforge-ai",
    "name": "PraxisForge AI",
    "category": "AI & Agents",
    "domain": "DURABLE AGENT OPERATIONS",
    "summary": "Three bounded Hermes roles turn permitted knowledge into reviewed drafts, commitments and internal receipts.",
    "status": "Deployed owner operations with exact human approval",
    "detail": "A self-hosted agent operations platform using Nous Research's Hermes Agent, PostgreSQL workflow ownership and bounded coordinator, researcher and operator roles. Authenticated Operations provides versioned text knowledge, durable tasks, retries/cancellation, source-linked structured outputs, exact human approval, internal receipts and persisted workflow memory. The October 15 live workflow recovered after a worker interruption, completed all three roles and recorded two source-backed commitments with an internal receipt. Altered approval and replay were rejected; encrypted off-host database restoration matched schema and business records. This is one successful workflow, not a statistical reliability benchmark. Approval commits internal records; email delivery and third-party CRM updates are not enabled. Open registration, subscription checkout, broader customer admission, scheduled recovery guarantees and million-user capacity remain separate gates.",
    "stack": [
      "Hermes Agent",
      "Python",
      "PostgreSQL",
      "Next.js",
      "Local inference"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Source review October 16, 2026; October 15 release evidence and open gates stated above",
    "image": "/studio/praxisforge-ai-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "PraxisForge AI public agent-operations website"
  },
  {
    "id": "synqharbor-ai",
    "name": "SynqHarbor AI",
    "category": "AI & Agents",
    "domain": "HUMAN-LED COLLABORATION",
    "summary": "A human-led collaboration interface with task revisions, separate approvals and portable public engineering documentation.",
    "status": "Deployed website and browser workspace · 21 tests, 100 route checks",
    "detail": "An independent collaboration product with a deployed Next.js/React/TypeScript website, 25 public routes and nine workspace views. Browser-tab-local interactions cover task creation, search, status changes, conversations, version-aware client/developer approvals and report downloads. The October 16 release recorded 21 automated tests, 100 route/viewport checks, quality/security CI and 175 matching deployment hashes. Fonts and media are self-hosted, with reduced-motion support and portable static deployment. Workspace state resets on reload. Authentication, persistent collaboration, agent execution and external actions remain roadmap work. Availability and million-user capacity are future qualification targets, not achieved results.",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Motion",
      "Static hosting"
    ],
    "visual": "capture",
    "featured": true,
    "evidence": "Source review October 16, 2026; recorded release evidence and open backend gates stated above",
    "image": "/studio/synqharbor-ai-cover.webp",
    "imageKind": "screenshot",
    "imageAlt": "SynqHarbor AI public collaboration website"
  },
  {
    "id": "playwright-cline-integration",
    "name": "Playwright MCP + Cline",
    "category": "AI & Agents",
    "domain": "SUPERVISED BROWSER INTEGRATION",
    "summary": "Human-approved browser actions through Cline on Windows, with restart, recovery and saved evidence.",
    "status": "Local Windows rehearsal verified · client acceptance pending",
    "detail": "Prepared a Windows integration extending an existing Cline installation with Microsoft’s official Playwright MCP server. Two recorded local Cline GUI workflows each passed five browser test assertions. Actual editor restarts, server disable/re-enable and exact configuration restoration were exercised. An explicit process working directory fixed misplaced screenshot evidence; the final browser run saved the verified image in its intended workspace. Existing provider settings, unrelated MCP servers and browser profiles were preserved, with automatic approvals disabled. Client-machine installation, live walkthrough and contractual acceptance remain pending.",
    "stack": [
      "Playwright",
      "MCP",
      "Cline",
      "Windows",
      "Node.js"
    ],
    "visual": "capture",
    "featured": true,
    "evidence": "Current technical overview and owning local evidence reviewed October 18, 2026; client acceptance pending",
    "image": "/studio/playwright-cline-integration.webp",
    "imageKind": "illustration",
    "imageAlt": "Illustration of Playwright MCP + Cline: a Cline browser action waiting for human approval beside a test page"
  },
  {
    "id": "project-video-studio",
    "name": "Project Video Studio",
    "category": "AI & Agents",
    "domain": "AI VIDEO PRODUCTION",
    "summary": "Turns a script, recording or brief into an editable layered video with captions, checked audio and portable source packages.",
    "status": "Open-source local engine · 95 tests pass",
    "detail": "A local Python engine that turns an approved script, recorded explanation or brief into an editable video project. It prepares narration or transcription, renders up to four visual layers with masks and depth-ordered callouts, composes separate portrait and landscape layouts and exports verified masters plus portable source packages. The October 21 v2 rebuild added recorded-speech timing, style checkpoints, local reference measurements, a Blender 3D adapter and safe shot reuse; the latest addition is local human matting, so text can sit behind a presenter. 95 automated tests pass; type checks, lint, Bandit, Semgrep and secret scanning pass, and GitHub CI passed all four jobs. Real 70.7-second portrait and 307.1-second landscape validation films fully decode at about -16 LUFS. It is local software with no hosted service; full style reconstruction, autonomous shot production and native editor round trips remain unfinished, and natural talking-head matting needs separate review.",
    "stack": [
      "Python",
      "FFmpeg",
      "Blender",
      "ONNX",
      "SQLite"
    ],
    "visual": "pipeline",
    "featured": true,
    "evidence": "Google Doc and public repository reviewed October 25, 2026; open gates stated above",
    "image": "/studio/project-video-studio-cover.webp",
    "imageKind": "reference",
    "imageAlt": "A frame rendered by Project Video Studio: narration title over two original 3D workflow scenes"
  },
  {
    "id": "self-hosted-email-infrastructure",
    "name": "Self-Hosted Email Infrastructure",
    "category": "Cloud & Systems",
    "domain": "SELF-HOSTED MAIL OPERATIONS",
    "summary": "Five authenticated domain mailboxes with webmail on an existing server, checked with external, denial and restore tests.",
    "status": "Operating · 22/22 external protocol checks pass",
    "detail": "A domain had been registered without any mailbox service. I set up five separate authenticated mailboxes with sending, receiving and HTTPS webmail on an existing virtual server, using Docker Mailserver (Postfix, Dovecot, Rspamd), Roundcube and Caddy, with Cloudflare DNS. The work added MX, SPF, DKIM, DMARC and matching reverse DNS, TLS-only submission and IMAP, relay and cross-account sender blocking, an encrypted off-server backup and an isolated five-account restore. Deployment matched 20 owned files while all 17 existing proxy files and 64 unrelated containers stayed unchanged. The October 21 review passed 22 of 22 external protocol, authentication and denial checks; 16 owner diagnostics passed SPF, DKIM and DMARC across three Gmail destinations, and all 25 later sends were reconciled against live Sent folders (23 accepted, 2 failed). It runs on a single host, so it is not highly available. External alerts, automatic off-server backups, image vulnerability scanning and full disaster recovery remain open; authentication results do not guarantee inbox placement.",
    "stack": [
      "Docker Mailserver",
      "Roundcube",
      "Caddy",
      "Cloudflare DNS",
      "Postfix / Dovecot"
    ],
    "visual": "terminal",
    "featured": true,
    "evidence": "Google Doc case study reviewed October 25, 2026; October 21 operating review and open gates stated above",
    "image": "/studio/self-hosted-email-infrastructure-cover.webp",
    "imageKind": "reference",
    "imageAlt": "Workflow diagram for the self-hosted email infrastructure: DNS and authentication, mail server, five inboxes and restore testing"
  }
]);

export type StudioProject = z.infer<typeof projectSchema>;
const currentProjectUrls: Record<string, string> = {
  voicebridge: "https://voicebridge.zahidul-islam.com/",
  "mediconnect-v3": "https://mediconnect.zahidul-islam.com/",
  chronos: "https://chronos.zahidul-islam.com/",
  "healthcode-analysis": "https://healthcodeanalysis.zahidul-islam.com/",
  "everyday-dental-surgery": "https://dental.zahidul-islam.com/",
  "regenai-shopify": "https://regenai.zahidul-islam.com/",
  "groza-accessibility": "https://grozalearningcenter.com/",
};
export const projectResources = (id: string) => {
  const project = portfolioConfig.projects.find((p) => p.id === id) as
    Project | undefined;
  return {
    links:
      project?.githubLinks ??
      (project?.githubUrl
        ? [{ label: "Source code", url: project.githubUrl }]
        : []),
    liveUrl: currentProjectUrls[id] ?? project?.liveUrl,
  };
};

export const studioConfig = {
  contactChannels: [
    {
      id: "email",
      label: "Email",
      value: portfolioConfig.personal.email,
      href: portfolioConfig.socials.email,
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Connect professionally",
      href: portfolioConfig.socials.linkedin,
      external: true,
    },
    {
      id: "upwork",
      label: "Upwork",
      value: "View profile & hire",
      href: `${portfolioConfig.upworkProfileUrl}?mp_source=share`,
      external: true,
    },
    {
      id: "phone",
      label: "Phone",
      value: portfolioConfig.personal.phone,
      href: `tel:${portfolioConfig.personal.phone}`,
      external: false,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "Start a chat",
      href: `https://wa.me/${portfolioConfig.personal.whatsapp.replace(/\D/g, "")}`,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: "Explore my code",
      href: portfolioConfig.socials.github,
      external: true,
    },
  ],
  socialProfiles: [
    { id: "youtube", label: "YouTube", handle: "@FromZahidsKnowledgeofficial", href: portfolioConfig.socials.youtube },
    { id: "facebook", label: "Facebook", handle: "/zahidulislam2222", href: portfolioConfig.socials.facebook },
    { id: "instagram", label: "Instagram", handle: "@zahidul_islam2222", href: portfolioConfig.socials.instagram },
    { id: "x", label: "X", handle: "@MdZahid67023693", href: portfolioConfig.socials.twitter },
    { id: "tiktok", label: "TikTok", handle: "@zahidul_islam2222", href: portfolioConfig.socials.tiktok },
    { id: "reddit", label: "Reddit", handle: "u/zahidulislam2222", href: portfolioConfig.socials.reddit },
    { id: "contra", label: "Contra", handle: "Services & case studies", href: portfolioConfig.socials.contra },
    { id: "n8n", label: "n8n Community", handle: "@zahidul_islam", href: portfolioConfig.socials.n8n },
  ] as const,
  reviews: portfolioConfig.testimonials.map((review) => ({
    ...review,
    excerpt:
      review.content
        .match(/[^.!?]+[.!?]+/g)
        ?.slice(0, 2)
        .join("")
        .trim() ?? review.content,
  })),
  reviewUrl: portfolioConfig.upworkProfileUrl,
  commitments: portfolioConfig.ethicalCommitment.items,
  projectHighlights: {
    "groza-accessibility": "Paid WCAG 2.1 AA remediation: 100+ errors and 200+ contrast failures fixed with a PHP snippet and no theme edits.",
    "project-video-studio": "Script-to-video engine with layered composition, local human matting, checked captions/audio and safe shot reuse.",
    "self-hosted-email-infrastructure": "Five authenticated mailboxes on a shared server; 22/22 external protocol checks and an isolated restore.",
    "playwright-cline-integration": "Human-approved Cline browser actions, restart verification and exact configuration recovery.",
    "synqharbor-ai": "Human-led collaboration screens with revision-aware approvals, responsive public documentation and a portable static release.",
    "vericommerce-ai": "Catalog evidence with account roles, multi-format ingestion, cited quotations and approved drafts with provenance export.",
    "praxisforge-ai": "Three-role agent work with durable recovery, exact human approval, source-backed commitments and internal receipts.",
    "agentic-environment": "Custom Claude Code/Codex workflows, a lossless knowledge MCP and project-local handoffs with test/review/release gates.",
    "jwalker-knowledge-assistant": "Public source-linked answers from approved videos, with paid material excluded and scheduled knowledge refresh.",
    "ftm-sms-followup": "Form routing, complete booking confirmations and consent-aware follow-ups connected through n8n, Sheets and Twilio.",
    "ftm-seo-automation": "Validated AIOSEO updates through asynchronous jobs, with separate worker health and recovery checks.",
    "regenai-shopify": "A support studio with grounded context, persistent memory, image understanding and versioned human approval.",
    voicebridge:
      "A live Retell web call booked a visit and completed calendar and CRM jobs; 258 backend checks pass.",
    "mediconnect-v3":
      "Deployed public website and CMS with every original article preserved; 676 unit and 77 browser tests passed.",
    equipcert:
      "Tenant-aware inspections with photo evidence, signatures, corrective actions and audit records.",
    fleetwright:
      "Approved MCP workflows, durable crawling and a local AI agent; 289 tests pass and all 146 deployed artifacts match.",
    "yuktha-wellness":
      "Hybrid retrieval, reranking and grounding checks with an emergency gate before generation.",
    chronos:
      "A WooCommerce storefront with a bounded AI guide (9/9 held-out tasks), Stripe test checkout and tested rollback.",
    vitalprobe:
      "Healthcare test scenarios, regression comparisons and inspectable reports for REST and MCP assistants.",
    "ftm-social-media":
      "Client selection, revisions and internal approval connected to controlled campaign delivery.",
  } as Record<string, string>,
  // Pinned to the front of the Work grid in this order; the rest keep their list order.
  spotlight: {
    order: ["ftm-sms-followup", "voicebridge", "fleetwright", "mediconnect-v3", "yuktha-wellness"] as readonly string[],
    glow: ["ftm-sms-followup", "mediconnect-v3", "yuktha-wellness"] as readonly string[],
  },
  identity: portfolioConfig.personal,
  // Square crops of CV/profile/contra/assets/portrait.jpg (same photo as the favicon).
  portrait: { small: "/zahidul-portrait-192.webp", large: "/zahidul-portrait-384.webp" },
  agency: { label: "Founder & Lead Engineer of MehZ Solution", href: "https://mehzsolution.zahidul-islam.com" },
  socials: portfolioConfig.socials,
  navigation: [
    { label: "Reviews", href: "#testimonials" },
    { label: "Work", href: "#projects" },
    { label: "Expertise", href: "#skills" },
    { label: "Approach", href: "#process" },
    { label: "About", href: "#about" },
  ],
  hero: {
    eyebrow: "ZAHIDUL ISLAM / INDEPENDENT ENGINEER",
    lines: ["AI systems.", "Useful software.", "Built together."],
    description:
      "I build AI assistants and automate business workflows: source-grounded answers, lead follow-up and content approvals. Your existing tools stay connected through APIs, n8n and custom Python services.",
    primary: "Discuss your project",
    secondary: "Explore my work",
    availability: "Open to projects",
    image: "/studio/engineering-core.webp",
    video: "/studio/engineering-core.mp4",
    artifactLabel: "THE ENGINEERING CORE",
    artifactCaption: "An exploration of connected intelligence",
    tags: ["AI SYSTEMS", "CLOUD ARCHITECTURE", "FULL STACK", "AUTOMATION"],
  },
  labels: {
    heroProof: "CLIENT FEEDBACK / UPWORK",
    reviewEyebrow: "01 / CLIENT REVIEWS",
    reviewTitle: "Good work.\nIn their words.",
    reviewIntro: "Feedback from AI, automation and WordPress engagements.",
    reviewProfile: "View my Upwork profile",
    reviewFull: "Read full review",
    reviewAuthor: "Upwork client",
    reviewMore: "Read client reviews",
    buildLabel: "INSIDE THE BUILD",
    deliveryLabel: "DELIVERY STATUS",
    principlesLabel: "WHAT YOU CAN EXPECT",
    backgroundLabel: "MY BACKGROUND",
    backgroundTitle: "Patient care.\nSystems care.",
    backgroundText: "Physiotherapy technologist → software & AI engineer",
    imageUnavailable:
      "Image unavailable · project details are still available",
    skip: "Skip to content",
    menu: "Open navigation",
    closeMenu: "Close navigation",
    resume: "Résumé",
    talk: "Let’s talk",
    identityRole: "AI AUTOMATION ENGINEER",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    home: "home",
    formFunction: "FORM / FUNCTION",
    intelligence: "INTELLIGENCE",
    connectedSystems: "CONNECTED SYSTEMS",
    scrollCue: "SCROLL TO EXPLORE",
    filterProjects: "Filter projects",
    projectsCount: "PROJECTS",
    processAria: "Engineering process",
    workflowAria: "Engineering workflow",
    workflowFile: "engineering.workflow",
    shortIllustration: "ILLUSTRATION",
    aboutCoordinate: "ENGINEER / BUILDER / EXPLORER",
    linkedin: "LinkedIn",
    github: "GitHub",
    workEyebrow: "02 / SELECTED WORK",
    workTitle: "The work behind\nthe interface.",
    workIntro:
      "Recent voice, browser and agentic engineering builds alongside paid AI and automation client work. Explore what I built, the evidence and the current delivery scope.",
    filters: [
      "All work",
      "Client work",
      "AI & Agents",
      "Cloud & Systems",
      "Web & Commerce",
    ],
    clientFilter: "Client work",
    clientLabel: "CLIENT",
    allProjects: "Explore the full project index",
    lessProjects: "Close project index",
    readProject: "Explore project",
    closeProject: "Close project",
    fullCaseStudy: "Open the full case study page",
    breadcrumbLabel: "Breadcrumb",
    breadcrumbHome: "Home",
    breadcrumbWork: "Work",
    workPageEyebrow: "SELECTED WORK / CASE STUDIES",
    workPageTitle: "Every project,\nwith its evidence.",
    workPageIntro:
      "Paid client work and my own builds. Each page covers the problem, what I built, the fixes that mattered, the verified result and the current scope.",
    previousProject: "Previous case study",
    nextProject: "Next case study",
    allWork: "All case studies",
    notFoundTitle: "This page doesn't exist.",
    notFoundBody: "The link may be old, or the project may have moved. Everything current is in the work index.",
    notFoundHome: "Go to the home page",
    projectScope: "THE ENGINEERING",
    sourceLabel: "GitHub",
    liveLabel: "Live website",
    referenceLabel: "Evidence reviewed",
    index: "PROJECT INDEX",
    expertiseEyebrow: "03 / HOW I CAN HELP",
    expertiseTitle: "AI that answers.\nAutomation that acts.",
    processEyebrow: "04 / HOW WE WORK TOGETHER",
    processTitle: "An idea is the start.\nEvidence is the finish.",
    processIntro:
      "A deliberate engineering loop: understand the problem, build the smallest useful system, and verify what actually works.",
    aboutEyebrow: "05 / THE PERSON BEHIND THE WORK",
    aboutTitle: "I started with people.\nThen built the systems.",
    aboutBody:
      "Before software, I worked as a physiotherapy technologist. That experience shapes how I approach engineering: understand the person using the system, the workflow around them and what happens when something goes wrong.",
    aboutSecond:
      "I build AI systems across the interface, backend and cloud. VoiceBridge, Fleetwright and RegenAI show my recent work; custom Claude Code/Codex workflows support the engineering process. Full-stack, cloud, WordPress and Shopify remain part of what I deliver, with clear acceptance checks and documentation.",
    contactEyebrow: "HAVE A PROBLEM WORTH SOLVING?",
    contactChannelsLabel: "Contact and professional profiles",
    socialEyebrow: "FOLLOW THE WORK",
    socialIntro: "Build videos, project walkthroughs and engineering notes.",
    socialLabel: "Social media profiles",
    contactTitle: "Let’s build\nwhat’s next.",
    contactBody:
      "A new product, a complex integration, or an AI workflow that needs better engineering. Let’s talk.",
    contactAction: "Start a conversation",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "Couldn’t copy. Select the email in the Email card.",
    footerNote: "Thoughtfully designed. Carefully engineered.",
    backTop: "Back to top",
    pause: "Pause motion",
    play: "Play motion",
    illustration: "WORKFLOW ILLUSTRATION",
    spotlightLabel: "SPOTLIGHT",
    imageLabels: {
      illustration: "ILLUSTRATION",
      reference: "TECHNICAL REFERENCE",
    },
    technologies: "BUILT WITH",
    allCount: "projects in the index",
    projectStatus: "CURRENT SCOPE",
    engagement: "WHO IT'S FOR",
    problemsFixed: "BEFORE → AFTER",
    problemsIntro: "Real problems from this build, what I changed and the verified result.",
    caseLabel: "CASE",
    problem: "Before",
    fix: "How I fixed it",
    result: "After",
  },
  expertise: [
    {
      icon: "brain",
      title: "Grounded AI assistants.",
      text: "Grounded retrieval, agent workflows, evaluation harnesses and the controls around generation.",
      tags: [
        "RAG & hybrid search",
        "MCP & agent tooling",
        "Evaluation & guardrails",
      ],
    },
    {
      icon: "layers",
      title: "Business workflow automation.",
      text: "n8n integrations, browser workflows, lead follow-up and content approvals. Durable jobs and explicit failure states keep the operational work inspectable.",
      tags: ["n8n & webhooks", "Twilio & form integrations", "Human approval workflows"],
    },
    {
      icon: "network",
      title: "Agentic software engineering.",
      text: "Claude Code and Codex workflows with custom MCP, searchable project context, reusable skills and review gates. Full-stack, cloud and commerce engineering connect the system from interface to deployment.",
      tags: [
        "Claude Code & Codex",
        "Custom MCP & project knowledge",
        "Full-stack, cloud & commerce",
      ],
    },
  ],
  process: [
    {
      title: "Understand",
      subtitle: "Start with the real problem.",
      description:
        "Map the user journey, inspect the existing system and separate assumptions from evidence. Define what success must look like before writing the solution.",
      lines: ["context.read()", "constraints.define()", "acceptance.write()"],
      output: "A clear problem. Observable criteria.",
    },
    {
      title: "Build",
      subtitle: "Give every layer a purpose.",
      description:
        "Keep configuration, content and control flow separate. Build a small working path, then extend it with explicit boundaries and useful failure states.",
      lines: [
        "architecture.outline()",
        "configuration.validate()",
        "implementation.iterate()",
      ],
      output: "A working system you can inspect.",
    },
    {
      title: "Verify",
      subtitle: "Exercise the actual behavior.",
      description:
        "Run the checks, use the real interface and test failure paths. Keep measured outcomes separate from architectural goals and unverified assumptions.",
      lines: ["tests.run()", "behavior.exercise()", "evidence.review()"],
      output: "Evidence with its limits made clear.",
    },
    {
      title: "Deliver",
      subtitle: "Make the next change easier.",
      description:
        "Document the decisions, preserve recovery paths and verify an authorized release. Hand over a system that another engineer can understand and continue.",
      lines: ["decisions.record()", "release.verify()", "handoff.prepare()"],
      output: "A maintainable handoff.",
    },
  ],
  visual: {
    network: {
      title: "Grounded by design",
      center: "RETRIEVAL",
      nodes: ["Question", "Context", "Evidence", "Response"],
      footer: "RETRIEVE → RERANK → GROUND",
    },
    terminal: {
      title: "vitalprobe / evidence",
      lines: [
        "load test scenarios",
        "exercise target behavior",
        "evaluate observed responses",
        "compare with baseline",
      ],
      footer: "TEST DATA. INSPECTABLE RESULTS.",
    },
    pipeline: {
      title: "From brief to approval",
      stages: ["Approved media", "Generate", "Client review", "Deliver"],
      footer: "HUMANS OWN THE FINAL DECISION.",
    },
  },
  motion: {
    pointerTravel: 12,
    rotateDegrees: 2,
    revealDuration: 0.6,
    revealDistance: 24,
  },
  marquee: {
    label: "Client companies and engineering expertise",
    eyebrow: "CLIENTS I'VE WORKED WITH / WHAT I BUILD",
    clients: [
      "FTM",
      "Yuktha Wellness",
      "JWALKER Marketing",
      "Webways",
      "AbcKer Technology",
      "RGP",
    ],
    pause: "Pause motion",
    resume: "Resume motion",
    durationSeconds: 42,
  },
} as const;
