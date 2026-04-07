---
title: "Prompt Templates"
category: "Prompting"
summary: "Ready-to-use prompt templates for common AI video scenarios — interviews, product shots, cinematic sequences."
related:
  - prompt-engineering-fundamentals
  - scene-description-language
  - camera-movements
  - lighting-techniques
---

Templates give you a repeatable starting point. Fill in the blanks, adjust to taste, and iterate from a proven structure.

## Template: Cinematic Establishing Shot

```
[WIDE/AERIAL] shot of [LOCATION] at [TIME OF DAY],
[WEATHER/ATMOSPHERE], [COLOR PALETTE] color grade,
camera [MOVEMENT] slowly, shot on [LENS]mm anamorphic,
[FILM STOCK/DIGITAL LOOK], cinematic aspect ratio
```

**Example:** "Wide aerial shot of a coastal cliffside village at golden hour, misty atmosphere, warm amber and teal color grade, camera drifts slowly forward, shot on 40mm anamorphic, Kodak Vision3 500T film stock, 2.39:1 aspect ratio"

## Template: Character Introduction

```
[SHOT SIZE] of [CHARACTER DESCRIPTION],
[CHARACTER ACTION], in [SETTING],
[LIGHTING SETUP] lighting,
camera [MOVEMENT], [STYLE/MOOD],
[TECHNICAL SPECS]
```

**Example:** "Medium close-up of a weathered fisherman with a salt-and-pepper beard, mending nets with calloused hands, in a dimly lit wooden boathouse, single overhead practical light with warm tungsten glow, camera holds steady with subtle breathing movement, documentary-style, shallow depth of field"

## Template: Product Showcase

```
[SHOT TYPE] of [PRODUCT] on [SURFACE/BACKGROUND],
[LIGHTING STYLE], [CAMERA MOVEMENT] around the product,
[REFLECTIONS/HIGHLIGHTS], [COLOR/MOOD],
studio quality, [FRAME RATE]
```

**Example:** "Tabletop close-up of a matte black wireless earbud case on dark slate stone, soft overhead studio light with a single warm accent light from the left, camera orbits slowly 90 degrees, subtle specular highlights on the glossy logo, clean minimal aesthetic, 60fps smooth motion"

## Template: Interview / Talking Head

```
[SHOT SIZE] of [PERSON DESCRIPTION],
speaking [directly to camera / to interviewer off-screen],
[SETTING], [LIGHTING SETUP],
[HEADROOM and LOOK SPACE direction],
camera [STATIC / SLOW PUSH], [STYLE], [TECHNICAL SPECS]
```

**Example:** "Medium shot of a middle-aged woman with silver-streaked hair and glasses, speaking directly to camera, seated in a bright modern office with bookshelves behind, soft key light from the left with fill from a window on the right, natural headroom, camera holds static with subtle breathing, documentary style, shallow depth of field"

**Tip:** Talking head shots are the most common video format. Keep the background simple and ensure consistent lighting — these clips are often intercut, so any variation between takes is immediately visible.

## Template: Action Sequence

```
[CHARACTER] [ACTION VERB]s through [ENVIRONMENT],
camera [TRACKING STYLE], [SPEED — slow-mo/real-time],
[PARTICLES/EFFECTS], [LIGHTING],
dynamic composition, [STYLE REFERENCE]
```

**Example:** "A parkour runner in a dark hoodie vaults over a concrete barrier in an abandoned industrial yard, camera tracks alongside at full speed, real-time, dust and gravel kicking up from each footfall, harsh afternoon sunlight cutting through broken skylights, dynamic low-angle composition, shot on 24mm wide lens, gritty action film aesthetic"

**Tip:** Action clips are the hardest to generate consistently. Stick to one primary action per clip — "runs and jumps" is fine, but "runs, jumps, catches a ball, and lands" will likely fail. On most platforms, generating at 60fps provides slow-motion flexibility in post. However, some models (Kling, Seedance 2.0) generate more natural motion at 24fps — test both to compare for your platform before committing. See [Motion Dynamics](/wiki/motion-dynamics) for speed control.

## Template: Dialogue / Conversation Scene

```
[SHOT SIZE] of [CHARACTER A DESCRIPTION],
[speaking/listening/reacting] to [CHARACTER B — visible or off-screen],
[SETTING and POSITION — across a table, standing face to face, etc.],
[LIGHTING], [EYELINE — looking screen-left/right],
camera [STATIC or SUBTLE MOVEMENT],
[STYLE/MOOD], [TECHNICAL SPECS]
```

