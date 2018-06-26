import sinon from 'sinon'
import {getConsentStatus} from '../src/useCases/index'
import {expect} from 'chai'

import '../../../../demo/__cmpMock'

describe('getConsentStatus', () => {
  it('Should return you if the user has accepted the cookies', () => {
    getConsentStatus.execute().then(response => {
      expect(window.__cmp.calledOnce).to.equal(true)
      const [command] = window.__cmp.getCall(1).args
      expect(command).to.equal('getConsentStatus')
      expect(response.userAcceptedCookies).to.be(false)
    })
  })
})
