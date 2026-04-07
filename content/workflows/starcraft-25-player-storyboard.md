---
title: "StarCraft 25-Player Introduction Storyboard"
category: "Workflows"
summary: "Full storyboard for a cinematic StarCraft esports tournament trailer using Seedance 2.0 — 25 players as hunters and hunted in a three-faction warzone with Terran, Zerg, and Protoss wreckage, every clip built on player-vs-player interaction."
related:
  - seedance-2
  - multi-shot-workflows
  - shot-list-planning
  - character-consistency-fundamentals
  - camera-angles
  - mood-lighting
---

A complete production storyboard for introducing 25 StarCraft players in a cinematic video using [Seedance 2.0](/wiki/seedance-2). Inspired by League of Legends Worlds cinematics — players don't pose for the camera, they fight each other. Every clip is a confrontation: ambushes, chases, reversals, standoffs, temporary alliances that shatter mid-frame. No one is safe. Everyone is both hunter and hunted.

> **How to read this storyboard:**
>
> - **Code blocks** = the actual prompt you paste into Seedance 2.0
> - Everything outside code blocks = production notes

---

## Video Overview

| Property | Value |
|---|---|
| Total duration | ~5:55 |
| Per-player clip | 15 seconds (3 beats x 5s) |
| Clip types | 19 interaction clips (all duo — every clip features 2 players) + 1 environment interstitial |
| Resolution | 2K (2048x878) |
| Aspect ratio | 21:9 ultrawide cinematic |
| FPS | 60fps |
| Style | Dark sci-fi cinematic, StarCraft universe aesthetic |

## Structure

```
[0:00 - 0:15]  COLD OPEN — The warzone. Silence. Then movement everywhere.
[0:15 - 0:20]  TITLE CARD — Tournament name reveal
[0:20 - 2:05]  ACT 1: FIRST CONTACT — Players discover they're not alone (clips 1-7)
[2:05 - 3:35]  ACT 2: SHIFTING ALLIANCES — Trust forms and shatters (clips 8-13)
[3:35 - 3:50]  INTERSTITIAL — Empty warzone. Silence. The calm before convergence.
[3:50 - 5:20]  ACT 3: THE CONVERGENCE — The zone shrinks, nowhere to hide (clips 14-19)
[5:20 - 5:55]  FINALE — The Ring. All 25. Nobody moves first.
```

---

## Pre-Production

### Reference Assets (31 total)

Each player needs **1 reference** — their character sheet (`@player_XX`). Scene references are generated below. Character sheet prompts are in the next section.

| Asset | Type | Description |
|---|---|---|
| 25 character sheets | @player_XX | Player character turnaround sheets — faction-themed combat gear over BSL jackets |
| @warzone_ruins | @scene | Destroyed Terran command outpost — collapsed bunkers, overturned Siege Tanks, alien Zerg creep spreading across steel wreckage, shattered Protoss pylons flickering faint blue |
| @warzone_canyon | @scene | Narrow canyon carved by orbital bombardment — scorched blast marks, twisted Terran supply depot wreckage, mineral crystal shards embedded in the rock face |
| @warzone_heights | @scene | Ruined multi-level Terran refinery complex — rooftops, catwalks, and landing platforms over a burning battlefield, wrecked Medivac dropships hanging from gantries |
| @warzone_tunnels | @scene | Underground Zerg hive tunnels — organic walls mixed with cracked concrete, bioluminescent creep veins casting green-orange glow, claustrophobic |
| @warzone_clearing | @scene | Central impact crater arena — scorched ground with Protoss psi-blade burn marks radiating outward, surrounded by wreckage from all three factions converging |
| @warzone_ridge | @scene | High rocky overlook above the full three-faction battlefield, wind-battered, a shattered Protoss observatory at the peak |

### Faction Assignments

Each player is assigned a StarCraft faction that determines their visual theme. Their BSL tournament jacket stays visible underneath faction-themed combat gear — blending esports identity with sci-fi spectacle.

| Faction | Players | Visual Theme |
|---|---|---|
| **Terran** (9 players) | P1, P4, P8, P10, P15, P18, P22, P24, P25 | Matte grey-black powered armor plates over BSL jacket, shoulder pauldrons, amber HUD visor (raised), scuffed military hardware, orange-amber energy accents |
| **Zerg** (8 players) | P3, P5, P9, P11, P17, P19, P20, P21 | Dark chitinous armor segments fused over BSL jacket, organic ridged textures, bioluminescent green-orange veins running along the arms and collar, sharp asymmetric silhouette |
| **Protoss** (8 players) | P2, P6, P7, P12, P13, P14, P16, P23 | Sleek crystalline armor plates over BSL jacket, blue-white energy conduits tracing the shoulders and spine, faint psionic glow around the hands, geometric alien elegance |

> **Why faction assignments matter:** Players wearing faction gear creates instant visual variety across 20 clips, ties every player to the StarCraft universe, and allows faction-energy reactions with the environment (Terran tech sparking near damaged bunkers, Zerg chitin pulsing near creep veins, Protoss conduits resonating near pylon wreckage).

### Character Sheet Prompts (NanoBanana)

Generate these 25 character turnaround sheets before any video work. Upload a **player-approved reference image** (ensure explicit written consent per [Responsible AI Video](/wiki/responsible-ai-video)), then use the prompt below with the faction-specific gear line swapped in.

> **Reference photo requirements:** Minimum **1024×1024 pixels** for face references (LaoZhang: lower resolution causes character drift). Use a clean, front-facing shot with neutral background and even lighting — avoid extreme shadows or unusual angles that could confuse the @ reference system.

**Template — Terran player:**

```
Full-body character turnaround sheet — front, three-quarter, side, and back views on a neutral dark grey background. [PLAYER NAME], esports competitor, wearing a black BSL tournament jacket with matte grey-black powered armor plates layered over the torso and shoulders, angular shoulder pauldrons with scuffed battle damage, an amber HUD visor pushed up onto the forehead, armored gauntlets with orange-amber energy seams at the knuckles. Athletic build, confident stance, combat-ready posture. Consistent lighting across all four views, soft studio fill light with subtle rim light from the right. Clean turnaround reference sheet layout, photorealistic, 8K.
```

**Template — Zerg player:**

```
Full-body character turnaround sheet — front, three-quarter, side, and back views on a neutral dark grey background. [PLAYER NAME], esports competitor, wearing a black BSL tournament jacket with dark chitinous armor segments fused over the torso and arms, organic ridged textures with subtle iridescence, bioluminescent green-orange veins running along the forearms and collar, asymmetric sharp-edged shoulder growths. Athletic build, predatory stance, weight forward. Consistent lighting across all four views, soft studio fill light with subtle rim light from the right. Clean turnaround reference sheet layout, photorealistic, 8K.
```

**Template — Protoss player:**

```
Full-body character turnaround sheet — front, three-quarter, side, and back views on a neutral dark grey background. [PLAYER NAME], esports competitor, wearing a black BSL tournament jacket with sleek crystalline armor plates layered over the torso and shoulders, blue-white energy conduits tracing the shoulder seams and spine, faint psionic glow emanating from the hands, geometric alien-elegant surface patterns. Athletic build, composed stance, quiet authority. Consistent lighting across all four views, soft studio fill light with subtle rim light from the right. Clean turnaround reference sheet layout, photorealistic, 8K.
```

> **NanoBanana workflow:** Upload player face photo → paste the faction-appropriate template → replace [PLAYER NAME] → generate → save as `{number}.png` in `public/images/storyboard/characters/`.

### Scene Reference Prompts

Generate these 6 scenes before any video clips.

```
Vast destroyed Terran command outpost on an alien planet. Collapsed military bunkers with exposed rebar and shattered blast shields, overturned Siege Tanks smoldering in the streets, alien Zerg creep — dark purple organic tissue — spreading across steel wreckage and climbing up girders, shattered Protoss pylons flickering faint blue energy in the rubble, power armor scattered across the ground. Smoke columns rising from multiple positions, sparks and embers drifting. Harsh golden hour sunlight cutting through dust haze casting long shadows. Steel grey and concrete tones with orange-amber fire accents, faint blue pylon glow, purple creep veins, volumetric smoke. Cinematic matte painting, photorealistic lighting, volumetric haze, extreme wide shot, 21:9, 8K.
```

```
Narrow rocky canyon on a scorched alien planet carved by orbital bombardment. Canyon walls closing in from both sides with deep plasma-blast gouges in the rock face, twisted Terran supply depot wreckage wedged between the walls, blue mineral crystal shards jutting from exposed rock strata catching the light. Heat distortion warping the air above, dust devils spinning between the walls. Harsh midday sunlight from directly overhead casting sharp vertical shadows, amber dust haze thickening toward the far end, blue crystal refractions speckling the canyon walls. Cinematic matte painting, photorealistic lighting, volumetric haze, extreme wide shot, 21:9, 8K.
```

```
Ruined multi-level Terran refinery complex at night — rooftops at staggered heights connected by collapsed catwalks and bent steel gantries, wrecked Medivac dropships hanging from landing platforms at impossible angles. Gaps between structures showing the burning battlefield far below, emergency red and orange fire-glow rising from the lower levels, cold blue moonlight from above. Exposed rebar and shattered concrete edges, wind whipping debris between structures, sparking electrical cables swinging. Cinematic matte painting, photorealistic lighting, volumetric haze, extreme wide shot, 21:9, 8K.
```

```
Underground tunnel network beneath the battlefield — half Terran bunker infrastructure, half Zerg hive. Cracked concrete walls giving way to organic Zerg tissue, bioluminescent creep veins pulsing faint green-orange along the ceiling, burst pipes dripping alongside mucous-slick organic growths. Emergency strip lighting casting harsh red-orange pools every ten meters where the Terran construction survives, alien bioluminescence filling the gaps between. Rubble and chitin fragments partially blocking the corridor, deep rumbling vibrations from the battle above shaking loose particles. Cinematic matte painting, photorealistic lighting, volumetric haze, extreme wide shot, 21:9, 8K.
```

```
Wide circular clearing at the center of a three-faction warzone. Scorched flat ground with radiating burn lines from a Protoss psi-blade detonation — glowing blue-white energy scars etched into the rock — surrounded on all sides by the wreckage of all three factions: Terran bunker walls, Zerg carapace fragments, Protoss shield emitter husks. Multiple paths converging on the clearing from different directions through the rubble. Golden hour light breaking through smoke clouds above, the psi-blade scars faintly glowing blue in the shadows, long shadows stretching across the open ground. Cinematic matte painting, photorealistic lighting, volumetric haze, extreme wide shot, 21:9, 8K.
```

