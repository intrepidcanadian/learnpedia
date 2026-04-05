---
title: "Common Artifacts & How to Fix Them"
category: "Post-Production"
summary: "Morphing, flickering, extra limbs, temporal inconsistency — identifying and mitigating common AI video artifacts."
related:
  - negative-prompts
  - post-production-workflow
  - upscaling-enhancement
  - motion-dynamics
---

Every AI video tool produces artifacts. Knowing what they are and how to fight them separates amateur from polished output.

## Artifact Catalog

### Morphing / Shape-Shifting

Objects or faces gradually change shape across frames. **Fix:** Stronger subject description, reference images, shorter clips, face-lock features.

### Flickering

Rapid brightness or color changes between frames. **Fix:** Specify consistent lighting in prompt, use deflicker tools in post (DaVinci Resolve, After Effects).

### Extra / Missing Limbs

Hands with 6 fingers, arms appearing/disappearing. **Fix:** Avoid complex hand interactions, use [negative prompts](/wiki/negative-prompts) ("deformed hands, extra fingers"), re-generate.

### Temporal Inconsistency

Elements change between clips (hair color shifts, clothing changes). **Fix:** Detailed character bibles, reference images, [character consistency techniques](/wiki/character-consistency-fundamentals).

### Physics Violations

Objects floating, water flowing upward, impossible reflections. **Fix:** Describe physics explicitly in prompt, choose simpler actions.

### Text/Logo Corruption

Any text in frame will be garbled. **Fix:** Add text in post-production, never rely on AI to generate readable text.

## The 80/20 Rule

Fix the worst 20% of artifacts and the result looks 80% better. Focus on face stability and temporal consistency first — viewers are most sensitive to these.

See [Post-Production Workflow](/wiki/post-production-workflow) for the full fix pipeline and [Upscaling & Enhancement](/wiki/upscaling-enhancement) for quality improvement.
