import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const script = read("js/calibration-links.js");
const library = read("docs/calibration.html");
// The no-script links also define the destinations old bookmarks must reach.
const moved = [...library.matchAll(/<li id="([^"]+)"><a href="([^"]+)">/g)];
assert.ok(moved.length > 0);
function open(hash, search = "") {
  const redirects = [];
  const listeners = new Map();
  const location = { hash, search, replace: (url) => redirects.push(url) };
  vm.runInNewContext(script, {
    window: { location, addEventListener: (event, fn) => listeners.set(event, fn) },
  });
  return { redirects, listeners, location };
}
for (const [, id, target] of moved) {
  assert.deepEqual(open(`#${id}`).redirects, [target]);
  const [file, anchor] = target.split("#");
  assert.ok(read(`docs/${file}`).includes(`id="${anchor}"`), target);
  assert.deepEqual(open(`#${id}`, "?source=bookmark").redirects,
    [`${file}?source=bookmark#${anchor}`]);
}
for (const hash of ["", "#add", "#unknown", "#constructor", "#%E0%A4%A"]) {
  assert.deepEqual(open(hash).redirects, []);
}
const changed = open("");
changed.location.hash = `#${moved[0][1]}`;
changed.listeners.get("hashchange")();
assert.deepEqual(changed.redirects, [moved[0][2]]);
assert.deepEqual(open("#%67rades").redirects, ["calibration-grading.html#grades"]);

// Check every local link into the calibration guides, including fragment-only links.
const htmlFiles = ["index.html", ...fs.readdirSync(path.join(root, "docs"))
  .filter((file) => file.endsWith(".html")).map((file) => `docs/${file}`)];
for (const source of htmlFiles) {
  const html = read(source).replace(/<!--[\s\S]*?-->/g, "");
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:)/.test(href)) continue;
    const [file, fragment] = href.split("#");
    const target = file ? path.posix.normalize(path.posix.join(path.posix.dirname(source), file)) : source;
    if (!/^docs\/calibration(?:-[a-z]+)?\.html$/.test(target) || !fragment) continue;
    assert.ok(read(target).includes(`id="${fragment}"`), `${source}: ${href}`);
  }
}
console.log(`Checked ${moved.length} old calibration bookmarks and all links into the four guides.`);
