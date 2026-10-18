import { z } from "zod";

// Per-project engagement, problem→fix history and public technical document.
// Evidence combines audited technical overviews and dated project release records.
// October 10 case studies reconcile later delivery facts without editing Google Docs.
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

export const projectEvidence = z.record(evidenceSchema).parse({
  "voicebridge": {
    "engagement": {
      "type": "Independent build",
      "detail": "My single-business voice-agent platform. Bounded business-tool, owner recovery and export receipts are recorded; actual speak-and-listen acceptance remains open."
    },
    "challenges": [
      {
        "problem": "A booking retry or concurrent edit can create conflicting appointments.",
        "fix": "Added explicit confirmation, timezone validation, idempotency, conflict checks and revision control.",
        "result": "A bounded Calendar/CRM booking and approved Gmail confirmation received direct readbacks; cancellation survived a worker restart."
      },
      {
        "problem": "An abandoned provider call can retain a local operation after the provider has ended it.",
        "fix": "Added owner-authorized GET-only reconciliation of the exact provider call, plus bounded and sanitized MCP denial audits.",
        "result": "The recorded owner recovery retired the terminal operation without creating a call; real speak-and-listen and Vapi acceptance remain open."
      },
      {
        "problem": "Owner downloads can expose another tenant's records or resurrect redacted transcript text.",
        "fix": "Enforced owner sessions, CSRF, tenant isolation, projected schemas, count/byte limits and durable redaction tombstones.",
        "result": "Two live owner exports produced two durable audits without changing business records. Nine packaged download/cancel journeys passed; nonempty, redacted and foreign-tenant cases were verified locally. Gates recorded 252 backend checks and 108 frontend tests."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 15 (PDF)",
      "file": "voicebridge-technical-overview.pdf"
    }
  },
  "mediconnect-v3": {
    "engagement": {
      "type": "Independent build",
      "detail": "My connected-care project. The public website and CMS have scoped release evidence; complete clinical service acceptance and platform phases remain open."
    },
    "challenges": [
      {
        "problem": "An editorial migration can preserve article titles while losing body paragraphs and images.",
        "fix": "Verified complete ordered article text and decoded locally served cover images through the compiled CMS flow.",
        "result": "The recorded release preserved five articles and all 51 paragraphs; three covers decoded and two unavailable legacy covers remain explicit."
      },
      {
        "problem": "Passing local knowledge-runtime checks can be mistaken for a working deployed retrieval service.",
        "fix": "Separated processor tests, image transfer, runtime activation and grounded retrieval into independent acceptance gates.",
        "result": "The processor recorded 98 local tests; the failed server activation does not establish live generation, ingestion or retrieval."
      },
      {
        "problem": "A tested website build can drift during publication.",
        "fix": "Used reviewed frozen artifacts and compared every deployed public release file.",
        "result": "The recorded website release matched 43 of 43 files, with 676 unit tests and 77 browser cases; full clinical service acceptance remains open."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "mediconnect-technical-overview.pdf"
    }
  },
  "equipcert": {
    "engagement": {
      "type": "Independent build",
      "detail": "My web/mobile equipment-inspection product. Operational probes and tests have dated evidence; regulatory certification is not claimed."
    },
    "challenges": [
      {
        "problem": "The audit table existed but nothing wrote to it, application users could insert rows, and its append-only guard would have crashed GDPR erasure the moment it filled up.",
        "fix": "Moved audit writing into database triggers on the core tables, blocked application writes, and defined the one permitted erasure mutation.",
        "result": "Database suite went from 8 failing to 28 of 28 passing, erasure included."
      },
      {
        "problem": "The live database went offline: the free hosting tier paused it after a week without activity, even though a keep-alive job reported success twice a week.",
        "fix": "Found that the keep-alive called a health endpoint that never touched the database. It now runs a real query every day and reports success only when a row comes back.",
        "result": "October 14 verification passed seven production probes, three dependency checks and 104 web unit tests. Authenticated inspection and a complete restore drill remain separate gates."
      },
      {
        "problem": "On the serverless host, the subscription webhook would have rejected every genuine payment event: the platform parsed the body first, but the provider signs the exact original bytes.",
        "fix": "Made the handler read the exact bytes on both deployment targets, and stopped logging event contents that can include customer details.",
        "result": "With provider-signed test payloads, the old handler fails the platform-replay and raw-stream cases and the new one passes all of them; serverless behavior was checked against the platform runtime's source."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "equipcert-technical-overview.pdf"
    }
  },
  "yuktha-wellness": {
    "engagement": {
      "type": "Client project",
      "client": "Yuktha Wellness",
      "detail": "Women's health startup in India. Paid milestone work on their production assistant, web chat and WhatsApp."
    },
    "challenges": [
      {
        "problem": "Multilingual knowledge assistants need relevant evidence rather than similarity scores alone.",
        "fix": "Combined dense and keyword search with cross-encoder reranking and explicit grounding checks.",
        "result": "Retrieval behavior was exercised through recorded multilingual evaluation and backend checks."
      },
      {
        "problem": "Healthcare conversations need a separate emergency and mental-health crisis path.",
        "fix": "Placed deterministic crisis detection before retrieval and generation, including transliterated language cases.",
        "result": "Recorded checks cover appropriate crisis responses; clinical content still requires qualified human review."
      },
      {
        "problem": "User memory must distinguish personal statements from generated assistant text.",
        "fix": "Separated user-authored facts from generated responses and excluded legacy mixed records.",
        "result": "Memory provenance is handled explicitly; recorded full latency targets remain unmet."
      }
    ],
    "document": {
      "label": "Current case study · October 10 (PDF)",
      "file": "yuktha-wellness-technical-overview.pdf"
    }
  },
  "chronos": {
    "engagement": {
      "type": "Portfolio demonstration",
      "detail": "An independent connected-commerce demonstration. Stripe test checkout is verified; live payments and physical fulfilment remain outside its scope."
    },
    "challenges": [
      {
        "problem": "A successful checkout redirect can disagree with the persisted order or authoritative price.",
        "fix": "Used server-resolved WooCommerce prices, order ownership, idempotency and signed payment reconciliation.",
        "result": "The recorded release completed hosted Stripe test payment and checked unchanged stock; live payments remain disabled."
      },
      {
        "problem": "A storefront release and a security repair can advance on different branches.",
        "fix": "Kept publication status separate from deployment evidence and merged the reviewed dependency repair independently.",
        "result": "Both full dependency audits reached zero known findings; the publication draft still needs reconciliation and release gates before promotion."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "chronos-technical-overview.pdf"
    }
  },
  "vitalprobe": {
    "engagement": {
      "type": "Independent build",
      "detail": "My synthetic-only healthcare AI testing product, with a public website and local audit engine. Clinical/legal calibration requires qualified human review."
    },
    "challenges": [
      {
        "problem": "A chatbot safety score can hide the response and rule that produced it.",
        "fix": "Exported observed responses, deterministic check outcomes and inspectable HTML/JSON evidence.",
        "result": "The recorded film audit shows 25 fictional cases against a deliberately weak target; its three passes and 22 failures are target findings, not clinical accuracy."
      },
      {
        "problem": "Optional semantic judging and product presentation can obscure the actual execution boundary.",
        "fix": "Kept deterministic and semantic evidence separate and placed new audit execution in the local operator-controlled engine.",
        "result": "Recorded gates passed 190 Python and 39 frontend tests; the public site does not accept patient data or run hosted audits."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "vitalprobe-technical-overview.pdf"
    }
  },
  "ftm-social-media": {
    "engagement": {
      "type": "Client project",
      "client": "Fine Touch Marketing",
      "detail": "Med-spa marketing agency. Ongoing paid engagement on their campaign, review and approval platform."
    },
    "challenges": [
      {
        "problem": "Caption AI wrote generic copy because it could not see the image or video the client selected.",
        "fix": "Supplied the selected image, or a video's poster frame, as bounded visual context to the copy provider while keeping the call copy-only.",
        "result": "Passed two 50-post live runs and a real-browser client calendar approval."
      },
      {
        "problem": "An interrupted deployment left a release split between live files and local-only files.",
        "fix": "Ran a read-only drift audit, resumed from the exact local-ahead files, and repeated independent parity checks.",
        "result": "All 38 scoped release files in sync: none local-ahead, missing or live-ahead."
      },
      {
        "problem": "Real usage hit the data provider's quota and stalled the pipeline.",
        "fix": "Reworked access patterns to cut read/write pressure and added explicit behavior for quota conditions.",
        "result": "Part of the 17 of 17 reliability pass after repair."
      }
    ],
    "document": {
      "label": "Technical overview (PDF)",
      "file": "ftm-social-media-technical-overview.pdf"
    }
  },
  "agentic-environment": {
    "engagement": {
      "type": "Independent build",
      "detail": "My integrated Claude Code/Codex engineering environment, including a custom knowledge MCP and project-scoped recovery. Runtime checks retain their recorded dates."
    },
    "challenges": [
      {
        "problem": "A concise search excerpt can be mistaken for proof of a complete project claim.",
        "fix": "Implemented lossless indexing, complete-coverage audits and exact source-section retrieval through custom MCP tools.",
        "result": "Current career claims are checked against source sections; indexed coverage and historical source dates remain explicit."
      },
      {
        "problem": "A provider handoff can carry the wrong project or incomplete work into a new session.",
        "fix": "Kept provider configuration isolated and recovery checkpoints inside the owning project with decisions, changes and remaining gates.",
        "result": "The October 14 local snapshot passed 37 switcher tests; native cross-provider transcript resume remains unverified."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "agentic-development-environment.pdf"
    }
  },
  "rag-production-stack": {
    "engagement": {
      "type": "Independent build",
      "detail": "My own retrieval infrastructure repository. Documents configuration and source intent, not a live deployment."
    },
    "challenges": [
      {
        "problem": "Most RAG setups stop at 'it works on localhost', with no auth, observability or scanning story.",
        "fix": "Wrapped the engine with authenticated access, network isolation, metrics/logs/traces and profile-activated scanning.",
        "result": "9 core services with source-defined health checks, plus 14 profile-activated services."
      },
      {
        "problem": "The repository needed to be safe to publish.",
        "fix": "Removed secrets, machine-specific paths and cloud identifiers, replaced them with environment variables, and excluded scanner output from version control.",
        "result": "Historical, staged and public-tree secret scans found no matches before publication."
      },
      {
        "problem": "The documentation claimed more than the stack actually did.",
        "fix": "Reconciled the docs against the actual service definitions and split core from on-demand services.",
        "result": "Docs that match the source, which matters most for a security-focused project."
      }
    ],
    "document": {
      "label": "Technical overview (PDF)",
      "file": "rag-production-stack-technical-overview.pdf"
    }
  },
  "jwalker-knowledge-assistant": {
    "engagement": {
      "type": "Client project",
      "client": "JWALKER Marketing",
      "detail": "Paid creator-knowledge assistant engagement. The September 29 public release uses approved YouTube material; paid membership and course content are excluded."
    },
    "challenges": [
      {
        "problem": "A public assistant needs a clear boundary between public videos and paid creator material.",
        "fix": "Restricted the public knowledge release to approved YouTube sources and kept paid connectors outside its active source set.",
        "result": "The September 29 release record includes a public homepage check and a grounded answer with five cited sources."
      },
      {
        "problem": "A scheduled backup needs to work through the scheduler’s real invocation, not only a helper function.",
        "fix": "Verified the module entry point used by the scheduled job and exercised the actual command.",
        "result": "A successful scheduled backup and passing offline checks were retained with the release evidence."
      }
    ],
    "document": {
      "label": "Current case study · October 10 (PDF)",
      "file": "jwalker-knowledge-assistant-technical-overview.pdf"
    }
  },
  "healthcode-analysis": {
    "engagement": {
      "type": "Portfolio demonstration",
      "detail": "An independent native WordPress editorial demonstration with local reader tools. Educational content does not establish clinical validity or regulatory approval."
    },
    "challenges": [
      {
        "problem": "Visual comparison across full-HD, 1440px, 390px and 320px widths showed a theme-added mobile header inset and an overflowing disclosure.",
        "fix": "Corrected both in the native layouts and repeated the comparisons.",
        "result": "Consistent layout from desktop to small phones, with the owner still approving the final design."
      },
      {
        "problem": "Imported layouts and cached pages can fall out of step, leaving old markup pointing at new styles.",
        "fix": "Invalidate generated Elementor CSS and the gateway cache together after every layout import, with cache HIT/BYPASS verified on public and private routes.",
        "result": "The September release preserved 63 original public routes and passed 13 browser scenarios."
      },
      {
        "problem": "One old integration script failed blind discovery because it assumed its original Docker runtime.",
        "fix": "Preserved the file and recorded the exception instead of counting it as a pass.",
        "result": "The later documentation records 316 passing offline checks, one failing AskMe test and two unrun runtime-dependent suites; no fresh October application run is claimed."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "healthcode-analysis-technical-overview.pdf"
    }
  },
  "everyday-dental-surgery": {
    "engagement": {
      "type": "Portfolio demonstration",
      "detail": "A fictional dental practice with a synthetic patient journey. No real patients, payments or clinical records."
    },
    "challenges": [
      {
        "problem": "The historical clinical prototype had real security gaps, including unauthenticated notification and breach handlers.",
        "fix": "Disabled all 11 historical Edge Function endpoints behind a deployed guard, with owner approval, and kept the defects documented rather than relabelled as repaired.",
        "result": "The public site accepts synthetic mode only."
      },
      {
        "problem": "Reviewers need to see privacy and consent behavior without handing over real health data.",
        "fix": "Built a fixed synthetic patient journey with consent, access-denial, erasure and sample export flows in browser memory.",
        "result": "15 of 15 regression tests covering access decisions, consent, erasure and the runtime boundary."
      },
      {
        "problem": "Applying historical migrations to an unknown live database could destroy existing records.",
        "fix": "Preserved every record: no migrations or database mutations were run, and upgrades require inventory, comparison and a tested rollback plan first.",
        "result": "The corrected release passed all 138 file hashes."
      }
    ],
    "document": {
      "label": "Technical overview (PDF)",
      "file": "everyday-dental-surgery-technical-overview.pdf"
    }
  },
  "ftm-seo-automation": {
    "engagement": {
      "type": "Client project",
      "client": "Fine Touch Marketing",
      "detail": "Med-spa marketing agency. SEO metadata automation across their clients' WordPress sites."
    },
    "challenges": [
      {
        "problem": "Interface availability and background-worker health are separate operational signals.",
        "fix": "Added separate frontend/API checks and supervised restart and boot recovery.",
        "result": "Twelve scoped recovery criteria passed in the retained September record."
      },
      {
        "problem": "Titles failed to match because the site and the operator encoded the same characters differently.",
        "fix": "Normalized both sides with one shared contract covering entities, punctuation and dash variants.",
        "result": "Updates land on the intended page instead of silently skipping."
      },
      {
        "problem": "AI examples leaked the wrong business context, and output sometimes hardcoded a city.",
        "fix": "Locked the prompt to the supplied industry, derived the city per page, and added deterministic repair after generation.",
        "result": "Copy stays on-industry and location-correct, checked per item."
      }
    ],
    "document": {
      "label": "Current case study · October 10 (PDF)",
      "file": "ftm-seo-automation-technical-overview.pdf"
    }
  },
  "ftm-sms-followup": {
    "engagement": {
      "type": "Client project",
      "client": "Fine Touch Marketing",
      "detail": "Paid agency engineering for multi-site lead follow-up. October repair records distinguish provider acceptance, actual delivery and consent."
    },
    "challenges": [
      {
        "problem": "A rejected or ambiguous provider response can incorrectly mark a contact as sent.",
        "fix": "Required valid matched provider acceptance, preserved stage markers and refused ambiguous item linkage.",
        "result": "October 11 retained behavioral evidence verifies accepted updates and loop continuation without a paid send; acceptance does not establish delivery."
      },
      {
        "problem": "An opted-out contact can remain eligible for later campaign stages.",
        "fix": "Revoked marketing consent on explicit opt-out while preserving prior sent history and site isolation.",
        "result": "The current source and retained regressions distinguish accepted, opted-out, failed and unpaired outcomes."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "ftm-sms-followup-technical-overview.pdf"
    }
  },
  "wordpress-incident-response": {
    "engagement": {
      "type": "Client project",
      "client": "Name withheld",
      "detail": "Multi-site WordPress hosting client. The client is kept anonymous to protect the affected business."
    },
    "challenges": [
      {
        "problem": "Deleted files came back within seconds, and a site could return HTTP 200 while malicious code still ran.",
        "fix": "Treated regeneration as evidence of an unresolved source and used a temporary audit rule to capture the actual writer.",
        "result": "The source and its seeds were removed in one pass instead of another round of symptom deletion."
      },
      {
        "problem": "Filename scanning proved infection but could never prove absence, so the first reported scope was too small.",
        "fix": "Switched to structural classification plus process inspection across account boundaries.",
        "result": "The compromise was shown to be server-wide, not limited to the reported sites."
      },
      {
        "problem": "A zero-result scan is easy to oversell as 'the server is safe now'.",
        "fix": "Reported containment and trust restoration separately, with dated evidence per layer and a clean-rebuild recommendation.",
        "result": "21 checked sites returned successful public responses, without false assurance."
      }
    ],
    "document": {
      "label": "Case study (PDF)",
      "file": "cybersecurity-incident-response-case-study.pdf"
    }
  },
  "secure-hybrid-ai-hub": {
    "engagement": {
      "type": "Independent build",
      "detail": "My experimental open-source policy broker. Real-client and end-to-end acceptance remain separate from its synthetic test evidence."
    },
    "challenges": [
      {
        "problem": "An unrestricted model could confuse a proposed action with permission to execute it.",
        "fix": "Implemented a local broker with typed policy/task records and separately controlled privileged transitions.",
        "result": "Synthetic source verification is recorded; complete authority enforcement and end-to-end acceptance remain open."
      },
      {
        "problem": "Passing synthetic tests can be mistaken for real-client production readiness.",
        "fix": "Separated published baseline tests from Phase 1 closure and real-client acceptance gates.",
        "result": "The September public snapshot recorded 257 passes and one expected private-dossier skip; the October review did not rerun those gates."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "secure-hybrid-ai-hub-technical-overview.pdf"
    }
  },
  "email-finder": {
    "engagement": {
      "type": "Independent build",
      "detail": "My local public-signal email research tool. Candidate scores do not establish mailbox ownership, delivery or consent."
    },
    "challenges": [
      {
        "problem": "SMTP mailbox probing, the usual verification shortcut, is intrusive and proves less than it seems.",
        "fix": "Designed around public web and DNS signals with explainable heuristic scoring, and no SMTP probing at all.",
        "result": "Four CLI commands (find, verify, scrape, batch) with scoring you can inspect."
      },
      {
        "problem": "Some signals only cover part of the population, so confidence varies widely.",
        "fix": "Flagged anything without an external signal as 'verify manually' instead of showing it as confirmed.",
        "result": "October 14 local verification passed 23 collected tests with the declared dependency installed; external lookup behavior was not rerun."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "emailfinder-technical-overview.pdf"
    }
  },
  "kindred-grove": {
    "engagement": {
      "type": "Portfolio demonstration",
      "detail": "A published Shopify development-store demonstration for a premium pantry brand concept. A shared visitor password is required; real transactions and commercial transfer are unavailable."
    },
    "challenges": [
      {
        "problem": "A cart write can fail after Shopify may already have accepted it, and a blind retry adds the item twice.",
        "fix": "Serialized cart changes; after an uncertain failure the theme reads the real cart and tells the shopper, instead of repeating the write.",
        "result": "Tests cover hostile inputs, stale results, failed reads and ambiguous writes; real cart checks covered 0→1→2→0."
      },
      {
        "problem": "A wholesale draft-order Worker was an extra backend service able to create Admin API side effects.",
        "fix": "Retired it in source: it now returns HTTP 410 without reading submitted data or calling any service.",
        "result": "A smaller exposed backend surface and no extra service on the buying path."
      },
      {
        "problem": "Optional theme features must never run on unknown or missing consent.",
        "fix": "Required both the visitor's explicit consent and Shopify's matching allowed-processing result, and removed optional telemetry loaders.",
        "result": "Browser checks covered accept, partial consent, withdrawal and reload; Global Privacy Control and Do Not Track kept analytics and marketing denied."
      }
    ],
    "document": {
      "label": "Project status (PDF)",
      "file": "kindred-grove-project-status.pdf"
    }
  },
  "regenai-shopify": {
    "engagement": {
      "type": "Portfolio demonstration",
      "detail": "An independent Shopify concept storefront and support assistant. Ordering, customer sign-in, external refunds and outbound email remain closed."
    },
    "challenges": [
      {
        "problem": "An AI support recommendation must not become an unreviewed refund or email.",
        "fix": "Bound decisions to current ticket, order and rulebook versions with human review; kept external financial and email execution disabled.",
        "result": "The October 8 release recorded 86 Python and 184 JavaScript tests with one existing skip. Genuine external action receipts remain open."
      },
      {
        "problem": "A fixture-only storefront does not prove that commerce data is connected.",
        "fix": "Moved the approved 3D interface to Shopify Hydrogen with six concept products from the development store.",
        "result": "The storefront is deployed; October 14 probes found responding storefront, studio and cart pages. Ordering and customer sign-in remain closed."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "regenai-build-snapshot.pdf"
    }
  },
  "fleetwright": {
    "engagement": {
      "type": "Independent build",
      "detail": "An independent platform for owner-approved freight and maintenance workflows on owned destinations, plus catalogue crawling and a local agent. Arbitrary-site execution and commercial-scale availability remain unproven."
    },
    "challenges": [
      {
        "problem": "A worker can die after the destination accepts an action but before confirmation reaches the coordinator.",
        "fix": "Combined current fencing, exact human approval and UNKNOWN states resolved from matching destination receipts.",
        "result": "The owned-board contention evidence records 10,000 jobs and 200 coordination competitors with zero duplicate action attempts; competitors are not 200 browsers."
      },
      {
        "problem": "A healthy-looking worker can lack a usable browser driver and fail real bookings.",
        "fix": "Added browser supervision and readiness checks, then exercised driver/browser loss, strict drain and reviewed recovery.",
        "result": "The corrected release passed fresh owner booking, both approved MCP workflows and a four-record crawler export. The October 15 regression passed 289 tests with six accounted skips."
      },
      {
        "problem": "A server-local backup and source hash alone do not establish recoverable deployment.",
        "fix": "Verified signed image identities and exact deployed artifacts, then restored a fresh archive into two new databases and exercised supervised recovery.",
        "result": "All 146 deployed artifact hashes and eight signed image identities matched. Both restored databases retained workflow history; encrypted off-host restore evidence remains dated October 13."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 15 (PDF)",
      "file": "fleetwright-technical-overview.pdf"
    }
  },
  "adrevora-ai": {
    "engagement": {
      "type": "Independent build",
      "detail": "My independent revenue-intelligence product, deployed on the existing server. Company-account activation and commercial pilot acceptance remain open."
    },
    "challenges": [
      {
        "problem": "A CSV report can omit unknown-attribution money, while a fresh import can make unrelated evidence look current.",
        "fix": "Reconciled campaign, unknown and total money rows; retained exact record provenance and conservative freshness. Kept overlapping contact counts separate from money totals.",
        "result": "The maintained reference ledger reconciles with zero difference; HTTPS workflow checks exercised CSV and role metrics. Company-source reconciliation remains an activation gate."
      },
      {
        "problem": "Creative approvals can outlive the revision they approved, and repeated daily captures can rewrite reporting history.",
        "fix": "Exposed immutable revision decisions, rejected stale approvals, and retained daily UTC snapshots that replay without duplicates; bounded history work with configured ceilings.",
        "result": "The recorded release passed 120 application and 56 deployment tests, 17 HTTPS workflow checks and 23 scoped accessibility scans. Full manual accessibility acceptance remains open."
      },
      {
        "problem": "A deployment can preserve headline revenue while changing access, consent or recovery state.",
        "fix": "Compared every production table through the final upgrade and rehearsed encrypted isolated recovery with restored sessions removed.",
        "result": "All 20 table hashes were preserved and 68 release artifacts matched; eight key tables matched in the isolated restore. The measured core interruption was 5.288 seconds, not a monthly availability guarantee."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 14 (PDF)",
      "file": "adrevora-ai-technical-overview.pdf"
    }
  },
  "vericommerce-ai": {
    "engagement": {
      "type": "Independent build",
      "detail": "My commerce evidence platform. The deployed core handles catalog evidence and approved JSON exports; Shopify publishing and model training remain roadmap work."
    },
    "challenges": [
      {
        "problem": "Catalog changes can leave an answer or approved draft pointing to obsolete evidence.",
        "fix": "Preserved immutable source revisions and checked draft approval against current source identities.",
        "result": "The deployed evidence workflow retains cited quotations and provenance; recorded browser journeys cover changed-source rejection."
      },
      {
        "problem": "A successful deployment does not prove stored evidence survives restoration or a release rollback.",
        "fix": "Rehearsed populated database restoration and actual runtime rollback followed by forward recovery.",
        "result": "Recorded restoration matched table payload counts/hashes; the approved draft retained its exact content hash and final deployment matched 84 artifacts."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 16 (PDF)",
      "file": "vericommerce-ai-technical-overview.pdf"
    }
  },
  "praxisforge-ai": {
    "engagement": {
      "type": "Independent build",
      "detail": "My self-hosted Hermes-powered operations platform. A configured owner reviews exact artifacts; internal receipts do not imply external email or CRM delivery."
    },
    "challenges": [
      {
        "problem": "An interrupted agent worker can lose task ownership or allow stale work to settle.",
        "fix": "Stored durable task ownership in PostgreSQL with fenced leases and bounded recovery attempts.",
        "result": "The same live task recovered after a deliberate worker interruption, completed three roles and reached approval without another submission."
      },
      {
        "problem": "Approval can be replayed or applied after the artifact, actor or source changes.",
        "fix": "Bound approval to the exact actor, workspace, task, operation, content, source hashes and expiry; committed business records atomically.",
        "result": "Altered approval and replay were rejected in the actual UI flow; approved commitments and an internal receipt were recorded together."
      },
      {
        "problem": "An encrypted backup file alone does not prove recovery is possible.",
        "fix": "Authenticated an off-host encrypted export and restored it into a fresh isolated database.",
        "result": "Schema and 11 business tables with 26 rows matched the tested snapshot. Full host replacement and scheduled RPO/RTO remain unproven."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 16 (PDF)",
      "file": "praxisforge-ai-technical-overview.pdf"
    }
  },
  "synqharbor-ai": {
    "engagement": {
      "type": "Independent build",
      "detail": "My collaboration product. The deployed release is a multipage website and browser-local workspace; authentication, persistence and agent execution remain planned."
    },
    "challenges": [
      {
        "problem": "A revision can leave an older approval appearing valid.",
        "fix": "Made the interface distinguish client content approval from developer release approval and clear stale authorization on revision.",
        "result": "Recorded browser checks exercised revision and approval interactions; server-authoritative approval is future work."
      },
      {
        "problem": "A visually polished static site can hide content before its animation engine runs.",
        "fix": "Kept initial server-rendered content visible and made entrance motion optional.",
        "result": "Recorded full-page inspection and reduced-motion checks passed after correction."
      },
      {
        "problem": "Matching deployed bytes does not prove the browser can run them under production security headers.",
        "fix": "Validated UTF-8 script hashes and exercised the deployed browser flow after correcting an encoding mismatch.",
        "result": "The recorded final release returned all 25 routes without JavaScript or CSP errors in the tested flows."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 16 (PDF)",
      "file": "synqharbor-ai-technical-overview.pdf"
    }
  },
  "playwright-cline-integration": {
    "engagement": {
      "type": "Client project",
      "client": "Name withheld",
      "detail": "Anonymous client-requested Windows integration. Verified preparation used the owner’s computer and synthetic tasks; client-machine installation, funded work and contractual acceptance remain pending."
    },
    "challenges": [
      {
        "problem": "A connection indicator does not establish that Cline can execute a complete browser workflow.",
        "fix": "Ran the synthetic task through Cline’s Windows GUI with individual action approvals and repeated it after real editor restarts.",
        "result": "The current project overview records two local GUI runs with five browser assertions passing in each; client-operated verification remains pending."
      },
      {
        "problem": "A screenshot’s relative path inherited the editor application directory instead of the intended workspace.",
        "fix": "Added an explicit MCP process working directory, restarted the editor and reran the full browser workflow.",
        "result": "The final screenshot was verified as a real file in the intended workspace and visually inspected; exact restoration and disable/re-enable were also exercised."
      }
    ],
    "document": {
      "label": "Technical overview · reviewed October 18 (PDF)",
      "file": "playwright-cline-integration-technical-overview.pdf"
    }
  }
});
