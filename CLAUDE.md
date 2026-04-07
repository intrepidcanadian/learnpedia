@AGENTS.md

## StarCraft 25-Player Storyboard Project

The main creative project is a cinematic AI-generated trailer for a StarCraft tournament featuring 25 real players. The storyboard lives at `content/workflows/starcraft-25-player-storyboard.md`.

**Current state (updated 2026-04-07):** 25 automated review passes complete. All Seedance 2.0 prompt rules satisfied. Virtual test audience simulation run. 6 pending structural decisions documented in the storyboard's "Virtual Test Audience Findings" section — these need user approval before implementation.

**Before making storyboard changes:** Read the memory file at `~/.claude/projects/-Users-tony-Documents-learnpedia/memory/project_storyboard_review_2026-04-07.md` for the "NEXT RUN INSTRUCTIONS" section. This tells you what's been done and what to work on next. After making changes, update that memory file so the next run knows what happened.

**Key rules:**
- Every beat must be under 150 words (aim for 60-100; climactic beats may use up to 150)
- One primary camera *intent* per beat (compound movements describing a single continuous arc are OK, e.g. "tracks laterally then holds")
- Max 2 characters per Seedance generation
- No meta-commentary in prompts (Seedance can't render narrative intent)
- The word "fast" is banned in Seedance prompts (Apiyi: "most likely to degrade quality")
- Separate camera motion from subject motion in sentence structure
- Always run a compliance audit after editing prompts
