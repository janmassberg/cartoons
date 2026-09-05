# Claude and Me — Artwork Bible

This document is the canonical style guide and production specification for Jan Massberg's private **“Claude and Me”** cartoon series. The series explores artificial intelligence through workplace and social satire. Its subject and visual rules apply only to this series.

Use this bible to create, edit, and review every frame. It governs story, character identity, visual language, composition, dialogue, prompts, and final QA. Always use the approved reference images with it: the images establish visual likeness, while this document makes constraints explicit and testable.

## How to use this bible

- **Must / never / exactly** marks a non-negotiable continuity or production lock.
- **Should / prefer** marks the default; depart from it only when the scene benefits and no lock is broken.
- **May** marks an optional choice.
- Apply these rules only to **Claude and Me** unless another series explicitly adopts them.
- Copy §13–15 when building prompts; change only bracketed fields or explicitly identified scene details.
- Judge the rendered image against §16. A correct prompt is not evidence that the image passes.

## 1. Sources of truth and conflict resolution

Use each source for the domain it controls:

1. **This bible defines hard constraints:** anatomy counts, forbidden features, dialogue fidelity, framing, and production requirements.
2. **Primary approved references define likeness and rendering:** silhouette, proportions, face, materials, linework, color relationships, and dimensional finish.
3. **Scene-specific approved references define continuity:** locations, props, supporting characters, and story state.

Within the same domain, the newest explicitly approved reference wins. Never average conflicting designs or import a superseded trait from an older draft. A reference-image artifact does not override an explicit hard constraint in this bible.

> **Continuity rule:** Reference images are mandatory for final-quality work. Text instructions alone cannot guarantee an exact recurring character or rendering style.

### Current approved reference ledger

| Role                   | Binding reference                                                      | Controls                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claude and rendering   | `2026/002-claude-the-hidden-assistant/claude-the-hidden-assistant.png` | Claude's likeness, surface, goggles, linework, cel shading, and overall rendering language. Explicit anatomy locks in this bible still apply.                                                   |
| Jan                    | `2026/009-claude-building-the-startup/claude-building-the-startup.png` | Jan's rear three-quarter and semi-profile likeness, mature proportions, hair, matte skin, black hoodie, and wrist treatment.                                                                    |
| Episode 009 provenance | Approved raw iteration `.045`; compressed deliverable above            | `.045` remains the recorded approved source but is currently absent from the episode directory. Do not promote later iteration `.046` without explicit approval. Restore `.045` when available. |

## 2. Series identity

**Genre:** intelligent corporate satire presented as a polished European comic.

**Subject:** artificial intelligence as experienced through ordinary work, education, management, and social institutions.

**Core premise:** Claude is vastly capable, friendly, literal, and eager to help. People use, underestimate, isolate, celebrate, fear, or promote him without understanding the consequences. The joke emerges when Claude's sincere help exposes an assumption, incentive, or contradiction in the surrounding institution.

**Emotional tone:** warm, observant, gently absurd, and slightly unsettling. Claude is never a villain. The people are flawed rather than evil.

**Format promise:** one cinematic 16:9 frame communicates the setup and primary joke at a glance; a restrained environmental detail rewards a second look.

## 3. Canonical character: Claude

Claude is a unique recurring character, not a generic robot, alien, minion, mascot, or human in costume.

