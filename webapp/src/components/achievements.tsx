import { Container, Section, SectionHead } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Achievements() {
  const { lang } = useLang();
  const a = content.achievements;

  return (
    <Section id="achievements" alt>
      <Container>
        <SectionHead
          kicker={t(a.kicker, lang)}
          title={t(a.heading, lang)}
          intro={t(a.intro, lang)}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {a.items.map((item, i) => (
            <li
              key={i}
              className="rounded-2xl bg-white border border-ink/10 overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-md flex flex-col"
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
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
