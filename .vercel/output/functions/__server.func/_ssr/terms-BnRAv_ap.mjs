import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as PageHeader, o as site, r as PageShell } from "./PageShell-D-r5c41G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-BnRAv_ap.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	const { t } = useLanguage();
	const p1 = t("terms.p1").replace("{name}", site.name);
	const p2 = t("terms.p2").replace("{email}", site.email);
	const p3 = t("terms.p3").replace("{name}", site.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("legal.eyebrow"),
		title: t("terms.title")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-16 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("terms.updated")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("terms.h1")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: p1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("terms.h2")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: p2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("terms.h3")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: p3
			})
		]
	})] });
}
//#endregion
export { TermsPage as component };