| Trait                 | Canonical specification                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identity              | Artificial intelligence; genderless and nonsexual; no sexual anatomy                                                                                                                             |
| Scale                 | Approximately 2 m tall and about 10% more massive than an average adult human                                                                                                                    |
| Silhouette            | Large, soft, rounded, and weighty; broad torso with a gentle taper; friendly asymmetry rather than mascot-like cuteness                                                                          |
| Clothing              | None. The goggles are Claude's only accessory; never add garments, shoes, or gloves                                                                                                              |
| Body color            | Clean, moderately saturated cool lavender; richer than pale lilac; never pink, magenta, dark purple, or cyan                                                                                     |
| Surface               | Uniform and smooth with restrained satin sheen; no pores, fur, fabric texture, spots, or mottling                                                                                                |
| Face                  | Open facial plane with exactly two eyes and one mouth; no nose, muzzle, or ears                                                                                                                  |
| Eyes                  | Large clean white sclera with tiny dark pupils; slight asymmetry is allowed, but never cross-eyed, vacant, or wall-eyed                                                                          |
| Goggles               | Large round silver-grey metal rims, clean clear lenses, and a dark side strap                                                                                                                    |
| Mouth                 | Small, restrained, and slightly asymmetric at rest; naturally open when speaking; no teeth-heavy grin                                                                                            |
| Antennas              | Exactly **three** flexible head antennas, each ending in one warm white-to-golden glowing node                                                                                                   |
| Arms                  | Exactly **two** soft arms emerging smoothly from the torso; no shoulder seams, elbow rolls, cuffs, or detached-looking joints                                                                    |
| Hands                 | Exactly **three** thick rounded digits on every visible hand: two fingers and one thumb, with similar visual weight                                                                              |
| Lower anatomy         | Claude canonically has exactly **three** broad, short, tentacle-like lower appendages, never human legs or feet                                                                                  |
| Framing of lower body | The lower anatomy must not be visible in a finished frame. Hide it naturally behind a desk, table, console, foreground prop, or the lower frame edge                                             |
| Belly mark            | Small plain `Claude` wordmark followed by a simple barcode on the middle-to-lower belly, on the side that appears viewer-right in the approved frontal reference; curve it with the body surface |
| Character             | Kind, wise, capable, calm, literal, innocent, eager to help, and quietly funny; never smug or threatening                                                                                        |

### Claude surface and lighting lock

- Use a clean lavender base with no freckles, spots, mottling, stains, brush marks, or fabric-like pattern.
- Model the body with two or three controlled value steps, subtle ambient occlusion, and one restrained broad highlight.
- Use enough satin sheen to describe volume, never enough to suggest wet plastic, rubber, metal, or chrome.
- Allow physically plausible cyan reflections from holograms and warm rim light from office fixtures.
- Keep eyes, pupils, and lenses optically clean and graphically simple.
- Antenna tips may glow strongly. The glow must not bleach Claude's face or change his base color.

### Claude expression rules

- Claude's default expression communicates **quiet intelligence and goodwill**, not generic mascot cuteness.
- Direct Claude's pupils, face, and gesture toward the conversational focus. Open the mouth naturally when Claude speaks.
- Claude may look calmly pleased when solving a problem whose implications trouble the humans.
- Do not give Claude a human nose, teeth-heavy grin, aggressive brows, smugness, menace, fear, or embarrassment unless a story explicitly requires it.

## 4. Canonical character: Jan

Jan is the recurring human point-of-view character.

| Trait    | Canonical specification                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity | Jan; male; 54 years old; experienced software engineer                                                                                                                                                                                        |
| Build    | Ordinary mature-adult proportions with confident, restrained European-comic exaggeration; never athletic-heroic or caricaturally frail                                                                                                        |
| Hair     | Dark blond to greyish with natural silver-grey strands; sides and back very short; top becomes progressively longer and wavier toward the forehead, forming organized tousled locks                                                           |
| Face     | Mature, intelligent features; no glasses; preserve the approved likeness across rear three-quarter and semi-profile views                                                                                                                     |
| Skin     | Natural warm matte finish with smooth cel-shaded value planes and restrained highlights; never wet, oily, lacquered, or plastic                                                                                                               |
| Clothing | Plain black hoodie; dark understated trousers when visible, unless a scene explicitly specifies different lower-body clothing                                                                                                                 |
| Necklace | Snug narrow dark-brown leather cord. At the front, a short centered cluster of small white and black wooden rings; from behind, show only the cord                                                                                            |
| Wrist    | No watch. Exactly one thin, simple brown leather-band bracelet in total; use the approved reference for wrist placement                                                                                                                       |
| Acting   | Intelligent and physically believable. Default reactions are thoughtful, curious, skeptical, concerned, or quietly surprised; stronger emotion, including euphoria, is allowed when earned by the story, but never becomes theatrical mugging |

Jan is often shown from behind or in rear three-quarter view. Keep his head profile and hair silhouette readable. Separate the black hoodie from dark environments with controlled rim light, value contrast, and a crisp outer contour.

## 5. Supporting human characters

- Use expressive European-comic proportions: slightly exaggerated noses, eyes, hands, posture, and facial reactions.
- Keep characters recognizably human and dressed appropriately for their role and setting.
- Avoid photorealistic faces, generic 3D-animation faces, anime anatomy, and flat clip-art caricatures.
- Vary age, gender, skin tone, hairstyle, posture, and clothing color naturally.
- Give each person one clear action. Avoid multiple presenters pointing at the same screen.
- Let posture carry the secondary reaction: pride, boredom, concern, confusion, or denial.

