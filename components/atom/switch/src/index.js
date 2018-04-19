import { Component } from 'react'
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
  constructor (props) {
    super(props)

    const {disabled} = props
    this.state = {
      toggle: false,
      isFocus: false,
      disabled
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.keyBindings.bind(this), true)
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
    const {toggle, isFocus, disabled} = this.state
    return (this.props.type === TYPES.SINGLE)
      ? SingleSwitchTypeRender(this.props, toggle, isFocus, disabled, this.focusSwitch, this.focusOutSwitch, this.toggleSwitch)
      : ToggleSwitchTypeRender(this.props, toggle, isFocus, disabled, this.focusSwitch, this.focusOutSwitch, this.activateToggle, this.deactivateToggle, this.toggleSwitch)
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
  type: TYPES.TOGGLE,
  onToggle: (toggle) => {}
}

export default AtomSwitch