**Example:** "Medium close-up of a young woman with dark curly hair, listening intently with furrowed brow, seated across a candlelit dinner table, warm tungsten key light from the left with soft fill, eyeline directed screen-right, camera holds steady with gentle breathing, intimate drama, shallow depth of field"

**Tip:** For dialogue, generate each character's coverage separately (one person per clip), then intercut in the edit. This gives you far more consistency control than trying to generate both characters in one shot. Match eyelines — if Character A looks screen-right, Character B should look screen-left. See [Continuity Editing](/wiki/continuity-editing) for the 180-degree rule.

## Template: Montage / B-Roll Sequence

```
[SHOT TYPE — time-lapse/slow-mo/macro/aerial] of [SUBJECT/DETAIL],
[ENVIRONMENT and TIME], [ATMOSPHERE],
[CAMERA MOVEMENT], [COLOR GRADE],
[STYLE REFERENCE], [TECHNICAL SPECS]
```

**Example:** "Macro slow-motion shot of coffee being poured into a ceramic mug, steam rising in warm morning light, kitchen background out of focus, camera holds steady, warm amber and cream color grade, shot on ARRI Alexa, shallow depth of field"

**Tip:** B-roll and montage clips are forgiving — they don't need character consistency or dialogue sync. Generate many variants and pick the best. These clips are ideal for hiding continuity breaks between narrative shots.

## Template: Time-Lapse / Hyperlapse

```
[TIME-LAPSE/HYPERLAPSE] of [SUBJECT/SCENE],
[START STATE] transitioning to [END STATE],
over [TIME SPAN — hours/days/seasons],
[CAMERA — locked tripod / moving hyperlapse path],
[LIGHTING CHANGE — dawn to dusk / cloud shadows / city lights],
[STYLE], [TECHNICAL SPECS]
```

**Example:** "Time-lapse of a bustling city intersection from afternoon to midnight, crowds thinning as daylight fades to neon-lit darkness, locked tripod, wide angle, light trails from passing cars, urban documentary style, 4K"

**Tip:** Time-lapses work best when something visibly changes — light, weather, crowds, construction. Specify the start and end state clearly so the model has a direction. Keep camera movement minimal (locked tripod) unless you want a hyperlapse, which adds forward travel. Most AI models handle sky/light transitions better than organic changes like plant growth.

## Template: Abstract / Mood Piece

```
[ABSTRACT SUBJECT — textures, shapes, light, color],
[MOVEMENT — flowing, pulsing, dissolving, expanding],
[COLOR PALETTE], [ATMOSPHERE],
[CAMERA — macro/static/slow drift],
[STYLE REFERENCE — painterly, generative, organic],
[MOOD/EMOTION], [TECHNICAL SPECS]
```

**Example:** "Slowly shifting pools of molten gold and deep indigo ink, organic flowing movement, macro perspective, soft diffused light, painterly aesthetic, meditative and hypnotic mood, shallow depth of field"

**Tip:** Abstract pieces are where AI video excels — no character consistency issues, no physics to violate. Lean into texture, color, and movement. These work well as background visuals, title sequences, or music video interludes. Avoid describing concrete objects; keep the language sensory and fluid.

## Template: Voiceover / Narrator B-Roll

```
[SHOT TYPE — establishing/detail/montage] of [SUBJECT/SCENE],
[ACTION — ambient activity, no dialogue],
[SETTING and TIME], [ATMOSPHERE],
[CAMERA MOVEMENT — slow, contemplative],
[COLOR GRADE / MOOD], [STYLE],
[TECHNICAL SPECS]
```

**Example:** "Slow tracking shot of an empty classroom at dawn, dust motes floating in warm window light, chairs neatly arranged, camera drifts past a chalkboard with faded writing, nostalgic warm color grade, documentary style, shallow depth of field"

**Tip:** B-roll for voiceover narration needs to be visually interesting but not attention-competing — the voice carries the story, the image supports it. Avoid complex character action or anything that demands the viewer's focus. Slow camera movement, atmospheric detail, and mood lighting work best. Generate more clips than you need and select the ones that best match the narration rhythm.

---

Build your own library over time. Every successful generation is a template waiting to happen. See [Scene Description Language](/wiki/scene-description-language) for the vocabulary that makes templates sing, and [Camera Movements](/wiki/camera-movements) for movement options.
