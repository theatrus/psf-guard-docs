# psf-guard-docs

The website for [PSF Guard](https://github.com/theatrus/psf-guard), served at
**[psf-guard.com](https://psf-guard.com)** via GitHub Pages.

## Structure

Plain hand-rolled static HTML/CSS — no build step, no dependencies. What's in
the repo is what's served.

```
index.html          Splash / landing page
docs/               Documentation pages (shared sidebar nav)
css/site.css        The one stylesheet (dark astro theme)
assets/             Logo/favicon (hand-authored SVG) + screenshots
CNAME               Custom domain (psf-guard.com)
.nojekyll           Serve files as-is, no Jekyll pass
```

## Publishing

Pushes to `main` deploy automatically through GitHub Pages (branch `main`,
root). DNS: `psf-guard.com` → GitHub Pages (A/ALIAS records per
[GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## Updating content

- Screenshots come from the main repo's `docs/` folder — refresh by copying
  new captures into `assets/`.
- Feature and CLI documentation should track the main repo's `README.md`;
  the deep screening material tracks `docs/SCREENING.md`.
- Download links use `releases/latest/download/...` for the version-less CLI
  binaries and link to the releases page for versioned installers, so nothing
  here needs touching on a normal release.
