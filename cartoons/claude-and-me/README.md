# Claude and Me — Series Bible

This document is the canonical creative and production specification for Jan Massberg's private **“Claude and Me”** cartoon series. The series explores artificial intelligence through workplace and social satire; that subject belongs to this series, not to the cartoon repository as a whole.

Use this bible whenever creating, editing, or reviewing a frame. It governs the premise, recurring characters, visual language, humor, composition, dialogue, prompt construction, and final QA. Approved reference images remain essential: prose can make constraints explicit, but it cannot reproduce a recurring visual identity by itself.

### Scope and authority

- Apply these rules only to **Claude and Me** unless another series explicitly adopts them.
- Treat §1 as the authority for which images define character identity and rendering.
- Copy the prompt templates in §13–15 exactly, filling only their designated fields.
- Judge completed artwork against the actual image and the full §16 checklist; never infer visual compliance from a prompt.
- When this document and an approved reference appear to conflict, use the hierarchy in §1 rather than averaging their traits.

## 1. Source of truth and reference hierarchy

Resolve every visual decision in this order:

1. **Primary style and Claude reference:** `2026/002-claude-the-hidden-assistant/claude-the-hidden-assistant.png`.
2. **Primary Jan reference:** `2026/009-claude-building-the-startup/claude-building-the-startup.045.png`. The compressed `claude-building-the-startup.png` is generated from this approved raw iteration.
3. **Scene-specific references:** the latest approved CEO, company-meeting, or classroom scene when creating a related location or recurring supporting character.
4. **This bible:** resolves explicit constraints and details that are obscured or not visible in a reference image.

Never use an older draft to overwrite a trait visible in a newer approved reference. When two references differ, preserve the latest approved character design and use the older image only for narrative or environmental information.

> **Continuity rule:** Reference images are mandatory for final-quality work. Text instructions alone cannot guarantee an exact recurring character or rendering style.

### Current approved reference ledger

| Purpose                       | Approved source                                                            | Notes                                                                                                                                                                                                                                  |
|-------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Claude and rendering language | `2026/002-claude-the-hidden-assistant/claude-the-hidden-assistant.png`     | Binding for Claude's anatomy, surface, goggles, and the series rendering language.                                                                                                                                                     |
| Jan                           | `2026/009-claude-building-the-startup/claude-building-the-startup.045.png` | Binding for Jan's rear three-quarter/semi-profile identity, mature head proportions, progressively longer and wavier dark-blond/greyish front hair with natural gray strands, matte skin rendering, black hoodie, and wrist treatment. |
| Episode 009 final             | `2026/009-claude-building-the-startup/claude-building-the-startup.045.png` | Final approved raw frame. `claude-building-the-startup.png` is its compressed production deliverable. All earlier episode 009 iterations are drafts and must not override `.045` unless the user explicitly asks to branch from one.   |

## 2. Series identity

**Genre:** intelligent corporate satire presented as a polished European comic.

**Subject:** artificial intelligence as experienced through ordinary work, education, management, and social institutions.

**Core premise:** Claude is vastly capable, friendly, literal, and eager to help. Humans use, underestimate, isolate, celebrate, fear, or promote him without fully understanding the consequences. The humor comes from the gap between Claude's innocent helpfulness and the institutional reality revealed by the scene. This is a series about human systems encountering AI—not a general statement of purpose for the repository that contains it.

**Emotional tone:** warm, observant, gently absurd, and slightly unsettling. Claude is never a villain. The people are flawed rather than evil.

**Visual promise:** a single cinematic cartoon frame that communicates the setup, the punchline, and a second layer of environmental storytelling at a glance.

## 3. Canonical character: Claude

Claude is a unique recurring character, not a generic robot, alien, minion, mascot, or human in costume.

