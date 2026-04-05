---
title: "Upscaling & Enhancement"
category: "Post-Production"
summary: "Tools and techniques for upscaling AI video — resolution enhancement, frame interpolation, and detail recovery."
related:
  - post-production-workflow
  - common-artifacts
  - ai-video-tools-overview
---

Most AI video outputs at 720p–1080p. For professional use, you'll need to upscale. Modern AI upscalers are remarkably good.

## Upscaling Tools

| Tool | Strength | Cost |
|---|---|---|
| Topaz Video AI | Best all-rounder: upscale, denoise, interpolate, stabilize | Paid ($299 perpetual) |
| RIFE | Frame interpolation (increase FPS) | Free / open source |
| Real-ESRGAN | Spatial upscaling (increase resolution) | Free / open source |
| DaVinci Resolve (Super Scale) | Built-in upscaling in the pro editor | Free / Paid Studio |

## Upscaling Strategy

1. **Fix artifacts first** — Upscaling amplifies problems. Clean up before scaling up.
2. **Upscale spatial resolution** — 720p → 2K or 4K using Real-ESRGAN or Topaz.
3. **Interpolate frames** — If output is choppy, use RIFE to add intermediate frames.
4. **Sharpen selectively** — Add subtle sharpening to faces and key details, not uniformly.

## Quality Ceiling

Upscaling can't add information that isn't there. A badly generated 720p clip upscaled to 4K is still a bad clip at 4K. Focus on generation quality first, then upscale the best takes.

This is typically the last technical step before final export. See [Post-Production Workflow](/wiki/post-production-workflow) for the full pipeline.
