'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtistTopTracks = exports.getRelatedArtists = exports.getArtistAlbums = exports.getArtists = exports.getArtist = undefined;

var _config = require('./config');

var getArtist = exports.getArtist = function getArtist(id) {
  return fetch(_config.API_URL + '/artists/' + id, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
}; /* eslint-disable quote-props */
/* eslint-disable no-undef */
var getArtists = exports.getArtists = function getArtists(id) {
  return fetch(_config.API_URL + '/artists/?ids=' + id, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getArtistAlbums = exports.getArtistAlbums = function getArtistAlbums(id) {
  return fetch(_config.API_URL + '/artists/' + id + '/albums', {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getRelatedArtists = exports.getRelatedArtists = function getRelatedArtists(id) {
  return fetch(_config.API_URL + '/artists/' + id + '/related-artists', {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getArtistTopTracks = exports.getArtistTopTracks = function getArtistTopTracks(id) {
  return fetch(_config.API_URL + '/artists/' + id + '/top-tracks', {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};