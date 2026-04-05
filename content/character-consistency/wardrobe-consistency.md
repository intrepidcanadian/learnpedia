---
title: "Wardrobe Consistency"
category: "Character Consistency"
summary: "Keeping clothing consistent across AI video clips — distinctive outfits, fabric description, and color anchoring."
related:
  - character-consistency-fundamentals
  - character-reference-sheets
  - prompt-engineering-fundamentals
---

Clothing is your strongest consistency anchor after the face. Distinctive, well-described wardrobe makes it much easier for both AI and audience to track a character.

## Design Principles

- **Make it distinctive** — A red trench coat is easier to maintain than a "casual outfit"
- **Limit complexity** — Fewer details = fewer things to go wrong
- **Use color contrast** — Character should visually pop from their environment
- **Avoid patterns** — Stripes, plaids, and complex patterns morph between generations

## Description Template

```
"wearing [GARMENT] in [COLOR/MATERIAL], [FIT DESCRIPTION],
with [DISTINCTIVE DETAIL], [ACCESSORY if any]"
```

**Example:** "wearing a fitted charcoal wool overcoat, unbuttoned, with a burgundy knit scarf tucked into the collar, dark denim jeans, brown leather boots"

## Fabric Language That Works

AI models respond well to specific fabric descriptions: `wool, leather, silk, denim, linen, velvet, cotton, suede`. These carry texture information the model can render.

## Common Pitfalls

- Logos and text on clothing — will mutate every generation
- Jewelry with fine detail — necklaces and rings tend to disappear or multiply
- Hats — often change shape or disappear; use bold, simple styles if needed

Build wardrobe into your [Character Reference Sheet](/wiki/character-reference-sheets) and include it in every prompt per [Character Consistency Fundamentals](/wiki/character-consistency-fundamentals).
