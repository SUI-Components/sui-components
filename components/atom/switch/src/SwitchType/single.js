import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'

import {LABELS, TYPES} from '../config.js'
import {suitClass, switchClassNames} from './helpers.js'

const {RIGHT, LEFT} = LABELS

export const SingleSwitchTypeRender = forwardRef(
  (
    {
      disabled,
      isFitted,
      label,
      labelLeft,
      iconLeft,
      iconRight,
      labelOptionalText,
      labelRight,
      name,
      onBlur,
      onFocus,
      onToggle,
      size,
      type,
      value,
      fullWidth,
      isChecked
    },
    ref
  ) => {
    const defaultLabelLeft = labelLeft === LEFT
    const defaultLabelRight = labelRight === RIGHT

    const showLabelLeft = Boolean(label) || !defaultLabelLeft
    const showLabelRight = !label && !defaultLabelRight && defaultLabelLeft

    return (
      <div
        className={switchClassNames({
          size,
          classType: 'singleType',
          fullWidth
        })}
      >
        <div
          className={cx(suitClass({element: 'container'}), {
            [suitClass({
              element: 'container--isFitted'
            })]: isFitted,
            [suitClass({
              element: 'container--fullWidth'
            })]: fullWidth
          })}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        >
          {showLabelLeft && (
            <AtomLabel
              name={name}
              text={defaultLabelLeft ? label : labelLeft}
              optionalText={labelOptionalText}
            />
          )}
          <button
            type="button"
            className={cx(suitClass({element: 'inputContainer'}), {
              [suitClass({
                element: 'inputContainer',
                modifier: 'right'
              })]: isChecked
            })}
            role="switch"
            onClick={onToggle()}
            aria-checked={isChecked || type === TYPES.SELECT}
            aria-disabled={disabled}
            disabled={disabled}
            id={name}
            {...(!disabled && {tabIndex: 0})}
          >
            <div className={cx(suitClass({element: 'icon-left'}))}>
              {iconLeft}
            </div>
            <div className={cx(suitClass({element: 'circle'}))} />
            <div className={cx(suitClass({element: 'icon-right'}))}>
              {iconRight}
            </div>
          </button>
          {showLabelRight && (
            <AtomLabel
              name={name}
              text={labelRight}
              optionalText={labelOptionalText}
            />
          )}
        </div>
      </div>
    )
  }
)

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
   * The optional left label text. Proxy from label
   */
  labelLeft: PropTypes.string,
  /**
   * The optional label text. Proxy from label
   */
  labelOptionalText: PropTypes.string,
  /**
   * The optional right label text. Proxy from label
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
   * The padding of the container is set to 0
   */
  isFitted: PropTypes.bool,
  /**
   * Is component toggle
   */
  isToggle: PropTypes.bool,
  /**
   * Callback on focus element
   */
  onFocus: PropTypes.func,
  /**
   * Callback on toggle element
   */
  onBlur: PropTypes.func,
  /**
   * Callback on toggle element
   */
  onToggle: PropTypes.func,
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
  isChecked: PropTypes.bool
}
