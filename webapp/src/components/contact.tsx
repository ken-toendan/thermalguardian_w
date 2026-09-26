import { Container, Section, SectionHead } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { Mail } from "lucide-react";

export function Contact() {
  const { lang } = useLang();
  const c = content.contact;

  return (
    <Section id="contact" tone="navy">
      <Container className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <SectionHead
            kicker={t(c.kicker, lang)}
            title={t(c.heading, lang)}
            intro={t(c.intro, lang)}
            tone="navy"
            className="mb-0 max-w-xl"
          />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-5"><div className="flex flex-col gap-5">
          <Button asChild variant="brand" size="lg" className="w-fit">
            <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {c.email}
            </a>
          </Button>

          <dl className="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-5 flex flex-col gap-2">
            <dt className="kicker-uppercase text-cream/50">{t(c.basedInLabel, lang)}</dt>
            <dd className="text-sm text-cream/85">
              {lang === "en" ? (
                <>
                  Kyoto, Japan ·{" "}
                  <a href="https://www.kuas.ac.jp/en/" rel="noopener" className="text-brand hover:underline">
                    KUAS
                  </a>{" "}
                  ·{" "}
                  <a href="https://www.ubicomp-lab.org/" rel="noopener" className="text-brand hover:underline">
                    ubicomp lab
                  </a>
                </>
              ) : (
                <>
                  京都、日本{" "}
                  <a href="https://www.kuas.ac.jp/en/" rel="noopener" className="text-brand hover:underline">
                    KUAS
                  </a>{" "}
                  <a href="https://www.ubicomp-lab.org/" rel="noopener" className="text-brand hover:underline">
                    ubicomp lab
                  </a>
                </>
              )}
            </dd>
          </dl>
        </div>
        </Reveal>
      </Container>
    </Section>
  );
}
