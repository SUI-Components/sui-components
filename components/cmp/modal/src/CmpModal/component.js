import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

import {Consents} from '../Consents'

import {CLASS} from '../settings'

export const CmpModal = ({
  consentKey,
  logo,
  onAccept,
  onCancel,
  onToggleAll,
  onToggleConsent,
  purposes,
  vendors,
  purposeConsents,
  vendorConsents
}) => {
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
        <section className={`${CLASS}-inner`}>
          <h2 className={`${CLASS}-title`}>
            Cookies propios o de terceros para publicidad segmentada
          </h2>
          <p>
            Nos importa mucho tu privacidad por esta razón te queremos dar a
            conocer las finalidades perseguidas por las cookies de publicidad
            personalizada además de con quién estamos compartiendo tus datos.
            Asimismo podrás definir las finalidades y los terceros con los que
            aceptas o no compartir tus datos de navegación, tus datos de
            localización y tus datos de carácter personal.<br />
            <br />Ten en cuenta que estas cookies van ligadas a tu sesión en el
            navegador por lo que si refrescas tus cookies, cambias de
            dispositivos o te conectas desde otro navegador, tendrás que volver
            a configurar tus preferencias.
          </p>
          <Consents
            consents={purposeConsents}
            key={`purposes-${consentKey}`}
            list={purposes}
            onToggleAll={onToggleAll}
            onToggleConsent={onToggleConsent}
            title="Autorizo:"
          />
          <Consents
            consents={vendorConsents}
            isVendor
            key={`vendors-${consentKey}`}
            list={vendors}
            onToggleAll={onToggleAll}
            onToggleConsent={onToggleConsent}
            title="Para los siguientes anunciantes y partners:"
          />
        </section>
        <footer className={`${CLASS}-footer`}>
          <Button onClick={onCancel} type="tertiary" size="small">
            Cancelar
          </Button>
          <Button onClick={onAccept} type="primary" size="large">
            Guardar y salir
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
  purposes: PropTypes.array,
  vendors: PropTypes.array,
  purposeConsents: PropTypes.object,
  vendorConsents: PropTypes.object
}
