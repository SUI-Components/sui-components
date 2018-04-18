import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'

const BASE_CLASS = 'sui-AtomSwitch'

const SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large'
}

const TYPES = {
  TOGGLE: 'toggle',
  SELECT: 'select',
  SINGLE: 'single'
}

class AtomSwitch extends Component {
  constructor (props) {
    super(props)

    const {disabled} = props
    this.state = {
      toggle: false,
      isFocus: false,
      disabled
    }

    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('keydown', this.keyBindings.bind(this), true)
    }
  }

  keyBindings = (event) => {
    const {isFocus} = this.state
    if (!isFocus) {
      return
    }

    if (event.defaultPrevented) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSwitch()
      event.preventDefault()
    }
  }

  toggleSwitch = () => {
    const {disabled, toggle} = this.state
    const {onToggle} = this.props
    if (disabled) {
      return
    }
    onToggle(!toggle)
    this.setState({toggle: !toggle})
  }

  activateToggle = () => {
    const {disabled} = this.state
    if (disabled) {
      return
    }
    this.setState({toggle: true})
  }

  deactivateToggle = () => {
    const {disabled} = this.state
    if (disabled) {
      return
    }
    this.setState({toggle: false})
  }

  focusSwitch = () => {
    this.setState({isFocus: true})
  }

  focusOutSwitch = () => {
    this.setState({isFocus: false})
  }

  render () {
    return (this.props.type === TYPES.SINGLE)
      ? this.singleSwitchTypeRender()
      : this.toggleSwitchTypeRender()
  }

  toggleSwitchTypeRender = () =>
    <div className={cx(
      BASE_CLASS,
      'toggle-type',
      {
        active: (this.state.toggle || this.props.type === TYPES.SELECT),
        large: this.props.size === SIZES.LARGE,
        focus: this.state.isFocus,
        disabled: this.state.disabled
      })}>
      <AtomLabel name={this.props.name} text={this.props.label} optionalText={this.props.labelOptionalText} />
      <div className='container' tabIndex='0' onFocus={this.focusSwitch} onBlur={this.focusOutSwitch}>
        <span className={cx('text', 'left')} onClick={this.deactivateToggle}>{this.props.labelLeft}</span>
        <div className={'input-container'} onClick={this.toggleSwitch}>
          <div className={cx('circle', {toggle: this.state.toggle})} />
        </div>
        <span className={cx('text', 'right')} onClick={this.activateToggle}>{this.props.labelRight}</span>
      </div>
    </div>

  singleSwitchTypeRender = () =>
    <div className={cx(
      BASE_CLASS,
      'single-type',
      {
        active: (this.state.toggle || this.props.type === TYPES.SELECT),
        large: this.props.size === SIZES.LARGE,
        focus: this.state.isFocus,
        disabled: this.state.disabled
      })} onClick={this.toggleSwitch}>
      <div className='container' tabIndex='0' onFocus={this.focusSwitch} onBlur={this.focusOutSwitch}>
        <AtomLabel name={this.props.name} text={this.props.label} optionalText={this.props.labelOptionalText} />
        <div className='input-container'>
          <div className={cx('circle', {toggle: this.state.toggle})} />
        </div>
      </div>
    </div>
}

AtomSwitch.displayName = 'AtomSwitch'

// Remove these comments if you need
// AtomSwitch.contextTypes = {i18n: PropTypes.object}
AtomSwitch.propTypes = {
  /**
   * Size of switch: 'medium' (default), 'large'
   */
  size: PropTypes.oneOf([SIZES.MEDIUM, SIZES.LARGE]),
  /**
   * Type of switch: 'toggle' (default), 'select', 'single'
   */
  type: PropTypes.oneOf([TYPES.TOGGLE, TYPES.SELECT, TYPES.SINGLE]),
  /**
   * Is Input disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Left label to be printed
   */
  labelLeft: PropTypes.string,
  /**
   * Right label to be printed
   */
  labelRight: PropTypes.string,
  /**
   * Form element name
   */
  name: PropTypes.string.isRequired,
  /**
   * The label itself. Proxy from label
   */
  label: PropTypes.string.isRequired,
  /**
   * The optional label text. Proxy from label
   */
  labelOptionalText: PropTypes.string,
  /**
   * Callback to be called when switch. Flag whenever switch is active or not sent
   */
  onToggle: PropTypes.func
}
AtomSwitch.defaultProps = {
  size: SIZES.MEDIUM,
  disabled: false,
  labelLeft: 'Off',
  labelRight: 'On',
  type: TYPES.TOGGLE,
  onToggle: (toggle) => {}
}

export default AtomSwitch
