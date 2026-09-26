import { Container } from "@/components/section";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

// Text wordmarks rather than logo images: the HEALTHINF and GCCE images are
// wide banners that turn into unreadable grey blocks at strip height.
export function VenueStrip() {
  const { lang } = useLang();

  return (
    <div className="bg-white border-y border-ink/10">
      <Container className="py-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
        <span className="kicker-uppercase text-ink/70 shrink-0">
          {t(content.hero.venuesLabel, lang)}
        </span>
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {content.hero.venues.map((venue) => (
            <li key={venue.en}>
              <a
                href="#achievements"
                className="font-display font-bold text-[15px] tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:underline"
              >
                {t(venue, lang)}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
