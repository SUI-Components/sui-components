import vendorListMock from './vendorListMock.json'
import vendorConsentsMock from './vendorConsentsMock.json'
import {CONSENT_STATUS_NOT_ACCEPTED} from './consentStatus'

const COMMANDS_RESPONSES = {
  ping: {cmpLoaded: true},
  getVendorList: vendorListMock,
  getVendorConsents: vendorConsentsMock,
  setVendorConsents: true,
  getConsentStatus: CONSENT_STATUS_NOT_ACCEPTED
}

function cmp(command, parameter, callback) {
  return callback(COMMANDS_RESPONSES[command], true)
}

window.__cmp = window.__cmp || cmp

const cmpReadyEvent = new window.Event('cmpReady')
document.dispatchEvent(cmpReadyEvent)
