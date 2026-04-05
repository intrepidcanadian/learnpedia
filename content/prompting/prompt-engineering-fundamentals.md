---
title: "Prompt Engineering Fundamentals"
category: "Prompting"
summary: "Core principles for writing effective AI video prompts — structure, specificity, and iteration."
related:
  - negative-prompts
  - prompt-templates
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

## Common Pitfalls

- Listing contradictory styles ("photorealistic anime watercolor")
- Ignoring [Negative Prompts](/wiki/negative-prompts) — telling the model what to avoid is just as important
- Overloading a single clip with too many actions
- Forgetting [lighting](/wiki/lighting-techniques) — the #1 factor for mood
