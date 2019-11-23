import {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

import {
  getArtist,
  getArtists,
  getArtistAlbums,
  getRelatedArtists,
  getArtistTopTracks,
} from './artist';

import {
  getPlaylists,
  getPlaylistsTracks,
  getPlaylist,
  getUsers,
  postPlaylists,
  postPlaylistsTracks,
  putPlaylistsTracks,
  putPlaylists,
  deletePlaylists,
} from './playlist';

import {
  getTrack,
  getTracks,
  getAudioFeature,
  getAudioFeatures,
  getAudioAnalysis,
} from './track';

module.exports = {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
  getAlbum,
  getAlbums,
  getAlbumTracks,
  getArtist,
  getArtists,
  getArtistAlbums,
  getRelatedArtists,
  getArtistTopTracks,
  getPlaylists,
  getPlaylistsTracks,
  getPlaylist,
  getUsers,
  postPlaylists,
  postPlaylistsTracks,
  putPlaylistsTracks,
  putPlaylists,
  deletePlaylists,
  getTrack,
  getTracks,
  getAudioFeature,
  getAudioFeatures,
  getAudioAnalysis,
};
