---
title: "Wardrobe Consistency"
category: "Character Consistency"
summary: "Keeping clothing consistent across AI video clips — distinctive outfits, fabric description, and color anchoring."
related:
  - character-consistency-fundamentals
  - character-reference-sheets
  - face-consistency-methods
  - prompt-engineering-fundamentals
---

Clothing is your strongest consistency anchor after the face. Distinctive, well-described wardrobe makes it much easier for both AI and audience to track a character.

## Design Principles

- **Make it distinctive** — A red trench coat is easier to maintain than a "casual outfit"
- **Limit complexity** — Fewer details = fewer things to go wrong
- **Use color contrast** — Character should visually pop from their environment
- **Avoid complex patterns** — Plaids, florals, and intricate patterns morph between generations. Simple geometric details (a single horizontal stripe, a solid-color knit texture) are usually fine

## Description Template

```
"wearing [GARMENT] in [COLOR/MATERIAL], [FIT DESCRIPTION],
with [DISTINCTIVE DETAIL], [ACCESSORY if any]"
```

**Example:** "wearing a fitted charcoal wool overcoat, unbuttoned, with a burgundy knit scarf tucked into the collar, dark denim jeans, brown leather boots"

## Fabric Language That Works

AI models respond well to specific fabric descriptions: `wool, leather, silk, denim, linen, velvet, cotton, suede`. These carry texture information the model can render.

## Color Strategy

Color is the fastest way audiences identify a character — even faster than face:

- **Assign a signature color** to each major character. If the protagonist wears deep red and the antagonist wears black, the audience tracks them even in wide shots with less facial detail.
- **Avoid similar palettes** between characters who share scenes — if two characters both wear neutral grays, the model (and the audience) will struggle to distinguish them.
- **Consider the environment** — A white outfit in a snow scene disappears. A dark outfit in a dark interior disappears. Contrast your character against their background.

## Wardrobe Colors and Color Grading

Your post-production color grade will shift wardrobe colors. Plan for this during design:

- **Teal/orange grade** pushes cool clothing toward teal and warm clothing toward orange — a neutral gray jacket may read as blue-green
- **Desaturated grades** flatten color differences between wardrobe items — two characters in similar-saturation outfits may become hard to tell apart
- **Warm grades** (golden hour, tungsten) make white clothing appear cream/yellow and cool blues appear muted
- **Split-tone grades** affect shadows and highlights differently — a dark coat picks up the shadow color, while a white shirt picks up the highlight color

**Best practice:** Choose wardrobe colors that remain distinctive under your planned grade. Test by generating a single character close-up with your target color grade before committing.

## Wardrobe Across Lighting Conditions

The same outfit looks different under different lighting. A navy coat reads as almost black in dim interior scenes and as clearly blue in daylight. When writing prompts:

- Use specific color names: `"cobalt blue"` rather than `"blue"` — precision helps the model reproduce the same shade
- Mention fabric reflectivity: `"matte charcoal wool"` vs `"glossy black leather"` respond very differently to the same light
- Test your wardrobe description under your scene's lighting before committing to a full shoot

## Common Pitfalls

- **Logos and text on clothing** — will mutate every generation
- **Jewelry with fine detail** — necklaces and rings tend to disappear or multiply
- **Hats** — often change shape or disappear; use bold, simple styles if needed
- **Layered outfits** — a character with an unbuttoned jacket over a shirt over a vest is three opportunities for the model to change details. Keep layers minimal.
- **Sleeves and cuffs** — rolled sleeves may unroll, cuffs may appear/disappear. If sleeve position matters, specify it
- **Footwear** — shoes are often cropped out of frame, making them easy to forget. When full-body shots reveal footwear, inconsistency is jarring. Include shoe description in your character bible: `"worn brown leather boots"` or `"white sneakers"`. If footwear isn't visible, don't mention it — unnecessary details waste prompt space

## Scene-Based Wardrobe Changes

If your story requires a wardrobe change (different scene, different day), make the change **dramatic enough to be intentional**, not subtle enough to look like an error. Going from a suit to casual clothes reads as a time jump. Going from a dark gray shirt to a medium gray shirt reads as a consistency failure.

Build wardrobe into your [Character Reference Sheet](/wiki/character-reference-sheets) and include it in every prompt per [Character Consistency Fundamentals](/wiki/character-consistency-fundamentals). See [Face Consistency Methods](/wiki/face-consistency-methods) for how face and wardrobe work together to anchor identity.
