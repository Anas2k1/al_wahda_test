import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-CRW3mKC1.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as MapPin, l as Mail, o as Phone } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as PageShell, s as submitContact } from "./PageShell-Qo6aTyWB.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DRtwxJgK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t } = useLanguage();
	const submit = useServerFn(submitContact);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			await submit({ data: form });
			toast.success(t("contact.sent"));
			setForm({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
		} catch (err) {
			toast.error(err.message || t("contact.sendErr"));
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("contact.eyebrow"),
		title: t("contact.title"),
		lead: t("contact.lead")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-16 grid lg:grid-cols-12 gap-10 items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "lg:col-span-7 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: form.name,
						onChange: (e) => setForm({
							...form,
							name: e.target.value
						}),
						placeholder: t("contact.name"),
						className: "rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						value: form.email,
						onChange: (e) => setForm({
							...form,
							email: e.target.value
						}),
						placeholder: t("contact.email"),
						className: "rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: form.subject,
					onChange: (e) => setForm({
						...form,
						subject: e.target.value
					}),
					placeholder: t("contact.subject"),
					className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					required: true,
					value: form.message,
					onChange: (e) => setForm({
						...form,
						message: e.target.value
					}),
					rows: 7,
					placeholder: t("contact.message"),
					className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: loading,
					className: "rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60",
					children: loading ? t("contact.sending") : t("contact.send")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-5 space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl text-primary mb-5",
					children: t("contact.office")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-4 text-sm text-foreground/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-gold shrink-0 mt-0.5" }), t("contact.address")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-gold shrink-0 mt-0.5" }), t("contact.emailValue")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-gold shrink-0 mt-0.5" }), t("contact.phoneValue")]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Al Wahda Foundation location",
					src: "https://www.google.com/maps?q=37%2F2%20Purana%20Paltan%2C%20Fayenaz%20Tower%2C%20Calvert%20Road%2C%20Paltan%2C%20Dhaka-1000&z=16&output=embed",
					className: "h-[280px] w-full border-0",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
