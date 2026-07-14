import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { site } from "@/lib/site/site-config";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Al Wahda Foundation" },
      { name: "description", content: "Terms of use for the Al Wahda Foundation website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { t } = useLanguage();
  const p1 = t("terms.p1").replace("{name}", site.name);
  const p2 = t("terms.p2").replace("{email}", site.email);
  const p3 = t("terms.p3").replace("{name}", site.name);
  return (
    <PageShell>
      <PageHeader eyebrow={t("legal.eyebrow")} title={t("terms.title")} />
      <section className="container-prose py-16 max-w-2xl">
        <p className="text-sm text-muted-foreground">{t("terms.updated")}</p>
        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("terms.h1")}</h2>
        <p className="text-foreground/80 leading-relaxed">{p1}</p>
        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("terms.h2")}</h2>
        <p className="text-foreground/80 leading-relaxed">{p2}</p>
        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("terms.h3")}</h2>
        <p className="text-foreground/80 leading-relaxed">{p3}</p>
      </section>
    </PageShell>
  );
}
