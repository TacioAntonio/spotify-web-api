"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = track;
function track() {
  var _this = this;

  return {
    getTrack: function getTrack(id) {
      return _this.getRequest(_this.apiURL + "/tracks/" + id);
    },
    getTracks: function getTracks(ids) {
      return _this.getRequest(_this.apiURL + "/tracks/?ids=" + ids);
    },
    getAudioFeature: function getAudioFeature(id) {
      return _this.getRequest(_this.apiURL + "/audio-features/" + id);
    },
    getAudioFeatures: function getAudioFeatures(ids) {
      return _this.getRequest(_this.apiURL + "/audio-features/?ids=" + ids);
    },
    getAudioAnalysis: function getAudioAnalysis(id) {
      return _this.getRequest(_this.apiURL + "/audio-analysis/" + id);
    }
  };
}