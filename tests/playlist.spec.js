/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { getPlaylists, getPlaylistsTracks, getPlaylist, getUsers, postPlaylists, postPlaylistsTracks, putPlaylistsTracks, putPlaylists, deletePlaylists } from '../src/playlist';

chai.use(sinonChai);

global.fetch = require('node-fetch');


describe('Playlists', () => {
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
    it('should have getPlaylists method', () => {
      expect(getPlaylists).to.exist;
    });

    it('should have getPlaylistsTracks method', () => {
      expect(getPlaylistsTracks).to.exist;
    });

    it('should have getPlaylist method', () => {
      expect(getPlaylist).to.exist;
    });

    it('should have getUsers method', () => {
      expect(getUsers).to.exist;
    });

    it('should have postPlaylists method', () => {
      expect(postPlaylists).to.exist;
    });

    it('should have postPlaylistsTracks method', () => {
      expect(postPlaylistsTracks).to.exist;
    });

    it('should have putPlaylistsTracks method', () => {
      expect(putPlaylistsTracks).to.exist;
    });

    it('should have putPlaylists method', () => {
      expect(putPlaylists).to.exist;
    });

    it('should have deletePlaylists method', () => {
      expect(deletePlaylists).to.exist;
    });
  });

  describe('getPlaylists', () => {
    it('should call fetch method', () => {
      const playlists = getPlaylists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = getPlaylists();

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/me/playlists');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlists = getPlaylists();

      playlists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getPlaylistsTracks', () => {
    it('should call fetch method', () => {
      const playlistsTracks = getPlaylistsTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlistsTracks = getPlaylistsTracks('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists/2i6nd4FV6y7K9fln6eelmR/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlistsTracks = getPlaylistsTracks('2i6nd4FV6y7K9fln6eelmR');

      playlistsTracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getPlaylist', () => {
    it('should call fetch method', () => {
      const playlist = getPlaylist();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlist = getPlaylist('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists/2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlist = getPlaylist('2i6nd4FV6y7K9fln6eelmR');

      playlist.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getUsers', () => {
    it('should call fetch method', () => {
      const users = getUsers();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const users = getUsers('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/users/2i6nd4FV6y7K9fln6eelmR/playlists');
    });

    it('should return the JSON Data from the Promise', () => {
      const users = getUsers('2i6nd4FV6y7K9fln6eelmR');

      users.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('postPlaylists', () => {
    it('should call fetch method', () => {
      const playlists = postPlaylists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = postPlaylists('Muse', 'My music', false);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlists = postPlaylists('Muse', 'My music', false);

      playlists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('postPlaylistsTracks', () => {
    it('should call fetch method', () => {
      const playlistsTracks = postPlaylistsTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlistsTracks = postPlaylistsTracks('3cEYpjA9oz9GiPac4AsH4n', 'spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2Cspotify%3Atrack%3A1301WleyT98MSxVHPZCA6M');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2Cspotify%3Atrack%3A1301WleyT98MSxVHPZCA6M');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlistsTracks = postPlaylistsTracks('3cEYpjA9oz9GiPac4AsH4n', 'spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2Cspotify%3Atrack%3A1301WleyT98MSxVHPZCA6M');

      playlistsTracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('putPlaylistsTracks', () => {
    it('should call fetch method', () => {
      const playlistsTracks = putPlaylistsTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlistsTracks = putPlaylistsTracks('3cEYpjA9oz9GiPac4AsH4n', 1, 2, 3);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlistsTracks = putPlaylistsTracks('3cEYpjA9oz9GiPac4AsH4n', 1, 2, 3);

      playlistsTracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('putPlaylists', () => {
    it('should call fetch method', () => {
      const playlists = putPlaylists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = putPlaylists('3cEYpjA9oz9GiPac4AsH4n', 'Muse', 'My music', false);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlists = putPlaylists('3cEYpjA9oz9GiPac4AsH4n', 'Muse', 'My music', false);

      playlists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('deletePlaylists', () => {
    it('should call fetch method', () => {
      const playlists = deletePlaylists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = deletePlaylists('3cEYpjA9oz9GiPac4AsH4n', 'spotify:track:2DB2zVP1LVu6jjyrvqD44z', [0]);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      const playlists = deletePlaylists('3cEYpjA9oz9GiPac4AsH4n', 'spotify:track:2DB2zVP1LVu6jjyrvqD44z', [0]);

      playlists.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });
});
