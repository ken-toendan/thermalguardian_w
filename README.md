# Thermal Guardian — Investor Site

Public single-page landing site for [Thermal Guardian](https://github.com/KUAS-ubicomp-lab/ThermalGuardian), a wearable IoT system for preventing bath-related accidents in elderly care. Bilingual (English / Japanese).

**Live:** https://ken-toendan.github.io/thermalguardian_w (moving to Cloudflare and a custom domain)

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

- **Cloudflare Workers** builds `webapp/` on every push (`npm run build`, then `npx wrangler deploy`, config in `webapp/wrangler.jsonc`). `main` deploys to production; other branches get preview URLs.
- **GitHub Pages** still serves the old URL from the compiled copy in the repo root (`index.html`, `_app/`, `assets/`) until the custom domain goes live. `.nojekyll` disables Jekyll processing.

See [`STRUCTURE.md`](STRUCTURE.md) for the full layout, publishing steps and design tokens.

## Tech

React 19, TypeScript, Vite 8, Tailwind CSS v4, shadcn/ui (Radix), Motion, lucide icons. DM Sans, Inter and Noto Sans JP via Google Fonts. All copy lives in `webapp/src/content/i18n.ts`.

## License

MIT — see `LICENSE`.
