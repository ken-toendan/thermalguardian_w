# ThermalGuardian Investor Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a single-page investor landing site for Thermal Guardian to `https://ken-toendan.github.io/thermalguardian` before iCAN 2026 (2026-04-26).

**Architecture:** Pure static HTML + CSS + minimal vanilla JS. One `index.html`, one `styles.css`, one `script.js`, a few inline/embedded SVG assets. No build step, no dependencies, no backend. GitHub Pages serves `main` branch root directly.

**Tech Stack:** HTML5 · CSS3 (custom properties for palette/spacing) · Vanilla ES6 JS · Inline SVG · Google Fonts (DM Sans + Inter) · GitHub Pages.

---

## File Structure

Everything created lives under the working tree: `C:\Users\yumei\projects\ThermalGuardian-website\`.

```
thermalguardian/
├── index.html                     # single page, 8 sections + inline SVG diagram
├── styles.css                     # palette tokens, typography, sections, responsive
├── script.js                      # ~30 lines: smooth-scroll + mobile menu toggle
├── assets/
│   ├── brand/
│   │   ├── logo.svg               # placeholder ⊕ monogram, swappable
│   │   └── favicon.svg            # same monogram at 32×32
│   └── social/
│       ├── og.html                # local-only template used to export og.png
│       └── og.png                 # generated once, committed
├── README.md                      # what the repo is + deploy notes
├── LICENSE                        # MIT
├── .nojekyll                      # skip Jekyll processing on GH Pages
└── .gitignore                     # already exists from brainstorm (.superpowers/)
```

Each file has one job. `styles.css` stays in one file because the site is small enough (≈600 lines of CSS) that splitting would just add navigation friction.

---

## Tasks

### Task 1: Scaffold repo structure

**Files:**
- Create: `index.html` (empty)
- Create: `styles.css` (empty)
- Create: `script.js` (empty)
- Create: `.nojekyll` (empty, zero bytes)
- Create: `LICENSE`
- Create: `README.md`
- Create: `assets/brand/` (directory)
- Create: `assets/social/` (directory)

- [ ] **Step 1: Create directories and empty files**

Run from `C:\Users\yumei\projects\ThermalGuardian-website\`:

```bash
mkdir -p assets/brand assets/social
touch index.html styles.css script.js .nojekyll
```

- [ ] **Step 2: Write the MIT LICENSE**

Create `LICENSE`:

```
MIT License

Copyright (c) 2026 Thermal Guardian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- [ ] **Step 3: Write the README**

Create `README.md`:

```markdown
# Thermal Guardian — Investor Site

Public single-page landing site for [Thermal Guardian](https://github.com/KUAS-ubicomp-lab/ThermalGuardian), a wearable IoT system for preventing bath-related accidents in elderly care.

**Live:** https://ken-toendan.github.io/thermalguardian

## What this is

Static marketing page for investors, conference visitors, and academic collaborators. Built to explain the project in under two minutes without exposing BOM, firmware, or system credentials.

## Local preview

No build step. Open `index.html` in any browser, or run a dev server:

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy

Pushed to `main` branch → GitHub Pages serves from `/` (root). No Actions workflow. `.nojekyll` disables Jekyll processing.

## Tech

HTML, CSS (custom properties), vanilla JS. DM Sans + Inter via Google Fonts. Inline SVG for the system diagram.

## License

MIT — see `LICENSE`.
```

- [ ] **Step 4: Verify structure**

Run `ls -la` and check: `index.html`, `styles.css`, `script.js`, `.nojekyll`, `LICENSE`, `README.md` all exist; `assets/brand/` and `assets/social/` exist.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: scaffold project structure"
```

---

### Task 2: HTML skeleton with head and empty body

**Files:**
- Modify: `index.html` (write full skeleton)

- [ ] **Step 1: Write the full skeleton**

Replace the empty `index.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thermal Guardian — Preventing silent bathroom deaths</title>
  <meta name="description" content="A wearable safety system for elderly bathing — built to prevent the 19,000 silent deaths that happen in Japanese bathtubs every year.">

  <!-- Open Graph -->
  <meta property="og:title" content="Thermal Guardian — Preventing silent bathroom deaths">
  <meta property="og:description" content="Multi-modal wearable + IoT safety for elderly bathing. Built to prevent 19,000 bath-related deaths in Japan each year.">
  <meta property="og:image" content="https://ken-toendan.github.io/thermalguardian/assets/social/og.png">
  <meta property="og:url" content="https://ken-toendan.github.io/thermalguardian">
  <meta property="og:type" content="website">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Thermal Guardian">
  <meta name="twitter:description" content="Multi-modal wearable + IoT safety for elderly bathing.">
  <meta name="twitter:image" content="https://ken-toendan.github.io/thermalguardian/assets/social/og.png">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/brand/favicon.svg">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700;800&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <!-- nav goes here (Task 4) -->
  </header>

  <main>
    <!-- hero (Task 5) -->
    <!-- problem (Task 6) -->
    <!-- wedge (Task 7) -->
    <!-- how-it-works (Task 8) -->
    <!-- novelties (Task 9) -->
    <!-- validation (Task 10) -->
    <!-- team (Task 11) -->
    <!-- contact (Task 12) -->
  </main>

  <footer class="site-footer">
    <!-- footer content (Task 12) -->
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in Chrome. Expected: blank page, no console errors except a 404 for `favicon.svg` (acceptable until Task 15). Check DevTools → Network → fonts load from `fonts.gstatic.com`.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: HTML skeleton with meta tags, fonts, semantic landmarks"
```

---

### Task 3: CSS foundation (tokens, reset, typography, layout primitives)

**Files:**
- Modify: `styles.css` (write the full foundation)

- [ ] **Step 1: Write the CSS foundation**

Replace `styles.css` with:

```css
/* ─── Tokens ─────────────────────────────────────────── */
:root {
  --ink: #11192b;
  --cream: #f7f5ef;
  --orange: #ff751f;

  --ink-80: rgba(17, 25, 43, 0.8);
  --ink-60: rgba(17, 25, 43, 0.6);
  --ink-40: rgba(17, 25, 43, 0.4);
  --ink-20: rgba(17, 25, 43, 0.15);
  --ink-10: rgba(17, 25, 43, 0.08);

  --font-display: "DM Sans", -apple-system, "Segoe UI", system-ui, sans-serif;
  --font-body: "Inter", -apple-system, "Segoe UI", system-ui, sans-serif;

  --content-max: 1120px;
  --pad-x: 20px;
  --section-y: 96px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}

