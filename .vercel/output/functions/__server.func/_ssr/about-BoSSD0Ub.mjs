import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { n as PageHeader, r as PageShell, t as Ornament } from "./PageShell-DWXiCHXU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BoSSD0Ub.js
var import_jsx_runtime = require_jsx_runtime();
var Chairman__Hafez_Mawlana_Lutfor_Rahman_default = "/assets/Chairman_%20Hafez%20Mawlana%20Lutfor%20Rahman-DhXQBb0i.jpeg";
var Executive_Member_Misbahul_Arifeen_default = "/assets/Executive%20Member_Misbahul%20Arifeen-KJJvjLW1.jpeg";
var Joint_Secretary_MD_Muhibbur_Rahman_Shujon_default = "/assets/Joint%20Secretary_MD%20Muhibbur%20Rahman%20Shujon-BvFC9PeI.jpeg";
var Organizing_Secretary_Mawlana_Emaduddin_Al_Madani__default = "/assets/Organizing%20Secretary_Mawlana%20Emaduddin%20Al%20Madani%20-Dg7hoLoF.jpeg";
var Secretary_Mustafiz_Rahmani_default = "/assets/Secretary_Mustafiz%20Rahmani-Dpc8Q2e4.jpg";
var Senior_vice_chairman_Mawlana_Sadikur_Rahman_Azhari_default = "/assets/Senior%20vice%20chairman_Mawlana%20Sadikur%20Rahman%20Azhari-BhlEi0hE.jpg";
var Tresurer_Mawlana_Mustafizur_Rahman_Shahin_default = "/assets/Tresurer_Mawlana%20Mustafizur%20Rahman%20Shahin-yPFTzbEp.jpeg";
function AboutPage() {
	const { t, lang } = useLanguage();
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
			image: Chairman__Hafez_Mawlana_Lutfor_Rahman_default,
			nameEn: "Hafez Mawlana Lutfor Rahman",
			nameBn: "হাফেজ মাওলানা লুতফর রহমান",
			roleEn: "Chairman",
			roleBn: "চেয়ারম্যান"
		},
		{
			image: Senior_vice_chairman_Mawlana_Sadikur_Rahman_Azhari_default,
			nameEn: "Mawlana Sadikur Rahman Azhari",
			nameBn: "মাওলানা সাদিকুর রহমান আযহারী",
			roleEn: "Senior Vice Chairman",
			roleBn: "সিনিয়র ভাইস চেয়ারম্যান"
		},
		{
			image: Executive_Member_Misbahul_Arifeen_default,
			nameEn: "Misbahul Arifeen",
			nameBn: "মিসবাহুলআরেফীন",
			roleEn: "Executive Member",
			roleBn: "নির্বাহী সদস্য"
		},
		{
			image: Organizing_Secretary_Mawlana_Emaduddin_Al_Madani__default,
			nameEn: "Mawlana Emaduddin Al Madani",
			nameBn: "মাওলানা এমাদউদ্দিন আল মাদানি",
			roleEn: "Organizing Secretary",
			roleBn: "সংগঠক সম্পাদক"
		},
		{
			image: Joint_Secretary_MD_Muhibbur_Rahman_Shujon_default,
			nameEn: "MD Muhibbur Rahman Shujon",
			nameBn: "এমডি মুহিবুর রহমান সুজন",
			roleEn: "Joint Secretary",
			roleBn: "যুগ্ম সম্পাদক"
		},
		{
			image: Secretary_Mustafiz_Rahmani_default,
			nameEn: "Mustafiz Rahmani",
			nameBn: "মোস্তাফিজ রহমানি",
			roleEn: "Secretary",
			roleBn: "সম্পাদক"
		},
		{
			image: Tresurer_Mawlana_Mustafizur_Rahman_Shahin_default,
			nameEn: "Mawlana Mustafizur Rahman Shahin",
			nameBn: "মাওলানা মুজতাফিজুর রহমান শাহিন",
			roleEn: "Treasurer",
			roleBn: "কোষাধ্যক্ষ"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: t("about.eyebrow"),
			title: t("about.title"),
			lead: t("about.lead")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-prose py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl text-primary mb-10",
				children: t("about.leadership")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: leaders.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-4 shadow-soft overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: lang === "bn" ? p.nameBn : p.nameEn,
							className: "h-72 w-full object-cover rounded-xl mb-4",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-primary",
							children: lang === "bn" ? p.nameBn : p.nameEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: lang === "bn" ? p.roleBn : p.roleEn
						})
					]
				}, p.nameEn))
			})]
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
		})
	] });
}
//#endregion
export { AboutPage as component };
