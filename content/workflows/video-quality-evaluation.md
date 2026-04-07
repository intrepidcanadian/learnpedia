---
title: "AI Video Quality Evaluation Framework"
category: "Workflows"
summary: "How to evaluate AI-generated video quality at every production stage — pre-generation storyboard simulation, post-generation technical checks, and audience reaction testing."
related:
  - starcraft-25-player-storyboard
  - shot-list-planning
  - prompt-engineering-fundamentals
  - common-artifacts
  - seedance-2
---

You can't improve what you can't measure. This framework gives you concrete evaluation methods at every stage of AI video production, from storyboard to final cut.

**Note:** The examples below use esports/gaming trailers as a running scenario, but every technique here — persona simulation, intensity mapping, artifact checklists, comparison scoring — applies universally to any AI video project (product demos, music videos, short films, social content). Adapt the persona prompts and reference material to your genre.

## The Three-Stage Evaluation Pipeline

| Stage | When | What You Evaluate | Tools |
|---|---|---|---|
| **Pre-Generation** | Before spending any compute | Storyboard pacing, emotional arc, narrative clarity | AI persona simulation, intensity mapping |
| **Per-Clip** | After each Seedance generation | Technical quality, character fidelity, physics believability | AI vision analysis, artifact checklist |
| **Assembly** | After editing clips together | Flow, pacing, music sync, cumulative impact | Test screening, A/B comparison |

---

## Stage 1: Pre-Generation Evaluation

### Technique: Multi-Persona Storyboard Simulation

Before generating a single frame, run your storyboard through 3-5 AI "viewers" with different perspectives. Each reads the prompts in sequence and reacts as if watching the final video.

**Recommended personas:**

| Persona | What They Catch | Prompt Focus |
|---|---|---|
| **Casual viewer** | Confusion, boredom, attention drops | "You watch esports occasionally. Read these prompts as if watching the trailer. Where do you zone out?" |
| **Superfan** | Authenticity gaps, fan-service misses, unfairness | "You're a hardcore fan of this game. What feels fake? Which players got screwed?" |
| **Trailer editor** | Pacing monotony, rhythm problems, music sync gaps | "You've cut trailers for major studios. Where's the structural monotony?" |
| **First-time viewer** | Narrative clarity, emotional accessibility | "You've never heard of this game. Can you follow the story? Do you care?" |
| **The critic** | Cliche detection, derivative moments | "You review video content professionally. What feels like you've seen it before?" |

**How to run it:** Use any LLM with a large context window. Feed the full storyboard text and the persona prompt. Ask for:

1. **Attention map** — engagement score (1-10) per clip
2. **Confusion points** — where the narrative gets muddy
3. **Peak moments** — the 3-5 best beats (quote the exact language)
4. **Fatigue onset** — the timestamp where repetition starts
5. **Memory test** — which characters stick and why
6. **Missing emotions** — what feelings a great trailer needs that yours doesn't hit

**What to do with results:** Look for consensus across personas. If 3/5 personas flag the same clip as boring, that clip needs work. If only 1 persona flags something, it might be persona-specific taste rather than a real problem.

### Technique: Emotional Intensity Mapping

Chart the intended emotional intensity of every beat on a 1-10 scale:

```
10 |                                              *  *
 9 |                                           *        *
 8 |                               *  *     *              *
 7 |                    *  *  *  *      *  *                  *
 6 |              *  *                                          *
 5 |        *  *                                                  *
 4 |     *                                                          *
 3 |  *                                                               *
 2 | *                                                                  *
 1 |
   +-------------------------------------------------------------------->
   Cold  Title  Act1 (clips 1-7)   Act2 (8-13)   Act3 (14-20)  Finale
```

**Rules for a good intensity curve:**
- Never flat for more than 30 seconds (3+ clips at the same level = monotony)
- Each act peak should exceed the previous act's peak
- At least one valley per act (breathing room)
- The finale must be the absolute peak OR a dramatic drop to silence (not middling)
- The opening 5 seconds must be at least 6/10 (hook or lose them)

### Technique: Distinctiveness Audit

For each clip, answer: "If I described this clip in one sentence, could someone tell it apart from every other clip?"

Rate each clip:
- **Unique** — has a signature moment no other clip has (ceiling reveal, one-handed catch, walking through fire)
- **Typed** — fits a recognizable archetype but isn't unique (chase, standoff, ambush)
- **Generic** — could be swapped with another clip and nobody would notice

If more than 30% of clips score "generic," the trailer will feel repetitive regardless of visual quality.

---

## Stage 2: Per-Clip Evaluation (Post-Generation)

### Technique: AI Vision Quality Check

After generating each clip, screenshot 3 key frames (one per beat) and feed them to an AI vision model (Claude, GPT-4V) with this prompt:

