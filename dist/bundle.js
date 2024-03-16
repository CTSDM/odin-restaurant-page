/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant_basic.jpg */ "./src/images/restaurant_basic.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    padding: 0;
    margin: 0;
}

.picture {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
    background-size: 500px;
    width: 600px;
    height: 400px;
}

#chef {
    width: 90vw;
}

nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    gap: 30px;
    justify-content: center;
    margin-bottom: 30px;
}

#content {
    display: grid;
    place-items: center;
    gap: 20px;
    background: linear-gradient(100deg, red, blue 70%);
}

#welcome {
    text-align: center;
    width: 100%;
    font-size: 3rem;
    background: lightseagreen;
}

#message {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}

#footer {
    text-align: center;
    background: grey;
    width: 100%;
    font-size: 1.3rem;
    font-weight: 700;
}

.menu {
    display: grid;
    gap: 20px;
}

.appetizers,
.main-dishes,
.desserts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    padding: 10px;
    background-color: skyblue;
    align-items: top;
    text-align: center;
}

.appetizers > div,
.main-dishes > div,
.desserts > div {
    border: solid 2px green;
}

.menu img {
    width: 80%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,6DAA0D;IAC1D,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kDAAkD;AACtD;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf;;iFAE6E;AACjF;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;IAGI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;;IAGI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd","sourcesContent":["body {\n    padding: 0;\n    margin: 0;\n}\n\n.picture {\n    background: url('./images/restaurant_basic.jpg') no-repeat;\n    background-size: 500px;\n    width: 600px;\n    height: 400px;\n}\n\n#chef {\n    width: 90vw;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 100px);\n    gap: 30px;\n    justify-content: center;\n    margin-bottom: 30px;\n}\n\n#content {\n    display: grid;\n    place-items: center;\n    gap: 20px;\n    background: linear-gradient(100deg, red, blue 70%);\n}\n\n#welcome {\n    text-align: center;\n    width: 100%;\n    font-size: 3rem;\n    background: lightseagreen;\n}\n\n#message {\n    width: 100%;\n    text-align: center;\n    font-size: 2rem;\n    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),\n                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),\n                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);\n}\n\n#footer {\n    text-align: center;\n    background: grey;\n    width: 100%;\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n.menu {\n    display: grid;\n    gap: 20px;\n}\n\n.appetizers,\n.main-dishes,\n.desserts {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 30px;\n    padding: 10px;\n    background-color: skyblue;\n    align-items: top;\n    text-align: center;\n}\n\n.appetizers > div,\n.main-dishes > div,\n.desserts > div {\n    border: solid 2px green;\n}\n\n.menu img {\n    width: 80%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _images_chef_mhw_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef_mhw.jpg */ "./src/images/chef_mhw.jpg");


function about() {

//            <div id="about">Félix House: where authentic food is made~</div>
//            <div class="about-text"><p>At this restaurant you can try dishes as old as Earth itself and as new as the latest Javascript framework. From Spanish food, American food, to even Asian food. Our head chef is able to just nail every single plate he put his mind on. We guarantee you, you will try to come more than once. That is, if your wallet allows it.</p>
//                <p>Without further ado here it is the kitchen crew!</p></div>
//            <div><img id="chef" alt="Picture of our chef"></div>
    const contentDiv = document.querySelector("#content");

    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    let tempDiv = document.createElement("div");
    tempDiv.id = "about";
    tempDiv.textContent = "Félix House: where authentic food is made~";
    contentDiv.appendChild(tempDiv);

    tempDiv = document.createElement("div");
    tempDiv.classList.add("about-text");
    let tempParagraph = document.createElement("p");
    tempParagraph.textContent = "At this restaurant you can try dishes as old as Earth itself and as new as the latest Javascript framework. From Spanish food, American food, to even Asian food. Our head chef is able to just nail every single plate he put his mind on. We guarantee you, you will try to come more than once. That is, if your wallet allows it.";
    tempDiv.appendChild(tempParagraph)
    tempParagraph = document.createElement("p");
    tempParagraph.textContent = "Without further ado here it is the kitchen crew!";
    tempDiv.appendChild(tempParagraph);
    contentDiv.appendChild(tempDiv);

    tempDiv = document.createElement("div");
    const imgElement = document.createElement("img"); 
    imgElement.src = _images_chef_mhw_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imgElement.id = "chef"; 
    imgElement.alt = "Picture of our chef";
    tempDiv.appendChild(imgElement);
    contentDiv.appendChild(tempDiv);
}




/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
    const listContentParameters = [{type:"div", id:"welcome", class:"", text:"Welcome to our restaurant webpage"},
        {type:"div", id: "message", class: "", text: "Meet the new food in town."},
        {type:"div", id: "", class: "picture", text: ""},
        {type:"div", id: "footer", class: "", text: "The authentic Chanin experience!"}];

    const contentDiv = document.querySelector("#content");
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    for (const item of listContentParameters) {
        contentDiv.appendChild(initializeElement(item));
    }

    function initializeElement(parametersDict) {
        const tempDiv = document.createElement(parametersDict.type);
        if (parametersDict.id.length !== 0)
            tempDiv.id = parametersDict.id;
        if (parametersDict.class.length !== 0)
            tempDiv.classList.add(parametersDict.class);
        if (parametersDict.text.length !== 0)
            tempDiv.textContent = parametersDict.text;
        return tempDiv;
    }
}


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_appetizer_pexels_sebastian_coman_photography_3645126_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/appetizer_pexels-sebastian-coman-photography-3645126.jpg */ "./src/images/appetizer_pexels-sebastian-coman-photography-3645126.jpg");
/* harmony import */ var _images_appetizer_pexels_tanya_gorelova_3933162_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/appetizer_pexels-tanya-gorelova-3933162.jpg */ "./src/images/appetizer_pexels-tanya-gorelova-3933162.jpg");
/* harmony import */ var _images_appetizer_pexels_cup_of_couple_8472786_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/appetizer_pexels-cup-of-couple-8472786.jpg */ "./src/images/appetizer_pexels-cup-of-couple-8472786.jpg");
/* harmony import */ var _images_appetizer_pexels_foodie_factor_543733_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/appetizer_pexels-foodie-factor-543733.jpg */ "./src/images/appetizer_pexels-foodie-factor-543733.jpg");
/* harmony import */ var _images_main_dish_pexels_j_mad_12973148_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/main-dish_pexels-j-mad-12973148.jpg */ "./src/images/main-dish_pexels-j-mad-12973148.jpg");
/* harmony import */ var _images_main_dish_pexels_senuscape_2313686_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/main-dish_pexels-senuscape-2313686.jpg */ "./src/images/main-dish_pexels-senuscape-2313686.jpg");
/* harmony import */ var _images_main_dish_pexels_valeria_boltneva_1639563_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/main-dish_pexels-valeria-boltneva-1639563.jpg */ "./src/images/main-dish_pexels-valeria-boltneva-1639563.jpg");
/* harmony import */ var _images_main_dish_pexels_sebastian_coman_photography_3791089_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/main-dish_pexels-sebastian-coman-photography-3791089.jpg */ "./src/images/main-dish_pexels-sebastian-coman-photography-3791089.jpg");
/* harmony import */ var _images_main_dish_pexels_9829630_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/main-dish_pexels-галина-ласаева-9829630.jpg */ "./src/images/main-dish_pexels-галина-ласаева-9829630.jpg");
/* harmony import */ var _images_dessert_pexels_ella_olsson_3026804_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/dessert_pexels-ella-olsson-3026804.jpg */ "./src/images/dessert_pexels-ella-olsson-3026804.jpg");
/* harmony import */ var _images_dessert_pexels_arminas_raudys_808941_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/dessert_pexels-arminas-raudys-808941.jpg */ "./src/images/dessert_pexels-arminas-raudys-808941.jpg");
/* harmony import */ var _images_dessert_pexels_suzy_hazelwood_1126359_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/dessert_pexels-suzy-hazelwood-1126359.jpg */ "./src/images/dessert_pexels-suzy-hazelwood-1126359.jpg");
/* harmony import */ var _images_dessert_pexels_david_disponett_2161643_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/dessert_pexels-david-disponett-2161643.jpg */ "./src/images/dessert_pexels-david-disponett-2161643.jpg");

