```
High rocky ridge overlooking a vast three-faction battlefield. A shattered Protoss observatory at the peak — crystalline spires broken and dark, energy conduits cracked open with faint residual blue glow. Wind-battered exposed rock with no cover, the full scope of war visible below — Terran and Zerg wreckage burning, smoke columns, distant explosions flashing across the plain. Cold wind whipping dust horizontally, the ridge edge crumbling in places. Harsh sidelight from a low sun on the horizon, warm amber against cold blue-grey sky, faint blue observatory glow mixing with sunset light. Cinematic matte painting, photorealistic lighting, volumetric haze, extreme wide shot, 21:9, 8K.
```

### Universal Suffix — All Prompts

```
photorealistic cinematic, shot on ARRI Alexa 65, anamorphic lens with natural bokeh, 35mm film grain, high dynamic range, volumetric atmospheric haze, color graded for blockbuster sci-fi, no text, no watermark, no frame, no border, 8K
```

### Negative Prompt (apply to every generation)

```
blurry, low quality, text, watermark, signature, logo, frame, border, cartoon, anime, cel-shaded, flat color, vector art, pixel art, oversaturated, neon, bright pastel, deformed hands, extra fingers, distorted face, asymmetric eyes, multiple heads, merged bodies, floating limbs, illustration, painting, digital art, concept art, sketch, drawing, avoid jitter, avoid bent limbs, avoid temporal flicker, avoid identity drift
```

---

## COLD OPEN — The Warzone (0:00 – 0:15)

### Shot 1 — Descent into Silence (0:00 - 0:10)

```
[0-5s]: Slow aerial descent through heavy smoke above a vast destroyed Terran outpost on an alien planet. Burning bunkers and overturned Siege Tanks stretching to the horizon, Zerg creep spreading across collapsed structures in dark purple veins, shattered Protoss pylons flickering faint blue among the wreckage. Above the smoke, a shattered Terran Battlecruiser hangs in low orbit, belly torn open, debris burning through the atmosphere like slow meteors. Camera pushes forward steadily through the smoke layer. Deep amber firelight from below against dark grey smoke, golden hour sun cutting through gaps in the cloud cover.

[5-10s]: Ground level — a wide intersection of collapsed Terran supply depots, rubble mountains on every side, embers drifting like orange snow past a cracked Protoss shield emitter still humming with faint energy. Complete stillness. Then — a shadow moves behind a bunker wall. Another flickers across a gantry. A third darts between burning wreckage. The warzone is full of hunters. Camera drifts forward steadily at ground level. Warm amber fire-glow against cold blue shadows, faint alien energy glows in the rubble. Extreme wide shot, cinematic 21:9, 60fps.
```

### Shot 2 — Eyes Everywhere (0:10 - 0:15)

```
[0-5s]: A series of tight details held in stillness — a Terran gauntlet with amber energy seams gripping a concrete edge, eyes catching firelight from deep shadow between Zerg chitin ridges, a hand with faint blue psionic glow resting flat against a wall, breath visible in cold air. Three factions. All watching. Camera holds on each detail with slight handheld shake. Warm orange ember-light against deep shadow, each detail lit by a different source — fire, bioluminescence, psi-glow. Tight close-ups, cinematic 21:9, 60fps.
```

---

## TITLE CARD (0:15 - 0:20)

**Generated in post-production.** Tournament name materializes from embers and dust particles, assembling from chaos into sharp text. 5 seconds. The Terran adjutant voice — *"Nuclear launch detected"* — plays over the dust assembly, timed so the final syllable lands on a single bass impact as the title locks into focus. Cut to absolute silence.

> **Audio source:** Extract the original "Nuclear launch detected" voice line from StarCraft: Brood War game assets. Every SC fan knows this sound. It's the single highest-ROI fan-service moment in the trailer.

---

## PLAYER INTRODUCTIONS

Every clip features **two players interacting** — hunting, fighting, ambushing, chasing, or betraying each other. Player names and stats added as lower-third overlays in post.

### Escalation Arc

| Act | Clips | Register |
|---|---|---|
| **First Contact** (1-7) | Players discover they're not alone | Tension, stalking, first strikes — tight framing, handheld energy |
| **Shifting Alliances** (8-13) | Trust forms and shatters | Teamwork crumbling into betrayal — wider camera, dramatic reversals |
| **Interstitial** | Empty warzone, no players | Silence reset — audience nervous system reboot before Act 3 |
| **The Convergence** (14-19) | The zone shrinks, nowhere left to run | All-out confrontation — extreme scale, maximum spectacle |

---

### ACT 1: FIRST CONTACT (Clips 1-7)

---

#### Clip 1 — P1 vs P2: First Blood

Two hunters spot each other across the ruins. The first fight of the war.

```
[0-5s]: @player_01 moves through @warzone_ruins in a low tactical crouch, one Terran gauntlet flexing open and closed — amber energy seams at each knuckle flaring with the rhythm, a fighter's habit before contact. Freezes. Across the intersection, @player_02 stands motionless behind a collapsed pillar, already watching, one hand trailing faint blue psionic light along the stone like a ward. Both stare through the dust and ember haze, neither moving. Camera holds medium wide framing both figures on opposite thirds. Warm amber fire-glow between them, cold shadow behind each player.

[5-10s]: @player_01 breaks into a dead sprint across the open ground toward @player_02, boots pounding through ash and rubble, armor streaming behind. @player_02 steps out from cover and charges to meet them, Protoss conduits on their shoulders flaring faint blue — both bearing down on the collision point at the center of the intersection, debris scattering from their footsteps, embers swirling in the displaced air. Camera tracks laterally at ground level. Harsh orange fire-glow with dust kicked up into backlit haze.

[10-15s]: @player_01 and @player_02 collide at the center with devastating force — shoulders meeting, both skidding backward through rubble from the impact, dust erupting outward in a ring, the shockwave rattling a nearby shattered Protoss pylon into a sudden flicker of blue energy that pulses once and dies. Both recover and square up, circling each other with locked eyes, fists raised, breathing hard, neither willing to break first. Camera orbits slowly around the two circling figures. Warm orange fire-glow from burning vehicles on all sides, fading blue pylon pulse between them. Wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 2 — P3 vs P4: Canyon Pursuit

A chase through a narrowing canyon. The prey has a plan.

```
[0-5s]: @player_03 sprints through @warzone_canyon, canyon walls narrowing ahead, boots kicking up dust with each stride, BSL jacket whipping from the momentum, glancing over one shoulder — @player_04 is behind them, gaining, moving with controlled predatory precision through the same dust cloud, face locked with focus. Camera dollies backward ahead of @player_03 with generous lead room. Harsh midday overhead light casting sharp shadows on the canyon floor, amber dust haze thickening.

[5-10s]: @player_03 rounds a blind corner and presses flat against the canyon wall — Zerg chitin segments on their forearms shifting darker, blending with the rock surface, an instinctive camouflage. @player_04's footsteps grow louder, shadow stretching around the corner ahead of their body, dust swirling from their approach. @player_03 coils, weight shifting forward, fingers curling into the stone. Camera holds static on the corner from @player_03's side. Deep shadow against harsh sunlight at the bend, dust particles visible in the light shaft.

[10-15s]: @player_04 rounds the corner at a dead run — @player_03 steps out and catches them with a shoulder check that sends @player_04 slamming into the opposite canyon wall, rock fracturing behind their back, dust exploding from the collision. @player_04 slides down but catches themselves, one knee on the ground, raising their head with a fierce grin — impressed, not beaten. Both lock eyes in the narrow space. Camera holds medium wide framing both in the tight canyon. Harsh overhead light with dust cascade from the wall impact. Cinematic 21:9, 60fps slow motion.
```

---

#### Clip 3 — P5 vs P6: Brains vs Brawn

A corridor standoff. One blocks the path. The other finds another way.

```
[0-5s]: @player_05 stands in the center of a collapsed corridor in @warzone_ruins, arms crossed over a broad chest, completely blocking the passage, dark Zerg creep spreading outward from beneath their boots and climbing the rubble on both sides — claiming the ground. @player_06 approaches from the far end, slowing to a stop ten meters away, studying @player_05 with analytical calm — eyes tracing the creep, the ceiling, the debris. Camera slow push-in from behind @player_06 toward @player_05. Warm amber emergency light from a cracked fixture above, deep shadows on both sides.

[5-10s]: @player_05 uncrosses their arms and takes a deliberate step forward — the ground cracking under the weight of the step, dust shaking loose from the ceiling, a clear threat. @player_06 doesn't retreat — instead reaches up and pulls a support beam from the weakened ceiling with precise force, a section of wall collapsing sideways to reveal a parallel corridor, an exit @player_05 didn't account for. The weakened wall crumbles sideways in a cascade of dust and concrete. Camera holds medium on @player_06's face. Harsh dust-filtered amber light, falling debris casting moving shadows.

[10-15s]: @player_06 steps through the breach and emerges ahead of @player_05 on the other side — turning back with a calm look through the gap as @player_05 realizes the path has been flanked. @player_05 slams one fist into the wall with frustrated force, concrete cracking outward, then breaks into a sprint through the original corridor to intercept. Both race toward the same exit point on parallel paths through the ruined structure. Camera holds wide framing both corridors. Golden hour light breaking through the collapsed roof, dust swirling in both corridors. Wide shot, cinematic 21:9, 60fps.
```

---

#### Clip 4 — P7 vs P8: Death from Above

One watches from the rooftops. The other drops in uninvited.

> **Variable beat timing: 2-5-8s.** Brief scan → the freefall (the "untouchable" moment) → extended rooftop circling with the platform crumbling beneath them.

```
[0-2s]: @player_08 crouches on a ruined rooftop in @warzone_heights, scanning the burning streets below. A shadow passes overhead — @player_08 doesn't notice. High above, @player_07 balances on a bent steel beam, looking down with predatory focus. Camera tilts upward from @player_08 to reveal @player_07 above. Cold blue moonlight from above, orange fire-glow from below.

[2-7s]: @player_07 steps off the beam and drops — freefalling silently toward @player_08's rooftop, arms tucked, jacket snapping upward from the descent, Protoss crystalline armor catching moonlight during the fall. @player_08 hears the whistle of displaced air and spins — throwing themselves sideways just as @player_07 slams into the concrete where they crouched, the rooftop cracking from the impact, a wrecked Medivac above swaying from the shockwave, its running lights stuttering amber. Camera holds wide framing the full vertical distance between beam and rooftop. Cold blue moonlight with orange fire-glow from below, Medivac lights flickering.

[7-15s]: Both scramble to their feet on the cracked rooftop — @player_07 grinning with adrenaline, @player_08 jaw clenched with fury. They circle each other on the narrow platform, the rooftop groaning beneath them, concrete tumbling into the streets below. A deep crack splits the platform — the surface tilts, debris sliding toward the drop, forcing both to widen stance. Camera orbits slowly at rooftop level. Split lighting — cold blue moonlight on one side, warm orange city fire on the other, wind-driven embers between them. Medium wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 5 — P9 vs P10: Tunnel Hunters

