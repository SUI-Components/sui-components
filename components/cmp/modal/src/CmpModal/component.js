import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

import {Consents} from '../Consents'

import {CLASS, I18N, STEPS} from '../settings'

const CmpModalAdvertisementStep = ({
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

  return (
    <Fragment>
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
    </Fragment>
  )
}

const CmpModalGeneralStep = ({i18n, onOpenAdsStep, privacyUrl}) => {
  return (
    <Fragment>
      <h2 className={`${CLASS}-title`}>{i18n['TITLE']}</h2>
      <p>{i18n['BODY']}</p>
      <div className={`${CLASS}-box`}>
        <h3 className={`${CLASS}-boxTitle`}>Cookies de sesión</h3>
        <p className={`${CLASS}-boxDescription`}>
          Cookies propias indispensables para que nuestro site funcione.
          Almacenamos información de navegación y preferencias de configuración.
        </p>
        <a className={`${CLASS}-boxLink`} href={privacyUrl}>
          {i18n['READ_MORE']}
        </a>
      </div>
      <div className={`${CLASS}-box`}>
        <h3 className={`${CLASS}-boxTitle`}>Cookies de analítica:</h3>
        <p className={`${CLASS}-boxDescription`}>
          Cookies propias o de terceros para realizar la medición de la
          actividad en el sitio para conocer el uso que hacen los usuarios de
          nuestros servicios y mejorarlos. Almacenan información de navegación
          dentro de nuestro sitio como información de origen del tráfico.
        </p>
        <a className={`${CLASS}-boxLink`} href={privacyUrl}>
          {i18n['READ_MORE']}
        </a>
      </div>
      <div className={`${CLASS}-box`}>
        <h3 className={`${CLASS}-boxTitle`}>Cookies de marketing propio</h3>
        <p className={`${CLASS}-boxDescription`}>
          Cookies propias o de terceros para realizar campañas de marketing
          propio para captar y retener tráfico en nuestro sitio. Almacenan
          información de navegación dentro o fuera de nuestro sitio.
        </p>
        <a className={`${CLASS}-boxLink`} href={privacyUrl}>
          {i18n['READ_MORE']}
        </a>
      </div>
      <div className={`${CLASS}-box`}>
        <h3 className={`${CLASS}-boxTitle`}>
          Cookies de publicidad segmentada
        </h3>
        <p className={`${CLASS}-boxDescription`}>
          Cookies propias o de terceros para ofrecer a nuestros partners de
          publicidad perfiles de audiencia segmentada. Almacenan información de
          navegación dentro o fuera de nuestro sitio, así como datos de
          localización o datos a carácter personales.
        </p>
        <a className={`${CLASS}-boxLink`} href="#" onClick={onOpenAdsStep}>
          {i18n['PERSONALIZE']}
        </a>
      </div>
    </Fragment>
  )
}

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
            <img
              alt="Schibsted Spain logo"
              className={`${CLASS}-logo`}
              src={logo}
            />
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
