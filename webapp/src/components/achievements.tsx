import { motion } from "motion/react";
import { Container, Section, SectionHead } from "@/components/section";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Achievements() {
  const { lang } = useLang();
  const a = content.achievements;

  return (
    <Section id="achievements" alt>
      <Container>
        <Reveal>
          <SectionHead
            kicker={t(a.kicker, lang)}
            title={t(a.heading, lang)}
            intro={t(a.intro, lang)}
          />
        </Reveal>

        <Stagger stagger={0.12}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {a.items.map((item, i) => (
            <motion.li
              key={i}
              variants={staggerChild}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl bg-white border border-ink/10 overflow-hidden hover:shadow-md flex flex-col"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener"
                className="block aspect-[16/9] bg-ink/5 flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={t(item.title, lang)}
                  className="h-full w-full object-contain p-6 bg-white"
                />
              </a>
              <div className="p-6 flex flex-col gap-2">
                <span className="kicker-uppercase text-brand">{t(item.label, lang)}</span>
                <h3 className="font-display text-lg font-bold">{t(item.title, lang)}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{t(item.body, lang)}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        </Stagger>
      </Container>
    </Section>
  );
}
