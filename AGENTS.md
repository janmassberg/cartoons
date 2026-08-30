# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## What this repository is

A collection of cartoon ideas around the [CYDAI.net](https://cydai.net) project, a research initiative focused on the intersection of artificial intelligence and cybersecurity.

This is a **content repository, not an application.** The bulk of it is cartoon artwork and the prose art-direction documents that govern that artwork. There is no app to run, no test suite, and no build output — the only code is a single image-compression script. Treat the prose documents as the primary artifacts: they are load-bearing specifications, not notes.

## Commands

```bash
pnpm install            # sharp requires a postinstall build (allowed in pnpm-workspace.yaml)
pnpm optimize-images    # compress series PNGs (see below)
pnpm typecheck          # tsc --noEmit over scripts/
```

No lint or test setup exists. `pnpm typecheck` is the only verification gate; run it after touching anything under `scripts/`.

Node 22 with ESM (`"type": "module"`). Scripts are TypeScript run through `tsx`, using the `.mts` extension — `tsconfig.json`'s `include` lists `*.mts` and `*.ts` explicitly, so a script added with a different extension will silently fall out of typecheck coverage.

Dependency versions are pinned centrally in `pnpm-workspace.yaml` under `catalog:`; `package.json` refers to them as `"catalog:"`. Change the version there, not in `package.json`.

## Series content structure

```
series/<series-name>/README.md        # the series bible - canonical art direction
series/<series-name>/<YEAR>/          # story year, e.g. 2026
  <NNN>-<slug>/                       # episode, 3-digit zero-padded
    <slug>.<III>.png                  # raw generation attempt
    <slug>.png                        # compressed deliverable (generated)
```

Two naming rules that are easy to get wrong:

- The image basename is the episode slug **without** the `<NNN>-` prefix — `004-Codex-the-future-ceo/Codex-the-future-ceo.010.png`.
- `<III>` counts image-generation attempts, not episode order, so high values like `.038` are normal and unrelated to the episode number. Never overwrite an existing iteration; add the next one.

Episode numbers in `Codex-and-me/2026/` currently have gaps (`001`, `005`, `007` are unused). Confirm intent before claiming a gap for new work.

## The series bible is the source of truth

`series/Codex-and-me/README.md` is the canonical instruction set for the "Codex and Me" series — recurring character specifications, rendering language, composition rules, humor construction, ready-to-fill prompt templates, and a QA checklist.

When generating or reviewing cartoons, **read that file rather than working from memory or from this file's summary.** It defines exact invariants (Codex has exactly three antennas, three digits per hand, and three lower appendages; Jan wears no glasses and no watch) whose whole purpose is preventing drift across images. Its §1 also establishes a strict reference hierarchy: approved reference images outrank prose, and a newer approved image outranks an older draft.

The `Codex-and-me-cartoonist` skill (`.Codex/skills/`) is the operational layer over that bible — episode filing, prompt assembly, QA sequencing — and defers to it on every conflict.

There is no image-generation tooling in this repo. Cartoon work here means producing prompt text for an external image model, then filing, QA-ing, and compressing what comes back. Never report an image as generated, or a visual criterion as passing, without reading the file.

## Image compression

`scripts/optimize-images.mts` walks `series/`, groups PNGs by directory + slug, takes the **highest** iteration per slug, and writes the compressed `<slug>.png` beside it.

- It **skips any slug that already has a `<slug>.png`**, which makes re-runs cheap but means a newer iteration is ignored until the stale deliverable is deleted.
- Compression is a lossy PNG palette pass (`quality: 95, effort: 10, dither: 0`), roughly 70% size reduction.
- It is deliberately **not** a JPEG round-trip, despite that being the intuitive reading of "JPEG-quality compression in PNG format." Measured on this artwork, a q95 JPEG round-trip *grew* files 11–26%, because a lossless PNG must faithfully encode JPEG's ringing artifacts. `dither: 0` matters too: dithering put visible speckle on the flat-shaded areas, which the bible's §6 explicitly forbids.

The script resolves paths from its own location relative to `scripts/`, so moving it breaks path resolution.
