import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Frost Future Self — one text message from your future self.
// The gate allows 1-200 characters; this line stays well inside it,
// and the punchline lands on the last clause, as a text should.
const LINE =
  "Hey, it's you from 2041. Good news: you finally learned to cook. Bad news: it's just instant noodles, but you plate them like a Michelin chef and charge yourself rent.";

if (LINE.length > 200) throw new Error("line exceeds 200 characters");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
