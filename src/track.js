export default function track() {
  return {
    getTrack: id => this.getRequest(`${this.apiURL}/tracks/${id}`),
    getTracks: ids => this.getRequest(`${this.apiURL}/tracks/?ids=${ids}`),
    getAudioFeature: id => this.getRequest(`${this.apiURL}/audio-features/${id}`),
    getAudioFeatures: ids => this.getRequest(`${this.apiURL}/audio-features/?ids=${ids}`),
    getAudioAnalysis: id => this.getRequest(`${this.apiURL}/audio-analysis/${id}`),
  };
}

