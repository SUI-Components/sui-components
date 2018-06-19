import vendorListMock from './vendorListMock.json'
import vendorConsentsMock from './vendorConsentsMock.json'

const COMMANDS_RESPONSES = {
  getVendorList: vendorListMock,
  getVendorConsents: vendorConsentsMock,
  sendConsents: undefined,
  // TEMP UNTIL I KNOW WHAT IS GOING TO RETURN ADS
  getConsentStatus: {userAcceptedCookies: false}
}

function cmp(command, parameter, callback) {
  return callback(COMMANDS_RESPONSES[command])
}

window.__cmp = window.__cmp || cmp
