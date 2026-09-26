# Thermal Guardian — Investor Site

Public single-page landing site for [Thermal Guardian](https://github.com/KUAS-ubicomp-lab/ThermalGuardian), a wearable IoT system for preventing bath-related accidents in elderly care. Bilingual (English / Japanese).

**Live:** https://ken-toendan.github.io/thermalguardian_w/

## What this is

Static marketing page for investors, conference visitors, and academic collaborators. Built to explain the project in under two minutes without exposing BOM, firmware, or system credentials.

## Local development

The source is in `webapp/`:

```bash
cd webapp
npm install
npm run dev      # dev server with hot reload
npm run build    # type-check + production build → webapp/dist/
```

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy-pages.yml`) builds `webapp/` and deploys `webapp/dist` to GitHub Pages automatically.

See [`STRUCTURE.md`](STRUCTURE.md) for the full layout, publishing steps and design tokens.

## Tech

React 19, TypeScript, Vite 8, Tailwind CSS v4, shadcn/ui (Radix), Motion, lucide icons. DM Sans, Inter and Noto Sans JP via Google Fonts. All copy lives in `webapp/src/content/i18n.ts`.

## License

MIT — see `LICENSE`.
