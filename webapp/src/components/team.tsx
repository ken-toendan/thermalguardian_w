import { motion } from "motion/react";
import { User } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/section";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Team() {
  const { lang } = useLang();
  const tm = content.team;

  return (
    <Section id="team" tone="white">
      <Container>
        <Reveal>
          <SectionHead
            kicker={t(tm.kicker, lang)}
            chapter="03"
            title={t(tm.heading, lang)}
            tone="white"
            className="mx-auto text-center"
          />
        </Reveal>

        <Stagger stagger={0.08}>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {tm.members.map((m, i) => (
            <motion.li
              key={i}
              variants={staggerChild}
              className="w-36 md:w-44 flex flex-col items-center text-center gap-4"
            >
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden bg-cream-2 ring-1 ring-ink/10 flex items-center justify-center">
                {m.image ? (
                  <img src={m.image} alt={m.name ?? ""} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-12 w-12 md:h-14 md:w-14 text-ink/40" />
                )}
              </div>
              {m.name ? (
                <div className="font-display font-bold text-sm md:text-base">{m.name}</div>
              ) : (
                <div className="flex flex-col gap-1">
                  <div className="font-display font-bold text-sm md:text-base">{t(tm.placeholderName, lang)}</div>
                  <div className="text-xs text-ink/70">{t(tm.placeholderNote, lang)}</div>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
        </Stagger>
      </Container>
    </Section>
  );
}
