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

const AUTO_CLOSE_TIME = {
  s: 3000,
  m: 6000,
  l: 9000,
  manual: null
}

const TRANSITION_DELAY = 1000 // ms

class MoleculeNotification extends Component {
  state = {
    show: this.props.show,
    delay: false
  }

  componentWillReceiveProps (nextProps) {
    (this.state.show !== nextProps.show) && this.toggleShow()
  }

  shouldComponentUpdate (nextProps, nextState) {
    const { show, delay } = this.state
    return (show !== nextState.show) || (delay !== nextState.delay)
  }

  toggleShow = () => {
    const show = !this.state.show
    const { onClose, effect, autoClose } = this.props

    effect
      ? this.setState({ show, delay: true }, this.removeDelay(show))
      : this.setState({ show })

    if (show) {
      const autoCloseTime = AUTO_CLOSE_TIME[autoClose]
      autoCloseTime && this.autoClose(autoCloseTime)
    } else {
      clearTimeout(this.autoCloseTimout)
      onClose && onClose()
    }
  }

  autoClose = (time) => {
    this.autoCloseTimout = setTimeout(() => {
      const { show } = this.state
      show && this.toggleShow()
    }, time)
  }

  removeDelay = (show) => {
    const delay = show ? 1 : TRANSITION_DELAY
    setTimeout(() => {
      this.setState({ delay: false })
    }, delay)
  }

  render () {
    const { show, delay } = this.state
    const { type, text, buttons, position, effect } = this.props
    const wrapperClassName = cx(`${baseClass} ${baseClass}-type--${type} ${baseClass}-position--${position}`, {
      [`${baseClass}-effect--${position}`]: effect,
      [`${baseClass}-effect--hide`]: (effect && delay),
    })

    if (!show && !delay) { return null }

    return (
      <div className={wrapperClassName}>
        <div className={`${baseClass}-content`}>
          <div className={`${baseClass}-iconLeft`}>
            { ICONS[type] }
          </div>
          <div className={`${baseClass}-text`}>
            <span>{text}</span>
          </div>
          <div className={`${baseClass}-close`} onClick={this.toggleShow}>
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
  autoClose: PropTypes.string,
  buttons: PropTypes.array,
  effect: PropTypes.bool,
  position: PropTypes.string,
  show: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
}

MoleculeNotification.defaultProps = {
  autoClose: 's',
  effect: true,
  position: 'relative',
  show: true,
  showCloseButton: true,
  type: 'info'
}

export default MoleculeNotification