/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const imgAppetizersList = [_images_appetizer_pexels_sebastian_coman_photography_3645126_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_appetizer_pexels_tanya_gorelova_3933162_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_appetizer_pexels_cup_of_couple_8472786_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_appetizer_pexels_foodie_factor_543733_jpg__WEBPACK_IMPORTED_MODULE_3__];
    const imgMainDishesList = [_images_main_dish_pexels_j_mad_12973148_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_main_dish_pexels_senuscape_2313686_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_main_dish_pexels_valeria_boltneva_1639563_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_main_dish_pexels_sebastian_coman_photography_3791089_jpg__WEBPACK_IMPORTED_MODULE_7__, _images_main_dish_pexels_9829630_jpg__WEBPACK_IMPORTED_MODULE_8__];
    const imgDessertsList = [_images_dessert_pexels_ella_olsson_3026804_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_dessert_pexels_arminas_raudys_808941_jpg__WEBPACK_IMPORTED_MODULE_10__, _images_dessert_pexels_suzy_hazelwood_1126359_jpg__WEBPACK_IMPORTED_MODULE_11__, _images_dessert_pexels_david_disponett_2161643_jpg__WEBPACK_IMPORTED_MODULE_12__];

    const appetizersList = ["eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc"
    ,"ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc"
    ,"phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum"
    ,"odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum"
    ];

    const mainDishesList = ["risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
    ,"volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar"
    ,"etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut"
    ,"vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor"
    ,"ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis"
    ];
    const dessertsList = ["risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget"
    ,"sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet"
    ,"neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque"
    ,"quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec"
    ];
    const typeDishesList = ["appetizers", "main-dishes", "desserts"];

    const appetizersImgList = ["../images/appetizer_pexels-foodie-factor-543733.jpg",
    ,"../images/appetizer_pexels-cup-of-couple-8472786.jpg"
    ,"../images/appetizer_pexels-tanya-gorelova-3933162.jpg"
    ,"../images/appetizer_pexels-sebastian-coman-photography-3645126.jpg"
    ];

    const divContent = document.querySelector("#content")
    while(divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
    const divMenu = document.createElement("div");
    divMenu.classList.add("menu");
    const divAppetizers = document.createElement("div");
    divAppetizers.classList.add(typeDishesList[0]);
    const divMainDishes = document.createElement("div");
    divMainDishes.classList.add(typeDishesList[1]);
    const divDesserts = document.createElement("div");
    divDesserts.classList.add(typeDishesList[2]);


    appetizersList.forEach((el, index) => {
        const divTemp = document.createElement("div");
        const divTemp2 = document.createElement("div");
        const imgFood = document.createElement("img");
        divTemp.textContent = el;
        imgFood.src = imgAppetizersList[index];
        divTemp2.appendChild(imgFood);
        divTemp.appendChild(divTemp2);
        divAppetizers.appendChild(divTemp);
    });
    mainDishesList.forEach((el, index) => {
        const divTemp = document.createElement("div");
        const divTemp2 = document.createElement("div");
        const imgFood = document.createElement("img");
        divTemp.textContent = el;
        imgFood.src = imgMainDishesList[index];
        divTemp2.appendChild(imgFood);
        divTemp.appendChild(divTemp2);
        divMainDishes.appendChild(divTemp);
    });
    dessertsList.forEach((el, index) => {
        const divTemp = document.createElement("div");
        const imgFood = document.createElement("img");
        const divTemp2 = document.createElement("div");
        divTemp.textContent = el;
        imgFood.src = imgDessertsList[index];
        divTemp2.appendChild(imgFood);
        divTemp.appendChild(divTemp2);
        divDesserts.appendChild(divTemp);
    });
    
    divMenu.appendChild(divAppetizers);
    divMenu.appendChild(divMainDishes);
    divMenu.appendChild(divDesserts);
    divContent.appendChild(divMenu);
}


