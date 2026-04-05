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
| Inputs | Up to 9 images + 3 video clips + 3 audio clips + text |

## Strengths

### Physics-Aware Motion

Seedance 2.0 understands force, weight, and friction. Collisions have impact, fabric tears realistically, and characters move with physical believability. Describe the physics you want: "tires smoke as the car drifts 90 degrees" not just "car turns."

### Secondary Motion

Excels at the details that sell realism — hair blowing, water splashing, dust rising, sparks flying, cloth billowing. Always include secondary motion in your prompts.

### Multi-Shot Generation

A single 15-second clip can contain multiple shots with natural cuts and transitions. One generation can feel like an edited sequence.

### Native Audio Synthesis

Generates audio alongside video — dialogue with lip-sync, sound effects timed to action. No post-production audio layering needed.

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

## Critical Rules

1. **One motion verb per shot** — multiple competing actions create chaos
2. **Separate camera movement from subject movement** — mixing them is the #1 mistake
3. **Lighting has the biggest single impact on quality** — always specify it
4. **Avoid "fast" as a keyword** — it degrades quality. Make ONE element fast, not everything
5. **Use present tense** with physics-aware details
6. **Add intensity modifiers** — "slowly", "violently", "with large amplitude"

## Limitations

- **15-second max** per clip — stitch for longer content
- **Text/logos will be garbled** — add in post
- **No real faces or specific IP names** — triggers content filters
- **Face drift** on very complex multi-shot sequences — use @ references to anchor
- **Audio quality** can be uneven with multi-character dialogue

## Best For

Epic action sequences, cinematic trailers, physics-heavy motion, product videos, any scene where motion quality and secondary physics matter most. Particularly strong for gaming/esports content where dynamic camera work and particle effects are essential.

See [AI Video Tools Overview](/wiki/ai-video-tools-overview) for comparisons, [Image-to-Video](/wiki/image-to-video) for i2v workflow, and [Character Consistency](/wiki/character-consistency-fundamentals) for the @ reference approach.
