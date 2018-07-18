import ExperimentUseCase from './use-case'
const DETECTION_DELAY = 5000

/**
 * Waits until func returns a value and calls callback with it
 * @param  {Function}   truthyFn       Function to execute to check value
 * @param  {Function} callback       Callback called passing value
 * @param  {Number}   [delay=100]    Delay allowed to wait for value
 * @param  {Number}   [interval=100] Interval time for checks
 */
const waitUntil = (truthyFn, callback, delay = 100, interval = 100) => {
  let intervalId = setInterval(() => {
    let value = truthyFn()
    if (value || delay <= 0) {
      clearInterval(intervalId)
      callback(value)
    }
    delay -= interval
  }, interval)
}

const getOptmizely = () =>
  window && window.optimizely && window.optimizely.get && window.optimizely

let optimizelyPromise

class OptimizelyXExperimentsService {
  /**
   * Get OptimizelyX SDK instance
   * @return Promise<Object>
   */
  static async getSDK() {
    optimizelyPromise =
      optimizelyPromise ||
      new Promise(resolve => {
        waitUntil(getOptmizely, resolve, DETECTION_DELAY)
      })
    return optimizelyPromise
  }

  /**
   * Get info of an experiment
   * @param {String} experimentId
   * @return Promise<Object>
   * @example
   * {
   *  id: '100',
   *  isActive: true,
   *  isInExperimentHoldback: true,
   *  variation: {
   *      id: '101',
   *      name: 'Variation #1'
   *  }
   * }
   */
  static async getInfo(experimentId) {
    const sdk = await this.getSDK()
    return (
      sdk && sdk.get && sdk.get('state').getExperimentStates()[experimentId]
    )
  }

  /**
   * Get if an experiment is activated for current user
   * @param {String} experimentId
   * @return Promise<Boolean>
   */
  static async isActivated(experimentId) {
    let info = (await this.getInfo(experimentId)) || {}
    return (info.isActive && !info.isInExperimentHoldback) || false
  }

  /**
   * Get variation to display for current user
   * @param {String} experimentId
   * @return Promise<String|Number>
   */
  static async getVariation(experimentId) {
    let info = (await this.getInfo(experimentId)) || {}
    return info.variation.id || null
  }
}

/**
 * Get instance of use case
 * @param {String} experimentId
 * @return {ExperimentUseCase}
 */
function createExperimentUseCase(experimentId) {
  return new ExperimentUseCase(OptimizelyXExperimentsService, experimentId)
}

export default OptimizelyXExperimentsService

export {createExperimentUseCase}
