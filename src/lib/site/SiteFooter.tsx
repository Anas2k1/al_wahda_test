import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Ornament } from "./Ornament";
import { site } from "./site-config";
import { subscribeNewsletter } from "@/lib/forms.functions";
import { useLanguage } from "./language";

export function SiteFooter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await subscribeNewsletter({ data: { email } });
      toast.success(t("footer.subscribed"));
      setEmail("");
    } catch (err) {
      toast.error((err as Error).message || t("footer.subErr"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="grid size-9 place-items-center rounded-full bg-primary-foreground text-primary font-serif italic">
                W
              </span>
              <span className="font-serif text-2xl">{t("site.name")}</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md text-pretty leading-relaxed">
              {t("site.description")}
            </p>
            <p className="mt-5 text-xs uppercase tracking-widest text-gold">{t("site.registration")}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-5">{t("footer.site")}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li><Link to="/about" className="hover:text-primary-foreground">{t("nav.About")}</Link></li>
              <li><Link to="/programs" className="hover:text-primary-foreground">{t("nav.Programs")}</Link></li>
              <li><Link to="/activities" className="hover:text-primary-foreground">{t("nav.Activities")}</Link></li>
              <li><Link to="/news" className="hover:text-primary-foreground">{t("nav.News")}</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-foreground">{t("nav.Gallery")}</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary-foreground">{t("nav.Volunteer")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">{t("nav.Contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-5">{t("footer.newsletter")}</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">{t("footer.newsBody")}</p>
            <form onSubmit={onSubmit} className="flex flex-col gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.emailPh")}
                className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-md px-3 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold"
              />
              <button
                disabled={loading}
                className="rounded-md bg-gold text-gold-foreground py-2.5 text-sm font-medium hover:brightness-105 disabled:opacity-60 transition"
              >
                {loading ? t("footer.subscribing") : t("footer.subscribe")}
              </button>
            </form>

            <ul className="mt-6 text-xs text-primary-foreground/60 space-y-1">
              <li>{t("site.address")}</li>
              <li>{site.email}</li>
              <li>{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="my-10 flex justify-center">
          <Ornament className="w-32 opacity-50" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary-foreground">{t("nav.Privacy")}</Link>
            <Link to="/terms" className="hover:text-primary-foreground">{t("nav.Terms")}</Link>
            <Link to="/faq" className="hover:text-primary-foreground">{t("nav.FAQ")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
