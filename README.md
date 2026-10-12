# Zahidul Islam — Portfolio

**Full Stack Engineer | Cloud Architect | HealthTech Specialist**

Production portfolio showcasing 9 projects across healthcare, AI/RAG, e-commerce, and cloud infrastructure — built with React 18, TypeScript, and Tailwind CSS.

**Live:** [zahidul-islam.vercel.app](https://zahidul-islam.vercel.app)

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 18, TypeScript 5, Vite 5 |
| **Styling** | Tailwind CSS 3, shadcn/ui (Radix), CSS custom properties |
| **Animation** | Framer Motion (scroll-triggered, page transitions, micro-interactions) |
| **Testing** | Vitest, jsdom |
| **Deployment** | Vercel (auto-deploy on push to main) |

## Architecture

Config-driven single-page application. All content lives in a single config file — projects, skills, services, process, testimonials, and personal info. Zero hardcoded content in components.

```
src/config/portfolio.config.ts → Section Components → UI
```

**Sections:** Hero (typewriter + particles) → About (animated counters) → Projects (filterable grid, image carousels, video modals, multi-link dropdowns) → Skills (tiered by expertise) → Process (4-step delivery workflow) → Services (pricing tiers) → Testimonials → Contact (EmailJS)

**Routing:** React Router — `/` (Index) and `*` (404). Hash-based anchor navigation for sections.

## Projects Showcased

| # | Project | Stack | Highlights |
|---|---------|-------|------------|
| 1 | **MediConnect V3** | React, Node.js, FastAPI, AWS+GCP+Azure, Terraform, Kafka | Tri-cloud telehealth, 42 FHIR R4 resources, 756+ tests, $2/mo idle cost |
| 2 | **EDS Dental** | React, Supabase, Cloudflare Pages | Real client, HIPAA 95%, FHIR R4 100%, bilingual |
| 3 | **RAG Production Stack** | Docker, LightRAG, Prometheus, Grafana, Authelia | 23 services, zero-trust 2FA, 6 compliance scanners |
| 4 | **Chronos V2** | React, WordPress 7.0, WPGraphQL, Stripe | Headless e-commerce, 48 shadcn/ui components, WP 7.0 AI |
| 5 | **EquipCert AI** | Next.js 16, Capacitor, Supabase, Stripe | Multi-AI (Gemini/OpenAI/Claude), OSHA compliance, offline-first |
| 6 | **HealthCode Analysis** | WordPress, Python, Cloudflare Workers, Dialogflow | Single-command multi-site deployment, 313 tests, AI chatbot |
| 7 | **n8n Automations** | n8n, LangChain, Google Gemini | AI pricing monitor, autonomous lead qualification |
| 8 | **Agency Platform** | WordPress, Cloudflare Workers, Calendly API | Serverless booking bot, automated sales pipeline |
| 9 | **Medical Clinic** | WordPress, Elementor | Before/after visualizer, patient acquisition |

## Quick Start

```bash
# Clone
git clone https://github.com/Zahidulislam2222/zahidul-islam.git
cd zahidul-islam

# Install
npm install

# Dev server
npm run dev        # localhost:8080

# Production build
npm run build

# Test
npm run test       # Vitest single run
npm run lint       # ESLint
```

## Environment Variables

Create `.env` in root:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

## Project Structure

```
src/
├── config/
│   └── portfolio.config.ts    # All content (projects, skills, services, process)
├── components/
│   ├── HeroSection.tsx        # Typewriter + particle animation
│   ├── AboutSection.tsx       # Bio + animated stat counters
│   ├── ProjectsSection.tsx    # Filterable grid, carousels, video modals
│   ├── SkillsSection.tsx      # Tiered skill categories with icon mapping
│   ├── ProcessSection.tsx     # 4-step delivery workflow
│   ├── ServicesSection.tsx    # Pricing tiers
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx     # EmailJS integration
│   ├── Navigation.tsx         # Scroll-aware nav with active states
│   ├── Footer.tsx
│   └── ui/                    # shadcn/ui primitives (managed by CLI)
├── hooks/
├── lib/
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── test/
```

## Updating Content

Project documents and portfolio PDFs can now be synchronized with one local command.
On Windows, from this folder:

```powershell
.\project-sync.cmd status --online
.\project-sync.cmd sync adrevora-ai
.\project-sync.cmd sync adrevora-ai --apply --reviewed
```

The first command reports changed Google Docs, dossiers, public bundles and PDFs.
The second previews; the third applies reviewed changes locally. Replace the ID
with another registered project, or `all`. `--json` returns detailed receipts.
The tool uses the existing Google Python authentication and PyMuPDF installation;
no paid AI calls or new subscription are involved. On a separately configured
Python environment, install `google-api-python-client`, `google-auth-httplib2`,
`google-auth` and `PyMuPDF` first. Read-only offline status needs only Python.

The private registry is `memory/project-sync/registry.json`. Each project maps its
existing Google Doc ID to one stable filename under `public/docs/`. Verified
dossier paths enable project-change detection; unmapped dossiers are explicitly
reported. `google` sources export the existing Doc; `curated` sources retain a
reviewed public case study because its dossier may be newer than its Google Doc.
Do not switch a curated project to Google until its newer facts are reconciled.

When a project's facts change, update its private dossier first, then prepare
reviewed public content. Dossier text is never uploaded. An optional public JSON
bundle (`portfolio`, `studio`, `evidence`) updates the selected project in all
three existing config files without replacing other projects. For a new project,
add its verified Doc ID, unique project ID, stable PDF basename, optional dossier
and bundle paths to the same private registry. Use the registered AdRevora entry
as the local example. Bundle/schema errors are caught by the portfolio test/type
checks; run those and the build before publishing.
The legacy portfolio contains additional hidden entries; the visible studio owns
the selected-project count. A studio-only entry can set `portfolio` to `null`.
Five hidden legacy entries have no verified native Doc mapping and are explicitly
listed as `UNMAPPED LEGACY`; `all` synchronizes the 21 selected studio projects.
Selected projects use their registered current technical PDF; older secondary
attachment links are retained in private backups rather than the current bundle.

For an explicitly requested native Google Doc edit, prepare a `batchUpdate` JSON
file with `requests` and `writeControl.requiredRevisionId`, then add
`--requests path/to/reviewed-batch.json` to the selected project's apply command.
The tool edits that same Doc, attempts PDF export, and refreshes its registered
canonical `my-project-view/` PDF and the portfolio PDF together. This requires a
verified existing canonical PDF mapping. Ordinary PDF sync never writes into
another project's `my-project-view/`. Preserve native document structure when
preparing requests; do not generate a blanket dossier replacement.

Exports are parsed and checked for readable text and obvious private material
before installation. Backups and receipts stay in `memory/project-sync/`.
Project entries may include reviewed `public_redactions` regular expressions
(matched within each rendered text line) and
a `public_redaction_label`; these remove credential-like example lines from the
derived PDF before validation. Their policy is fingerprinted, and changing it
forces a fresh native export. The original Google Doc remains untouched.
Local installation failures restore prior files while preserving concurrent external
edits for inspection. A remote Doc edit cannot be undone by that rollback, so an
interrupted update leaves a failure receipt. After inspecting the same Doc, retry
without `--requests`; recovery refreshes both registered PDFs before acknowledging
the pending write. Never replay an uncertain native edit blindly.
The command detects overlapping runs; after a crash, inspect the recorded process
before removing a stale lock. Review public content for client confidentiality as
well as secrets. Offline `CURRENT` means local artifacts match the last sync;
`--online` also checks the Doc version. Code changes without dossier updates cannot
be inferred. There is no background scheduler or automatic deployment: after a
successful sync, test/build and use the existing portfolio release workflow.

Reusable local safety tests: `python -m unittest discover -s tests -p project_sync_test.py`.

Edit `src/config/portfolio.config.ts` — no component changes needed. The config drives:

- **`personal`** — name, bio, roles, contact info, resume URL
- **`stats`** — animated counter values
- **`projects[]`** — cards with images, tech, achievements, links, PDFs, videos
- **`skillCategories[]`** — grouped by domain with tier levels
- **`process[]`** — delivery workflow steps
- **`services[]`** — pricing packages
- **`testimonials[]`** — client reviews

## Deployment

Deployed on Vercel with auto-deploy on push to `main`. Static assets (resume PDF, project PDFs) served from `public/`.

---

**Contact:** muhammadzahidulislam2222@gmail.com | [LinkedIn](https://linkedin.com/in/zahidul-islam-developer) | [GitHub](https://github.com/Zahidulislam2222)
