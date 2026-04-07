---
title: "Frame Rate Guide"
category: "Motion & Animation"
summary: "24fps, 30fps, 60fps — how frame rate affects the feel of AI video and which to choose."
related:
  - motion-dynamics
  - motion-blur-shutter-angle
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

Older AI video models output at lower frame rates (often 8–16 fps internally) and interpolate to the target. Leading current-gen platforms — [Seedance 2.0](/wiki/seedance-2), Runway Gen-4, and Kling 2.0+ — generate at native target frame rates without interpolation. However, many other platforms (including budget and open-source models) still interpolate internally, so native high-fps generation is not yet universal across the ecosystem.

- **Older/budget models:** May still interpolate internally; requesting 60fps can give synthetic smoothness rather than true temporal detail
- **Current-gen models (Seedance 2.0, Runway Gen-4, Kling 2.0+):** Generate at native target frame rates with genuine temporal resolution
- 24fps is now primarily a **stylistic choice** (cinematic feel) rather than a technical limitation. For native-60fps platforms like Seedance 2.0, 60fps is the natural default — use 24fps when you want the filmic cadence
- Frame interpolation tools (RIFE, Topaz Video AI) remain useful for slow-motion conversion and for smoothing output from older/budget models

## Choosing a Frame Rate for Your Project

| Project Type | Recommended FPS | Why |
|---|---|---|
| Narrative / short film | 24fps | Cinematic motion blur, audience expectation |
| Social media (TikTok, Reels) | 30fps | Platform default, smooth on mobile |
| Product showcase | 30–60fps | Smooth orbits and reveals |
| Action / sports content | 60fps | Crisp fast motion, slow-mo flexibility |
| Slow-motion hero shots | 60fps (generate) → 24fps (timeline) | 2.5× slow-mo without interpolation artifacts |
| Mixed project | 24fps timeline | Generate action clips at 60fps for selective slow-mo |

**General rule:** Match your timeline frame rate to your delivery platform. Generate individual clips at higher fps only when you need slow-motion or ultra-smooth motion for specific shots.

## Slow-Motion Math

To create slow-mo in post: generate at the highest fps available, then slow down in your editor. 60fps source → 24fps timeline = 2.5× slow motion.

| Source FPS | Timeline FPS | Slow-Mo Factor |
|---|---|---|
| 60fps | 24fps | 2.5× |
| 60fps | 30fps | 2× |
| 48fps | 24fps | 2× |
| 120fps | 24fps | 5× |
| 120fps | 30fps | 4× |
| 30fps | 24fps | 1.25× (barely noticeable) |

## Frame Interpolation Caveats

Tools like RIFE and Topaz Video AI can add frames to create slow-motion from low-fps sources, but with trade-offs:

- **Ghosting** — Fast-moving objects get semi-transparent duplicates, especially hands and faces
- **Warping** — Complex motion (hair, fabric, water) produces visible distortion at interpolated frames
- **Diminishing returns** — Interpolating 24fps → 60fps works reasonably; 8fps → 60fps produces noticeable artifacts
- **Best practice:** Use interpolation to go 1.5–2× (e.g., 24fps → 48fps). Beyond that, generate natively at a higher fps if your model supports it

See [Motion Dynamics](/wiki/motion-dynamics) for speed control in prompts and [Post-Production Workflow](/wiki/post-production-workflow) for assembly.
