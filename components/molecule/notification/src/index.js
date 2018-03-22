import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import IconClose from '@schibstedspain/sui-svgiconset/lib/X'
import IconSuccess from '@schibstedspain/sui-svgiconset/lib/Circlecheck'
import IconError from '@schibstedspain/sui-svgiconset/lib/Circlex'
import IconInfo from '@schibstedspain/sui-svgiconset/lib/Info'
import IconWarning from '@schibstedspain/sui-svgiconset/lib/Warning'

const baseClass = 'sui-MoleculeNotification'
const ICONS = {
  info: <IconInfo svgClass={`${baseClass}-icon`} />,
  error: <IconError svgClass={`${baseClass}-icon`} />,
  success: <IconSuccess svgClass={`${baseClass}-icon`} />,
  system: <IconInfo svgClass={`${baseClass}-icon`} />,
  warning: <IconWarning svgClass={`${baseClass}-icon`} />
}

class MoleculeNotification extends Component {
  componentWillMount () {
    const { show } = this.props
    this.setState({ show })
  }

  handleClose = () => {
    const { show } = !this.state
    const { onClose } = this.props
    this.setState({ show })
    onClose && onClose()
  }

  render () {
    const { type, text, buttons, position } = this.props
    const { show } = this.state

    if (!show) { return null }

    return (
      <div className={`${baseClass} ${baseClass}-type--${type} ${baseClass}-position--${position}`}>
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
          <div className={`${baseClass}-buttonContainer`}>
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
  position: PropTypes.string,
  show: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
}

MoleculeNotification.defaultProps = {
  show: true,
  position: 'relative',
  type: 'info'
}

export default MoleculeNotification
