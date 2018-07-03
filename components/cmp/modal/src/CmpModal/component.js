import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

import {CmpModalAdvertisementStep} from '../CmpModalAdvertisementStep'
import {CmpModalGeneralStep} from '../CmpModalGeneralStep'

import {CLASS, I18N, STEPS} from '../settings'

export class CmpModal extends Component {
  render() {
    const {
      consentKey,
      lang,
      fetchingPurposes,
      logo,
      onAccept,
      onBack,
      onOpenAdsStep,
      onToggleAll,
      onToggleConsent,
      privacyUrl,
      purposeConsents,
      purposes,
      step,
      vendorConsents,
      vendors
    } = this.props

    const i18n = I18N[lang]

    return (
      <div className={CLASS}>
        <div className={`${CLASS}-content`}>
          <header className={`${CLASS}-header`}>
            <img className={`${CLASS}-logo`} src={logo} />
          </header>
          <section className={`${CLASS}-inner`}>
            {step === STEPS.GENERAL && (
              <CmpModalGeneralStep
                i18n={i18n}
                onOpenAdsStep={onOpenAdsStep}
                privacyUrl={privacyUrl}
              />
            )}
            {step === STEPS.ADVERTISEMENT && (
              <CmpModalAdvertisementStep
                consentKey={consentKey}
                i18n={i18n}
                onToggleAll={onToggleAll}
                onToggleConsent={onToggleConsent}
                purposeConsents={purposeConsents}
                purposes={purposes}
                vendorConsents={vendorConsents}
                vendors={vendors}
              />
            )}
          </section>
          <footer className={`${CLASS}-footer`}>
            {step === STEPS.ADVERTISEMENT && (
              <Button onClick={onBack} type="tertiary" size="small">
                {i18n['BACK']}
              </Button>
            )}

            <Button
              disabled={fetchingPurposes}
              onClick={onAccept}
              type="primary"
              size="large"
            >
              {i18n['ACCEPT']}
            </Button>
          </footer>
        </div>
      </div>
    )
  }
}

CmpModal.propTypes = {
  consentKey: PropTypes.number,
  lang: PropTypes.string,
  logo: PropTypes.string,
  fetchingPurposes: PropTypes.bool,
  onAccept: PropTypes.func,
  onBack: PropTypes.func,
  onOpenAdsStep: PropTypes.func,
  onToggleAll: PropTypes.func,
  onToggleConsent: PropTypes.func,
  privacyUrl: PropTypes.string,
  purposeConsents: PropTypes.object,
  purposes: PropTypes.array,
  step: PropTypes.number,
  vendorConsents: PropTypes.object,
  vendors: PropTypes.array
}
