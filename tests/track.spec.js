import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { getTrack, getTracks, getAudioFeature, getAudioFeatures, getAudioAnalysis } from '../src/track';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Track', () => {
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
    it('should have getTrack method', () => {
      expect(getTrack).to.exist;
    });

    it('should have getTracks method', () => {
      expect(getTracks).to.exist;
    });

    it('should have getAudioFeature method', () => {
      expect(getAudioFeature).to.exist;
    });

    it('should have getAudioFeatures method', () => {
      expect(getAudioFeatures).to.exist;
    });

    it('should have getAudioAnalysis method', () => {
      expect(getAudioAnalysis).to.exist;
    });
  });


  describe('getTrack', () => {
    it('should call fetch method', () => {
      const track = getTrack();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const track = getTrack('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/tracks/2i6nd4FV6y7K9fln6eelmR');

      const track2 = getTrack('2i6nd4FV6y7K9fln6eelmK');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/tracks/2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const track = getTrack('2i6nd4FV6y7K9fln6eelmR');

      track.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getTracks', () => {
    it('should call fetch method', () => {
      const tracks = getTracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = getTracks(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/tracks/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const tracks = getTracks(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      tracks.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAudioFeature', () => {
    it('should call fetch method', () => {
      const audioFeature = getAudioFeature();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const audioFeature = getAudioFeature('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/audio-features/2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the JSON Data from the Promise', () => {
      const audioFeature = getAudioFeature('2i6nd4FV6y7K9fln6eelmR');

      audioFeature.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAudioFeatures', () => {
    it('should call fetch method', () => {
      const audioFeatures = getAudioFeatures();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const audioFeatures = getAudioFeatures(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/audio-features/?ids=2i6nd4FV6y7K9fln6eelmR,2i6nd4FV6y7K9fln6eelmK');
    });

    it('should return the JSON Data from the Promise', () => {
      const audioFeatures = getAudioFeatures(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmK']);

      audioFeatures.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });

  describe('getAudioAnalysis', () => {
    it('should call fetch method', () => {
      const audioAnalysis = getAudioAnalysis();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const audioAnalysis = getAudioAnalysis('2i6nd4FV6y7K9fln6eelmR');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/audio-analysis/2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the JSON Data from the Promise', () => {
      const audioAnalysis = getAudioAnalysis('2i6nd4FV6y7K9fln6eelmR');

      audioAnalysis.then(data => {
        expect(data).to.eql({ body: 'json' });
      });
    });
  });


});
