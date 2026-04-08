---
title: "Seedance 2.0"
category: "Tools & Platforms"
summary: "ByteDance's 4-modality AI video model — native 2K/60fps, physics-aware action, audio synthesis, and the @ reference system."
related:
  - ai-video-tools-overview
  - image-to-video
  - character-consistency-fundamentals
  - prompt-engineering-fundamentals
---

Seedance 2.0 is ByteDance's flagship AI video generation model (March 2026). It's the first major model to support **4-modality input** — text + images + video + audio in a single generation.

## Key Specs

| Spec | Value |
|---|---|
| Resolution | Native 2K (2048×1080 or 1080×2048) |
| FPS | Up to 60fps |
| Duration | 5, 10, or 15 seconds per clip |
| Aspect Ratios | 16:9, 9:16, 4:3, 3:4, 21:9, 1:1 |
| Inputs | Up to 15 assets total — images + video clips + audio + text |

## Strengths

### Physics-Aware Motion

Seedance 2.0 understands force, weight, and friction. Collisions have impact, fabric tears realistically, and characters move with physical believability. Describe the physics you want: "tires smoke as the car drifts 90 degrees" not just "car turns."

### Secondary Motion

Excels at the details that sell realism — hair blowing, water splashing, dust rising, sparks flying, cloth billowing. Always include secondary motion in your prompts.

### Multi-Shot Generation

A single 15-second clip can contain multiple shots with natural cuts and transitions. One generation can feel like an edited sequence. Use time-bracketed beats to structure multi-shot sequences: `[0-4s]: slow push-in` → `[4-9s]: switch to close-up` → `[9-15s]: extreme close-up`. Each beat gets its own primary action. ([GitHub — awesome-seedance-2-prompts](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts))

### Native Audio Synthesis

Generates audio alongside video — dialogue with lip-sync, sound effects timed to action. Single-speaker scenes produce strong results with automatic lip-sync matching. **Caveat:** Multi-character dialogue lip-sync is less reliable — alignment can drift when two or more characters speak in the same clip. For complex dialogue scenes, consider post-production audio layering instead. See [Audio for AI Video](/wiki/audio-for-ai-video) for details.

### @ Reference System

Tag elements in your prompt (`@character`, `@object`, `@style`, `@sound`) and bind them to uploaded reference materials. Faces, clothing, and visual style stay locked across the video.

## Prompt Formula

**Subject + Action + Camera + Scene + Style + Constraints**

```
"@warrior raises a glowing blade overhead, sparks cascading off the edge,
medium shot, slow dolly-in with subtle handheld micro-shake, eye level,
dark battlefield at dusk, volumetric fog catching the last light,
cinematic 2.39:1, 60fps slow motion"
```

