(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./lib/index.js\").default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlXcmFwcGVyL2luZGV4LmpzPzA0OTciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpLmRlZmF1bHQ7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./lib/album.js":
/*!**********************!*\
  !*** ./lib/album.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = album;\nfunction album() {\n  var _this = this;\n\n  return {\n    getAlbum: function getAlbum(id) {\n      return _this.getRequest(_this.apiURL + \"/albums/\" + id);\n    },\n    getAlbums: function getAlbums(ids) {\n      return _this.getRequest(_this.apiURL + \"/albums/?ids=\" + ids);\n    },\n    getTracks: function getTracks(id) {\n      return _this.getRequest(_this.apiURL + \"/albums/\" + id + \"/tracks\");\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvYWxidW0uanM/MmVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFsYnVtO1xuZnVuY3Rpb24gYWxidW0oKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBbGJ1bTogZnVuY3Rpb24gZ2V0QWxidW0oaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2FsYnVtcy9cIiArIGlkKTtcbiAgICB9LFxuICAgIGdldEFsYnVtczogZnVuY3Rpb24gZ2V0QWxidW1zKGlkcykge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvYWxidW1zLz9pZHM9XCIgKyBpZHMpO1xuICAgIH0sXG4gICAgZ2V0VHJhY2tzOiBmdW5jdGlvbiBnZXRUcmFja3MoaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2FsYnVtcy9cIiArIGlkICsgXCIvdHJhY2tzXCIpO1xuICAgIH1cbiAgfTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/album.js\n");

/***/ }),

