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

### Second capture session — October 17, 2026

The seven entries below use the shared build, OS, browser and JPEG capture
method above. Viewport was **1744 × 1204 CSS px**, measured in this session;
effective device pixel ratio remained **1.8** and CDP coordinates use the same
0.9 factor. Theme stayed dark. No browser viewport override was used.
All captures used existing data and cached stacks. No grades, builds, saved
processing settings or jobs were changed. Temporary scoring changes were reset;
stack card size returned to its original Fit/1600 value.

Local browser review checked the grader, screening and stacking guides and the
homepage. Guide overviews render at 824 CSS px; the scoring crop at 420 px;
the color card at 640 px; the homepage preview at 1112 px. Aspect ratios stayed
intact. The issue list, score chips, scoring controls and color card also
opened in the lightbox with their captions and full-resolution links.

### assets/grid.jpg

#### 2026-10-17 18:09 PDT — reshoot

- **File:** 3138 × 1674 px, JPEG. SHA-256: `acce8b543106e2402ce43f5e77e56745cac2c27b9e0c6b0fc60e4fac28a2becc`.
- **Used by:** `docs/grader.html#grid`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source:** Iris Nebula, starfront-ultracat131, database `db-93617230`, project 1; target NGC 7023. Current frame 776, September 17 at 23:02:13.
- **URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **UI state:** Images, page top; Status, Filter, Flag and Calibration All; Dates Any; search empty; Size 300 px; Stats off. View: Group Date, Oldest first, Nights and hours, nights end at each rig's noon; night, all-sessions and calibration chips on; Separate exposure groups on. Zero selected; current frame has a cyan outline.
- **Observed state:** 822/822 images scored, 27 groups. First group September 17, L, 300 s: five Accepted frames, all with Sky Brightening warnings. Next group G, 120 s: 12 frames, 11 Accepted and one Rejected. Four visible G cards warn that their dark master has too few frames. Background jobs: 60%, one running, six waiting.
- **Reshoot steps:** open the URL; wait for Quality: 822 scored and the previews. Check View against the settings above, then close it. Keep the L row and first G row visible. The plan originally requested Group Filter; this capture uses Date to keep the verified score examples together.
- **Composition:** CSS crop `(0, 0, 1744, 930)`; CDP `(0, 0, 1569.6, 837)`. Header, toolbar and first two card rows. No tooltip.
- **Verification:** all visible previews loaded; score chips, grades and calibration icons readable. Scores and warnings do not replace the stored grades. Frame time zone was not exposed in this view; preserve the displayed timestamps when locating frames.

### assets/grid-score-chips.jpg

#### 2026-10-17 18:09 PDT — reshoot; replaces grid-score-chips.png

- **File:** 1800 × 530 px, JPEG. SHA-256: `76f14e9d166008c1a850a6f6163a87e400699436fb3c825a1409a8acb1361191`.
- **Used by:** `docs/grader.html#review-preferences`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source and URL:** same Iris catalog, frame 776 and route as `grid.jpg` above.
- **UI state and reshoot steps:** same grid state as `grid.jpg`; crop the first three L cards from September 17, 300 s. No selection or grading.
- **Observed state:** at 23:02:13, main/night/all-sessions scores 94/99/94, HFR 1.41, 22,149 stars; 23:07:21 gives 93/97/93, HFR 1.41, 21,898 stars; 23:12:30 gives 95/98/95, HFR 1.42, 22,270 stars. All three show Sky Brightening and a stored Accepted grade.
- **Composition:** CSS `(40, 243, 1000, 295)`; CDP `(36, 218.7, 900, 265.5)`. Three complete cards, no header or group title.
- **Verification:** checked final JPEG for all three chips, timestamps, HFR, stars, reasons and grades. Earlier PNG predates this record; its capture state is unknown.

### assets/sequence-issue-frames.jpg

#### 2026-10-17 18:11 PDT — initial capture

- **File:** 3138 × 1016 px, JPEG. SHA-256: `5b7f187439984c5e1bbfbfe3468e2057505cefbdbb3f6ccd34f216cfb8dc0699`.
- **Used by:** `docs/screening.html#issues`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source:** Golf of Mexico, ultra cat, database `db-e075b4ec`, project/target 12. Current frame 9568, June 28 at 02:09 AM.
- **URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=9568&filterName=G&scoreScope=target-filter%3AG
- **UI state:** Filter G; G · All sessions (612); Size 150 px; Cutoff Score 50; Select By hand, zero selected. Seven cloud events expanded; first event highlighted. Scoring defaults: Satellite trails off; Pointing, Temporal anomalies, HFR rise and Star loss 100%; Max HFR and Min stars off. Main scroll 0; Scoring closed.
- **Observed state:** score bands 122 at 90–100, 409 at 70–89, 81 at 50–69, none lower. Seven likely-cloud frame scores 65, 67, 73, 71, 70, 71, 70. Red and green grade dots appear under the chart. Background jobs at 99%, one running and six waiting.
- **Reshoot steps:** open the URL and wait for analysis. If changing Filter resets the scope, choose G · All sessions again. Expand 7 cloud events, click Jun 28, 02:09 AM, score 65, then let cursor scrolling finish. Scroll back to the top; keep zero selected. Do not grade. The list's times have no explicit zone label in this view.
- **Composition:** CSS `(0, 0, 1744, 565)`; CDP `(0, 0, 1569.6, 508.5)`. Header, toolbar, selected tab, list and full chart. No tooltip; highlighted chart bar marks the current frame.
- **Verification:** final JPEG shows the complete header and chart. Clicking the event changed the current frame without selecting it. Scores use all-session comparison; they differ from the same frame's single-session score.

### assets/sequence-cutoff-hfr.jpg

#### 2026-10-17 18:10 PDT — initial capture

- **File:** 3138 × 1650 px, JPEG. SHA-256: `a6318ffebcf5e254d30b469e81dbce3e017f32cf446357d9d4c2c253c8052871`.
- **Used by:** `docs/screening.html#cutoff`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source:** Golf of Mexico, ultra cat, database `db-e075b4ec`, project/target 12; HA · Jul 9, 2026, 10:08 PM (57), current frame 10952.
- **URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10952&filterName=HA&cutoffBy=hfr
- **UI state:** Filter HA; session above; Size 150 px; Cutoff HFR 1.84 (initial value, not moved); Select By hand, zero selected. Scoring defaults as in the issue-list entry. Main scroll 0; scoring closed; solved-pointing plot visible.
- **Observed state:** first three frames score 25 with Soft Stars; HFR 6.62, 6.28, 5.99. Later visible HFR values are around 1.4–1.6, below the line. Score bands: 11 at 90–100, 21 at 70–89, 22 at 50–69, none at 30–49, three below 30. The visible grade dots and first row's grades are Rejected. Background jobs 87%, one running, six waiting.
- **Reshoot steps:** open the URL; select the exact HA session if needed. Choose HFR, verify the 1.84 cutoff and wait for previews. Leave Select at By hand. No grading needed. Times have no explicit zone label in this view.
- **Composition:** CSS `(0, 0, 1744, 917)`; CDP `(0, 0, 1569.6, 825.3)`. Header through first card row, including pointing plot. No hover tooltip.
- **Verification:** final JPEG contains complete first-row cards and the three tall bars. The plan requested mixed grade colors and a rejected-bar tooltip; the actual catalog shows red dots here. No grades were staged. Caption explains that the cutoff does not change grades.

### assets/scoring-popover.jpg

#### 2026-10-17 18:11 PDT — initial capture

- **File:** 564 × 698 px, JPEG. SHA-256: `fc2fd9fd12fd6f02a7bd73421e12de5100bb12681d8e8020e05dbf091b10c3c5`.
- **Used by:** `docs/screening.html#limits`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source:** same Golf of Mexico HA session and current frame 10952 as the HFR-cutoff entry.
- **URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10952&filterName=HA&cutoffBy=hfr&penaltySatellite=0&penaltyPointing=1&penaltyTemporal=1&penaltyHfrRise=1.5&penaltyStarLoss=0.5&maxHfr=off&minStars=off
- **UI state:** Scoring open; HFR rise 150%, Star loss 50%; Satellite trails off, Pointing and Temporal anomalies 100%; Max HFR and Min stars off. Select By hand. Star loss slider focused. Main scroll 0. The HFR cutoff recalculates to 1.70 outside this crop.
- **Reshoot steps:** open the HA session; open Scoring. From 100%, increase HFR rise five 10% steps and decrease Star loss five 10% steps. Wait for Changed for this view. Capture before touching Save as default. After capture, click Reset to default; verify both penalties return to 100% and Save as default becomes disabled. This reset was checked.
- **Observed state:** Scoring (changed), two highlighted penalties, Changed for this view, Reset to default and Save as default. Satellite trails was already off in this user's defaults; do not describe this as built-in defaults.
- **Composition:** CSS `(640, 74, 314, 388)`; CDP `(576, 66.6, 282.6, 349.2)`. Scoring control and complete popover, plus By hand control. No tooltip.
- **Verification:** final JPEG shows all controls, values and the view-only status. Saved defaults and catalog grades were not changed.

### assets/stack-foraxx-card.jpg

#### 2026-10-17 18:11 PDT — reshoot

- **File:** 1108 × 1306 px, JPEG. SHA-256: `344bac447ce065f240df3bd9ec7b947b613393479b45435cf718e1dba137d781`.
- **Used by:** `docs/stacking.html#color`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source:** California Nebula, ultra cat, database `db-e075b4ec`, project/target 4. Foraxx SHO, 300 s exposure group. Color key `da718ffafabc7efe24623a1b2beefe4084c3d3eea029367dc30f677245d7fd35`, source revision `18df75db6d20fd1c-1e32e6` from its visible download link.
- **URL:** https://psf-guard.atpn.co/#/stacks?db=db-e075b4ec&project=4&target=4&current=561&cardsize=600
- **UI state:** Card size 600 px; separate exposure groups on; Accepted only off; Method Recommended; Calibration Auto; Order Capture sequence. Foraxx SHO already selected; Keep blank edges; completed. Pipeline phases and Processing stack collapsed. Page top. No settings changed except card size, restored to Fit/1600 after capture.
- **Observed state:** preview ready, 29/29 steps. Hα 181 frames / 15 h 5 m; OIII 577 / 48 h 5 m; SII 160 / 13 h 20 m; total 918 / 76 h 30 m. Processing summary: BG subtract, DC off, RC-Astro 6, Hα 1, OIII 1, SII 1, RGB 0. Auto MTF is selected for the three channels; deeper RC-Astro settings were not inspected.
- **Reshoot steps:** open Stacks and wait for cached metadata and previews; the initial loading state can briefly say Not built. Set card size 600, verify Foraxx SHO and the input counts, and crop the complete card. Do not build or change processing to recreate the image. The existing cache is a prerequisite.
- **Composition:** CSS `(872, 365, 616, 726)`; CDP `(784.8, 328.5, 554.4, 653.4)`. Complete card with a narrow margin. Source preview bitmap 2400 × 1601.
- **Verification:** palette, edges, loaded preview, completed status, processing summary, inputs and Masters button visible. Replaces an older Teddy Bear card whose capture state was not recorded. Blank registration edges remain, as selected.

### assets/stack-foraxx-california.jpg

#### 2026-10-17 18:12 PDT — initial capture; replaces stack-foraxx-teddy.jpg

