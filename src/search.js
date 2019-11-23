/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { TOKEN, API_URL, toJSON } from './config';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);


export const searchArtists = query => search(query, 'artist');
export const searchAlbums = query => search(query, 'album');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
