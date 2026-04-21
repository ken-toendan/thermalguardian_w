import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";
import { CountUp } from "@/components/count-up";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Hero() {
  const { lang } = useLang();
  const h = content.hero;
  const reduce = useReducedMotion();

  const accentJaSuffix = lang === "ja" ? "件" : "";

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const sx = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const sy = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const spotlightX = useTransform(sx, (v) => `${v * 100}%`);
  const spotlightY = useTransform(sy, (v) => `${v * 100}%`);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 isolate"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(255,117,31,0.10), transparent 70%)`,
          x: useTransform(sx, (v) => `${(v - 0.5) * 20}px`),
          y: useTransform(sy, (v) => `${(v - 0.5) * 20}px`),
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 dot-grid"
        style={{
          maskImage: useTransform(
            [sx, sy],
            ([x, y]) =>
              `radial-gradient(ellipse 80% 65% at ${Number(x) * 100}% ${
                Number(y) * 100
              }%, #000 35%, transparent 85%)`
          ),
          WebkitMaskImage: useTransform(
            [sx, sy],
            ([x, y]) =>
              `radial-gradient(ellipse 80% 65% at ${Number(x) * 100}% ${
                Number(y) * 100
              }%, #000 35%, transparent 85%)`
          ),
        }}
      />

      <BlurOrb
        className="absolute -top-24 -left-20 -z-10 size-[380px] rounded-full bg-brand/25 blur-[90px]"
        drift={80}
      />
      <BlurOrb
        className="absolute -bottom-32 -right-16 -z-10 size-[480px] rounded-full bg-[#0ea5e9]/10 blur-[120px]"
        drift={60}
        delay={1.5}
      />

      <Container className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 md:gap-14 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur-sm px-3 py-1.5 pr-3.5 text-xs font-medium text-ink/90 w-fit"
          >
            <span className="relative inline-flex size-2 rounded-full bg-brand">
              <motion.span
                className="absolute inset-0 rounded-full bg-brand"
                animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
            </span>
            {t(h.kicker, lang)}
          </motion.span>

          <HeadlineReveal
            before={t(h.headlineBefore, lang)}
            accentLabel={t(h.accent, lang)}
            after={t(h.headlineAfter, lang)}
            accentJaSuffix={accentJaSuffix}
          />

          <motion.p variants={item} className="text-ink/70 text-base md:text-lg leading-relaxed max-w-xl">
            {t(h.sub, lang)}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="primary" size="lg">
                <a href="#contact">{t(h.ctaPrimary, lang)}</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="ghost" size="lg">
                <a href="#how-it-works" className="inline-flex items-center gap-2 group">
                  {t(h.ctaSecondary, lang)}
                  <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/60"
          >
            {h.metaItems.map((mi, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-ink/40" />
                {t(mi, lang)}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </Container>
    </section>
  );
}

function HeadlineReveal({
  before,
  accentLabel: _accentLabel,
  after,
  accentJaSuffix,
}: {
  before: string;
  accentLabel: string;
  after: string;
  accentJaSuffix: string;
}) {
  const reduce = useReducedMotion();

  const splitWords = (s: string) => s.split(/(\s+)/);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.04, delayChildren: 0.25 },
    },
  };

  const beforeParts = splitWords(before);
  const afterParts = splitWords(after);

  return (
    <motion.h1
      className="hero-headline"
      initial="hidden"
      animate="show"
      variants={container}
      aria-label={`${before}${_accentLabel}${after}`}
    >
      {beforeParts.map((word, i) =>
        /^\s+$/.test(word) ? (
          <span key={`b-${i}`}>{word}</span>
        ) : (
          <motion.span key={`b-${i}`} className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        )
      )}
      <motion.span variants={wordVariants} className="relative inline-block text-red-brand">
        <CountUp to={19000} suffix={accentJaSuffix} />
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full blur-xl bg-red-brand/25"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
      {afterParts.map((word, i) =>
        /^\s+$/.test(word) ? (
          <span key={`a-${i}`}>{word}</span>
        ) : (
          <motion.span key={`a-${i}`} className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        )
      )}
    </motion.h1>
  );
}

function BlurOrb({
  className,
  drift = 50,
  delay = 0,
}: {
  className?: string;
  drift?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} />;
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{
        x: [0, drift, -drift / 2, 0],
        y: [0, -drift / 2, drift, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 16 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.figure
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[5/4] flex items-center justify-center [perspective:1200px]"
      aria-hidden="true"
    >
      <HeroEcg />
      <motion.img
        src="assets/hardware/device.png"
        alt=""
        loading="eager"
        decoding="async"
        className="relative z-10 max-w-full drop-shadow-[0_24px_40px_rgba(17,25,43,0.12)] will-change-transform"
        style={{ rotateX: rx, rotateY: ry }}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.figure>
  );
}

function HeroEcg() {
  return (
    <svg
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
      className="absolute inset-x-0 top-[28%] h-[44%] w-full z-0 opacity-90"
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
      <motion.path
        d="M0 100 L60 100 L90 100 L105 95 L115 100 L130 100 L145 40 L160 160 L175 100 L200 100 L220 85 L260 100 L320 100 L335 95 L345 100 L360 100 L375 40 L390 160 L405 100 L440 100 L460 85 L500 100 L600 100"
        fill="none"
        stroke="url(#heroEcgFade)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1, 1],
          opacity: [0, 0.9, 0.9, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.55, 0.85, 1],
          delay: 0.8,
        }}
      />
    </svg>
  );
}
