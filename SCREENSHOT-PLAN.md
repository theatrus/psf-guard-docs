# Screenshot plan — docs site, next release

The October 17 capture passes now cover **106 assets**: ten from the earlier
batches, 94 from the full-guide pass (93 screenshots and one rebuilt collage),
the SNR G132 satellite follow-up, and WBPP progress. The WBPP setup image
was also reshot for the same run.
Captures include the available live-server views and settings, phone layouts,
calibration comparisons, planning states, queued processing and local import and
grading examples. Every image has a state, source and reshoot record in
[assets/screenshot-captures.md](assets/screenshot-captures.md).

The generated lists below contain the **7 remaining shots**. They remain pending;
their prerequisites must be met before replacing the old image or adding a figure.
Captions on completed figures describe the actual capture, including empty states
and differences from the original plan.

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

## Redo (existing images) (2)

- `header-jobs.png` — pages: storage
  - After verifying PR #946 or later is deployed in the browser, capture existing jobs with Started by you above Automatic and queued automatic builds behind user-started builds. Prefer a calibration, import or Generating previews row too. Do not start, stop or reorder live work for a screenshot. If no suitable work is active, use a disposable catalog. Record the build, source, URL, job states, viewport, zoom and crop.
- `settings-stacking.png` — pages: stacking
  - After verifying the current main build is deployed in the browser, open Settings → Stacking and show Orientation group margin with Chosen by Seiza selected. Do not change live settings. Record the build, URL, current method, margin, viewport, zoom and crop in the capture record.

## New screenshots (5)

- `export-left-out.png` — pages: exporting
  - Library on psf-guard.atpn.co with a server export directory set and Leave out lights that can't be calibrated on: after Export → Start export on a project with lights that lack flats (rig c925-scheduler or starfront-redcat61), the finished export line reading "Exported …: N file(s) placed, M lights that can't be calibrated left out (<light>: <reason>) → <folder>"; crop the line with the project row it sits under
- `header-transfers.png` — pages: collaboration
  - Any view, the header's background jobs chip opened while a collaboration transfer runs or waits (starfront-redcat61): crop to the job list showing a "Transfers" row with its catalog · label, state, "N/M files · X MiB" and its pause, resume or retry, and cancel buttons, under Started by you or Automatic.
- `plan-send-again.png` — pages: rigs
  - Planning workspace for a plan whose rig has Remote site set to a Sync peer that was offline at the last activation (any rig and peer; the peer name shows in the text): crop to the bar at the top reading "<peer> hasn't received this activation" with the "Send to <peer> again" button, and the plan summary under it.
- `sequence-docked-review.png` — pages: screening
  - After verifying main PR #935 is deployed on psf-guard.atpn.co, open a real Sequence with solved frames and scroll until the summary and score chart stay below the toolbar. Show Solved pointing expanded with the current frame ringed and its card visible below the charts. Record the database, project, target, filter, session, URL, scroll position and chart state. Navigate without grading or changing selection.
- `stack-color-progress.png` — pages: stacking
  - Capture an already running color composition with RC-Astro from the header's background jobs list. Show the target, channel and tool progress, such as H-alpha: BlurXTerminator (42%), its progress bar and Stop. Do not stop the job. If no suitable job is running, use a disposable local catalog for a test run instead of starting work on the live server for a screenshot.
