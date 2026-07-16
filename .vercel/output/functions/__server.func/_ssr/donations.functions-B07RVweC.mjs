import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as objectType, i as numberType, n as booleanType, o as stringType, r as enumType } from "../_libs/zod.mjs";
import { i as createSsrRpc } from "./PageShell-Qo6aTyWB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donations.functions-B07RVweC.js
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
var createDonationCheckout = createServerFn({ method: "POST" }).validator((data) => donateSchema.parse(data)).handler(createSsrRpc("df31ee0400172821b07265ec104b0d18c1608928081b06e1bfe6b6d4b117609f"));
//#endregion
export { createDonationCheckout as t };
