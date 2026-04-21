import { Container, Section, SectionHead } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Novelties() {
  const { lang } = useLang();
  const n = content.novelties;

  return (
    <Section id="novelties">
      <Container>
        <SectionHead kicker={t(n.kicker, lang)} title={t(n.heading, lang)} />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {n.items.map((item, i) => (
            <li
              key={i}
              className="relative rounded-2xl bg-ink text-cream p-7 md:p-8 flex flex-col gap-4 transition-transform hover:-translate-y-0.5"
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
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
