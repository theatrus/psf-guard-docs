# PSF Guard documentation guide

This guide applies to website copy, documentation, captions, commit messages
and PR descriptions. `AGENTS.md` links to this file so contributors and coding
agents use the same rules.

## Write for the reader's task

Start with what the reader can do or needs to know. Give instructions in the
order the reader will follow them: where to go, what to choose, and what happens
next. State prerequisites before the step that needs them.

- Use direct actions: “Open Settings,” “Choose a rig,” “Click Save.”
- Use the reader as the subject of instructions. Use PSF Guard, the server,
  or the relevant tool as the subject when explaining automatic behavior.
- State the result: “Click Save. PSF Guard applies the settings to the next
  stack.” Avoid vague promises such as “Save handles the changes.”
- Use headings that help readers find a task or answer: “Add calibration
  frames,” “Check coverage,” or “How matching works.”
- Explain technical details when they affect a choice, a result, or recovery
  from an error. Keep implementation detail out of routine instructions.

An explanation need not be an instruction. “The server checks for new frames
at startup” is clear. Do not turn automatic behavior into a step the reader
must perform.

## Prefer natural, precise language

Use Orwell's rules as a test of clarity, not a demand for the shortest words:

1. Avoid stock metaphors and figures of speech.
2. Prefer a short, familiar word when it preserves the meaning.
3. Cut words that add nothing.
4. Prefer active voice when the actor matters.
5. Keep technical terms when they are more precise than an everyday substitute.
6. Break these rules before writing something awkward or misleading.

Short words can still make a sentence hard to read. Do not replace a clear
term such as “queue,” “settings,” “position,” or “progress” with a strained
phrase. Use “disabled” for a control that cannot be used, “off” for a setting
that is off, and “collapsed” for a section whose contents are hidden.

Give each sentence a clear subject and verb. Split sentences that combine
several actions, conditions, or exceptions. Repeat a noun when “it,” “one,”
“those,” or “the same” could refer to more than one thing.

## Say what the interface does

Do not make a page, row, label, or button sound like a person. Avoid using
“names,” “says,” “asks,” “takes,” or “holds” as substitutes for a precise verb.
These words are not banned: “Enter a name” and “The dialog asks you to confirm”
are natural. Choose the verb that describes the behavior:

- A page **shows** information or **lists** items.
- A message **explains** a problem or **identifies** the affected file.
- A button **opens**, **starts**, **saves**, or **stops** something.
- A control **is disabled** until its prerequisite is met.
- The server **stores**, **checks**, **matches**, or **writes** data.

| Avoid | Prefer |
|---|---|
| The row names what waits. | The row lists the queued jobs. |
| The error names the folder. | The error message shows which folder could not be opened. |
| The rigs hold the plan. | Each rig's settings match the saved plan. |
| The preview lands. | The preview is ready. |
| The button waits for it. | Activate stays disabled until the preview is ready. |
| The bar asks while the plan needs activating. | A banner explains why the plan needs activation. |
| Settings closes over unsaved edits. | Settings asks before discarding unsaved changes. |
| The address keeps the pick. | The URL stores the selected filter. |
| A run takes the frames its rig wants. | The run uses calibration frames that match the rig's settings. |
| The panel gives how far it has got. | The panel shows the job's progress. |

Rewrite the sentence, not just the verb. “The row identifies what waits” still
leaves the reader to work out what is waiting and why. Do not replace every
“names” with “shows” or every “holds” with “stores.” Check the meaning first.

## Preserve technical meaning

- Copy UI labels exactly, including capitalization. Explain an awkward label
  in plain prose rather than inventing a different label.
- Keep commands, option names, API fields, units, limits and algorithm names
  exact. A prose edit must not change code or product behavior.
- Preserve distinctions such as queued versus waiting, planned versus
  measured, and warnings versus rejection. Do not imply that missing evidence
  proves a failure.
- State conditions explicitly. “When X, do Y” is clearer than a chain of
  “else,” “one,” and “it.” Use a list for several branches.
- Link with the destination's subject, such as “Flat group settings,” rather
  than “above,” “below,” or “here.” Sections may move to another page.

## Review and check changes

Read each edited passage as an instruction to someone who has not seen the
implementation. Check that the reader can tell who acts, what changes, when it
happens, and what to do next. Read awkward sentences aloud. Add a few words
when they remove ambiguity.

Keep guides focused on one task or subject. When splitting a guide, preserve
its content, update links and navigation, and keep old section bookmarks
working. Keep screenshot instructions with the section they describe.

For every screenshot capture or reshoot, add its actual source, UI state,
build, viewport, crop and reshoot steps to the
[capture record](assets/screenshot-captures.md). Commit the entry with the
image. Keep earlier entries when replacing an image. Planned shots and
scouting notes are not capture records.

Before committing:

- Run `npm run build` after changing shared navigation or adding pages.
- Run `npm run shots` after moving screenshot instructions.
- Run `npm run check` and `git diff --check`.
- Review the diff for changed facts, UI labels, commands and unrelated edits.
- For navigation changes, check the affected pages and an old bookmark in a
  browser. Report the checks that actually ran.
