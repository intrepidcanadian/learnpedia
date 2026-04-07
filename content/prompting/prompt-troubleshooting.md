---
title: "Prompt Troubleshooting"
category: "Prompting"
summary: "Systematic approaches to diagnosing and fixing common AI video prompt failures."
related:
  - prompt-engineering-fundamentals
  - negative-prompts
  - common-artifacts
  - prompt-templates
---

When your AI video output doesn't match your vision, resist the urge to rewrite the entire prompt. Diagnose first, then make targeted changes.

## The Diagnosis Framework

Before changing anything, identify **which layer** is failing:

| Layer | Symptom | Fix Approach |
|---|---|---|
| **Subject** | Wrong person, missing elements, extra objects | Simplify subject description, reduce scene complexity |
| **Action** | Static when should move, wrong motion, physics break | Use stronger action verbs, reduce simultaneous actions |
| **Setting** | Wrong location, time of day mismatch, scale issues | Be more explicit about environment, add reference anchors |
| **Style** | Wrong aesthetic, inconsistent look, generic output | Anchor to a specific film stock or camera, see [Style Transfer](/wiki/style-transfer-prompts) |
| **Camera** | Wrong angle, no movement, jerky motion | Specify camera behavior separately from subject action |
| **Lighting** | Flat, too dark, mood mismatch | Add explicit lighting language — this is the most commonly forgotten layer |

## Step Zero: Regenerate Before Changing Anything

AI video generation has a significant random component. Many "failures" resolve on a second run with the exact same prompt and settings. **Always try regenerating 2–3 times before modifying your prompt** — this is the fastest and easiest troubleshooting step, and it prevents unnecessary prompt changes that introduce new variables.

## Fix One Thing at a Time

The biggest troubleshooting mistake is changing multiple prompt elements simultaneously. You lose the ability to identify what fixed (or broke) the output.

1. Regenerate with the same prompt (2–3 attempts)
2. If the issue persists, identify the single most important failure
3. Modify only the language related to that failure
4. Regenerate and compare
5. Move to the next issue

## Common Failures and Targeted Fixes

### "The output looks generic / boring"
Your prompt is likely too vague. Add specificity to **one** layer at a time:
- Add a specific time of day: `"at golden hour"` instead of nothing
- Add a camera lens: `"shot on 85mm"` instead of nothing
- Add a film stock: `"Kodak Vision3 500T"` instead of nothing

### "The character doesn't look right"
- Simplify clothing and appearance — complex outfits morph
- Use reference images via I2V instead of text-only descriptions
- Focus on 2–3 distinctive features rather than exhaustive detail
- See [Character Consistency Fundamentals](/wiki/character-consistency-fundamentals)

### "The motion is wrong or doesn't happen"
- Use strong, specific verbs: `"sprints"` not `"moves quickly"`
- Separate camera motion from subject motion in your prompt
- Reduce the number of actions — one primary action per clip
- Add pacing cues: `"slowly"`, `"suddenly"`, `"begins with… then…"`

### "The style is inconsistent across clips"
- Copy-paste your style block verbatim between prompts — don't paraphrase
- Anchor to a film stock name rather than abstract color descriptions
- Use a universal suffix appended to every generation
- Fix remaining drift in post with color matching tools

### "The output has artifacts"
See [Common Artifacts](/wiki/common-artifacts) for the full catalog. Quick fixes:
- **Morphing faces:** Reduce motion complexity, use face reference images
- **Flickering:** Add `"steady, consistent lighting"` to your prompt
- **Extra limbs:** Simplify the action, avoid overlapping body parts in frame
- **Text corruption:** Avoid text in frame entirely — add it in post

## The Simplification Test

If a complex prompt keeps failing, try the **simplification test**: strip the prompt down to subject + action only and regenerate. If the core works, layer back your other elements one at a time until you find the breaking point.

Complex prompts fail for three main reasons: **competing constraints** (e.g., "handheld camera" + "perfectly stable framing"), **token saturation** (the model can't attend to all instructions equally), or **ambiguous spatial relationships** (the model can't resolve where multiple subjects are relative to each other). The simplification test reveals which of these is the bottleneck.

## When to Change Tools Instead of Prompts

Sometimes the prompt is fine but the platform can't deliver:
- **Character consistency failing?** → Try Kling's face-lock or [Seedance 2.0's @ reference system](/wiki/seedance-2) — both support binding a reference image to a character name in your prompt for cross-clip consistency
- **Physics breaking?** → Try [Seedance 2.0](/wiki/seedance-2) which handles physics better than most models (though not perfectly — complex physics still need careful prompting and multiple attempts)
- **Need more control?** → Try I2V workflow instead of T2V — starting from an image constrains the output
- **Generic results?** → Try a different model — each has different training data biases

See [AI Video Tools Overview](/wiki/ai-video-tools-overview) for platform selection guidance.
