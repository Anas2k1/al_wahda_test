import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./language-DIIev9ia.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowLeft, _ as Globe, a as Sprout, b as BookOpen, d as LoaderCircle, f as House, g as GraduationCap, h as HandHeart, i as Stethoscope, m as HeartHandshake, n as Utensils, p as Heart, r as Users, v as Droplets, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as site, r as PageShell, t as Ornament } from "./PageShell-DYZMqwXo.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as createDonationCheckout } from "./donations.functions-B12Ih5CE.mjs";
import { n as program_relief_default, r as program_water_default, t as program_education_default } from "./program-relief-CcEL8ca5.mjs";
import { t as hero_default } from "./hero-CLHb443U.mjs";
import { t as animate } from "../_libs/framer-motion+[...].mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ktbVab6w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnimatedCounter({ value, duration = 1.6, prefix = "", suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [n, setN] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (started.current) return;
		const el = ref.current;
		if (!el) return;
		const trigger = () => {
			if (started.current) return;
			started.current = true;
			const controls = animate(0, value, {
				duration,
				ease: [
					.16,
					1,
					.3,
					1
				],
				onUpdate: (v) => setN(Math.round(v))
			});
			return () => controls.stop();
		};
		if (typeof IntersectionObserver === "undefined") {
			trigger();
			return;
		}
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				trigger();
				io.disconnect();
			}
		}, { threshold: .2 });
		io.observe(el);
		const t = window.setTimeout(trigger, 1200);
		return () => {
			io.disconnect();
			window.clearTimeout(t);
		};
	}, [value, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			n.toLocaleString(),
			suffix
		]
	});
}
var FUND_KEYS = [
	"qd.f.general",
	"qd.f.education",
	"qd.f.water",
	"qd.f.relief",
	"qd.f.orphan"
];
var PRESETS = [
	25,
	50,
	100,
	250
];
function QuickDonate() {
	const { t } = useLanguage();
	const checkout = useServerFn(createDonationCheckout);
	const [fundIdx, setFundIdx] = (0, import_react.useState)(0);
	const [recurrence, setRecurrence] = (0, import_react.useState)("one_time");
	const [amount, setAmount] = (0, import_react.useState)(50);
	const [custom, setCustom] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		setError(null);
		const finalAmount = custom ? Number(custom) : amount;
		if (!finalAmount || finalAmount < 1) {
			setError(t("qd.errMin"));
			return;
		}
		setLoading(true);
		try {
			const res = await checkout({ data: {
				fund: t(FUND_KEYS[fundIdx]),
				amount: Math.round(finalAmount),
				currency: "bdt",
				recurrence,
				anonymous: false
			} });
			if (res?.url) window.location.href = res.url;
		} catch (err) {
			setError(err instanceof Error ? err.message : t("qd.errGeneric"));
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-2xl border border-border bg-card p-6 md:p-7 shadow-card",
		"aria-label": "Quick donation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-2xl text-primary",
					children: t("qd.title")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-1.5 p-1 rounded-full bg-muted mb-5",
				children: [
					["one_time", t("qd.oneTime")],
					["monthly", t("qd.monthly")],
					["weekly", t("qd.weekly")]
				].map(([val, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRecurrence(val),
					className: `text-xs font-medium py-2 rounded-full transition-colors ${recurrence === val ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
					children: label
				}, val))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2",
				children: t("qd.fund")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				value: fundIdx,
				onChange: (e) => setFundIdx(Number(e.target.value)),
				className: "w-full mb-5 rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40",
				children: FUND_KEYS.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: i,
					children: t(k)
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2",
				children: t("qd.amount")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2 mb-2",
				children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setAmount(p);
						setCustom("");
					},
					className: `py-2.5 text-sm font-medium rounded-lg border transition-colors ${!custom && amount === p ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-accent"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-semibold leading-none",
						children: "৳"
					}), p]
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-lg font-semibold leading-none",
					children: "৳"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					inputMode: "numeric",
					min: 1,
					placeholder: t("qd.other"),
					value: custom,
					onChange: (e) => setCustom(e.target.value),
					className: "w-full rounded-lg border border-border bg-background pl-7 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive mb-3",
				role: "alert",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: loading,
				className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
					" ",
					t("qd.redirect")
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t("qd.donate"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-semibold leading-none",
						children: "৳"
					}),
					custom || amount,
					" ",
					recurrence !== "one_time" && `/ ${recurrence === "monthly" ? t("qd.mo") : t("qd.wk")}`,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] text-center text-muted-foreground",
				children: t("qd.stripe")
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var sectors = [
	{
		icon: Droplets,
		tKey: "ds.s1.t",
		dKey: "ds.s1.d",
		img: program_water_default,
		raised: 38400,
		goal: 6e4
	},
	{
		icon: GraduationCap,
		tKey: "ds.s2.t",
		dKey: "ds.s2.d",
		img: program_education_default,
		raised: 52100,
		goal: 8e4
	},
	{
		icon: HeartHandshake,
		tKey: "ds.s3.t",
		dKey: "ds.s3.d",
		img: program_relief_default,
		raised: 71e3,
		goal: 1e5
	},
	{
		icon: Utensils,
		tKey: "ds.s4.t",
		dKey: "ds.s4.d",
		img: program_relief_default,
		raised: 22500,
		goal: 4e4
	},
	{
		icon: Stethoscope,
		tKey: "ds.s5.t",
		dKey: "ds.s5.d",
		img: program_water_default,
		raised: 16800,
		goal: 5e4
	},
	{
		icon: House,
		tKey: "ds.s6.t",
		dKey: "ds.s6.d",
		img: program_education_default,
		raised: 44900,
		goal: 7e4
	},
	{
		icon: Sprout,
		tKey: "ds.s7.t",
		dKey: "ds.s7.d",
		img: program_water_default,
		raised: 29300,
		goal: 55e3
	},
	{
		icon: BookOpen,
		tKey: "ds.s8.t",
		dKey: "ds.s8.d",
		img: program_education_default,
		raised: 18200,
		goal: 45e3
	}
];
function DonationSectors() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3",
							children: t("ds.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-4xl md:text-5xl text-primary",
							children: t("ds.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-xl mx-auto",
							children: t("ds.lead")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					opts: {
						align: "start",
						loop: true
					},
					plugins: [Autoplay({
						delay: 2800,
						stopOnInteraction: false,
						stopOnMouseEnter: true
					})],
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
							className: "-ml-4",
							children: sectors.map((s) => {
								const pct = Math.min(100, Math.round(s.raised / s.goal * 100));
								const title = t(s.tKey);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
									className: "pl-4 sm:basis-1/2 lg:basis-1/3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group h-full rounded-2xl border border-border bg-background overflow-hidden shadow-soft hover:shadow-card transition-shadow flex flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "aspect-[16/10] overflow-hidden relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: s.img,
												alt: "",
												loading: "lazy",
												className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold uppercase tracking-widest text-primary",
													children: t("ds.fund")
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6 flex flex-col flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-serif text-xl text-primary",
													children: title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground leading-relaxed",
													children: t(s.dKey)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-1.5 w-full rounded-full bg-muted overflow-hidden",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "h-full bg-gold",
															style: { width: `${pct}%` }
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2 flex justify-between text-xs text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-semibold text-primary text-sm leading-none",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-base font-semibold",
																	children: "৳"
																}), s.raised.toLocaleString()]
															}),
															" ",
															t("ds.raised")
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															t("ds.goal"),
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-base font-semibold leading-none",
																children: "৳"
															}),
															s.goal.toLocaleString()
														] })]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/donate",
													className: "mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
													children: [
														t("ds.donateTo"),
														" ",
														title
													]
												})
											]
										})]
									})
								}, s.tKey);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "hidden md:flex -left-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "hidden md:flex -right-4" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/donate",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-primary hover:bg-accent transition-colors",
						children: t("ds.viewAll")
					})
				})
			]
		})
	});
}
function HomePage() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center",
				style: { backgroundImage: `url(${hero_default})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose relative z-10 grid lg:grid-cols-12 gap-12 py-16 md:py-24 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-medium uppercase tracking-[0.2em] text-gold mb-5",
							children: [
								t("home.established"),
								" · ",
								site.registration.replace("Charity Registration No. ", "Reg. ")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-5xl md:text-7xl text-primary leading-[1.05] text-balance",
							children: [
								t("home.title1"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic",
									children: t("home.titleEm")
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-lg text-muted-foreground text-pretty leading-relaxed",
							children: t("home.lead")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/donate",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
								children: [t("cta.DonateNow"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
								children: t("cta.LearnMore")
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickDonate, {})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prose py-14 grid grid-cols-2 md:grid-cols-4 gap-8",
				children: [
					{
						v: 124e3,
						label: t("home.stats.beneficiaries")
					},
					{
						v: 42,
						label: t("home.stats.projects")
					},
					{
						v: 1850,
						label: t("home.stats.volunteers")
					},
					{
						v: 18,
						label: t("home.stats.countries")
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-4xl md:text-5xl text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
						value: s.v,
						suffix: s.v >= 1e3 ? "+" : ""
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-xs uppercase tracking-widest text-muted-foreground",
					children: s.label
				})] }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationSectors, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-prose py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "w-24 mx-auto mb-6 opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl md:text-5xl text-primary",
						children: t("home.pillars.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-xl mx-auto",
						children: t("home.pillars.lead")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-8",
				children: [
					{
						icon: GraduationCap,
						title: t("home.pillars.education.title"),
						text: t("home.pillars.education.text"),
						img: program_education_default
					},
					{
						icon: HandHeart,
						title: t("home.pillars.service.title"),
						text: t("home.pillars.service.text"),
						img: program_relief_default
					},
					{
						icon: BookOpen,
						title: t("home.pillars.outreach.title"),
						text: t("home.pillars.outreach.text"),
						img: program_water_default
					}
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-card transition-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: "",
							loading: "lazy",
							width: 1200,
							height: 900,
							className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-6 text-gold mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl text-primary mb-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: p.text
							})
						]
					})]
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6 mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3",
						children: t("home.activities.eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl md:text-4xl text-primary",
						children: t("home.activities.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/activities",
						className: "text-sm font-medium text-primary border-b border-gold pb-0.5 hover:text-gold transition-colors",
						children: t("home.activities.viewAll")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: [{
						tag: t("home.act.tag.infra"),
						title: t("home.act.a1.t"),
						text: t("home.act.a1.d"),
						img: program_water_default
					}, {
						tag: t("home.act.tag.edu"),
						title: t("home.act.a2.t"),
						text: t("home.act.a2.d"),
						img: program_education_default
					}].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border bg-background overflow-hidden grid sm:grid-cols-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2 aspect-square sm:aspect-auto overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.img,
								alt: "",
								loading: "lazy",
								width: 800,
								height: 800,
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-3 p-6 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-widest text-gold",
									children: a.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-xl text-primary",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: a.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/activities",
									className: "mt-auto pt-4 text-xs font-semibold uppercase tracking-widest text-primary hover:opacity-70",
									children: t("home.activities.readMore")
								})
							]
						})]
					}, a.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-prose py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-5 gap-10 items-center shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "w-24 mb-5 opacity-70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-3xl md:text-5xl leading-tight text-balance",
							children: [
								t("home.cta.title1"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-gold",
									children: t("home.cta.titleEm")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-primary-foreground/80 max-w-lg",
							children: t("home.cta.lead")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2 flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/donate",
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-4 text-sm font-medium hover:brightness-105",
							children: [t("home.cta.donate"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/volunteer",
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-4 text-sm font-medium hover:bg-primary-foreground/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }), t("home.cta.volunteer")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "inline-flex items-center justify-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" }), t("home.cta.where")]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
