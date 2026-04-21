import { Container, Section, SectionHead } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Team() {
  const { lang } = useLang();
  const tm = content.team;

  return (
    <Section id="team">
      <Container>
        <SectionHead kicker={t(tm.kicker, lang)} title={t(tm.heading, lang)} />

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {tm.members.map((m) => (
            <li key={m.name} className="flex flex-col items-center text-center gap-4">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden bg-cream-2 ring-1 ring-ink/10">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <div className="font-display font-bold text-sm md:text-base">
                {m.name}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
