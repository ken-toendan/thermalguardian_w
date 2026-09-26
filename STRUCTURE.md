# Thermal Guardian Website: Structure & Stack

A single-page, bilingual (EN/JA) landing site for **Thermal Guardian**, a wearable + IoT safety system for preventing bath-related accidents among elderly people. It is written for investors, conference visitors, and academic collaborators.

- **Live URL:** https://ken-toendan.github.io/thermalguardian_w/ (GitHub Pages; also the address on the UbiComp poster QR code)
- **Repo:** https://github.com/ken-toendan/thermalguardian_w
- **Hosting:** GitHub Pages, deployed by GitHub Actions (`.github/workflows/deploy-pages.yml`), which builds `webapp/` on every push to `main`. The earlier Cloudflare Worker (`thermalguardian-w.kentoendan.workers.dev`) is being retired. Its address is DNS-blocked in mainland China, while github.io resolves there.
- **Live demo (external):** https://dashboard-self-mu-98.vercel.app/demo, a separate Vercel project linked from the header and the mobile demo button. `vercel.app` is DNS-blocked in mainland China.

---

## 1. How it works at a glance

```
webapp/  (source: React + TS + Vite)
   │  push to main
   ▼
GitHub Actions: npm ci · npm run build  →  webapp/dist/
   │  upload-pages-artifact + deploy-pages
   ▼
GitHub Pages  →  https://ken-toendan.github.io/thermalguardian_w/
```

