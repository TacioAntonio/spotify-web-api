import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Artist', () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({});
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.resolves({ json: () => ({ body: 'json' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should have getArtist method', () => {
      expect(spotify.artist.getArtist).to.exist;
    });

    it('should have getArtists method', () => {
      expect(spotify.artist.getArtists).to.exist;
    });

    it('should have getArtistAlbums method', () => {
      expect(spotify.artist.getArtistAlbums).to.exist;
    });

    it('should have getRelatedArtists method', () => {
      expect(spotify.artist.getRelatedArtists).to.exist;
    });

    it('should have getArtistTopTracks method', () => {
      expect(spotify.artist.getArtistTopTracks).to.exist;
    });
  });

  describe('getArtist', () => {
    it('should call fetch method', () => {
      const artist = spotify.artist.getArtist();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artist = spotify.artist.getArtist('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR');

      const artist2 = spotify.artist.getArtist('2i6nd4FV6y7K9fln6eelmK');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const artist = spotify.artist.getArtist('2i6nd4FV6y7K9fln6eelmR');

      artist.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getArtists', () => {
    it('should call fetch method', () => {
      const artists = spotify.artist.getArtists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = spotify.artist.getArtists(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const artists = spotify.artist.getArtists(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      artists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getArtistAlbums', () => {
    it('should call fetch method', () => {
      const artistAlbums = spotify.artist.getArtistAlbums();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artistAlbums = spotify.artist.getArtistAlbums('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR/albums');
    });

    it('should return the JSON Data from the Promise', () => {
      const artistAlbums = spotify.artist.getArtistAlbums('2i6nd4FV6y7K9fln6eelmR');

      artistAlbums.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getRelatedArtists', () => {
    it('should call fetch method', () => {
      const relatedArtists = spotify.artist.getRelatedArtists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const relatedArtists = spotify.artist.getRelatedArtists('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR/related-artists');
    });

    it('should return the JSON Data from the Promise', () => {
      const relatedArtists = spotify.artist.getRelatedArtists('2i6nd4FV6y7K9fln6eelmR');

      relatedArtists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getArtistTopTracks', () => {
    it('should call fetch method', () => {
      const artistTopTracks = spotify.artist.getArtistTopTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call artistTopTracks with the correct URL', () => {
      const artistTopTracks = spotify.artist.getArtistTopTracks('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR/top-tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      const artistTopTracks = spotify.artist.getArtistTopTracks('2i6nd4FV6y7K9fln6eelmR');

      artistTopTracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });
});
