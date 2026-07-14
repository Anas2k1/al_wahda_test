import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/lib/site/PageShell";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/donate/cancel")({
  head: () => ({ meta: [{ title: "Donation cancelled — Al Wahda Foundation" }, { name: "robots", content: "noindex" }] }),
  component: CancelPage,
});

function CancelPage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <section className="container-prose py-32 max-w-xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-primary">{t("donate.cancel.title")}</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">{t("donate.cancel.body")}</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/donate" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">{t("donate.cancel.retry")}</Link>
          <Link to="/" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent">{t("donate.cancel.home")}</Link>
        </div>
      </section>
    </PageShell>
  );
}
