//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BVuDD6tP.js
var manifest = {
	"3ea0c00e881caa75b04310d927292646378059684f2350521d0d1e9f5ff0f570": {
		functionName: "submitVolunteer_createServerFn_handler",
		importer: () => import("./_ssr/forms.functions-DJxaYLAu.mjs")
	},
	"51247a0dbccffebb42f24ae19a0f421d7a7f362895b051b1ae1e3602a7d8390e": {
		functionName: "subscribeNewsletter_createServerFn_handler",
		importer: () => import("./_ssr/forms.functions-DJxaYLAu.mjs")
	},
	"d4c523a48edc5324e844f9a5631e9b3ab50822c1a944414a233a3b7223d652ee": {
		functionName: "submitContact_createServerFn_handler",
		importer: () => import("./_ssr/forms.functions-DJxaYLAu.mjs")
	},
	"df31ee0400172821b07265ec104b0d18c1608928081b06e1bfe6b6d4b117609f": {
		functionName: "createDonationCheckout_createServerFn_handler",
		importer: () => import("./_ssr/donations.functions-BmAL0EJt.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