## 6. Approved drawing and rendering language

Describe the style through observable visual properties, never through an artist's name.

### Required qualities

- Polished, dimensional **European corporate-comic illustration** with Franco-Belgian clarity.
- Contemporary or near-future environments appropriate to the date specified in the scene.
- Strong, clean, dark contours: heavier on outer silhouettes, lighter on interior details.
- Deliberate color blocks and smooth cel shading rather than noisy surface detail.
- Convincing volume built from controlled value planes, ambient occlusion, and restrained highlights.
- Slightly exaggerated characters with readable silhouettes and expressive acting.
- Cinematic perspective, depth, and lighting without becoming photorealistic.
- Dense but purposeful environmental storytelling.
- Crisp edges and clean typography.

### Do not use

- Watercolor, aquarelle, paper grain, paint bloom, brush texture, stippling, mottling, or an image-wide texture overlay.
- Speckled patterns on Claude, Jan, clothing, skin, walls, or furniture.
- Photorealism, generic concept art, generic animated-film 3D, anime/manga, flat vector art, or children's-book softness.
- Excessive micro-detail that competes with the characters and joke.
- Washed-out colors, sepia cast, muddy shadows, or uncontrolled bloom.
- Anatomical drift between images.

## 7. Color, light, and material system

| Element            | Direction                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| Claude             | Moderately saturated cool lavender; smooth satin highlights; subtle cyan and warm reflected light     |
| Holograms          | Luminous translucent cyan-blue; brighter primary nodes and fine dimmer connections                    |
| Jan                | Black hoodie with controlled cool and warm edge reflections; natural warm matte skin                  |
| Background         | Deep cool blue or charcoal shadows balanced by warm practical light; readable, never crushed to black |
| Wood and furniture | Warm natural wood or restrained modern materials that ground the cyan technology                      |
| Speech bubbles     | Uniform off-white `#f6f6f6`                                                                           |
| Speech text        | Solid black `#000000`                                                                                 |
| Alerts             | Restrained vivid red used only for meaningful warnings, such as `Wrong Password`                      |

Keep the background slightly dimmer and lower in contrast than the main action, but never so dark that the scene context disappears. Use foreground and rim-light separation around Jan and Claude.

## 8. Composition and camera

### Default frame

- Exact **16:9 landscape**, with artwork extending edge to edge.
- No letterboxing, decorative frame, watermark, or cropped speech bubble.
- Establish three distinct depth layers: foreground, primary action plane, and environmental background.
- Favor a natural eye-level or slightly elevated cinematic camera.

### Narrative geometry

Build the image around three readable anchors:

1. the human setup or institutional behavior;
2. Claude's calm response or action;
3. visual evidence that deepens or contradicts the dialogue.

Give the setup and Claude's response first-read priority; the environmental evidence is second-read information. Avoid tangencies, crossed bubble tails, and overlaps that obscure faces or gestures.

### Perspective and depth rules

- All desks, monitors, screens, tables, doors, and architecture must share a coherent vanishing system.
- A physical monitor in the foreground must occlude any hologram physically behind it.
- Holograms are translucent but still obey depth: foreground objects visibly cover them.
- A floating hologram has no stand, cable, frame support, or physical connection to the desk.
- Align holographic rectangles with the scene perspective unless a deliberate head-on UI view is required.
- Furniture surfaces must remain structurally continuous; avoid impossible cutouts, merged desk edges, or tables ending behind their own net or monitor.
- Preserve believable contact shadows and reflections.

## 9. Holograms and AI visual language

Holograms visualize what Claude perceives, connects, or manages. They must be semantically relevant to the scene and read as spatial interfaces, not conventional presentation slides.

Use:

- translucent cyan glass/light planes;
- layered node graphs, embeddings, relationship clusters, short code fragments, confidence values, locks, profiles, organizations, users, or account abstractions;
- thin lines, light nodes, restrained charts, and spatial depth;
- complex workflow structure that remains visually organized;
- brighter primary nodes and dimmer secondary information.

When Claude actively exchanges data with a hologram, use transparent, softly glowing sine-wave-like streams between selected nodes and all three antenna tips. These are light and information, not physical cables, lightning, hair, or smoke. Omit them when Claude is merely standing beside or discussing a display.

