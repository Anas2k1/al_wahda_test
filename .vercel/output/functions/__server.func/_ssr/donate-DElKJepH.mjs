import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { p as Heart, u as Lock } from "../_libs/lucide-react.mjs";
import { a as donationFunds, n as PageHeader, r as PageShell } from "./PageShell-DWXiCHXU.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as createDonationCheckout } from "./donations.functions-j0TzPf-7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-DElKJepH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var presets = [
	25,
	50,
	100,
	250,
	500
];
function DonatePage() {
	const { t } = useLanguage();
	const checkout = useServerFn(createDonationCheckout);
	const [fund, setFund] = (0, import_react.useState)(donationFunds[0].id);
	const [amount, setAmount] = (0, import_react.useState)(50);
	const [custom, setCustom] = (0, import_react.useState)("");
	const [recurrence, setRecurrence] = (0, import_react.useState)("one_time");
	const [anonymous, setAnonymous] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const finalAmount = custom ? Number(custom) : amount;
	async function handleSubmit(e) {
		e.preventDefault();
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
			const { url } = await checkout({ data: {
				fund: donationFunds.find((f) => f.id === fund)?.label ?? fund,
				amount: Math.round(finalAmount),
				currency: "bdt",
				recurrence,
				donor_name: anonymous ? void 0 : name || void 0,
				donor_email: anonymous ? void 0 : email || void 0,
				donor_phone: anonymous ? void 0 : phone || void 0,
				anonymous
			} });
			window.location.href = url;
		} catch (err) {
			const msg = err.message || t("donate.errCheckout");
			toast.error(msg);
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("donate.eyebrow"),
		title: t("donate.title"),
		lead: t("donate.lead")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-16 grid lg:grid-cols-12 gap-10 items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "lg:col-span-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-8 animate-fade-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3",
					children: t("donate.selectFund")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-2.5",
					children: donationFunds.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `rounded-lg border p-3.5 cursor-pointer transition-all ${fund === f.id ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/40"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "fund",
								value: f.id,
								checked: fund === f.id,
								onChange: () => setFund(f.id),
								className: "sr-only"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm text-foreground",
								children: t(`fund.${f.id}.l`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: t(`fund.${f.id}.d`)
							})
						]
					}, f.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3",
						children: t("donate.amount")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-5 gap-2 mb-3",
						children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setAmount(p);
								setCustom("");
							},
							className: `py-3 rounded-lg border text-sm font-medium transition-all ${!custom && amount === p ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-muted-foreground/40"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-semibold leading-none",
								children: "৳"
							}), p]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 1,
						placeholder: t("donate.custom"),
						value: custom,
						onChange: (e) => setCustom(e.target.value),
						className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3",
					children: t("donate.frequency")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						{
							v: "one_time",
							l: t("donate.once")
						},
						{
							v: "monthly",
							l: t("donate.monthly")
						},
						{
							v: "weekly",
							l: t("donate.weekly")
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRecurrence(r.v),
						className: `py-3 rounded-lg border text-sm font-medium transition-all ${recurrence === r.v ? "border-primary bg-primary/5 text-primary" : "border-border bg-background hover:border-muted-foreground/40"}`,
						children: r.l
					}, r.v))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "anon",
								type: "checkbox",
								checked: anonymous,
								onChange: (e) => setAnonymous(e.target.checked),
								className: "size-4 rounded border-border"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "anon",
								className: "text-sm text-foreground",
								children: t("donate.anon")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: anonymous,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: t("vol.fullname"),
							className: "rounded-lg border border-border bg-background px-4 py-3 text-sm disabled:opacity-50 focus:outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: anonymous,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							type: "email",
							placeholder: t("vol.email"),
							className: "rounded-lg border border-border bg-background px-4 py-3 text-sm disabled:opacity-50 focus:outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: anonymous,
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: t("vol.phone"),
							className: "sm:col-span-2 rounded-lg border border-border bg-background px-4 py-3 text-sm disabled:opacity-50 focus:outline-none focus:border-primary"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: loading,
					className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-sm font-medium hover:opacity-90 disabled:opacity-60 transition-opacity",
					children: loading ? t("donate.redirect") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }),
						t("donate.button"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-semibold leading-none",
							children: "৳"
						}),
						finalAmount || "—",
						" ",
						recurrence !== "one_time" && `/ ${recurrence === "monthly" ? t("donate.month") : t("donate.week")}`
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), t("donate.stripe")]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-4 space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl text-primary mb-3",
					children: t("donate.where")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "text-sm text-muted-foreground space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "94%"
							}),
							" ",
							t("donate.direct")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "4%"
							}),
							" ",
							t("donate.opsGov")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "2%"
							}),
							" ",
							t("donate.fund")
						] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-primary text-primary-foreground p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl mb-3",
					children: t("donate.taxTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-primary-foreground/80",
					children: t("donate.taxBody")
				})]
			})]
		})]
	})] });
}
//#endregion
export { DonatePage as component };
