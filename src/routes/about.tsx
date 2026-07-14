import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { Ornament } from "@/lib/site/Ornament";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al Wahda Foundation" },
      {
        name: "description",
        content: "Our mission, vision, leadership, and the story of Al Wahda Foundation.",
      },
      { property: "og:title", content: "About — Al Wahda Foundation" },
      { property: "og:description", content: "Mission, vision, and leadership." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();

  const blocks = [
    { t: t("about.mission"), d: t("about.missionText") },
    { t: t("about.vision"), d: t("about.visionText") },
    { t: t("about.values"), d: t("about.valuesText") },
  ];

  const timeline = [
    { y: "2019", t: t("about.tl.2019") },
    { y: "2020", t: t("about.tl.2020") },
    { y: "2021", t: t("about.tl.2021") },
    { y: "2022", t: t("about.tl.2022") },
    { y: "2023", t: t("about.tl.2023") },
    { y: "2024", t: t("about.tl.2024") },
  ];

  const leaders = [
    { n: "Dr. Yusuf Karim", r: t("about.role.founder") },
    { n: "Amina Hadid", r: t("about.role.exec") },
    { n: "Tariq Hassan", r: t("about.role.programs") },
    { n: "Layla Othman", r: t("about.role.finance") },
    { n: "Saif Rahman", r: t("about.role.field") },
    { n: "Noor Aziz", r: t("about.role.comms") },
  ];

  return (
    <PageShell>
      <PageHeader eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.lead")} />

      <section className="container-prose py-20 grid md:grid-cols-3 gap-12">
        {blocks.map((b) => (
          <div key={b.t}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3">{b.t}</p>
            <h2 className="font-serif text-2xl text-primary mb-3">{b.t}</h2>
            <p className="text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-card border-y border-border">
        <div className="container-prose py-20">
          <div className="text-center mb-14">
            <Ornament className="w-24 mx-auto mb-5 opacity-60" />
            <h2 className="font-serif text-4xl text-primary">{t("about.timeline")}</h2>
          </div>
          <div className="space-y-10 max-w-2xl mx-auto">
            {timeline.map((m) => (
              <div key={m.y} className="grid grid-cols-[80px_1fr] gap-6 items-start">
                <span className="font-serif text-2xl text-gold">{m.y}</span>
                <p className="text-foreground/80 leading-relaxed pt-1">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <h2 className="font-serif text-3xl text-primary mb-10">{t("about.leadership")}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leaders.map((p) => (
            <div key={p.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="size-14 rounded-full bg-muted grid place-items-center font-serif text-xl text-primary mb-4">
                {p.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <h3 className="font-serif text-xl text-primary">{p.n}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.r}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
