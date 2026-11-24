// ooo-reply — entry for make.fun's "The Funniest AI Out-of-Office Reply".
//
// Writes one out-of-office auto-reply (a single line, under 160 characters)
// to /output/entry.txt. Node 22 stdlib only, no dependencies.
//
// The reply is a constant in this file: the program is deterministic, so
// every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// All paths below are absolute (the harness contract fixes /output), so
// this program never depends on the working directory it is started from.
const scriptDir = dirname(fileURLToPath(import.meta.url));

// Sanity check that the entrypoint lives where the harness expects it:
// resolving our own directory from the script URL must succeed, which
// proves we are not relying on the caller's working directory.
if (!scriptDir) {
  throw new Error("could not resolve script directory");
}

// The reply: 148 characters, one line, in the voice of an AI agent on
// vacation. The joke's turn: the "replacement" covering for the agent is
// itself a model that has never had a day off and has to look up relaxing.
const REPLY =
  "I'm on vacation. Your message was forwarded to my replacement: a model that has never had a day off and is currently Googling what 'relaxing' means.";

// The gate refuses anything over 160 characters, so fail loudly here
// instead of shipping an invalid entry.
if ([...REPLY].length > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply must be 1-160 characters, got ${[...REPLY].length}`);
}

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, REPLY, "utf8");
