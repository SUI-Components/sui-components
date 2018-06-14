import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

import {Consents} from '../ConsentList'

import {CLASS} from '../settings'

export const CmpModal = ({logo, purposesAndVendors}) => {
  const {
    purposes,
    vendors,
    purposeConsents,
    vendorConsents
  } = purposesAndVendors

  console.log({
    purposes,
    vendors,
    purposeConsents,
    vendorConsents
  })

  return (
    <div className={CLASS}>
      <div className={`${CLASS}-content`}>
        <header className={`${CLASS}-header`}>
          <img
            alt="Schibsted Spain logo"
            className={`${CLASS}-logo`}
            src={logo}
          />
        </header>
        <Consents list={purposes} consents={purposeConsents} />
        <Consents isVendor list={vendors} consents={vendorConsents} />
        <Button onClick={() => {}} type="secondary">
          Guardar y salir
        </Button>
      </div>
    </div>
  )
}

CmpModal.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string,
  onAccept: PropTypes.func,
  purposesAndVendors: PropTypes.object
}
