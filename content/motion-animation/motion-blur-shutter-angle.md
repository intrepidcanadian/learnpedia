---
title: "Motion Blur & Shutter Angle"
category: "Motion & Animation"
summary: "How motion blur and shutter angle affect the look of AI video — from cinematic 180° to crisp high-shutter action."
related:
  - frame-rate-guide
  - motion-dynamics
  - camera-movements
  - style-transfer-prompts
---

Motion blur is what makes movement feel natural on screen. Too little and motion looks staccato; too much and it becomes a smear. In traditional filmmaking, shutter angle (or shutter speed) controls this. In AI video, you control it through prompt language.

## Shutter Angle Basics

Shutter angle describes how long each frame is exposed relative to the frame interval. The standard is **180°** (half the frame interval), which produces natural-looking motion blur.

| Shutter Angle | Shutter Speed (at 24fps) | Motion Blur | Feel |
|---|---|---|---|
| **360°** (max) | 1/24s | Heavy blur | Dreamy, disorienting |
| **180°** (standard) | 1/48s | Natural blur | Cinematic default |
| **90°** | 1/96s | Reduced blur | Slightly crisp, edgy |
| **45°** or less | 1/192s+ | Minimal blur | Staccato, Saving Private Ryan |

## Prompting Motion Blur in AI Video

AI models don't accept shutter angle values directly, but they respond to descriptive language trained on footage shot at different settings:

### Cinematic / Standard Motion Blur (180°)

The default for most narrative content. Smooth, natural.

```
"cinematic motion blur, natural movement, film-like motion"
"smooth motion blur on moving subjects"
```

### High Shutter / Crisp Motion (90° or less)

Each frame is sharp even during fast movement. Used for combat, sports, intense action.

```
"high shutter speed, crisp motion, no motion blur, sharp frames"
"Saving Private Ryan shutter effect, staccato motion"
```

### Heavy Motion Blur (270°+)

Exaggerated blur for dreamy, disorienting, or time-passage effects.

```
"heavy motion blur, streaking lights, dreamy movement"
"long exposure motion blur, light trails"
```

## When Motion Blur Matters

- **Action sequences** — High shutter speed (less blur) makes impacts feel visceral and each frame readable
- **Dialogue and character scenes** — Standard 180° keeps motion natural without drawing attention
- **Chase and vehicle shots** — Standard or slightly higher blur sells speed; too crisp looks like a slideshow
- **Dream sequences and montages** — Heavy blur reinforces unreality
- **Slow motion** — Generated slow-mo at high frame rates naturally has less blur per frame; this is correct and expected

## Motion Blur and Frame Rate Interaction

Motion blur and frame rate work together:

- **24fps + 180° shutter** = classic cinema feel (most natural pairing)
- **60fps + 180° shutter** = smooth motion with appropriate blur (gaming/sports broadcast feel)
- **24fps + high shutter** = each frame is crisp but only 24 frames per second, creating a stroboscopic look
- **60fps + high shutter** = ultra-crisp, hyper-real (often used in sports replay)

When requesting high frame rates from tools like [Seedance 2.0](/wiki/seedance-2), the native 60fps output naturally carries less motion blur per frame than 24fps output, which is physically correct.

## Common Pitfalls

- **Requesting "no motion blur" on slow scenes** — There's barely any motion blur to remove; the prompt is wasted
- **Mixing motion blur language with conflicting styles** — Don't ask for "dreamy heavy motion blur" and "crisp sharp action" in the same prompt
- **Forgetting that AI motion blur is approximate** — Models produce the *aesthetic* of motion blur from training data, not physically simulated per-pixel blur. Results are convincing but not optically precise

See [Frame Rate Guide](/wiki/frame-rate-guide) for fps selection, [Motion Dynamics](/wiki/motion-dynamics) for speed control, and [Camera Movements](/wiki/camera-movements) for how camera motion interacts with blur.
