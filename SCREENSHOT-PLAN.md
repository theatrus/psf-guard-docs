# Screenshot plan — 0.13 release preparation

## November 1 worker follow-up

The Mac app is now connected to the remote server, and both worker screenshots
are complete. There are 22 captures across the two November 1 passes; five of
six P1 illustrations are complete. The live-stack image still needs an active
build. The native screenshot is `worker-desktop-013.jpg`, preserving the native
capture API’s original JPEG rather than converting it to the planned PNG.

The user authorized creating a worker token, saving it in the Mac app and
starting the worker. The token is absent from all screenshots and capture
records. Both task types are enabled with one concurrent task; login startup
is off. Server dispatch policies were unchanged. The connection was verified
on both sides and after closing the app window; no processing task was started
for this check. See the [worker capture manifest](assets/captures-worker-013-2026-11-01.json).

## November 1 capture pass

Twenty Chrome captures are complete: four of six P1 illustrations, the mosaic
coverage and SNR plots, phone and database settings, memory, and nine focused
settings reshoots. The release overview and guides now use the captured files.
See the [capture record](assets/screenshot-captures.md#013-chrome-captures--november-1-2026)
and [manifest](assets/captures-release-013-2026-11-01.json).

The two remaining P1 states were unavailable: no stack build was running, and
no remote worker was connected (no worker tokens existed). A separate dispatch
figure shows only This server and does not stand in for a connected worker.
The GPU page exposes settings, not a detected device: its caption makes no
hardware-verification claim. Native worker controls, a genuine continuum fit,
disposable write-dependent examples and the older backlog remain in the
generated lists below. The earlier capture priorities are retained as the
brief; only items still in those generated lists need captures.

Chrome visual checks covered the release overview at desktop and 390 px phone
widths, image lightboxes at both widths, the configuration guide on a phone,
and the redirect from `docs/calibration.html#matching`. Capture dimensions and
SHA-256 values were verified for all 20 files.

## 0.13 capture priorities

Work in the `release/prep-0.13` branch of `theatrus/psf-guard-docs`.
The prepared local worktree is `/private/tmp/psf-guard-docs-release-0.13`;
PSF Guard's matching release-prep worktree is
`/private/tmp/psf-guard-release-0.13`, based on main `5d7102fc`.
The two worktrees are independent; capture images into this site's `assets/`.
The release is being prepared, not published. Keep the preview wording until
release publication. Do not tag, publish or change update feeds for this work.

Start with the six P1 shots. P2 updates the focused guides; P3 is the older
state-dependent backlog and does not block the six feature illustrations.
The generated lists at the end are the authoritative filename/destination
inventory; counts come from page comments, not the historical notes below.

| Priority | Filename | Required view and prerequisite | Destinations |
|---|---|---|---|
| P1 | `stack-integrated-mosaic-013.png` | Completed real mosaic: one integrated canvas, mosaic identity, channel/color card and panel coverage. Include panel coverage separately. | 0.13 overview, Stacks |
| P1 | `stack-live-013.png` | Already-running channel build: Live stack image, accepted count and progress. A worker attribution is useful if already present. | 0.13 overview, Stacks |
| P1 | `stack-color-pipeline-013.png` | Completed narrowband card: numbered Processing stack, actual star policy and resolved RGB-star branch or fallback. Open steps without applying. | 0.13 overview, Stacks |
| P1 | `stack-inspector-013.png` | Completed stack: full-window inspector, sidebar/downloads, pointer-following Value readout. Add RA/Dec and Sky context only with existing solve evidence. | 0.13 overview, Stacks |
| P1 | `settings-gpu-013.png` | Performance → GPU with Use the GPU and pass controls. The page does not identify detected hardware. Preserve saved choices. | Stacks |
| P1 | `workers-connected-013.png` | Performance → Workers: dispatch choices and a connected worker's actual capabilities/status. No token creation or policy change. Idle is valid. | 0.13 overview, Workers |
| P2 | `worker-desktop-013.png` | Native macOS/Windows app, Worker on this computer with task types, status and controls. Chrome cannot show this desktop-only panel. Keep token blank/masked. | Workers |
| P2 | `stack-continuum-report-013.png` | Genuine completed continuum fit and per-line diagnostics, warnings and signed residual download. No suitable result means this remains pending. | Stacks |
| P2 | `stack-mosaic-snr-013.png` | Existing mosaic SNR plot with canvas coverage and mean pixel depth. No same-field forecast or plateau verdict. | Stacks |
| P2 | `settings-memory-013.png` | CPU & memory → Processing memory: budget percentage, GiB and memory basis. Do not touch the slider; release/blur saves. | Storage & Performance |
| P2 | `settings-import-013.png`, `settings-overrides-013.png`, `settings-phone-013.png` | Scoped Import, global versus database overrides, and phone section selector. Recorded fixtures may already cover these; verify before reshooting. | Configuration |
| P2 | Existing settings and processing images in **Redo** | Refresh changed navigation, storage Save action/WBPP retention, calibration gain option, processing steps, import forms and current unsaved-edit labels. | Listed per image below |
| P3 | Six older pending shots in **New screenshots** | Export summary, job priorities, contribution transfer, activation resend, docked Sequence and RC-Astro progress. Meet each existing prerequisite first. | Existing guides |

### Reuse already complete

- `settings-overview-013.png` is an exact copy of the recorded October 27
  database-navigation fixture. It is already on the overview and configuration
  guide. No new desktop Settings overview is required unless current labels
  differ. The source backend reports 0.12.3; do not call it a tagged 0.13 build.
- `release-013-sho-rgb-stars.jpg` is the recorded Heart and Soul example from
  main. It illustrates integrated mosaic output, not the Stacks interface.
  Sources were binned 4× per axis; Gaia calibration was skipped.
- [Reuse manifest](assets/reused-013.json) records exact source paths and hashes.
  [Capture record](assets/screenshot-captures.md#013-release-preparation--november-1-2026)
  records scope and limitations. Preserve both when adding captures.

### Capture procedure and handoff

1. Inspect local Chrome's signed-in PSF Guard tab, normally
   `https://psf-guard.atpn.co`. Check Server information and visible labels
   against the needed feature before taking images. Main's current development
   version alone does not prove the deployed frontend/backend includes it.
   Record the actual version, deployed commit if available and frontend build.
2. Prefer the existing Heart Mosaic / Heart and Soul field for mosaics and
   California narrowband for color. These are scouting candidates, not verified
   current states. The older route and database records below help locate them.
   Recheck inputs, counts, source names and solved state.
3. Use a desktop viewport around 1440 CSS px wide at 2× when practical. Record
   the actual viewport, DPR and browser zoom. Crop only enough to make labels
   readable at the site's 824 CSS px content width. Full-window inspectors may
   need their own wide image. Use the documented browser screenshot API;
   record any crop. Do not resize, annotate, composite or invent results.
4. Use existing data and cached results on the live server. Open disclosures,
   navigate and change view-only inspection controls as needed, then restore
   temporary preferences. Do not start live imports, syncs, quality scans,
   stack builds, solves, artifact searches, transfers or activation to stage a
   shot. Use a disposable local fixture with real inputs for write-dependent
   states. Do not change grades, save settings, install catalogs or clean files.
5. Keep credentials, tokens, pairing codes and precise site coordinates out of
   the captured UI. Choose an honest viewport/crop before capture rather than
   editing pixels afterward. Desktop worker controls require the native app.
6. Save each file under its exact planned name. Append its actual URL, source
   identifiers, build, timestamp, OS/browser, theme, viewport/DPR/zoom, UI state,
   crop, pixel dimensions, SHA-256 and repeat steps to
   `assets/screenshot-captures.md`. Preserve earlier records. A plan or a
   scouting note is not a capture record.
7. Replace each completed `SHOT` marker with a figure and an actual-state
   caption on every listed destination, or remove the `RESHOOT` marker after
   replacing its file. Use the image's real width/height. One captured asset
   may serve several pages; leave incomplete slots as comments.
8. Run `npm run build`, `npm run shots`, `npm run check` and
   `git diff --check`. Inspect the release overview and affected guides at
   desktop and phone widths, check image lightboxes and an older bookmark such
   as `docs/calibration.html#matching`. Commit images with their records and
   generated plan updates. Report exactly which captures remain blocked.

The earlier November 1 preparation pass did not take new Chrome screenshots. After
Chrome permission was enabled, computer use failed with a native-pipe startup
error and no Chrome browser connection was available. The user assigned
fresh captures to a separate agent. The subsequent capture pass is recorded at the top of this plan. No live catalog was changed.

## Previous capture sessions and scouting

The following notes preserve the 0.12 capture history. Their readiness checks,
counts, labels and deployment versions are historical; use the current P1/P2/P3
inventory and recheck the running build before following an old route.

## TS import follow-up: captured October 18

Eight new captures cover first-run choices, local TS import, standalone copies,
image folders, automatic sync, reviewed transfer, plugin setup and pairing.
They use PSF Guard 0.12.0 on merged PR #911 with disposable catalogs. The import,
plugin and release guides now use them. See the
[capture record](assets/screenshot-captures.md#owned-catalog-import-flow--october-18-2026)
for states and the repeatable capture command. The pending shots below need suitable UI states and remain pending.

## Native desktop follow-up: captured October 18

Three new native captures cover Server settings, a duplicate-repair preview and
a calibration-choice merge preview. They use main commit `1fef4d27`, which still
reports 0.11.0; the 0.12 version update is in the separate release PR. These
captures do not show the launch screen. The two previews were canceled.
The [capture record](assets/screenshot-captures.md#native-desktop-environment--october-18-2026)
includes the disposable fixture script, real input identities and exact crops.

## Remaining capture prerequisites

| Shot | What still prevents the planned capture |
|---|---|
| `header-transfers.png` | No contribution transfer is active; the inspected visit has no accepted files to send. |
| `plan-send-again.png` | No remote peers are configured. Needs a disposable peer and an activation that has not reached it. |
| `export-left-out.png` | The native fixture now has six real lights with a missing matching-flat finding. The completed export summary still needs capture, with exclusion enabled and a disposable output folder. |
| `stack-color-progress.png` | No color composition with RC-Astro is running. Needs a configured, licensed local processing setup and suitable channel stacks. |
| `sequence-docked-review.png` | Verify the deployed build includes #935; use a real Sequence with solved frames. |
| `settings-stacking.png` (reshoot) | Verify the deployed build includes #939 and the current help text; show the saved margin without changing it. |
| `header-jobs.png` (reshoot) | Verify #946 is deployed and suitable jobs already exist, or use a disposable local catalog. |

For reshoots that require writes, use the disposable fixture or a disposable copy
with the required real inputs. Do not stage grades, repairs, transfers, activations
or processing jobs on the live catalogs. Never fabricate a measured finding.

## Filter and settings follow-up: captured October 17

The fixed AstroBin filter dialog now shows the full row, date pickers and catalog
filter suggestions. The unsaved G entry was discarded after capture. Backup and
storage figures now show the revised download, retention and cleanup explanations.
See the capture record for crops and repeat steps.

## WBPP: captured October 17

At the user's request, started WBPP for Heart of the Soul Nebula on
starfront-ultracat131 (`db-93617230`, project and target 2). The setup and progress
images show the actual run: 57 lights, 155 calibration frames, Maximum quality,
Fast Integration and drizzle off. Progress shows counts and free space; this run
did not report the exclusions or flat-change notes in the original shot plan.
The capture record lists the settings and the permission to start this live run.

## Satellite overlay: captured October 17

The user supplied SNR G132 frame 1166 in `db-93617230`, project and target 6.
The 300-second R exposure shows five crossings and one pixel match for the
BREEZE-M debris candidate (40366). The saved figure includes the green fitted
path and the complete Satellite tracks panel. Its caption distinguishes the
pixel match from proof of identity. No scan or grading change was needed.

## 0.12 highlights: captured October 17

Three images now appear on `docs/new-in-0.12.html`, one beneath each of its
first three feature descriptions. Their reshoot details are in the permanent
capture record:

1. `release-012-calibration.jpg`: a calibration frame with a real grade finding,
   its session, and the measurements that explain the grade.
2. `release-012-flat-groups.jpg`: two measured flat groups and the comparison
   that shows the dust or illumination change between them.
3. `release-012-mosaic-editing.jpg`: the sky and panel controls together, with
   a captured panel selected, overlap shown, and captured panels still locked.

Use the current 0.12 build. Capture at about 1440 px wide at 2× and check that
key labels remain readable at the documentation column width. Keep these
images focused on the feature; the linked guides cover the smaller controls.
The mosaic highlight needs only a panel selection. Use a disposable copy for
separate shots that require moving or unlocking panels.
Do not fabricate a calibration finding or flat-group change for a screenshot.
These three captures have figures and captions. For future reshoots, check the
current build and data, then append a new capture entry with the replacement.

## Grid, Sequence and California: captured October 17

The grader now uses new Iris grid and score-chip images. Screening has new
cloud-event, HFR-cutoff and changed-scoring examples. California Foraxx SHO
replaces Teddy Bear in the homepage preview and stacking color card: 918
inputs, 76 h 30 m. Each image has a [capture entry](assets/screenshot-captures.md)
with its actual state and reshoot steps.

The HFR view has stored Rejected grades throughout the visible row; no grades
were changed to stage mixed dots. The scoring example used view-only changes,
then Reset to default. All stack previews came from the existing cache.

## Sequence and processing captures

The issue list, active selection rule, post-rejection state and queued reprocessing
are captured. The post-rejection example uses the local fixture and Below the cutoff;
its catalog-only scores do not recommend automatic rejection. The remaining color
processing shots are listed above.

## Verified targets and explanations — October 16, 2026

These choices come from read-only inspection in Chrome. Counts and grades can
change. Recheck the named frame or group before capture. The links restore the
view; follow the steps below for controls that the URL does not store.

### Calibration: Teddy Bear Nebula QMark

Use **starfront-redcat61**, project 2, for `release-012-calibration.jpg`.
[Open the poor OIII flat](https://psf-guard.atpn.co/#/calibration?db=db-49b9f973&project=2&current=1415&calProject=2&calSession=c86f7ba628d954df&calKind=flat&calGrade=poor&calFrame=b28da39d-e31d-43f9-a226-944aa648e997).

- Choose Frames, Sessions, Type Flat and Grade Poor. The September 13 session
  contains `2026-09-14_07-05-02_OIII_-5.10_32.62s_0002.fits`.
- Keep **Poor · uneven light**, the viewer, and Frame/Session measurements in
  view. The illumination differs from its session by **13.9%**, above the
  **5.0%** limit, despite **0% clipped pixels**. PSF Guard leaves it out of masters.
- For a second image in the detailed guide, click **Compare with session**.
  Wait for the image to finish drawing. The ratio shows broad, subtle changes;
  do not describe them as proven dew or dust.
- Suggested explanation: “Check how a flat differs from its session. This flat
  has no clipped pixels, but its uneven illumination excludes it from masters.”
- Secondary candidate: the October 7 HA session, frame
  `2026-10-08_07-23-46_HA_-5.00_12.00s_0000.fits`, is OK with three large disks.
  It can explain why dust shadows alone do not make a flat poor. Check the
  overlay before choosing a crop; the overlay has not yet been inspected.

### Flat groups: C925 OIII, August 10

Use **c925-scheduler's full calibration library**, not a project's subset, for
`release-012-flat-groups.jpg`, `calibration-flat-groups.jpg` and
`calibration-flat-compare.jpg`.
[Open Group 2 and its older-edge comparison](https://psf-guard.atpn.co/#/calibration?db=db-d6eaaf55&project=1&current=8620&calSession=25d0a0bb0b4100f7&calBrowse=groups&calSessionFrame=2d4bd6bb-a093-4f12-855f-adb6ed681010&calGroup=d067a2659094e08f&calFrame=766f5294-a5c8-4974-8fe0-d77a440d91bb&calEarlier=1c0d0817c025cfba0ea865842557a062&calLater=c7749f98b0cd8d918e699165e342f5f2).

- Choose **Group 2 · OIII · 101.3–104.4° · 08-10 · 1 night · 10 flats**.
  If starting from Bubble's Calibration page, first click **Show all of
  c925-scheduler's calibration**. Bubble is only a route into the library;
  these are not necessarily Bubble's flats.
- The older edge reports **new dust, 1.8%**, above the 1% limit: one donut near
  (507,2054). **Compare across the older edge** compares August 10 with May 19.
  Keep the group, reason, dated ratio and Normal stretch visible. Inspect the
  rendered ratio and Spots overlay before the final capture; only the
  comparison's text and selected dates have been checked so far.
- The newer edge reports **vignetting changed at the bottom edge, 2.1%**, above
  the 2% limit, between August 10 and 15. This gives a second explanation:
  illumination changes can separate groups without a dust change.
- Suggested explanation: “Compare nights on either side of a group boundary.
  New dust separates these groups; the next boundary records an illumination change.”
- Selected frame: `2026-08-11_06-05-44_OIII_-10.00_36.28s_0000.fits`,
  OK with seven donuts. It is a candidate for the SCT dust-overlay shot.
- Do not split or join groups, change limits, or assign lights for a capture.
  The Teddy Bear project subset has no comparable within-family split.

### Mosaic: Heart Mosaic

Use **askar107phq**, project 21, for `release-012-mosaic-editing.jpg` and the
framing overview. [Open Heart Mosaic](https://psf-guard.atpn.co/#/plan?db=db-a01c581c&project=21&current=8620&q=Heart&plan=051751d1-6b05-444e-9485-afbc6177dd5b).

- Open Framing and select **r1c2 locked 336 frames**. Keep the DSS image, all
  four captured panels, their padlocks, the selected panel and its controls
  together. Panel mode and Snap were already on during inspection.
- This view already shows shaded overlap bands and percentages. No unlock,
  drag, Save or Activate is needed. The screenshot composition was checked.
- The captured field is **1.79° × 1.20° at 0.6°**. Actual overlaps range from
  **18.1% to 19.4%**, below the saved **20%** minimum. Keep that warning if visible.
- Suggested explanation: “Select a captured panel to check its field and
  overlap. Captured panels stay locked until you unlock them.” Explain that
  measured framing can differ from the planned overlap.
- **Not activated yet** is the current plan state. Existing instructions that
  require an Activated badge, a previous activation, or an activated rig need
  another example or a disposable local plan. Do not activate this one for a shot.
- The stack overlay has three placed panels; panel 1 HA lacks a plate solve.
  Do not describe this as a complete four-panel solved-stack overlay.

### Sequence: Golf of Mexico

Use **ultra cat**, project and target 12.
[Open the G all-sessions example](https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=9568&scoreScope=target-filter%3AG).

- For `sequence-issue-frames.png`, choose **G · All sessions (612)** and open
  **7 cloud events**. The **Likely clouds** list contains seven frames with
  times and scores. Clicking **Jun 28, 02:09 AM, score 65** moves the cursor
  to frame 9568 and leaves **0 selected**; this behavior was checked.
- Keep the selected All sessions tab, issue pill, list and chart in the crop.
  Suggested explanation: “Open an issue and jump to a frame without changing
  your selection.” Call these likely clouds, not confirmed cloud damage.
- For the general Sequence shot, choose **HA · Jul 9, 2026, 10:08 PM (57)**.
  The first three frames show Soft Stars at 25%; later frames show Possible
  Obstruction. [Open that session](https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=12&target=12&current=10952).
- Many frames already have grades. Do not assume Recommended rejects has a
  nonzero count. Capture rejection, undo and selection-rule changes in a
  disposable local catalog, not by regrading this live project.

### California Nebula: Foraxx SHO, session scores and satellite candidate

Use **ultra cat**, database `db-e075b4ec`, project and target **4**. There is
another California Nebula project in the library, so choose the rig explicitly.
[Open its Sequence](https://psf-guard.atpn.co/#/sequence?db=db-e075b4ec&project=4&target=4&current=561).

- **Preferred narrowband color example: Foraxx SHO**, chosen by the user.
  Use California for the homepage color feature, the color card in the stacking
  guide and the final panel of `hero-flow.jpg`. Open Stacks for this project
  and choose its existing Foraxx SHO preview. Keep the nebula prominent; show
  the palette and channel inputs in the card crop. Record the actual exposure
  group, frame counts and integration time at capture. The preview itself was
  not inspected during scouting.
- Save the homepage image as `stack-foraxx-california.jpg`; update its image
  path, alt text and caption together. Do not reuse Teddy Bear counts or label
  an existing Teddy Bear image as California.
- Use this target for a second session-versus-all-sessions explanation. Choose
  **G · Oct 17, 2025, 05:50 AM (1)**: frame **561**, captured at 05:50:21,
  has a session score of **100%** and an all-sessions score of **85%**. Its
  stored grade is **Rejected · Quality analysis**. Do not imply that the
  current score alone explains that stored grade.
- Suggested explanation: “A one-frame session can score highly against itself.
  Compare the frame with other nights before deciding whether to keep it.”
- **G · All sessions (106)** also shows **11 cloud events**. Use it as an
  alternative issue-list example; the expanded list still needs inspection.
- California frame 561 remained unverified. The completed satellite shot now
  uses SNR G132 frame 1166 on starfront-ultracat131, with one cached pixel match.
  See `satellite-pixel-match.png` in the capture record.
- Library context at inspection: 997 accepted, 1,195 rejected, no pending,
  with captures from October 17, 2025 through October 16, 2026.

### Iris Nebula: image grid, score chips and broadband color

Use **starfront-ultracat131**, database `db-93617230`, project **1**. Search
**Iris** in Library, then open it under **Archived projects**; the images use
the target name **NGC 7023**. No project-state change is needed.
[Open the Iris grid](https://psf-guard.atpn.co/#/grid?db=db-93617230&project=1).

- Use Iris for `grid.jpg` and `grid-score-chips.png`: all **822 images** have
  scores, across 27 groups in the inspected view.
- For the score-chip crop, use **2026-09-17 · L · 300 s**. The five accepted
  frames show **92–95%** all-sessions scores, **95–99%** night-session scores,
  and Sky Brightening labels. The 23:02:13 frame shows **94% / 99% / 94%**
  for main, night-session and all-sessions scores.
- Include the following **2026-09-17 · G · 120 s** group in a wider crop to
  show a separate calibration concern. The 23:47:55 frame scores **99%** but
  warns **Can't be calibrated properly: Thin dark master**.
- Suggested explanation: “Compare a frame within its night and across nights.
  Check calibration separately: a high quality score does not guarantee that
  suitable calibration masters exist.”
- [Iris stacks](https://psf-guard.atpn.co/#/stacks?db=db-93617230&project=1&current=776)
  are the preferred broadband counterpart to California Foraxx SHO.
  Choose **LRGB 300 s** or **RGB 120 s** after preparation. At inspection,
  all seven mono groups were out of date and the color previews were Not built.
  LRGB 120 s also lacked L. Do not use these as finished-color shots yet.

### Stacks: preparation still needed

[Open Teddy Bear stacks](https://psf-guard.atpn.co/#/stacks?db=db-49b9f973&project=2&target=2).
Its ten mono groups have cached previews but are out of date because scoring
settings changed. RGB, LRGB and SHO color previews show **Not built**. The
600-second narrowband group is a fallback; California Foraxx SHO is now the
preferred narrowband example. Sadr also has no built color
preview and its channel work is queued.

Do not use either as a finished-color screenshot yet. Prepare updated stacks
and color previews in a disposable local catalog, or recheck after the owner's
normal processing finishes. Use that local setup for copying channel settings
and progress/Stop shots. No builds or settings changes were started during scouting.

## Deployment required for new captures

Wait for the main server build before taking new screenshots. The WBPP color
card requires #919 (merged at `8b8a7ec8`); the scrolling Server information
dialog requires #921. A merge does not confirm deployment. Verify the deployed
build and visible labels, then record the actual state in the capture record.
Local browser checks can test these changes without saving documentation
screenshots.

Check the deployed UI in the browser before any capture. Color composition
queue text also requires #923 (`7b80f3e8`). Keep captures pending until the
server includes the changes the screenshot needs.

## Live follow-up — October 18, 2026

Verified the updated WBPP cards and Server information dialog in signed-in
Chrome on psf-guard.atpn.co. The page reports build `d0d649b7c615f7f7` and the
server reports version 0.12.0; the deployed Git commit is unknown. Added the
WBPP card comparison, the top and scrolled Server information states, and the
channel-copy control. The [capture record](assets/screenshot-captures.md)
and [manifest](assets/captures-live-followup-2026-10-18.json) record their actual
state and reshoot steps.

The channel-copy image shows the existing Sh2 119 HOO editor before copying,
with each channel's available steps listed. It does not claim that different
settings were copied or applied. Only the disclosure was opened.

No transfer or RC-Astro color composition was running in the jobs list. Heart
and Soul was not activated; the M31 NINA TEST COLLAB plan was activated without
a resend notice. No finished export summary was visible in the Library. These
four state-dependent shots remain pending. No export, transfer, activation,
stack build or processing was started to stage an image.

## How to update this plan

Every entry comes from a comment in the pages: `<!-- RESHOOT: file | what -->`
above an image to redo, `<!-- SHOT: file | what | caption -->` where a new
image goes. Edit the comment, not this list, then run `npm run shots`. When an
image is captured, first add its actual state and reshoot steps to the
[permanent capture record](assets/screenshot-captures.md). Commit that entry
with the image, then replace its `SHOT` comment with the `<figure>`, or delete
its `RESHOOT` comment. Delete this plan once no comments remain; keep the
capture record and its history.

## Redo (existing images) (6)

- `import-image-folders.png` — pages: importing
  - P2. New / import > image-folder form with the current collapsed Scan rules and background-analysis choice. Use disposable paths and do not confirm an import. Keep its recorded 0.12 capture in release-history pages.
- `import-reviewed-transfer.png` — pages: importing
  - P2. Database > Sync > Data Transfer in a disposable fixture: show explicit Source and Destination and the preview before Apply. Never apply a transfer on live catalogs for a shot. Refresh guide usage; preserve 0.12 release-history figures.
- `settings-stacking-0123.jpg` — pages: stacking
  - P2. Processing > Stacking with current reference selection and saved Orientation group margin. Include sidebar and current help. Do not change the margin.
- `settings-unsaved-close.png` — pages: configuration
  - P2. In a disposable local form, make a harmless unsaved edit and navigate to another Settings page. Capture the current warning, affected form and exact action labels. Keep editing, then discard the edit after capture. Never save test changes to a live catalog.
- `stack-channel-processing-0123.jpg` — pages: stacking
  - P2. Current numbered Processing stack > input preparation, showing From each channel card and actual inherited tools. Open only; do not apply.
- `stack-color-rc-astro-0123.jpg` — pages: stacking
  - P2. Current numbered Processing stack > Process linear color, combined-channel RC-Astro controls and actual Correct only state. Do not change or apply processing.

## New screenshots (8)

- `export-left-out.png` — pages: exporting
  - P3. Carried from 0.12; capture only when its prerequisites are available. Library on psf-guard.atpn.co with a server export directory set and Leave out lights that can't be calibrated on: after Export → Start export on a project with lights that lack flats (rig c925-scheduler or starfront-redcat61), the finished export line reading "Exported …: N file(s) placed, M lights that can't be calibrated left out (<light>: <reason>) → <folder>"; crop the line with the project row it sits under
- `header-jobs-priorities.png` — pages: storage
  - P3. Carried from 0.12; capture only when its prerequisites are available. Capture existing work with both Started by you and Automatic headings. Do not start, stop, pause, resume or reorder live jobs to stage the shot. The current automatic-only example is recorded in assets/screenshot-captures.md.
- `header-transfers.png` — pages: collaboration
  - P3. Carried from 0.12; capture only when its prerequisites are available. Any view, the header's background jobs chip opened while a collaboration transfer runs or waits (starfront-redcat61): crop to the job list showing a "Transfers" row with its catalog · label, state, "N/M files · X MiB" and its pause, resume or retry, and cancel buttons, under Started by you or Automatic.
- `plan-send-again.png` — pages: rigs
  - P3. Carried from 0.12; capture only when its prerequisites are available. Planning workspace for a plan whose rig has Remote site set to a Sync peer that was offline at the last activation (any rig and peer; the peer name shows in the text): crop to the bar at the top reading "<peer> hasn't received this activation" with the "Send to <peer> again" button, and the plan summary under it.
- `sequence-docked-review.png` — pages: screening
  - P3. Carried from 0.12; capture only when its prerequisites are available. After verifying main PR #935 is deployed on psf-guard.atpn.co, open a real Sequence with solved frames and scroll until the summary and score chart stay below the toolbar. Show Solved pointing expanded with the current frame ringed and its card visible below the charts. Record the database, project, target, filter, session, URL, scroll position and chart state. Navigate without grading or changing selection.
- `stack-color-progress.png` — pages: stacking
  - P3. Carried from 0.12; capture only when its prerequisites are available. Capture an already running color composition with RC-Astro from the header's background jobs list. Show the target, channel and tool progress, such as H-alpha: BlurXTerminator (42%), its progress bar and Stop. Do not stop the job. If no suitable job is running, use a disposable local catalog for a test run instead of starting work on the live server for a screenshot.
- `stack-continuum-report-013.png` — pages: stacking
  - P2. Open a completed real emission combination with continuum subtraction enabled and a genuine fit report, per-line result and signed residual download. Record mode, inputs, fit status and warnings. Do not describe the Heart and Soul broadband-structure example as a continuum fit: its continuum subtraction was Off. If no real report exists, leave pending rather than generate one on live data.
- `stack-live-013.png` — pages: new-in-0.13, stacking
  - P1. Capture a channel already building with Live stack, accepted-frame count and progress visible. Show the same card once the live image replaces the placeholder. Record worker attribution if present. Do not start a live-catalog build to stage this; use a disposable catalog if needed.
  - P1. Show an existing channel build's Live stack image, accepted count and progress with no second placeholder. Reuse the overview capture.