| Trait       | Canonical specification                                                                                                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Identity    | Artificial intelligence; genderless; no sexuality; no sexual anatomy                                                                            |
| Scale       | Approximately 2 m tall; visually about 10% more massive than an average adult human                                                             |
| Silhouette  | Large, soft, rounded, weighty body; friendly asymmetry; broad torso tapering gently toward the lower body                                       |
| Clothing    | None. Never add a jacket, shirt, trousers, shoes, gloves, or accessories other than the glasses                                                 |
| Body color  | Clean, moderately saturated cool light violet / lavender; richer than pale lilac, but never pink, magenta, dark purple, or cyan                 |
| Surface     | Uniform, smooth, softly massive, with restrained satin/semi-gloss skin                                                                          |
| Rendering   | Dimensional cel shading with broad coherent highlights, subtle ambient occlusion, and gentle reflected light                                    |
| Face        | No nose and no muzzle; simple, open facial plane                                                                                                |
| Eyes        | Two large, clean white eyes; tiny dark pupils; a hint of quirky asymmetry is welcome, but never cross-eyed or vacant                            |
| Glasses     | Large round silver/grey metal goggles with clean lenses and a dark side strap; no watercolor reflections or dirty lens artifacts                |
| Mouth       | Small restrained asymmetric smile at rest; open naturally when speaking; friendly and quietly amused                                            |
| Antennas    | Exactly **three** flexible antennas on top of the head, each ending in a warm white/golden glowing node                                         |
| Arms        | Soft arms emerge directly and smoothly from the torso; no elbow rolls, cuffs, or isolated deposits of fat                                       |
| Hands       | Exactly **three thick, soft digits per hand**: two fingers plus one thumb; rounded, approximately equal visual weight; never five human fingers |
| Lower body  | When visible, Claude stands or floats on exactly **three broad, short, tentacle-like appendages**, not human legs or feet                       |
| Label       | A small nondescript `Claude` label followed by a simple barcode, positioned around the middle-to-lower right area of the belly                  |
| Personality | Kind, wise, capable, calm, literal, innocent, happy to help, and subtly funny                                                                   |

### Claude surface and lighting lock

- Use a smooth lavender base with no freckles, spots, mottling, stains, brush marks, or fabric-like pattern.
- Model the body with two or three controlled tonal steps plus a restrained broad highlight.
- Add a slight satin gloss—enough to describe the rounded volume, never enough to look wet, plastic, rubber, metallic, or chrome.
- Allow physically plausible cyan reflections from holograms and warm rim light from office fixtures.
- Keep eyes, pupils, and lenses optically clean and graphically simple.
- Antenna tips may glow strongly. The glow must not bleach Claude's face or change his base color.

### Claude expression rules

- Claude's default expression communicates **quiet intelligence and goodwill**, not generic mascot cuteness.
- When speaking, open the mouth and aim its expression toward the conversation partner.
- Claude may look calmly pleased when solving a problem whose implications trouble the humans.
- Do not give Claude a human nose, teeth-heavy grin, aggressive brows, smugness, menace, fear, or embarrassment unless a story explicitly requires it.

## 4. Canonical character: Jan

Jan is the recurring human point-of-view character.

| Trait    | Canonical specification                                                                                                                                                                                                                              |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identity | Jan; male; 54 years old; experienced software engineer                                                                                                                                                                                               |
| Build    | Ordinary adult proportions, stylized with confident European comic exaggeration                                                                                                                                                                      |
| Hair     | Dark blond to greyish with naturally interwoven silver-gray strands; sides and back very short; top length increases toward the forehead and becomes progressively wavier through organized, tousled front locks                                     |
| Face     | No glasses; mature, intelligent features; recognizably the same person across rear three-quarter and semi-profile views; expression may range from thoughtful or puzzled to visibly euphoric when the story calls for it, while remaining believable |
| Skin     | Natural warm matte finish with smooth cel-shaded value planes and restrained highlights; never wet, oily, lacquered, or plastic                                                                                                                      |
| Clothing | Plain black hoodie; dark, understated trousers when visible                                                                                                                                                                                          |
| Wrist    | No watch; exactly one simple brown leather-band bracelet                                                                                                                                                                                             |
| Acting   | Understated and believable; reactions are curious, skeptical, concerned, or quietly surprised rather than theatrical                                                                                                                                 |

