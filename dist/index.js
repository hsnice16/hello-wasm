/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hello_wasm_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hello-wasm-demo */ \"./node_modules/hello-wasm-demo/hello_wasm.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hello_wasm_demo__WEBPACK_IMPORTED_MODULE_0__]);\nhello_wasm_demo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,hello_wasm_demo__WEBPACK_IMPORTED_MODULE_0__.greet)(\"WebAssembly with npm\");\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://hello-wasm/./index.js?");

/***/ }),

/***/ "./node_modules/hello-wasm-demo/hello_wasm.js":
/*!****************************************************!*\
  !*** ./node_modules/hello-wasm-demo/hello_wasm.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_alert_8755b7883b6ce0ef: () => (/* reexport safe */ _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_alert_8755b7883b6ce0ef),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   greet: () => (/* reexport safe */ _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.greet)\n/* harmony export */ });\n/* harmony import */ var _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello_wasm_bg.wasm */ \"./node_modules/hello-wasm-demo/hello_wasm_bg.wasm\");\n/* harmony import */ var _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello_wasm_bg.js */ \"./node_modules/hello-wasm-demo/hello_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://hello-wasm/./node_modules/hello-wasm-demo/hello_wasm.js?");

/***/ }),

/***/ "./node_modules/hello-wasm-demo/hello_wasm_bg.js":
/*!*******************************************************!*\
  !*** ./node_modules/hello-wasm-demo/hello_wasm_bg.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_alert_8755b7883b6ce0ef: () => (/* binding */ __wbg_alert_8755b7883b6ce0ef),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   greet: () => (/* binding */ greet)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nlet wasm;\nfunction __wbg_set_wasm(val) {\n  wasm = val;\n}\n\nconst lTextDecoder =\n  typeof TextDecoder === \"undefined\"\n    ? (0, module.require)(\"util\").TextDecoder\n    : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder(\"utf-8\", {\n  ignoreBOM: true,\n  fatal: true,\n});\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n  }\n  return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n  ptr = ptr >>> 0;\n  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder =\n  typeof TextEncoder === \"undefined\"\n    ? (0, module.require)(\"util\").TextEncoder\n    : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder(\"utf-8\");\n\nconst encodeString =\n  typeof cachedTextEncoder.encodeInto === \"function\"\n    ? function (arg, view) {\n        return cachedTextEncoder.encodeInto(arg, view);\n      }\n    : function (arg, view) {\n        const buf = cachedTextEncoder.encode(arg);\n        view.set(buf);\n        return {\n          read: arg.length,\n          written: buf.length,\n        };\n      };\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n  if (realloc === undefined) {\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = malloc(buf.length) >>> 0;\n    getUint8Memory0()\n      .subarray(ptr, ptr + buf.length)\n      .set(buf);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n  }\n\n  let len = arg.length;\n  let ptr = malloc(len) >>> 0;\n\n  const mem = getUint8Memory0();\n\n  let offset = 0;\n\n  for (; offset < len; offset++) {\n    const code = arg.charCodeAt(offset);\n    if (code > 0x7f) break;\n    mem[ptr + offset] = code;\n  }\n\n  if (offset !== len) {\n    if (offset !== 0) {\n      arg = arg.slice(offset);\n    }\n    ptr = realloc(ptr, len, (len = offset + arg.length * 3)) >>> 0;\n    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n    const ret = encodeString(arg, view);\n\n    offset += ret.written;\n  }\n\n  WASM_VECTOR_LEN = offset;\n  return ptr;\n}\n/**\n * @param {string} name\n */\nfunction greet(name) {\n  const ptr0 = passStringToWasm0(\n    name,\n    wasm.__wbindgen_malloc,\n    wasm.__wbindgen_realloc\n  );\n  const len0 = WASM_VECTOR_LEN;\n  wasm.greet(ptr0, len0);\n}\n\nfunction __wbg_alert_8755b7883b6ce0ef(arg0, arg1) {\n  alert(getStringFromWasm0(arg0, arg1));\n}\n\n\n//# sourceURL=webpack://hello-wasm/./node_modules/hello-wasm-demo/hello_wasm_bg.js?");

/***/ }),

/***/ "./node_modules/hello-wasm-demo/hello_wasm_bg.wasm":
/*!*********************************************************!*\
  !*** ./node_modules/hello-wasm-demo/hello_wasm_bg.wasm ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./hello_wasm_bg.js */ \"./node_modules/hello-wasm-demo/hello_wasm_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"1d064cb0f5da3fbca26f\", {\n\t\"./hello_wasm_bg.js\": {\n\t\t\"__wbg_alert_8755b7883b6ce0ef\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_8755b7883b6ce0ef\n\t}\n});\n\n//# sourceURL=webpack://hello-wasm/./node_modules/hello-wasm-demo/hello_wasm_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;