/***/ "./lib/artist.js":
/*!***********************!*\
  !*** ./lib/artist.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = artist;\nfunction artist() {\n  var _this = this;\n\n  return {\n    getArtist: function getArtist(id) {\n      return _this.getRequest(_this.apiURL + \"/artists/\" + id);\n    },\n    getArtists: function getArtists(id) {\n      return _this.getRequest(_this.apiURL + \"/artists/?ids=\" + id);\n    },\n    getArtistAlbums: function getArtistAlbums(id) {\n      return _this.getRequest(_this.apiURL + \"/artists/\" + id + \"/albums\");\n    },\n    getRelatedArtists: function getRelatedArtists(id) {\n      return _this.getRequest(_this.apiURL + \"/artists/\" + id + \"/related-artists\");\n    },\n    getArtistTopTracks: function getArtistTopTracks(id) {\n      return _this.getRequest(_this.apiURL + \"/artists/\" + id + \"/top-tracks\");\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXJ0aXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvbGliL2FydGlzdC5qcz9hNTE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXJ0aXN0O1xuZnVuY3Rpb24gYXJ0aXN0KCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0QXJ0aXN0OiBmdW5jdGlvbiBnZXRBcnRpc3QoaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2FydGlzdHMvXCIgKyBpZCk7XG4gICAgfSxcbiAgICBnZXRBcnRpc3RzOiBmdW5jdGlvbiBnZXRBcnRpc3RzKGlkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZ2V0UmVxdWVzdChfdGhpcy5hcGlVUkwgKyBcIi9hcnRpc3RzLz9pZHM9XCIgKyBpZCk7XG4gICAgfSxcbiAgICBnZXRBcnRpc3RBbGJ1bXM6IGZ1bmN0aW9uIGdldEFydGlzdEFsYnVtcyhpZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvYXJ0aXN0cy9cIiArIGlkICsgXCIvYWxidW1zXCIpO1xuICAgIH0sXG4gICAgZ2V0UmVsYXRlZEFydGlzdHM6IGZ1bmN0aW9uIGdldFJlbGF0ZWRBcnRpc3RzKGlkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZ2V0UmVxdWVzdChfdGhpcy5hcGlVUkwgKyBcIi9hcnRpc3RzL1wiICsgaWQgKyBcIi9yZWxhdGVkLWFydGlzdHNcIik7XG4gICAgfSxcbiAgICBnZXRBcnRpc3RUb3BUcmFja3M6IGZ1bmN0aW9uIGdldEFydGlzdFRvcFRyYWNrcyhpZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvYXJ0aXN0cy9cIiArIGlkICsgXCIvdG9wLXRyYWNrc1wiKTtcbiAgICB9XG4gIH07XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/artist.js\n");

/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_URL = exports.API_URL = 'https://api.spotify.com/v1';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvbGliL2NvbmZpZy5qcz8zNDYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBBUElfVVJMID0gZXhwb3J0cy5BUElfVVJMID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _search = __webpack_require__(/*! ./search */ \"./lib/search.js\");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _album = __webpack_require__(/*! ./album */ \"./lib/album.js\");\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _artist = __webpack_require__(/*! ./artist */ \"./lib/artist.js\");\n\nvar _artist2 = _interopRequireDefault(_artist);\n\nvar _playlist = __webpack_require__(/*! ./playlist */ \"./lib/playlist.js\");\n\nvar _playlist2 = _interopRequireDefault(_playlist);\n\nvar _track = __webpack_require__(/*! ./track */ \"./lib/track.js\");\n\nvar _track2 = _interopRequireDefault(_track);\n\nvar _config = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\nvar _util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nvar SpotifyWrapper = function () {\n  function SpotifyWrapper(options) {\n    _classCallCheck(this, SpotifyWrapper);\n\n    this.apiURL = options.apiURL || _config.API_URL;\n    this.token = options.token;\n    this.album = _album2.default.bind(this)();\n    this.search = _search2.default.bind(this)();\n    this.artist = _artist2.default.bind(this)();\n    this.playlist = _playlist2.default.bind(this)();\n    this.track = _track2.default.bind(this)();\n  }\n\n  _createClass(SpotifyWrapper, [{\n    key: 'getRequest',\n    value: function getRequest(url) {\n      var headers = {\n        headers: {\n          Authorization: '\\'Bearer ' + this.token + '\\''\n        }\n      };\n\n      return fetch(url, headers).then(_util.toJSON);\n    }\n  }, {\n    key: 'postRequest',\n    value: function postRequest(url) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      //body: token, description, isPublic\n      var headers = {\n        method: 'POST',\n        headers: {\n          Authorization: '\\'Bearer ' + this.token + '\\''\n        },\n        body: JSON.stringify(data === undefined ? {} : data)\n      };\n\n      return fetch(url, headers).then(_util.toJSON);\n    }\n  }, {\n    key: 'putRequest',\n    value: function putRequest(url) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n\n      var headers = {\n        method: 'PUT',\n        headers: {\n          Authorization: '\\'Bearer ' + this.token + '\\''\n        },\n        body: JSON.stringify(data === undefined ? {} : data)\n      };\n\n      return fetch(url, headers).then(_util.toJSON);\n    }\n  }, {\n    key: 'deleteRequest',\n    value: function deleteRequest(url) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n\n      var headers = {\n        method: 'DELETE',\n        headers: {\n          Authorization: '\\'Bearer ' + this.token + '\\''\n        },\n        body: JSON.stringify(data === undefined ? {} : data)\n      };\n\n      return fetch(url, headers).then(_util.toJSON);\n    }\n  }]);\n\n  return SpotifyWrapper;\n}();\n\nexports.default = SpotifyWrapper;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvaW5kZXguanM/MjIyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2VhcmNoID0gcmVxdWlyZSgnLi9zZWFyY2gnKTtcblxudmFyIF9zZWFyY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VhcmNoKTtcblxudmFyIF9hbGJ1bSA9IHJlcXVpcmUoJy4vYWxidW0nKTtcblxudmFyIF9hbGJ1bTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbGJ1bSk7XG5cbnZhciBfYXJ0aXN0ID0gcmVxdWlyZSgnLi9hcnRpc3QnKTtcblxudmFyIF9hcnRpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJ0aXN0KTtcblxudmFyIF9wbGF5bGlzdCA9IHJlcXVpcmUoJy4vcGxheWxpc3QnKTtcblxudmFyIF9wbGF5bGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGF5bGlzdCk7XG5cbnZhciBfdHJhY2sgPSByZXF1aXJlKCcuL3RyYWNrJyk7XG5cbnZhciBfdHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhY2spO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3BvdGlmeVdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNwb3RpZnlXcmFwcGVyKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3BvdGlmeVdyYXBwZXIpO1xuXG4gICAgdGhpcy5hcGlVUkwgPSBvcHRpb25zLmFwaVVSTCB8fCBfY29uZmlnLkFQSV9VUkw7XG4gICAgdGhpcy50b2tlbiA9IG9wdGlvbnMudG9rZW47XG4gICAgdGhpcy5hbGJ1bSA9IF9hbGJ1bTIuZGVmYXVsdC5iaW5kKHRoaXMpKCk7XG4gICAgdGhpcy5zZWFyY2ggPSBfc2VhcmNoMi5kZWZhdWx0LmJpbmQodGhpcykoKTtcbiAgICB0aGlzLmFydGlzdCA9IF9hcnRpc3QyLmRlZmF1bHQuYmluZCh0aGlzKSgpO1xuICAgIHRoaXMucGxheWxpc3QgPSBfcGxheWxpc3QyLmRlZmF1bHQuYmluZCh0aGlzKSgpO1xuICAgIHRoaXMudHJhY2sgPSBfdHJhY2syLmRlZmF1bHQuYmluZCh0aGlzKSgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNwb3RpZnlXcmFwcGVyLCBbe1xuICAgIGtleTogJ2dldFJlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXF1ZXN0KHVybCkge1xuICAgICAgdmFyIGhlYWRlcnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnXFwnQmVhcmVyICcgKyB0aGlzLnRva2VuICsgJ1xcJydcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbihfdXRpbC50b0pTT04pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc3RSZXF1ZXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zdFJlcXVlc3QodXJsKSB7XG4gICAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgICAgLy9ib2R5OiB0b2tlbiwgZGVzY3JpcHRpb24sIGlzUHVibGljXG4gICAgICB2YXIgaGVhZGVycyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnXFwnQmVhcmVyICcgKyB0aGlzLnRva2VuICsgJ1xcJydcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSA9PT0gdW5kZWZpbmVkID8ge30gOiBkYXRhKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbihfdXRpbC50b0pTT04pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1dFJlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXRSZXF1ZXN0KHVybCkge1xuICAgICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGhlYWRlcnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnXFwnQmVhcmVyICcgKyB0aGlzLnRva2VuICsgJ1xcJydcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSA9PT0gdW5kZWZpbmVkID8ge30gOiBkYXRhKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbihfdXRpbC50b0pTT04pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlbGV0ZVJlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVSZXF1ZXN0KHVybCkge1xuICAgICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGhlYWRlcnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnXFwnQmVhcmVyICcgKyB0aGlzLnRva2VuICsgJ1xcJydcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSA9PT0gdW5kZWZpbmVkID8ge30gOiBkYXRhKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbihfdXRpbC50b0pTT04pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTcG90aWZ5V3JhcHBlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3BvdGlmeVdyYXBwZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ }),