Both think they're the predator. Both are wrong.

```
[0-5s]: @player_09 moves through @warzone_tunnels in near-darkness, one hand trailing the Zerg creep veins on the wall — the organic tissue brightening green-orange under the touch, reading the hive like braille. Stepping carefully through ankle-deep water, emergency strip lighting casting harsh red-orange pools every few meters. Ahead, a second set of ripples disturbs the water — @player_10 moving toward them from the opposite direction, barely visible, only eyes catching the faint light. Camera low angle from water level pushing forward. Red-orange emergency light pools separated by deep darkness.

[5-10s]: Both players reach the same light pool simultaneously — stepping into the orange glow from opposite sides, faces suddenly visible, less than three meters apart. Both freeze. @player_09's eyes narrow. @player_10's jaw tightens. Water dripping from the ceiling between them in slow heavy drops, each splash catching the light. Camera holds static framing both players on opposite edges of the light pool. Harsh orange-red overhead light against total darkness beyond, water reflections rippling across the walls.

[10-15s]: @player_10 lunges first — water exploding upward — @player_09 deflects with a hip check that sends @player_10 into the tunnel wall, water spraying across both, the impact sending a tremor through the Zerg creep veins, bioluminescent green-orange flaring in a ripple racing down the corridor. @player_10 bounces off the wall, Terran visor snapping down over their eyes on reflex, and bolts past @player_09 into darkness, amber HUD glow the last thing visible. Camera handheld with slight shake, medium close-up. Harsh red-orange overhead light, creep veins pulsing green. Cinematic 21:9, 60fps slow motion.
```

---

#### Clip 6 — P11 vs P12: The Trap

One sets a trap. The other springs it on purpose.

```
[0-5s]: @player_11 crouches behind a rubble barricade in @warzone_ruins, arranging debris across a narrow path — bent rebar and balanced concrete slabs positioned with the patience of a spider threading a web, Zerg chitin-tipped fingers bending the metal with unsettling ease, glancing up periodically to check the approach. In the distance, @player_12 walks steadily toward the position, silhouetted against a wall of fire behind them, BSL jacket catching backlight. Camera starts medium on @player_11's hands, then pulls wide. Warm amber fire-backlight on @player_12, cool shadow on @player_11.

[5-10s]: @player_12 reaches the trap — and stops. Looks down at the tripwire. Looks up at @player_11's hiding position. A deliberate pause. Then @player_12 steps directly onto the tripwire with full weight, triggering it intentionally — the balanced slabs collapsing inward with a crash of concrete and dust, the barricade crumbling. @player_11 scrambles backward from the cascade of debris, cover destroyed. Camera holds wide. Harsh fire-backlight with thick dust cloud rolling forward.

[10-15s]: @player_12 walks through the settling dust toward @player_11, who rises to full height from the rubble. A burning support beam groans above — then snaps, crashing down between both players in a shower of sparks and fire, forcing @player_12 backward and @player_11 sideways. Flames lick upward, heat distortion warping both faces through the blaze. Both silhouettes recede in opposite directions through the orange glow. Camera holds wide. Warm fire-backlight through dust haze, orange flames splitting center. Medium wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 7 — P13 vs P14: The Immovable

Two refuse to yield. Neither backs down. Neither attacks.

```
[0-5s]: @player_13 walks toward a narrow passage through @warzone_ruins — the only path forward between two collapsed buildings — and finds @player_14 already standing in the gap, arms at their sides, feet planted, filling the space with sheer physical presence. @player_13 stops three meters away, head held high with quiet authority. Camera slow dolly forward from behind @player_13 toward @player_14 framed in the gap. Golden hour sidelight cutting through the ruins, long shadows stretching between both players.

[5-10s]: Neither moves. Wind pushes dust between them. A burning timber collapses in the ruins behind @player_13 with a shower of sparks, embers swirling around both figures. @player_13's jacket ripples in the wind. @player_14's expression doesn't change — stone-still, Protoss conduits humming low enough to rattle loose pebbles at their feet, power held in check rather than absent. The tension builds in the silence. Camera holds static at eye level, framing the narrow gap with both players on opposite thirds. Golden sidelight with ember accents, dust swirling in the wind channel.

[10-15s]: @player_13 takes one slow step forward, then another, closing the distance to arm's reach. @player_14 shifts weight slightly forward — a nearly invisible coil of tension. They stand chest to chest in the narrow gap — twin Protoss psi-blades extending simultaneously from both players' wrists, blue-white energy humming to life inches apart, the shattered pylon nearby resonating with a deep harmonic pulse. Camera extreme close-up on both faces in profile, psi-blade glow illuminating from below. Warm golden sidelight splitting both faces, blue psi-blade light between them. Cinematic 21:9, 60fps slow motion.
```

---

### MICRO-TRANSITION — The Warzone Shifts (2:05 – 2:10)

> **Optional 5s insert.** Include if the hard cut from Clip 7 (standoff) to Clip 8 (alliance) feels too abrupt in post. Omit if the pacing carries. Runtime impact: +5s (5:55 → 6:00) unless absorbed by trimming a Beat 3 elsewhere. No @player refs — environment only, single Seedance generation.

```
[0-5s]: Slow aerial drift over @warzone_ruins — a collapsed Terran bunker sinks further into Zerg creep, steel groaning as organic tissue pulls it under. Somewhere below, two sets of footprints in the ash converge into a single path leading deeper into the ruins — the first visual evidence of cooperation in the trailer. No players visible. Camera slow crane descent from high angle. Warm amber glow from distant fires, cold blue shadow in the foreground, ash drifting upward in the heat. Wide shot, cinematic 21:9, 60fps.
```

---

### ACT 2: SHIFTING ALLIANCES (Clips 8-13)

---

#### Clip 8 — P15 & P16: Temporary Alliance

Two strangers fight back-to-back — for now.

```
[0-5s]: @player_15 and @player_16 pressed back-to-back in the center of @warzone_ruins, surrounded by distant shadows moving through the smoke on every side, BSL jackets touching at the shoulders, both scanning different directions. @player_15 coiled low and explosive, fists raised. @player_16 standing tall and still, arms at sides, reading the approaching threats with supernatural calm. Camera orbits slowly around the pair. Warm amber fire-glow from burning vehicles circling the position, smoke rolling in from every direction.

[5-10s]: A chunk of concrete flies from the darkness toward @player_16 — @player_15 intercepts it mid-air, batting it aside with a forearm, debris scattering. From the opposite side, rubble shifts — @player_16 points without looking and @player_15 spins toward the threat without hesitation, trusting the call. Both moving in coordinated response without a word spoken, covering each other's blind spots. Camera tracks the action in a continuous medium shot. Harsh fire-glow with thick smoke, muzzle-flash-like flickers from distant explosions.

[10-15s]: The surrounding threats fade into the smoke. @player_15 and @player_16 straighten up, the alliance no longer needed. @player_16 turns away first — without hesitation, without a glance back — walking into the smoke with glacial calm, Protoss conduits dimming as the figure recedes into nothing. @player_15 watches them disappear, jaw tight, then stalks off in the opposite direction alone. Both silhouettes walk into smoke from opposite sides of the frame. Camera holds static. Cooling amber light fading to cold blue shadow, smoke swallowing both figures. Wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 9 — P3 & P17: Hunted Together

Former strangers forced to run side by side.

```
[0-5s]: @player_03 sprints through @warzone_canyon with desperate urgency, boots pounding, dust flying, BSL jacket torn at one sleeve — glances up to see @player_17 running the crumbling canyon rim above, Zerg chitin growths on the calves gripping each fracturing edge with inhuman balance, matching pace stride for stride, both fleeing something behind them. A deep rumbling grows louder. Camera tracks laterally at canyon-floor level. Harsh overhead sun with dust haze, warm amber tones.

[5-10s]: The canyon wall behind them collapses inward with devastating force — a shockwave of rock and dust chasing both players. @player_03 drops to a slide under a fallen beam blocking the canyon floor. @player_17 leaps a gap in the crumbling rim, landing hard and rolling forward without breaking stride. Both keep moving, the wall of destruction gaining. The wall of destruction gains behind them, rock and dust filling the passage. Camera holds wide framing both levels — floor and rim. Dust-filtered golden light, thundering rock collapse.

[10-15s]: The canyon opens into a wider space — @player_17 drops from the rim to canyon floor, landing beside @player_03. Both skid to a stop, turning to watch the dust cloud settle behind them, the passage completely sealed. They're trapped on this side together now. @player_03 looks at @player_17. @player_17 looks back. Not enemies, not allies — just two people who survived the same thing. Camera holds medium wide framing both against the sealed canyon. Warm golden dust-light settling, heavy silence after the collapse. Wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 10 — P18 vs P19: The Wounded Rise

One player is down. The other closes in. Then the wounded gets back up.

```
[0-5s]: @player_19 lies face-first on shattered ground in @warzone_ruins, BSL jacket torn, one arm clutching their side. @player_18 walks toward them with measured steps, reaching up to pull the amber Terran HUD visor down over their eyes — scan lines flickering to life across the visor surface, a targeting reticle settling on @player_19's prone form. Each footfall deliberate. @player_18's shadow stretches across the ground toward @player_19's prone form. Camera holds static overhead looking down. Dim amber from distant fires, visor glow cutting through cold blue shadow.

[5-10s]: @player_18 stops two meters away and waits — watching @player_19 with calm expectation, not finishing them off, just observing. @player_19 presses one trembling hand into the ground and pushes — muscles straining, teeth gritted, forcing themselves from prone to one knee, then swaying but standing, jaw set with absolute refusal to stay down. @player_18's expression shifts — recognition, perhaps respect. Camera tilts upward steadily. Warm amber ground-glow intensifying as they stand, growing golden from the fires catching wind.

[10-15s]: @player_19 stands at full height and squares up to @player_18 — battered but feet planted and eyes blazing, Zerg chitin veins flaring green-orange with the surge of defiance. @player_18 shifts their stance for the first time, weight dropping lower, Terran visor HUD flickering amber in response, finally treating @player_19 as a real threat. Both circle slowly, roles reversed, the wounded player now radiating danger. Camera orbits slowly around both players. Warm golden fire-glow from all sides casting moving shadows, wind whipping both jackets. Medium wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 11 — P20 vs P21: Ghost War

A mind game in the dark. One hunts by sound. The other is already behind them.

> **Variable beat timing: 8-5-2s.** Extended hunt building tension → the behind-you reveal → instant 2-second hard cut on the ceiling reveal (the "untouchable" moment). The abrupt cut from 5s of dread to 2s of shock is the entire point.

