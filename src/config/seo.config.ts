import { portfolioConfig } from "./portfolio.config";
import { studioConfig, studioProjects, type StudioProject } from "./studio.config";
import { projectEvidence } from "./project-evidence.config";

// One owner for every crawlable page: its path, head tags and structured data.
// The prerender script and the page components both read from here.

export const seo = {
  siteUrl: "https://zahidul-islam.com",
  siteName: "Zahidul Islam",
  locale: "en_US",
  defaultImage: "/og-image.png",
  defaultImageAlt: "Zahidul Islam, AI automation engineer",
  titleSuffix: " | Zahidul Islam",
  home: {
    title: "Zahidul Islam | AI Automation Engineer | n8n, AI Agents & RAG",
    description:
      "AI automation engineer building RAG chatbots, AI agents, voice agents, n8n workflows and API integrations. Paid client work, case studies and technical PDFs.",
  },
  work: {
    path: "/work",
    title: "Case studies: AI agents, RAG, automation and cloud",
    description:
      "Case studies from paid client work and independent builds: voice agents, RAG assistants, n8n and Twilio automation, browser operations, WordPress and cloud.",
  },
  notFound: {
    path: "/404",
    title: "Page not found",
    description: "This page doesn't exist. Every current project is in the work index.",
  },
  knowsAbout: [
    "AI automation",
    "Retrieval-augmented generation",
    "AI agents",
    "Voice agents",
    "Model Context Protocol",
    "n8n",
    "Python",
    "FastAPI",
    "TypeScript",
    "React",
    "WordPress",
    "Shopify",
    "Cloud architecture",
  ],
  // Upwork and the main professional profiles tie the site to one identity.
  sameAs: [
    portfolioConfig.socials.linkedin,
    portfolioConfig.socials.github,
    portfolioConfig.upworkProfileUrl,
    portfolioConfig.socials.youtube,
    portfolioConfig.socials.contra,
    portfolioConfig.socials.twitter,
    portfolioConfig.socials.facebook,
    portfolioConfig.socials.instagram,
    portfolioConfig.socials.n8n,
  ].filter(Boolean) as string[],
} as const;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: "website" | "article" | "profile";
  noindex?: boolean;
  jsonLd: Record<string, unknown>[];
};

export const absoluteUrl = (path: string) =>
  `${seo.siteUrl}${path === "/" ? "/" : path}`;

const personId = `${seo.siteUrl}/#person`;
// Matches the "Name withheld" placeholder used for confidential clients in project evidence.
const CLIENT_WITHHELD = /withheld/i;

// Search snippets show about 155 characters: prefer a whole sentence, else cut at a word.
export const clip = (text: string, limit = 158) => {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit - 1);
  const sentence = cut.lastIndexOf(". ");
  if (sentence > limit * 0.6) return cut.slice(0, sentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:·\s]+$/, "")}…`;
};

const firstSentence = (text = "") => text.match(/^[^.!?]+[.!?]/)?.[0] ?? text;

export const projectPath = (project: Pick<StudioProject, "id">) => `/work/${project.id}`;

// Generated 1200x630 JPEG previews (scripts/make_web_images.py); WebP covers are not
// accepted by every social preview crawler.
export const projectImage = (project: StudioProject) =>
  project.image ? `/og/${project.id}.jpg` : seo.defaultImage;

const person = () => ({
  "@type": "Person",
  "@id": personId,
  name: portfolioConfig.personal.name,
  jobTitle: portfolioConfig.personal.title,
  description: portfolioConfig.personal.bio,
  url: absoluteUrl("/"),
  image: absoluteUrl(seo.defaultImage),
  email: `mailto:${portfolioConfig.personal.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: seo.knowsAbout,
  sameAs: seo.sameAs,
});

const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export function homeMeta(): PageMeta {
  return {
    path: "/",
    title: seo.home.title,
    description: seo.home.description,
    image: seo.defaultImage,
    imageAlt: seo.defaultImageAlt,
    type: "profile",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: absoluteUrl("/"),
        name: seo.home.title,
        mainEntity: person(),
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: seo.siteName,
        url: absoluteUrl("/"),
        publisher: { "@id": personId },
      },
    ],
  };
}

export function workMeta(): PageMeta {
  const labels = studioConfig.labels;
  return {
    path: seo.work.path,
    title: `${seo.work.title}${seo.titleSuffix}`,
    description: seo.work.description,
    image: seo.defaultImage,
    imageAlt: seo.defaultImageAlt,
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        url: absoluteUrl(seo.work.path),
        name: seo.work.title,
        description: seo.work.description,
        author: { "@id": personId },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: studioProjects.length,
          itemListElement: studioProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(projectPath(project)),
            name: project.name,
          })),
        },
      },
      breadcrumbs([
        { name: labels.breadcrumbHome, path: "/" },
        { name: labels.breadcrumbWork, path: seo.work.path },
      ]),
    ],
  };
}

export function projectMeta(project: StudioProject): PageMeta {
  const labels = studioConfig.labels;
  const evidence = projectEvidence[project.id];
  const path = projectPath(project);
  // Short summaries borrow the first sentence of the detail so the snippet carries real proof.
  const description = clip(
    project.summary.length >= 110 ? project.summary : `${project.summary} ${firstSentence(project.detail)}`,
  );
  return {
    path,
    title: `${project.name}: case study${seo.titleSuffix}`,
    description,
    image: projectImage(project),
    imageAlt: project.imageAlt ?? `${project.name} project preview`,
    type: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(path)}#work`,
        url: absoluteUrl(path),
        name: project.name,
        headline: `${project.name}: ${project.summary}`,
        description,
        image: absoluteUrl(projectImage(project)),
        genre: project.category,
        keywords: project.stack.join(", "),
        creator: { "@id": personId },
        author: { "@type": "Person", "@id": personId, name: portfolioConfig.personal.name, url: absoluteUrl("/") },
        // A withheld client name is not an organization search engines should index.
        ...(evidence?.engagement.type === "Client project" && evidence.engagement.client && !CLIENT_WITHHELD.test(evidence.engagement.client)
          ? { sourceOrganization: { "@type": "Organization", name: evidence.engagement.client } }
          : {}),
      },
      breadcrumbs([
        { name: labels.breadcrumbHome, path: "/" },
        { name: labels.breadcrumbWork, path: seo.work.path },
        { name: project.name, path },
      ]),
    ],
  };
}

export function notFoundMeta(): PageMeta {
  return {
    path: seo.notFound.path,
    title: `${seo.notFound.title}${seo.titleSuffix}`,
    description: seo.notFound.description,
    image: seo.defaultImage,
    imageAlt: seo.defaultImageAlt,
    type: "website",
    noindex: true,
    jsonLd: [],
  };
}

/** Every page written to static HTML at build time, in sitemap order. */
export function prerenderPages(): PageMeta[] {
  return [homeMeta(), workMeta(), ...studioProjects.map(projectMeta), notFoundMeta()];
}