/***/ "./lib/playlist.js":
/*!*************************!*\
  !*** ./lib/playlist.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = playlist;\nfunction playlist() {\n  var _this = this;\n\n  return {\n    getPlaylists: function getPlaylists() {\n      return _this.getRequest(_this.apiURL + \"/me/playlists\");\n    },\n    getPlaylistsTracks: function getPlaylistsTracks(playlistId) {\n      return _this.getRequest(_this.apiURL + \"/playlists/\" + playlistId + \"/tracks\");\n    },\n    getPlaylist: function getPlaylist(playlistId) {\n      return _this.getRequest(_this.apiURL + \"/playlists/\" + playlistId);\n    },\n    getUsers: function getUsers(userId) {\n      return _this.getRequest(_this.apiURL + \"/users/\" + userId + \"/playlists\");\n    },\n    postPlaylists: function postPlaylists(name, description, isPublic) {\n      return _this.postRequest(_this.apiURL + \"/playlists\", { \"name\": \"\\\"\" + name + \"\\\"\", \"description\": \"\\\"\" + description + \"\\\"\", \"public\": isPublic });\n    },\n    postPlaylistsTracks: function postPlaylistsTracks(playlistId, uris) {\n      return _this.postRequest(_this.apiURL + \"/playlists/\" + playlistId + \"/tracks?uris=\" + uris);\n    },\n    putPlaylistsTracks: function putPlaylistsTracks(playlistId, rangeStart, rangeLength, insertBefore) {\n      return _this.putRequest(_this.apiURL + \"/playlists/\" + playlistId + \"/tracks\", { \"range_start\": rangeStart, \"range_length\": rangeLength, \"insert_before\": insertBefore });\n    },\n    putPlaylists: function putPlaylists(playlistId, name, description, isPublic) {\n      return _this.putRequest(_this.apiURL + \"/playlists/\" + playlistId, { \"name\": \"\\\"\" + name + \"\\\"\", \"description\": \"\\\"\" + description + \"\\\"\", \"public\": isPublic });\n    },\n    deletePlaylists: function deletePlaylists(playlistId, uri, positions) {\n      return _this.deleteRequest(_this.apiURL + \"/playlists/\" + playlistId + \"/tracks\", { \"tracks\": [{ \"uri\": \"\" + uri, \"positions\": positions }] });\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcGxheWxpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvcGxheWxpc3QuanM/MTZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBsYXlsaXN0O1xuZnVuY3Rpb24gcGxheWxpc3QoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQbGF5bGlzdHM6IGZ1bmN0aW9uIGdldFBsYXlsaXN0cygpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL21lL3BsYXlsaXN0c1wiKTtcbiAgICB9LFxuICAgIGdldFBsYXlsaXN0c1RyYWNrczogZnVuY3Rpb24gZ2V0UGxheWxpc3RzVHJhY2tzKHBsYXlsaXN0SWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL3BsYXlsaXN0cy9cIiArIHBsYXlsaXN0SWQgKyBcIi90cmFja3NcIik7XG4gICAgfSxcbiAgICBnZXRQbGF5bGlzdDogZnVuY3Rpb24gZ2V0UGxheWxpc3QocGxheWxpc3RJZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvcGxheWxpc3RzL1wiICsgcGxheWxpc3RJZCk7XG4gICAgfSxcbiAgICBnZXRVc2VyczogZnVuY3Rpb24gZ2V0VXNlcnModXNlcklkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZ2V0UmVxdWVzdChfdGhpcy5hcGlVUkwgKyBcIi91c2Vycy9cIiArIHVzZXJJZCArIFwiL3BsYXlsaXN0c1wiKTtcbiAgICB9LFxuICAgIHBvc3RQbGF5bGlzdHM6IGZ1bmN0aW9uIHBvc3RQbGF5bGlzdHMobmFtZSwgZGVzY3JpcHRpb24sIGlzUHVibGljKSB7XG4gICAgICByZXR1cm4gX3RoaXMucG9zdFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvcGxheWxpc3RzXCIsIHsgXCJuYW1lXCI6IFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIlwiLCBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCJcIiwgXCJwdWJsaWNcIjogaXNQdWJsaWMgfSk7XG4gICAgfSxcbiAgICBwb3N0UGxheWxpc3RzVHJhY2tzOiBmdW5jdGlvbiBwb3N0UGxheWxpc3RzVHJhY2tzKHBsYXlsaXN0SWQsIHVyaXMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wb3N0UmVxdWVzdChfdGhpcy5hcGlVUkwgKyBcIi9wbGF5bGlzdHMvXCIgKyBwbGF5bGlzdElkICsgXCIvdHJhY2tzP3VyaXM9XCIgKyB1cmlzKTtcbiAgICB9LFxuICAgIHB1dFBsYXlsaXN0c1RyYWNrczogZnVuY3Rpb24gcHV0UGxheWxpc3RzVHJhY2tzKHBsYXlsaXN0SWQsIHJhbmdlU3RhcnQsIHJhbmdlTGVuZ3RoLCBpbnNlcnRCZWZvcmUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wdXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL3BsYXlsaXN0cy9cIiArIHBsYXlsaXN0SWQgKyBcIi90cmFja3NcIiwgeyBcInJhbmdlX3N0YXJ0XCI6IHJhbmdlU3RhcnQsIFwicmFuZ2VfbGVuZ3RoXCI6IHJhbmdlTGVuZ3RoLCBcImluc2VydF9iZWZvcmVcIjogaW5zZXJ0QmVmb3JlIH0pO1xuICAgIH0sXG4gICAgcHV0UGxheWxpc3RzOiBmdW5jdGlvbiBwdXRQbGF5bGlzdHMocGxheWxpc3RJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGlzUHVibGljKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHV0UmVxdWVzdChfdGhpcy5hcGlVUkwgKyBcIi9wbGF5bGlzdHMvXCIgKyBwbGF5bGlzdElkLCB7IFwibmFtZVwiOiBcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiXCIsIFwicHVibGljXCI6IGlzUHVibGljIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlUGxheWxpc3RzOiBmdW5jdGlvbiBkZWxldGVQbGF5bGlzdHMocGxheWxpc3RJZCwgdXJpLCBwb3NpdGlvbnMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5kZWxldGVSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL3BsYXlsaXN0cy9cIiArIHBsYXlsaXN0SWQgKyBcIi90cmFja3NcIiwgeyBcInRyYWNrc1wiOiBbeyBcInVyaVwiOiBcIlwiICsgdXJpLCBcInBvc2l0aW9uc1wiOiBwb3NpdGlvbnMgfV0gfSk7XG4gICAgfVxuICB9O1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/playlist.js\n");

/***/ }),

