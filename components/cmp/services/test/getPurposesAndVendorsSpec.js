import {getPurposesAndVendors} from '../src/useCases/index'
import {expect} from 'chai'

import '../../../../demo/__cmpMock'

describe('getPurposesAndVendors', () => {
  it('should return you a list of purposes and vendors with user consents', done => {
    getPurposesAndVendors
      .execute({retrieveConsentsFromCmp: true})
      .then(response => {
        const {purposeConsents, vendorConsents} = response

        expect(purposeConsents).to.be.a('object')
        expect(Object.keys(purposeConsents).length).to.equal(5)
        expect(Object.values(purposeConsents)).to.include(false)

        expect(vendorConsents).to.be.a('object')
        expect(Object.keys(vendorConsents).length).to.equal(435)
        expect(Object.values(vendorConsents)).to.include(false)

        done()
      })
  })

  it('Should return you a list of purposes and vendors by default with true value', done => {
    getPurposesAndVendors.execute().then(response => {
      const {purposeConsents, vendorConsents} = response

      expect(purposeConsents).to.be.a('object')
      expect(Object.keys(purposeConsents).length).to.equal(5)
      Object.values(purposeConsents).every(purposeValue =>
        expect(purposeValue).to.equal(true)
      )

      expect(vendorConsents).to.be.a('object')
      expect(Object.keys(vendorConsents).length).to.equal(68)
      Object.values(vendorConsents).every(vendorValue =>
        expect(vendorValue).to.equal(true)
      )

      done()
    })
  })
})
