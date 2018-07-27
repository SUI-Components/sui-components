import {getPurposesAndVendors} from '../src/useCases/index'
import {expect} from 'chai'

import '../../../../demo/__cmpMock'

describe('getPurposesAndVendors', () => {
  const TOTAL_PURPOSE_CONSENTS = 5

  it('should return you a list of purposes and vendors with user consents', done => {
    const TOTAL_VENDOR_CONSENTS = 435

    getPurposesAndVendors
      .execute({retrieveConsentsFromCmp: true})
      .then(response => {
        const {purposeConsents, vendorConsents} = response

        expect(purposeConsents).to.be.a('object')
        expect(Object.keys(purposeConsents).length).to.equal(
          TOTAL_PURPOSE_CONSENTS
        )
        expect(Object.values(purposeConsents)).to.include(false)

        expect(vendorConsents).to.be.a('object')
        expect(Object.keys(vendorConsents).length).to.equal(
          TOTAL_VENDOR_CONSENTS
        )
        expect(Object.values(vendorConsents)).to.include(false)

        done()
      })
      .catch(error => done(new Error(error)))
  })

  it('Should return you a list of purposes and vendors by default with true value', done => {
    const TOTAL_VENDOR_CONSENTS = 68

    getPurposesAndVendors
      .execute()
      .then(response => {
        const {purposeConsents, vendorConsents} = response

        expect(purposeConsents).to.be.a('object')
        expect(Object.keys(purposeConsents).length).to.equal(
          TOTAL_PURPOSE_CONSENTS
        )
        Object.values(purposeConsents).every(
          purposeValue => expect(purposeValue).to.be.true
        )

        expect(vendorConsents).to.be.a('object')
        expect(Object.keys(vendorConsents).length).to.equal(
          TOTAL_VENDOR_CONSENTS
        )
        Object.values(vendorConsents).every(
          vendorValue => expect(vendorValue).to.be.true
        )

        done()
      })
      .catch(error => done(new Error(error)))
  })
})
