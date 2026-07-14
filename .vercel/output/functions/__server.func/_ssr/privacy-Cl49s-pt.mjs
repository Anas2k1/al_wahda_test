import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as PageHeader, o as site, r as PageShell } from "./PageShell-D-r5c41G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Cl49s-pt.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	const { t } = useLanguage();
	const updated = t("privacy.updated").replace("{name}", site.name);
	const rights = t("privacy.p3").replace("{email}", site.email);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("legal.eyebrow"),
		title: t("privacy.title")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-16 max-w-2xl prose prose-stone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: updated
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("privacy.h1")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: t("privacy.p1")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("privacy.h2")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: t("privacy.p2")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("privacy.h3")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: rights
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-primary mt-10 mb-3",
				children: t("privacy.h4")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground/80 leading-relaxed",
				children: t("privacy.p4")
			})
		]
	})] });
}
//#endregion
export { PrivacyPage as component };
