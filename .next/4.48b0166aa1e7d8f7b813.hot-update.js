webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
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





var TransactionSearch = function TransactionSearch(props) {
  var _props$transactionOpt = props.transactionOptions,
      incoming = _props$transactionOpt.incoming,
      outgoing = _props$transactionOpt.outgoing,
      blockNo = _props$transactionOpt.blockNo,
      timeStamp = _props$transactionOpt.timeStamp,
      hash = _props$transactionOpt.hash,
      value = _props$transactionOpt.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Message */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Header */], {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Search Transactions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Transaction Options", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: incoming ? 'blue' : null,
    onClick: function onClick() {
      return console.log('incoming');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Incoming"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: outgoing ? 'blue' : null,
    onClick: function onClick() {
      return console.log('outgoing');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Outgoing")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Checkbox */], {
    label: "Block #",
    checked: blockNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Checkbox */], {
    label: "timestamp",
    checked: timeStamp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Checkbox */], {
    label: "Hash",
    checked: hash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Checkbox */], {
    label: "Value",
    checked: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], {
    placeholder: "Address...",
    icon: "search",
    value: props.address,
    onChange: function onChange(e) {
      return props.addressUpdate(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: "blue",
    onClick: props.onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Search")))));
};

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
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleTransactionOption", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(option) {
        _this.setState(function (prevState) {
          return {
            transactionOptions: _objectSpread({}, prevState, _defineProperty({}, option, !prevState[option]))
          };
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "searchTransactions", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var address = _this.state.address;
        console.log('graphql queries', address);
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
    }), Object.defineProperty(_assertThisInitialized(_this), "searchTransactionsScreen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          search: 'transactions'
        });
      }
    }), _temp));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */], {
        container: true,
        style: {
          padding: '10em 0em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Header */], {
        as: "h1",
        dividing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Balanc3 Take Home App"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Message */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Header */], {
        as: "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Search By Address"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Choose whether you want to look up transactions or balance of an address!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        color: "blue",
        onClick: this.searchTransactionsScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Transactions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        color: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Balance")))), this.state.search === 'transactions' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TransactionSearch, {
        onSearch: this.searchTransactions,
        addressUpdate: this.addressUpdate,
        address: this.state.address,
        transactionOptions: this.state.transactionOptions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), this.state.search === 'balance' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TransactionSearch, {
        onSearch: this.searchTransactions,
        addressUpdate: this.addressUpdate,
        address: this.state.address,
        transactionOptions: this.state.transactionOptions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), this.state.results));
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Main);
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.48b0166aa1e7d8f7b813.hot-update.js.map