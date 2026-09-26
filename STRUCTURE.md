# Thermal Guardian Website: Structure & Stack

A single-page, bilingual (EN/JA) landing site for **Thermal Guardian**, a wearable + IoT safety system for preventing bath-related accidents among elderly people. It is written for investors, conference visitors, and academic collaborators.

- **Live URL:** https://ken-toendan.github.io/thermalguardian_w (GitHub Pages, until the custom-domain cutover)
- **Repo:** https://github.com/ken-toendan/thermalguardian_w
- **Hosting:** moving to **Cloudflare Workers (static assets)**, which builds `webapp/` on every push. GitHub Pages keeps serving the old URL from the committed build in the repo root until the new domain goes live.
- **Live demo (external):** https://dashboard-self-mu-98.vercel.app/demo, a separate Vercel project linked from the floating "Live demo" button

---

## 1. How it works at a glance

```
webapp/  (source: React + TS + Vite)
   │
   ├─ push to GitHub ──► Cloudflare Workers Builds
   │                      root dir webapp/ · npm run build · npx wrangler deploy
   │                      serves webapp/dist/ (config: webapp/wrangler.jsonc)
   │                      main = production · other branches = preview URLs
   │
   └─ npm run build, dist/ copied by hand into the repo root
         ▼
      / (repo root) index.html + _app/ + assets/   ──►  GitHub Pages (old URL, temporary)
```

The source lives in `webapp/`. Cloudflare builds it directly, so it needs no committed build output. The repo root still holds a **compiled copy** for GitHub Pages. Until the cutover, changes to the site usually come as two commits:

1. `copy:` / `feat:` / `fix:` commits edit `webapp/src/...`
2. a `build: sync compiled bundle for …` commit replaces `_app/index-*.js|css` and updates the hashed filenames in the root `index.html`

After the cutover, the root `index.html`, `_app/` and `assets/` are removed and step 2 goes away.

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
| Animation | **Motion** (`motion/react`, the successor to Framer Motion). All animations respect `useReducedMotion()` |
| Icons | **lucide-react** |
| Fonts | Google Fonts: **DM Sans** (display), **Inter** (body), **Noto Sans JP** (Japanese) |
| Linting | ESLint 9 (flat config) + `typescript-eslint`, `react-hooks`, `react-refresh` |
| i18n | Home-grown: a typed content dictionary plus a React context (no i18n library) |
| Hosting | Cloudflare Workers static assets (`webapp/wrangler.jsonc`); GitHub Pages for the old URL until cutover (`.nojekyll` turns off Jekyll processing) |

There is no backend, router, state library, analytics, or test suite.

---

## 3. Directory layout

```
ThermalGuardian-website/
├── index.html              # BUILT entry served by Pages (references hashed _app bundle)
├── _app/                   # BUILT JS + CSS bundle (index-<hash>.js / .css)
├── assets/                 # Static assets served by Pages (mirror of webapp/public/assets)
│   ├── achievements/       #   award / conference logos & banners
│   ├── brand/              #   logos, favicons, KUAS logo
│   ├── docs/               #   PDFs (booth script, briefing, HEALTHINF slides), not currently linked
│   ├── hardware/           #   device renders (plain + labelled EN/JA)
│   ├── social/             #   og.png (+ og.html used to render it)
│   └── team/               #   headshots
├── docs/superpowers/       # Original design spec + implementation plan (2026-04-20)
├── .nojekyll               # Disable Jekyll on GitHub Pages
├── LICENSE                 # MIT
├── README.md               # Short overview + local dev + deploy
├── .gstack/ .superpowers/  # Local tooling artifacts (QA reports, brainstorms); gitignored
└── webapp/                 # SOURCE
    ├── index.html          # Dev entry (meta/OG tags, fonts, /src/main.tsx)
    ├── vite.config.ts      # base "./", assetsDir "_app", "@" → src alias
    ├── wrangler.jsonc      # Cloudflare Worker config: serves dist/ as static assets
    ├── components.json     # shadcn/ui config
    ├── eslint.config.js
    ├── tsconfig*.json
    ├── package.json
    ├── public/assets/      # Source of truth for static assets (copied to dist/assets)
    ├── dist/               # Build output (gitignored)
    └── src/
        ├── main.tsx        # createRoot → <App/>
        ├── App.tsx         # Page composition (section order)
        ├── index.css       # Tailwind import, @theme tokens, shadcn CSS vars, base styles
        ├── content/
        │   └── i18n.ts     # ALL site copy, EN + JA, plus `t()` helper
        ├── hooks/
        │   └── use-lang.tsx# LangProvider / useLang (language state)
        ├── lib/
        │   └── utils.ts    # cn()
        └── components/
            ├── section.tsx       # Container, Section (alt bg), SectionHead
            ├── motion/reveal.tsx # Reveal, Stagger, staggerChild scroll animations
            ├── count-up.tsx      # Animated number counter
            ├── ui/               # shadcn primitives: badge, button, card, separator, sheet, toggle-group
            └── <page sections>   # see §4
```

---

## 4. Page structure (render order in `App.tsx`)

Everything sits inside `<LangProvider>` and `<div id="top">`.

