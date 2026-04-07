---
title: "Storytelling & Narrative Structure"
category: "Workflows"
summary: "How to structure stories for AI video — adapting three-act structure, micro-narratives, and visual storytelling to 5-15 second clip constraints."
related:
  - shot-list-planning
  - multi-shot-workflows
  - continuity-editing
  - scene-description-language
  - prompt-templates
---

AI video tools generate clips, not stories. The narrative structure lives in your head and your shot list — the model only executes one moment at a time. This article covers how to think about story when your building blocks are 5-15 second fragments.

## The Constraint Shapes the Story

Traditional filmmaking has near-unlimited shot duration. AI video currently maxes at 5-15 seconds per clip. This constraint fundamentally changes how you structure narrative:

- **Every clip must carry one clear beat** — One emotion, one action, one revelation. If a clip tries to do two things, both suffer.
- **Cuts do the heavy lifting** — Story progression happens between clips, in the edit, not within a single generation.
- **Visual clarity replaces dialogue** — AI-generated dialogue is improving (Seedance 2.0 supports lip-synced audio for single-speaker scenes), but multi-character dialogue can drift, and voiceover narration in post remains more reliable and forgiving. Default to visual storytelling — show, don't tell.

## Micro-Narrative Structure

For short-form AI video (30 seconds to 2 minutes), adapt the three-act structure to work in miniature:

### Setup (1-3 clips)

Establish the world, the character, and the status quo. One wide establishing shot + one character introduction is often enough.

- Establishing shot: Where are we? When is it? What's the mood?
- Character intro: Who is this person? What are they doing?

### Confrontation (2-5 clips)

Something changes. A challenge, a discovery, a shift. This is where your strongest visual moments live.

- The inciting moment: What disrupts the status quo?
- Rising action: How does the character respond?
- Peak moment: The visual climax — the most striking image in your sequence.

### Resolution (1-2 clips)

A new equilibrium. Doesn't need to be "resolved" — an open ending works. The last image lingers.

- Aftermath: What's different now?
- Final frame: What feeling does the audience leave with?

### Example: 60-Second Micro-Narrative

| Beat | Clip | Shot | Duration |
|---|---|---|---|
| Setup | 1 | ELS: Foggy mountain trail at dawn, peaks in distance | 6s |
| Setup | 2 | MS: Hiker pauses, looks at a fork in the path | 5s |
| Confrontation | 3 | CU: Hiker's face, deliberating | 4s |
| Confrontation | 4 | POV: Two paths — one steep and sunlit, one shaded and gentle | 5s |
| Confrontation | 5 | MS: Hiker takes the steep path, begins climbing | 5s |
| Confrontation | 6 | CU: Hands gripping rock, boots finding footholds | 4s |
| Confrontation | 7 | LS: Hiker halfway up, mist swirling below | 6s |
| Confrontation | 8 | MS: Hiker stumbles, catches balance, pushes forward | 5s |
| Confrontation | 9 | CU: Hiker's face — exhausted but resolute, sweat and fog on skin | 4s |
| Resolution | 10 | ELS: Hiker emerges above the clouds, golden light floods the frame | 6s |
| Resolution | 11 | MCU: Hiker turns back to look down, quiet smile | 5s |
| Resolution | 12 | ELS: Tiny figure on the summit, vast sky, sun breaking through | 5s |

Twelve clips, ~60 seconds of generation, tells a complete story with no dialogue.

## Visual Storytelling Principles

When dialogue is unreliable, lean on these purely visual techniques:

### Show Internal State Through Action

Don't describe what a character feels — show what they do because of that feeling:

- **Nervous:** fidgets, avoids eye contact, wrings hands
- **Determined:** squared shoulders, steady gaze, purposeful stride
- **Grief:** slow movement, downcast eyes, still posture

### Use Environment as Metaphor

The setting can carry emotional weight that characters can't express through generated dialogue:

- A character alone in a vast empty landscape = isolation
- A character in a cramped, cluttered room = feeling trapped
- Weather shifts (clouds clearing, rain starting) = emotional transition

### Let the Edit Tell the Story

The juxtaposition of two clips creates meaning that neither clip has alone (the Kuleshov effect):

- Face + food = hunger
- Face + coffin = grief
- Face + child = tenderness

Generate the face reaction clip once, then pair it with different context clips to create different emotional readings.

## Pacing for AI Video

### Fast-Paced (Action, Trailers, Music Videos)

- 1-3 second clips
- High cut frequency
- Varied shot sizes (wide → close → wide)
- Camera movement in every clip
- Music drives the rhythm — cut on beats

### Slow-Paced (Drama, Mood, Art)

- 5-10 second clips
- Fewer cuts, longer takes
- Subtle or no camera movement
- Static frames with environmental motion (wind, light change)
- Silence or ambient sound between music cues

### Mixed Pacing (Most Narratives)

Start slow (establish), accelerate (build tension), climax (fastest cuts), then slow again (resolve). The pacing arc mirrors the emotional arc.

## Story Structures Beyond Three-Act

### Montage / Mood Reel

No linear narrative. A collection of visually or thematically linked clips set to music. Each clip is self-contained. Unity comes from consistent style, color, and subject matter. This is the most forgiving structure for AI video because there's no continuity requirement between clips.

### Before/After

Two-state structure. Show a "before" state, then an "after" state. The audience infers the transformation. Works well for product videos, transformations, time passage.

### Parallel Storylines

Intercut between two subjects or locations. Each storyline is generated independently, then woven together in the edit. Consistency within each thread matters; consistency between threads is less critical because the audience expects different worlds.

### Loop / Circular

End where you began. The first and last clips bookend the sequence, often with a subtle change that rewards the viewer for paying attention. Satisfying for short-form social content.

## Planning Your Story

Before generating a single clip:

1. **Write the story in one sentence** — If you can't, it's too complex for the format.
2. **Identify 3-5 key visual beats** — What are the images the audience must see?
3. **Build a [shot list](/wiki/shot-list-planning)** — Every beat becomes one or more shots.
4. **Define the emotional arc** — What does the audience feel at the start, middle, and end?
5. **Lock the visual style** — Color, lighting, lens. See [Style Transfer](/wiki/style-transfer-prompts) and [Color Grading](/wiki/color-grading-prompts).
6. **Write prompts from the shot list** — Each shot becomes a prompt following [Prompt Templates](/wiki/prompt-templates).

The story should be complete on paper before you open any AI tool. Generation is execution, not exploration — unless you're deliberately experimenting with a [montage / mood reel](#montage--mood-reel) approach.

See [Multi-Shot Workflows](/wiki/multi-shot-workflows) for the end-to-end production pipeline, [Shot List Planning](/wiki/shot-list-planning) for coverage, and [Continuity Editing](/wiki/continuity-editing) for making cuts between clips feel seamless.
