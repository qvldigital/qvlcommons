#!/usr/bin/env node
// npm run check:i18n — 11-language stress test (CI review 27.11.2026, point 6).
// Every text is pseudo-localised (about 40 % longer, with the league languages' diacritics, scripts/pseudo-l10n.js),
// then the taste skill's inspect.mjs measures the pages in a real browser. Only its measuring rules count;
// its house-style rules (eyebrow, micro-label, gradient, shadow, palette …) are ignored, the QVL CI decides those.
// Not a build gate: run it by hand and before a release. Exit code 1 means findings.
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { serve, pages, tool, ROOT } from "./lib.mjs";

const MEASURE = new Set(["overflow", "side-scroll", "clipped-text", "covered-text", "contrast", "broken-image", "blend-text"]);
const inspect = tool("TASTE_INSPECT", [join(ROOT, ".claude/skills/design-taste-frontend/scripts/inspect.mjs")],
  "Install the design-taste-frontend skill in .claude/skills/ or set TASTE_INSPECT to its scripts/inspect.mjs.");
const run = promisify(execFile);

const { base, close } = await serve();
const list = await pages();
const results = [];
try {
  const queue = [...list];
  await Promise.all(Array.from({ length: 3 }, async () => {
    for (let p; (p = queue.shift()); ) {
      const widths = p.mobile ? "390,768,1280" : "1280";
      const url = base + p.path + (p.path.includes("?") ? "&" : "?") + "pseudo=1";
      let report;
      try {
        const { stdout } = await run("node", [inspect, url, "--widths", widths, "--json", "--out", join(tmpdir(), "qvl-check-i18n", p.name.replace(/\W+/g, "-"))], { maxBuffer: 64 << 20 });
        report = JSON.parse(stdout);
      } catch (e) {
        try { report = JSON.parse(e.stdout); } catch { results.push({ page: p.name, error: String(e.message).split("\n")[0] }); continue; }
      }
      for (const f of report.findings || []) if (MEASURE.has(f.id)) results.push({ page: p.name, ...f });
    }
  }));
} finally { close(); }

const errors = results.filter((r) => r.error), found = results.filter((r) => !r.error);
for (const r of found.sort((a, b) => a.page.localeCompare(b.page))) console.log(`${r.level}  ${r.id}  ${r.page} @${r.width}px  ${r.message}`);
for (const r of errors) console.log(`ERROR  ${r.page}: ${r.error}`);
console.log(found.length ? `\n${found.length} finding(s) on ${list.length} page(s).` : `\nNo findings on ${list.length} page(s).`);
process.exit(found.length || errors.length ? 1 : 0);
