import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

import {Consents} from '../Consents'

import {CLASS, I18N} from '../settings'

export const CmpModal = ({
  consentKey,
  lang,
  logo,
  onAccept,
  onCancel,
  onToggleAll,
  onToggleConsent,
  purposeConsents,
  purposes,
  vendorConsents,
  vendors
}) => {
  const i18n = I18N[lang]
  console.log({
    purposes,
    vendors,
    purposeConsents,
    vendorConsents
  })

  const enableAllLiteral = i18n['ENABLE_ALL']
  const disableAllLiteral = i18n['DISABLE_ALL']

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
        <section className={`${CLASS}-inner`}>
          <h2 className={`${CLASS}-title`}>{i18n['ADVERTISEMENT_TITLE']}</h2>
          <p>{i18n['ADVERTISEMENT_BODY']}</p>
          <Consents
            consents={purposeConsents}
            disableAllLiteral={disableAllLiteral}
            enableAllLiteral={enableAllLiteral}
            key={`purposes-${consentKey}`}
            list={purposes}
            onToggleAll={onToggleAll}
            onToggleConsent={onToggleConsent}
            title={i18n['AUTHORIZE']}
          />
          <Consents
            consents={vendorConsents}
            disableAllLiteral={disableAllLiteral}
            enableAllLiteral={enableAllLiteral}
            isVendor
            key={`vendors-${consentKey}`}
            list={vendors}
            onToggleAll={onToggleAll}
            onToggleConsent={onToggleConsent}
            title={i18n['FOR_THE_NEXT_PARTNERS']}
          />
        </section>
        <footer className={`${CLASS}-footer`}>
          <Button onClick={onCancel} type="tertiary" size="small">
            {i18n['CANCEL']}
          </Button>
          <Button onClick={onAccept} type="primary" size="large">
            {i18n['SAVE_AND_EXIT']}
          </Button>
        </footer>
      </div>
    </div>
  )
}

CmpModal.propTypes = {
  consentKey: PropTypes.number,
  lang: PropTypes.string,
  logo: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  onToggleAll: PropTypes.func,
  onToggleConsent: PropTypes.func,
  purposeConsents: PropTypes.object,
  purposes: PropTypes.array,
  vendorConsents: PropTypes.object,
  vendors: PropTypes.array
}
