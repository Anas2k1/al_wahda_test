import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { useLanguage, localizeDate } from "@/lib/site/language";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Al Wahda Foundation" },
      { name: "description", content: "Announcements, press releases, and event coverage from Al Wahda Foundation." },
      { property: "og:title", content: "News — Al Wahda Foundation" },
      { property: "og:description", content: "Announcements and field reports." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const { t, lang } = useLanguage();
  const posts = [
    { d: "Nov 18, 2024", t: t("news.n1.t"), c: t("news.n1.c") },
    { d: "Nov 02, 2024", t: t("news.n2.t"), c: t("news.n2.c") },
    { d: "Oct 24, 2024", t: t("news.n3.t"), c: t("news.n3.c") },
    { d: "Oct 09, 2024", t: t("news.n4.t"), c: t("news.n4.c") },
    { d: "Sep 30, 2024", t: t("news.n5.t"), c: t("news.n5.c") },
    { d: "Sep 12, 2024", t: t("news.n6.t"), c: t("news.n6.c") },
  ];

  return (
    <PageShell>
      <PageHeader eyebrow={t("news.eyebrow")} title={t("news.title")} />
      <section className="container-prose py-16">
        <div className="divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <article key={p.t} className="py-8 grid md:grid-cols-[160px_1fr] gap-6 group">
              <p className="text-xs text-muted-foreground font-mono">{localizeDate(p.d, lang)}</p>
              <div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-gold transition-colors">
                  <Link to="/news">{p.t}</Link>
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.c}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
