import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Notification from '@s-ui/react-molecule-notification'

export class CookiesNotification extends Component {
  render() {
    const {buttons} = this.props
    return (
      <Notification
        buttons={buttons}
        position="bottom"
        text="Utilizamos &quot;cookies&quot; propias y de terceros para elaborar información estadística y mostrarle publicidad personalizada a través del análisis de su navegación. Si continúa navegando acepta su uso."
        show
      />
    )
  }
}

CookiesNotification.propTypes = {
  buttons: PropTypes.array
}
