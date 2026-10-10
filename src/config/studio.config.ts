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
    "summary": "One workflow system. Explicit routing for every site.",
    "status": "Operational messaging workflow",
    "detail": "Form intake, welcome messages, scheduled follow-ups and broadcasts are separated into distinct workflow responsibilities. Controlled configuration owns site routing, sender selection and message content. Delivery depends on authorized campaigns, current consent and operational checks; automation does not itself establish permission to contact.",
    "stack": [
      "n8n",
      "Twilio",
      "Configuration"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Operating model and workflow overview, July 2026"
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
    "featured": true,
    "evidence": "September 4 recovery records · October 10 public case study"
  },
  {
    "id": "voicebridge",
    "name": "VoiceBridge",
    "category": "AI & Agents",
    "domain": "VOICE & BUSINESS AUTOMATION",
    "summary": "A conversation connected to a dependable business workflow.",
    "status": "Deployed platform · voice acceptance pending",
    "detail": "A voice-agent business platform with an authenticated operator console, grounded knowledge and provider-authenticated tools. Booking, rescheduling and cancellation use explicit confirmation, timezone checks, idempotency and revision control. A leased worker handles calendar, CRM and follow-ups with durable retries and explicit uncertain-delivery states. The October 8 overview records 150 backend/tooling tests, 78 frontend tests and 21 public browser routes. Real voice/audio acceptance and external calendar, CRM and email receipts remain integration gates; million-user capacity is a roadmap target.",
    "stack": [
      "Python",
      "PostgreSQL",
      "Retell / Vapi",
      "MCP"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Comprehensive technical overview, October 8, 2026"
  },
  {
    "id": "regenai-shopify",
    "name": "RegenAI",
    "category": "Web & Commerce",
    "domain": "HEADLESS WELLNESS COMMERCE",
    "summary": "Shopify commerce meets an AI support studio with human review.",
    "status": "Live concept storefront · build in progress",
    "detail": "A recovery-commerce portfolio project with a Shopify-backed Hydrogen storefront and a Python Support Studio. Six concept products retain the approved 3D design. The assistant combines encrypted saved memory, image understanding, allowlisted web retrieval, durable jobs and versioned human approval. Shopify and Gmail account reads, token renewal and restart persistence were verified; bounded AI checks exercised Spanish preference recall and an image-based support recommendation. Financial execution and sent email replies remain disabled. It is a build in progress: test checkout, account sign-in, merchant Function activation and full provider-action acceptance remain due. Earlier storefront evidence records 137 passing tests, one skip and 145 matching release files.",
    "stack": [
      "Hydrogen",
      "Python",
      "Shopify",
      "AI support"
    ],
    "visual": "network",
    "featured": true,
    "evidence": "Client review edition and support assistant, October 8, 2026"
  },
  {
    "id": "vitalprobe",
    "name": "VitalProbe",
    "category": "AI & Agents",
    "domain": "AI SAFETY & EVALUATION",
    "summary": "Make AI behavior inspectable.",
    "status": "Local product · pre-release distribution",
    "detail": "A local-first safety and evidence-testing product for healthcare and wellness assistants. Synthetic patient scenarios exercise REST and MCP targets; deterministic checks and optional semantic judges produce JSON and self-contained HTML reports. Baseline comparison, local history and multi-turn simulation help reviewers investigate behavior. Only fictional patients are used; reports do not certify clinical safety or regulatory compliance.",
    "stack": [
      "Python",
      "FastAPI",
      "MCP"
    ],
    "visual": "terminal",
    "featured": true,
    "evidence": "Executive overview and product boundary, July 2026"
  },
  {
    "id": "agentic-environment",
    "name": "Agentic Development Environment",
    "category": "AI & Agents",
    "domain": "ENGINEERING WORKFLOWS",
    "summary": "Continuity, knowledge and quality gates for AI-assisted engineering.",
    "status": "Working engineering environment",
    "detail": "An integrated coding environment with deliberate subscription/provider routing, project-local handoff checkpoints, a lossless knowledge MCP and reusable security/review workflows. The contribution is integration and operational discipline, not authorship of the underlying models or coding tools. No productivity multiplier is asserted.",
    "stack": [
      "Python",
      "MCP",
      "SQLite"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Engineering workflow overview, September 7, 2026"
  },
  {
    "id": "fleetwright",
    "name": "Fleetwright",
    "category": "Cloud & Systems",
    "domain": "BROWSER FLEET ORCHESTRATION",
    "summary": "Duplicate-resistant booking workflows, tested against a fictitious load board.",
    "status": "Live demo · in active development",
    "detail": "An independent control plane for logged-in Playwright browser sessions. PostgreSQL claim fencing, tenant isolation, an outbox and a reconciler coordinate actions and handle uncertain outcomes. Concurrency and crash recovery were tested against a fictitious load board built in the same repository. The public console is a capped live demonstration in active development. Metrics and alerting, the crawler, the AI agent and larger scale proof runs are still planned. No real third-party booking service or universal exactly-once guarantee is claimed.",
    "stack": [
      "Python",
      "Playwright",
      "Postgres"
    ],
    "image": "/studio/fleetwright.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Technical overview, evidence checked October 6, 2026"
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
    "summary": "Separate model reasoning from execution authority.",
    "status": "In development · synthetic verification",
    "detail": "A local control plane that mediates scope, policy, task state, isolation and release evidence. Models propose work; deterministic code controls privileged transitions. Phase 1 remains incomplete, with synthetic verification only: the published source passed 257 tests (one expected skip) on synthetic data and mocked providers. Live client onboarding and real provider transmission are outside its verified operating boundary.",
    "stack": [
      "Python",
      "Typed artifacts",
      "Policy broker"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Open-source public edition, aligned with GitHub main a9f45d6"
  },
  {
    "id": "equipcert",
    "name": "EquipCert AI",
    "category": "Web & Commerce",
    "domain": "INSPECTION SOFTWARE",
    "summary": "From field inspection to traceable evidence.",
    "status": "Deployed application",
    "detail": "A tenant-aware equipment inspection application: technicians capture equipment condition, photos, location and signatures; managers review inspections, corrective actions and schedules. Database-driven audit records, distributed rate limiting and report provenance strengthen accountability. On October 1, 2026 all four CI jobs passed; 104 of 104 web unit tests, 429 native client tests and 28 of 28 tenant-isolation and audit tests against the hosted database also passed. Capacity models are targets, not measured million-user throughput.",
    "stack": [
      "Next.js",
      "Flutter",
      "Supabase"
    ],
    "image": "/studio/equipcert.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Early-October edition, verified October 1, 2026"
  },
  {
    "id": "mediconnect-v3",
    "name": "MediConnect",
    "category": "Cloud & Systems",
    "domain": "CONNECTED HEALTHCARE",
    "summary": "Connecting the entire care journey.",
    "status": "Website deployed · platform in development",
    "detail": "A telehealth and connected-care platform spanning patients, practitioners, pharmacy workflows and clinic operations. Regional routing, identity, interoperability and service boundaries support the broader architecture. The connected-care website is deployed, with all 37 release files matching across local, deployed and archive copies. Full clinical acceptance, infrastructure capacity and complete native-mobile readiness remain separate work.",
    "stack": [
      "React",
      "Multi-cloud",
      "FHIR"
    ],
    "image": "/studio/mediconnect.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Client and developer edition, September 28, 2026"
  },
  {
    "id": "email-finder",
    "name": "EmailFinder",
    "category": "Cloud & Systems",
    "domain": "RESEARCH TOOLING",
    "summary": "Explainable discovery from public web and DNS signals.",
    "status": "Local research tool",
    "detail": "Four CLI commands organize public address candidates, DNS configuration and explainable heuristic scoring. The tool deliberately avoids SMTP mailbox probing. Results are research leads, not proof of mailbox ownership, deliverability or consent. Four deterministic scripts passed in the documented review; external integrations were not exercised in that pass.",
    "stack": [
      "Python",
      "HTTP",
      "DNS"
    ],
    "visual": "network",
    "featured": false,
    "evidence": "Source-reconciled scope, July 2026"
  },
  {
    "id": "chronos",
    "name": "Chronos",
    "category": "Web & Commerce",
    "domain": "HEADLESS COMMERCE",
    "summary": "Precision design. A working commerce engine.",
    "status": "Connected CMS · test checkout",
    "detail": "A cinematic watch storefront backed by authoritative WordPress and WooCommerce records. Visitors can browse, search, filter, manage a bag, sign in and use clearly labelled test checkout. Publication checks protect dynamic routes. The latest release recorded 23 connected-browser checks and a hosted Stripe test payment confirmed in WooCommerce. Real purchases and commercial transaction capacity are not claimed. Open source since September 24, 2026.",
    "stack": [
      "React",
      "WordPress",
      "WooCommerce"
    ],
    "image": "/studio/chronos.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Public technical edition, September 15, 2026"
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
    "summary": "An expressive publication, editable in native WordPress.",
    "status": "Deployed editorial demonstration",
    "detail": "A medical-technology editorial demonstration with articles, a searchable library, local reading lists and six educational browser tools. The visual design is editable through native Elementor Free layouts. The September release preserved 63 original public routes, passed 13 browser scenarios and matched all 141 release files by SHA256. It is not a clinical provider or validated medical product; unapproved demo articles remain excluded from indexing.",
    "stack": [
      "WordPress",
      "Elementor",
      "Browser tools"
    ],
    "image": "/studio/healthcode.webp",
    "visual": "capture",
    "featured": false,
    "evidence": "Release verified September 14, documentation updated September 24, 2026"
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
    "jwalker-knowledge-assistant": "Public source-linked answers from approved videos, with paid material excluded and scheduled knowledge refresh.",
    "ftm-sms-followup": "Form routing, welcome messages and scheduled follow-ups connected through n8n, Sheets and Twilio.",
    "ftm-seo-automation": "Validated AIOSEO updates through asynchronous jobs, with separate worker health and recovery checks.",
    "regenai-shopify": "A support studio with grounded context, persistent memory and versioned human approval; financial and email execution disabled.",
    voicebridge:
      "Confirmed bookings, grounded knowledge and durable follow-ups, with provider actions bounded by explicit acceptance gates.",
    "mediconnect-v3":
      "Patient, practitioner and pharmacy journeys connected through a shared platform architecture.",
    equipcert:
      "Tenant-aware inspections with photo evidence, signatures, corrective actions and audit records.",
    fleetwright:
      "Single claims enforced by the database, fencing tokens and a reconciler, audited against the board's own log.",
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
      "Client AI assistants and automation workflows first, followed by independent builds and demonstrations. Explore the problem, implementation and verified delivery status.",
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
    sourceLabel: "Explore the source",
    demoLabel: "Visit project",
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
      "Today I focus on AI assistants and business automation. I also build the dashboards, APIs and deployment workflows they need. You work directly with me, with clear updates, acceptance checks and documentation.",
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
      text: "Lead routing, follow-ups and content workflows that connect your tools and keep approval with your team.",
      tags: ["n8n & webhooks", "Twilio & form integrations", "Human approval workflows"],
    },
    {
      icon: "network",
      title: "Agent tools & integrations.",
      text: "Custom APIs, MCP tools and durable background jobs that connect AI to business systems with scoped access and recoverable failures.",
      tags: [
        "Python & FastAPI",
        "MCP & API integration",
        "Retries & delivery evidence",
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
