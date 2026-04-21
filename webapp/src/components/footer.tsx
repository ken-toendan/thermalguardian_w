import { Container } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

export function Footer() {
  const { lang } = useLang();
  const f = content.footer;

  return (
    <footer className="bg-ink text-cream">
      <Container className="py-12 md:py-16 grid gap-10 md:grid-cols-[1fr_auto] items-start">
        <div className="flex flex-col gap-3">
          <span className="kicker-uppercase text-cream/50">{t(f.developedAt, lang)}</span>
          <a href="https://www.kuas.ac.jp/en/" rel="noopener" className="inline-block max-w-[160px]">
            <img src="assets/brand/kuas-logo.png" alt="Kyoto University of Advanced Science (KUAS)" className="h-12 w-auto" />
          </a>
          <p className="text-sm text-cream/70">
            <a href="https://www.ubicomp-lab.org/" rel="noopener" className="text-cream hover:text-brand transition-colors font-semibold">
              {t(f.labName, lang)}
            </a>
            <span className="ml-1 text-cream/50">· {t(f.labLocation, lang)}</span>
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <div className="flex items-center gap-2">
            <img src="assets/brand/logo-white.png" alt="" aria-hidden="true" className="h-6 w-auto" />
            <span className="font-display font-bold text-cream">Thermal Guardian</span>
          </div>
          <p className="text-xs text-cream/50">{t(f.legal, lang)}</p>
        </div>
      </Container>
    </footer>
  );
}
