---
title: "Style Transfer Prompts"
category: "Prompting"
summary: "Techniques for achieving specific visual styles — film stocks, directors' looks, artistic movements."
related:
  - prompt-engineering-fundamentals
  - color-grading-prompts
  - lighting-techniques
---

Style transfer in AI video means guiding the model toward a specific visual aesthetic. This goes beyond "make it look cinematic" — it's about encoding a precise visual identity.

## Film Stock References

AI models trained on film data respond well to specific stock names:

- **Kodak Vision3 500T** — Warm, rich, slightly grainy. The "movie" look.
- **Kodak Portra 400** — Soft pastels, beautiful skin tones.
- **Fujifilm Pro 400H** — Cool greens and blues, airy highlights.
- **CineStill 800T** — Halation around highlights, neon-friendly, night-shoot aesthetic.
- **Kodak Tri-X 400** — Classic high-contrast black and white.

## Director-Style References

Referencing a director's visual style can be powerful (use ethically for personal work):

- **"in the style of Wes Anderson"** — Symmetrical framing, pastel palette, flat perspective
- **"Denis Villeneuve cinematography"** — Desaturated, vast landscapes, silhouettes
- **"Wong Kar-wai aesthetic"** — Neon-drenched, step-printed motion, saturated reds and greens
- **"Roger Deakins lighting"** — Motivated naturalistic light, painterly composition

## Combining Styles

```
"Shot on 16mm Kodak film, Terrence Malick golden hour aesthetic,
handheld with natural light, lens flares, grain"
```

Layer 2–3 style references max. More than that and models produce incoherent results. See [Color Grading Prompts](/wiki/color-grading-prompts) for the post-production side of style.
