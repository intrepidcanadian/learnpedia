export interface Article {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  content: string; // HTML content with wiki-style links
  relatedSlugs: string[];
}

export type Category =
  | "Prompting"
  | "Camera & Composition"
  | "Lighting"
  | "Character Consistency"
  | "Motion & Animation"
  | "Post-Production"
  | "Tools & Platforms"
  | "Workflows";

export const CATEGORY_COLORS: Record<Category, string> = {
  Prompting: "bg-blue-100 text-blue-800",
  "Camera & Composition": "bg-purple-100 text-purple-800",
  Lighting: "bg-yellow-100 text-yellow-800",
  "Character Consistency": "bg-green-100 text-green-800",
  "Motion & Animation": "bg-red-100 text-red-800",
  "Post-Production": "bg-pink-100 text-pink-800",
  "Tools & Platforms": "bg-indigo-100 text-indigo-800",
  Workflows: "bg-orange-100 text-orange-800",
};

export const articles: Article[] = [
  // ─── PROMPTING ────────────────────────────────────────
  {
    slug: "prompt-engineering-fundamentals",
    title: "Prompt Engineering Fundamentals",
    category: "Prompting",
    summary:
      "Core principles for writing effective AI video prompts — structure, specificity, and iteration.",
    relatedSlugs: [
      "negative-prompts",
      "prompt-templates",
      "scene-description-language",
      "style-transfer-prompts",
    ],
    content: `
<p>Great AI video starts with great prompts. Unlike image generation, video prompts must encode <strong>temporal information</strong> — what happens, in what order, and how things move through the frame.</p>

<h2>The Anatomy of a Video Prompt</h2>
<p>A well-structured video prompt has five layers:</p>
<ol>
  <li><strong>Subject</strong> — Who or what is in the frame</li>
  <li><strong>Action</strong> — What is happening (verb-first phrasing works best)</li>
  <li><strong>Setting</strong> — Environment, time of day, weather</li>
  <li><strong>Style</strong> — Visual aesthetic, film stock, color grade (see <a href="/wiki/style-transfer-prompts">Style Transfer Prompts</a>)</li>
  <li><strong>Camera</strong> — Angle, movement, lens choice (see <a href="/wiki/camera-angles">Camera Angles</a>)</li>
</ol>

<h2>Specificity Spectrum</h2>
<p>Too vague and the model hallucinates; too specific and it fights the constraint. The sweet spot:</p>
<pre><code>❌ "A person walking"
✅ "A woman in a red trench coat walks along a rain-slicked Tokyo side street at dusk, neon reflections on wet pavement, shot on 35mm film, slight handheld movement"</code></pre>
<p>Notice how the good prompt covers subject, action, setting, style, and camera in one sentence.</p>

<h2>Temporal Phrasing</h2>
<p>Use time-signal words to guide the model through the clip:</p>
<ul>
  <li><strong>"begins with… then…"</strong> — sequential actions</li>
  <li><strong>"slowly"</strong> / <strong>"suddenly"</strong> — pacing cues</li>
  <li><strong>"camera pulls back to reveal…"</strong> — motivated camera movement</li>
  <li><strong>"transitions from… to…"</strong> — scene or mood shifts</li>
</ul>

<h2>Iteration Strategy</h2>
<p>Treat prompting like sculpture: start with a rough block, then refine. Generate 3–5 variants, pick the best direction, and evolve that prompt. Keep a <a href="/wiki/prompt-templates">Prompt Template</a> library so you don't start from zero each time.</p>

<h2>Common Pitfalls</h2>
<ul>
  <li>Listing contradictory styles ("photorealistic anime watercolor")</li>
  <li>Ignoring <a href="/wiki/negative-prompts">Negative Prompts</a> — telling the model what to avoid is just as important</li>
  <li>Overloading a single clip with too many actions</li>
  <li>Forgetting <a href="/wiki/lighting-techniques">lighting</a> — the #1 factor for mood</li>
</ul>
`,
  },
  {
    slug: "negative-prompts",
    title: "Negative Prompts",
    category: "Prompting",
    summary:
      "How to use negative prompts to steer AI video away from unwanted artifacts, styles, and behaviors.",
    relatedSlugs: [
      "prompt-engineering-fundamentals",
      "common-artifacts",
      "prompt-templates",
    ],
    content: `
<p>Negative prompts tell the model what to <strong>avoid</strong>. They're your quality control layer — often the difference between "pretty good" and "professional."</p>

<h2>How Negative Prompts Work</h2>
<p>Most diffusion-based video models support a negative prompt field that reduces the influence of specified concepts during generation. Think of it as subtracting from the latent space.</p>

<h2>Essential Negative Prompt Vocabulary</h2>
<table>
  <thead><tr><th>Problem</th><th>Negative Prompt Terms</th></tr></thead>
  <tbody>
    <tr><td>Blurry output</td><td><code>blurry, out of focus, soft, motion blur</code></td></tr>
    <tr><td>Distorted faces</td><td><code>deformed face, asymmetric eyes, extra fingers, uncanny valley</code></td></tr>
    <tr><td>Bad lighting</td><td><code>overexposed, underexposed, flat lighting, harsh shadows</code></td></tr>
    <tr><td>Low quality</td><td><code>low resolution, pixelated, jpeg artifacts, watermark, text overlay</code></td></tr>
    <tr><td>Unwanted style</td><td><code>cartoon, anime, sketch, painting</code> (if going for photorealism)</td></tr>
    <tr><td>Temporal issues</td><td><code>flickering, jittery, morphing, frame skipping</code></td></tr>
  </tbody>
</table>

<h2>Platform-Specific Tips</h2>
<ul>
  <li><strong>Runway Gen-3/4</strong> — Negative prompts via the "Exclude" field; keep them short (under 30 words)</li>
  <li><strong>Kling</strong> — Supports negative prompts in advanced mode; effective for artifact removal</li>
  <li><strong>Sora</strong> — Uses system-level quality filters; negative prompts are less critical but still help with style steering</li>
</ul>

<p>Pair negative prompts with strong positive prompts from your <a href="/wiki/prompt-engineering-fundamentals">Prompt Engineering Fundamentals</a> for best results. See also: <a href="/wiki/common-artifacts">Common Artifacts</a> for a visual guide to what you're fighting.</p>
`,
  },
  {
    slug: "prompt-templates",
    title: "Prompt Templates",
    category: "Prompting",
    summary:
      "Ready-to-use prompt templates for common AI video scenarios — interviews, product shots, cinematic sequences.",
    relatedSlugs: [
      "prompt-engineering-fundamentals",
      "scene-description-language",
      "camera-movements",
      "lighting-techniques",
    ],
    content: `
<p>Templates give you a repeatable starting point. Fill in the blanks, adjust to taste, and iterate from a proven structure.</p>

<h2>Template: Cinematic Establishing Shot</h2>
<pre><code>[WIDE/AERIAL] shot of [LOCATION] at [TIME OF DAY],
[WEATHER/ATMOSPHERE], [COLOR PALETTE] color grade,
camera [MOVEMENT] slowly, shot on [LENS]mm anamorphic,
[FILM STOCK/DIGITAL LOOK], cinematic aspect ratio</code></pre>
<p><strong>Example:</strong> "Wide aerial shot of a coastal cliffside village at golden hour, misty atmosphere, warm amber and teal color grade, camera drifts slowly forward, shot on 40mm anamorphic, Kodak Vision3 500T film stock, 2.39:1 aspect ratio"</p>

<h2>Template: Character Introduction</h2>
<pre><code>[SHOT SIZE] of [CHARACTER DESCRIPTION],
[CHARACTER ACTION], in [SETTING],
[LIGHTING SETUP] lighting,
camera [MOVEMENT], [STYLE/MOOD],
[TECHNICAL SPECS]</code></pre>
<p><strong>Example:</strong> "Medium close-up of a weathered fisherman with a salt-and-pepper beard, mending nets with calloused hands, in a dimly lit wooden boathouse, single overhead practical light with warm tungsten glow, camera holds steady with subtle breathing movement, documentary-style, shallow depth of field f/1.4"</p>

<h2>Template: Product Showcase</h2>
<pre><code>[SHOT TYPE] of [PRODUCT] on [SURFACE/BACKGROUND],
[LIGHTING STYLE], [CAMERA MOVEMENT] around the product,
[REFLECTIONS/HIGHLIGHTS], [COLOR/MOOD],
studio quality, [FRAME RATE]</code></pre>

<h2>Template: Action Sequence</h2>
<pre><code>[CHARACTER] [ACTION VERB]s through [ENVIRONMENT],
camera [TRACKING STYLE], [SPEED — slow-mo/real-time],
[PARTICLES/EFFECTS], [LIGHTING],
dynamic composition, [STYLE REFERENCE]</code></pre>

<p>Build your own library over time. Every successful generation is a template waiting to happen. See <a href="/wiki/scene-description-language">Scene Description Language</a> for the vocabulary that makes templates sing, and <a href="/wiki/camera-movements">Camera Movements</a> for movement options.</p>
`,
  },
  {
    slug: "scene-description-language",
    title: "Scene Description Language",
    category: "Prompting",
    summary:
      "The vocabulary and grammar of describing scenes for AI video — borrowed from screenwriting and cinematography.",
    relatedSlugs: [
      "prompt-engineering-fundamentals",
      "prompt-templates",
      "camera-angles",
      "lighting-techniques",
    ],
    content: `
<p>AI video models respond to the language of filmmaking. Learning this vocabulary is like learning to speak the model's native tongue.</p>

<h2>Shot Sizes</h2>
<ul>
  <li><strong>ECU (Extreme Close-Up)</strong> — Eyes only, texture of skin. Emotion, intensity.</li>
  <li><strong>CU (Close-Up)</strong> — Face fills frame. Intimacy, reaction.</li>
  <li><strong>MCU (Medium Close-Up)</strong> — Head and shoulders. Dialogue, connection.</li>
  <li><strong>MS (Medium Shot)</strong> — Waist up. Body language visible.</li>
  <li><strong>MLS (Medium Long Shot)</strong> — Knees up. Character in context.</li>
  <li><strong>LS (Long Shot)</strong> — Full body with environment. Establishing character.</li>
  <li><strong>ELS (Extreme Long Shot)</strong> — Character is small in vast landscape. Scale, isolation.</li>
</ul>

<h2>Atmosphere Words That Models Understand</h2>
<table>
  <thead><tr><th>Mood</th><th>Effective Descriptors</th></tr></thead>
  <tbody>
    <tr><td>Dreamy</td><td>hazy, ethereal, soft focus, gauzy, diffused light</td></tr>
    <tr><td>Gritty</td><td>handheld, high contrast, desaturated, grain, raw</td></tr>
    <tr><td>Epic</td><td>sweeping, dramatic sky, volumetric light, orchestral mood</td></tr>
    <tr><td>Intimate</td><td>shallow depth of field, warm tones, close framing, quiet</td></tr>
    <tr><td>Eerie</td><td>fog, underlit, long shadows, muted palette, stillness</td></tr>
  </tbody>
</table>

<h2>Time and Transition Language</h2>
<p>Verbs and adverbs that control pacing:</p>
<ul>
  <li><strong>Slow:</strong> drifts, floats, lingers, crawls, settles</li>
  <li><strong>Fast:</strong> whips, snaps, rushes, bursts, cuts to</li>
  <li><strong>Transitional:</strong> dissolves into, fades to, morphs into, reveals</li>
</ul>

<p>Combine these with <a href="/wiki/camera-angles">Camera Angles</a> and <a href="/wiki/lighting-techniques">Lighting Techniques</a> for complete scene control. See <a href="/wiki/prompt-templates">Prompt Templates</a> for how to assemble these elements.</p>
`,
  },
  {
    slug: "style-transfer-prompts",
    title: "Style Transfer Prompts",
    category: "Prompting",
    summary:
      "Techniques for achieving specific visual styles — film stocks, directors' looks, artistic movements.",
    relatedSlugs: [
      "prompt-engineering-fundamentals",
      "color-grading-prompts",
      "lighting-techniques",
    ],
    content: `
<p>Style transfer in AI video means guiding the model toward a specific visual aesthetic. This goes beyond "make it look cinematic" — it's about encoding a precise visual identity.</p>

<h2>Film Stock References</h2>
<p>AI models trained on film data respond well to specific stock names:</p>
<ul>
  <li><strong>Kodak Vision3 500T</strong> — Warm, rich, slightly grainy. The "movie" look.</li>
  <li><strong>Kodak Portra 400</strong> — Soft pastels, beautiful skin tones.</li>
  <li><strong>Fujifilm Pro 400H</strong> — Cool greens and blues, airy highlights.</li>
  <li><strong>CineStill 800T</strong> — Halation around highlights, neon-friendly, night-shoot aesthetic.</li>
  <li><strong>Kodak Tri-X 400</strong> — Classic high-contrast black and white.</li>
</ul>

<h2>Director-Style References</h2>
<p>Referencing a director's visual style can be powerful (use ethically for personal work):</p>
<ul>
  <li><strong>"in the style of Wes Anderson"</strong> — Symmetrical framing, pastel palette, flat perspective</li>
  <li><strong>"Denis Villeneuve cinematography"</strong> — Desaturated, vast landscapes, silhouettes</li>
  <li><strong>"Wong Kar-wai aesthetic"</strong> — Neon-drenched, step-printed motion, saturated reds and greens</li>
  <li><strong>"Roger Deakins lighting"</strong> — Motivated naturalistic light, painterly composition</li>
</ul>

<h2>Combining Styles</h2>
<pre><code>"Shot on 16mm Kodak film, Terrence Malick golden hour aesthetic,
handheld with natural light, lens flares, grain"</code></pre>
<p>Layer 2–3 style references max. More than that and models produce incoherent results. See <a href="/wiki/color-grading-prompts">Color Grading Prompts</a> for the post-production side of style.</p>
`,
  },
  {
    slug: "color-grading-prompts",
    title: "Color Grading in Prompts",
    category: "Prompting",
    summary:
      "How to control color palette, temperature, and grade through prompt language.",
    relatedSlugs: [
      "style-transfer-prompts",
      "lighting-techniques",
      "prompt-engineering-fundamentals",
    ],
    content: `
<p>Color grading is mood. The same scene shot in warm amber vs. cold steel blue tells a completely different story. AI models are highly responsive to color language.</p>

<h2>Color Temperature</h2>
<ul>
  <li><strong>Warm:</strong> golden, amber, honey-toned, sunset warmth, tungsten</li>
  <li><strong>Neutral:</strong> balanced, natural color, daylight-balanced</li>
  <li><strong>Cool:</strong> steel blue, moonlit, cyan shadows, overcast cool tones</li>
</ul>

<h2>Popular Color Grade Styles</h2>
<table>
  <thead><tr><th>Grade</th><th>Prompt Language</th><th>Feel</th></tr></thead>
  <tbody>
    <tr><td>Teal & Orange</td><td>"teal shadows and warm orange highlights, Hollywood color grade"</td><td>Blockbuster cinema</td></tr>
    <tr><td>Desaturated</td><td>"muted color palette, low saturation, washed-out tones"</td><td>Gritty, documentary</td></tr>
    <tr><td>Cross-processed</td><td>"cross-processed film look, shifted greens in shadows, warm highlights"</td><td>Retro, experimental</td></tr>
    <tr><td>Monochromatic</td><td>"black and white with deep blacks and crisp whites, high contrast"</td><td>Timeless, dramatic</td></tr>
    <tr><td>Pastel</td><td>"soft pastel color palette, low contrast, airy highlights"</td><td>Dreamy, whimsical</td></tr>
  </tbody>
</table>

<h2>Pro Tip: Contrast Control</h2>
<p>Pair color with contrast language: "high contrast" vs. "lifted blacks" vs. "crushed shadows" changes the entire dynamic range of your output. Combine with <a href="/wiki/style-transfer-prompts">Style Transfer</a> film stocks for maximum control and <a href="/wiki/lighting-techniques">Lighting Techniques</a> for in-camera color.</p>
`,
  },

  // ─── CAMERA & COMPOSITION ─────────────────────────────
  {
    slug: "camera-angles",
    title: "Camera Angles",
    category: "Camera & Composition",
    summary:
      "How camera angle affects storytelling — eye level, low angle, high angle, Dutch tilt, bird's eye, and more.",
    relatedSlugs: [
      "camera-movements",
      "lens-choices",
      "scene-description-language",
      "composition-rules",
    ],
    content: `
<p>Camera angle is subconscious storytelling. Before a single word is spoken, the angle tells the audience how to feel about what they're seeing.</p>

<h2>Core Angles</h2>

<h3>Eye Level</h3>
<p>Camera at subject's eye height. Neutral, objective, documentary-feel. Default for dialogue. In your prompt: <code>"eye-level shot"</code> or <code>"camera at subject's eye height"</code>.</p>

<h3>Low Angle (Worm's Eye)</h3>
<p>Camera looks up at the subject. Makes subjects appear powerful, imposing, heroic, or threatening. In your prompt: <code>"low angle shot looking up at [subject]"</code>.</p>

<h3>High Angle (Bird's Eye)</h3>
<p>Camera looks down at the subject. Makes subjects appear vulnerable, small, overwhelmed. In your prompt: <code>"high angle shot looking down on [subject]"</code>.</p>

<h3>Dutch Tilt (Canted Angle)</h3>
<p>Camera tilted on its axis. Creates unease, tension, disorientation. Use sparingly. In your prompt: <code>"Dutch angle"</code> or <code>"canted/tilted frame"</code>.</p>

<h3>Over-the-Shoulder (OTS)</h3>
<p>Camera positioned behind one character looking at another. Creates connection and spatial relationship. In your prompt: <code>"over-the-shoulder shot"</code>.</p>

<h3>Top-Down / Overhead</h3>
<p>Camera directly above, looking straight down. Abstract, pattern-revealing, God's-eye view. In your prompt: <code>"top-down overhead shot"</code> or <code>"bird's eye view"</code>.</p>

<h2>Angle + Emotion Cheat Sheet</h2>
<table>
  <thead><tr><th>Emotion</th><th>Angle</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Power</td><td>Low angle</td><td>Subject towers over viewer</td></tr>
    <tr><td>Vulnerability</td><td>High angle</td><td>Subject is diminished</td></tr>
    <tr><td>Tension</td><td>Dutch tilt</td><td>World feels off-kilter</td></tr>
    <tr><td>Intimacy</td><td>Eye level + close-up</td><td>Face-to-face connection</td></tr>
    <tr><td>Scale</td><td>Extreme low or aerial</td><td>Reveals size relationships</td></tr>
  </tbody>
</table>

<p>Combine angles with <a href="/wiki/camera-movements">Camera Movements</a> and <a href="/wiki/lens-choices">Lens Choices</a> for complete camera direction. See <a href="/wiki/composition-rules">Composition Rules</a> for framing within any angle.</p>
`,
  },
  {
    slug: "camera-movements",
    title: "Camera Movements",
    category: "Camera & Composition",
    summary:
      "Pan, tilt, dolly, crane, handheld, gimbal — how each movement type translates into AI video prompts.",
    relatedSlugs: [
      "camera-angles",
      "lens-choices",
      "prompt-templates",
      "scene-description-language",
    ],
    content: `
<p>Static cameras are safe. Movement is where emotion lives. But the wrong movement is worse than none at all.</p>

<h2>Movement Types</h2>

<h3>Pan (Horizontal rotation)</h3>
<p>Camera rotates left/right on a fixed point. Use for: revealing environments, following lateral movement. Prompt: <code>"camera pans left/right to reveal…"</code></p>

<h3>Tilt (Vertical rotation)</h3>
<p>Camera rotates up/down on a fixed point. Use for: revealing height, following vertical movement. Prompt: <code>"camera tilts up/down from… to…"</code></p>

<h3>Dolly / Track (Physical movement)</h3>
<p>Camera physically moves forward/backward or side-to-side. The most cinematic movement. Prompt: <code>"camera dollies in toward [subject]"</code> or <code>"tracking shot following [subject]"</code></p>

<h3>Crane / Jib (Vertical physical movement)</h3>
<p>Camera rises or descends through space. Epic, sweeping. Prompt: <code>"crane shot rising above [subject]"</code></p>

<h3>Zoom (Lens-based)</h3>
<p>Focal length changes while camera is static. Different feel from dolly. Prompt: <code>"slow zoom into [subject's face]"</code>. Note: <strong>dolly zoom</strong> (Vertigo effect) combines physical movement with opposing zoom for a disorienting effect.</p>

<h3>Handheld</h3>
<p>Organic, human movement. Adds urgency, realism. Prompt: <code>"handheld camera"</code> or <code>"slight handheld shake"</code></p>

<h3>Gimbal / Steadicam</h3>
<p>Smooth floating movement. Dreamlike, following. Prompt: <code>"steadicam follow shot"</code> or <code>"smooth gimbal tracking"</code></p>

<h3>Orbit</h3>
<p>Camera circles around the subject. Reveals dimensionality. Prompt: <code>"camera orbits around [subject]"</code></p>

<h2>Movement Speed Matters</h2>
<p>Always specify pace. "Camera slowly dollies in" vs. "camera rapidly pushes in" are completely different emotional beats. See <a href="/wiki/camera-angles">Camera Angles</a> and <a href="/wiki/lens-choices">Lens Choices</a> for the other two pillars of camera work.</p>
`,
  },
  {
    slug: "lens-choices",
    title: "Lens Choices",
    category: "Camera & Composition",
    summary:
      "Wide, normal, telephoto, macro, anamorphic — how focal length shapes the look and feel of AI video.",
    relatedSlugs: [
      "camera-angles",
      "camera-movements",
      "composition-rules",
      "depth-of-field",
    ],
    content: `
<p>Focal length is personality. A 14mm wide-angle and a 200mm telephoto shooting the same subject tell radically different stories.</p>

<h2>Focal Length Guide</h2>

<h3>Ultra Wide (14–24mm)</h3>
<p>Exaggerated perspective, distortion at edges. Makes spaces feel vast. Use for: epic landscapes, dramatic architecture, disorienting close-ups. Prompt: <code>"shot on 14mm ultra-wide lens"</code></p>

<h3>Wide (24–35mm)</h3>
<p>Natural perspective with slight expansion. The documentary lens. Use for: establishing shots, walking interviews, environmental portraits. Prompt: <code>"shot on 28mm lens"</code></p>

<h3>Normal (35–50mm)</h3>
<p>Closest to human vision. Neutral, honest. The "invisible" lens. Use for: dialogue, natural scenes. Prompt: <code>"shot on 50mm lens"</code></p>

<h3>Short Telephoto (85–135mm)</h3>
<p>Flattering compression. The portrait lens. Beautiful <a href="/wiki/depth-of-field">depth of field</a> separation. Use for: character close-ups, interviews. Prompt: <code>"shot on 85mm lens, shallow depth of field"</code></p>

<h3>Telephoto (135–200mm+)</h3>
<p>Heavy compression, stacked planes. Isolates subjects from background. Use for: surveillance feel, nature, sports, intimacy from distance. Prompt: <code>"shot on 200mm telephoto lens"</code></p>

<h3>Anamorphic</h3>
<p>Not a focal length but a lens type. Produces horizontal lens flares, oval bokeh, and a widescreen look. Instant "cinema." Prompt: <code>"anamorphic lens, oval bokeh, horizontal lens flares"</code></p>

<h3>Macro</h3>
<p>Extreme close-up capability. Reveals invisible worlds. Prompt: <code>"macro lens, extreme close-up detail"</code></p>

<h2>Lens + Emotion</h2>
<table>
  <thead><tr><th>Want</th><th>Lens</th></tr></thead>
  <tbody>
    <tr><td>Epic scale</td><td>Ultra wide (14–20mm)</td></tr>
    <tr><td>Natural documentary</td><td>Wide (28–35mm)</td></tr>
    <tr><td>Intimate portrait</td><td>Short telephoto (85mm)</td></tr>
    <tr><td>Voyeuristic / distant</td><td>Long telephoto (200mm+)</td></tr>
    <tr><td>Cinematic blockbuster</td><td>Anamorphic 40–75mm</td></tr>
  </tbody>
</table>

<p>See <a href="/wiki/composition-rules">Composition Rules</a> for framing principles and <a href="/wiki/depth-of-field">Depth of Field</a> for aperture control.</p>
`,
  },
  {
    slug: "composition-rules",
    title: "Composition Rules",
    category: "Camera & Composition",
    summary:
      "Rule of thirds, leading lines, symmetry, negative space — the compositional principles AI models respect.",
    relatedSlugs: [
      "camera-angles",
      "lens-choices",
      "scene-description-language",
      "depth-of-field",
    ],
    content: `
<p>Composition is where art meets geometry. These aren't rules to follow blindly — they're tools to deploy intentionally.</p>

<h2>Rule of Thirds</h2>
<p>Place subjects at intersection points of a 3×3 grid. Creates natural, balanced tension. Prompt: <code>"subject positioned at rule-of-thirds intersection"</code> or simply <code>"rule of thirds composition"</code>.</p>

<h2>Center Framing</h2>
<p>Subject dead center. Creates symmetry, power, confrontation (think Kubrick, Wes Anderson). Prompt: <code>"centered symmetrical framing"</code>.</p>

<h2>Leading Lines</h2>
<p>Use environmental lines (roads, hallways, fences) to draw the eye toward the subject. Prompt: <code>"leading lines drawing the eye toward [subject]"</code>.</p>

<h2>Negative Space</h2>
<p>Intentionally empty areas around the subject. Creates isolation, breathing room, or tension depending on context. Prompt: <code>"subject surrounded by negative space"</code>.</p>

<h2>Foreground / Midground / Background Layering</h2>
<p>Depth through layers. A blurred foreground element + sharp subject + soft background = cinematic depth. Prompt: <code>"layered composition with foreground element, sharp subject in midground, blurred background"</code>.</p>

<h2>Frame Within a Frame</h2>
<p>Use doorways, windows, arches to create a natural frame around your subject. Adds depth and focus. Prompt: <code>"subject framed through a doorway/window/arch"</code>.</p>

<p>These principles work with any <a href="/wiki/camera-angles">Camera Angle</a> and <a href="/wiki/lens-choices">Lens Choice</a>. See <a href="/wiki/depth-of-field">Depth of Field</a> for controlling visual layering through focus.</p>
`,
  },
  {
    slug: "depth-of-field",
    title: "Depth of Field",
    category: "Camera & Composition",
    summary:
      "Controlling focus depth in AI video — shallow bokeh, deep focus, rack focus techniques.",
    relatedSlugs: [
      "lens-choices",
      "composition-rules",
      "camera-angles",
      "lighting-techniques",
    ],
    content: `
<p>Depth of field (DoF) controls what's sharp and what's soft. It's your primary tool for directing the viewer's eye.</p>

<h2>Shallow Depth of Field</h2>
<p>Only a thin plane is in focus. Background melts into creamy bokeh. Use for: portraits, isolating subjects, romantic/dreamy feel. Prompt: <code>"shallow depth of field, f/1.4, creamy bokeh background"</code></p>

<h2>Deep Focus</h2>
<p>Everything from foreground to background is sharp. Use for: establishing shots, ensemble scenes, Orson Welles-style storytelling. Prompt: <code>"deep focus, everything in sharp focus, f/8"</code></p>

<h2>Rack Focus</h2>
<p>Focus shifts from one subject to another during the shot. Powerful for revealing information or shifting attention. Prompt: <code>"rack focus from [foreground element] to [background element]"</code></p>

<h2>Bokeh Quality</h2>
<p>The character of out-of-focus highlights. AI models respond to:</p>
<ul>
  <li><code>"smooth circular bokeh"</code> — clean, modern lenses</li>
  <li><code>"oval bokeh"</code> — anamorphic character</li>
  <li><code>"busy bokeh"</code> — vintage lens character</li>
  <li><code>"bokeh balls from city lights"</code> — night scene staple</li>
</ul>

<p>Depth of field interacts with <a href="/wiki/lens-choices">Lens Choice</a> (longer lenses = shallower DoF) and <a href="/wiki/lighting-techniques">Lighting</a> (brighter scenes allow wider apertures). Combine with <a href="/wiki/composition-rules">Composition Rules</a> for complete visual control.</p>
`,
  },

  // ─── LIGHTING ─────────────────────────────────────────
  {
    slug: "lighting-techniques",
    title: "Lighting Techniques",
    category: "Lighting",
    summary:
      "Key light, fill light, rim light, practical lighting — the setups that make or break AI video quality.",
    relatedSlugs: [
      "natural-lighting",
      "color-grading-prompts",
      "scene-description-language",
      "mood-lighting",
    ],
    content: `
<p>Lighting is the single most important factor in video quality. A perfectly composed shot with bad lighting looks amateur. A simple shot with great lighting looks professional.</p>

<h2>Three-Point Lighting</h2>
<p>The foundation of all lighting setups:</p>
<ol>
  <li><strong>Key Light</strong> — Primary light source. Sets the overall exposure and mood. Usually placed 45° to one side.</li>
  <li><strong>Fill Light</strong> — Softer, fills in shadows from the key. Controls contrast ratio.</li>
  <li><strong>Back/Rim Light</strong> — Behind the subject. Creates edge separation from background.</li>
</ol>
<p>Prompt: <code>"three-point lighting setup, key light from the left, soft fill, rim light separating subject from background"</code></p>

<h2>Key Lighting Styles</h2>
<table>
  <thead><tr><th>Style</th><th>Description</th><th>Prompt Language</th></tr></thead>
  <tbody>
    <tr><td>Rembrandt</td><td>Triangle of light on shadow-side cheek</td><td><code>"Rembrandt lighting, triangle of light on cheek"</code></td></tr>
    <tr><td>Butterfly</td><td>Key light directly above/front, butterfly shadow under nose</td><td><code>"butterfly lighting, glamour lighting from above"</code></td></tr>
    <tr><td>Split</td><td>Key light at 90°, half face lit, half in shadow</td><td><code>"split lighting, half face in shadow"</code></td></tr>
    <tr><td>Loop</td><td>Key at ~30°, small nose shadow loops toward cheek</td><td><code>"loop lighting, soft key light slightly off-axis"</code></td></tr>
  </tbody>
</table>

<h2>Light Quality</h2>
<ul>
  <li><strong>Hard light</strong> — Direct, creates defined shadows. <code>"hard direct light, sharp shadows"</code></li>
  <li><strong>Soft light</strong> — Diffused, wrapping. <code>"soft diffused light, gentle shadows"</code></li>
</ul>

<p>See <a href="/wiki/natural-lighting">Natural Lighting</a> for outdoor setups, <a href="/wiki/mood-lighting">Mood Lighting</a> for emotional presets, and <a href="/wiki/color-grading-prompts">Color Grading</a> for post-production color work.</p>
`,
  },
  {
    slug: "natural-lighting",
    title: "Natural Lighting",
    category: "Lighting",
    summary:
      "Golden hour, blue hour, overcast, harsh noon — working with natural light in AI video prompts.",
    relatedSlugs: [
      "lighting-techniques",
      "mood-lighting",
      "scene-description-language",
    ],
    content: `
<p>Natural light is free, beautiful, and constantly changing. AI models are trained on vast amounts of naturally lit footage, making these some of the most reliable lighting prompts.</p>

<h2>Time-of-Day Lighting</h2>

<h3>Golden Hour</h3>
<p>The first and last hour of sunlight. Warm, low-angle, long shadows, magical. The single most flattering natural light. Prompt: <code>"golden hour sunlight, warm directional light, long shadows"</code></p>

<h3>Blue Hour</h3>
<p>Just before sunrise / after sunset. Cool, even, ethereal. No harsh shadows. Prompt: <code>"blue hour, cool ambient light, deep blue sky gradient"</code></p>

<h3>Overcast</h3>
<p>Nature's softbox. Even, diffused, no harsh shadows. Great for skin. Prompt: <code>"overcast soft daylight, diffused sky, even illumination"</code></p>

<h3>Harsh Midday</h3>
<p>Direct overhead sun. High contrast, hard shadows. Can be dramatic when used intentionally. Prompt: <code>"harsh midday sun, strong overhead light, deep shadows"</code></p>

<h3>Dappled Light</h3>
<p>Sunlight filtered through trees/foliage. Creates beautiful patterns. Prompt: <code>"dappled sunlight through tree canopy, light and shadow patterns"</code></p>

<h3>Window Light</h3>
<p>The portrait photographer's best friend. Soft, directional, controllable by distance and angle. Prompt: <code>"soft window light from the side, natural daylight falling across [subject]"</code></p>

<p>Natural light changes by the minute. Specify exact conditions in your prompt for consistency. See <a href="/wiki/lighting-techniques">Lighting Techniques</a> for studio setups and <a href="/wiki/mood-lighting">Mood Lighting</a> for emotional effect.</p>
`,
  },
  {
    slug: "mood-lighting",
    title: "Mood Lighting",
    category: "Lighting",
    summary:
      "How to use lighting to create specific emotional tones — noir, horror, romance, sci-fi, and more.",
    relatedSlugs: [
      "lighting-techniques",
      "natural-lighting",
      "color-grading-prompts",
      "style-transfer-prompts",
    ],
    content: `
<p>Lighting doesn't just illuminate — it <em>feels</em>. The same face under neon vs. candlelight vs. harsh fluorescent tells three different stories.</p>

<h2>Mood Presets</h2>

<h3>Film Noir</h3>
<p>High contrast, venetian blind shadows, single hard source, smoke in the air.</p>
<p>Prompt: <code>"film noir lighting, high contrast, sharp shadows from venetian blinds, single hard key light, smoke catching the light, black and white"</code></p>

<h3>Horror</h3>
<p>Underlit faces, colored practical lights, deep shadows with unseen edges.</p>
<p>Prompt: <code>"horror lighting, face lit from below, deep shadows, flickering light source, cold blue-green tint"</code></p>

<h3>Romance</h3>
<p>Warm, soft, glowing. Candles, fairy lights, golden back-light.</p>
<p>Prompt: <code>"romantic warm lighting, soft candlelight glow, golden backlight rim, shallow focus, warm tones"</code></p>

<h3>Sci-Fi</h3>
<p>Cool, controlled, neon accents. LED strips, holographic spill.</p>
<p>Prompt: <code>"sci-fi lighting, cool blue ambient, neon accent lights in cyan and magenta, clean studio-like illumination"</code></p>

<h3>Documentary</h3>
<p>Available light, realistic, unpolished.</p>
<p>Prompt: <code>"natural available light, documentary-style, unpolished, no artificial lighting"</code></p>

<h3>Neon Night</h3>
<p>Urban night scenes with colored light pollution. Rain amplifies this.</p>
<p>Prompt: <code>"neon-lit night scene, colorful light reflections on wet surfaces, cyan and magenta neon glow, urban atmosphere"</code></p>

<p>Combine mood lighting with <a href="/wiki/style-transfer-prompts">Style Transfer</a> for complete aesthetic packages and <a href="/wiki/color-grading-prompts">Color Grading</a> for complementary post tones.</p>
`,
  },

  // ─── CHARACTER CONSISTENCY ────────────────────────────
  {
    slug: "character-consistency-fundamentals",
    title: "Character Consistency Fundamentals",
    category: "Character Consistency",
    summary:
      "Techniques for maintaining consistent characters across multiple AI video clips — the hardest problem in AI video.",
    relatedSlugs: [
      "character-reference-sheets",
      "face-consistency-methods",
      "wardrobe-consistency",
      "multi-shot-workflows",
    ],
    content: `
<p>Character consistency is the <strong>holy grail</strong> of AI video. Keeping a character recognizable across clips, angles, and lighting conditions is the biggest challenge in the space right now.</p>

<h2>Why It's Hard</h2>
<p>AI video models generate each frame (or clip) semi-independently. Without explicit anchoring, the model will subtly — or dramatically — change facial features, hair, clothing, and body proportions between generations.</p>

<h2>Core Strategies</h2>

<h3>1. Reference Image Anchoring</h3>
<p>Use the same reference image across all generations. Most modern tools support image-to-video or character reference inputs. See <a href="/wiki/character-reference-sheets">Character Reference Sheets</a> for how to build these.</p>

<h3>2. Detailed Textual Description</h3>
<p>Write a <strong>character bible</strong> — a detailed text description you paste into every prompt:</p>
<pre><code>"A woman in her mid-30s with shoulder-length auburn hair, green eyes,
light freckles across her nose, wearing a navy blue peacoat and
cream scarf. Slim build, approximately 5'7"."</code></pre>

<h3>3. Consistent Wardrobe</h3>
<p>Clothing is one of the strongest consistency anchors. Keep outfits distinctive and unchanged across a scene. See <a href="/wiki/wardrobe-consistency">Wardrobe Consistency</a>.</p>

<h3>4. Seed Locking (Where Available)</h3>
<p>Some platforms let you fix the random seed. Same seed + similar prompt = more consistent results.</p>

<h3>5. Face-Specific Tools</h3>
<p>Dedicated face-swap and face-lock tools can enforce consistency in post. See <a href="/wiki/face-consistency-methods">Face Consistency Methods</a>.</p>

<h2>The Multi-Shot Workflow</h2>
<p>For a consistent character across an entire video, see <a href="/wiki/multi-shot-workflows">Multi-Shot Workflows</a> — the end-to-end pipeline from planning to final edit.</p>
`,
  },
  {
    slug: "character-reference-sheets",
    title: "Character Reference Sheets",
    category: "Character Consistency",
    summary:
      "How to create and use character reference sheets — turnaround views, expression sheets, and outfit boards.",
    relatedSlugs: [
      "character-consistency-fundamentals",
      "face-consistency-methods",
      "wardrobe-consistency",
    ],
    content: `
<p>A character reference sheet is a visual specification for your character. It's the document you hand every generation to say "this is who we're creating."</p>

<h2>What to Include</h2>

<h3>Turnaround View</h3>
<p>Front, 3/4, side, and back views of the character on a neutral background. Generate these as a single image using AI image tools first, then use them as references for video.</p>
<pre><code>"Character turnaround sheet, [CHARACTER DESCRIPTION],
front view, three-quarter view, side profile, and back view,
white background, consistent lighting, full body,
reference sheet style"</code></pre>

<h3>Expression Sheet</h3>
<p>6–9 head shots showing different emotions: neutral, happy, sad, angry, surprised, thoughtful. This trains your eye (and the model) on how the character's face moves.</p>

<h3>Outfit/Wardrobe Board</h3>
<p>Each distinct outfit shown clearly. Include fabric texture details and color swatches. See <a href="/wiki/wardrobe-consistency">Wardrobe Consistency</a> for detail.</p>

<h2>Reference Sheet Workflow</h2>
<ol>
  <li>Generate base character in an AI image tool (Midjourney, DALL-E, Flux)</li>
  <li>Create turnaround sheet from the best result</li>
  <li>Generate expression sheet maintaining the same reference</li>
  <li>Use these sheets as image references when generating video clips</li>
  <li>Keep the same text description alongside the visual reference</li>
</ol>

<p>For face-specific techniques, see <a href="/wiki/face-consistency-methods">Face Consistency Methods</a>. For the full production pipeline, see <a href="/wiki/character-consistency-fundamentals">Character Consistency Fundamentals</a>.</p>
`,
  },
  {
    slug: "face-consistency-methods",
    title: "Face Consistency Methods",
    category: "Character Consistency",
    summary:
      "Tools and techniques for keeping faces consistent — IP-Adapter, face-swap, LoRA training, and platform features.",
    relatedSlugs: [
      "character-consistency-fundamentals",
      "character-reference-sheets",
      "ai-video-tools-overview",
    ],
    content: `
<p>The face is where consistency matters most — and where AI struggles hardest. Here are the current best approaches.</p>

<h2>IP-Adapter / Image Prompt</h2>
<p>Most video platforms now support "character reference" or "image prompt" features that anchor generation to a face. Upload a clear, well-lit reference photo and the model will attempt to preserve facial features.</p>
<p><strong>Best practices:</strong></p>
<ul>
  <li>Use a front-facing, evenly lit reference with neutral expression</li>
  <li>Avoid accessories (sunglasses, hats) in the reference unless you want them in every clip</li>
  <li>Higher resolution reference = better results</li>
</ul>

<h2>Face-Swap in Post-Production</h2>
<p>Generate your video with approximate faces, then swap in a consistent face using dedicated tools. This decouples motion from identity.</p>
<p>Tools: InsightFace, Reactor, FaceFusion, Roop</p>

<h2>LoRA / Fine-Tuning</h2>
<p>Train a small model on 10–20 images of your character (or a real person with consent). The model then "knows" this face natively. More effort but best consistency.</p>

<h2>Platform-Specific Features</h2>
<ul>
  <li><strong>Kling</strong> — Character reference mode with face-lock</li>
  <li><strong>Runway</strong> — Character reference input in Gen-3/4</li>
  <li><strong>Pika</strong> — Face reference anchoring</li>
  <li><strong>Minimax/Hailuo</strong> — Subject reference feature</li>
</ul>

<p>Combine these with <a href="/wiki/character-reference-sheets">Reference Sheets</a> and detailed text descriptions from <a href="/wiki/character-consistency-fundamentals">Character Consistency Fundamentals</a>.</p>
`,
  },
  {
    slug: "wardrobe-consistency",
    title: "Wardrobe Consistency",
    category: "Character Consistency",
    summary:
      "Keeping clothing consistent across AI video clips — distinctive outfits, fabric description, and color anchoring.",
    relatedSlugs: [
      "character-consistency-fundamentals",
      "character-reference-sheets",
      "prompt-engineering-fundamentals",
    ],
    content: `
<p>Clothing is your strongest consistency anchor after the face. Distinctive, well-described wardrobe makes it much easier for both AI and audience to track a character.</p>

<h2>Design Principles</h2>
<ul>
  <li><strong>Make it distinctive</strong> — A red trench coat is easier to maintain than a "casual outfit"</li>
  <li><strong>Limit complexity</strong> — Fewer details = fewer things to go wrong</li>
  <li><strong>Use color contrast</strong> — Character should visually pop from their environment</li>
  <li><strong>Avoid patterns</strong> — Stripes, plaids, and complex patterns morph between generations</li>
</ul>

<h2>Description Template</h2>
<pre><code>"wearing [GARMENT] in [COLOR/MATERIAL], [FIT DESCRIPTION],
with [DISTINCTIVE DETAIL], [ACCESSORY if any]"</code></pre>
<p><strong>Example:</strong> "wearing a fitted charcoal wool overcoat, unbuttoned, with a burgundy knit scarf tucked into the collar, dark denim jeans, brown leather boots"</p>

<h2>Fabric Language That Works</h2>
<p>AI models respond well to specific fabric descriptions: <code>wool, leather, silk, denim, linen, velvet, cotton, suede</code>. These carry texture information the model can render.</p>

<h2>Common Pitfalls</h2>
<ul>
  <li>Logos and text on clothing — will mutate every generation</li>
  <li>Jewelry with fine detail — necklaces and rings tend to disappear or multiply</li>
  <li>Hats — often change shape or disappear; use bold, simple styles if needed</li>
</ul>

<p>Build wardrobe into your <a href="/wiki/character-reference-sheets">Character Reference Sheet</a> and include it in every prompt per <a href="/wiki/character-consistency-fundamentals">Character Consistency Fundamentals</a>.</p>
`,
  },

  // ─── MOTION & ANIMATION ───────────────────────────────
  {
    slug: "motion-dynamics",
    title: "Motion Dynamics",
    category: "Motion & Animation",
    summary:
      "Controlling speed, acceleration, and quality of motion in AI video — slow-mo, time-lapse, and smooth action.",
    relatedSlugs: [
      "camera-movements",
      "common-artifacts",
      "prompt-engineering-fundamentals",
      "frame-rate-guide",
    ],
    content: `
<p>Motion is what separates video from images. How things move — their speed, acceleration, and fluidity — defines the viewing experience.</p>

<h2>Speed Control</h2>
<ul>
  <li><strong>Slow motion</strong> — <code>"slow motion, 120fps slow-mo, time slows down"</code>. Beautiful for impacts, emotions, nature.</li>
  <li><strong>Real-time</strong> — Default. Don't specify speed for natural movement.</li>
  <li><strong>Fast motion / Time-lapse</strong> — <code>"time-lapse, sped up, fast-forward"</code>. Great for clouds, crowds, construction.</li>
  <li><strong>Speed ramp</strong> — <code>"starts in slow motion then accelerates to real-time"</code>. Dramatic transitions.</li>
</ul>

<h2>Motion Quality Words</h2>
<table>
  <thead><tr><th>Want</th><th>Prompt Language</th></tr></thead>
  <tbody>
    <tr><td>Smooth, fluid</td><td><code>smooth motion, fluid movement, graceful</code></td></tr>
    <tr><td>Jittery, energetic</td><td><code>handheld, kinetic, frenetic, dynamic</code></td></tr>
    <tr><td>Minimal, subtle</td><td><code>subtle movement, almost still, gentle motion</code></td></tr>
    <tr><td>Dramatic, impactful</td><td><code>dramatic movement, powerful, explosive</code></td></tr>
  </tbody>
</table>

<h2>Physics and Realism</h2>
<p>AI models can struggle with physics. Help them by describing the physics you expect:</p>
<ul>
  <li>Hair and fabric: <code>"hair flowing in the wind"</code>, <code>"dress billowing"</code></li>
  <li>Particles: <code>"dust motes floating in the light beam"</code>, <code>"snow falling gently"</code></li>
  <li>Liquids: <code>"water splashing"</code>, <code>"coffee steam rising"</code></li>
</ul>

<p>See <a href="/wiki/frame-rate-guide">Frame Rate Guide</a> for technical settings and <a href="/wiki/common-artifacts">Common Artifacts</a> for motion-related issues to watch for.</p>
`,
  },
  {
    slug: "frame-rate-guide",
    title: "Frame Rate Guide",
    category: "Motion & Animation",
    summary:
      "24fps, 30fps, 60fps — how frame rate affects the feel of AI video and which to choose.",
    relatedSlugs: [
      "motion-dynamics",
      "ai-video-tools-overview",
      "post-production-workflow",
    ],
    content: `
<p>Frame rate is a creative choice, not just a technical one. It fundamentally changes how motion feels.</p>

<h2>Frame Rates and Their Feel</h2>
<table>
  <thead><tr><th>FPS</th><th>Feel</th><th>Use Case</th></tr></thead>
  <tbody>
    <tr><td>24fps</td><td>Cinematic, dreamy, "film-like"</td><td>Narrative, music videos, anything "movie"</td></tr>
    <tr><td>25fps</td><td>European broadcast standard (PAL)</td><td>TV content for PAL regions</td></tr>
    <tr><td>30fps</td><td>Smooth, slightly digital, "video-like"</td><td>Social media, talking head, vlogs</td></tr>
    <tr><td>48fps</td><td>Hyper-real, almost too smooth</td><td>Experimental (The Hobbit effect)</td></tr>
    <tr><td>60fps</td><td>Ultra-smooth, gaming feel</td><td>Sports, action, slow-mo source</td></tr>
  </tbody>
</table>

<h2>AI Video Frame Rates</h2>
<p>Most AI video models currently output at lower frame rates (often 8–16 fps internally) and interpolate to the target. This means:</p>
<ul>
  <li>Requesting 60fps won't give you "true" 60fps motion — it'll be interpolated</li>
  <li>24fps is often the sweet spot for AI video — matches the model's natural output rate closest</li>
  <li>Frame interpolation tools (RIFE, Topaz Video AI) can smooth output after generation</li>
</ul>

<h2>Slow-Motion Math</h2>
<p>To create slow-mo in post: generate at the highest fps available, then slow down in your editor. 60fps source → 24fps timeline = 2.5× slow motion.</p>

<p>See <a href="/wiki/motion-dynamics">Motion Dynamics</a> for speed control in prompts and <a href="/wiki/post-production-workflow">Post-Production Workflow</a> for assembly.</p>
`,
  },

  // ─── POST-PRODUCTION ──────────────────────────────────
  {
    slug: "common-artifacts",
    title: "Common Artifacts & How to Fix Them",
    category: "Post-Production",
    summary:
      "Morphing, flickering, extra limbs, temporal inconsistency — identifying and mitigating common AI video artifacts.",
    relatedSlugs: [
      "negative-prompts",
      "post-production-workflow",
      "upscaling-enhancement",
      "motion-dynamics",
    ],
    content: `
<p>Every AI video tool produces artifacts. Knowing what they are and how to fight them separates amateur from polished output.</p>

<h2>Artifact Catalog</h2>

<h3>Morphing / Shape-Shifting</h3>
<p>Objects or faces gradually change shape across frames. <strong>Fix:</strong> Stronger subject description, reference images, shorter clips, face-lock features.</p>

<h3>Flickering</h3>
<p>Rapid brightness or color changes between frames. <strong>Fix:</strong> Specify consistent lighting in prompt, use deflicker tools in post (DaVinci Resolve, After Effects).</p>

<h3>Extra / Missing Limbs</h3>
<p>Hands with 6 fingers, arms appearing/disappearing. <strong>Fix:</strong> Avoid complex hand interactions, use <a href="/wiki/negative-prompts">negative prompts</a> ("deformed hands, extra fingers"), re-generate.</p>

<h3>Temporal Inconsistency</h3>
<p>Elements change between clips (hair color shifts, clothing changes). <strong>Fix:</strong> Detailed character bibles, reference images, <a href="/wiki/character-consistency-fundamentals">character consistency techniques</a>.</p>

<h3>Physics Violations</h3>
<p>Objects floating, water flowing upward, impossible reflections. <strong>Fix:</strong> Describe physics explicitly in prompt, choose simpler actions.</p>

<h3>Text/Logo Corruption</h3>
<p>Any text in frame will be garbled. <strong>Fix:</strong> Add text in post-production, never rely on AI to generate readable text.</p>

<h2>The 80/20 Rule</h2>
<p>Fix the worst 20% of artifacts and the result looks 80% better. Focus on face stability and temporal consistency first — viewers are most sensitive to these.</p>

<p>See <a href="/wiki/post-production-workflow">Post-Production Workflow</a> for the full fix pipeline and <a href="/wiki/upscaling-enhancement">Upscaling & Enhancement</a> for quality improvement.</p>
`,
  },
  {
    slug: "post-production-workflow",
    title: "Post-Production Workflow",
    category: "Post-Production",
    summary:
      "The end-to-end workflow for assembling AI video clips — editing, color, sound, and final export.",
    relatedSlugs: [
      "common-artifacts",
      "upscaling-enhancement",
      "multi-shot-workflows",
      "audio-for-ai-video",
    ],
    content: `
<p>AI generates clips. You make a video. Post-production is where raw AI output becomes watchable content.</p>

<h2>The Pipeline</h2>
<ol>
  <li><strong>Organize</strong> — Name clips by scene/shot. Create bins. Rate generations (keep/maybe/reject).</li>
  <li><strong>Rough Cut</strong> — Assemble clips in timeline order. Don't worry about perfection.</li>
  <li><strong>Trim & Pace</strong> — Cut to rhythm. AI clips often have weak starts/ends — trim to the strongest frames.</li>
  <li><strong>Transitions</strong> — Cross-dissolves hide inconsistencies between clips. Cut on motion to hide jumps.</li>
  <li><strong>Color Grade</strong> — Unify the look across all clips. AI generations vary in color/exposure. Match them.</li>
  <li><strong>VFX / Fix</strong> — Paint out artifacts, stabilize shaky sections, deflicker.</li>
  <li><strong>Sound Design</strong> — See <a href="/wiki/audio-for-ai-video">Audio for AI Video</a>.</li>
  <li><strong>Upscale</strong> — See <a href="/wiki/upscaling-enhancement">Upscaling & Enhancement</a>.</li>
  <li><strong>Export</strong> — Match platform specs (4K for YouTube, 1080p for social).</li>
</ol>

<h2>Recommended Editing Tools</h2>
<ul>
  <li><strong>DaVinci Resolve</strong> — Free, professional color grading, Fusion for VFX</li>
  <li><strong>Adobe Premiere Pro</strong> — Industry standard, After Effects integration</li>
  <li><strong>CapCut</strong> — Fast, free, great for social formats</li>
  <li><strong>Final Cut Pro</strong> — Mac-native, fast rendering</li>
</ul>

<h2>Pro Tips</h2>
<ul>
  <li>Generate more clips than you need. 3:1 ratio (generate 3, use 1) is common.</li>
  <li>Music drives pacing — lay down your track before fine-cutting.</li>
  <li><a href="/wiki/common-artifacts">Artifact removal</a> is easier than re-generating — invest in cleanup.</li>
</ul>
`,
  },
  {
    slug: "upscaling-enhancement",
    title: "Upscaling & Enhancement",
    category: "Post-Production",
    summary:
      "Tools and techniques for upscaling AI video — resolution enhancement, frame interpolation, and detail recovery.",
    relatedSlugs: [
      "post-production-workflow",
      "common-artifacts",
      "ai-video-tools-overview",
    ],
    content: `
<p>Most AI video outputs at 720p–1080p. For professional use, you'll need to upscale. Modern AI upscalers are remarkably good.</p>

<h2>Upscaling Tools</h2>
<table>
  <thead><tr><th>Tool</th><th>Strength</th><th>Cost</th></tr></thead>
  <tbody>
    <tr><td>Topaz Video AI</td><td>Best all-rounder: upscale, denoise, interpolate, stabilize</td><td>Paid ($299 perpetual)</td></tr>
    <tr><td>RIFE</td><td>Frame interpolation (increase FPS)</td><td>Free / open source</td></tr>
    <tr><td>Real-ESRGAN</td><td>Spatial upscaling (increase resolution)</td><td>Free / open source</td></tr>
    <tr><td>DaVinci Resolve (Super Scale)</td><td>Built-in upscaling in the pro editor</td><td>Free / Paid Studio</td></tr>
  </tbody>
</table>

<h2>Upscaling Strategy</h2>
<ol>
  <li><strong>Fix artifacts first</strong> — Upscaling amplifies problems. Clean up before scaling up.</li>
  <li><strong>Upscale spatial resolution</strong> — 720p → 2K or 4K using Real-ESRGAN or Topaz.</li>
  <li><strong>Interpolate frames</strong> — If output is choppy, use RIFE to add intermediate frames.</li>
  <li><strong>Sharpen selectively</strong> — Add subtle sharpening to faces and key details, not uniformly.</li>
</ol>

<h2>Quality Ceiling</h2>
<p>Upscaling can't add information that isn't there. A badly generated 720p clip upscaled to 4K is still a bad clip at 4K. Focus on generation quality first, then upscale the best takes.</p>

<p>This is typically the last technical step before final export. See <a href="/wiki/post-production-workflow">Post-Production Workflow</a> for the full pipeline.</p>
`,
  },
  {
    slug: "audio-for-ai-video",
    title: "Audio for AI Video",
    category: "Post-Production",
    summary:
      "Sound design, music, voiceover, and SFX strategies for AI-generated video content.",
    relatedSlugs: [
      "post-production-workflow",
      "ai-video-tools-overview",
      "multi-shot-workflows",
    ],
    content: `
<p>AI video is silent. Audio is what makes it feel real. Sound is 50% of the viewing experience — often more.</p>

<h2>Audio Layers</h2>
<ol>
  <li><strong>Music / Score</strong> — Sets overall mood and pace. Lay this down first.</li>
  <li><strong>Sound Effects (SFX)</strong> — Footsteps, ambient noise, impacts. Sells the reality.</li>
  <li><strong>Foley</strong> — Subtle sounds: clothing rustle, cup on table, paper turning.</li>
  <li><strong>Ambient / Room Tone</strong> — Background hum of the environment. Never silence.</li>
  <li><strong>Dialogue / Voiceover</strong> — AI-generated or recorded narration.</li>
</ol>

<h2>AI Audio Tools</h2>
<ul>
  <li><strong>ElevenLabs</strong> — AI voiceover and voice cloning. Natural-sounding narration.</li>
  <li><strong>Suno / Udio</strong> — AI music generation. Custom scores from text prompts.</li>
  <li><strong>Epidemic Sound / Artlist</strong> — Licensed music libraries for commercial use.</li>
  <li><strong>Freesound.org</strong> — Free SFX library (check licenses).</li>
</ul>

<h2>Sound Design Tips</h2>
<ul>
  <li>Match sound to visual rhythm — cuts, impacts, and beats should align.</li>
  <li>Layer ambient sounds — a city scene needs traffic, wind, distant voices, not just one track.</li>
  <li>Use silence strategically — a moment of quiet before impact is powerful.</li>
  <li>Room tone is essential — even "quiet" scenes need ambient noise or they feel dead.</li>
  <li>AI-generated dialogue lip-sync is improving but still imperfect — voiceover narration is more forgiving.</li>
</ul>

<p>Audio is integrated in the <a href="/wiki/post-production-workflow">Post-Production Workflow</a> after picture-lock.</p>
`,
  },

  // ─── TOOLS & PLATFORMS ────────────────────────────────
  {
    slug: "ai-video-tools-overview",
    title: "AI Video Tools Overview",
    category: "Tools & Platforms",
    summary:
      "Comparison of major AI video platforms — Runway, Kling, Sora, Pika, Minimax, Luma, and more.",
    relatedSlugs: [
      "face-consistency-methods",
      "prompt-engineering-fundamentals",
      "image-to-video",
    ],
    content: `
<p>The AI video landscape moves fast. Here's the current state of major platforms and their strengths.</p>

<h2>Platform Comparison</h2>
<table>
  <thead><tr><th>Platform</th><th>Strength</th><th>Weakness</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td><strong>Runway Gen-3/4</strong></td><td>Motion quality, camera control, professional features</td><td>Cost, character consistency</td><td>Professional production, commercials</td></tr>
    <tr><td><strong>Kling 2.0</strong></td><td>Character consistency, face-lock, long clips</td><td>Occasional artifacts</td><td>Narrative content, character-driven</td></tr>
    <tr><td><strong>Sora</strong></td><td>Scene understanding, photorealism, physics</td><td>Availability, waiting times</td><td>Cinematic quality, complex scenes</td></tr>
    <tr><td><strong>Pika 2.0</strong></td><td>Speed, ease of use, creative effects</td><td>Lower resolution ceiling</td><td>Quick iterations, social content</td></tr>
    <tr><td><strong>Minimax / Hailuo</strong></td><td>Speed, good quality/cost ratio</td><td>Less camera control</td><td>Volume production, fast drafts</td></tr>
    <tr><td><strong>Luma Dream Machine</strong></td><td>Natural motion, good image-to-video</td><td>Character consistency</td><td>Organic scenes, nature</td></tr>
    <tr><td><strong>Vidu</strong></td><td>Character reference mode</td><td>Limited camera control</td><td>Character-driven content</td></tr>
    <tr><td><strong>Wan (Open Source)</strong></td><td>Free, customizable, local control</td><td>Requires GPU, more technical</td><td>Technical users, fine-tuning</td></tr>
  </tbody>
</table>

<h2>Choosing a Platform</h2>
<ul>
  <li><strong>Need character consistency?</strong> → Kling, Vidu</li>
  <li><strong>Need cinematic quality?</strong> → Runway, Sora</li>
  <li><strong>Need speed/volume?</strong> → Minimax, Pika</li>
  <li><strong>Need full control?</strong> → Wan (open source)</li>
  <li><strong>Need image-to-video?</strong> → See <a href="/wiki/image-to-video">Image-to-Video</a></li>
</ul>

<p>Platforms change rapidly. The best approach is to be multi-platform — use the right tool for each shot. See <a href="/wiki/prompt-engineering-fundamentals">Prompt Fundamentals</a> for cross-platform prompting techniques.</p>
`,
  },
  {
    slug: "image-to-video",
    title: "Image-to-Video Techniques",
    category: "Tools & Platforms",
    summary:
      "Using still images as starting frames for AI video — the most consistent generation method available.",
    relatedSlugs: [
      "ai-video-tools-overview",
      "character-consistency-fundamentals",
      "camera-movements",
      "character-reference-sheets",
    ],
    content: `
<p>Image-to-video (i2v) is often more consistent than text-to-video because you're giving the model a visual anchor. It's the workhorse of professional AI video production.</p>

<h2>The Workflow</h2>
<ol>
  <li><strong>Generate or select your starting image</strong> — Use Midjourney, DALL-E, Flux, or a real photo.</li>
  <li><strong>Optimize the image</strong> — Correct any issues before animation. What's wrong in the image will be wrong in the video.</li>
  <li><strong>Write a motion prompt</strong> — Describe what should MOVE, not what the scene looks like (the image already shows that).</li>
  <li><strong>Generate and iterate</strong> — Try multiple motion prompts on the same starting frame.</li>
</ol>

<h2>Motion Prompt Tips for i2v</h2>
<p>When using an image as the starting frame, your prompt should focus on <strong>action and camera</strong>:</p>
<pre><code>❌ "A woman with red hair standing in a field at sunset"
   (This describes the image — redundant)

✅ "She slowly turns her head toward the camera, hair blowing
   in the breeze, camera gently dollies in"
   (This describes the MOTION to add)</code></pre>

<h2>Best Practices</h2>
<ul>
  <li>Clean, high-resolution source images produce better video</li>
  <li>Images with clear depth cues (foreground/background) animate better</li>
  <li>Avoid starting images with complex textures that might "breathe" or morph</li>
  <li>If using AI-generated images, fix artifacts before animating</li>
  <li>Multiple clips from the same starting image = consistency across shots</li>
</ul>

<p>This technique pairs perfectly with <a href="/wiki/character-reference-sheets">Character Reference Sheets</a> — generate your reference image, then bring it to life. See <a href="/wiki/camera-movements">Camera Movements</a> for motion vocabulary.</p>
`,
  },

  // ─── WORKFLOWS ────────────────────────────────────────
  {
    slug: "multi-shot-workflows",
    title: "Multi-Shot Workflows",
    category: "Workflows",
    summary:
      "End-to-end pipeline for creating a coherent multi-shot AI video — from storyboard to final edit.",
    relatedSlugs: [
      "character-consistency-fundamentals",
      "post-production-workflow",
      "shot-list-planning",
      "image-to-video",
    ],
    content: `
<p>A single great AI clip is easy. A coherent sequence of clips that tells a story — that's the real challenge. Here's the workflow.</p>

<h2>Phase 1: Pre-Production</h2>
<ol>
  <li><strong>Write the story/concept</strong> — What happens, beat by beat?</li>
  <li><strong>Create a shot list</strong> — See <a href="/wiki/shot-list-planning">Shot List Planning</a>. Every shot specified.</li>
  <li><strong>Build character references</strong> — <a href="/wiki/character-consistency-fundamentals">Reference sheets</a> for every character.</li>
  <li><strong>Define the visual style</strong> — Color, lighting, lens choices locked in.</li>
  <li><strong>Write prompt templates</strong> — Base prompts for each scene with character descriptions baked in.</li>
</ol>

<h2>Phase 2: Generation</h2>
<ol>
  <li><strong>Generate establishing shots first</strong> — Set the world before characters enter.</li>
  <li><strong>Generate character intros</strong> — Closest angle first, then wider.</li>
  <li><strong>Generate action/dialogue shots</strong> — Use <a href="/wiki/image-to-video">image-to-video</a> for maximum consistency.</li>
  <li><strong>Generate 3–5 variants per shot</strong> — You need options for the edit.</li>
  <li><strong>Review and re-generate</strong> — Flag inconsistencies, regenerate problem shots.</li>
</ol>

<h2>Phase 3: Assembly</h2>
<ol>
  <li><strong>Rough cut</strong> — Best take of each shot in sequence.</li>
  <li><strong>Consistency pass</strong> — Color match, fix continuity errors.</li>
  <li><strong>Sound design</strong> — Music, SFX, voiceover.</li>
  <li><strong>Polish</strong> — Upscale, deflicker, final grade.</li>
  <li><strong>Export</strong> — Platform-appropriate format.</li>
</ol>

<p>This workflow scales from a 30-second short to a multi-minute narrative. See <a href="/wiki/post-production-workflow">Post-Production Workflow</a> for Phase 3 details.</p>
`,
  },
  {
    slug: "shot-list-planning",
    title: "Shot List Planning",
    category: "Workflows",
    summary:
      "How to plan your shots before generating — coverage, pacing, and variety for AI video projects.",
    relatedSlugs: [
      "multi-shot-workflows",
      "camera-angles",
      "camera-movements",
      "scene-description-language",
    ],
    content: `
<p>A shot list is your blueprint. It prevents random generation and ensures coverage — the right variety of angles, sizes, and movements to tell your story.</p>

<h2>Shot List Template</h2>
<table>
  <thead><tr><th>Shot #</th><th>Size</th><th>Angle</th><th>Movement</th><th>Subject</th><th>Action</th><th>Duration</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>ELS</td><td>Aerial</td><td>Slow drift forward</td><td>City skyline</td><td>Establishing</td><td>4s</td><td>Golden hour</td></tr>
    <tr><td>2</td><td>MS</td><td>Eye level</td><td>Static</td><td>Character A</td><td>Walking</td><td>3s</td><td>Street-level intro</td></tr>
    <tr><td>3</td><td>CU</td><td>Slight low</td><td>Subtle dolly in</td><td>Character A face</td><td>Looking up</td><td>2s</td><td>Reaction shot</td></tr>
  </tbody>
</table>

<h2>Coverage Checklist</h2>
<p>For any scene, aim to have:</p>
<ul>
  <li>1 establishing/wide shot (context)</li>
  <li>1-2 medium shots (action)</li>
  <li>1-2 close-ups (emotion)</li>
  <li>1 detail/insert shot (texture)</li>
  <li>Variety in angle: don't shoot everything at eye level</li>
  <li>At least one moving camera shot for energy</li>
</ul>

<h2>Pacing Through Variety</h2>
<ul>
  <li><strong>Fast pacing</strong> — More cuts, shorter clips (1–2s), varied angles</li>
  <li><strong>Slow pacing</strong> — Longer takes (4–6s), gradual movements, fewer cuts</li>
  <li><strong>Rhythm</strong> — Alternate between wide and close, static and moving</li>
</ul>

<p>Use <a href="/wiki/scene-description-language">Scene Description Language</a> vocabulary when filling in your shot list. Reference <a href="/wiki/camera-angles">Camera Angles</a> and <a href="/wiki/camera-movements">Camera Movements</a> for options.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getAllCategories(): Category[] {
  return [...new Set(articles.map((a) => a.category))];
}

export function searchArticles(query: string): Article[] {
  const lower = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lower) ||
      a.summary.toLowerCase().includes(lower) ||
      a.category.toLowerCase().includes(lower)
  );
}
