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

let sdkMock, sdkHandler

describe('OptimizelyXExperiments', () => {
  beforeAll(() => {
    sdkMock = {
      get: jest.fn().mockReturnValue({
        getExperimentStates: () => fakeExperiments
      }),
      push: jest
        .fn()
        .mockImplementation(listener => (sdkHandler = listener.handler))
    }
  })

  afterAll(() => {
    sdkMock = null
  })

  describe('getSDK()', () => {
    beforeAll(() => {
      setTimeout(() => (window.optimizely = sdkMock), 500)
    })

    afterAll(() => {
      delete window.optimizely
    })

    it('should push activation listener once', async () => {
      await Service.getSDK()
      await Service.getSDK()
      expect(sdkMock.push).toHaveBeenCalledTimes(1)
    })

    it('should return window.optimizely event with async loading', async () => {
      expect(await Service.getSDK()).toEqual(sdkMock)
    })

    it('should push activation listener for campaignDecided events ', async () => {
      await Service.getSDK()
      const listener = sdkMock.push.mock.calls[0][0]
      expect(listener.filter.type).toEqual('lifecycle')
      expect(listener.filter.name).toEqual('campaignDecided')
    })
  })

  describe('getInfo(experimentId)', () => {
    beforeEach(() => {
      jest.spyOn(Service, 'getSDK')
    })
    afterEach(() => {
      Service.getSDK.mockRestore()
    })

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
    beforeEach(() => {
      jest.spyOn(Service, 'getSDK')
      jest.spyOn(Service, 'getInfo')
    })
    afterEach(() => {
      Service.getSDK.mockRestore()
      Service.getInfo.mockRestore()
    })

    it('should return true if experiment is active', done => {
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
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[300]))
      Service.isActivated(300).then(res => {
        expect(res).toEqual(false)
        done()
      })
    })

    it('should return false if experiment is exists but is in holback', done => {
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[100]))
      Service.isActivated(100).then(res => {
        expect(res).toEqual(false)
        done()
      })
    })
  })

  describe('getVariation(experimentId)', () => {
    beforeEach(() => {
      jest.spyOn(Service, 'getInfo')
    })
    afterEach(() => {
      Service.getInfo.mockRestore()
    })
    it('should corresponding variation from OptimizelyX', done => {
      Service.getInfo.mockReturnValueOnce(Promise.resolve(fakeExperiments[200]))
      Service.getVariation(200).then(res => {
        expect(res).toEqual(fakeExperiments[200].variation.id)
        done()
      })
    })
  })

  describe('addActivationListener(experimentId, handler)', () => {
    it('should call handlers once experiment is activated', async () => {
      const handlers = [jest.fn(), jest.fn(), jest.fn()]
      await Service.addActivationListener(300, handlers[0])
      await Service.addActivationListener(300, handlers[1])
      await Service.addActivationListener(400, handlers[2])

      expect(handlers[0]).not.toHaveBeenCalled()
      expect(handlers[1]).not.toHaveBeenCalled()
      expect(handlers[2]).not.toHaveBeenCalled()

      sdkHandler({
        data: {
          decision: {experimentId: 300, variationId: 3001}
        }
      })

      expect(handlers[0]).toHaveBeenCalled()
      expect(handlers[1]).toHaveBeenCalled()
      expect(handlers[2]).not.toHaveBeenCalled()
    })

    it('should call handlers if experiment was already activated', async () => {
      const handler = jest.fn()
      expect(handler).not.toHaveBeenCalled()
      await Service.addActivationListener(200, handler)
      expect(handler).toHaveBeenCalled()
    })
  })

  describe('removeActivationListener(experimentId, handler)', () => {
    it('should stop calling removed handlers', async () => {
      const handlers = [jest.fn(), jest.fn()]
      await Service.addActivationListener(300, handlers[0])
      await Service.addActivationListener(300, handlers[1])
      await Service.removeActivationListener(300, handlers[0])

      expect(handlers[0]).not.toHaveBeenCalled()
      expect(handlers[1]).not.toHaveBeenCalled()

      sdkHandler({
        data: {
          decision: {experimentId: 300, variationId: 3001}
        }
      })

      expect(handlers[0]).not.toHaveBeenCalled()
      expect(handlers[1]).toHaveBeenCalled()
    })
  })
})
