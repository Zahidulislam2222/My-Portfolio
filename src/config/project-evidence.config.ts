import { z } from "zod";

// Per-project engagement, problem→fix history and public technical document.
// Every entry is sourced from the project's current technical overview
// (exported to public/docs by CV/career-ops/export_project_pdfs.py).
// Keep the documents' own limits: demonstrations stay demonstrations,
// and the incident-response client stays anonymous.

const challengeSchema = z.object({
  problem: z.string().min(1),
  fix: z.string().min(1),
  result: z.string().min(1),
});

const evidenceSchema = z.object({
  engagement: z.object({
    type: z.enum(["Client project", "Independent build", "Portfolio demonstration"]),
    client: z.string().optional(),
    detail: z.string().min(1),
  }),
  challenges: z.array(challengeSchema).min(2).max(3),
  document: z.object({
    label: z.string().min(1),
    file: z.string().regex(/^[a-z0-9-]+\.pdf$/),
  }),
});

export type ProjectEvidence = z.infer<typeof evidenceSchema>;

export const documentBasePath = "/docs/";

const overview = (file: string) => ({ label: "Technical overview (PDF)", file });

export const projectEvidence = z.record(evidenceSchema).parse({
  voicebridge: {
    engagement: {
      type: "Independent build",
      detail: "My own voice-agent business platform. Frontend and backend are deployed; real audio and external provider acceptance remain separate gates.",
    },
    challenges: [
      {
        problem: "A booking retry or concurrent edit can create conflicting appointments.",
        fix: "Added explicit confirmation, timezone validation, idempotency, conflict checks and revision control.",
        result: "Persistent booking and recovery behavior was exercised with controlled test data; real calendar receipts remain pending.",
      },
      {
        problem: "A follow-up timeout leaves the system uncertain whether an external service already acted.",
        fix: "Used a leased worker with durable retries, receipts, dead letters and explicit unknown-delivery states.",
        result: "The October 8 overview records 150 backend/tooling tests and 78 frontend tests; external CRM/email acceptance remains pending.",
      },
    ],
    document: overview("voicebridge-technical-overview.pdf"),
  },
  "mediconnect-v3": {
    engagement: {
      type: "Independent build",
      detail: "My own telehealth platform. The website is deployed; the full clinical platform is still in development.",
    },
    challenges: [
      {
        problem: "The infrastructure static-analysis scan flagged a large backlog of unencrypted and unlogged cloud resources.",
        fix: "Worked through 96 static-analysis fixes at the recorded Phase 4 checkpoint.",
        result: "263 checks passing at that checkpoint, with 44 findings still open and recorded rather than hidden.",
      },
      {
        problem: "A clean application-to-infrastructure check could be mistaken for proof that the live cloud matched the source.",
        fix: "Kept the check (129 pass, 0 fail, 0 warn) but recorded that it does not prove every live image matches local code, and held backend replacement until immutable, source-linked image digests exist.",
        result: "Live code is protected from an unproven overwrite; the digest linkage is recorded as remaining work.",
      },
      {
        problem: "A website release can silently differ from the build that was tested, with no clean way back.",
        fix: "Released with local, deployed and archive hash comparison, and kept the previous release for rollback.",
        result: "37 of 37 release files matched, and 9 public browser checks passed on desktop and narrow mobile with zero browser errors.",
      },
    ],
    document: overview("mediconnect-technical-overview.pdf"),
  },
  equipcert: {
    engagement: {
      type: "Independent build",
      detail: "My own equipment-inspection product, deployed as a working application.",
    },
    challenges: [
      {
        problem: "The audit table existed but nothing wrote to it, application users could insert rows, and its append-only guard would have crashed GDPR erasure the moment it filled up.",
        fix: "Moved audit writing into database triggers on the core tables, blocked application writes, and defined the one permitted erasure mutation.",
        result: "Database suite went from 8 failing to 28 of 28 passing, erasure included.",
      },
      {
        problem: "The live database went offline: the free hosting tier paused it after a week without activity, even though a keep-alive job reported success twice a week.",
        fix: "Found that the keep-alive called a health endpoint that never touched the database. It now runs a real query every day and reports success only when a row comes back.",
        result: "Live site rebuilt and redeployed, and every CI job passing for the first time since September 11.",
      },
      {
        problem: "On the serverless host, the subscription webhook would have rejected every genuine payment event: the platform parsed the body first, but the provider signs the exact original bytes.",
        fix: "Made the handler read the exact bytes on both deployment targets, and stopped logging event contents that can include customer details.",
        result: "With provider-signed test payloads, the old handler fails the platform-replay and raw-stream cases and the new one passes all of them; serverless behavior was checked against the platform runtime's source.",
      },
    ],
    document: overview("equipcert-technical-overview.pdf"),
  },
  "yuktha-wellness": {
    engagement: {
      type: "Client project",
      client: "Yuktha Wellness",
      detail: "Women's health startup in India. Paid milestone work on their production assistant, web chat and WhatsApp.",
    },
    challenges: [
      {
        problem: "The reranker looked like it worked but was not actually ranking anything.",
        fix: "Traced a silent fallback and a saturated scoring path, then loaded the model directly and checked raw relevance scores pair by pair.",
        result: "Relevant answers clearly outrank irrelevant ones, with the full task suite at 302 of 302.",
      },
      {
        problem: "Messages about self-harm got a cold emergency-room reply instead of a compassionate one.",
        fix: "Gave suicidal ideation and self-harm language (including Hindi transliterations) a separate crisis detector that runs before retrieval and generation.",
        result: "Those messages get compassionate support and appropriate crisis resources.",
      },
      {
        problem: "The client's no-code WhatsApp flow and the AI webhook both answered every message, so users got stacked duplicate replies.",
        fix: "Made the AI defer: greetings and menu taps stay silent, and a per-user marker switches the AI on only when the user picks a health query.",
        result: "Duplicate replies gone, verified live with signed test messages and zero unwanted sends.",
      },
    ],
    document: overview("yuktha-wellness-technical-overview.pdf"),
  },
  chronos: {
    engagement: {
      type: "Portfolio demonstration",
      detail: "A connected WordPress and WooCommerce demonstration store. Products are illustrative and checkout runs in Stripe test mode only.",
    },
    challenges: [
      {
        problem: "The payment bridge trusted too much: pricing, privileged order fields and payment completion needed server authority.",
        fix: "Recovered the bridge so the server resolves prices and availability, protects privileged order fields, acknowledges payment completion and handles duplicate attempts.",
        result: "A hosted Stripe test payment reconciled with a paid WooCommerce order without reducing stock.",
      },
      {
        problem: "Revisiting an old receipt could clear a shopper's newer bag.",
        fix: "Stored a stable request identifier and item fingerprint so a paid receipt clears only its own matching selection.",
        result: "Covered by a repeated-receipt regression check.",
      },
      {
        problem: "Local and deployed code can drift apart without anyone noticing.",
        fix: "Released with hash comparison of every deployed file against local.",
        result: "78 of 78 frontend and 86 of 86 backend runtime files matched, and archive restoration passed.",
      },
    ],
    document: overview("chronos-technical-overview.pdf"),
  },
  vitalprobe: {
    engagement: {
      type: "Independent build",
      detail: "My own local-first testing product for healthcare and wellness AI assistants. Synthetic patients only.",
    },
    challenges: [
      {
        problem: "A safety tool that scores answers with a model alone produces verdicts nobody can audit.",
        fix: "Made deterministic checks the base layer, with semantic judges optional on top and a documented boundary between them.",
        result: "Every verdict traces to an explicit rule or a clearly labelled semantic score.",
      },
      {
        problem: "An unreachable target or a malformed judge response could be misread as the assistant failing a safety check.",
        fix: "Separated product findings from network and configuration errors, with explicit handling for each failure mode.",
        result: "Infrastructure problems report as infrastructure problems, not safety regressions.",
      },
      {
        problem: "Testing healthcare AI creates pressure to use real conversations and patient records.",
        fix: "Built the product boundary around synthetic fictional patients only, as an architectural rule rather than a usage policy.",
        result: "No real patient data is part of the product's design or test suites.",
      },
    ],
    document: overview("vitalprobe-technical-overview.pdf"),
  },
  "ftm-social-media": {
    engagement: {
      type: "Client project",
      client: "Fine Touch Marketing",
      detail: "Med-spa marketing agency. Ongoing paid engagement on their campaign, review and approval platform.",
    },
    challenges: [
      {
        problem: "Caption AI wrote generic copy because it could not see the image or video the client selected.",
        fix: "Supplied the selected image, or a video's poster frame, as bounded visual context to the copy provider while keeping the call copy-only.",
        result: "Passed two 50-post live runs and a real-browser client calendar approval.",
      },
      {
        problem: "An interrupted deployment left a release split between live files and local-only files.",
        fix: "Ran a read-only drift audit, resumed from the exact local-ahead files, and repeated independent parity checks.",
        result: "All 38 scoped release files in sync: none local-ahead, missing or live-ahead.",
      },
      {
        problem: "Real usage hit the data provider's quota and stalled the pipeline.",
        fix: "Reworked access patterns to cut read/write pressure and added explicit behavior for quota conditions.",
        result: "Part of the 17 of 17 reliability pass after repair.",
      },
    ],
    document: overview("ftm-social-media-technical-overview.pdf"),
  },
  "agentic-environment": {
    engagement: {
      type: "Independent build",
      detail: "My own AI-assisted engineering environment. The work is the integration, not the underlying models or tools.",
    },
    challenges: [
      {
        problem: "Google document access kept failing: separate auth stores and a short testing-mode token lifetime.",
        fix: "Moved shared-document access to a service account and kept document creation on a user-owned route.",
        result: "Credential lifetime, permission scope and file ownership are diagnosed separately.",
      },
      {
        problem: "Handoff checkpoints were written where the coding sandbox could not write.",
        fix: "Moved the checkpoint marker beside the project's ignored checkpoint folder, matching the worker's permissions.",
        result: "Recovery state now follows the real execution boundary, including Windows-to-WSL paths.",
      },
      {
        problem: "Instruction files for different agents drifted apart over time.",
        fix: "Merged a provider-aware shared section and verified copies by hash.",
        result: "Synchronization is a repeatable operation, not a one-time copy.",
      },
    ],
    document: overview("agentic-development-environment.pdf"),
  },
  "rag-production-stack": {
    engagement: {
      type: "Independent build",
      detail: "My own retrieval infrastructure repository. Documents configuration and source intent, not a live deployment.",
    },
    challenges: [
      {
        problem: "Most RAG setups stop at 'it works on localhost', with no auth, observability or scanning story.",
        fix: "Wrapped the engine with authenticated access, network isolation, metrics/logs/traces and profile-activated scanning.",
        result: "9 core services with source-defined health checks, plus 14 profile-activated services.",
      },
      {
        problem: "The repository needed to be safe to publish.",
        fix: "Removed secrets, machine-specific paths and cloud identifiers, replaced them with environment variables, and excluded scanner output from version control.",
        result: "Historical, staged and public-tree secret scans found no matches before publication.",
      },
      {
        problem: "The documentation claimed more than the stack actually did.",
        fix: "Reconciled the docs against the actual service definitions and split core from on-demand services.",
        result: "Docs that match the source, which matters most for a security-focused project.",
      },
    ],
    document: overview("rag-production-stack-technical-overview.pdf"),
  },
  "jwalker-knowledge-assistant": {
    engagement: {
      type: "Client project",
      client: "JWALKER Marketing",
      detail: "Members-only knowledge assistant for their WordPress membership site. Locally verified; live access is gated on client-side setup.",
    },
    challenges: [
      {
        problem: "The first design used a dedicated vector database and container orchestration, out of habit, against the client's no-subscription constraint.",
        fix: "Collapsed it to one FastAPI process with a file-based hybrid store (vector + full-text + rank fusion) and re-verified retrieval.",
        result: "No external database to run, secure or pay for.",
      },
      {
        problem: "After switching embedding providers, off-topic questions came back marked as grounded with sources.",
        fix: "Measured real similarity distributions for relevant and irrelevant pairs and set a per-provider relevance floor in configuration.",
        result: "Off-topic questions return ungrounded with zero sources.",
      },
      {
        problem: "The ingester treated a provider block the same as 'no transcript', which left the knowledge store empty after a rebuild.",
        fix: "Made a provider block stop the run loudly with the database untouched, and made ingestion idempotent so the store never needs wiping.",
        result: "A third-party block can no longer produce a success-shaped empty result.",
      },
    ],
    document: overview("jwalker-knowledge-assistant-technical-overview.pdf"),
  },
  "healthcode-analysis": {
    engagement: {
      type: "Portfolio demonstration",
      detail: "A medical-technology editorial demonstration on native WordPress. Not a clinical provider or validated medical product.",
    },
    challenges: [
      {
        problem: "Visual comparison across full-HD, 1440px, 390px and 320px widths showed a theme-added mobile header inset and an overflowing disclosure.",
        fix: "Corrected both in the native layouts and repeated the comparisons.",
        result: "Consistent layout from desktop to small phones, with the owner still approving the final design.",
      },
      {
        problem: "Imported layouts and cached pages can fall out of step, leaving old markup pointing at new styles.",
        fix: "Invalidate generated Elementor CSS and the gateway cache together after every layout import, with cache HIT/BYPASS verified on public and private routes.",
        result: "The September release preserved 63 original public routes and passed 13 browser scenarios.",
      },
      {
        problem: "One old integration script failed blind discovery because it assumed its original Docker runtime.",
        fix: "Preserved the file and recorded the exception instead of counting it as a pass.",
        result: "No inflated test totals or unearned CI badges in the release record.",
      },
    ],
    document: overview("healthcode-analysis-technical-overview.pdf"),
  },
  "everyday-dental-surgery": {
    engagement: {
      type: "Portfolio demonstration",
      detail: "A fictional dental practice with a synthetic patient journey. No real patients, payments or clinical records.",
    },
    challenges: [
      {
        problem: "The historical clinical prototype had real security gaps, including unauthenticated notification and breach handlers.",
        fix: "Disabled all 11 historical Edge Function endpoints behind a deployed guard, with owner approval, and kept the defects documented rather than relabelled as repaired.",
        result: "The public site accepts synthetic mode only.",
      },
      {
        problem: "Reviewers need to see privacy and consent behavior without handing over real health data.",
        fix: "Built a fixed synthetic patient journey with consent, access-denial, erasure and sample export flows in browser memory.",
        result: "15 of 15 regression tests covering access decisions, consent, erasure and the runtime boundary.",
      },
      {
        problem: "Applying historical migrations to an unknown live database could destroy existing records.",
        fix: "Preserved every record: no migrations or database mutations were run, and upgrades require inventory, comparison and a tested rollback plan first.",
        result: "The corrected release passed all 138 file hashes.",
      },
    ],
    document: overview("everyday-dental-surgery-technical-overview.pdf"),
  },
  "ftm-seo-automation": {
    engagement: {
      type: "Client project",
      client: "Fine Touch Marketing",
      detail: "Med-spa marketing agency. SEO metadata automation across their clients' WordPress sites.",
    },
    challenges: [
      {
        problem: "The page loaded normally while the backend that does the work was offline, so the system looked healthy when it was not.",
        fix: "Split interface and worker health checks, and replaced process-name monitoring with a health-based watchdog.",
        result: "An outage shows up as an outage, and the backend recovers without manual restarts.",
      },
      {
        problem: "Titles failed to match because the site and the operator encoded the same characters differently.",
        fix: "Normalized both sides with one shared contract covering entities, punctuation and dash variants.",
        result: "Updates land on the intended page instead of silently skipping.",
      },
      {
        problem: "AI examples leaked the wrong business context, and output sometimes hardcoded a city.",
        fix: "Locked the prompt to the supplied industry, derived the city per page, and added deterministic repair after generation.",
        result: "Copy stays on-industry and location-correct, checked per item.",
      },
    ],
    document: overview("ftm-seo-automation-technical-overview.pdf"),
  },
  "ftm-sms-followup": {
    engagement: {
      type: "Client project",
      client: "Fine Touch Marketing",
      detail: "Med-spa marketing agency. Lead follow-up messaging across many client websites from one workflow system.",
    },
    challenges: [
      {
        problem: "Routing trusted a hint submitted with the form, so a submission could choose which client's messaging path it entered.",
        fix: "Made the registered form route the only authority, and unknown routes fail safely instead of guessing.",
        result: "Cross-client message leakage is structurally prevented.",
      },
      {
        problem: "One site with missing data blocked the scheduled follow-up run for every other site.",
        fix: "Isolated per-site processing so a malformed data area is contained and reported.",
        result: "Verified with a live fault-injection check; the other sites processed normally.",
      },
      {
        problem: "Sent state was written when sending began, so failed sends were recorded as delivered and never retried.",
        fix: "Moved the state write to after the provider reports success.",
        result: "Delivery records match what actually happened.",
      },
    ],
    document: overview("ftm-sms-followup-technical-overview.pdf"),
  },
  "wordpress-incident-response": {
    engagement: {
      type: "Client project",
      client: "Name withheld",
      detail: "Multi-site WordPress hosting client. The client is kept anonymous to protect the affected business.",
    },
    challenges: [
      {
        problem: "Deleted files came back within seconds, and a site could return HTTP 200 while malicious code still ran.",
        fix: "Treated regeneration as evidence of an unresolved source and used a temporary audit rule to capture the actual writer.",
        result: "The source and its seeds were removed in one pass instead of another round of symptom deletion.",
      },
      {
        problem: "Filename scanning proved infection but could never prove absence, so the first reported scope was too small.",
        fix: "Switched to structural classification plus process inspection across account boundaries.",
        result: "The compromise was shown to be server-wide, not limited to the reported sites.",
      },
      {
        problem: "A zero-result scan is easy to oversell as 'the server is safe now'.",
        fix: "Reported containment and trust restoration separately, with dated evidence per layer and a clean-rebuild recommendation.",
        result: "21 checked sites returned successful public responses, without false assurance.",
      },
    ],
    document: { label: "Case study (PDF)", file: "cybersecurity-incident-response-case-study.pdf" },
  },
  "secure-hybrid-ai-hub": {
    engagement: {
      type: "Independent build",
      detail: "My own governed AI development control plane. In development, synthetic verification only.",
    },
    challenges: [
      {
        problem: "An assistant that can grant itself scope, network access or credentials makes every safety rule advisory.",
        fix: "Moved every privileged decision out of the model into deterministic code with typed records.",
        result: "The model can propose scope, egress and completion, but never decide them.",
      },
      {
        problem: "Work for multiple clients in one environment risks bleeding repositories, caches and task state across boundaries.",
        fix: "Bounded per-task workspaces with leases, explicit registration and hard client separation.",
        result: "Client separation is structural, not a convention.",
      },
      {
        problem: "A closure task was pushed toward 'done' before review and integration were finished.",
        fix: "Cancelled the task instead of declaring it complete, and recorded that as the current state.",
        result: "The documented status says Phase 1 incomplete, which is what the evidence supports.",
      },
    ],
    document: overview("secure-hybrid-ai-hub-technical-overview.pdf"),
  },
  "email-finder": {
    engagement: {
      type: "Independent build",
      detail: "My own local research tool. Results are leads, not proof of mailbox ownership or consent.",
    },
    challenges: [
      {
        problem: "SMTP mailbox probing, the usual verification shortcut, is intrusive and proves less than it seems.",
        fix: "Designed around public web and DNS signals with explainable heuristic scoring, and no SMTP probing at all.",
        result: "Four CLI commands (find, verify, scrape, batch) with scoring you can inspect.",
      },
      {
        problem: "Some signals only cover part of the population, so confidence varies widely.",
        fix: "Flagged anything without an external signal as 'verify manually' instead of showing it as confirmed.",
        result: "Confidence bands instead of false certainty; all four deterministic test scripts passed.",
      },
    ],
    document: overview("emailfinder-technical-overview.pdf"),
  },
  "kindred-grove": {
    engagement: {
      type: "Portfolio demonstration",
      detail: "A published Shopify development-store demonstration for a premium pantry brand concept. A shared visitor password is required; real transactions and commercial transfer are unavailable.",
    },
    challenges: [
      {
        problem: "A cart write can fail after Shopify may already have accepted it, and a blind retry adds the item twice.",
        fix: "Serialized cart changes; after an uncertain failure the theme reads the real cart and tells the shopper, instead of repeating the write.",
        result: "Tests cover hostile inputs, stale results, failed reads and ambiguous writes; real cart checks covered 0→1→2→0.",
      },
      {
        problem: "A wholesale draft-order Worker was an extra backend service able to create Admin API side effects.",
        fix: "Retired it in source: it now returns HTTP 410 without reading submitted data or calling any service.",
        result: "A smaller exposed backend surface and no extra service on the buying path.",
      },
      {
        problem: "Optional theme features must never run on unknown or missing consent.",
        fix: "Required both the visitor's explicit consent and Shopify's matching allowed-processing result, and removed optional telemetry loaders.",
        result: "Browser checks covered accept, partial consent, withdrawal and reload; Global Privacy Control and Do Not Track kept analytics and marketing denied.",
      },
    ],
    document: { label: "Project status (PDF)", file: "kindred-grove-project-status.pdf" },
  },
  "regenai-shopify": {
    engagement: {
      type: "Portfolio demonstration",
      detail: "A headless commerce build for a fictional recovery brand. Concept products only; ordering, sign-in and checkout are closed.",
    },
    challenges: [
      {
        problem: "An AI support recommendation must not silently become an unreviewed refund or email.",
        fix: "Bound support decisions to current ticket, order and rulebook versions with human review; kept financial and email execution disabled.",
        result: "Account reads, token renewal and restart persistence passed. Bounded AI cases verified preference recall and image-based advice; real refunds and sent replies are not claimed.",
      },
      {
        problem: "The approved 3D design ran as a static demo with fixture-only products, not a real commerce backend.",
        fix: "Moved the live storefront onto Shopify Hydrogen, keeping the approved 3D design while reading six concept products from the development store.",
        result: "137 storefront unit tests passed (one existing skip), and the same tested image released with 144 of 144 (staging) and 145 of 145 (main) file parity.",
      },
      {
        problem: "Source files and old compiled artifacts are not proof that the Shopify Functions still work.",
        fix: "Re-ran the four Rust Functions' native tests and rebuilt them to WebAssembly on September 24.",
        result: "47 of 47 tests passed, each build 159–181 KiB, under Shopify's 256 kB limit; store activation is still pending.",
      },
    ],
    document: { label: "Build snapshot (PDF)", file: "regenai-build-snapshot.pdf" },
  },
  fleetwright: {
    engagement: {
      type: "Independent build",
      detail: "My own system, tested against a fictitious load board built in the same repository. It is never pointed at a real third-party site.",
    },
    challenges: [
      {
        problem: "The first passing concurrency test booked only 77 of 10,000 jobs, so \"zero duplicates\" was trivially true.",
        fix: "Switched to production-like timings and required at least 95% of jobs booked and at least one crash during the action reconciled.",
        result: "0 duplicates with 200 concurrent competitors; 9,897 claims confirmed equal 9,897 bookings on the board's own log.",
      },
      {
        problem: "The public demo login let in only one visitor per 30 seconds, because one-time codes are single use per account.",
        fix: "The shared demo account skips the per-account replay check while every personal account keeps it.",
        result: "A test signs in three visitors with the same code; the live check passed with three demo visitors at once.",
      },
      {
        problem: "The first capacity number was wrong by a factor of two: summed memory counted shared Chromium memory many times and CPU always read zero.",
        fix: "Measured unique memory per process with persistent process objects, and fixed the same CPU bug in the worker heartbeat.",
        result: "About 70 to 103 MB per browser context and about 1.8 cores at 32 contexts.",
      },
    ],
    document: overview("fleetwright-technical-overview.pdf"),
  },
});
