---
name: claude-and-me-cartoonist
description: Create, revise, review, and file artwork for Jan Massberg's private "Claude and Me" series. Use for episode concepts, cartoon prompts, image generation or edits, visual QA, final approval, and repository filing. Do not apply its AI premise or visual rules to other cartoon series.
---

# Claude and Me — Cartoonist

Operational workflow for `series/claude-and-me/`. The canonical creative specification is the [artwork bible](../../../series/claude-and-me/ARTWORK.md).

## Authority and required reading

Read the complete series bible before creating a prompt, generating or editing an image, or issuing a QA verdict. Re-read the relevant sections during the work rather than reproducing their rules here:

| Task | Bible sections |
| --- | --- |
| Resolve references and continuity | §1 |
| Develop premise, scene, or joke | §2 and §11–12 |
| Direct characters and rendering | §3–10 |
| Build a new-image prompt | §13 and §15 |
| Build a targeted-edit prompt | §14 and §15 |
| Review or approve an image | §16–17 |

The bible wins on every creative conflict. Its current reference ledger—not a snapshot in this skill—determines which images bind. Reference images are required for final-quality generation and review.

## Repository conventions

```text
series/claude-and-me/<YEAR>/<NNN>-<slug>/
  <slug>.<III>.png   # immutable source iteration
  <slug>.<III>.jpg   # generated compact preview
  <slug>.png         # generated production deliverable
```

- Omit the episode number from image basenames.
- Increment `<III>` for every new generation or edit; never overwrite an iteration.
- Determine episode and iteration numbers from the current filesystem. Default a new episode to one above the highest number; do not silently claim a gap.
- Use an available image-generation tool when the user asks for artwork. If none is available, deliver a complete copy-ready prompt without claiming that an image was generated.

## New episode

1. Turn the user's idea into the scene fields required by §13. Draft reasonable missing story details, but preserve any supplied dialogue verbatim and surface consequential creative assumptions.
2. Test the premise against the four-part comic engine in §11. Reshape ideas that make Claude malicious, smug, or generically power-hungry.
3. Attach or identify the binding references from §1 plus any scene-specific reference. Never let an older draft override a newer approved identity.
4. Copy §13 and §15 from the bible, fill the designated fields, and keep the character locks and negative prompt intact.
5. Generate the image when requested and tooling is available. File it at the next unused iteration number.
6. Inspect the actual image against every item in §16. Report concrete failures; do not infer compliance from the prompt.

## Revision

- Start from the requested source iteration and create the next unused iteration.
- Use §14 and §15 verbatim. Prefer one conceptual visual change per iteration.
- Preserve dialogue character-for-character during visual edits.
- Repeat the complete invariants so character identity, composition, text, and perspective do not drift.
- Inspect the output rather than assuming the edit remained scoped.

## QA and final approval

Run the full §16 checklist against the image. Exact anatomy counts, character identity, dialogue, aspect ratio, depth order, geometry, and texture prohibitions are pass/fail requirements. Tie each failure to a checklist item and propose a tightly scoped §14 correction.

Only promote an iteration when the user explicitly approves it and §17 is satisfied. Then:

1. Preserve the approved raw PNG unchanged.
2. If it becomes a canonical character or style reference, update the bible's §1 ledger.
3. Confirm the approved source is the highest iteration. Only then remove a stale generated deliverable when needed and run `pnpm optimize-images`. If a later unapproved experiment exists, do not run the highest-iteration optimizer or replace the deliverable; report the conflict.
4. Run `pnpm create-iteration-images` to create any missing compact preview.
5. Verify the generated files correspond to the approved source before reporting completion.

The image utilities skip existing outputs. Never delete a source iteration, and do not replace an approved deliverable merely because a later experiment exists.
