---
title: "Upscaling & Enhancement"
category: "Post-Production"
summary: "Tools and techniques for upscaling AI video — resolution enhancement, frame interpolation, and detail recovery."
related:
  - post-production-workflow
  - common-artifacts
  - ai-video-tools-overview
---

Most current AI video tools output at 1080p natively, and some newer models go higher — [Seedance 2.0](/wiki/seedance-2) supports generating up to native 2K (2048×1080), though most projects generate at 1080p or 1440p. For targeting 4K delivery or working with older 720p outputs, you'll need to upscale. Modern AI upscalers are remarkably good.

## When to Upscale (and When Not To)

- **Upscale** when your target delivery resolution exceeds your native output (e.g., 1080p output → 4K YouTube delivery)
- **Skip upscaling** when output matches delivery resolution — extra processing adds noise without visual benefit
- **Re-generate at higher resolution** instead of upscaling when the platform supports it — native resolution always beats upscaled

## Upscaling Tools

| Tool | Type | Strength | Cost |
|---|---|---|---|
| Topaz Video AI | AI upscaler | Best all-rounder: upscale, denoise, interpolate, stabilize; face-specific enhancement mode | Paid (~$150–300/yr depending on tier) |
| Real-ESRGAN | AI upscaler | Spatial upscaling with detail synthesis (adds plausible detail) | Free / open source |
| RIFE | AI interpolation | Frame interpolation (increase FPS); best for slow-motion conversion | Free / open source |
| DaVinci Resolve (Super Scale) | Traditional + AI | Built-in upscaling in the pro editor | **Studio version only** (Paid ~$295 one-time) — not available in the free version |

**AI vs. traditional upscaling:** AI upscalers (Real-ESRGAN, Topaz) use neural networks to synthesize plausible detail. Traditional upscaling (bicubic, Lanczos) preserves existing data without adding detail. Use AI for quality improvement, traditional for speed or when you need pixel-accurate output.

## Upscaling Strategy

1. **Fix artifacts first** — Upscaling amplifies problems. Clean up before scaling up. Note: upscaling cannot fix structural issues like face morphing or limb distortion — re-generate those clips instead.
2. **Denoise before upscaling** — This is critical. Denoising after upscaling is far less effective because noise gets baked in at higher resolution. Use Topaz's Denoise filter or Neat Video first.
3. **Deflicker if needed** — Address any brightness flickering between frames before upscaling locks it in.
4. **Upscale spatial resolution** — 720p → 2K or 4K using Real-ESRGAN or Topaz.
5. **Face enhancement** — For character-focused content, use Topaz Video AI's face enhancement to isolate and upscale faces separately from backgrounds.
6. **Interpolate frames if needed** — Use RIFE to add intermediate frames for smoother motion. Works well for slow-motion conversion (60fps source → 24fps timeline = 2.5× slow-mo). **Caution:** frame interpolation can introduce ghosting or unnatural motion on fast action — review at full speed before committing.
7. **Sharpen selectively** — Add subtle sharpening to faces and key details, not uniformly.

## Resolution Targets by Platform

| Platform | Recommended Upload | Notes |
|---|---|---|
| YouTube | 2160p (4K) or 1440p | YouTube re-encodes everything; higher source = better result |
| TikTok / Reels | 1080p | Higher resolutions get downscaled anyway |
| Streaming / broadcast | 1080p or 4K | Check delivery specs for the specific platform |

## Intermediate Formats: Preserve Quality Before Upscaling

Before running any upscaling or enhancement pipeline, convert your AI-generated clips to a lossless or near-lossless intermediate format. AI platforms typically deliver H.264/H.265, which is lossy — each processing step on a lossy file compounds quality loss.

**Recommended intermediate formats:**

| Format | Use Case | Notes |
|---|---|---|
| ProRes 422 HQ | Editing and upscaling pipeline | Industry standard intermediate; large files but fast to decode; Mac-native, Windows via plugins |
| DNxHR HQ | Editing and upscaling pipeline | Avid's equivalent to ProRes; better Windows support |
| FFV1 | Archival / maximum fidelity | Truly lossless, open-source; very large files |
| PNG sequence | Frame-by-frame processing | Lossless per-frame; ideal for tools that process individual frames (Real-ESRGAN) |

**Workflow:** AI platform export (H.264) → transcode to ProRes/DNxHR → denoise → upscale → export final delivery format. Never upscale directly from the platform's compressed H.264 output if you can avoid it.

## GPU Requirements

AI upscaling is GPU-intensive. Here's what to expect:

- **Real-ESRGAN:** Requires an NVIDIA GPU with CUDA support. 6GB VRAM minimum for reliable 1080p→4K processing (4GB may work for smaller frames but frequently causes out-of-memory errors at 4K output); 8GB+ recommended for comfortable headroom. CPU fallback exists but is very slow (10–50× slower).
- **Topaz Video AI:** Requires a dedicated GPU (NVIDIA or AMD). 6GB+ VRAM recommended for smooth 4K upscaling. Apple Silicon Macs are supported natively.
- **RIFE (frame interpolation):** Lower GPU requirements than spatial upscaling; 4GB VRAM is usually sufficient.
- **DaVinci Resolve Super Scale:** Benefits from GPU acceleration but runs on CPU too; NVIDIA GPUs with 8GB+ VRAM give the best performance.

**Budget tip:** If you don't have a powerful GPU, process clips individually rather than batching, use lower upscale factors (2× instead of 4×), or use cloud GPU services (Vast.ai, RunPod) for batch processing.

## Quality Ceiling

Upscaling can't add information that isn't there. A badly generated 720p clip upscaled to 4K is still a bad clip at 4K. Focus on generation quality first, then upscale the best takes.

**Bitrate matters too** — upscaled 4K with low bitrate looks worse than native 1080p with good bitrate. Use high bitrate exports (50+ Mbps for 4K H.264, or use ProRes/DNxHR for editing).

This is typically the last technical step before final export. See [Post-Production Workflow](/wiki/post-production-workflow) for the full pipeline.
