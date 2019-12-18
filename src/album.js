export default function album() {
  return {
    getAlbum: id => this.getRequest(`${this.apiURL}/albums/${id}`),
    getAlbums: ids => this.getRequest(`${this.apiURL}/albums/?ids=${ids}`),
    getTracks: id => this.getRequest(`${this.apiURL}/albums/${id}/tracks`),
  };
}