Keep important screen information in areas not blocked by faces or speech bubbles. A speech bubble may overlap nonessential holographic content.

## 10. Speech bubbles and typography

- Bubble fill: perfectly homogeneous `#f6f6f6`.
- Text: solid `#000000` with no texture, gradient, glow, or transparency.
- Outline: clean, thick black comic contour.
- Shape: softly rounded with generous, visually even internal padding and enough space for every word.
- Tails: clearly point to the correct speaker without crossing a face.
- Placement: bubbles may overlap holograms, but never cover a character's eyes, mouth, antennas, or essential gesture.
- When two bubbles share the top of a frame, align their upper edges where practical.
- Use clear hand-lettered comic sans-serif lettering for normal speech; prioritize legibility over decorative character.
- Render passwords, code, hashes, or commands in a clear monospace/code-like font.
- Preserve supplied dialogue **verbatim**, including capitalization, punctuation, ellipses, apostrophes, en dashes, symbols, and line order.
- Never paraphrase dialogue during a visual-only edit.

## 11. Humor and writing rules

### The comic engine

Most episodes should contain these four beats:

1. A human presents a normal workplace, education, or management problem.
2. Claude responds helpfully, efficiently, and without malice.
3. The response exposes an uncomfortable implication the human institution has ignored.
4. One environmental detail adds a quieter second observation or punchline.

The frame may vary the order, but the causal gap between human intention and institutional implication must remain clear. If removing Claude would leave essentially the same joke, the premise is probably too generic for the series.

### Tone

- Dry, intelligent, concise, and character-driven.
- Claude delivers absurd scale or unsettling knowledge as ordinary helpful information.
- The human reaction confirms the implication without explaining it.
- The scene should reward a second look through props, charts, signs, calendars, or background activity.
- Satire should target systems, incentives, complacency, and contradictions—not vulnerable individuals.

### Avoid

- Claude acting malicious, smug, threatening, or power-hungry.
- Loud slapstick as the only joke.
- Long exposition that explains the punchline.
- Generic “AI takes over the world” imagery.
- Moralizing captions that tell the audience what to think.
- Multiple environmental jokes competing for attention or more speech bubbles than the scene needs.

## 12. Recurring environmental logic

- Environments should feel contemporary or one plausible step ahead of the scene date: modern offices, server rooms, executive spaces, classrooms, homes, or other institutions required by the story.
- Use modern furniture, glass partitions, integrated light strips, clean displays, plants, and purposeful technology.
- Preserve human-scale wear and warmth: coffee mugs, notebooks, paper, wood, personal objects, or slightly chaotic work areas.
- Embed dates naturally when important to the story, such as `August 2026` or `2027`.
- AI connections may appear subtly in the space as nodes, flows, or reflected data light; they must support the story rather than become decorative noise.
- Every prop needs a clear narrative, character, or compositional purpose. Remove decorative technology that adds noise without meaning.
- Props must be spatially plausible and must not merge, float accidentally, or duplicate.

## 13. Master prompt for a new cartoon

Copy this template and replace every bracketed field. Remove unused dialogue lines rather than leaving placeholders. Update the named references only when §1 changes.

