export class GetPurposesAndVendorsUseCase {
  constructor({repository}) {
    this._repository = repository
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

  async execute({retrieveConsentsFromCmp} = {}) {
    const purposesAndVendors = await this._repository.getPurposesAndVendors()
    // we should retrieve from cmp instead
    const consents =
      retrieveConsentsFromCmp === true
        ? await this._repository.getVendorConsents()
        : this._generateDefaultConsentsObject(purposesAndVendors)

    return {
      ...purposesAndVendors,
      ...consents
    }
  }
}
