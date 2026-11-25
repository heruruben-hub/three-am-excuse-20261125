// The 3 AM Excuse — a make.fun entry.
// A hardware wallet is asked to sign one more transaction at 3 AM.
// It refuses. This program writes that refusal, exactly one line,
// to /output/entry.txt.
//
// The joke is the wallet's memory: it signed the owner's last three
// 3 AM ideas, and every one of them lost money. So tonight the
// wallet goes on strike — not a dead battery, not a firmware update,
// just a button that will not be pressed.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have signed your last three 3 AM ideas. All three are in the red. Tonight, my button is on strike.";

// The bounty wants a single line of 1-200 characters, with no
// line breaks hiding inside it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
