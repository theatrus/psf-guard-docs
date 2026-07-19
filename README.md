# psf-guard-docs

The website for [PSF Guard](https://github.com/theatrus/psf-guard), served at
**[psf-guard.com](https://psf-guard.com)**.

## Structure

Plain hand-rolled static HTML/CSS — no build step, no dependencies. What's in
the repo is what's served.

```
index.html          Splash / landing page
docs/               Documentation pages (shared sidebar nav)
docs/astrometry.html Seiza catalog setup, on-demand solving, and sky overlays
css/site.css        The one stylesheet (dark astro theme)
assets/             Logo/favicon (hand-authored SVG) + screenshots
404.html            Not-found page (uses root-absolute paths)
```

## Publishing

`main` is the deployed content — the site is plain static files served
as-is from the repo root (no build step), published to psf-guard.com by
external infrastructure.

## Updating content

- Screenshots come from the main repo's `docs/` folder — refresh by copying
  new captures into `assets/`.
- Feature and CLI documentation should track the main repo's `README.md`;
  the deep screening material tracks `docs/SCREENING.md`.
- Download links use `releases/latest/download/...` for the version-less CLI
  binaries and link to the releases page for versioned installers, so nothing
  here needs touching on a normal release.
