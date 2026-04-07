---
title: "Shot List Planning"
category: "Workflows"
summary: "How to plan your shots before generating — coverage, pacing, and variety for AI video projects."
related:
  - multi-shot-workflows
  - storytelling-structure
  - camera-angles
  - camera-movements
  - scene-description-language
  - continuity-editing
---

A shot list is your blueprint. It prevents random generation and ensures coverage — the right variety of angles, sizes, and movements to tell your story.

## Shot List Template

| Shot # | Size | Angle | Movement | Subject | Action | Duration | Platform | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | ELS | Aerial | Slow drift forward | City skyline | Establishing | 4s | Runway | Golden hour |
| 2 | MS | Eye level | Static | Character A | Walking | 3s | Kling | Street-level intro |
| 3 | CU | Slight low | Subtle dolly in | Character A face | Looking up | 2s | Seedance | Reaction shot |

The **Platform** column is essential for multi-platform workflows — assign each shot to the platform best suited for it (see [AI Video Tools Overview](/wiki/ai-video-tools-overview) for platform strengths). This prevents wasted credits generating character-heavy shots on platforms with weak consistency, or physics-heavy shots on platforms that can't handle them.

## Coverage Checklist

For any scene, aim to have:

- 1 establishing/wide shot (context)
- 1-2 medium shots (action)
- 1-2 close-ups (emotion)
- 1 detail/insert shot (texture)
- Variety in angle: don't shoot everything at eye level
- At least one moving camera shot for energy

## Pacing Through Variety

- **Fast pacing** — More cuts, shorter clips (1–2s), varied angles
- **Slow pacing** — Longer takes (4–6s), gradual movements, fewer cuts
- **Rhythm** — Alternate between wide and close, static and moving

## AI-Specific Planning Considerations

Shot lists for AI video need extra columns that traditional film doesn't:

### Generation Budget

Not every shot succeeds on the first try. Budget multiple generations per shot:

| Shot Complexity | Expected Generations | Example |
|---|---|---|
| Static landscape, no characters | 1–2 | Establishing wide of a mountain |
| Single character, simple action | 3–5 | Person walking down a street |
| Two characters interacting | 5–10 | Conversation across a table |
| Complex action or physics | 8–15 | Parkour, explosions, crowds |

Add a **Variants** column to your shot list to track how many generations you've budgeted vs. used.

### Consistency Anchors

Mark which shots share visual elements that must match:

- **Character shots:** Note which reference images or character descriptions link them
- **Location shots:** Note the time of day, weather, and color grade that must stay consistent
- **Sequential shots:** Note which shots will be cut together and therefore need matching lighting direction, wardrobe, and background
- **End-frame chained shots:** Clips generated with end-frame chaining (end frame of clip A → start frame of clip B) share implicit visual context. Mark these in your planning — they require fewer generation variants due to built-in continuity

### Fallback Shots

For every complex shot, plan a simpler alternative:

| Primary Shot | Fallback |
|---|---|
| Two characters arguing face to face | OTS of Character A, then reverse OTS of Character B (generate separately) |
| Crane shot rising from street to rooftop | Cut from street-level MS to aerial ELS (two simpler clips) |
| Character catching a thrown object | CU of hands catching + separate CU of the throw (edit together) |

### Priority Ranking

Not all shots are equal. Mark each shot as:

- **Must-have (P1)** — Story doesn't work without it. Generate this first.
- **Should-have (P2)** — Improves the sequence but can be cut.
- **Nice-to-have (P3)** — B-roll, beauty shots, transitions. Generate last with remaining budget.

Use [Scene Description Language](/wiki/scene-description-language) vocabulary when filling in your shot list. Reference [Camera Angles](/wiki/camera-angles) and [Camera Movements](/wiki/camera-movements) for options.
