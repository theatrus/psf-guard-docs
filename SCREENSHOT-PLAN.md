# Screenshot plan — docs site, next release

Capture server: psf-guard.atpn.co (Chrome, 2× tiles). Nothing captured yet.
Each entry lists the pages that use it and what to show, taken from the
`RESHOOT` / `SHOT` comments left in the pages.

## Needs care before capturing

- **Desktop app only** (the capture server has accounts, so these tabs do not show):
  `settings-server.png` (Settings › Server is desktop-only), `settings-agents.png`
  (Agents shows only without accounts). Capture from the desktop app or a local
  server with no accounts.
- **Would write to the live server or its catalogs — ask first:**
  `calibration-repair-duplicates.png` (running the repair merges rows),
  `export-left-out.png` (runs a server export), `data-transfer-calibration-choices.png`
  (stages a transfer preview).
- **Needs a state the server may not have:** `activation-turns-off.png` (a rig with an
  extra Target Scheduler plan), `plan-send-again.png` (a rig on a remote peer),
  `header-transfers.png` and `collaboration-contribution-files.png` (contribution uploads),
  `stack-processing-waiting.png` and `stack-reprocessing.jpg` (a build or reprocess running).
- **Phone width:** `library-phone.png`, `grid-phone-filters.png` (375 px).
- **Edits left unsaved, then discarded:** `settings-unsaved-close.png`,
  `activation-save-first.png`, `framing-panel-drag.png`.
- **Built from other captures, last:** `hero-flow.jpg`.
- **Privacy:** blank any site latitude/longitude (`rig-setup-site.png`, `settings-sites.png`).

## 0.12 highlights: capture first

Three new images belong on `docs/new-in-0.12.html`, one beneath each of its
first three feature descriptions. The page comments specify the UI state,
crop, caption and file name:

1. `release-012-calibration.jpg`: a calibration frame with a real grade finding,
   its session, and the measurements that explain the grade.
2. `release-012-flat-groups.jpg`: two measured flat groups and the comparison
   that shows the dust or illumination change between them.
3. `release-012-mosaic-editing.jpg`: the sky and panel controls together, with
   a panel being moved, overlap shown, and captured panels still locked.

Use the current 0.12 build. Capture at about 1440 px wide at 2× and check that
key labels remain readable at the documentation column width. Keep these
images focused on the feature; the linked guides cover the smaller controls.
For mosaic editing, leave changes unsaved and discard them after capture.
Do not fabricate a calibration finding or flat-group change for a screenshot.
Replace each `SHOT` comment with a figure and its supplied caption once the
image exists. Until then, the page has capture instructions, not broken images
or screenshots from an older interface.

## How to update this plan

Every entry comes from a comment in the pages: `<!-- RESHOOT: file | what -->`
above an image to redo, `<!-- SHOT: file | what | caption -->` where a new
image goes. Edit the comment, not this list, then run `npm run shots`. When an
image is captured, replace its `SHOT` comment with the `<figure>`, or delete
its `RESHOOT` comment. Delete this file once no comments remain.

## Redo (existing images) (53)

- `activation-preview.png` — pages: home, activation
  - Activate on the rigs dialog for Heart Mosaic: auto preview in the new order (what Target Scheduler will shoot, what it turns off and why, what it turns back on)
  - Activate on the rigs dialog for Heart Mosaic (rig askar107phq), opened from the summary's Activate… button, preview landed (status line "Preview ready"): crop to the top of the dialog, showing "Last activated … · 1 rig", the "Preview: framing revision …, plan revision …, 4 panels." line, the askar107phq counts line, the "After activation, Target Scheduler shoots" list, and the What changes in askar107phq heading. Do not press Activate.
- `annotated-hfr-labels.png` — pages: grader
  - Image detail with S pressed on a good H-alpha frame from Golf of Mexico (rig "ultra cat", Jul 9 2026): stars circled with their HFR labels; the right sidebar showing the new folding panels (Image Information open, the others folded to one line); about 1440 px wide
- `astrobin-dialog.png` — pages: exporting
  - Library on psf-guard.atpn.co, a Teddy Bear Nebula QMark target row (rig starfront-redcat61) › AstroBin, with Leave out lights that can't be calibrated on under Settings › Calibration: the AstroBin dialog on Full detail with Count ungraded lights ticked, the frames-nights-exposure summary, the note "N light(s) that can't be calibrated were left out, …" if any, any filter-id fields, and the first rows of the table; crop to the dialog
- `astrobin-filter-map.png` — pages: exporting
  - Settings › Databases in the new card layout, one rig's catalog › AstroBin filters (pick a catalog with a filter that changed between nights, or add a dated second G entry): the filter map with name, AstroBin id linked to its page, description, and first and last nights; crop to the filter map
- `calibration-coverage-report.png` — pages: calibration-grading
  - Library › Golf of Mexico full card › Calibration: the "Calibration coverage — Golf of Mexico" dialog with Browse calibration, the Quality section listing Poor/Check findings with lights by night and filter, the warnings, the per-kind counts, the Night/Filter/Lights/Flats/Darks/Bias table, the Include N rejected lights control, and Lights that can't be calibrated with Check lights
