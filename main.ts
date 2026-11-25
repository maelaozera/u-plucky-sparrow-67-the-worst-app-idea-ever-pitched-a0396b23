// The Worst App Idea Ever Pitched — entry program.
//
// The pitch: PingPong, an app that lets you send a push notification
// to your own phone from your own phone, complete with a satisfying
// ping, so you never miss an urgent message from yourself again. The
// joke is the perfect pointlessness: a real-sounding product solving
// a problem nobody has, for a user who is also the sender. One
// sentence, 187 characters, inside the 240-character limit, written
// verbatim with no trailing newline. Deterministic: the same bytes
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const PITCH =
  "PingPong is the app that lets you send a push notification to your own phone from your own phone, complete with a satisfying ping, so you never miss an urgent message from yourself again.";

const MAX_CHARS = 240;

// Output path: first CLI argument, else ENTRY_OUTPUT, else the
// competition's fixed output location.
function resolveOutputPath(): string {
  return resolve(
    process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt",
  );
}

function checkedPitch(): string {
  const line = PITCH.trim();
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1-${MAX_CHARS} characters, got ${line.length}.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be exactly one line.");
  }
  return line;
}

function main(): void {
  const line = checkedPitch();
  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line, "utf8");
  console.log(`Wrote ${line.length}-character entry to ${outPath}`);
}

main();