/* ─── Reset ──────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6, p, ul, ol { margin: 0; padding: 0; }
ul, ol { list-style: none; }
a { color: inherit; text-decoration: none; }
img, svg { display: block; max-width: 100%; }
button { font: inherit; background: none; border: none; cursor: pointer; }

/* ─── Base typography ────────────────────────────────── */
body {
  background: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--ink);
}

/* ─── Layout primitives ──────────────────────────────── */
.container {
  width: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding-left: var(--pad-x);
  padding-right: var(--pad-x);
}

.section {
  padding-top: var(--section-y);
  padding-bottom: var(--section-y);
}

.section--alt {
  background: #ffffff;
}

.kicker {
  display: inline-block;
  padding: 4px 10px;
  background: var(--orange);
  color: var(--cream);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border-radius: 3px;
}

.section-head {
  margin-bottom: 48px;
  max-width: 720px;
}

.section-head h2 {
  margin-top: 16px;
  font-size: 36px;
}

.section-head p {
  margin-top: 12px;
  font-size: 17px;
  color: var(--ink-60);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 14px;
  transition: transform 0.15s ease, background 0.15s ease;
}

.btn--primary {
  background: var(--ink);
  color: var(--cream);
}

.btn--primary:hover {
  transform: translateY(-1px);
  background: #1d2a45;
}

.btn--ghost {
  color: var(--ink);
  border: 1.5px solid var(--ink-20);
}

.btn--ghost:hover {
  border-color: var(--ink);
}

.btn--ghost .arrow { color: var(--orange); margin-left: 4px; }
```

- [ ] **Step 2: Verify**

Reload `index.html` in the browser. Expected: cream background (`#f7f5ef`), ink text when content is added, no console errors. DevTools → Elements → `<body>` should show the computed font as "Inter".

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: CSS foundation — tokens, reset, typography, layout primitives"
```

---

### Task 4: Header + nav

**Files:**
- Modify: `index.html` (replace the `<header class="site-header">` block)
- Modify: `styles.css` (append header + nav styles)

- [ ] **Step 1: Write the header HTML**

In `index.html`, replace the `<header class="site-header">…</header>` block with:

```html
<header class="site-header">
  <div class="container site-header__inner">
    <a href="#top" class="brand" aria-label="Thermal Guardian home">
      <span class="brand__mark" aria-hidden="true">⊕</span>
      <span class="brand__name">Thermal Guardian</span>
    </a>

    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span><span></span>
    </button>

    <nav id="site-nav" class="site-nav" aria-label="Main">
      <a href="#problem">The Problem</a>
      <a href="#how-it-works">System</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>
```

Also add `id="top"` to the `<body>` tag so `href="#top"` resolves:

Change `<body>` to `<body id="top">`.

- [ ] **Step 2: Append header CSS to `styles.css`**

Append at the end of `styles.css`:

```css
/* ─── Site header ────────────────────────────────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247, 245, 239, 0.92);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid var(--ink-10);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
}

.brand__mark {
  color: var(--orange);
  font-size: 18px;
  line-height: 1;
}

.site-nav {
  display: flex;
  gap: 28px;
}

.site-nav a {
  font-size: 14px;
  color: var(--ink-60);
  transition: color 0.15s ease;
  padding: 6px 0;
}

.site-nav a:hover { color: var(--ink); }

.nav-toggle {
  display: none;
  width: 40px;
  height: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: var(--radius-sm);
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--ink);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: sticky header with `⊕ Thermal Guardian` on the left (orange mark, ink name), four nav links on the right with hover color change. No hamburger yet (responsive wiring comes in Task 14).

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: sticky site header with brand + nav"
```

---

### Task 5: Hero section

**Files:**
- Modify: `index.html` (replace the `<!-- hero (Task 5) -->` comment)
- Modify: `styles.css` (append hero styles)

- [ ] **Step 1: Add hero HTML**

In `index.html`, replace `<!-- hero (Task 5) -->` with:

```html
<section class="hero">
  <div class="container hero__inner">
    <span class="kicker">Preventing silent bathroom deaths</span>
    <h1 class="hero__headline">
      A wearable safety system for elderly bathing — built to prevent
      <span class="hero__accent">19,000</span>
      silent deaths every year.
    </h1>
    <p class="hero__sub">
      Multi-modal sensing. Stage-aware safety logic. Runs privately, locally,
      and alerts caregivers the moment things go wrong.
    </p>
    <div class="hero__ctas">
      <a href="#contact" class="btn btn--primary">Request a briefing</a>
      <a href="#how-it-works" class="btn btn--ghost">See how it works <span class="arrow">→</span></a>
    </div>
    <ul class="hero__meta">
      <li><span class="dot"></span>Presented at HEALTHINF 2026</li>
      <li><span class="dot"></span>iCAN 2026 · Apr 26</li>
      <li><span class="dot"></span>R&amp;D since Oct 2024</li>
    </ul>
  </div>
</section>
```

- [ ] **Step 2: Append hero CSS**

Append to `styles.css`:

```css
/* ─── Hero ──────────────────────────────────────────── */
.hero {
  padding-top: 88px;
  padding-bottom: 96px;
}

