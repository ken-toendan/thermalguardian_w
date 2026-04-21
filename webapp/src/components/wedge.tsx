import { motion } from "motion/react";
import { Container, Section, SectionHead } from "@/components/section";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { Heart, Activity, Thermometer } from "lucide-react";

const iconMap = {
  heart: Heart,
  activity: Activity,
  thermometer: Thermometer,
} as const;

export function Wedge() {
  const { lang } = useLang();
  const w = content.wedge;

  return (
    <Section id="wedge">
      <Container>
        <Reveal>
          <SectionHead
            kicker={t(w.kicker, lang)}
            title={t(w.heading, lang)}
            intro={t(w.intro, lang)}
          />
        </Reveal>

        <Stagger stagger={0.1}>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {w.cards.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <motion.li
                  key={i}
                  variants={staggerChild}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="rounded-xl bg-white border border-ink/10 p-6 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand mb-4">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <h3 className="font-display text-lg font-bold mb-2">
                    {t(card.title, lang)}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {t(card.body, lang)}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </Stagger>

        <Reveal delay={0.1}>
        <p className="mt-10 max-w-3xl text-ink/85 text-base md:text-lg leading-relaxed">
          <span className="font-semibold text-ink">Thermal Guardian </span>
          {lang === "ja"
            ? "は3つの信号すべてを段階対応で統合する — "
            : "combines all three signals, stage-aware — so a high heart rate "}
          <em className="text-brand not-italic font-semibold">
            {lang === "ja" ? "入浴中" : "during immersion"}
          </em>
          {lang === "ja" ? "の高心拍と" : " means something different than a high heart rate "}
          <em className="text-brand not-italic font-semibold">
            {lang === "ja" ? "退出後" : "after exit"}
          </em>
          {lang === "ja" ? "の高心拍では、意味がまったく異なる。" : "."}
        </p>
        </Reveal>
      </Container>
    </Section>
  );
}