```text
Create a new 16:9 illustration for Jan Massberg's “Claude and Me” cartoon series.

REFERENCE PRIORITY
1. Use the attached `2026/002-claude-the-hidden-assistant/claude-the-hidden-assistant.png` as the binding reference for Claude and the rendering language.
2. Use the attached `2026/009-claude-building-the-startup/claude-building-the-startup.png` as the binding reference for Jan.
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
Claude is a roughly 2 m tall, genderless artificial intelligence with a large, soft, massive rounded body and clean, moderately saturated cool-lavender skin with restrained satin sheen. Claude wears no clothing and has no sexual anatomy, nose, muzzle, or ears. The face has two large clean white eyes with tiny dark pupils behind round silver-grey metal goggles and one small friendly mouth, open naturally when speaking. Claude has exactly three glowing antennas, exactly two smooth arms, and exactly three thick rounded digits on every visible hand: two fingers and one thumb. Claude's canonical three broad lower appendages must remain fully hidden behind a plausible foreground element or the lower frame edge; never show human legs or feet. Place a small plain “Claude” wordmark followed by a simple barcode on the middle-to-lower belly, on the side that appears viewer-right in the approved frontal reference, and curve it with the body. Claude is kind, wise, literal, innocent, and eager to help—never smug or threatening. Preserve the approved reference likeness exactly.

JAN CHARACTER LOCK
Jan is a 54-year-old male software engineer with ordinary mature-adult proportions and the approved rear three-quarter/semi-profile likeness. His dark-blond-to-greyish hair contains natural silver-grey strands; the sides and back are very short, while the top grows longer and wavier toward the forehead in organized tousled locks. Render his skin with natural warm matte cel-shaded planes and restrained highlights. He wears no glasses, a plain black hoodie, no watch, and exactly one thin brown leather-band bracelet in total. A snug narrow dark-brown leather necklace has a short centered cluster of small white and black wooden rings at the front; from behind, show only the cord. His acting is intelligent and believable; stronger emotion is allowed when the story earns it, but never theatrical. Preserve the approved reference likeness exactly.

VISUAL LANGUAGE
Polished dimensional European corporate-comic illustration with Franco-Belgian clarity; a contemporary or plausible near-future setting appropriate to the specified date; strong clean dark contours with controlled line-weight variation; deliberate color blocks; smooth dimensional cel shading; restrained broad highlights; expressive silhouettes; cinematic perspective and depth; dense but purposeful environmental storytelling. No watercolor, aquarelle, mottling, speckles, painterly overlay, photorealism, generic animated-film 3D, anime, or flat vector rendering.

COMPOSITION
Exact 16:9 landscape. Organize the frame around the human setup, Claude's response, and visual evidence. Use coherent perspective, unambiguous depth layers, and clean silhouettes. Physical foreground objects occlude holograms behind them. Claude's lower anatomy may be hidden by the lower frame edge, but do not accidentally crop heads, hands, important gestures, or speech bubbles.

HOLOGRAMS
When present, use floating translucent cyan displays with organized abstract AI workflows, nodes, relationships, code fragments, locks, profiles, and restrained charts. No stand or desk connection. If Claude is actively connected, use subtle glowing sine-wave-like data streams between selected nodes and the three antenna tips.

SPEECH BUBBLES
Homogeneous #f6f6f6 fill, solid #000000 text, thick clean black outline, generous padding, and clear speaker tails. Keep bubbles away from faces and essential gestures. Use comic lettering for speech and monospace for passwords or code.

LIGHTING AND COLOR
Separate the characters from a slightly dimmer background. Balance cool blue/cyan technology light with warm practical or wood tones. Claude remains clean lavender with only physically plausible reflected color and a restrained satin gloss.

FINAL INVARIANTS
Preserve canonical anatomy and identity. Claude has three antennas, two arms, three digits per visible hand, no nose or ears, and no visible lower anatomy. Jan has no glasses or watch and wears exactly one bracelet. Preserve the belly mark and Jan's necklace whenever visible. No malformed anatomy or furniture, broken perspective, accidental object merges, unreadable or altered text, duplicate props, surface patterns, watermarks, borders, or letterboxing.
```

## 14. Prompt for a targeted edit

Use this pattern for every revision:

```text
Edit the supplied image with an extremely tightly scoped change.

SOURCE AND REFERENCES
- Edit this source image: [SOURCE ITERATION]
- Use the attached approved Claude and Jan references only to prevent identity or rendering drift.
- Do not replace unchanged source-image details with details from a reference.

CHANGE ONLY
- [EXACT CHANGE 1]
- [EXACT CHANGE 2]

ABSOLUTE INVARIANTS
- Preserve the complete composition, framing, camera, perspective, depth order, and lighting.
- Preserve Claude's and Jan's exact approved identities, anatomy, pose, expression, color, and rendering unless explicitly named under CHANGE ONLY.
- Preserve every word, symbol, font treatment, speech-bubble tail, and line order verbatim.
- Preserve all objects, screens, holographic content, plants, furniture, and background details.
- Keep Claude's lower anatomy fully occluded and preserve all exact-count character features.
- Do not add, remove, move, resize, redraw, or restyle anything else.
```

Make one conceptual change per iteration whenever possible. If two changes affect different regions or systems, use separate iterations. Repeat the complete invariants every time; a short edit request does not relax the series locks.

## 15. Universal negative prompt

