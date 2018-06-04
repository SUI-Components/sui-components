import React from 'react'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import {prefixClass, workClassNames} from './helpers'
import PropTypes from 'prop-types'

export const ToggleSwitchTypeRender = ({
  name,
  label,
  labelOptionalText,
  labelLeft,
  labelRight,
  size,
  type,
  disabled,
  isToggle,
  isFocus,
  focusSwitchCallback,
  blurSwitchCallback,
  toggleSwitchCallback,
  activateToggleCallback,
  deactivateToggleCallback
}) => {
  return (
    <div
      className={workClassNames(
        size,
        type,
        'toggleType',
        isToggle,
        isFocus,
        disabled
      )}
    >
      <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
      <div
        className={cx(prefixClass('container'))}
        tabIndex="0"
        onFocus={focusSwitchCallback}
        onBlur={blurSwitchCallback}
      >
        <span
          className={cx(prefixClass('text'), prefixClass('left'))}
          onClick={deactivateToggleCallback}
        >
          {labelLeft}
        </span>
        <div
          className={cx(prefixClass('inputContainer'))}
          onClick={toggleSwitchCallback}
        >
          <div
            className={cx(prefixClass('circle'), {
              'sui-AtomSwitch--toggle': isToggle
            })}
          />
        </div>
        <span
          className={cx(prefixClass('text'), prefixClass('right'))}
          onClick={activateToggleCallback}
        >
          {labelRight}
        </span>
      </div>
    </div>
  )
}

ToggleSwitchTypeRender.displayName = 'ToggleSwitchTypeRender'

ToggleSwitchTypeRender.propTypes = {
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
   * Left label to be printed
   */
  labelLeft: PropTypes.string,
  /**
   * Right label to be printed
   */
  labelRight: PropTypes.string,
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
   * Callback on blur element
   */
  blurSwitchCallback: PropTypes.func,
  /**
   * Callback on toggle element
   */
  toggleSwitchCallback: PropTypes.func,
  /**
   * Calback on activate toggle
   */
  activateToggleCallback: PropTypes.func,
  /**
   * Callback on deacrtivate toggle
   */
  deactivateToggleCallback: PropTypes.func
}
