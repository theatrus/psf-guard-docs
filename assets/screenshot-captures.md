# Screenshot capture record

Record each documentation screenshot here when you capture it, including
replacements. This record stays after the release screenshot plan is complete.
The plan describes what to shoot; this record describes what the saved image
actually shows and how to repeat it.

The first three captures below were made on October 17, 2026. Other existing
images predate this record. The October 16 scouting notes in
`SCREENSHOT-PLAN.md` describe planned shots, not completed captures.

## Recording a capture

- Add a section for the asset filename and a dated entry for each capture.
  Append reshoots under that asset; keep earlier entries.
- Commit the image and its entry together. Record the final file's SHA-256
  (`shasum -a 256 assets/<filename>`) so the entry identifies the exact image,
  even after the file is replaced.
- Record the actual state after the view finishes loading. Copy the URL, then
  list steps for anything it does not restore. Use stable IDs and filenames
  as well as display names; row numbers and names alone can change.
- Distinguish measured values, predictions, warnings and stored grades. Record
  visible counts and values as observations at capture time, not promises
  about the next capture. Note missing data, unfinished jobs or stale previews.
- Record only what you checked. Use `unknown` for missing details and explain
  any step that prevents an exact reshoot. Do not infer old capture settings
  from a planned shot or an image alone.
- Omit credentials, private paths and precise site coordinates. Sanitize URLs
  before saving them. Record which areas were redacted, without recording
  their private contents.

## Entry template

Copy this under **Captures**, once for each new asset. For a reshoot, add only
another dated entry under its existing asset heading. Mark unused fields
`not applicable`.

```markdown
### assets/<filename>

#### <YYYY-MM-DD HH:MM, timezone> — <initial capture or reshoot>

- **File:** SHA-256; final pixel dimensions; format.
- **Used by:** page paths and section headings; caption or figure purpose.
- **Build:** PSF Guard version and commit, if available; browser or desktop app;
  server hostname or disposable fixture name. Note if the frontend differs.
- **Capture environment:** OS; browser/app version; viewport in CSS pixels;
  device scale factor; browser zoom; theme; locale and displayed time zone.
- **Source:** database name and ID; rig; project/target name and ID. Include
  frame GUID and filename, session date/ID, flat-group ID, plan/panel ID, or
  stack/channel/exposure group as relevant. For a local fixture, record its
  script, repository commit, inputs and seed so it can be recreated.
- **URL:** sanitized full route and query string.
- **UI state:** tab/view; filters; sort and grouping; selected and current
  frames; score scope; expanded panels, menus and dialogs; scroll position;
  image zoom/pan; overlays; stretch; palette and processing settings.
- **Observed state:** visible counts, integration times, scores, grades,
  warnings, calibration findings, build/job state and selected measurements.
- **Preparation and reshoot steps:** ordered steps from opening the URL to
  the captured state, including waits for previews or overlays. Identify
  prerequisites and any step that writes data. Use a disposable catalog for
  staging changes; a capture record does not authorize changing live data.
- **Composition:** full window or cropped element; crop coordinates and their
  units; pointer/hover state; resizing, annotations and redactions. For a
  composite, list source captures and how they were arranged.
- **Verification:** what was checked in the rendered image; missing evidence,
  known differences, and anything to recheck before reshooting.
```

## Captures

### Shared environment — October 17, 2026

- **Source:** signed-in Chrome browser at `https://psf-guard.atpn.co`.
  Server Information reports **0.11.0**. The captured UI has the features
  described for 0.12; the deployed commit and frontend/backend match are
  unknown. Do not treat the version label as a verified 0.12 release build.
- **Environment:** macOS 27.0.1; installed Chrome 155.0.8059.82; dark app theme;
  English UI. Viewport at capture: **1744 × 1142 CSS px**. Effective device
  pixel ratio: **1.8**. CSS-to-CDP capture coordinate ratio: **0.9**, consistent
  with 90% browser zoom on a 2× display; zoom was not read from Chrome's menu.
- **Capture method:** Chrome `Page.captureScreenshot`, JPEG quality 95,
  `fromSurface: true`, `captureBeyondViewport: false`, clip scale 1. Clip
  rectangles below use CDP device-independent pixels (DIP), not final pixels.
  Multiply the listed CSS crop by 0.9 to obtain the CDP clip. Saved files
  contain roughly 1.8 image pixels per CSS pixel. No resizing, annotations,
  compositing or redactions were applied. The cursor is absent from the files.
