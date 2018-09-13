import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import IconClose from '@schibstedspain/sui-svgiconset/lib/Close'
import IconSuccess from '@schibstedspain/sui-svgiconset/lib/Linecheck'
import IconError from '@schibstedspain/sui-svgiconset/lib/Lineerror'
import IconInfo from '@schibstedspain/sui-svgiconset/lib/Lineinfo'
import IconWarning from '@schibstedspain/sui-svgiconset/lib/Linewarning'
import cx from 'classnames'

const CLASS = 'sui-MoleculeNotification'

const ICONS = {
  info: <IconInfo />,
  error: <IconError />,
  success: <IconSuccess />,
  system: <IconInfo />,
  warning: <IconWarning />
}

const AUTO_CLOSE_TIME = {
  short: 3000,
  medium: 6000,
  long: 9000,
  manual: null
}

const TRANSITION_DELAY = 1000 // ms
const BUTTONS_MAX = 3 // buttons

class MoleculeNotification extends Component {
  state = {
    show: this.props.show,
    delay: false
  }

  componentWillReceiveProps(nextProps) {
    this.state.show !== nextProps.show && this.toggleShow()
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {show, delay} = this.state
    return show !== nextState.show || delay !== nextState.delay
  }

  componentWillUnmount() {
    clearTimeout(this.autoCloseTimout)
    clearTimeout(this.transitionTimout)
  }

  toggleShow = () => {
    const show = !this.state.show
    const {onClose, effect, autoClose} = this.props

    effect
      ? this.setState({show, delay: true}, this.removeDelay(show))
      : this.setState({show})

    if (show) {
      const autoCloseTime = AUTO_CLOSE_TIME[autoClose]
      autoCloseTime && this.autoClose(autoCloseTime)
    } else {
      clearTimeout(this.autoCloseTimout)
      onClose()
    }
  }

  autoClose = time => {
    this.autoCloseTimout = setTimeout(() => {
      const {show} = this.state
      show && this.toggleShow()
    }, time)
  }

  removeDelay = show => {
    const delay = show ? 1 : TRANSITION_DELAY
    this.transitionTimout = setTimeout(() => {
      this.setState({delay: false})
    }, delay)
  }

  getButtons = () => {
    const {buttons} = this.props
    return buttons
      .slice(0, BUTTONS_MAX)
      .map((button, i) => <Button key={i} {...button} />)
  }

  render() {
    const {show, delay} = this.state
    const {
      type,
      buttons,
      icon,
      position,
      showCloseButton,
      effect,
      text
    } = this.props
    const wrapperClassName = cx(
      `${CLASS} ${CLASS}--${type} ${CLASS}--${position}`,
      {
        [`${CLASS}-effect--${position}`]: effect,
        [`${CLASS}-effect--hide`]: effect && delay
      }
    )

    if (!show && !delay) {
      return null
    }

    return (
      <div className={wrapperClassName}>
        <div className={`${CLASS}-content`}>
          <div className={`${CLASS}-iconLeft`}>
            <span className={`${CLASS}-icon`}>{icon || ICONS[type]}</span>
          </div>
          <div className={`${CLASS}-text`}>
            <span>{text}</span>
          </div>
          {showCloseButton && (
            <div className={`${CLASS}-iconClose`} onClick={this.toggleShow}>
              <span className={`${CLASS}-icon`}>
                <IconClose />
              </span>
            </div>
          )}
        </div>
        {buttons && (
          <div className={`${CLASS}-buttonsContainer`}>{this.getButtons()}</div>
        )}
      </div>
    )
  }
}

MoleculeNotification.displayName = 'MoleculeNotification'

MoleculeNotification.propTypes = {
  /**
   * Auto close time: 'short' (3s), 'medium' (6s), 'long' (9s), 'manual' (disabled)
   */
  autoClose: PropTypes.string,
  /**
   * Array of props to sui-atom-buttons. Max: 3 buttons
   */
  buttons: PropTypes.array,
  /**
   * Transition enabled
   */
  effect: PropTypes.bool,
  /**
   * Icon to be added on the left of the content
   */
  icon: PropTypes.node,
  /**
   * Positions: 'top', 'bottom', 'relative'
   */
  position: PropTypes.string,
  /**
   * Show / hide notification
   */
  show: PropTypes.bool,
  /**
   * Show / hide close button
   */
  showCloseButton: PropTypes.bool,
  /**
   * Content text
   */
  text: PropTypes.string,
  /**
   * Notification type: 'info', 'success', 'warning', 'error', 'system'.
   */
  type: PropTypes.string,
  /**
   * On close callback
   */
  onClose: PropTypes.func
}

MoleculeNotification.defaultProps = {
  autoClose: 'short',
  effect: true,
  onClose: () => {},
  position: 'relative',
  show: true,
  showCloseButton: true,
  type: 'info'
}

export default MoleculeNotification
