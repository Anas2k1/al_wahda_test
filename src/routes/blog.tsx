import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Al Wahda Foundation" },
      { name: "description", content: "Stories, reflections, and insights from Al Wahda Foundation's field teams and partners." },
      { property: "og:title", content: "Blog — Al Wahda Foundation" },
      { property: "og:description", content: "Stories and reflections from the field." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useLanguage();
  const posts = [
    { slug: "ethics-of-giving", date: "Dec 04, 2024", author: "Layla Rahman", readTime: 6, category: t("blog.cat.Reflections"), title: t("blog.b1.t"), excerpt: t("blog.b1.e") },
    { slug: "water-changes-village", date: "Nov 22, 2024", author: "Tariq Hassan", readTime: 8, category: t("blog.cat.FieldNotes"), title: t("blog.b2.t"), excerpt: t("blog.b2.e") },
    { slug: "scholarship-stories", date: "Nov 10, 2024", author: "Amina Yusuf", readTime: 5, category: t("blog.cat.Education"), title: t("blog.b3.t"), excerpt: t("blog.b3.e") },
    { slug: "transparency-matters", date: "Oct 28, 2024", author: "Board of Trustees", readTime: 4, category: t("blog.cat.Governance"), title: t("blog.b4.t"), excerpt: t("blog.b4.e") },
    { slug: "ramadan-logistics", date: "Oct 15, 2024", author: "Operations Team", readTime: 7, category: t("blog.cat.Operations"), title: t("blog.b5.t"), excerpt: t("blog.b5.e") },
    { slug: "volunteer-voices", date: "Oct 02, 2024", author: "Imran Choudhury", readTime: 5, category: t("blog.cat.Community"), title: t("blog.b6.t"), excerpt: t("blog.b6.e") },
  ];
  const [featured, ...rest] = posts;

  return (
    <PageShell>
      <PageHeader eyebrow={t("blog.eyebrow")} title={t("blog.title")} lead={t("blog.lead")} />

      <section className="container-prose py-16">
        <article className="grid md:grid-cols-2 gap-10 items-center border border-border rounded-2xl overflow-hidden bg-card">
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-gold/10 to-primary/5 relative">
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-serif italic text-7xl text-primary/30">W</span>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono uppercase tracking-wider">
              <span className="text-gold">{featured.category}</span>
              <span>•</span>
              <span>{featured.date}</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary leading-tight">
              <Link to="/blog" className="hover:text-gold transition-colors">{featured.title}</Link>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{t("blog.by")} {featured.author}</span>
              <span>·</span>
              <span>{featured.readTime} {t("blog.readTime")}</span>
            </div>
          </div>
        </article>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((p) => (
            <article key={p.slug} className="group border border-border rounded-xl p-6 bg-card hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold">{p.category}</div>
              <h3 className="mt-3 font-serif text-2xl text-primary leading-snug group-hover:text-gold transition-colors">
                <Link to="/blog">{p.title}</Link>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.author}</span>
                <span>{p.date} · {p.readTime} {t("blog.readTime")}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-primary">{t("blog.newsletter.title")}</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("blog.newsletter.body")}</p>
          <Link to="/contact" className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            {t("blog.subscribe")}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
