"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jaden_Documents_Code_Web_Dev_grandways_site_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.js */ \"(rsc)/./app/api/send-email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"/Users/jaden/Documents/Code/Web Dev/grandways-site/app/api/send-email/route.js\",\n    nextConfigOutput,\n    userland: _Users_jaden_Documents_Code_Web_Dev_grandways_site_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmphZGVuJTJGRG9jdW1lbnRzJTJGQ29kZSUyRldlYiUyMERldiUyRmdyYW5kd2F5cy1zaXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmphZGVuJTJGRG9jdW1lbnRzJTJGQ29kZSUyRldlYiUyMERldiUyRmdyYW5kd2F5cy1zaXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzhCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhbmR3YXlzLXNpdGUvPzI1YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2phZGVuL0RvY3VtZW50cy9Db2RlL1dlYiBEZXYvZ3JhbmR3YXlzLXNpdGUvYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9qYWRlbi9Eb2N1bWVudHMvQ29kZS9XZWIgRGV2L2dyYW5kd2F5cy1zaXRlL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/send-email/route.js":
/*!*************************************!*\
  !*** ./app/api/send-email/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nconst machines = [\n    \"graphics@grandways.co.bw\"\n];\nlet lastMachineIndex = 0;\nasync function POST(request) {\n    console.log(\"API called\");\n    try {\n        const { name, email, message } = await request.json();\n        console.log(\"Request body:\", {\n            name,\n            email,\n            message\n        });\n        const nextMachine = machines[lastMachineIndex];\n        lastMachineIndex = (lastMachineIndex + 1) % machines.length;\n        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: process.env.EMAIL_HOST,\n            port: 587,\n            secure: false,\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            },\n            tls: {\n                rejectUnauthorized: false,\n                minVersion: \"TLSv1.2\"\n            },\n            family: 4,\n            debug: true,\n            logger: true\n        });\n        let mailOptions = {\n            from: process.env.EMAIL_USER,\n            to: nextMachine,\n            subject: \"New Quote Requested\",\n            text: message\n        };\n        await transporter.sendMail(mailOptions);\n        console.log(\"Email sent successfully\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Email sent successfully!\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Failed to send email:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Failed to send email.\"\n        }, {\n            status: 500\n        });\n    }\n}\nfunction OPTIONS() {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({}, {\n        status: 204\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNQO0FBRXBDLE1BQU1FLFdBQVc7SUFBQztDQUEwRjtBQUM1RyxJQUFJQyxtQkFBbUI7QUFFaEIsZUFBZUMsS0FBS0MsT0FBTztJQUNoQ0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1MLFFBQVFNLElBQUk7UUFDbkRMLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUI7WUFBRUM7WUFBTUM7WUFBT0M7UUFBUTtRQUVwRCxNQUFNRSxjQUFjVixRQUFRLENBQUNDLGlCQUFpQjtRQUM5Q0EsbUJBQW1CLENBQUNBLG1CQUFtQixLQUFLRCxTQUFTVyxNQUFNO1FBRTNELElBQUlDLGNBQWNiLHVEQUEwQixDQUFDO1lBQzNDZSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO2dCQUNKQyxNQUFNTixRQUFRQyxHQUFHLENBQUNNLFVBQVU7Z0JBQzVCQyxNQUFNUixRQUFRQyxHQUFHLENBQUNRLFVBQVU7WUFDOUI7WUFDQUMsS0FBSztnQkFDSEMsb0JBQW9CO2dCQUNwQkMsWUFBWTtZQUNkO1lBQ0FDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7UUFFQSxJQUFJQyxjQUFjO1lBQ2hCQyxNQUFNakIsUUFBUUMsR0FBRyxDQUFDTSxVQUFVO1lBQzVCVyxJQUFJdkI7WUFDSndCLFNBQVM7WUFDVEMsTUFBTTNCO1FBQ1I7UUFFQSxNQUFNSSxZQUFZd0IsUUFBUSxDQUFDTDtRQUMzQjNCLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9QLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUQsU0FBUztRQUEyQixHQUFHO1lBQUU2QixRQUFRO1FBQUk7SUFDbEYsRUFBRSxPQUFPQyxPQUFPO1FBQ2RsQyxRQUFRa0MsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT3hDLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUQsU0FBUztRQUF3QixHQUFHO1lBQUU2QixRQUFRO1FBQUk7SUFDL0U7QUFDRjtBQUVPLFNBQVNFO0lBQ2QsT0FBT3pDLHFEQUFZQSxDQUFDVyxJQUFJLENBQUMsQ0FBQyxHQUFHO1FBQUU0QixRQUFRO0lBQUk7QUFDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFuZHdheXMtc2l0ZS8uL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS5qcz8zZWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuXG5jb25zdCBtYWNoaW5lcyA9IFsnZ3JhcGhpY3NAZ3JhbmR3YXlzLmNvLmJ3JywgLyonY2xpZW50c2VydmljZXNAZ3JhbmR3YXlzLmNvLmJ3JywgJ3NhbGVzQGdyYW5kd2F5cy5jby5idycqL107XG5sZXQgbGFzdE1hY2hpbmVJbmRleCA9IDA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgY29uc29sZS5sb2coJ0FQSSBjYWxsZWQnKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBib2R5OicsIHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSk7XG5cbiAgICBjb25zdCBuZXh0TWFjaGluZSA9IG1hY2hpbmVzW2xhc3RNYWNoaW5lSW5kZXhdO1xuICAgIGxhc3RNYWNoaW5lSW5kZXggPSAobGFzdE1hY2hpbmVJbmRleCArIDEpICUgbWFjaGluZXMubGVuZ3RoO1xuXG4gICAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuRU1BSUxfSE9TVCxcbiAgICAgIHBvcnQ6IDU4NyxcbiAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1MsXG4gICAgICB9LFxuICAgICAgdGxzOiB7XG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAgIG1pblZlcnNpb246ICdUTFN2MS4yJyxcbiAgICAgIH0sXG4gICAgICBmYW1pbHk6IDQsXG4gICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgIGxvZ2dlcjogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGxldCBtYWlsT3B0aW9ucyA9IHtcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgICB0bzogbmV4dE1hY2hpbmUsXG4gICAgICBzdWJqZWN0OiAnTmV3IFF1b3RlIFJlcXVlc3RlZCcsXG4gICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIH07XG5cbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IScgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBlbWFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhaWxlZCB0byBzZW5kIGVtYWlsLicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gT1BUSU9OUygpIHtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHt9LCB7IHN0YXR1czogMjA0IH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJtYWNoaW5lcyIsImxhc3RNYWNoaW5lSW5kZXgiLCJQT1NUIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwianNvbiIsIm5leHRNYWNoaW5lIiwibGVuZ3RoIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkVNQUlMX0hPU1QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ0bHMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJtaW5WZXJzaW9uIiwiZmFtaWx5IiwiZGVidWciLCJsb2dnZXIiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0Iiwic2VuZE1haWwiLCJzdGF0dXMiLCJlcnJvciIsIk9QVElPTlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaden%2FDocuments%2FCode%2FWeb%20Dev%2Fgrandways-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();