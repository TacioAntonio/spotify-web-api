"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = artist;
function artist() {
  var _this = this;

  return {
    getArtist: function getArtist(id) {
      return _this.getRequest(_this.apiURL + "/artists/" + id);
    },
    getArtists: function getArtists(id) {
      return _this.getRequest(_this.apiURL + "/artists/?ids=" + id);
    },
    getArtistAlbums: function getArtistAlbums(id) {
      return _this.getRequest(_this.apiURL + "/artists/" + id + "/albums");
    },
    getRelatedArtists: function getRelatedArtists(id) {
      return _this.getRequest(_this.apiURL + "/artists/" + id + "/related-artists");
    },
    getArtistTopTracks: function getArtistTopTracks(id) {
      return _this.getRequest(_this.apiURL + "/artists/" + id + "/top-tracks");
    }
  };
}