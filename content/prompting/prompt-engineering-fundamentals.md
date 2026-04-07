---
title: "Prompt Engineering Fundamentals"
category: "Prompting"
summary: "Core principles for writing effective AI video prompts — structure, specificity, and iteration."
related:
  - negative-prompts
  - prompt-templates
  - prompt-troubleshooting
  - scene-description-language
  - style-transfer-prompts
---

Great AI video starts with great prompts. Unlike image generation, video prompts must encode **temporal information** — what happens, in what order, and how things move through the frame.

## The Anatomy of a Video Prompt

A well-structured video prompt has five layers:

1. **Subject** — Who or what is in the frame
2. **Action** — What is happening (verb-first phrasing works best)
3. **Setting** — Environment, time of day, weather
4. **Style** — Visual aesthetic, film stock, color grade (see [Style Transfer Prompts](/wiki/style-transfer-prompts))
5. **Camera** — Angle, movement, lens choice (see [Camera Angles](/wiki/camera-angles))

## Specificity Spectrum

Too vague and the model hallucinates; too specific and it fights the constraint. The sweet spot:

```
❌ "A person walking"
✅ "A woman in a red trench coat walks along a rain-slicked Tokyo side street
   at dusk, neon reflections on wet pavement, shot on 35mm film, slight
   handheld movement"
```

Notice how the good prompt covers subject, action, setting, style, and camera in one sentence.

## Temporal Phrasing

Use time-signal words to guide the model through the clip:

- **"begins with… then…"** — sequential actions
- **"slowly"** / **"suddenly"** — pacing cues
- **"camera pulls back to reveal…"** — motivated camera movement
- **"transitions from… to…"** — scene or mood shifts

## Iteration Strategy

Treat prompting like sculpture: start with a rough block, then refine. Generate 3–5 variants, pick the best direction, and evolve that prompt. Keep a [Prompt Template](/wiki/prompt-templates) library so you don't start from zero each time.

## Prompt Length and Aspect Ratio

**Length:** Front-load your most important elements (subject, action, lighting) and put style/technical details at the end. As a rule of thumb:

- **Under 75 words:** Sweet spot for most models. Clear, focused, high adherence.
- **75–150 words:** Still effective. Add style, camera, and atmosphere details here.
- **150–300 words:** Diminishing returns on older models. Newer platforms (Sora, Kling 2.0+) handle longer prompts better, though conciseness still improves adherence. Consider splitting into multiple shots if results feel diluted.
- **300+ words:** Most models actively drop information. Only use this range if your platform explicitly supports long prompts.

**Aspect ratio:** Always specify aspect ratio when your platform supports it. It fundamentally changes composition — a 2.39:1 widescreen frame demands different framing language than a 9:16 vertical. See [Aspect Ratios & Resolution](/wiki/aspect-ratios-resolution) for platform-specific guidance.

## Subject Count and Clarity

Always be explicit about how many subjects are in the scene. Models handle single subjects best, two subjects reasonably, and three or more with increasing inconsistency — though this varies by platform (Seedance 2.0 handles 3+ subjects more reliably than older models).

- **One subject:** Most reliable. Full model attention on a single character.
- **Two subjects:** Specify each clearly and their spatial relationship: `"a man on the left, a woman on the right, facing each other across a table"`.
- **Three+ subjects:** Expect diminishing returns. Consider generating groups as background elements and featuring individuals in close-ups. See [Character Consistency](/wiki/character-consistency-fundamentals) for multi-character strategies.

## Seed and Variation Control

A **seed** is a number that initializes the random noise used during generation. Same prompt + same seed = same (or very similar) output. This is critical for iteration:

- **Lock the seed** when refining a prompt — change only the text, keep the seed fixed, and you can see exactly what each word change does
- **Vary the seed** when you want multiple options from the same prompt — generate 5–10 variations and pick the best
- **Not all platforms expose seeds** — Runway, Kling, and ComfyUI-based workflows expose seed control; Sora and Luma do not currently offer direct seed access

**CFG scale (classifier-free guidance)** controls how strictly the model follows your prompt vs. generating freely:

| CFG Value | Behavior | When to Use |
|---|---|---|
| Low (1–4) | Creative, loose, may ignore prompt details | Abstract, experimental, mood pieces |
| Medium (5–8) | Balanced — follows prompt while maintaining natural variation | Most production work |
| High (9–15) | Strict adherence, but can produce over-saturated or rigid results | When prompt accuracy is critical |
| Very high (15+) | Artifacts, burned colors, unnatural contrast | Rarely useful — avoid unless testing |

**Platform availability:** CFG scale is exposed in ComfyUI/Stable Diffusion-based workflows and some Kling modes. Most commercial platforms (Runway, Sora, Pika) don't expose CFG directly — they set it internally. When CFG isn't available, control adherence through prompt specificity instead: more detailed prompts naturally increase adherence.

**Interaction with prompts:** High CFG amplifies everything in your prompt — including mistakes. If your prompt has a contradiction (e.g., "warm" and "cold blue"), high CFG makes the conflict worse. Clean, specific prompts benefit most from higher CFG values.

## Common Pitfalls

- Listing contradictory styles ("photorealistic anime watercolor")
- Ignoring [Negative Prompts](/wiki/negative-prompts) — telling the model what to avoid is just as important
- Overloading a single clip with too many actions
- Forgetting [lighting](/wiki/lighting-techniques) — the #1 factor for mood
- Writing long, dense prompts without testing shorter versions first — simpler prompts often outperform complex ones
- Not specifying the number of subjects — leaving it ambiguous can cause extra or missing characters
