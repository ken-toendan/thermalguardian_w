import { Container, Section, SectionHead } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Resources() {
  const { lang } = useLang();
  const r = content.resources;

  return (
    <Section id="resources" alt>
      <Container>
        <SectionHead
          kicker={t(r.kicker, lang)}
          title={t(r.heading, lang)}
          intro={t(r.intro, lang)}
        />

        <figure className="max-w-4xl mx-auto flex flex-col gap-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-ink border border-ink/10 shadow-sm">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${r.videoId}`}
              title={r.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <figcaption className="text-center text-sm text-ink/60">
            {t(r.caption, lang)}
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
