import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-BgaFhHHY.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-qxMG8MBY.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as objectType, o as stringType, t as arrayType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { p as Heart, s as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-DWXiCHXU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wahdalogo_default = "/assets/wahdalogo-B014b_AI.png";
var site = {
	name: "Al Wahda Foundation",
	tagline: "Serving Allah's creation to attain His pleasure.",
	description: "Al Wahda Foundation is a non-profit organization advancing education, humanitarian relief, and community welfare with integrity and care.",
	email: "alwahdafoundationbd@gmail.com",
	phone: "+880 1789-076-804",
	address: "৩৭/২ পুরানা পল্টন, ফায়েনাজ টাওয়ার, (লিফটের ০৮) কালভার্ট রোড, পল্টন, ঢাকা-১০০০",
	registration: "Charity Registration No. AWF-2019-04412",
	social: {
		instagram: "https://instagram.com",
		facebook: "https://facebook.com",
		youtube: "https://youtube.com",
		linkedin: "https://linkedin.com"
	}
};
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/activities",
		label: "Activities"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/volunteer",
		label: "Volunteer"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var donationFunds = [
	{
		id: "general",
		label: "General Welfare Fund",
		description: "Direct our team to where need is greatest."
	},
	{
		id: "zakat",
		label: "Zakat & Sadaqah",
		description: "Zakat-eligible programs verified by our board."
	},
	{
		id: "education",
		label: "Education Endowment",
		description: "Scholarships, schools, and teacher training."
	},
	{
		id: "water",
		label: "Safe Water Initiative",
		description: "Wells, purification plants, and rural pipelines."
	},
	{
		id: "emergency",
		label: "Emergency Relief",
		description: "Flood, conflict, and disaster response."
	},
	{
		id: "orphans",
		label: "Orphan Sponsorship",
		description: "Monthly support for orphaned children."
	},
	{
		id: "qurbani",
		label: "Qurbani & Ramadan",
		description: "Seasonal meals and Qurbani distribution."
	}
];
function LangToggle({ className = "" }) {
	const { lang, setLang } = useLanguage();
	const btn = (l, label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setLang(l),
		"aria-pressed": lang === l,
		className: `px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"}`,
		children: label
	}, l);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center gap-1 rounded-full border border-border p-0.5 ${className}`,
		children: [btn("en", "EN"), btn("bn", "বাং")]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { t } = useLanguage();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-40 transition-colors duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-prose flex h-18 items-center justify-between py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: wahdalogo_default,
						alt: "Al Wahda Foundation logo",
						className: "h-9 w-auto rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-xl tracking-tight text-primary",
						children: site.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-7",
					children: [
						navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							activeOptions: { exact: l.to === "/" },
							className: "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors",
							activeProps: { className: "text-foreground" },
							children: t(`nav.${l.label}`)
						}, l.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, { className: "ml-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/donate",
							className: "inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
							children: t("cta.Donate")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Open menu",
						className: "grid place-items-center size-10 rounded-md border border-border text-foreground",
						onClick: () => setOpen((s) => !s),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose py-4 flex flex-col gap-2",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "py-2 text-base text-foreground/80",
					children: t(`nav.${l.label}`)
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/donate",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground",
					children: t("cta.Donate")
				})]
			})
		})]
	});
}
function Ornament({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 12",
		"aria-hidden": true,
		className: `text-gold ${className}`,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "6",
				x2: "48",
				y2: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "54",
				cy: "6",
				r: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 2 L64 6 L60 10 L56 6 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "66",
				cy: "6",
				r: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "72",
				y1: "6",
				x2: "120",
				y2: "6"
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var emailSchema = stringType().trim().toLowerCase().email().max(254);
var newsletterSchema = objectType({ email: emailSchema });
var subscribeNewsletter = createServerFn({ method: "POST" }).validator((data) => newsletterSchema.parse(data)).handler(createSsrRpc("51247a0dbccffebb42f24ae19a0f421d7a7f362895b051b1ae1e3602a7d8390e"));
var contactSchema = objectType({
	name: stringType().trim().min(1).max(120),
	email: emailSchema,
	subject: stringType().trim().max(200).optional(),
	message: stringType().trim().min(1).max(4e3)
});
var submitContact = createServerFn({ method: "POST" }).validator((data) => contactSchema.parse(data)).handler(createSsrRpc("d4c523a48edc5324e844f9a5631e9b3ab50822c1a944414a233a3b7223d652ee"));
var volunteerSchema = objectType({
	name: stringType().trim().min(1).max(120),
	email: emailSchema,
	phone: stringType().trim().max(40).optional(),
	city: stringType().trim().max(120).optional(),
	interests: arrayType(stringType().min(1).max(60)).max(12).optional(),
	message: stringType().trim().max(2e3).optional()
});
var submitVolunteer = createServerFn({ method: "POST" }).validator((data) => volunteerSchema.parse(data)).handler(createSsrRpc("3ea0c00e881caa75b04310d927292646378059684f2350521d0d1e9f5ff0f570"));
function SiteFooter() {
	const { t } = useLanguage();
	const [email, setEmail] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			await subscribeNewsletter({ data: { email } });
			toast.success(t("footer.subscribed"));
			setEmail("");
		} catch (err) {
			toast.error(err.message || t("footer.subErr"));
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-9 place-items-center rounded-full bg-primary-foreground text-primary font-serif italic",
										children: "W"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-2xl",
										children: t("site.name")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary-foreground/70 max-w-md text-pretty leading-relaxed",
									children: t("site.description")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs uppercase tracking-widest text-gold",
									children: t("site.registration")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs uppercase tracking-widest text-gold mb-5",
							children: t("footer.site")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-primary-foreground/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-primary-foreground",
									children: t("nav.About")
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/programs",
									className: "hover:text-primary-foreground",
									children: t("nav.Programs")
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/activities",
									className: "hover:text-primary-foreground",
									children: t("nav.Activities")
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/news",
									className: "hover:text-primary-foreground",
									children: t("nav.News")
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gallery",
									className: "hover:text-primary-foreground",
									children: t("nav.Gallery")
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/volunteer",
									className: "hover:text-primary-foreground",
									children: t("nav.Volunteer")
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-primary-foreground",
									children: t("nav.Contact")
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs uppercase tracking-widest text-gold mb-5",
								children: t("footer.newsletter")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary-foreground/70 mb-4",
								children: t("footer.newsBody")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								className: "flex flex-col gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: t("footer.emailPh"),
									className: "bg-primary-foreground/10 border border-primary-foreground/15 rounded-md px-3 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: loading,
									className: "rounded-md bg-gold text-gold-foreground py-2.5 text-sm font-medium hover:brightness-105 disabled:opacity-60 transition",
									children: loading ? t("footer.subscribing") : t("footer.subscribe")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 text-xs text-primary-foreground/60 space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("site.address") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: site.email }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: site.phone })
								]
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "w-32 opacity-50" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						t("site.name"),
						". ",
						t("footer.rights")
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-primary-foreground",
								children: t("nav.Privacy")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-primary-foreground",
								children: t("nav.Terms")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "hover:text-primary-foreground",
								children: t("nav.FAQ")
							})
						]
					})]
				})
			]
		})
	});
}
function FloatingDonate() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { t } = useLanguage();
	if (pathname.startsWith("/donate")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/donate",
		className: "fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-5 py-3 text-sm font-medium shadow-card hover:scale-105 transition-transform",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), t("cta.Donate")]
	});
}
function LanguagePrompt() {
	const { hasChosen, confirm, t } = useLanguage();
	if (hasChosen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "lang-prompt-title",
			className: "w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "lang-prompt-title",
					className: "font-serif text-2xl text-primary",
					children: t("lang.prompt.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: t("lang.prompt.body")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => confirm("en"),
						className: "rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-accent transition-colors",
						children: "English"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => confirm("bn"),
						className: "rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
						children: "বাংলা"
					})]
				})
			]
		})
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDonate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguagePrompt, {})
		]
	});
}
function PageHeader({ eyebrow, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose py-20 md:py-28",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl md:text-6xl text-primary text-balance leading-[1.05]",
					children: title
				}),
				lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted-foreground text-pretty",
					children: lead
				})
			]
		})
	});
}
//#endregion
export { donationFunds as a, submitVolunteer as c, createSsrRpc as i, PageHeader as n, site as o, PageShell as r, submitContact as s, Ornament as t };
