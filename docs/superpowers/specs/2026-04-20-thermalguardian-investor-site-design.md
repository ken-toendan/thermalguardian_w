# Thermal Guardian — Investor Landing Site (Design Spec)

**Date:** 2026-04-20
**Owner:** ken-toendan (Yumei)
**Target deploy:** `https://ken-toendan.github.io/thermalguardian`
**Context deadline:** iCAN 2026 Japan Preliminary — 2026-04-26 (six days out)
**Second-brain anchor:** [[ThermalGuardian Investor Site]] (parent: [[ThermalGuardian]])

---

## 1. Purpose

A single-page public website for Thermal Guardian (main project: [[ThermalGuardian]]) that an investor, conference visitor, or academic collaborator can open cold and understand in under two minutes: what the system is, why it matters, how it works at a surface level, who built it, and how to reach the team. Copy is derived from the existing [[ThermalGuardian iCAN 2026 Briefing]] and booth script — no new pitch content invented.

**Tone:** clinical, trustworthy, confident. Not alarmist, not gimmicky.

## 2. Goals

- Communicate the problem (19,000 annual Japanese bath deaths) and why existing solutions are insufficient.
- Give a high-level explanation of the system without exposing implementation detail, BOM, or firmware.
- Surface three differentiators (multi-modal sensing, stage-aware algorithm, private-by-design).
- Establish credibility (HEALTHINF 2026 publication, iCAN 2026 presentation).
- Provide four team member contact placeholders and a primary team contact.
- Ship to GitHub Pages before iCAN 2026.

## 3. Non-goals

- No BOM, parts cost, supplier list, or sourcing detail.
- No firmware snippets, MQTT topic strings, or system credentials.
- No patient/user dashboard login or live data preview.
- No blog, docs portal, or multi-page information architecture.
- No custom domain (use `ken-toendan.github.io/thermalguardian` for launch).
- No backend. Contact is `mailto:` only.

## 4. Audience

Primary: **investors and conference visitors** at iCAN 2026 who will scan the page on a phone or laptop in under two minutes.
Secondary: **academic collaborators** looking for a credible landing reference from HEALTHINF-related citations.

## 5. Tech choices

| Layer | Choice | Rationale |
|---|---|---|
| Approach | Pure static HTML + CSS + vanilla JS | Zero build step; edits are file-open-save-commit; ships in hours. |
| JS | ~20 lines for smooth-scroll nav + mobile menu toggle | No framework, no dependencies. |
| Fonts | DM Sans (display) + Inter (body), served from Google Fonts CDN | Standard pair, good clinical feel, both free. |
| Hosting | GitHub Pages, `main` branch root | Serves static HTML natively, no Actions workflow needed. |
| Repo | `github.com/ken-toendan/thermalguardian` (new, public) | Dedicated repo per A earlier. |
| Build/CI | None for launch | If the site later needs image optimization or a build step, revisit. |

## 6. Visual system

### Palette

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#11192b` | Headings, body text, primary buttons, footer background, iconography |
| `--cream` | `#f7f5ef` | Page background, section fills, card surfaces |
| `--orange` | `#ff751f` | Accent — kickers, stat highlights, dot markers, CTA arrows; roughly 10% of any viewport |
| `--ink-60` | `rgba(17,25,43,0.6)` | Secondary text, nav labels |
| `--ink-20` | `rgba(17,25,43,0.15)` | Hairline borders, dividers |

### Typography

- **Display (DM Sans 700–800):** hero headline, section headings. Tight tracking (`-0.02em`) on the hero.
- **Body (Inter 400–500):** paragraphs, nav labels, card copy, buttons. Line-height 1.55 for body.
- **Kickers (Inter 700, uppercase, 0.18em tracking):** orange chips above each section headline.

### Layout

- Max content width **1120 px**, horizontal padding **20 px** (mobile) → **56 px** (≥ 1024 px).
- Vertical section rhythm: **96 px** top/bottom on desktop, **64 px** on mobile.
- Hero headline cap ~ **640 px** width for line-length control.

### Responsive

- Single breakpoint at **768 px**.
- Below 768 px: nav collapses to a hamburger, grids collapse to single column, section padding reduced.

## 7. Content architecture — 8 sections

