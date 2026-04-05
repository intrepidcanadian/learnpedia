---
title: "StarCraft 25-Player Introduction Storyboard"
category: "Workflows"
summary: "Full storyboard for a cinematic StarCraft esports player intro video using Seedance 2.0 — 25 players, epic action, and consistent character design."
related:
  - seedance-2
  - multi-shot-workflows
  - shot-list-planning
  - character-consistency-fundamentals
  - camera-angles
  - mood-lighting
---

A complete production storyboard for introducing 25 StarCraft players in a cinematic video using [Seedance 2.0](/wiki/seedance-2). Designed to leverage Seedance's physics-aware action, multi-shot generation, native audio, and @ reference system.

> **How to read this storyboard:**
>
> - **Code blocks** (` ``` `) = the actual prompt you paste into Seedance 2.0
> - **Principles applied** (blockquotes) = production notes explaining which wiki principles make each prompt effective. These are for learning and iteration — don't paste them into Seedance.

---

## Video Overview

| Property | Value |
|---|---|
| Total duration | ~4:30 – 5:00 |
| Per-player segment | 8–10 seconds (2 clips stitched) |
| Resolution | 2K (2048×1080) |
| Aspect ratio | 21:9 ultrawide cinematic |
| FPS | 60fps (slowed to 24fps for hero moments) |
| Style | Dark sci-fi cinematic, StarCraft universe aesthetic |
| Audio | Seedance native audio + post-production score |

## Structure

```
[0:00 – 0:25]  COLD OPEN — Establishing the world (aerial → ground-level)
[0:25 – 0:40]  TITLE CARD — Tournament name reveal
[0:40 – 7:05]  PLAYER INTRODUCTIONS — 25 players × ~8-10s each
  ├── Terran players (1–9)
  ├── Zerg players (10–17)
  └── Protoss players (18–25)
[7:00 – 7:30]  FINALE — All players montage + event title
```

---

## Pre-Production Checklist

### 1. The Bridging Problem

The hero character `@` reference only locks the **player's face and costume**. But each player segment has 2 clips (Clip A portrait → Clip B action) that also need to match on:

- **Signature unit** — the siege tank in Clip A must be the same siege tank in Clip B
- **Environment** — the canyon, bridge, hive platform must look identical across both clips
- **Lighting conditions** — color temperature, time of day, atmosphere must carry over
- **Props and set dressing** — consoles, cockpit interiors, organic structures

Without explicit bridging, Seedance generates each clip independently and you get two slightly different siege tanks in two different canyons.

### 2. Bridging Asset System

For each player, prepare **4 reference layers** (not just the character):

#### Layer 1: Character Reference (`@character`)

The player's face and costume. Same as before.

```
"Semi-realistic digital portrait of a [NATIONALITY] esports competitor
in their mid-20s, intense focused expression, dramatic side-lighting
in [FACTION COLOR — blue for Terran / purple for Zerg / gold for Protoss],
dark background, cyberpunk-military aesthetic, high detail,
painterly digital art style, 4K"
```

#### Layer 2: Unit/Vehicle Reference (`@unit`)

A standalone hero render of the player's signature unit. Generate this ONCE in Midjourney/Flux, then use as `@object` reference in both Clip A and Clip B.

```
"Detailed render of a [UNIT NAME] from StarCraft,
[SPECIFIC DESIGN DETAILS — markings, damage, color scheme],
[FACTION COLOR LIGHTING], 3/4 angle view,
dark neutral background, high detail, concept art style, 4K"
```

**Why this matters:** A "siege tank" prompt without a reference image gives you a generic tank each time. With a reference image, you get the SAME tank — same turret shape, same weathering, same paint scheme — across both clips.

#### Layer 3: Environment Reference (`@scene`)

A still image establishing the environment both clips share. Generate this as a wide establishing shot, then use as scene reference.

```
"[ENVIRONMENT DESCRIPTION] — [LOCATION], [TIME OF DAY],
[WEATHER/ATMOSPHERE], [KEY LANDMARKS OR SET PIECES],
[FACTION COLOR PALETTE], [LIGHTING SETUP],
wide shot, concept art style, cinematic aspect ratio, 4K"
```

**Why this matters:** "A scorched canyon" generates a different canyon every time. With a scene reference, the rock formations, sky color, and ground texture stay consistent.

#### Layer 4: Last-Frame Bridge (Clip A → Clip B)

After generating Clip A, **screenshot the final frame** and feed it as the starting image for Clip B's image-to-video generation. This is the strongest consistency tool — Clip B literally begins where Clip A ended.

**Workflow:**
1. Generate Clip A using `@character` + `@unit` + `@scene`
2. Export the last frame of the best Clip A take
3. Feed that frame as i2v input for Clip B, along with the same `@character` + `@unit` references
4. Write Clip B's prompt as a **motion prompt only** (what changes from the last frame, not what the scene looks like)

### 3. Per-Player Reference Asset Checklist

Every player needs these 4 assets generated BEFORE any video clips:

| Player | @character | @unit | @scene | Last-frame bridge |
|---|---|---|---|---|
| 1 — Commander | Portrait, commander uniform | Battlecruiser (specific hull markings, damage) | Bridge interior (consoles, viewport, warning lights) | Last frame of Clip A bridge → Clip B yamato blast |
| 2 — Marine King | Portrait, marine armor + visor | Marine squad (armor detail, rifle model) | Rain-soaked bunker line (fortification style, rain density) | Last frame of bunker → firing line |
| 3 — Siege Master | Portrait, desert coat | Siege tank (deployed mode, turret detail, paint) | Scorched canyon (rock formations, sun angle, heat haze) | Last frame of tank turret → shell trajectory |
| 4 — Ghost | Portrait, cloak-shimmer suit | Nuclear missile (warhead detail, red laser) | Dark corridor (emergency lighting, wall panels) | Last frame of corridor → aerial nuke descent |
| 5 — Mech Pilot | Portrait, pilot suit + harness | Thor mech (cockpit interior + full exterior) | Burning city (building style, fire positions) | Last frame of cockpit → exterior Thor stride |
| 6 — Economist | Portrait, command uniform | Orbital command + MULEs (pod design) | Hologram room (display layout, desk, star map) | Last frame of hologram room → mineral line |
| 7 — Drop Lord | Portrait, jump harness | Medivac (hull markings, bay interior) | Medivac interior (door frame, harness straps) | Last frame of leaning out → descent exterior |
| 8 — Bio God | Portrait, battle-scarred face | Marine army formation (density, gear variety) | Open battlefield (terrain, horizon, smoke) | Last frame of formation → army charge |
| 9 — Banshee | Portrait, ops room attire | Banshee (cloaked + visible, engine detail) | Dark ops room (screen layout, red button) | Last frame of ops room → aerial base destruction |
| 10 — Swarm Lord | Portrait, creep-stained gear | Zergling swarm (limb style, creep texture) | Creep platform + hive (organic architecture, veins) | Last frame of platform → swarm wide |
| 11 — Lurker | Portrait, shadow-lit face | Lurker spine burst (bone spike shape, eruption) | Spine structure environment (organic walls, drips) | Last frame of shadows → spine eruption |
| 12 — Mutalisk Flock | Portrait, cliff-edge stance | Mutalisk flock (wing style, formation pattern) | Dark valley + cliff (rock face, dual moons) | Last frame of cliff → mutalisk dive |
| 13 — Queen | Portrait, throne-seated | Zerg queen + hatchery (organic throne detail) | Hive interior (tissue walls, creep, cocoons) | Last frame of throne → hatchery injection |
| 14 — Viper | Portrait, fog-shrouded | Viper (body shape, tendril detail) | Toxic fog environment (haze density, color) | Last frame of fog → blinding cloud attack |
| 15 — Roach King | Portrait, emerging from ground | Roach pack (carapace design, acid color) | Underground → surface transition environment | Last frame of emergence → burrowed eruption |
| 16 — Brood Lord | Portrait, cliff observer | Brood lord (body shape, underside detail) | Cliff overlook + stormy sky (lightning, clouds) | Last frame of cliff → broodling rain |
| 17 — Hydralisk | Portrait, defensive stance | Hydralisk (spine crest, fang acid detail) | Moonlit defensive position (terrain, bioluminescence) | Last frame of pair → spine volley |
| 18 — Templar | Portrait, levitating | High templar (energy crackle, robes) | Psionic platform + crystal pillars (architecture) | Last frame of platform → psionic storm |
| 19 — Stalker | Portrait, gateway silhouette | Stalker (armor detail, blink effect) | Gateway courtyard (warp energy cascade) | Last frame of gateway → blink sequence |
| 20 — Carrier Lord | Portrait, bridge commander | Carrier (hull detail, interceptor bays) | Carrier bridge interior (viewport, crystalline surfaces) | Last frame of bridge → interceptor release |
| 21 — Dark Templar | Portrait, eyes + warp blade | Dark templar (blade shape, cloak shimmer) | Ancient stone chamber (wall texture, darkness) | Last frame of blade ignition → base destruction |
| 22 — Colossus | Portrait, looking up at mech | Colossus (leg design, thermal lance detail) | Battlefield terrain (ground texture, scale reference) | Last frame of low angle → thermal sweep |
| 23 — Archon | Portrait, arms raised | Archon formation (energy sphere, corona) | Temple/merging ground (cracking terrain, energy field) | Last frame of merge → archon charge |
| 24 — Void Ray | Portrait, observatory stance | Void ray (crystal focus, beam emitter) | Observatory deck (crystal architecture, nebula view) | Last frame of observatory → beam lock-on |
| 25 — Final Boss | Portrait, temple peak | Mothership (hull, vortex generator) | Temple peak + three-valley battlefield below | Last frame of temple calm → vortex activation |

### 4. Reference Generation Order

Generate assets in this order — each step builds on the previous:

1. **Faction environment base images** (3 images — one per faction aesthetic)
2. **Per-player scene references** (25 images — specific environments)
3. **Per-player unit references** (25 images — signature units in the right art style)
4. **Per-player character portraits** (25 images — player faces with faction lighting)
5. **Generate Clip A for all players** (25 clips — using @character + @unit + @scene)
6. **Extract last frames from Clip A** (25 screenshots)
7. **Generate Clip B for all players** (25 clips — using last-frame bridge + @character + @unit)

**Total pre-production image assets: ~78 reference images before any video generation begins.**

### 5. Faction Color Palettes

| Faction | Primary | Accent | Atmosphere |
|---|---|---|---|
| Terran | Steel blue (#4A7CB5) | Orange-amber (#F5A623) | Industrial, smoke, sparks |
| Zerg | Deep purple (#6B2FA0) | Toxic green (#7CFC00) | Organic, mist, bioluminescence |
| Protoss | Royal gold (#FFD700) | Cyan energy (#00E5FF) | Crystalline, plasma, light beams |

### 6. Base Prompt Templates

**Seedance 2.0 prompt formula: Subject + Action + Camera + Scene + Style + Constraints**

**Template A — Hero Portrait (5s, first clip)**
```
@[player_ref] stands [POSE] amid [FACTION ENVIRONMENT],
@[unit_ref] [UNIT POSITION — visible behind/beside/above the player],
[FACTION-SPECIFIC PARTICLES] swirling around them,
[LIGHTING DESCRIPTION],
medium close-up, slow dolly-in with subtle handheld micro-shake, eye level,
cinematic 21:9, 60fps, shallow depth of field
```

**Template B — Action Reveal (5-10s, last-frame bridge + i2v)**
```
[Starting from the final frame of Clip A as i2v input]
@[unit_ref] [ACTION VERB]s [MOTION DESCRIPTION],
[PHYSICS DETAIL — explosions, energy, debris],
[CAMERA MOVEMENT — crane/orbit/tracking],
[LIGHTING], epic scale, cinematic 21:9, 60fps
```

> **Key difference in Template B:** Because we're using last-frame bridging, the prompt only describes what CHANGES — the action and camera movement. The scene, unit, and lighting are already established by the input frame. See [Image-to-Video Techniques](/wiki/image-to-video) for why motion-only prompts work better with i2v.

---

## COLD OPEN — Establishing the World (0:00 – 0:20)

### Shot 1 — Space Descent (0:00 – 0:10)

**Clip 1 (10s)**

```
Slow aerial descent through a dense asteroid field toward a massive
planet surface below, asteroids drift past camera with subtle rotation,
dust particles and distant explosions illuminate the void,
camera pushes forward slowly through the debris field,
deep blue-black space with orange explosion flashes in the distance,
volumetric fog from distant battles catching starlight,
extreme wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — "descent/push" is the only action; asteroids and particles are secondary motion, not competing verbs
> - **[Separate camera from subject movement](/wiki/seedance-2#critical-rules)** — camera pushes forward, asteroids drift independently
> - **[Secondary motion](/wiki/seedance-2#strengths)** — dust particles, asteroid rotation, distant flashes. Seedance excels at these physics details
> - **[Extreme wide shot](/wiki/scene-description-language)** — ELS establishes scale and isolation before the chaos to come
> - **[Lighting is king](/wiki/lighting-techniques)** — "deep blue-black space with orange explosion flashes" creates mood through contrast, not through complex setups
> - **[Temporal phrasing](/wiki/prompt-engineering-fundamentals)** — "slow" sets the pacing tone for the entire cold open

### Shot 2a — Battlefield Reveal: Aerial Wide (0:10 – 0:20)

**Clip 2a (10s)**

```
Camera breaks through clouds to reveal a vast alien battlefield below,
three factions clashing —
Terran siege tanks and marines firing blue-white ordnance on the left flank
with goliaths striding behind them launching missiles skyward,
a Zerg swarm of zerglings and hydralisks surging across purple creep in the center
with ultralisks smashing through the front line and mutalisks swarming overhead,
Protoss zealots charging with psionic blades and archons radiating golden energy on the right
with carriers hovering above releasing swarms of interceptors,
smoke columns rising where the front lines collide,
camera holds wide with slow drift forward,
golden hour light cutting through storm clouds,
extreme wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — camera "holds wide with slow drift forward" is the only motion; unit actions are scene dressing, not directed verbs
> - **[Specificity over vagueness](/wiki/prompt-engineering-fundamentals)** — naming exact units (siege tanks, goliaths, zerglings, ultralisks, mutalisks, zealots, archons, carriers, interceptors) gives Seedance concrete visual targets vs. abstract "blue/purple/gold"
> - **[Color grading through faction palettes](/wiki/color-grading-prompts)** — blue-white ordnance, purple creep, golden energy beams create natural color separation without explicit grading instructions
> - **[Composition layering](/wiki/composition-rules)** — left/center/right spatial division gives the eye a clear map of the battlefield
> - **[Secondary motion](/wiki/seedance-2#strengths)** — smoke columns, missile trails, interceptor swarms, mutalisk flocking. Multiple physics layers that Seedance renders well
> - **[Extreme wide shot](/wiki/scene-description-language)** — camera stays at altitude so all 9 unit types read as faction shapes without competing for focus
> - **[Golden hour lighting](/wiki/natural-lighting)** — "golden hour light cutting through storm clouds" provides both drama and natural color warmth

### Shot 2b — Battlefield Reveal: Ground Level (0:20 – 0:25)

**Clip 2b (5s)**

```
Ground-level camera pushes forward through the battlefield chaos,
explosions erupting on either side sending dirt and debris over the lens,
a zergling pack stampedes past in the foreground,
an ultralisk charges through smoke in the midground shaking the earth,
Terran tracer rounds and Protoss energy beams streaking overhead,
camera at knee height with aggressive dolly forward and handheld shake,
harsh firelight and muzzle flash against dark smoke-filled atmosphere,
wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — "pushes forward" is the only directed camera action
> - **[Foreground/midground/background layering](/wiki/composition-rules)** — zergling pack (foreground), ultralisk in smoke (midground), tracer rounds overhead (background). Three depth planes in one shot
> - **[Low angle + knee height](/wiki/camera-angles)** — ground-level perspective makes everything towering and threatening, selling the chaos
> - **[Camera movement: aggressive dolly](/wiki/camera-movements)** — forward dolly with handheld shake creates documentary urgency, contrasting the calm aerial drift of Shot 2a
> - **[Secondary motion / physics](/wiki/seedance-2#strengths)** — dirt over lens, earth-shake from ultralisk, debris. Describing friction and force ("shaking the earth") rather than just the action
> - **[Mood lighting](/wiki/mood-lighting)** — "harsh firelight and muzzle flash against dark smoke-filled atmosphere" — no clean light source, everything lit by the battle itself
> - **[Shot variety for pacing](/wiki/shot-list-planning)** — the jump from calm aerial wide to chaotic ground-level creates visceral escalation through contrast

---

## TITLE CARD (0:25 – 0:40)

**Generated in post-production** — Seedance garbles text. Use After Effects or DaVinci Resolve.

Design: Tournament name materializes from particles (Terran sparks → Zerg spores → Protoss energy crystals). 15 seconds with score crescendo.

---

## PLAYER INTRODUCTIONS

Each player gets **two stitched clips** forming an 8–10 second segment:

- **Clip A (5s):** Hero portrait — player character in faction environment, dramatic reveal
- **Clip B (5–10s):** Action shot — signature unit/ability in epic battle moment

Player names and stats are added as **lower-third overlays in post** (never in the prompt).

---

### TERRAN PLAYERS (1–9)

Terran visual identity: **industrial military, steel and fire, heavy machinery, smoke and sparks.**

---

#### Player 1 — The Commander

**Clip A — Hero Portrait (5s)**

```
@terran_player_01 stands at the bridge of a massive battlecruiser,
arms crossed, gazing out through the viewport at a distant planet,
orange warning lights pulsing across the bridge consoles behind them,
sparks drifting from a damaged ceiling panel above,
medium close-up, slow dolly-in, eye level,
warm tungsten interior light mixed with cold blue viewport glow,
cinematic 21:9, 60fps, shallow depth of field f/1.4
```

**Clip B — Action Reveal (5s)**

```
A Terran battlecruiser fires its yamato cannon — a massive beam of
concentrated energy erupts forward, the ship recoiling from the blast,
debris and shockwave rippling outward in all directions,
camera orbits the ship during the blast from port to starboard,
deep space backdrop with planet atmosphere glowing at the edge,
the beam illuminating everything in blinding white transitioning to orange,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[@ reference system](/wiki/seedance-2#-reference-system)** — `@terran_player_01` locks face and costume across both clips
> - **[Depth of field](/wiki/depth-of-field)** — "shallow depth of field f/1.4" isolates the character from the environment, drawing focus to the face
> - **[Split lighting / dual color temperature](/wiki/lighting-techniques)** — "warm tungsten interior mixed with cold blue viewport glow" creates visual tension across the face (Clip A)
> - **[Camera movement: orbit](/wiki/camera-movements)** — orbiting the ship during the blast reveals the scale of the yamato cannon from multiple angles (Clip B)
> - **[Secondary motion](/wiki/seedance-2#strengths)** — sparks drifting (Clip A), debris + shockwave rippling (Clip B). Physics details that Seedance renders best
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — Clip A: "stands" (static subject, camera dollies). Clip B: "fires" (one action, camera orbits separately)

---

#### Player 2 — The Marine King

**Clip A — Hero Portrait (5s)**

```
@terran_player_02 crouches behind a fortified bunker wall,
rifle raised, helmet visor reflecting distant explosions,
rain pouring down, each drop catching the muzzle flash light,
medium shot, slow tracking right with subtle handheld shake,
cold blue rain light with warm orange explosion flashes,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (5s)**

```
A massive line of Terran marines opens fire in unison,
hundreds of tracer rounds streaking through rain-soaked air,
shell casings cascading in slow motion with metallic glints,
a wall of muzzle flash illuminating the smoke-filled battlefield,
camera dollies laterally along the firing line at chest height,
harsh staccato lighting from gunfire against dark stormy sky,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Atmosphere descriptors: gritty](/wiki/scene-description-language)** — "rain-soaked", "handheld shake", "muzzle flash" — gritty vocabulary signals documentary realism
> - **[Secondary motion](/wiki/seedance-2#strengths)** — rain drops catching light, shell casings cascading, tracer rounds. Multiple particle systems Seedance excels at
> - **[Camera movement: lateral dolly](/wiki/camera-movements)** — tracking along the firing line at chest height creates the feeling of running alongside the marines (Clip B)
> - **[Dual color temperature](/wiki/color-grading-prompts)** — "cold blue rain light with warm orange explosion flashes" — complementary colors (teal & orange) create blockbuster contrast
> - **[Slow motion for impact](/wiki/motion-dynamics)** — 60fps slow-mo on the firing sequence lets the audience absorb each detail (casings, tracers, muzzle flash)
> - **[Reflections sell realism](/wiki/prompt-engineering-fundamentals)** — "helmet visor reflecting distant explosions" adds environmental interaction without a second action verb

---

#### Player 3 — The Siege Master

**Clip A — Hero Portrait (5s)**

```
@terran_player_03 stands atop a siege tank turret,
coat billowing in hot desert wind, dust swirling at their feet,
looking out over a scorched canyon battlefield,
medium long shot, slow crane rising to reveal the canyon,
harsh golden desert sunlight with heat distortion in the air,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (10s)**

```
A siege tank in deployed mode fires — the massive cannon barrel recoils,
a shockwave ripples through the sand around the tank,
the shell arcs across the canyon and detonates on a distant cliff face,
rock and debris exploding outward in a cascading collapse,
camera follows the shell trajectory in a smooth tracking shot,
harsh direct sunlight casting sharp shadows across the canyon,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Camera movement: crane](/wiki/camera-movements)** — "slow crane rising to reveal the canyon" motivates the camera vertically to unveil scale (Clip A)
> - **[Camera movement: tracking](/wiki/camera-movements)** — following the shell trajectory creates cause-and-effect storytelling in a single unbroken move (Clip B)
> - **[Natural lighting: harsh midday](/wiki/natural-lighting)** — "harsh golden desert sunlight with heat distortion" — strong directional light with a single source is both dramatic and easy for Seedance to render consistently
> - **[Secondary motion: physics](/wiki/seedance-2#strengths)** — coat billowing, dust swirling, sand shockwave, rock debris cascading. Describing friction and force ("shockwave ripples through sand") rather than just "tank fires"
> - **[Medium long shot → wide shot progression](/wiki/scene-description-language)** — Clip A frames the player with environment context, Clip B pulls out to epic scale. Shot size escalation matches the escalation of action
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — Clip A: "stands" (crane moves). Clip B: "fires" (camera tracks)

---

#### Player 4 — The Ghost

**Clip A — Hero Portrait (5s)**

```
@terran_player_04 materializes from a cloaking shimmer,
face half-visible through a translucent energy distortion,
standing in a dark corridor with red emergency lighting,
the cloak effect rippling like heat haze as they become solid,
medium close-up, static camera with subtle breathing movement,
deep shadows with red accent light cutting across the face,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (5s)**

```
A nuclear missile descends from above in slow motion,
the camera tracking its fall toward a massive Zerg hive cluster below,
a red targeting laser visible cutting through smoke and fog,
the missile impacts — a blinding white flash expands into a mushroom cloud,
the shockwave flattening organic structures outward in a ring,
camera holds wide as the fireball rises with rolling orange and black smoke,
extreme wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Mood lighting: horror](/wiki/mood-lighting)** — "dark corridor with red emergency lighting" and "deep shadows" borrow horror lighting vocabulary — underlit, single colored source — to sell the Ghost's menace (Clip A)
> - **[Rack focus](/wiki/depth-of-field)** — "cloak effect rippling like heat haze as they become solid" gives Seedance a clear focus transition to animate (Clip A)
> - **[Static camera with breathing movement](/wiki/camera-movements)** — minimal camera lets the cloaking VFX be the star; no competing motion
> - **[Extreme wide for scale](/wiki/scene-description-language)** — pulling to EWS for the nuclear detonation sells the devastation (Clip B)
> - **[Temporal phrasing](/wiki/prompt-engineering-fundamentals)** — "descends... impacts... expands... flattening" — sequential verbs in chronological order guide Seedance through the explosion timeline
> - **[Secondary motion](/wiki/seedance-2#strengths)** — shockwave ring, rolling smoke, red targeting laser cutting through fog. Describing the physics of a nuclear blast gives Seedance specific motion targets

---

#### Player 5 — The Mech Pilot

**Clip A — Hero Portrait (5s)**

```
@terran_player_05 sits inside a Thor mech cockpit,
holographic targeting displays reflecting in their eyes,
mechanical servos humming as the mech takes a heavy step forward,
cockpit vibrating with each footfall,
extreme close-up on face, static camera with vibration shake,
blue holographic light mixed with amber warning indicators,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (10s)**

```
A massive Thor mech strides through a burning city,
each footstep crushing rubble and sending shockwaves through puddles,
it raises both arm cannons and unleashes a barrage of missiles,
smoke trails spiraling outward in all directions,
explosions blooming across the skyline behind it,
low angle camera looking up at the Thor, slow dolly backward,
orange fire-light from below casting dramatic uplighting on the mech,
wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[ECU for intimacy](/wiki/scene-description-language)** — extreme close-up on face inside the cockpit forces the viewer into the pilot's claustrophobic POV (Clip A)
> - **[Low angle for power](/wiki/camera-angles)** — "low angle camera looking up at the Thor" makes the mech feel towering and unstoppable (Clip B)
> - **[Secondary motion: weight and force](/wiki/seedance-2#strengths)** — "each footstep crushing rubble and sending shockwaves through puddles", "cockpit vibrating with each footfall" — describing weight and impact rather than just movement
> - **[Practical/motivated lighting](/wiki/lighting-techniques)** — "blue holographic light mixed with amber warning indicators" (Clip A) and "orange fire-light from below casting dramatic uplighting" (Clip B) — every light source has a reason to exist in the scene
> - **[Camera movement: dolly backward](/wiki/camera-movements)** — retreating from the Thor as it advances creates the feeling of being pushed back by its presence
> - **[Vibration as camera language](/wiki/camera-movements)** — "static camera with vibration shake" communicates mechanical weight without adding a competing motion verb

---

#### Player 6 — The Economist

**Clip A — Hero Portrait (5s)**

```
@terran_player_06 stands in a command center hologram room,
surrounded by floating blue tactical displays and resource counters,
fingers moving across a holographic star map with precise gestures,
the map reflecting across their face in blue light,
medium shot, slow orbit around the player,
cool blue holographic light with warm amber accent from a desk lamp,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (5s)**

```
A Terran orbital command launches dozens of MULEs simultaneously,
golden supply pods streaking down through atmosphere like meteors,
each one impacting the mineral line with a flash and dust burst,
conveyor belts and refinery structures humming to life,
camera cranes upward from the mineral line to reveal a sprawling base,
golden afternoon light with industrial haze and steam,
wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Sci-fi mood lighting](/wiki/mood-lighting)** — "cool blue holographic light with warm amber accent from a desk lamp" — mixing sci-fi cool with a warm practical light humanizes the tech-heavy environment (Clip A)
> - **[Camera movement: orbit](/wiki/camera-movements)** — orbiting around the player surrounded by holograms reveals the 360° tactical environment
> - **[Camera movement: crane upward](/wiki/camera-movements)** — rising from mineral line to reveal the base transitions from detail to scale (Clip B)
> - **[Natural lighting: golden afternoon](/wiki/natural-lighting)** — "golden afternoon light with industrial haze and steam" grounds the macro economy fantasy in tangible atmosphere
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — Clip A: "stands" (fingers moving is secondary). Clip B: "launches" — the MULEs streaking down is the singular dramatic action
> - **[Contrast through pacing](/wiki/shot-list-planning)** — this is the quietest Terran segment intentionally. The Economist's cerebral style breaks up the military action of surrounding players

---

#### Player 7 — The Drop Lord

**Clip A — Hero Portrait (5s)**

```
@terran_player_07 grips a medivac door frame,
leaning out of the open bay door with wind whipping past,
looking down at the battlefield far below through clouds,
jump harness straps rattling in the wind,
medium shot from inside the medivac, shallow depth of field,
cold high-altitude blue light with warm interior orange,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (10s)**

```
Three medivacs descend rapidly through cloud cover in formation,
bay doors open with marines and marauders dropping out in sequence,
boost flames igniting as the medivacs brake hard above a Zerg base,
units landing with heavy impact kicks of dust and debris,
stimpack needles hissing with red chemical vapor,
camera tracks the descent from above then sweeps to ground level,
stormy overcast light with medivac searchlight beams cutting through,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Frame within a frame](/wiki/composition-rules)** — "from inside the medivac" uses the bay door as a natural frame around the character and the battlefield below (Clip A)
> - **[Dual color temperature](/wiki/color-grading-prompts)** — "cold high-altitude blue with warm interior orange" — exterior/interior color split creates depth
> - **[Secondary motion](/wiki/seedance-2#strengths)** — wind whipping, harness straps rattling, boost flames, stimpack vapor. Layered physics across both clips
> - **[Camera movement: descent tracking](/wiki/camera-movements)** — "tracks the descent from above then sweeps to ground level" follows the action's natural arc (Clip B)
> - **[Temporal phrasing](/wiki/prompt-engineering-fundamentals)** — "descend... doors open... dropping out... brake hard... landing" — chronological action sequence guides Seedance through a multi-beat drop
> - **[Overcast lighting](/wiki/natural-lighting)** — "stormy overcast light with medivac searchlight beams cutting through" — diffused base light with hard practical beams gives Seedance clear light/shadow contrast

---

#### Player 8 — The Bio God

**Clip A — Hero Portrait (5s)**

```
@terran_player_08 stands among a massive infantry formation,
thousands of marines stretching to the horizon behind them,
helmet off, held under one arm, battle-scarred face resolute,
wind carrying smoke and ash across the formation,
medium shot, slow dolly-in, slightly low angle,
overcast diffused light with distant orange glow on the horizon,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A massive bio army surges forward across an open battlefield,
stim-boosted marines sprinting with red chemical vapor trails,
medivacs overhead dropping reinforcements into the advancing wave,
the ground churning under thousands of boots,
camera tracking laterally at ground level as the army charges past,
harsh overcast light with dust clouds rising from the stampede,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Low angle for power](/wiki/camera-angles)** — "slightly low angle" looking up at the player with an army stretching behind them conveys leadership and scale (Clip A)
> - **[Negative space inverted](/wiki/composition-rules)** — instead of empty space around the subject, the space is filled with thousands of marines — the army IS the character's identity
> - **[Camera movement: lateral tracking](/wiki/camera-movements)** — tracking at ground level as the army charges past creates visceral proximity and momentum (Clip B)
> - **[Wardrobe as identity](/wiki/wardrobe-consistency)** — "helmet off, held under one arm" is a deliberate wardrobe choice — it says "leader" and also makes the face visible for @ reference matching
> - **[Secondary motion](/wiki/seedance-2#strengths)** — red stimpack vapor trails, medivacs overhead, dust clouds from stampede. Multiple scale layers of secondary physics
> - **[Overcast diffused + warm horizon glow](/wiki/natural-lighting)** — soft overhead light keeps the army readable while the distant glow adds drama to the horizon

---

#### Player 9 — The Banshee

**Clip A — Hero Portrait (5s)**

```
@terran_player_09 watches multiple tactical screens in a dark ops room,
each screen showing a different angle of an enemy base,
face illuminated only by the screen glow, eyes scanning methodically,
a single red "ENGAGE" button pulsing on the console,
extreme close-up, static camera, rack focus from screen to face,
cold monitor blue-white light against total darkness,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
Cloaked banshees shimmer into visibility above an undefended base,
their engines humming with a predatory low frequency,
missiles launching downward in rapid succession,
explosions walking across supply depots and refineries,
fire and secondary explosions cascading through the base,
high angle camera looking down, slow drift forward over the destruction,
night scene with fire-light illuminating smoke columns from below,
wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Mood lighting: noir](/wiki/mood-lighting)** — "face illuminated only by screen glow" and "total darkness" — film noir single-source lighting for a covert ops character (Clip A)
> - **[Rack focus](/wiki/depth-of-field)** — "rack focus from screen to face" gives Seedance a clear focus transition to animate, shifting attention from intel to intent
> - **[High angle camera](/wiki/camera-angles)** — "high angle looking down, slow drift forward over the destruction" creates a surveillance/god's-eye perspective matching the Banshee's unseen aerial assault (Clip B)
> - **[Negative prompting principle](/wiki/negative-prompts)** — the cloaked banshees "shimmer into visibility" — describing the absence-then-presence is a temporal phrasing technique
> - **[Night lighting with fire-light](/wiki/mood-lighting)** — "only explosion light revealing momentary glimpses" — no ambient light, only the destruction itself illuminates the scene
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — Clip A: "watches" (static). Clip B: "shimmer into visibility" — the reveal is the action, explosions are consequences

---

### ZERG PLAYERS (10–17)

Zerg visual identity: **organic horror, bioluminescence, toxic atmosphere, swarm movement, living architecture.**

---

#### Player 10 — The Swarm Lord

**Clip A — Hero Portrait (5s)**

```
@zerg_player_10 stands on a pulsating Zerg creep-covered platform,
organic tendrils slowly writhing around their boots,
bioluminescent purple veins in the floor casting upward glow,
a massive hive structure looming behind them, breathing slowly,
medium close-up, slow dolly-in, slight low angle,
deep purple bioluminescence with toxic green accent highlights,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (10s)**

```
An endless swarm of zerglings pours over a ridge in a living wave,
the ground beneath them dissolving into creep as they advance,
dust and organic spores rising from the stampede,
the swarm splits and converges around obstacles like water,
camera cranes upward to reveal the true scale — millions stretching to horizon,
purple-green toxic atmosphere with bioluminescent ground glow,
extreme wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Low angle for power](/wiki/camera-angles)** — "slight low angle" looking up at the Swarm Lord on a pulsating platform conveys dominion over the hive (Clip A)
> - **[Camera movement: crane reveal](/wiki/camera-movements)** — "cranes upward to reveal the true scale — millions stretching to horizon" — the crane is motivated by the narrative need to show overwhelming numbers (Clip B)
> - **[Atmosphere: eerie](/wiki/scene-description-language)** — "bioluminescent purple veins", "organic tendrils slowly writhing" — eerie vocabulary (fog, underlit, muted palette) adapted to Zerg biology
> - **[Secondary motion](/wiki/seedance-2#strengths)** — tendrils writhing, organic spores rising, swarm splitting and converging like water. Describing fluid physics for organic movement
> - **[Color palette: Zerg faction](/wiki/color-grading-prompts)** — deep purple + toxic green consistency across both clips anchors the faction identity
> - **[Shot size escalation](/wiki/scene-description-language)** — MCU portrait → EWS action reveal. The jump from intimate to extreme wide mirrors the Swarm Lord's power: one mind controlling millions

---

#### Player 11 — The Lurker

**Clip A — Hero Portrait (5s)**

```
@zerg_player_11 crouches in shadows among Zerg spine structures,
eyes glowing faintly in the darkness,
organic walls contracting and expanding like breathing around them,
dripping bioluminescent fluid from ceiling tendrils above,
medium shot, static camera with subtle organic movement,
near-total darkness with green bioluminescent rim light,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
The ground erupts as lurker spines burst upward through rock and soil,
massive bone spikes impaling through a Terran fortification line,
concrete and steel shattering outward from each spike impact,
dust and debris suspended in slow motion around the destruction,
camera at ground level looking along the line of erupting spines,
underground green glow bleeding through cracks in the earth,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Mood lighting: horror](/wiki/mood-lighting)** — "near-total darkness with green bioluminescent rim light" — horror vocabulary (underlit, deep shadows, flickering) for ambush predator identity (Clip A)
> - **[Low angle ground-level camera](/wiki/camera-angles)** — "camera at ground level looking along the line of erupting spines" puts the viewer in the kill zone (Clip B)
> - **[Secondary motion: destruction physics](/wiki/seedance-2#strengths)** — "concrete and steel shattering outward", "dust and debris suspended in slow motion" — describing material properties (concrete, steel, bone) gives Seedance specific physics to simulate
> - **[Slow motion for impact](/wiki/motion-dynamics)** — 60fps slow-mo suspends the destruction mid-frame, letting the audience absorb the violence
> - **[Lighting from below](/wiki/lighting-techniques)** — "underground green glow bleeding through cracks in the earth" — the light source is the attack itself, motivating upward-cast shadows
> - **[Static camera for tension](/wiki/camera-movements)** — Clip A uses "static camera with subtle organic movement" — stillness builds dread before the eruption

---

#### Player 12 — The Mutalisk Flock

**Clip A — Hero Portrait (5s)**

```
@zerg_player_12 stands on a cliff edge overlooking a dark valley,
behind them a flock of mutalisks circles in a massive vortex formation,
wind from their wings whipping hair and clothing,
organic screeching echoing across the valley,
medium long shot, slow pan upward from player to the flock above,
twilight purple sky with the flock silhouetted against dual moons,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A swirling flock of mutalisks dives toward a Terran base,
glaive wurms launching in rapid succession with green acid trails,
the bouncing projectiles ricocheting between buildings,
explosions and acid burns spreading across structures,
camera tracking the lead mutalisk in a high-speed chase shot,
dark sky with green acid glow and orange explosion light,
dynamic wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Camera movement: tilt](/wiki/camera-movements)** — "slow pan upward from player to the flock above" — vertical tilt reveals the scale of the mutalisk formation above (Clip A)
> - **[Camera movement: tracking chase](/wiki/camera-movements)** — "tracking the lead mutalisk in a high-speed chase shot" — camera follows the subject, creating kinetic energy (Clip B)
> - **[Silhouette composition](/wiki/composition-rules)** — "flock silhouetted against dual moons" — silhouettes are high-contrast, easy for AI to render, and instantly dramatic
> - **[Secondary motion](/wiki/seedance-2#strengths)** — "wind from wings whipping hair and clothing", "glaive wurms bouncing/ricocheting" — wind physics (Clip A) and projectile physics (Clip B)
> - **[Avoid "fast" keyword](/wiki/seedance-2#critical-rules)** — the chase shot is described as "high-speed" through context (diving, rapid succession) without using "fast" directly, which degrades Seedance quality
> - **[Dual color contrast](/wiki/color-grading-prompts)** — "green acid glow and orange explosion light" — complementary colors create visual separation between attack and impact

---

#### Player 13 — The Queen

**Clip A — Hero Portrait (5s)**

```
@zerg_player_13 sits on an organic throne of living Zerg tissue,
the throne pulsing with purple veins of energy,
creep tendrils extending outward from the base like a living map,
their hand resting on the throne arm, fingers tapping deliberately,
medium shot, slow dolly-in, eye level,
deep purple ambient with golden accent light from above,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (10s)**

```
A Zerg queen injects larvae into a massive hatchery,
the hatchery swelling and pulsating with new life,
dozens of larvae bursting from cocoons simultaneously,
rapidly morphing into roaches and hydralisks in accelerated evolution,
the newborn army immediately surging outward across the creep,
camera orbits the hatchery capturing the birthing cycle,
warm organic amber interior light with purple bioluminescent exterior,
medium wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Center framing / symmetry](/wiki/composition-rules)** — player on throne, centered, with creep extending outward symmetrically. Kubrick-style power framing (Clip A)
> - **[Camera movement: orbit](/wiki/camera-movements)** — orbiting the hatchery during the birthing cycle gives a 360° view of the transformation — reveals dimensionality (Clip B)
> - **[Temporal phrasing: sequence](/wiki/prompt-engineering-fundamentals)** — "injects... swelling... bursting... morphing... surging" — chronological chain guides Seedance through the evolution timeline (Clip B)
> - **[Warm/cool interior/exterior split](/wiki/color-grading-prompts)** — "warm organic amber interior with purple bioluminescent exterior" — the hatchery glows warm inside but the creep world outside is cold purple
> - **[Subtle character action](/wiki/prompt-engineering-fundamentals)** — "fingers tapping deliberately" — a small, specific gesture that communicates calculation without competing with the camera's dolly-in
> - **[Pacing contrast](/wiki/shot-list-planning)** — the Queen is deliberately slower-paced (creation, not destruction) as a tonal break in the Zerg section

---

#### Player 14 — The Viper

**Clip A — Hero Portrait (5s)**

```
@zerg_player_14 stands in a toxic fog cloud,
barely visible through the swirling green-purple mist,
eyes piercing through the haze with predatory focus,
parasitic tendrils from nearby structures reaching toward them,
medium close-up, static camera, fog drifting across the lens,
toxic green diffused light with no visible light source,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A viper releases a blinding cloud over a Protoss army,
golden Protoss shields flickering and failing inside the cloud,
abduct tendrils yanking a colossus sideways off its legs,
the massive machine crashing into the ground with shattering force,
zerglings swarming the downed colossus from all sides,
camera tracks the abduct pull in a smooth lateral follow,
green toxic haze with golden shield-glow bleeding through,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Atmosphere: eerie](/wiki/scene-description-language)** — "toxic fog cloud", "barely visible", "parasitic tendrils reaching" — eerie descriptors (fog, underlit, stillness) at maximum intensity (Clip A)
> - **[Lens effect: fog across lens](/wiki/lens-choices)** — "fog drifting across the lens" breaks the fourth wall subtly, adding immersion
> - **[Camera movement: lateral track](/wiki/camera-movements)** — "tracks the abduct pull in a smooth lateral follow" — camera follows the colossus being yanked sideways, a single clean motion line (Clip B)
> - **[Secondary motion: weight and force](/wiki/seedance-2#strengths)** — "the massive machine crashing into the ground with shattering force" — describing the weight of a falling colossus gives Seedance a physics problem to solve
> - **[No visible light source](/wiki/lighting-techniques)** — "toxic green diffused light with no visible light source" — ambient lighting with no key light creates the Viper's "nowhere is safe" atmosphere
> - **[Multi-faction interaction](/wiki/prompt-engineering-fundamentals)** — Protoss shields flickering, colossus crashing, zerglings swarming — showing Zerg vs. Protoss sells the matchup fantasy

---

#### Player 15 — The Roach King

**Clip A — Hero Portrait (5s)**

```
@zerg_player_15 emerges from underground,
pushing through crumbling soil and rock with one arm,
dirt cascading off their shoulders as they rise to the surface,
acidic green fluid dripping from their armor,
low angle camera looking up as they emerge, slow dolly backward,
underground amber glow transitioning to surface overcast light,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
Dozens of roaches burrow simultaneously then erupt from underground
directly beneath a Terran siege line,
dirt and rock debris launching upward in geysers,
acid spraying across tank armor with sizzling dissolving effect,
the roaches regenerating visible wounds as they fight,
camera at ground level capturing the eruption chaos,
harsh overhead light casting sharp shadows in the dust cloud,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Low angle for emergence](/wiki/camera-angles)** — "low angle camera looking up as they emerge" — the upward gaze mirrors the roaches' literal upward eruption from underground (Clip A)
> - **[Transition lighting](/wiki/lighting-techniques)** — "underground amber glow transitioning to surface overcast light" — the light shift tells a spatial story (below ground → above ground) without words
> - **[Secondary motion: material destruction](/wiki/seedance-2#strengths)** — "dirt and rock debris launching upward in geysers", "acid spraying with sizzling dissolving effect" — specific material interactions (acid on metal = sizzle + dissolve)
> - **[Slow motion for chaos](/wiki/motion-dynamics)** — 60fps slow-mo turns the eruption into a frozen sculpture of violence the audience can read
> - **[Harsh overhead light](/wiki/natural-lighting)** — "harsh overhead light casting sharp shadows in the dust cloud" — top-down hard light in a dust cloud creates visible light shafts, a strong visual Seedance renders well
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — Clip A: "emerges". Clip B: "erupt" — singular action, consequences follow naturally

---

#### Player 16 — The Brood Lord

**Clip A — Hero Portrait (5s)**

```
@zerg_player_16 stands on a cliff watching a distant battle from above,
massive brood lords floating past overhead like living airships,
their shadows darkening the cliff as they pass,
organic spores drifting down like alien snow,
medium long shot, slow tilt upward from player to the brood lords,
dark stormy sky with purple lightning illuminating the clouds,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (10s)**

```
Brood lords hovering above a battlefield release broodlings downward,
the small creatures raining like a plague onto the army below,
each impact spawning more broodlings that immediately attack,
the overwhelmed defenders disappearing under the living carpet,
camera slowly descends from brood lord altitude to ground carnage,
dark overcast with purple atmospheric glow and ground fire-light,
extreme wide shot transitioning to wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Camera movement: tilt](/wiki/camera-movements)** — "slow tilt upward from player to the brood lords" — vertical reveal that matches the brood lord's aerial dominance (Clip A)
> - **[Camera movement: descent](/wiki/camera-movements)** — "slowly descends from brood lord altitude to ground carnage" — top-down to ground level mirrors the broodlings' rain-like attack pattern (Clip B)
> - **[Silhouette and shadow](/wiki/composition-rules)** — "shadows darkening the cliff as they pass" — using the brood lords' shadows as a compositional element that signals their arrival before they're fully revealed
> - **[Atmosphere: eerie scale](/wiki/scene-description-language)** — "floating past overhead like living airships", "raining like a plague" — metaphorical language that Seedance interprets as specific movement patterns
> - **[Multi-shot auto-cut](/wiki/seedance-2#strengths)** — "extreme wide shot transitioning to wide shot" — Seedance's multi-shot capability can handle this natural cut within a single 10s generation
> - **[Purple lightning lighting](/wiki/mood-lighting)** — "purple lightning illuminating the clouds" — intermittent light source creates stroboscopic drama without a fixed setup

---

#### Player 17 — The Hydralisk

**Clip A — Hero Portrait (5s)**

```
@zerg_player_17 stands back-to-back with a massive hydralisk,
both facing outward in a defensive stance,
the hydralisk's spine crest flaring with agitation,
organic acid dripping from its fangs sizzling on the ground,
medium shot, slow orbit around the pair,
blue-purple moonlight with green bioluminescent ground glow,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A hydralisk den erupts with a volley of needle spines,
hundreds of spines launching in a concentrated barrage,
each spine trailing green acid vapor as it screams through the air,
the volley shredding through aircraft and light armor,
metal fragments and sparks showering in all directions,
camera positioned in the path of the volley, spines flying past lens,
dark scene with green tracer-light from the acid spines,
dynamic wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Camera movement: orbit](/wiki/camera-movements)** — "slow orbit around the pair" — circling two subjects back-to-back reveals the defensive stance from all angles (Clip A)
> - **[POV camera / in the line of fire](/wiki/camera-angles)** — "camera positioned in the path of the volley, spines flying past lens" — placing the camera where the target would be creates visceral threat (Clip B)
> - **[Dual-subject composition](/wiki/composition-rules)** — player back-to-back with hydralisk — the pairing tells the character's story (symbiosis with the swarm) through composition alone
> - **[Secondary motion: projectile trails](/wiki/seedance-2#strengths)** — "each spine trailing green acid vapor", "metal fragments and sparks showering" — describing projectile physics (trails, impacts, debris) at two scales
> - **[Moonlight + bioluminescence](/wiki/natural-lighting)** — "blue-purple moonlight with green bioluminescent ground glow" — two cool light sources at different heights create depth without a traditional three-point setup
> - **[Slow motion for projectiles](/wiki/motion-dynamics)** — 60fps slow-mo on the spine volley lets each individual spine be readable, turning chaos into choreography

---

### PROTOSS PLAYERS (18–25)

Protoss visual identity: **crystalline architecture, plasma energy, golden light, ethereal calm, devastating power.**

---

#### Player 18 — The Templar

**Clip A — Hero Portrait (5s)**

```
@protoss_player_18 levitates slightly above a psionic platform,
golden energy crackling between their outstretched hands,
psionic lightning arcing across ancient Protoss crystal pillars,
their eyes blazing with pure white-gold energy,
medium close-up, slow dolly-in, slight low angle,
golden psionic glow as primary light with cyan crystal reflections,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (5s)**

```
A high templar channels a massive psionic storm,
lightning erupting from the sky in a concentrated vortex,
the storm tearing across a battlefield dissolving everything it touches,
ground cracking and lifting upward into the energy field,
Terran vehicles tumbling through the air inside the vortex,
camera holds wide as the storm expands with devastating force,
blinding white-gold energy against dark purple sky,
extreme wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Low angle for power](/wiki/camera-angles)** — "slight low angle" looking up at the Templar as golden energy crackles between outstretched hands — elevates the character to mythic status (Clip A)
> - **[Shallow depth of field](/wiki/depth-of-field)** — "shallow depth of field" isolates the Templar's face against the blurred crystal pillars, forcing attention to the eyes blazing with energy
> - **[Extreme wide for devastation](/wiki/scene-description-language)** — "camera holds wide as the storm expands" — EWS lets the audience see the full radius of the psionic storm's destruction (Clip B)
> - **[Secondary motion: destruction at scale](/wiki/seedance-2#strengths)** — "ground cracking and lifting upward", "vehicles tumbling through the air inside the vortex" — multiple physics layers: ground deformation, aerial tumbling, energy expansion
> - **[Complementary faction color clash](/wiki/color-grading-prompts)** — "blinding white-gold energy against dark purple sky" — Protoss gold vs. dark atmosphere creates maximum contrast
> - **[One motion verb per shot](/wiki/seedance-2#critical-rules)** — Clip A: "levitates" (static hover). Clip B: "channels" — the storm's expansion is a consequence, not a competing verb

---

#### Player 19 — The Stalker

**Clip A — Hero Portrait (5s)**

```
@protoss_player_19 stands in the shadow of a Protoss gateway,
cyan warp energy cascading down the gateway behind them like a waterfall,
their silhouette sharp against the energy glow,
particles of warp energy drifting past like luminous snow,
medium shot, static camera with warp energy movement,
backlit cyan energy with deep shadow on the face,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A stalker blinks across the battlefield in rapid micro-teleportations,
each blink leaving a cyan afterimage that fades over half a second,
particle disintegration and reformation visible at each position,
dodging siege tank shells that explode where it was a moment before,
camera tracks the blink pattern with quick snapping movements,
dark battlefield with cyan blink-flashes and orange explosion contrast,
dynamic medium wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Backlit silhouette](/wiki/composition-rules)** — "silhouette sharp against the energy glow" — backlighting from the gateway creates instant drama with minimal complexity (Clip A)
> - **[Camera: snap tracking](/wiki/camera-movements)** — "tracks the blink pattern with quick snapping movements" — camera mimics the teleportation rhythm, creating visual syncopation
> - **[Complementary color contrast](/wiki/color-grading-prompts)** — "cyan blink-flashes and orange explosion contrast" — cool vs. warm at maximum saturation
> - **[Particle effects for VFX](/wiki/seedance-2#strengths)** — "particle disintegration and reformation visible at each position", "cyan afterimage that fades" — describing the specific VFX of teleportation gives Seedance concrete visual targets
> - **[Secondary motion: environment response](/wiki/seedance-2#strengths)** — "shells that explode where it was a moment before" — the environment reacts to where the stalker was, reinforcing the teleportation
> - **[Avoid "fast" keyword](/wiki/seedance-2#critical-rules)** — "rapid micro-teleportations" conveys speed through the action itself, not the word "fast"

---

#### Player 20 — The Carrier Lord

**Clip A — Hero Portrait (5s)**

```
@protoss_player_20 stands on the bridge of a Protoss carrier,
a massive golden viewport showing a planet's atmosphere below,
interceptor drones hovering in formation visible through the glass,
golden ambient bridge lighting reflecting off crystalline surfaces,
medium close-up, slow dolly-in, eye level,
warm golden interior light with cyan energy accents,
cinematic 21:9, 60fps, shallow depth of field
```

**Clip B — Action Reveal (10s)**

```
A Protoss carrier releases its full interceptor complement,
dozens of golden drones streaming outward in organized formations,
each interceptor firing concentrated energy beams downward,
the beams converging on a target in a devastating crossfire,
the target erupting in a golden explosion with energy ripples,
camera orbits the carrier as interceptors swarm around it,
deep space with golden energy-light illuminating the carrier hull,
wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Depth of field](/wiki/depth-of-field)** — "shallow depth of field" on the bridge portrait isolates the commander against the golden viewport (Clip A)
> - **[Frame within a frame](/wiki/composition-rules)** — the viewport acts as a natural frame around the planet and interceptors, layering the composition (Clip A)
> - **[Camera movement: orbit](/wiki/camera-movements)** — "orbits the carrier as interceptors swarm around it" — the orbit reveals the 3D space the interceptors fill, showing scale from every angle (Clip B)
> - **[Secondary motion: swarm physics](/wiki/seedance-2#strengths)** — "dozens of golden drones streaming outward in organized formations" then "beams converging" — two motion phases (disperse → converge) within one clip
> - **[Warm golden consistency](/wiki/color-grading-prompts)** — both clips maintain the Protoss gold palette: golden bridge lighting (Clip A), golden drones and energy-light (Clip B)
> - **[Motivated lighting](/wiki/lighting-techniques)** — "golden energy-light illuminating the carrier hull" — the interceptors' beams ARE the light source, so the lighting is narratively motivated

---

#### Player 21 — The Dark Templar

**Clip A — Hero Portrait (5s)**

```
@protoss_player_21 stands in near-total darkness,
only their eyes visible as twin points of green light,
a warp blade ignites — casting sharp emerald light across their face,
shadows dancing on ancient stone walls behind them,
extreme close-up, static camera, the blade casting flickering light,
deep darkness with single emerald warp-blade light source,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
An invisible shimmer moves through a Terran base,
structures exploding one by one with no visible attacker,
workers fleeing in panic as buildings collapse around them,
a dark templar briefly visible in the explosion light — mid-strike,
then vanishing back into nothing as the structure falls,
camera follows the destruction path in a smooth dolly forward,
night scene with only explosion light revealing momentary glimpses,
wide shot, cinematic 21:9, 60fps
```

> **Principles applied:**
>
> - **[Single practical light source](/wiki/lighting-techniques)** — "deep darkness with single emerald warp-blade light source" — one light illuminating one face is the most dramatic setup possible (Clip A)
> - **[ECU for intensity](/wiki/scene-description-language)** — "extreme close-up, static camera" — the smallest shot size in the entire storyboard, for the most hidden character. The intimacy is unsettling.
> - **[Absence as storytelling](/wiki/prompt-engineering-fundamentals)** — "invisible shimmer", "no visible attacker", "briefly visible... then vanishing" — describing what ISN'T seen is a temporal phrasing technique that creates mystery
> - **[Camera movement: forward dolly through destruction](/wiki/camera-movements)** — "follows the destruction path in a smooth dolly forward" — camera follows the consequences, not the character (Clip B)
> - **[Night with fire-light only](/wiki/mood-lighting)** — "only explosion light revealing momentary glimpses" — zero ambient light; the dark templar's attacks are the only illumination
> - **[Horror lighting vocabulary](/wiki/mood-lighting)** — this is pure horror genre technique applied to a StarCraft assassin: darkness, flickering reveals, unseen threat

---

#### Player 22 — The Colossus

**Clip A — Hero Portrait (5s)**

```
@protoss_player_22 gazes upward at a colossus towering above them,
the machine's thermal lances charging with building heat-glow,
the player dwarfed by the massive walking platform's leg,
crystalline energy humming through the colossus chassis,
extreme low angle, slow tilt upward from player to colossus head,
golden energy glow from the lances casting warm light downward,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A colossus sweeps its twin thermal lance beams across a battlefield,
the beams cutting through terrain and units alike,
everything in the beam path igniting in a line of golden fire,
the colossus striding forward with each step shaking the ground,
melted rock and slag glowing in the beam's wake,
camera positioned low looking up along the beam line,
intense golden thermal light against dark battlefield,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Extreme low angle](/wiki/camera-angles)** — "extreme low angle, slow tilt upward from player to colossus head" — maximum vertical disparity between the human and the machine. The tilt IS the reveal of scale (Clip A)
> - **[Leading lines](/wiki/composition-rules)** — "camera positioned low looking up along the beam line" — the thermal lance beams become leading lines drawing the eye along the destruction path (Clip B)
> - **[Secondary motion: thermal physics](/wiki/seedance-2#strengths)** — "melted rock and slag glowing in the beam's wake", "everything in the beam path igniting" — describing heat transfer and material transformation
> - **[Scale through human reference](/wiki/scene-description-language)** — "the player dwarfed by the massive walking platform's leg" — placing a human next to the machine gives the audience a scale reference
> - **[Motivated lighting from weapons](/wiki/lighting-techniques)** — "golden energy glow from the lances casting warm light downward" (Clip A) and "intense golden thermal light against dark battlefield" (Clip B) — the weapons light the scene
> - **[Slow motion for sweep](/wiki/motion-dynamics)** — slow-mo on the beam sweep lets the audience trace the destruction line frame by frame

---

#### Player 23 — The Archon

**Clip A — Hero Portrait (5s)**

```
@protoss_player_23 stands with arms raised as psionic energy converges,
two ghostly Templar forms merging into a blazing sphere above,
the energy growing brighter and more intense with each moment,
ground cracking beneath from the gravitational energy output,
medium shot, slow dolly backward as the energy builds outward,
blinding white-gold center with blue-purple outer corona,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A fully-formed archon — a blazing sphere of pure psionic energy —
charges into a Zerg swarm with devastating force,
each energy pulse disintegrating zerglings in waves,
the ground scorched in a perfect circle around the archon,
ultralisk carapace cracking and burning from proximity alone,
camera tracks the archon's advance at ground level,
overwhelming golden-white light casting everything in sharp contrast,
wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Camera movement: dolly backward](/wiki/camera-movements)** — "slow dolly backward as the energy builds outward" — the camera retreats as the energy expands, as if being pushed back by the force (Clip A)
> - **[Temporal phrasing: transformation](/wiki/prompt-engineering-fundamentals)** — "two ghostly forms merging into a blazing sphere" → "growing brighter and more intense" → "ground cracking beneath" — three-beat escalation within a single clip
> - **[Overwhelming light as style](/wiki/lighting-techniques)** — "blinding white-gold center with blue-purple outer corona" (Clip A), "overwhelming golden-white light casting everything in sharp contrast" (Clip B) — the Archon IS the light source
> - **[Secondary motion: force and heat](/wiki/seedance-2#strengths)** — "energy pulse disintegrating zerglings in waves", "carapace cracking and burning from proximity alone" — describing radiant energy effects on nearby targets
> - **[Ground-level tracking](/wiki/camera-movements)** — "tracks the archon's advance at ground level" — low camera + advancing energy being creates overwhelming power (Clip B)
> - **[Specificity over vagueness](/wiki/prompt-engineering-fundamentals)** — "scorched in a perfect circle around the archon" — specific geometric detail (circle) gives Seedance a clear visual instruction

---

#### Player 24 — The Void Ray

**Clip A — Hero Portrait (5s)**

```
@protoss_player_24 looks out from a Protoss observatory deck,
a fleet of void rays visible in formation against a nebula,
prismatic crystals in the observatory refracting the starlight,
their reflection visible in the crystalline floor,
medium shot, slow pan right revealing the fleet through the window,
cool starlight with prismatic rainbow refractions,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (5s)**

```
A void ray's prismatic beam locks onto a battlecruiser,
the beam intensifying from blue to yellow to searing white,
the battlecruiser's armor plating glowing red then white-hot,
hull plates buckling and peeling away under the concentrated beam,
secondary explosions erupting along the ship's length,
camera holds steady on the point of contact as damage spreads,
the beam's color shift illuminating surrounding space,
medium wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Pan as reveal](/wiki/camera-movements)** — "slow pan right revealing the fleet through the window" — horizontal pan unveils the fleet gradually, building anticipation (Clip A)
> - **[Static camera hold on destruction](/wiki/camera-movements)** — "holds steady on the point of contact as damage spreads" — stillness while the damage grows outward creates tension. The viewer can't look away. (Clip B)
> - **[Color shift as narrative](/wiki/color-grading-prompts)** — "the beam intensifying from blue to yellow to searing white" — color progression tells the story of increasing power without extra words
> - **[Prismatic / refraction motif](/wiki/style-transfer-prompts)** — "prismatic crystals refracting starlight" (Clip A), "prismatic beam" (Clip B) — consistent visual motif linking both clips
> - **[Secondary motion: material failure](/wiki/seedance-2#strengths)** — "armor plating glowing red then white-hot, hull plates buckling and peeling away" — specific metal-failure physics (glow → buckle → peel) for Seedance to simulate
> - **[Slow motion for precision destruction](/wiki/motion-dynamics)** — slow-mo on a focused beam cutting through armor is surgical, contrasting the chaos of other action clips

---

#### Player 25 — The Final Boss

**Clip A — Hero Portrait (5s)**

```
@protoss_player_25 stands at the peak of a Protoss temple,
all three faction battles raging in the valleys below,
wind carrying ash and energy particles from every direction,
their expression calm amid the chaos, arms folded behind their back,
wide shot slowly pushing in to medium shot, slight low angle,
golden hour light breaking through storm clouds onto the temple peak,
cinematic 21:9, 60fps
```

**Clip B — Action Reveal (10s)**

```
A mothership activates its vortex ability above a massive army,
units and debris spiraling upward into a gravitational singularity,
the vortex distorting light and space around it like a black hole,
terrain itself bending and lifting toward the event horizon,
the entire battlefield reorganizing around the gravitational pull,
camera slowly orbits the vortex capturing the scale of destruction,
reality-warping light distortion with golden energy corona,
extreme wide shot, cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Wide shot pushing to medium: shot size transition](/wiki/scene-description-language)** — "wide shot slowly pushing in to medium shot" — the camera narrows onto the final player as if destiny is selecting them (Clip A)
> - **[Low angle for ultimate power](/wiki/camera-angles)** — "slight low angle" on the temple peak with battles below — the Final Boss stands above all three factions
> - **[Calm amid chaos](/wiki/prompt-engineering-fundamentals)** — "expression calm amid the chaos, arms folded behind their back" — stillness as a character choice. The most powerful player is the one who doesn't move.
> - **[Camera movement: orbit for revelation](/wiki/camera-movements)** — "slowly orbits the vortex capturing the scale of destruction" — orbital camera reveals the full 360° of gravitational devastation (Clip B)
> - **[Reality-warping as style](/wiki/style-transfer-prompts)** — "vortex distorting light and space around it like a black hole", "terrain itself bending" — describing physics-breaking phenomena gives Seedance specific distortion targets
> - **[Golden hour for the final player](/wiki/natural-lighting)** — "golden hour light breaking through storm clouds onto the temple peak" — the single warmest, most heroic natural light reserved for the last player

---

## FINALE — All Players Montage (7:00 – 7:30)

### Shot 1 — Rapid Montage (15s)

Quick 1-second cuts of each player's hero portrait in sequence, accelerating in rhythm with the score. Use the best frame from each Clip A.

**Generated in post** — DaVinci Resolve speed ramp edit cutting Clip A outputs to beat.

### Shot 2 — Final Group (15s)

```
All three faction armies converge on a single point from three directions,
Terran steel blue from the left, Zerg purple from the center,
Protoss golden from the right, a triangular collision course,
dust and energy building at the convergence point,
the forces about to collide — freeze at the moment of impact,
extreme wide aerial shot, slow dolly forward,
each army lit in its faction color against a dark neutral battlefield,
cinematic 21:9, 60fps slow motion
```

> **Principles applied:**
>
> - **[Composition: triangular convergence](/wiki/composition-rules)** — three armies from three directions creates a triangular collision geometry. Balanced, symmetrical, and instantly readable.
> - **[Faction color as composition](/wiki/color-grading-prompts)** — "each army lit in its faction color against a dark neutral battlefield" — color IS the composition; three distinct palettes self-organize the frame
> - **[Freeze frame for impact](/wiki/motion-dynamics)** — "freeze at the moment of impact" — stopping time at the collision point creates the ultimate cliffhanger. The video ends at maximum tension.
> - **[Extreme wide aerial for finale](/wiki/scene-description-language)** — EWS mirrors the opening Shot 2a aerial wide, bookending the video with matching scale
> - **[Slow motion + slow dolly](/wiki/seedance-2#critical-rules)** — one speed modifier (slow-mo) + one camera motion (dolly forward). Clean and controlled for the final image.
> - **[Text in post, never in prompt](/wiki/seedance-2#limitations)** — tournament name added over the freeze frame in DaVinci Resolve, not generated by Seedance
>
> Tournament name + date added in post over the freeze frame.

---

## Production Notes

### Seedance 2.0 Settings Per Clip

| Setting | Value |
|---|---|
| Resolution | 2048×872 (21:9 ultrawide) |
| Duration | 5s for portraits, 10s for action reveals |
| FPS | 60 |
| Reference mode | @ character reference per player |
| Negative guidance | `blurry, low quality, text, watermark, deformed, flickering, jittery` |

### Post-Production Pipeline

1. **Generate** all 50+ clips (2 per player + 4 structural shots)
2. **Select** best take per slot (generate 3 variants each = ~150 total generations)
3. **Stitch** Clip A + Clip B per player in DaVinci Resolve
4. **Add overlays** — player names, stats, faction icons (After Effects / Resolve)
5. **Color grade** — unify all clips per faction, then match across factions
6. **Score** — epic orchestral or hybrid electronic score, faction-themed motifs
7. **SFX** — StarCraft sound effects for each unit/ability (Seedance native audio may cover some)
8. **Export** — 4K upscale via Topaz Video AI, final render at 3840×1634 (21:9)

### Generation Budget

| Item | Count |
|---|---|
| Player portrait clips (Clip A) | 25 × 3 variants = 75 |
| Player action clips (Clip B) | 25 × 3 variants = 75 |
| Structural shots (open, close) | 5 × 3 variants = 15 |
| **Total generations** | **~165** |
| Estimated generation time | ~80 minutes (at ~30s per 10s clip) |

See [Seedance 2.0](/wiki/seedance-2) for platform details, [Multi-Shot Workflows](/wiki/multi-shot-workflows) for the assembly pipeline, and [Character Consistency](/wiki/character-consistency-fundamentals) for the @ reference approach.
