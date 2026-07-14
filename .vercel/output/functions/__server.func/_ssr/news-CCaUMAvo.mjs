import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as localizeDate, r as useLanguage } from "./language-DIIev9ia.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, r as PageShell } from "./PageShell-DYZMqwXo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-CCaUMAvo.js
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	const { t, lang } = useLanguage();
	const posts = [
		{
			d: "Nov 18, 2024",
			t: t("news.n1.t"),
			c: t("news.n1.c")
		},
		{
			d: "Nov 02, 2024",
			t: t("news.n2.t"),
			c: t("news.n2.c")
		},
		{
			d: "Oct 24, 2024",
			t: t("news.n3.t"),
			c: t("news.n3.c")
		},
		{
			d: "Oct 09, 2024",
			t: t("news.n4.t"),
			c: t("news.n4.c")
		},
		{
			d: "Sep 30, 2024",
			t: t("news.n5.t"),
			c: t("news.n5.c")
		},
		{
			d: "Sep 12, 2024",
			t: t("news.n6.t"),
			c: t("news.n6.c")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("news.eyebrow"),
		title: t("news.title")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-prose py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border border-y border-border",
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "py-8 grid md:grid-cols-[160px_1fr] gap-6 group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground font-mono",
					children: localizeDate(p.d, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-2xl text-primary group-hover:text-gold transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/news",
						children: p.t
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground leading-relaxed",
					children: p.c
				})] })]
			}, p.t))
		})
	})] });
}
//#endregion
export { NewsPage as component };
