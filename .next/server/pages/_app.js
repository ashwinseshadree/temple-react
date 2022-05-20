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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'UA-217853254-1';\n// log the pageview with their URL\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// log specific events happening.\nconst event = ({ action , params  })=>{\n    window.gtag(\"event\", action, params);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    pageview,\n    event\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2EvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLEtBQUssQ0FBQ0EsY0FBYyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLElBQUksQ0FBZ0I7QUFDL0UsRUFBa0M7QUFDM0IsS0FBSyxDQUFDQyxRQUFRLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQzlCQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVQLGNBQWMsRUFBRSxDQUFDO1FBQ25DUSxTQUFTLEVBQUVILEdBQUc7SUFDbEIsQ0FBQztBQUNMLENBQUM7QUFFRCxFQUFpQztBQUMxQixLQUFLLENBQUNJLEtBQUssSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsTUFBTSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzFDTCxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFPLFFBQUVHLE1BQU0sRUFBRUMsTUFBTTtBQUN2QyxDQUFDO0FBRUQsaUVBQWUsQ0FBQztJQUNaUCxRQUFRO0lBQ1JLLEtBQUs7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXJlZHV4LWJvaWxlcnBsYXRlLy4vbGliL2dhL2luZGV4LmpzPzlhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfSUQgfHwgJ1VBLTIxNzg1MzI1NC0xJ1xyXG4vLyBsb2cgdGhlIHBhZ2V2aWV3IHdpdGggdGhlaXIgVVJMXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcclxuICAgIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIGxvZyBzcGVjaWZpYyBldmVudHMgaGFwcGVuaW5nLlxyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XHJcbiAgICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwgcGFyYW1zKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHBhZ2V2aWV3LFxyXG4gICAgZXZlbnQsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/ga/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css_custom_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/css/custom-style.css */ \"./styles/css/custom-style.css\");\n/* harmony import */ var _styles_css_custom_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css_custom_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/ga */ \"./lib/ga/index.js\");\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_ga__WEBPACK_IMPORTED_MODULE_8__.pageview(url);\n        };\n        //When the component is mounted, subscribe to router changes\n        //and log those page views\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // If the component is unmounted, unsubscribe\n        // from the event with the `off` method\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        __source: {\n            fileName: \"/Users/Smitiv/Desktop/ashwin/trials/temple-react/temple-react/pages/_app.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/Smitiv/Desktop/ashwin/trials/temple-react/temple-react/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\nconst makestore = ()=>_store_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(makestore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNTO0FBQ0Q7QUFDWTtBQUNoQjtBQUNLO0FBQ047QUFDRjtTQUV0Qk0sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLHNEQUFTO0lBQ3hCQyxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNNLGlCQUFpQixJQUFJQyxHQUFHLEdBQUssQ0FBQztZQUNsQ04sNkNBQVcsQ0FBQ00sR0FBRztRQUNqQixDQUFDO1FBQ0QsRUFBNEQ7UUFDNUQsRUFBMEI7UUFDMUJGLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUVKLGlCQUFpQjtRQUV6RCxFQUE2QztRQUM3QyxFQUF1QztRQUN2QyxNQUFNLEtBQU8sQ0FBQztZQUNaRCxNQUFNLENBQUNJLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQXFCLHNCQUFFTCxpQkFBaUI7UUFDNUQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDRDtRQUFBQSxNQUFNLENBQUNJLE1BQU07SUFBQSxDQUFDO0lBQ2xCLE1BQU0sc0VBQ0hiLGlEQUFRO1FBQUNFLEtBQUssRUFBRUEsb0RBQUs7Ozs7Ozs7dUZBQ25CSyxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsS0FBSyxDQUFDUSxTQUFTLE9BQVNkLG9EQUFLOztBQUM3QixLQUFLLENBQUNlLE9BQU8sR0FBR2hCLGlFQUFhLENBQUNlLFNBQVM7QUFFdkMsaUVBQWVDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDWixLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcmVkdXgtYm9pbGVycGxhdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9jc3MvY3VzdG9tLXN0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZ2EgZnJvbSBcIi4uL2xpYi9nYVwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBnYS5wYWdldmlldyh1cmwpO1xyXG4gICAgfTtcclxuICAgIC8vV2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQsIHN1YnNjcmliZSB0byByb3V0ZXIgY2hhbmdlc1xyXG4gICAgLy9hbmQgbG9nIHRob3NlIHBhZ2Ugdmlld3NcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCwgdW5zdWJzY3JpYmVcclxuICAgIC8vIGZyb20gdGhlIGV2ZW50IHdpdGggdGhlIGBvZmZgIG1ldGhvZFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFrZXN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VzdG9yZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsImNyZWF0ZVdyYXBwZXIiLCJzdG9yZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImdhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJtYWtlc3RvcmUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/reducers/auth/signIn.js":
/*!***************************************!*\
  !*** ./store/reducers/auth/signIn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInReducer\": () => (/* binding */ signInReducer)\n/* harmony export */ });\nconst init = {\n    signin: null,\n    fb_id: null\n};\nconst signInReducer = (state = init, action)=>{\n    switch(action.type){\n        case \"FIND_B_ID\":\n            return {\n                ...state,\n                fb_id: action.payload\n            };\n        case \"SIGN_IN\":\n            return {\n                ...state,\n                signin: action.payload\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hdXRoL3NpZ25Jbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxJQUFJLEdBQUcsQ0FBQztJQUNaQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUM7QUFDTSxLQUFLLENBQUNDLGFBQWEsSUFBSUMsS0FBSyxHQUFHSixJQUFJLEVBQUVLLE1BQU0sR0FBSyxDQUFDO0lBQ3RELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxDQUFXO1lBQ2QsTUFBTSxDQUFDLENBQUM7bUJBQUlGLEtBQUs7Z0JBQUVGLEtBQUssRUFBRUcsTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsQ0FBUztZQUNaLE1BQU0sQ0FBQyxDQUFDO21CQUFJSCxLQUFLO2dCQUFFSCxNQUFNLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBTztZQUFDLENBQUM7O1lBRTNDLE1BQU0sQ0FBQ0gsS0FBSzs7QUFFbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcmVkdXgtYm9pbGVycGxhdGUvLi9zdG9yZS9yZWR1Y2Vycy9hdXRoL3NpZ25Jbi5qcz8zNDA1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXQgPSB7XHJcbiAgc2lnbmluOiBudWxsLFxyXG4gIGZiX2lkOiBudWxsLFxyXG59O1xyXG5leHBvcnQgY29uc3Qgc2lnbkluUmVkdWNlciA9IChzdGF0ZSA9IGluaXQsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJGSU5EX0JfSURcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZiX2lkOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuICAgIGNhc2UgXCJTSUdOX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaWduaW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiaW5pdCIsInNpZ25pbiIsImZiX2lkIiwic2lnbkluUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/auth/signIn.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_signIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/signIn */ \"./store/reducers/auth/signIn.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    signInReducer: _auth_signIn__WEBPACK_IMPORTED_MODULE_1__.signInReducer\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ007QUFFN0MsaUVBQWVBLHNEQUFlLENBQUMsQ0FBQztJQUM5QkMsYUFBYSxFQUFFQSx1REFBYTtBQUM5QixDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcmVkdXgtYm9pbGVycGxhdGUvLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcz9iMjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBzaWduSW5SZWR1Y2VyIH0gZnJvbSBcIi4vYXV0aC9zaWduSW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc2lnbkluUmVkdWNlcjogc2lnbkluUmVkdWNlclxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInNpZ25JblJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n\n\n\n\nconst initialState = {\n};\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())\n];\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRDtBQUNyQjtBQUMrQjtBQUUxQjtBQUVwQyxLQUFLLENBQUNLLFlBQVksR0FBRyxDQUFDO0FBQUEsQ0FBQztBQUN2QixLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDSjtJQUFBQSxvREFBSztBQUFBLENBQUM7QUFFMUIsS0FBSyxDQUFDSyxLQUFLLEdBQUdOLGtEQUFXLENBQ3ZCRyxpREFBVyxFQUNYQyxZQUFZLEVBQ1pGLDZFQUFtQixDQUFDSCxzREFBZSxJQUFJTSxVQUFVO0FBR25ELGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXJlZHV4LWJvaWxlcnBsYXRlLy4vc3RvcmUvc3RvcmUuanM/MzY2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sIm5hbWVzIjpbImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwidGh1bmsiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicm9vdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./styles/css/custom-style.css":
/*!*************************************!*\
  !*** ./styles/css/custom-style.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();