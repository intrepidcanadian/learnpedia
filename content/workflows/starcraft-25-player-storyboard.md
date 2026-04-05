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
[0:00 – 0:20]  COLD OPEN — Establishing the world
[0:20 – 0:35]  TITLE CARD — Tournament name reveal
[0:35 – 7:00]  PLAYER INTRODUCTIONS — 25 players × ~8-10s each
  ├── Terran players (1–9)
  ├── Zerg players (10–17)
  └── Protoss players (18–25)
[7:00 – 7:30]  FINALE — All players montage + event title
```

---

## Pre-Production Checklist

### 1. Character Reference Assets

For each player, prepare a **@ reference package**:

- **Portrait image** — Stylized illustration of the player (NOT real face — Seedance blocks real faces). Use a consistent art style: semi-realistic digital painting, dramatic lighting, faction-colored accent light on face.
- **Faction icon** — Terran/Zerg/Protoss emblem as overlay (add in post — Seedance garbles text/logos).
- **Signature unit image** — Each player's iconic unit rendered in the same art style.

**Art style prompt for generating portraits (use Midjourney/Flux first):**

```
"Semi-realistic digital portrait of a [NATIONALITY] esports competitor
in their mid-20s, intense focused expression, dramatic side-lighting
in [FACTION COLOR — blue for Terran / purple for Zerg / gold for Protoss],
dark background, cyberpunk-military aesthetic, high detail,
painterly digital art style, 4K"
```

### 2. Faction Color Palettes

| Faction | Primary | Accent | Atmosphere |
|---|---|---|---|
| Terran | Steel blue (#4A7CB5) | Orange-amber (#F5A623) | Industrial, smoke, sparks |
| Zerg | Deep purple (#6B2FA0) | Toxic green (#7CFC00) | Organic, mist, bioluminescence |
| Protoss | Royal gold (#FFD700) | Cyan energy (#00E5FF) | Crystalline, plasma, light beams |

### 3. Base Prompt Templates

**Seedance 2.0 prompt formula: Subject + Action + Camera + Scene + Style + Constraints**

**Template A — Hero Portrait (5s, first clip)**
```
@[player_ref] stands [POSE] amid [FACTION ENVIRONMENT],
[FACTION-SPECIFIC PARTICLES] swirling around them,
[LIGHTING DESCRIPTION],
medium close-up, slow dolly-in with subtle handheld micro-shake, eye level,
cinematic 21:9, 60fps, shallow depth of field
```

**Template B — Action Reveal (5-10s, second clip)**
```
@[player_ref]'s signature [UNIT/ABILITY] [ACTION VERB]s across the frame,
[PHYSICS DETAIL — explosions, energy, debris],
[CAMERA MOVEMENT — crane/orbit/tracking],
[SCENE ENVIRONMENT],
[LIGHTING], epic scale, cinematic 21:9, 60fps
```

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

> **Seedance notes:** One motion verb (descent/push). Camera and subject movement separated. Secondary motion: dust particles, asteroid rotation, distant flashes.

### Shot 2 — Battlefield Reveal (0:10 – 0:20)

**Clip 2 (10s)**

```
Camera breaks through clouds to reveal a vast alien battlefield below,
three distinct armies clashing — blue explosions on the left,
purple organic forms in the center, golden energy beams on the right,
smoke columns rising, the ground trembling with impact,
crane shot descending from high altitude to ground level,
golden hour light cutting through storm clouds,
extreme wide shot transitioning to wide shot, cinematic 21:9, 60fps
```

> **Seedance notes:** Multi-shot capability — this can auto-cut from the wide aerial to ground level. Physics-aware: smoke, trembling ground, light through clouds.

---

## TITLE CARD (0:20 – 0:35)

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
| Structural shots (open, close) | 4 × 3 variants = 12 |
| **Total generations** | **~162** |
| Estimated generation time | ~80 minutes (at ~30s per 10s clip) |

See [Seedance 2.0](/wiki/seedance-2) for platform details, [Multi-Shot Workflows](/wiki/multi-shot-workflows) for the assembly pipeline, and [Character Consistency](/wiki/character-consistency-fundamentals) for the @ reference approach.