.hero__inner { max-width: 820px; }

.hero__headline {
  margin-top: 18px;
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.03;
}

.hero__accent { color: var(--orange); }

.hero__sub {
  margin-top: 20px;
  max-width: 560px;
  font-size: 18px;
  line-height: 1.55;
  color: var(--ink-60);
}

.hero__ctas {
  display: flex;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 56px;
  padding-top: 18px;
  border-top: 1px solid var(--ink-20);
  font-size: 13px;
  color: var(--ink-60);
}

.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--orange);
  margin-right: 8px;
  vertical-align: middle;
}
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: large ink headline with "19,000" in orange, subhead in softer ink, two buttons (ink primary + ghost with orange arrow), three-bullet meta strip below a hairline.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: hero section"
```

---

### Task 6: The Problem section

**Files:**
- Modify: `index.html` (replace `<!-- problem (Task 6) -->`)
- Modify: `styles.css`

- [ ] **Step 1: Add Problem HTML**

Replace `<!-- problem (Task 6) -->` with:

```html
<section id="problem" class="section section--alt">
  <div class="container">
    <div class="section-head">
      <span class="kicker">The Problem</span>
      <h2>A silent crisis in Japanese homes.</h2>
      <p>Deaths in bathtubs are one of the most under-reported preventable risks for elderly Japanese — a cultural bathing norm colliding with aging circulatory systems.</p>
    </div>

    <ul class="stat-row">
      <li><span class="stat-row__num">19,000</span><span class="stat-row__label">deaths per year in Japan</span></li>
      <li><span class="stat-row__num">90%</span><span class="stat-row__label">of victims are 65 or older</span></li>
      <li><span class="stat-row__num">4&times;</span><span class="stat-row__label">annual Japanese traffic deaths</span></li>
    </ul>

    <h3 class="subhead">Three overlapping risk categories</h3>
    <ul class="risk-grid">
      <li class="risk-card">
        <span class="risk-card__label">Physiological</span>
        <p>Blood-pressure swings, heatstroke, cardiac stress — the body's own response to hot immersion turns hostile in older circulatory systems.</p>
      </li>
      <li class="risk-card">
        <span class="risk-card__label">Kinematic</span>
        <p>Fainting, slipping, and silent drowning. Elderly victims tend to slide under water without a struggle, so the window for rescue closes fast.</p>
      </li>
      <li class="risk-card">
        <span class="risk-card__label">Environmental</span>
        <p>Sudden cold-to-hot temperature transitions — known as "heat shock" — trigger the blood-pressure cascade that starts most fatal events.</p>
      </li>
    </ul>

    <blockquote class="pullquote">
      Response window is 3–4 minutes to brain damage, 4–6 to death. Reaction isn't enough — prevention is.
    </blockquote>
  </div>
</section>
```

- [ ] **Step 2: Append Problem CSS**

Append to `styles.css`:

```css
/* ─── Problem ──────────────────────────────────────── */
.stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px 0;
  border-top: 1px solid var(--ink-20);
  border-bottom: 1px solid var(--ink-20);
}

.stat-row li { display: flex; flex-direction: column; gap: 6px; }

.stat-row__num {
  font-family: var(--font-display);
  font-size: 54px;
  font-weight: 800;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.03em;
}

.stat-row__label {
  font-size: 13px;
  color: var(--ink-60);
  line-height: 1.4;
}

.subhead {
  margin-top: 56px;
  margin-bottom: 20px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
}

.risk-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.risk-card {
  padding: 24px;
  background: var(--cream);
  border: 1px solid var(--ink-10);
  border-radius: var(--radius-md);
}

.risk-card__label {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 10px;
}

.risk-card p {
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-80);
}

