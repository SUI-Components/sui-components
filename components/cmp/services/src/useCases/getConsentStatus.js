export class GetConsentStatus {
  constructor({repository}) {
    this._repository = repository
  }

  async execute() {
    return this._repository.getConsent
  }
}
