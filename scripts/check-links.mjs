import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlFiles = [
  "index.html",
  "404.html",
  ...fs.readdirSync(path.join(root, "docs")).filter((name) => name.endsWith(".html")).map((name) => `docs/${name}`),
];
const missing = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|data:|#)/.test(raw)) continue;
    const clean = raw.split(/[?#]/, 1)[0];
    if (!clean) continue;
    let target = clean.startsWith("/")
      ? path.join(root, clean)
      : path.resolve(path.dirname(path.join(root, file)), clean);
    if (target.endsWith(path.sep)) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) missing.push(`${file}: ${raw}`);
  }
}

if (missing.length > 0) {
  console.error(`Missing local links:\n${missing.join("\n")}`);
  process.exit(1);
}

console.log(`Checked local links in ${htmlFiles.length} HTML pages.`);
