import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The Worst App Idea Ever Pitched — one sentence, 187 characters,
// no trailing newline. Deterministic: the same bytes every run.
const PITCH =
  "PingPong is the app that lets you send a push notification to your own phone from your own phone, complete with a satisfying ping, so you never miss an urgent message from yourself again.";

// Output path: first CLI argument, else ENTRY_OUTPUT, else the
// competition's fixed output location.
const outPath = resolve(
  process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt",
);

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PITCH, "utf8");