### 7.1 Hero
- Brand mark: `⊕ Thermal Guardian` (placeholder monogram; swap when user provides logo).
- Kicker: **PREVENTING SILENT BATHROOM DEATHS**
- Headline: *A wearable safety system for elderly bathing — built to prevent 19,000 silent deaths every year.* (Orange accent on "19,000".)
- Subhead: *Multi-modal sensing. Stage-aware safety logic. Runs privately, locally, and alerts caregivers the moment things go wrong.*
- Primary CTA: "Request a briefing" → anchor to `#contact`.
- Secondary CTA: "See how it works" → anchor to `#how-it-works`.
- Footer strip (hairline above): three bullets — HEALTHINF 2026 · iCAN 2026 · R&D since Oct 2024.

### 7.2 The Problem
- Headline: *A silent crisis in Japanese homes.*
- Three stat tiles across: **19,000** deaths/year · **90%** elderly (65+) · **4×** traffic deaths.
- Three risk cards (row of three, wraps on mobile):
  - **Physiological** — blood-pressure swings, heatstroke, cardiac stress.
  - **Kinematic** — fainting, slipping, silent drowning.
  - **Environmental** — sudden temperature changes ("heat shock").
- Closing line: *Response window is 3–4 minutes to brain damage, 4–6 to death. Reaction isn't enough — prevention is.*

### 7.3 Why Existing Solutions Fall Short
- Headline: *Most systems watch one thing. Bathing accidents happen when three fail together.*
- Three tiles: **Body-only monitors** · **Motion-only cameras** · **Room-only thermometers** — each with a one-line blind spot.
- Closing: *We combine all three, stage-aware.*

### 7.4 How It Works
- Headline: *Three layers, one local hub.*
- Custom inline SVG diagram (not the poster PNG). Node labels only:
  - Two parallel inputs — **Waterproof wearable** (upper arm) and **Bathroom + changing-room sensors** — both feed **Raspberry Pi hub**. Hub feeds **Caregiver app (web/mobile)**. A dashed line from the app branches to **Emergency services** as a fallback.
  - Style: ink nodes on cream, orange solid arrows for the primary flow, subtle dashed line for the fallback path.
- Three short bullets below:
  1. Sensors read body and environment continuously.
  2. The local hub interprets context and confirms risk on-device — no camera, no cloud dependency.
  3. Caregivers get alerts instantly; emergency services are a fallback when nobody is reachable.

### 7.5 What Makes It Different
- Headline: *Three things set Thermal Guardian apart.*
- Three cards with icon tile, bold title, and one paragraph:
  - **Multi-modal sensing** — body, motion, and environment combined, not any one in isolation.
  - **Stage-aware safety** — the system understands each phase of bathing (pre-bath, immersion, post-exit) and adjusts its thresholds accordingly.
  - **Private by design** — no cameras, processing runs locally, cloud link is secured and optional.

### 7.6 Validation
- Headline: *Real research. Real traction.*
- Horizontal three-item strip:
  - **HEALTHINF 2026** — paper presented at the international health-informatics conference (BIOSTEC joint track).
  - **iCAN 2026 Japan Preliminary** — booth on 2026-04-26.
  - **R&D since Oct 2024** — 18 months of iteration; currently v3.1 with hardware deployed.

### 7.7 Team
- Headline: *The people behind Thermal Guardian.*
- Four cards on a row (wraps 2×2 on mobile):
  - Each card: circular photo placeholder (ink outline on cream), **[Name placeholder]**, single contact line (`[email/handle placeholder]`).
  - No role labels — per explicit user decision.
- Four placeholder entries labeled `Member 1`–`Member 4`; user will swap in real names + contacts before launch.

### 7.8 Contact
- Headline: *Talk to us.*
- Left column: short paragraph inviting briefing / partnership / press requests.
- Right column:
  - Primary email: `hello@thermalguardian.example` (placeholder, ink-on-cream button that opens `mailto:`).
  - GitHub link: `github.com/ken-toendan/thermalguardian`.
  - Physical note: *Tokyo, Japan* (placeholder; confirm before launch).
- Footer below: `© 2026 Thermal Guardian · All rights reserved.`

## 8. Assets

