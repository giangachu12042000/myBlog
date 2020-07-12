module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./app/admin/components/sider/index.js":
/*!*********************************************!*\
  !*** ./app/admin/components/sider/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./app/admin/components/sider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./app/utils/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\admin\\components\\sider\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Sider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  fetchCategories() {
    try {
      _utils__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/category').then(result => {
        const {
          data
        } = result.data;
        this.setState({
          categories: data
        });
      });
    } catch (err) {
      throw err;
    }
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    const {
      categories
    } = this.state;
    return __jsx("div", {
      className: "sider-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 18
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/admin/category`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 32
      }
    }, "Danh m\u1EE5c"))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/admin/article`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 32
      }
    }, "B\xE0i vi\u1EBFt"))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/admin/comment`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 32
      }
    }, "Li\xEAn h\u1EC7"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sider);

/***/ }),

/***/ "./app/admin/components/sider/style.scss":
/*!***********************************************!*\
  !*** ./app/admin/components/sider/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/admin/index.js":
/*!****************************!*\
  !*** ./app/admin/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sider */ "./app/admin/components/sider/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\admin\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdminApp = props => {
  return __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "header"), __jsx("div", {
    className: "col-md-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_components_sider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 39
    }
  })), __jsx("div", {
    className: "col-md-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AdminApp));

/***/ }),

/***/ "./app/components/header/index.js":
/*!****************************************!*\
  !*** ./app/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./app/components/header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./app/utils/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\components\\header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import _ from 'lodash'; 



class HeaderPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  fetchArticle() {
    let {
      categories
    } = this.state;

    try {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/category').then(res => {
        if (res.data) {
          categories = res.data.data || [];
          this.setState({
            categories
          });
          return categories;
        }
      });
    } catch (err) {
      throw err;
    }
  }

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const {
      categories
    } = this.state;
    return __jsx("div", {
      className: "row box-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, " "), __jsx("div", {
      className: "col-md-9",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("ul", {
      className: "menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "item-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, "Home")))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/bai-viet-hay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "item-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }, "B\xE0i vi\u1EBFt n\u1ED5i b\u1EADt")))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/danh-muc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "item-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 37
      }
    }, "Danh m\u1EE5c"))), __jsx("ul", {
      className: "menu-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, categories && categories.length > 0 ? categories.map((item, key) => {
      return __jsx("li", {
        key: key,
        className: "list-menu-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 45
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: '/danh-muc/[slug]',
        as: `/danh-muc/${item._id}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 49
        }
      }, __jsx("a", {
        className: "link-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 53
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 57
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 60
        }
      }, item.name)))));
    }) : '')), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/lien-he",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "item-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, "Li\xEAn h\u1EC7")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(HeaderPage));

/***/ }),

/***/ "./app/components/header/style.scss":
/*!******************************************!*\
  !*** ./app/components/header/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/siderLeft/RightV.js":
/*!********************************************!*\
  !*** ./app/components/siderLeft/RightV.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./app/components/siderLeft/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./app/config/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\components\\siderLeft\\RightV.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const ArticelV = props => {
  const {
    articles
  } = props;
  let aa = [];
  articles && articles.length > 0 ? articles.map((item, key) => {
    const format = moment__WEBPACK_IMPORTED_MODULE_5___default()(item.created_date).format("YYYY-MM");

    if (aa.lastIndexOf(format) == -1) {
      aa.push(format);
      return aa;
    }
  }) : [];
  return __jsx("div", {
    className: "box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, aa && aa.length > 0 ? aa.map((item, key) => {
    //  console.log(item,'=====>?')
    return __jsx("div", {
      key: key,
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: '/bai-viet-trong-thang/[slug]',
      as: `/bai-viet-trong-thang/${item}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 41
      }
    }, item)))));
  }) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  }, "not find products"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticelV);

/***/ }),

