'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAudioAnalysis = exports.getAudioFeatures = exports.getAudioFeature = exports.getTracks = exports.getTrack = undefined;

var _config = require('./config');

var getTrack = exports.getTrack = function getTrack(id) {
  return fetch(_config.API_URL + '/tracks/' + id, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
}; /* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
var getTracks = exports.getTracks = function getTracks(ids) {
  return fetch(_config.API_URL + '/tracks/?ids=' + ids, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getAudioFeature = exports.getAudioFeature = function getAudioFeature(id) {
  return fetch(_config.API_URL + '/audio-features/' + id, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getAudioFeatures = exports.getAudioFeatures = function getAudioFeatures(ids) {
  return fetch(_config.API_URL + '/audio-features/?ids=' + ids, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};

var getAudioAnalysis = exports.getAudioAnalysis = function getAudioAnalysis(id) {
  return fetch(_config.API_URL + '/audio-analysis/' + id, {
    headers: {
      Authorization: 'Bearer ' + _config.TOKEN
    }
  }).then(_config.toJSON);
};