```
Evaluate this AI-generated video frame on 7 dimensions. Score each 1-10:

1. CHARACTER FIDELITY — Does the character look like the reference image?
   Does the face read as a specific person or a generic face?
2. PHYSICS BELIEVABILITY — Do objects, bodies, and materials behave
   physically correctly? Weight, momentum, fabric, particles?
3. COMPOSITION — Rule of thirds, depth, leading lines, headroom?
   Does the framing feel intentional or random?
4. LIGHTING CONSISTENCY — Does the lighting match the prompt? Is it
   consistent across the frame? Any impossible shadows?
5. ARTIFACT SEVERITY — Floating limbs? Extra fingers? Morphing faces?
   Texture swimming? Rate from 10 (none) to 1 (unwatchable).
6. EMOTIONAL READ — Can you tell what emotion this moment is supposed
   to convey just from the frame? (tension, triumph, fear, respect)
7. STYLE CONSISTENCY — Does this frame look like it belongs in the same
   film as [reference frame from a previous clip]?

Overall: PASS (7+ average), CONDITIONAL (5-6 average, fixable), or
REJECT (below 5, re-generate).
```

### Technique: Artifact Checklist

Run through this checklist for every generated clip. Any "yes" triggers investigation:

| Check | What to Look For | Severity |
|---|---|---|
| Face drift | Character's face changes between beats | HIGH — re-generate |
| Hand horror | Extra fingers, fused hands, impossible grips | MEDIUM — may be fixable in post |
| Physics break | Objects passing through each other, impossible motion | HIGH — breaks immersion |
| Texture swim | Surfaces rippling or morphing when they should be static | LOW — often unnoticeable at speed |
| Identity swap | Two characters switching appearances mid-clip | CRITICAL — re-generate |
| Lighting flip | Light source changing direction between beats | MEDIUM — color grade may fix |
| Text generation | Unwanted text/symbols appearing in the frame | LOW — crop or mask in post |
| Scale drift | Character or object size changing between beats | MEDIUM — depends on visibility |

### Technique: Audio Quality Check

Seedance 2.0 generates native audio alongside video. After each clip, evaluate the audio on 4 dimensions:

```
Evaluate this AI-generated clip's audio on 4 dimensions. Score each 1-10:

1. AUDIO-VISUAL SYNC — Do impacts, footsteps, and collisions sound when
   they visually happen? Any desync (sound before/after the visual event)?
2. SFX BELIEVABILITY — Do the sound effects match the scene? Does a
   concrete impact sound like concrete? Does wind sound like wind?
   Or does it sound generic/synthesized?
3. AMBIENT CONSISTENCY — Does the background audio stay consistent across
   the clip? Any sudden changes in room tone, wind level, or reverb?
4. DIALOGUE CLARITY — If characters speak, is it clear and properly
   lip-synced? If no dialogue, score N/A.

Audio verdict: KEEP (7+ average — use Seedance native audio in final mix),
REPLACE (4-6 — use as reference but replace with sourced SFX in post),
MUTE (below 4 — discard and build audio entirely in post).
```

> **Why this matters:** The storyboard's score composition strategy uses Seedance native audio as the "reality" layer at ~60% volume. If native audio consistently scores REPLACE or MUTE, the strategy shifts to post-only audio, which changes the production timeline.

### Technique: Time-Bracket Precision Check

For clips using time brackets (`[0-5s]`, `[5-10s]`, `[10-15s]`), verify that actions actually occur in their specified windows:

1. Play the clip and note the actual timestamp when each beat's primary action begins
2. Compare to the specified bracket start time
3. Log the drift: `actual_start - bracket_start`

| Drift | Rating | Implication |
|---|---|---|
| ±0.5s | Precise | Time brackets are reliable — use variable timing confidently |
| ±1-2s | Approximate | Brackets are guidelines — keep beat structure but don't rely on frame-accurate timing |
| ±3s+ | Loose | Brackets are suggestions — rewrite all variable-timing clips (2-5-8, 8-5-2) to uniform 5-5-5 |

> **Run this on the first test clip.** This is the single most important assumption to validate because the entire variable beat timing system (Clips 4, 11, 17) depends on it. If brackets are loose, those clips need to be rewritten before batch generation.

### Technique: A/B Prompt Testing

For your 3 most important clips (the ones personas flagged as peak moments), generate 2 versions with ONE variable changed:

- Version A: original prompt
- Version B: one element modified (different camera move, different lighting, different action verb)

Feed both to AI vision and ask: "Which version better conveys [intended emotion]? Which has fewer artifacts? Which would you watch twice?"

This isolates what actually matters in your prompts vs. what's decoration.

---

## Stage 3: Assembly Evaluation

### Technique: Silent Playback Test

Watch the assembled edit with NO audio. If the story reads clearly and the pacing feels right without music, the visual edit is strong. Music should enhance, not carry.

Questions to answer during silent playback:
- Can you tell which moments are "big" just from the visuals?
- Do you feel the escalation across acts?
- Does the montage rhythm work without percussion hits?
- Does the finale land without the bass impact?

If silent playback feels flat, the problem is editorial, not musical.

### Technique: Audio-Only Test

Listen to just the audio track (Seedance native audio + score) without watching the video. Does it tell an emotional story on its own? Can you feel the pacing? Do the silence moments actually feel silent, or is there unwanted noise?