/***/ "./app/components/siderLeft/index.js":
/*!*******************************************!*\
  !*** ./app/components/siderLeft/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./app/components/siderLeft/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./app/utils/index.js");
/* harmony import */ var _RightV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RightV */ "./app/components/siderLeft/RightV.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\components\\siderLeft\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class ArticlePage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      dateArticles: [],
      params: {
        page: 1,
        size: 20
      }
    };
    this.fetchArticle = this.fetchArticle.bind(this);
  }

  fetchArticle() {
    let {
      articles
    } = this.state;
    const {
      query
    } = this.props.router; // console.log(query)

    try {
      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/api/article`).then(res => {
        if (res.data) {
          articles = res.data.data || [];
          this.setState({
            articles
          });
          return articles;
        }
      });
    } catch (err) {
      throw err;
    }
  }

  fetchArticleDate() {
    let {
      dateArticles
    } = this.state;
    const {
      query
    } = this.props.router;
    console.log(query, '===>?');

    try {
      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/api/article/${query.slug}`).then(res => {
        if (res.data) {
          dateArticles = res.data.data || [];
          this.setState({
            dateArticles
          });
        }
      });
    } catch (err) {
      throw err;
    }
  }

  componentDidMount() {
    this.fetchArticle();
  }

  componentDidUpdate(props) {
    const {
      query
    } = this.props.router;
    console.log(query);
    const oldeQuery = props.router.query;

    if (query && query.slug && oldeQuery.slug && query.slug !== oldeQuery.slug) {
      console.log(query, '==============>>>asdf');
      this.fetchArticleDate();
    }
  }

  render() {
    const {
      articles
    } = this.state;
    return __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx(_RightV__WEBPACK_IMPORTED_MODULE_4__["default"], {
      articles: articles,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ArticlePage));

/***/ }),

/***/ "./app/components/siderLeft/styles.scss":
/*!**********************************************!*\
  !*** ./app/components/siderLeft/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/siderRight/RightV.js":
/*!*********************************************!*\
  !*** ./app/components/siderRight/RightV.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./app/components/siderRight/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./app/config/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\components\\siderRight\\RightV.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ArticelV = props => {
  const {
    articles,
    getsearch
  } = props;
  return __jsx("div", {
    className: "box-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("form", {
    method: "post",
    encType: "multipart/form-data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-8 text-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    onChange: getsearch,
    name: "search",
    placeholder: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  })))), articles && articles.length > 0 ? articles.map((item, key) => {
    return __jsx("div", {
      key: key,
      className: "row mb-15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4 box-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: '/chi-tiet/[slug]',
      as: `/chi-tiet/${item._id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_3__["URL_ROOT"] + item.background,
      width: "100%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 41
      }
    })))), __jsx("div", {
      className: "box-content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 55
      }
    }, item.title), " ")));
  }) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, "not find products"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticelV);

/***/ }),

/***/ "./app/components/siderRight/index.js":
/*!********************************************!*\
  !*** ./app/components/siderRight/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./app/components/siderRight/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./app/utils/index.js");
/* harmony import */ var _RightV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RightV */ "./app/components/siderRight/RightV.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\app\\components\\siderRight\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class ArticlePage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: null,
      params: {
        page: 1,
        size: 20
      }
    };
    this.fetchArticle = this.fetchArticle.bind(this);
    this.getsearch = this.getsearch.bind(this);
  }

  getsearch(even) {
    let {
      search
    } = this.state;
    const value = even.target.value;
    search = value;
    this.setState({
      search
    });
    this.fetchArticle();
  }

  fetchArticle() {
    let {
      articles,
      search
    } = this.state;

    try {
      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/article', {
        params: {
          search
        }
      }).then(res => {
        if (res.data) {
          articles = res.data.data || [];
          this.setState({
            articles
          });
        }
      });
    } catch (err) {
      throw err;
    }
  }

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const {
      articles
    } = this.state;
    return __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(_RightV__WEBPACK_IMPORTED_MODULE_4__["default"], {
      articles: articles,
      getsearch: this.getsearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ArticlePage));

/***/ }),

/***/ "./app/components/siderRight/styles.scss":
/*!***********************************************!*\
  !*** ./app/components/siderRight/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/config/index.js":
/*!*****************************!*\
  !*** ./app/config/index.js ***!
  \*****************************/