**Prompt length:** 50–200 words, sweet spot around 60–100. Too short lacks detail; too long causes the model to ignore elements. ([Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide), [LaoZhang AI Tutorial](https://blog.laozhang.ai/en/posts/seedance-2-how-to-use))

## Critical Rules

These rules are compiled from Seedance 2.0's official prompt guidance and verified third-party interpretations. Sources are cited inline.

### 1. One Primary Action Per Shot

> "One shot, one verb — Multiple motion verbs in a single shot confuse the model."
> — [Redreamality Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/)

> "Avoid extremely complex simultaneous movements."
> — [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide)

**What this means:** One **primary directed action** per shot segment. Physics consequences, secondary motion, and state descriptions do NOT count as competing actions.

**What this does NOT mean:** Literally only one verb in the prompt text.

| OK | Not OK |
|---|---|
| "vaults over a barricade, boots slamming into mud, rain hammering shoulders" | "vaults over a barricade, rolls into a crouch, pulls out a rifle, racks the bolt, peeks over the top" |
| "rides atop an ultralisk, body swaying with each stride, clothing whipping in turbulence" | "leaps off a cliff, catches a mutalisk mid-air, climbs onto its back, grips the spine crest, banks into a dive" |

The first column has one **primary directed action** (vaults, rides) with physics consequences. The second column has **multiple sequential directed actions** competing for model attention.

**Rule of thumb:** If you can describe it as one motion arc with natural consequences, it's one action. If you're scripting a sequence of separate deliberate decisions, you have competing actions.

### 2. Separate Camera From Subject Movement

> "Separate camera movement from subject movement."
> — [Apiyi Official Prompt Guide Interpretation](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html)

Write camera as its own line/clause. Never embed camera instructions inside subject descriptions.

- ✅ "The dancer spins slowly. Camera holds fixed framing."
- ❌ "spinning camera around a dancing person"

### 3. One Primary Camera Instruction

> "Use only one primary camera instruction."
> — [Apiyi Official Prompt Guide Interpretation](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html)

Don't stack "push-in, then pan left, zoom out, orbit around." If you need compound camera movement, write it as timed beats: "Start: slow dolly-in. Then: gentle pan right for the final 2 seconds."

### 4. Lighting Has the Biggest Single Impact

> "Lighting descriptions have the biggest impact on video quality among all prompt elements. If you can only add one element to your prompt to improve quality, add a lighting description."
> — [Apiyi Official Prompt Guide Interpretation](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html)

### 5. Avoid "Fast" as a Keyword

> "Fast is the keyword most likely to degrade video quality. Combining fast camera movement + fast cuts + busy scenes almost guarantees jitter and artifacts — if you need a fast pace, only choose one element to be fast."
> — [Apiyi Official Prompt Guide Interpretation](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html)

### 6. Use Present Tense With Physics Details

Describe force, weight, and friction rather than just naming actions. "Tires smoke as the car drifts 90 degrees" not "car turns."

### 7. Add Intensity Modifiers

"slowly", "violently", "with large amplitude", "with crushing force", "deliberately" — models respond strongly to intensity language.

### 8. Limit Characters to 1–2 Per Generation

> "More than two characters causes identity confusion and consistency loss."
> — [Redreamality Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/)

**Reliability by count:** 1 character is most reliable; 2 characters is medium reliability; 3+ is not recommended. For multi-character sequences, generate separate single- or double-character clips and assemble in post. The @ reference system works within this 1–2 limit — it locks faces and clothing within a clip, not across unlimited characters.

### 9. Multi-Shot via Lens Switch

For multi-shot sequences within a single generation, use time-bracketed beats rather than stacking actions. Each beat gets its own primary action and camera instruction.

```
[0-4s]: Extremely slow push-in shot, subject enters frame...
[4-9s]: Switch to close-up, subject performs action...
[9-15s]: Extreme close-up, detail moment...
```

([GitHub — awesome-seedance-2-prompts](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts))

### 10. Iterate One Variable at a Time

> "Change only one element per iteration to pinpoint what affects results."
> — [Apiyi Official Prompt Guide Interpretation](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html)

## Research-Backed Prompt Principles

These principles come from recent academic papers and complement Seedance's official guidance:

| Principle | Source Paper | How It Applies |
|---|---|---|
| **Causal chain physics** | PhyGenBench, VLIPP | Describe cause → effect → secondary effect: "cannon fires → barrel recoils → shockwave ripples through sand" |
| **Element-level decomposition** | PRIS (15% VBench gain) | Each prompt line is one verifiable element: subject, action, physics, secondary motion, camera, lighting |
| **Spatial fidelity anchors** | RAPO++ | Explicitly state WHERE things are: "left flank", "in the foreground", "overhead" |
| **@reference in BOTH beats** | Multi-Shot Character Consistency | @unit must appear in Beat 2 to lock identity across the natural cut |
| **Training-data density match** | Seedance 1.0 paper | Seedance was trained on precision video captions — match that detail density |
| **Iterative revision** | PRIS, VISTA | Generate 3 variants, identify which elements fail, revise those elements specifically |

## Troubleshooting @ Reference Failures

When @ references don't produce the expected result:

| Symptom | Likely Cause | Fix |
|---|---|---|
| Character doesn't match reference | Reference image too complex or low-res | Use a clean, high-res, front-facing reference with neutral background |
| @ tag ignored entirely | Tag not bound to an uploaded asset | Ensure every `@name` in the prompt has a corresponding uploaded reference image |
| Character consistency breaks in Beat 2 | @ reference missing from second beat | Repeat the `@name` tag in every beat where the character appears |
| Style reference not applied | Style asset uploaded as character reference | Use `@style` tag specifically for style references, not `@character` |
| Face drift despite @ reference | Multiple characters competing for model attention | Reduce to 1 character per clip, or use separate generations and composite |
| Reference image "leaks" into scene | Reference background or props appearing in output | Use a reference image with a plain white/gray background and no props |

## 60fps and Motion Blur

Seedance 2.0's native 60fps output naturally produces less motion blur per frame than 24fps generation — this is correct behavior, not an artifact. Each frame captures a shorter slice of time, so motion appears sharper. If you want a cinematic motion blur look, either specify `"cinematic motion blur"` in your prompt or apply motion blur in post. See [Motion Blur & Shutter Angle](/wiki/motion-blur-shutter-angle) for how frame rate interacts with blur.

## Limitations

- **15-second max** per clip — stitch for longer content
- **Text/logos will be garbled** — add in post
- **No real faces or specific IP names** — triggers content filters
- **Face drift** on very complex multi-shot sequences — use @ references to anchor
- **Audio quality** can be uneven with multi-character dialogue
- **Complex multi-character action** has ~60% success rate — keep scenes focused

## Best For

Epic action sequences, cinematic trailers, physics-heavy motion, product videos, any scene where motion quality and secondary physics matter most. Particularly strong for gaming/esports content where dynamic camera work and particle effects are essential.

## Sources

- [Apiyi — Seedance 2.0 Official Prompt Guide In-depth Interpretation](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html) — Most comprehensive rule-by-rule breakdown with examples
- [Seedance.tv — Seedance 2.0 Prompt Guide: 50+ Examples](https://www.seedance.tv/blog/seedance-2-0-prompt-guide) — Official blog with motion and camera guidance
- [Redreamality — Seedance 2.0 Usage Guide: Complete Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/) — "One shot, one verb" rule and character limits
- [GitHub — awesome-seedance-2-prompts](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts) — 500+ curated prompts with time-bracketed multi-shot examples
- [LaoZhang AI — How to Use Seedance 2.0](https://blog.laozhang.ai/en/posts/seedance-2-how-to-use) — Prompt length and structural guidance
- [CapCut/Dreamina — Seedance 2.0 Prompts](https://dreamina.capcut.com/resource/seedance-2-0-prompt) — Platform-specific tips

See [AI Video Tools Overview](/wiki/ai-video-tools-overview) for comparisons, [Image-to-Video](/wiki/image-to-video) for i2v workflow, and [Character Consistency](/wiki/character-consistency-fundamentals) for the @ reference approach.
