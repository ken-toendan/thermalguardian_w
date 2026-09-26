import { motion } from "motion/react";
import { Container, Section, SectionHead } from "@/components/section";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { CountUp } from "@/components/count-up";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

const accentMap = {
  red: { text: "text-red-text", border: "border-t-red-brand" },
  amber: { text: "text-amber-700", border: "border-t-amber-brand" },
  sky: { text: "text-sage-700", border: "border-t-sky-brand" },
} as const;

export function Problem() {
  const { lang } = useLang();
  const p = content.problem;

  return (
    <Section id="problem" tone="white">
      <Container>
        <Reveal>
          <SectionHead
            kicker={t(p.kicker, lang)}
            chapter="01"
            title={t(p.heading, lang)}
            intro={t(p.intro, lang)}
            tone="white"
          />
        </Reveal>

        <Stagger stagger={0.12}>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-ink/10">
            {p.stats.map((stat, i) => {
              const accent = stat.accent ? accentMap[stat.accent].text : "text-ink";
              return (
                <motion.li key={i} variants={staggerChild} className="flex flex-col gap-2">
                  <span className={cn("font-display text-4xl md:text-5xl font-extrabold leading-none tabular-nums", accent)}>
                    <CountUp to={stat.countTo} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-ink/70 leading-snug">
                    {t(stat.label, lang)}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </Stagger>

        <Reveal>
          <h3 className="mt-14 mb-6 font-display text-xl font-bold">
            {t(p.risksHeading, lang)}
          </h3>
        </Reveal>

        <Stagger stagger={0.1}>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {p.risks.map((risk, i) => {
              const { text, border } = accentMap[risk.accent];
              return (
                <motion.li
                  key={i}
                  variants={staggerChild}
                  className={cn(
                    "rounded-xl bg-cream border border-ink/10 border-t-2 p-6",
                    border
                  )}
                >
                  <span className={cn("inline-block kicker-uppercase mb-3", text)}>
                    {t(risk.label, lang)}
                  </span>
                  <p className="text-base text-ink/80 leading-relaxed">
                    {t(risk.body, lang)}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </Stagger>

        <Reveal delay={0.1}>
          <blockquote className="mt-14 rounded-2xl bg-ink text-cream font-display italic text-lg md:text-xl leading-snug px-7 py-6">
            {t(p.pullquote, lang)}
          </blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}
