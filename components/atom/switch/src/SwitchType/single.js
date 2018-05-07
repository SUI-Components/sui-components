import React from 'react'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import {prefixClass, workClassNames} from './helpers'
import PropTypes from 'prop-types'

export const SingleSwitchTypeRender = (
  {
    name,
    label,
    labelOptionalText,
    size,
    type,
    disabled,
    isToggle,
    isFocus,
    focusSwitchCallback,
    blurSwitchCallback,
    toggleSwitchCallback
  }) => {
  return (
    <div
      className={workClassNames(size, type, 'singleType', isToggle, isFocus, disabled)}
      onClick={toggleSwitchCallback}>
      <div className={prefixClass('container')} tabIndex='0' onFocus={focusSwitchCallback} onBlur={blurSwitchCallback}>
        <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
        <div className={prefixClass('inputContainer')}>
          <div className={cx(prefixClass('circle'), {'sui-AtomSwitch--toggle': isToggle})} />
        </div>
      </div>
    </div>
  )
}

SingleSwitchTypeRender.displayName = 'SingleSwitchTypeRender'

SingleSwitchTypeRender.propTypes = {
  /**
   * Form element name
   */
  name: PropTypes.string,
  /**
   * The label itself. Proxy from label
   */
  label: PropTypes.string,
  /**
   * The optional label text. Proxy from label
   */
  labelOptionalText: PropTypes.string,
  /**
   * Size of switch: 'default', 'large'
   */
  size: PropTypes.oneOf(['default', 'large']),
  /**
   * Type of switch: 'toggle' (default), 'select', 'single'
   */
  type: PropTypes.oneOf(['toggle', 'select', 'single']),
  /**
   * Is Input disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Is component toggle
   */
  isToggle: PropTypes.bool,
  /**
   * Is component focus
   */
  isFocus: PropTypes.bool,
  /**
   * Callback on focus element
   */
  focusSwitchCallback: PropTypes.func,
  /**
   * Callback on toggle element
   */
  blurSwitchCallback: PropTypes.func,
  /**
   * Callback on toggle element
   */
  toggleSwitchCallback: PropTypes.func,
}
