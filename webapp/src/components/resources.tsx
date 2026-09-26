import { Container, Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { VideoFrame } from "@/components/video-frame";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Resources() {
  const { lang } = useLang();
  const r = content.resources;

  return (
    <Section id="resources">
      <Container>
        <Reveal>
          <SectionHead
            kicker={t(r.kicker, lang)}
            chapter="03"
            title={t(r.heading, lang)}
            intro={t(r.intro, lang)}
          />
        </Reveal>

        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {r.videos.map((video, i) => (
            <Reveal key={video.id} delay={0.1 + i * 0.05}>
              <figure className="flex flex-col gap-4">
                <VideoFrame videoId={video.id} title={video.title} />
                <figcaption className="text-center text-sm text-ink/70">
                  {t(video.caption, lang)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
