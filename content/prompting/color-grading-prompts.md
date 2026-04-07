---
title: "Color Grading in Prompts"
category: "Prompting"
summary: "How to control color palette, temperature, and grade through prompt language."
related:
  - style-transfer-prompts
  - lighting-techniques
  - mood-lighting
  - prompt-engineering-fundamentals
---

Color grading is mood. The same scene shot in warm amber vs. cold steel blue tells a completely different story. Most current AI video models respond well to color language, though consistency varies by platform — test your grade on a few clips before committing to an entire project.

## Color Temperature

- **Warm:** golden, amber, honey-toned, sunset warmth, tungsten
- **Neutral:** balanced, natural color, daylight-balanced
- **Cool:** steel blue, moonlit, cyan shadows, overcast cool tones

## Popular Color Grade Styles

| Grade | Prompt Language | Feel |
|---|---|---|
| Teal & Orange | "teal shadows and warm orange highlights, Hollywood color grade" | Blockbuster cinema |
| Desaturated | "muted color palette, low saturation, washed-out tones" | Gritty, documentary |
| Cross-processed | "cross-processed film look, shifted greens in shadows, warm highlights" | Retro, experimental. *(Cross-processing varies by film/chemical combo — this is one common version. Test your platform's interpretation.)* |
| Monochromatic | "black and white with deep blacks and crisp whites, high contrast" | Timeless, dramatic |
| Pastel | "soft pastel color palette, low contrast, airy highlights" | Dreamy, whimsical |

## Skin Tone Considerations

Color grading affects skin tones — especially across different skin complexions. Understanding **why** certain grades fail helps you avoid problems:

- **Teal shadows** push darker skin tones toward gray/ashy because teal desaturates warm undertones — the lower the skin's luminance, the stronger the shift
- **Orange highlights** oversaturate lighter skin tones, producing a sunburned look — the effect intensifies with higher saturation values
- **Desaturated grades** are the most forgiving across all skin tones because lower saturation means less hue shift and less tonal variation between complexions

When working with human subjects:

- Test your grade on close-up shots of diverse skin tones before committing to an entire project
- `"natural skin tones preserved"` in your prompt can anchor the model
- Cross-processed and heavy teal-orange grades need the most care and testing — they create the largest hue shifts
- If you must use a strong grade, consider grading skin and background separately in post (DaVinci Resolve's qualifier tool or Premiere's HSL secondary)

## Multi-Clip Color Consistency

When generating multiple clips for the same project, color drift between shots is common. To maintain consistency:

- **Reuse exact color language** — Copy-paste your color description between prompts; even small wording changes can shift the grade
- **Anchor to a film stock** — Cinema stocks like `"Kodak Vision3 500T color science"` are more stable across video generations than abstract color descriptions. Still-photography stocks (Portra 400, Fuji 400H) work too but are less consistently recognized by video models — see [Style Transfer](/wiki/style-transfer-prompts) for stock selection guidance
- **Fix in post** — Use DaVinci Resolve's color matching or Premiere's Lumetri panel to harmonize clips that drifted

## White Balance / Color Temperature Control

For precise temperature control, Kelvin references can help — but note that **most current AI video models respond more reliably to descriptive language** (warm, cool, neutral, tungsten, daylight) than to numeric Kelvin values. Kelvin numbers work best as a supplementary cue paired with descriptive words:

- **3200K** — Tungsten/warm indoor light
- **4500K** — Fluorescent / overcast
- **5600K** — Daylight-balanced
- **7000K+** — Deep shade, blue-hour cool

Prompt example: `"warm tungsten interior light, 3200K"` or `"neutral daylight-balanced, 5600K"`. The descriptive words do the heavy lifting; the number reinforces the target.

## Pro Tip: Contrast Control

Pair color with contrast language for dynamic range control:

- **"high contrast"** — Deep blacks, bright whites, punchy midtones
- **"lifted blacks"** — Shadows raised to dark gray instead of pure black; produces a faded, matte look (common in indie film)
- **"crushed shadows"** — Shadow detail pushed to pure black; dramatic, moody, hides detail in dark areas

## Saturation Control

Saturation is independent of color temperature — you can have warm and desaturated or cool and vivid. Control it explicitly:

- **High saturation:** `"vivid, saturated colors, punchy color palette"` — eye-catching, commercial, music video
- **Normal saturation:** No modifier needed; most models default here
- **Low saturation:** `"muted color palette, desaturated, washed-out tones"` — documentary, gritty, melancholic
- **Selective desaturation:** `"desaturated background with vivid red accent"` — draws attention to a specific color. Works best with a single accent color; multiple selective colors confuse most models

Saturation interacts with skin tones (see Skin Tone Considerations above) — high saturation amplifies hue shifts, low saturation is more forgiving.

## LUT and Color Space References

Professional colorists work with standard color spaces and LUTs (Look-Up Tables). AI models don't apply actual LUTs, but referencing them can anchor the model toward a recognizable look:

- **ACES (Academy Color Encoding System):** `"ACES color pipeline, wide dynamic range, film-like rolloff"` — the industry standard for cinema post-production; produces a natural, high-dynamic-range look with gentle highlight rolloff
- **Rec.709:** `"Rec.709 color space, broadcast-standard color"` — the standard for HD video; produces a clean, neutral, TV-ready look
- **Rec.2020:** `"Rec.2020 wide color gamut"` — wider gamut than Rec.709; used for HDR content

These work best as supplementary cues alongside descriptive color language, not as standalone prompts. `"ACES color pipeline, warm highlights with cool shadows"` is more effective than `"ACES"` alone.

## Split-Tone and Selective Color Grading

Split-toning applies different colors to highlights and shadows independently — a staple technique in film grading:

- **Teal shadows / orange highlights:** `"teal in the shadows, warm orange highlights"` — the classic blockbuster split
- **Blue shadows / gold highlights:** `"cool blue shadows, golden highlights"` — sunset drama, prestige TV
- **Green shadows / magenta highlights:** `"green-tinted shadows, soft magenta highlights"` — cross-processed, retro
- **Purple shadows / amber highlights:** `"deep purple shadows, warm amber highlights"` — moody, luxurious

Prompt structure: Specify the shadow color and highlight color separately for best results. `"teal shadows and warm orange highlights"` works better than `"teal and orange color grade"` because it tells the model exactly where each color belongs.

Combine with [Style Transfer](/wiki/style-transfer-prompts) film stocks for maximum control and [Lighting Techniques](/wiki/lighting-techniques) for in-camera color.
