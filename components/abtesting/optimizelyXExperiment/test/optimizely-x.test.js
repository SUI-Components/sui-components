/* eslint-env jest */
import Service from '../src/optimizely-x'

const fakeExperiments = {
  100: {
    id: '100',
    isActive: true,
    isInExperimentHoldback: true,
    variation: {
      id: '101',
      name: 'Variation #1'
    }
  },
  200: {
    id: '200',
    isActive: true,
    isInExperimentHoldback: false,
    variation: {
      id: '201',
      name: 'Variation #2'
    }
  }
}

describe('OptimizelyXExperimentsService', () => {
  beforeAll(() => {
    Service.getSDK = jest.fn()
  })

  describe('getInfo(experimentId)', () => {
    it('should return undefined if SDK if absent', done => {
      Service.getSDK.mockReturnValueOnce(Promise.resolve())

      Service.getInfo(200).then(res => {
        expect(res).toBeUndefined()
        done()
      })
    })

    it('should return experiment info from SDK if present', done => {
      Service.getSDK.mockReturnValueOnce(
        Promise.resolve({
          get: () => ({getExperimentStates: () => fakeExperiments})
        })
      )

      Service.getInfo(200).then(res => {
        expect(res).toEqual(fakeExperiments[200])
        done()
      })
    })
  })
  describe('isActivated(experimentId)', () => {
    it('should return true if experiment is active', done => {
      Service.getInfo = jest.fn()
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[200]))
      Service.isActivated(200).then(res => {
        expect(res).toEqual(true)
        done()
      })
    })

    it('should return false if SDK if absent', done => {
      Service.getSDK.mockReturnValueOnce(Promise.resolve())
      Service.isActivated(100).then(res => {
        expect(res).toEqual(false)
        done()
      })
    })

    it('should return false if experiment is absent', done => {
      Service.getInfo = jest.fn()
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[300]))
      Service.isActivated(300).then(res => {
        expect(res).toEqual(false)
        done()
      })
    })

    it('should return false if experiment is exists but is in holback', done => {
      Service.getInfo = jest.fn()
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[100]))
      Service.isActivated(100).then(res => {
        expect(res).toEqual(false)
        done()
      })
    })
  })
  describe('getVariation(experimentId)', () => {
    it('should corresponding variation from OptimizelyX', done => {
      Service.getInfo = jest.fn()
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[200]))
      Service.getVariation(200).then(res => {
        expect(res).toEqual(fakeExperiments[200].variation.id)
        done()
      })
    })
  })
})
