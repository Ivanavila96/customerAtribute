webpackHotUpdate("static\\development\\pages\\AttributeCreation.js",{

/***/ "./pages/AttributeCreation.js":
/*!************************************!*\
  !*** ./pages/AttributeCreation.js ***!
  \************************************/
/*! exports provided: AttCreation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttCreation", function() { return AttCreation; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Drop1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drop1 */ "./pages/Drop1.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var AttCreation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AttCreation, _React$Component);

  var _super = _createSuper(AttCreation);

  function AttCreation() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttCreation);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttCreation, [{
    key: "render",
    value: function render() {
      var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(['hidden']),
          selected = _useState[0],
          setSelected = _useState[1];

      var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
        return setSelected(value);
      }, []);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        sectioned: true,
        title: " Create attribute"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        distribution: "leading"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        url: "/Index"
      }, "Home"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        url: "/componenteslist"
      }, "Attributes"), __jsx("p", null, "Attribute"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], null, __jsx("form", {
        id: "inicial"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextStyle"], {
        variation: "strong"
      }, "Use Template:"), __jsx(_Drop1__WEBPACK_IMPORTED_MODULE_6__["Drop_1"], null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Heading"], null, "Attribute Configuration"), __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ChoiceList"], {
        allowMultiple: true,
        choices: [{
          label: 'Show on Cart page:',
          value: 'shipping',
          helpText: 'Tick if you want to use this attribute on cart page.'
        }, {
          label: 'Show on Register page:',
          value: 'confirmation',
          helpText: 'Tick if you want to use this attribute on register page.'
        }],
        selected: selected,
        onChange: handleChange
      }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        distribution: "trailing"
      }, __jsx("button", null, "Add new Atribute"))), __jsx("br", null))));
    }
  }]);

  return AttCreation;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdHRyaWJ1dGVDcmVhdGlvbi5qcyJdLCJuYW1lcyI6WyJBdHRDcmVhdGlvbiIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJsYWJlbCIsImhlbHBUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUdRO0FBQUEsc0JBQzBCQyxzREFBUSxDQUFDLENBQUMsUUFBRCxDQUFELENBRGxDO0FBQUEsVUFDQ0MsUUFERDtBQUFBLFVBQ1dDLFdBRFg7O0FBRVIsVUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxlQUFXSCxXQUFXLENBQUNHLEtBQUQsQ0FBdEI7QUFBQSxPQUFELEVBQWdDLEVBQWhDLENBQWhDO0FBRUEsYUFFQSxtRUFDRSxNQUFDLHFEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixhQUFLLEVBQUM7QUFBdEIsU0FDRSxNQUFDLHNEQUFEO0FBQU8sb0JBQVksRUFBQztBQUFwQixTQUNFLE1BQUMscURBQUQ7QUFBTSxXQUFHLEVBQUM7QUFBVixnQkFERixFQUtFLE1BQUMscURBQUQ7QUFBTSxXQUFHLEVBQUM7QUFBVixzQkFMRixFQVFJLDZCQVJKLENBREYsQ0FERixFQWNBLE1BQUMscURBQUQsUUFDRTtBQUFNLFVBQUUsRUFBQztBQUFULFNBQ0UsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDRSxNQUFDLDBEQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQix5QkFERixFQUVJLE1BQUMsNkNBQUQsT0FGSixFQUlFLGlCQUpGLEVBS0UsTUFBQyx3REFBRCxrQ0FMRixFQU1FLGlCQU5GLEVBT0UsaUJBUEYsRUFVSSxNQUFDLDJEQUFEO0FBQ00scUJBQWEsTUFEbkI7QUFFTSxlQUFPLEVBQUUsQ0FDUDtBQUNFQyxlQUFLLEVBQUUsb0JBRFQ7QUFFRUQsZUFBSyxFQUFFLFVBRlQ7QUFHRUUsa0JBQVEsRUFDTjtBQUpKLFNBRE8sRUFPUDtBQUNFRCxlQUFLLEVBQUUsd0JBRFQ7QUFFRUQsZUFBSyxFQUFFLGNBRlQ7QUFHRUUsa0JBQVEsRUFDTjtBQUpKLFNBUE8sQ0FGZjtBQWdCTSxnQkFBUSxFQUFFTixRQWhCaEI7QUFpQk0sZ0JBQVEsRUFBRUU7QUFqQmhCLFFBVkosRUE0QkosaUJBNUJJLEVBNkJKLGlCQTdCSSxFQThCSixNQUFDLHNEQUFEO0FBQU8sb0JBQVksRUFBQztBQUFwQixTQUNBLHlDQURBLENBOUJJLENBREYsRUFtQ0ksaUJBbkNKLENBREYsQ0FkQSxDQUZBO0FBMERDO0FBakVEOztBQUFBO0FBQUEsRUFBaUNLLDRDQUFLLENBQUNDLFNBQXZDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxBdHRyaWJ1dGVDcmVhdGlvbi5qcy5lYjA3NWQ4MTg2NmQ3MzcyY2M4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCBDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Ryb3BfMX0gZnJvbSAnLi9Ecm9wMSc7XHJcbmltcG9ydCB7RHJvcF8yfSBmcm9tICcuL0Ryb3AyJztcclxuaW1wb3J0ICdyZWFjdC1kcm9wZG93bi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge0NhcmQsRm9ybSwgQ2hvaWNlTGlzdCwgVGV4dFN0eWxlLEJ1dHRvbiwgSGVhZGluZyxFbXB0eVN0YXRlLCBBcHBQcm92aWRlcixMYXlvdXQsUGFnZSwgU3RhY2ssIEFjdGlvbkxpc3QsIEF2YXRhciwgQ29udGV4dHVhbFNhdmVCYXIsIEZvcm1MYXlvdXQsRnJhbWUsIExvYWRpbmcsTW9kYWwsIE5hdmlnYXRpb24sIFNrZWxldG9uQm9keVRleHQsIFNrZWxldG9uRGlzcGxheVRleHQsIFNrZWxldG9uUGFnZSwgVGV4dENvbnRhaW5lciwgVGV4dEZpZWxkLCBUb2FzdCwgVG9wQmFyLCBMaW5rfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7QXJyb3dMZWZ0TWlub3IsIE5vdGVNYWpvck1vbm90b25lLCBIb21lTWFqb3JNb25vdG9uZSwgT3JkZXJzTWFqb3JUd290b25lLCBNb2JpbGVIYW1idXJnZXJNYWpvck1vbm90b25lLCBMaXN0TWFqb3JNb25vdG9uZSwgQmFua01ham9yTW9ub3RvbmUsVHJvdWJsZXNob290TWFqb3JNb25vdG9uZSxTZXR0aW5nc01ham9yTW9ub3RvbmV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQge21vc3RyYXJ9IGZyb20gJy4vRHJvcDEnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRDcmVhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIFxyXG4gXHJcbnJlbmRlcigpe1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoWydoaWRkZW4nXSk7XHJcbmNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWQodmFsdWUpLCBbXSk7XHJcbiBcclxucmV0dXJuKFxyXG5cclxuPD5cclxuICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9XCIgQ3JlYXRlIGF0dHJpYnV0ZVwiPlxyXG4gICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImxlYWRpbmdcIj5cclxuICAgICAgPExpbmsgdXJsPScvSW5kZXgnID5cclxuICAgICAgICBIb21lXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgICAgICBcclxuICAgICAgPExpbmsgdXJsPScvY29tcG9uZW50ZXNsaXN0JyA+XHJcbiAgICAgICAgQXR0cmlidXRlc1xyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgPHA+QXR0cmlidXRlPC9wPlxyXG4gICAgPC9TdGFjaz4gICAgICBcclxuICA8L0NhcmQ+XHJcbiAgICAgICAgXHJcbjxQYWdlPlxyXG4gIDxmb3JtIGlkPVwiaW5pY2lhbFwiPlxyXG4gICAgPENhcmQgc2VjdGlvbmVkPiAgICAgXHJcbiAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VXNlIFRlbXBsYXRlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgIDxEcm9wXzEvPlxyXG4gICBcclxuICAgICAgPGJyLz5cclxuICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIENvbmZpZ3VyYXRpb248L0hlYWRpbmc+ICAgIFxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8aHIvPlxyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICBhbGxvd011bHRpcGxlXHJcbiAgICAgICAgICAgICAgY2hvaWNlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1Nob3cgb24gQ2FydCBwYWdlOicsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnc2hpcHBpbmcnLFxyXG4gICAgICAgICAgICAgICAgICBoZWxwVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAnVGljayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhdHRyaWJ1dGUgb24gY2FydCBwYWdlLicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1Nob3cgb24gUmVnaXN0ZXIgcGFnZTonLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NvbmZpcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIGhlbHBUZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgICdUaWNrIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGF0dHJpYnV0ZSBvbiByZWdpc3RlciBwYWdlLicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuPGJyLz5cclxuPGJyLz5cclxuPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XHJcbjxidXR0b24gPkFkZCBuZXcgQXRyaWJ1dGU8L2J1dHRvbj5cclxuPC9TdGFjaz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8YnIvPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvUGFnZT5cclxuPC8+XHJcbiAgXHJcbiApO1xyXG59XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=