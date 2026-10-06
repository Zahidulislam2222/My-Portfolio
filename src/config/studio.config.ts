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
    id: "mediconnect-v3",
    name: "MediConnect",
    category: "Cloud & Systems",
    domain: "CONNECTED HEALTHCARE",
    featured: true,
    image: "/studio/mediconnect.webp",
    visual: "capture",
    summary: "Connecting the entire care journey.",
    status: "Website deployed · platform in development",
    stack: ["React", "Multi-cloud", "FHIR"],
    detail:
      "A telehealth and connected-care platform spanning patients, practitioners, pharmacy workflows and clinic operations. Regional routing, identity, interoperability and service boundaries support the broader architecture. The connected-care website is deployed, with all 37 release files matching across local, deployed and archive copies. Full clinical acceptance, infrastructure capacity and complete native-mobile readiness remain separate work.",
    evidence: "Client and developer edition, September 28, 2026",
  },
  {
    id: "equipcert",
    name: "EquipCert AI",
    category: "Web & Commerce",
    domain: "INSPECTION SOFTWARE",
    featured: true,
    image: "/studio/equipcert.webp",
    visual: "capture",
    summary: "From field inspection to traceable evidence.",
    status: "Deployed application",
    stack: ["Next.js", "Flutter", "Supabase"],
    detail:
      "A tenant-aware equipment inspection application: technicians capture equipment condition, photos, location and signatures; managers review inspections, corrective actions and schedules. Database-driven audit records, distributed rate limiting and report provenance strengthen accountability. On October 1, 2026 all four CI jobs passed; 104 of 104 web unit tests, 429 native client tests and 28 of 28 tenant-isolation and audit tests against the hosted database also passed. Capacity models are targets, not measured million-user throughput.",
    evidence: "Early-October edition, verified October 1, 2026",
  },
  {
    id: "fleetwright",
    name: "Fleetwright",
    category: "Cloud & Systems",
    domain: "BROWSER FLEET ORCHESTRATION",
    featured: true,
    image: "/studio/fleetwright.webp",
    visual: "capture",
    summary: "Many logged-in browsers. Every job booked exactly once.",
    status: "Live demo · in active development",
    stack: ["Python", "Playwright", "Postgres"],
    detail:
      "A control plane for fleets of logged-in Playwright browsers that watches a job feed and books each matching job exactly once, even when workers crash or race. A database-enforced claim state machine with fencing tokens, forced row-level tenant isolation and a reconciler for uncertain outcomes carry the correctness. Against a fictitious load board built in the same repository, 200 concurrent competitors over 10,000 jobs produced zero duplicate bookings, and 99 automated tests pass. The public console is live with capped demo controls. Metrics and alerting, the crawler, the AI agent and the scale runs are still planned.",
    evidence: "Technical overview, evidence checked October 6, 2026",
  },
  {
    id: "yuktha-wellness",
    name: "Yuktha Wellness",
    category: "AI & Agents",
    domain: "GROUNDED HEALTH AI",
    featured: true,
    visual: "network",
    summary: "A better answer starts with better retrieval.",
    status: "Production assistant · human judgment required",
    stack: ["Node.js", "Hybrid RAG", "Pinecone"],
    detail:
      "A multilingual health assistant combining dense retrieval, BM25 search, deduplication and cross-encoder reranking. Deterministic emergency checks precede generation; structured output and grounding checks constrain the final answer. Web chat and a controlled WhatsApp lane connect to the platform. Six knowledge domains support cross-condition retrieval. It does not replace professional clinical judgment.",
    evidence: "Executive overview and retrieval architecture, July 2026",
  },
  {
    id: "chronos",
    name: "Chronos",
    category: "Web & Commerce",
    domain: "HEADLESS COMMERCE",
    featured: true,
    image: "/studio/chronos.webp",
    visual: "capture",
    summary: "Precision design. A working commerce engine.",
    status: "Connected CMS · test checkout",
    stack: ["React", "WordPress", "WooCommerce"],
    detail:
      "A cinematic watch storefront backed by authoritative WordPress and WooCommerce records. Visitors can browse, search, filter, manage a bag, sign in and use clearly labelled test checkout. Publication checks protect dynamic routes. The latest release recorded 23 connected-browser checks and a hosted Stripe test payment confirmed in WooCommerce. Real purchases and commercial transaction capacity are not claimed. Open source since September 24, 2026.",
    evidence: "Public technical edition, September 15, 2026",
  },
  {
    id: "vitalprobe",
    name: "VitalProbe",
    category: "AI & Agents",
    domain: "AI SAFETY & EVALUATION",
    featured: true,
    visual: "terminal",
    summary: "Make AI behavior inspectable.",
    status: "Local product · pre-release distribution",
    stack: ["Python", "FastAPI", "MCP"],
    detail:
      "A local-first safety and evidence-testing product for healthcare and wellness assistants. Synthetic patient scenarios exercise REST and MCP targets; deterministic checks and optional semantic judges produce JSON and self-contained HTML reports. Baseline comparison, local history and multi-turn simulation help reviewers investigate behavior. Only fictional patients are used; reports do not certify clinical safety or regulatory compliance.",
    evidence: "Executive overview and product boundary, July 2026",
  },
  {
    id: "ftm-social-media",
    name: "Campaign operations",
    category: "AI & Agents",
    domain: "CLIENT AUTOMATION",
    featured: true,
    visual: "pipeline",
    summary: "Creative automation with a human approval loop.",
    status: "Production workflow",
    stack: ["n8n", "Python", "Client portals"],
    detail:
      "A media-first campaign workflow with approved asset intake, background copy generation, client media/date selection, revisions, internal approval and controlled asset delivery. The August release included real client dashboard/calendar approval checks and deployment parity. Approved deliverables are downloaded for manual publishing; direct social-network publishing is not the verified path.",
    evidence: "Current platform snapshot, August 11, 2026",
  },
  {
    id: "agentic-environment",
    name: "Agentic Development Environment",
    category: "AI & Agents",
    domain: "ENGINEERING WORKFLOWS",
    summary:
      "Continuity, knowledge and quality gates for AI-assisted engineering.",
    status: "Working engineering environment",
    stack: ["Python", "MCP", "SQLite"],
    detail:
      "An integrated coding environment with deliberate subscription/provider routing, project-local handoff checkpoints, a lossless knowledge MCP and reusable security/review workflows. The contribution is integration and operational discipline, not authorship of the underlying models or coding tools. No productivity multiplier is asserted.",
    evidence: "Engineering workflow overview, September 7, 2026",
  },
  {
    id: "rag-production-stack",
    name: "RAG Production Stack",
    category: "Cloud & Systems",
    domain: "AI INFRASTRUCTURE",
    summary: "Retrieval infrastructure with explicit operational boundaries.",
    status: "Source-reconciled infrastructure",
    stack: ["Docker", "LightRAG", "Observability"],
    detail:
      "Containerized retrieval infrastructure with nine core services and fourteen profile-activated services, authentication, network isolation, metrics/logs/traces and encrypted-backup workflows. Published as MIT-licensed open source, with hosted Gitleaks, Semgrep and Bandit checks passing. The documentation establishes configuration and source intent; it does not claim a currently healthy deployment or compliance certification.",
    evidence: "Open-source public edition, September 24, 2026",
  },
  {
    id: "jwalker-knowledge-assistant",
    name: "Membership Knowledge Assistant",
    category: "AI & Agents",
    domain: "MEMBERSHIP RAG",
    summary: "Answers grounded in a creator’s own knowledge.",
    status: "Locally verified · live access gated",
    stack: ["FastAPI", "SQLite FTS5", "WordPress"],
    detail:
      "A members-only retrieval assistant using hybrid search, source synchronization and signed membership authentication. A relevance gate runs before generation; missing supporting evidence produces a refusal. Editable personality remains separate from locked no-fabrication rules. Client-controlled live integrations require their own acceptance.",
    evidence: "Current scope and executive overview, July 2026",
  },
  {
    id: "healthcode-analysis",
    name: "HealthCode Analysis",
    category: "Web & Commerce",
    domain: "NATIVE CMS & EDITORIAL",
    image: "/studio/healthcode.webp",
    visual: "capture",
    summary: "An expressive publication, editable in native WordPress.",
    status: "Deployed editorial demonstration",
    stack: ["WordPress", "Elementor", "Browser tools"],
    detail:
      "A medical-technology editorial demonstration with articles, a searchable library, local reading lists and six educational browser tools. The visual design is editable through native Elementor Free layouts. The September release preserved 63 original public routes, passed 13 browser scenarios and matched all 141 release files by SHA256. It is not a clinical provider or validated medical product; unapproved demo articles remain excluded from indexing.",
    evidence: "Release verified September 14, documentation updated September 24, 2026",
  },
  {
    id: "everyday-dental-surgery",
    name: "Everyday Dental",
    category: "Web & Commerce",
    domain: "INTERACTIVE HEALTHCARE DEMO",
    summary: "Explore a fictional patient journey without real health data.",
    status: "Synthetic portfolio demonstration",
    stack: ["Responsive UI", "Bilingual", "Privacy flows"],
    detail:
      "A fictional dental-practice presentation with an interactive synthetic patient journey, consent examples, access-denial states and a sample FHIR-shaped export. State lives in browser memory. Real intake, clinical authentication, payments, messaging and the historical clinical endpoints are disabled. It demonstrates interface behavior and engineering boundaries, not an operating clinical portal. Source and documentation were published on GitHub with all 255 file hashes matching.",
    evidence: "Synthetic portfolio release and GitHub publication, September 24, 2026",
  },
  {
    id: "ftm-seo-automation",
    name: "SEO Operations",
    category: "AI & Agents",
    domain: "WORDPRESS AUTOMATION",
    summary: "Asynchronous metadata generation with per-item results.",
    status: "Operational PHP/Python workflow",
    stack: ["Flask", "WordPress", "Async jobs"],
    detail:
      "A protected operator interface submits title-matching and SEO work to a supervised background runner. Generated metadata is validated and repaired before AIOSEO updates; the browser polls a job identifier. The historical n8n path is retained separately from the current PHP/Python runtime.",
    evidence: "Executive overview and current path, July 24, 2026",
  },
  {
    id: "ftm-sms-followup",
    name: "Multi-Site Follow-up",
    category: "AI & Agents",
    domain: "MESSAGING OPERATIONS",
    summary: "One workflow system. Explicit routing for every site.",
    status: "Operational messaging workflow",
    stack: ["n8n", "Twilio", "Configuration"],
    detail:
      "Form intake, welcome messages, scheduled follow-ups and broadcasts are separated into distinct workflow responsibilities. Controlled configuration owns site routing, sender selection and message content. Delivery depends on authorized campaigns, current consent and operational checks; automation does not itself establish permission to contact.",
    evidence: "Operating model and workflow overview, July 2026",
  },
  {
    id: "wordpress-incident-response",
    name: "Incident Response & Recovery",
    category: "Cloud & Systems",
    domain: "SECURITY ENGINEERING",
    summary: "Trace persistence. Contain carefully. Verify recovery.",
    status: "Documented containment engagement",
    stack: ["Linux", "WordPress", "Forensics"],
    detail:
      "A backup-first response to a multi-layer WordPress compromise. Process inspection and writer tracing expanded the investigation beyond known filenames. Repeated scans found zero known indicators after containment, and 21 checked sites returned successful public responses. Successful containment is distinct from rebuilding a historically compromised environment from a trusted image.",
    evidence: "Anonymized technical case study, August 26, 2026",
  },
  {
    id: "secure-hybrid-ai-hub",
    name: "Secure Hybrid AI Hub",
    category: "AI & Agents",
    domain: "AGENT GOVERNANCE",
    summary: "Separate model reasoning from execution authority.",
    status: "In development · synthetic verification",
    stack: ["Python", "Typed artifacts", "Policy broker"],
    detail:
      "A local control plane that mediates scope, policy, task state, isolation and release evidence. Models propose work; deterministic code controls privileged transitions. Phase 1 remains incomplete, with synthetic verification only: the published source passed 257 tests (one expected skip) on synthetic data and mocked providers. Live client onboarding and real provider transmission are outside its verified operating boundary.",
    evidence: "Open-source public edition, aligned with GitHub main a9f45d6",
  },
  {
    id: "email-finder",
    name: "EmailFinder",
    category: "Cloud & Systems",
    domain: "RESEARCH TOOLING",
    summary: "Explainable discovery from public web and DNS signals.",
    status: "Local research tool",
    stack: ["Python", "HTTP", "DNS"],
    detail:
      "Four CLI commands organize public address candidates, DNS configuration and explainable heuristic scoring. The tool deliberately avoids SMTP mailbox probing. Results are research leads, not proof of mailbox ownership, deliverability or consent. Four deterministic scripts passed in the documented review; external integrations were not exercised in that pass.",
    evidence: "Source-reconciled scope, July 2026",
  },
  {
    id: "kindred-grove",
    name: "Kindred Grove",
    category: "Web & Commerce",
    domain: "SHOPIFY STOREFRONT",
    summary: "A cinematic storefront with careful cart and consent engineering.",
    status: "Phase 2 development complete · redesign in development theme",
    stack: ["Shopify", "Liquid", "Web Components"],
    detail:
      "A premium pantry storefront concept on Shopify, built with Liquid, CSS and vanilla JavaScript Web Components: a film-led homepage, quick view, cart drawer, pantry quiz and English/Arabic locale source. The accepted Phase 2 build passed 95 of 95 security and configuration tests and 41 browser cases with none failing and five skipped, and all 150 theme files matched exact hashes. The reviewed redesign remains in a development theme; the custom domain still serves the existing live theme.",
    evidence: "Project status document, September 24, 2026",
  },
  {
    id: "regenai-shopify",
    name: "RegenAI",
    category: "Web & Commerce",
    domain: "HEADLESS WELLNESS COMMERCE",
    summary: "A 3D recovery storefront running on Shopify Hydrogen.",
    status: "Live concept storefront · build in progress",
    stack: ["Hydrogen", "Three.js", "Rust / WASM"],
    detail:
      "A recovery-commerce portfolio project for a fictional brand. The live storefront runs on Shopify Hydrogen, keeps the approved 3D design and reads six concept products from a development store; ordering, sign-in and checkout are disabled. The current source passed 137 storefront unit tests (one existing skip) and released with 145 of 145 file parity. Four Rust Shopify Functions passed 47 of 47 native tests but are not yet activated in a store. It is still an in-progress build: test checkout, account sign-in, merchant installation and production controls remain due.",
    evidence: "Client review edition, September 24, 2026",
  },
]);

