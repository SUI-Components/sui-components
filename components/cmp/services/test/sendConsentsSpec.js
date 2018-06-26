import sinon from 'sinon'
import {getPurposesAndVendors, sendConsents} from '../src/useCases/index'
import {expect} from 'chai'

import '../../../../demo/__cmpMock'

describe.only('sendConsents', () => {
  beforeEach(() => {
    sinon.spy(window, '__cmp')
  })

  afterEach(() => {
    window.__cmp.restore()
  })

  it('should send to cmp a valid list of purposes and vendors', done => {
    const purposeConsents = {1: true, 2: false, 3: true}
    const vendorConsents = {1: true, 2: false, 3: true}

    sendConsents.execute({purposeConsents, vendorConsents}).then(_ => {
      expect(window.__cmp.calledOnce).to.equal(true)
      const [command, params] = window.__cmp.getCall(0).args
      expect(command).to.equal('setVendorConsents')
      expect(params).to.deep.equal({vendorConsents, purposeConsents})
      done()
    })
  })

  it('should send purposes and vendors from getPurposesAndVendors default output', done => {
    getPurposesAndVendors.execute().then(response => {
      const {purposeConsents, vendorConsents} = response
      sendConsents.execute({purposeConsents, vendorConsents}).then(_ => {
        expect(window.__cmp.callCount).to.equal(2)
        const [command, params] = window.__cmp.getCall(1).args
        expect(command).to.equal('setVendorConsents')
        expect(params).to.deep.equal({purposeConsents, vendorConsents})
        done()
      })
    })
  })
})
