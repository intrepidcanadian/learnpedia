---
title: "Camera Movements"
category: "Camera & Composition"
summary: "Pan, tilt, dolly, crane, handheld, gimbal — how each movement type translates into AI video prompts."
related:
  - camera-angles
  - lens-choices
  - prompt-templates
  - scene-description-language
---

Static cameras are safe. Movement is where emotion lives. But the wrong movement is worse than none at all.

## Movement Types

### Pan (Horizontal rotation)

Camera rotates left/right on a fixed point. Use for: revealing environments, following lateral movement. Prompt: `"camera pans left/right to reveal…"`

### Tilt (Vertical rotation)

Camera rotates up/down on a fixed point. Use for: revealing height, following vertical movement. Prompt: `"camera tilts up/down from… to…"`

### Dolly / Track (Physical movement)

Camera physically moves forward/backward or side-to-side. The most cinematic movement. Prompt: `"camera dollies in toward [subject]"` or `"tracking shot following [subject]"`

### Crane / Jib (Vertical physical movement)

Camera rises or descends through space. Epic, sweeping. Prompt: `"crane shot rising above [subject]"`

### Zoom (Lens-based)

Focal length changes while camera is static. Different feel from dolly. Prompt: `"slow zoom into [subject's face]"`. Note: **dolly zoom** (Vertigo effect) combines physical movement with opposing zoom for a disorienting effect. Prompt for dolly zoom: `"dolly zoom effect, camera moves forward while zooming out, creating disorienting perspective shift"`.

### Handheld

Organic, human movement. Adds urgency, realism. Prompt: `"handheld camera"` or `"slight handheld shake"`

### Gimbal / Steadicam

Smooth floating movement. Dreamlike, following. Prompt: `"steadicam follow shot"` or `"smooth gimbal tracking"`

### Orbit

Camera circles around the subject. Reveals dimensionality. Prompt: `"camera orbits around [subject]"`

## Combining Movements

AI models can handle simple movement combinations when described clearly:

- **Pan + tilt:** `"camera pans right while tilting up to reveal the skyline"`
- **Dolly + orbit:** `"camera orbits the subject while slowly moving closer"`
- **Crane + pan:** `"crane rises while panning left across the rooftop"`

Stick to two combined movements max. Three or more tends to produce incoherent motion in most current models.

## Movement Speed Matters

Always specify pace. "Camera slowly dollies in" vs. "camera rapidly pushes in" are completely different emotional beats.

**Speed notation conventions for AI video prompts:**

| Speed Term | Approximate Pace | Emotional Register | Example |
|---|---|---|---|
| "imperceptibly" / "barely" | Near-static drift | Tension, unease, stillness | `"camera barely drifts forward"` |
| "slowly" / "gently" | ~1–2s to complete move | Contemplation, intimacy, calm | `"camera slowly pushes in"` |
| "steadily" / "smoothly" | ~3–5s to complete move | Neutral, observational, documentary | `"camera steadily tracks left"` |
| "briskly" / "quickly" | ~1–2s to complete move | Energy, urgency, excitement | `"camera briskly pans right"` |
| "rapidly" / "aggressively" | Sub-1s snap | Shock, chaos, intensity | `"camera rapidly whips to the left"` |

**Note for Seedance 2.0:** Avoid the word "fast" — it degrades output quality. Use "briskly," "rapidly," or "with sudden force" instead. See [Seedance 2.0](/wiki/seedance-2) for details.

## AI Model Reliability by Movement Type

Not all movements are equally achievable in current AI video models. Use this as a rough guide when planning shots:

| Movement | Reliability | Notes |
|---|---|---|
| **Pan** | High | Most models handle smooth horizontal pans well |
| **Tilt** | High | Clean vertical rotations, especially slow tilts |
| **Dolly forward/back** | High | Forward push-ins are the most reliable movement in AI video |
| **Tracking (lateral)** | Medium-High | Works well with a single subject; can drift with complex scenes |
| **Gimbal / Steadicam** | Medium-High | "Smooth follow" language produces good results |
| **Orbit** | Medium | Partial orbits (90–180°) work; full 360° often has spatial inconsistency |
| **Crane** | Medium | Rising shots tend to work; descending crane shots less reliable |
| **Handheld** | Medium | Subtle shake is achievable; heavy handheld can cause artifacts |
| **Zoom** | Medium-Low | Smooth zooms often produce warping or speed inconsistency |
| **Dolly zoom** | Medium | Improved noticeably in Seedance 2.0 and Runway Gen-4; partial perspective shifts now land more often than not, though full Vertigo-style pulls remain inconsistent |

**Practical takeaway:** When a shot depends on movement for storytelling impact, choose high-reliability movements. Save medium/low-reliability movements for shots where you can afford multiple generation attempts.

## Duration and Movement

Movement needs time to read on screen. A 2-second clip barely shows a pan; a 5-second clip lets it breathe:

- **Subtle movements** (slow push, gentle drift): Work in 3–4s clips
- **Full movements** (pan across a scene, orbit): Need 5s+ to complete
- **Fast movements** (rapid tracking, whip pan): Can work in 2–3s but risk incoherent motion

Most platforms now support 5–15 second clips (check your tool's current limits). For shorter clips, favor slower, simpler movements. Save complex movements for 10s+ generations where the motion has time to complete.

See [Camera Angles](/wiki/camera-angles) and [Lens Choices](/wiki/lens-choices) for the other two pillars of camera work.
