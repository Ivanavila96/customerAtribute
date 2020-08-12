webpackHotUpdate("static\\development\\pages\\AttributeCreation.js",{

/***/ "./pages/Drop1.js":
/*!************************!*\
  !*** ./pages/Drop1.js ***!
  \************************/
/*! exports provided: Drop_1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drop_1", function() { return Drop_1; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropdown */ "./node_modules/react-dropdown/dist/index.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AttributeCreation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AttributeCreation */ "./pages/AttributeCreation.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Drop_1 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Drop_1, _React$Component);

  var _super = _createSuper(Drop_1);

  function Drop_1() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Drop_1);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      fields: {},
      id: "",
      code: "",
      label: "",
      Type: "",
      sortingorder: "",
      status: "",
      cartpage: "",
      registerpage: "",
      accountpage: "",
      ordergrid: "",
      customergrid: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onChange", function (updatedValue) {
      _this.setState({
        fields: _objectSpread(_objectSpread({}, _this.state.fields), updatedValue)
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "change", function (e) {
      _this.props.onChange(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault(); // this.props.onSubmit(this.state);

      _this.setState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });

      _this.props.onChange({
        id: "",
        code: "",
        label: "",
        Type: "",
        sortingorder: "",
        status: "",
        cartpage: "",
        registerpage: "",
        accountpage: "",
        ordergrid: "",
        customergrid: ""
      });
    });

    _this.state = {
      selectedValue: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Drop_1, [{
    key: "renderSelectedForm",
    value: function renderSelectedForm(param) {
      var _this2 = this;

      switch (param) {
        case 'form_name1':
          return __jsx("form", {
            name: "form_name1",
            id: "form_name1"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Your Company"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "your-company"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Text Field",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx("p", null, "Input Validation:"), __jsx("select", {
            style: {
              width: '100%',
              height: '35px'
            }
          }, __jsx("option", {
            value: "",
            selected: "selected"
          }), __jsx("option", {
            value: "None"
          }, "None"), __jsx("option", {
            value: "Decimal Number"
          }, "Decimal Number "), __jsx("option", {
            value: "Integer Number"
          }, "Integer Number"), __jsx("option", {
            value: "Email"
          }, "Email"), __jsx("option", {
            value: "URL"
          }, "URL"), __jsx("option", {
            value: "Letters"
          }, "Letters")));

        case 'form_name2':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name2",
            id: "form_name2"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "How did you find us?"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "how-did-you-find-us"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Multiple Select",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

        case 'form_name3':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name3",
            id: "form_name3"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "You register as"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "register-as",
            disabled: true
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Dropdown",
            disabled: true
          }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

        case 'form_name4':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name4",
            id: "form_name4"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Dear visitor!"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "dear-visitor"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Static Text",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            style: {
              width: '100%',
              height: '45px'
            },
            placeholder: "<strong>Please</strong>, \r don't hesitate to answer \r the questions below. We want \r to know little more about you \r to improve our store and make you \r feel at home :)"
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

        case 'form_name5':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name5",
            id: "form_name5"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Date of birth"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "date-of-birth"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Date",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            id: "date",
            type: "date"
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null));

        case 'form_name6':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name6",
            id: "form_name6"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Country"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "country"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Dropdown",
            disabled: true
          }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

        case 'form_name7':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name7",
            id: "form_name7"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Accept Marketing Email"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "accept-marketing-email-1"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Yes/No",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

        case 'form_name8':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name8",
            id: "form_name8"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Interests"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "interests"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Multiple Select",
            disabled: true
          }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

        default:
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            onChange: function onChange(fields) {
              return _this2.onchange(fields);
            }
          }, __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("br", null), __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            name: "label",
            placeholder: "Attribute Label",
            value: this.state.label,
            onChange: function onChange(e) {
              return _this2.change(e);
            }
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], null), __jsx("p", null, "For internal use. Must be unique with no spaces and length <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            type: "number"
          }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(_Drop2__WEBPACK_IMPORTED_MODULE_12__["Drop_2"], null), __jsx("br", null));
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        selectedValue: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", null, __jsx("div", null, __jsx("form", null, __jsx("select", {
        style: {
          width: '100%',
          height: '35px'
        },
        value: this.state.selectedValue,
        onChange: this.handleChange
      }, __jsx("option", {
        value: "",
        selected: "selected"
      }), __jsx("option", {
        value: "form_name1"
      }, "Your company"), __jsx("option", {
        value: "form_name2"
      }, "How did you find us?"), __jsx("option", {
        value: "form_name3"
      }, "You register as"), __jsx("option", {
        value: "form_name4"
      }, "Dear Visitor!"), __jsx("option", {
        value: "form_name5"
      }, "Date of birth"), __jsx("option", {
        value: "form_name6"
      }, "Country"), __jsx("option", {
        value: "form_name7"
      }, "Accept Maketing Email"), __jsx("option", {
        value: "form_name8"
      }, "Interests"))), __jsx("p", null, "If you choose a template, the following attribute fields will be filled automatically. Or you can leave this box blank and create your unique field  by filling in these boxes."), __jsx("br", null), this.renderSelectedForm(this.state.selectedValue))));
    }
  }]);

  return Drop_1;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ecm9wMS5qcyJdLCJuYW1lcyI6WyJEcm9wXzEiLCJmaWVsZHMiLCJpZCIsImNvZGUiLCJsYWJlbCIsIlR5cGUiLCJzb3J0aW5nb3JkZXIiLCJzdGF0dXMiLCJjYXJ0cGFnZSIsInJlZ2lzdGVycGFnZSIsImFjY291bnRwYWdlIiwib3JkZXJncmlkIiwiY3VzdG9tZXJncmlkIiwidXBkYXRlZFZhbHVlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImUiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInNlbGVjdGVkVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwicGFyYW0iLCJ3aWR0aCIsImhlaWdodCIsIm9uY2hhbmdlIiwiY2hhbmdlIiwiZXZlbnQiLCJyZW5kZXJTZWxlY3RlZEZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS1EsSUFBTUEsTUFBYjtBQUFBOztBQUFBOztBQTREQyxvQkFBYTtBQUFBOztBQUFBOztBQUNYOztBQURXLGdOQTFETDtBQUNOQyxZQUFNLEVBQUMsRUFERDtBQUVOQyxRQUFFLEVBQUMsRUFGRztBQUdOQyxVQUFJLEVBQUMsRUFIQztBQUlOQyxXQUFLLEVBQUMsRUFKQTtBQUtOQyxVQUFJLEVBQUMsRUFMQztBQU1OQyxrQkFBWSxFQUFDLEVBTlA7QUFPTkMsWUFBTSxFQUFDLEVBUEQ7QUFRTkMsY0FBUSxFQUFDLEVBUkg7QUFTTkMsa0JBQVksRUFBQyxFQVRQO0FBVU5DLGlCQUFXLEVBQUMsRUFWTjtBQVdOQyxlQUFTLEVBQUMsRUFYSjtBQVlOQyxrQkFBWSxFQUFDO0FB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SyxFQUFDO0FBQWQsbUJBUEosRUFRSTtBQUFRLGFBQUssRUFBQztBQUFkLGlDQVJKLEVBU0k7QUFBUSxhQUFLLEVBQUM7QUFBZCxxQkFUSixDQURGLENBRFIsRUFjTyxtTUFkUCxFQWtCSixpQkFsQkksRUFvQkMsS0FBS1Esa0JBQUwsQ0FBd0IsS0FBS3RCLEtBQUwsQ0FBV2EsYUFBbkMsQ0FwQkQsQ0FERixDQURBLENBREY7QUErQkM7QUEvZ0JBOztBQUFBO0FBQUEsRUFBNEJVLDRDQUFLLENBQUNDLFNBQWxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxBdHRyaWJ1dGVDcmVhdGlvbi5qcy45OTU5MDA4YTk0ZjQyNDA1ZjA0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZCwgRm9ybSxDaGVja2JveCwgVGV4dFN0eWxlLEJ1dHRvbiwgU2VsZWN0LCBQYWdlLCBTdGFjaywgVGV4dEZpZWxkLCBIZWFkaW5nLCBDaG9pY2VMaXN0LH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWRyb3Bkb3duJztcclxuaW1wb3J0ICdyZWFjdC1kcm9wZG93bi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vQXR0cmlidXRlQ3JlYXRpb24nO1xyXG5pbXBvcnQge0Ryb3BfMn0gZnJvbSAnLi9Ecm9wMic7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcblxyXG5cclxuXHJcblxyXG4gZXhwb3J0IGNsYXNzIERyb3BfMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgZmllbGRzOnt9LFxyXG4gICAgaWQ6XCJcIixcclxuICAgIGNvZGU6XCJcIixcclxuICAgIGxhYmVsOlwiXCIsXHJcbiAgICBUeXBlOlwiXCIsXHJcbiAgICBzb3J0aW5nb3JkZXI6XCJcIixcclxuICAgIHN0YXR1czpcIlwiLFxyXG4gICAgY2FydHBhZ2U6XCJcIixcclxuICAgIHJlZ2lzdGVycGFnZTpcIlwiLFxyXG4gICAgYWNjb3VudHBhZ2U6XCJcIixcclxuICAgIG9yZGVyZ3JpZDpcIlwiLFxyXG4gICAgY3VzdG9tZXJncmlkOlwiXCJcclxuICB9O1xyXG4gIFxyXG4gIG9uQ2hhbmdlID0gdXBkYXRlZFZhbHVlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLmZpZWxkcyxcclxuICAgICAgICAuLi51cGRhdGVkVmFsdWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2hhbmdlID0gZSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBvblN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgaWQ6XCJcIixcclxuICAgICAgY29kZTpcIlwiLFxyXG4gICAgICBsYWJlbDpcIlwiLFxyXG4gICAgICBUeXBlOlwiXCIsXHJcbiAgICAgIHNvcnRpbmdvcmRlcjpcIlwiLFxyXG4gICAgICBzdGF0dXM6XCJcIixcclxuICAgICAgY2FydHBhZ2U6XCJcIixcclxuICAgICAgcmVnaXN0ZXJwYWdlOlwiXCIsXHJcbiAgICAgIGFjY291bnRwYWdlOlwiXCIsXHJcbiAgICAgIG9yZGVyZ3JpZDpcIlwiLFxyXG4gICAgICBjdXN0b21lcmdyaWQ6XCJcIlxyXG4gICAgfSk7XHJcbiAgfTtcclxuIFxyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTonJ1xyXG4gICAgICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbnJlbmRlclNlbGVjdGVkRm9ybShwYXJhbSkge1xyXG4gIFxyXG5zd2l0Y2gocGFyYW0pIHtcclxuICBjYXNlICdmb3JtX25hbWUxJzpcclxuICAgIHJldHVybiAgPGZvcm0gIG5hbWU9XCJmb3JtX25hbWUxXCIgaWQ9XCJmb3JtX25hbWUxXCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT4gICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIENvbXBhbnlcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ci1jb21wYW55XCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJUZXh0IEZpZWxkXCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5EZWZhdWx0IFZhbHVlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBhdHRyaWJ1dGUgd2hlbiBcclxuICAgICAgICAgICAgICAgICAgICBpdCBpcyBzaG93biB0byB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5QbGFjZWhvbGRlcjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIHBsYWNlaG9sZGVyIHNwZWNpZmllcyBhIHNob3J0IGhpbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMgZmllbGQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPklucHV0IFZhbGlkYXRpb246PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319ICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb25lXCI+Tm9uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGVjaW1hbCBOdW1iZXJcIj5EZWNpbWFsIE51bWJlciA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVnZXIgTnVtYmVyXCI+SW50ZWdlciBOdW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVtYWlsXCI+RW1haWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVSTFwiPlVSTDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGV0dGVyc1wiPkxldHRlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9mb3JtPjtcclxuXHJcbiAgY2FzZSAnZm9ybV9uYW1lMic6XHJcbiAgICAgICAgICAgIHJldHVybiAgICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lMlwiIGlkPVwiZm9ybV9uYW1lMlwiID5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBkaWQgeW91IGZpbmQgdXM/XCIvPlxyXG4gICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJob3ctZGlkLXlvdS1maW5kLXVzXCIvPlxyXG4gICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJNdWx0aXBsZSBTZWxlY3RcIiBkaXNhYmxlZCAvPiAgICBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgPC9Gb3JtPjtcclxuICAgICAgICAgIFxyXG4gIGNhc2UgJ2Zvcm1fbmFtZTMnOlxyXG4gICAgcmV0dXJuICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lM1wiIGlkPVwiZm9ybV9uYW1lM1wiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdSByZWdpc3RlciBhc1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZWdpc3Rlci1hc1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJEcm9wZG93blwiIGRpc2FibGVkIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBvcHRpb25zIGlzIG1hbmFnZWQgaW4gdGFiIFwiTWFuYWdlIE9wdGlvbnNcIiBvbiB0aGUgbGVmdC48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+UGxhY2Vob2xkZXI8L1RleHRTdHlsZT4gICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgICAgICAgICB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBmaWVsZDwvcD5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxuXHJcbmNhc2UgJ2Zvcm1fbmFtZTQnOlxyXG4gIHJldHVybiAgICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lNFwiIGlkPVwiZm9ybV9uYW1lNFwiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlYXIgdmlzaXRvciFcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGVhci12aXNpdG9yXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIlN0YXRpYyBUZXh0XCIgZGlzYWJsZWQgLz4gICBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+RGVmYXVsdCBWYWx1ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0Oic0NXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiPHN0cm9uZz5QbGVhc2U8L3N0cm9uZz4sIFxyXG4gICAgICAgICAgICAgICAgICBkb24mIzAzOTt0IGhlc2l0YXRlIHRvIGFuc3dlciBcclxuICAgICAgICAgICAgICAgICAgdGhlIHF1ZXN0aW9ucyBiZWxvdy4gV2Ugd2FudCBcclxuICAgICAgICAgICAgICAgICAgdG8ga25vdyBsaXR0bGUgbW9yZSBhYm91dCB5b3UgXHJcbiAgICAgICAgICAgICAgICAgIHRvIGltcHJvdmUgb3VyIHN0b3JlIGFuZCBtYWtlIHlvdSBcclxuICAgICAgICAgICAgICAgICAgZmVlbCBhdCBob21lIDopXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgYXR0cmlidXRlIHdoZW4gXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgaXMgc2hvd24gdG8geW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcbiAgICAgICAgICAgICAgXHJcbmNhc2UgJ2Zvcm1fbmFtZTUnOlxyXG4gIHJldHVybiAgICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lNVwiIGlkPVwiZm9ybV9uYW1lNVwiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGUgb2YgYmlydGhcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGF0ZS1vZi1iaXJ0aFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiRGF0ZVwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+RGVmYXVsdCBWYWx1ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGF0dHJpYnV0ZSB3aGVuIGl0IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlBsYWNlaG9sZGVyPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgICAgICAgICB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBmaWVsZDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuY2FzZSAnZm9ybV9uYW1lNic6XHJcbiAgcmV0dXJuICAgIDxGb3JtIG5hbWU9XCJmb3JtX25hbWU2XCIgaWQ9XCJmb3JtX25hbWU2XCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvdW50cnlcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJEcm9wZG93blwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIG9wdGlvbnMgaXMgbWFuYWdlZCBpbiB0YWIgXCJNYW5hZ2UgT3B0aW9uc1wiIG9uIHRoZSBsZWZ0LjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+UGxhY2Vob2xkZXI8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIHBsYWNlaG9sZGVyIHNwZWNpZmllcyBhIHNob3J0IGhpbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMgZmllbGQ8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcblxyXG5jYXNlICdmb3JtX25hbWU3JzpcclxuICByZXR1cm4gICAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTdcIiBpZD1cImZvcm1fbmFtZTdcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBY2NlcHQgTWFya2V0aW5nIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFjY2VwdC1tYXJrZXRpbmctZW1haWwtMVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiWWVzL05vXCIgZGlzYWJsZWQgLz4gXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlZmF1bHQgVmFsdWU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSB3aGVuIGl0IGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuY2FzZSAnZm9ybV9uYW1lOCc6XHJcbiAgcmV0dXJuICAgIDxGb3JtIG5hbWU9XCJmb3JtX25hbWU4XCIgaWQ9XCJmb3JtX25hbWU4XCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW50ZXJlc3RzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImludGVyZXN0c1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiTXVsdGlwbGUgU2VsZWN0XCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgb3B0aW9ucyBpcyBtYW5hZ2VkIGluIHRhYiBcIk1hbmFnZSBPcHRpb25zXCIgb24gdGhlIGxlZnQuPC9wPiAgICBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgPC9Gb3JtPjsgICAgICBcclxuXHJcbiAgZGVmYXVsdDpcclxuICAgIHJldHVybiA8Rm9ybSBvbkNoYW5nZT17ZmllbGRzID0+IHRoaXMub25jaGFuZ2UoZmllbGRzKX0+XHJcbiAgICA8aHIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+ICAgIFxyXG4gICAgICAgIDxici8+XHJcbiAgICA8aHIvPlxyXG4gICAgPGJyLz5cclxuICAgICAgICBcclxuICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgbmFtZT1cImxhYmVsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXR0cmlidXRlIExhYmVsXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhYmVsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmNoYW5nZShlKX0vPlxyXG4gICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDxEcm9wXzIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcbn1cclxufVxyXG5cclxuXHJcbmhhbmRsZUNoYW5nZShldmVudCkgeyB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTsgfVxyXG5cclxucmVuZGVyKCkge1xyXG4gIFxyXG5yZXR1cm4gKFxyXG4gIDw+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWUxXCI+WW91ciBjb21wYW55PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWUyXCI+SG93IGRpZCB5b3UgZmluZCB1cz88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTNcIj5Zb3UgcmVnaXN0ZXIgYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTRcIj5EZWFyIFZpc2l0b3IhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU1XCI+RGF0ZSBvZiBiaXJ0aDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lNlwiPkNvdW50cnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTdcIj5BY2NlcHQgTWFrZXRpbmcgRW1haWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZThcIj5JbnRlcmVzdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgPHA+SWYgeW91IGNob29zZSBhIHRlbXBsYXRlLCB0aGUgZm9sbG93aW5nIFxyXG4gIGF0dHJpYnV0ZSBmaWVsZHMgd2lsbCBiZSBmaWxsZWQgYXV0b21hdGljYWxseS4gXHJcbiAgT3IgeW91IGNhbiBsZWF2ZSB0aGlzIGJveCBibGFuayBhbmQgY3JlYXRlIHlvdXIgdW5pcXVlIFxyXG4gIGZpZWxkICBieSBmaWxsaW5nIGluIHRoZXNlIGJveGVzLjwvcD5cclxuPGJyLz5cclxuICBcclxuICAgIHt0aGlzLnJlbmRlclNlbGVjdGVkRm9ybSh0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWUpfVxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgXHJcblxyXG4gIDwvPlxyXG4pO1xyXG59XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9