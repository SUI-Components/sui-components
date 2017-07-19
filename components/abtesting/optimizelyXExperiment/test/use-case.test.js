/* eslint-env jest */
import ExperimentUseCase from '../src/use-case'

describe('ExperimentUseCase', () => {
  const service = {isActivated: jest.fn(), getVariation: jest.fn()}
  const experimentId = 58
  const instance = new ExperimentUseCase(service, experimentId)

  describe('execute()', () => {
    it('should return null when experiment is not activated', (done) => {
      service.isActivated.mockReturnValueOnce(Promise.resolve(false))

      instance.execute()
        .then((result) => {
          expect(result).toEqual(null)
          expect(service.getVariation).not.toHaveBeenCalled()
          done()
        })
    })
    it('should return variation when experiment is activated', (done) => {
      service.isActivated.mockReturnValueOnce(Promise.resolve(true))
      service.getVariation.mockReturnValueOnce(Promise.resolve(4))
      instance.execute()
        .then((result) => {
          expect(result).toEqual(4)
          expect(service.getVariation).toHaveBeenCalled()
          done()
        })
    })
    it('should return null if an error is thrown', (done) => {
      service.isActivated.mockReturnValueOnce(Promise.resolve(true))
      service.getVariation.mockReturnValueOnce(Promise.reject(new Error('error')))

      instance.execute()
        .then((result) => {
          expect(result).toEqual(null)
          expect(service.getVariation).toHaveBeenCalled()
          done()
        })
    })
  })
})
