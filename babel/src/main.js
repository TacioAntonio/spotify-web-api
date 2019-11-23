'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _token = require('../token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = exports.search = function search(query, type) {
  return fetch('https://api.spotify.com/v1/search?q=' + query + '&type=' + type, {
    headers: {
      'Authorization': 'Bearer ' + _token2.default
    }
  }).then(function (data) {
    return data.json();
  });
}; /* eslint-disable quote-props */
/* eslint-disable no-undef */
var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};