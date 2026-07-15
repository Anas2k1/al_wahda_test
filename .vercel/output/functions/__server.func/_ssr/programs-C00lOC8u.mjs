import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, r as PageShell } from "./PageShell-DWXiCHXU.mjs";
import { n as program_relief_default, r as program_water_default, t as program_education_default } from "./program-relief-CcEL8ca5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-C00lOC8u.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryChip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block text-[10px] font-medium uppercase tracking-widest text-gold border border-gold/40 rounded-full px-2.5 py-1",
		children
	});
}
function ProgramsPage() {
	const { t } = useLanguage();
	const programs = [
		{
			cat: t("programs.cat.Education"),
			title: t("programs.p1.t"),
			text: t("programs.p1.d"),
			img: program_education_default
		},
		{
			cat: t("programs.cat.Education"),
			title: t("programs.p2.t"),
			text: t("programs.p2.d"),
			img: program_education_default
		},
		{
			cat: t("programs.cat.Water"),
			title: t("programs.p3.t"),
			text: t("programs.p3.d"),
			img: program_water_default
		},
		{
			cat: t("programs.cat.Relief"),
			title: t("programs.p4.t"),
			text: t("programs.p4.d"),
			img: program_relief_default
		},
		{
			cat: t("programs.cat.Relief"),
			title: t("programs.p5.t"),
			text: t("programs.p5.d"),
			img: program_relief_default
		},
		{
			cat: t("programs.cat.Seasonal"),
			title: t("programs.p6.t"),
			text: t("programs.p6.d"),
			img: program_relief_default
		},
		{
			cat: t("programs.cat.Seasonal"),
			title: t("programs.p7.t"),
			text: t("programs.p7.d"),
			img: program_relief_default
		},
		{
			cat: t("programs.cat.Healthcare"),
			title: t("programs.p8.t"),
			text: t("programs.p8.d"),
			img: program_water_default
		},
		{
			cat: t("programs.cat.Orphans"),
			title: t("programs.p9.t"),
			text: t("programs.p9.d"),
			img: program_education_default
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("programs.eyebrow"),
		title: t("programs.title"),
		lead: t("programs.lead")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-prose py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
		children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.img,
					alt: "",
					loading: "lazy",
					width: 1200,
					height: 900,
					className: "w-full h-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChip, { children: p.cat }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-serif text-xl text-primary",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: p.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/donate",
							className: "text-xs font-semibold uppercase tracking-widest text-primary border-b border-gold pb-0.5 hover:text-gold",
							children: t("programs.support")
						})
					})
				]
			})]
		}, p.title))
	})] });
}
//#endregion
export { CategoryChip, ProgramsPage as component };
