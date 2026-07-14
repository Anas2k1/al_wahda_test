import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, r as PageShell } from "./PageShell-D-r5c41G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CNWU-REH.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	const { t } = useLanguage();
	const [featured, ...rest] = [
		{
			slug: "ethics-of-giving",
			date: "Dec 04, 2024",
			author: "Layla Rahman",
			readTime: 6,
			category: t("blog.cat.Reflections"),
			title: t("blog.b1.t"),
			excerpt: t("blog.b1.e")
		},
		{
			slug: "water-changes-village",
			date: "Nov 22, 2024",
			author: "Tariq Hassan",
			readTime: 8,
			category: t("blog.cat.FieldNotes"),
			title: t("blog.b2.t"),
			excerpt: t("blog.b2.e")
		},
		{
			slug: "scholarship-stories",
			date: "Nov 10, 2024",
			author: "Amina Yusuf",
			readTime: 5,
			category: t("blog.cat.Education"),
			title: t("blog.b3.t"),
			excerpt: t("blog.b3.e")
		},
		{
			slug: "transparency-matters",
			date: "Oct 28, 2024",
			author: "Board of Trustees",
			readTime: 4,
			category: t("blog.cat.Governance"),
			title: t("blog.b4.t"),
			excerpt: t("blog.b4.e")
		},
		{
			slug: "ramadan-logistics",
			date: "Oct 15, 2024",
			author: "Operations Team",
			readTime: 7,
			category: t("blog.cat.Operations"),
			title: t("blog.b5.t"),
			excerpt: t("blog.b5.e")
		},
		{
			slug: "volunteer-voices",
			date: "Oct 02, 2024",
			author: "Imran Choudhury",
			readTime: 5,
			category: t("blog.cat.Community"),
			title: t("blog.b6.t"),
			excerpt: t("blog.b6.e")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("blog.eyebrow"),
		title: t("blog.title"),
		lead: t("blog.lead")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid md:grid-cols-2 gap-10 items-center border border-border rounded-2xl overflow-hidden bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] bg-gradient-to-br from-primary/15 via-gold/10 to-primary/5 relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-7xl text-primary/30",
							children: "W"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs text-muted-foreground font-mono uppercase tracking-wider",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: featured.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: featured.date })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-3xl md:text-4xl text-primary leading-tight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "hover:text-gold transition-colors",
								children: featured.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: featured.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-4 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("blog.by"),
									" ",
									featured.author
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									featured.readTime,
									" ",
									t("blog.readTime")
								] })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: rest.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group border border-border rounded-xl p-6 bg-card hover:border-gold/50 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-serif text-2xl text-primary leading-snug group-hover:text-gold transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								children: p.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3",
							children: p.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.author }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								p.date,
								" · ",
								p.readTime,
								" ",
								t("blog.readTime")
							] })]
						})
					]
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 rounded-2xl border border-border bg-secondary/40 p-8 md:p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl md:text-3xl text-primary",
						children: t("blog.newsletter.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground max-w-xl mx-auto",
						children: t("blog.newsletter.body")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
						children: t("blog.subscribe")
					})
				]
			})
		]
	})] });
}
//#endregion
export { BlogPage as component };
