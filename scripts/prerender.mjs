// Writes one static HTML file per page after `vite build` and the SSR bundle build.
// Every page gets its own title, description, canonical, social tags and JSON-LD,
// and the visible text is in the first response instead of only after JavaScript runs.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverBundle = path.join(root, "dist-server", "entry-server.js");

const { render, prerenderPages, seo, absoluteUrl } = await import(pathToFileURL(serverBundle).href);
const template = await readFile(path.join(dist, "index.html"), "utf8");

const SEO_REGION = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const ROOT = '<div id="root"></div>';
if (!SEO_REGION.test(template) || !template.includes(ROOT)) {
  throw new Error("dist/index.html is missing the seo markers or the empty root element");
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// JSON inside <script> must not be able to close the element.
const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

function head(page) {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image);
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    page.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="${page.type}" />`,
    `<meta property="og:site_name" content="${escapeHtml(seo.siteName)}" />`,
    `<meta property="og:locale" content="${escapeHtml(seo.locale)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}" />`,
    ...page.jsonLd.map((data) => `<script type="application/ld+json">${jsonLd(data)}</script>`),
  ];
  return tags.join("\n    ");
}

const outputFile = (pagePath) =>
  pagePath === "/"
    ? path.join(dist, "index.html")
    : pagePath === "/404"
      ? path.join(dist, "404.html")
      : path.join(dist, ...pagePath.split("/").filter(Boolean), "index.html");

const pages = prerenderPages();
const paths = new Set();
for (const page of pages) {
  if (paths.has(page.path)) throw new Error(`duplicate page path ${page.path}`);
  paths.add(page.path);
  const body = render(page.path);
  if (!body.includes("<h1")) throw new Error(`${page.path} rendered without an h1`);
  const html = template
    // Function replacements: page text may contain "$&" and other replacement patterns.
    .replace(SEO_REGION, () => head(page))
    .replace(ROOT, () => `<div id="root">${body}</div>`);
  const file = outputFile(page.path);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages
    .filter((page) => !page.noindex)
    .map((page) => `  <url><loc>${escapeHtml(absoluteUrl(page.path))}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await rm(path.join(root, "dist-server"), { recursive: true, force: true });

console.log(`prerendered ${pages.length} pages and a sitemap of ${pages.filter((page) => !page.noindex).length} URLs`);