/***/ "./lib/search.js":
/*!***********************!*\
  !*** ./lib/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = search;\nfunction searcher(type, query) {\n  return this.getRequest(this.apiURL + '/search?q=' + query + '&type=' + type);\n}\n\nfunction search() {\n  return {\n    artists: searcher.bind(this, 'artist'),\n    albums: searcher.bind(this, 'album'),\n    tracks: searcher.bind(this, 'track'),\n    playlists: searcher.bind(this, 'playlist')\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvbGliL3NlYXJjaC5qcz84MDU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNlYXJjaDtcbmZ1bmN0aW9uIHNlYXJjaGVyKHR5cGUsIHF1ZXJ5KSB7XG4gIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5hcGlVUkwgKyAnL3NlYXJjaD9xPScgKyBxdWVyeSArICcmdHlwZT0nICsgdHlwZSk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgcmV0dXJuIHtcbiAgICBhcnRpc3RzOiBzZWFyY2hlci5iaW5kKHRoaXMsICdhcnRpc3QnKSxcbiAgICBhbGJ1bXM6IHNlYXJjaGVyLmJpbmQodGhpcywgJ2FsYnVtJyksXG4gICAgdHJhY2tzOiBzZWFyY2hlci5iaW5kKHRoaXMsICd0cmFjaycpLFxuICAgIHBsYXlsaXN0czogc2VhcmNoZXIuYmluZCh0aGlzLCAncGxheWxpc3QnKVxuICB9O1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/search.js\n");

/***/ }),

