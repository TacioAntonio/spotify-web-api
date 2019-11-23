/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { TOKEN, API_URL, toJSON } from './config';

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);


export const getAlbums = ids =>
  fetch(`${API_URL}/albums/?ids=${ids}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);


export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

