---
title: "Scene Description Language"
category: "Prompting"
summary: "The vocabulary and grammar of describing scenes for AI video — borrowed from screenwriting and cinematography."
related:
  - prompt-engineering-fundamentals
  - prompt-templates
  - camera-angles
  - lighting-techniques
---

AI video models respond to the language of filmmaking. Learning this vocabulary is like learning to speak the model's native tongue.

## Shot Sizes

- **ECU (Extreme Close-Up)** — Eyes only, texture of skin. Emotion, intensity.
- **CU (Close-Up)** — Face fills frame. Intimacy, reaction.
- **MCU (Medium Close-Up)** — Head and shoulders. Dialogue, connection.
- **MS (Medium Shot)** — Waist up. Body language visible.
- **MLS (Medium Long Shot)** — Knees up. Character in context.
- **LS (Long Shot)** — Full body with environment. Establishing character.
- **ELS (Extreme Long Shot)** — Character is small in vast landscape. Scale, isolation.

## Atmosphere Words That Models Understand

| Mood | Effective Descriptors |
|---|---|
| Dreamy | hazy, ethereal, soft focus, gauzy, diffused light |
| Gritty | handheld, high contrast, desaturated, grain, raw |
| Epic | sweeping, dramatic sky, volumetric light, orchestral mood |
| Intimate | shallow depth of field, warm tones, close framing, quiet |
| Eerie | fog, underlit, long shadows, muted palette, stillness |
| Melancholic | overcast, muted blues, rain-streaked, slow pace, solitary |
| Tense | tight framing, sharp shadows, shallow breathing (subtle camera sway), handheld tremor, silence |
| Joyful | bright, warm sunlight, vibrant colors, open framing, natural movement |
| Mysterious | silhouette, partial reveal, smoke, rim light, obscured features |
| Nostalgic | soft grain, faded warmth, golden tones, shallow focus, gentle lens flare |

## Time and Transition Language

Verbs and adverbs that control pacing:

- **Slow:** drifts, floats, lingers, crawls, settles, unfolds
- **Medium:** follows, tracks, observes, accompanies, steadily
- **Fast:** whips, snaps, rushes, bursts, cuts to, jolts
- **Transitional:** dissolves into, fades to, morphs into, reveals, emerges from

Pacing cues work best when paired with camera movement: `"camera lingers on the empty chair"` tells the model both duration and emotional weight. For longer clips, pacing words can define rhythm across the shot: `"camera drifts slowly, then suddenly whips to the right"`.

## Object and Environment Movement

Beyond camera and character motion, describing how elements in the scene move adds realism and depth:

- **Fluid:** flowing, streaming, cascading, pouring, rippling, surging, pooling
- **Air/particles:** swirling, billowing, drifting, floating, spiraling, scattering, settling
- **Fabric/organic:** fluttering, billowing, swaying, rustling, whipping, draping
- **Impact/energy:** shattering, exploding, sparking, crackling, pulsing, radiating
- **Light:** flickering, strobing, sweeping, glinting, reflecting, refracting

These secondary motion descriptors make scenes feel alive. A `"rain-soaked alley"` is static; `"rain cascading off awnings, puddles rippling under footsteps, steam rising from a grate"` tells the model what's moving and how.

## Spatial Language and Blocking

Where subjects and objects sit in the frame is critical for composition. Use spatial vocabulary to control placement:

- **Frame position:** `"screen left"`, `"screen right"`, `"centered"`, `"off-center"`, `"rule of thirds position"`
- **Depth placement:** `"in the foreground"`, `"in the background"`, `"midground"`, `"deep in frame"`
- **Relative positioning:** `"facing each other"`, `"back to back"`, `"side by side"`, `"one behind the other"`
- **Negative space:** `"isolated figure"`, `"vast emptiness around"`, `"surrounded by open space"`, `"small in frame"`

Spatial cues combined with shot size produce precise framing: `"medium shot, subject screen left, empty doorway screen right"` gives the model both scale and composition.

## Assembled Examples

The vocabulary above is most powerful when combined. Here's how shot size + mood + pacing come together:

**Eerie reveal:**
`"Extreme long shot of a solitary figure standing at the edge of a fog-covered lake, underlit by moonlight, long shadows stretching across still water, camera drifts forward slowly, muted palette, silence"`

**Joyful character moment:**
`"Close-up of a child's face breaking into a wide smile, bright warm sunlight, vibrant colors, camera holds steady with gentle breathing movement, soft focus background of a sunflower field"`

**Tense action beat:**
`"Medium shot of a man in a dark corridor, tight framing, sharp shadows from a single overhead fluorescent light, camera snaps to follow as he turns suddenly, handheld tremor, shallow depth of field"`

**Romantic / intimate:**
`"Medium close-up of two silhouettes leaning toward each other at a rain-streaked window, warm amber backlight, shallow depth of field, camera holds steady, soft focus on the background city lights, quiet and tender"`

**Introspective moment:**
`"Close-up of a young man staring into a half-empty coffee cup, overcast diffused light from a window, muted blues and grays, camera slowly drifts closer, minimal movement, solitary and reflective"`

Notice how each example layers 3–4 vocabulary categories without overcrowding. Lead with framing, add mood words, then close with camera and technical cues.

Combine these with [Camera Angles](/wiki/camera-angles) and [Lighting Techniques](/wiki/lighting-techniques) for complete scene control. See [Prompt Templates](/wiki/prompt-templates) for how to assemble these elements.
