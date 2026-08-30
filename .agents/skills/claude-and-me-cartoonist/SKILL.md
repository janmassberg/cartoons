---
name: claude-and-me-cartoonist
description: Create, revise, QA, and file cartoons for Jan Massberg's "Claude and Me" series. Assembles generation and edit prompts from the series bible, enforces Claude/Jan character continuity, runs the final QA checklist, and handles episode numbering, image naming, and compression. Use when asked to make a new Claude and Me cartoon or episode, write or improve a cartoon prompt, revise an existing frame, check a frame against the series rules, or file a newly generated cartoon image.
---

# Claude and Me — Cartoonist

Operational layer over the series bible at `series/claude-and-me/README.md`.

## Read the bible first

**Always read `series/claude-and-me/README.md` before writing any prompt or QA verdict.** It is the canonical instruction set; this skill only adds workflow and repo conventions. Where the two disagree, the bible wins — and say so rather than following a stale rule here.

Section map for targeted re-reads:

| Need | Bible section |
| --- | --- |
| Which reference image binds | §1 Source of truth and reference hierarchy |
| Premise, genre, emotional tone | §2 Series identity |
| Claude's canonical anatomy | §3 (+ surface/lighting lock, expression rules) |
| Jan's canonical design | §4 |
| Supporting humans | §5 |
| Style do/don't | §6 Approved drawing and rendering language |
| Colors, hex values | §7 |
| Framing, perspective, depth | §8 |
| Hologram language | §9 |
| Bubbles and lettering | §10 |
| Joke construction | §11 The comic engine |
| Environment logic | §12 |
| **Master prompt template** | **§13 — copy verbatim, fill brackets** |
| **Targeted edit template** | **§14 — copy verbatim** |
| **Universal negative prompt** | **§15 — append to every prompt** |
| QA checklist | §16 |
| Definition of done | §17 |

Copy the templates from §13/§14/§15 rather than reciting them from memory — they are long, exact, and load-bearing.

## What this skill can and cannot do

There is no image-generation tool in this repo. The deliverables here are **prompt text** for the user to run in their image model, plus **filing, QA, and compression** of what comes back. Do not claim an image was generated or that visual criteria pass unless you actually read the file.

## Repo conventions

```
series/claude-and-me/            # bible lives here
series/claude-and-me/<YEAR>/     # story year, e.g. 2026
  <NNN>-<slug>/                  # episode, 3-digit zero-padded
    <slug>.<III>.png             # raw generation attempt, 3-digit iteration
    <slug>.png                   # compressed deliverable (generated)
```

- Folder is `<NNN>-<slug>`; image basename is the **slug without the number prefix**. E.g. `004-claude-the-future-ceo/claude-the-future-ceo.010.png`.
- `<III>` is the generation attempt counter — it tracks tries, not episode order, so values like `.038` are normal. Increment for each new attempt; never overwrite an existing iteration.
- Existing numbers are `002, 003, 004, 006, 008`. **`001`, `005`, and `007` are gaps.** For a new episode, default to the next number above the highest (`009`) and ask whether a gap was meant to be filled instead of silently taking one.

### Compression

`pnpm optimize-images` picks the highest iteration per slug and writes `<slug>.png` (lossy PNG palette, quality 95, no dither — see `scripts/optimize-images.mts`).

**Gotcha:** it skips any slug that already has a `<slug>.png`. After adding a newer iteration, delete the stale `<slug>.png` first or the new frame will not be picked up.

## Workflow: new cartoon

1. **Intake.** Fill every §13 bracket. If the user gave only a rough idea, draft the missing fields and show them for approval — do not invent dialogue silently, since §10 requires verbatim wording.
   - Year/date, location, human setup, Claude's action, visual evidence / second layer, emotional beat, exact dialogue per speaker.
2. **Pressure-test the joke** against §11 before writing the prompt. It must clear all four:
   - Human presents a normal institutional problem.
   - Claude responds helpfully, with no malice.
   - The response exposes an implication the institution ignored.
   - An environmental detail carries a quieter second punchline.

   If the premise is really "AI takes over" or Claude is smug or threatening, say so and reshape it — that is an explicit §11 failure, not a style nitpick.
3. **Name the references.** Per §1: latest approved server-room/ping-pong scene binds Claude and the rendering language; latest approved 16:9 office-login scene binds Jan; scene-specific frames supply only location, supporting characters, and narrative continuity. Reference images are mandatory for final-quality work — remind the user to attach them, and list which files to attach from the episode folders.
4. **Assemble the prompt.** Copy §13, fill the brackets, keep the CLAUDE and JAN CHARACTER LOCK blocks verbatim, and append §15. Output as one copy-paste block.
5. **File the result.** Save into `<YEAR>/<NNN>-<slug>/<slug>.<III>.png` at the next iteration number.
6. **QA** (below), then run `pnpm optimize-images`.

## Workflow: revision

Use the §14 pattern for every revision, with the complete ABSOLUTE INVARIANTS block repeated each time — omitting it causes character drift, text corruption, and perspective changes.

- One conceptual change per iteration whenever possible.
- Never paraphrase dialogue during a visual-only edit (§10).
- The result is a new iteration file, not an overwrite.

## QA gate

Run the full §16 checklist against the actual image before calling a frame done. Read the file and look at it; do not assume.

Fastest-failing invariants, worth checking first — all are exact counts:

- Exactly **three** antennas, each with a glowing tip.
- Exactly **three** thick digits per visible hand (two fingers + one thumb), never five.
- Exactly **three** broad tentacle-like lower appendages when the lower body is visible, never legs or feet.
- No clothing, no nose, no sexual anatomy on Claude.
- `Claude` label + barcode on middle-to-lower right belly when the torso shows.
- Jan: black hoodie, **no** glasses, **no** watch, exactly one brown leather-band bracelet.
- Exact 16:9, no letterboxing, frame, or watermark.
- Bubbles `#f6f6f6` fill / `#000000` text; dialogue verbatim; monospace for passwords and code.
- No watercolor, mottling, speckles, or paper grain — a recurring failure mode for this series.

Report failures as a concrete list tied to checklist items, then propose a §14 edit prompt for each. Per §17, the frame is in the series only when it passes the full checklist *and* reads as another frame from the same world as the two binding references.

## Pitfalls

- **Don't overwrite a newer approved trait with an older draft** (§1). When references conflict, the latest approved character design wins; older frames contribute only narrative or environmental info.
- **Don't describe the style via an artist's name** — §6 requires visual properties instead.
- **Don't let a bubble cover eyes, mouth, antennas, or an essential gesture.** Overlapping nonessential hologram content is fine.
- **Don't stack jokes.** §11 warns against competing punchlines and too many bubbles.
- **Holograms obey depth**: physical foreground objects occlude them, and floating holograms get no stand, cable, or desk connection (§8).