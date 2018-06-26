import {getConsentStatus} from '../src/useCases/index'
import {expect} from 'chai'

import '../../../../demo/__cmpMock'

describe('getConsentStatus', () => {
  it('Should return you if the user has accepted the cookies', () => {
    getConsentStatus.execute().then(response => {
      expect(response.userAcceptedCookies).to.be(false)
    })
  })
})
