---
title: "Negative Prompts"
category: "Prompting"
summary: "How to use negative prompts to steer AI video away from unwanted artifacts, styles, and behaviors."
related:
  - prompt-engineering-fundamentals
  - common-artifacts
  - prompt-templates
---

Negative prompts tell the model what to **avoid**. They're your quality control layer — often the difference between "pretty good" and "professional."

## How Negative Prompts Work

Many diffusion-based video models support a negative prompt field that reduces the influence of specified concepts during generation. Think of it as subtracting from the latent space. Note that not all platforms expose this field — some newer models handle quality internally, and the trend is toward less reliance on explicit negatives.

## Essential Negative Prompt Vocabulary

| Problem | Negative Prompt Terms |
|---|---|
| Blurry output | `blurry, out of focus, soft, motion blur` |
| Distorted faces | `deformed face, asymmetric eyes, extra fingers, uncanny valley` |
| Bad lighting | `overexposed, underexposed, flat lighting, harsh shadows` |
| Low quality | `low resolution, pixelated, jpeg artifacts, watermark, text overlay` |
| Unwanted style | `cartoon, anime, sketch, painting` (if going for photorealism) |
| Temporal issues | `flickering, jittery, morphing, frame skipping` |
| Unwanted cuts/transitions | `scene change, cut, transition, jump cut, flash frame` |
| Camera problems | `shaky camera, fisheye distortion, lens warp, rolling shutter, camera shake` |

## Platform-Specific Tips

- **Runway Gen-4** — Negative prompts via the "Exclude" field; keep them short (under 30 words). Most effective for visual quality terms (blurry, distorted) rather than conceptual negatives. Gen-4's improved baseline means you may not need negatives at all for standard quality.
- **Kling 2.0** — Supports negative prompts in advanced mode; effective for artifact removal. Works well with temporal negatives (flickering, jittering).
- **Sora** — Supports limited style/quality steering, but positive prompts remain the primary control. Describe exactly what you want rather than what to avoid — Sora's architecture responds better to positive direction.
- **Pika** — Supports negative prompts in the advanced settings panel. Effective for visual quality terms; less impactful for style steering. Keep short (under 20 words).
- **Luma Dream Machine** — Negative prompt support is minimal. Focus on strong positive prompts and rely on Luma's built-in quality defaults.
- **[Seedance 2.0](/wiki/seedance-2)** — Supports a universal negative suffix appended to every generation; keep it focused on the most common artifacts for your project. Especially useful for physics-related negatives (`"unnatural motion, floating objects"`).

**Trend note:** The overall direction in 2025–2026 is toward models that internalize quality constraints, making explicit negative prompts less necessary. This trend is strongest in Sora and newer Kling versions; Runway and Pika still benefit from targeted negatives. Start without negatives and add them only if specific artifacts appear.

## Weighting and Priority

Not all negatives carry equal weight. Many diffusion-based models give more weight to earlier tokens — **put your most important exclusions first**. If hand quality matters more than avoiding blur, lead with `"extra fingers, deformed hands"` before `"blurry"`. Note that exact processing order varies by architecture; this is a general guideline, not a universal rule.

Some platforms support explicit weighting syntax like `(deformed:1.4)` — this is most common in image-generation tools (ComfyUI, Stable Diffusion) and a few video pipelines built on them. Most commercial video platforms (Runway, Kling, Sora, Pika) don't expose this level of control. For platforms without weighting, repetition can mildly increase emphasis, but diminishing returns kick in fast.

## When NOT to Use Negative Prompts

Negative prompts aren't always helpful:

- **Heavily stylized content** — If you're going for surreal, abstract, or painterly output, over-constraining with negatives can flatten creativity. Let the model surprise you.
- **Already-clean models** — Newer models (Seedance 2.0, Runway Gen-4, Sora) have improved baseline quality. Start without negatives and add them only if specific artifacts appear.
- **Style exclusion** — Instead of negating what you don't want (`"no CGI, no cartoon"`), describe what you do want with precision: `"photorealistic, shot on ARRI Alexa, documentary style"`. Positive steering is more reliable than negative suppression for broad style control.

## Testing Whether Negatives Help or Hurt

Negative prompts aren't guaranteed to improve output. The only way to know is to test systematically:

1. **Baseline first** — Generate 3–5 clips with your positive prompt only and no negatives. Save the best result.
2. **Add negatives one at a time** — Add a single negative term (e.g., `"blurry"`), generate 3–5 clips, and compare against the baseline. If the best result improves, keep it. If not, drop it.
3. **Test the full set** — Once you have a set of negatives that each individually helped, test them together. Sometimes negatives that help individually interfere with each other when combined.
4. **Compare apples to apples** — Use the same seed (if available) and identical positive prompt. Only change the negative field.

**Rule of thumb:** If adding a negative doesn't produce a visible improvement in 3+ generations, it's not helping — remove it. Unused negatives still consume token budget and can subtly degrade output.

## Why Certain Negatives Backfire

Not all negatives work as intended. Understanding why helps you avoid common traps:

- **Attention paradox** — Diffusion models process negatives by computing what the concept looks like and then steering away from it. For complex or ambiguous terms, this computation can partially "activate" the concept. Negating `"text"` may cause the model to generate faint text-like patterns it wouldn't have produced otherwise.
- **Semantic bleed** — `"no watermark"` can suppress legitimate visual elements that share features with watermarks (semi-transparent overlays, corner logos, thin text). The model doesn't understand intent — it suppresses visual patterns.
- **Overcorrection** — Negating `"dark shadows"` can push the model toward flat, overexposed lighting rather than just reducing shadow intensity. Negatives are subtractive, not surgical.
- **Token competition** — Every negative term competes for attention with your other negatives. A long negative prompt dilutes the weight of each individual term. Five focused negatives outperform twenty scattered ones.
- **Model-specific behavior** — Some architectures (especially newer ones like Sora) don't process negatives the same way as classic diffusion models. A negative that works on Runway may have no effect — or the opposite effect — on a different platform.

**When in doubt:** Strengthen your positive prompt instead of adding negatives. Describing exactly what you want is almost always more effective than describing what you don't want.

## Common Mistakes

- **Over-negating:** Listing 50 negative terms can confuse the model and flatten the output. Stick to 5–10 targeted terms per generation.
- **Contradictory negatives:** Asking for "no blur" while requesting handheld camera movement creates a conflict. Prioritize your intent.
- **Negating what you need:** `"no watermark"` can sometimes suppress legitimate text or UI elements in your scene. Be specific about what you're removing.

Pair negative prompts with strong positive prompts from your [Prompt Engineering Fundamentals](/wiki/prompt-engineering-fundamentals) for best results. See also: [Common Artifacts](/wiki/common-artifacts) for a visual guide to what you're fighting.
