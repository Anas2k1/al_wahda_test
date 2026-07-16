import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-CRW3mKC1.mjs";
import { n as PageHeader, r as PageShell } from "./PageShell-Qo6aTyWB.mjs";
import { n as program_relief_default, r as program_water_default, t as program_education_default } from "./program-relief-CcEL8ca5.mjs";
import { t as hero_default } from "./hero-CLHb443U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BbeyYbBy.js
var import_jsx_runtime = require_jsx_runtime();
var imgs = [
	program_education_default,
	program_water_default,
	program_relief_default,
	hero_default,
	program_education_default,
	program_water_default,
	program_relief_default,
	hero_default,
	program_education_default
];
function GalleryPage() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: t("gallery.eyebrow"),
		title: t("gallery.title")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-prose py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-3",
		children: imgs.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-square rounded-xl overflow-hidden border border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				loading: "lazy",
				width: 800,
				height: 800,
				className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
			})
		}, i))
	})] });
}
//#endregion
export { GalleryPage as component };
