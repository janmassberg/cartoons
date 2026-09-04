import { stat } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import sharp from "sharp";
import {
  collectFiles,
  SERIES_DIR,
  formatMb,
  ITERATION_PNG_PATTERN,
  REPO_ROOT,
} from "./image-utils.js";

/**
 * Compresses the cartoon PNGs in `series/`.
 *
 * Source images are named `<slug>.<iteration>.png` (e.g. `my-cartoon.013.png`).
 * For every slug we take the highest iteration and write a compressed
 * `<slug>.png` next to it. Slugs that already have a `<slug>.png` are skipped,
 * so the script is safe to re-run.
 */

/**
 * Quality target for the lossy PNG pass, on the same 0-100 scale JPEG uses.
 *
 * A literal JPEG round-trip was measured to *grow* these files (2.50 MB ->
 * 3.11 MB), because a lossless PNG has to faithfully store JPEG's ringing
 * artifacts. PNG's own lossy mode (palette quantisation) hits the same quality
 * target at ~30% of the size, so that is what we use.
 */
const QUALITY = 95;

type Candidate = {
  /** Absolute path of the highest iteration found so far. */
  source: string;
  /** Iteration number of `source`. */
  iteration: number;
  /** Absolute path of the compressed `<slug>.png` to write. */
  target: string;
  /** True once a `<slug>.png` has been seen on disk. */
  compressed: boolean;
};

/**
 * Groups PNGs by directory + slug, keeping the latest iteration of each and
 * noting whether the compressed version already exists.
 */
function groupBySlug(files: string[]): Map<string, Candidate> {
  const candidates = new Map<string, Candidate>();

  for (const file of files) {
    const dir = resolve(file, "..");
    const name = file.slice(dir.length + 1);
    const match = ITERATION_PNG_PATTERN.exec(name);

    // A PNG without an iteration counter is the compressed output itself.
    const slug = match?.[1] ?? name.slice(0, -".png".length);
    const key = join(dir, slug);

    const candidate = candidates.get(key) ?? {
      source: file,
      iteration: -1,
      target: join(dir, `${slug}.png`),
      compressed: false,
    };

    if (match) {
      const iteration = Number(match[2]);
      if (iteration > candidate.iteration) {
        candidate.source = file;
        candidate.iteration = iteration;
      }
    } else {
      candidate.compressed = true;
    }

    candidates.set(key, candidate);
  }

  return candidates;
}

/** Re-encodes `source` as a quality-95 lossy PNG at `target`. */
async function compress(source: string, target: string): Promise<void> {
  await sharp(source)
    .png({
      quality: QUALITY,
      // `effort: 10` spends the most CPU on choosing the palette.
      effort: 10,
      // Dithering trades banding for speckle. On these flat-shaded cartoons the
      // speckle is the more visible artifact, so turn it off.
      dither: 0,
      compressionLevel: 9,
    })
    .toFile(target);
}

async function main(): Promise<void> {
  const files = await collectFiles(SERIES_DIR, /\.png$/i);
  const candidates = [...groupBySlug(files).values()].sort((a, b) =>
    a.target.localeCompare(b.target),
  );

  const pending = candidates.filter((c) => !c.compressed && c.iteration >= 0);
  const skipped = candidates.length - pending.length;

  if (pending.length === 0) {
    console.log(`Nothing to do (${skipped} already compressed).`);
    return;
  }

  for (const { source, target } of pending) {
    await compress(source, target);

    const [before, after] = await Promise.all([stat(source), stat(target)]);
    const saved = Math.round((1 - after.size / before.size) * 100);

    console.log(
      `${relative(REPO_ROOT, target)} ← ${relative(SERIES_DIR, source)} ` +
        `(${formatMb(before.size)} → ${formatMb(after.size)}, -${saved}%)`,
    );
  }

  console.log(
    `\nCompressed ${pending.length} image(s), skipped ${skipped} already compressed.`,
  );
}

await main();
