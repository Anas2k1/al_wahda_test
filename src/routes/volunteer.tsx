import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { submitVolunteer } from "@/lib/forms.functions";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Al Wahda Foundation" },
      { name: "description", content: "Apply to volunteer with our local and remote programs." },
      { property: "og:title", content: "Volunteer — Al Wahda Foundation" },
      { property: "og:description", content: "Apply to volunteer with our programs." },
    ],
  }),
  component: VolunteerPage,
});

function VolunteerPage() {
  const { t } = useLanguage();
  const submit = useServerFn(submitVolunteer);
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const interestOptions = [
    { id: "Education", label: t("vol.i.Education") },
    { id: "Relief", label: t("vol.i.Relief") },
    { id: "Water", label: t("vol.i.Water") },
    { id: "Healthcare", label: t("vol.i.Healthcare") },
    { id: "Fundraising", label: t("vol.i.Fundraising") },
    { id: "Tech & Web", label: t("vol.i.Tech") },
    { id: "Translation", label: t("vol.i.Translation") },
    { id: "Communications", label: t("vol.i.Comms") },
  ];

  function toggle(i: string) {
    setInterests((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await submit({ data: { ...form, interests } });
      toast.success(t("vol.received"));
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
      setInterests([]);
    } catch (err) {
      toast.error((err as Error).message || t("vol.err"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <PageHeader eyebrow={t("vol.eyebrow")} title={t("vol.title")} lead={t("vol.lead")} />
      <section className="container-prose py-16 grid lg:grid-cols-12 gap-10 items-start">
        <form onSubmit={onSubmit} className="lg:col-span-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("vol.fullname")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t("vol.email")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={t("vol.phone")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder={t("vol.city")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">{t("vol.interests")}</p>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((i) => (
                <button
                  type="button"
                  key={i.id}
                  onClick={() => toggle(i.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${interests.includes(i.id) ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-muted-foreground/40"}`}
                >
                  {i.label}
                </button>
              ))}
            </div>
          </div>

          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("vol.msg")} rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />

          <button disabled={loading} className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60">
            {loading ? t("vol.submitting") : t("vol.submit")}
          </button>
        </form>

        <aside className="lg:col-span-4 rounded-2xl border border-border bg-card p-7 shadow-soft">
          <h3 className="font-serif text-xl text-primary mb-3">{t("vol.expect")}</h3>
          <ul className="text-sm text-muted-foreground space-y-3 list-disc pl-5">
            <li>{t("vol.e1")}</li>
            <li>{t("vol.e2")}</li>
            <li>{t("vol.e3")}</li>
            <li>{t("vol.e4")}</li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}
