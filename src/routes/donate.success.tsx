import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/lib/site/PageShell";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/donate/success")({
  head: () => ({ meta: [{ title: "Thank you — Al Wahda Foundation" }, { name: "robots", content: "noindex" }] }),
  component: SuccessPage,
});

function SuccessPage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <section className="container-prose py-32 max-w-xl text-center">
        <CheckCircle2 className="size-14 text-gold mx-auto mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-primary">{t("donate.success.title")}</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">{t("donate.success.body")}</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">{t("donate.success.home")}</Link>
          <Link to="/activities" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent">{t("donate.success.see")}</Link>
        </div>
      </section>
    </PageShell>
  );
}
