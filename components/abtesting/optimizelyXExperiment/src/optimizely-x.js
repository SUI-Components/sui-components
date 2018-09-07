const DETECTION_DELAY = 5000

const activationHandlers = {}

let optimizelyPromise

let wasExperimentsListenerAdded = false

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

const getOptimizely = () =>
  window && window.optimizely && window.optimizely.get && window.optimizely

/**
 * Register handler to optimizely ONCE
 * @param {Object} sdk OptimizelySdk
 */
const registerExprimentsEvents = sdk => {
  if (!wasExperimentsListenerAdded) {
    sdk.push({
      type: 'addListener',
      filter: {type: 'lifecycle', name: 'campaignDecided'},
      handler: experimentsActivationHandler
    })
    wasExperimentsListenerAdded = true
  }
}

/**
 * Handler for Optimizely events
 * @param {Object} event
 */
const experimentsActivationHandler = event => {
  const {
    data: {
      decision: {experimentId, variationId}
    }
  } = event
  dispatchActivated(experimentId, variationId)
}

/**
 * Executed all handlers added to an experiment with variationId as param
 * @param {String} experimentId
 * @param {String} variationId
 */
const dispatchActivated = (experimentId, variationId) => {
  const handlers = activationHandlers[experimentId] || []
  handlers.forEach(handler => handler(variationId))
}

class OptimizelyXExperiments {
  /**
   * Get OptimizelyX SDK instance
   * @return Promise<Object>
   */
  static async getSDK() {
    optimizelyPromise =
      optimizelyPromise ||
      new Promise(resolve => {
        waitUntil(
          getOptimizely,
          sdk => {
            registerExprimentsEvents(sdk)
            resolve(sdk)
          },
          DETECTION_DELAY
        )
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
   * Add function to call when experiment gets activated.
   * If experiment is already activated, the handler is called right away.
   * @param {String} experimentId
   * @param {Function} handler
   */
  static async addActivationListener(experimentId, handler) {
    activationHandlers[experimentId] = activationHandlers[experimentId] || []
    activationHandlers[experimentId].push(handler)
    if (await this.isActivated(experimentId)) {
      handler(await this.getVariation(experimentId))
    }
  }

  /**
   * Remove function to call when experiment gets activated.
   * @param {String} experimentId
   * @param {Function} removedHandler
   */
  static async removeActivationListener(experimentId, removedHandler) {
    const handlers = activationHandlers[experimentId]
    if (!handlers) return
    activationHandlers[experimentId] = handlers.filter(
      handler => handler !== removedHandler
    )
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

export default OptimizelyXExperiments