- **File:** 2886 × 1806 px, JPEG. SHA-256: `1680caa3eb4ec1c5e234b36934db6fe1e259b49608300449bc152c48e6129ec1`.
- **Used by:** `index.html#stacking`.
- **Build/environment:** shared environment and second-session viewport above.
- **Source, build and processing:** same California Foraxx SHO cache and channel inputs as `stack-foraxx-card.jpg` above; source revision `18df75db6d20fd1c-1e32e6`.
- **URL:** https://psf-guard.atpn.co/#/stacks?db=db-e075b4ec&project=4&target=4&current=561&cardsize=600
- **UI state:** Inspect Foraxx SHO 300 s full size open; fit view at 13%; no manual pan. Keep blank edges. Full-resolution image reported 9576 × 6388, three channel stacks, 918 inputs, 76 h 30 m.
- **Reshoot steps:** prepare the card as above, click Inspect, and wait until the loading message disappears and dimensions show 9576 × 6388. Use Fit if needed. Crop the full dialog including its title, counts and zoom controls. Close inspector and restore card size afterwards. No build, download or processing change is needed.
- **Composition:** CSS `(70, 100, 1604, 1004)`; CDP `(63, 90, 1443.6, 903.6)`. Dialog only. Native capture, no image-only export or added labels.
- **Verification:** checked loaded nebula, title, counts, image dimensions and fit controls in final JPEG. Cached processing includes RC-Astro operations; this is not an untouched linear stack. Old Teddy Bear image predates the capture record.

## Full guide capture pass — October 17–18, 2026

Live captures use the shared server environment above; entries marked local fixture
use the isolated server described below. The live server reported 0.11.0; its deployed
commit and frontend/backend match remain unknown. Times below
are UTC. Job percentages and counts can change between inspection and capture.
The images show the final values; state notes record the inspected state.

Desktop captures use the normal viewport. The two phone captures use a temporary
375 × 812 CSS-pixel viewport with DPR 0.9; the override was reset afterward. PNG
files use lossless capture; JPEG files use quality 95. All crops are direct browser
captures. Some include the browser automation pointer highlight. No pixels were
retouched. Site coordinates were cleared in unsaved forms, then discarded.

Each entry includes the route, actual state, viewport, crop and file identity.
Open the route, use the named view or Settings section, restore the listed controls,
and wait for images and overlays to load before measuring the crop again. Settings
dialogs are not encoded in the URL: open Menu → Settings, then the section named
in the state. Unsaved examples must be discarded afterward. Do not start jobs or
change live catalog data to recreate a transient state.

All saved images were checked in contact sheets against the inspected UI. Tall
settings and narrow side panels use the guide's full-resolution lightbox for detail.
Specific differences from the planned shot are retained in the state notes and
the published captions. The machine-readable companion is
[captures-2026-10-17.json](captures-2026-10-17.json).

### assets/header-menu.png

#### 2026-10-18T01:20:55.499Z — capture

- **File:** 762 × 458 px; SHA-256 `eef74b6757c59908fba4f91e947f1a4cecb186dae9c07340a9184c51484cd593`.
- **Used by:** `docs/authentication.html`, `docs/configuration.html`, `docs/grader.html`.
- **Purpose:** Open the menu for Settings, keyboard shortcuts and server information.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Iris grid. Menu open. Signed in as atrus. Jobs 30%, 1 running, 22 queued, 5 waiting; 5 rigs, 0 online.
- **Composition:** CSS crop (1320, 0, 424, 255); CDP clip (1188.00, 0.00, 381.60, 229.50), scale 1.

### assets/settings-database-options.png

#### 2026-10-18T01:21:04.081Z — capture

- **File:** 1800 × 946 px; SHA-256 `19b3af3bdbe177013a7d1615952ac67eaf980c99a89534d34daf5a97893f3c66`.
- **Used by:** `docs/importing.html`.
- **Purpose:** Each database has its own image folders, calibration library and analysis options.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Databases, starfront-redcat61 card, 1753 calibration frames, 1424 cached masters. Automatic analysis, metadata fill and pairing on; calibrated-copy measurements disabled. No changes.
- **Composition:** CSS crop (232, 211, 1000, 526); CDP clip (208.80, 189.90, 900.00, 473.40), scale 1.

### assets/settings-catalogs.png

#### 2026-10-18T01:21:11.883Z — capture

- **File:** 1878 × 778 px; SHA-256 `d1f9b01ea27999b4d31dcf9e7ed43de1441d9a6b20a79261177d8a7505302ec4`.
- **Used by:** `docs/astrometry.html`.
- **Purpose:** Installed catalog packages support overlays, hinted solves and blind solves.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Catalogs; six packages installed. Blind solving recommended selected. Overlays, Hinted solve and Blind solve available. No catalog installation or validation run.
- **Composition:** CSS crop (210, 160, 1044, 433); CDP clip (189.00, 144.00, 939.60, 389.70), scale 1.

### assets/data-transfer.png

#### 2026-10-18T01:21:21.119Z — capture

- **File:** 1878 × 788 px; SHA-256 `d9c3df1ee953c69c32f2940b0c6d4c8400305e7d4fcc319f2a103df16551b0cd`.
- **Used by:** `docs/workflows.html`.
- **Purpose:** Choose the source, destination and action, then preview the changes before applying them.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Sync > Data Transfer. Merge catalogs, source starfront-redcat61, destination starfront-ultracat131, thumbnails checked. Preview not run.
- **Composition:** CSS crop (210, 160, 1044, 438); CDP clip (189.00, 144.00, 939.60, 394.20), scale 1.

### assets/settings-remote-psf-guard.png

#### 2026-10-18T01:21:21.171Z — capture

- **File:** 1878 × 720 px; SHA-256 `87475f2833614e6cdf2b6dd95e6b56e08c9c089b836dd6df0c2f7555402ef19a`.
- **Used by:** `docs/workflows.html`.
- **Purpose:** Add a peer before testing a connection or previewing a remote transfer.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Sync > Remote PSF Guard. No peers configured; Pull from peer; local starfront-redcat61. Actual empty state, so Test connection and Preview disabled.
- **Composition:** CSS crop (210, 597, 1044, 400); CDP clip (189.00, 537.30, 939.60, 360.00), scale 1.

### assets/settings-pixinsight.png

#### 2026-10-18T01:21:30.960Z — capture

- **File:** 1878 × 790 px; SHA-256 `b5999b7e4988e89ed7afc9d81d1c56360546c681d2cf8502fc4f5869ea7d0b89`.
- **Used by:** `docs/wbpp.html`.
- **Purpose:** Check the PixInsight executable and WBPP run folder before starting a run.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Setups > PixInsight. WBPP 3.1.0; /opt/PixInsight/bin/PixInsight.sh through xvfb-run. WBPP runs /var/lib/psf-guard/wbpp-runs, 525.2 GiB free.
- **Composition:** CSS crop (210, 546, 1044, 439); CDP clip (189.00, 491.40, 939.60, 395.10), scale 1.

### assets/settings-calibration.png

#### 2026-10-18T01:22:08.524Z — capture

- **File:** 1800 × 1508 px; SHA-256 `5690914d1427c18e3a43be52eb84a82b1a7d17061d1bf57c6d5bfcc7670edb4d`.
- **Used by:** `docs/calibration-masters.html`.
- **Purpose:** Global matching limits control which calibration frames can serve a light.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Calibration > Matching. Global defaults: rotation 2 degrees, focal length 1 mm, dark temperature 3 C, flat session 24 h; darks On, external masters Whenever one matches, automatic timezone, nights at rig noon. Crop Matching only to keep every field readable; Dark masters below not included.
- **Composition:** CSS crop (232, 145, 1000, 838); CDP clip (208.80, 130.50, 900.00, 754.20), scale 1.

### assets/settings-calibration-flat-groups.png

#### 2026-10-18T01:22:18.057Z — capture

- **File:** 1800 × 1620 px; SHA-256 `768d0423de319787a7df1d514b38d8644304f6f107c1237ad9f25bf0ea166850`.
- **Used by:** `docs/calibration-masters.html`.
- **Purpose:** Flat-group limits separate nights when dust or illumination changes.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Calibration > Flat groups and start of Light checks. By measurement; Dust split 1%, Light pattern split 2%; flat age 60/30 days, minimum master 5 frames, missing camera and flat Poor. Opened through Settings, not Edit limits.
- **Composition:** CSS crop (232, 143, 1000, 900); CDP clip (208.80, 128.70, 900.00, 810.00), scale 1.

### assets/settings-calibration-stacks-exports.png

#### 2026-10-18T01:22:46.000Z — capture

- **File:** 1800 × 284 px; SHA-256 `8edfc2007b58580aab22f44c24f52f9331b86cf03dd1cc0b5c370f937f05635f`.
- **Used by:** `docs/exporting.html`.
- **Purpose:** Leave out lights that cannot be calibrated. This example is an unsaved setting.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Calibration > Stacks and exports. Exclusion checked as an Unsaved example. Original value off; discarded after capture, no Save.
- **Composition:** CSS crop (232, 575, 1000, 158); CDP clip (208.80, 517.50, 900.00, 142.20), scale 1.

### assets/settings-unsaved-close.png

#### 2026-10-18T01:22:56.347Z — capture

- **File:** 3002 × 242 px; SHA-256 `9372b0b75f35e9102a39f4dcace324dcf38b42a1c524f90ddd24c351de007b9c`.
- **Used by:** `docs/configuration.html`.
- **Purpose:** Settings asks before discarding unsaved changes.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Calibration; change Stacks and exports checkbox without saving; Done opens unsaved-changes footer. Close without saving used next.
- **Composition:** CSS crop (38, 997, 1668, 135); CDP clip (34.20, 897.30, 1501.20, 121.50), scale 1.

### assets/settings-stacking.png

#### 2026-10-18T01:23:08.311Z — capture

- **File:** 1878 × 1332 px; SHA-256 `6e71fd7466a84ea7ff44b80528e2d23de48a12a9c63b20bc55f48bbb4d529019`.
- **Used by:** `docs/stacking.html`.
- **Purpose:** The Recommended preset combines reintegration, local background normalization and noise weighting.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Stacking. Recommended preset with Reintegrate, Local background, By noise and Chosen by Seiza. Crop upper method choices; registration and resampling continue below. No changes.
- **Composition:** CSS crop (210, 160, 1044, 740); CDP clip (189.00, 144.00, 939.60, 666.00), scale 1.

### assets/settings-stack-previews.png

#### 2026-10-18T01:23:21.179Z — capture

- **File:** 1878 × 1354 px; SHA-256 `2132a6c78eb729aea8ad92821d30788010ab8585fbef030e6a5ddd2480593cfa`.
- **Used by:** `docs/stacking.html`.
- **Purpose:** Choose when to refresh stack previews and whether to reapply their processing.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Stacking > Stack previews. Refresh on, wait 5 minutes after new frames and 15 after grades; missing channels on, old channels on, re-apply processing on. No changes.
- **Composition:** CSS crop (210, 267, 1044, 753); CDP clip (189.00, 240.30, 939.60, 677.70), scale 1.

### assets/settings-storage-disk-use.png

#### 2026-10-18T01:23:31.273Z — capture

- **File:** 1878 × 978 px; SHA-256 `dbe365aed8c17fb07dbab89350b9df2eacecd1659c5f111fd060a3a76867153c`.
- **Used by:** `docs/storage.html`.
- **Purpose:** Review each volume's use and set the cache limit before cleanup.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Storage > Disk use. Cache 49.4% of 1 TiB; stack and master volumes below 1%; limit 70%. Actual measurements at capture; no cleanup run.
- **Composition:** CSS crop (210, 160, 1044, 544); CDP clip (189.00, 144.00, 939.60, 489.60), scale 1.

### assets/settings-storage-folders.png

#### 2026-10-18T01:23:36.773Z — capture

- **File:** 1800 × 710 px; SHA-256 `c3ede53398c2f98c4e9b41b18e6e0ae81b59b2f82742105136b1acf3716a0268`.
- **Used by:** `docs/storage.html`.
- **Purpose:** The cache, stacks and calibration masters can use separate folders.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Storage > Folders. Cache ./cache set by config; stacks and calibration masters use separate folders under /mnt/barium/astrobin/_PsfGuard. No edits.
- **Composition:** CSS crop (232, 606, 1000, 395); CDP clip (208.80, 545.40, 900.00, 355.50), scale 1.

### assets/settings-backups.png

