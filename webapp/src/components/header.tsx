import * as React from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/section";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problem", key: "problem" },
  { href: "#how-it-works", key: "system" },
  { href: "#achievements", key: "achievements" },
  { href: "#team", key: "team" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
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

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-ink transition-colors"
            >
              {t(content.nav[link.key], lang)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ToggleGroup
            type="single"
            value={lang}
            onValueChange={(v) => v && setLang(v as "en" | "ja")}
            aria-label={t(content.nav.language, lang)}
            className="hidden sm:inline-flex"
          >
            <ToggleGroupItem value="en" aria-label="English">EN</ToggleGroupItem>
            <ToggleGroupItem value="ja" aria-label="日本語">日本語</ToggleGroupItem>
          </ToggleGroup>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-ink/15 text-ink hover:bg-ink/5"
              aria-label={t(content.nav.openMenu, lang)}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="mt-10 flex flex-col gap-5" aria-label="Main">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="text-lg font-semibold text-ink hover:text-brand transition-colors"
                  >
                    {t(content.nav[link.key], lang)}
                  </a>
                ))}
              </nav>
              <div className="mt-10 sm:hidden">
                <ToggleGroup
                  type="single"
                  value={lang}
                  onValueChange={(v) => v && setLang(v as "en" | "ja")}
                >
                  <ToggleGroupItem value="en">EN</ToggleGroupItem>
                  <ToggleGroupItem value="ja">日本語</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
