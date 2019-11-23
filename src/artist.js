/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { TOKEN, API_URL, toJSON } from './config';

export const getArtist = id =>
  fetch(`${API_URL}/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getArtists = id =>
  fetch(`${API_URL}/artists/?ids=${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getArtistAlbums = id =>
  fetch(`${API_URL}/artists/${id}/albums`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getRelatedArtists = id =>
  fetch(`${API_URL}/artists/${id}/related-artists`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getArtistTopTracks = id =>
  fetch(`${API_URL}/artists/${id}/top-tracks`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);