#### 2026-10-18T01:23:47.982Z — capture

- **File:** 1878 × 1416 px; SHA-256 `3b3b9137010d8dea35228270ddabdd29f56ec01d5cf14f652e229dd215cb8654`.
- **Used by:** `docs/backups.html`.
- **Purpose:** Back up settings and catalogs now, or enable a schedule. Secrets are excluded here.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Backups. Settings and catalogs selected; Include secrets off; browser download default. Schedule off, day 1 PM shown disabled. Crop manual card and upper schedule. Existing archive below not included. No backup started.
- **Composition:** CSS crop (210, 160, 1044, 787); CDP clip (189.00, 144.00, 939.60, 708.30), scale 1.

### assets/settings-performance.png

#### 2026-10-18T01:24:00.013Z — capture

- **File:** 1878 × 564 px; SHA-256 `58316cb929f3398216423fea8f05ecae3c3b564ee0298afa9bc36242740aad9c`.
- **Used by:** `docs/storage.html`.
- **Purpose:** Allocate more processor time to interactive work than to background jobs.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Performance. Existing 20-core server setting Interactive 75% (15), Background 25% (5); Use the default shown. No changes needed.
- **Composition:** CSS crop (210, 160, 1044, 314); CDP clip (189.00, 144.00, 939.60, 282.60), scale 1.

### assets/settings-review-scoring.png

#### 2026-10-18T01:24:25.597Z — capture

- **File:** 1878 × 1602 px; SHA-256 `cf17a16f39baf6cc5d3aab48acc37dbb663814e9cc821885ec4afd50c7af451a`.
- **Used by:** `docs/screening.html`.
- **Purpose:** Adjust Sequence scoring defaults and optional HFR and star-count limits.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Review > Sequence scoring. Penalties 100%, Max HFR and Min stars off. Satellite penalty temporarily entered as 100 without Save defaults; original 0 restored after capture. Save/reset buttons just below crop.
- **Composition:** CSS crop (210, 122, 1044, 891); CDP clip (189.00, 109.80, 939.60, 801.90), scale 1.

### assets/settings-users.png

#### 2026-10-18T01:24:39.750Z — capture

- **File:** 1666 × 740 px; SHA-256 `0d5d5e06b6704ae3ed4058592e41c05c4a352f92c480f7ea212ea0f8eaae0b97`.
- **Used by:** `docs/authentication.html`.
- **Purpose:** Editors can change the catalog; read-only users can review images and cached results.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Users > Browser users. atrus current Editor, claude Editor, viewer Read only. Token list omitted from crop. No account changes.
- **Composition:** CSS crop (210, 160, 926, 412); CDP clip (189.00, 144.00, 833.40, 370.80), scale 1.

### assets/settings-api-tokens.png

#### 2026-10-18T01:24:50.214Z — capture

- **File:** 1584 × 660 px; SHA-256 `3c21a1124b45715b24b40ec4d461a8a8ac01c056080a3746de7a62a14f3d6025`.
- **Used by:** `docs/authentication.html`, `docs/mcp.html`.
- **Purpose:** Give a token a label and choose its access before creating it.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Users > New token form; label claude on laptop, user and expiry blank, Read only unchecked. Crop excludes existing token list. Create token not pressed; Cancel next.
- **Composition:** CSS crop (232, 631, 881, 367); CDP clip (208.80, 567.90, 792.90, 330.30), scale 1.

### assets/settings-connect-agent.png

#### 2026-10-18T01:25:01.464Z — capture

- **File:** 1584 × 400 px; SHA-256 `e7cde723621ef61bb4545d4948da7d728999b008c3cf10f7ab590781bcacc79a`.
- **Used by:** `docs/mcp.html`.
- **Purpose:** Choose whether an agent may grade images and start jobs before creating its token.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Users > Connect an agent, before token creation. Let it grade and start jobs unchecked. This shows access choice, not generated snippets; no credential created.
- **Composition:** CSS crop (232, 600, 881, 223); CDP clip (208.80, 540.00, 792.90, 200.70), scale 1.

### assets/settings-rigs.png

#### 2026-10-18T01:25:10.235Z — capture

- **File:** 1878 × 1568 px; SHA-256 `56cdd7ff791733fcd65dfcb1e392beaade749ec3b023957878be0476b6d2f743`.
- **Used by:** `docs/rigs.html`.
- **Purpose:** Review each rig's field of view, pixel scale and calibration settings.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs. Five rigs and measured fields/pixel scales with Calibration links, Library and Setup. All use global calibration values.
- **Composition:** CSS crop (210, 160, 1044, 872); CDP clip (189.00, 144.00, 939.60, 784.80), scale 1.

### assets/rig-setup-optics.png

#### 2026-10-18T01:25:46.844Z — capture

- **File:** 1800 × 1136 px; SHA-256 `6c67ec1f4ab66db96bbc61be1443034586c39e7cc051530f6df9eedd2a90285a`.
- **Used by:** `docs/rigs.html`.
- **Purpose:** The rig's sensor and optics determine its field of view and pixel scale.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > Setup askar107phq > Optics. 6248x4176, 3.76 um, 749 mm, aperture 108.55072463768116 mm from frame header; hand-turned angle 0, field 1.80x1.20 degrees at 1.04 arcsec/pixel f/6.9. No edits.
- **Composition:** CSS crop (232, 263, 1000, 632); CDP clip (208.80, 236.70, 900.00, 568.80), scale 1.

### assets/rig-limits.png

#### 2026-10-18T01:25:58.081Z — capture

- **File:** 1396 × 1098 px; SHA-256 `f5d700327d32bdc54fe6e9d19a6c6ba2f681f3abb97ad03c9551152b3e588bec`.
- **Used by:** `docs/rigs.html`.
- **Purpose:** Planning limits and Target Scheduler limits have separate controls.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > askar107phq > Limits and delivery. Planning altitude 20–90, meridian waits 0; all Target Scheduler limits inherited.
- **Composition:** CSS crop (439, 337, 776, 611); CDP clip (395.10, 303.30, 698.40, 549.90), scale 1.

### assets/rig-ts-projects.png

#### 2026-10-18T01:26:04.320Z — capture

- **File:** 1396 × 684 px; SHA-256 `f9bc1529c69b8bd96e560be1a44ad96515ea96f24ec67ea312dee6b08edca02d`.
- **Used by:** `docs/rigs.html`.
- **Purpose:** Check existing projects and choose where to send plans. No remote peer is configured here.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > askar107phq > Limits and delivery. All 26 projects already have these limits, unset values preserve per-project settings. Send plans to This server only; no peers registered. No Apply.
- **Composition:** CSS crop (439, 554, 776, 381); CDP clip (395.10, 498.60, 698.40, 342.90), scale 1.

### assets/rig-setup-site.png

#### 2026-10-18T01:26:24.114Z — capture

- **File:** 1768 × 1176 px; SHA-256 `6cf56238998d7f3fc034f80995f12a97db861f671f95da6b09dc4e1448d83d71`.
- **Used by:** `docs/rigs.html`.
- **Purpose:** Set the rig's planning site and horizon. Coordinates are blank in this example.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > askar107phq > Site. Planning site folsom-patio-se, flat horizon. Latitude and longitude cleared in unsaved form for privacy. No Save; Reload rig profile discards temporary blanks.
- **Composition:** CSS crop (232, 328, 983, 654); CDP clip (208.80, 295.20, 884.70, 588.60), scale 1.

### assets/settings-sites.png

#### 2026-10-18T01:26:42.120Z — capture

- **File:** 1800 × 912 px; SHA-256 `98defe1ee3c072e96f447171d53f2efe2e5fdd26cb0afa352f5a8f446023a4d0`.
- **Used by:** `docs/rigs.html`.
- **Purpose:** A site can use a pasted horizon. This example has no coordinates and was not saved.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > Sites > Edit sfro. Coordinates blank for privacy; example horizon text 0 12 / 90 20 / 180 15 / 270 18 entered but neither Use pasted horizon nor Save site pressed. Close editor discards.
- **Composition:** CSS crop (232, 505, 1000, 507); CDP clip (208.80, 454.50, 900.00, 456.30), scale 1.

### assets/rig-collaboration.png

#### 2026-10-18T01:26:53.793Z — capture

- **File:** 1800 × 1028 px; SHA-256 `0bc5a272af0e2a66ea4fef287d50e247c2e2f86f3e242b8a773c0cc89a03734e`.
- **Used by:** `docs/collaboration.html`.
- **Purpose:** The connected rig can check for tonight's collaboration work.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > starfront-redcat61 > Collaboration > Tonight. Connected collab.starfront.space. No work requested; Night override folded; Check in and Pull not pressed.
- **Composition:** CSS crop (232, 223, 1000, 572); CDP clip (208.80, 200.70, 900.00, 514.80), scale 1.

### assets/collaboration-automation.png

#### 2026-10-18T01:27:09.129Z — capture

- **File:** 1396 × 926 px; SHA-256 `f6a18f32f800c1e3b8584489d98f76690b5da4b96bd9c862887e01d7aa0b57aa`.
- **Used by:** `docs/collaboration.html`.
- **Purpose:** Choose which collaboration steps may run automatically. All are off here.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > starfront-redcat61 > Collaboration > Automation. Rig resolved, M31 NINA TEST COLLAB listed, all automation off, Last success Not yet / Next refresh Off. No Save or Refresh.
- **Composition:** CSS crop (439, 420, 776, 515); CDP clip (395.10, 378.00, 698.40, 463.50), scale 1.

### assets/collaboration-contribution-files.png

#### 2026-10-18T01:27:36.849Z — capture

- **File:** 1396 × 430 px; SHA-256 `c04212c2b729dd90d09483d6fdb9c3ba65107e2862d50565016da19380cea7e1`.
- **Used by:** `docs/collaboration.html`.
- **Purpose:** Choose which contribution files to send. Upload is disabled when no accepted files are pending.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Rigs > starfront-redcat61 > Collaboration > Reports. Existing M31 NINA TEST COLLAB visit 2026-10-07, panel 0, night 2026-10-07 has 0 accepted images. Contribution files controls shown; no pending transfer and Upload disabled. Actual empty state.
- **Composition:** CSS crop (439, 573, 776, 239); CDP clip (395.10, 515.70, 698.40, 215.10), scale 1.

### assets/settings-exposure-templates.png

#### 2026-10-18T01:27:48.711Z — capture

- **File:** 1878 × 1580 px; SHA-256 `eeb82b4ede1bc9ac1780423ec60603e5bf97d1b34e3d2fab2f8bd1c96dca219c`.
- **Used by:** `docs/activation.html`.
- **Purpose:** Shared exposure templates include optional Moon-avoidance rules.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Exposure templates. 11 shared templates; B_120 Moon controls expanded, avoidance off; 60 degree separation, 7 day half-width, 0 relaxation, -15/5 altitude. No values edited.
- **Composition:** CSS crop (210, 160, 1044, 878); CDP clip (189.00, 144.00, 939.60, 790.20), scale 1.

### assets/settings-autoimport-scan-rules.png

#### 2026-10-18T01:28:18.494Z — capture

