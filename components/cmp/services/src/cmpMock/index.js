import vendorListMock from './vendorListMock.json'
import vendorConsentsMock from './vendorConsentsMock.json'

function cmp(command, parameter, callback) {
  if (command === 'getVendorList') {
    return callback(vendorListMock)
  } else if (command === 'getVendorConsents') {
    return callback(vendorConsentsMock)
  } else if (command === 'sendConsents') {
    return callback()
  }
}

window.__cmp = window.__cmp || cmp
