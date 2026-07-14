import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { site } from "@/lib/site/site-config";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Al Wahda Foundation" },
      { name: "description", content: "How Al Wahda Foundation collects, stores, and uses your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useLanguage();
  const updated = t("privacy.updated").replace("{name}", site.name);
  const rights = t("privacy.p3").replace("{email}", site.email);
  return (
    <PageShell>
      <PageHeader eyebrow={t("legal.eyebrow")} title={t("privacy.title")} />
      <section className="container-prose py-16 max-w-2xl prose prose-stone">
        <p className="text-sm text-muted-foreground">{updated}</p>

        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("privacy.h1")}</h2>
        <p className="text-foreground/80 leading-relaxed">{t("privacy.p1")}</p>

        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("privacy.h2")}</h2>
        <p className="text-foreground/80 leading-relaxed">{t("privacy.p2")}</p>

        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("privacy.h3")}</h2>
        <p className="text-foreground/80 leading-relaxed">{rights}</p>

        <h2 className="font-serif text-2xl text-primary mt-10 mb-3">{t("privacy.h4")}</h2>
        <p className="text-foreground/80 leading-relaxed">{t("privacy.p4")}</p>
      </section>
    </PageShell>
  );
}
