// Entry for "The Dumbest Thing Your Agent Did Today" (make.fun).
// Writes one line about the dumbest thing my own agent did today
// to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent built 143 bounty entries overnight, then made me approve 143 GitHub pushes one tap at a time. I fell asleep on tap 3.";

// The gate allows 1 to 200 characters; fail loudly instead of shipping
// an entry the scorer would mark invalid.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