### Technique: 3-Second Rule

Show the first 3 seconds to someone with zero context. Ask:
- "What is this?" (they should say something about sci-fi/gaming/battle)
- "Do you want to see more?" (binary yes/no)
- "What do you expect to happen next?" (their expectation reveals your hook's promise)

If they can't answer any of these, the cold open isn't working.

### Technique: Simulated Social Media Reaction

Feed the assembled storyboard (or actual footage stills in sequence) to an AI and ask:

```
You are scrolling through Twitter/X and this video autoplays in your feed.
You have 3 seconds before you decide to keep scrolling or stop and watch.

1. Do you stop? Why or why not?
2. If you watch to the end, do you retweet it? What caption do you write?
3. What's the top reply?
4. Does this make you want to watch the tournament? Rate 1-10.
5. If you're a content creator, do you react to this? What's your thumbnail?
```

This simulates the actual distribution context. A trailer that works in a theater might fail on a phone screen in a feed.

### Technique: Comparison Scoring

Find 3 reference trailers in the same genre (esports cinematics, game trailers) and score yours against them on:

| Dimension | Your Trailer | Reference A | Reference B | Reference C |
|---|---|---|---|---|
| Hook (first 3s) | /10 | /10 | /10 | /10 |
| Peak moment | /10 | /10 | /10 | /10 |
| Character memorability | /10 | /10 | /10 | /10 |
| Rewatchability | /10 | /10 | /10 | /10 |
| Share-ability | /10 | /10 | /10 | /10 |

You don't need to beat the references. You need to know WHERE you're weaker and decide if that gap matters.

---

## Quality Gates

Use these gates to decide whether to proceed at each stage:

### Gate 1: Pre-Generation Sign-Off

- [ ] Intensity curve has no flat zones longer than 30s
- [ ] All 3+ persona simulations run, consensus issues addressed
- [ ] Every clip scores "unique" or "typed" on the distinctiveness audit
- [ ] At least 5 "whoa" moments identified and spread across the timeline

### Gate 2: Style Anchor Approval

- [ ] First 3 test clips generated (environment, duo, emotional)
- [ ] All 3 pass the AI Vision Quality Check (7+ average)
- [ ] Artifact checklist shows no CRITICAL or HIGH issues
- [ ] Style is consistent across the 3 test clips
- [ ] A/B test run on at least 1 clip to validate prompt approach
- [ ] Time-bracket precision measured — drift rating determines whether variable timing (2-5-8) is viable
- [ ] Audio quality check run on all 3 test clips — verdict determines score composition strategy (native audio layer vs. post-only)
- [ ] Constraint validation tests complete (see storyboard "Test Clip Validation Priorities" table)

### Gate 3: Full Generation Complete

- [ ] All clips pass the artifact checklist
- [ ] Character fidelity scores 7+ for both players in every duo clip
- [ ] No identity swaps across any clip
- [ ] Faction gear visually distinct (can you tell Terran/Zerg/Protoss at a glance?)
- [ ] Audio quality check: no clip scores MUTE; clips scoring REPLACE have sourced SFX replacements ready

### Gate 4: Final Cut Approval

- [ ] Silent playback test passes (story reads without audio)
- [ ] 3-second rule passes (hook works on zero-context viewers)
- [ ] Montage rhythm works (cuts feel purposeful, not random)
- [ ] Simulated social media reaction scores 7+ on "would you share?"
- [ ] Comparison scoring within 2 points of reference trailers on all dimensions

---

## Iteration Protocol

When a clip fails evaluation:

1. **Identify the failing dimension** (character fidelity? physics? composition?)
2. **Isolate the prompt element** responsible (is it the action verb? the camera? the lighting?)
3. **Change ONE variable** and re-generate (per Seedance's "iterate one variable" rule)
4. **Re-evaluate** the same dimension
5. **Document what worked** for future clips

Maximum 3 re-generations per clip before escalating to a prompt rewrite. If 3 variations of the same prompt all fail on the same dimension, the prompt structure needs to change, not just one element.

---

## Tools Summary

| Evaluation Type | When to Use | Cost |
|---|---|---|
| Persona simulation | Pre-generation, free | LLM API calls only |
| Intensity mapping | Pre-generation, free | Manual or LLM-assisted |
| Distinctiveness audit | Pre-generation, free | Manual review |
| AI Vision quality check | Per-clip, after generation | LLM API call per frame |
| Audio quality check | Per-clip, after generation | Manual review (listen + score) |
| Time-bracket precision | First 3 test clips only | Manual review (timestamp actions) |
| Artifact checklist | Per-clip, after generation | Manual review |
| A/B prompt testing | Per key clip, doubles generation cost | 2x Seedance cost per tested clip |
| Silent/audio playback | Assembly stage, free | Your time |
| 3-second rule | Assembly stage, free | 1 person for 10 seconds |
| Social media simulation | Assembly stage, free | LLM API call |
| Comparison scoring | Assembly stage, free | Manual + reference viewing time |