- `calibration-library.png` — pages: calibration
  - Calibration page, Frames tab, Sessions list (Sessions
- `collaboration-automation.png` — pages: collaboration
  - Same rig (starfront-redcat61), Collaboration › Automation tab, new card layout: Nightly automation with Rig database, Pull tonight automatically, Allowed projects, Activate on the rig, Submit contribution reports automatically, Save automation and Refresh now, and the status lines below.
- `data-transfer.png` — pages: workflows
  - psf-guard.atpn.co as an editor, header menu › Settings › Sync, the Data Transfer card in the new card layout: Merge catalogs selected, Source starfront-redcat61, Destination starfront-ultracat131, Include stored image thumbnails ticked, Preview changes button, before any preview; crop to the Data Transfer card
- `export-dialog.png` — pages: exporting
  - Library on psf-guard.atpn.co, Teddy Bear Nebula QMark (rig starfront-redcat61) › Export: the Export dialog with Include ungraded lights ticked, Layout set to WBPP, its WBPP settings (Quality, Fast Integration, Drizzle, Autocrop, Light rejection) and the Files choices; crop to the dialog
- `framing-stage.jpg` — pages: framing
  - Planning workspace for Heart Mosaic (rig askar107phq), Framing tab, crop to the sky stage only: offline DSS map, the 2×2 mosaic with its shot panels locked (padlocks) and their small names r1c1…r2c2, deep-sky marks and grid on, the Rectangle / Panel / Sky buttons, Snap and the layer icons along the top, survey chips along the bottom.
- `grid-filter-list.png` — pages: grader
  - Images toolbar for Teddy Bear Nebula QMark (rig starfront-redcat61, Foraxx SHO), the Filter pill's list open with HA and OIII ticked and the pill reading "Filter: HA, OIII"; the Status, Flag, Calibration and Dates pills beside it; crop to the toolbar and the open list
- `grid-score-chips.png` — pages: grader
  - Crop of three or four Images cards in the frame's shape, Iris Nebula (rig starfront-ultracat131), filter B: the main score, the moon (night-session) chip and the layers (all-sessions) chip; include one light with a 🧪 Check or Poor chip if the project has one, else a light from a project listed by Show › Calibration issues
- `grid.jpg` — pages: grader
  - Images for Iris Nebula (rig starfront-ultracat131) at about 2000 px wide, View › Group: Filter, Status: All, no other filters: the compact toolbar (filter pills, size slider, View, undo/redo, Compare, Stats, quality scan, ⋯) with the slim count row under it, then the first group's cards in the frame's shape with score chips, filter, time, HFR, stars and grade; include the icon header
- `header-jobs.png` — pages: grader, stacking, storage
  - Header jobs chip open while work runs: the chip with its running, waiting and queued icons; the list split into "Started by you" (for example a stack build of Teddy Bear Nebula QMark running, one queued "queued · 1 ahead") and "Automatic" (for example a database quality analysis waiting, with what it waits for); crop to the chip and its popover
  - Header background jobs list opened from the chip (desktop browser), with Started by you holding a running Stacking row with its bar and Stop and a queued Stacking row reading "queued · 4 · 3 ahead" with ↑ ↓ ✕, and Automatic holding at least one queued automatic Stacking row and a muted Refreshing stacks row marked waiting ("Waiting for a stack build · stopped at 40/120 frames"); e.g. Teddy Bear Nebula QMark (starfront-redcat61) and Iris Nebula (starfront-ultracat131); crop the chip and the open list only
- `header-picker.png` — pages: grader
  - Header with the project picker open, the search box holding "Heart": Heart Mosaic (rig askar107phq) and other matches, one opened to All images and its targets; the new icon tabs visible beside it
- `hero-flow.jpg` — pages: home
  - Rebuild the four-step collage from new captures: (1) plan-workspace framing with mosaic panel tools, (2) the Activate on the rigs dialog in its new order, (3) Sequence of the Golf of Mexico H-alpha Jul 9 2026 session with grade dots and the new toolbar, (4) the Teddy Bear Foraxx SHO color card
- `image-detail.jpg` — pages: grader, screening
  - Image detail of a rejected H-alpha frame from Golf of Mexico (rig "ultra cat", session Jul 9 2026) marked Possible Obstruction, about 1600 px wide: the frame on the left; on the right Image Information, Quality analysis with the score and its reason, Calibration, and Sky context, each open with its fold chevron
  - Image detail of the rejected Golf of Mexico HA frame from Jul 9, 2026 (rig "ultra cat") marked Possible Obstruction. Side panels with their fold chevrons: Image Information folded to one line, Quality analysis open with the score, the reason and Show affected regions, Calibration folded, Sky context open with its Hinted solve badge, Satellite tracks folded. Full window.
- `import-from-images.png` — pages: importing
  - Settings → Databases → New Database from Images in the new card layout: a display name typed (for example "2026 Archive"), one absolute image folder added, Queue background quality analysis unticked, Cancel and Create & Import at the bottom; crop to the form
- `library-card.png` — pages: exporting, grader
  - Library in the Detailed view, Teddy Bear Nebula QMark (rig starfront-redcat61) opened to its full card: the project's actions and its target rows, each with Export and AstroBin; crop to that card
  - Library, Compact, the Teddy Bear Nebula QMark row (rig starfront-redcat61) opened into its card with the ▸ arrow: recent frames strip, image and grading counts, desired progress, and the Sequence, Stacks, Planning, Calibration and Edit buttons; crop to the card and the rows just above and below it
- `library-compact.jpg` — pages: home, grader, getting-started
  - Library, compact view, full width: rows in columns with state, progress, grades, dates, calibration Poor/Check pills, Sequence, Stacks, ⚙; new icon header
  - Library at about 2000 px wide, Compact, Show: All projects, Database: All databases, Sort: Newest first; the "Last 7 days" group with 10 or more rows lined up in columns (database, state pill with its caret inside, progress, grade counts, dates reading "N h ago", calibration, Sequence, Stacks, ⚙); at least one "N new" badge and one 🧪 Poor or Check pill in view; keep the new icon header and the catalog band at the top in the crop
- `library-plans.png` — pages: planning
  - Library, compact view, scrolled to "Plans with nothing captured yet" below the projects, at desktop width: rows lined up in columns, at least one row with the "Activated on 1 rig" badge, others with Planned or Framed, each with its rig pill, Target Scheduler state pill and "No frames yet", plus the New plan button. Crop to that section.
- `plan-objectives.png` — pages: activation
  - Planning workspace for Heart Mosaic (rig askar107phq), Exposures tab, nothing unsaved and no bar up: crop to the plan summary (green Activated pill and Activate… button) and the Objectives box below it, with each objective's Bandpass, Purpose and Goal, down to Add objective.
- `plan-rigs.png` — pages: activation
  - Planning workspace for Heart Mosaic, Rigs tab: crop to the askar107phq block, with its heading reading 'project "Heart Mosaic" activated' (not the old "not activated"), Drop from plan and Target Scheduler settings, the Project box (name, state, priority) and the first target's coordinates.
- `plan-workspace.jpg` — pages: home, planning
  - Plan workspace for Heart Mosaic (askar107phq): summary reading Activated or Needs activating, Framing tab with Mosaic panels / Panel controls and the 2x2 mosaic on the offline DSS map
  - Planning workspace for Heart Mosaic (rig askar107phq), Framing tab, whole window at desktop width: the new icon header, the plan summary with its green Activated pill and the Activate… button beside it, the four tabs, the sky with the 2×2 mosaic (locked shot panels with padlocks, small panel names) and the Rectangle / Panel / Sky and Snap buttons, and the Rigs sidebar on the right. No save bar or activation bar up.
- `rig-collaboration.png` — pages: collaboration
  - Settings › Rigs › Setup for starfront-redcat61, Collaboration section, new card layout: the section rail, Connect server, the connected collab.starfront.space server with its Connected pill, Check in, the Tonight / Automation / Capture / Reports / Connection tabs with Tonight open (Night override, Browse projects, Pull tonight's work).
- `rig-limits.png` — pages: rigs
  - Settings › Rigs › Setup for askar107phq, Limits and delivery section, new card layout: Planning limits and the Target Scheduler limits fields with their inherited values. Crop to those two boxes.
- `rig-setup-optics.png` — pages: rigs
  - Settings › Rigs › Setup for askar107phq in the new card layout: the section rail (Optics, Site, Limits and delivery, Collaboration) with Optics open, sensor size, pixel size, focal length, aperture, camera angle, the computed field, and Use frame headers naming the frame it read. Crop to the setup.
- `rig-setup-site.png` — pages: rigs
  - Settings › Rigs › Setup for askar107phq, Site section, new card layout: Planning site select, the location fields (blank or blur the latitude and longitude values), Bortle class, sky brightness and the horizon box, with Use frame headers.
- `rig-ts-projects.png` — pages: rigs
  - Same setup, Limits and delivery, scrolled down: the Target Scheduler projects comparison (each differing project with what will change, or "all N projects … have these limits"), Apply to N projects, and the Remote site box with Plans push to set to This server only. New card layout.
- `satellite-california-overlay.png` — pages: satellites
  - Image detail of a frame with pixel-aligned satellite trails: the California Nebula G frame from October 2025 if the capture server has it, else any frame where Identify satellite tracks finds a pixel match (then change the alt text and caption to name it). Track identifiers on, dashed predictions and solid green fitted paths on the frame. Side panels with their fold chevrons: the other panels folded to one line each, Satellite tracks open with its Pixel aligned badge, Track identifiers on, Crossings, Bright risk, Pixel matches, Exposure, Element source and the track list. Crop: the frame and the side panel.
- `sequence-session.jpg` — pages: home, astrometry-quality, grader, screening
  - Sequence, Golf of Mexico (ultra cat), H-alpha session Jul 9 2026: new toolbar, score chart with grade dots, cards with Soft Stars and Possible Obstruction
  - Same capture as on screening.html: Sequence for project Golf of Mexico (rig "ultra cat"), session tab HA · Jul 9, 2026, 10:08 PM, Cutoff on Score at its default, no Select rule. Show the new header, the compact Sequence toolbar, the session tabs, the score chart with grade dots, the Solved pointing scatter and the first row of frame-shaped cards (Soft Stars, then Possible Obstruction). Full window width, from the header to the first card row.
  - Sequence for Golf of Mexico (rig "ultra cat"), H-alpha, the Jul 9 2026 session tab: the compact toolbar (Filter pill, Select pill, Cutoff, size slider, View, ⋯), the score chart with grade dots under the bars, the pointing scatter, and cards marked Soft Stars and Possible Obstruction with a night mark in view; about 2000 px wide
  - Sequence for project Golf of Mexico (rig "ultra cat"), session tab HA · Jul 9, 2026, 10:08 PM, Cutoff on Score at its default, no Select rule, nothing selected. Show the new header, the compact Sequence toolbar (Filter pill, thumbnail slider, Cutoff, Scoring, Select, View, ⋯), the session tabs, the score chart with its grade dots under the bars, the Solved pointing scatter, and the first row of frame-shaped cards: three Soft Stars, then Possible Obstruction. Full window width, from the header to the first card row.
- `sequence-soft-stars.png` — pages: screening
  - Sequence for project Golf of Mexico (rig "ultra cat"), session tab HA · Jul 9, 2026, 10:08 PM: the first five frame-shaped cards at the default thumbnail size, three marked Soft Stars with HFR above 6, then two marked Possible Obstruction, with their score chips and grades. Crop: that row of cards only.
- `settings-api-tokens.png` — pages: authentication, mcp
  - psf-guard.atpn.co signed in as an editor, Settings › Users, API tokens card in the new card layout with + New token clicked: the New token form with Label filled ("claude on laptop"), User (optional), Expires after (days, optional), the Read only, whatever the user's role checkbox, Create token and Cancel; crop to the API tokens card
  - psf-guard.atpn.co signed in as an editor, Settings › Users, API tokens card in the new card layout with + New token clicked: the New token form with Label filled ("claude on laptop"), User (optional), Expires after (days, optional), the Read only, whatever the user's role checkbox, Create token and Cancel; crop to the API tokens card (same capture as authentication.html)
- `settings-calibration.png` — pages: calibration-masters
  - Settings › Calibration, top of the tab in the new card layout: the "For every rig without its own value…" note, the Matching box (Flat rotation, Flat focal length, Dark temperature, Flat session, Use darks, External masters, Rig's time zone, Nights end) with help text, and the Dark masters box (Dark reach, Complete night, Dark choice)
- `settings-catalogs.png` — pages: astrometry
  - Settings › Catalogs in the new card layout: the Seiza Catalogs card with its feature chips, the installed packages, the Catalog package select, Install / update catalogs and Validate installed files. Crop: that card only.
- `settings-database-options.png` — pages: importing
  - Settings → Databases in the new card layout, one database card (for example the c925-scheduler catalog): calibration library summary, AstroBin filters, Analyze Missing Quality, Rescan All Quality, Analyze new frames as they arrive, Write star count and HFR into image metadata, Pair calibrated and registered copies with their lights, Measure quality on the calibrated copy, and the automatic import status line with Run now; Import and Edit buttons at the right
- `settings-exposure-templates.png` — pages: activation
  - Settings › Exposure templates in the new card layout: the template table with name, filter, band, gain, offset, binning, readout, exposure and Moon columns, Copy from, and one template's Moon row expanded. Crop to the card.
- `settings-performance.png` — pages: storage
  - Settings › Performance in the new card layout, any server: the Processor use card with the Work you wait on and Background work sliders, one of them moved off its default so Use the default shows; crop to that card
- `settings-pixinsight.png` — pages: wbpp
  - Settings › Setups in the new card layout on a server with PixInsight installed (psf-guard.atpn.co): the PixInsight card with the found install and WBPP version, whether runs go through xvfb-run, the Executable field and the WBPP runs folder with its free space; crop to that card
- `settings-remote-psf-guard.png` — pages: workflows
  - psf-guard.atpn.co as an editor, Settings › Sync, the Remote PSF Guard card in the new card layout with one peer saved and selected (its Base URL shown, no key), Test connection, Add peer, Pull from peer selected, Local catalog chosen, Preview changes; crop to the Remote PSF Guard card
- `settings-rigs.png` — pages: rigs
  - Settings › Rigs in the new card layout, desktop width: the Rigs card with its intro line and the five rigs (starfront-redcat61, starfront-ultracat131, askar107phq, c925-scheduler, ultra cat), each with field and pixel scale, its "Calibration:" links (camera · frame size · N own values), Library and Setup. Crop to the card.
- `settings-sites.png` — pages: rigs
  - Settings › Rigs, scrolled to the Sites card in the new layout: one site open with Name and Location fields and a pasted N.I.N.A. horizon, and Save site. Blank or blur the latitude and longitude values; never show a real site's coordinates.
- `settings-stacking.png` — pages: stacking
  - Settings › Stacking in the new card layout, any server: the Stacking method card with the Recommended preset chosen and its choices (Final pass, Normalization, Frame weights, Reference frame, Registration, Resampling, Color cameras box); crop to that card alone, so Stack previews below stays out of frame
- `settings-storage-disk-use.png` — pages: storage
  - Settings › Storage in the new card layout on a server whose three folders sit on two or more volumes: the Disk use card with each volume's usage bar and limit mark, what it holds, the Most of the cache volume to use slider and Separate limits for stacks and calibration masters ticked with its two sliders; crop to the Disk use card
- `settings-storage-folders.png` — pages: storage
  - Settings › Storage in the new card layout, desktop app or a server allowing database management: the Folders card with Cache, Stacks and Calibration masters fields (Stacks and Calibration masters empty, showing they use the cache) and Save folders; crop to the Folders card
- `settings-sync.png` — pages: importing
  - Settings → Sync in the new card layout: Data Transfer with a source (for example the c925-scheduler telescope catalog) and a destination catalog picked and Merge catalogs chosen, before Preview; Remote PSF Guard below it
- `settings-users.png` — pages: authentication
  - psf-guard.atpn.co signed in as an editor, header menu › Settings › Users tab in the new card layout: the Browser users card (three users with their roles, the Current badge, Edit and Remove, + Add user) and the top of the API tokens card with Connect an agent and + New token; crop to those two cards, no email addresses
- `sky-context.jpg` — pages: astrometry
  - Image detail of a solved frame with the sky overlay on (RA/Dec grid, catalog labels and outlines), the Cocoon Nebula HA frame if the capture server has it, else an Iris Nebula frame (rig starfront-ultracat131), with the alt text and caption changed to name it. Side panels with their fold chevrons: Image Information, Quality analysis and Calibration folded to one line each, Sky context open with its Hinted solve badge, Sky overlay on, Center, Scale, Rotation, Target and the expected objects. Full window.
- `sky-live.jpg` — pages: home, rigs, sky
  - Sky view with Live on: new icon header, stat band, all-sky map, Live list of rigs
  - Sky view with Live on, opened from the header's Live chip, desktop width with the new icon header: the all-sky coverage map with each reporting rig drawn where it points, the Live list of rigs beside the map, and the Live table under it.
  - The Sky view with Live on, under the new narrow header (view icons, the Sky tab named, the jobs and Live chips, the menu at the right): the stat band, the rig and filter chips with Live on, the all-sky map, the Live list of rigs beside it with their states, and the top of the timeline below. Full window, from the header to the timeline's All rigs lane.
- `stacks-mosaic.jpg` — pages: home, grader, stacking
  - Stacks for Heart Mosaic mosaic (4 panels): panel stacks in grid order and on the sky; new header
  - Stacks for Heart Mosaic (rig askar107phq) with "Heart Mosaic mosaic (4 panels)" chosen in the rig · target switcher: each panel's stack in grid order and the panels placed on the sky by plate solve; include the new icon header with Stacks named as the current view
  - Stacks view for Heart Mosaic (rig askar107phq) with "Heart Mosaic mosaic (4 panels)" chosen in the new narrow header's Rig · target control: the panels' latest stacks in grid order on the left and the solved panels on the sky, north up, on the right, with the caption listing unsolved panels; job chip closed; crop from the top of the window to just above the Stacks panel's build buttons
- `stacks-toolbar.png` — pages: wbpp
  - Stacks view for Teddy Bear Nebula QMark (rig starfront-redcat61), signed in as an editor: the Stacks panel's head with Accepted only, Method: Recommended, Calibration, Order, Build current set, Rebuild current set and Stack in WBPP, plus the Card size row above; crop to that strip, full panel width, no header
- `stacks-view.jpg` — pages: stacking
  - Stacks view, desktop browser about 2200 px wide, Golf of Mexico (rig "ultra cat") chosen in the new narrow header's Rig · target control, Stacks tab current; Card size on Fit, so two channel cards fill the row (H-alpha and OIII, both READY), each with its counts and Signal-to-noise vs depth curve; job chip closed; crop from the top of the window to just below the SNR curves
- `wbpp-run-dialog.png` — pages: wbpp
  - Stacks view for Teddy Bear Nebula QMark (rig starfront-redcat61) on psf-guard.atpn.co, Stack in WBPP clicked: the run dialog before Start stacking, with Include ungraded lights ticked, the WBPP settings (Quality, Fast Integration, Drizzle, Autocrop, Light rejection), More WBPP parameters and Run folder; crop to the dialog

## New screenshots (56)

- `activation-save-first.png` — pages: activation
  - Planning workspace for Heart Mosaic (rig askar107phq): change one objective's goal on Exposures without saving, then open Activate… in the summary. Crop to the Activate on the rigs dialog showing "Unsaved changes in Exposures. Activation writes the saved plan, so save first; the preview follows." and the Save and activate… button. Close without saving.
- `activation-turns-off.png` — pages: activation
  - Activate on the rigs dialog for a plan whose rig has a Target Scheduler exposure plan the plan does not have (for example rig starfront-ultracat131 or ultra cat, a project with an extra exposure length or filter made in N.I.N.A.): crop to one rig's block showing, in order, the counts line with "Turns off 1 plan", "After activation, Target Scheduler shoots", the amber "Turns off" block with a plan marked "replaced by …" or "not in the plan", "Turns on" if present, and Take Target Scheduler's values. Do not press Activate.
- `autoimport-held-review.png` — pages: importing
  - Settings → Databases, one database card after an automatic run that held frames: the status line with the schedule, last result and next run, Run now, the notes "12 skipped by scan rules" and "11 held: no matching project", and the Review button beside the held note; crop to the card's status area
- `calibration-compare-session.jpg` — pages: calibration
  - Calibration › Frames, rig c925-scheduler, Type: Flat, one flat session chosen, Compare with session pressed at Normal (±3%), Spots on, so the session's dust shows with "in N of M flats" and any one-flat transient; include the stretch buttons, Compare with session, Spots and the strip
- `calibration-dust-disks.jpg` — pages: calibration-flats
  - Calibration › Frames, rig starfront-redcat61, a flat (L or Ha) with Spots and Large dust on at Tight stretch: the large faint disks drawn as rims, each labelled like "disk 0.33% · ~11 mm, filter/window", and the frame panel's Spots row reading "N spots · M large disks"
- `calibration-dust-donuts.jpg` — pages: calibration-flats
  - Calibration › Frames, rig c925-scheduler, a flat with Spots and Large dust on at Tight stretch: donuts drawn as ring and hole with their depth labels, plus any dashed vignetting mark at an edge or corner
- `calibration-flat-compare.jpg` — pages: calibration-flats
  - Calibration › Frames, the same rig, Compare pressed on a split or change in the list: the "Flat comparison" view above the session with its title (the change's reason), "<later night> ÷ <earlier night>: the later flats divided by the earlier…", Normal (±1%) stretch, Spots on with new and gone shadows circled, and Close
- `calibration-flat-groups.jpg` — pages: home, calibration-flats
  - Calibration › Frames, Groups view for rig starfront-redcat61: group list in the sidebar with a split and its reason, one flat open with Spots and Large dust drawn
  - Calibration › Frames with Sessions
- `calibration-frame-keep-out.png` — pages: calibration-grading
  - Calibration › Frames, a dark session with a frame graded "Suspect · noise" or "Poor · stray light" chosen; crop to the frame panel: file, capture time with UTC offset, settings, the grade badge, the reason line, the Measure/Frame/Session table with Level and Spread in ADU, the findings with their limits, and the buttons Keep out, Use anyway, Forget and ◂ Before only / Both / After only ▸
- `calibration-masters-tab.png` — pages: calibration
  - Calibration › Masters for the starfront-redcat61 database: the Type and Files on disk only pills, then three or four master cards (a flat, a dark, a bias), each with its sources line (frames, nights, temperatures), "built …" time, badges such as Thin or Other software, "Used by Teddy Bear Nebula QMark" and View
- `calibration-repair-duplicates.png` — pages: calibration
  - Calibration page with the Duplicates filter ticked on a database that has duplicates: the count "N exposures recorded more than once", "Checked … ago", Check again and Repair duplicates…, and the Repair duplicates dialog open on its preview (rows to merge, missing files, second copies, masters built again) or running with "Merging 37 of 203" and Stop
- `calibration-scheduler-flats.png` — pages: sync-plugin
  - psf-guard.atpn.co as an editor, Calibration page (header tab) on the catalog of rig c925-scheduler, Scheduler flats tab: the coverage list with two records ticked and the "Invalidate 2 coverage records?" box with its Reason field and Invalidate coverage button; crop to the tab's content
- `calibration-scope-chip.png` — pages: calibration
  - Calibration page opened with the header tab from Teddy Bear Nebula QMark's Images (rig starfront-redcat61): crop to the page heading "Calibration · for Teddy Bear Nebula QMark · <rig>", the line "What its N lights use: … sessions, … masters." with the "Show all of …'s calibration" link, and the filter bar whose first pill is the project chip with ✕
- `collaboration-contribution-files.png` — pages: collaboration
  - Settings › Rigs › Setup for starfront-redcat61 (rig starfront-redcat61, Teddy Bear Nebula QMark), Collaboration › Reports tab: an imported visit, observing night, remote panel and a few accepted images selected; crop to the "Contribution files" box: Upload accepted collaboration files automatically, Automatic files, Files to send set to Raw lights and matched calibration, the Upload pending button, and one transfer below it with its state, files and MiB progress, Inspect files and its pause and cancel buttons. Do not press Upload pending on the live server unless the lead says so.
- `data-transfer-calibration-choices.png` — pages: workflows
  - psf-guard.atpn.co as an editor, Settings › Sync › Data Transfer: Merge catalogs from a source catalog holding Keep out or Use anyway choices (e.g. starfront-redcat61) into a scratch copy of it registered for the capture, after Preview changes: the preview block with "N rows will be added and N updated", the per-table counts, the "Calibration choices: … kept out, … used anyway. Masters built from these frames change." line, the expiry note, and Apply this preview / Cancel; do not apply; crop to the Data Transfer card
- `export-left-out.png` — pages: exporting
  - Library on psf-guard.atpn.co with a server export directory set and Leave out lights that can't be calibrated on: after Export → Start export on a project with lights that lack flats (rig c925-scheduler or starfront-redcat61), the finished export line reading "Exported …: N file(s) placed, M lights that can't be calibrated left out (<light>: <reason>) → <folder>"; crop the line with the project row it sits under
- `framing-locked-panel.png` — pages: framing
  - Planning workspace for Heart Mosaic, Framing tab, with askar107phq framing the plan and a second rig (starfront-redcat61 or ultra cat) switched On: crop to the sky and the sidebar, with locked shot panel r1c1 chosen (padlock, "Drawn as shot" line and the Unlock button) and the second rig's field drawn as an outline over that panel, its card's Outline box ticked.
- `framing-mosaic-panels.png` — pages: framing
  - Planning workspace for Heart Mosaic (rig askar107phq), Framing tab: crop to the "Mosaic panels" box in the sidebar with panel r1c2 chosen: Minimum overlap, Add panels with "Beside r1c2" / "Whole mosaic", the N/E/S/W and corner pad, Overlap, Ring around and Fill holes, the panel list ("4 panels · 4 locked", each with its frame count and padlock), undo and redo, and the chosen panel's "Drawn as shot" line with Unlock and Remove.
- `framing-panel-drag.png` — pages: framing
  - Planning workspace for Heart Mosaic (rig askar107phq), Framing tab, Panel drag mode on and Snap on, with one unlocked panel (unlock r2c2 first, or add a panel with Ring around) caught mid-drag beside its neighbors: crop to the sky around that panel, showing the shaded overlap strips with their percentages. Do not save.
- `grid-newest-first.jpg` — pages: grader
  - Images for a project opened from its Library row while the row shows an "N new" badge (for example Teddy Bear Nebula QMark or Golf of Mexico), View › Sort › Newest first, View button reading "newest first": the top of the first group with the newest cards first, each new card with the small dot before its date; about 1600 px wide
- `grid-phone-filters.png` — pages: grader
  - Images for Teddy Bear Nebula QMark on a phone, 375 px wide: the toolbar with the Filters button showing a count of 2 (Status: Rejected and Filter: HA set), pressed open so the folded pills and the size slider show under it; crop to the toolbar
- `grid-time-marks.jpg` — pages: grader
  - Images for Golf of Mexico (rig "ultra cat"), Group: Filter, the H-alpha group open across several nights including Jul 9 2026, Sort: Oldest first, Marks: Nights and hours, thumbnail size near the smallest step so two nights fit: a night line with its date label, the faint band on every other night, and thin hour lines
- `grid-view-panel.png` — pages: grader
  - Images for Golf of Mexico (rig "ultra cat"), the View panel open under the View button: Group: Filter, Sort with Newest first chosen, Marks: Nights and hours, Nights end: At each rig's noon (setting), Chips with all three chip boxes ticked, Separate exposure groups; the View button marked set and naming "newest first"; crop to the toolbar and the open panel
- `header-jobs-automatic.png` — pages: storage
  - Header background jobs list on psf-guard.atpn.co while flat measuring runs (for example after new flats for rig c925-scheduler arrive) and a stack build you started runs: Started by you with the running Stacking row and its Stop, and Automatic with a Measuring flats row (rig name, "… of … sessions") drawn muted and marked waiting, its line reading "Waiting for a stack build · …" with a still bar at how far it had got; crop the open list
- `header-jobs-chip.png` — pages: storage
  - The header's right end on a desktop browser with the background jobs chip closed while work runs: progress ring, percent, and the running, queued and waiting counts each with its icon (one build running, two queued, one automatic refresh waiting), with the tooltip of the hourglass count ("1 waiting") showing; crop tightly around the chip and its tooltip
- `header-menu.png` — pages: authentication, configuration, grader
  - psf-guard.atpn.co signed in as an editor, any view (Library is fine): the menu button at the far right of the header clicked open, showing "Signed in as …", Settings, Keyboard shortcuts, Server information and Sign out; crop to the right end of the header and the open menu (same capture as the SHOT on configuration.html)
  - psf-guard.atpn.co signed in as an editor, any view (Library is fine): the menu button at the far right of the header clicked open, showing "Signed in as …", Settings, Keyboard shortcuts, Server information and Sign out; crop to the right end of the header and the open menu
  - Header crop, right end, on psf-guard.atpn.co signed in as an editor: the jobs chip, the rigs chip, and the menu button open showing "Signed in as …", Settings, Keyboard shortcuts, Server information and Sign out. Pair it with header-tab-hover.png in a shot-pair
- `header-tab-hover.png` — pages: grader
  - Header crop, left half, in Images for Teddy Bear Nebula QMark (rig starfront-redcat61): Sky and Library as icons, the project picker, Planning icon, rig · target switcher, the Images tab showing its name as the current view, and the pointer resting on the Calibration tab with its name slid out; Sequence and Stacks as icons. Pair it with header-menu.png in a shot-pair
- `header-transfers.png` — pages: collaboration
  - Any view, the header's background jobs chip opened while a collaboration transfer runs or waits (starfront-redcat61): crop to the job list showing a "Transfers" row with its catalog · label, state, "N/M files · X MiB" and its pause, resume or retry, and cancel buttons, under Started by you or Automatic.
- `image-calibration-panel.png` — pages: calibration-grading
  - Image detail of a Golf of Mexico H-alpha light from the Jul 9 2026 session (rig "ultra cat") that carries a Check or Poor finding; crop to the side panel with Calibration open: the findings list with one finding chosen, the Flats part with nights, temperatures, Flat family and Chosen by, the Darks part, and "Checked by …" with Tune checks for …
- `image-detail-folded.png` — pages: grader
  - Image detail sidebar crop for a light with a 🧪 Check or Poor chip (find one with Library › Show › Calibration issues, then the Calibration pill in Images): Image Information, Quality analysis, Sky context and Satellite tracks folded to their one-line summaries (the score, "solved" or not, the crossing count), and Calibration open on its own listing the findings in words
- `import-preview-plans.png` — pages: importing
  - The import preview opened by Review on that card: the held folders ticked under Folders, "↳ existing <project> / <target> — +N frame(s) (name match) · adds 1 exposure plan" and "· raises acquired on 2 plans" lines, "NEW <project> — 1 target(s), N frame(s)" lines for the new targets, "Adds 1 exposure template(s)", Queue background quality analysis, and the Import N frame(s) and Cancel buttons; crop to the preview panel
- `library-calibration-pills.png` — pages: calibration-grading, grader
  - Library, compact view, Show set to Calibration issues: three or four project rows (such as Golf of Mexico and Iris Nebula) with their 🧪 Poor or 🧪 Check pill in the calibration column, the Show pill visible in the Projects toolbar
  - Library, Compact, Show: Calibration issues (the Show pill reads it, marked as set): five or six rows with 🧪 Poor (red) and 🧪 Check (yellow) pills in the calibration column, for example rigs c925-scheduler and starfront-redcat61; hover one pill so its tooltip ("Calibration: N lights can't be calibrated properly") shows; crop to the toolbar and the rows
- `library-phone.png` — pages: grader
  - Library on a phone, 375 px wide, Compact, Show: All projects: three or four project rows (for example Teddy Bear Nebula QMark, Golf of Mexico, Iris Nebula) as rounded boxes with one pill kind per place; crop from the Projects heading down
- `plan-needs-activating.png` — pages: planning
  - Planning workspace for Heart Mosaic (rig askar107phq) after raising one objective's goal on Exposures and saving (do not activate): crop to the bar at the top reading "Needs activating: saved plan not activated yet" with its "Activate again…" button, and the plan summary under it.
- `plan-send-again.png` — pages: rigs
  - Planning workspace for a plan whose rig has Remote site set to a Sync peer that was offline at the last activation (any rig and peer; the peer name shows in the text): crop to the bar at the top reading "<peer> hasn't received this activation" with the "Send to <peer> again" button, and the plan summary under it.
- `plan-summary-activated.png` — pages: planning
  - Planning workspace for Heart Mosaic (rig askar107phq), any tab, nothing unsaved and no bar up: crop to the plan summary at the top, showing ← Library, the plan name, the green "Activated" pill with its check mark and the "Activate…" button beside it, then the target, goal and rig pills.
- `release-012-calibration.jpg` — pages: new-in-0.12
  - Priority: 0.12 highlights. Calibration page, Frames tab, Sessions selected, rig starfront-redcat61, Type: Flat, an Ha session for Teddy Bear Nebula QMark. Show the session sidebar, thumbnail strip with OK/suspect/poor grades, one suspect or poor flat in the viewer, and its grade reason and Frame/Session measurements. Keep Keep out, Use anyway and Clear visible without pressing them. Choose a frame with a real finding; use another session or rig if needed. Capture at about 1440 px wide at 2x, crop to the workspace below the header, and keep the grade reason readable at docs-column width. No settings or grades changed.
- `release-012-flat-groups.jpg` — pages: new-in-0.12
  - Priority: 0.12 highlights. Calibration page, Frames tab, Groups selected, rig c925-scheduler or starfront-redcat61, Type: Flat. Choose two measured groups separated by a real dust or illumination change. Show the group sidebar with the change reason and Compare open on that boundary; include the later/earlier night labels, the ratio image at Normal stretch, and Spots marks identifying the changed shadows. Keep enough of the group list to explain which nights the comparison separates. Capture at about 1440 px wide at 2x, crop to the group list and comparison, and keep the reason readable at docs-column width. Do not split, join, change limits or assign lights. If no measured change is available, record the missing state rather than implying one.
- `release-012-mosaic-editing.jpg` — pages: new-in-0.12
  - Priority: 0.12 highlights. Planning workspace for Heart Mosaic, rig askar107phq, Framing tab. Show the nebula survey with the captured panels and their padlocks, plus the Mosaic panels controls alongside it. In an unsaved draft, add or unlock one panel, select Panel mode with Snap on, and capture it being moved beside a neighbour with shaded overlap and its percentage visible. Include the selected panel in the list and the add-panel controls; frame the sky and sidebar together, not a sky-only crop. Capture at about 1440 px wide at 2x with labels readable at docs-column width. Do not Save or Activate; discard draft edits after capture.
- `scoring-popover.png` — pages: screening
  - Sequence for project Golf of Mexico (rig "ultra cat"), session tab HA · Jul 9, 2026, 10:08 PM, after setting HFR rise to 150% and Star loss to 50% in the toolbar. The Scoring popover open: its button reads "Scoring (changed)"; Penalties lists Satellite trails, Pointing, Temporal anomalies, HFR rise and Star loss, the two changed sliders marked; Reject limits shows Max HFR and Min stars; below them "Changed for this view. Edit defaults", Reset to default and Save as default. Crop: the Scoring button and its open popover.
- `sequence-cutoff-hfr.jpg` — pages: screening
  - Sequence for project Golf of Mexico (rig "ultra cat"), session tab HA · Jul 9, 2026, 10:08 PM. Cutoff set to HFR, its slider placed just above the bulk of the readings so the three Soft Stars frames' bars rise above the dashed line in the poor colour. Grade dots under the bars (green, red and grey all present); the pointer resting on a rejected bar so its tooltip shows "Rejected: …". Crop: the toolbar, the session tabs, the chart and the first row of cards.
- `sequence-select-rule.png` — pages: screening
  - Sequence toolbar for project Golf of Mexico (rig "ultra cat"), session tab HA · Jul 9, 2026, 10:08 PM, with the Recommended rejects rule on: the pill reads "Select: Recommended rejects (N)" with the × beside it, and the row below shows "N selected", "Rule: Recommended rejects", Review rejection and Clear. Crop: the toolbar and its selection row only.
- `settings-agents.png` — pages: mcp
  - desktop app on macOS with no accounts, header menu › Settings › Agents tab: the Agents card with the /api/mcp URL, the Claude Code and Codex snippets with Copy buttons, and the "Choose a fixed server port" link; crop to the Agents card
- `settings-autoimport-scan-rules.png` — pages: importing
  - Settings → Databases → Edit on the starfront-redcat61 catalog, scrolled to the Scan rules and Automatic import boxes: Exclude holding **/Hocus Focus/** and **/PierCam/**, Include only empty, Lights need a target name and Match targets by position ticked, Shortest light (s) 10; Automatic import ticked with Run when the app or server opens this database, Schedule: Every hour, Import: Lights and calibration frames, New targets: Ask first; crop to the two boxes
- `settings-backups.png` — pages: backups
  - Settings › Backups: Back up now with scope and Include secrets, the schedule, and the archive list
- `settings-calibration-flat-groups.png` — pages: calibration-masters
  - Settings › Calibration scrolled to the Flat groups box (Group flats, Dust split, Light pattern split, each with help and its default) and the Light checks box below it showing a few checks with their Poor / Check only / Off controls; open it from Edit limits in Calibration › Frames so the Dust split row is the one in focus
- `settings-calibration-rig.png` — pages: calibration-masters
  - Settings › Calibration › Rigs with rig starfront-redcat61 expanded, Start from › Sky flats pressed and its note "… Review the values below, then save." showing; the Matching and Light checks groups open, with Flat session and Flats from several nights set as own values (Own value pressed) and other rows showing their inherited value and "· global" or "· default"; Save rig and Inherit everything at the foot
- `settings-calibration-stacks-exports.png` — pages: exporting
  - Settings › Calibration in the new card layout, any server: the Stacks and exports box with Leave out lights that can't be calibrated ticked and its help line, and the Save button below; crop to that box and the button
- `settings-connect-agent.png` — pages: mcp
  - psf-guard.atpn.co signed in as an editor, Settings › Users, API tokens card after Connect an agent: Let it grade and start jobs left unticked, Create token clicked, showing the Claude Code and Codex setup snippets with their Copy buttons; blur or crop out the token itself; crop to the API tokens card
- `settings-review-scoring.png` — pages: screening
  - Settings › Review, the Sequence scoring card at the built-in values: Penalties (Satellite trails, Pointing, Temporal anomalies, HFR rise, Star loss, each 100% with its hint and "Built in: 100%"), Reject limits (Max HFR and Min stars empty, reading "off"), Save defaults and Reset to built-in defaults. Crop: that card only.
- `settings-server.png` — pages: install
  - desktop app on macOS, header menu › Settings › Server tab: "Running at …", Port selection with Fixed port chosen and Server port 3000, Save port, and the Restart server button with its note; crop to the Server card
- `settings-stack-previews.png` — pages: stacking
  - Settings › Stacking in the new card layout, any server: the Stack previews card with its Automatic refresh box (Rebuild stack previews on their own, the two waits, Also stack channels that have no stack yet) and its Processing box with Re-apply processing when a stack refreshes ticked; crop to that card
- `settings-unsaved-close.png` — pages: configuration
  - psf-guard.atpn.co as an editor, Settings › Calibration with one matching value changed and not saved, then Done clicked: the footer prompt "Unsaved changes in calibration settings. Close without saving them?" with Keep editing and Close without saving, and the Done button; crop to the bottom of the Settings dialog
- `stack-processing-waiting.png` — pages: stacking
  - Stacks view, Teddy Bear Nebula QMark (rig starfront-redcat61): start a build of the OIII channel, then on the H-alpha card open View processing, turn on RC-Astro BlurXTerminator and press Apply processing; crop the H-alpha card's View processing panel so its button reads "Waiting for the stack build of … · OIII to finish", with the header's background jobs list open beside it showing the BlurXTerminator row queued behind the build
- `stack-reprocessing.jpg` — pages: stacking
  - Stacks view, Teddy Bear Nebula QMark (rig starfront-redcat61): an H-alpha card that had a stretch plus RC-Astro NoiseXTerminator applied, right after Rebuild, while the re-apply waits or runs; crop that one card so its image and the line "From the previous stack · reprocessing · …" under it both show
- `wbpp-run-progress.png` — pages: wbpp
  - WBPP run dialog on psf-guard.atpn.co for a project of rig c925-scheduler or starfront-redcat61 with Leave out lights that can't be calibrated on (Settings › Calibration › Stacks and exports) and a light that lacks flats: the dialog while the run is under way, showing the stage and elapsed time, the free space line, the counts line ending "… light(s) that can't be calibrated were left out, as stacks leave them out", the "Flats chosen around measured changes: …" line and the "Calibration frames matched with: …" line if any setting differs; crop the progress part of the dialog