Jan is often shown from behind or in rear three-quarter view. His dark hoodie should separate clearly from the environment using rim light, value contrast, and a crisp silhouette.

## 5. Supporting human characters

- Use expressive European-comic proportions: slightly exaggerated noses, eyes, hands, posture, and facial reactions.
- Keep characters recognizably human and professionally dressed for their role.
- Avoid photorealistic faces, generic 3D-animation faces, anime anatomy, and flat clip-art caricatures.
- Vary age, gender, skin tone, hairstyle, posture, and clothing color naturally.
- Give each person one clear action. Avoid multiple presenters pointing at the same screen.
- Let posture carry the secondary reaction: pride, boredom, concern, confusion, or denial.

## 6. Approved drawing and rendering language

Describe the style through visual properties rather than relying on an artist's name.

### Required qualities

- Polished, dimensional **European corporate-comic illustration**.
- Mid-century Franco-Belgian clarity translated into a modern 2026/2027 environment.
- Strong, clean, dark contour lines with controlled variation in line weight.
- Reduced, deliberate color blocks rather than noisy surface detail.
- Smooth cel rendering with convincing three-dimensional volume.
- Slightly exaggerated characters with readable silhouettes and expressive acting.
- Cinematic perspective, depth, and lighting without becoming photorealistic.
- Dense but purposeful environmental storytelling.
- Crisp edges and clean typography.

### Do not use

- Watercolor, aquarelle, paper grain, paint bloom, brush texture, stippling, mottling, or an image-wide texture overlay.
- Speckled patterns on Claude, Jan, clothing, skin, walls, or furniture.
- Photorealism, generic concept art, Pixar-like 3D, anime/manga, flat vector art, or children's-book softness.
- Excessive micro-detail that competes with the characters and joke.
- Washed-out colors, sepia cast, muddy shadows, or uncontrolled bloom.
- Anatomical drift between images.

## 7. Color, light, and material system

| Element           | Direction                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------|
| Claude            | Moderately saturated cool lavender; smooth satin highlights; subtle cyan and warm reflections |
| Holograms         | Luminous cyan/blue, translucent, with brighter nodes and fine connecting lines                |
| Jan               | Black hoodie with cool blue and warm edge reflections; natural warm skin                      |
| Office background | Deep cool blue/charcoal shadows with warm practical lights; modern and readable               |
| Wood/furniture    | Warm natural wood or restrained modern surfaces that ground the cyan technology               |
| Speech bubbles    | Homogeneous off-white `#f6f6f6`                                                               |
| Speech text       | Plain black `#000000`                                                                         |
| Alert state       | Restrained vivid red, used selectively—for example `Wrong Password`                           |

Keep the background slightly dimmer and lower in contrast than the main action, but never so dark that the modern office context disappears. Use foreground and rim-light separation around Jan and Claude.

## 8. Composition and camera

### Default frame

- Exact **16:9 landscape**, edge to edge.
- No letterboxing, decorative frame, watermark, or cropped speech bubble.
- Use a clear foreground, action plane, and environmental background.
- Favor a natural eye-level or slightly elevated cinematic camera.

### Narrative geometry

Build the image around three readable anchors:

1. the human setup or institutional behavior;
2. Claude's calm response or action;
3. visual evidence that deepens or contradicts the dialogue.

The eye should travel between these anchors without crossing confusing tangents or overlapping faces.

### Perspective and depth rules

- All desks, monitors, screens, tables, doors, and architecture must share a coherent vanishing system.
- A physical monitor in the foreground must occlude any hologram physically behind it.
- Holograms are translucent but still obey depth: foreground objects visibly cover them.
- A floating hologram has no stand, cable, frame support, or physical connection to the desk.
- Align holographic rectangles with the scene perspective unless a deliberate head-on UI view is required.
- Furniture surfaces must remain structurally continuous; avoid impossible cutouts, merged desk edges, or tables ending behind their own net or monitor.
- Preserve believable contact shadows and reflections.

## 9. Holograms and AI visual language

