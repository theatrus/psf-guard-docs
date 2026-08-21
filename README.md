# psf-guard-docs

The website for [PSF Guard](https://github.com/theatrus/psf-guard), served at
**[psf-guard.com](https://psf-guard.com)**.

## Structure

This repository contains plain static HTML and CSS files with a dependency-free
Node build for shared website elements. The generated HTML is checked in, and
what is in the repository is exactly what is served.

```
index.html          Splash / landing page
docs/               Documentation pages (shared sidebar nav)
docs/importing.html  FITS/XISF import, quality backfill, planning, and scheduler sync
docs/astrometry.html Seiza catalog setup, on-demand solving, and sky overlays
docs/calibration.html Calibration libraries, safe matching, masters, and export
css/site.css        The one stylesheet (dark astro theme)
assets/             Logo/favicon (hand-authored SVG) + screenshots
scripts/build.mjs   Shared top bar and docs navigation generator
404.html            Not-found page (uses root-absolute paths)
```

## Publishing

The `main` branch contains the deployed content. The checked-in static files
are served as-is from the repository root and published to psf-guard.com by
external infrastructure. The deployment process does not require Node or a
build step.

## Updating content

- Screenshots are copied from the main repository's `docs/` folder. You can
  refresh them by copying new captures into the `assets/` directory.
- Run `npm run build` after modifying the shared top bar or documentation
  navigation, then commit the generated HTML files along with the template
  changes.
- Run `npm run check` before publishing to verify that the checked-in HTML is
  in sync with the template and that local links and image references resolve.
- Feature and CLI documentation tracks the main repository's `README.md`
  file, while the screening documentation tracks `docs/SCREENING.md`.
- Download links use `releases/latest/download/...` for the versionless CLI
  binaries and link to the releases page for versioned installers, so you
  do not need to update these on a normal release.