.pullquote {
  margin: 56px 0 0 0;
  padding: 24px 28px;
  background: var(--ink);
  color: var(--cream);
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
```

- [ ] **Step 3: Verify**

Reload. Expected: white section (`--alt`), three big stat numbers side-by-side with hairlines above/below, three risk cards with orange uppercase labels, pullquote in ink on cream.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: problem section — stats, risk cards, pullquote"
```

---

### Task 7: Why Existing Solutions Fall Short (wedge)

**Files:**
- Modify: `index.html` (replace `<!-- wedge (Task 7) -->`)
- Modify: `styles.css`

- [ ] **Step 1: Add wedge HTML**

Replace `<!-- wedge (Task 7) -->` with:

```html
<section id="wedge" class="section">
  <div class="container">
    <div class="section-head">
      <span class="kicker">Why existing solutions fall short</span>
      <h2>Most systems watch one thing. Bathing accidents happen when three fail together.</h2>
      <p>Existing wearables, nurse-call systems, and smart bathroom devices each solve part of the problem. None of them see how the pieces interact.</p>
    </div>

    <ul class="wedge-grid">
      <li class="wedge-card">
        <span class="wedge-card__icon" aria-hidden="true">♥</span>
        <h3>Body-only monitors</h3>
        <p>Track heart rate or SpO2, but miss the fall itself and the hot-water context that caused it.</p>
      </li>
      <li class="wedge-card">
        <span class="wedge-card__icon" aria-hidden="true">↯</span>
        <h3>Motion-only cameras</h3>
        <p>See a body go limp, but can't tell stroke from sleep, and introduce privacy problems in a bathroom.</p>
      </li>
      <li class="wedge-card">
        <span class="wedge-card__icon" aria-hidden="true">▲</span>
        <h3>Room-only thermometers</h3>
        <p>Know the water is 42 °C but don't know who's in it or whether they're still conscious.</p>
      </li>
    </ul>

    <p class="wedge-close">Thermal Guardian combines all three signals, stage-aware — so a high heart rate <em>during immersion</em> means something different than a high heart rate <em>after exit</em>.</p>
  </div>
</section>
```

- [ ] **Step 2: Append wedge CSS**

Append to `styles.css`:

```css
/* ─── Wedge ────────────────────────────────────────── */
.wedge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.wedge-card {
  padding: 28px 24px;
  background: #fff;
  border: 1px solid var(--ink-10);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}

.wedge-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: var(--orange);
  opacity: 0.85;
}

.wedge-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--ink);
  color: var(--orange);
  font-size: 18px;
  margin-bottom: 14px;
}

.wedge-card h3 {
  font-size: 17px;
  margin-bottom: 8px;
}

.wedge-card p {
  font-size: 14px;
  color: var(--ink-80);
  line-height: 1.55;
}

.wedge-close {
  margin-top: 40px;
  font-size: 16px;
  color: var(--ink-80);
  max-width: 780px;
}

.wedge-close em {
  color: var(--ink);
  font-style: normal;
  font-weight: 600;
  background: rgba(255, 117, 31, 0.12);
  padding: 0 4px;
  border-radius: 3px;
}
```

- [ ] **Step 3: Verify**

Reload. Expected: cream section, three white cards with orange top borders, ink-on-orange icon tiles, italic-replaced highlight spans in the closing line.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: wedge section — why existing solutions fall short"
```

---

### Task 8: How It Works (with inline SVG diagram)

**Files:**
- Modify: `index.html` (replace `<!-- how-it-works (Task 8) -->`)
- Modify: `styles.css`

- [ ] **Step 1: Add How It Works HTML with inline SVG**

Replace `<!-- how-it-works (Task 8) -->` with:

```html
<section id="how-it-works" class="section section--alt">
  <div class="container">
    <div class="section-head">
      <span class="kicker">How it works</span>
      <h2>Three layers. One local hub. No camera in the bathroom.</h2>
      <p>Sensors watch the body and the room. A hub in the home interprets context. Caregivers get alerts — with a fallback to emergency services if nobody is reachable.</p>
    </div>

    <div class="diagram-wrap">
      <svg class="flow-diagram" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="System flow diagram: wearable and room sensors feed a local hub, which alerts the caregiver app, with a fallback to emergency services.">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#ff751f"/>
          </marker>
          <marker id="arrow-dashed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#11192b" fill-opacity="0.4"/>
          </marker>
        </defs>

        <!-- Node: Wearable -->
        <g transform="translate(40, 40)">
          <rect width="180" height="72" rx="10" fill="#f7f5ef" stroke="#11192b" stroke-width="1.5"/>
          <text x="90" y="32" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="14" font-weight="700" fill="#11192b">Waterproof wearable</text>
          <text x="90" y="52" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#11192b" fill-opacity="0.6">wrist-worn · ESP32-S3</text>
        </g>

        <!-- Node: Room sensors -->
        <g transform="translate(480, 40)">
          <rect width="180" height="72" rx="10" fill="#f7f5ef" stroke="#11192b" stroke-width="1.5"/>
          <text x="90" y="32" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="14" font-weight="700" fill="#11192b">Room sensors</text>
          <text x="90" y="52" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#11192b" fill-opacity="0.6">bathroom + changing room</text>
        </g>

        <!-- Node: Pi hub -->
        <g transform="translate(260, 170)">
          <rect width="180" height="72" rx="10" fill="#11192b"/>
          <text x="90" y="32" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="14" font-weight="700" fill="#f7f5ef">Local hub</text>
          <text x="90" y="52" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#f7f5ef" fill-opacity="0.7">Raspberry Pi · on-device logic</text>
        </g>

        <!-- Node: App -->
        <g transform="translate(260, 280)">
          <rect width="180" height="72" rx="10" fill="#f7f5ef" stroke="#11192b" stroke-width="1.5"/>
          <text x="90" y="32" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="14" font-weight="700" fill="#11192b">Caregiver app</text>
          <text x="90" y="52" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#11192b" fill-opacity="0.6">web + mobile</text>
        </g>

        <!-- Node: Emergency (fallback) -->
        <g transform="translate(260, 360)" opacity="0.7">
          <rect width="180" height="48" rx="8" fill="#f7f5ef" stroke="#11192b" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="90" y="30" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#11192b">Emergency services (fallback)</text>
        </g>

        <!-- Arrows -->
        <path d="M130,112 L130,150 L260,200" fill="none" stroke="#ff751f" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M570,112 L570,150 L440,200" fill="none" stroke="#ff751f" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M350,242 L350,275" fill="none" stroke="#ff751f" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M350,352 L350,360" fill="none" stroke="#11192b" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#arrow-dashed)"/>
      </svg>
    </div>

    <ol class="how-steps">
      <li><strong>Sensors read body and environment continuously.</strong> Heart rate, motion, skin and air temperature, humidity — all at once, all while the user bathes.</li>
      <li><strong>The local hub interprets context and confirms risk on-device.</strong> No camera, no cloud round-trip for alert decisions. It knows whether the user is in pre-bath, immersed, or exiting, and applies thresholds accordingly.</li>
      <li><strong>Caregivers get alerts instantly.</strong> Emergency services are a fallback only when nobody is reachable — the default path is human, not 119.</li>
    </ol>
  </div>
</section>
```

- [ ] **Step 2: Append How It Works CSS**

Append to `styles.css`:

```css
/* ─── How it works ─────────────────────────────────── */
.diagram-wrap {
  margin: 0 auto 48px auto;
  max-width: 820px;
}

.flow-diagram {
  width: 100%;
  height: auto;
  display: block;
}

.how-steps {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;
  counter-reset: step;
}

.how-steps li {
  position: relative;
  padding-top: 40px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-80);
  counter-increment: step;
}

.how-steps li::before {
  content: counter(step, decimal-leading-zero);
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 800;
  color: var(--orange);
}

