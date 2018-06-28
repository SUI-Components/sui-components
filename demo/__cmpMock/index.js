import vendorListMock from './vendorListMock.json'
import vendorConsentsMock from './vendorConsentsMock.json'

const COMMANDS_RESPONSES = {
  ping: {cmpLoaded: true},
  getVendorList: vendorListMock,
  getVendorConsents: vendorConsentsMock,
  setVendorConsents: undefined,
  // TEMP UNTIL I KNOW WHAT IS GOING TO RETURN ADVERTISEMENT TEAM
  getConsentStatus: {userAcceptedCookies: false}
}

function cmp(command, parameter, callback) {
  return callback(COMMANDS_RESPONSES[command])
}

window.__cmp = window.__cmp || cmp

const cmpReadyEvent = new window.Event('cmpReady')
document.dispatchEvent(cmpReadyEvent)