/***/ }),

/***/ "./src/images/appetizer_pexels-cup-of-couple-8472786.jpg":
/*!***************************************************************!*\
  !*** ./src/images/appetizer_pexels-cup-of-couple-8472786.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "295c68644b5aed92f2ce.jpg";

/***/ }),

/***/ "./src/images/appetizer_pexels-foodie-factor-543733.jpg":
/*!**************************************************************!*\
  !*** ./src/images/appetizer_pexels-foodie-factor-543733.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8aa3c7d4b90e0a54eec.jpg";

/***/ }),

/***/ "./src/images/appetizer_pexels-sebastian-coman-photography-3645126.jpg":
/*!*****************************************************************************!*\
  !*** ./src/images/appetizer_pexels-sebastian-coman-photography-3645126.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "379ee31802f522341e00.jpg";

/***/ }),

/***/ "./src/images/appetizer_pexels-tanya-gorelova-3933162.jpg":
/*!****************************************************************!*\
  !*** ./src/images/appetizer_pexels-tanya-gorelova-3933162.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c5538703177c876ef39.jpg";

/***/ }),

/***/ "./src/images/chef_mhw.jpg":
/*!*********************************!*\
  !*** ./src/images/chef_mhw.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b44d29f2334eda11760a.jpg";

/***/ }),

/***/ "./src/images/dessert_pexels-arminas-raudys-808941.jpg":
/*!*************************************************************!*\
  !*** ./src/images/dessert_pexels-arminas-raudys-808941.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20640dbcd8ecf2d94799.jpg";

/***/ }),

/***/ "./src/images/dessert_pexels-david-disponett-2161643.jpg":
/*!***************************************************************!*\
  !*** ./src/images/dessert_pexels-david-disponett-2161643.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a50104f5ccda02c3c5fb.jpg";

/***/ }),

/***/ "./src/images/dessert_pexels-ella-olsson-3026804.jpg":
/*!***********************************************************!*\
  !*** ./src/images/dessert_pexels-ella-olsson-3026804.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f73596c3750cc46329dc.jpg";

/***/ }),

/***/ "./src/images/dessert_pexels-suzy-hazelwood-1126359.jpg":
/*!**************************************************************!*\
  !*** ./src/images/dessert_pexels-suzy-hazelwood-1126359.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7985a11f9eabd9f716c.jpg";

/***/ }),

/***/ "./src/images/main-dish_pexels-j-mad-12973148.jpg":
/*!********************************************************!*\
  !*** ./src/images/main-dish_pexels-j-mad-12973148.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33670545f8830931ac3a.jpg";

/***/ }),

/***/ "./src/images/main-dish_pexels-sebastian-coman-photography-3791089.jpg":
/*!*****************************************************************************!*\
  !*** ./src/images/main-dish_pexels-sebastian-coman-photography-3791089.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ce32274b7e5c4db36e9.jpg";

/***/ }),

/***/ "./src/images/main-dish_pexels-senuscape-2313686.jpg":
/*!***********************************************************!*\
  !*** ./src/images/main-dish_pexels-senuscape-2313686.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "452822254ccf6f8a51aa.jpg";

/***/ }),

/***/ "./src/images/main-dish_pexels-valeria-boltneva-1639563.jpg":
/*!******************************************************************!*\
  !*** ./src/images/main-dish_pexels-valeria-boltneva-1639563.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e799ee606f6704015daa.jpg";

/***/ }),

