export class CmpRepository {
  getConsentStatus() {
    return new Promise((resolve, reject) => {
      window.__cmp('getConsentStatus', null, function(consentStatus, success) {
        if (success) {
          resolve(consentStatus)
        } else {
          reject(success)
        }
      })
    })
  }

  getVendorConsents() {
    return new Promise((resolve, reject) => {
      window.__cmp('getVendorConsents', null, function(consents, success) {
        if (success) {
          resolve(consents)
        } else {
          reject(success)
        }
      })
    })
  }

  getPurposesAndVendors() {
    return new Promise((resolve, reject) => {
      window.__cmp('getVendorList', null, function(purposeAndVendors, success) {
        if (success) {
          resolve(purposeAndVendors)
        } else {
          reject(success)
        }
      })
    })
  }

  sendConsents({purposeConsents, vendorConsents}) {
    const consents = {purposeConsents, vendorConsents}
    return new Promise((resolve, reject) => {
      window.__cmp('setVendorConsents', consents, function(result, success) {
        if (success) {
          resolve(result)
        } else {
          reject(success)
        }
      })
    })
  }
}