The repo holds source only. There is no committed build output any more, and only the built site is public on github.io (the repo's own files are not served).

---

## 2. Tech stack

| Layer | What's used |
|---|---|
| Framework | **React 19** (`react`, `react-dom`), `StrictMode` |
| Language | **TypeScript ~6.0** (`tsc -b` runs as part of the build) |
| Build / dev server | **Vite 8** with `@vitejs/plugin-react` |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` (CSS-first config in `src/index.css` using `@theme`; no `tailwind.config.js`) |
| UI primitives | **shadcn/ui** ("new-york" style, `components.json`) built on **Radix UI** (dialog/sheet, separator, slot, toggle, toggle-group, accordion) |
| Class helpers | `class-variance-authority`, `clsx`, `tailwind-merge` (`cn()` in `src/lib/utils.ts`) |
| Animation | **Motion** (`motion/react`). All animations respect `useReducedMotion()` |
| Icons | **lucide-react** |
| Fonts | Self-hosted via Fontsource (imported in `src/main.tsx`): **DM Sans** (headings), **Inter** (body), **Noto Sans JP Variable** (Japanese), **DM Mono** (data labels). No Google Fonts, which is blocked in China |
| Linting | ESLint 9 (flat config) + `typescript-eslint`, `react-hooks`, `react-refresh`. 5 known errors predate the revamp |
| i18n | Home-grown: a typed content dictionary plus a React context (no i18n library) |
| Hosting | GitHub Pages via GitHub Actions |

There is no backend, router, state library, analytics, or test suite.

---

## 3. Directory layout

```
ThermalGuardian-website/
├── .github/workflows/deploy-pages.yml  # Build webapp/ and deploy to GitHub Pages
├── docs/
│   ├── archive/hardware-v1/            # Old device images, replaced by devices.webp (not served)
│   └── superpowers/                    # Original design spec + implementation plan (2026-04-20)
├── LICENSE                             # MIT
├── README.md                           # Short overview + local dev + deploy
├── STRUCTURE.md                        # This file
└── webapp/                             # SOURCE
    ├── index.html          # Entry (meta/OG tags, fonts, /src/main.tsx)
    ├── vite.config.ts      # base "./", assetsDir "_app", "@" → src alias
    ├── wrangler.jsonc      # Cloudflare Worker config; delete once the Worker is removed
    ├── components.json     # shadcn/ui config
    ├── package.json · package-lock.json · tsconfig*.json · eslint.config.js
    ├── public/assets/      # Static assets, copied to dist/assets
    │   ├── achievements/   #   conference logos, banners, iCAN photo
    │   ├── brand/          #   logos, favicons, KUAS logo
    │   ├── docs/           #   PDFs (booth script, briefing, HEALTHINF slides), not linked
    │   ├── hardware/       #   devices.webp (wearable, radar, Pi hub, two temperature nodes)
    │   ├── social/         #   og.png (+ og.html used to render it)
    │   └── team/           #   headshots
    └── src/
        ├── main.tsx · App.tsx          # Entry and page composition (section order)
        ├── index.css                   # Tailwind import, @theme tokens (site + Aegis palette), base styles
        ├── content/i18n.ts             # ALL site copy, EN + JA, plus `t()` helper
        ├── hooks/use-lang.tsx          # LangProvider / useLang (language state)
        ├── lib/utils.ts                # cn()
        └── components/
            ├── section.tsx             # Container, Section (tone: cream | white | navy), SectionHead (tone, chapter)
            ├── motion/reveal.tsx       # Reveal, Stagger, staggerChild scroll animations
            ├── video-frame.tsx         # 16:9 frame: self-hosted MP4, YouTube embed, or placeholder
            ├── count-up.tsx            # Animated number counter
            ├── ui/                     # shadcn primitives: badge, button, card, separator, sheet, toggle-group
            └── <page sections>         # see §4
```

---

## 4. Page structure (render order in `App.tsx`)

Everything sits inside `<LangProvider>` and `<div id="top">`. Chapters: **01** the problem, **02** the system (including Aegis), **03** proof and people.

| Component | Anchor | Tone | What it shows |
|---|---|---|---|
| `Header` | — | — | Sticky nav (Problem, System, Aegis, Achievements, Talks, Team, Contact; links collapse into a Radix `Sheet` below 1024 px), "Live demo" button, EN / 日本語 / China toggle |
| `Hero` | `#hero` | cream | Animated headline with the red "19,000", ECG line, cursor-following glow, `devices.webp` |
| `VenueStrip` | — | white | "Presented and recognised at": HEALTHINF, iCAN 2nd place, UbiComp/ISWC, IEEE GCCE, KUAS (text wordmarks) |
| `Problem` | `#problem` | white · 01 | Statistics with `CountUp` and three risk cards |
| `Wedge` | `#wedge` | cream · 01 | Why existing approaches fall short |
| `HowItWorks` | `#how-it-works` | white · 02 | Flow diagram, `devices.webp` (sticky on lg) and five hardware cards: wearable, radar, bathroom node, changing-room node, Pi hub |
| `LiveMonitor` | `#live-monitor` | navy · 02 | Simulated dashboard cycling pre-bath → immersion → exit, data labels in DM Mono |
| `Novelties` | `#novelties` | navy · 02 | Three differentiators; continues the navy band |
| `Aegis` | `#aegis` | Aegis blue wash · 02 | Web explanation of the Aegis AI layer in the UbiComp poster palette: problem, occupancy insight, four steps + guarantee, pilot results, MP4 video slot, citation |
| `Achievements` | `#achievements` | white · 03 | Six venue cards (HEALTHINF, iCAN preliminary, iCAN 2nd place, iCAN final, UbiComp/ISWC, GCCE) |
| `Resources` | `#resources` | cream · 03 | Two talk videos via `VideoFrame`: YouTube, or Bilibili in China mode |
| `Team` | `#team` | white · 03 | Five members, centred wrap; Kawai Rostum's photo pending |
| `Contact` | `#contact` | navy | Email button and location |
| `Footer` | — | panel | KUAS logo, Ubicomp Lab link |
| `DemoBubble` | — | — | Mobile-only floating demo button, shown after the hero and hidden over Contact |

---

## 5. Internationalisation (EN / JA)

- **All copy lives in `webapp/src/content/i18n.ts`** in one `content` object, grouped by section.
- Each string has the shape `{ en: string; ja: string }` (`BiText`). Components render it with `t(content.x.y, lang)`.
- `useLang()` picks the initial language from `localStorage["tg-lang"]`, then the browser language (`ja*` → Japanese), then English, and keeps `<html lang>` in sync.
- **To change text, edit `i18n.ts` only.**
- Japanese typography: phrase-aware line breaking (`word-break: auto-phrase`) on headings and paragraphs; hero headline words split on ordinary spaces only, so a no-break space can keep "—" attached.
- The meta/OG tags in `index.html` are static English.
- **China mode** (`edition: "cn"` in `useLang()`, saved as `tg-edition`): English text, but `VideoFrame` plays Bilibili (`bilibiliId`) → MP4 → placeholder and never YouTube. It is selected with the "China" toggle, and is the default for browsers set to Chinese when nothing is saved. Each video entry in `i18n.ts` holds a YouTube `id` and a `bilibiliId`.

---

## 6. Design system

Tokens are defined in `webapp/src/index.css` with Tailwind v4 `@theme`:

- **Brand orange** `#ff751f` (fills, buttons with navy text, text on navy); **deep orange** `brand-700` `#b8470a` for orange text on light grounds (≥ 4.5:1).
- **Ink** `#11192b` (text and navy bands), **panel** `#0b1220` (footer, instrument panels), **cream** `#f7f5ef`, **white** for alternating sections.
- **Signals:** safe = sage (`sage-700` for text), monitoring = amber (`amber-700` for text), alert = red (`red-text` on light, `alert-on-dark` on navy).
- **Aegis palette** (`ae-*`, from the UbiComp poster, Okabe–Ito colourblind-safe): navy `#14284b`, blue `#0072b2`, sky `#56b4e9`, vermillion `#d55e00` (text `#c2410c`), bluish green `#009e73` (text `#006b50`), plus tints.
- **Type:** DM Sans headings (sections 28/40 px), Inter body (16 px in cards), DM Mono `.data-label`, 12 px `.kicker-uppercase` labels.
- **Layout:** `Container` is `max-w-6xl`; `Section` padding `py-20 md:py-28`. Light theme only.

---

## 7. Development workflow

```bash
cd webapp
npm install
npm run dev       # Vite dev server with HMR
npm run lint      # ESLint
npm run build     # tsc -b && vite build  →  webapp/dist/
npm run preview   # serve dist/ locally
```

**Publishing:** edit `webapp/`, commit, and push to `main`. The workflow builds and deploys automatically, usually within about a minute; progress shows under the repo's Actions tab. Static files go in `webapp/public/assets/`.

`vite.config.ts` uses `base: "./"`, so all asset paths are relative and the site works under the `/thermalguardian_w/` sub-path.

---

## 8. Known loose ends

- `webapp/wrangler.jsonc` stays until the Cloudflare Worker is deleted, since Cloudflare still builds on each push until then.
- Bilibili BV ids are not set yet, so China mode shows "coming soon" for the videos. The Vercel live demo is blocked in mainland China.
- The Aegis video and Kawai Rostum's photo are placeholders; the paper link waits for the DOI to resolve.
- The OG image URL and `og:url` are hard-coded to the github.io address.
- `webapp/README.md` is the unmodified Vite template README.
