import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Notification from '@s-ui/react-molecule-notification'

import {CLASS} from '../settings'

export class CmpBanner extends Component {
  render() {
    const {buttons} = this.props
    return (
      <div className={CLASS}>
        <Notification
          buttons={buttons}
          position="bottom"
          text={
            <p className={`${CLASS}-text`}>
              En Schibsted Classified Media Spain, S.L.U utilizamos cookies
              propias y de terceros para prestar el servicio solicitado,
              elaborar estadísticas, fomentar el tráfico en la web y mostrarte
              publicidad personalizada en base a tus datos de navegación o
              elaborando perfiles publicitarios en función de los datos que
              recojamos sobre ti, los cuales podemos compartir con terceros. Al
              clicar en “Aceptar”, aceptas su uso. Puedes configurar o rechazar
              las cookies clicando en cambiar configuración.
            </p>
          }
          show
        />
      </div>
    )
  }
}

CmpBanner.propTypes = {
  buttons: PropTypes.array
}
