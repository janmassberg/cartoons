import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Relative to this file's location in `scripts/` - update if the file moves.
export const REPO_ROOT = resolve(fileURLToPath(import.meta.url), "../..");
export const SERIES_DIR = join(REPO_ROOT, "series");

/** Matches `<slug>.<iteration>.png`, capturing the slug and iteration. */
export const ITERATION_PNG_PATTERN = /^(.+)\.(\d+)\.png$/i;

/** Recursively collects files whose names match `pattern`. */
export async function collectFiles(
  directory: string,
  pattern: RegExp,
): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path, pattern)));
    } else if (entry.isFile() && pattern.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

export function formatMb(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
