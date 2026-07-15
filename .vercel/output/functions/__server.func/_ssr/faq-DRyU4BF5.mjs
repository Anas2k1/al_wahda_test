import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as PageHeader, r as PageShell } from "./PageShell-DWXiCHXU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DRyU4BF5.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const { t } = useLanguage();
	const faqs = [
		{
			q: t("faq.q1"),
			a: t("faq.a1")
		},
		{
			q: t("faq.q2"),
			a: t("faq.a2")
		},
		{
			q: t("faq.q3"),
			a: t("faq.a3")
		},
		{
			q: t("faq.q4"),
			a: t("faq.a4")
		},
		{
			q: t("faq.q5"),
			a: t("faq.a5")
		},
		{
			q: t("faq.q6"),
			a: t("faq.a6")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("faq.eyebrow"),
		title: t("faq.title")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-prose py-16 max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border border-y border-border",
			children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "cursor-pointer list-none flex justify-between items-center gap-4 font-serif text-xl text-primary",
					children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold transition-transform group-open:rotate-45",
						children: "+"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground leading-relaxed",
					children: f.a
				})]
			}, f.q))
		})
	})] });
}
//#endregion
export { FaqPage as component };
