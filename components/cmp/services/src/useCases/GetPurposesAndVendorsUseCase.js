export class GetPurposesAndVendorsUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({retrieveConsentsFromCmp} = {}) {
    return Promise.resolve(retrieveConsentsFromCmp).then(
      retrieve =>
        retrieve ? this._loadStoredConsents() : this._loadDefaultConsents()
    )
  }

  _loadStoredConsents() {
    return Promise.all([
      this._repository.getPurposesAndVendors(),
      this._repository.getVendorConsents()
    ]).then(([purposesAndVendors, vendorConsents]) => ({
      ...purposesAndVendors,
      ...vendorConsents
    }))
  }
  _loadDefaultConsents() {
    return this._repository
      .getPurposesAndVendors()
      .then(purposesAndVendors => ({
        ...purposesAndVendors,
        ...this._generateDefaultConsentsObject(purposesAndVendors)
      }))
  }

  _generateConsent({list}) {
    return list.reduce((acc, {id}) => {
      acc[id.toString()] = true
      return acc
    }, {})
  }

  _generateDefaultConsentsObject({purposes, vendors}) {
    return {
      purposeConsents: this._generateConsent({list: purposes}),
      vendorConsents: this._generateConsent({list: vendors})
    }
  }
}
