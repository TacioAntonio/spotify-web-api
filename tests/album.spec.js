/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.resolves({ json: () => ({ body: 'json' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmR');

      const album2 = getAlbum('2i6nd4FV6y7K9fln6eelmK');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');

      album.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const albums = getAlbums(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      albums.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const albums = getAlbumTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbumTracks('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmR/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      const albums = getAlbumTracks('2i6nd4FV6y7K9fln6eelmR');

      albums.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });
});
