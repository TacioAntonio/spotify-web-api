"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = playlist;
function playlist() {
  var _this = this;

  return {
    getPlaylists: function getPlaylists() {
      return _this.getRequest(_this.apiURL + "/me/playlists");
    },
    getPlaylistsTracks: function getPlaylistsTracks(playlistId) {
      return _this.getRequest(_this.apiURL + "/playlists/" + playlistId + "/tracks");
    },
    getPlaylist: function getPlaylist(playlistId) {
      return _this.getRequest(_this.apiURL + "/playlists/" + playlistId);
    },
    getUsers: function getUsers(userId) {
      return _this.getRequest(_this.apiURL + "/users/" + userId + "/playlists");
    },
    postPlaylists: function postPlaylists(name, description, isPublic) {
      return _this.postRequest(_this.apiURL + "/playlists", { "name": "\"" + name + "\"", "description": "\"" + description + "\"", "public": isPublic });
    },
    postPlaylistsTracks: function postPlaylistsTracks(playlistId, uris) {
      return _this.postRequest(_this.apiURL + "/playlists/" + playlistId + "/tracks?uris=" + uris);
    },
    putPlaylistsTracks: function putPlaylistsTracks(playlistId, rangeStart, rangeLength, insertBefore) {
      return _this.putRequest(_this.apiURL + "/playlists/" + playlistId + "/tracks", { "range_start": rangeStart, "range_length": rangeLength, "insert_before": insertBefore });
    },
    putPlaylists: function putPlaylists(playlistId, name, description, isPublic) {
      return _this.putRequest(_this.apiURL + "/playlists/" + playlistId, { "name": "\"" + name + "\"", "description": "\"" + description + "\"", "public": isPublic });
    },
    deletePlaylists: function deletePlaylists(playlistId, uri, positions) {
      return _this.deleteRequest(_this.apiURL + "/playlists/" + playlistId + "/tracks", { "tracks": [{ "uri": "" + uri, "positions": positions }] });
    }
  };
}