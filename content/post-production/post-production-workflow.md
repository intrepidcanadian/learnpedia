---
title: "Post-Production Workflow"
category: "Post-Production"
summary: "The end-to-end workflow for assembling AI video clips — editing, color, sound, and final export."
related:
  - common-artifacts
  - upscaling-enhancement
  - multi-shot-workflows
  - audio-for-ai-video
---

AI generates clips. You make a video. Post-production is where raw AI output becomes watchable content.

## The Pipeline

1. **Organize** — Name clips by scene/shot. Create bins. Rate generations (keep/maybe/reject).
2. **Rough Cut** — Assemble clips in timeline order. Don't worry about perfection.
3. **Trim & Pace** — Cut to rhythm. AI clips often have weak starts/ends — trim to the strongest frames.
4. **Transitions** — Cross-dissolves hide inconsistencies between clips. Cut on motion to hide jumps.
5. **Color Grade** — Unify the look across all clips. AI generations vary in color/exposure. Match them.
6. **VFX / Fix** — Paint out artifacts, inpaint minor defects, stabilize shaky sections, deflicker. Use region-based upscaling for faces if needed.
7. **Sound Design** — See [Audio for AI Video](/wiki/audio-for-ai-video).
8. **Upscale** — See [Upscaling & Enhancement](/wiki/upscaling-enhancement).
9. **Export** — Match platform specs (4K for YouTube, 1080p for social).

## Timeline Organization

Proper organization prevents chaos when you have 50+ AI generations to manage.

### Naming Convention

Use a consistent naming scheme: `Scene_Shot_Take_Platform`

```
SC01_SH02_T03_seedance.mp4    → Scene 1, Shot 2, Take 3, generated on Seedance
SC01_SH02_T04_runway.mp4      → Same shot, Take 4 on Runway (comparison)
```

### Bin Structure

Organize your project bins (folders) by stage:

```
📁 01_Selects        → Best take per shot (the clips you'll actually use)
📁 02_Alternates     → Runner-up takes (backup if selects have issues)
📁 03_Rejected       → Unusable generations (keep until project is final)
📁 04_Audio          → Music, SFX, foley, voiceover
📁 05_Assets         → Reference images, titles, overlays
```

### Proxy Workflow

For projects with 20+ clips at 2K or higher resolution, edit with proxy files to keep your timeline responsive. DaVinci Resolve and Premiere Pro both support automatic proxy generation (quarter-resolution H.264 proxies are usually sufficient). Relink to full-resolution files before color grading and export.

## Color Matching Across Clips

AI generations from different runs — even with identical prompts — will vary in exposure, white balance, and saturation. Color matching is the single most important step for making AI video look professional.

### Shot-by-Shot Matching Workflow

1. **Pick a hero clip** — Choose the clip with the best color/exposure as your reference.
2. **Match adjacent shots first** — Grade each clip to match its neighbors. Viewers notice mismatches most on cuts.
3. **Use scopes, not just your eyes** — Waveform (exposure), vectorscope (color balance), and RGB parade (per-channel balance) catch drift your monitor won't show.
4. **Apply a unifying LUT last** — After matching all shots, apply a single creative LUT across the timeline for a cohesive look. See [Color Grading Prompts](/wiki/color-grading-prompts) for generation-time vs. post-production color approaches.

### Common AI Color Issues

| Issue | Fix |
|---|---|
| Exposure jumps between clips | Use curves or lift/gamma/gain to match waveform levels |
| White balance shifts (warm → cool) | Match using the color temperature wheel or white balance picker on a neutral gray area |
| Oversaturated patches (common in AI) | Reduce saturation selectively with HSL qualifier — target the oversaturated hue without desaturating the whole frame |
| Color banding in gradients | Add very subtle film grain (0.5–1%) to break up banding artifacts |

### Tool-Specific Tips

- **DaVinci Resolve:** Use the Shot Match feature in the Color page — select reference clip, then right-click target clip → "Shot Match to This Clip." Fine-tune manually afterward.
- **Premiere Pro:** Use Lumetri Color → Comparison View to match clips side-by-side. The Auto Match feature gets you 70–80% of the way.
- **Final Cut Pro:** Use the Color Board's Balance controls for white balance matching, then Curves for exposure.

## Deflicker and Stabilization

AI-generated video often has subtle luminance flicker (brightness pulses between frames) and micro-jitter (sub-pixel camera shake that wasn't in the prompt).

### Deflicker

- **DaVinci Resolve:** Fusion page → Deflicker node, or use the built-in temporal noise reduction at low settings.
- **After Effects:** Apply the "Remove Flicker" preset, or use third-party plugins (Flicker Free by Digital Anarchy is widely used).
- **Prevention is better:** Specify consistent lighting in your prompt. Ambiguous lighting descriptions (e.g., "flickering candlelight") invite luminance variation.

### Stabilization

- Apply stabilization **before** upscaling — stabilizing upscaled footage amplifies crop artifacts.
- Use "translation only" stabilization for subtle jitter. Full perspective stabilization on AI footage can introduce warping.
- DaVinci Resolve's built-in stabilizer works well. Set it to "Translation" mode for AI clips.

## Recommended Editing Tools

| Tool | Best For | Cost |
|---|---|---|
| **DaVinci Resolve** | Color grading, Fusion VFX, professional finishing | Free (Studio $295 one-time) |
| **Adobe Premiere Pro** | General editing, After Effects integration, team workflows | Subscription |
| **CapCut** | Social media formats, quick turnaround | Free |
| **Final Cut Pro** | Mac-native, fast rendering, magnetic timeline | $299 one-time |

## Export Settings

### Delivery Targets

| Platform | Resolution | Codec | Bitrate | Frame Rate |
|---|---|---|---|---|
| YouTube (quality) | 3840×2160 | H.264 or H.265 | 50–80 Mbps | Match source |
| YouTube (efficiency) | 1920×1080 | H.264 | 20–30 Mbps | Match source |
| Instagram/TikTok | 1080×1920 | H.264 | 15–25 Mbps | 30fps |
| Client delivery | Full resolution | ProRes 422 HQ or DNxHR HQ | Lossless | Match source |
| Archive/master | Full resolution | ProRes 4444 or FFV1 | Lossless | Match source |

### Intermediate Format

Never edit compressed H.264 source clips directly in a complex timeline. Transcode AI-generated clips to an intermediate codec first:

- **ProRes 422** (Mac) or **DNxHR SQ** (cross-platform) for editing
- **ProRes 4444** or **DNxHR HQX** if you need alpha channels
- **FFV1** for lossless open-source archival

This avoids quality loss from decoding H.264 on every playback and makes scrubbing smooth.

## Pro Tips

- Generate more clips than you need. 3:1 ratio (generate 3, use 1) is common.
- Music drives pacing — lay down your track before fine-cutting.
- Minor [artifact cleanup](/wiki/common-artifacts) (flickering, color fringing) is often faster than re-generating. But for major issues (extra limbs, face morphing), re-generating is usually cheaper than frame-by-frame repair.
- **Trim the first and last 0.5-1 second** of AI clips from older models — they often produce artifacts or static frames at clip boundaries. Newer models (Seedance 2.0, Runway Gen-4) have improved boundary stability, so review your platform's behavior before trimming automatically.
- **Cross-dissolves are your friend** — They hide color and detail mismatches between clips far better than hard cuts.
- **Color match before exporting** — AI clips from different generations will vary in exposure and white balance. Use your editor's color matching tools to unify everything.
- **Export at the right bitrate** — 4K at low bitrate looks worse than 1080p at good bitrate. See the delivery targets table above for recommended settings.
