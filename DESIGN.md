---
name: Data Solutions Group
description: A live build-log landing page — services as git commits, process as a deploy pipeline, contact as a terminal command
colors:
  circuit-black: "#050706"
  panel-black: "#0C1310"
  trace-line: "#1C2A23"
  trace-line-strong: "#29392F"
  signal-green: "#00EB7A"
  signal-teal: "#00F8D2"
  text-primary: "#EAF3EC"
  text-dim: "#9FB3A8"
  text-faint: "#7E9689"
typography:
  display:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)"
    fontWeight: 600
    letterSpacing: "-0.015em"
  commit-title:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.4rem)"
    fontWeight: 600
    letterSpacing: "-0.01em"
  command:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)"
    fontWeight: 500
    letterSpacing: "-0.01em"
  hero-subtitle:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  button-large:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1.15rem"
    fontWeight: 500
  base:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  mono-label-md:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.95rem"
    fontWeight: 400
  mono-label-sm:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.9rem"
    fontWeight: 500
  mono-label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.01em"
  mono-label-xs:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
rounded:
  sm: "2px"
  md: "3px"
  pill: "50%"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  section-y: "clamp(4.5rem, 10vw, 8rem)"
components:
  cmd-button:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "0.9rem 1.4rem"
  cmd-button-hover:
    backgroundColor: "{colors.signal-green}"
    textColor: "{colors.circuit-black}"
  header-cta:
    backgroundColor: "transparent"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.9rem"
---

# Design System: Data Solutions Group

## Overview

**Creative North Star: "Build Log en vivo"**

The page is staged as a live software build session, not a marketing brochure. Every section borrows a real software-engineering artifact — a boot sequence, a git commit log, a deploy pipeline, a terminal prompt — and puts DSG's actual services inside that artifact's own grammar. The visitor doesn't read claims about capability; they watch a build happen and understand DSG *builds things* by the vocabulary alone.

This direction was chosen deliberately against the category default: a gradient hero over an icon-plus-heading service grid, the arrangement nearly every software-agency site ships. Monospace and terminal language are earned here, not decorative — they stand for real code, commands, and commit metadata, never for a generic "tech" mood.

The world is anchored to the DSG mark itself: the green-to-teal gradient and the circuit trace already living inside the logo's "D" are extended outward as a live particle network — small connected nodes drifting behind the entire page — so the identity reads as one continuous, breathing system rather than a logo pasted onto an unrelated layout.

**Key Characteristics:**
- True-black ground with a single functional green/teal accent family, never decorative color
- IBM Plex Sans for narrative type, IBM Plex Mono reserved for anything that is genuinely code, data, or a command
- A live, connected particle network as the page's sitewide structural motif, not a static background texture
- Content structured as sequential software artifacts (boot → commits → pipeline stages → live) rather than stacked marketing sections

## Colors

Near-total black with one accent family pulled directly from the logo's own gradient; every non-monochrome color on the page is that accent, used with intent.

### Primary
- **Signal Green** (`#00EB7A`): the single functional accent — CTA borders and hover fills, active pipeline stages, success-state boot lines, link and focus color. Sampled directly from the logo's wordmark.

### Secondary
- **Signal Teal** (`#00F8D2`): the cooler end of the logo's own gradient. Reserved for commit hashes and the "en vivo" (live) pipeline stage label — a second signal color, not a second brand color, used to mark "this specific thing is the endpoint."

### Neutral
- **Circuit Black** (`#050706`): page ground. Near-black rather than pure `#000` so the accent colors keep a hair of warmth against it.
- **Panel Black** (`#0C1310`): the one raised surface in the system, used solely for the "Todo bajo un mismo equipo" positioning section to separate it from the surrounding commit/pipeline flow.
- **Text Primary** (`#EAF3EC`): headings and primary body copy.
- **Text Dim** (`#9FB3A8`): secondary body copy (subtitles, commit descriptions, stage descriptions).
- **Text Faint** (`#7E9689`): tertiary/meta text only — boot-sequence lines, commit hashes' "rama" label, footer meta. Tinted from the accent hue rather than gray, per the system's own contrast rule.
- **Trace Line** (`#1C2A23`) / **Trace Line Strong** (`#29392F`): hairline dividers and the PCB trace/connector strokes, at rest.

