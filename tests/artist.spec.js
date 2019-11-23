import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { getArtist, getArtists, getArtistAlbums, getRelatedArtists, getArtistTopTracks } from '../src/artist';

chai.use(sinonChai);

global.fetch = require('node-fetch');


describe('Artist', () => {
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
    it('should have getArtist method', () => {
      expect(getArtist).to.exist;
    });

    it('should have getArtists method', () => {
      expect(getArtists).to.exist;
    });

    it('should have getArtistAlbums method', () => {
      expect(getArtistAlbums).to.exist;
    });

    it('should have getRelatedArtists method', () => {
      expect(getRelatedArtists).to.exist;
    });

    it('should have getArtistTopTracks method', () => {
      expect(getArtistTopTracks).to.exist;
    });
  });

  describe('getArtist', () => {
    it('should call fetch method', () => {
      const artist = getArtist();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artist = getArtist('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR');

      const artist2 = getArtist('2i6nd4FV6y7K9fln6eelmK');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const artist = getArtist('2i6nd4FV6y7K9fln6eelmR');

      artist.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getArtists', () => {
    it('should call fetch method', () => {
      const artists = getArtists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = getArtists(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const artists = getArtists(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      artists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getArtistAlbums', () => {
    it('should call fetch method', () => {
      const artistAlbums = getArtistAlbums();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artistAlbums = getArtistAlbums('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR/albums');
    });

    it('should return the JSON Data from the Promise', () => {
      const artistAlbums = getArtistAlbums('2i6nd4FV6y7K9fln6eelmR');

      artistAlbums.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getRelatedArtists', () => {
    it('should call fetch method', () => {
      const relatedArtists = getRelatedArtists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const relatedArtists = getRelatedArtists('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR/related-artists');
    });

    it('should return the JSON Data from the Promise', () => {
      const relatedArtists = getRelatedArtists('2i6nd4FV6y7K9fln6eelmR');

      relatedArtists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getArtistTopTracks', () => {
    it('should call fetch method', () => {
      const artistTopTracks = getArtistTopTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call artistTopTracks with the correct URL', () => {
      const artistTopTracks = getArtistTopTracks('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2i6nd4FV6y7K9fln6eelmR/top-tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      const artistTopTracks = getArtistTopTracks('2i6nd4FV6y7K9fln6eelmR');

      artistTopTracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });
});
