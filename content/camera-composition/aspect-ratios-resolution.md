---
title: "Aspect Ratios & Resolution"
category: "Camera & Composition"
summary: "Choosing the right aspect ratio and resolution for your AI video — platform requirements, cinematic formats, and vertical video."
related:
  - lens-choices
  - composition-rules
  - camera-movements
  - ai-video-tools-overview
  - frame-rate-guide
---

Aspect ratio shapes how your audience experiences the frame. Resolution determines sharpness. Getting both right before generation saves painful re-work.

## Common Aspect Ratios

| Ratio | Pixel Examples | Feel | Use Case |
|---|---|---|---|
| **16:9** | 1920×1080, 3840×2160 | Standard widescreen | YouTube, TV, general-purpose |
| **9:16** | 1080×1920 | Vertical, immersive on mobile | TikTok, Instagram Reels, YouTube Shorts |
| **4:3** | 1440×1080 | Classic, boxy, retro | Vintage look, documentary throwback |
| **1:1** | 1080×1080 | Square, balanced | Instagram feed, product showcases |
| **21:9** (2.39:1) | 2560×1080 | Ultra-wide, cinematic | Film trailers, epic establishing shots |
| **4:5** | 1080×1350 | Tall portrait, maximum feed presence | Instagram feed, Facebook |
| **3:4** | 1080×1440 | Tall portrait | Pinterest, some social formats |

## Choosing by Platform

- **YouTube** — 16:9 at 1080p or 4K. Shorts use 9:16.
- **TikTok / Reels** — 9:16 at 1080×1920 minimum.
- **Instagram Feed** — 1:1 or 4:5 (1080×1350) for maximum screen real estate.
- **Cinema / Portfolio** — 21:9 (2.39:1) for that "letterbox" widescreen look.
- **LinkedIn / Professional** — 16:9 at 1080p.

## Choosing by Mood

Aspect ratio is a creative choice, not just a technical one:

- **21:9 / 2.39:1** — Epic, cinematic, sweeping landscapes. Emphasizes horizontal scale. Pairs with [anamorphic lenses](/wiki/lens-choices).
- **16:9** — Neutral, professional. The safe default.
- **4:3** — Intimate, documentary, nostalgic. Subjects feel closer.
- **9:16** — Immediate, personal, phone-native. Emphasizes vertical subjects (people, buildings).
- **1:1** — Balanced, graphic, product-focused. No directional bias.

## Resolution Strategy

| Resolution | Name | When to Use |
|---|---|---|
| 720p (1280×720) | HD | Drafts, rapid iteration, testing prompts |
| 1080p (1920×1080) | Full HD | Standard delivery, social media |
| 2K (2048×1080) | 2K | Native output from newer models like [Seedance 2.0](/wiki/seedance-2) |
| 4K (3840×2160) | Ultra HD | YouTube premium, professional delivery |

**Generate at the highest native resolution your tool supports.** [Upscaling](/wiki/upscaling-enhancement) can increase resolution after the fact, but it can't add genuine detail. A native 2K generation upscaled to 4K looks better than a 720p generation upscaled to 4K. Upscaling works best within 2–3× (e.g., 720p→1440p or 1080p→4K). Larger jumps (480p→4K) risk significant artifacting.

## AI Video Platform Native Resolutions

Not all platforms output at the same resolution. Match your expectations:

- **Runway Gen-4** — Up to 1080p natively (higher resolutions via upscaling pipeline)
- **Kling 2.0** — Up to 1080p natively
- **Seedance 2.0** — Native 2K (2048×1080 or 1080×2048)
- **Sora** — Up to 1080p
- **Pika** — Up to 1080p
- **Minimax / Hailuo** — Up to 1080p
- **Google Veo 2** — Up to 4K natively
- **Luma Dream Machine** — Up to 1080p

*Platform capabilities evolve rapidly. Verify current specs before committing to a resolution workflow.*

**Watch for variable frame rate (VFR) output:** Some platforms deliver VFR video (where frame timing is inconsistent) rather than constant frame rate (CFR). VFR can cause audio sync drift and editing issues. If your editor flags timing problems, transcode to CFR using FFmpeg (`ffmpeg -i input.mp4 -vsync cfr output.mp4`) or HandBrake before editing.

**Native aspect ratio matters:** Most models produce noticeably better results at their default/native aspect ratio because models train on large datasets at native resolutions — generating at non-native ratios forces interpolation, reducing consistency and detail. If your delivery format differs from the model's default, test quality at both ratios before generating your full project. Cropping or padding in post may be preferable to generating at a non-native ratio.

## Composition Changes With Aspect Ratio

Your framing must adapt to the ratio. A [rule of thirds](/wiki/composition-rules) composition that works in 16:9 may feel wrong in 9:16:

- **Wide formats (21:9, 16:9)** — Horizontal leading lines, side-by-side subjects, panoramic environments
- **Tall formats (9:16, 3:4)** — Vertical leading lines, single subject emphasis, stacked layers (sky/subject/ground). For multiple subjects, stack them vertically with connecting elements rather than side-by-side framing
- **Square (1:1)** — Center framing often works best, symmetry feels natural

Always specify your aspect ratio in the prompt when the platform supports it. See [Composition Rules](/wiki/composition-rules) for framing principles and [Lens Choices](/wiki/lens-choices) for how focal length interacts with frame shape.
