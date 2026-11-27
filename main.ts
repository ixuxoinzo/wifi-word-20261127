import { writeFileSync, mkdirSync } from "node:fs";

// One Word for Your Wi-Fi — one word describing your Wi-Fi (1-20 chars).
// Research (full field: 4,398 finished entries, titles + 4,804 full texts):
// saturated: relationship words (ghosting 795x, gaslighting 504x, ghosted 81x,
// situationship 79x, breadcrumbing 22x, catfish, commitmentissues), mood words
// (buffering 213x, peekaboo 189x, diva 82x, moody 56x, flaky 61x, liar 44x,
// temperamental 40x, theoretical 33x, haunted 44x, teenager 44x, clingy 31x),
// disappearing acts (houdini 16x, ghost 16x, deadzone 16x). The pick,
// "tamagotchi", has 0 hits in all titles AND all full texts: the router as a
// Tamagotchi — a needy virtual pet that dies if you stop feeding it attention
// (reboots, unplug-plug, nursing the blinking lights). Funny at once, true to
// how home Wi-Fi actually behaves, and a surprising angle the field never tried.
const ENTRY = "tamagotchi";

// Gate: the bounty only accepts 1-20 characters of UTF-8 text, not only
// whitespace, as a single word.
if (ENTRY.length < 1 || ENTRY.length > 20) {
  throw new Error(`entry must be 1-20 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) throw new Error("entry must not be only whitespace");
if (/\s/.test(ENTRY)) throw new Error("entry must be a single word");

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
