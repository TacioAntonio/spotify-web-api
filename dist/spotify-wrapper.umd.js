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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/album.js":
/*!**********************!*\
  !*** ./lib/album.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\nvar getAlbum = exports.getAlbum = function getAlbum(id) {\n  return fetch(_config.API_URL + '/albums/' + id, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n}; /* eslint-disable quote-props */\n/* eslint-disable no-undef */\nvar getAlbums = exports.getAlbums = function getAlbums(ids) {\n  return fetch(_config.API_URL + '/albums/?ids=' + ids, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {\n  return fetch(_config.API_URL + '/albums/' + id + '/tracks', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvYWxidW0uanM/MmVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEFsYnVtVHJhY2tzID0gZXhwb3J0cy5nZXRBbGJ1bXMgPSBleHBvcnRzLmdldEFsYnVtID0gdW5kZWZpbmVkO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBnZXRBbGJ1bSA9IGV4cG9ydHMuZ2V0QWxidW0gPSBmdW5jdGlvbiBnZXRBbGJ1bShpZCkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9hbGJ1bXMvJyArIGlkLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH1cbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59OyAvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbnZhciBnZXRBbGJ1bXMgPSBleHBvcnRzLmdldEFsYnVtcyA9IGZ1bmN0aW9uIGdldEFsYnVtcyhpZHMpIHtcbiAgcmV0dXJuIGZldGNoKF9jb25maWcuQVBJX1VSTCArICcvYWxidW1zLz9pZHM9JyArIGlkcywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIGdldEFsYnVtVHJhY2tzID0gZXhwb3J0cy5nZXRBbGJ1bVRyYWNrcyA9IGZ1bmN0aW9uIGdldEFsYnVtVHJhY2tzKGlkKSB7XG4gIHJldHVybiBmZXRjaChfY29uZmlnLkFQSV9VUkwgKyAnL2FsYnVtcy8nICsgaWQgKyAnL3RyYWNrcycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBfY29uZmlnLlRPS0VOXG4gICAgfVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/album.js\n");

/***/ }),

/***/ "./lib/artist.js":
/*!***********************!*\
  !*** ./lib/artist.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getArtistTopTracks = exports.getRelatedArtists = exports.getArtistAlbums = exports.getArtists = exports.getArtist = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\nvar getArtist = exports.getArtist = function getArtist(id) {\n  return fetch(_config.API_URL + '/artists/' + id, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n}; /* eslint-disable quote-props */\n/* eslint-disable no-undef */\nvar getArtists = exports.getArtists = function getArtists(id) {\n  return fetch(_config.API_URL + '/artists/?ids=' + id, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getArtistAlbums = exports.getArtistAlbums = function getArtistAlbums(id) {\n  return fetch(_config.API_URL + '/artists/' + id + '/albums', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getRelatedArtists = exports.getRelatedArtists = function getRelatedArtists(id) {\n  return fetch(_config.API_URL + '/artists/' + id + '/related-artists', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getArtistTopTracks = exports.getArtistTopTracks = function getArtistTopTracks(id) {\n  return fetch(_config.API_URL + '/artists/' + id + '/top-tracks', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXJ0aXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvbGliL2FydGlzdC5qcz9hNTE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0QXJ0aXN0VG9wVHJhY2tzID0gZXhwb3J0cy5nZXRSZWxhdGVkQXJ0aXN0cyA9IGV4cG9ydHMuZ2V0QXJ0aXN0QWxidW1zID0gZXhwb3J0cy5nZXRBcnRpc3RzID0gZXhwb3J0cy5nZXRBcnRpc3QgPSB1bmRlZmluZWQ7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxudmFyIGdldEFydGlzdCA9IGV4cG9ydHMuZ2V0QXJ0aXN0ID0gZnVuY3Rpb24gZ2V0QXJ0aXN0KGlkKSB7XG4gIHJldHVybiBmZXRjaChfY29uZmlnLkFQSV9VUkwgKyAnL2FydGlzdHMvJyArIGlkLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH1cbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59OyAvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbnZhciBnZXRBcnRpc3RzID0gZXhwb3J0cy5nZXRBcnRpc3RzID0gZnVuY3Rpb24gZ2V0QXJ0aXN0cyhpZCkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9hcnRpc3RzLz9pZHM9JyArIGlkLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH1cbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59O1xuXG52YXIgZ2V0QXJ0aXN0QWxidW1zID0gZXhwb3J0cy5nZXRBcnRpc3RBbGJ1bXMgPSBmdW5jdGlvbiBnZXRBcnRpc3RBbGJ1bXMoaWQpIHtcbiAgcmV0dXJuIGZldGNoKF9jb25maWcuQVBJX1VSTCArICcvYXJ0aXN0cy8nICsgaWQgKyAnL2FsYnVtcycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBfY29uZmlnLlRPS0VOXG4gICAgfVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07XG5cbnZhciBnZXRSZWxhdGVkQXJ0aXN0cyA9IGV4cG9ydHMuZ2V0UmVsYXRlZEFydGlzdHMgPSBmdW5jdGlvbiBnZXRSZWxhdGVkQXJ0aXN0cyhpZCkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9hcnRpc3RzLycgKyBpZCArICcvcmVsYXRlZC1hcnRpc3RzJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIGdldEFydGlzdFRvcFRyYWNrcyA9IGV4cG9ydHMuZ2V0QXJ0aXN0VG9wVHJhY2tzID0gZnVuY3Rpb24gZ2V0QXJ0aXN0VG9wVHJhY2tzKGlkKSB7XG4gIHJldHVybiBmZXRjaChfY29uZmlnLkFQSV9VUkwgKyAnL2FydGlzdHMvJyArIGlkICsgJy90b3AtdHJhY2tzJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/artist.js\n");

/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar TOKEN = exports.TOKEN = 'TOKEN';\nvar API_URL = exports.API_URL = 'https://api.spotify.com/v1';\nvar toJSON = exports.toJSON = function toJSON(data) {\n  return data.json();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvbGliL2NvbmZpZy5qcz8zNDYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBUT0tFTiA9IGV4cG9ydHMuVE9LRU4gPSAnVE9LRU4nO1xudmFyIEFQSV9VUkwgPSBleHBvcnRzLkFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEnO1xudmFyIHRvSlNPTiA9IGV4cG9ydHMudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuanNvbigpO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _search = __webpack_require__(/*! ./search */ \"./lib/search.js\");\n\nvar _album = __webpack_require__(/*! ./album */ \"./lib/album.js\");\n\nvar _artist = __webpack_require__(/*! ./artist */ \"./lib/artist.js\");\n\nvar _playlist = __webpack_require__(/*! ./playlist */ \"./lib/playlist.js\");\n\nvar _track = __webpack_require__(/*! ./track */ \"./lib/track.js\");\n\nmodule.exports = {\n  search: _search.search,\n  searchArtists: _search.searchArtists,\n  searchAlbums: _search.searchAlbums,\n  searchPlaylists: _search.searchPlaylists,\n  getAlbum: _album.getAlbum,\n  getAlbums: _album.getAlbums,\n  getAlbumTracks: _album.getAlbumTracks,\n  getArtist: _artist.getArtist,\n  getArtists: _artist.getArtists,\n  getArtistAlbums: _artist.getArtistAlbums,\n  getRelatedArtists: _artist.getRelatedArtists,\n  getArtistTopTracks: _artist.getArtistTopTracks,\n  getPlaylists: _playlist.getPlaylists,\n  getPlaylistsTracks: _playlist.getPlaylistsTracks,\n  getPlaylist: _playlist.getPlaylist,\n  getUsers: _playlist.getUsers,\n  postPlaylists: _playlist.postPlaylists,\n  postPlaylistsTracks: _playlist.postPlaylistsTracks,\n  putPlaylistsTracks: _playlist.putPlaylistsTracks,\n  putPlaylists: _playlist.putPlaylists,\n  deletePlaylists: _playlist.deletePlaylists,\n  getTrack: _track.getTrack,\n  getTracks: _track.getTracks,\n  getAudioFeature: _track.getAudioFeature,\n  getAudioFeatures: _track.getAudioFeatures,\n  getAudioAnalysis: _track.getAudioAnalysis\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvaW5kZXguanM/MjIyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfc2VhcmNoID0gcmVxdWlyZSgnLi9zZWFyY2gnKTtcblxudmFyIF9hbGJ1bSA9IHJlcXVpcmUoJy4vYWxidW0nKTtcblxudmFyIF9hcnRpc3QgPSByZXF1aXJlKCcuL2FydGlzdCcpO1xuXG52YXIgX3BsYXlsaXN0ID0gcmVxdWlyZSgnLi9wbGF5bGlzdCcpO1xuXG52YXIgX3RyYWNrID0gcmVxdWlyZSgnLi90cmFjaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2VhcmNoOiBfc2VhcmNoLnNlYXJjaCxcbiAgc2VhcmNoQXJ0aXN0czogX3NlYXJjaC5zZWFyY2hBcnRpc3RzLFxuICBzZWFyY2hBbGJ1bXM6IF9zZWFyY2guc2VhcmNoQWxidW1zLFxuICBzZWFyY2hQbGF5bGlzdHM6IF9zZWFyY2guc2VhcmNoUGxheWxpc3RzLFxuICBnZXRBbGJ1bTogX2FsYnVtLmdldEFsYnVtLFxuICBnZXRBbGJ1bXM6IF9hbGJ1bS5nZXRBbGJ1bXMsXG4gIGdldEFsYnVtVHJhY2tzOiBfYWxidW0uZ2V0QWxidW1UcmFja3MsXG4gIGdldEFydGlzdDogX2FydGlzdC5nZXRBcnRpc3QsXG4gIGdldEFydGlzdHM6IF9hcnRpc3QuZ2V0QXJ0aXN0cyxcbiAgZ2V0QXJ0aXN0QWxidW1zOiBfYXJ0aXN0LmdldEFydGlzdEFsYnVtcyxcbiAgZ2V0UmVsYXRlZEFydGlzdHM6IF9hcnRpc3QuZ2V0UmVsYXRlZEFydGlzdHMsXG4gIGdldEFydGlzdFRvcFRyYWNrczogX2FydGlzdC5nZXRBcnRpc3RUb3BUcmFja3MsXG4gIGdldFBsYXlsaXN0czogX3BsYXlsaXN0LmdldFBsYXlsaXN0cyxcbiAgZ2V0UGxheWxpc3RzVHJhY2tzOiBfcGxheWxpc3QuZ2V0UGxheWxpc3RzVHJhY2tzLFxuICBnZXRQbGF5bGlzdDogX3BsYXlsaXN0LmdldFBsYXlsaXN0LFxuICBnZXRVc2VyczogX3BsYXlsaXN0LmdldFVzZXJzLFxuICBwb3N0UGxheWxpc3RzOiBfcGxheWxpc3QucG9zdFBsYXlsaXN0cyxcbiAgcG9zdFBsYXlsaXN0c1RyYWNrczogX3BsYXlsaXN0LnBvc3RQbGF5bGlzdHNUcmFja3MsXG4gIHB1dFBsYXlsaXN0c1RyYWNrczogX3BsYXlsaXN0LnB1dFBsYXlsaXN0c1RyYWNrcyxcbiAgcHV0UGxheWxpc3RzOiBfcGxheWxpc3QucHV0UGxheWxpc3RzLFxuICBkZWxldGVQbGF5bGlzdHM6IF9wbGF5bGlzdC5kZWxldGVQbGF5bGlzdHMsXG4gIGdldFRyYWNrOiBfdHJhY2suZ2V0VHJhY2ssXG4gIGdldFRyYWNrczogX3RyYWNrLmdldFRyYWNrcyxcbiAgZ2V0QXVkaW9GZWF0dXJlOiBfdHJhY2suZ2V0QXVkaW9GZWF0dXJlLFxuICBnZXRBdWRpb0ZlYXR1cmVzOiBfdHJhY2suZ2V0QXVkaW9GZWF0dXJlcyxcbiAgZ2V0QXVkaW9BbmFseXNpczogX3RyYWNrLmdldEF1ZGlvQW5hbHlzaXNcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ }),

/***/ "./lib/playlist.js":
/*!*************************!*\
  !*** ./lib/playlist.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deletePlaylists = exports.putPlaylists = exports.putPlaylistsTracks = exports.postPlaylistsTracks = exports.postPlaylists = exports.getUsers = exports.getPlaylist = exports.getPlaylistsTracks = exports.getPlaylists = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\nvar getPlaylists = exports.getPlaylists = function getPlaylists() {\n  return fetch(_config.API_URL + '/me/playlists', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n}; /* eslint-disable quotes */\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable quote-props */\n/* eslint-disable no-undef */\nvar getPlaylistsTracks = exports.getPlaylistsTracks = function getPlaylistsTracks(playlistId) {\n  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getPlaylist = exports.getPlaylist = function getPlaylist(playlistId) {\n  return fetch(_config.API_URL + '/playlists/' + playlistId, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getUsers = exports.getUsers = function getUsers(userId) {\n  return fetch(_config.API_URL + '/users/' + userId + '/playlists', {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar postPlaylists = exports.postPlaylists = function postPlaylists(name, description, isPublic) {\n  return fetch(_config.API_URL + '/playlists', {\n    method: 'POST',\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    },\n    body: JSON.stringify({\n      \"name\": '\"' + name + '\"',\n      \"description\": '\"' + description + '\"',\n      \"public\": isPublic\n    })\n  }).then(_config.toJSON);\n};\n\nvar postPlaylistsTracks = exports.postPlaylistsTracks = function postPlaylistsTracks(playlistId, uris) {\n  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks?uris=' + uris, {\n    method: 'POST',\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar putPlaylistsTracks = exports.putPlaylistsTracks = function putPlaylistsTracks(playlistId, rangeStart, rangeLength, insertBefore) {\n  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {\n    method: 'PUT',\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    },\n    body: JSON.stringify({\n      \"range_start\": rangeStart,\n      \"range_length\": rangeLength,\n      \"insert_before\": insertBefore\n    })\n  }).then(_config.toJSON);\n};\n\nvar putPlaylists = exports.putPlaylists = function putPlaylists(playlistId, name, description, isPublic) {\n  return fetch(_config.API_URL + '/playlists/' + playlistId, {\n    method: 'PUT',\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    },\n    body: JSON.stringify({\n      \"name\": '\"' + name + '\"',\n      \"description\": '\"' + description + '\"',\n      \"public\": isPublic\n    })\n  }).then(_config.toJSON);\n};\n\nvar deletePlaylists = exports.deletePlaylists = function deletePlaylists(playlistId, uri, positions) {\n  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {\n    method: 'PUT',\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    },\n    body: JSON.stringify({\n      \"tracks\": [{\n        \"uri\": '' + uri,\n        \"positions\": positions\n      }]\n    })\n  }).then(_config.toJSON);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcGxheWxpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvcGxheWxpc3QuanM/MTZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlbGV0ZVBsYXlsaXN0cyA9IGV4cG9ydHMucHV0UGxheWxpc3RzID0gZXhwb3J0cy5wdXRQbGF5bGlzdHNUcmFja3MgPSBleHBvcnRzLnBvc3RQbGF5bGlzdHNUcmFja3MgPSBleHBvcnRzLnBvc3RQbGF5bGlzdHMgPSBleHBvcnRzLmdldFVzZXJzID0gZXhwb3J0cy5nZXRQbGF5bGlzdCA9IGV4cG9ydHMuZ2V0UGxheWxpc3RzVHJhY2tzID0gZXhwb3J0cy5nZXRQbGF5bGlzdHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxudmFyIGdldFBsYXlsaXN0cyA9IGV4cG9ydHMuZ2V0UGxheWxpc3RzID0gZnVuY3Rpb24gZ2V0UGxheWxpc3RzKCkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9tZS9wbGF5bGlzdHMnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH1cbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59OyAvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlLXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xudmFyIGdldFBsYXlsaXN0c1RyYWNrcyA9IGV4cG9ydHMuZ2V0UGxheWxpc3RzVHJhY2tzID0gZnVuY3Rpb24gZ2V0UGxheWxpc3RzVHJhY2tzKHBsYXlsaXN0SWQpIHtcbiAgcmV0dXJuIGZldGNoKF9jb25maWcuQVBJX1VSTCArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy90cmFja3MnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH1cbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59O1xuXG52YXIgZ2V0UGxheWxpc3QgPSBleHBvcnRzLmdldFBsYXlsaXN0ID0gZnVuY3Rpb24gZ2V0UGxheWxpc3QocGxheWxpc3RJZCkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBfY29uZmlnLlRPS0VOXG4gICAgfVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07XG5cbnZhciBnZXRVc2VycyA9IGV4cG9ydHMuZ2V0VXNlcnMgPSBmdW5jdGlvbiBnZXRVc2Vycyh1c2VySWQpIHtcbiAgcmV0dXJuIGZldGNoKF9jb25maWcuQVBJX1VSTCArICcvdXNlcnMvJyArIHVzZXJJZCArICcvcGxheWxpc3RzJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIHBvc3RQbGF5bGlzdHMgPSBleHBvcnRzLnBvc3RQbGF5bGlzdHMgPSBmdW5jdGlvbiBwb3N0UGxheWxpc3RzKG5hbWUsIGRlc2NyaXB0aW9uLCBpc1B1YmxpYykge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9wbGF5bGlzdHMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJuYW1lXCI6ICdcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogJ1wiJyArIGRlc2NyaXB0aW9uICsgJ1wiJyxcbiAgICAgIFwicHVibGljXCI6IGlzUHVibGljXG4gICAgfSlcbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59O1xuXG52YXIgcG9zdFBsYXlsaXN0c1RyYWNrcyA9IGV4cG9ydHMucG9zdFBsYXlsaXN0c1RyYWNrcyA9IGZ1bmN0aW9uIHBvc3RQbGF5bGlzdHNUcmFja3MocGxheWxpc3RJZCwgdXJpcykge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL3RyYWNrcz91cmlzPScgKyB1cmlzLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH1cbiAgfSkudGhlbihfY29uZmlnLnRvSlNPTik7XG59O1xuXG52YXIgcHV0UGxheWxpc3RzVHJhY2tzID0gZXhwb3J0cy5wdXRQbGF5bGlzdHNUcmFja3MgPSBmdW5jdGlvbiBwdXRQbGF5bGlzdHNUcmFja3MocGxheWxpc3RJZCwgcmFuZ2VTdGFydCwgcmFuZ2VMZW5ndGgsIGluc2VydEJlZm9yZSkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL3RyYWNrcycsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwicmFuZ2Vfc3RhcnRcIjogcmFuZ2VTdGFydCxcbiAgICAgIFwicmFuZ2VfbGVuZ3RoXCI6IHJhbmdlTGVuZ3RoLFxuICAgICAgXCJpbnNlcnRfYmVmb3JlXCI6IGluc2VydEJlZm9yZVxuICAgIH0pXG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIHB1dFBsYXlsaXN0cyA9IGV4cG9ydHMucHV0UGxheWxpc3RzID0gZnVuY3Rpb24gcHV0UGxheWxpc3RzKHBsYXlsaXN0SWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBpc1B1YmxpYykge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwibmFtZVwiOiAnXCInICsgbmFtZSArICdcIicsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6ICdcIicgKyBkZXNjcmlwdGlvbiArICdcIicsXG4gICAgICBcInB1YmxpY1wiOiBpc1B1YmxpY1xuICAgIH0pXG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIGRlbGV0ZVBsYXlsaXN0cyA9IGV4cG9ydHMuZGVsZXRlUGxheWxpc3RzID0gZnVuY3Rpb24gZGVsZXRlUGxheWxpc3RzKHBsYXlsaXN0SWQsIHVyaSwgcG9zaXRpb25zKSB7XG4gIHJldHVybiBmZXRjaChfY29uZmlnLkFQSV9VUkwgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJywge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgX2NvbmZpZy5UT0tFTlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJ0cmFja3NcIjogW3tcbiAgICAgICAgXCJ1cmlcIjogJycgKyB1cmksXG4gICAgICAgIFwicG9zaXRpb25zXCI6IHBvc2l0aW9uc1xuICAgICAgfV1cbiAgICB9KVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUxBO0FBWUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/playlist.js\n");

/***/ }),

/***/ "./lib/search.js":
/*!***********************!*\
  !*** ./lib/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\nvar search = exports.search = function search(query, type) {\n  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n}; /* eslint-disable quote-props */\n/* eslint-disable no-undef */\nvar searchArtists = exports.searchArtists = function searchArtists(query) {\n  return search(query, 'artist');\n};\nvar searchAlbums = exports.searchAlbums = function searchAlbums(query) {\n  return search(query, 'album');\n};\nvar searchTracks = exports.searchTracks = function searchTracks(query) {\n  return search(query, 'track');\n};\nvar searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {\n  return search(query, 'playlist');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvbGliL3NlYXJjaC5qcz84MDU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2VhcmNoUGxheWxpc3RzID0gZXhwb3J0cy5zZWFyY2hUcmFja3MgPSBleHBvcnRzLnNlYXJjaEFsYnVtcyA9IGV4cG9ydHMuc2VhcmNoQXJ0aXN0cyA9IGV4cG9ydHMuc2VhcmNoID0gdW5kZWZpbmVkO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBzZWFyY2ggPSBleHBvcnRzLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSwgdHlwZSkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9zZWFyY2g/cT0nICsgcXVlcnkgKyAnJnR5cGU9JyArIHR5cGUsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBfY29uZmlnLlRPS0VOXG4gICAgfVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07IC8qIGVzbGludC1kaXNhYmxlIHF1b3RlLXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xudmFyIHNlYXJjaEFydGlzdHMgPSBleHBvcnRzLnNlYXJjaEFydGlzdHMgPSBmdW5jdGlvbiBzZWFyY2hBcnRpc3RzKHF1ZXJ5KSB7XG4gIHJldHVybiBzZWFyY2gocXVlcnksICdhcnRpc3QnKTtcbn07XG52YXIgc2VhcmNoQWxidW1zID0gZXhwb3J0cy5zZWFyY2hBbGJ1bXMgPSBmdW5jdGlvbiBzZWFyY2hBbGJ1bXMocXVlcnkpIHtcbiAgcmV0dXJuIHNlYXJjaChxdWVyeSwgJ2FsYnVtJyk7XG59O1xudmFyIHNlYXJjaFRyYWNrcyA9IGV4cG9ydHMuc2VhcmNoVHJhY2tzID0gZnVuY3Rpb24gc2VhcmNoVHJhY2tzKHF1ZXJ5KSB7XG4gIHJldHVybiBzZWFyY2gocXVlcnksICd0cmFjaycpO1xufTtcbnZhciBzZWFyY2hQbGF5bGlzdHMgPSBleHBvcnRzLnNlYXJjaFBsYXlsaXN0cyA9IGZ1bmN0aW9uIHNlYXJjaFBsYXlsaXN0cyhxdWVyeSkge1xuICByZXR1cm4gc2VhcmNoKHF1ZXJ5LCAncGxheWxpc3QnKTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/search.js\n");

/***/ }),

/***/ "./lib/track.js":
/*!**********************!*\
  !*** ./lib/track.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAudioAnalysis = exports.getAudioFeatures = exports.getAudioFeature = exports.getTracks = exports.getTrack = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\nvar getTrack = exports.getTrack = function getTrack(id) {\n  return fetch(_config.API_URL + '/tracks/' + id, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n}; /* eslint-disable no-undef */\n/* eslint-disable import/prefer-default-export */\nvar getTracks = exports.getTracks = function getTracks(ids) {\n  return fetch(_config.API_URL + '/tracks/?ids=' + ids, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getAudioFeature = exports.getAudioFeature = function getAudioFeature(id) {\n  return fetch(_config.API_URL + '/audio-features/' + id, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getAudioFeatures = exports.getAudioFeatures = function getAudioFeatures(ids) {\n  return fetch(_config.API_URL + '/audio-features/?ids=' + ids, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};\n\nvar getAudioAnalysis = exports.getAudioAnalysis = function getAudioAnalysis(id) {\n  return fetch(_config.API_URL + '/audio-analysis/' + id, {\n    headers: {\n      Authorization: 'Bearer ' + _config.TOKEN\n    }\n  }).then(_config.toJSON);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdHJhY2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci9saWIvdHJhY2suanM/ZTQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEF1ZGlvQW5hbHlzaXMgPSBleHBvcnRzLmdldEF1ZGlvRmVhdHVyZXMgPSBleHBvcnRzLmdldEF1ZGlvRmVhdHVyZSA9IGV4cG9ydHMuZ2V0VHJhY2tzID0gZXhwb3J0cy5nZXRUcmFjayA9IHVuZGVmaW5lZDtcblxudmFyIF9jb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuXG52YXIgZ2V0VHJhY2sgPSBleHBvcnRzLmdldFRyYWNrID0gZnVuY3Rpb24gZ2V0VHJhY2soaWQpIHtcbiAgcmV0dXJuIGZldGNoKF9jb25maWcuQVBJX1VSTCArICcvdHJhY2tzLycgKyBpZCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTsgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbnZhciBnZXRUcmFja3MgPSBleHBvcnRzLmdldFRyYWNrcyA9IGZ1bmN0aW9uIGdldFRyYWNrcyhpZHMpIHtcbiAgcmV0dXJuIGZldGNoKF9jb25maWcuQVBJX1VSTCArICcvdHJhY2tzLz9pZHM9JyArIGlkcywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIGdldEF1ZGlvRmVhdHVyZSA9IGV4cG9ydHMuZ2V0QXVkaW9GZWF0dXJlID0gZnVuY3Rpb24gZ2V0QXVkaW9GZWF0dXJlKGlkKSB7XG4gIHJldHVybiBmZXRjaChfY29uZmlnLkFQSV9VUkwgKyAnL2F1ZGlvLWZlYXR1cmVzLycgKyBpZCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIF9jb25maWcuVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4oX2NvbmZpZy50b0pTT04pO1xufTtcblxudmFyIGdldEF1ZGlvRmVhdHVyZXMgPSBleHBvcnRzLmdldEF1ZGlvRmVhdHVyZXMgPSBmdW5jdGlvbiBnZXRBdWRpb0ZlYXR1cmVzKGlkcykge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9hdWRpby1mZWF0dXJlcy8/aWRzPScgKyBpZHMsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBfY29uZmlnLlRPS0VOXG4gICAgfVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07XG5cbnZhciBnZXRBdWRpb0FuYWx5c2lzID0gZXhwb3J0cy5nZXRBdWRpb0FuYWx5c2lzID0gZnVuY3Rpb24gZ2V0QXVkaW9BbmFseXNpcyhpZCkge1xuICByZXR1cm4gZmV0Y2goX2NvbmZpZy5BUElfVVJMICsgJy9hdWRpby1hbmFseXNpcy8nICsgaWQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBfY29uZmlnLlRPS0VOXG4gICAgfVxuICB9KS50aGVuKF9jb25maWcudG9KU09OKTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/track.js\n");

/***/ })

/******/ });
});