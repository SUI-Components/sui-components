export class SendConsents {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purposeConsents, vendorConsents}) {
    return this._repository.sendConsents({purposeConsents, vendorConsents})
  }
}
