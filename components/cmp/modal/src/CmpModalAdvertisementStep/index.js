import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import {CLASS} from '../settings'
import {Consents} from '../Consents'

export const CmpModalAdvertisementStep = ({
  consentKey,
  i18n,
  onToggleAll,
  onToggleConsent,
  purposeConsents,
  purposes,
  vendorConsents,
  vendors
}) => {
  const enableAllLiteral = i18n['ENABLE_ALL']
  const disableAllLiteral = i18n['DISABLE_ALL']

  const commonProps = {
    disableAllLiteral,
    enableAllLiteral,
    onToggleAll,
    onToggleConsent
  }

  return (
    <Fragment>
      <h2 className={`${CLASS}-title`}>{i18n['ADVERTISEMENT_TITLE']}</h2>
      <p>{i18n['ADVERTISEMENT_BODY']}</p>
      <Consents
        {...commonProps}
        consents={purposeConsents}
        key={`purposes-${consentKey}`}
        list={purposes}
        title={i18n['AUTHORIZE']}
      />
      <Consents
        {...commonProps}
        consents={vendorConsents}
        isVendor
        key={`vendors-${consentKey}`}
        list={vendors}
        title={i18n['FOR_THE_NEXT_PARTNERS']}
      />
    </Fragment>
  )
}

CmpModalAdvertisementStep.propTypes = {
  consentKey: PropTypes.number,
  i18n: PropTypes.object,
  onToggleAll: PropTypes.func,
  onToggleConsent: PropTypes.func,
  purposeConsents: PropTypes.object,
  purposes: PropTypes.array,
  vendorConsents: PropTypes.object,
  vendors: PropTypes.array
}
