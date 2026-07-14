import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, HandHeart, BookOpen, Users, Globe } from "lucide-react";
import { PageShell } from "@/lib/site/PageShell";
import { Ornament } from "@/lib/site/Ornament";
import { AnimatedCounter } from "@/lib/site/AnimatedCounter";
import { QuickDonate } from "@/lib/site/QuickDonate";
import { useLanguage } from "@/lib/site/language";
import { DonationSectors } from "@/lib/site/DonationSectors";
import { site } from "@/lib/site/site-config";
import heroImg from "@/assets/hero.jpg";
import waterImg from "@/assets/program-water.jpg";
import eduImg from "@/assets/program-education.jpg";
import reliefImg from "@/assets/program-relief.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Wahda Foundation — Serving Allah's creation to attain His pleasure." },
      {
        name: "description",
        content:
          "A non-profit advancing education, humanitarian relief, and community welfare with integrity and care.",
      },
      { property: "og:title", content: "Al Wahda Foundation" },
      {
        property: "og:description",
        content: "Education, relief, and community welfare with integrity and care.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container-prose relative z-10 grid lg:grid-cols-12 gap-12 py-16 md:py-24 items-start">
          <div className="lg:col-span-7 animate-fade-in">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-5">
              {t("home.established")} · {site.registration.replace("Charity Registration No. ", "Reg. ")}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.05] text-balance">
              {t("home.title1")} <em className="italic">{t("home.titleEm")}</em>.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground text-pretty leading-relaxed">
              {t("home.lead")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {t("cta.DonateNow")}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                {t("cta.LearnMore")}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuickDonate />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="container-prose py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: 124000, label: t("home.stats.beneficiaries") },
            { v: 42, label: t("home.stats.projects") },
            { v: 1850, label: t("home.stats.volunteers") },
            { v: 18, label: t("home.stats.countries") },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl md:text-5xl text-primary">
                <AnimatedCounter value={s.v} suffix={s.v >= 1000 ? "+" : ""} />
              </div>
              <p className="mt-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* DONATION SECTORS */}
      <DonationSectors />


      {/* PILLARS */}
      <section className="container-prose py-24">
        <div className="text-center mb-16">
          <Ornament className="w-24 mx-auto mb-6 opacity-60" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary">{t("home.pillars.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {t("home.pillars.lead")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: t("home.pillars.education.title"),
              text: t("home.pillars.education.text"),
              img: eduImg,
            },
            {
              icon: HandHeart,
              title: t("home.pillars.service.title"),
              text: t("home.pillars.service.text"),
              img: reliefImg,
            },
            {
              icon: BookOpen,
              title: t("home.pillars.outreach.title"),
              text: t("home.pillars.outreach.text"),
              img: waterImg,
            },
          ].map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p.icon className="size-6 text-gold mb-3" />
                <h3 className="font-serif text-2xl text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-card border-y border-border">
        <div className="container-prose py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3">{t("home.activities.eyebrow")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary">{t("home.activities.title")}</h2>
            </div>
            <Link
              to="/activities"
              className="text-sm font-medium text-primary border-b border-gold pb-0.5 hover:text-gold transition-colors"
            >
              {t("home.activities.viewAll")}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: t("home.act.tag.infra"),
                title: t("home.act.a1.t"),
                text: t("home.act.a1.d"),
                img: waterImg,
              },
              {
                tag: t("home.act.tag.edu"),
                title: t("home.act.a2.t"),
                text: t("home.act.a2.d"),
                img: eduImg,
              },
            ].map((a) => (
              <article
                key={a.title}
                className="rounded-2xl border border-border bg-background overflow-hidden grid sm:grid-cols-5 shadow-soft"
              >
                <div className="sm:col-span-2 aspect-square sm:aspect-auto overflow-hidden">
                  <img src={a.img} alt="" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-3 p-6 flex flex-col">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-gold">{a.tag}</p>
                  <h3 className="mt-2 font-serif text-xl text-primary">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                  <Link to="/activities" className="mt-auto pt-4 text-xs font-semibold uppercase tracking-widest text-primary hover:opacity-70">
                    {t("home.activities.readMore")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-24">
        <div className="rounded-3xl border border-border bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-5 gap-10 items-center shadow-card">
          <div className="md:col-span-3">
            <Ornament className="w-24 mb-5 opacity-70" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance">
              {t("home.cta.title1")} <em className="italic text-gold">{t("home.cta.titleEm")}</em>
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-lg">
              {t("home.cta.lead")}
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-4 text-sm font-medium hover:brightness-105"
            >
              {t("home.cta.donate")}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-4 text-sm font-medium hover:bg-primary-foreground/10"
            >
              <Users className="size-4" />
              {t("home.cta.volunteer")}
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground"
            >
              <Globe className="size-4" />
              {t("home.cta.where")}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