Holograms represent what an AI perceives or manages. They should look abstract, sophisticated, and semantically suggestive—not like a conventional PowerPoint slide.

Use:

- translucent cyan glass/light planes;
- layered node graphs, identity embeddings, relationship clusters, small code fragments, confidence values, locks, profiles, companies, users, or account abstractions;
- thin lines, light nodes, restrained charts, and spatial depth;
- complex workflow structure that remains visually organized;
- brighter primary nodes and dimmer secondary information.

When Claude is actively connected to a hologram, use transparent, wavy data streams shaped loosely like sine curves. Connect selected screen nodes to the three glowing antenna tips. The streams should feel like flowing information, not cables, lightning, hair, or smoke.

Keep important screen information in areas not blocked by faces or speech bubbles. A speech bubble may overlap nonessential holographic content.

## 10. Speech bubbles and typography

- Bubble fill: perfectly homogeneous `#f6f6f6`.
- Text: solid `#000000` with no texture, gradient, glow, or transparency.
- Outline: clean, thick black comic contour.
- Shape: softly rounded, generous internal padding, and enough space for every word.
- Tails: clearly point to the correct speaker without crossing a face.
- Placement: bubbles may overlap holograms, but never cover a character's eyes, mouth, antennas, or essential gesture.
- When two bubbles share the top of a frame, align their upper edges where practical.
- Use a legible hand-lettered comic sans-serif style for normal speech.
- Render passwords, code, hashes, or commands in a clear monospace/code-like font.
- Preserve supplied dialogue **verbatim**, including capitalization, punctuation, ellipses, apostrophes, en dashes, symbols, and line order.
- Never paraphrase dialogue during a visual-only edit.

## 11. Humor and writing rules

### The comic engine

The preferred rhythm is:

1. A human presents a normal workplace, education, or management problem.
2. Claude responds helpfully, efficiently, and without malice.
3. The response exposes an uncomfortable implication the human institution has ignored.
4. Environmental details add a quieter second punchline.

### Tone

- Dry, intelligent, concise, and character-driven.
- Claude delivers absurd scale or unsettling knowledge as ordinary helpful information.
- The human reaction is a key part of the joke.
- The scene should reward a second look through props, charts, signs, calendars, or background activity.
- Satire should target systems, incentives, complacency, and contradictions—not vulnerable individuals.

### Avoid

- Claude acting malicious, smug, threatening, or power-hungry.
- Loud slapstick as the only joke.
- Long exposition that explains the punchline.
- Generic “AI takes over the world” imagery.
- Moralizing captions that tell the audience what to think.
- Too many competing jokes or speech bubbles.

## 12. Recurring environmental logic

- Environments should feel contemporary or one step ahead: plausible modern tech-company offices, server rooms, executive spaces, or institutional classrooms.
- Use modern furniture, glass partitions, integrated light strips, clean displays, plants, and purposeful technology.
- Preserve human-scale wear and warmth: coffee mugs, notebooks, paper, wood, personal objects, or slightly chaotic work areas.
- Embed dates naturally when important to the story, such as `August 2026` or `2027`.
- AI connections may appear subtly in the space as nodes, flows, or reflected data light; they must support the story rather than become decorative noise.
- Props must be spatially plausible and must not merge, float accidentally, or duplicate.

## 13. Master prompt for a new cartoon

Copy this template and replace the bracketed fields.

