---
title: "Continuity & Editing Principles"
category: "Workflows"
summary: "The 180-degree rule, eyeline matching, screen direction, and match cuts — editing grammar for coherent multi-shot AI video."
related:
  - multi-shot-workflows
  - storytelling-structure
  - shot-list-planning
  - camera-angles
  - camera-movements
---

AI video tools generate individual clips. Editing them into a coherent sequence requires the same continuity principles that live-action filmmakers use. These rules matter even more in AI video because the model has no built-in spatial memory — it can't infer continuity across clips unless you describe it explicitly. Breaking these rules isn't wrong — but breaking them accidentally looks like a mistake.

## The 180-Degree Rule

Imagine a line (the "axis of action") between two subjects in a scene. Keep the camera on one side of that line for all shots in the sequence.

- **Why:** Crossing the line flips screen direction — a character looking right suddenly looks left. The audience loses spatial orientation.
- **In AI video:** When generating multiple angles of the same scene, specify consistent left/right positioning. If Character A is on the left in the wide shot, they must be on the left in close-ups too. When using end-frame chaining (clips generated with image-to-video continuity), the 180-degree rule is implicitly maintained by the start-frame lock — plan your camera angles in the shot list phase, then the chain enforces consistency.
- **Prompt tip:** Include spatial anchors like "character on the left side of frame" or "camera positioned on the south side of the table" across all prompts in a sequence.

**When to break it intentionally:** Crossing the line can signal disorientation, a power shift, or a new scene. It's a tool when you do it on purpose.

## Eyeline Matching

When cutting between two characters in conversation, their eyelines must be complementary:

- Character A looks screen-right → Character B looks screen-left
- If both look the same direction, they appear to be looking at something else, not each other

**In AI video:** Specify gaze direction explicitly: `"looking slightly to the right of camera"` and `"looking slightly to the left of camera"` for the corresponding shot.

## Screen Direction

If a character walks left-to-right in one shot, they should continue left-to-right in the next shot (unless they've turned around).

- **Why:** Reversing screen direction implies the character changed direction or is going back.
- **In AI video:** Be consistent with motion direction across prompts. `"walking left to right"` in the wide shot means the close-up should also show leftward-to-rightward movement.

## Match Cuts

A match cut connects two shots through visual similarity — shape, motion, or color.

- **Shape match:** A spinning basketball cuts to a spinning globe
- **Motion match:** A hand reaching forward cuts to another hand reaching forward
- **Color match:** An orange sunset cuts to an orange lamp

**In AI video:** Plan match cuts in your [shot list](/wiki/shot-list-planning). Generate both clips with the matching element described similarly so the visual handoff is clean.

## Cut on Action

Cut from one shot to another in the middle of a movement. The viewer's eye follows the action across the cut, making it feel invisible.

- **Example:** Character raises a cup in a medium shot → cut to close-up as the cup reaches their lips.
- **In AI video:** Generate overlapping action. Start the close-up clip a beat before where the cut happens, then trim in post to the moment of the cut. This gives you the action overlap needed.

## The 30-Degree Rule

When cutting between two shots of the same subject, change the camera angle by at least 30 degrees. Anything less feels like a "jump cut" — a jarring, accidental-looking skip.

- **In AI video:** Vary your [camera angles](/wiki/camera-angles) between shots of the same subject. Don't generate two clips at nearly the same angle and expect the cut to be smooth.
- **Jump cuts are OK** when intentional — they're a stylistic choice in vlogs, music videos, and montages.

## Continuity Checklist for AI Video

Before assembling your edit, verify across your generated clips:

- [ ] Screen direction is consistent for moving subjects
- [ ] Eyelines match in conversation sequences
- [ ] The 180-degree line hasn't been crossed accidentally
- [ ] Clothing, hair, and props haven't changed between shots (see [Character Consistency](/wiki/character-consistency-fundamentals))
- [ ] Lighting direction is consistent — shadows should fall the same way
- [ ] Color and exposure are consistent across clips (grade in post if needed — don't rely on AI matching)
- [ ] Camera angles vary by at least 30 degrees between consecutive shots of the same subject
- [ ] Time of day / weather hasn't shifted unexpectedly between cuts

## Hiding Inconsistencies

AI-generated clips will inevitably have some inconsistencies. Editing techniques that mask them:

- **Cross-dissolves** — Soften the transition between shots with slight color or detail differences
- **Cut on action** — The eye follows the motion, not the background details
- **Insert/cutaway shots** — Cut to a detail shot (hands, objects, environment) between inconsistent clips to reset the viewer's attention
- **Sound bridges** — Audio from the next scene starts before the visual cut, pulling attention to the new shot
- **Color grading** — Unify clips with a consistent grade in post to smooth exposure and palette shifts

These are not cheats — professional editors use every one of these in live-action filmmaking too. See [Multi-Shot Workflows](/wiki/multi-shot-workflows) for the full production pipeline and [Post-Production Workflow](/wiki/post-production-workflow) for assembly details.
