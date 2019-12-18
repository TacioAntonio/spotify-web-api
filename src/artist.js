export default function artist() {
  return {
    getArtist: id => this.getRequest(`${this.apiURL}/artists/${id}`),
    getArtists: id => this.getRequest(`${this.apiURL}/artists/?ids=${id}`),
    getArtistAlbums: id => this.getRequest(`${this.apiURL}/artists/${id}/albums`),
    getRelatedArtists: id => this.getRequest(`${this.apiURL}/artists/${id}/related-artists`),
    getArtistTopTracks: id => this.getRequest(`${this.apiURL}/artists/${id}/top-tracks`),
  };
}
