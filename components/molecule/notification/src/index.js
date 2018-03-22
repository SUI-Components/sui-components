import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import IconClose from '@schibstedspain/sui-svgiconset/lib/X'
import IconSuccess from '@schibstedspain/sui-svgiconset/lib/Circlecheck'
import IconError from '@schibstedspain/sui-svgiconset/lib/Circlex'
import IconInfo from '@schibstedspain/sui-svgiconset/lib/Info'
import IconWarning from '@schibstedspain/sui-svgiconset/lib/Warning'
import cx from 'classnames'

const baseClass = 'sui-MoleculeNotification'
const ICONS = {
  info: <IconInfo svgClass={`${baseClass}-icon`} />,
  error: <IconError svgClass={`${baseClass}-icon`} />,
  success: <IconSuccess svgClass={`${baseClass}-icon`} />,
  system: <IconInfo svgClass={`${baseClass}-icon`} />,
  warning: <IconWarning svgClass={`${baseClass}-icon`} />
}

class MoleculeNotification extends Component {
  handleClose = () => {
    const { onClose } = this.props
    onClose && onClose()
  }

  render () {
    const { type, text, buttons, position, effect = {} } = this.props
    const wrapperClassName = cx(`${baseClass} ${baseClass}-type--${type} ${baseClass}-position--${position}`, {
      [`${baseClass}-effect--${effect.type}`]: (effect && effect.type && !effect.show),
    })

    return (
      <div className={wrapperClassName}>
        <div className={`${baseClass}-content`}>
          <div className={`${baseClass}-iconLeft`}>
            { ICONS[type] }
          </div>
          <div className={`${baseClass}-text`}>
            <span>{text}</span>
          </div>
          <div className={`${baseClass}-close`} onClick={this.handleClose}>
            <IconClose svgClass={`${baseClass}-icon`} />
          </div>
        </div>
        {
          buttons &&
          <div className={`${baseClass}-buttonsContainer`}>
            {buttons && buttons.map((button, i) => <Button key={i} {...button} />)}
          </div>
        }
      </div>
    )
  }
}

MoleculeNotification.displayName = 'MoleculeNotification'

MoleculeNotification.propTypes = {
  buttons: PropTypes.array,
  effect: PropTypes.object,
  position: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
}

MoleculeNotification.defaultProps = {
  position: 'relative',
  type: 'info'
}

export default MoleculeNotification
