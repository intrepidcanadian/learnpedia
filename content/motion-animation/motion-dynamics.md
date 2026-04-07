---
title: "Motion Dynamics"
category: "Motion & Animation"
summary: "Controlling speed, acceleration, and quality of motion in AI video — slow-mo, time-lapse, and smooth action."
related:
  - camera-movements
  - common-artifacts
  - prompt-engineering-fundamentals
  - frame-rate-guide
  - motion-blur-shutter-angle
---

Motion is what separates video from images. How things move — their speed, acceleration, and fluidity — defines the viewing experience.

## Speed Control

- **Slow motion** — `"slow motion, time slows down"`. Beautiful for impacts, emotions, nature. Note: `"120fps slow-mo"` works as a style cue, but leading platforms (Seedance 2.0, Runway Gen-4, Kling 2.0+) generate at up to 60fps natively — the model interprets it as a slow-motion aesthetic rather than a literal frame rate. Many other models still generate at lower fps and interpolate, so check your platform's native output rate. See [Frame Rate Guide](/wiki/frame-rate-guide).
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

## Easing and Acceleration

Real objects don't start and stop instantly — they ease in and ease out. Prompt language that encodes acceleration produces more natural motion:

- **Ease in:** `"gradually accelerates"`, `"slowly begins to move"`, `"builds momentum"`
- **Ease out:** `"gently decelerates"`, `"comes to a gradual stop"`, `"settles into stillness"`
- **Linear (robotic):** `"moves at a constant speed"` — use deliberately for mechanical subjects
- **Snap/pop:** `"snaps into motion"`, `"jolts forward"` — sudden starts for impact

```
❌ "The car drives away"
✅ "The car slowly pulls away from the curb, tires gripping wet asphalt,
   gradually building speed as it disappears down the street"
```

## Physics and Realism

AI models can struggle with physics. Help them by describing the physics you expect:

- **Hair and fabric:** `"hair flowing in the wind"`, `"dress billowing"`, `"coat trailing behind"`
- **Particles:** `"dust motes floating in the light beam"`, `"snow falling gently"`, `"embers rising from the fire"`
- **Liquids:** `"water splashing"`, `"coffee steam rising"`, `"rain beading on the window"`
- **Weight and impact:** `"heavy footsteps"`, `"the bag thuds onto the table"`, `"boots crunching through gravel"`
- **Gravity:** `"leaves drifting downward"`, `"the ball arcs through the air and bounces"`

## Secondary Motion

Secondary motion is the small, consequential movement that happens because of a primary action — and it's what sells realism. Always include at least one secondary motion cue:

| Primary Action | Secondary Motion to Add |
|---|---|
| Character walks | Coat sways, hair bounces, bag shifts on shoulder |
| Car drives past | Puddle splashes, newspapers scatter, dust trails behind |
| Door opens | Light spills in, curtain billows, papers flutter on desk |
| Explosion | Debris flies outward, shockwave ripples, dust cloud expands |

Prompt: `"She pushes through the heavy door, wind catching her hair, the door swinging shut behind her with a thud"` — three motion layers from one action.

## Common Motion Pitfalls

- **Too many simultaneous actions** — One primary action per clip. Secondary motion is fine; competing primary actions are not.
- **Missing environmental motion** — Even "still" scenes need ambient motion: clouds drifting, leaves rustling, light flickering. Total stillness reads as frozen, not calm.
- **Speed mismatches** — A character running in slow motion while background elements move at normal speed breaks immersion. Specify speed globally.
- **Relying on interpolation for slow-mo** — Frame interpolation (converting 24fps to 60fps) can introduce ghosting and warping, especially on hair, fabric, and faces. When possible, generate natively at 60fps for slow-motion rather than interpolating in post. See [Frame Rate Guide](/wiki/frame-rate-guide) for details.
- **Vague motion descriptors** — "Fast" and "slow" are relative. Be specific: `"walks briskly"` vs. `"sprints"`, `"drifts gently"` vs. `"floats motionless"`. Specificity gives the model a clearer target.

See [Frame Rate Guide](/wiki/frame-rate-guide) for technical settings, [Motion Blur & Shutter Angle](/wiki/motion-blur-shutter-angle) for how blur interacts with speed, and [Common Artifacts](/wiki/common-artifacts) for motion-related issues to watch for.
