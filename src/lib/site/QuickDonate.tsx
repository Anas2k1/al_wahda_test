import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { useLanguage } from "./language";

const FUND_KEYS = ["qd.f.general", "qd.f.education", "qd.f.water", "qd.f.relief", "qd.f.orphan"] as const;
const PRESETS = [200, 500, 1000, 2000];
type Recurrence = "one_time" | "monthly" | "weekly";

export function QuickDonate() {
  const { t } = useLanguage();
  const [fundIdx, setFundIdx] = useState(0);
  const [recurrence, setRecurrence] = useState<Recurrence>("one_time");
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "bkash" | "nagad" | null>(null);
  const [paymentMethodMessage, setPaymentMethodMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!paymentMethod) return;
    if (paymentMethod !== "bank") {
      setPaymentMethodMessage(
        paymentMethod === "bkash"
          ? `${t("donate.paymentComingSoon")} — ${t("donate.paymentBkashSoon")}`
          : `${t("donate.paymentComingSoon")} — ${t("donate.paymentNagadSoon")}`,
      );
      setInfoMessage(null);
      return;
    }
    const finalAmount = custom ? Number(custom) : amount;
    if (!finalAmount || finalAmount < 1) {
      setError(t("qd.errMin"));
      return;
    }
    setPaymentMethodMessage(null);
    setInfoMessage(t("donate.bankTransferInfo"));
    setLoading(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-7 shadow-card"
      aria-label="Quick donation"
    >
      <div className="flex items-center gap-2 mb-5">
        <Heart className="size-5 text-gold" />
        <h3 className="font-serif text-2xl text-primary">{t("qd.title")}</h3>
      </div>

      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-full bg-muted mb-5">
        {([
          ["one_time", t("qd.oneTime")],
          ["monthly", t("qd.monthly")],
          ["weekly", t("qd.weekly")],
        ] as const).map(([val, label]) => (
          <button
            key={val}
            type="button"
            onClick={() => setRecurrence(val as Recurrence)}
            className={`text-xs font-medium py-2 rounded-full transition-colors ${
              recurrence === val
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {t("qd.fund")}
      </label>
      <select
        value={fundIdx}
        onChange={(e) => setFundIdx(Number(e.target.value))}
        className="w-full mb-5 rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
      >
        {FUND_KEYS.map((k, i) => (
          <option key={k} value={i}>{t(k)}</option>
        ))}
      </select>

      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {t("qd.amount")}
      </label>
      <div className="grid grid-cols-4 gap-2 mb-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => { setAmount(p); setCustom(""); }}
            className={`py-2.5 text-sm font-medium rounded-lg border transition-colors ${
              !custom && amount === p
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background hover:bg-accent"
            }`}
          >
            <span className="text-base font-semibold leading-none">৳</span>{p}
          </button>
        ))}
      </div>
      <div className="relative mb-5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-lg font-semibold leading-none">৳</span>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          placeholder={t("qd.other")}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="w-full rounded-lg border border-border bg-background pl-7 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
      </div>

      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {t("donate.paymentMethod")}
      </label>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { value: "bank", label: t("donate.paymentBank") },
          { value: "bkash", label: t("donate.paymentBkash") },
          { value: "nagad", label: t("donate.paymentNagad") },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              setPaymentMethod(option.value as typeof paymentMethod);
              if (option.value === "bank") {
                setPaymentMethodMessage(null);
              } else {
                setPaymentMethodMessage(
                  option.value === "bkash"
                    ? `${t("donate.paymentComingSoon")} — ${t("donate.paymentBkashSoon")}`
                    : `${t("donate.paymentComingSoon")} — ${t("donate.paymentNagadSoon")}`,
                );
              }
            }}
            className={`rounded-lg border px-2.5 py-2 text-xs font-medium transition-colors ${paymentMethod === option.value ? "border-primary bg-primary/5 text-primary" : "border-border bg-background hover:border-muted-foreground/40"}`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {paymentMethodMessage && (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          {paymentMethodMessage}
        </div>
      )}

      {infoMessage && (
        <div className="mb-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm text-primary-foreground">
          {infoMessage}
        </div>
      )}

      {paymentMethod === "bank" && (
        <div className="mb-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{t("donate.paymentBankDetails")}</p>
          <div className="mt-2 space-y-1">
            <p><span className="font-medium text-foreground">{t("donate.accountName")}:</span> {t("donate.accountNameValue")}</p>
            <p><span className="font-medium text-foreground">{t("donate.accountNo")}:</span> {t("donate.accountNoValue")}</p>
            <p><span className="font-medium text-foreground">{t("donate.bankName")}:</span> {t("donate.bankNameValue")}</p>
            <p><span className="font-medium text-foreground">{t("donate.routing")}:</span> {t("donate.routingValue")}</p>
          </div>
        </div>
      )}

      {error && (
        <p className="text-xs text-destructive mb-3" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading || !paymentMethod || paymentMethod !== "bank"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" /> {t("qd.redirect")}
          </>
        ) : (
          <>
            {t("qd.donate")} <span className="text-base font-semibold leading-none">৳</span>{custom || amount} {recurrence !== "one_time" && `/ ${recurrence === "monthly" ? t("qd.mo") : t("qd.wk")}`}
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-[11px] text-center text-muted-foreground">
        {t("qd.bankTransfer")}
      </p>
    </form>
  );
}
