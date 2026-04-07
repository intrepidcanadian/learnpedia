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

Cinema stocks (most reliable for video models):

- **Kodak Vision3 500T** — Warm, rich, slightly grainy. The "movie" look.
- **Kodak Vision3 250D** — Daylight-balanced, fine grain, clean color. Standard for exteriors.
- **CineStill 800T** — Halation around highlights, neon-friendly, night-shoot aesthetic.

Still photography stocks (evocative but less predictable in video models — cinema stocks are designed for motion and render more consistently):

- **Kodak Portra 400** — Soft pastels, beautiful skin tones.
- **Fujifilm Pro 400H** — Cool greens and blues, airy highlights. *(Discontinued — and not reliably recognized by current AI video models as of 2026. Use Kodak Portra 400 for a similar aesthetic, or describe the look directly: `"cool greens in shadows, airy pastel highlights, soft grain"`.)*
- **Kodak Tri-X 400** — Classic high-contrast black and white.

Digital cinema cameras (increasingly dominant in AI training data):

- **ARRI Alexa** — Industry-standard organic look, wide dynamic range, natural skin tones. `"shot on ARRI Alexa, natural color science"`
- **RED** — Sharp, high-resolution, slightly clinical. `"shot on RED camera, high detail, cinematic color"`
- **Sony Venice** — Dual-ISO versatility, warm shadows, popular for low-light. `"shot on Sony Venice, warm shadows, natural light"`

## Director-Style References

Referencing a director's visual style can be powerful for personal/creative work. **For commercial projects, prefer describing the visual qualities directly** (e.g., "symmetrical framing, pastel palette") rather than invoking a director's name — see ethical note below.

- **"in the style of Wes Anderson"** — Symmetrical framing, pastel palette, flat perspective
- **"Denis Villeneuve cinematography"** — Desaturated, vast landscapes, silhouettes
- **"Wong Kar-wai aesthetic"** — Neon-drenched, step-printed motion, saturated reds and greens
- **"Roger Deakins lighting"** — Motivated naturalistic light, painterly composition

## Era References

Describing a filmmaking era can anchor style more broadly than a single director or stock:

- **"shot on film from the 1970s"** — Warm grain, natural imperfection, zooms, available light. Think *The Godfather*, *Taxi Driver*.
- **"1990s indie film"** — Handheld, lo-fi, naturalistic acting, Sundance aesthetic.
- **"2000s digital cinema"** — Early digital sharpness, slightly flat color, *Collateral*-era night shooting.
- **"classic Hollywood 1940s"** — High contrast black and white, hard key lights, glamorous.

Era references work well as a foundation layer that you refine with specific stocks or cameras.

## Combining Styles

```
"Shot on 16mm Kodak film, Terrence Malick golden hour aesthetic,
handheld with natural light, lens flares, grain"
```

Layer 2–3 style references max. More than that and models produce incoherent results. Be cautious mixing anchors from different mediums — a film stock and a digital camera in the same prompt can produce unpredictable results. Combinations like `"shot on RED, Kodak Vision3 color response"` are technically contradictory (RED is a digital camera; Vision3 is a film stock), but AI models sometimes interpret this as "digital sharpness with film-like color science," which can produce appealing results. Treat these cross-medium combos as experimental — test before committing, and be prepared for inconsistent output. When in doubt, choose one medium, then layer mood and director on top.

**Caution on director references for commercial work:** Using a living director's name as a style anchor in published commercial content raises ethical questions around attribution and appropriation. For commercial projects, prefer describing the visual qualities directly (`"symmetrical framing, pastel palette, flat perspective"`) rather than invoking a name.

## Style Reference Images

As of 2025–2026, **style reference images are the most reliable style transfer mechanism** — more precise than text-based descriptions alone. Most major platforms now support them:

- **Runway Gen-4** — Upload a style reference image alongside your prompt to anchor the visual treatment
- **Kling 2.0** — Style reference via image upload; the model extracts color, lighting, and texture cues
- **Pika** — Supports style reference images in generation settings
- **Luma** — Supports style reference images, but style adherence is weaker than Runway or Kling — results may drift from the reference, especially for complex color palettes or fine texture details. Best for broad mood anchoring rather than precise style matching

**How to use style references effectively:**

1. **Choose a clear style exemplar** — a single frame that embodies the look you want (color grade, lighting, texture, grain)
2. **Pair with minimal text styling** — let the image do the heavy lifting; use text to specify what the image doesn't convey (e.g., era, grain level)
3. **Consistency across shots** — use the same style reference for every clip in a project to unify the look
4. **Source your references** — film stills, photography, paintings, or even color-graded frames from your own work

Style reference images are especially powerful for looks that are hard to describe in words (specific color palettes, unique lighting moods, painterly textures).

**Style vs. scene-specific lighting:** A style reference locks in a visual treatment (warm, desaturated, high-contrast), but individual scenes may need different lighting (a night scene vs. a daytime scene). When the style reference conflicts with scene-specific lighting in your prompt, the model usually favors the reference image. To handle this: use a style reference that captures your color/texture treatment but has neutral lighting, then control scene lighting through your text prompt. Alternatively, prepare multiple style references — one per lighting condition — grouped by scene type.

## Non-Photorealistic Styles

Beyond live-action film aesthetics, AI video models handle a range of stylized looks:

- **Anime / 2D animation** — `"anime style, Studio Ghibli aesthetic, cel-shaded, clean line art"`
- **3D animation** — `"Pixar-style 3D rendering, subsurface scattering, soft lighting"` or `"Unreal Engine cinematic, ray-traced"`
- **Game cinematic** — `"AAA game cinematic, 60fps, dynamic camera, depth of field"`
- **Illustration / Storybook** — `"watercolor illustration, picture book style, soft edges"`
- **Rotoscope / Hybrid** — `"rotoscoped live action, A Scanner Darkly style, outlined figures"`

These work best when you commit to one style per project rather than mixing photorealistic and stylized elements.

See [Color Grading Prompts](/wiki/color-grading-prompts) for the post-production side of style.
