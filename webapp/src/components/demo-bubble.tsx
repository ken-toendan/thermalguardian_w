import * as React from "react";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

export const DEMO_URL = "https://dashboard-self-mu-98.vercel.app/demo";

export function DemoBubble() {
  const { lang } = useLang();
  const label = t(content.nav.demo, lang);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("hero");
    const contactEl = document.getElementById("contact");
    if (!hero) return;

    let heroVisible = true;
    let contactVisible = false;
    const update = () => setVisible(!heroVisible && !contactVisible);

    const heroObserver = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      update();
    });
    heroObserver.observe(hero);

    const contactObserver = contactEl
      ? new IntersectionObserver(([entry]) => {
          contactVisible = entry.isIntersecting;
          update();
        })
      : null;
    if (contactEl && contactObserver) contactObserver.observe(contactEl);

    return () => {
      heroObserver.disconnect();
      contactObserver?.disconnect();
    };
  }, []);

  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "fixed bottom-6 right-6 z-50 md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-brand text-ink shadow-lg shadow-brand/30 ring-2 ring-cream/40 transition-all hover:bg-brand-600 hover:scale-105 active:scale-95",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <span className="absolute top-2 right-2 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
      </span>
      <ExternalLink className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
