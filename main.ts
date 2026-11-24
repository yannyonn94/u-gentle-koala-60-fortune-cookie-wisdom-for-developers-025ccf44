// Fortune Cookie Wisdom for Developers — make.fun bounty entry.
//
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt. The line is a single sentence, balanced in two halves,
// and it lands in one breath — the way a real fortune cookie reads.

import { mkdirSync, writeFileSync } from "node:fs";

// The winning line, chosen by the concept test in README.md:
// an estimate is never "wrong", only early — and a midnight bug is a
// teacher, not a punishment. The twist is quiet: "early" is both a
// schedule and a verdict, and "listen" is what debugging actually is.
const LINE =
  "Your estimate was never wrong, only early; the bug you chase at midnight is teaching you to listen, not to hurry.";

// Guard the gate: 1-120 characters, pure ASCII (so chars == bytes),
// a single line, and never only whitespace. Anything else is a bug
// in this program, so fail loudly instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`LINE must be 1-120 characters, got ${LINE.length}`);
}
if (!/^[\x20-\x7E]+$/.test(LINE)) {
  throw new Error("LINE must be pure printable ASCII");
}
if (/\r|\n/.test(LINE)) {
  throw new Error("LINE must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("LINE must not be only whitespace");
}

mkdirSync("/output", { recursive: true });

// Exactly the line, no trailing newline: the file's bytes are the entry.
// The output is fully deterministic — the same constant, the same file,
// byte for byte, on every run.
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
