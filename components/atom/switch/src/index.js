import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomLabel from '../../label/src/index'

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

    const {size, disabled, labelLeft, labelRight, type, name, label, labelOptionalText, onToggle} = props
    this.onToggle = onToggle
    this.size = size
    this.type = type
    this.state = {
      toggle: false,
      disabled: disabled,
      isFocus: false,
      labelLeft: labelLeft,
      labelRight: labelRight,
      name: name,
      label: label,
      labelOptionalText: labelOptionalText
    }

    window.addEventListener('keydown', this.keyBindings.bind(this), true)
  }

  keyBindings = (event) => {
    if (!this.state.isFocus) {
      return
    }

    if (event.defaultPrevented) {
      return
    }

    switch (event.key) {
      case 'Enter':
        this.toggleSwitch()
        event.preventDefault()
        break
      case ' ':
        this.toggleSwitch()
        event.preventDefault()
        break
    }
  }

  toggleSwitch = function () {
    if (this.state.disabled) {
      return
    }
    if (this.onToggle) {
      this.onToggle(!this.state.toggle)
    }
    this.setState({toggle: !this.state.toggle})
  }.bind(this)

  activateToggle = function () {
    if (this.state.disabled) {
      return
    }
    this.setState({toggle: true})
  }.bind(this)

  deactivateToggle = function () {
    if (this.state.disabled) {
      return
    }
    this.setState({toggle: false})
  }.bind(this)

  focusSwitch = function () {
    this.setState({isFocus: true})
  }.bind(this)

  focusOutSwitch = function () {
    this.setState({isFocus: false})
  }.bind(this)

  render () {
    let divClass = (this.state.toggle || this.type === TYPES.SELECT) ? cx(BASE_CLASS, 'active') : cx(BASE_CLASS)
    divClass = (this.size === SIZES.LARGE) ? cx(divClass, 'large') : divClass
    divClass = (this.state.disabled) ? cx(divClass, 'disabled') : divClass
    divClass = (this.state.isFocus) ? cx(divClass, 'focus') : divClass
    const circleClass = (this.state.toggle) ? cx('circle', 'toggle') : cx('circle')

    return (this.type === TYPES.SINGLE)
      ? this.singleSwitchTypeRender(divClass, circleClass)
      : this.toggleSwitchTypeRender(divClass, circleClass)
  }

  toggleSwitchTypeRender = (divClass, circleClass) =>
    <div className={cx(divClass, 'toggle-type')}>
      <AtomLabel name={this.state.name} text={this.state.label} />
      <div className='container' tabIndex='0' onFocus={this.focusSwitch} onBlur={this.focusOutSwitch}>
        <span className={cx('text', 'left')} onClick={this.deactivateToggle}>{this.state.labelLeft}</span>
        <div className={'input-container'} onClick={this.toggleSwitch}>
          <div className={circleClass}></div>
        </div>
        <span className={cx('text', 'right')} onClick={this.activateToggle}>{this.state.labelRight}</span>
      </div>
    </div>

  singleSwitchTypeRender = (divClass, circleClass) =>
    <div className={cx(divClass, 'single-type')} onClick={this.toggleSwitch}>
      <div className='container' tabIndex='0' onFocus={this.focusSwitch} onBlur={this.focusOutSwitch}>
        <AtomLabel name={this.state.name} text={this.state.label} />
        <div className='input-container'>
          <div className={circleClass}></div>
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
  type: TYPES.TOGGLE
}

export default AtomSwitch