webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StandardLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _jsxFileName = \"/Users/johnsweet/repos/starter-frontend/src/components/layout/layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst {\n  Header,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"];\nconst {\n  SubMenu\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"];\nconst siteTitle = \"Starter Site\";\nfunction StandardLayout({\n  title,\n  header,\n  subheader,\n  children\n}) {\n  _s();\n\n  const {\n    0: collapsed,\n    1: setCollapsed\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  }\n\n  const collapseButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"MenuUnfoldOutlined\"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"MenuFoldOutlined\"], {\n    className: \"trigger\",\n    onClick: toggleCollapsed\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, title ? title : siteTitle)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    style: {\n      overflow: \"hidden\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(Header, {\n    className: \"header d-flex align-items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, collapseButton)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(Sider, {\n    width: 250,\n    style: {\n      height: \"100vh\"\n    },\n    className: \"site-layout-background\",\n    collapsed: collapsed,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    mode: \"inline\",\n    defaultSelectedKeys: [\"1\"],\n    defaultOpenKeys: [\"sub1\"],\n    style: {\n      height: \"100%\",\n      borderRight: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(SubMenu, {\n    key: \"sub1\",\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"DesktopOutlined\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 41\n      }\n    }),\n    title: \"Title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"Subtitle 1\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"Subtitle 2\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, \"Subtitle 3\")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    className: \"p-3\",\n    style: {\n      padding: \"1rem\",\n      overflowY: \"scroll\",\n      paddingBottom: \"2rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, children))));\n}\n\n_s(StandardLayout, \"IaHwFfvbaw8y79e5do0CzWS1eXc=\");\n\n_c = StandardLayout;\n\nvar _c;\n\n$RefreshReg$(_c, \"StandardLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzP2YyNGQiXSwibmFtZXMiOlsiSGVhZGVyIiwiU2lkZXIiLCJMYXlvdXQiLCJTdWJNZW51IiwiTWVudSIsInNpdGVUaXRsZSIsIlN0YW5kYXJkTGF5b3V0IiwidGl0bGUiLCJoZWFkZXIiLCJzdWJoZWFkZXIiLCJjaGlsZHJlbiIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsInVzZVN0YXRlIiwidG9nZ2xlQ29sbGFwc2VkIiwiY29sbGFwc2VCdXR0b24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNZW51VW5mb2xkT3V0bGluZWQiLCJNZW51Rm9sZE91dGxpbmVkIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJwYWRkaW5nIiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLE1BQU07QUFBRUEsUUFBRjtBQUFVQztBQUFWLElBQW9CQywyQ0FBMUI7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBY0MseUNBQXBCO0FBRUEsTUFBTUMsU0FBUyxHQUFHLGNBQWxCO0FBRWUsU0FBU0MsY0FBVCxDQUF3QjtBQUFFQyxPQUFGO0FBQVNDLFFBQVQ7QUFBaUJDLFdBQWpCO0FBQTRCQztBQUE1QixDQUF4QixFQUFnRTtBQUFBOztBQUM3RSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCRixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUNELFFBQU1JLGNBQWMsR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUNyQk4sU0FBUyxHQUFHTyxvRUFBSCxHQUF3QkMsa0VBRFosRUFFckI7QUFDRUMsYUFBUyxFQUFFLFNBRGI7QUFFRUMsV0FBTyxFQUFFUDtBQUZYLEdBRnFCLENBQXZCO0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRUCxLQUFLLEdBQUdBLEtBQUgsR0FBV0YsU0FBeEIsQ0FERixDQURGLEVBSUUsTUFBQywyQ0FBRDtBQUFRLFNBQUssRUFBRTtBQUFFaUIsY0FBUSxFQUFFO0FBQVosS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQVEsYUFBUyxFQUFDLGtDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNUCxjQUFOLENBREYsQ0FERixFQUlFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLFNBQUssRUFBRSxHQURUO0FBRUUsU0FBSyxFQUFFO0FBQUVRLFlBQU0sRUFBRTtBQUFWLEtBRlQ7QUFHRSxhQUFTLEVBQUMsd0JBSFo7QUFJRSxhQUFTLEVBQUVaLFNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLHVCQUFtQixFQUFFLENBQUMsR0FBRCxDQUZ2QjtBQUdFLG1CQUFlLEVBQUUsQ0FBQyxNQUFELENBSG5CO0FBSUUsU0FBSyxFQUFFO0FBQUVZLFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxpQkFBVyxFQUFFO0FBQS9CLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsT0FBRDtBQUFTLE9BQUcsRUFBQyxNQUFiO0FBQW9CLFFBQUksRUFBRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBMUI7QUFBK0MsU0FBSyxFQUFDLE9BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFHRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsQ0FORixDQU5GLENBREYsRUFvQkUsTUFBQywyQ0FBRDtBQUNFLGFBQVMsRUFBQyxLQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLG1CQUFhLEVBQUU7QUFIVixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR2pCLFFBUkgsQ0FwQkYsQ0FKRixDQUpGLENBREY7QUEyQ0Q7O0dBeER1QkosYzs7S0FBQUEsYyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIERlc2t0b3BPdXRsaW5lZCxcbiAgTGFwdG9wT3V0bGluZWQsXG4gIERhdGFiYXNlT3V0bGluZWQsXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgTWVudUZvbGRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmNvbnN0IHsgSGVhZGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuXG5jb25zdCBzaXRlVGl0bGUgPSBcIlN0YXJ0ZXIgU2l0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFuZGFyZExheW91dCh7IHRpdGxlLCBoZWFkZXIsIHN1YmhlYWRlciwgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlZCgpIHtcbiAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCk7XG4gIH1cbiAgY29uc3QgY29sbGFwc2VCdXR0b24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIGNvbGxhcHNlZCA/IE1lbnVVbmZvbGRPdXRsaW5lZCA6IE1lbnVGb2xkT3V0bGluZWQsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcInRyaWdnZXJcIixcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZUNvbGxhcHNlZCxcbiAgICB9XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlID8gdGl0bGUgOiBzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2Pntjb2xsYXBzZUJ1dHRvbn08L2Rpdj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPFNpZGVyXG4gICAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIlxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tcIjFcIl19XG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W1wic3ViMVwiXX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIGljb249ezxEZXNrdG9wT3V0bGluZWQgLz59IHRpdGxlPVwiVGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5TdWJ0aXRsZSAxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+U3VidGl0bGUgMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlN1YnRpdGxlIDM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvU2lkZXI+XG4gICAgICAgICAgPExheW91dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnJlbVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/layout.js\n");

/***/ })

})