---
title: "Motion Dynamics"
category: "Motion & Animation"
summary: "Controlling speed, acceleration, and quality of motion in AI video — slow-mo, time-lapse, and smooth action."
related:
  - camera-movements
  - common-artifacts
  - prompt-engineering-fundamentals
  - frame-rate-guide
---

Motion is what separates video from images. How things move — their speed, acceleration, and fluidity — defines the viewing experience.

## Speed Control

- **Slow motion** — `"slow motion, 120fps slow-mo, time slows down"`. Beautiful for impacts, emotions, nature.
- **Real-time** — Default. Don't specify speed for natural movement.
- **Fast motion / Time-lapse** — `"time-lapse, sped up, fast-forward"`. Great for clouds, crowds, construction.
- **Speed ramp** — `"starts in slow motion then accelerates to real-time"`. Dramatic transitions.

## Motion Quality Words

| Want | Prompt Language |
|---|---|
| Smooth, fluid | `smooth motion, fluid movement, graceful` |
| Jittery, energetic | `handheld, kinetic, frenetic, dynamic` |
| Minimal, subtle | `subtle movement, almost still, gentle motion` |
| Dramatic, impactful | `dramatic movement, powerful, explosive` |

## Physics and Realism

AI models can struggle with physics. Help them by describing the physics you expect:

- Hair and fabric: `"hair flowing in the wind"`, `"dress billowing"`
- Particles: `"dust motes floating in the light beam"`, `"snow falling gently"`
- Liquids: `"water splashing"`, `"coffee steam rising"`

See [Frame Rate Guide](/wiki/frame-rate-guide) for technical settings and [Common Artifacts](/wiki/common-artifacts) for motion-related issues to watch for.
