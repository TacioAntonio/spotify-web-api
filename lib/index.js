'use strict';

var _search = require('./search');

var _album = require('./album');

var _artist = require('./artist');

var _playlist = require('./playlist');

var _track = require('./track');

module.exports = {
  search: _search.search,
  searchArtists: _search.searchArtists,
  searchAlbums: _search.searchAlbums,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks,
  getArtist: _artist.getArtist,
  getArtists: _artist.getArtists,
  getArtistAlbums: _artist.getArtistAlbums,
  getRelatedArtists: _artist.getRelatedArtists,
  getArtistTopTracks: _artist.getArtistTopTracks,
  getPlaylists: _playlist.getPlaylists,
  getPlaylistsTracks: _playlist.getPlaylistsTracks,
  getPlaylist: _playlist.getPlaylist,
  getUsers: _playlist.getUsers,
  postPlaylists: _playlist.postPlaylists,
  postPlaylistsTracks: _playlist.postPlaylistsTracks,
  putPlaylistsTracks: _playlist.putPlaylistsTracks,
  putPlaylists: _playlist.putPlaylists,
  deletePlaylists: _playlist.deletePlaylists,
  getTrack: _track.getTrack,
  getTracks: _track.getTracks,
  getAudioFeature: _track.getAudioFeature,
  getAudioFeatures: _track.getAudioFeatures,
  getAudioAnalysis: _track.getAudioAnalysis
};