---
title: "Audio for AI Video"
category: "Post-Production"
summary: "Sound design, music, voiceover, and SFX strategies for AI-generated video content."
related:
  - post-production-workflow
  - ai-video-tools-overview
  - multi-shot-workflows
  - responsible-ai-video
---

Most AI video is silent — audio is what makes it feel real. Sound is 50% of the viewing experience — often more. [Seedance 2.0](/wiki/seedance-2) generates audio natively (dialogue with lip-sync, sound effects), but most other platforms (Runway, Kling, Sora, Pika) still do not include native audio generation — you'll need to add sound in post. Even with native audio, post-production sound design elevates the result significantly.

## Audio Layers

1. **Music / Score** — Sets overall mood and pace. Lay this down first.
2. **Sound Effects (SFX)** — Footsteps, ambient noise, impacts. Sells the reality.
3. **Foley** — Subtle sounds: clothing rustle, cup on table, paper turning.
4. **Ambient / Room Tone** — Background hum of the environment. Never silence.
5. **Dialogue / Voiceover** — AI-generated or recorded narration.

## AI Audio Tools

### Voiceover and Dialogue

- **ElevenLabs** — AI voiceover and voice cloning. Natural-sounding narration with multi-language support. **Note:** Voice cloning of real persons requires their explicit consent. Check ElevenLabs' terms and your jurisdiction's laws before cloning any voice.
- **Seedance 2.0** — Native audio generation with automatic lip-sync (see Sound Design Tips below for reliability notes). Best for single-speaker dialogue baked into the video generation itself.
- **Runway, Kling, Sora, Pika** — No native dialogue generation. Use post-sync voiceover (ElevenLabs or recorded narration) laid over generated video. Voiceover narration is more forgiving than lip-sync dialogue since it doesn't need to match mouth movements.

### Music and SFX

- **Suno / Udio** — AI music generation. Custom scores from text prompts. Check each platform's commercial licensing terms before using in paid projects.
- **Epidemic Sound / Artlist** — Licensed music libraries for commercial use.
- **Freesound.org** — Free SFX library (check individual licenses per clip).

## Sound Design Tips

- Match sound to visual rhythm — cuts, impacts, and beats should align.
- Layer ambient sounds — a city scene needs traffic, wind, distant voices, not just one track.
- Use silence strategically — a moment of quiet before impact is powerful.
- Room tone is essential — even "quiet" scenes need ambient noise or they feel dead.
- AI-generated dialogue lip-sync varies by method: Seedance 2.0's native audio generation includes automatic lip-sync matching and produces strong results for single-speaker scenes. Multi-character dialogue (2+ speakers in the same clip) has a noticeably lower lip-sync success rate (anecdotally around 60–70% based on community testing, though results vary by scene complexity and platform version) — alignment can drift, especially in fast-paced exchanges or when characters overlap. For complex dialogue scenes, split multi-speaker shots into separate single-character clips or use voiceover narration (which is far more forgiving since it doesn't require lip-sync). Post-sync approaches (adding dialogue to pre-generated video) remain the least reliable option.

## Mixing Levels (Reference Targets)

When mixing audio for AI video, use these ballpark levels as a starting point:

| Layer | Peak Level (dBFS) | Notes |
|---|---|---|
| Dialogue / Voiceover | -12 to -6 | Loudest element. Compress lightly (3:1) for consistency. |
| Music (under dialogue) | -24 to -18 | Duck under speech. Automate volume — louder in gaps, quieter under VO. |
| Music (standalone) | -14 to -8 | When there's no dialogue competing. |
| Sound Effects | -18 to -10 | Varies by impact. A door slam can spike; ambient SFX stay low. |
| Foley | -30 to -20 | Barely perceptible but subconsciously felt. |
| Room Tone / Ambience | -40 to -30 | Always present. Fill every gap with it. |

**Note:** The levels above are **peak reference levels** (dBFS) — useful for setting relative balance between layers. Your **final integrated loudness** (LUFS) is what matters for delivery and is measured across the whole mix, not per-layer.

**Target loudness for delivery:** -14 LUFS for YouTube/web/streaming, -23 LUFS for European broadcast (EBU R128), -24 LUFS for US broadcast (ATSC A/85). Use your DAW's loudness meter (or a free plugin like Youlean Loudness Meter) to check before export.

## Common Audio Mistakes

- **No room tone between cuts** — Silence between clips feels jarring. Record or generate 30 seconds of room tone and lay it across the entire timeline.
- **Music too loud under voiceover** — If you can't clearly understand every word, the music is too loud. Duck it 6-10 dB under speech.
- **SFX not synced to visuals** — Even 2-3 frames of offset between a visual impact and its sound breaks immersion. Nudge SFX to align exactly with the visual hit.
- **Ignoring high and low frequencies** — Apply a high-pass filter at 80-100 Hz on dialogue and SFX to remove rumble. Roll off harsh highs above 12 kHz on AI-generated voices if they sound metallic.
- **No final limiter** — Place a limiter on the master bus set to -1 dBFS to prevent clipping on export.

Audio is integrated in the [Post-Production Workflow](/wiki/post-production-workflow) after picture-lock.
