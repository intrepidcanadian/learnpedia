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

Most diffusion-based video models support a negative prompt field that reduces the influence of specified concepts during generation. Think of it as subtracting from the latent space.

## Essential Negative Prompt Vocabulary

| Problem | Negative Prompt Terms |
|---|---|
| Blurry output | `blurry, out of focus, soft, motion blur` |
| Distorted faces | `deformed face, asymmetric eyes, extra fingers, uncanny valley` |
| Bad lighting | `overexposed, underexposed, flat lighting, harsh shadows` |
| Low quality | `low resolution, pixelated, jpeg artifacts, watermark, text overlay` |
| Unwanted style | `cartoon, anime, sketch, painting` (if going for photorealism) |
| Temporal issues | `flickering, jittery, morphing, frame skipping` |

## Platform-Specific Tips

- **Runway Gen-3/4** — Negative prompts via the "Exclude" field; keep them short (under 30 words)
- **Kling** — Supports negative prompts in advanced mode; effective for artifact removal
- **Sora** — Uses system-level quality filters; negative prompts are less critical but still help with style steering

Pair negative prompts with strong positive prompts from your [Prompt Engineering Fundamentals](/wiki/prompt-engineering-fundamentals) for best results. See also: [Common Artifacts](/wiki/common-artifacts) for a visual guide to what you're fighting.
