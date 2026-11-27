#!/usr/bin/env node
// npm run check:design — impeccable's detector as a measuring device (CI review 27.11.2026, point 6).
// Renders every component preview and UI kit and scans it at 390 and 1280 px. Rules that contradict
// the QVL CI are ignored with a reason in .impeccable/config.json; everything else is a finding.
// Not a build gate: run it by hand and before a release. Exit code 1 means findings.
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { join } from "node:path";
import { serve, pages, tool, HOME, ROOT } from "./lib.mjs";

const impeccable = tool("IMPECCABLE", [join(HOME, ".claude/skills/impeccable/scripts/impeccable")],
  "Install the impeccable skill (global, ~/.claude/skills/impeccable) or set IMPECCABLE to its scripts/impeccable.");

const run = promisify(execFile);
const { base, close } = await serve();
const list = await pages();
let total = 0;
try {
  for (const viewport of ["390x844", "1280x800"]) {
    const urls = list.filter((p) => p.mobile || viewport !== "390x844").map((p) => base + p.path);
    // One detector run per page takes long; six run side by side.
    const queue = [...urls], found = [];
    await Promise.all(Array.from({ length: 6 }, async () => {
      for (let u; (u = queue.shift()); ) {
        let out = "[]";
        try { ({ stdout: out } = await run(impeccable, ["detect", "--json", "--viewport", viewport, u], { cwd: ROOT, maxBuffer: 64 << 20 })); }
        catch (e) { // the detector exits non-zero when it finds something; no JSON at all means it failed
          if (!String(e.stdout || "").trim().startsWith("[")) { console.error(`detector failed on ${u}: ${String(e.message).split("\n")[0]}`); process.exitCode = 2; continue; }
          out = e.stdout;
        }
        found.push(...JSON.parse(out || "[]"));
      }
    }));
    total += found.length;
    console.log(`\n${viewport}: ${found.length} finding(s) on ${urls.length} page(s)`);
    for (const f of found) console.log(`  ${f.severity || "-"}  ${f.antipattern}  ${f.file.replace(base, "")}  ${f.snippet || ""}`.trimEnd());
  }
} finally { close(); }
console.log(process.exitCode ? "\nThe detector failed on some pages (see above); the result is incomplete." : total ? `\n${total} finding(s).` : "\nNo findings.");
process.exit(process.exitCode || (total ? 1 : 0));