### Named Rules
**The One Signal Rule.** Green (and its teal counterpart) is the *only* color in the system besides black and the text neutrals. It never appears as decoration — only on things that are actionable, active, or literally "live."

## Typography

**Display / Body Font:** IBM Plex Sans (with `-apple-system, "Segoe UI", sans-serif` fallback)
**Mono Font:** IBM Plex Mono (with `ui-monospace, "SFMono-Regular", Menlo, monospace` fallback)

**Character:** IBM Plex was built for technical documentation, so the pairing carries an authentic engineering register instead of costuming a generic sans as "techy" — Plex Sans reads narrative content, Plex Mono is reserved for content that is structurally code-like (commands, commit hashes, stage labels, timestamps).

### Type scale

Every font-size in the codebase resolves to one of twelve CSS custom properties (`--fs-1` … `--fs-7`, plus five named fluid roles) defined once in `css/style.css`'s `:root` block — there are no unmapped literal sizes. Two static sizes (`.85rem`, `.9rem`) are intentionally shared across multiple unrelated small labels (a former `.82rem` on commit metadata was folded into the `.85rem` step) rather than kept as one-off near-duplicates.

| Token | Value | Used for |
|---|---|---|
| `--fs-display` | `clamp(2.25rem, 5.6vw, 4.25rem)` | Hero headline (600 weight, 1.08 line-height, -0.02em) |
| `--fs-heading` | `clamp(1.75rem, 3.4vw, 2.5rem)` | Stance section headline (600, -0.015em) |
| `--fs-commit-title` | `clamp(1.15rem, 2vw, 1.4rem)` | Commit titles in the services log (600, -0.01em) |
| `--fs-command` | `clamp(1.1rem, 2.2vw, 1.5rem)` | Section command headings (`$ git log --servicios`) (mono, 500) |
| `--fs-hero-subtitle` | `clamp(1.05rem, 1.6vw, 1.2rem)` | Hero subtitle (400, 1.6 line-height) |
| `--fs-7` | `1.15rem` | Large CTA button (`.cmd-button--large`) |
| `--fs-6` | `1.05rem` | Body copy: stance paragraph, contact lede. Measure capped at 68ch |
| `--fs-5` | `1rem` | Page base size; default CTA button |
| `--fs-4` | `0.95rem` | Text links, pipeline stage descriptions |
| `--fs-3` | `0.9rem` | Header CTA pill |
| `--fs-2` | `0.85rem` | Mono meta labels: boot lines, commit hash/branch line, pipeline stage names, footer meta |
| `--fs-1` | `0.78rem` | Footer legal line |

### Named Rules
**The Command Heading Rule.** Section headings are literal shell commands (`$ git log --servicios`, `$ dsg deploy --pipeline`, `$ contactar --whatsapp`) set in mono. A heading is never paired with a separate label/eyebrow above it — the command line does both jobs at once.
**The One Ramp Rule.** Every font-size is one of the twelve tokens above. A new size need is resolved by picking the nearest existing step before adding a new one, and any genuinely new step gets added to this table in the same change.

## Layout

Single-column, vertical-scroll narrative — there is no multi-column grid because the page is a sequential log, not a dashboard. Content width is capped per section (hero copy ≤ 46rem, commit body ≤ 68ch) inside a fluid outer gutter (`clamp(1.25rem, 5vw, 4rem)`).

Section rhythm uses one spacing scale (`--section-y: clamp(4.5rem, 10vw, 8rem)`) for all vertical section padding, and every heading carries more space above it than below it. The pipeline stepper is the one layout that changes shape responsively: a 5-column row connected by a horizontal trace above ~900px, collapsing to a single vertical column connected by a vertical trace below it — the connector rotates with the content, it doesn't just reflow.

## Elevation & Depth

Flat by design — there are no cards, panels, or shadowed containers as content scaffolding. The two depth cues that exist are functional, not decorative: the fixed header gains a `backdrop-filter: blur(10px)` + semi-opaque fill only after scroll (so it stays legible over content, not for ambient polish), and the primary CTA button gains a soft green glow on hover (`box-shadow: 0 6px 20px rgba(0,235,122,.28)`) as its only state feedback beyond the fill swap.