```
[0-8s]: @player_20 moves through a dark corridor in @warzone_tunnels, head turning methodically, listening — footsteps echoing ahead, then behind, then to the side. At a distant light pool, @player_21 crouches — then sinks into the Zerg creep on the floor, chitin armor merging with the organic surface, the creep swallowing the silhouette whole. @player_20 pushes forward, rounding corners, the red-orange emergency light pools casting long shadows, dripping water the only sound. Each intersection identical — darkness, light pool, darkness. Camera tracks slowly behind @player_20 at shoulder height. Deep darkness with intermittent red-orange light pools, dripping water echoing.

[8-13s]: @player_20 turns a final corner and finds — nothing. Empty corridor stretching into darkness. They exhale and lower their guard for one fraction of a second. Behind them, just visible at the edge of the previous light pool, @player_21 stands completely motionless, having been there the entire time, watching @player_20 walk past within arm's reach, Zerg chitin armor blending with the tunnel wall. Camera holds static. Harsh red-orange light on @player_21's still form, @player_20 in relative shadow ahead.

[13-15s]: @player_20 whips around — @player_21 is gone. Fresh footprints in the water lead nowhere. @player_20 looks up — @player_21 is pressed flat against the ceiling in deep shadow, Zerg chitin fused with the organic tunnel surface, eyes catching the faintest red-orange light, looking directly down. Dark purple Zerg creep visibly spreading outward from @player_21's body across the ceiling, tendrils inching toward the walls. Hard cut. Camera snaps upward. Red-orange light from below, deep darkness and creep above. Medium shot, cinematic 21:9, 60fps.
```

---

#### Clip 12 — P22 vs P23: Blade and Mirror

One attacks with everything. The other matches every move.

```
[0-5s]: @player_22 charges across open ground in @warzone_clearing, BSL jacket streaming, body pitched forward with full commitment, running directly at @player_23 who stands still at the far side of the clearing, arms loose at their sides, watching the charge approach with unsettling calm. Dust kicks up in @player_22's wake, the gap closing with each stride. Camera tracks laterally at ground level. Golden hour light across the flat open ground, long shadows stretching from both players.

[5-10s]: @player_22 reaches striking distance and swings — @player_23 shifts weight and redirects the momentum with minimal movement, sending @player_22 stumbling past. @player_22 recovers and strikes again — @player_23 mirrors the motion exactly, matching angle and force like a reflection, neutralizing it. Every attack met with its precise counter, neither player landing a decisive blow, dust spiraling from the exchange. Camera holds medium framing both figures at striking distance. Warm golden light with dust suspended in the air between both figures.

[10-15s]: Both players separate — breathing hard. @player_22 wipes dust from their face, Terran gauntlets bearing fresh dents from every failed strike, amber energy seams cracked and flickering at the knuckles. @player_23 rolls both shoulders once, resetting, Protoss conduits pulsing steady blue — unmarked, untouched. @player_22 looks down at the broken gauntlets, then back at @player_23, and walks away across the clearing with both fists still raised. Camera slow push-in on @player_23. Golden hour sidelight, shallow depth of field. Medium close-up, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 13 — P8 & P15: The Betrayal

An alliance shatters in real time.

```
[0-5s]: @player_08 and @player_15 walk side by side through @warzone_ruins, both scanning the environment, moving together like a team — @player_08 tall and steady, @player_15 coiled and alert. They approach a narrow passage that only fits one. Both slow down. Both look at the gap. Both look at each other. Camera tracks ahead of them in slow dolly backward. Warm amber fire-glow from flanking ruins, cool shadow in the passage ahead.

[5-10s]: @player_15 lunges for the passage — but @player_08 catches their collar and hauls them backward with raw strength, the fabric stretching taut, @player_15's boots scraping through rubble as momentum reverses. @player_08 shoulders past into the gap, concrete dust shaking loose from both walls as they fill the narrow space. @player_15 stumbles to one knee behind them, jaw set with fury. Camera holds static in the passage. Harsh amber light from the entrance behind them, deep shadow ahead.

[10-15s]: Both burst out the other side of the passage simultaneously, shoving apart — @player_08 stumbling left, @player_15 stumbling right. They spin to face each other — the alliance is over. @player_08 sets their jaw with cold determination. @player_15 drops into a coiled ready stance. The passage behind them collapses in a slow cascade of dust and concrete, sealing the way back. No retreat for either. Camera holds wide with the dust cloud centered between both players. Warm amber light fading to cold blue as dust billows forward. Wide shot, cinematic 21:9, 60fps slow motion.
```

---

### INTERSTITIAL — The Empty Warzone (3:35 – 3:50)

> **Why this exists:** All three virtual test audience personas recommended a silence beat between Acts 2 and 3. This 15-second environment-only shot resets the audience's nervous system before the final escalation — a technique used in League of Legends Worlds 2022 and 2023 cinematics. Runtime stays at 5:55 because Clips 18+19 were merged into a single clip above.

```
[0-5s]: Extreme wide aerial view of the full three-faction warzone at golden hour — no players visible. Burning Terran bunkers, Zerg creep spreading across collapsed structures, shattered Protoss pylons flickering faint blue. Wind carrying embers across empty streets where footprints in ash are the only sign anyone was here. Complete silence — no score, no SFX. Camera drifts forward slowly at high altitude. Warm amber fire-glow against cold grey ruins, golden hour sun cutting through smoke haze.

[5-10s]: Ground level — a slow lateral drift through an empty intersection in @warzone_ruins. Fresh battle damage everywhere — cracked walls, scorch marks, a handprint smeared in dust on a concrete pillar. A BSL jacket sleeve torn off and caught on rebar, fluttering in the wind. No players. The wind is the only sound. Camera drifts laterally at ground level with slight handheld float. Warm amber light fading to cold blue shadow, dust motes drifting in silence.

[10-15s]: The path to @warzone_clearing opens ahead — golden light spilling through a gap in the ruins, the clearing visible as an open bright space at the end of a corridor of destruction. Distant figures barely visible as dark silhouettes moving across the golden ground. The first low bass drone of the Act 3 score fades in under the wind. Camera slow push-in toward the clearing light. Cool shadow giving way to warm golden clearing-light, dust swirling in the light shaft. Wide shot, cinematic 21:9, 60fps.
```

---

### ACT 3: THE CONVERGENCE (Clips 14-19)

---

#### Clip 14 — P2 vs P9: The Tables Turn

The hunter from Clip 1 is now the hunted.

```
[0-5s]: @player_02 moves through @warzone_heights on a ruined catwalk, visibly worn from earlier fights, BSL jacket dusty and torn, moving with less confidence than before — checking corners nervously, favoring one side. Below on the street level, @player_09 tracks them silently, moving from shadow to shadow with the patience earned in the tunnels, eyes locked on @player_02 overhead. Camera low angle from street level looking up. Cold blue moonlight above, warm orange fire-glow from street level.

[5-10s]: @player_09 scales a collapsed wall with fluid motion, pulling themselves up silently, closing the vertical distance. @player_02 pauses on the catwalk, sensing something — turns slowly. @player_09 is already at catwalk level, standing in the shadows ten meters behind, perfectly still, waiting to be seen. @player_02's eyes find them and widen. Camera holds medium on the catwalk, both players framed in the narrow elevated space. Cold blue moonlight with deep shadows, wind whipping through the elevated gap.

[10-15s]: @player_02 doesn't run this time — plants both feet and turns to face @player_09. @player_09 walks forward with measured weight, each step pressing the groaning catwalk. A bolt shears — the catwalk lurches, both grabbing the railing as debris slides into the burning streets below. The structure buckles between them, twisted metal splitting the walkway in two. Both crouch on their separate halves, the city sprawling below. Camera holds wide framing the split catwalk with both players separated by the gap. Split lighting — moonlight above, firelight below. Wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 15 — P4 & P6: Parallel Paths

Two players racing toward the same destination through different routes — one through brute force, one through clever navigation.

```
[0-5s]: Split composition — @player_04 running through a ground-level corridor in @warzone_ruins on the left third, Terran shoulder pauldrons lowered like a battering ram, plowing straight through a concrete slab that shatters on impact without breaking stride. Simultaneously, @player_06 moves through a parallel upper-level passage on the right third, stepping precisely over gaps and ducking through structural openings with surgical efficiency. Both heading the same direction, neither aware of the other. Camera holds wide framing both levels — ground corridor left, upper passage right. Warm amber light on the ground level, cooler blue-grey on the upper level.

[5-10s]: Both paths converge toward the same opening — a collapsed floor/ceiling breach where upper and lower levels meet. @player_04 charges through from below as @player_06 drops through from above — they collide mid-transition with a heavy impact, both tumbling into the same space in a tangle of limbs and dust. Camera holds on the convergence point. Harsh amber dust-light, concrete fragments scattering from the impact.

[10-15s]: Both scramble apart in the shared space — an open room with exits in every direction. @player_04 breathing hard, fists raised. @player_06 already scanning the exits, calculating. They lock eyes — then both look toward the same distant exit where golden light spills through. The clearing. They both know where this ends. @player_04 breaks for the exit. @player_06 moves toward a different one. Both sprint toward different exits, each leading to the same clearing. Camera holds wide. Golden light from the exits, dust settling between them. Wide shot, cinematic 21:9, 60fps.
```

---

#### Clip 16 — P10 & P11: Cornered Together

Two hunters trapped in a closing space. Fight each other or fight the collapse.

```
[0-5s]: @player_10 and @player_11 face each other in a narrow chamber in @warzone_tunnels, rubble blocking the passage behind @player_10, a buckled steel door sealing the way behind @player_11. Both arrived from different directions and neither can go back. Emergency red light strobing above them, the ceiling cracking with deep structural groans, dust raining steadily. Camera medium shot at eye level between both players. Harsh red strobe light with deep shadow, dust particles thick in the air.

[5-10s]: The ceiling drops a heavy chunk of concrete between them — both jump backward. Then another chunk falls, closer to @player_10. The room is collapsing. @player_11 looks at the blocked passages, then at @player_10, then at a ventilation shaft high on the wall — too high to reach alone. @player_10 follows their gaze to the same shaft. A decision made without words. Concrete chunks continue falling between them, each impact closer. Camera holds wide. Red strobe light with increasing dust density, groaning metal intensifying.

[10-15s]: @player_10 braces against the wall — Terran shoulder plates locking open, digging into concrete like anchors. @player_11 climbs their shoulders toward the ventilation shaft, Zerg chitin ridges hooking the metal edges. The ceiling splits, concrete raining down. They haul into the shaft just as the floor gives way — a thundering cascade swallowing the space they occupied one second ago. Both wedged in the shaft, faces inches apart, collapse roaring beneath. Camera tight on both faces in the confined shaft. Red-orange glow from below, deep shadow above. Cinematic 21:9, 60fps slow motion.
```

---

#### Clip 17 — P16 vs P25: The Final Boss Arrives

