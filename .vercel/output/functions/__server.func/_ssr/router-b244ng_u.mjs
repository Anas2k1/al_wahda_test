import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as LanguageProvider } from "./language-CRW3mKC1.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-b244ng_u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-47erl079.css";
var favicon_default = "/assets/favicon-9N7lO6MZ.ico";
var favicon_16x16_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQklEQVQ4T02TbWhbZRTHfzfJzUtzmzRJlzbp+9rRzbW263SdBTsrtH4YrH4RQQSxyhQmqCj4QRAEFZGBfnBIEcSBKMwJShVxq2hxaEe7rU5bs/TFpm2aviyJTdLc5r7kSm6G7nx7Ds/5Pef5n/8RDMMwuCtKp6y8i8tuR7SJd3IGaiGH6JAQBOHOzXIIdwM20kmiazE6W9rwSR72lIJZ4BDtaJpKPhXDKjpx++pKpWbNf4Cp6CwL66ucOn6CZHaHYrFIInUbl8NB2L+PK3MzVHu8HAl6UeQk/sZjJtwEpDI7vPn5KO+ffpWZpSjR9RhhX7X58vXFiNnNrXiM+kCQkaFhtm5dRtrXhjuwvwz46NsLtIYaGOw5zsTNa0wvzNHb3omqa3hcbpLZf7CLIgVV5ZGeByhqBVamztPS91wZ8PYXHzPQdT9993SbIoJBOhFB1xTk9Co20Ym9rgdPRaUJKhZ1Fic+4MDAKwjryW1jbPJnYlsJ3nrqBVOYVCKK3eVl6dfz5LYjWB0eQh0naewYNP+dXp1maflPnE39CAVFMc6ce4fsnszrj41we3kWVSkQrrTgbzxC5MdzHBw4zfzSPAY6da3dXJr4jGVV4qVHn0QwikXj3Quf8MONSdK5LA933cexcC3ySoScYmBgpcKq4m/rZiqxwfjv07idLg437efD518ra1Ca5JXZGUa/v8ilG1dJ7WZ4+qEhztwbQlM1vl4rcHbsK5x2B/2dR3lmaJhTvSf+H6Ne1Pnmt59oDtbR1drOl79cZnp+lvb6Znb3ZDRdJ1jlp8otUSVVki8o9B3qxFMhlQGTkZuMnH2Dk739vPfsy3w6PsbodxdpDdXz19rfHD1wmHRuB0GwcKihhfGZq7w4/ASPPzhYBizEV7BYBOYW/6DG66Oxpo6FeAxF16nxBVjaiBOurmUrtYFFEGhuOGh6orO5rQwozbWoq8iZTRQ5S2lfNCWPUwqgawUsVhG7qwpld9vMe0MdZs5isZYBW+kUmXwOTddwiiKqusdmatvcPkVTCUpuDEEgI+8RCgRRdR2Xw0mtL1AGxLc3SeUypliBSq9pKl+lB9FqM5W2Wa1k5DyS02XuYMmsos1GUzDEvwkLjSvU2P14AAAAEGRlQkdBRDdEQkRGNkZCQTFGRjgz+Eu4KQAAAABJRU5ErkJggg==";
var favicon_32x32_default = "data:image/png;base64,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";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-medium text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for has moved or doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl text-primary",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Al Wahda Foundation — Serving Allah's creation to attain His pleasure." },
			{
				name: "description",
				content: "Al Wahda Foundation is a non-profit advancing education, humanitarian relief, and community welfare with integrity and care."
			},
			{
				name: "author",
				content: "Al Wahda Foundation"
			},
			{
				property: "og:title",
				content: "Al Wahda Foundation"
			},
			{
				property: "og:description",
				content: "Education, relief, and community welfare with integrity and care."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: favicon_default,
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: favicon_16x16_default,
				sizes: "16x16",
				type: "image/png"
			},
			{
				rel: "icon",
				href: favicon_32x32_default,
				sizes: "32x32",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true
		})] })
	});
}
var $$splitComponentImporter$14 = () => import("./volunteer-LvzZgSr5.mjs");
var Route$15 = createFileRoute("/volunteer")({
	head: () => ({ meta: [
		{ title: "Volunteer — Al Wahda Foundation" },
		{
			name: "description",
			content: "Apply to volunteer with our local and remote programs."
		},
		{
			property: "og:title",
			content: "Volunteer — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Apply to volunteer with our programs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./terms-D4mX4CzA.mjs");
var Route$14 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Use — Al Wahda Foundation" }, {
		name: "description",
		content: "Terms of use for the Al Wahda Foundation website."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./programs-lhhmbs2y.mjs");
var Route$13 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: "Programs — Al Wahda Foundation" },
		{
			name: "description",
			content: "Our programs span education, relief, water, health, and seasonal initiatives."
		},
		{
			property: "og:title",
			content: "Programs — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Education, relief, water, health, and seasonal programs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./privacy-5lyeEpmx.mjs");
var Route$12 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Al Wahda Foundation" }, {
		name: "description",
		content: "How Al Wahda Foundation collects, stores, and uses your personal information."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./news-DERuHC2A.mjs");
var Route$11 = createFileRoute("/news")({
	head: () => ({ meta: [
		{ title: "News — Al Wahda Foundation" },
		{
			name: "description",
			content: "Announcements, press releases, and event coverage from Al Wahda Foundation."
		},
		{
			property: "og:title",
			content: "News — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Announcements and field reports."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./gallery-BbeyYbBy.mjs");
var Route$10 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Al Wahda Foundation" },
		{
			name: "description",
			content: "Photographs from our field operations and community programs."
		},
		{
			property: "og:title",
			content: "Gallery — Al Wahda Foundation"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./faq-COVz8Pc1.mjs");
var Route$9 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — Al Wahda Foundation" },
		{
			name: "description",
			content: "Frequently asked questions about donations, programs, and operations."
		},
		{
			property: "og:title",
			content: "FAQ — Al Wahda Foundation"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./donate-DhI6Tmgc.mjs");
var Route$8 = createFileRoute("/donate")({
	head: () => ({ meta: [
		{ title: "Donate — Al Wahda Foundation" },
		{
			name: "description",
			content: "Make a one-time or recurring donation to support education and humanitarian work."
		},
		{
			property: "og:title",
			content: "Donate — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Support our education and humanitarian programs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-DRtwxJgK.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Al Wahda Foundation" },
		{
			name: "description",
			content: "Get in touch with our team."
		},
		{
			property: "og:title",
			content: "Contact — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Get in touch with our team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./blog-YpFLSTpg.mjs");
var Route$6 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog — Al Wahda Foundation" },
		{
			name: "description",
			content: "Stories, reflections, and insights from Al Wahda Foundation's field teams and partners."
		},
		{
			property: "og:title",
			content: "Blog — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Stories and reflections from the field."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./activities-B8YsWK3C.mjs");
var Route$5 = createFileRoute("/activities")({
	head: () => ({ meta: [
		{ title: "Activities — Al Wahda Foundation" },
		{
			name: "description",
			content: "Ongoing field operations and their current progress."
		},
		{
			property: "og:title",
			content: "Activities — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Active operations and field reports."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-B6RT1H2t.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Al Wahda Foundation" },
		{
			name: "description",
			content: "Our mission, vision, leadership, and the story of Al Wahda Foundation."
		},
		{
			property: "og:title",
			content: "About — Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Mission, vision, and leadership."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-B29ieJ_l.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Al Wahda Foundation — Serving Allah's creation to attain His pleasure." },
		{
			name: "description",
			content: "A non-profit advancing education, humanitarian relief, and community welfare with integrity and care."
		},
		{
			property: "og:title",
			content: "Al Wahda Foundation"
		},
		{
			property: "og:description",
			content: "Education, relief, and community welfare with integrity and care."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./donate.success-DuM42ecz.mjs");
var Route$2 = createFileRoute("/donate/success")({
	head: () => ({ meta: [{ title: "Thank you — Al Wahda Foundation" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./donate.cancel-B5KkGStF.mjs");
var Route$1 = createFileRoute("/donate/cancel")({
	head: () => ({ meta: [{ title: "Donation cancelled — Al Wahda Foundation" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/api/public/stripe-webhook")({ server: { handlers: { POST: async ({ request }) => {
	const key = process.env.STRIPE_SECRET_KEY;
	const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
	if (!key || !whSecret) return new Response("Stripe not configured", { status: 503 });
	const sig = request.headers.get("stripe-signature");
	if (!sig) return new Response("Missing signature", { status: 400 });
	const body = await request.text();
	const Stripe = (await import("../_libs/stripe.mjs").then((n) => n.t)).default;
	const stripe = new Stripe(key);
	let event;
	try {
		event = await stripe.webhooks.constructEventAsync(body, sig, whSecret);
	} catch (err) {
		console.error("[stripe-webhook] bad signature", err);
		return new Response("Invalid signature", { status: 400 });
	}
	console.info("[stripe-webhook] event received", {
		type: event.type,
		id: event.id
	});
	return new Response("ok");
} } } });
var VolunteerRoute = Route$15.update({
	id: "/volunteer",
	path: "/volunteer",
	getParentRoute: () => Route$16
});
var TermsRoute = Route$14.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$16
});
var ProgramsRoute = Route$13.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$16
});
var PrivacyRoute = Route$12.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$16
});
var NewsRoute = Route$11.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$16
});
var GalleryRoute = Route$10.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$16
});
var FaqRoute = Route$9.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$16
});
var DonateRoute = Route$8.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$16
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$16
});
var BlogRoute = Route$6.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$16
});
var ActivitiesRoute = Route$5.update({
	id: "/activities",
	path: "/activities",
	getParentRoute: () => Route$16
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$16
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var DonateSuccessRoute = Route$2.update({
	id: "/success",
	path: "/success",
	getParentRoute: () => DonateRoute
});
var DonateCancelRoute = Route$1.update({
	id: "/cancel",
	path: "/cancel",
	getParentRoute: () => DonateRoute
});
var ApiPublicStripeWebhookRoute = Route.update({
	id: "/api/public/stripe-webhook",
	path: "/api/public/stripe-webhook",
	getParentRoute: () => Route$16
});
var DonateRouteChildren = {
	DonateCancelRoute,
	DonateSuccessRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ActivitiesRoute,
	BlogRoute,
	ContactRoute,
	DonateRoute: DonateRoute._addFileChildren(DonateRouteChildren),
	FaqRoute,
	GalleryRoute,
	NewsRoute,
	PrivacyRoute,
	ProgramsRoute,
	TermsRoute,
	VolunteerRoute,
	ApiPublicStripeWebhookRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
