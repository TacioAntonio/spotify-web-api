/* eslint-disable import/prefer-default-export */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { TOKEN, API_URL, toJSON } from './config';

// GET	/v1/me/playlists	Get a List of Current User's Playlists

export const getPlaylists = () =>
  fetch(`${API_URL}/me/playlists`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

// GET	/v1/playlists/{playlist_id}/tracks	Get a Playlist's Tracks

export const getPlaylistsTracks = playlistId =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

// GET	/v1/playlists/{playlist_id}	Get a Playlist

export const getPlaylist = playlistId =>
  fetch(`${API_URL}/playlists/${playlistId}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

// GET	/v1/users/{user_id}/playlists	Get a List of a User's Playlists

export const getUsers = userId =>
  fetch(`${API_URL}/users/${userId}/playlists`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

//  POST https://api.spotify.com/v1/playlists

export const postPlaylists = (name, description, isPublic) =>
  fetch(`${API_URL}/playlists`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "name": `"${name}"`,
      "description": `"${description}"`,
      "public": isPublic,
    }),
  })
    .then(toJSON);

//  POST	/v1/playlists/{playlist_id}/tracks	Add Tracks to a Playlis
export const postPlaylistsTracks = (playlistId, uris) =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks?uris=${uris}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    }
  })
    .then(toJSON);

// PUT	/v1/playlists/{playlist_id}/tracks	Reorder or replace a Playlist's Tracks
export const putPlaylistsTracks = (playlistId, rangeStart, rangeLength, insertBefore) =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "range_start": rangeStart,
      "range_length": rangeLength,
      "insert_before": insertBefore,
    }),
  })
    .then(toJSON);

// PUT	/v1/playlists/{playlist_id}	Change a Playlist's Details
export const putPlaylists = (playlistId, name, description, isPublic) =>
  fetch(`${API_URL}/playlists/${playlistId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "name": `"${name}"`,
      "description": `"${description}"`,
      "public": isPublic,
    }),
  })
    .then(toJSON);
// DELETE	/v1/playlists/{playlist_id}/tracks	Remove Tracks from a Playlist
export const deletePlaylists = (playlistId, uri, positions) =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "tracks": [
        {
          "uri": `${uri}`,
          "positions": positions
        }
      ]
    }),
  })
    .then(toJSON);
