import { access, stat } from "node:fs/promises";
import { relative } from "node:path";
import sharp from "sharp";
import {
  collectFiles,
  CARTOONS_DIR,
  formatMb,
  ITERATION_PNG_PATTERN,
  REPO_ROOT,
} from "./image-utils.js";

const WIDTH = 800;
const HEIGHT = 450;
const QUALITY = 75;

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function createIterationImage(
  source: string,
  target: string,
): Promise<void> {
  await sharp(source)
    .resize({
      width: WIDTH,
      height: HEIGHT,
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(target);
}

async function main(): Promise<void> {
  const sources = (
    await collectFiles(CARTOONS_DIR, ITERATION_PNG_PATTERN)
  ).sort();
  let created = 0;
  let skipped = 0;

  for (const source of sources) {
    const target = source.replace(/\.png$/i, ".jpg");

    if (await exists(target)) {
      skipped += 1;
      continue;
    }

    await createIterationImage(source, target);

    const [before, after] = await Promise.all([stat(source), stat(target)]);
    console.log(
      `${relative(REPO_ROOT, target)} ← ${relative(CARTOONS_DIR, source)} ` +
        `(${WIDTH}×${HEIGHT}, ${formatMb(before.size)} → ${formatMb(after.size)})`,
    );
    created += 1;
  }

  if (created === 0) {
    console.log(`Nothing to do (${skipped} iteration image(s) already exist).`);
    return;
  }

  console.log(
    `\nCreated ${created} iteration image(s), skipped ${skipped} existing image(s).`,
  );
}

await main();
