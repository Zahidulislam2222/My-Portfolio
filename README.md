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