.how-steps li strong {
  color: var(--ink);
  font-weight: 600;
}
```

- [ ] **Step 3: Verify**

Reload. Expected: SVG diagram renders (two nodes on top → dark ink hub in middle → app below → dashed emergency fallback). Orange arrows for primary flow, dashed ink arrow for fallback. Three numbered steps below (01/02/03 in orange display font).

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: how-it-works section with inline SVG flow diagram"
```

---

### Task 9: What Makes It Different (novelties)

**Files:**
- Modify: `index.html` (replace `<!-- novelties (Task 9) -->`)
- Modify: `styles.css`

- [ ] **Step 1: Add novelties HTML**

Replace `<!-- novelties (Task 9) -->` with:

```html
<section id="novelties" class="section">
  <div class="container">
    <div class="section-head">
      <span class="kicker">What makes it different</span>
      <h2>Three things set Thermal Guardian apart.</h2>
    </div>

    <ul class="novelty-grid">
      <li class="novelty">
        <div class="novelty__num">01</div>
        <h3>Multi-modal sensing</h3>
        <p>Body, motion, and environment are combined in a single system. Most competitors pick one. We need all three to distinguish a nap from a collapse, or a hot bath from heatstroke.</p>
      </li>
      <li class="novelty">
        <div class="novelty__num">02</div>
        <h3>Stage-aware safety logic</h3>
        <p>The system recognises where you are in the bathing ritual — pre-bath, immersion, post-exit — and adjusts its thresholds for each stage. A high pulse during immersion is expected; the same pulse after exit is an alert.</p>
      </li>
      <li class="novelty">
        <div class="novelty__num">03</div>
        <h3>Private by design</h3>
        <p>No cameras. Risk decisions run on-device at the local hub. Data only leaves the home when the caregiver asks for it. Compliance and dignity, by default.</p>
      </li>
    </ul>
  </div>
</section>
```

- [ ] **Step 2: Append novelties CSS**

Append to `styles.css`:

```css
/* ─── Novelties ────────────────────────────────────── */
.novelty-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.novelty {
  padding: 32px 28px;
  background: var(--ink);
  color: var(--cream);
  border-radius: var(--radius-lg);
  position: relative;
}

.novelty__num {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--orange);
  margin-bottom: 20px;
}

.novelty h3 {
  color: var(--cream);
  font-size: 20px;
  margin-bottom: 12px;
}

.novelty p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(247, 245, 239, 0.75);
}
```

- [ ] **Step 3: Verify**

Reload. Expected: three ink-filled cards on cream, orange `01/02/03` markers, cream-on-ink text.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: novelties section — multi-modal, stage-aware, private"
```

---

### Task 10: Validation section

**Files:**
- Modify: `index.html` (replace `<!-- validation (Task 10) -->`)
- Modify: `styles.css`

- [ ] **Step 1: Add validation HTML**

Replace `<!-- validation (Task 10) -->` with:

```html
<section id="validation" class="section section--alt">
  <div class="container">
    <div class="section-head">
      <span class="kicker">Validation</span>
      <h2>Real research. Real traction.</h2>
    </div>

    <ul class="validation-row">
      <li class="validation-item">
        <div class="validation-item__label">Academic</div>
        <h3>HEALTHINF 2026</h3>
        <p>Paper presented at the international health-informatics conference (BIOSTEC joint track).</p>
      </li>
      <li class="validation-item">
        <div class="validation-item__label">Industry</div>
        <h3>iCAN 2026 Japan Preliminary</h3>
        <p>Presenting the system at the International Contest of Applications in Nano &amp; Micro Technologies, 2026-04-26.</p>
      </li>
      <li class="validation-item">
        <div class="validation-item__label">Maturity</div>
        <h3>18 months of R&amp;D</h3>
        <p>Active development since October 2024. Currently running v3.1 with hardware deployed in lab conditions.</p>
      </li>
    </ul>
  </div>
</section>
```

- [ ] **Step 2: Append validation CSS**

Append to `styles.css`:

```css
/* ─── Validation ───────────────────────────────────── */
.validation-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.validation-item {
  padding: 26px 24px;
  border: 1px solid var(--ink-10);
  border-radius: var(--radius-md);
  background: var(--cream);
}

.validation-item__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 12px;
}

.validation-item h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.validation-item p {
  font-size: 13px;
  color: var(--ink-80);
  line-height: 1.55;
}
```

- [ ] **Step 3: Verify**

Reload. Expected: three cream cards in a white section, each with an orange uppercase label, ink heading, small body paragraph.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: validation section"
```

---

### Task 11: Team section (4 placeholder cards)

**Files:**
- Modify: `index.html` (replace `<!-- team (Task 11) -->`)
- Modify: `styles.css`

- [ ] **Step 1: Add team HTML**

Replace `<!-- team (Task 11) -->` with:

```html
<section id="team" class="section">
  <div class="container">
    <div class="section-head">
      <span class="kicker">Team</span>
      <h2>The people behind Thermal Guardian.</h2>
    </div>

    <ul class="team-grid">
      <li class="team-card">
        <div class="team-card__avatar" aria-hidden="true"></div>
        <div class="team-card__name">Member 1</div>
        <a class="team-card__contact" href="mailto:placeholder1@thermalguardian.example">placeholder1@thermalguardian.example</a>
      </li>
      <li class="team-card">
        <div class="team-card__avatar" aria-hidden="true"></div>
        <div class="team-card__name">Member 2</div>
        <a class="team-card__contact" href="mailto:placeholder2@thermalguardian.example">placeholder2@thermalguardian.example</a>
      </li>
      <li class="team-card">
        <div class="team-card__avatar" aria-hidden="true"></div>
        <div class="team-card__name">Member 3</div>
        <a class="team-card__contact" href="mailto:placeholder3@thermalguardian.example">placeholder3@thermalguardian.example</a>
      </li>
      <li class="team-card">
        <div class="team-card__avatar" aria-hidden="true"></div>
        <div class="team-card__name">Member 4</div>
        <a class="team-card__contact" href="mailto:placeholder4@thermalguardian.example">placeholder4@thermalguardian.example</a>
      </li>
    </ul>
  </div>
</section>
```

