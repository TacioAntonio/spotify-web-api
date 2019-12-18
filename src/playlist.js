/* eslint-disable quotes */
/* eslint-disable quote-props */
export default function playlist() {
  return {
    getPlaylists: () => this.getRequest(`${this.apiURL}/me/playlists`),
    getPlaylistsTracks: playlistId => this.getRequest(`${this.apiURL}/playlists/${playlistId}/tracks`),
    getPlaylist: playlistId => this.getRequest(`${this.apiURL}/playlists/${playlistId}`),
    getUsers: userId => this.getRequest(`${this.apiURL}/users/${userId}/playlists`),
    postPlaylists: (name, description, isPublic) => this.postRequest(`${this.apiURL}/playlists`, { "name": `"${name}"`, "description": `"${description}"`, "public": isPublic }),
    postPlaylistsTracks: (playlistId, uris) => this.postRequest(`${this.apiURL}/playlists/${playlistId}/tracks?uris=${uris}`),
    putPlaylistsTracks: (playlistId, rangeStart, rangeLength, insertBefore) => this.putRequest(`${this.apiURL}/playlists/${playlistId}/tracks`, { "range_start": rangeStart, "range_length": rangeLength, "insert_before": insertBefore }),
    putPlaylists: (playlistId, name, description, isPublic) => this.putRequest(`${this.apiURL}/playlists/${playlistId}`, { "name": `"${name}"`, "description": `"${description}"`, "public": isPublic }),
    deletePlaylists: (playlistId, uri, positions) => this.deleteRequest(`${this.apiURL}/playlists/${playlistId}/tracks`, { "tracks": [{ "uri": `${uri}`, "positions": positions }] }),
  };
}
