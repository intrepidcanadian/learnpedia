---
title: "Lighting Techniques"
category: "Lighting"
summary: "Key light, fill light, rim light, practical lighting — the setups that make or break AI video quality."
related:
  - natural-lighting
  - color-grading-prompts
  - scene-description-language
  - mood-lighting
---

Lighting is the single most important factor in video quality. A perfectly composed shot with bad lighting looks amateur. A simple shot with great lighting looks professional.

## Three-Point Lighting

The foundation of all lighting setups:

1. **Key Light** — Primary light source. Sets the overall exposure and mood. Usually placed 45° to one side.
2. **Fill Light** — Softer, fills in shadows from the key. Controls contrast ratio.
3. **Back/Rim Light** — Behind the subject. Creates edge separation from background.

Prompt: `"three-point lighting setup, hard key light at 5600K from 45-degrees camera-left, subtle cool fill in shadows, warm 3000K rim light from behind creating edge separation"`

Including Kelvin color temperatures as a supplementary cue can improve lighting consistency. Most AI video models respond more reliably to descriptive language ("warm tungsten," "cool daylight") than to numeric Kelvin values alone — use both together for best results: `"warm tungsten light, 3200K"`. The descriptive words do the heavy lifting; the number reinforces the target. See [Color Grading Prompts](/wiki/color-grading-prompts) for detailed temperature control.

## Key Lighting Styles

| Style | Description | Prompt Language |
|---|---|---|
| Rembrandt | Triangle of light on shadow-side cheek | `"Rembrandt lighting, triangle of light on cheek"` |
| Butterfly | Key light directly above/front, butterfly shadow under nose | `"butterfly lighting, glamour lighting from above"` |
| Split | Key light at 90°, half face lit, half in shadow | `"split lighting, half face in shadow"` |
| Loop | Key at ~30°, small nose shadow loops toward cheek | `"loop lighting, soft key light slightly off-axis"` |

## Light Quality

- **Hard light** — Direct, creates defined shadows. `"hard direct light, sharp shadows"`
- **Soft light** — Diffused, wrapping. `"soft diffused light, gentle shadows"`

## Practical Lighting

Practical lights are visible light sources within the scene — lamps, candles, neon signs, screens, firelight. They ground a scene in reality and give AI models a clear motivation for where light comes from.

- **Lamps and fixtures:** `"warm table lamp casting a pool of light, rest of room in shadow"`
- **Candles/fire:** `"lit by candlelight, warm flickering glow, deep shadows beyond the flame"`
- **Screens and monitors:** `"face illuminated by cold blue monitor glow in dark room"`
- **Neon and signage:** `"neon sign casting pink and blue reflections on wet pavement"`

Practical lights work best when they're the dominant light source in frame. If you describe a candle-lit room but also ask for bright even lighting, the model will likely ignore the candle.

## Key-to-Fill Ratio

The brightness difference between key and fill light controls contrast and mood:

| Ratio | Look | Use For |
|---|---|---|
| 1:1 | Flat, even, no shadows | Comedy, corporate, beauty |
| 2:1 | Gentle contrast, natural | Interviews, dialogue scenes |
| 4:1 | Noticeable shadows, dimensional | Drama, narrative scenes |
| 8:1+ | Deep shadows, high contrast | Film noir, thriller, horror |

Prompt example: `"dramatic side lighting with deep shadows, high contrast ratio, film noir"` vs. `"even flat lighting, soft fill, minimal shadows, commercial look"`

## Light Direction and Distance

Light direction carries meaning: front lighting flattens features (clean, commercial), side lighting adds dimension (dramatic, moody), and back lighting creates silhouettes (mysterious, epic).

Light falloff matters too — a light source close to the subject creates rapid falloff (bright face, dark background), while a distant source illuminates more evenly. In prompts, control this with placement cues: `"single lamp close to the subject's face, rapid falloff into darkness"` vs. `"even ambient light from overhead"`.