- [ ] **Step 2: Append team CSS**

Append to `styles.css`:

```css
/* ─── Team ─────────────────────────────────────────── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.team-card {
  padding: 28px 20px;
  border: 1px solid var(--ink-10);
  border-radius: var(--radius-md);
  background: #fff;
  text-align: center;
}

.team-card__avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin: 0 auto 16px auto;
  background: var(--cream);
  border: 2px solid var(--ink);
  position: relative;
}

.team-card__avatar::after {
  content: '';
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  border: 1.5px solid var(--ink-40);
  border-top-color: transparent;
}

.team-card__name {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}

.team-card__contact {
  font-size: 12px;
  color: var(--ink-60);
  word-break: break-word;
  transition: color 0.15s ease;
}

.team-card__contact:hover { color: var(--orange); }
```

- [ ] **Step 3: Verify**

Reload. Expected: four white cards, each with a circular cream avatar (with an inner silhouette ring), `Member N` label, clickable placeholder email that turns orange on hover.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: team section with 4 placeholder cards"
```

---

### Task 12: Contact section + site footer

**Files:**
- Modify: `index.html` (replace `<!-- contact (Task 12) -->` and the `<footer>` content)
- Modify: `styles.css`

- [ ] **Step 1: Add contact + footer HTML**

Replace `<!-- contact (Task 12) -->` with:

```html
<section id="contact" class="section section--alt">
  <div class="container contact">
    <div class="contact__intro">
      <span class="kicker">Contact</span>
      <h2>Talk to us.</h2>
      <p>Investors, partners, and press — we welcome briefings, collaboration proposals, and clinical-partner introductions. We typically reply within two working days.</p>
    </div>

    <div class="contact__actions">
      <a class="btn btn--primary" href="mailto:hello@thermalguardian.example">hello@thermalguardian.example</a>
      <ul class="contact__meta">
        <li><span class="contact__label">Repository</span><a href="https://github.com/ken-toendan/thermalguardian" rel="noopener">github.com/ken-toendan/thermalguardian</a></li>
        <li><span class="contact__label">Based in</span>Tokyo, Japan</li>
      </ul>
    </div>
  </div>
</section>
```

Replace the `<!-- footer content (Task 12) -->` block inside `<footer class="site-footer">` with:

```html
<div class="container site-footer__inner">
  <div class="brand">
    <span class="brand__mark" aria-hidden="true">⊕</span>
    <span class="brand__name">Thermal Guardian</span>
  </div>
  <p class="site-footer__legal">© 2026 Thermal Guardian · All rights reserved.</p>
</div>
```

- [ ] **Step 2: Append contact + footer CSS**

Append to `styles.css`:

```css
/* ─── Contact ──────────────────────────────────────── */
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.contact__intro h2 { margin-top: 16px; font-size: 36px; }
.contact__intro p { margin-top: 14px; color: var(--ink-60); max-width: 460px; }

.contact__actions {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 16px;
}

.contact__actions .btn--primary {
  align-self: flex-start;
  font-size: 15px;
  padding: 14px 24px;
}

.contact__meta {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid var(--ink-20);
}

.contact__meta li { display: flex; flex-direction: column; gap: 4px; font-size: 14px; color: var(--ink-80); }

.contact__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-40);
}

.contact__meta a:hover { color: var(--orange); }

/* ─── Site footer ──────────────────────────────────── */
.site-footer {
  background: var(--ink);
  color: var(--cream);
  padding: 32px 0;
}

.site-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.site-footer .brand { color: var(--cream); }
.site-footer .brand__mark { color: var(--orange); }

.site-footer__legal {
  font-size: 12px;
  color: rgba(247, 245, 239, 0.6);
}
```

- [ ] **Step 3: Verify**

Reload. Expected: two-column contact block (intro left, primary email button + meta stack right), ink footer with brand on left and © line on right.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: contact section + site footer"
```

---

### Task 13: JavaScript (smooth scroll + mobile menu toggle)

**Files:**
- Modify: `script.js` (write full file)

- [ ] **Step 1: Write the full script**

Replace the empty `script.js` with:

```javascript
// Smooth-scroll for same-page anchors + mobile menu toggle.
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      // Close mobile menu if open
      closeMenu();
    });
  });

  // Mobile menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    nav.classList.add("site-nav--open");
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("site-nav--open");
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu(); else openMenu();
  });

  // Close menu on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
```

- [ ] **Step 2: Verify smooth scroll**

Reload. Click the "See how it works" button in the hero. Expected: page scrolls smoothly to `#how-it-works`. Click "The Problem" in the top nav. Expected: smooth scroll to `#problem`.

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "feat: smooth-scroll and mobile menu toggle JS"
```

---

### Task 14: Responsive styles (mobile breakpoint)

**Files:**
- Modify: `styles.css` (append a single media query block at the end)

- [ ] **Step 1: Append responsive styles**

Append to the END of `styles.css`:

```css
/* ─── Responsive (< 768px) ─────────────────────────── */
@media (max-width: 767px) {
  :root {
    --section-y: 64px;
    --pad-x: 20px;
  }

  .section-head h2 { font-size: 28px; }
  .hero__headline { font-size: 36px; }
  .hero__sub { font-size: 16px; }

  /* Nav collapse */
  .nav-toggle { display: flex; }

  .site-nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--cream);
    border-bottom: 1px solid var(--ink-10);
    flex-direction: column;
    gap: 0;
    padding: 8px 20px 16px 20px;
  }

  .site-nav.site-nav--open { display: flex; }
  .site-nav a { padding: 12px 0; border-bottom: 1px solid var(--ink-10); font-size: 16px; color: var(--ink); }
  .site-nav a:last-child { border-bottom: none; }

  /* Grids collapse */
  .stat-row,
  .risk-grid,
  .wedge-grid,
  .how-steps,
  .novelty-grid,
  .validation-row,
  .contact {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-row { padding: 24px 0; }
  .stat-row__num { font-size: 42px; }

  .pullquote { font-size: 17px; padding: 20px 22px; }

  .hero__meta { gap: 12px 20px; font-size: 12px; }

  .contact__intro h2 { font-size: 28px; }

  .site-footer__inner { flex-direction: column; text-align: center; }
}
```

- [ ] **Step 2: Verify in Chrome DevTools**

Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M) → set viewport to **375 × 667** (iPhone SE).

Expected checklist:
- No horizontal scroll
- Hamburger button visible in the header; nav links hidden
- Click hamburger → nav drops down with four links stacked; click one → smooth-scrolls and menu closes
- All grids collapse to single column (team goes 2×2)
- Hero headline reflows at ~36px; still readable

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: mobile responsive styles + nav collapse at 768px"
```

