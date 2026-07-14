import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as PageHeader, r as PageShell, t as Ornament } from "./PageShell-D-r5c41G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CuC4kCJd.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t } = useLanguage();
	const blocks = [
		{
			t: t("about.mission"),
			d: t("about.missionText")
		},
		{
			t: t("about.vision"),
			d: t("about.visionText")
		},
		{
			t: t("about.values"),
			d: t("about.valuesText")
		}
	];
	const timeline = [
		{
			y: "2019",
			t: t("about.tl.2019")
		},
		{
			y: "2020",
			t: t("about.tl.2020")
		},
		{
			y: "2021",
			t: t("about.tl.2021")
		},
		{
			y: "2022",
			t: t("about.tl.2022")
		},
		{
			y: "2023",
			t: t("about.tl.2023")
		},
		{
			y: "2024",
			t: t("about.tl.2024")
		}
	];
	const leaders = [
		{
			n: "Dr. Yusuf Karim",
			r: t("about.role.founder")
		},
		{
			n: "Amina Hadid",
			r: t("about.role.exec")
		},
		{
			n: "Tariq Hassan",
			r: t("about.role.programs")
		},
		{
			n: "Layla Othman",
			r: t("about.role.finance")
		},
		{
			n: "Saif Rahman",
			r: t("about.role.field")
		},
		{
			n: "Noor Aziz",
			r: t("about.role.comms")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: t("about.eyebrow"),
			title: t("about.title"),
			lead: t("about.lead")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-prose py-20 grid md:grid-cols-3 gap-12",
			children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3",
					children: b.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-primary mb-3",
					children: b.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: b.d
				})
			] }, b.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "w-24 mx-auto mb-5 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl text-primary",
						children: t("about.timeline")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-10 max-w-2xl mx-auto",
					children: timeline.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[80px_1fr] gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl text-gold",
							children: m.y
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed pt-1",
							children: m.t
						})]
					}, m.y))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-prose py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl text-primary mb-10",
				children: t("about.leadership")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6",
				children: leaders.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-14 rounded-full bg-muted grid place-items-center font-serif text-xl text-primary mb-4",
							children: p.n.split(" ").map((s) => s[0]).slice(0, 2).join("")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-primary",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: p.r
						})
					]
				}, p.n))
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
