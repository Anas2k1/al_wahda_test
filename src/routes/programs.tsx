import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import waterImg from "@/assets/program-water.jpg";
import eduImg from "@/assets/program-education.jpg";
import reliefImg from "@/assets/program-relief.jpg";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Al Wahda Foundation" },
      { name: "description", content: "Our programs span education, relief, water, health, and seasonal initiatives." },
      { property: "og:title", content: "Programs — Al Wahda Foundation" },
      { property: "og:description", content: "Education, relief, water, health, and seasonal programs." },
    ],
  }),
  component: ProgramsPage,
});

export function CategoryChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-medium uppercase tracking-widest text-gold border border-gold/40 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

function ProgramsPage() {
  const { t } = useLanguage();
  const programs = [
    { cat: t("programs.cat.Education"), title: t("programs.p1.t"), text: t("programs.p1.d"), img: eduImg },
    { cat: t("programs.cat.Education"), title: t("programs.p2.t"), text: t("programs.p2.d"), img: eduImg },
    { cat: t("programs.cat.Water"), title: t("programs.p3.t"), text: t("programs.p3.d"), img: waterImg },
    { cat: t("programs.cat.Relief"), title: t("programs.p4.t"), text: t("programs.p4.d"), img: reliefImg },
    { cat: t("programs.cat.Relief"), title: t("programs.p5.t"), text: t("programs.p5.d"), img: reliefImg },
    { cat: t("programs.cat.Seasonal"), title: t("programs.p6.t"), text: t("programs.p6.d"), img: reliefImg },
    { cat: t("programs.cat.Seasonal"), title: t("programs.p7.t"), text: t("programs.p7.d"), img: reliefImg },
    { cat: t("programs.cat.Healthcare"), title: t("programs.p8.t"), text: t("programs.p8.d"), img: waterImg },
    { cat: t("programs.cat.Orphans"), title: t("programs.p9.t"), text: t("programs.p9.d"), img: eduImg },
  ];

  return (
    <PageShell>
      <PageHeader eyebrow={t("programs.eyebrow")} title={t("programs.title")} lead={t("programs.lead")} />
      <section className="container-prose py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt="" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <CategoryChip>{p.cat}</CategoryChip>
              <h3 className="mt-3 font-serif text-xl text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              <div className="mt-5 flex gap-3">
                <Link to="/donate" className="text-xs font-semibold uppercase tracking-widest text-primary border-b border-gold pb-0.5 hover:text-gold">
                  {t("programs.support")}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
