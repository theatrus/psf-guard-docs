import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const stylesheetVersion = 5;

const docsPages = fs
  .readdirSync(path.join(root, "docs"))
  .filter((name) => name.endsWith(".html"))
  .sort();

const pages = ["index.html", "404.html", ...docsPages
  .filter((name) => name !== "web-grader.html")
  .map((name) => `docs/${name}`)];
const trackedPages = ["index.html", "404.html", ...docsPages.map((name) => `docs/${name}`)];

const docsNavigation = [
  {
    label: "Start",
    pages: [
      ["index.html", "Getting Started"],
      ["install.html", "Installation"],
      ["grader.html", "The Grader UI"],
      ["importing.html", "Add Images & Plan"],
    ],
  },
  {
    label: "Analyze",
    pages: [
      ["screening.html", "Quality Screening"],
      ["astrometry.html", "Sky Context & Solver"],
      ["astrometry-quality.html", "Astrometry Quality"],
      ["satellites.html", "Satellite Tracks"],
      ["stacking.html", "Stack Previews"],
    ],
  },
  {
    label: "Operate",
    pages: [
      ["exporting.html", "Export for Stacking"],
      ["workflows.html", "Rejects & Sync"],
      ["cli.html", "CLI Reference"],
      ["configuration.html", "Configuration & API"],
    ],
  },
];

function pageLinks(file) {
  if (file === "404.html") {
    return {
      home: "/",
      logo: "/assets/logo.svg",
      docs: "/docs/",
      install: "/docs/install.html",
    };
  }
  if (file.startsWith("docs/")) {
    return {
      home: "../",
      logo: "../assets/logo.svg",
      docs: "./",
      install: "install.html",
    };
  }
  return {
    home: "./",
    logo: "assets/logo.svg",
    docs: "docs/",
    install: "docs/install.html",
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
      <a href="${links.install}">Install</a>
      <a class="demo-link" href="https://demo.psf-guard.com/" target="_blank" rel="noopener" aria-label="Open the live PSF Guard demo in a new tab">Live demo</a>
      <a href="https://github.com/theatrus/psf-guard">GitHub</a>
      <a class="cta" href="https://github.com/theatrus/psf-guard/releases/latest">Download</a>
    </div>
  </nav>
</header>
<!-- site-header:end -->`;
}

function googleTag() {
  return `<!-- google-tag:start -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-1059723840"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-1059723840');
</script>
<!-- Event snippet for Page view conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-1059723840/OW-PCInwpNUcEMC0qPkD',
      'value': 1.0,
      'currency': 'USD'
  });
</script>
<!-- google-tag:end -->`;
}

function sidebar(file) {
  const activePage = path.basename(file);
  const groups = docsNavigation
    .map(({ label, pages }) => {
      const links = pages.map(([href, pageLabel]) => {
        const active = href === activePage ? ' class="active" aria-current="page"' : "";
        return `    <li><a href="${href === "index.html" ? "./" : href}"${active}>${pageLabel}</a></li>`;
      }).join("\n");
      return `  <h4>${label}</h4>\n  <ul>\n${links}\n  </ul>`;
    })
    .join("\n");

  return `<!-- docs-nav:start -->
<aside class="docs-nav">
<details class="docs-menu" open>
  <summary>Browse documentation</summary>
  <div class="docs-nav-sections">
${groups}
  <h4>Project</h4>
  <ul>
    <li><a href="https://github.com/theatrus/psf-guard">GitHub</a></li>
    <li><a href="https://github.com/theatrus/psf-guard/releases">Releases</a></li>
    <li><a href="https://github.com/theatrus/psf-guard/issues">Report an issue</a></li>
    <li><a href="https://theatr.us/software">More at theatr.us</a></li>
  </ul>
  </div>
</details>
<script>
  (() => {
    const menu = document.currentScript.previousElementSibling;
    const narrow = window.matchMedia("(max-width: 900px)");
    const sync = () => { menu.open = !narrow.matches; };
    sync();
    narrow.addEventListener("change", sync);
  })();
</script>
</aside>
<!-- docs-nav:end -->`;
}

function replaceGeneratedBlock(html, name, fallback, generated, file) {
  const marker = new RegExp(`<!-- ${name}:start -->[\\s\\S]*?<!-- ${name}:end -->`);
  if (marker.test(html)) return html.replace(marker, generated);
  if (fallback.test(html)) return html.replace(fallback, generated);
  throw new Error(`${file}: could not find ${name} block`);
}

function replaceOrInsertGeneratedBlock(html, name, generated, file) {
  const marker = new RegExp(`<!-- ${name}:start -->[\\s\\S]*?<!-- ${name}:end -->`);
  if (marker.test(html)) return html.replace(marker, generated);
  if (/<\/head>/.test(html)) return html.replace(/<\/head>/, `${generated}\n</head>`);
  throw new Error(`${file}: could not find </head> for ${name} block`);
}

const stale = [];
const generatedPages = new Set(pages);
for (const file of trackedPages) {
  const fullPath = path.join(root, file);
  const original = fs.readFileSync(fullPath, "utf8");
  let generated = original;

  if (generatedPages.has(file)) {
    generated = replaceGeneratedBlock(
      generated,
      "site-header",
      /<header class="site-header">[\s\S]*?<\/header>/,
      header(file),
      file,
    );
  }

  if (generatedPages.has(file) && file.startsWith("docs/")) {
    generated = replaceGeneratedBlock(
      generated,
      "docs-nav",
      /<aside class="docs-nav">[\s\S]*?<\/aside>/,
      sidebar(file),
      file,
    );
  }

  generated = replaceOrInsertGeneratedBlock(
    generated,
    "google-tag",
    googleTag(),
    file,
  );

  generated = generated.replace(
    /(css\/site\.css)\?v=\d+/g,
    `$1?v=${stylesheetVersion}`,
  );

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
    ? `Checked ${trackedPages.length} generated HTML pages.`
    : `Generated shared elements in ${trackedPages.length} checked-in HTML pages.`,
);
