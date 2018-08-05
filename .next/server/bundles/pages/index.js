module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BalanceResult.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/consensys-api/components/BalanceResult.js";


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Balance"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, props.balance))))));
});

/***/ }),

/***/ "./components/BalanceSearch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/consensys-api/components/BalanceSearch.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Search Balance"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Enter address to receive the current balance!"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
    placeholder: "Address...",
    icon: "search",
    value: props.address,
    onChange: function onChange(e) {
      return props.addressUpdate(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: "blue",
    onClick: props.onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Search")))));
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/consensys-api/components/Layout.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), props.children);
});

/***/ }),

/***/ "./components/TransactionResult.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/herminiogarcia/Folders/personal/interviews/consensys-api/components/TransactionResult.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (38:4)\n\n  36 |       </Table.Header>\n  37 |     </Table>\n> 38 |     <Table.Row>\n     |     ^\n  39 | \n  40 |       {props.timeStamp && <Table.Cell>Time Stamp</Table.Cell>}\n  41 |       {props.hash && <Table.Cell>Hash</Table.Cell>}\n    at _class.raise (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:778:15)\n    at _class.jsxParseElementAt (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:8067:14)\n    at _class.jsxParseElement (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:8077:19)\n    at _class.parseExprAtom (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:8084:21)\n    at _class.parseExprSubscripts (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseParenAndDistinguishExpression (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:3271:28)\n    at _class.parseExprAtom (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:3081:21)\n    at _class.parseExprAtom (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/herminiogarcia/Folders/personal/interviews/consensys-api/node_modules/babylon/lib/index.js:2704:21)");

/***/ }),

/***/ "./components/TransactionSearch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/consensys-api/components/TransactionSearch.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _props$transactionOpt = props.transactionOptions,
      incoming = _props$transactionOpt.incoming,
      outgoing = _props$transactionOpt.outgoing,
      blockNo = _props$transactionOpt.blockNo,
      timeStamp = _props$transactionOpt.timeStamp,
      hash = _props$transactionOpt.hash,
      value = _props$transactionOpt.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Search Transactions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Please Select At Least One:")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: incoming ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('incoming');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Incoming"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: outgoing ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('outgoing');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Outgoing")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Please Select Desired Options:")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: blockNo ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('blockNo');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Block #"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: timeStamp ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('timeStamp');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Time Stamp"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: hash ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('hash');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Hash"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: value ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('value');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Value"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
    placeholder: "Address...",
    icon: "search",
    value: props.address,
    onChange: function onChange(e) {
      return props.addressUpdate(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
    color: "blue",
    onClick: props.onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Search")))));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TransactionSearch__ = __webpack_require__("./components/TransactionSearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TransactionResult__ = __webpack_require__("./components/TransactionResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TransactionResult___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_TransactionResult__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BalanceSearch__ = __webpack_require__("./components/BalanceSearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BalanceResult__ = __webpack_require__("./components/BalanceResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_superagent__ = __webpack_require__("superagent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/consensys-api/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        search: null,
        results: null,
        address: '',
        transactionOptions: {
          incoming: false,
          outgoing: false,
          blockNo: false,
          timeStamp: false,
          hash: false,
          value: false
        },
        transactionError: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(option) {
        _this.setState(function (prevState) {
          return {
            transactionOptions: _objectSpread({}, prevState.transactionOptions, _defineProperty({}, option, !prevState.transactionOptions[option])),
            transactionError: null
          };
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "searchTransactions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            address = _this$state.address,
            transactionOptions = _this$state.transactionOptions;
        var incoming = transactionOptions.incoming,
            outgoing = transactionOptions.outgoing,
            blockNo = transactionOptions.blockNo,
            timeStamp = transactionOptions.timeStamp,
            hash = transactionOptions.hash,
            value = transactionOptions.value;
        __WEBPACK_IMPORTED_MODULE_6_superagent___default.a.post('/graphql').set('Content-Type', 'application/json').send(JSON.stringify({
          "query": "\n        {\n          getTransactions(address: \"".concat(address, "\", incoming: ").concat(incoming, ", outgoing: ").concat(outgoing, ")\n          {\n            ").concat(blockNo ? 'blockNo' : '', "\n            ").concat(timeStamp ? 'timeStamp' : '', "\n            ").concat(hash ? 'hash' : '', "\n            ").concat(value ? 'value' : '', "\n          }\n        }")
        })).then(function (res) {
          console.log(res.body.data.getTransactions);

          _this.setState({
            results: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_TransactionResult__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            })
          });
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "searchBalances", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var address = _this.state.address;
        __WEBPACK_IMPORTED_MODULE_6_superagent___default.a.post('/graphql').set('Content-Type', 'application/json').send(JSON.stringify({
          "query": "\n        {\n          getBalance(address: \"".concat(address, "\")\n        }")
        })).then(function (res) {
          _this.setState({
            results: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BalanceResult__["a" /* default */], {
              balance: res.body.data.getBalance,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            })
          });
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "addressUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(address) {
        _this.setState({
          address: address
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "searchDesiredOption", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(search) {
        _this.setState({
          search: search,
          results: null
        });
      }
    }), _temp));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Grid"], {
        container: true,
        style: {
          padding: '10em 0em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Header"], {
        as: "h1",
        dividing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Balanc3 Take Home App"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Message"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Header"], {
        as: "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "Search By Address"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Choose whether you want to look up transactions or balance of an address!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Button"], {
        color: "blue",
        onClick: function onClick() {
          return _this2.searchDesiredOption('transactions');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["Button"], {
        color: "blue",
        onClick: function onClick() {
          return _this2.searchDesiredOption('balance');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Balance")))), this.state.search === 'transactions' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_TransactionSearch__["a" /* default */], {
        onSearch: this.searchTransactions,
        addressUpdate: this.addressUpdate,
        address: this.state.address,
        transactionOptions: this.state.transactionOptions,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), this.state.search === 'balance' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BalanceSearch__["a" /* default */], {
        onSearch: this.searchBalances,
        addressUpdate: this.addressUpdate,
        address: this.state.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), this.state.results));
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Main);
/*

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


 */

/*
<Checkbox label='Block #' />
<Checkbox label='timestamp' />
<Checkbox label='Hash' />
<Checkbox label='Value' />
{
    blockNumber: '5482806',
    timeStamp: '1524355385',
    hash: '0x6f379d3afe3a9fd0a8086adc61e1a2d1f74393fe2efe5b39179e4204c9e9a15d',
    nonce: '9086397',
    blockHash: '0xfe5e7b45b6b13bf855c7be25cfd301d870e8d4dd2fdc149374edc7fe041f159a',
    transactionIndex: '2',
    from: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',
    to: '0x96d978f81d962770d2379240899808f396856589',
    value: '50788367621613343',
    gas: '50000',
    gasPrice: '1000000000',
    isError: '0',
    txreceipt_status: '1',
    input: '0x',
    contractAddress: '',
    cumulativeGasUsed: '63000',
    gasUsed: '21000',
    confirmations: '596571' }
 */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "superagent":
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map