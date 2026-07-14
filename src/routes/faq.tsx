import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Al Wahda Foundation" },
      { name: "description", content: "Frequently asked questions about donations, programs, and operations." },
      { property: "og:title", content: "FAQ — Al Wahda Foundation" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLanguage();
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];
  return (
    <PageShell>
      <PageHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
      <section className="container-prose py-16 max-w-2xl">
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-serif text-xl text-primary">
                {f.q}
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
