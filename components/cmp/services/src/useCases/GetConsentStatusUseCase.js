export class GetConsentStatusUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    return this._repository.getConsentStatus()
  }
}
