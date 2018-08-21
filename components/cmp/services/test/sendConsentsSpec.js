import sinon from 'sinon'
import {getPurposesAndVendors, sendConsents} from '../src/useCases/index'
import {expect} from 'chai'

import '../../../../demo/__cmpMock'

describe('sendConsents', () => {
  beforeEach(() => {
    sinon.spy(window, '__cmp')
  })

  afterEach(() => {
    window.__cmp.restore()
  })

  it('should send to cmp a valid list of purposes and vendors', done => {
    const purposeConsents = {1: true, 2: false, 3: true}
    const vendorConsents = {1: true, 2: false, 3: true}

    sendConsents
      .execute({purposeConsents, vendorConsents})
      .then(completed => {
        expect(completed).to.be.true
        expect(window.__cmp.calledOnce).to.be.true
        const [command, params] = window.__cmp.getCall(0).args
        expect(command).to.equal('setVendorConsents')
        expect(params).to.deep.equal({vendorConsents, purposeConsents})
        done()
      })
      .catch(error => done(new Error(error)))
  })

  it('should send purposes and vendors from getPurposesAndVendors default output', done => {
    getPurposesAndVendors
      .execute()
      .then(({purposeConsents, vendorConsents}) =>
        sendConsents
          .execute({purposeConsents, vendorConsents})
          .then(() => ({purposeConsents, vendorConsents}))
      )
      .then(consents => {
        expect(window.__cmp.calledTwice).to.be.true
        const [command, params] = window.__cmp.getCall(1).args
        expect(command).to.equal('setVendorConsents')
        expect(params).to.deep.equal({...consents})
        done()
      })
      .catch(error => done(new Error(error)))
  })
})