---

### Task 15: Placeholder logo + favicon

**Files:**
- Create: `assets/brand/logo.svg`
- Create: `assets/brand/favicon.svg`

- [ ] **Step 1: Write `assets/brand/logo.svg`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" role="img" aria-label="Thermal Guardian">
  <circle cx="24" cy="24" r="13" fill="none" stroke="#ff751f" stroke-width="2.5"/>
  <line x1="24" y1="8" x2="24" y2="40" stroke="#ff751f" stroke-width="2.5"/>
  <line x1="8" y1="24" x2="40" y2="24" stroke="#ff751f" stroke-width="2.5"/>
  <text x="54" y="31" font-family="DM Sans, sans-serif" font-size="18" font-weight="700" fill="#11192b" letter-spacing="0.3">Thermal Guardian</text>
</svg>
```

- [ ] **Step 2: Write `assets/brand/favicon.svg`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#11192b"/>
  <circle cx="16" cy="16" r="8" fill="none" stroke="#ff751f" stroke-width="2"/>
  <line x1="16" y1="6" x2="16" y2="26" stroke="#ff751f" stroke-width="2"/>
  <line x1="6" y1="16" x2="26" y2="16" stroke="#ff751f" stroke-width="2"/>
</svg>
```

- [ ] **Step 3: Verify**

Reload `index.html`. Expected: browser tab shows the ink+orange `⊕` favicon (may need hard reload — Ctrl+F5). No 404 in DevTools Network for `favicon.svg`.

- [ ] **Step 4: Commit**

```bash
git add assets/brand/
git commit -m "feat: placeholder logo and favicon SVGs"
```

---

### Task 16: OG image template + export

**Files:**
- Create: `assets/social/og.html`
- Create: `assets/social/og.png` (generated, committed)

- [ ] **Step 1: Write `assets/social/og.html`**

