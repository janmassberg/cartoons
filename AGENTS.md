# AGENTS.md

Guidance for AI agents working in this repository.

## Repository scope

This is Jan Massberg's private, theme-neutral workspace for cartoon series. It is a **content repository, not an application**: artwork and series bibles are the primary artifacts, while `scripts/` contains a small set of image-processing utilities.

Do not describe the entire repository through the subject of one series. Each `series/<series>/ARTWORK.md` owns that series' premise, characters, art direction, writing rules, references, and QA criteria.

## Commands

```bash
pnpm install                   # install pinned workspace dependencies
pnpm create-iteration-images  # create missing 800x450 JPEG previews
pnpm optimize-images          # create missing compressed PNG deliverables
pnpm typecheck                # tsc --noEmit over scripts/
```

There is no lint or test suite. Run `pnpm typecheck` after changing anything under `scripts/`; documentation-only and artwork-only changes do not require it.

The utilities use Node.js 22, ESM, TypeScript, and `tsx`. Dependency versions are pinned in `pnpm-workspace.yaml` under `catalog:`; update them there rather than replacing `"catalog:"` entries in `package.json`.

## Content layout and naming

```text
series/<series>/ARTWORK.md       # canonical artwork bible
series/<series>/<YEAR>/
  <NNN>-<slug>/
    <slug>.<III>.png               # source generation iteration
    <slug>.<III>.jpg               # generated compact preview
    <slug>.png                     # generated production deliverable
```

- Episode folders use a three-digit sequence number, but image basenames omit the `<NNN>-` prefix.
- `<III>` is the three-digit generation-attempt counter, not the episode number. Never overwrite an iteration; add the next number.
- Do not claim an unused episode number without checking the current tree and confirming whether the user intends to fill a gap.
- Treat source iterations as immutable. Generated previews and deliverables may be recreated from their corresponding source when the user approves replacement.

## Series bibles and skills

Before creating, editing, or reviewing a cartoon, read that series' bible in full. Approved reference images and the bible's reference hierarchy determine continuity; do not work from this file's summary or from memory.

For **Claude and Me**, use:

- Artwork bible: `series/claude-and-me/ARTWORK.md`
- Operational skill: `.agents/skills/claude-and-me-cartoonist/SKILL.md`

The bible is authoritative for creative decisions. The skill governs repository workflow and must defer to the bible when they differ. Artificial intelligence is the subject of **Claude and Me**, not of the repository as a whole.

Inspect an actual image before reporting that any visual criterion passes. The repository itself contains no local image generator, but an agent may use an available image-generation tool when the user's request authorizes creating or editing artwork.

## Generated images

`scripts/create-iteration-images.mts` walks `series/` and creates a missing 800x450 quality-90 JPEG beside each `<slug>.<III>.png`. Existing previews are skipped.

`scripts/optimize-images.mts` groups PNGs by directory and slug, selects the highest iteration, and writes `<slug>.png` using a quality-95 lossy PNG palette pass with maximum effort and no dithering. Existing deliverables are skipped, so a newer approved iteration is ignored until the stale generated `<slug>.png` is removed.

The utilities resolve `series/` relative to files in `scripts/`; moving those files requires updating path resolution.