## Motivated Lighting

Motivated lighting means every light source in frame has a visible or implied real-world reason — a window, a lamp, a campfire, a streetlight. This is the standard in narrative filmmaking and produces the most believable AI video results.

- **Why it matters for AI:** When you describe a light source without motivation, the model may place it inconsistently or create lighting that feels artificial. Motivated lighting gives the model a spatial anchor.
- **How to prompt:** Name the source explicitly: `"warm light from a desk lamp on the left"`, `"cold daylight streaming through a window behind the subject"`, `"face illuminated by the glow of a phone screen"`
- **Unmotivated light** (light with no visible source) is used deliberately in music videos, fashion, and stylized work: `"dramatic blue rim light, no visible source, music video aesthetic"`. Use it intentionally, not by accident.

## Colored Light and Gels

Colored light (traditionally achieved with gel filters over lights) adds strong stylistic character. AI models respond well to explicit color + source descriptions:

| Color | Mood | Prompt Language |
|---|---|---|
| Red / deep amber | Danger, passion, heat | `"deep red light washing over the scene, dramatic"` |
| Blue | Cold, clinical, moonlight | `"cold blue light from above, sterile atmosphere"` |
| Cyan + magenta | Sci-fi, neon, modern | `"cyan and magenta gel lighting, futuristic"` |
| Green | Eerie, toxic, institutional | `"sickly green fluorescent overhead, institutional"` |
| Orange / warm amber | Firelight, sunset, warmth | `"warm amber light as if from a nearby fire"` |

**Tips for colored light:**
- Specify which parts of the scene each color hits: `"blue gel from the left, warm amber from the right"` gives the model clear spatial placement
- Two-color setups (complementary colors from opposite sides) are the most reliable and visually striking
- Three or more gel colors in one shot tend to produce muddy, confused results — stick to two max
- Colored light affects skin tones significantly — test on close-ups before committing

## Avoiding Lighting Conflicts

Conflicting light descriptions cause flickering and incoherent results. AI models struggle to balance competing instructions:

- **Don't mix contradictory moods:** `"golden hour + clear overcast daylight"` is contradictory. Pick one: `"golden hour with light cloud diffusion"`.
- **Don't fight practical lights:** `"bright even lighting with a subtle candle"` — the model will choose one. If the candle is your light source, make it dominant: `"face illuminated only by warm candlelight, no other light sources"`.
- **Don't combine opposing temperatures:** `"warm tungsten + cool blue fill"` works only if you're specific about which dominates. Without hierarchy, the model averages them into a flat, ambiguous look.

When in doubt, describe one clear light source and let the model infer shadows, rather than describing multiple sources that might compete.

## Temporal Lighting Consistency

Within a single AI-generated clip, frame-to-frame lighting consistency is a common challenge:

- **Shadow direction may shift** unintentionally across frames as the model lacks true spatial memory
- **Brightness can fluctuate** between frames, especially in scenes with complex or mixed lighting
- **Flickering is most visible** with hard light sources and high-contrast setups — soft, even lighting is more forgiving

To minimize temporal artifacts:

- Use specific, locked lighting descriptions repeated verbatim in your prompts
- Prefer soft, even lighting when temporal consistency is critical — hard light with sharp shadows is more prone to frame-to-frame drift
- Keep lighting descriptions locked verbatim across clips for multi-shot projects
- Prefer a single dominant light source over complex multi-light setups
- Modern models (Seedance 2.0, Runway Gen-4) have improved temporal consistency, but locked lighting descriptions still help
- If flickering still occurs, post-production deflicker tools (Topaz Video AI, DaVinci Resolve) can smooth frame-to-frame inconsistencies

See [Natural Lighting](/wiki/natural-lighting) for outdoor setups, [Mood Lighting](/wiki/mood-lighting) for emotional presets, and [Color Grading](/wiki/color-grading-prompts) for post-production color work.