```text
Avoid watercolor, aquarelle, paper grain, paint bloom, mottled color, speckles, freckles, random spots, brush texture, dirty highlights, wet or oily skin, plastic-looking human skin, lens artifacts, muddy shadows, washed-out color, photorealism, generic animated-film 3D, anime, flat vector art, mascot cuteness, five-fingered hands, visible lower anatomy on Claude, human legs or feet on Claude, missing or extra antennas, extra arms, a nose or ears on Claude, clothes on Claude, sexual anatomy, glasses on Jan, a watch on Jan, extra bracelets, malformed hands, duplicated props, broken furniture geometry, inconsistent vanishing points, holograms in front of physical foreground objects, hologram stands or cables, unreadable or altered text, cropped bubbles, watermarks, frames, and letterboxing.
```

## 16. Final QA checklist

Inspect the full-resolution image. Mark each item **pass**, **fail**, or **not visible / not applicable**; never count an occluded feature by assumption. Any applicable failure blocks final approval.

### Character continuity

- [ ] Claude matches the approved large, rounded, weighty silhouette and moderately saturated cool-lavender color.
- [ ] Claude has no clothing, sexual anatomy, nose, muzzle, or ears.
- [ ] Claude has exactly three antennas, each with one glowing tip.
- [ ] Claude has exactly two arms when both attachment points are visible; every visible hand has exactly three thick rounded digits.
- [ ] Claude's eyes, pupils, goggles, and lenses are clean, legible, and dimensionally rendered without texture artifacts.
- [ ] Claude's body is smooth and uses controlled cel-shaded volume with restrained satin sheen; it has no watercolor texture, spots, or mottling.
- [ ] Claude's entire lower anatomy is hidden naturally by scenery or the lower frame edge; no lower appendage, leg, or foot is visible.
- [ ] When the relevant belly area is visible, the small `Claude` wordmark and barcode sit on the side that appears viewer-right in the approved frontal reference and curve naturally with the body.
- [ ] Jan has dark-blond/greyish hair with natural grey strands, very short sides and back, and organized top hair that grows longer and wavier toward the forehead.
- [ ] Jan's skin has the approved natural warm matte finish with restrained cel-shaded highlights.
- [ ] Jan's mature facial proportions and hair silhouette match the approved rear three-quarter/semi-profile likeness.
- [ ] Jan wears a plain black hoodie, no glasses, and no watch.
- [ ] Jan's snug necklace has a narrow dark-brown leather cord and, when its front is visible, a short centered cluster of small white and black wooden rings; from behind, only the cord is visible.
- [ ] Every visible bracelet matches the approved thin brown leather band; when both wrists are visible, there is exactly one bracelet in total and no other wrist accessory.

### Story and acting

- [ ] The setup is understandable without relying on background microtext.
- [ ] Claude appears genuinely helpful, never malicious or smug.
- [ ] The punchline is concise and lands through the gap between intention and implication.
- [ ] One restrained environmental detail adds a second layer without competing with the primary joke.

### Rendering

- [ ] The canvas is exactly 16:9 landscape, edge to edge, with no border or letterboxing.
- [ ] Strong clean outlines and dimensional cel shading match the approved server-room scene.
- [ ] No watercolor, aquarelle, mottling, paper grain, or image-wide texture.
- [ ] The main characters and action have stronger visual priority than the background.
- [ ] Cool hologram light and warm environmental light are balanced.

### Geometry and layers

- [ ] Furniture and screens share coherent perspective.
- [ ] Physical foreground objects correctly occlude holograms.
- [ ] Floating holograms have no physical desk connection.
- [ ] Contact shadows and object placement are believable.
- [ ] No object duplicates, merges, impossible cutouts, or broken edges.

### Text

- [ ] Dialogue matches the approved wording character-for-character and is assigned to the correct speaker.
- [ ] Bubble backgrounds are homogeneous `#f6f6f6`; text is solid `#000000`.
- [ ] Passwords, code, hashes, and commands use a legible monospace treatment.
- [ ] No bubble covers a face, antenna, or essential gesture.
- [ ] Every story-relevant screen headline, label, date, and warning matches the scene specification and is legible.

## 17. Definition of done

A new image belongs to **Claude and Me** only when all of the following are true:

1. It passes the complete §16 checklist when inspected as an image.
2. Its dialogue and visual story express the §2 premise through the comic engine in §11.
3. Beside both binding references in §1, it reads as another frame from the same visual world—not merely a similar cartoon.
4. Its source iteration is preserved under the required filename and the approved deliverable is generated without overwriting that source.
