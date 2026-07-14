import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "../../assets/wahdalogo.png";
import { navLinks, site } from "./site-config";
import { useLanguage, type Lang } from "./language";

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
        lang === l ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-border p-0.5 ${className}`}>
      {btn("en", "EN")}
      {btn("bn", "বাং")}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-prose flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logoImg} alt="Al Wahda Foundation logo" className="h-9 w-auto rounded-full object-cover" />
          <span className="font-serif text-xl tracking-tight text-primary">{site.name}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {t(`nav.${l.label}` as never)}
            </Link>
          ))}
          <LangToggle className="ml-2" />
          <Link
            to="/donate"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t("cta.Donate")}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LangToggle />
          <button
            aria-label="Open menu"
            className="grid place-items-center size-10 rounded-md border border-border text-foreground"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-4 flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80"
              >
                {t(`nav.${l.label}` as never)}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {t("cta.Donate")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
