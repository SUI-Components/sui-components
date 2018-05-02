import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ToggleSwitchTypeRender} from './SwitchType/toggle'
import {SingleSwitchTypeRender} from './SwitchType/single'

export const BASE_CLASS = 'sui-AtomSwitch'

export const SIZES = {
  DEFAULT: 'default',
  LARGE: 'large'
}

export const TYPES = {
  TOGGLE: 'toggle',
  SELECT: 'select',
  SINGLE: 'single'
}

class AtomSwitch extends Component {
  state = {
    toggle: false,
    isFocus: false
  }

  constructor (props) {
    super(props)

    this.executeIfEnabledFocusSwitch = this.executeIfEnabled(this.focusSwitch)
    this.executeIfEnabledFocusOutSwitch = this.executeIfEnabled(this.focusOutSwitch)
    this.executeIfEnabledToggleSwitch = this.executeIfEnabled(this.toggleSwitch)
    this.executeIfEnabledActivateSwitch = this.executeIfEnabled(this.activateToggle)
    this.executeIfEnabledDeactivateSwitch = this.executeIfEnabled(this.deactivateToggle)
  }

  componentDidMount () {
    window.addEventListener('keydown', this.keyBindings.bind(this), true)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyBindings.bind(this), true)
  }

  keyBindings = (event) => {
    const {isFocus} = this.state
    if (!isFocus || event.defaultPrevented) {
      return
    }
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSwitch()
      event.preventDefault()
    }
  }

  toggleSwitch = () => {
    const {toggle} = this.state
    const {onToggle} = this.props
    onToggle(!toggle)
    this.setState({toggle: !toggle})
  }

  activateToggle = () => {
    this.setState({toggle: true})
  }

  deactivateToggle = () => {
    this.setState({toggle: false})
  }

  executeIfEnabled = (func) => () => {
    const {disabled} = this.props
    !disabled && func()
  }

  focusSwitch = () => {
    this.setState({isFocus: true})
  }

  focusOutSwitch = () => {
    this.setState({isFocus: false})
  }

  render () {
    const {toggle, isFocus} = this.state

    return (this.props.type === TYPES.SINGLE)
      ? (
        <SingleSwitchTypeRender
          {...this.props}
          isToggle={toggle}
          isFocus={isFocus}
          focusSwitchCallback={this.executeIfEnabledFocusSwitch}
          blurSwitchCallback={this.executeIfEnabledFocusOutSwitch}
          toggleSwitchCallback={this.executeIfEnabledToggleSwitch}
        />)
      : (
        <ToggleSwitchTypeRender
          {...this.props}
          isToggle={toggle}
          isFocus={isFocus}
          focusSwitchCallback={this.executeIfEnabledFocusSwitch}
          blurSwitchCallback={this.executeIfEnabledFocusOutSwitch}
          toggleSwitchCallback={this.executeIfEnabledToggleSwitch}
          activateToggleCallback={this.executeIfEnabledActivateSwitch}
          deactivateToggleCallback={this.executeIfEnabledDeactivateSwitch}
        />)
  }
}

AtomSwitch.displayName = 'AtomSwitch'

AtomSwitch.propTypes = {
  /**
   * Size of switch: 'default', 'large'
   */
  size: PropTypes.oneOf([SIZES.DEFAULT, SIZES.LARGE]),
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
  onToggle: PropTypes.func.isRequired
}

AtomSwitch.defaultProps = {
  size: SIZES.DEFAULT,
  disabled: false,
  labelLeft: 'Off',
  labelRight: 'On',
  type: TYPES.TOGGLE
}

export default AtomSwitch
