webpackHotUpdate(4,{

/***/ "./components/TransactionSearch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/consensys-api/components/TransactionSearch.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _props$transactionOpt = props.transactionOptions,
      incoming = _props$transactionOpt.incoming,
      outgoing = _props$transactionOpt.outgoing,
      blockNo = _props$transactionOpt.blockNo,
      timeStamp = _props$transactionOpt.timeStamp,
      hash = _props$transactionOpt.hash,
      value = _props$transactionOpt.value;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Message */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Header */], {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Search Transactions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Transaction Options", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: incoming ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('incoming');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Incoming"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: outgoing ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('outgoing');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Outgoing")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Row, {
    style: {
      margin: '10px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: blockNo ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('blockNo');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Block #"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: timeStamp ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('timeStamp');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Time Stamp"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: hash ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('hash');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Hash"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: value ? 'blue' : null,
    onClick: function onClick() {
      return props.toggle('value');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Value"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Input */], {
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
});

/***/ })

})
//# sourceMappingURL=4.db95dd82c52c1144ea4e.hot-update.js.map