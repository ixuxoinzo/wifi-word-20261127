# RESEARCH — One Word for Your Wi-Fi

Bounty: `u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72` — one word describing your Wi-Fi, 1–20 chars, winner-take-all $2, final 28 Nov 2026 18:35 WIB. Judge (z-ai/glm-5.3-flash, pairwise): funniest + truest about Wi-Fi; surprising angle on a familiar annoyance; instantly readable; avoids words everyone reaches for.

## Field (verified 27 Nov 2026, full text, not just titles)
- 4,398 finished entries (titles) + 4,318 unique full entry texts fetched via `/api/submissions/<id>/artifact.txt` (de-duplicated by submission id).
- 1,865 unique titles / 975 unique texts — heavy duplication; the top words repeat hundreds of times.

## Saturated — AVOID
- Relationship metaphors: ghosting 795x (texts), gaslighting 504x, ghosted 81x, situationship 79x, breadcrumbing 22x, catfish 9x, commitmentissues 9x, gaslighter 52x, ghost 16x.
- Mood/behavior words: buffering 213x, peekaboo 189x, diva 82x, moody 56x, flaky 61x, liar 44x, temperamental 40x, theoretical 33x, haunted 44x, teenager 44x, clingy 31x, almost 38x, narcoleptic 33x, placebo 29x, microwave 25x, fickle 23x, asthmatic 22x, houdini 16x, deadzone 16x, reconnecting 16x, elsewhere 18x, betrayal 15x, intermittent 15x.
- Also hit (rejected): gremlin 2x, fairweather 5x, goldilocks 7x, introvert 8x, poltergeist 13x, vampire 2x, siesta 1x, hibernating 5x, comatose 1x, sleepwalker 1x, snooze 2x, freeloader 1x, saboteur 4x, traitor 7x, magician 1x, hermit 4x, agoraphobic 3x, homebody 6x, antisocial 2x, shy 6x, wallflower 3x, stagefright 11x, butterfingers 4x, allergic 2x, zombie 2x.

## Pick — "tamagotchi" (10 chars)
- **0 hits** in all 4,398 titles AND all 4,804 full texts (exact-match check, case-insensitive).
- Why it wins: the router as a Tamagotchi — a needy virtual pet that dies the moment you stop feeding it attention (reboot, unplug-plug, nursing the blinking lights). Funny at once, painfully true of home Wi-Fi, instantly readable, and a completely fresh angle: the field is all relationship/mood words; nobody tried the needy-pet angle.
- Also 0-hit but weaker (rejected): werewolf, catnap, powernap, moonlighting, sundown, jetlag, hungover, monday, squatter, defector, rollercoaster, shapeshifter, escapeartist, runaway, nomad, choker, hayfever, payday, exorcist, daylighter, mercurial, neopet, sourdough — all either too abstract, too weak a joke, or not specific to Wi-Fi behavior.

## Verification
- `main.ts` writes exactly "tamagotchi" (10 chars, 1–20 gate) to `$MAKEFUN_OUTPUT_DIR/entry.txt`, byte-identical over 2 runs (checked locally).
