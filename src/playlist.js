/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { TOKEN, API_URL, toJSON } from './config';

export const getPlaylists = () =>
  fetch(`${API_URL}/me/playlists`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getPlaylistsTracks = playlistId =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getPlaylist = playlistId =>
  fetch(`${API_URL}/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getUsers = userId =>
  fetch(`${API_URL}/users/${userId}/playlists`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const postPlaylists = (name, description, isPublic) =>
  fetch(`${API_URL}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "name": `"${name}"`,
      "description": `"${description}"`,
      "public": isPublic,
    }),
  })
    .then(toJSON);

export const postPlaylistsTracks = (playlistId, uris) =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks?uris=${uris}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);


export const putPlaylistsTracks = (playlistId, rangeStart, rangeLength, insertBefore) =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "range_start": rangeStart,
      "range_length": rangeLength,
      "insert_before": insertBefore,
    }),
  })
    .then(toJSON);

export const putPlaylists = (playlistId, name, description, isPublic) =>
  fetch(`${API_URL}/playlists/${playlistId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "name": `"${name}"`,
      "description": `"${description}"`,
      "public": isPublic,
    }),
  })
    .then(toJSON);

export const deletePlaylists = (playlistId, uri, positions) =>
  fetch(`${API_URL}/playlists/${playlistId}/tracks`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      "tracks": [
        {
          "uri": `${uri}`,
          "positions": positions,
        },
      ],
    }),
  })
    .then(toJSON);