### Shadow Vocabulary
- **CTA hover glow** (`box-shadow: 0 6px 20px rgba(0,235,122,.28)`): the primary command-button's only elevation change, signaling "this is about to execute."

### Named Rules
**The Flat Log Rule.** Nothing in the log, pipeline, or stance sections casts a shadow or sits on a raised card. Depth is reserved for the header (functional legibility) and the CTA (state feedback) — never for grouping content.

## Shapes

Sharp-to-barely-rounded throughout (`2–3px` radius on buttons and the fixed-header pill) — the system deliberately avoids soft/rounded "friendly SaaS" geometry in favor of the harder edges of a terminal window and a PCB trace. The one true circle in the system is the pipeline stage dot (`border-radius: 50%`), styled explicitly as a solder-point/via, not a generic bullet.

## Components

### Buttons (`cmd-button`)
- **Shape:** 3px radius, 1.5px solid green border, transparent fill at rest.
- **Primary (`cmd-button`):** mono type, `$` glyph in green + label in primary text color; on hover, fills solid green with black text and gains the CTA glow shadow. Carries a blinking block cursor (`.cursor`) as a literal terminal cue, disabled under `prefers-reduced-motion`.
- **Header CTA (`header-cta`):** same command vocabulary at smaller scale, neutral border at rest, brightens to green border + primary text on hover — deliberately quieter than the primary CTA so it doesn't compete with it.

### Log Entries (signature component)
Each service renders as a git commit: teal hash + "rama: principal" meta line (mono, small), a title in the `feat(scope): message` convention, and a body line. Entries are separated by hairline dividers only — no card, no background change. This is the system's most distinctive pattern and should be reused for any future "what we offer" content rather than defaulting to a card grid.

### Pipeline Stepper (signature component)
Named stages (not numbered) connected by a trace line that fills green left-to-right (desktop) or top-to-bottom (mobile) on scroll-into-view; each stage is a solder-point circle that goes from hollow/muted to filled/green as the trace reaches it. The "en vivo" (live) terminal stage uses teal instead of green to mark it as the sequence's endpoint.

### Navigation
Fixed single-row header: wordmark left, one command-style CTA right. Transparent over the hero, gains a blurred dark fill only past the first scroll tick. No dropdown, no hamburger — the page has one CTA and one job.

### Particle Network Background (signature component)
A `particles.js` canvas (`#particles-js`, self-hosted at `js/vendor/particles.min.js`, `js/particles-init.js`), fixed to the full viewport behind every section — it is the page's connective tissue, replacing the earlier per-section static SVG trace linework with one continuous live circuit that runs the entire site. ~46 small green/teal dots (`#00EB7A` / `#00F8D2`) drift slowly and link with thin lines (16% opacity) when close, echoing the trace-and-node language already in the logo and the pipeline stepper. Hover draws live lines to the cursor ("grab"); click seeds a few new points ("push") — the only sitewide pointer-driven motion in the system. Disabled to a smaller, static point field under `prefers-reduced-motion`. Sections that need to visually separate from the flow (`.stance`) use a semi-transparent panel color rather than opaque, so the network still reads faintly through — no section fully hides it.

## Do's and Don'ts

### Do:
- **Do** treat monospace as functional: reserve it for commands, hashes, timestamps, and labels — never as a "technical-looking" costume on narrative copy.
- **Do** let the particle network stay the page's one connective background device; a new section should adjust its opacity/panel treatment to let particles show through rather than adding a competing background pattern.
- **Do** keep green/teal as the only chromatic colors in the system; every new accent need should be resolved with weight, size, or space instead.
- **Do** phrase section headings as literal commands when the content is inherently sequential or process-like; let the command carry both label and heading.

### Don't:
- **Don't** introduce card grids for services, features, or team content — the git-log pattern is this system's answer to "list of things," and a card grid would contradict the North Star.
- **Don't** add a kicker/eyebrow label above any heading; the command-heading pattern already does that job.
- **Don't** invent metrics, client counts, or testimonial content — none exist yet, and the system currently carries zero fabricated proof. If real evidence arrives, add it as its own commit-log-style entry rather than a stats band.
- **Don't** round corners past the current 2–3px scale; soft/pill geometry belongs to the "friendly SaaS" world this system explicitly rejects.
