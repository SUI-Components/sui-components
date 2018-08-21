import sinon from 'sinon'
import {expect} from 'chai'
import '../../../../demo/__cmpMock'
import {getConsentStatus} from '../src/useCases/index'

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'

describe('getConsentStatus', () => {
  beforeEach(() => {
    sinon.spy(window, '__cmp')
  })

  afterEach(() => {
    window.__cmp.restore()
  })

  it('Should return you if the user has accepted the cookies', done => {
    getConsentStatus
      .execute()
      .then(response => {
        expect(window.__cmp.calledOnce).to.be.true
        const command = window.__cmp.getCall(0).args[0]
        expect(command).to.equal('getConsentStatus')
        expect(response).to.equals(CONSENT_STATUS_NOT_ACCEPTED)
        done()
      })
      .catch(error => done(new Error(error)))
  })
})
