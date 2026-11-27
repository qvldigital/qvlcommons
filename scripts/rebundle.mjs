#!/usr/bin/env node
// npm run bundle [-- <source> …] — rebuilds the bundle sections from the JSX sources (cir16, 27.11.2026).
// Both bundles (design-system/_ds_bundle.js, design-system/components/bundle.js) carry every component and
// UI-kit source as a compiled section "// <path>" plus a SHA-256 prefix in the header's sourceHashes.
// Without arguments it rebuilds every .jsx section whose hash no longer matches its source;
// with arguments only those (paths relative to design-system/). --check only reports.
// Needs @babel/standalone (devDependency): npm install once.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { join } from "node:path";
import { ROOT } from "./lib.mjs";

const require = createRequire(import.meta.url);
let Babel;
try { Babel = require("@babel/standalone"); }
catch { console.error("@babel/standalone is missing: run npm install in qvlcommons first."); process.exit(2); }

const DS = join(ROOT, "design-system");
const BUNDLES = ["_ds_bundle.js", "components/bundle.js"];
const args = process.argv.slice(2), check = args.includes("--check");
const hash = (rel) => createHash("sha256").update(readFileSync(join(DS, rel))).digest("hex").slice(0, 12);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");

// Same shape the bundles already use: imports of other modules become __ds_scope.<Name>, exports land in __ds_scope.
function compile(rel) {
  let src = readFileSync(join(DS, rel), "utf8");
  const names = [...src.matchAll(/^export (?:function|const) (\w+)/gm)].map((m) => m[1]);
  const imported = [...src.matchAll(/^import \{([^}]*)\} from "\.[^"]*";$/gm)]
    .flatMap((m) => m[1].split(",").map((x) => x.trim()).filter(Boolean));
  src = src.replace(/^export (function|const) /gm, "$1 ").replace(/^import .*;\n/gm, "");
  let out = Babel.transform(src, { presets: [["react", { runtime: "classic" }]] }).code.replace(/^\n+/, "");
  for (const n of imported) out = out.replace(new RegExp(`(?<![\\w.'"])${n}(?=[\\s,)(.])`, "g"), `__ds_scope.${n}`);
  out = out.replace(/[^\x00-\x7f]/g, (c) => {
    const n = c.charCodeAt(0);
    return n < 256 ? "\\x" + n.toString(16).toUpperCase().padStart(2, "0") : "\\u" + n.toString(16).toUpperCase().padStart(4, "0");
  });
  const exp = names.length ? `\nObject.assign(__ds_scope, { ${names.join(", ")} });` : "";
  return `try { (() => {\n${out}${exp}\n})(); } catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: String((e && e.message) || e) }); }`;
}

const header = (b) => JSON.parse(b.match(/"sourceHashes":(\{[^}]*\})/)[1]);
const first = readFileSync(join(DS, BUNDLES[0]), "utf8");
const files = args.filter((a) => !a.startsWith("--"));
const todo = files.length ? files : Object.entries(header(first)).filter(([k, v]) => k.endsWith(".jsx") && hash(k) !== v).map(([k]) => k);
if (!todo.length) { console.log("Bundles are up to date."); process.exit(0); }

for (const bundle of BUNDLES) {
  let b = readFileSync(join(DS, bundle), "utf8");
  for (const rel of todo) {
    const head = `// ${rel}\n`, start = b.indexOf(head);
    if (start < 0) throw new Error(`${rel} has no section in ${bundle}`);
    const bodyStart = start + head.length;
    const end = b.indexOf("\n\n", b.indexOf("})(); } catch (e)", bodyStart));
    if (check) { console.log(`${bundle}: ${rel} is stale`); continue; }
    b = b.slice(0, bodyStart) + compile(rel) + b.slice(end);
    const re = new RegExp(`("${esc(rel)}":")[0-9a-f]+`);
    if (!re.test(b)) throw new Error(`${rel} has no sourceHashes entry in ${bundle}`);
    b = b.replace(re, `$1${hash(rel)}`);
  }
  if (!check) { new Function(b); writeFileSync(join(DS, bundle), b); console.log(`${bundle}: rebuilt ${todo.join(", ")}`); }
}
process.exit(check ? 1 : 0);