export type StudioProject = z.infer<typeof projectSchema>;
const currentProjectUrls: Record<string, string> = {
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
      "I’m Zahidul, a full stack and AI engineer. I build grounded AI assistants, web applications and the cloud infrastructure behind them—from the first workflow to the working system.",
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
    identityRole: "SOFTWARE & AI ENGINEER",
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
      "AI assistants, operational tools and connected applications. See what each system does, how it was built and where it stands today.",
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
    expertiseTitle: "From the interface\nto the infrastructure.",
    processEyebrow: "04 / HOW WE WORK TOGETHER",
    processTitle: "An idea is the start.\nEvidence is the finish.",
    processIntro:
      "A deliberate engineering loop: understand the problem, build the smallest useful system, and verify what actually works.",
    aboutEyebrow: "05 / THE PERSON BEHIND THE WORK",
    aboutTitle: "I started with people.\nThen built the systems.",
    aboutBody:
      "Before software, I worked as a physiotherapy technologist. That experience shapes how I approach engineering: understand the person using the system, the workflow around them and what happens when something goes wrong.",
    aboutSecond:
      "Today I build across healthcare, commerce, AI and automation. You work directly with me on the interface, backend and infrastructure—with clear technical updates and documentation your team can use.",
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
      title: "AI with a foundation.",
      text: "Grounded retrieval, agent workflows, evaluation harnesses and the controls around generation.",
      tags: [
        "RAG & hybrid search",
        "MCP & agent tooling",
        "Evaluation & guardrails",
      ],
    },
    {
      icon: "layers",
      title: "Software with intent.",
      text: "Interfaces and applications that connect a clear user journey to real backend behavior.",
      tags: ["React & Next.js", "Python & Node.js", "Headless CMS & commerce"],
    },
    {
      icon: "network",
      title: "Systems with resilience.",
      text: "Infrastructure, observability and delivery workflows built around explicit operational boundaries.",
      tags: [
        "Cloud architecture",
        "Containers & IaC",
        "Security & verification",
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
