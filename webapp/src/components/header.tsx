import * as React from "react";
import { Menu, ExternalLink } from "lucide-react";
import { Container } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DEMO_URL } from "@/components/demo-bubble";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problem", key: "problem" },
  { href: "#how-it-works", key: "system" },
  { href: "#aegis", key: "aegis" },
  { href: "#achievements", key: "achievements" },
  { href: "#resources", key: "talks" },
  { href: "#team", key: "team" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const { lang, setLang, edition, setEdition } = useLang();
  const [scrolled, setScrolled] = React.useState(false);

  // One toggle for EN / 日本語 / China. China keeps English text and switches videos to Bilibili.
  const toggleValue = edition === "cn" ? "cn" : lang;
  const onToggle = (v: string) => {
    if (!v) return;
    if (v === "cn") {
      setLang("en");
      setEdition("cn");
    } else {
      setLang(v as "en" | "ja");
      setEdition("intl");
    }
  };
  const chinaHint = t(content.nav.chinaHint, lang);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 md:h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2" aria-label="Thermal Guardian home">
          <img src="assets/brand/logo-lockup.png" alt="Thermal Guardian" className="h-12 md:h-14" />
        </a>

        <nav className="hidden lg:flex items-center gap-5 lg:gap-8" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-ink transition-colors whitespace-nowrap"
            >
              {t(content.nav[link.key], lang)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="brand" size="sm" className="hidden md:inline-flex">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              {t(content.nav.demo, lang)}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>

          <ToggleGroup
            type="single"
            value={toggleValue}
            onValueChange={onToggle}
            aria-label={t(content.nav.language, lang)}
            className="hidden sm:inline-flex"
          >
            <ToggleGroupItem value="en" aria-label="English">EN</ToggleGroupItem>
            <ToggleGroupItem value="ja" aria-label="日本語">日本語</ToggleGroupItem>
            <ToggleGroupItem value="cn" aria-label={chinaHint} title={chinaHint}>
              {t(content.nav.china, lang)}
            </ToggleGroupItem>
          </ToggleGroup>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-ink/15 text-ink hover:bg-ink/5"
              aria-label={t(content.nav.openMenu, lang)}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6" aria-describedby={undefined}>
              <SheetTitle className="sr-only">{t(content.nav.menu, lang)}</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1" aria-label="Main">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="block py-2.5 text-lg font-semibold text-ink hover:text-brand-700 transition-colors"
                  >
                    {t(content.nav[link.key], lang)}
                  </a>
                ))}
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSheetOpen(false)}
                  className="inline-flex items-center gap-2 py-2.5 text-lg font-semibold text-brand-700 hover:text-brand-600 transition-colors"
                >
                  {t(content.nav.demo, lang)}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </nav>
              <div className="mt-10 sm:hidden">
                <ToggleGroup
                  type="single"
                  value={toggleValue}
                  onValueChange={onToggle}
                  aria-label={t(content.nav.language, lang)}
                >
                  <ToggleGroupItem value="en" className="h-11 px-4 text-sm">EN</ToggleGroupItem>
                  <ToggleGroupItem value="ja" className="h-11 px-4 text-sm">日本語</ToggleGroupItem>
                  <ToggleGroupItem value="cn" className="h-11 px-4 text-sm" aria-label={chinaHint} title={chinaHint}>
                    {t(content.nav.china, lang)}
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