The calmest player in the storyboard meets the most powerful.

> **Variable beat timing: 5-8-2s.** Ridge arrival → extended shared observation (let the audience feel the weight of two commanders surveying the war) → 2-second face confrontation hard cut. The abrupt ending leaves the audience wanting more.

```
[0-5s]: @player_16 stands on @warzone_ridge overlooking the full battlefield below — fires burning, dust clouds rising, distant figures clashing in the ruins. Wind howling, BSL jacket rippling, surveying the chaos with stillness that suggests they've been here a while. Behind them, footsteps on gravel — @player_25 walks up the ridge path with heavy deliberate strides, heavy Terran commander armor catching wind, expression radiating absolute authority. Camera slow push-in from behind @player_25 toward @player_16's back. Harsh sidelight from the setting sun, warm amber against cold grey sky.

[5-13s]: @player_16 doesn't turn around — acknowledging @player_25's presence without surprise. @player_25 stops beside them and looks out at the same battlefield. Two commanders standing side by side on the ridge, the entire war visible below — Terran bunkers burning, Zerg creep expanding, Protoss pylons flickering in the distance. Wind carries embers upward past both figures. The moment stretches. Then @player_25 turns their head slowly toward @player_16. @player_16 finally meets the gaze. Camera holds medium wide framing both profiles against the burning horizon. Golden sunset light splitting both faces, wind whipping both jackets.

[13-15s]: @player_25 takes one step to stand directly in front of @player_16, blocking the battlefield, filling the frame. Terran amber visor-glow and Protoss blue crystalline light meeting in the narrow space between their faces. Hard cut. Camera snaps to extreme close-up on both sets of eyes. Warm golden sidelight, shallow depth of field. Cinematic 21:9, 60fps slow motion.
```

---

#### Clip 18 — P12 & P13 & P17 & P20: The Last Walk In

Four battered survivors converge on the clearing from different directions. The war is ending — what remains is who shows up.

> **Production note:** This clip merges the original Clips 18+19 (both were walking beats back-to-back in Act 3). Generate as two separate 15s clips — one for each pair — and intercut in post to create a single 15s parallel-walk sequence. Each generation stays within Seedance's 2-character limit.

**Generation A — P12 & P13:**

```
[0-5s]: @player_12 limps through @warzone_ruins toward golden light ahead, BSL jacket torn, one arm hanging loose. From a side passage, @player_13 emerges — equally battered, dust-covered. Both stop when they see each other. @player_13 sways, about to drop. @player_12 steps forward and catches their arm, pulling it across their own shoulders, taking the weight. Camera holds medium wide. Warm amber light from the clearing ahead, cool shadow behind.

[5-10s]: @player_12 and @player_13 walk together toward the clearing, each step labored, leaning on each other, golden light growing brighter with every stride. @player_13 finds footing and pulls away — standing alone, jaw set. Both walk forward side by side but no longer touching, pride restored. Camera tracks beside them in a lateral dolly. Warm golden light intensifying, their shadows shortening ahead of them.

[10-15s]: Both reach the clearing edge — the open ground stretching before them, distant silhouettes converging from every direction. @player_12 and @player_13 separate without a word, bruised faces steady, walking to different positions in the forming ring. Camera pulls wide. Golden hour light flooding the open ground, multiple silhouettes approaching. Wide shot, cinematic 21:9, 60fps slow motion.
```

**Generation B — P17 & P20:**

```
[0-5s]: @player_17 stands at the mouth of a destroyed street leading to @warzone_clearing, golden light spilling through the gap between ruins. @player_20 approaches from behind — not hostile, not friendly, just walking the same direction. Both pause at the threshold. Other players visible as small figures already moving across the open ground. Camera holds wide on the street corridor. Cool shadow in the ruins, warm golden light at the exit.

[5-10s]: @player_20 walks forward first — measured, composed, hands clasped behind their back, Zerg bioluminescent veins dimmed to near-dark along the arms, the predator at rest. @player_17 follows, matching the pace, both walking in single file toward the light. The corridor walls narrow, forcing them shoulder to shoulder for the final steps. Camera slow dolly backward through the corridor. Golden clearing-light growing brighter, shadows shortening, wind increasing.

[10-15s]: Both step out into the clearing — players arriving from every direction, silhouettes against fire and dust. @player_20 and @player_17 separate without a word, moving to their own positions in the forming ring, each facing outward toward different opponents. Camera cranes upward to extreme wide aerial. Golden light from above, long shadows radiating outward from each figure. Extreme wide shot, cinematic 21:9, 60fps slow motion.
```

---

#### Clip 19 — P24 vs P25: The Last Challenge

The final 1v1 before the ring closes.

```
[0-5s]: @player_24 bursts into @warzone_clearing from a side corridor at a dead sprint — the only player still running while everyone else stands still, a dust trail stretching behind them through the ruins, Terran armor streaked with grime from every zone they crossed to get here. The clearing is already ringed with standing figures — @player_25 alone at center, perfectly still. @player_24 doesn't slow down, running directly at them. Camera tracks laterally at ground level. Golden hour light flooding the clearing, @player_25 silhouetted at center, dust rising from @player_24's footsteps.

[5-10s]: @player_24 reaches @player_25 and throws everything into a single strike — @player_25 catches the blow with one hand, absorbing the full momentum without moving their feet, dust rippling outward from the contact in a visible ring. The shockwave hits the surrounding wreckage — Terran bunker panels spark amber, Zerg carapace fragments pulse green-orange, Protoss psi-blade scars on the ground flare blue-white, all three faction energies cascading outward in sequence. @player_24 pushes harder — @player_25 holds effortlessly. Camera holds medium on the locked contact point. Harsh golden light from above, three-color energy ripple beneath them.

[10-15s]: @player_25 releases @player_24's hand and takes one step backward — not a retreat, a grant. Space to stand. @player_24 straightens up slowly, breathing hard, and takes their place in the ring. @player_25 turns in a slow circle, looking at every player around the ring's edge — 24 faces, 24 threats. Nobody moves. @player_25 turns in a slow circle, every face in the ring flashing past in golden light. Camera orbits steadily at ring level. Warm golden hour light, 25 long shadows radiating from center, absolute silence. Extreme wide shot transitioning to orbit, cinematic 21:9, 60fps slow motion.
```

---

## FINALE (5:20 – 5:55)

### Shot 1 — Rapid Montage (15s)

Quick cuts of the most intense beat from each clip — collisions, reversals, ambushes, betrayals — accelerating with the score. First 5 at ~1.2s each, middle 10 at ~0.65s, final 5 at ~0.4s. **Built in post** — DaVinci Resolve speed ramp edit, each cut matched to a percussion hit. Final 3 cuts (P19 getting up, P24 striking P25, P25 turning to face the ring) hit on a triple-beat crescendo.

**Beat selections for montage (in order):**

> **Selection criteria:** Every montage image must read in under 1 second with zero context. Cuts 3, 6, and 8 from the original selection were replaced because they require setup to understand (a wall slowly collapsing, a trap being triggered, swinging at mid-air concrete). Replaced with instantly readable action images.

| # | Source | Beat | Key Frame | Timing |
|---|---|---|---|---|
| 1 | Clip 1 | [10-15s] | P1 & P2 collision, dust ring eruption | ~1.2s |
| 2 | Clip 2 | [10-15s] | P3 shoulder-checks P4 into canyon wall | ~1.2s |
| 3 | Clip 4 | [5-10s] | P7 in freefall, arms tucked, jacket snapping upward | ~1.2s |
| 4 | Clip 9 | [5-10s] | Canyon wall collapses behind P3 & P17, wide shot | ~1.2s |
| 5 | Clip 5 | [10-15s] | P10 hip-checked into tunnel wall, creep veins flare | ~1.2s |
| 6 | Clip 7 | [10-15s] | P13 & P14 chest to chest, twin psi-blades extended | ~0.65s |
| 7 | Clip 10 | [5-10s] | P19 forces themselves to stand | ~0.65s |
| 8 | Clip 11 | [10-15s] | P21 revealed pressed against ceiling | ~0.65s |
| 9 | Clip 12 | [5-10s] | P23 mirrors P22's strike perfectly | ~0.65s |
| 10 | Clip 13 | [5-10s] | P8 grabs P15's collar — betrayal | ~0.65s |
| 11 | Clip 14 | [5-10s] | P9 appears behind P2 on catwalk | ~0.65s |
| 12 | Clip 15 | [5-10s] | P4 & P6 collide through floor breach | ~0.65s |
| 13 | Clip 16 | [10-15s] | P10 & P11 haul into shaft as floor collapses | ~0.65s |
| 14 | Clip 17 | [10-15s] | P25 steps in front of P16, filling the frame | ~0.65s |
| 15 | Clip 19 | [5-10s] | ECU: P25's hand catching P24's fist, dust frozen | ~0.65s |
| 16 | **P19 rising** | Clip 10 [10-15s] | Triple-beat 1: wounded player standing, eyes blazing | ~0.4s |
| 17 | **P24 strikes** | Clip 19 [5-10s] | Triple-beat 2: three-faction energy cascade | ~0.4s |
| 18 | **P25 turns** | Clip 19 [10-15s] | Triple-beat 3: slow turn, 24 faces in golden light | ~0.4s |

### Shot 2 — The Ring (15s)

> **Faction ring grouping:** Players cluster into three faction arcs — Terran (amber armor, 9 players) on the north arc, Zerg (green-orange chitin, 8 players) on the southeast arc, Protoss (blue-white crystal, 8 players) on the southwest arc. P25 stands alone at dead center, separated from the Terran arc they belong to — the commander who answers to no faction. The grouping creates three visible color blocks from aerial view and allows the gauntlet-raise energy to chase around the ring in faction order.

```
[0-5s]: Extreme high aerial view of @warzone_clearing at golden hour. Twenty-five figures standing in a ring on scorched ground at the center of the Protoss psi-blade burn pattern, clustered into three faction arcs — amber Terran armor north, green-orange Zerg chitin southeast, blue-white Protoss crystal southwest. One figure stands alone at dead center. Shadows radiating outward like spokes. Three-faction wreckage forming the arena wall. No one moves. Camera holds extreme wide aerial, perfectly centered on the ring. Warm golden light, faint blue energy scars on the ground, dust haze softening the edges.

[5-10s]: The ring resolving into individual players as the view lowers — the three faction arcs becoming distinct color blocks of amber, green-orange, and blue-white catching the golden light, faces visible now, each one locked on a different opponent across the circle. @player_25 stands at center, visored and still, facing the Protoss arc. Hands at sides. Weight forward. Camera descends steadily toward the ring. Golden hour light intensifying below the smoke layer, faces sharpening, faction colors resolving.

[10-15s]: Ground level inside the ring. @player_25 raises one Terran gauntlet with deliberate slowness, amber energy seams glowing bright. The Terran arc responds — eight figures shifting weight forward, armor flaring amber. Then the Zerg arc — chitin veins pulsing green-orange in a wave. Then the Protoss arc — crystalline conduits igniting blue-white. The energy chases around the ring like a lit fuse. Camera orbits steadily at ground level through the three arcs. Golden hour light washing every figure, three-color faction glow chasing around the ring. Wide shot, cinematic 21:9, 60fps extreme slow motion.
```

