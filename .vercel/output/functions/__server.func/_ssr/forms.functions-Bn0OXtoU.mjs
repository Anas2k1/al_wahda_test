import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as objectType, o as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms.functions-Bn0OXtoU.js
var emailSchema = stringType().trim().toLowerCase().email().max(254);
var newsletterSchema = objectType({ email: emailSchema });
var subscribeNewsletter_createServerFn_handler = createServerRpc({
	id: "51247a0dbccffebb42f24ae19a0f421d7a7f362895b051b1ae1e3602a7d8390e",
	name: "subscribeNewsletter",
	filename: "src/lib/forms.functions.ts"
}, (opts) => subscribeNewsletter.__executeServer(opts));
var subscribeNewsletter = createServerFn({ method: "POST" }).validator((data) => newsletterSchema.parse(data)).handler(subscribeNewsletter_createServerFn_handler, async ({ data }) => {
	console.info("[newsletter] submission accepted", { email: data.email });
	return { ok: true };
});
var contactSchema = objectType({
	name: stringType().trim().min(1).max(120),
	email: emailSchema,
	subject: stringType().trim().max(200).optional(),
	message: stringType().trim().min(1).max(4e3)
});
var submitContact_createServerFn_handler = createServerRpc({
	id: "d4c523a48edc5324e844f9a5631e9b3ab50822c1a944414a233a3b7223d652ee",
	name: "submitContact",
	filename: "src/lib/forms.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((data) => contactSchema.parse(data)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	console.info("[contact] message accepted", data);
	return { ok: true };
});
var volunteerSchema = objectType({
	name: stringType().trim().min(1).max(120),
	email: emailSchema,
	phone: stringType().trim().max(40).optional(),
	city: stringType().trim().max(120).optional(),
	interests: arrayType(stringType().min(1).max(60)).max(12).optional(),
	message: stringType().trim().max(2e3).optional()
});
var submitVolunteer_createServerFn_handler = createServerRpc({
	id: "3ea0c00e881caa75b04310d927292646378059684f2350521d0d1e9f5ff0f570",
	name: "submitVolunteer",
	filename: "src/lib/forms.functions.ts"
}, (opts) => submitVolunteer.__executeServer(opts));
var submitVolunteer = createServerFn({ method: "POST" }).validator((data) => volunteerSchema.parse(data)).handler(submitVolunteer_createServerFn_handler, async ({ data }) => {
	console.info("[volunteer] application accepted", data);
	return { ok: true };
});
//#endregion
export { submitContact_createServerFn_handler, submitVolunteer_createServerFn_handler, subscribeNewsletter_createServerFn_handler };
