---
title: "Character Reference Sheets"
category: "Character Consistency"
summary: "How to create and use character reference sheets — turnaround views, expression sheets, and outfit boards."
related:
  - character-consistency-fundamentals
  - face-consistency-methods
  - wardrobe-consistency
---

A character reference sheet is a visual specification for your character. It's the document you hand every generation to say "this is who we're creating."

## Technical Requirements

- **Resolution:** Minimum 1024×1024, preferably 2K+ (2048×2048). Higher resolution gives the video model more detail to anchor on.
- **Background:** Plain white or light gray with no texture. Leave at least 20% padding around the character.
- **Lighting:** Even, front-facing three-point lighting. Avoid harsh shadows on the face — they bake into the reference and may carry into generated video.
- **Format:** PNG (lossless) preferred over JPEG. Compression artifacts in the reference become artifacts in the video.

## What to Include

### Turnaround View

Front, 3/4, side, and back views of the character on a neutral background. Multi-view turnarounds are one of the harder AI image tasks. A single prompt may not produce all views reliably — most image generators struggle with consistent multi-view layout. Approaches in order of reliability:

1. **Specialized multi-view tools** — CharacterGen, Era3D, Unique3D, or multi-view diffusion pipelines (successors to earlier tools like Zero123 and SyncDreamer) produce the most consistent turnarounds. The space evolves rapidly — check for the latest multi-view generation tools before starting
2. **Generate views separately** — Generate front, 3/4, side, and back as individual images from the same seed/reference, then composite into a single sheet
3. **Single-prompt attempt** — Works sometimes, especially in Midjourney, but expect to regenerate several times

```
"Character turnaround sheet, [CHARACTER DESCRIPTION],
front view, three-quarter view, side profile, and back view,
white background, even studio lighting, full body,
reference sheet style, high detail, 2K resolution"
```

### Expression Sheet

6–9 head shots showing different emotions: neutral, happy, sad, angry, surprised, thoughtful. Include 2–3 intensity levels for key emotions (e.g., slight smile → broad grin → laughing) to give the model a range to work with.

### Outfit/Wardrobe Board

Each distinct outfit shown clearly. Include fabric texture details and color swatches. See [Wardrobe Consistency](/wiki/wardrobe-consistency) for detail.

## Reference Sheet Workflow

1. Generate base character in an AI image tool (Midjourney, DALL-E, Flux)
2. Create turnaround sheet from the best result
3. Generate expression sheet maintaining the same reference
4. Use these sheets as image references when generating video clips
5. Keep the same text description alongside the visual reference — visual + text together produces the strongest consistency

## Platform-Specific Notes

Different video platforms handle character references differently:

- **Seedance 2.0:** Use the `@character` reference system to bind a reference image to a name in your prompt. See [Seedance 2.0](/wiki/seedance-2) for details.
- **Runway:** Upload reference images as "image input" alongside your text prompt.
- **Kling:** Supports face reference upload for character locking.

Always check your platform's current documentation — reference features are actively evolving.

For face-specific techniques, see [Face Consistency Methods](/wiki/face-consistency-methods). For the full production pipeline, see [Character Consistency Fundamentals](/wiki/character-consistency-fundamentals).
