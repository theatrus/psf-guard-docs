import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");

const docsPages = fs
  .readdirSync(path.join(root, "docs"))
  .filter((name) => name.endsWith(".html") && name !== "web-grader.html")
  .sort();

const pages = ["index.html", "404.html", ...docsPages.map((name) => `docs/${name}`)];

const docsNavigation = [
  ["index.html", "Getting Started"],
  ["grader.html", "The Grader UI"],
  ["astrometry.html", "Sky Context & Solver"],
  ["screening.html", "Quality Screening"],
  ["astrometry-quality.html", "Astrometry Quality"],
  ["workflows.html", "Rejects & Sync"],
  ["cli.html", "CLI Reference"],
  ["configuration.html", "Configuration & API"],
];

function pageLinks(file) {
  if (file === "404.html") {
    return {
      home: "/",
      logo: "/assets/logo.svg",
      docs: "/docs/",
      screening: "/docs/screening.html",
      install: "/#install",
    };
  }
  if (file.startsWith("docs/")) {
    return {
      home: "../",
      logo: "../assets/logo.svg",
      docs: "./",
      screening: "screening.html",
      install: "../#install",
    };
  }
  return {
    home: "./",
    logo: "assets/logo.svg",
    docs: "docs/",
    screening: "docs/screening.html",
    install: "#install",
  };
}

function header(file) {
  const links = pageLinks(file);
  return `<!-- site-header:start -->
<header class="site-header">
  <nav class="nav" aria-label="Primary navigation">
    <a class="brand" href="${links.home}"><img src="${links.logo}" alt=""> PSF Guard</a>
    <div class="nav-links">
      <a href="${links.docs}" class="keep">Docs</a>
      <a href="${links.screening}">Screening</a>
      <a href="${links.install}">Install</a>
      <a href="https://github.com/theatrus/psf-guard">GitHub</a>
      <a class="cta" href="https://github.com/theatrus/psf-guard/releases/latest">Download</a>
    </div>
  </nav>
</header>
<!-- site-header:end -->`;
}

function sidebar(file) {
  const activePage = path.basename(file);
  const links = docsNavigation
    .map(([href, label]) => {
      const active = href === activePage ? ' class="active" aria-current="page"' : "";
      return `    <li><a href="${href === "index.html" ? "./" : href}"${active}>${label}</a></li>`;
    })
    .join("\n");

  return `<!-- docs-nav:start -->
<aside class="docs-nav">
  <h4>Documentation</h4>
  <ul>
${links}
  </ul>
  <h4>Project</h4>
  <ul>
    <li><a href="https://github.com/theatrus/psf-guard">GitHub</a></li>
    <li><a href="https://github.com/theatrus/psf-guard/releases">Releases</a></li>
    <li><a href="https://github.com/theatrus/psf-guard/issues">Report an issue</a></li>
    <li><a href="https://theatr.us/software">More at theatr.us</a></li>
  </ul>
</aside>
<!-- docs-nav:end -->`;
}

function replaceGeneratedBlock(html, name, fallback, generated, file) {
  const marker = new RegExp(`<!-- ${name}:start -->[\\s\\S]*?<!-- ${name}:end -->`);
  if (marker.test(html)) return html.replace(marker, generated);
  if (fallback.test(html)) return html.replace(fallback, generated);
  throw new Error(`${file}: could not find ${name} block`);
}

const stale = [];
for (const file of pages) {
  const fullPath = path.join(root, file);
  const original = fs.readFileSync(fullPath, "utf8");
  let generated = replaceGeneratedBlock(
    original,
    "site-header",
    /<header class="site-header">[\s\S]*?<\/header>/,
    header(file),
    file,
  );

  if (file.startsWith("docs/")) {
    generated = replaceGeneratedBlock(
      generated,
      "docs-nav",
      /<aside class="docs-nav">[\s\S]*?<\/aside>/,
      sidebar(file),
      file,
    );
  }

  if (generated !== original) {
    stale.push(file);
    if (!checkOnly) fs.writeFileSync(fullPath, generated);
  }
}

if (checkOnly && stale.length > 0) {
  console.error(`Generated HTML is stale: ${stale.join(", ")}`);
  console.error("Run npm run build and commit the resulting HTML.");
  process.exit(1);
}

console.log(
  checkOnly
    ? `Checked ${pages.length} generated HTML pages.`
    : `Generated shared navigation in ${pages.length} checked-in HTML pages.`,
);
