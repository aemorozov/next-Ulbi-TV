"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainContainer */ \"./components/MainContainer.js\");\n\n\n\nconst Users = (users)=>{\n    const pageName = \"Список пользователей\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keywords: pageName,\n        title: pageName,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: pageName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aemorozov\\\\My-folder\\\\React\\\\next-Ulbi-TV\\\\pages\\\\users.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"users/\".concat(user.id),\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aemorozov\\\\My-folder\\\\React\\\\next-Ulbi-TV\\\\pages\\\\users.js\",\n                                lineNumber: 12,\n                                columnNumber: 72\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aemorozov\\\\My-folder\\\\React\\\\next-Ulbi-TV\\\\pages\\\\users.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, undefined)\n                    }, user.id, false, {\n                        fileName: \"C:\\\\Users\\\\aemorozov\\\\My-folder\\\\React\\\\next-Ulbi-TV\\\\pages\\\\users.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aemorozov\\\\My-folder\\\\React\\\\next-Ulbi-TV\\\\pages\\\\users.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aemorozov\\\\My-folder\\\\React\\\\next-Ulbi-TV\\\\pages\\\\users.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Users;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBQzJCO0FBRXZELE1BQU1FLFFBQVEsQ0FBQ0MsUUFBVTtJQUNyQixNQUFNQyxXQUFXO0lBQ2pCLHFCQUNJLDhEQUFDSCxpRUFBYUE7UUFBQ0ksVUFBVUQ7UUFBVUUsT0FBT0Y7OzBCQUN0Qyw4REFBQ0c7MEJBQUlIOzs7Ozs7MEJBQ0wsOERBQUNJOzBCQUNJTCxNQUFNQSxLQUFLLENBQUNNLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ2IsOERBQUNDO2tDQUNHLDRFQUFDWCxrREFBSUE7NEJBQUNZLE1BQU0sU0FBaUIsT0FBUkYsS0FBS0csRUFBRTs0QkFBSUMsY0FBYztzQ0FBQyw0RUFBQ0M7MENBQUdMLEtBQUtNLElBQUk7Ozs7Ozs7Ozs7O3VCQUR2RE4sS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQztLQWRNWDs7QUFnQk4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIlxyXG5cclxuY29uc3QgVXNlcnMgPSAodXNlcnMpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VOYW1lID0gJ9Ch0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSdcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5Db250YWluZXIga2V5d29yZHM9e3BhZ2VOYW1lfSB0aXRsZT17cGFnZU5hbWV9PlxyXG4gICAgICAgICAgICA8aDE+e3BhZ2VOYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy51c2Vycy5tYXAodXNlciA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgdXNlcnMvJHt1c2VyLmlkfWB9IGxlZ2FjeUJlaGF2aW9yPjxhPnt1c2VyLm5hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyB1c2VycyB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJNYWluQ29udGFpbmVyIiwiVXNlcnMiLCJ1c2VycyIsInBhZ2VOYW1lIiwia2V5d29yZHMiLCJ0aXRsZSIsImgxIiwidWwiLCJtYXAiLCJ1c2VyIiwibGkiLCJocmVmIiwiaWQiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});