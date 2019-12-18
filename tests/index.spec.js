import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', function () {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({ apiURL: 'API_TEST' });
    expect(spotify.apiURL).to.be.equal('API_TEST');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({ token: 'foo' });
    expect(spotify.token).to.be.equal('foo');
  });

  describe('request method', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.resolves({ json: () => ({ body: 'json' }) });
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should have getRequest method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.getRequest).to.exist;
    });

    it('should have postRequest method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.postRequest).to.exist;
    });

    it('should have putRequest method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.putRequest).to.exist;
    });

    it('should have deleteRequest method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.deleteRequest).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({});

      spotify.getRequest('url');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let spotify = new SpotifyWrapper({});

      spotify.getRequest('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      const headers = {
        headers: {
          Authorization: `'Bearer foo'`,
        },
      };

      spotify.getRequest('url');
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({});

      spotify.postRequest('url', {});
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      spotify.postRequest('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      const headers = {
        method: "POST",
        headers: { Authorization: "'Bearer foo'" },
        body: '{"name":"foo"}',
      };

      spotify.postRequest('url', { "name": "foo" });
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({});

      spotify.putRequest('url', {});
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      spotify.putRequest('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      const headers = {
        method: "PUT",
        headers: { Authorization: "'Bearer foo'" },
        body: '{"name":"foo"}',
      };

      spotify.putRequest('url', { "name": "foo" });
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({});

      spotify.deleteRequest('url', {});
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      spotify.deleteRequest('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({ token: 'foo' });

      const headers = {
        method: "DELETE",
        headers: { Authorization: "'Bearer foo'" },
        body: '{"name":"foo"}',
      };

      spotify.deleteRequest('url', { "name": "foo" });
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});