| Asset | Plan |
|---|---|
| System diagram | Hand-authored inline SVG at build time. Not the poster PNG. |
| Hero figure | No photo in hero — typography-first. |
| Logo mark | Temporary `⊕ Thermal Guardian` text+monogram. User will hand off a real logo file; swap by replacing a single SVG in `/assets/brand/`. |
| Favicon | Generated from the temporary monogram — single SVG favicon + 32×32 PNG fallback. |
| Open Graph image | Auto-generated `og.png` 1200×630 with hero headline on cream + orange accent. Manually exported from an `og.html` template. |
| Photos | Team section uses circular placeholder silhouettes until user provides portraits. |
| Fonts | Google Fonts `<link>`: DM Sans 500/700/800 + Inter 400/500/700. |

## 9. File structure

```
thermalguardian/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── brand/
│   │   ├── logo.svg            # temp monogram, swappable
│   │   └── favicon.svg
│   └── social/
│       ├── og.html             # template used once to export og.png
│       └── og.png
├── README.md
├── LICENSE                     # MIT (matches user pattern)
└── .nojekyll                   # tells GH Pages to skip Jekyll
```

Single `index.html` with the How-It-Works SVG inlined directly (so palette CSS variables can style it via `currentColor`). Single `styles.css` (no preprocessor). CSS variables carry the palette and spacing tokens. `script.js` handles only: smooth-scroll anchor nav and mobile menu toggle. No scroll animations, no tracking scripts.

## 10. Deployment

1. Create `github.com/ken-toendan/thermalguardian` (public).
2. Push `main` branch with the files above.
3. Settings → Pages → Source = "Deploy from a branch" → Branch = `main` → Folder = `/ (root)` → Save.
4. First publish typically takes ~1 minute. URL: `https://ken-toendan.github.io/thermalguardian`.
5. No GitHub Actions workflow needed.
6. Every future edit = commit to `main`; GH Pages auto-republishes.

## 11. Accessibility + SEO basics

- Semantic HTML: `<header>`, `<main>`, `<section>` per content area, `<nav>`, `<footer>`.
- All images have `alt`; decorative icons use `aria-hidden="true"`.
- Color contrast: ink on cream ≥ 14:1; orange on cream ≥ 4:1 (verify for body-size orange text — if below, only use orange at display sizes or on ink).
- `<meta name="description">` from the hero subhead.
- Open Graph + Twitter card meta tags pointing at `og.png`.
- `lang="en"` on `<html>`.
- Mobile viewport meta tag.

## 12. Placeholders to fill before public launch

These are baked into the design as clearly marked TODO slots:

- [ ] Real logo SVG (replace `/assets/brand/logo.svg`).
- [ ] Four team member names + contact handles (replace `Member 1–4`).
- [ ] Primary team contact email (replace `hello@thermalguardian.example`).
- [ ] Physical location (replace or remove `Tokyo, Japan`).
- [ ] Confirmed iCAN 2026 booth location line (optional, only if assigned).

## 13. Open questions

None blocking. All design-level decisions are resolved. Content placeholders listed in Section 12 can be swapped at any point after launch.

## 14. Success criteria

- Page renders correctly on current Chrome, Safari, Firefox, Edge (desktop + iOS Safari + Chrome Android).
- Hero headline is readable on a 375 px-wide viewport without horizontal scroll.
- All eight sections are present, in the order above, with real copy (no lorem ipsum).
- Deployed `.github.io/thermalguardian` URL returns 200, renders within 2 seconds on a cold cache.
- User can swap any placeholder (logo, names, email) with a single file edit each.

## 15. Related (second brain)

Wikilinks resolve when this spec is opened from an Obsidian vault that contains the second-brain vault (`C:\Users\yumei\ObsidianVault\second-brain\`).

- [[ThermalGuardian Investor Site]] — synthesis page for this sub-project (parent of this spec in the knowledge graph).
- [[ThermalGuardian]] — canonical project page; tech stack, architecture, session timeline, open threads.
- [[ThermalGuardian iCAN 2026 Briefing]] — source of the pitch copy (problem stats, medical background, three novelties).
- [[Arthur akaiduz]] — project creator; candidate for one of the four team cards.
- [[projects/_index|Projects]] — wiki index; this sub-project is listed under ThermalGuardian.
- [[areas/Academic]] — KUAS ubicomp lab context.