- **State:** existing live data only. No grades, group boundaries, light
  assignments, saved plans or activation state were changed. Background jobs
  were already running; none were started or stopped for these captures.
  Temporary viewport overrides were reset before capture. Mosaic overlay
  preferences were restored after capture.
- **Documentation check:** all three images loaded at the guide's 824 CSS px
  column width with their aspect ratios intact. Captions carry the key values;
  the lightbox and full-resolution link were checked for the flat comparison.
- **Reshoot:** use the same view dimensions if possible, but remeasure the crop
  after loading. UI changes, new frames and refreshed derived results can move
  controls or change counts. Inspect each final image before replacing it.

### assets/release-012-calibration.jpg

#### 2026-10-17 17:59 PDT — initial capture

- **File:** 2476 × 1152 px, JPEG. SHA-256: `321d3be101c0138e03a985719c3fa2c307e02369f5edc4961fc9791a190023d8`.
- **Used by:** `docs/new-in-0.12.html#calibration`; grading a flat from its
  measured difference from the session, despite no clipped pixels.
- **Build/environment:** shared environment above. Frame time displays UTC−5.
- **Source:** starfront-redcat61, database `db-49b9f973`, project 2,
  Teddy Bear Nebula QMark; redcat61 / ZWO ASI2600MM Pro.
  Session `c86f7ba628d954df`, September 13, 2026.
  Frame `b28da39d-e31d-43f9-a226-944aa648e997`,
  `2026-09-14_07-05-02_OIII_-5.10_32.62s_0002.fits`.
- **URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=c86f7ba628d954df&calKind=flat&calGrade=poor&calFrame=b28da39d-e31d-43f9-a226-944aa648e997
- **UI state:** Frames → Sessions; project scope on; Type Flat; Grade Poor;
  other filters All/Any; Missing files and Duplicates off; Order As shot.
  Normal stretch, Compare with session off, Spots off, Full size off.
  Fit selected; viewer reads 85%. Frame details and measurement table visible.
- **Observed state:** Poor · uneven light; excluded from masters; illumination
  difference 13.9%, limit 5.0%. Frame/session: level 58.5%/50.5%; clipped
  0.000%/0.000%; noise 1.02%/1.13%; 0 spots and 9/10 large disks.
  Ten of ten session frames measured; frame in 13 masters.
- **Reshoot steps:** open the URL, wait for the session and preview to load,
  verify the filename and Poor reason, and click Fit. Keep the viewer controls
  and the entire details card in the crop. No data changes are needed.
- **Composition:** CSS crop `(344, 490, 1376, 640)` at the top of the page;
  CDP clip `(309.6, 441, 1238.4, 576)`. Viewer and detail card only; the session
  navigation is outside the crop. No hover tooltip. Actual ratio comparison
  is off; the table compares frame and session measurements.
- **Verification:** loaded preview was 1042 × 696; final JPEG checked for
  complete controls, filename, grade, measurements and limit. Subtle variation
  is visible in the flat; this is not proof of a particular dust or dew cause.

### assets/release-012-flat-groups.jpg

#### 2026-10-17 17:59 PDT — initial capture

- **File:** 2358 × 1356 px, JPEG. SHA-256: `048288c63bfaf61ad536379773b728f64ad601863ff46fd11018b11eb17cc351`.
- **Used by:** `docs/new-in-0.12.html#flats`; measured changes across a flat-group
  boundary. Bubble is only the route into the full rig library.
- **Build/environment:** shared environment above. Frame times display UTC−7.
- **Source:** c925-scheduler, database `db-d6eaaf55`; C925 / ZWO ASI2600MM Pro;
  full calibration library, not the Bubble project subset. Group
  `d067a2659094e08f`, **Group 2 of 4 · OIII · 100.9–104.4°**, August 10,
  1 night / 10 flats. Earlier session `1c0d0817c025cfba0ea865842557a062`
  (May 19); later session `c7749f98b0cd8d918e699165e342f5f2` (August 10).
  Selected frame `766f5294-a5c8-4974-8fe0-d77a440d91bb`,
  `2026-08-11_06-05-44_OIII_-10.00_36.28s_0000.fits`.