This is a local-only template you render once, screenshot, and commit the PNG. Never linked from the live site — the site's meta tag points at `og.png` directly.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OG card preview — export me as 1200×630 PNG</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700;800&family=Inter:wght@500&display=swap" rel="stylesheet">
  <style>
    html, body { margin: 0; padding: 0; }
    .card {
      width: 1200px;
      height: 630px;
      background: #f7f5ef;
      color: #11192b;
      padding: 80px;
      font-family: "Inter", sans-serif;
      position: relative;
      box-sizing: border-box;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
      font-size: 22px;
      letter-spacing: 0.04em;
    }
    .brand .mark { color: #ff751f; font-size: 28px; line-height: 1; }
    .kicker {
      display: inline-block;
      margin-top: 100px;
      padding: 6px 14px;
      background: #ff751f;
      color: #f7f5ef;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 4px;
    }
    h1 {
      font-family: "DM Sans", sans-serif;
      font-size: 72px;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.05;
      margin: 24px 0 0 0;
      max-width: 980px;
    }
    .accent { color: #ff751f; }
    .footer-line {
      position: absolute;
      bottom: 60px;
      left: 80px;
      right: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      color: rgba(17,25,43,0.6);
      padding-top: 20px;
      border-top: 1px solid rgba(17,25,43,0.15);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand"><span class="mark">⊕</span> Thermal Guardian</div>
    <span class="kicker">Preventing silent bathroom deaths</span>
    <h1>A wearable safety system built to prevent <span class="accent">19,000</span> silent deaths every year.</h1>
    <div class="footer-line">
      <span>Multi-modal · Stage-aware · Private by design</span>
      <span>ken-toendan.github.io/thermalguardian</span>
    </div>
  </div>
</body>
</html>
```

- [ ] **Step 2: Render and export to PNG**

Open `assets/social/og.html` in Chrome. Set window to at least 1240 px wide so the 1200px card isn't clipped. Then either:

**Option A (Chrome headless, easiest):** From the repo root run:

```bash
# requires Chrome; adjust path if needed
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --screenshot="assets/social/og.png" --window-size=1200,630 "file:///C:/Users/yumei/projects/ThermalGuardian-website/assets/social/og.html"
```

**Option B (DevTools):** Open `og.html` → F12 → Cmd/Ctrl+Shift+P → "Capture full size screenshot" → rename file to `og.png` and move into `assets/social/`.

- [ ] **Step 3: Verify file and dimensions**

```bash
ls -la assets/social/og.png
```

Expected: file exists, roughly 50–200 KB. Open it — should be a 1200×630 image matching the hero styling.

- [ ] **Step 4: Commit**

```bash
git add assets/social/og.html assets/social/og.png
git commit -m "feat: Open Graph image template + exported og.png"
```

---

### Task 17: Create GitHub repo, push, enable Pages

**Files:**
- None (external: GitHub)

- [ ] **Step 1: Create the remote repo**

Either via `gh` CLI (if installed):

```bash
gh repo create ken-toendan/thermalguardian --public --source=. --remote=origin --description "Thermal Guardian — investor landing site"
```

Or via the GitHub web UI:
1. Go to https://github.com/new
2. Owner: `ken-toendan`, Repo name: `thermalguardian`, Visibility: **Public**
3. Do NOT initialize with README/LICENSE/.gitignore (local repo already has them)
4. Create repository
5. From the new-repo page, copy the "push existing repository" commands. Then locally:

```bash
git remote add origin https://github.com/ken-toendan/thermalguardian.git
```

- [ ] **Step 2: Push**

```bash
git branch -M main
git push -u origin main
```

Expected: push succeeds, all commits from Task 1–16 visible on GitHub.

- [ ] **Step 3: Enable GitHub Pages**

In the browser:
1. Go to `https://github.com/ken-toendan/thermalguardian/settings/pages`
2. **Source:** "Deploy from a branch"
3. **Branch:** `main` · **Folder:** `/ (root)`
4. Click **Save**

Wait ~60–90 seconds. The Pages page will show a green "Your site is live at https://ken-toendan.github.io/thermalguardian" banner when ready.

- [ ] **Step 4: Verify live URL**

Open `https://ken-toendan.github.io/thermalguardian` in a browser. Expected:
- Page loads within 2 s on a cold cache
- Favicon shows in the tab
- Fonts render (DM Sans + Inter, not fallback)
- All eight sections visible in order: hero → problem → wedge → how-it-works → novelties → validation → team → contact
- Inline SVG diagram renders with orange arrows
- DevTools Console: no errors

- [ ] **Step 5: Nothing to commit (deployment is remote-only)**

Skip commit step.

---

### Task 18: Final verification sweep

**Files:**
- None (verification-only)

- [ ] **Step 1: All anchors resolve**

On the live site, click every nav link (The Problem, System, Team, Contact) and both hero CTAs (Request a briefing, See how it works). Expected: every one smooth-scrolls to the correct section. No `#` or `#/` in URL bar that doesn't correspond to a section id.

- [ ] **Step 2: All external links resolve**

Click the repository link in Contact (`github.com/ken-toendan/thermalguardian`). Expected: loads the repo in a new tab (verify `rel="noopener"` by right-click → "Open in new tab" works; direct click is single-tab by design here).

- [ ] **Step 3: Mobile viewport check**

In Chrome DevTools, device toolbar → **iPhone SE (375×667)** and **Pixel 5 (393×851)**. Scroll the full page. Expected: no horizontal scroll, no overlapping text, hamburger menu opens and closes, team grid is 2×2, all other grids stack single-column.

- [ ] **Step 4: Contrast check**

Use Chrome DevTools → Lighthouse → Accessibility audit on the live URL. Expected: score ≥ 95. If `ff751f` body-size text fails contrast against cream, confirm that orange is only used at display-size or against ink (it is, per the design).

- [ ] **Step 5: Open Graph preview**

Paste the URL into https://www.opengraph.xyz/ or a private Slack/LinkedIn message. Expected: `og.png` renders with headline + brand visible.

- [ ] **Step 6: Final commit of placeholder notes (optional)**

If anything was deferred during verification, add a TODO list to `README.md` under a `## TODO before public launch` section:

```markdown
## TODO before public launch

- [ ] Swap `assets/brand/logo.svg` with final logo
- [ ] Replace `Member 1–4` names and contacts in `index.html`
- [ ] Swap `hello@thermalguardian.example` with the real team email
- [ ] Confirm or remove `Tokyo, Japan` location line
```

Then:

```bash
git add README.md
git commit -m "docs: track pre-launch placeholders in README"
git push
```

---

## Self-Review

**Spec coverage:**

| Spec section | Covered by |
|---|---|
| §1 Purpose | Addressed in hero content (Task 5) |
| §2 Goals | All 7 goals covered across Tasks 5–12 |
| §3 Non-goals | Nothing violates them; no backend, no login, no BOM, no custom domain |
| §4 Audience | Content tone set in Tasks 5–10 |
| §5 Tech choices | Task 2 (HTML + fonts), Task 3 (CSS), Task 13 (JS), Task 17 (hosting) |
| §6 Visual system | Task 3 tokens + Tasks 4–12 apply them |
| §7 Content architecture (all 8 sections) | Tasks 4 (header) + 5–12 (one task per section) |
| §8 Assets (SVG, logo, favicon, OG) | Tasks 8 (diagram), 15 (logo + favicon), 16 (OG) |
| §9 File structure | Task 1 scaffolds it |
| §10 Deployment | Task 17 |
| §11 Accessibility + SEO | Task 2 (meta, lang, viewport), Task 3 (semantic), Task 13 (aria attrs), Task 18 (Lighthouse) |
| §12 Placeholders to fill | Task 18 step 6 records them in README |
| §14 Success criteria | Task 18 verifies all five |
| §15 Related (second brain) | N/A — spec-level, doesn't require implementation |

No spec gap.

**Placeholder scan:** No "TBD", "TODO implement", or "similar to Task N" anywhere in the tasks. Task 18 step 6 intentionally writes a user-facing TODO list into `README.md` — that is a tracked deliverable, not a plan placeholder.

**Type consistency:** Class names checked across tasks — `.site-header` / `.brand` / `.brand__mark` / `.site-nav` / `.nav-toggle` / `.container` / `.section` / `.section--alt` / `.kicker` / `.btn` / `.btn--primary` / `.btn--ghost` / `.hero` / `.risk-card` / `.wedge-card` / `.novelty` / `.validation-item` / `.team-card` / `.contact` / `.site-footer` are all defined exactly once in their introducing task and referenced consistently thereafter. The `closeMenu()` function in Task 13 is used by both the anchor-click handler and the toggle — defined inside the IIFE before first use. ✓