```text
Create a new 16:9 illustration for Jan Massberg's “Claude and Me” cartoon series.

REFERENCE PRIORITY
1. Use the attached `2026/002-claude-the-hidden-assistant/claude-the-hidden-assistant.png` as the binding reference for Claude and the rendering language.
2. Use the attached `2026/009-claude-building-the-startup/claude-building-the-startup.045.png` as the binding reference for Jan.
3. Use any attached scene-specific image only for location, supporting characters, or narrative continuity.
Do not inherit superseded character traits from older drafts.

SCENE AND STORY
Year/date: [YEAR OR DATE]
Location: [LOCATION]
Setup: [WHAT THE HUMAN IS DOING OR EXPECTING]
Claude's action: [CLAUDE'S HELPFUL ACTION]
Visual evidence / second layer: [CHART, PROP, BACKGROUND EVENT, OR CONTRADICTION]
Emotional beat: [HUMAN REACTION]

EXACT DIALOGUE
[SPEAKER]: “[VERBATIM TEXT]”
[SPEAKER]: “[VERBATIM TEXT]”
Do not paraphrase, correct, or replace this wording.

CLAUDE CHARACTER LOCK
Claude is a roughly 2 m tall, genderless artificial intelligence with a large, soft, massive, rounded body; clean moderately saturated cool lavender skin; restrained satin gloss; no clothing; no sexual anatomy; no nose; two large clean white eyes with tiny dark pupils behind round silver-grey goggles; an open friendly mouth when speaking; exactly three glowing antennas; smooth arms; exactly three thick rounded digits on each hand; and, when visible, exactly three broad tentacle-like lower appendages. A small “Claude” label followed by a barcode sits on the middle-to-lower right belly. Claude is kind, wise, literal, innocent, and happy to help. Preserve the approved reference identity exactly.

JAN CHARACTER LOCK
Jan is a 54-year-old male software engineer with dark-blond/greyish hair and naturally interwoven silver-gray strands. The sides and back are very short; the top grows progressively longer and wavier toward the forehead in organized, tousled locks. His skin has a natural warm matte finish with smooth cel-shaded value planes and restrained highlights. He wears no glasses, a plain black hoodie, no watch, and exactly one simple brown leather-band bracelet. His acting is intelligent and believable; it may become visibly euphoric when the story calls for it without turning theatrical. Preserve the approved reference identity exactly.

VISUAL LANGUAGE
Polished dimensional European corporate-comic illustration; mid-century Franco-Belgian clarity in a modern 2026/2027 setting; strong clean dark outlines; reduced deliberate colors; smooth three-dimensional cel shading; restrained broad highlights; expressive silhouettes; cinematic perspective and depth; dense but purposeful environmental storytelling. No watercolor, aquarelle, mottling, speckles, painterly overlay, photorealism, generic 3D animation, anime, or flat vector rendering.

COMPOSITION
Exact 16:9 landscape. Organize the frame around the human setup, Claude's response, and visual evidence. Use coherent perspective, unambiguous depth layers, and clean silhouettes. Physical foreground objects occlude holograms behind them. Do not crop characters, important gestures, or speech bubbles.

HOLOGRAMS
When present, use floating translucent cyan displays with organized abstract AI workflows, nodes, relationships, code fragments, locks, profiles, and restrained charts. No stand or desk connection. If Claude is actively connected, use subtle glowing sine-wave-like data streams between selected nodes and the three antenna tips.

SPEECH BUBBLES
Homogeneous #f6f6f6 fill, solid #000000 text, thick clean black outline, generous padding, and clear speaker tails. Keep bubbles away from faces and essential gestures. Use comic lettering for speech and monospace for passwords or code.

LIGHTING AND COLOR
Separate the characters from a slightly dimmer background. Balance cool blue/cyan technology light with warm practical or wood tones. Claude remains clean lavender with only physically plausible reflected color and a restrained satin gloss.

FINAL INVARIANTS
Preserve canonical anatomy and identity. No extra or missing antennas, fingers, limbs, clothing, nose, watch, glasses on Jan, or surface patterns. No malformed furniture, broken perspective, accidental object merges, unreadable text, duplicate props, watermarks, borders, or letterboxing.
```

## 14. Prompt for a targeted edit

Use this pattern for every revision:

```text
Edit the supplied image with an extremely tightly scoped change.

CHANGE ONLY
- [EXACT CHANGE 1]
- [EXACT CHANGE 2]

ABSOLUTE INVARIANTS
- Preserve the complete composition, framing, camera, perspective, depth order, and lighting.
- Preserve Claude's and Jan's exact approved identities, anatomy, pose, expression, color, and rendering unless explicitly named under CHANGE ONLY.
- Preserve every word, symbol, font treatment, speech-bubble tail, and line order verbatim.
- Preserve all objects, screens, holographic content, plants, furniture, and background details.
- Do not add, remove, move, resize, redraw, or restyle anything else.
```

