export class CmpRepository {
  getConsentStatus() {
    return new Promise(resolve => {
      window.__cmp('getConsentStatus', null, function(consentStatus) {
        resolve({})
      })
    })
  }

  getVendorConsents() {
    return new Promise(resolve => {
      window.__cmp('getVendorConsents', null, function(consents) {
        resolve(consents)
      })
    })
  }

  getPurposesAndVendors() {
    return new Promise(resolve => {
      window.__cmp('getVendorList', null, function(purposeAndVendors) {
        resolve(purposeAndVendors)
      })
    })
  }

  sendConsents({purposeConsents, vendorConsents}) {
    const consents = {purposeConsents, vendorConsents}
    return new Promise(resolve => {
      window.__cmp('sendConsents', consents, function(result) {
        console.log('sent consents', consents)
        resolve(result)
      })
    })
  }
}
