---
title: "Depth of Field"
category: "Camera & Composition"
summary: "Controlling focus depth in AI video — shallow bokeh, deep focus, rack focus techniques."
related:
  - lens-choices
  - composition-rules
  - camera-angles
  - lighting-techniques
---

Depth of field (DoF) controls what's sharp and what's soft. It's your primary tool for directing the viewer's eye.

> **AI note:** F-stop values like f/1.4 or f/8 are prompt hints — they nudge the model toward shallow or deep focus looks. AI models don't simulate real aperture physics, so treat these as style cues rather than literal camera settings. The descriptive language around them ("creamy bokeh," "everything in sharp focus") is what drives the result.

## Shallow Depth of Field

Only a thin plane is in focus. Background melts into creamy bokeh. Use for: portraits, isolating subjects, romantic/dreamy feel.

Prompt: `"shallow depth of field, f/1.4, creamy bokeh background"`

**Foreground vs. background blur:** Shallow DoF affects both sides of the focal plane. Background blur is more commonly discussed, but foreground blur (shooting through out-of-focus elements like foliage or shoulders) creates intimacy and layering. Prompt: `"shallow depth of field, soft foreground blur, subject in sharp focus, creamy bokeh background"`

## Deep Focus

Everything from foreground to background is sharp. Use for: establishing shots, ensemble scenes, Gregg Toland-style deep focus (as in *Citizen Kane*). Prompt: `"deep focus, everything in sharp focus, f/8"`

Deep focus works best with wide-angle lenses and bright lighting — both naturally increase depth of field. In AI prompts, combine `"deep focus"` with wide lens cues like `"24mm"` for the most reliable results.

## Rack Focus

Focus shifts from one subject to another during the shot. Powerful for revealing information or shifting attention. Prompt: `"rack focus from [foreground element] to [background element]"`

Control rack focus speed for different dramatic effects:

- `"slow rack focus"` (1–2 seconds) — contemplative transitions, emotional weight
- `"sharp rack focus"` or `"snap focus"` (under 0.5 seconds) — sudden reveals, surprise
- `"gentle focus pull"` (2–3 seconds) — gradual attention shift, documentary feel

A rack focus combined with a dolly movement amplifies the depth effect. Note that rack focus requires sufficient shot duration — allow at least 4–5 seconds for the focus shift to read clearly. Shorter clips may not have enough time for the transition to register.

**AI reliability:** Rack focus is reliable for simple two-plane shifts (foreground ↔ background) in current-gen models (Seedance 2.0, Runway Gen-4, Kling 2.0+). Multi-plane shifts or very rapid snaps are less consistent. If rack focus fails, try specifying the start and end states more explicitly: `"begins focused on the glass in foreground, slowly racks focus to the woman's face in background"`.

## Depth of Field and Camera Movement

DoF behaves differently when the camera moves — and AI models handle this with varying success:

- **Dolly in + shallow DoF** — As the camera moves closer, the subject stays sharp but background blur intensifies. Effective for building tension. Works well in most models.
- **Orbit + shallow DoF** — Background blur shifts as the camera circles. Can produce beautiful parallax bokeh. Medium reliability — some models lose focus consistency during orbits.
- **Tracking + deep focus** — Following a subject with everything sharp. Most reliable combination for movement + DoF.
- **Crane + rack focus** — Combining vertical movement with focus shift. Complex — budget extra generations.

## Bokeh Quality

The character of out-of-focus highlights. Different bokeh styles evoke different lens personalities:

- `"smooth circular bokeh"` — clean, modern lenses (Sigma Art, Sony GM)
- `"oval bokeh"` — anamorphic character, cinematic widescreen feel
- `"busy bokeh"` — vintage lens character, more textured backgrounds
- `"bokeh balls from city lights"` — night scene staple, works especially well with neon and other high-contrast point light sources. Note: bokeh visibility depends on luminance contrast — bright point sources against dark backgrounds show the strongest bokeh character
- `"swirly bokeh"` — Helios/Petzval style, dreamy and distinctive

**Specular vs. diffuse highlights:** Bokeh is most visible on bright point sources (lights, reflections, sunlit edges). Diffuse backgrounds (overcast sky, matte walls) show less bokeh character. Choose backgrounds with mixed brightness for the most interesting bokeh rendering.

## Soft Focus vs. Out of Focus

These are related but distinct looks:

- **Shallow DoF** — Sharp subject, blurred background/foreground. Selective focus.
- **Soft focus / bloom** — The entire image has a gentle glow or haze, including the in-focus subject. Use for dreamy, romantic, or ethereal looks. Prompt: `"soft focus, gentle bloom, diffused highlights"`
- **Cinebloom effect** — Highlights bleed into shadows, creating a halation glow. Popular for music videos and romance. Prompt: `"cinebloom filter, halation on highlights"`

## DoF Cheat Sheet

| Goal | DoF Setting | Prompt Language |
|---|---|---|
| Isolate subject | Shallow (f/1.4–2.8) | `"shallow depth of field, creamy bokeh"` |
| Show environment | Deep (f/8–16) | `"deep focus, everything sharp"` |
| Reveal information | Rack focus | `"rack focus from X to Y"` |
| Dreamy / romantic | Shallow + bloom | `"soft shallow focus, gentle bloom"` |
| Documentary realism | Medium (f/4–5.6) | `"natural depth of field"` |
| Night cityscape | Shallow with lights | `"shallow DoF, bokeh balls from city lights"` |
| Vintage character | Shallow + busy bokeh | `"shallow focus, busy vintage bokeh, swirly highlights"` |

Depth of field interacts with [Lens Choice](/wiki/lens-choices) (longer lenses = shallower DoF) and [Lighting](/wiki/lighting-techniques) (brighter scenes allow wider apertures). Combine with [Composition Rules](/wiki/composition-rules) for complete visual control.