- **File:** 1724 × 1620 px; SHA-256 `5d5aeaa5e576d3873bc32f96d488c25c7a65b7ac6ea84ebab5ca3b8b72275026`.
- **Used by:** `docs/importing.html`.
- **Purpose:** Set scan exclusions, target matching and review rules before enabling automatic import.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Databases > Edit starfront-redcat61. Unsaved example: exclude **/Hocus Focus/** and **/PierCam/**; include blank; target name and position matching checked; minimum 10 seconds; automatic on-open plus hourly, lights and calibration, Ask first. Cancel next; no scheduler enabled.
- **Composition:** CSS crop (253, 145, 958, 900); CDP clip (227.70, 130.50, 862.20, 810.00), scale 1.

### assets/import-from-images.png

#### 2026-10-18T01:28:32.970Z — capture

- **File:** 1878 × 900 px; SHA-256 `619275cff127abdab5b47ebd1b059c686c0c228927f6402dd76c65eae3702108`.
- **Used by:** `docs/importing.html`.
- **Purpose:** Name the catalog, add image folders and choose whether to queue quality analysis.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Databases > New Database from Images. Name 2026 Archive; redcat61 _Source folder added only to form. Background quality unchecked. Create & Import not pressed; Cancel next.
- **Composition:** CSS crop (210, 557, 1044, 500); CDP clip (189.00, 501.30, 939.60, 450.00), scale 1.

### assets/settings-calibration-rig.png

#### 2026-10-18T01:29:22.931Z — capture

- **File:** 1800 × 1302 px; SHA-256 `f94e235e043efb1c82c1e6c64e212c925db8cf9a4047178069e14eba858947e5`.
- **Used by:** `docs/calibration-masters.html`.
- **Purpose:** Start from a preset, then override only the calibration limits this rig needs.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Settings > Calibration > Rigs > redcat61/ASI2600MM > Start from Sky flats. Unsaved preset: 72-hour flat session is own value, surrounding matching fields inherit defaults. Crop preset and upper matching rows; Light checks and Save rig below. Done then Close without saving discards preset.
- **Composition:** CSS crop (232, 217, 1000, 724); CDP clip (208.80, 195.30, 900.00, 651.60), scale 1.

### assets/header-jobs.png

#### 2026-10-18T01:29:39.116Z — capture

- **File:** 770 × 946 px; SHA-256 `61da32b9895c698b0f5b44e1666cedc00eed33030421e6bef97884ebaf542986`.
- **Used by:** `docs/grader.html`, `docs/stacking.html`, `docs/storage.html`.
- **Purpose:** The jobs list shows the running automatic stack build and the jobs queued behind it.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Iris Images, jobs popover. Existing Automatic Heart and Soul panel1 R10s stacking around 43%, queued SII and panel2 B/G/HA; 1 running,19queued,5waiting. No Started by you jobs available. No jobs started/stopped/reordered.
- **Composition:** CSS crop (1135, 12, 428, 526); CDP clip (1021.50, 10.80, 385.20, 473.40), scale 1.

### assets/header-jobs-automatic.png

#### 2026-10-18T01:29:48.432Z — capture

- **File:** 720 × 736 px; SHA-256 `e3d735fe0a0cc3f2e24f0b4ac5cd258ecaa5adb22b275a5190b4ef64fdd3b35e`.
- **Used by:** `docs/storage.html`.
- **Purpose:** Waiting jobs identify the stack build that must finish first.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Existing Automatic jobs, popover scrolled to bottom. ultra cat Refreshing stacks and Sh2 119 HA/OIII plus IC447 R Re-applying processing wait for automatic Heart and Soul Panel1 R10s build. No flat measurement active; caption must describe actual waiting processing.
- **Composition:** CSS crop (1148, 114, 400, 409); CDP clip (1033.20, 102.60, 360.00, 368.10), scale 1.

### assets/header-jobs-chip.png

#### 2026-10-18T01:29:48.797Z — capture

- **File:** 342 × 90 px; SHA-256 `5dba3871f4466c909d370d8136eb56fe0bd44e7eb9df46b760d3c909c281beee`.
- **Used by:** `docs/storage.html`.
- **Purpose:** The jobs chip shows progress and the counts of running, queued and waiting jobs.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Closed jobs chip during existing automatic stack build; about 45%,1 running,19 queued,5 waiting. No hover tooltip.
- **Composition:** CSS crop (1372, 13, 190, 50); CDP clip (1234.80, 11.70, 171.00, 45.00), scale 1.

### assets/header-picker.png

#### 2026-10-18T01:30:04.705Z — capture

- **File:** 1350 × 1116 px; SHA-256 `391d9022945ce3eb05848cdc09eb5e30a28ee6473d10bd59f11d0cbad90d0b44`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Search for a project, then choose all its images or a single target.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1&current=776
- **State and reshoot:** Images > project picker; search Heart. Heart of the Soul and Heart Mosaic expand automatically with All images and target rows. Current scope remains Iris.
- **Composition:** CSS crop (165, 0, 750, 620); CDP clip (148.50, 0.00, 675.00, 558.00), scale 1.

### assets/sequence-session.jpg

#### 2026-10-18T01:30:24.522Z — capture

- **File:** 3138 × 1652 px; SHA-256 `707112f1981979c6056d9dd1e70c777d1a58c4656130849c9708cf06be6938ad`.
- **Used by:** `index.html`, `docs/astrometry-quality.html`, `docs/grader.html`, `docs/screening.html`.
- **Purpose:** Compare one capture session. These stored grades are Rejected; the scores still show the differences between frames.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10952&filterName=HA
- **State and reshoot:** Golf of Mexico ultra cat db-e075b4ec project12 target12, HA Jul9 2026 10:08 PM session57. Score cutoff50, By hand,0selected,150px,night/all/calibration chips. Three Soft Stars25 then Possible Obstruction62/60. All stored grades Rejected.
- **Composition:** CSS crop (0, 0, 1744, 918); CDP clip (0.00, 0.00, 1569.60, 826.20), scale 1.

### assets/sequence-soft-stars.png

#### 2026-10-18T01:30:24.591Z — capture

- **File:** 1652 × 454 px; SHA-256 `b565860f37fedf2212618d0c68192a62ac9053ea17d504b9489baae07ad3d4ae`.
- **Used by:** `docs/screening.html`.
- **Purpose:** The first three frames have fewer stars and much higher HFR than the next two.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10952&filterName=HA
- **State and reshoot:** Same HA Jul9 session, first five cards: HFR6.62/6.28/5.99 Soft Stars25, then HFR1.49/1.47 Possible Obstruction62/60. All already Rejected.
- **Composition:** CSS crop (45, 665, 918, 253); CDP clip (40.50, 598.50, 826.20, 227.70), scale 1.

### assets/image-detail.jpg

#### 2026-10-18T01:30:52.887Z — capture

- **File:** 3138 × 2054 px; SHA-256 `218ab50d9b1b7d83c94a9846fdcf60aa741652cd35fe13a8c9d817223c807530`.
- **Used by:** `docs/grader.html`, `docs/screening.html`.
- **Purpose:** Open a frame to inspect its pixels, quality findings and solved sky context.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/detail/10955?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&returnTo=sequence
- **State and reshoot:** Golf of Mexico HA frame10955, Jul9 23:11:10, 300s, HFR1.49,5340stars. Rejected. Detail score82% (Sequence card62), reason star count dropped63% stable background; no Show affected regions available. Image Information folded, Quality/Sky open, Calibration no findings folded; Hinted solve55 objects. Fit65%.
- **Composition:** CSS crop (0, 0, 1744, 1142); CDP clip (0.00, 0.00, 1569.60, 1027.80), scale 1.

### assets/annotated-hfr-labels.png

#### 2026-10-18T01:31:28.992Z — capture

- **File:** 3138 × 2054 px; SHA-256 `f262f33b6e5a21e7b7f93c429940599794a0455ba20e1fcc8637649414c3ea2a`.
- **Used by:** `docs/grader.html`.
- **Purpose:** The star overlay labels measured HFR values. These measurements can differ from imported capture metadata.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/detail/10955?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&returnTo=sequence
- **State and reshoot:** Golf HA frame10955. S Stars on; annotation847 stars AvgHFR2.68 AvgFWHM5.29 versus imported HFR1.49/5340 stars. Fit65%. Image Information open, others folded. This frame is stored Rejected with possible obstruction, not a clean accepted example. Wait until loading overlay clears.
- **Composition:** CSS crop (0, 0, 1744, 1142); CDP clip (0.00, 0.00, 1569.60, 1027.80), scale 1.

### assets/grid-view-panel.png

#### 2026-10-18T01:31:49.618Z — capture

- **File:** 520 × 652 px; SHA-256 `a5166d31c789617448eb9d6aea21a0989c196589bed4c54e67fec1d5a3a6a7f1`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Choose grouping, order, night marks and score chips in View.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest
- **State and reshoot:** Golf of Mexico Images > View. Group Filter, Newest first, Nights and hours, each rig noon, all score/calibration chips, separate exposure groups. View uses highlighted state; this build does not append newest first text.
- **Composition:** CSS crop (1128, 72, 289, 363); CDP clip (1015.20, 64.80, 260.10, 326.70), scale 1.

### assets/grid-time-marks.jpg

#### 2026-10-18T01:34:32.103Z — capture

- **File:** 2322 × 1016 px; SHA-256 `391abb9da34a9d4cfba6d47c7858db7825bc9099a0cc1eea3abd5960f57ddefa`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Night breaks and hour marks place frames in capture order.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&size=150
- **State and reshoot:** Golf of Mexico; Filter grouping, Oldest first, 150 px, Nights and hours. Crop shows July 9 night break and 23:00/00:00 hour marks around frame 10955; stored grades unchanged.
- **Composition:** CSS crop (410, 420, 1290, 565); CDP clip (369.00, 378.00, 1161.00, 508.50), scale 1.

### assets/grid-newest-first.jpg

#### 2026-10-18T01:35:02.649Z — capture

- **File:** 2502 × 990 px; SHA-256 `e64f6a46725bdfb135935d3a7cf0d1ebeba60cb8f0acf3408602ff7398f204bd`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Newest first puts the latest captures at the start of each group.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&size=150&order=newest
- **State and reshoot:** Golf of Mexico, Filter grouping, B 60 s first group, 150 px, Newest first selected in open View. First frames descend 20:38 to 20:24; 603 B frames, 300 accepted and 303 rejected.
- **Composition:** CSS crop (25, 73, 1390, 550); CDP clip (22.50, 65.70, 1251.00, 495.00), scale 1.

### assets/grid-filter-list.png

#### 2026-10-18T01:35:07.551Z — capture

- **File:** 404 × 554 px; SHA-256 `56821631934153dcc0fef3b739a0cefd6cda72e74c4673f7b155d83dc83f27d0`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Choose one or more filters, or keep All selected.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&size=150&order=newest
- **State and reshoot:** Golf of Mexico Images; Filter dropdown open, All selected; B, G, HA, L, OIII, R and SII choices.
- **Composition:** CSS crop (135, 74, 225, 308); CDP clip (121.50, 66.60, 202.50, 277.20), scale 1.

### assets/grid-phone-filters.png

#### 2026-10-18T01:35:25.271Z — capture

- **File:** 337 × 730 px; SHA-256 `242ff40c7954b9160b69164cce198c96cac4e0bf617765d4d8595729959cdec8`.
- **Used by:** `docs/grader.html`.
- **Purpose:** At phone width, expand Filters to reach the grid controls.
- **Build/environment:** shared live-server environment; viewport 375 × 812 CSS px; DPR 0.90.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&size=150&order=newest
- **State and reshoot:** 375 CSS px phone view (viewport override 338x731 DIP with 90% zoom; DPR 0.9). Golf of Mexico, Filters expanded, 150 px, newest first. All filters unchanged.
- **Composition:** CSS crop (0, 0, 375, 812); CDP clip (0.00, 0.00, 337.50, 730.80), scale 1.

### assets/library-phone.png

#### 2026-10-18T01:35:41.762Z — capture

- **File:** 337 × 679 px; SHA-256 `7b3c980b899eeeb16af1c585af60f57bdec11d16562cdbf8ad6c13a818e83447`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Compact project rows keep counts, calibration warnings and actions together at phone width.
- **Build/environment:** shared live-server environment; viewport 375 × 812 CSS px; DPR 0.90.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest
- **State and reshoot:** Phone 375 CSS px, Compact Library, all databases, newest first, scrolled to Last 7 days. California, NGC 1931 with Poor calibration and 3 new frames, Medusa with 11 new.
- **Composition:** CSS crop (0, 0, 375, 755); CDP clip (0.00, 0.00, 337.50, 679.50), scale 1.

### assets/library-compact.jpg

#### 2026-10-18T01:35:48.475Z — capture

- **File:** 3138 × 1260 px; SHA-256 `03e4159c97b5fbd281b94095c69cbd260540cf6550ffe5680630db3fb2b71093`.
- **Used by:** `index.html`, `docs/grader.html`, `docs/index.html`.
- **Purpose:** The compact Library lists projects across all databases, with counts and review status.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest
- **State and reshoot:** All databases Library, Compact, newest first. Catalog 38,691 images, 25,562 accepted, 3,645 to review. Last 7 days rows through LDN798; counts are capture time observations.
- **Composition:** CSS crop (0, 0, 1744, 701); CDP clip (0.00, 0.00, 1569.60, 630.90), scale 1.

### assets/library-calibration-pills.png

#### 2026-10-18T01:35:48.525Z — capture

- **File:** 2996 × 270 px; SHA-256 `4d6deb466dccc46dba6b677ad7db252394f4f0e38800e5d90a7aa1f04e4b0da2`.
- **Used by:** `docs/calibration-grading.html`, `docs/grader.html`.
- **Purpose:** Poor and Check pills identify projects whose calibration needs attention.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest
- **State and reshoot:** Compact Library rows: Elephant Trunk Check, Sh2 119 Poor, LDN798 Check. All databases.
- **Composition:** CSS crop (40, 549, 1665, 150); CDP clip (36.00, 494.10, 1498.50, 135.00), scale 1.

### assets/library-card.png

#### 2026-10-18T01:35:56.545Z — capture

- **File:** 2988 × 1136 px; SHA-256 `cc91d500a2b3ac178fb245e3fdb43cd44f020a59ffca6338bb360c15207502e1`.
- **Used by:** `docs/exporting.html`, `docs/grader.html`.
- **Purpose:** Expand a project to see its filters, progress and target actions. This is Golf of Mexico.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&q=Golf+of+Mexico
- **State and reshoot:** Library Golf of Mexico expanded card, search Golf of Mexico. 2785 images, 1238 accepted, 1547 rejected, 0 pending; 14 new, 1238/1593 desired. Poor calibration pill; project and target actions.
- **Composition:** CSS crop (42, 351, 1660, 632); CDP clip (37.80, 315.90, 1494.00, 568.80), scale 1.

### assets/export-dialog.png

#### 2026-10-18T01:36:05.172Z — capture

- **File:** 896 × 1242 px; SHA-256 `bc85cd615628f1d5475b97a57eb0d2b3001a41895160ba34ff69f7de1d8d981c`.
- **Used by:** `docs/exporting.html`.
- **Purpose:** Choose the frame selection, folder layout and output format before exporting.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&q=Golf+of+Mexico
- **State and reshoot:** Golf of Mexico project Export. Include ungraded on; Grouped by target; Zip of frames. No export started.
- **Composition:** CSS crop (623, 225, 498, 691); CDP clip (560.70, 202.50, 448.20, 621.90), scale 1.

### assets/astrobin-dialog.png

#### 2026-10-18T01:36:17.126Z — capture

- **File:** 1530 × 1412 px; SHA-256 `52450f562497dc5f4802c63fca7abb1418b42242ef1ff198d0b2e7fc85d72f63`.
- **Used by:** `docs/exporting.html`.
- **Purpose:** AstroBin export summarizes the accepted exposure time and warns when filter IDs are missing.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&q=Golf+of+Mexico
- **State and reshoot:** Golf of Mexico AstroBin Essentials with Count ungraded on: 1238 frames, 19 nights, 23 hours. Filter IDs missing, so mapping warning visible; table continues below viewport. No mapping saved or CSV copied/downloaded.
- **Composition:** CSS crop (447, 178, 850, 785); CDP clip (402.30, 160.20, 765.00, 706.50), scale 1.

### assets/wbpp-run-dialog.png

#### 2026-10-18T01:36:28.781Z — capture

- **File:** 1352 × 1414 px; SHA-256 `d851f85f108d937bee3605b7a6f0e0e0b0f830fe35df66668b3eca41dc9c1a36`.
- **Used by:** `docs/wbpp.html`.
- **Purpose:** Review WBPP's quality, integration and rejection choices before starting the run.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&q=Golf+of+Mexico
- **State and reshoot:** Golf of Mexico WBPP dialog upper options. WBPP 3.1.0 configured; Include ungraded on; Maximum quality; Fast Integration Off; Drizzle Off; default Autocrop and rejection. No run started. More parameters and run folder are below the scroll.
- **Composition:** CSS crop (496, 178, 752, 786); CDP clip (446.40, 160.20, 676.80, 707.40), scale 1.

### assets/library-plans.png

#### 2026-10-18T01:36:38.500Z — capture

- **File:** 2996 × 962 px; SHA-256 `39d5b6bbc875c2c9351934e99ea7c49cb4c2ee239e9ab8b205d62e1fc7cbdf3e`.
- **Used by:** `docs/planning.html`.
- **Purpose:** Plans without captured images appear together, with their framing and activation status.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest
- **State and reshoot:** Library Plans with nothing captured yet, all databases. Includes SNRG150 Activated on 2 rigs, Flaming Star Framed, Cocoon Darks/Elephants Mosaic Planned and M31 NINA TEST COLLAB Activated on 1 rig.
- **Composition:** CSS crop (40, 587, 1665, 535); CDP clip (36.00, 528.30, 1498.50, 481.50), scale 1.

### assets/plan-needs-activating.png

#### 2026-10-18T01:36:52.488Z — capture

- **File:** 2970 × 252 px; SHA-256 `494b51ffbc2da8a9a25a7aef65366021dd0918dd6ff4b176ad3a915ad469b6fb`.
- **Used by:** `docs/planning.html`.
- **Purpose:** This saved plan needs activation; the preview warns that four extra plans would turn off.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&plan=48bc9107-ccc0-4440-bb3b-fb2f5ccd29a0
- **State and reshoot:** 2026 - SNRG150 saved plan, two rigs already set up. Needs activating banner warns turns off 4 plans in ultra cat. Existing state, no activation or saved changes.
- **Composition:** CSS crop (48, 88, 1650, 140); CDP clip (43.20, 79.20, 1485.00, 126.00), scale 1.

### assets/activation-turns-off.png

#### 2026-10-18T01:37:02.237Z — capture

- **File:** 1562 × 832 px; SHA-256 `3138379fa147c88a77bd2572c799151beaeff9628e9d3a65aecf7b8d2ec0d9aa`.
- **Used by:** `docs/activation.html`.
- **Purpose:** The preview lists the four Target Scheduler plans that activation would turn off.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&plan=48bc9107-ccc0-4440-bb3b-fb2f5ccd29a0
- **State and reshoot:** SNRG150 activation preview; ultra cat would keep HA 120 and OIII 360 at 300s and turn off R/L/G/B 60s plans 45–48, each 0/400. No Activate or Take values pressed.
- **Composition:** CSS crop (438, 403, 868, 463); CDP clip (394.20, 362.70, 781.20, 416.70), scale 1.

### assets/activation-preview.png

#### 2026-10-18T01:37:02.309Z — capture

- **File:** 1642 × 1414 px; SHA-256 `3c5d2f7f484f065609a5574bd4558893be9b2481f74fccb1639a6312b0f74ecf`.
- **Used by:** `index.html`, `docs/activation.html`.
- **Purpose:** Review each rig's changes before activating the saved plan.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&plan=48bc9107-ccc0-4440-bb3b-fb2f5ccd29a0
- **State and reshoot:** SNRG150 activation preview ready, framing revision2, plan revision3, 1 panel. Ultra cat turns off4 extra plans; redcat61 unchanged. Preview only; Activate below scroll, not pressed.
- **Composition:** CSS crop (415, 178, 913, 786); CDP clip (373.50, 160.20, 821.70, 707.40), scale 1.

### assets/plan-objectives.png

#### 2026-10-18T01:37:08.053Z — capture

- **File:** 2966 × 1106 px; SHA-256 `3619f8c94b754b2f235baa6a292bef463893ff0ba1354cfb186fc0ccdc80e1be`.
- **Used by:** `docs/activation.html`.
- **Purpose:** Set the exposure goal and purpose for each bandpass.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&plan=48bc9107-ccc0-4440-bb3b-fb2f5ccd29a0&planTab=exposures
- **State and reshoot:** SNRG150 Exposures objectives: Blue8h, Green8h, Luminance40h, Red8h, H-alpha10h, OIII30h, all Faint detail. No edits.
- **Composition:** CSS crop (48, 244, 1648, 615); CDP clip (43.20, 219.60, 1483.20, 553.50), scale 1.

### assets/plan-rigs.png

#### 2026-10-18T01:37:27.769Z — capture

- **File:** 2970 × 1144 px; SHA-256 `0e9ebf3409f5d435bce6d49097333141f128b9edcc501eefaa66fdbfc9239c32`.
- **Used by:** `docs/activation.html`.
- **Purpose:** Each rig shows whether it matches the saved plan, with scheduling limits below.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&grouping=filter&order=newest&plan=48bc9107-ccc0-4440-bb3b-fb2f5ccd29a0&planTab=rigs
- **State and reshoot:** SNRG150 Rigs: ultra cat behind, redcat61 activated; scheduler settings folded, Add rig and inherited scheduling limits shown. No edits.
- **Composition:** CSS crop (48, 184, 1650, 636); CDP clip (43.20, 165.60, 1485.00, 572.40), scale 1.

### assets/plan-workspace.jpg

#### 2026-10-18T01:37:42.946Z — capture

- **File:** 3138 × 2054 px; SHA-256 `8afd7abf8cc7f802c7d2cc7f61bc02f14d241db3ede3ce9cbbc1c0112c83ffee`.
- **Used by:** `index.html`, `docs/planning.html`.
- **Purpose:** Frame Heart Mosaic over the survey image. Its four captured panels remain locked.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b
- **State and reshoot:** Heart Mosaic plan, Framing, four captured locked panels, Not activated yet. DSS offline, 5.17 degrees across, equatorial grid/constellations on, deep-sky marks off. No plan edits.
- **Composition:** CSS crop (0, 0, 1744, 1142); CDP clip (0.00, 0.00, 1569.60, 1027.80), scale 1.

### assets/framing-stage.jpg

#### 2026-10-18T01:37:43.026Z — capture

- **File:** 2966 × 1548 px; SHA-256 `7d2f40607b1511a5de12f8bff91207ea8ae018a7e6df7c3ec5d4d05ef88cf789`.
- **Used by:** `docs/framing.html`.
- **Purpose:** Compare the mosaic footprint with the survey image and the rig's field of view.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b
- **State and reshoot:** Heart Mosaic framing sky and target/rig controls, four locked captured panels. Deep-sky marks off; other state as plan-workspace.
- **Composition:** CSS crop (48, 272, 1648, 861); CDP clip (43.20, 244.80, 1483.20, 774.90), scale 1.

### assets/framing-mosaic-panels.png

#### 2026-10-18T01:37:53.893Z — capture

- **File:** 666 × 1336 px; SHA-256 `748b479df1cc387a6d45c2bc47e52ab75d9cb443449de2f90158926ec3d22e79`.
- **Used by:** `docs/framing.html`.
- **Purpose:** Select a panel and check its overlap with neighboring panels before changing the layout.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b
- **State and reshoot:** Heart Mosaic, Mosaic panels with r1c2 selected, all4 locked. Minimum overlap20%, measured neighbor overlaps18.1–19.4 belowminimum. Add panel compass, 4 panel list and warnings; no edits.
- **Composition:** CSS crop (1320, 274, 371, 743); CDP clip (1188.00, 246.60, 333.90, 668.70), scale 1.

### assets/framing-locked-panel.png

#### 2026-10-18T01:37:53.925Z — capture

- **File:** 628 × 360 px; SHA-256 `74e622e25d0ea693415a93e7e7b66da100d7123f68a20a91772121eff03cc35e`.
- **Used by:** `docs/framing.html`.
- **Purpose:** A captured panel stays locked until you unlock it; Remove is disabled while it is locked.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b
- **State and reshoot:** Heart Mosaic selected r1c2 locked,336frames, drawn as shot1.79x1.20 degrees at0.6degrees; Unlock available, Remove disabled. No unlock.
- **Composition:** CSS crop (1331, 646, 349, 201); CDP clip (1197.90, 581.40, 314.10, 180.90), scale 1.

### assets/calibration-frame-keep-out.png

#### 2026-10-18T01:38:07.141Z — capture

- **File:** 566 × 1144 px; SHA-256 `68771ebdb4c619b395352a490e2fbaff17081e883663076461e4b13ee4019528`.
- **Used by:** `docs/calibration-grading.html`.
- **Purpose:** This flat's illumination differs from its session by 13.9%, above the 5% limit, so it is left out of masters.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=c86f7ba628d954df&calKind=flat&calGrade=poor&calFrame=b28da39d-e31d-43f9-a226-944aa648e997
- **State and reshoot:** Teddy Bear poor OIII flat b28da39d-e31d-43f9-a226-944aa648e997; uneven light13.9% vs5%limit, automatically left out of masters. Keep out, Use anyway and Forget shown but untouched.
- **Composition:** CSS crop (1404, 492, 315, 636); CDP clip (1263.60, 442.80, 283.50, 572.40), scale 1.

### assets/calibration-scope-chip.png

#### 2026-10-18T01:38:07.184Z — capture

- **File:** 2690 × 318 px; SHA-256 `65080759cb0feb58497f15ae5b6c7172b78b08427fed962b1acebafdacc7f968`.
- **Used by:** `docs/calibration.html`.
- **Purpose:** Calibration is scoped to Teddy Bear Nebula QMark. Clear the scope to browse the rig's full library.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=c86f7ba628d954df&calKind=flat&calGrade=poor&calFrame=b28da39d-e31d-43f9-a226-944aa648e997
- **State and reshoot:** Calibration scoped to Teddy Bear Nebula QMark on starfront-redcat61. 835lights,58sessions,1040masters. Scope chip, clear scope link, TypeFlat and GradePoor.
- **Composition:** CSS crop (24, 88, 1495, 177); CDP clip (21.60, 79.20, 1345.50, 159.30), scale 1.

### assets/calibration-compare-session.jpg

#### 2026-10-18T01:38:14.849Z — capture

- **File:** 2470 × 1144 px; SHA-256 `7b5f85f0f6c524ce4770cc75a3e75093b214bb6e9127e6d112493d6c2b3c70d0`.
- **Used by:** `docs/calibration.html`.
- **Purpose:** Compare a flat with its session to inspect broad changes in illumination. This flat differs by 13.9%.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=c86f7ba628d954df&calKind=flat&calGrade=poor&calFrame=b28da39d-e31d-43f9-a226-944aa648e997&calView=session
- **State and reshoot:** Teddy Bear OIII poorflat divided by its session, Compare with session on, Normal stretch100%. Measured13.9%illumination deviation shown, no saved changes.
- **Composition:** CSS crop (345, 492, 1373, 636); CDP clip (310.50, 442.80, 1235.70, 572.40), scale 1.

### assets/calibration-library.png

#### 2026-10-18T01:38:26.423Z — capture

- **File:** 3138 × 2054 px; SHA-256 `2d79e2b2ca2973e2b14e7114c4e7cf5250f65724fef8ff133c806d7ac16dee82`.
- **Used by:** `docs/calibration.html`.
- **Purpose:** Browse calibration sessions, select a frame and inspect the measurements behind its grade.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=c86f7ba628d954df&calKind=flat&calFrame=b28da39d-e31d-43f9-a226-944aa648e997
- **State and reshoot:** Calibration Frames/Sessions scoped to Teddy Bear, TypeFlat, GradeAll. 32sessions290frames, Sep13 OIII session10frames, poor third flat selected. Normal stretch, comparison off,85%fit.
- **Composition:** CSS crop (0, 0, 1744, 1142); CDP clip (0.00, 0.00, 1569.60, 1027.80), scale 1.

### assets/calibration-dust-disks.jpg

#### 2026-10-18T01:38:48.985Z — capture

- **File:** 2468 × 1170 px; SHA-256 `f5fcb4cbe71515d65c8f78cd62c2905fd799403f273f0abfb5253d2552a88e4b`.
- **Used by:** `docs/calibration-flats.html`.
- **Purpose:** Three large dust disks are marked on this flat. Their presence alone does not make the frame poor.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=ebbfc7314b5cf7b4&calKind=flat&calSpots=1&calFrame=77bdbaf5-c62c-4c44-b8d0-1af0151c79bf
- **State and reshoot:** Teddy Bear HA flat2026-10-08_07-23-46_HA_-5.00_12.00s_0000.fits. GradeOK, Spots and Large dust on, 3disks at0.26/0.40/0.38%, estimated11mm filter/window. Normal stretch85%.
- **Composition:** CSS crop (346, 491, 1372, 651); CDP clip (311.40, 441.90, 1234.80, 585.90), scale 1.

### assets/calibration-masters-tab.png

#### 2026-10-18T01:38:58.022Z — capture

- **File:** 3052 × 1470 px; SHA-256 `ee3588c516f58f2f71a1259b8974644bbf2a3ac4177c1355ee2ceaf9fecd78d8`.
- **Used by:** `docs/calibration.html`.
- **Purpose:** The Masters tab lists generated masters, their inputs and where they are used.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=ebbfc7314b5cf7b4&calKind=flat&calSpots=1&calFrame=77bdbaf5-c62c-4c44-b8d0-1af0151c79bf&calTab=masters
- **State and reshoot:** Teddy Bear Masters tab, all types, files-on-disk filter off;1055masters in list, project banner1040. Dark600/120s and SII flats, input counts, dates and used-by provenance. No builds.
- **Composition:** CSS crop (24, 84, 1696, 817); CDP clip (21.60, 75.60, 1526.40, 735.30), scale 1.

### assets/calibration-flat-groups.jpg

#### 2026-10-18T01:39:33.264Z — capture

- **File:** 3052 × 1918 px; SHA-256 `3d16b7b85c9088ef614442772e81d47c2d9b9ddab3513515e29c2c90fdead092`.
- **Used by:** `index.html`, `docs/calibration-flats.html`.
- **Purpose:** Measured changes in dust or illumination separate these O III flat groups.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-d6eaaf55&project=1&current=8620&calBrowse=groups&calGroup=d067a2659094e08f&calFrame=766f5294-a5c8-4974-8fe0-d77a440d91bb
- **State and reshoot:** C925 OIII100.9–104.4degrees, Group2Aug10 selected; groups1–4 with newdust1.8% and vignetting2.1/2.4% boundaries. Frame2026-08-11_06-05-44_OIII_-10.00_36.28s_0000.fits OK7donuts. No join/split.
- **Composition:** CSS crop (24, 76, 1696, 1066); CDP clip (21.60, 68.40, 1526.40, 959.40), scale 1.

### assets/calibration-dust-donuts.jpg

#### 2026-10-18T01:39:40.976Z — capture

- **File:** 2474 × 1204 px; SHA-256 `238c050b718b0fede78f9083dcf24bb66ebec6e1931fba1345ce134afc1d20eb`.
- **Used by:** `docs/calibration-flats.html`.
- **Purpose:** The SCT flat has seven measured dust donuts. The overlay shows their position and estimated distance.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-d6eaaf55&project=1&current=8620&calBrowse=groups&calGroup=d067a2659094e08f&calFrame=766f5294-a5c8-4974-8fe0-d77a440d91bb&calSpots=1
- **State and reshoot:** C925Aug10 OIII firstflat2026-08-11_06-05-44_OIII_-10.00_36.28s_0000.fits, Spots+Large duston, Normal85%.7donuts, estimates10–30mm, bottom-leftvignetting4.78%. GradeOK.
- **Composition:** CSS crop (345, 459, 1375, 669); CDP clip (310.50, 413.10, 1237.50, 602.10), scale 1.

### assets/calibration-flat-compare.jpg

#### 2026-10-18T01:39:47.607Z — capture

- **File:** 1782 × 1866 px; SHA-256 `230bd202c0029fe9e1c6c7ae6777642012209eb7e360cbb463e16e1a0d7f7d1d`.
- **Used by:** `docs/calibration-flats.html`.
- **Purpose:** Compare nights across a group boundary to see new, moved or missing dust and changes in illumination.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-d6eaaf55&project=1&current=8620&calBrowse=groups&calGroup=d067a2659094e08f&calFrame=766f5294-a5c8-4974-8fe0-d77a440d91bb&calSpots=1&calEarlier=1c0d0817c025cfba0ea865842557a062&calLater=c7749f98b0cd8d918e699165e342f5f2
- **State and reshoot:** C925 OIII Group2 Aug10 divided by May19, Normal, Spots+Large dust. New donut1.78%near507,2054; gone/moved dust and vignetting2.34%bottomedge. Compare older edge only, no group changes.
- **Composition:** CSS crop (345, 77, 990, 1037); CDP clip (310.50, 69.30, 891.00, 933.30), scale 1.

### assets/calibration-scheduler-flats.png

#### 2026-10-18T01:40:24.945Z — capture

- **File:** 3052 × 1082 px; SHA-256 `d0213d8c3fe4ab0986f6292844722983735496c6992a3f9c9c2b5176f55eb2ca`.
- **Used by:** `docs/sync-plugin.html`.
- **Purpose:** Select scheduler records to invalidate, then give a reason. This confirmation was canceled.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/calibration?db=db-d6eaaf55&project=1&current=8620&calBrowse=groups&calGroup=d067a2659094e08f&calFrame=766f5294-a5c8-4974-8fe0-d77a440d91bb&calSpots=1&calTab=scheduler
- **State and reshoot:** C925 Scheduler flats Recorded,148records. Select148Sh2 140 and147Elephant Trunk, Oct16sessions; Invalidate2confirmationshown, Reasonblank so actiondisabled. Canceled aftercapture; no invalidation.
- **Composition:** CSS crop (24, 99, 1696, 602); CDP clip (21.60, 89.10, 1526.40, 541.80), scale 1.

### assets/calibration-coverage-report.png

#### 2026-10-18T01:40:51.413Z — capture

- **File:** 1240 × 1414 px; SHA-256 `a79750df69fa14a5457fa4f9a3a7070758d65a52cad3f6100d6f5ca8ede13a97`.
- **Used by:** `docs/calibration-grading.html`.
- **Purpose:** The report separates Poor calibration from findings that need review and lists the affected lights.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/?db=db-d6eaaf55&project=1&current=8620&q=Golf+of+Mexico
- **State and reshoot:** Golf of Mexico coverage report:10of1238lightsPoor,384Check, include1547rejectedunchecked. Quality findings, calibration totals and firsttable rows visible; Check lights below scroll untouched.
- **Composition:** CSS crop (527, 178, 689, 786); CDP clip (474.30, 160.20, 620.10, 707.40), scale 1.

### assets/image-calibration-panel.png

#### 2026-10-18T01:41:15.054Z — capture

- **File:** 680 × 910 px; SHA-256 `4fc99b65e6e2f5be3ed805fbe720024fe6ba9390cd6ccba93b8ca0b44865d120`.
- **Used by:** `docs/calibration-grading.html`.
- **Purpose:** This light has a dark master made from one frame, below the minimum count.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/detail/16966?db=db-e075b4ec&project=12&q=Golf+of+Mexico&calib=thin_dark&filter=OIII&current=16966&calibFocus=thin_dark
- **State and reshoot:** Golf OIII light16966 Oct7 20:02:21, accepted,300s,-6.6C. CalibrationPoor: dark master1frame; Check kept-outdarks. Poorfindingselected, globalchecks/defaults, Bias116andDarks1Aug18provenance. Restofexcludedlistbelowcrop.
- **Composition:** CSS crop (1355, 198, 378, 506); CDP clip (1219.50, 178.20, 340.20, 455.40), scale 1.

### assets/image-detail-folded.png

#### 2026-10-18T01:41:27.031Z — capture

- **File:** 684 × 512 px; SHA-256 `e228a408bc6bddd15a8c93a8127fdbf90c3834e62b3a438f1c11072a43b7676e`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Collapsed detail sections keep their key findings visible beside the image.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/detail/16966?db=db-e075b4ec&project=12&q=Golf+of+Mexico&calib=thin_dark&filter=OIII&current=16966&calibFocus=none
- **State and reshoot:** Golf OIII16966, all five panels folded: ImageInformationOct7,Quality73%,CalibrationPoor thin dark, SkyHintedsolve, SatellitesOn demand.
- **Composition:** CSS crop (1353, 78, 381, 285); CDP clip (1217.70, 70.20, 342.90, 256.50), scale 1.

### assets/stacks-toolbar.png

#### 2026-10-18T01:41:39.081Z — capture

- **File:** 2936 × 326 px; SHA-256 `093172406ffa44b476aa9be77ad9ac13fc5e72dae7bcc0cd84118e7c9a3df4ca`.
- **Used by:** `docs/wbpp.html`.
- **Purpose:** Choose the stack method, calibration and grouping before building the current set.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/stacks?db=db-e075b4ec&project=12&q=Golf+of+Mexico&calib=thin_dark&filter=OIII&current=16966
- **State and reshoot:** Golf of Mexico Stacks header, Card sizeFit, SeparateexposuregroupsON, AcceptedonlyOFF, Recommended, Auto calibration, Capturesequence, Build/Rebuildcurrentset, WBPP.31h5minintegrated. No builds.
- **Composition:** CSS crop (56, 80, 1632, 182); CDP clip (50.40, 72.00, 1468.80, 163.80), scale 1.

### assets/stacks-view.jpg

#### 2026-10-18T01:42:28.239Z — capture

- **File:** 2036 × 1804 px; SHA-256 `10412ad02cb65464c2cd76d6879016c249a8a94644b3ab7ccff5eb372ebcb39b`.
- **Used by:** `docs/stacking.html`.
- **Purpose:** Cached H-alpha and luminance stacks show exposure time and SNR history. Both previews are marked out of date here.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/stacks?db=db-e075b4ec&project=12&q=Golf+of+Mexico&calib=thin_dark&filter=OIII&current=16966&cardsize=550
- **State and reshoot:** Golf of Mexico Stacks,550pxcards, HA300s and L60s readycachedpreviews. HA100integrated8h20m, L268integrated4h28m, SNRcurves88%and66%ideal. Bothoutofdate banners retained; no rebuild.
- **Composition:** CSS crop (306, 139, 1132, 1003); CDP clip (275.40, 125.10, 1018.80, 902.70), scale 1.

### assets/stacks-mosaic.jpg

#### 2026-10-18T01:42:42.667Z — capture

- **File:** 3138 × 1584 px; SHA-256 `aee3a571aa32ac26348b4a93ab672fbbf713aff2f3b79a02cb6b39547bfb1a7b`.
- **Used by:** `index.html`, `docs/grader.html`, `docs/stacking.html`.
- **Purpose:** Compare the four SHO panel stacks with their solved, north-up placement.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/stacks?db=db-a01c581c&project=21&current=8620&q=Heart&mosaic=1
- **State and reshoot:** Heart Mosaic4panels, existingSHOstacks, gridleft and solveplacednorthup right.550pxcards, all4panels solved. Automaticbuildscontinuingbelowcrop; none startedbyus.
- **Composition:** CSS crop (0, 0, 1744, 880); CDP clip (0.00, 0.00, 1569.60, 792.00), scale 1.

### assets/sky-live.jpg

#### 2026-10-18T01:43:00.439Z — capture

- **File:** 3138 × 1854 px; SHA-256 `52e8a57e2c1a18dd6e81fcbcf991eda88de5ade97ffbd3132b7988546c850e42`.
- **Used by:** `index.html`, `docs/rigs.html`, `docs/sky.html`.
- **Purpose:** Live lists the rigs and their latest reports. These five rigs have not reported yet.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/sky?db=db-a01c581c&project=21&current=8620&q=Heart&mosaic=1&live=1
- **State and reshoot:** SkycoverageEquatorialFlat,all5rigs/filters,183nightsAug6 2025–Oct16 2026,1699h38691frames72targets. Liveon;all5Neverseen/No reportyet,0online. No live pointings available.
- **Composition:** CSS crop (0, 0, 1744, 1030); CDP clip (0.00, 0.00, 1569.60, 927.00), scale 1.

### assets/sky-context.jpg

#### 2026-10-18T01:45:49.388Z — capture

- **File:** 3066 × 1566 px; SHA-256 `5091e673493d5c0a989392890e072abfca8e426ee08802df9a63dfc645b663d0`.
- **Used by:** `index.html`, `docs/astrometry.html`.
- **Purpose:** The solved frame places catalog objects over the image and lists the expected objects in its field.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/detail/10955?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&returnTo=sequence
- **State and reshoot:** Golf of Mexico HA frame 10955, Jul 9 2026 23:11, Rejected, hinted solve; Sky context expanded and sky overlay on. Fit 65%. 55 expected objects, center 20h56m49.8s +43d53m29s, scale 1.491 arcsec/px, rotation -179.7 deg, target in frame 91 arcsec from center. Image Information, Quality, Calibration, Satellite tracks folded. Crop image and sky context.
- **Composition:** CSS crop (24, 174, 1704, 870); CDP clip (21.60, 156.60, 1533.60, 783.00), scale 1.

### assets/sequence-select-rule.png

#### 2026-10-18T01:46:09.405Z — capture

- **File:** 3020 × 150 px; SHA-256 `47f36e730ef6a2894c2566b328d4cafa81eb533fd374c4a4ae4f0e5b3e770646`.
- **Used by:** `docs/screening.html`.
- **Purpose:** Recommended rejects stays active even when no frames match. These session frames already have Rejected grades.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&selectRule=recommended
- **State and reshoot:** Golf of Mexico HA Jul 9 2026 22:08 session (57). Recommended rejects rule selected; count 0 and 0 selected because all frames already have stored Rejected grades. Score cutoff 50, size 150, newest first. No grades changed. Reshoot: choose this session, select Recommended rejects, crop sticky toolbar.
- **Composition:** CSS crop (34, 76, 1678, 84); CDP clip (30.60, 68.40, 1510.20, 75.60), scale 1.

### assets/settings-sync.png

#### 2026-10-18T01:46:49.941Z — capture

- **File:** 1856 × 1494 px; SHA-256 `93bec74f28cd4cb009d7027491ffe696b84d1d28f3f2e1e01ed3f97e9e91bfb6`.
- **Used by:** `docs/importing.html`.
- **Purpose:** Choose a local transfer or configure a remote peer, then preview before Apply.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10955&filterName=HA&selectRule=recommended
- **State and reshoot:** Settings > Sync. Merge catalogs from starfront-redcat61 to starfront-ultracat131, stored thumbnails on, before Preview. Remote PSF Guard below: no peers configured, Pull from peer, local redcat. No transfer preview or apply.
- **Composition:** CSS crop (216, 164, 1032, 830); CDP clip (194.40, 147.60, 928.80, 747.00), scale 1.

### assets/activation-save-first.png

#### 2026-10-18T01:47:04.393Z — capture

- **File:** 1626 × 464 px; SHA-256 `0824b76ca1f9ae398ae3c2ef23294acf091f33418542399ebd9cdaf1f51b2ddc`.
- **Used by:** `docs/activation.html`.
- **Purpose:** Save unsaved exposure changes before activating. PSF Guard then updates the preview.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b&planTab=exposures
- **State and reshoot:** Heart Mosaic > Exposures. Unsaved Blue goal changed 60 to61 frames per rig. Activate opens Save your changes before activating prompt. Save and activate not pressed. Reload next discards draft; captured saved plan remains Not activated yet.
- **Composition:** CSS crop (420, 442, 904, 258); CDP clip (378.00, 397.80, 813.60, 232.20), scale 1.

### assets/plan-summary-activated.png

#### 2026-10-18T01:50:31.973Z — capture

- **File:** 2948 × 146 px; SHA-256 `8816df144c730e6ba1180f4b990c671fc2fb31043698a859def682b5c7f9e290`.
- **Used by:** `docs/planning.html`.
- **Purpose:** The Activated badge confirms that the rig has the saved plan. Activate opens its preview again.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=M31+NINA&plan=1312f371-6571-4b47-b189-cda507588c2c
- **State and reshoot:** M31 NINA TEST COLLAB plan 1312f371-6571-4b47-b189-cda507588c2c. Existing Activated state on starfront-redcat61, no unsaved edits or warning bar. Blue/Green/Red14 frames, HA/OIII10 per rig, Framing tab. Crop summary only.
- **Composition:** CSS crop (54, 92, 1638, 82); CDP clip (48.60, 82.80, 1474.20, 73.80), scale 1.

### assets/settings-agents.png

#### 2026-10-18T01:51:06.164Z — capture

- **File:** 2060 × 710 px; SHA-256 `14ac2fb706386460e767176d4263b1249f49fc2bcc3a2bf8abb96bccdb626de3`.
- **Used by:** `docs/mcp.html`.
- **Purpose:** A local server without accounts shows the MCP address and client configuration snippets.
- **Build/environment:** local fixture; debug binary 0.11.0, checkout 88634571; binary commit unverified; macOS 27.0.1, Chrome 155.0.8059.82, dark, English, zoom 100%; viewport 1570 × 1028 CSS px; DPR 2.00.
- **Source URL:** http://127.0.0.1:13179/
- **State and reshoot:** Disposable localhost server with no accounts, Settings > Agents. Claude Code and Codex configuration snippets for http://127.0.0.1:13179/api/mcp. No token or connection created. Browser server has no Choose a fixed server port link. App debug binary0.11.0, checkout88634571; built binary commit not independently verified. Fixture scripts/screenshot-fixture.py. Chrome default100% zoom DPR2.
- **Composition:** CSS crop (130, 166, 1030, 355); CDP clip (130.00, 166.00, 1030.00, 355.00), scale 1.

### assets/sequence-select-after-reject.png

#### 2026-10-18T01:51:31.263Z — capture

- **File:** 3020 × 1068 px; SHA-256 `4812f704c67d0917d207df5c6a243b9a58d8c9bf81be72549dec494a9f8bd0fe`.
- **Used by:** `docs/screening.html`.
- **Purpose:** After rejection, Below the cutoff stays active with no matching frames selected. This example uses a disposable catalog with staged metadata.
- **Build/environment:** local fixture; debug binary 0.11.0, checkout 88634571; binary commit unverified; macOS 27.0.1, Chrome 155.0.8059.82, dark, English, zoom 100%; viewport 1570 × 1028 CSS px; DPR 2.00.
- **Source URL:** http://127.0.0.1:13179/#/sequence?db=db-94d9b627&project=1&target=1&current=1&selectRule=below-cutoff
- **State and reshoot:** Disposable M44 screenshot fixture, db-94d9b627 project1 target1, three real e2e B frames with staged HFR/star-count metadata (2.4/520,6.5/150,2.6/500). Select Below the cutoff at Score50, Review rejection, Reject selected(1). Frame2 now Rejected; rule stays active with0 matches/0selected; other2Pending. Uses Below the cutoff instead of Recommended rejects because catalog-only evidence has no automatic recommendation. No live catalog changed. Recreate with scripts/screenshot-fixture.py, local debug0.11.0 checkout88634571, Chrome100% DPR2.
- **Composition:** CSS crop (30, 78, 1510, 534); CDP clip (30.00, 78.00, 1510.00, 534.00), scale 1.

### assets/autoimport-held-review.png

#### 2026-10-18T01:53:45.444Z — capture

- **File:** 1900 × 186 px; SHA-256 `e6df302f27a8797ec5da4058aef49c204d0f97a096d431c52a854f64a139b4af`.
- **Used by:** `docs/importing.html`.
- **Purpose:** Automatic import holds a new target for review when no project matches it.
- **Build/environment:** local fixture; debug binary 0.11.0, checkout 88634571; binary commit unverified; macOS 27.0.1, Chrome 155.0.8059.82, dark, English, zoom 100%; viewport 1570 × 1028 CSS px; DPR 2.00.
- **Source URL:** http://127.0.0.1:13179/#/sequence?db=db-94d9b627&project=1&target=1&current=1&selectRule=below-cutoff
- **State and reshoot:** Disposable scheduler catalog, Settings > Databases. Enabled automatic import on open, both lights and calibration, Ask first; quality analysis off and position matching off. Run now scanned four copied FITS files:3already present,1held no matching project. No skipped-by-rule count. Reshoot from scripts/screenshot-fixture.py, apply these settings only to disposable catalog then Run now.
- **Composition:** CSS crop (168, 670, 950, 93); CDP clip (168.00, 670.00, 950.00, 93.00), scale 1.

### assets/import-preview-plans.png

#### 2026-10-18T01:54:44.668Z — capture

- **File:** 1966 × 1164 px; SHA-256 `830830ef25f5cb39a690104f8a6e4c0d2aefba31525a4a6eee839d4065283785`.
- **Used by:** `docs/importing.html`.
- **Purpose:** The preview separates additions to an existing target from a new project and shows which exposure-plan count will change.
- **Build/environment:** local fixture; debug binary 0.11.0, checkout 88634571; binary commit unverified; macOS 27.0.1, Chrome 155.0.8059.82, dark, English, zoom 100%; viewport 1570 × 1028 CSS px; DPR 2.00.
- **Source URL:** http://127.0.0.1:13179/#/sequence?db=db-94d9b627&project=1&target=1&current=1&selectRule=below-cutoff
- **State and reshoot:** Disposable full-schema Import review fixture. Created import-review.sqlite using create-db with first e2e FITS0028 only and --no-register. Added through local Settings with all4files image directory. Import preview:3newlights,2matchPraesepe byname and raise acquired on1plan,1NEWComaCluster,1alreadypresent. Backgroundqualityoff. Import notpressed;Cancel. No template-addition line because existing B template reused.
- **Composition:** CSS crop (154, 210, 983, 582); CDP clip (154.00, 210.00, 983.00, 582.00), scale 1.

### assets/header-tab-hover.png

#### 2026-10-18T02:01:59.658Z — capture

- **File:** 1710 × 104 px; SHA-256 `eab7b3f44902d6e29e1af0b5ce4120dd0607440ead60cf9702c1cb8857e654d6`.
- **Used by:** `docs/grader.html`.
- **Purpose:** Hover a view or move keyboard focus to it to reveal its name. Calibration has keyboard focus here.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/grid?db=db-e075b4ec&project=12&target=12&current=10955
- **State and reshoot:** Golf of Mexico Images; keyboard focus on Calibration reveals its name and focus outline. Reshoot: focus Sequence then press Tab, without opening Calibration. Captures focus rather than hover; labels behave the same.
- **Composition:** CSS crop (14, 8, 950, 58); CDP clip (12.60, 7.20, 855.00, 52.20), scale 1.

### assets/stack-reprocessing.jpg

#### 2026-10-18T02:02:23.550Z — capture

- **File:** 996 × 982 px; SHA-256 `b6dd6e78fe03064b0db877bc113bcc0f43d11f3a082223309e450896849f3b6a`.
- **Used by:** `docs/stacking.html`.
- **Purpose:** The card keeps the previous processed image visible while reprocessing waits.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/stacks?db=db-49b9f973&project=5&target=5
- **State and reshoot:** Sh2 119 redcat61 HA600s cached stack,19frames3h10m. Existing status From the previous stack · reprocessing · waiting for the stack to settle. RC-Astro x2 and Auto MTF applied to previous stack; full restack calibration changed. Card550px. No build or reprocessing started by us.
- **Composition:** CSS crop (312, 579, 554, 546); CDP clip (280.80, 521.10, 498.60, 491.40), scale 1.

### assets/stack-processing-waiting.png

#### 2026-10-18T02:04:53.130Z — capture

- **File:** 2242 × 1350 px; SHA-256 `4ad686135a30be00deab88b9fd3498f6bb5cc740eaccec8c7974df81e1906942`.
- **Used by:** `docs/stacking.html`.
- **Purpose:** The jobs list shows which stack build the waiting processing jobs depend on.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/stacks?db=db-49b9f973&project=5&target=5
- **State and reshoot:** Live Sh2 119, starfront-redcat61. Existing HA 600 s (19 frames, 3 h 10 m) and OIII 600 s (197 frames, 32 h 50 m) previews remain visible while reprocessing waits. Open Background jobs and scroll its list to the bottom: Sh2 119 HA/OIII and IC 447 R 300 s wait for the automatic Heart and Soul Nebula Panel 3 G 10 s stack. No job started or changed.
- **Composition:** CSS crop (310, 16, 1246, 751); CDP clip (279.00, 14.40, 1121.40, 675.90), scale 1.

### assets/framing-panel-drag.png

#### 2026-10-18T02:05:20.276Z — capture

- **File:** 1442 × 990 px; SHA-256 `df256da6743269c893915af9e1e71481a29a647e14d865a2aaeacb12eaad9d19`.
- **Used by:** `docs/framing.html`.
- **Purpose:** Moving an unlocked panel shows its overlap with each neighbor. This unsaved example was discarded.
- **Build/environment:** shared live-server environment; viewport 1744 × 1142 CSS px; DPR 1.80.
- **Source URL:** https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b
- **State and reshoot:** Heart Mosaic / askar107phq, four panels. Framing, DSS (offline), 5.17 degrees across, Panel drag mode, Snap on, Deep-sky marks off. Select r2c2 (331 frames), Unlock in the browser draft, drag from CSS (854,790) to (835,755). Capture after release: selected panel overlaps 20%, 29.8%, 20.5%, three other panels locked. Unsaved draft only; discard and confirm afterward, verify four locked and no unsaved changes, restore Deep-sky marks. Do not Save or Activate.
- **Composition:** CSS crop (286, 428, 802, 551); CDP clip (257.40, 385.20, 721.80, 495.90), scale 1.

### Local fixture preparation

Run `python3 scripts/screenshot-fixture.py /path/to/psf-guard NEW_DIRECTORY`.
The script refuses an existing output directory and verifies the four cached FITS
files against the app's e2e manifest. It creates a minimal catalog for the selection
rule and held-import examples, plus a full Target Scheduler catalog for import
previews. Only the minimal catalog has staged HFR and star counts; its scores do
not measure damage in the source pixels. The full catalog imports the first real
Praesepe light; the remaining files supply two additions and a new Coma target.

The capture run used `/tmp/psf-guard-docs-capture-20261018`. Start the debug server
with the new directory's `scheduler.sqlite`, `images`, `config.toml`, `registry.json`,
`cache`, `stacks` and `masters` paths. Pass `--host 127.0.0.1 --port 13179` and
`--allow-database-management`, plus `--static-dir` pointing to the app's `static/dist`.
Register `import-review.sqlite` and the same `images` directory through Settings.
Use the new database IDs shown in the UI; IDs can differ from the recorded run.
Do not reuse the user's normal registry, config, cache or catalogs. Stop the local
server after capture. The fixture files may be retained for later reshoots.

The installed desktop app still showed the old database-configuration dialog.
The current CLI build was 0.11.0; checkout `88634571` was clean, but the executable's
exact source commit was not independently verified. The local server has no
accounts and exposes only loopback. No agent token was created.

### assets/hero-flow.jpg

#### 2026-10-18 UTC — rebuilt collage

- **File:** 2400 × 1800 px, JPEG quality 95; SHA-256 `d1f59b67f71abbf2e6691929009cdcde4f9fbf5cf52f9265ae8a796d6f1c3bb2`.
- **Used by:** `index.html`; four examples of planning, activation, review and stacking.
- **Sources, in reading order:** `plan-workspace.jpg` (Heart Mosaic), `activation-preview.png` (SNRG150), `sequence-session.jpg` (Golf of Mexico), `stack-foraxx-card.jpg` (California Nebula). These are different projects, not a single project's history. Each has its own capture entry.
- **Composition/reshoot:** run `python3 scripts/screenshot-hero.py` with Pillow. Two columns and two rows; each source fits within 1130 × 780 px without cropping. The script adds numbered headings and a dark background. No UI content is retouched.
- **Verification:** all four source images, headings and aspect ratios checked in the saved collage. The full guide links explain each step.

### Verification of the full guide pass

All 93 screenshots were checked against their captions in contact sheets; the
header hover, waiting processing, previous-stack preview and panel-overlap images
were also checked at full size after their final capture. The collage, calibration
lightbox and Settings lightbox were checked in the local docs site. All 93 recorded
SHA-256 hashes, dimensions and page references match the saved files. Both helper
scripts compile. `npm run shots`, `npm run build`, `npm run check` and
`git diff --check` passed; the checks covered 35 pages and 26 old calibration
bookmarks. The 11 remaining shots and their prerequisites stay in the shot plan.

## Satellite follow-up — October 17, 2026

### assets/satellite-pixel-match.png

#### 2026-10-18 02:36:39 UTC — replacement for the California overlay

- **File:** 3138 × 2166 px, PNG; SHA-256 `0683cd969d69006cb73282ac367045a8eb5f5ef37d235852897bf9bffce6b524`.
- **Used by:** `docs/satellites.html`, opening figure. Replaces the old
  `satellite-california-overlay.png`; the target is SNR G132.
- **Build/environment:** same live-server session as the full guide pass,
  `psf-guard.atpn.co`; version last observed as 0.11.0, deployed commit unknown.
  macOS 27.0.1, Chrome 155.0.8059.82, English, dark theme, 90% browser zoom.
  Viewport 1744 × 1204 CSS px; effective DPR 1.8.
- **Source:** starfront-ultracat131, database `db-93617230`, SNR G132, project 6,
  target 6, frame 1166, R, 300 s. Displayed capture time October 8, 2026,
  2:21:19 AM; displayed time zone was not independently checked. The numeric
  frame ID is verified; the source filename and GUID were not read.
- **URL:** https://psf-guard.atpn.co/#/detail/1166?db=db-93617230&project=6&current=1166&scoreScope=target-filter%3AR&target=6&returnTo=sequence
- **UI state:** Image Information, Quality analysis, Calibration and Sky context
  collapsed. Sky overlay off. Satellite tracks expanded, Track identifiers on.
  Fit zoom (65%), Color enabled. Cached result; no scan started.
- **Observed state:** Accepted grade, 99% quality score; five crossings, two
  high-risk predictions, one pixel match. BREEZE-M DEB (TANK) [40366] is marked
  pixel match, possible risk, 53%. The other four are prediction only. Element
  source Seiza mirror; Elements for 10/8/2026, 5:00:00 AM as displayed. The UI
  states that pixel corridor evidence supports one orbital candidate and that
  identity remains a candidate association. The score and grade are observations,
  not a new grading recommendation.
- **Reshoot:** open the URL; wait for the preview and cached satellite results.
  Turn off Sky overlay before collapsing Sky context. Collapse the other three
  panels, expand Satellite tracks, enable Track identifiers, then click Fit.
  Check that the green fitted path and all five candidate rows are visible.
  Do not press Identify satellite tracks or change the stored grade.
- **Composition:** full viewport; CSS crop (0, 0, 1744, 1204), CDP clip
  (0, 0, 1569.6, 1083.6), scale 1. Direct browser PNG; no retouching or redaction.
- **Verification:** inspected the saved image: target heading, green matched
  path, candidate label, counts and identity qualification are legible.
