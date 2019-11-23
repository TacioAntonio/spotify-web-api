/* eslint-disable import/prefer-default-export */
import { TOKEN, API_URL, toJSON } from './config';

export const getTrack = id =>
  fetch(`${API_URL}/tracks/${id}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getTracks = ids =>
  fetch(`${API_URL}/tracks/?ids=${ids}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getAudioFeature = id =>
  fetch(`${API_URL}/audio-features/${id}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getAudioFeatures = ids =>
  fetch(`${API_URL}/audio-features/?ids=${ids}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

export const getAudioAnalysis = id =>
  fetch(`${API_URL}/audio-analysis/${id}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
    .then(toJSON);