### Shot 2.5 — The Last Face (1s)

> **Built in post.** A single flash-frame ECU of one player's face — eyes locked directly into camera, lit by golden hour light and faint faction glow — held for exactly 1 second before the aerial freeze. This is the last human image in the trailer. The face the audience carries out. Choose the player with the most screen presence from the generated footage.

### Shot 3 — Freeze + Title (5s)

```
[0-5s]: The ring from directly above — all 25 figures frozen mid-tension on the Protoss psi-blade burn pattern, shadows pointing outward. A shockwave of golden dust expands outward from center in a slow ring, passing through each figure, jackets rippling in its wake. The dust ring hits the surrounding wreckage — Terran panels flaring amber, Zerg tissue pulsing green-orange, Protoss crystal husks glowing blue-white — three colors chasing the ring outward into silence. Camera holds perfectly still, extreme wide aerial. Golden dust-light expanding through three-color faction glow against dark burnt ground. Extreme wide shot, cinematic 21:9, 60fps extreme slow motion.
```

> Tournament name + date + "25 PLAYERS. ONE CHAMPION." overlay added in post over the frozen ring.

---

## Production Notes

### Seedance Input Format

All prompts use Seedance's native time-bracketed format. Each beat has:
- **One primary action** (physics consequences and secondary motion don't count as competing actions)
- **Separated camera instruction** (camera as its own clause, not embedded in subject description)
- **Explicit lighting** per beat
- **~50-100 words per beat** (aim for 60-100; climactic "money shots" may use up to 150 — sources confirm 200 is the real ceiling before models ignore elements, but 150 keeps prompts focused)
- **Camera as its own sentence** — separate subject motion from camera motion in sentence structure (Apiyi calls mixing them "the most overlooked mistake")

These rules come from Seedance 2.0's official prompt guidance — see [Seedance 2.0](/wiki/seedance-2) for the full rule set with sources.

### Music Sync Points (5 Critical Hits)

These are the 5 moments where the edit lives or dies based on music-to-visual sync. Script these into the score and post-production timeline before generating clips.

| # | Timecode | Event | Audio Design |
|---|---|---|---|
| 1 | **0:00** | First frame of Cold Open descent | Low held drone or bass tone — not percussion. Establishes sonic world. Battlecruiser should be visible before 0:03 |
| 2 | **0:15** | Title Card — "Nuclear launch detected" | Adjutant voice line timed so the last syllable hits a single bass impact. Cut to silence. The silence after the hit IS the moment |
| 3 | **~2:05** | Clip 8 Beat 1 — P15 intercepts concrete mid-air | Score shifts from tense low-end drone to a brief melodic thread. This is the first cooperative action. Emotional hinge of the first half |
| 4 | **~3:20** | Clip 13 Beat 2 — P8 grabs P15's collar (the betrayal) | Hardest percussion impact in the entire score. If one frame needs frame-accurate sync, it's this one |
| 4.5 | **~3:35** | Interstitial begins — score drops to absolute silence | All music and SFX cut to zero. Wind and embers only. The silence IS the event. First bass drone fades in at ~3:47 as camera finds the clearing |
| 5 | **~5:37** | Finale Shot 3 — freeze frame dust shockwave | Single enormous bass hit decaying into total silence. Faction energy cascade (amber > green > blue) chases around the ring over held tone or nothing. Last sound is the hit, then silence |

> **Production note:** These sync points must be designed into the score before post-production assembly. They are not post-hoc edits — they define the score's structure.

### Faction Gear in Prompts

Not every prompt explicitly names faction armor — Seedance pulls the visual look from the `@player_XX` reference image, which already shows each player in their faction-themed combat gear. Prompts in Clip 1, Clip 4, Clip 17, and the Finale explicitly name faction elements to reinforce key moments. For remaining clips, the @reference system handles visual consistency automatically. Where prompts still say "BSL jacket," the rendered output will show the faction gear from the character sheet.

### Audio References

Seedance 2.0 accepts audio files as input (up to 15 assets per generation). Feed war/battle SFX as `@sound` references. Layer **2-3 audio references per clip** for richer soundscapes — a primary action sound plus ambient environment sound. Recommended asset budget per clip:

| Assets | Budget | Example (Clip 4 — Death from Above) |
|---|---|---|
| 2 @character | Required | @player_07, @player_08 |
| 1 @scene | Required | @warzone_heights |
| 1 @video_style | Required | Best previous clip |
| 2-3 @sound | Recommended | @sound_wind_howl + @sound_concrete_impact + @sound_metal_groan |
| 1 @scene (secondary) | Optional — for clips spanning two environments | @warzone_ruins (visible below from heights) |
| **Total** | **7-8 of 15** | Leaves headroom for additional style or object refs |

| Sound | @sound tag | Use |
|---|---|---|
| Distant artillery rumble | @sound_artillery | Cold open, outdoor ruins clips |
| Footsteps on rubble (close) | @sound_footsteps | Stalking clips (1, 5, 7, 11) |
| Wind howl (high altitude) | @sound_wind_howl | Heights clips (4, 14), ridge (17, 19) |
| Explosion chain (close) | @sound_explosion_chain | Collapse clips (9, 16), cold open |
| Concrete impact (heavy) | @sound_concrete_impact | Brawl clips (1, 3, 5, 13) |
| Dripping water (echo) | @sound_water_drip | Tunnel clips (5, 11, 16) |
| Metal creak/groan | @sound_metal_groan | Catwalk (14), passage (13), tunnel (16) |
| Deep bass impact | @sound_bass_impact | Finale freeze, title card |
| Silence (2s) | @sound_silence | Ring standoff, final freeze |

**Recommended sound pairings per clip type:**

| Clip Type | Primary Sound | Ambient Sound | Optional Third |
|---|---|---|---|
| Ruins stalking (1, 6, 7) | @sound_footsteps | @sound_artillery | — |
| Canyon chase (2, 9) | @sound_footsteps | @sound_explosion_chain | — |
| Heights/rooftop (4, 14) | @sound_wind_howl | @sound_concrete_impact | @sound_metal_groan |
| Tunnel (5, 11, 16) | @sound_water_drip | @sound_metal_groan | @sound_footsteps |
| Clearing/open (12, 15, 18-20) | @sound_artillery | @sound_wind_howl | — |
| Betrayal/brawl (3, 8, 10, 13) | @sound_concrete_impact | @sound_footsteps | @sound_metal_groan |
| Ridge (17) | @sound_wind_howl | @sound_artillery | @sound_explosion_chain |
| Finale ring | @sound_silence | @sound_bass_impact | — |

**Sourcing audio:** Extract SFX from StarCraft: Brood War game assets or use royalty-free equivalents. Convert to WAV/MP3 before uploading. Keep each clip under 5 seconds — Seedance uses it as a tonal reference, not a direct soundtrack.

### Per-Act Audio Mood Board

Each act has a distinct sonic identity. Use these as reference when sourcing @sound assets and composing the final score.

| Act | Timecode | Energy | BPM Range | Sonic Character | Reference Tone |
|---|---|---|---|---|---|
| **Cold Open** | 0:00–0:15 | Stillness → dread | None (ambient) | Low held drone, wind, distant metal creaking. No percussion. The Battlecruiser debris should feel like a dying whale — deep, slow, structural. | Blade Runner 2049 opening (Zimmer/Wallfisch): industrial hum, zero rhythm |
| **Title Card** | 0:15–0:20 | Single spike | N/A | Adjutant voice line + one bass impact + cut to silence. The silence after is louder than the hit. | Inception trailer: single BRAAAM into void |
| **Act 1** | 0:20–2:05 | Tense, stalking | 70–85 | Sparse tension percussion — tabla-like hits, metallic scrapes, low synth pulses. No melody. Each clip's primary @sound dominates (footsteps, wind, dripping). Score sits underneath, felt more than heard. | Sicario border convoy scene (Jóhannsson): percussive dread, minimal instrumentation |
| **Micro-transition** | 2:05–2:10 | Brief exhale | None | Score drops to a single held tone over environmental ambience. 3s of near-silence before Act 2's first beat. | The Dark Knight Rises: Bane stadium silence |
| **Act 2** | 2:10–3:35 | Rising, conflicted | 85–100 | Melodic thread introduced (solo cello or low brass). Percussion builds complexity — layered polyrhythms. Alliance clips get warmer tones; betrayal clip gets the hardest single percussion hit in the trailer. | Mad Max: Fury Road chase (Junkie XL): layered percussion building to orchestral |
| **Interstitial** | 3:35–3:50 | Absolute zero | None | Total silence — no score, no SFX. Wind and embers only. The first bass drone fades in at ~3:47 as the camera finds the clearing. | League Worlds 2022 mid-cinematic silence |
| **Act 3** | 3:50–5:20 | Relentless escalation | 100–120 | Full orchestral — brass, strings, war drums. The melodic thread from Act 2 now carried by full string section. Percussion doubles tempo. Each clip adds another instrument layer. By Clip 19 (P24's sprint), the entire orchestra is at full force. | Two Steps From Hell "Heart of Courage": orchestral war escalation |
| **Finale** | 5:20–5:55 | Peak → stillness | Decelerating | Montage: percussion matches cut rhythm (1.2s → 0.65s → 0.4s). Ring: orchestra drops out instrument by instrument as the camera descends. Freeze: single bass hit, then nothing. The trailer ends in silence. | Interstellar docking scene (Zimmer): organ crescendo into void |

### Score Composition Strategy

**Decision: Hybrid approach.** Seedance generates native audio per clip, but the final trailer score is composed separately and mixed over the Seedance output in post-production.

| Layer | Source | Role |
|---|---|---|
| **Seedance native audio** | Generated with each clip | Provides physics-grounded SFX (impacts, footsteps, wind, debris). Keep these at ~60% volume as the "reality" layer |
| **StarCraft SFX** | Extracted from game assets or royalty-free equivalents | Faction-specific sounds (Terran HUD beep, Zerg screech, Protoss warp-in hum) at key activation moments. Sparse — 8-10 instances across the full trailer |
| **Composed score** | Custom composition or licensed orchestral stems | Carries the emotional arc. Composed to the sync points. Must be written AFTER test clips are generated so BPM and energy match the actual visual rhythm |
| **Silence** | Intentional absence | Title card, interstitial, finale freeze. These gaps are scored too — they define the dynamics |

**Workflow:**
1. Generate test clips (Cold Open, Clip 1, Clip 10) with @sound references
2. Listen to Seedance's native audio output — note what it handles well and what sounds artificial
3. Compose or source score stems that complement (not compete with) the native audio
4. Mix in DaVinci Resolve Fairlight: Seedance audio → score → StarCraft SFX → silence events
5. Final mix: ensure the 5 sync points land frame-accurate

### Finale Ring — Compositing Strategy

The Finale ring shows 25 figures in a circle, which exceeds Seedance's 2-character limit per generation. Use this multi-pass approach:

| Pass | Assets | Purpose |
|---|---|---|
| **Wide aerial (Beat 1)** | @warzone_clearing + @video_style | No @player refs needed — figures are silhouettes at extreme distance. Generate as a pure environment shot with small distant figures. |
| **Descending (Beat 2)** | @warzone_clearing + @video_style + 2 @player refs (foreground pair) | As the camera descends, only the nearest 2 faces need to resolve clearly. Choose a cross-faction pair (e.g., Terran + Protoss) for visual variety. |
| **Ground orbit (Beat 3)** | Generate 3-4 passes, each with a different @player pair in focus | Composite into a single orbit in DaVinci Resolve using masked blending. Each generation shows 2 clear faces with blurred figures beyond. Stitch at natural motion-blur points during the orbit. |
| **Freeze (Shot 3)** | @warzone_clearing + @video_style | Extreme aerial — figures are small enough that individual identity comes from faction gear color (amber/green/blue), not face detail. |

> **Key insight:** At extreme wide and aerial angles, Seedance renders convincing crowd silhouettes without @character refs. Only close-up orbits require compositing.

### Test Clip Validation Priorities

When the first 3 test clips are generated (Cold Open Shot 1, Clip 1, Clip 10), validate these assumptions that no source has confirmed empirically:

| # | Assumption to Test | How to Test | If It Fails |
|---|---|---|---|
| **1** | **Time brackets are precise** — `[5-10s]` means action starts at ~5s | Generate Clip 4 (variable timing: 2-5-8s) and check whether the freefall beat actually starts at ~2s and ends at ~7s | If brackets are loose (±2s), rewrite all variable-timing clips to uniform 5-5-5 |
| **2** | **Negative prompts work** — "avoid jitter" actually reduces jitter | Generate the same clip with and without negative prompt, compare artifact rates | If negatives are ignored (as Redreamality claims), remove them to save token budget |
| **3** | **@sound references affect visual rhythm** — audio input influences motion pacing | Generate a clip with and without @sound, compare movement timing | If audio has no visual effect, simplify audio strategy to post-only |
| **4** | **150-word beats render fully** — no elements are ignored at higher word counts | Generate a climactic beat at 80 words and 140 words, compare detail retention | If 140-word beats drop elements, keep the 100-word ceiling |
| **5** | **Compound camera works** — "tracks laterally then holds" produces a single coherent movement | Generate a compound-camera beat and a split-beat version, compare | If compound fails, revert to strict one-instruction rule |

> **This is the single most important pre-production step.** Every constraint validation above costs 2-3 extra Seedance generations (~$1-3 total) but could save dozens of failed generations later. Run these A/B tests BEFORE batch-generating the full storyboard.

### Video Style Anchoring

| Stage | Strategy |
|---|---|
| Cold open | Generate first — becomes the style anchor |
| Clips 1-5 | Use cold open as `@video_style` |
| Clips 6-20 | Use best previous clip as `@video_style` |
| Finale | Use best clip from each act (3 video refs) |

### Seedance Settings

| Setting | Value |
|---|---|
| Resolution | 2048x878 (21:9) |
| Duration — player clips | 15s (3 beats × 5s) |
| Duration — cold open | 10s (Shot 1) + 5s (Shot 2) |
| Duration — finale | 15s (ring) + 5s (freeze) |
| FPS | 60 |
| Style | Photorealistic cinematic |
| Audio | Native |

### Principles Applied

Every prompt in this storyboard follows specific AI video generation principles. This section maps each technique to its source so the reasoning behind prompt decisions is traceable.

| Technique Used | Principle | Source |
|---|---|---|
| `[0-5s]` / `[5-10s]` / `[10-15s]` time brackets | Multi-shot via lens switch — time-bracketed beats structure multi-shot sequences within a single generation | [awesome-seedance-2-prompts](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts) |
| One primary directed action per beat (physics consequences don't count) | One shot, one verb — multiple motion verbs confuse the model | [Redreamality Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/) |
| "Camera [instruction]" as its own clause, never embedded in subject description | Separate camera from subject movement | [Apiyi Official Prompt Guide](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html) |
| One camera instruction per beat (e.g., "Camera slow push-in" not "push-in then pan left") | One primary camera instruction per shot | [Apiyi Official Prompt Guide](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html) |
| Explicit lighting in every beat (e.g., "warm amber fire-glow between them, cold shadow behind each player") | Lighting has the biggest single impact on video quality | [Apiyi Official Prompt Guide](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html) |
| No instance of "fast" in any prompt; pacing through "slow," "deliberate," "steady" | "Fast" is the keyword most likely to degrade quality | [Apiyi Official Prompt Guide](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html) |
| Max 2 @character references per generation (all clips are duo interactions) | More than two characters causes identity confusion | [Redreamality Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/) |
| Present tense with force/weight/friction details ("dust erupting outward in a ring," "concrete cracking from the impact") | Use present tense with physics details — describe force, not just name the action | [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide) |
| Intensity modifiers ("deliberately," "with devastating force," "violently," "slowly") | Models respond strongly to intensity language | [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide) |
| 50–91 words per beat | Sweet spot 60–100 words; too short lacks detail, too long causes ignored elements | [LaoZhang AI Tutorial](https://blog.laozhang.ai/en/posts/seedance-2-how-to-use) |
| `@player_XX` in all three beats of every clip | @reference must appear in both beats to lock identity across natural cuts | Multi-Shot Character Consistency research (see [Seedance 2.0](/wiki/seedance-2)) |
| Cause → effect → secondary effect chains (e.g., "shoulder check → slam into wall → rock fracturing, dust exploding") | Causal chain physics improves temporal coherence | PhyGenBench, VLIPP papers |
| Each prompt line covers one verifiable element: subject, action, physics, secondary motion, camera, lighting | Element-level decomposition — 15% VBench gain in PRIS study | PRIS paper |
| Explicit spatial positions ("on opposite thirds," "in the foreground shadow," "overhead," "below") | Spatial fidelity anchors prevent ambiguous placement | RAPO++ paper |
| Secondary motion in every beat (dust swirling, jackets whipping, debris scattering, water splashing) | Secondary motion sells realism — always include it | [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide) |
| Escalation arc across acts: First Contact → Shifting Alliances → The Convergence | Training-data density match — match Seedance's precision caption training with rising intensity | Seedance 1.0 paper |
| `@video_style` chaining (cold open anchors clips 1-5, best clip anchors 6-20) | Iterative revision + style anchoring for cross-clip visual consistency | PRIS, VISTA papers |
| 7-8 assets per clip (2 characters + scene + video_style + 2-3 sounds + optional secondary scene), leveraging multi-modal input | Seedance 2.0 supports up to 15 assets per generation — layering multiple audio refs creates richer soundscapes | [Seedance.tv Specs](https://www.seedance.tv) |
| StarCraft environmental reactions to player physics (pylon flicker, creep pulse, Medivac sway, psi-blade scar flare, Protoss conduit sync) | Causal chain physics — cause → effect → environmental secondary effect sells world coherence | PhyGenBench, VLIPP papers |
| Faction-themed combat gear (Terran armor, Zerg chitin, Protoss crystal) over esports jackets — 3 visual families creating instant variety across 25 players | Visual grouping + costume differentiation — @reference system carries faction look automatically | [Redreamality Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/), Character Consistency research |
| Cross-faction energy clash on collisions (Terran amber sparks vs Protoss blue psi-flare, Zerg green bioluminescence reacting to Terran wreckage) — environmental reactions that differentiate cross-faction encounters from same-faction | Causal chain physics + faction visual identity — collision triggers BOTH energy systems, selling the three-faction universe as alive and reactive | PhyGenBench, VLIPP papers, [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide) |
| Three-faction energy cascade at climactic moments (Clip 20 Beat 2 strike, Finale Shot 3 freeze ring) — all three faction energy colors triggered in sequence by a single shockwave | Peak-moment spectacle — the biggest moments earn the biggest visual payoff; sequential (not simultaneous) cascade keeps each color readable within Seedance's rendering | PhyGenBench, VLIPP papers |
| Orbital-scale establishing element (shattered Battlecruiser in Cold Open) — visible through smoke to set sci-fi scale before any character appears | Environmental scale anchoring — the first image defines the universe's scope; a capital ship in low orbit instantly communicates "this is a war, not a skirmish" | [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide) |
| Finale ring compositing — multiple 2-character passes stitched into a single orbit, extreme wide angles use silhouettes instead of @refs | Seedance 2-character limit requires creative compositing; at extreme distance, faction gear color (amber/green/blue) carries identity without face detail | [Redreamality Prompt Engineering Playbook](https://redreamality.com/blog/seedance-2-guide/) |
| Faction ability activations on player bodies (psi-blade extensions, visor deployment, burrowing) — each faction has one signature ability that activates during a peak moment, giving players a "champion reveal" moment | Esports cinematic convention (League Worlds "Awaken" technique) — each character's unique ability fires once in their clip, making them instantly recognizable and memorable | League of Legends Worlds cinematics ("Awaken," "Warriors"), StarCraft unit design |
| No meta-commentary in prompts — all language describes visible, renderable elements (no "the message is clear," "fire against water," "what comes next is harder") | Seedance renders visual descriptions, not narrative intent — meta-language wastes word budget and may confuse the model into generating text overlays or abstract imagery | [Seedance.tv Official Blog](https://www.seedance.tv/blog/seedance-2-0-prompt-guide), [LaoZhang AI Tutorial](https://blog.laozhang.ai/en/posts/seedance-2-how-to-use) |
| Variable beat timing (2-5-8, 8-5-2, 5-8-2) on key clips instead of uniform 5-5-5 — allocates duration to the emotional peak of each clip | Rhythmic variety prevents metronome fatigue; professional trailers use irregular shot lengths to keep the audience off-balance and emphasize climactic moments | League of Legends Worlds cinematics, professional trailer editing conventions |
| Mid-trailer silence interstitial — 15s environment-only shot with no players, no score between Acts 2 and 3 | Audience nervous system reset before final escalation; creates contrast that makes Act 3's opening hit harder by comparison | League of Legends Worlds 2022/2023 cinematics, trailer pacing theory |
| Varied Beat 3 resolutions — feint/retreat, environment intervention, deliberate walk-away instead of mutual stare-off | 10/20 clips ending in "circling and staring" causes fatigue; diverse endings keep each clip's conclusion surprising | Virtual test audience consensus (casual viewer + editor) |
| StarCraft gameplay mechanic activations — Zerg burrow (P21 sinks into creep), Terran visor drop (P18 HUD scan lines), creep spread (P21 ceiling position radiating creep) | Faction abilities reference actual in-game mechanics, rewarding SC fans with recognizable unit behavior while adding visual spectacle for casual viewers | StarCraft unit design, League Worlds "Awaken" champion-reveal technique |
| Faction ring grouping — Terran/Zerg/Protoss clustered in arcs with P25 alone at center, energy chase around the ring in faction order | Visual grouping creates readable color blocks from aerial view; sequential faction activation mirrors the Cold Open's three-shadow foreshadowing, closing the trailer's visual loop | Circular composition theory, three-act color design |
| Per-player faction signature moments — each player's faction gear activates distinctively in their clip (Terran gauntlet flex, Zerg chitin camouflage, Protoss conduit hum, etc.) rather than generic fighting | Individualized faction reactions make each player visually memorable in under 15 seconds; the gear isn't costume — it's characterization | Design doc section 4, League Worlds "Awaken" champion-reveal technique |
| Per-act audio mood board with BPM ranges, sonic character, and reference tones — score design drives Seedance @sound selection AND final composition | Audio is not post-production afterthought — Seedance takes audio as input, so sonic design must precede generation; reference tones give the composer emotional targets, not just "make it epic" | Design doc section 3, professional trailer scoring methodology |
| Hybrid score composition — Seedance native audio (60% reality layer) + composed score (emotional arc) + sparse StarCraft SFX (fan service) + intentional silence (dynamics) | Four-layer audio architecture prevents any single source from carrying the full trailer while ensuring physics feel grounded (Seedance), emotion lands (score), fans are rewarded (SFX), and dynamics breathe (silence) | Design doc section 3, professional audio mixing |
| Optional micro-transitions between acts — 5s environment-only inserts showing the warzone shifting, no players, decided in post based on pacing feel | Cheap to produce (single Seedance generation, no @player refs), provide breathing room between intensity peaks if needed, omit if hard cuts carry | Design doc section 6, League Worlds cinematic pacing |
| Camera/subject sentence separation — camera instructions written as standalone sentences, never entangled with subject action via "as," "capturing," "revealing," or "showing" conjunctions | Apiyi calls mixing camera and subject motion "the most overlooked mistake" — separate sentences let Seedance process camera and action as independent instructions | [Apiyi Official Prompt Guide](https://help.apiyi.com/en/seedance-2-0-prompt-guide-video-generation-camera-style-tips-en.html), constraint validation audit Pass 29 |

#### Fundamental Videography Principles

These traditional cinematography rules apply to AI video just as they do to live-action film. AI models trained on cinematic footage respond to these principles when described explicitly in prompts.

| Principle | Category | How Applied in This Storyboard | Example Clips |
|---|---|---|---|
| **Rule of Thirds** | Composition | Two players placed on opposite thirds for tension; centered framing reserved for the ring finale | Clip 1 Beat 1 (players on opposite thirds), Clip 7 Beat 3 (faces in profile, off-center), Clip 20 Beat 2 (P25 centered in ring) |
| **Depth & Layers** | Composition | Every beat separates foreground, midground, and background — dual-player clips use depth to show spatial relationship | Clip 4 Beat 1 (P8 foreground, P7 two stories up), Clip 14 Beat 1 (P9 foreground shadow, P2 on catwalk above), Clip 19 Beat 3 (ring figures → clearing → burning ruins) |
| **Leading Lines** | Composition | Environmental lines draw the eye between the two interacting players — corridors, canyon walls, catwalks, streets | Clip 3 Beat 1 (corridor framing P5 at the end), Clip 2 Beat 1 (canyon walls converge toward pursuit), Clip 19 Beat 1 (street corridor to clearing) |
| **Symmetry & Balance** | Composition | Symmetric framing for standoffs and power parity; asymmetric for chases and ambushes | Clip 7 Beat 3 (symmetric profile close-up), Clip 12 Beat 1 (asymmetric — one charging, one still), Finale Shot 3 (perfect circular symmetry) |
| **Frame within Frame** | Composition | Environmental elements create sub-frames isolating players within the interaction | Clip 7 Beat 1 (passage gap frames P14), Clip 16 Beat 1 (sealed chamber frames both), Clip 11 Beat 2 (light pool frames P21's reveal) |
| **Headroom & Lead Room** | Composition | Lead room in chase direction; tight headroom for confrontation intensity | Clip 2 Beat 1 (generous lead room ahead of P3's sprint), Clip 7 Beat 3 (minimal headroom — faces filling frame), Clip 20 Beat 1 (lead room for P24's charge) |
| **Backlighting / Rim Light** | Lighting | Backlight separates players from environment and creates dramatic silhouettes during confrontations | Clip 6 Beat 1 (P12 fire-backlit approach), Clip 13 Beat 1 (passage silhouette), Clip 17 Beat 1 (sunset rim on ridge) |
| **Contrast Lighting for Mood** | Lighting | Dual-color split lighting on faces during standoffs; single harsh light for chase intensity | Clip 4 Beat 3 (moonlight/firelight face split), Clip 5 Beat 2 (red-orange pool against darkness), Clip 14 Beat 3 (moonlight above, firelight below) |
| **180-Degree Rule** | Continuity | Camera maintains consistent screen direction within each duo interaction across all 3 beats — spatial relationship between players stays readable | Clip 1 (players left/right maintained), Clip 7 (P13 approaches from left across all beats), Clip 10 (P18 enters right, maintains position) |
| **Shot Size Escalation** | Shot Variety | Each clip's 3 beats progress from wider establishing shot → medium interaction → climax framing. Acts progress from tight/tense → medium/dynamic → wide/epic | Act 1 avg: MS/MCU (intimate tension), Act 2: mixed MS-WS (dynamic reversals), Act 3: WS/EWS (convergence scale) |
| **Camera Movement Variety** | Shot Variety | Mix of static holds, push-ins, lateral tracks, orbits, cranes, handheld, and dollies across 20 clips | Static (30%), orbit (15%), track (15%), dolly (12%), push-in (10%), handheld (8%), crane (5%), tilt (5%) |

### Post-Production

1. Generate all 25 clips (19 player interaction [Clip 18 = 2 generations intercut in post] + 1 interstitial + 2 cold open + 2 finale)
2. Color grade — unified desaturated warm amber / cold blue palette, no faction differentiation
3. Add lower-third overlays (After Effects / DaVinci Resolve)
4. Build rapid montage — best interaction beats, speed ramp
5. Score — tension percussion building through acts → full orchestral at convergence → silence at the ring → single impact at freeze
6. Title card — ember/dust particle assembly in After Effects

### Asset Storage

```
public/images/storyboard/
  characters/     — 25 character turnaround sheets
  scenes/         — 6 scene reference images
```

Naming: `{number}-{short-name}.png` (e.g., `01.png`, `warzone-ruins.png`).

**Total reference assets: 31** (25 characters + 6 scenes).

---

## Virtual Test Audience Findings

Three AI personas independently reviewed the full storyboard: a casual viewer, a hardcore StarCraft fan, and a professional trailer editor. Full simulation methodology documented in [Video Quality Evaluation](/wiki/video-quality-evaluation).

### Implemented Fixes (Pass 25)

| Fix | Source | What Changed |
|---|---|---|
| Protoss psi-blade extension | SC fan (unanimous #1 request) | Clip 7 Beat 3: conduits flickering → twin psi-blades extending from both players' wrists |
| "Nuclear launch detected" | SC fan (highest-ROI fan service) | Title Card: Terran adjutant voice line timed to bass impact on title reveal |
| P25 identified as hand-raiser | SC fan + editor | Finale Ring Beat 3: anonymous figure → @player_25 with close-up on Terran gauntlet |
| Face flash-frame | Editor | New Shot 2.5: 1-second ECU of a player's face looking into camera before the aerial freeze |
| Montage curated to 18 cuts | Editor + casual viewer | Removed 3 context-dependent cuts (support beam, trap trigger, mid-air bat); replaced with instantly readable images; fixed duplicate (cut 18 was same beat as cut 10) |
| 5 music sync points | Editor | New Production Notes section: 5 frame-accurate sync events scripted into the score |

### Implemented Structural Changes (Pass 26)

All 6 pending structural changes from the virtual test audience have been implemented:

| # | Change | What Was Done |
|---|---|---|
| 1 | Mid-trailer silence interstitial | 15s environment-only shot added between Acts 2 and 3 (3:35–3:50). No players, no score — just wind, embers, and the path to the clearing. Runtime stays at 5:55 because Clips 18+19 were merged |
| 2 | Merge Clips 18+19 | Both walking beats combined into a single Clip 18 with two Seedance generations (P12 & P13 + P17 & P20) intercut in post. All 4 players retained. Clip 20 renumbered to Clip 19 |
| 3 | Variable beat timing | Clip 4: 2-5-8s (brief scan → freefall → extended crumbling rooftop). Clip 11: 8-5-2s (extended hunt → reveal → 2s ceiling hard cut). Clip 17: 5-8-2s (arrival → extended observation → 2s face hard cut) |
| 4 | Reduce stare-off endings | 5 clips given new Beat 3 resolutions: Clip 5 (feint + escape), Clip 6 (burning beam separates), Clip 8 (P16 walks away first), Clip 12 (P22 feints, reads futility, retreats), Clip 14 (catwalk buckles, vertical split) |
| 5 | StarCraft gameplay mechanics | Zerg burrow: P21 sinks into tunnel creep (Clip 11 Beat 1). Terran visor drop: P18 pulls HUD visor down with scan lines (Clip 10 Beat 1). Creep spread: P21's ceiling position radiates creep (Clip 11 Beat 3) |
| 6 | Faction ring grouping | Finale ring clusters players into three faction arcs (Terran north, Zerg southeast, Protoss southwest). P25 alone at center. Gauntlet raise triggers amber → green-orange → blue-white energy chasing around the ring |

### Consensus "Untouchable" Moments

All three personas independently identified these as the trailer's strongest beats. Do not change them:

1. **Clip 4 [5-10s]** — P7 silent freefall toward P8's rooftop
2. **Clip 10 [5-10s]** — P19 forces themselves to stand (the emotional peak)
3. **Clip 11 [10-15s]** — P21 ceiling reveal (best single shot)
4. **Clip 20 [5-10s]** — P25 catches blow, three-faction energy cascade (the climax)
5. **Finale Shot 3** — Dust ring with three-color faction glow (the money shot)
