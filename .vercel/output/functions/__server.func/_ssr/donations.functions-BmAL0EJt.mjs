import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as objectType, i as numberType, n as booleanType, o as stringType, r as enumType } from "../_libs/zod.mjs";
import { t as getRequestHost$1 } from "./request-response-BZbMDTcg.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donations.functions-BmAL0EJt.js
var donateSchema = objectType({
	fund: stringType().trim().min(1).max(60),
	amount: numberType().int().min(1).max(1e5),
	currency: enumType([
		"bdt",
		"eur",
		"gbp"
	]).default("bdt"),
	recurrence: enumType([
		"one_time",
		"weekly",
		"monthly"
	]).default("one_time"),
	donor_name: stringType().trim().max(120).optional(),
	donor_email: stringType().trim().toLowerCase().email().max(254).optional(),
	donor_phone: stringType().trim().max(40).optional(),
	anonymous: booleanType().default(false)
});
var createDonationCheckout_createServerFn_handler = createServerRpc({
	id: "df31ee0400172821b07265ec104b0d18c1608928081b06e1bfe6b6d4b117609f",
	name: "createDonationCheckout",
	filename: "src/lib/donations.functions.ts"
}, (opts) => createDonationCheckout.__executeServer(opts));
var createDonationCheckout = createServerFn({ method: "POST" }).inputValidator((data) => donateSchema.parse(data)).handler(createDonationCheckout_createServerFn_handler, async ({ data }) => {
	const key = process.env.STRIPE_SECRET_KEY;
	if (!key) throw new Error("Donations are not yet configured. The site administrator needs to add a Stripe secret key.");
	const Stripe = (await import("../_libs/stripe.mjs").then((n) => n.t)).default;
	const stripe = new Stripe(key);
	const host = getRequestHost$1();
	const origin = `${host.includes("localhost") ? "http" : "https"}://${host}`;
	const amount_cents = data.amount * 100;
	const fundLabel = data.fund;
	const isRecurring = data.recurrence !== "one_time";
	const interval = data.recurrence === "weekly" ? "week" : "month";
	const session = await stripe.checkout.sessions.create({
		mode: isRecurring ? "subscription" : "payment",
		payment_method_types: ["card"],
		customer_email: data.donor_email,
		line_items: [{
			quantity: 1,
			price_data: {
				currency: data.currency,
				unit_amount: amount_cents,
				product_data: {
					name: `Al Wahda Foundation — ${fundLabel}`,
					description: isRecurring ? `Recurring ${data.recurrence.replace("_", " ")} donation` : "One-time donation"
				},
				...isRecurring && { recurring: { interval } }
			}
		}],
		success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${origin}/donate/cancel`,
		metadata: {
			fund: data.fund,
			recurrence: data.recurrence,
			anonymous: String(data.anonymous),
			donor_name: data.donor_name ?? "",
			donor_phone: data.donor_phone ?? ""
		}
	});
	console.info("[donations] checkout created", {
		sessionId: session.id,
		fund: data.fund,
		amount_cents,
		recurrence: data.recurrence
	});
	if (!session.url) throw new Error("Stripe did not return a checkout URL.");
	return { url: session.url };
});
//#endregion
export { createDonationCheckout_createServerFn_handler };
