import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-DIIev9ia.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as submitVolunteer, n as PageHeader, r as PageShell } from "./PageShell-DYZMqwXo.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/volunteer-CYRSqYW0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VolunteerPage() {
	const { t } = useLanguage();
	const submit = useServerFn(submitVolunteer);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		city: "",
		message: ""
	});
	const [interests, setInterests] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const interestOptions = [
		{
			id: "Education",
			label: t("vol.i.Education")
		},
		{
			id: "Relief",
			label: t("vol.i.Relief")
		},
		{
			id: "Water",
			label: t("vol.i.Water")
		},
		{
			id: "Healthcare",
			label: t("vol.i.Healthcare")
		},
		{
			id: "Fundraising",
			label: t("vol.i.Fundraising")
		},
		{
			id: "Tech & Web",
			label: t("vol.i.Tech")
		},
		{
			id: "Translation",
			label: t("vol.i.Translation")
		},
		{
			id: "Communications",
			label: t("vol.i.Comms")
		}
	];
	function toggle(i) {
		setInterests((s) => s.includes(i) ? s.filter((x) => x !== i) : [...s, i]);
	}
	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			await submit({ data: {
				...form,
				interests
			} });
			toast.success(t("vol.received"));
			setForm({
				name: "",
				email: "",
				phone: "",
				city: "",
				message: ""
			});
			setInterests([]);
		} catch (err) {
			toast.error(err.message || t("vol.err"));
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("vol.eyebrow"),
		title: t("vol.title"),
		lead: t("vol.lead")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-16 grid lg:grid-cols-12 gap-10 items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "lg:col-span-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							placeholder: t("vol.fullname"),
							className: "rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							value: form.email,
							onChange: (e) => setForm({
								...form,
								email: e.target.value
							}),
							placeholder: t("vol.email"),
							className: "rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.phone,
							onChange: (e) => setForm({
								...form,
								phone: e.target.value
							}),
							placeholder: t("vol.phone"),
							className: "rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.city,
							onChange: (e) => setForm({
								...form,
								city: e.target.value
							}),
							placeholder: t("vol.city"),
							className: "rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3",
					children: t("vol.interests")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: interestOptions.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggle(i.id),
						className: `rounded-full border px-4 py-2 text-xs font-medium transition-all ${interests.includes(i.id) ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-muted-foreground/40"}`,
						children: i.label
					}, i.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: form.message,
					onChange: (e) => setForm({
						...form,
						message: e.target.value
					}),
					placeholder: t("vol.msg"),
					rows: 5,
					className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: loading,
					className: "rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60",
					children: loading ? t("vol.submitting") : t("vol.submit")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-4 rounded-2xl border border-border bg-card p-7 shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-xl text-primary mb-3",
				children: t("vol.expect")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "text-sm text-muted-foreground space-y-3 list-disc pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("vol.e1") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("vol.e2") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("vol.e3") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("vol.e4") })
				]
			})]
		})]
	})] });
}
//#endregion
export { VolunteerPage as component };
