import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { toast } from "sonner";
import { Heart, Lock } from "lucide-react";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { donationFunds } from "@/lib/site/site-config";
import { createDonationCheckout } from "@/lib/donations.functions";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Al Wahda Foundation" },
      { name: "description", content: "Make a one-time or recurring donation to support education and humanitarian work." },
      { property: "og:title", content: "Donate — Al Wahda Foundation" },
      { property: "og:description", content: "Support our education and humanitarian programs." },
    ],
  }),
  component: DonatePage,
});

const presets = [25, 50, 100, 250, 500];

function DonatePage() {
  const { t } = useLanguage();
  const checkout = useServerFn(createDonationCheckout);

  const [fund, setFund] = useState<string>(donationFunds[0].id);
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [recurrence, setRecurrence] = useState<"one_time" | "weekly" | "monthly">("one_time");
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "bkash" | "nagad" | null>(null);
  const [loading, setLoading] = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!paymentMethod) return;
    if (paymentMethod !== "bank") {
      const comingSoonMessage = paymentMethod === "bkash"
        ? `${t("donate.paymentComingSoon")} — ${t("donate.paymentBkashSoon")}`
        : `${t("donate.paymentComingSoon")} — ${t("donate.paymentNagadSoon")}`;
      toast.info(comingSoonMessage);
      return;
    }
    if (!finalAmount || finalAmount < 1) {
      toast.error(t("donate.errAmount"));
      return;
    }
    if (!anonymous && !email) {
      toast.error(t("donate.errEmail"));
      return;
    }
    setLoading(true);
    try {
      const { url } = await checkout({
        data: {
          fund: donationFunds.find((f) => f.id === fund)?.label ?? fund,
          amount: Math.round(finalAmount),
          currency: "bdt",
          recurrence,
          donor_name: anonymous ? undefined : name || undefined,
          donor_email: anonymous ? undefined : email || undefined,
          donor_phone: anonymous ? undefined : phone || undefined,
          anonymous,
        },
      });
      window.location.href = url;
    } catch (err) {
      const msg = (err as Error).message || t("donate.errCheckout");
      toast.error(msg);
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <PageHeader eyebrow={t("donate.eyebrow")} title={t("donate.title")} lead={t("donate.lead")} />

      <section className="container-prose py-16 grid lg:grid-cols-12 gap-10 items-start">
        <form onSubmit={handleSubmit} className="lg:col-span-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-8 animate-fade-in">
          <div>
            <label className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {t("donate.selectFund")}
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {donationFunds.map((f) => (
                <label key={f.id} className={`rounded-lg border p-3.5 cursor-pointer transition-all ${fund === f.id ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/40"}`}>
                  <input type="radio" name="fund" value={f.id} checked={fund === f.id} onChange={() => setFund(f.id)} className="sr-only" />
                  <p className="font-medium text-sm text-foreground">{t(`fund.${f.id}.l` as never)}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t(`fund.${f.id}.d` as never)}</p>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {t("donate.amount")}
            </label>
            <div className="grid grid-cols-5 gap-2 mb-3">
              {presets.map((p) => (
                <button type="button" key={p} onClick={() => { setAmount(p); setCustom(""); }} className={`py-3 rounded-lg border text-sm font-medium transition-all ${!custom && amount === p ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-muted-foreground/40"}`}>
                  <span className="text-base font-semibold leading-none">৳</span>{p}
                </button>
              ))}
            </div>
            <input type="number" min={1} placeholder={t("donate.custom")} value={custom} onChange={(e) => setCustom(e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {t("donate.frequency")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: "one_time", l: t("donate.once") },
                { v: "monthly", l: t("donate.monthly") },
                { v: "weekly", l: t("donate.weekly") },
              ].map((r) => (
                <button type="button" key={r.v} onClick={() => setRecurrence(r.v as typeof recurrence)} className={`py-3 rounded-lg border text-sm font-medium transition-all ${recurrence === r.v ? "border-primary bg-primary/5 text-primary" : "border-border bg-background hover:border-muted-foreground/40"}`}>
                  {r.l}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 flex items-center gap-2">
              <input id="anon" type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="size-4 rounded border-border" />
              <label htmlFor="anon" className="text-sm text-foreground">{t("donate.anon")}</label>
            </div>
            <input disabled={anonymous} value={name} onChange={(e) => setName(e.target.value)} placeholder={t("vol.fullname")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm disabled:opacity-50 focus:outline-none focus:border-primary" />
            <input disabled={anonymous} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={t("vol.email")} className="rounded-lg border border-border bg-background px-4 py-3 text-sm disabled:opacity-50 focus:outline-none focus:border-primary" />
            <input disabled={anonymous} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("vol.phone")} className="sm:col-span-2 rounded-lg border border-border bg-background px-4 py-3 text-sm disabled:opacity-50 focus:outline-none focus:border-primary" />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {t("donate.paymentMethod")}
            </label>
            <div className="grid sm:grid-cols-3 gap-2">
              {[
                { value: "bank", label: t("donate.paymentBank") },
                { value: "bkash", label: t("donate.paymentBkash") },
                { value: "nagad", label: t("donate.paymentNagad") },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPaymentMethod(option.value as typeof paymentMethod)}
                  className={`rounded-lg border px-3 py-3 text-sm font-medium transition-all ${paymentMethod === option.value ? "border-primary bg-primary/5 text-primary" : "border-border bg-background hover:border-muted-foreground/40"}`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {paymentMethod === "bank" && (
              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2">
                <p className="text-sm font-semibold text-foreground">{t("donate.paymentBankDetails")}</p>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <div className="flex justify-between gap-4"><span>{t("donate.accountName")}</span><span className="font-medium text-foreground">{t("donate.accountNameValue")}</span></div>
                  <div className="flex justify-between gap-4"><span>{t("donate.accountNo")}</span><span className="font-medium text-foreground">{t("donate.accountNoValue")}</span></div>
                  <div className="flex justify-between gap-4"><span>{t("donate.bankName")}</span><span className="font-medium text-foreground">{t("donate.bankNameValue")}</span></div>
                  <div className="flex justify-between gap-4"><span>{t("donate.routing")}</span><span className="font-medium text-foreground">{t("donate.routingValue")}</span></div>
                </div>
              </div>
            )}
            {paymentMethod && paymentMethod !== "bank" && (
              <div className="mt-4 rounded-xl border border-dashed border-border bg-background/70 p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{t("donate.paymentComingSoon")}</p>
                <p className="mt-1">{paymentMethod === "bkash" ? t("donate.paymentBkashSoon") : t("donate.paymentNagadSoon")}</p>
              </div>
            )}
          </div>

          <button disabled={loading || !paymentMethod || paymentMethod !== "bank"} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-sm font-medium hover:opacity-90 disabled:opacity-60 transition-opacity">
            {!paymentMethod ? t("donate.paymentMethod") : paymentMethod !== "bank" ? t("donate.paymentComingSoon") : loading ? t("donate.redirect") : (
              <>
                <Heart className="size-4" />
                {t("donate.button")} <span className="text-base font-semibold leading-none">৳</span>{finalAmount || "—"} {recurrence !== "one_time" && `/ ${recurrence === "monthly" ? t("donate.month") : t("donate.week")}`}
              </>
            )}
          </button>

          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3" />
            {t("donate.stripe")}
          </p>
        </form>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h3 className="font-serif text-xl text-primary mb-3">{t("donate.where")}</h3>
            <ul className="text-sm text-muted-foreground space-y-2.5">
              <li><strong className="text-foreground">94%</strong> {t("donate.direct")}</li>
              <li><strong className="text-foreground">4%</strong> {t("donate.opsGov")}</li>
              <li><strong className="text-foreground">2%</strong> {t("donate.fund")}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-primary text-primary-foreground p-7">
            <h3 className="font-serif text-xl mb-3">{t("donate.taxTitle")}</h3>
            <p className="text-sm text-primary-foreground/80">{t("donate.taxBody")}</p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
