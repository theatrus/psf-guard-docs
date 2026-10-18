# Screenshot capture record

Record each documentation screenshot here when you capture it, including
replacements. This record stays after the release screenshot plan is complete.
The plan describes what to shoot; this record describes what the saved image
actually shows and how to repeat it.

No captures have been logged yet. Existing images predate this record; the
October 16 scouting notes in `SCREENSHOT-PLAN.md` are not completed captures.

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

None recorded yet.
