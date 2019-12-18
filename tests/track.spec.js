import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Track', () => {
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
    it('should have getTrack method', () => {
      expect(spotify.track.getTrack).to.exist;
    });

    it('should have getTracks method', () => {
      expect(spotify.track.getTracks).to.exist;
    });

    it('should have getAudioFeature method', () => {
      expect(spotify.track.getAudioFeature).to.exist;
    });

    it('should have getAudioFeatures method', () => {
      expect(spotify.track.getAudioFeatures).to.exist;
    });

    it('should have getAudioAnalysis method', () => {
      expect(spotify.track.getAudioAnalysis).to.exist;
    });
  });


  describe('getTrack', () => {
    it('should call fetch method', () => {
      const track = spotify.track.getTrack();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const track = spotify.track.getTrack('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/tracks/2i6nd4FV6y7K9fln6eelmR');

      const track2 = spotify.track.getTrack('2i6nd4FV6y7K9fln6eelmK');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/tracks/2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const track = spotify.track.getTrack('2i6nd4FV6y7K9fln6eelmR');

      track.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getTracks', () => {
    it('should call fetch method', () => {
      const tracks = spotify.track.getTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = spotify.track.getTracks(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/tracks/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const tracks = spotify.track.getTracks(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      tracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAudioFeature', () => {
    it('should call fetch method', () => {
      const audioFeature = spotify.track.getAudioFeature();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const audioFeature = spotify.track.getAudioFeature('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/audio-features/2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the JSON Data from the Promise', () => {
      const audioFeature = spotify.track.getAudioFeature('2i6nd4FV6y7K9fln6eelmR');

      audioFeature.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAudioFeatures', () => {
    it('should call fetch method', () => {
      const audioFeatures = spotify.track.getAudioFeatures();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const audioFeatures = spotify.track.getAudioFeatures(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/audio-features/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const audioFeatures = spotify.track.getAudioFeatures(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      audioFeatures.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAudioAnalysis', () => {
    it('should call fetch method', () => {
      const audioAnalysis = spotify.track.getAudioAnalysis();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const audioAnalysis = spotify.track.getAudioAnalysis('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/audio-analysis/2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the JSON Data from the Promise', () => {
      const audioAnalysis = spotify.track.getAudioAnalysis('2i6nd4FV6y7K9fln6eelmR');

      audioAnalysis.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });


});