- **URL:** https://psf-guard.atpn.co/#/calibration?db=db-d6eaaf55&project=1&current=8620&calBrowse=groups&calGroup=d067a2659094e08f&calFrame=766f5294-a5c8-4974-8fe0-d77a440d91bb&calEarlier=1c0d0817c025cfba0ea865842557a062&calLater=c7749f98b0cd8d918e699165e342f5f2
- **UI state:** Frames → Groups; full library; filters All/Any; Missing files
  and Duplicates off. Group 2 selected, Compare across the older edge open;
  Normal stretch; Spots and Large dust on. Left list scrolled to the OIII
  100.9–104.4° family, with Groups 4 through 1 visible.
- **Observed state:** August 10 divided by May 19. New donut near (507,2054),
  1.8% against a 1% limit; overlay label 1.78%. Other annotations distinguish
  gone and moved dust and deeper vignetting. The newer group edge reports
  2.1% change at the bottom; the displayed older-edge ratio separately labels
  2.34% deeper vignetting at the bottom. Do not equate those comparisons.
- **Reshoot steps:** open the URL and wait for groups. If it falls back to the
  first B group, select the named OIII Group 2 explicitly. Click Compare across
  the older edge, wait for the ratio, and verify both dates. Turn Spots and
  Large dust on if needed. Scroll the group list to include Groups 4 through 1.
  No splits, joins, changed limits or light assignments are needed.
- **Composition:** CSS crop `(24, 78, 1310, 754)`; CDP clip
  `(21.6, 70.2, 1179, 678.6)`. `app-main` scrollTop about 169.44 CSS px;
  group list scrollTop about 3976.11. Crop includes list, comparison heading,
  date pair, stretch/overlay controls and complete ratio image; excludes the
  detailed annotation list beneath it. No hover tooltip.
- **Verification:** ratio preview loaded at 892 × 596. The orange new-donut
  marker encloses the dark donut near the left edge. Dates, 1.8% boundary,
  legend and final crop checked. The angle range and number of groups changed
  since scouting; use this captured state rather than the old range.

### assets/release-012-mosaic-editing.jpg

#### 2026-10-17 18:00 PDT — initial capture

- **File:** 2936 × 1524 px, JPEG. SHA-256: `ec2c75fc35c76f9c963da0759e5393e2e70abf4acbc6b8ebd928568f7229f687`.
- **Used by:** `docs/new-in-0.12.html#planning`; inspecting a captured panel
  while retaining its lock and measured overlap warnings.
- **Build/environment:** shared environment above. No site coordinates shown.
- **Source:** askar107phq, database `db-a01c581c`, project 21, Heart Mosaic;
  plan `051751d1-6b05-444e-9485-afbc6177dd5b`; panel `r1c2`, 336 frames.
- **URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b
- **UI state:** Framing; All targets; Panel drag mode; Snap on; r1c2 selected.
  DSS (offline), north up / east left; width reads 5.18° (stage reads 5.17°).
  Equatorial grid on; Constellations and Deep-sky marks off for readability;
  Stacks off. Sky center 02h32m38.3s, +61°21′37″. Four panels locked.
  Right controls scrolled to Mosaic panels, with selected-panel details open.
  Minimum overlap 20%; added-panel overlap 20%; Whole mosaic selected.
- **Observed state:** panel field 1.79° × 1.20° at 0.6°. Panel counts:
  r1c1 343, r1c2 336, r2c1 329, r2c2 331. Overlap warnings: 18.9%, 18.1%,
  18.8%, 19.4%, all below 20%. Not activated yet, outside this crop.
- **Reshoot steps:** open the URL, wait for the DSS image and footprints, turn
  off Constellations and Deep-sky marks, then select r1c2 once (clicking again
  deselects it). Scroll the right controls to show its lock and field. Return
  the main page to its top so all four footprints fit. Do not unlock, drag,
  save or activate. Restore the two overlay preferences after capture.
- **Composition:** CSS crop `(56, 280, 1632, 847)`; CDP clip
  `(50.4, 252, 1468.8, 762.3)`. Main page at top; `framing-controls`
  scrollTop about 1482.78 CSS px. Crop includes the sky, layer controls,
  panel controls, lock state and all four overlap warnings. The pointer was
  outside the crop; no hover tooltip or annotations were added.
- **Verification:** all four captured boundaries and padlocks are visible;
  r1c2 remains locked. Center overlap labels partly overlap in the app; the
  complete values remain readable in the warning list. Do not claim the saved
  overlap minimum was achieved or that this plan has been activated.
