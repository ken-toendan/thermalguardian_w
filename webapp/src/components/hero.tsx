import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";
import { CountUp } from "@/components/count-up";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { lang } = useLang();
  const h = content.hero;

  const accentJaSuffix = lang === "ja" ? "件" : "";

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 isolate">
      <div className="absolute inset-0 -z-10 dot-grid" aria-hidden="true" />
      <Container className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 px-3 py-1.5 pr-3.5 text-xs font-medium text-ink/90 w-fit">
            <span className="relative inline-flex size-2 rounded-full bg-brand">
              <span className="absolute inset-0 rounded-full bg-brand opacity-60 animate-ping" />
            </span>
            {t(h.kicker, lang)}
          </span>

          <h1 className="hero-headline">
            {t(h.headlineBefore, lang)}
            <span className="text-red-brand">
              <CountUp to={19000} suffix={accentJaSuffix} />
            </span>
            {t(h.headlineAfter, lang)}
          </h1>

          <p className="text-ink/70 text-base md:text-lg leading-relaxed max-w-xl">
            {t(h.sub, lang)}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary" size="lg">
              <a href="#contact">{t(h.ctaPrimary, lang)}</a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#how-it-works" className="inline-flex items-center gap-2">
                {t(h.ctaSecondary, lang)}
                <ArrowRight className="h-4 w-4 text-brand" />
              </a>
            </Button>
          </div>

          <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/60">
            {h.metaItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-ink/40" />
                {t(item, lang)}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <figure className="relative aspect-[5/4] flex items-center justify-center" aria-hidden="true">
      <HeroEcg />
      <img
        src="assets/hardware/device.png"
        alt=""
        loading="eager"
        decoding="async"
        className="relative z-10 max-w-full drop-shadow-[0_24px_40px_rgba(17,25,43,0.12)]"
      />
    </figure>
  );
}

function HeroEcg() {
  return (
    <svg
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
      className="absolute inset-x-0 top-[38%] h-[24%] w-full z-0 opacity-55"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroEcgFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff751f" stopOpacity="0" />
          <stop offset="0.15" stopColor="#ff751f" stopOpacity="0.85" />
          <stop offset="0.85" stopColor="#ff751f" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ff751f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 100 L60 100 L90 100 L105 95 L115 100 L130 100 L145 40 L160 160 L175 100 L200 100 L220 85 L260 100 L320 100 L335 95 L345 100 L360 100 L375 40 L390 160 L405 100 L440 100 L460 85 L500 100 L600 100"
        fill="none"
        stroke="url(#heroEcgFade)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1800,
          strokeDashoffset: 1800,
          animation: "hero-ecg-draw 4.2s cubic-bezier(0.55,0,0.2,1) 0.6s infinite",
        }}
      />
      <style>{`
        @keyframes hero-ecg-draw {
          0%   { stroke-dashoffset: 1800; opacity: 0; }
          8%   { opacity: 0.9; }
          60%  { stroke-dashoffset: 0; opacity: 0.9; }
          80%  { stroke-dashoffset: 0; opacity: 0.35; }
          100% { stroke-dashoffset: -1800; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          svg path { animation: none !important; stroke-dashoffset: 0 !important; opacity: 0.7 !important; }
        }
      `}</style>
    </svg>
  );
}
