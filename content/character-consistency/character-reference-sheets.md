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

## Platform-Specific Workflows

Each platform handles character references differently. Choose your workflow based on the platform you're generating on:

### Seedance 2.0 — `@` Reference System

Seedance uses named references bound to uploaded images. This is the most structured approach:

1. Upload your character reference sheet as an image asset
2. Assign it a name using `@character_name` syntax in your prompt
3. Reference that name throughout your prompt: `"@hero_character walks toward camera"`
4. For multi-character scenes, bind each character separately: `@character_a`, `@character_b`

**Strengths:** Explicit binding between name and image; reusable across clips; supports up to 2 characters per generation reliably. **Limitations:** 3+ characters drops to ~60% success; the reference image must be a clear, well-lit single-subject shot.

See [Seedance 2.0](/wiki/seedance-2) for full `@` reference syntax.

### Runway Gen-4 — Image Input + Character Lock

1. Upload your reference sheet as an "image input" alongside your text prompt
2. Enable Character Lock (if available in your plan) to anchor facial features across generations
3. Describe the character in text to reinforce the visual reference
4. For multi-shot consistency, use the same reference image and identical text description for every clip

**Strengths:** Strong style adherence; character lock reduces facial drift. **Limitations:** Character lock availability varies by plan tier; works best with front-facing, well-lit references.

### Kling 2.0 — Face Reference Upload

1. Upload a clear, front-facing headshot as a face reference (separate from the main image input)
2. The model locks onto facial geometry and skin tone from the reference
3. Pair with a text description of clothing and body type — Kling's face lock handles the face; you handle everything else in text

**Strengths:** Best-in-class face consistency for single characters; works well across different poses and lighting. **Limitations:** Face lock is strongest for realistic human faces; stylized or non-human characters may not lock as reliably. One face reference per generation.

### Choosing a Platform for Character Work

| Need | Best Platform |
|---|---|
| Multi-clip project with 1-2 recurring characters | Seedance 2.0 (@ refs) or Kling (face lock) |
| Strongest facial consistency | Kling 2.0 |
| Style + character together | Runway Gen-4 |
| Non-human or stylized characters | Runway (image input) or Seedance (@ refs) |

Always check your platform's current documentation — reference features are actively evolving.

For face-specific techniques, see [Face Consistency Methods](/wiki/face-consistency-methods). For the full production pipeline, see [Character Consistency Fundamentals](/wiki/character-consistency-fundamentals).
