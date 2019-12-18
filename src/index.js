/* eslint-disable no-undef */
import search from './search';
import album from './album';
import artist from './artist';
import playlist from './playlist';
import track from './track';
import { API_URL } from './config';
import { toJSON } from './util';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    this.album = album.bind(this)();
    this.search = search.bind(this)();
    this.artist = artist.bind(this)();
    this.playlist = playlist.bind(this)();
    this.track = track.bind(this)();
  }

  getRequest(url) {
    const headers = {
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }

  postRequest(url, data = undefined) {
    const headers = {
      method: 'POST',
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
      body: JSON.stringify(data === undefined ? {} : data),
    };

    return fetch(url, headers).then(toJSON);
  }

  putRequest(url, data = undefined) {
    const headers = {
      method: 'PUT',
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
      body: JSON.stringify(data === undefined ? {} : data),
    };

    return fetch(url, headers).then(toJSON);
  }

  deleteRequest(url, data = undefined) {
    const headers = {
      method: 'DELETE',
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
      body: JSON.stringify(data === undefined ? {} : data),
    };

    return fetch(url, headers).then(toJSON);
  }
}
