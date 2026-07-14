DEŽ ICON STYLE GUIDE v1
Pipeline document — binding on all icon producers (Claude, Cowork, Claude Code)
Convention: British English

========================================================
1. CANVAS & GEOMETRY
========================================================
1.1  viewBox="0 0 64 64", fill="none" on the <svg> root. Never
     any other canvas size.
1.2  Subject fills the canvas: main silhouette should span
     roughly 44–56 units in its larger dimension, visually
     centred. Small subjects read as clutter at falling size.
1.3  Stroke weight: 2.5 for structural outlines; 2 for interior
     detail; 3–5 only for limbs/rails rendered as single strokes.
     stroke-linecap="round" and stroke-linejoin="round"
     throughout.
1.4  Corners and shapes rounded and friendly. No sharp spikes
     unless meaning requires (mountain peaks, snowflake).
1.5  File budget: one icon ≤ ~1.5KB of SVG text. If it exceeds,
     simplify the drawing, do not compress the code into
     unreadability.

========================================================
2. PALETTE
========================================================
Background context: icons sit on a translucent tile over a dark
navy sky (#1b2a4a → #2e4370). All colour rules follow from this.

2.1  CONTRAST RULE (binding, ruling C12): the dark navy family
     (#2c3350, #1a2138, #111726, #123, #1c2540) may be used ONLY
     as small detail marks (eyes, nostrils, mouths, clock hands,
     pen tips) sitting on a LIGHT fill. NEVER as a structural
     outline, limb, wheel, or garment against the sky.
2.2  Light structural neutral (wheels, rims, skeleton lines that
     must read against the sky): #e8eefb with #8f9bb8 for its
     stroke/hub detail.
2.3  Core palette (reuse before inventing):
     Skin        #f2c9a0  (stroke #d9a878)
     Wood/bread  #d99a52 / #b57e3c (stroke #8a5a34)
     Red/warm    #ef5f68 (stroke #c93c47) · #e05c6b (#b53a49)
     Orange      #ef8354 / #f5a623
     Yellow      #ffcf5c / #ffd45e (stroke #e0a92f)
     Green       #7ce8a9 (#4bb87a) · #5fb56a (#3d8a48)
     Blue water  #6fc3f7 (stroke #3f97d6)
     Blue mid    #4a90d9 · denim #7fb2f0 (garments, trouser legs)
     Blue pale   #cfe8ff (glass/windows) · #bfe3ff (ice/window)
     Purple      #7c6ff0 (#5b4fd4) · lilac #9a8ff5
     Pink        #ef8fb0 (#d6608c) · #f5c8d6 (#d391a8)
     Greys       #f4f7ff/#e8eefb (stroke #c9d4ee / #9fb0d8 /
                 #8f9bb8) · slate case #56679a (#3d4a75)
     Cream       #fff6e8 (#e3cfa8) · #f2e0c8 (#d9bd93)
2.4  One highlight allowed per icon (white/pale stroke at low
     opacity) to give volume — see jabolko, srce, paradiznik.
2.5  Garments on figures: denim blue #7fb2f0 legs by default;
     torso any saturated palette colour distinct per verb (green
     walker, blue runner, red reader...) so verbs are tellable
     apart at speed by colour as well as motion.

========================================================
3. FIGURES & FACES
========================================================
3.1  Figures are simple stick-plus-shape people: circular head
     (#f2c9a0), thick rounded strokes for limbs, one torso stroke
     or shape. No fingers except when the hand IS the subject.
3.2  Faces get eyes (dark dots) and optionally a simple mouth;
     animal faces get eyes + species nose/muzzle. Dark facial
     marks only on light fills (rule 2.1).
3.3  Neutral, friendly, culturally unmarked figures. No text
     baked into any asset, ever (localisation + reuse).

========================================================
4. VERB ANIMATION CONVENTIONS
========================================================
4.1  Verbs animate; nouns never do. The static/animated split
     silently signals word class — do not break it.
4.2  One clear action per verb, looped, subtle: the motion must
     read at 84px falling size but not strobe. Duration range
     0.35s (sprint legs) to 1.6s (steam, Zzz).
4.3  Technique: CSS keyframes on classed <g>/<path> groups
     inside the SVG (class on the <svg> root: anim-run,
     anim-sleep, anim-cycle...). transform-origin set explicitly
     in px matching the pivot point in the drawing.
4.4  Budget: ≤3 animated sub-elements per icon. Respect
     prefers-reduced-motion: every anim-* class must be inside
     the reduced-motion disable block.
4.5  Related verbs must be distinguishable by BOTH speed and
     posture (teči 0.35s sprint lean vs hoditi 0.6s upright).

========================================================
5. MEANING & AMBIGUITY
========================================================
5.1  The icon must read as the WORD, not the scene: kruh is a
     loaf, not a bakery. One subject per icon; plurality is
     composed in code, never drawn.
5.2  Known ambiguity classes to flag for native review
     (nativeReviewFlag=y in the ledger): specific-vs-generic
     (kruh/štruca), sense splits (kolo bicycle/wheel, luč
     lamp/light), gesture icons with cultural readings, any
     food/dress item with a Slovenian-specific canonical form.
5.3  When in doubt between a clever icon and an obvious icon,
     choose the obvious one. Falling speed is the enemy of wit.

========================================================
6. PLURALITY COMPOSITION (code-side, for reference)
========================================================
count 2: two copies, scale .62/.68, side-by-side slight overlap.
count 3: cluster, scales .50–.56. Size variation is deliberate
so groups read as counted objects, not patterns. Count-3 may
render in an enlarged tile if playtesting demands.

========================================================
7. PRODUCTION & QA
========================================================
7.1  Batch size 25–35 icons per session, themed. Every batch
     ships with a regenerated review sheet GENERATED FROM THE
     GAME'S OWN DATA (no hand-maintained copies).
7.2  Ledger before assets; assets approved before a word ships.
7.3  Automated gates per batch (blocking): every pool key has an
     icon; no orphan number-forms; no duplicate keys; syntax
     parse; contrast scan for rule 2.1 violations (dark colours
     outside a light-fill context are listed and must be
     justified or fixed).
7.4  Number forms accompany every countable noun in the batch,
     explicitly marked UNVERIFIED until the native review queue
     clears them.

END OF STYLE GUIDE v1
