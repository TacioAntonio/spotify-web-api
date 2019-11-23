'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePlaylists = exports.putPlaylists = exports.putPlaylistsTracks = exports.postPlaylistsTracks = exports.postPlaylists = exports.getUsers = exports.getPlaylist = exports.getPlaylistsTracks = exports.getPlaylists = undefined;

var _config = require('./config');

// GET	/v1/me/playlists	Get a List of Current User's Playlists

var getPlaylists = exports.getPlaylists = function getPlaylists() {
  return fetch(_config.API_URL + '/me/playlists', {
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

// GET	/v1/playlists/{playlist_id}/tracks	Get a Playlist's Tracks

/* eslint-disable import/prefer-default-export */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
var getPlaylistsTracks = exports.getPlaylistsTracks = function getPlaylistsTracks(playlistId) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

// GET	/v1/playlists/{playlist_id}	Get a Playlist

var getPlaylist = exports.getPlaylist = function getPlaylist(playlistId) {
  return fetch(_config.API_URL + '/playlists/' + playlistId, {
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

// GET	/v1/users/{user_id}/playlists	Get a List of a User's Playlists

var getUsers = exports.getUsers = function getUsers(userId) {
  return fetch(_config.API_URL + '/users/' + userId + '/playlists', {
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

//  POST https://api.spotify.com/v1/playlists

var postPlaylists = exports.postPlaylists = function postPlaylists(name, description, isPublic) {
  return fetch(_config.API_URL + '/playlists', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "name": '"' + name + '"',
      "description": '"' + description + '"',
      "public": isPublic
    })
  }).then(_config.toJSON);
};

//  POST	/v1/playlists/{playlist_id}/tracks	Add Tracks to a Playlis
var postPlaylistsTracks = exports.postPlaylistsTracks = function postPlaylistsTracks(playlistId, uris) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks?uris=' + uris, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

// PUT	/v1/playlists/{playlist_id}/tracks	Reorder or replace a Playlist's Tracks
var putPlaylistsTracks = exports.putPlaylistsTracks = function putPlaylistsTracks(playlistId, rangeStart, rangeLength, insertBefore) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "range_start": rangeStart,
      "range_length": rangeLength,
      "insert_before": insertBefore
    })
  }).then(_config.toJSON);
};

// PUT	/v1/playlists/{playlist_id}	Change a Playlist's Details
var putPlaylists = exports.putPlaylists = function putPlaylists(playlistId, name, description, isPublic) {
  return fetch(_config.API_URL + '/playlists/' + playlistId, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "name": '"' + name + '"',
      "description": '"' + description + '"',
      "public": isPublic
    })
  }).then(_config.toJSON);
};
// DELETE	/v1/playlists/{playlist_id}/tracks	Remove Tracks from a Playlist
var deletePlaylists = exports.deletePlaylists = function deletePlaylists(playlistId, uri, positions) {
  return fetch(_config.API_URL + '/playlists/' + playlistId + '/tracks', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + _config.TOKEN
    },
    body: JSON.stringify({
      "tracks": [{
        "uri": '' + uri,
        "positions": positions
      }]
    })
  }).then(_config.toJSON);
};