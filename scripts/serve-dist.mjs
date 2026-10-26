// Serves dist/ the way Vercel does for this site: exact files, folder index.html,
// and dist/404.html with a real 404 status. `vite preview` instead falls back to the
// home page for every path, which hides prerender and hydration problems.
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { createGzip } from "node:zlib";

const dist = path.resolve("dist");
const port = Number(process.env.PORT ?? 4174);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};

const isFile = async (file) => (await stat(file).catch(() => null))?.isFile() ?? false;

createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }
  const target = path.join(dist, pathname);
  const relative = path.relative(dist, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    response.writeHead(400).end();
    return;
  }
  let file = null;
  for (const candidate of [target, path.join(target, "index.html")]) {
    if (await isFile(candidate)) {
      file = candidate;
      break;
    }
  }
  const status = file ? 200 : 404;
  file ??= path.join(dist, "404.html");
  const type = types[path.extname(file)] ?? "application/octet-stream";
  // Compress text like Vercel does, so local Lighthouse numbers are comparable.
  const compress = /text|javascript|json|xml|svg/.test(type) && /gzip/.test(request.headers["accept-encoding"] ?? "");
  response.writeHead(status, { "Content-Type": type, ...(compress ? { "Content-Encoding": "gzip" } : {}) });
  const stream = createReadStream(file);
  (compress ? stream.pipe(createGzip()) : stream).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`serving dist/ on http://localhost:${port}`));
