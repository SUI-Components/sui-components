import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'
import PrimitiveLoadingIcon from '@s-ui/react-primitive-loading-icon'

import {COLORS, DESIGNS, SIZES} from '../config.js'
import {suitClass, switchClassNames} from './helpers.js'

const AtomSwitchToggle = forwardRef(
  (
    {
      id,
      disabled,
      isToggle,
      isLoading,
      label,
      labelLeft,
      iconLeft,
      iconRight,
      labelOptionalText,
      labelRight,
      color,
      name,
      onBlur,
      onFocus,
      toggleHandler,
      size,
      design,
      value,
      fullWidth,
      checked,
      ...props
    },
    ref
  ) => {
    const hasId = !!id
    return (
      <div
        className={switchClassNames({
          size,
          design: 'toggle',
          color,
          fullWidth
        })}
      >
        {label && (
          <AtomLabel
            {...{
              ...(hasId && {htmlFor: id})
            }}
            text={label}
            optionalText={labelOptionalText}
          />
        )}
        <div
          className={cx(suitClass({element: 'container'}), {
            [suitClass({
              element: 'container--fullWidth'
            })]: fullWidth
          })}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        >
          <span
            className={cx(suitClass({element: 'text'}), suitClass({element: 'left'}))}
            onClick={toggleHandler({checked: false})}
          >
            {labelLeft}
          </span>
          <button
            id={id}
            name={name}
            type="button"
            className={cx(suitClass({element: 'inputContainer'}), {
              [suitClass({
                element: 'inputContainer',
                modifier: `position-${checked ? 'right' : 'left'}`
              })]: checked
            })}
            role="switch"
            aria-checked={checked || design === DESIGNS.SELECT}
            aria-disabled={disabled}
            disabled={disabled}
            {...(!disabled && {tabIndex: 0})}
            onClick={toggleHandler({checked: !checked})}
          >
            {!isLoading ? <div className={cx(suitClass({element: 'icon-left'}))}>{iconLeft}</div> : null}
            <div className={cx(suitClass({element: 'circle'}))}>
              {isLoading ? (
                <div className={cx(suitClass({element: 'circleLoading'}))}>
                  <PrimitiveLoadingIcon />
                </div>
              ) : null}
            </div>
            {!isLoading ? <div className={cx(suitClass({element: 'icon-right'}))}>{iconRight}</div> : null}
          </button>
          <span
            className={cx(suitClass({element: 'text'}), suitClass({element: 'right'}))}
            onClick={toggleHandler({checked: true})}
          >
            {labelRight}
          </span>
        </div>
      </div>
    )
  }
)

AtomSwitchToggle.displayName = 'AtomSwitch.Toggle'

AtomSwitchToggle.propTypes = {
  /**
   * HTML id attribute
   */
  id: PropTypes.string,
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
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Color of switch: 'primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info'
   */
  color: PropTypes.oneOf(Object.values(COLORS)),
  /**
   * Type of switch: 'toggle' (default), 'select', 'single'
   */
  design: PropTypes.oneOf(Object.values(DESIGNS)),
  /**
   * Is Input disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Is Input readOnly?
   */
  readOnly: PropTypes.bool,
  /**
   * Is component toggle
   */
  isToggle: PropTypes.bool,
  /**
   * Callback on focus element
   */
  onFocus: PropTypes.func,
  /**
   * Callback on blur element
   */
  onBlur: PropTypes.func,
  /**
   * HighOrderFunction of the on toggle element Callback
   */
  toggleHandler: PropTypes.func,
  /**
   * Value for controlled component
   */
  value: PropTypes.bool,
  /**
   * Modifier: full width (100%)
   */
  fullWidth: PropTypes.bool,
  /** element node which appears inside the switch circle when it's in left position **/
  iconLeft: PropTypes.node,
  /** element node which appears inside the switch circle when it's in right position **/
  iconRight: PropTypes.node,
  /** element in right or left position (checked means right)**/
  checked: PropTypes.bool,
  /**
   * Is the switch loading
   */
  isLoading: PropTypes.bool
}

export default AtomSwitchToggle