/***/ "./lib/track.js":
/*!**********************!*\
  !*** ./lib/track.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = track;\nfunction track() {\n  var _this = this;\n\n  return {\n    getTrack: function getTrack(id) {\n      return _this.getRequest(_this.apiURL + \"/tracks/\" + id);\n    },\n    getTracks: function getTracks(ids) {\n      return _this.getRequest(_this.apiURL + \"/tracks/?ids=\" + ids);\n    },\n    getAudioFeature: function getAudioFeature(id) {\n      return _this.getRequest(_this.apiURL + \"/audio-features/\" + id);\n    },\n    getAudioFeatures: function getAudioFeatures(ids) {\n      return _this.getRequest(_this.apiURL + \"/audio-features/?ids=\" + ids);\n    },\n    getAudioAnalysis: function getAudioAnalysis(id) {\n      return _this.getRequest(_this.apiURL + \"/audio-analysis/\" + id);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdHJhY2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvdHJhY2suanM/ZTQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYWNrO1xuZnVuY3Rpb24gdHJhY2soKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUcmFjazogZnVuY3Rpb24gZ2V0VHJhY2soaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL3RyYWNrcy9cIiArIGlkKTtcbiAgICB9LFxuICAgIGdldFRyYWNrczogZnVuY3Rpb24gZ2V0VHJhY2tzKGlkcykge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvdHJhY2tzLz9pZHM9XCIgKyBpZHMpO1xuICAgIH0sXG4gICAgZ2V0QXVkaW9GZWF0dXJlOiBmdW5jdGlvbiBnZXRBdWRpb0ZlYXR1cmUoaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2F1ZGlvLWZlYXR1cmVzL1wiICsgaWQpO1xuICAgIH0sXG4gICAgZ2V0QXVkaW9GZWF0dXJlczogZnVuY3Rpb24gZ2V0QXVkaW9GZWF0dXJlcyhpZHMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRSZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2F1ZGlvLWZlYXR1cmVzLz9pZHM9XCIgKyBpZHMpO1xuICAgIH0sXG4gICAgZ2V0QXVkaW9BbmFseXNpczogZnVuY3Rpb24gZ2V0QXVkaW9BbmFseXNpcyhpZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvYXVkaW8tYW5hbHlzaXMvXCIgKyBpZCk7XG4gICAgfVxuICB9O1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/track.js\n");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar toJSON = exports.toJSON = function toJSON(data) {\n  return data.json();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlXcmFwcGVyL2xpYi91dGlsLmpzP2Y3YWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdG9KU09OID0gZXhwb3J0cy50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oZGF0YSkge1xuICByZXR1cm4gZGF0YS5qc29uKCk7XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/util.js\n");

/***/ })

/******/ });
});