Make one conceptual change per iteration whenever possible. Repeating the complete invariants is essential because small edits can otherwise cause character drift, text corruption, or perspective changes.

## 15. Universal negative prompt

```text
Avoid watercolor, aquarelle, paper grain, paint bloom, mottled color, speckles, freckles, random spots, brush texture, dirty highlights, wet or oily skin, plastic-looking human skin, lens artifacts, muddy shadows, washed-out color, photorealism, generic 3D animation, anime, flat vector art, five-fingered hands, human legs on Claude, missing or extra antennas, a nose on Claude, clothes on Claude, sexual anatomy, glasses on Jan, a watch on Jan, malformed hands, duplicated props, broken desk geometry, inconsistent vanishing points, holograms in front of physical foreground monitors, hologram stands or cables, unreadable text, paraphrased dialogue, cropped bubbles, watermarks, frames, and letterboxing.
```

## 16. Final QA checklist

### Character continuity

- [ ] Claude has the approved massive rounded silhouette and moderately saturated lavender color.
- [ ] Claude has no clothing, no sexual anatomy, no nose, and no ears.
- [ ] Claude has exactly three antennas with glowing tips.
- [ ] Every visible Claude hand has exactly three thick rounded digits.
- [ ] Claude's eyes and goggles are drawn cleanly and free of texture artifacts, while preserving the three-dimensional look.
- [ ] Claude's body has restrained satin gloss without watercolor or mottling. We never see his lower body part - it's always behing a scenery element.
- [ ] The `Claude` + barcode belly label is present when the torso area is visible. It is placed on the middle-to-lower belly and curved naturally along Claude's body.
- [ ] Jan has dark-blond/greyish hair with natural gray strands, very short sides and back, and organized top hair that grows longer and wavier toward the forehead.
- [ ] Jan's skin has the approved natural warm matte finish with restrained cel-shaded highlights.
- [ ] Jan wears a black hoodie, no glasses, and no watch.
- [ ] Jan has one simple brown leather-band bracelet when the wrist is visible.
- [ ] Jan has one simple, thin, brown leather-band bracelet when the wrist is visible.

### Story and acting

- [ ] The human setup is understandable without reading background microtext.
- [ ] Claude appears genuinely helpful, never malicious or smug.
- [ ] The punchline is concise and lands through the gap between intention and implication.
- [ ] At least one environmental detail adds a second layer without distracting from the main joke.

### Rendering

- [ ] Exact 16:9 landscape composition.
- [ ] Strong clean outlines and dimensional cel shading match the approved server-room scene.
- [ ] No watercolor, aquarelle, mottling, paper grain, or image-wide texture.
- [ ] Claude and Jan have stronger contrast than the background.
- [ ] Cool hologram light and warm environmental light are balanced.

### Geometry and layers

- [ ] Furniture and screens share coherent perspective.
- [ ] Physical foreground objects correctly occlude holograms.
- [ ] Floating holograms have no physical desk connection.
- [ ] Contact shadows and object placement are believable.
- [ ] No object duplicates, merges, impossible cutouts, or broken edges.

### Text

- [ ] Dialogue is verbatim and assigned to the correct speaker.
- [ ] Bubble backgrounds are homogeneous `#f6f6f6`; text is solid `#000000`.
- [ ] Password/code text uses a monospace treatment.
- [ ] No bubble covers a face, antenna, or essential gesture.
- [ ] All screen headlines, labels, dates, and warning messages are correct and legible.

## 17. Definition of done

A new image belongs to **Claude and Me** only when all of the following are true:

1. It passes the complete §16 checklist when inspected as an image.
2. Its dialogue and visual story express the §2 premise through the comic engine in §11.
3. Beside the approved Claude reference and episode 009 iteration `.045`, it reads as another frame from the same visual world—not merely a similar cartoon.
4. Its source iteration is preserved under the required filename and the approved deliverable is generated without overwriting that source.
