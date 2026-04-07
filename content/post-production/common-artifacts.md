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

Every AI video tool produces artifacts. Knowing what they are and how to fight them separates amateur from polished output. **Prevention is cheaper than repair** — detailed prompts, shorter clips, and strong reference images prevent more artifacts than any post-production tool can fix.

## Artifact Catalog

### Morphing / Shape-Shifting

Objects or faces gradually change shape across frames. **Fix:** Stronger subject description, reference images, shorter clips, face-lock features.

### Flickering

Rapid brightness or color changes between frames. **Fix:** Specify consistent lighting in prompt, use deflicker tools in post. Recommended tools by workflow:
- **DaVinci Resolve:** Temporal Noise Reduction (Studio), Color Stabilizer (free), or Neat Video OFX plugin
- **After Effects:** Auto Levels, DEFlicker plugin (RE:Vision Effects), or Flicker Free (Digital Anarchy)
- **FFmpeg (free/CLI):** `deflicker` filter for batch processing — `ffmpeg -i input.mp4 -vf deflicker=size=5 output.mp4`
- **Topaz Video AI:** Built-in stabilization handles mild flicker as a side effect of its temporal processing

### Eye Jitter / Micro-Movement

Eyes make tiny unnatural movements frame-to-frame, creating an unsettling effect even when the rest of the face is stable. This is one of the most viewer-noticeable artifacts. **Fix:** Specify "steady gaze" or "fixed eye contact" in prompt; for post-production, use frame-by-frame stabilization on the eye region, or re-generate the clip.

### Extra / Missing Limbs

Hands with extra fingers or arms appearing/disappearing. Newer models (Seedance 2.0, Runway Gen-4) have reduced hand errors for simple poses, but hand artifacts remain the single most common AI video artifact — especially when hands perform complex interactions (gripping objects, interlacing fingers, gesturing) or appear at extreme angles. **Fix:** Avoid overlapping hand interactions, use [negative prompts](/wiki/negative-prompts) ("deformed hands, extra fingers"), re-generate. For minor issues, inpainting can fix individual frames.

### Temporal Inconsistency

Elements change between clips (hair color shifts, clothing changes). **Fix:** Detailed character bibles, reference images, [character consistency techniques](/wiki/character-consistency-fundamentals).

### Physics Violations

Objects floating, water flowing upward, impossible reflections. **Fix:** Describe physics explicitly in prompt, choose simpler actions.

### Text/Logo Corruption

Any text in frame will be garbled. **Fix:** Add text in post-production, never rely on AI to generate readable text.

### Motion Smear / Ghosting

Fast-moving objects leave translucent trails or duplicate outlines across frames. Distinct from motion blur (which is natural and expected) — smearing looks like a failed composite where the object exists in two places at once. Most visible on hands, limbs, and fast-turning heads. **Fix:** Reduce the speed of action in your prompt (avoid rapid motion), generate at higher frame rates where supported, use shorter clip durations. In post, frame-by-frame inpainting or masking can clean individual ghosted frames, but re-generation is usually faster.

### Platform Compression Artifacts

AI video platforms compress output for delivery (typically H.264/H.265). This introduces banding in gradients (especially skies and dark scenes), blockiness in low-contrast areas, and mosquito noise around high-contrast edges. These aren't generation artifacts — they're delivery artifacts. **Fix:** Download at the highest quality/bitrate your platform offers, request ProRes or lossless output if available, or use the platform's API for higher-bitrate exports. For gradient banding specifically, adding subtle film grain in post masks the banding perceptually.

### Color Fringing / Bleeding

Color spills across object edges or bleeds into adjacent areas, especially in high-contrast scenes. **Fix:** Reduce color saturation in prompt, use chroma keying or color isolation in post to clean edges.

### Continuity Flicker (Cross-Clip)

Slight brightness or color temperature changes between consecutive clips in a multi-shot sequence, even when prompts are identical. Distinct from within-clip flickering — this happens at cut points. **Fix:** Use verbatim lighting descriptions across all clips in a scene, apply color matching in your editor (DaVinci Resolve's Shot Match, Premiere's Color Match), and maintain consistent reference images via [end-frame chaining](/wiki/image-to-video) or [multi-shot workflows](/wiki/multi-shot-workflows).

### Temporal Warping / "Jelly" Effect

Static backgrounds or objects wobble, ripple, or appear to breathe — the "jelly" look. Distinct from flickering; this is smooth, wave-like distortion rather than sudden changes. Common in areas that should be perfectly still (buildings, walls, ground). **Fix:** Use image-to-video with a strong reference frame to anchor static elements, specify "static background" or "locked-off camera" in prompt, shorten clip duration, or apply frame stabilization in post targeting affected regions. Recommended stabilization tools:
- **DaVinci Resolve:** Tracker → Stabilizer (target the jelly region with a power window)
- **After Effects:** Warp Stabilizer (set to "Stabilize Only," NOT "Smooth Motion" which can worsen jelly)
- **Topaz Video AI:** Stabilization module handles mild jelly as part of its temporal processing
- **ReelSteady (GoPro plugin):** Designed for rolling shutter but effective on jelly-like warping in some cases

## Artifact Priority Matrix

Not all artifacts are worth fixing. Use this to decide where to spend your time:

| Priority | Artifact | Why |
|---|---|---|
| **Fix immediately** | Face morphing, eye jitter | Viewers are hypersensitive to face issues |
| **Fix if prominent** | Flickering, temporal inconsistency, continuity flicker | Breaks immersion but can be subtle |
| **Fix or re-generate** | Extra limbs, physics violations | Easier and cheaper to re-generate than repair via inpainting |
| **Fix if distracting** | Temporal warping / jelly | Very common; viewers notice wobbly backgrounds |
| **Ignore if minor** | Slight color fringing, background texture shifts | Viewers rarely notice in motion |

## Prevention Over Cure

The best artifact strategy is to avoid them in generation:

- **Shorter clips** (5–8 seconds) have fewer artifacts than longer ones
- **Detailed subject descriptions** reduce morphing
- **Consistent lighting language** in prompts reduces flickering
- **Simple hand positions** (at sides, on table) avoid limb errors
- **Strong reference images** via [image-to-video](/wiki/image-to-video) anchor the model

## The 80/20 Rule

Fix the worst 20% of artifacts and the result looks 80% better. Focus on face stability and temporal consistency first — viewers are most sensitive to these.

See [Post-Production Workflow](/wiki/post-production-workflow) for the full fix pipeline and [Upscaling & Enhancement](/wiki/upscaling-enhancement) for quality improvement.
