// Shared helpers for the design checks: a static server on 127.0.0.1 and the list of pages to measure.
import { createServer } from "node:http";
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { homedir } from "node:os";

export const ROOT = normalize(join(import.meta.dirname, ".."));

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript", ".jsx": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2" };

// Serves the repository read-only. With ?pseudo=1, HTML pages get scripts/pseudo-l10n.js injected.
export function serve() {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, "http://x");
    let path = normalize(join(ROOT, decodeURIComponent(url.pathname)));
    if (!path.startsWith(ROOT)) { res.writeHead(403).end(); return; }
    if (url.pathname.endsWith("/")) path = join(path, "index.html");
    try {
      let body = await readFile(path);
      const type = TYPES[extname(path)] || "application/octet-stream";
      if (type.startsWith("text/html") && url.searchParams.get("pseudo") === "1" && !path.endsWith("harness.html"))
        body = body.toString().replace(/<head>/i, '<head><script src="/scripts/pseudo-l10n.js"></script>');
      res.writeHead(200, { "content-type": type, "cache-control": "no-store" }).end(body);
    } catch { res.writeHead(404).end(); }
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok({ base: `http://127.0.0.1:${server.address().port}`, close: () => server.close() })));
}

// Pages to measure: every component preview (through the harness, which has a viewport meta) and the UI kits.
export async function pages() {
  const comps = (await readdir(join(ROOT, "design-system/components"), { withFileTypes: true }))
    .filter((d) => d.isDirectory() && existsSync(join(ROOT, "design-system/components", d.name, "preview.html"))).map((d) => d.name).sort();
  const kits = (await readdir(join(ROOT, "design-system/ui_kits"), { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).sort();
  return [
    ...comps.map((c) => ({ name: `component ${c}`, path: `/scripts/harness.html?c=${c}`, mobile: true })),
    // The kits show phone frames on a desktop canvas and have no viewport meta: measure them at desktop width only.
    ...kits.map((k) => ({ name: `kit ${k}`, path: `/design-system/ui_kits/${k}/`, mobile: false })),
  ];
}

export function tool(envName, candidates, hint) {
  const found = [process.env[envName], ...candidates].find((p) => p && existsSync(p));
  if (!found) { console.error(`${envName} not found. ${hint}`); process.exit(2); }
  return found;
}
export const HOME = homedir();
