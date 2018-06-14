import mock from './mock.json'

export class GetPurposesAndVendors {
  _generateConsent({list}) {
    return Object.keys(list).reduce((acc, {id}) => {
      acc[id] = true
      return acc
    }, {})
  }

  _generateDefaultConsentsObject({purposes, vendors}) {
    return {
      purposeConsents: this._generateConsent({list: purposes}),
      vendorConsents: this._generateConsent({list: vendors})
    }
  }

  async execute() {
    // we should retrieve from cmp instead
    const purposesAndVendors = mock
    return {
      ...purposesAndVendors,
      ...this._generateDefaultConsentsObject(purposesAndVendors)
    }
  }
}
