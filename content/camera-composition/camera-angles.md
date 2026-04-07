---
title: "Camera Angles"
category: "Camera & Composition"
summary: "How camera angle affects storytelling — eye level, low angle, high angle, Dutch tilt, bird's eye, and more."
related:
  - camera-movements
  - lens-choices
  - scene-description-language
  - composition-rules
---

Camera angle is subconscious storytelling. Before a single word is spoken, the angle tells the audience how to feel about what they're seeing.

## Core Angles

### Eye Level

Camera at subject's eye height. Neutral, objective, documentary-feel. Default for dialogue. In your prompt: `"eye-level shot"` or `"camera at subject's eye height"`.

### Low Angle (Worm's Eye)

Camera looks up at the subject. Makes subjects appear powerful, imposing, heroic, or threatening. In your prompt: `"low angle shot looking up at [subject]"`.

### High Angle

Camera looks down at the subject from an elevated position (but not directly overhead — that's [Top-Down](#top-down--overhead)). Makes subjects appear vulnerable, small, overwhelmed. In your prompt: `"high angle shot looking down on [subject]"`.

### Dutch Tilt (Canted Angle)

Camera tilted on its axis. Creates unease, tension, disorientation. Use sparingly. In your prompt: `"Dutch angle"` or `"canted/tilted frame"`.

### Over-the-Shoulder (OTS)

Camera positioned behind one character looking at another. Creates connection and spatial relationship. In your prompt: `"over-the-shoulder shot"`.

### Top-Down / Overhead

Camera directly above, looking straight down. Abstract, pattern-revealing, God's-eye view. In your prompt: `"top-down overhead shot"` or `"bird's eye view"`.

### Point of View (POV / Subjective)

Camera sees what the character sees. Immersive, first-person perspective. Increasingly effective in AI video for VR-style or horror sequences. In your prompt: `"first-person POV shot"` or `"subjective camera, character's point of view"`.

## Angle + Emotion Cheat Sheet

| Emotion | Angle | Why |
|---|---|---|
| Power | Low angle | Subject towers over viewer |
| Vulnerability | High angle | Subject is diminished |
| Tension | Dutch tilt | World feels off-kilter |
| Intimacy | Eye level + close-up | Face-to-face connection |
| Scale | Extreme low or aerial | Reveals size relationships |

## AI Model Reliability by Angle

Not all angles are equally reliable in current AI video models:

- **Eye level, low angle, high angle:** High reliability — these are well-represented in training data.
- **Over-the-shoulder:** Medium-High — works well with clear subject separation, but can produce spatial inconsistencies with complex scenes.
- **Dutch tilt:** Medium — subtle tilts are reliable; extreme tilts may produce unstable framing.
- **Top-down / overhead:** Medium — flat scenes work well; complex 3D scenes viewed from above can produce perspective distortion.
- **Extreme low angles (worm's eye):** Medium-Low — geometry and perspective can become inconsistent, especially with architectural elements.

When a shot depends on a specific angle for its storytelling impact, choose high-reliability angles. Budget extra generation attempts for medium/low-reliability angles.

Combine angles with [Camera Movements](/wiki/camera-movements) and [Lens Choices](/wiki/lens-choices) for complete camera direction. See [Composition Rules](/wiki/composition-rules) for framing within any angle.
