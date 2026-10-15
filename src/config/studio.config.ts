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
  visual: z
    .enum(["capture", "network", "terminal", "pipeline"])
    .default("network"),
  featured: z.boolean().default(false),
  evidence: z.string(),
});

export const studioProjects = z.array(projectSchema).parse([
  {
    "id": "voicebridge",
    "name": "VoiceBridge",
    "category": "AI & Agents",
    "domain": "VOICE & BUSINESS AUTOMATION",
    "summary": "Authenticated booking, owner recovery and bounded records/transcript downloads with durable audits.",
    "status": "Deployed owner tools and exports · voice acceptance pending",
    "detail": "A deployed single-business voice-agent platform with owner sign-in, grounded knowledge, scoped Retell/Vapi and MCP tools, explicit booking confirmation and durable worker recovery. The October 15 release adds exact-call terminal recovery, sanitized MCP denial audits and authenticated, tenant-scoped records and ended-call transcript downloads with CSRF checks, size limits and redaction tombstones. Recorded gates passed 252 backend checks, 108 frontend tests and 21 public browser routes. Two live owner exports produced durable audits without changing business records; nonempty, redacted and foreign-tenant cases were verified locally. Earlier bounded Calendar/CRM/Gmail receipts remain dated evidence. Real Retell/Vapi speak-and-listen, provider-data deletion and backup replay remain open. Operator API wiring remains incomplete; voice creation and general external email stay disabled. Scale and availability objectives remain unmeasured.",
    "stack": [
      "Python",
      "PostgreSQL",
      "Retell / Vapi",
      "MCP"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Source review October 15, 2026; dated verification and open gates stated above"
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
    "status": "Working CLI/MCP tooling · dated verification",
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
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "regenai-shopify",
    "name": "RegenAI / Shopify Support Studio",
    "category": "Web & Commerce",
    "domain": "HEADLESS WELLNESS COMMERCE",
    "summary": "Shopify-backed Hydrogen concepts and an assistant with versioned human-reviewed decisions.",
    "status": "Deployed storefront and support · ordering closed",
    "detail": "A Shopify-backed Hydrogen storefront with six concept products and a deployed Python Support Studio. Contextual chat, encrypted preferences, image understanding, bounded web retrieval and versioned human approvals support ticket recommendations. The October 8 release recorded 86 Python tests, 184 JavaScript tests with one existing skip, six workflow regressions and 17 public HTTP checks. October 14 read-only probes found storefront, studio and cart responding; they did not renew Shopify/Gmail grants or replay a full journey. Ordering, customer sign-in, external refunds and outbound email remain closed. Real action receipts and client handoff remain open.",
    "stack": [
      "Hydrogen",
      "Python",
      "Shopify",
      "AI support"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "yuktha-wellness",
    "name": "Yuktha Wellness",
    "category": "AI & Agents",
    "domain": "GROUNDED HEALTH AI",
    "summary": "A better answer starts with better retrieval.",
    "status": "Production assistant · human judgment required",
    "detail": "Paid client engineering for a multilingual health assistant: hybrid dense and keyword retrieval, cross-encoder reranking, emergency/crisis handling, structured grounding checks, SSE streaming and Redis caching. Web chat and controlled WhatsApp routing connect to the platform. Later work separates user-authored memory from generated replies and improves multilingual retrieval and image-only handling. The August release record includes 28 passing backend test files and a nine-check namespace migration. The recorded full latency target remains unmet; clinical content and final tone require human review. Historical deployment drift remains documented, so these records do not establish current source-to-live parity.",
    "stack": [
      "Node.js",
      "Hybrid RAG",
      "Pinecone"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "August release records · October 10 public case study"
  },
  {
    "id": "ftm-social-media",
    "name": "Campaign operations",
    "category": "AI & Agents",
    "domain": "CLIENT AUTOMATION",
    "summary": "Creative automation with a human approval loop.",
    "status": "Production workflow",
    "detail": "A media-first campaign workflow with approved asset intake, background copy generation, client media/date selection, revisions, internal approval and controlled asset delivery. The August release included real client dashboard/calendar approval checks and deployment parity. Approved deliverables are downloaded for manual publishing; direct social-network publishing is not the verified path.",
    "stack": [
      "n8n",
      "Python",
      "Client portals"
    ],
    "visual": "pipeline",
    "featured": true,
    "evidence": "Current platform snapshot, August 11, 2026"
  },
  {
    "id": "jwalker-knowledge-assistant",
    "name": "Creator Knowledge Assistant",
    "category": "AI & Agents",
    "domain": "PUBLIC KNOWLEDGE RAG",
    "summary": "Turn a creator’s public videos into source-linked answers.",
    "status": "Public WordPress assistant · deployed September 29",
    "detail": "A public WordPress knowledge assistant grounded in approved YouTube material. FastAPI combines SQLite FTS5, local embeddings and rank fusion without a hosted vector database. Relevance checks and source citations constrain answers; paid membership and course material are excluded from the public release. Manifest checks, atomic knowledge updates, daily refresh and scheduled backups support operations. The September 29 go-live record includes a real grounded answer with five sources, a public homepage check and execution of the actual scheduled backup command. The earlier members-only brief is historical.",
    "stack": [
      "FastAPI",
      "SQLite FTS5",
      "WordPress"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "September 29 release records · October 10 public case study"
  },
  {
    "id": "ftm-sms-followup",
    "name": "Multi-Site Follow-up",
    "category": "AI & Agents",
    "domain": "MESSAGING OPERATIONS",
    "summary": "Multi-site lead routing with provider-acceptance checks and consent-aware follow-ups.",
    "status": "Client automation · October repair evidence",
    "detail": "Client automation connecting JotForm, n8n, Google Sheets and Twilio for site-specific lead intake, welcome messages and scheduled follow-ups. October 11 repairs require matched provider acceptance before updating sent-state and preserve prior stage markers; explicit opt-outs revoke marketing consent, and all-failed batches continue to the next site. A credential-free six-request behavioral flow verified exactly three updates, and all three workflows matched local structure. Provider acceptance is distinct from delivery; no new paid message was sent during those repairs. The older Google Doc predates these local release records.",
    "stack": [
      "n8n",
      "Twilio",
      "Configuration"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
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
    "evidence": "September 4 recovery records · October 10 public case study"
  },
  {
    "id": "adrevora-ai",
    "name": "AdRevora AI",
    "category": "AI & Agents",
    "domain": "ADVERTISING & REVENUE INTELLIGENCE",
    "summary": "Reconciled revenue, role metrics, daily reports and human-reviewed private CPU AI in a deployed workspace.",
    "status": "Deployed revenue workspace · company activation pending",
    "detail": "A deployed advertising-to-revenue workspace with mandatory MFA, tenant membership, a persistent financial ledger, first/last-touch attribution and private CPU inference. The October 14 release adds reconciled campaign/unknown/total CSV rows, CEO/marketing/operations metrics, immutable creative revision history, conservative source freshness, bounded history and stored daily UTC reports. Recorded verification passed 120 application tests, 56 deployment tests, 17 HTTPS workflow checks and 23 scoped accessibility scans; all 68 release artifacts matched and all 20 database table hashes were preserved across the final upgrade. Encrypted isolated recovery matched eight key tables. Company-account activation, campaign writes, commercial pilot reconciliation and distributed capacity remain open. Reference revenue is illustrative. Full manual accessibility acceptance remains open.",
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
    "summary": "Fictional healthcare AI scenarios, inspectable evidence and regression comparison.",
    "status": "Published product website · local audit engine",
    "detail": "A Python healthcare-AI testing engine and published React product website. Fictional scenarios exercise REST/MCP targets with deterministic checks, optional semantic judging, multi-turn simulation, HTML/JSON dossiers and baseline comparison. Recorded engineering gates include 190 Python tests, 39 frontend tests and a 226-check local verifier. The completed 1:51 evidence film demonstrates a deliberately weak target across 25 fictional cases: three PASS, 22 FAIL and zero ERROR. New audits execute locally; the public website has no hosted audit, upload or payment service. Human clinical/legal calibration remains open, and the film’s social publication is not claimed.",
    "stack": [
      "Python",
      "FastAPI",
      "MCP"
    ],
    "visual": "terminal",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "rag-production-stack",
    "name": "RAG Production Stack",
    "category": "Cloud & Systems",
    "domain": "AI INFRASTRUCTURE",
    "summary": "Retrieval infrastructure with explicit operational boundaries.",
    "status": "Source-reconciled infrastructure",
    "detail": "Containerized retrieval infrastructure with nine core services and fourteen profile-activated services, authentication, network isolation, metrics/logs/traces and encrypted-backup workflows. Published as MIT-licensed open source, with hosted Gitleaks, Semgrep and Bandit checks passing. The documentation establishes configuration and source intent; it does not claim a currently healthy deployment or compliance certification.",
    "stack": [
      "Docker",
      "LightRAG",
      "Observability"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Open-source public edition, September 24, 2026"
  },
  {
    "id": "secure-hybrid-ai-hub",
    "name": "Secure Hybrid AI Hub",
    "category": "AI & Agents",
    "domain": "AGENT GOVERNANCE",
    "summary": "A local policy broker for scoped AI work, typed artifacts and verification evidence.",
    "status": "Experimental open source · synthetic acceptance open",
    "detail": "An experimental Python broker and CLI for governed Codex, Claude Code, VS Code and local Ollama workflows. Deterministic controls mediate scope, policy, artifacts and privileged transitions while models propose work. The September public snapshot recorded 257 passing tests with one expected private-dossier skip and Python 3.11–3.13 CI/security checks. The October review did not rerun those gates. Phase 1 closure, authority enforcement and synthetic end-to-end acceptance remain incomplete; real-client operation, browser/API delivery and distributed capacity retain separate gates.",
    "stack": [
      "Python",
      "Typed artifacts",
      "Policy broker"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
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
    "status": "Website and CMS deployed · platform in development",
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
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "chronos",
    "name": "Chronos",
    "category": "Web & Commerce",
    "domain": "HEADLESS COMMERCE",
    "summary": "Connected WordPress commerce, verified test checkout and maintainable storefront operations.",
    "status": "Deployed commerce demo · test checkout only",
    "detail": "A React/TypeScript storefront connected to WordPress and WooCommerce for five photographed products, editorial content, customer accounts, stock and orders. Hosted Stripe test checkout uses server-resolved prices, ownership checks, idempotency and reconciliation. The October 12 release recorded 222 browser checks, 107 navigation checks, 33 HTTP responses and 99 frontend plus two backend file matches. A separate dependency-security repair merged on main with zero known findings in both full npm audits; the publication PR remains a draft requiring reconciliation before promotion. Live payments and physical fulfilment are outside the demonstration.",
    "stack": [
      "React",
      "WordPress",
      "WooCommerce"
    ],
    "image": "/studio/chronos.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Source review October 14, 2026; verification dates and open gates stated above"
  },
  {
    "id": "kindred-grove",
    "name": "Kindred Grove",
    "category": "Web & Commerce",
    "domain": "SHOPIFY STOREFRONT",
    "summary": "A cinematic storefront with careful cart and consent engineering.",
    "status": "Published Shopify storefront · password protected",
    "detail": "A premium pantry storefront concept built with Shopify Liquid, CSS and vanilla JavaScript Web Components. The published cinematic design includes a cart drawer, pantry quiz, consent controls and seven native content pages. The October 8 overview records 55 browser passes, three catalog-dependent skips and matching hashes for all 154 shipping files. Shopify development-store policy requires a shared visitor password and prevents real transactions or commercial transfer. Source is published on a review branch; approving review for main remains outstanding.",
    "stack": [
      "Shopify",
      "Liquid",
      "Web Components"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Project status document, October 8, 2026"
  },
  {
    "id": "healthcode-analysis",
    "name": "HealthCode Analysis",
    "category": "Web & Commerce",
    "domain": "NATIVE CMS & EDITORIAL",
    "summary": "Native Elementor publishing, browser-only reader tools and documented operating boundaries.",
    "status": "Native WordPress demo · quality backlog documented",
    "detail": "A deployed WordPress/Elementor editorial demonstration with 66 native layouts, a device-local library/search and six educational tools. The September release recorded browser/security checks, administrator editing, an independent restore and 141-file parity. The later documentation review recorded 316 passing offline checks, one failing retained AskMe test and two unrun runtime-dependent suites. October 14 confirmed an HTTP 200 response and the known duplicate HSTS header. Visual, screen-reader, physical-device and recurring restore acceptance remain open; clinical validity, full compliance and million-reader capacity are not claimed.",
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
    "domain": "INTERACTIVE HEALTHCARE DEMO",
    "summary": "Explore a fictional patient journey without real health data.",
    "status": "Synthetic portfolio demonstration",
    "detail": "A fictional dental-practice presentation with an interactive synthetic patient journey, consent examples, access-denial states and a sample FHIR-shaped export. State lives in browser memory. Real intake, clinical authentication, payments, messaging and the historical clinical endpoints are disabled. It demonstrates interface behavior and engineering boundaries, not an operating clinical portal. Source and documentation were published on GitHub with all 255 file hashes matching.",
    "stack": [
      "Responsive UI",
      "Bilingual",
      "Privacy flows"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Synthetic portfolio release and GitHub publication, September 24, 2026"
  },
  {
    "id": "wordpress-incident-response",
    "name": "Incident Response & Recovery",
    "category": "Cloud & Systems",
    "domain": "SECURITY ENGINEERING",
    "summary": "Trace persistence. Contain carefully. Verify recovery.",
    "status": "Documented containment engagement",
    "detail": "A backup-first response to a multi-layer WordPress compromise. Process inspection and writer tracing expanded the investigation beyond known filenames. Repeated scans found zero known indicators after containment, and 21 checked sites returned successful public responses. Successful containment is distinct from rebuilding a historically compromised environment from a trusted image.",
    "stack": [
      "Linux",
      "WordPress",
      "Forensics"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Anonymized technical case study, August 26, 2026"
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
    "agentic-environment": "Custom Claude Code/Codex workflows, a lossless knowledge MCP and project-local handoffs with test/review/release gates.",
    "jwalker-knowledge-assistant": "Public source-linked answers from approved videos, with paid material excluded and scheduled knowledge refresh.",
    "ftm-sms-followup": "Form routing, welcome messages and scheduled follow-ups connected through n8n, Sheets and Twilio.",
    "ftm-seo-automation": "Validated AIOSEO updates through asynchronous jobs, with separate worker health and recovery checks.",
    "regenai-shopify": "A support studio with grounded context, persistent memory and versioned human approval; financial and email execution disabled.",
    voicebridge:
      "Bounded Calendar/CRM booking and Gmail confirmation; 200 backend and 97 frontend tests recorded. Real audio acceptance remains open.",
    "mediconnect-v3":
      "Deployed public website and CMS with preserved original articles; remaining platform phases and clinical acceptance stay open.",
    equipcert:
      "Tenant-aware inspections with photo evidence, signatures, corrective actions and audit records.",
    fleetwright:
      "Approved MCP workflows, durable crawling and a local AI agent; 274 passes/six expected skips and encrypted off-host restore evidence.",
    "yuktha-wellness":
      "Hybrid retrieval, reranking and grounding checks with an emergency gate before generation.",
    chronos:
      "A custom storefront connected to WordPress and WooCommerce, with a tested checkout journey.",
    vitalprobe:
      "Synthetic scenarios, regression comparisons and inspectable reports for REST and MCP assistants.",
    "ftm-social-media":
      "Client selection, revisions and internal approval connected to controlled campaign delivery.",
  } as Record<string, string>,
  identity: portfolioConfig.personal,
  socials: portfolioConfig.socials,
  navigation: [
    { label: "Work", href: "#projects" },
    { label: "Reviews", href: "#testimonials" },
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
    reviewEyebrow: "02 / CLIENT REVIEWS",
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
    screenshotUnavailable:
      "Screenshot unavailable · project details are still available",
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
    workflowAria: "Illustrative engineering workflow",
    workflowFile: "engineering.workflow",
    shortIllustration: "ILLUSTRATION",
    aboutCoordinate: "ENGINEER / BUILDER / EXPLORER",
    linkedin: "LinkedIn",
    github: "GitHub",
    workEyebrow: "01 / SELECTED WORK",
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
    projectScope: "THE ENGINEERING",
    sourceLabel: "GitHub",
    demoLabel: "Live website",
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
    technologies: "BUILT WITH",
    allCount: "projects in the index",
    projectStatus: "CURRENT SCOPE",
    engagement: "WHO IT'S FOR",
    problemsFixed: "PROBLEMS I SOLVED",
    problem: "Problem",
    fix: "Fix",
    result: "Result",
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
        "load synthetic scenarios",
        "exercise target behavior",
        "evaluate observed responses",
        "compare with baseline",
      ],
      footer: "SYNTHETIC DATA. INSPECTABLE RESULTS.",
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
} as const;