/***/ "./src/images/main-dish_pexels-галина-ласаева-9829630.jpg":
/*!****************************************************************!*\
  !*** ./src/images/main-dish_pexels-галина-ласаева-9829630.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a11361c466098fe2082b.jpg";

/***/ }),

/***/ "./src/images/restaurant_basic.jpg":
/*!*****************************************!*\
  !*** ./src/images/restaurant_basic.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "326420be49ebe568f443.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about.js */ "./src/pages/about.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");





(function () {

    const lastButtonCalled = ["home"];
    const buttonListClass = ['home', 'menu', 'delivery', 'about'];
    const funcsList = [homepageCall, _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"], homepageCall, aboutCall];
    (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    buttonListClass.forEach((e, index) => {
        const btn = document.querySelector(`button.${e}`);
        btn.addEventListener("click", funcsList[index]);
    })

    // We only load a new script, we do not load the same script again and again
    function homepageCall(e) {
        if (checkLastCall(e)) return;
        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    function aboutCall(e) {
        if (checkLastCall(e)) return;
        (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    function checkLastCall(e) {
        if (lastButtonCalled[0] === e.target.classList[0])
            return true;
        else {
            lastButtonCalled[0] = e.target.classList[0];
            return false;
        }
    }

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQjtBQUNGO0FBQ0Y7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUk7QUFDekMsSUFBSSwwREFBUTtBQUNaO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQVE7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQUs7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnRfYmFzaWMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBpY3R1cmUge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MDBweDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuI2NoZWYge1xuICAgIHdpZHRoOiA5MHZ3O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcbiAgICBnYXA6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmVkLCBibHVlIDcwJSk7XG59XG5cbiN3ZWxjb21lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2VhZ3JlZW47XG59XG5cbiNtZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHJnYmEoMjU1LDAsMCwuOCksIHJnYmEoMjU1LDAsMCwwKSA3MC43MSUpLFxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMjdkZWcsIHJnYmEoMCwyNTUsMCwuOCksIHJnYmEoMCwyNTUsMCwwKSA3MC43MSUpLFxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMCwwLDI1NSwuOCksIHJnYmEoMCwwLDI1NSwwKSA3MC43MSUpO1xufVxuXG4jZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogZ3JleTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5hcHBldGl6ZXJzLFxuLm1haW4tZGlzaGVzLFxuLmRlc3NlcnRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgYWxpZ24taXRlbXM6IHRvcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHBldGl6ZXJzID4gZGl2LFxuLm1haW4tZGlzaGVzID4gZGl2LFxuLmRlc3NlcnRzID4gZGl2IHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcbn1cblxuLm1lbnUgaW1nIHtcbiAgICB3aWR0aDogODAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDZEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Y7O2lGQUU2RTtBQUNqRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvcmVzdGF1cmFudF9iYXNpYy5qcGcnKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuI2NoZWYge1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDBkZWcsIHJlZCwgYmx1ZSA3MCUpO1xcbn1cXG5cXG4jd2VsY29tZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHJnYmEoMjU1LDAsMCwuOCksIHJnYmEoMjU1LDAsMCwwKSA3MC43MSUpLFxcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDAsMjU1LDAsLjgpLCByZ2JhKDAsMjU1LDAsMCkgNzAuNzElKSxcXG4gICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgwLDAsMjU1LC44KSwgcmdiYSgwLDAsMjU1LDApIDcwLjcxJSk7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5hcHBldGl6ZXJzLFxcbi5tYWluLWRpc2hlcyxcXG4uZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgICBhbGlnbi1pdGVtczogdG9wO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHBldGl6ZXJzID4gZGl2LFxcbi5tYWluLWRpc2hlcyA+IGRpdixcXG4uZGVzc2VydHMgPiBkaXYge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcXG59XFxuXFxuLm1lbnUgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9jaGVmX21ody5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG5cbi8vICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0XCI+RsOpbGl4IEhvdXNlOiB3aGVyZSBhdXRoZW50aWMgZm9vZCBpcyBtYWRlfjwvZGl2PlxuLy8gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtdGV4dFwiPjxwPkF0IHRoaXMgcmVzdGF1cmFudCB5b3UgY2FuIHRyeSBkaXNoZXMgYXMgb2xkIGFzIEVhcnRoIGl0c2VsZiBhbmQgYXMgbmV3IGFzIHRoZSBsYXRlc3QgSmF2YXNjcmlwdCBmcmFtZXdvcmsuIEZyb20gU3BhbmlzaCBmb29kLCBBbWVyaWNhbiBmb29kLCB0byBldmVuIEFzaWFuIGZvb2QuIE91ciBoZWFkIGNoZWYgaXMgYWJsZSB0byBqdXN0IG5haWwgZXZlcnkgc2luZ2xlIHBsYXRlIGhlIHB1dCBoaXMgbWluZCBvbi4gV2UgZ3VhcmFudGVlIHlvdSwgeW91IHdpbGwgdHJ5IHRvIGNvbWUgbW9yZSB0aGFuIG9uY2UuIFRoYXQgaXMsIGlmIHlvdXIgd2FsbGV0IGFsbG93cyBpdC48L3A+XG4vLyAgICAgICAgICAgICAgICA8cD5XaXRob3V0IGZ1cnRoZXIgYWRvIGhlcmUgaXQgaXMgdGhlIGtpdGNoZW4gY3JldyE8L3A+PC9kaXY+XG4vLyAgICAgICAgICAgIDxkaXY+PGltZyBpZD1cImNoZWZcIiBhbHQ9XCJQaWN0dXJlIG9mIG91ciBjaGVmXCI+PC9kaXY+XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIHdoaWxlKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBEaXYuaWQgPSBcImFib3V0XCI7XG4gICAgdGVtcERpdi50ZXh0Q29udGVudCA9IFwiRsOpbGl4IEhvdXNlOiB3aGVyZSBhdXRoZW50aWMgZm9vZCBpcyBtYWRlflwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG5cbiAgICB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0XCIpO1xuICAgIGxldCB0ZW1wUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcFBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiQXQgdGhpcyByZXN0YXVyYW50IHlvdSBjYW4gdHJ5IGRpc2hlcyBhcyBvbGQgYXMgRWFydGggaXRzZWxmIGFuZCBhcyBuZXcgYXMgdGhlIGxhdGVzdCBKYXZhc2NyaXB0IGZyYW1ld29yay4gRnJvbSBTcGFuaXNoIGZvb2QsIEFtZXJpY2FuIGZvb2QsIHRvIGV2ZW4gQXNpYW4gZm9vZC4gT3VyIGhlYWQgY2hlZiBpcyBhYmxlIHRvIGp1c3QgbmFpbCBldmVyeSBzaW5nbGUgcGxhdGUgaGUgcHV0IGhpcyBtaW5kIG9uLiBXZSBndWFyYW50ZWUgeW91LCB5b3Ugd2lsbCB0cnkgdG8gY29tZSBtb3JlIHRoYW4gb25jZS4gVGhhdCBpcywgaWYgeW91ciB3YWxsZXQgYWxsb3dzIGl0LlwiO1xuICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcFBhcmFncmFwaClcbiAgICB0ZW1wUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcFBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiV2l0aG91dCBmdXJ0aGVyIGFkbyBoZXJlIGl0IGlzIHRoZSBraXRjaGVuIGNyZXchXCI7XG4gICAgdGVtcERpdi5hcHBlbmRDaGlsZCh0ZW1wUGFyYWdyYXBoKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuXG4gICAgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuICAgIGltZ0VsZW1lbnQuc3JjID0gaW1hZ2U7XG4gICAgaW1nRWxlbWVudC5pZCA9IFwiY2hlZlwiOyBcbiAgICBpbWdFbGVtZW50LmFsdCA9IFwiUGljdHVyZSBvZiBvdXIgY2hlZlwiO1xuICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGxpc3RDb250ZW50UGFyYW1ldGVycyA9IFt7dHlwZTpcImRpdlwiLCBpZDpcIndlbGNvbWVcIiwgY2xhc3M6XCJcIiwgdGV4dDpcIldlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnQgd2VicGFnZVwifSxcbiAgICAgICAge3R5cGU6XCJkaXZcIiwgaWQ6IFwibWVzc2FnZVwiLCBjbGFzczogXCJcIiwgdGV4dDogXCJNZWV0IHRoZSBuZXcgZm9vZCBpbiB0b3duLlwifSxcbiAgICAgICAge3R5cGU6XCJkaXZcIiwgaWQ6IFwiXCIsIGNsYXNzOiBcInBpY3R1cmVcIiwgdGV4dDogXCJcIn0sXG4gICAgICAgIHt0eXBlOlwiZGl2XCIsIGlkOiBcImZvb3RlclwiLCBjbGFzczogXCJcIiwgdGV4dDogXCJUaGUgYXV0aGVudGljIENoYW5pbiBleHBlcmllbmNlIVwifV07XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIHdoaWxlKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0Q29udGVudFBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0aWFsaXplRWxlbWVudChpdGVtKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUVsZW1lbnQocGFyYW1ldGVyc0RpY3QpIHtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1ldGVyc0RpY3QudHlwZSk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzRGljdC5pZC5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB0ZW1wRGl2LmlkID0gcGFyYW1ldGVyc0RpY3QuaWQ7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzRGljdC5jbGFzcy5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQocGFyYW1ldGVyc0RpY3QuY2xhc3MpO1xuICAgICAgICBpZiAocGFyYW1ldGVyc0RpY3QudGV4dC5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gcGFyYW1ldGVyc0RpY3QudGV4dDtcbiAgICAgICAgcmV0dXJuIHRlbXBEaXY7XG4gICAgfVxufVxuIiwiaW1wb3J0IGFwcHR6cjEgZnJvbSAnLi4vaW1hZ2VzL2FwcGV0aXplcl9wZXhlbHMtc2ViYXN0aWFuLWNvbWFuLXBob3RvZ3JhcGh5LTM2NDUxMjYuanBnJztcbmltcG9ydCBhcHB0enIyIGZyb20gJy4uL2ltYWdlcy9hcHBldGl6ZXJfcGV4ZWxzLXRhbnlhLWdvcmVsb3ZhLTM5MzMxNjIuanBnJztcbmltcG9ydCBhcHB0enIzIGZyb20gJy4uL2ltYWdlcy9hcHBldGl6ZXJfcGV4ZWxzLWN1cC1vZi1jb3VwbGUtODQ3Mjc4Ni5qcGcnO1xuaW1wb3J0IGFwcHR6cjQgZnJvbSAnLi4vaW1hZ2VzL2FwcGV0aXplcl9wZXhlbHMtZm9vZGllLWZhY3Rvci01NDM3MzMuanBnJztcblxuaW1wb3J0IG1haW5kc2gxIGZyb20gJy4uL2ltYWdlcy9tYWluLWRpc2hfcGV4ZWxzLWotbWFkLTEyOTczMTQ4LmpwZyc7XG5pbXBvcnQgbWFpbmRzaDIgZnJvbSAnLi4vaW1hZ2VzL21haW4tZGlzaF9wZXhlbHMtc2VudXNjYXBlLTIzMTM2ODYuanBnJztcbmltcG9ydCBtYWluZHNoMyBmcm9tICcuLi9pbWFnZXMvbWFpbi1kaXNoX3BleGVscy12YWxlcmlhLWJvbHRuZXZhLTE2Mzk1NjMuanBnJztcbmltcG9ydCBtYWluZHNoNCBmcm9tICcuLi9pbWFnZXMvbWFpbi1kaXNoX3BleGVscy1zZWJhc3RpYW4tY29tYW4tcGhvdG9ncmFwaHktMzc5MTA4OS5qcGcnO1xuaW1wb3J0IG1haW5kc2g1IGZyb20gJy4uL2ltYWdlcy9tYWluLWRpc2hfcGV4ZWxzLdCz0LDQu9C40L3QsC3Qu9Cw0YHQsNC10LLQsC05ODI5NjMwLmpwZyc7XG5cbmltcG9ydCBkZXNzZXJ0MSBmcm9tICcuLi9pbWFnZXMvZGVzc2VydF9wZXhlbHMtZWxsYS1vbHNzb24tMzAyNjgwNC5qcGcnO1xuaW1wb3J0IGRlc3NlcnQyIGZyb20gJy4uL2ltYWdlcy9kZXNzZXJ0X3BleGVscy1hcm1pbmFzLXJhdWR5cy04MDg5NDEuanBnJztcbmltcG9ydCBkZXNzZXJ0MyBmcm9tICcuLi9pbWFnZXMvZGVzc2VydF9wZXhlbHMtc3V6eS1oYXplbHdvb2QtMTEyNjM1OS5qcGcnO1xuaW1wb3J0IGRlc3NlcnQ0IGZyb20gJy4uL2ltYWdlcy9kZXNzZXJ0X3BleGVscy1kYXZpZC1kaXNwb25ldHQtMjE2MTY0My5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGltZ0FwcGV0aXplcnNMaXN0ID0gW2FwcHR6cjEsIGFwcHR6cjIsIGFwcHR6cjMsIGFwcHR6cjRdO1xuICAgIGNvbnN0IGltZ01haW5EaXNoZXNMaXN0ID0gW21haW5kc2gxLCBtYWluZHNoMiwgbWFpbmRzaDMsIG1haW5kc2g0LCBtYWluZHNoNV07XG4gICAgY29uc3QgaW1nRGVzc2VydHNMaXN0ID0gW2Rlc3NlcnQxLCBkZXNzZXJ0MiwgZGVzc2VydDMsIGRlc3NlcnQ0XTtcblxuICAgIGNvbnN0IGFwcGV0aXplcnNMaXN0ID0gW1wiZXUgbWkgYmliZW5kdW0gbmVxdWUgZWdlc3RhcyBjb25ndWUgcXVpc3F1ZSBlZ2VzdGFzIGRpYW0gaW4gYXJjdSBjdXJzdXMgZXVpc21vZCBxdWlzIHZpdmVycmEgbmliaCBjcmFzIHB1bHZpbmFyIG1hdHRpcyBudW5jXCJcbiAgICAsXCJpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhIGRpY3R1bSBmdXNjZSB1dCBwbGFjZXJhdCBvcmNpIG51bGxhIHBlbGxlbnRlc3F1ZSBkaWduaXNzaW0gZW5pbSBzaXQgYW1ldCB2ZW5lbmF0aXMgdXJuYSBjdXJzdXMgZWdldCBudW5jXCJcbiAgICAsXCJwaGFzZWxsdXMgZWdlc3RhcyB0ZWxsdXMgcnV0cnVtIHRlbGx1cyBwZWxsZW50ZXNxdWUgZXUgdGluY2lkdW50IHRvcnRvciBhbGlxdWFtIG51bGxhIGZhY2lsaXNpIGNyYXMgZmVybWVudHVtIG9kaW8gZXUgZmV1Z2lhdCBwcmV0aXVtIG5pYmggaXBzdW1cIlxuICAgICxcIm9kaW8gZXUgZmV1Z2lhdCBwcmV0aXVtIG5pYmggaXBzdW0gY29uc2VxdWF0IG5pc2wgdmVsIHByZXRpdW0gbGVjdHVzIHF1YW0gaWQgbGVvIGluIHZpdGFlIHR1cnBpcyBtYXNzYSBzZWQgZWxlbWVudHVtXCJcbiAgICBdO1xuXG4gICAgY29uc3QgbWFpbkRpc2hlc0xpc3QgPSBbXCJyaXN1cyBpbiBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMgYXVjdG9yIGF1Z3VlIG1hdXJpcyBhdWd1ZSBuZXF1ZSBncmF2aWRhIGluIGZlcm1lbnR1bSBldCBzb2xsaWNpdHVkaW5cIlxuICAgICxcInZvbHV0cGF0IGRpYW0gdXQgdmVuZW5hdGlzIHRlbGx1cyBpbiBtZXR1cyB2dWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXMgaW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8gdmVsIG9yY2kgcG9ydGEgbm9uIHB1bHZpbmFyXCJcbiAgICAsXCJldGlhbSB0ZW1wb3Igb3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUgbnVuYyBub24gYmxhbmRpdCBtYXNzYSBlbmltIG5lYyBkdWkgbnVuYyBtYXR0aXMgZW5pbSB1dFwiXG4gICAgLFwidml0YWUgYWxpcXVldCBuZWMgdWxsYW1jb3JwZXIgc2l0IGFtZXQgcmlzdXMgbnVsbGFtIGVnZXQgZmVsaXMgZWdldCBudW5jIGxvYm9ydGlzIG1hdHRpcyBhbGlxdWFtIGZhdWNpYnVzIHB1cnVzIGluIG1hc3NhIHRlbXBvclwiXG4gICAgLFwidXQgYWxpcXVhbSBwdXJ1cyBzaXQgYW1ldCBsdWN0dXMgdmVuZW5hdGlzIGxlY3R1cyBtYWduYSBmcmluZ2lsbGEgdXJuYSBwb3J0dGl0b3IgcmhvbmN1cyBkb2xvciBwdXJ1cyBub24gZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzXCJcbiAgICBdO1xuICAgIGNvbnN0IGRlc3NlcnRzTGlzdCA9IFtcInJpc3VzIHZpdmVycmEgYWRpcGlzY2luZyBhdCBpbiB0ZWxsdXMgaW50ZWdlciBmZXVnaWF0IHNjZWxlcmlzcXVlIHZhcml1cyBtb3JiaSBlbmltIG51bmMgZmF1Y2lidXMgYSBwZWxsZW50ZXNxdWUgc2l0IGFtZXQgcG9ydHRpdG9yIGVnZXRcIlxuICAgICxcInNlbSBpbnRlZ2VyIHZpdGFlIGp1c3RvIGVnZXQgbWFnbmEgZmVybWVudHVtIGlhY3VsaXMgZXUgbm9uIGRpYW0gcGhhc2VsbHVzIHZlc3RpYnVsdW0gbG9yZW0gc2VkIHJpc3VzIHVsdHJpY2llcyB0cmlzdGlxdWUgbnVsbGEgYWxpcXVldFwiXG4gICAgLFwibmVxdWUgc29kYWxlcyB1dCBldGlhbSBzaXQgYW1ldCBuaXNsIHB1cnVzIGluIG1vbGxpcyBudW5jIHNlZCBpZCBzZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtIHF1aXNxdWVcIlxuICAgICxcInF1YW0gdml2ZXJyYSBvcmNpIHNhZ2l0dGlzIGV1IHZvbHV0cGF0IG9kaW8gZmFjaWxpc2lzIG1hdXJpcyBzaXQgYW1ldCBtYXNzYSB2aXRhZSB0b3J0b3IgY29uZGltZW50dW0gbGFjaW5pYSBxdWlzIHZlbCBlcm9zIGRvbmVjXCJcbiAgICBdO1xuICAgIGNvbnN0IHR5cGVEaXNoZXNMaXN0ID0gW1wiYXBwZXRpemVyc1wiLCBcIm1haW4tZGlzaGVzXCIsIFwiZGVzc2VydHNcIl07XG5cbiAgICBjb25zdCBhcHBldGl6ZXJzSW1nTGlzdCA9IFtcIi4uL2ltYWdlcy9hcHBldGl6ZXJfcGV4ZWxzLWZvb2RpZS1mYWN0b3ItNTQzNzMzLmpwZ1wiLFxuICAgICxcIi4uL2ltYWdlcy9hcHBldGl6ZXJfcGV4ZWxzLWN1cC1vZi1jb3VwbGUtODQ3Mjc4Ni5qcGdcIlxuICAgICxcIi4uL2ltYWdlcy9hcHBldGl6ZXJfcGV4ZWxzLXRhbnlhLWdvcmVsb3ZhLTM5MzMxNjIuanBnXCJcbiAgICAsXCIuLi9pbWFnZXMvYXBwZXRpemVyX3BleGVscy1zZWJhc3RpYW4tY29tYW4tcGhvdG9ncmFwaHktMzY0NTEyNi5qcGdcIlxuICAgIF07XG5cbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgd2hpbGUoZGl2Q29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgZGl2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBjb25zdCBkaXZBcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZBcHBldGl6ZXJzLmNsYXNzTGlzdC5hZGQodHlwZURpc2hlc0xpc3RbMF0pO1xuICAgIGNvbnN0IGRpdk1haW5EaXNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk1haW5EaXNoZXMuY2xhc3NMaXN0LmFkZCh0eXBlRGlzaGVzTGlzdFsxXSk7XG4gICAgY29uc3QgZGl2RGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkRlc3NlcnRzLmNsYXNzTGlzdC5hZGQodHlwZURpc2hlc0xpc3RbMl0pO1xuXG5cbiAgICBhcHBldGl6ZXJzTGlzdC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRpdlRlbXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaW1nRm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRpdlRlbXAudGV4dENvbnRlbnQgPSBlbDtcbiAgICAgICAgaW1nRm9vZC5zcmMgPSBpbWdBcHBldGl6ZXJzTGlzdFtpbmRleF07XG4gICAgICAgIGRpdlRlbXAyLmFwcGVuZENoaWxkKGltZ0Zvb2QpO1xuICAgICAgICBkaXZUZW1wLmFwcGVuZENoaWxkKGRpdlRlbXAyKTtcbiAgICAgICAgZGl2QXBwZXRpemVycy5hcHBlbmRDaGlsZChkaXZUZW1wKTtcbiAgICB9KTtcbiAgICBtYWluRGlzaGVzTGlzdC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRpdlRlbXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaW1nRm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRpdlRlbXAudGV4dENvbnRlbnQgPSBlbDtcbiAgICAgICAgaW1nRm9vZC5zcmMgPSBpbWdNYWluRGlzaGVzTGlzdFtpbmRleF07XG4gICAgICAgIGRpdlRlbXAyLmFwcGVuZENoaWxkKGltZ0Zvb2QpO1xuICAgICAgICBkaXZUZW1wLmFwcGVuZENoaWxkKGRpdlRlbXAyKTtcbiAgICAgICAgZGl2TWFpbkRpc2hlcy5hcHBlbmRDaGlsZChkaXZUZW1wKTtcbiAgICB9KTtcbiAgICBkZXNzZXJ0c0xpc3QuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdlRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBpbWdGb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY29uc3QgZGl2VGVtcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZUZW1wLnRleHRDb250ZW50ID0gZWw7XG4gICAgICAgIGltZ0Zvb2Quc3JjID0gaW1nRGVzc2VydHNMaXN0W2luZGV4XTtcbiAgICAgICAgZGl2VGVtcDIuYXBwZW5kQ2hpbGQoaW1nRm9vZCk7XG4gICAgICAgIGRpdlRlbXAuYXBwZW5kQ2hpbGQoZGl2VGVtcDIpO1xuICAgICAgICBkaXZEZXNzZXJ0cy5hcHBlbmRDaGlsZChkaXZUZW1wKTtcbiAgICB9KTtcbiAgICBcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKGRpdkFwcGV0aXplcnMpO1xuICAgIGRpdk1lbnUuYXBwZW5kQ2hpbGQoZGl2TWFpbkRpc2hlcyk7XG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChkaXZEZXNzZXJ0cyk7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZNZW51KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL3BhZ2VzL2hvbWUuanMnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vcGFnZXMvYWJvdXQuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51LmpzJztcblxuKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGxhc3RCdXR0b25DYWxsZWQgPSBbXCJob21lXCJdO1xuICAgIGNvbnN0IGJ1dHRvbkxpc3RDbGFzcyA9IFsnaG9tZScsICdtZW51JywgJ2RlbGl2ZXJ5JywgJ2Fib3V0J107XG4gICAgY29uc3QgZnVuY3NMaXN0ID0gW2hvbWVwYWdlQ2FsbCwgbWVudSwgaG9tZXBhZ2VDYWxsLCBhYm91dENhbGxdO1xuICAgIGhvbWVwYWdlKCk7XG4gICAgYnV0dG9uTGlzdENsYXNzLmZvckVhY2goKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbi4ke2V9YCk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3NMaXN0W2luZGV4XSk7XG4gICAgfSlcblxuICAgIC8vIFdlIG9ubHkgbG9hZCBhIG5ldyBzY3JpcHQsIHdlIGRvIG5vdCBsb2FkIHRoZSBzYW1lIHNjcmlwdCBhZ2FpbiBhbmQgYWdhaW5cbiAgICBmdW5jdGlvbiBob21lcGFnZUNhbGwoZSkge1xuICAgICAgICBpZiAoY2hlY2tMYXN0Q2FsbChlKSkgcmV0dXJuO1xuICAgICAgICBob21lcGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFib3V0Q2FsbChlKSB7XG4gICAgICAgIGlmIChjaGVja0xhc3RDYWxsKGUpKSByZXR1cm47XG4gICAgICAgIGFib3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMYXN0Q2FsbChlKSB7XG4gICAgICAgIGlmIChsYXN0QnV0dG9uQ2FsbGVkWzBdID09PSBlLnRhcmdldC5jbGFzc0xpc3RbMF0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsYXN0QnV0dG9uQ2FsbGVkWzBdID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9