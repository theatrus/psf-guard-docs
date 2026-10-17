// Collects the RESHOOT and SHOT comments in the pages into SCREENSHOT-PLAN.md.
//   <!-- RESHOOT: file.png | what to show -->        above an image to redo
//   <!-- SHOT: file.png | what to show | caption --> where a new image goes
// The notes above "## Redo" in the plan are kept; the lists below are rebuilt.
// Run with: npm run shots
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const planPath = path.join(root, "SCREENSHOT-PLAN.md");
const pages = [
  "index.html",
  ...fs.readdirSync(path.join(root, "docs"))
    .filter((name) => name.endsWith(".html"))
    .sort()
    .map((name) => `docs/${name}`),
];
const marker = /<!--\s*(RESHOOT|SHOT):\s*([^|]+?)\s*\|\s*([\s\S]*?)\s*(?:\|\s*([\s\S]*?)\s*)?-->/g;
const tidy = (text) => text.replace(/\s+/g, " ").trim();

const plan = new Map();
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  const pageName = page === "index.html" ? "home" : page === "docs/index.html" ? "getting-started" : path.basename(page, ".html");
  for (const [, kind, file, what] of html.matchAll(marker)) {
    const name = file.trim();
    const entry = plan.get(name) ?? { kind, what: [], pages: [] };
    if (kind === "RESHOOT") entry.kind = "RESHOOT";
    if (!entry.what.includes(tidy(what))) entry.what.push(tidy(what));
    if (!entry.pages.includes(pageName)) entry.pages.push(pageName);
    plan.set(name, entry);
  }
}

const assets = new Set(fs.readdirSync(path.join(root, "assets")));
const sections = [];
for (const [kind, title] of [["RESHOOT", "Redo (existing images)"], ["SHOT", "New screenshots"]]) {
  const names = [...plan.keys()].filter((name) => plan.get(name).kind === kind).sort();
  const lines = [`## ${title} (${names.length})`, ""];
  for (const name of names) {
    const entry = plan.get(name);
    let flag = "";
    if (kind === "RESHOOT" && !assets.has(name)) flag = " **(file missing)**";
    if (kind === "SHOT" && assets.has(name)) flag = " **(name already used)**";
    lines.push(`- \`${name}\`${flag} — pages: ${entry.pages.join(", ")}`);
    for (const what of entry.what) lines.push(`  - ${what}`);
  }
  sections.push(lines.join("\n"));
}

const current = fs.existsSync(planPath) ? fs.readFileSync(planPath, "utf8") : "# Screenshot plan\n\n";
const head = current.split(/^## Redo \(existing images\)/m)[0];
fs.writeFileSync(planPath, `${head}${sections.join("\n\n")}\n`);
console.log(`Wrote SCREENSHOT-PLAN.md: ${[...plan.values()].filter((e) => e.kind === "RESHOOT").length} to redo, ${[...plan.values()].filter((e) => e.kind === "SHOT").length} new.`);
