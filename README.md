# psf-guard-docs

The website for [PSF Guard](https://github.com/theatrus/psf-guard), served at
**[psf-guard.com](https://psf-guard.com)**.

## Structure

Plain hand-rolled static HTML/CSS with a dependency-free Node build for the
small pieces of shared site chrome. The generated HTML is checked in, and
what's in the repo is exactly what's served.

```
index.html          Splash / landing page
docs/               Documentation pages (shared sidebar nav)
docs/astrometry.html Seiza catalog setup, on-demand solving, and sky overlays
css/site.css        The one stylesheet (dark astro theme)
assets/             Logo/favicon (hand-authored SVG) + screenshots
scripts/build.mjs   Shared top bar and docs navigation generator
404.html            Not-found page (uses root-absolute paths)
```

## Publishing

`main` is the deployed content — the checked-in static files are served as-is
from the repo root and published to psf-guard.com by external infrastructure.
The deploy does not need Node or a build step.

## Updating content

- Screenshots come from the main repo's `docs/` folder — refresh by copying
  new captures into `assets/`.
- Run `npm run build` after changing the shared top bar or documentation
  navigation. Commit the generated HTML along with the template change.
- Run `npm run check` before publishing. It verifies the checked-in HTML is in
  sync with the template and that local links and image references resolve.
- Feature and CLI documentation should track the main repo's `README.md`;
  the deep screening material tracks `docs/SCREENING.md`.
- Download links use `releases/latest/download/...` for the version-less CLI
  binaries and link to the releases page for versioned installers, so nothing
  here needs touching on a normal release.
