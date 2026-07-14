import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as localizeDate, r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as PageHeader, r as PageShell } from "./PageShell-D-r5c41G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activities-C_PSTy6I.js
var import_jsx_runtime = require_jsx_runtime();
function ActivitiesPage() {
	const { t, lang } = useLanguage();
	const activities = [
		{
			date: "Nov 2024",
			status: "Active",
			title: t("act.a1.t"),
			desc: t("act.a1.d"),
			progress: 74
		},
		{
			date: "Oct 2024",
			status: "Active",
			title: t("act.a2.t"),
			desc: t("act.a2.d"),
			progress: 38
		},
		{
			date: "Oct 2024",
			status: "Ongoing",
			title: t("act.a3.t"),
			desc: t("act.a3.d"),
			progress: 62
		},
		{
			date: "Sep 2024",
			status: "Complete",
			title: t("act.a4.t"),
			desc: t("act.a4.d"),
			progress: 100
		},
		{
			date: "Sep 2024",
			status: "Active",
			title: t("act.a5.t"),
			desc: t("act.a5.d"),
			progress: 55
		},
		{
			date: "Aug 2024",
			status: "Complete",
			title: t("act.a6.t"),
			desc: t("act.a6.d"),
			progress: 100
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("act.eyebrow"),
		title: t("act.title"),
		lead: t("act.lead")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-prose py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border",
			children: activities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 grid md:grid-cols-12 gap-6 items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground font-mono",
							children: localizeDate(a.date, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${a.status === "Active" ? "bg-primary" : a.status === "Complete" ? "bg-gold" : "bg-muted-foreground"}` }), t(`act.status.${a.status}`)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-primary",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: a.desc
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs font-mono mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t("act.progress")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [a.progress, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 bg-muted rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-primary",
								style: { width: `${a.progress}%` }
							})
						})]
					})
				]
			}, a.title))
		})
	})] });
}
//#endregion
export { ActivitiesPage as component };
