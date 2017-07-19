export default class ExperimentUseCase {
  constructor (service, experimentId) {
    this.experimentId = experimentId
    this.service = service
  }

  /**
   * Get variation for current experiment and current user
   * @return Promise<String|Number>
   */
  async execute () {
    try {
      if (await this.service.isActivated(this.experimentId)) {
        return await this.service.getVariation(this.experimentId)
      } else {
        return null
      }
    } catch (e) {
      return null
    }
  }
}
