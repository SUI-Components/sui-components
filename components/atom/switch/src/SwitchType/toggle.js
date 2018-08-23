import React from 'react'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import {suitClass, switchClassNames} from './helpers'
import PropTypes from 'prop-types'

export const ToggleSwitchTypeRender = ({
  disabled,
  isFocus,
  isClick,
  isToggle,
  label,
  labelLeft,
  labelOptionalText,
  labelRight,
  name,
  onBlur,
  onFocus,
  onClick,
  onKeyDown,
  onToggle,
  size,
  type
}) => {
  return (
    <div
      className={switchClassNames(
        size,
        type,
        'toggleType',
        isToggle,
        isFocus,
        isClick,
        disabled
      )}
    >
      <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
      <div
        className={cx(suitClass({element: 'container'}))}
        tabIndex="0"
        onFocus={onFocus}
        onClick={onClick}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      >
        <span
          className={cx(
            suitClass({element: 'text'}),
            suitClass({element: 'left'})
          )}
          onClick={() => onToggle(false)}
        >
          {labelLeft}
        </span>
        <div
          className={cx(suitClass({element: 'inputContainer'}))}
          onClick={() => onToggle()}
        >
          <div
            className={cx(suitClass({element: 'circle'}), {
              [suitClass({modifier: 'toggle'})]: isToggle
            })}
          />
        </div>
        <span
          className={cx(
            suitClass({element: 'text'}),
            suitClass({element: 'right'})
          )}
          onClick={() => onToggle(true)}
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
   * Is component click
   */
  isClick: PropTypes.bool,
  /**
   * Callback on focus element
   */
  onFocus: PropTypes.func,
  /**
   * Callback on click element
   */
  onClick: PropTypes.func,
  /**
   * Callback on blur element
   */
  onBlur: PropTypes.func,
  /**
   * Callback on toggle element
   */
  onToggle: PropTypes.func,
  /**
   * Callback on keydown on the switch
   */
  onKeyDown: PropTypes.func
}