| # | Component | Anchor | What it shows |
|---|---|---|---|
| — | `Header` | — | Sticky nav (Problem, System, Achievements, Team, Contact), EN/JA toggle, mobile menu in a Radix `Sheet` |
| 1 | `Hero` | `#top` | Word-by-word animated headline with the red "19,000" accent, animated ECG waveform, dot-grid background, device image with pointer-driven parallax, CTAs, event meta chips |
| 2 | `Problem` | `#problem` | The bath-death statistics and risk cards (red/amber/sky accents), with `CountUp` |
| 3 | `Wedge` | `#wedge` | Why Thermal Guardian differs from existing approaches |
| 4 | `HowItWorks` | `#how-it-works` | Inline-SVG system flow diagram (wearable, CSI + mmWave, animated MQTT, caregiver alerts) and the labelled device image |
| 5 | `LiveMonitor` | `#live-monitor` | Simulated dashboard cycling through bath stages (pre → immersion → exit) every 5 s, with synthetic ECG, HR, skin/bath temperature, and risk level |
| 6 | `Novelties` | `#novelties` | Key technical novelties |
| 7 | `Achievements` | `#achievements` | Cards for HEALTHINF 2026, iCAN 2026 (2nd place), and others. The `imageStyle` field (`photo` / `logo` / default) controls how each image is framed |
| 8 | `Resources` | `#resources` | Two embedded YouTube talks (`youtube-nocookie.com`): the conference pitch and the iCAN 2026 presentation. The PDFs in `assets/docs/` are currently not linked from the page |
| 9 | `Team` | `#team` | Headshots: Arthur, Joseph, Ken, Shimada |
| 10 | `Contact` | `#contact` | Contact details |
| — | `Footer` | — | KUAS logo and link, Ubicomp Lab link |
| — | `DemoBubble` | — | Fixed bottom-right pill linking to the external Vercel live demo |

---

## 5. Internationalisation (EN / JA)

- **All copy lives in `webapp/src/content/i18n.ts`** in one `content` object, grouped by section (`meta`, `nav`, `hero`, `problem`, `wedge`, `how`, `liveMonitor`, `novelties`, `achievements`, `resources`, `team`, `contact`, `footer`).
- Each string has the shape `{ en: string; ja: string }` (`BiText`). Components render it with `t(content.x.y, lang)`.
- `useLang()` (`hooks/use-lang.tsx`) picks the initial language in this order:
  1. `localStorage["tg-lang"]`
  2. the browser language (`ja*` → Japanese)
  3. English as the fallback
- It also keeps `<html lang>` in sync.
- **To change text, edit `i18n.ts` only.** Components should not contain hard-coded copy.
- The meta/OG tags in `index.html` are static English. They do not change with the language toggle.

---

## 6. Design system

Tokens are defined in `webapp/src/index.css` with Tailwind v4 `@theme`:

- **Brand orange:** `brand` `#ff751f`, with a 50–900 scale
- **Ink:** `#11192b` (text), plus `ink-80/60/20/10` alpha variants
- **Backgrounds:** `cream` `#f7f5ef` (default sections), `cream-2` `#e9f3f5` (alternate sections via `<Section alt>`)
- **Accents:** `red-brand` `#dc2626` (the 19,000 figure, alerts), `amber-brand` `#f3993e`, `sage` `#7b886b` (also aliased as sky/emerald)
- **Fonts:** `font-display` (DM Sans), `font-sans` (Inter → Noto Sans JP), `font-jp`
- **Radius:** `0.75rem`
- The shadcn semantic variables (`--primary`, `--background`, `--border`, …) map onto these tokens. The site is **light theme only**.
- **Layout:** `Container` is `max-w-6xl` with responsive padding. `Section` sets vertical rhythm (`py-20 md:py-28`).

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

### Publishing a change

1. Edit the source in `webapp/src/` (copy goes in `content/i18n.ts`).
2. If you add or change a static file, put it in `webapp/public/assets/...` **and** in the root `assets/...`. The two trees are kept identical until the cutover.
3. Run `npm run build` in `webapp/`.
4. Sync the output to the repo root (only needed while GitHub Pages still serves the old URL):
   - delete the old `/_app/index-*.js` and `/_app/index-*.css`
   - copy in `webapp/dist/_app/*`
   - copy `webapp/dist/index.html` over the root `index.html` (this updates the hashed `<script>`/`<link>` tags)
5. Commit the source change, then commit the sync as `build: sync compiled bundle for …`.
6. Push. Cloudflare builds every branch: `main` deploys to production, other branches upload a preview version with its own URL. GitHub Pages redeploys the root copy from `main`.

`vite.config.ts` uses `base: "./"` so that every asset path is relative. The same build therefore works at a domain root (Cloudflare) and under the `/thermalguardian_w/` sub-path (GitHub Pages).

---

## 8. Known loose ends

- `webapp/README.md` is the unmodified Vite template README.
- The build → root sync (step 4) is manual. It goes away at the custom-domain cutover, when GitHub Pages stops serving the site.
- The OG image URL and `og:url` are hard-coded to the `ken-toendan.github.io/thermalguardian_w` domain. Update them at the cutover.
