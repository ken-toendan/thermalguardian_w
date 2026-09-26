import { Container } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

const venues = [
  { src: "assets/achievements/healthinf-banner.png", alt: "HEALTHINF 2026" },
  { src: "assets/achievements/ican-logo.jpg", alt: "iCAN 2026" },
  { src: "assets/achievements/ubicomp-2026-logo.png", alt: "UbiComp/ISWC 2026" },
  { src: "assets/achievements/gcce-2026-banner.png", alt: "IEEE GCCE 2026" },
  { src: "assets/brand/kuas-logo.png", alt: "KUAS" },
];

export function VenueStrip() {
  const { lang } = useLang();

  return (
    <section className="bg-white border-t border-ink/10">
      <Container className="py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <span className="kicker-uppercase text-ink/50 shrink-0">
          {t(content.hero.venuesLabel, lang)}
        </span>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {venues.map((v) => (
            <li key={v.src}>
              <a
                href="#achievements"
                className="block rounded grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 focus-visible:grayscale-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
              >
                <img src={v.src} alt={v.alt} className="h-7 md:h-8 w-auto object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
