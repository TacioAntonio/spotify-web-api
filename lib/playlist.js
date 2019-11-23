'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePlaylists = exports.putPlaylists = exports.putPlaylistsTracks = exports.postPlaylistsTracks = exports.postPlaylists = exports.getUsers = exports.getPlaylist = exports.getPlaylistsTracks = exports.getPlaylists = undefined;

var _config = require('./config');

var getPlaylists = exports.getPlaylists = function getPlaylists() {
  return fetch(_config.API_URL + '/me/playlists', {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
}; /* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
var getPlaylistsTracks = exports.getPlaylistsTracks = function getPlaylistsTracks(playlistId) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getPlaylist = exports.getPlaylist = function getPlaylist(playlistId) {
  return fetch(_config.API_URL + '/playlists/' + playlistId, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getUsers = exports.getUsers = function getUsers(userId) {
  return fetch(_config.API_URL + '/users/' + userId + '/playlists', {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var postPlaylists = exports.postPlaylists = function postPlaylists(name, description, isPublic) {
  return fetch(_config.API_URL + '/playlists', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "name": '"' + name + '"',
      "description": '"' + description + '"',
      "public": isPublic
    })
  }).then(_config.toJSON);
};

var postPlaylistsTracks = exports.postPlaylistsTracks = function postPlaylistsTracks(playlistId, uris) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks?uris=' + uris, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var putPlaylistsTracks = exports.putPlaylistsTracks = function putPlaylistsTracks(playlistId, rangeStart, rangeLength, insertBefore) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "range_start": rangeStart,
      "range_length": rangeLength,
      "insert_before": insertBefore
    })
  }).then(_config.toJSON);
};

var putPlaylists = exports.putPlaylists = function putPlaylists(playlistId, name, description, isPublic) {
  return fetch(_config.API_URL + '/playlists/' + playlistId, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "name": '"' + name + '"',
      "description": '"' + description + '"',
      "public": isPublic
    })
  }).then(_config.toJSON);
};

var deletePlaylists = exports.deletePlaylists = function deletePlaylists(playlistId, uri, positions) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "tracks": [{
        "uri": '' + uri,
        "positions": positions
      }]
    })
  }).then(_config.toJSON);
};