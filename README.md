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
