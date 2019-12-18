'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _album = require('./album');

var _album2 = _interopRequireDefault(_album);

var _artist = require('./artist');

var _artist2 = _interopRequireDefault(_artist);

var _playlist = require('./playlist');

var _playlist2 = _interopRequireDefault(_playlist);

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

var _config = require('./config');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotifyWrapper = function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.apiURL = options.apiURL || _config.API_URL;
    this.token = options.token;
    this.album = _album2.default.bind(this)();
    this.search = _search2.default.bind(this)();
    this.artist = _artist2.default.bind(this)();
    this.playlist = _playlist2.default.bind(this)();
    this.track = _track2.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: 'getRequest',
    value: function getRequest(url) {
      var headers = {
        headers: {
          Authorization: '\'Bearer ' + this.token + '\''
        }
      };

      return fetch(url, headers).then(_util.toJSON);
    }
  }, {
    key: 'postRequest',
    value: function postRequest(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      //body: token, description, isPublic
      var headers = {
        method: 'POST',
        headers: {
          Authorization: '\'Bearer ' + this.token + '\''
        },
        body: JSON.stringify(data === undefined ? {} : data)
      };

      return fetch(url, headers).then(_util.toJSON);
    }
  }, {
    key: 'putRequest',
    value: function putRequest(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var headers = {
        method: 'PUT',
        headers: {
          Authorization: '\'Bearer ' + this.token + '\''
        },
        body: JSON.stringify(data === undefined ? {} : data)
      };

      return fetch(url, headers).then(_util.toJSON);
    }
  }, {
    key: 'deleteRequest',
    value: function deleteRequest(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var headers = {
        method: 'DELETE',
        headers: {
          Authorization: '\'Bearer ' + this.token + '\''
        },
        body: JSON.stringify(data === undefined ? {} : data)
      };

      return fetch(url, headers).then(_util.toJSON);
    }
  }]);

  return SpotifyWrapper;
}();

exports.default = SpotifyWrapper;