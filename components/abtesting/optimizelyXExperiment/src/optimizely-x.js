import ExperimentUseCase from './use-case'

class OptimizelyXExperimentsService {
  /**
   * Get OptimizelyX SDK instance
   * @return Promise<Object>
   */
  static async getSDK () {
    return window && window.optimizely
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
  static async getInfo (experimentId) {
    let sdk = await this.getSDK()
    return sdk && sdk.get &&
      sdk.get('state').getExperimentStates()[experimentId]
  }

  /**
   * Get if an experiment is activated for current user
   * @param {String} experimentId
   * @return Promise<Boolean>
   */
  static async isActivated (experimentId) {
    let info = await this.getInfo(experimentId) || {}
    return (info.isActive && !info.isInExperimentHoldback) || false
  }

  /**
   * Get variation to display for current user
   * @param {String} experimentId
   * @return Promise<String|Number>
   */
  static async getVariation (experimentId) {
    let info = await this.getInfo(experimentId) || {}
    return info.variation.id || null
  }
}

/**
 * Get instance of use case
 * @param {String} experimentId
 * @return {ExperimentUseCase}
 */
function createExperimentUseCase (experimentId) {
  return new ExperimentUseCase(OptimizelyXExperimentsService, experimentId)
}

export default OptimizelyXExperimentsService

export {createExperimentUseCase}
