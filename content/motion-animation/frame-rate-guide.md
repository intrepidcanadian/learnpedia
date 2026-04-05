---
title: "Frame Rate Guide"
category: "Motion & Animation"
summary: "24fps, 30fps, 60fps — how frame rate affects the feel of AI video and which to choose."
related:
  - motion-dynamics
  - ai-video-tools-overview
  - post-production-workflow
---

Frame rate is a creative choice, not just a technical one. It fundamentally changes how motion feels.

## Frame Rates and Their Feel

| FPS | Feel | Use Case |
|---|---|---|
| 24fps | Cinematic, dreamy, "film-like" | Narrative, music videos, anything "movie" |
| 25fps | European broadcast standard (PAL) | TV content for PAL regions |
| 30fps | Smooth, slightly digital, "video-like" | Social media, talking head, vlogs |
| 48fps | Hyper-real, almost too smooth | Experimental (The Hobbit effect) |
| 60fps | Ultra-smooth, gaming feel | Sports, action, slow-mo source |

## AI Video Frame Rates

Most AI video models currently output at lower frame rates (often 8–16 fps internally) and interpolate to the target. This means:

- Requesting 60fps won't give you "true" 60fps motion — it'll be interpolated
- 24fps is often the sweet spot for AI video — matches the model's natural output rate closest
- Frame interpolation tools (RIFE, Topaz Video AI) can smooth output after generation

## Slow-Motion Math

To create slow-mo in post: generate at the highest fps available, then slow down in your editor. 60fps source → 24fps timeline = 2.5× slow motion.

See [Motion Dynamics](/wiki/motion-dynamics) for speed control in prompts and [Post-Production Workflow](/wiki/post-production-workflow) for assembly.
