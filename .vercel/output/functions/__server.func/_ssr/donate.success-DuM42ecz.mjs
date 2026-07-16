import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-CRW3mKC1.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as CircleCheck } from "../_libs/lucide-react.mjs";
import { r as PageShell } from "./PageShell-Qo6aTyWB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate.success-DuM42ecz.js
var import_jsx_runtime = require_jsx_runtime();
function SuccessPage() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-prose py-32 max-w-xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-14 text-gold mx-auto mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl md:text-5xl text-primary",
				children: t("donate.success.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-muted-foreground leading-relaxed",
				children: t("donate.success.body")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90",
					children: t("donate.success.home")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/activities",
					className: "rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent",
					children: t("donate.success.see")
				})]
			})
		]
	}) });
}
//#endregion
export { SuccessPage as component };
