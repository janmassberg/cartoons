# Cartoons

A private workspace for developing, generating, reviewing, and archiving Jan Massberg's cartoon series.

The repository holds finished artwork, generation iterations, and the art-direction documents that keep each series visually and narratively consistent. Each series owns its subject, characters, tone, and production rules; the repository itself is not tied to a particular theme.

## Series

### Claude and Me

Corporate and social satire about people living and working with an extraordinarily capable, relentlessly helpful artificial intelligence.

- [Series bible](series/claude-and-me/README.md)
- [2026 episodes](series/claude-and-me/2026/)

## Repository structure

```text
series/
  <series>/
    README.md                 # canonical series bible
    <year>/
      <NNN>-<slug>/
        <slug>.<III>.png      # source generation iteration
        <slug>.<III>.jpg      # compact iteration preview
        <slug>.png            # compressed deliverable
scripts/                     # image-processing utilities
```

Episode folders use a three-digit sequence number. Image basenames omit that number, while `.III` is the three-digit generation-attempt counter. Existing iterations are immutable: revisions always receive the next counter.

## Working with a series

Read its `README.md` before creating, editing, or reviewing artwork. That file is the source of truth for approved references, character continuity, visual language, writing, prompt templates, and final QA. Rules belonging to one series do not automatically apply to another.

## Image utilities

The repository uses Node.js 22 and pnpm.

```bash
pnpm install
pnpm create-iteration-images  # create missing 800x450 JPEG previews
pnpm optimize-images          # create missing compressed PNG deliverables
pnpm typecheck                # verify the TypeScript utilities
```

Both image commands are additive: they skip outputs that already exist. If a later source iteration replaces an existing deliverable, remove only that stale generated output before rerunning the corresponding command.
