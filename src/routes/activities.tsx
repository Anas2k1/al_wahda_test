import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { useLanguage, localizeDate } from "@/lib/site/language";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Al Wahda Foundation" },
      { name: "description", content: "Ongoing field operations and their current progress." },
      { property: "og:title", content: "Activities — Al Wahda Foundation" },
      { property: "og:description", content: "Active operations and field reports." },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const { t, lang } = useLanguage();
  const activities = [
    { date: "Nov 2024", status: "Active" as const, title: t("act.a1.t"), desc: t("act.a1.d"), progress: 74 },
    { date: "Oct 2024", status: "Active" as const, title: t("act.a2.t"), desc: t("act.a2.d"), progress: 38 },
    { date: "Oct 2024", status: "Ongoing" as const, title: t("act.a3.t"), desc: t("act.a3.d"), progress: 62 },
    { date: "Sep 2024", status: "Complete" as const, title: t("act.a4.t"), desc: t("act.a4.d"), progress: 100 },
    { date: "Sep 2024", status: "Active" as const, title: t("act.a5.t"), desc: t("act.a5.d"), progress: 55 },
    { date: "Aug 2024", status: "Complete" as const, title: t("act.a6.t"), desc: t("act.a6.d"), progress: 100 },
  ];

  return (
    <PageShell>
      <PageHeader eyebrow={t("act.eyebrow")} title={t("act.title")} lead={t("act.lead")} />
      <section className="container-prose py-16">
        <div className="rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border">
          {activities.map((a) => (
            <div key={a.title} className="p-6 grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-2">
                <p className="text-xs text-muted-foreground font-mono">{localizeDate(a.date, lang)}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
                  <span className={`size-1.5 rounded-full ${a.status === "Active" ? "bg-primary" : a.status === "Complete" ? "bg-gold" : "bg-muted-foreground"}`} />
                  {t(`act.status.${a.status}` as never)}
                </p>
              </div>
              <div className="md:col-span-7">
                <h3 className="font-serif text-xl text-primary">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
              </div>
              <div className="md:col-span-3">
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-muted-foreground">{t("act.progress")}</span>
                  <span className="text-primary">{a.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${a.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