/*! exports provided: apiEndpoint, title, AUTH, ApiUploadImage, ApiUploadFile, URL_ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEndpoint", function() { return apiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUploadImage", function() { return ApiUploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUploadFile", function() { return ApiUploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_ROOT", function() { return URL_ROOT; });
const apiEndpoint = false ? undefined : "http://localhost:3333";
const title = "NoiThatK2";
const AUTH = {
  appFacebookId: "1775319475932443",
  clientIdGoogle: ""
};
const ApiUploadImage = `${apiEndpoint}/api/upload/image`;
const ApiUploadFile = `${apiEndpoint}/api/upload/file`;
const URL_ROOT = `${apiEndpoint}/images/files/`;

/***/ }),

/***/ "./app/localStorege/index.js":
/*!***********************************!*\
  !*** ./app/localStorege/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_0__);


class Auth {
  static authenticateUser(token) {
    local_storage__WEBPACK_IMPORTED_MODULE_0___default.a.set('token', token);
  }

  static getToken() {
    return local_storage__WEBPACK_IMPORTED_MODULE_0___default.a.get('token');
  }

  static deauthenticateUser() {
    local_storage__WEBPACK_IMPORTED_MODULE_0___default.a.remove('token');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./app/utils/config.js":
/*!*****************************!*\
  !*** ./app/utils/config.js ***!
  \*****************************/
/*! exports provided: apiEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEndpoint", function() { return apiEndpoint; });
const apiEndpoint = false ? undefined : "http://localhost:3333";

/***/ }),

/***/ "./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./app/utils/config.js");
/* harmony import */ var _localStorege__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorege */ "./app/localStorege/index.js");



const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_config__WEBPACK_IMPORTED_MODULE_1__["apiEndpoint"]}`,
  timeout: 50000
});
axiosInstance.interceptors.request.use(config => {
  const token = _localStorege__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
  }

  return config;
}, error => Promise.reject(error));
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main */ "./components/Main.js");
/* harmony import */ var _app_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/admin */ "./app/admin/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = props => {
  const {
    router
  } = props;
  const isAdmin = router.pathname.includes('/admin');
  return __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "My-Blog"), __jsx("link", {
    href: "/static/css/bootstrap/css/bootstrap.min.css",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), isAdmin ? __jsx(_app_admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 24
    }
  }, props.children) : __jsx(_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 66
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Layout));

/***/ }),

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/header */ "./app/components/header/index.js");
/* harmony import */ var _app_components_siderLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/siderLeft */ "./app/components/siderLeft/index.js");
/* harmony import */ var _app_components_siderRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/siderRight */ "./app/components/siderRight/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\components\\Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MainPage = props => {
  return __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_app_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 44
    }
  })), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-8 container-main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.children), __jsx("div", {
    className: "col-md-4 box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(_app_components_siderRight__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MainPage));

/***/ }),

/***/ "./components/lib/gtag.js":
/*!********************************!*\
  !*** ./components/lib/gtag.js ***!
  \********************************/
/*! exports provided: GA_TRACKING_ID, pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_TRACKING_ID", function() { return GA_TRACKING_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
const GA_TRACKING_ID = 'GTM-P6F9P62'; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  if (true) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    });
  }
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  if (true) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

/***/ }),

/***/ "./components/styles.scss":
/*!********************************!*\
  !*** ./components/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_lib_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/lib/gtag */ "./components/lib/gtag.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\blog_client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable max-len */
// import '../assets/styles.less';
 // import { NextSeo } from 'next-seo';

 // import { Provider } from 'react-redux'
// import withRedux from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'
// import createStore from '../app/reduxs/store'



 // import SEO from '../next-seo.config';
// import { appWithTranslation } from '../i18n';


next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', url => {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
  _components_lib_gtag__WEBPACK_IMPORTED_MODULE_5__["pageview"](url);
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done());

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props; // console.log(pageProps,'==============2======??')

    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("local-storage");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map