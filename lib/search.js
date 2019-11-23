'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
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