import { motion } from "motion/react";
import { Container, Section, SectionHead } from "@/components/section";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Novelties() {
  const { lang } = useLang();
  const n = content.novelties;

  return (
    <Section id="novelties">
      <Container>
        <Reveal>
          <SectionHead kicker={t(n.kicker, lang)} title={t(n.heading, lang)} />
        </Reveal>

        <Stagger stagger={0.12}>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {n.items.map((item, i) => (
            <motion.li
              key={i}
              variants={staggerChild}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative rounded-2xl bg-ink text-cream p-7 md:p-8 flex flex-col gap-4"
            >
              <span className="kicker-uppercase text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-bold text-cream">
                {t(item.title, lang)}
              </h3>
              <p className="text-sm leading-relaxed text-cream/75">
                {t(item.body, lang)}
              </p>
            </motion.li>
          ))}
        </ul>
        </Stagger>
      </Container>
    </Section>
  );
}
