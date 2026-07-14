import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { submitContact } from "@/lib/forms.functions";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Al Wahda Foundation" },
      { name: "description", content: "Get in touch with our team." },
      { property: "og:title", content: "Contact — Al Wahda Foundation" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  const submit = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await submit({ data: form });
      toast.success(t("contact.sent"));
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error((err as Error).message || t("contact.sendErr"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <PageHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} lead={t("contact.lead")} />
      <section className="container-prose py-16 grid lg:grid-cols-12 gap-10 items-start">
        <form onSubmit={onSubmit} className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("contact.name")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t("contact.email")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder={t("contact.subject")} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={7} placeholder={t("contact.message")} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          <button disabled={loading} className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60">
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>

        <aside className="lg:col-span-5 space-y-5">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h3 className="font-serif text-xl text-primary mb-5">{t("contact.office")}</h3>
            <ul className="space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3"><MapPin className="size-4 text-gold shrink-0 mt-0.5" />{t("contact.address")}</li>
              <li className="flex gap-3"><Mail className="size-4 text-gold shrink-0 mt-0.5" />{t("contact.emailValue")}</li>
              <li className="flex gap-3"><Phone className="size-4 text-gold shrink-0 mt-0.5" />{t("contact.phoneValue")}</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-muted">
            <iframe
              title="Al Wahda Foundation location"
              src="https://www.google.com/maps?q=37%2F2%20Purana%20Paltan%2C%20Fayenaz%20Tower%2C%20Calvert%20Road%2C%20Paltan%2C%20Dhaka-1000&z=16&output=embed"
              className="h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
