"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[id]",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/post.module.css */ \"./styles/post.module.css\");\n/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction Post(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    router.push(\"/blog\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/blog\",\n                    children: \"Back to the blogs baby\"\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/nextLearning/pages/blog/[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/madfarm/code-sandbox/nextLearning/pages/blog/[id].js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: props.post.title\n            }, void 0, false, {\n                fileName: \"/home/madfarm/code-sandbox/nextLearning/pages/blog/[id].js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.post.content\n            }, void 0, false, {\n                fileName: \"/home/madfarm/code-sandbox/nextLearning/pages/blog/[id].js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default().stupidButton),\n                onClick: dicks,\n                children: \"Click me to programmatically navigate or redirect\"\n            }, void 0, false, {\n                fileName: \"/home/madfarm/code-sandbox/nextLearning/pages/blog/[id].js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDUzs7QUFHbEMsU0FBU0csS0FBS0MsS0FBSyxFQUFFOztJQUNoQyxNQUFNQyxTQUFTSixzREFBU0E7SUFHeEJJLE9BQU9DLElBQUksQ0FBQztJQUdaLHFCQUNJOzswQkFDSSw4REFBQ0M7MEJBQ0csNEVBQUNQLGtEQUFJQTtvQkFBQ1EsTUFBSzs4QkFBUTs7Ozs7Ozs7Ozs7MEJBRXZCLDhEQUFDQzswQkFBSUwsTUFBTU0sSUFBSSxDQUFDQyxLQUFLOzs7Ozs7MEJBQ3JCLDhEQUFDSjswQkFBR0gsTUFBTU0sSUFBSSxDQUFDRSxPQUFPOzs7Ozs7MEJBRXRCLDhEQUFDQztnQkFBT0MsV0FBV1osNkVBQW1CO2dCQUFFYyxTQUFTQzswQkFBTzs7Ozs7Ozs7QUFLcEUsQ0FBQztHQXBCdUJkOztRQUNMRixrREFBU0E7OztLQURKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tpZF0uanM/NWM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIFxuICAgIHJvdXRlci5wdXNoKCcvYmxvZycpXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+QmFjayB0byB0aGUgYmxvZ3MgYmFieTwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMj57cHJvcHMucG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHA+e3Byb3BzLnBvc3QuY29udGVudH08L3A+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3R1cGlkQnV0dG9ufSBvbkNsaWNrPXtkaWNrc30+XG4gICAgICAgICAgICAgICAgQ2xpY2sgbWUgdG8gcHJvZ3JhbW1hdGljYWxseSBuYXZpZ2F0ZSBvciByZWRpcmVjdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9sZWFybndlYmNvZGUuZ2l0aHViLmlvL2pzb24tZXhhbXBsZS9wb3N0cy5qc29uJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBjb25zdCB0aGVQYXRocyA9IGRhdGEucG9zdHMubWFwKHBvc3QgPT4ge1xuICAgICAgICByZXR1cm4geyBwYXJhbXM6IHsgaWQ6IHBvc3Quc2x1ZyB9IH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHRoZVBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbGVhcm53ZWJjb2RlLmdpdGh1Yi5pby9qc29uLWV4YW1wbGUvcG9zdHMuanNvblwiKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBjb25zdCB0aGVQb3N0ID0gZGF0YS5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LnNsdWcgPT09IGNvbnRleHQucGFyYW1zLmlkKVswXVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3Q6IHRoZVBvc3QsXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJQb3N0IiwicHJvcHMiLCJyb3V0ZXIiLCJwdXNoIiwicCIsImhyZWYiLCJoMiIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJzdHVwaWRCdXR0b24iLCJvbkNsaWNrIiwiZGlja3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});