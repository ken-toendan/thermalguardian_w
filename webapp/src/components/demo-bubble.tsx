import { ExternalLink } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";

const DEMO_URL = "https://dashboard-self-mu-98.vercel.app/demo";

export function DemoBubble() {
  const { lang } = useLang();
  const label = t(content.nav.demo, lang);

  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-cream shadow-lg shadow-brand/30 ring-2 ring-cream/40 transition-all hover:bg-brand-600 hover:shadow-xl hover:scale-105 active:scale-95 md:px-6 md:py-3.5 md:text-base"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cream" />
      </span>
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
