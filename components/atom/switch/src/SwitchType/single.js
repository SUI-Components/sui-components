import {forwardRef} from 'react'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import {suitClass, switchClassNames} from './helpers'
import PropTypes from 'prop-types'
import {LABELS} from '../config'
const {RIGHT, LEFT} = LABELS

export const SingleSwitchTypeRender = forwardRef(
  (
    {
      disabled,
      isDisabledPadding,
      isClick,
      isFocus,
      isToggle,
      label,
      labelLeft,
      labelOptionalText,
      labelRight,
      name,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      onToggle,
      size,
      type,
      value
    },
    ref
  ) => {
    const isActive = value !== undefined ? value : isToggle

    const defaultLabelLeft = labelLeft === LEFT
    const defaultLabelRight = labelRight === RIGHT

    const showLabelLeft = Boolean(label) || !defaultLabelLeft
    const showLabelRight = !label && !defaultLabelRight && defaultLabelLeft

    return (
      <div
        className={switchClassNames(
          size,
          type,
          'singleType',
          isActive,
          isFocus,
          isClick,
          disabled
        )}
        onClick={() => onToggle()}
      >
        <div
          className={cx(suitClass({element: 'container'}), {
            [suitClass({
              element: 'container--isisDisabledPadding'
            })]: isDisabledPadding
          })}
          tabIndex="0"
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onClick={onClick}
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
          <div className={suitClass({element: 'inputContainer'})}>
            <div
              className={cx(suitClass({element: 'circle'}), {
                [suitClass({modifier: 'toggle'})]: isActive
              })}
            />
          </div>
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
  isDisabledPadding: PropTypes.bool,
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
   * Callback on toggle element
   */
  onBlur: PropTypes.func,
  /**
   * Callback on toggle element
   */
  onToggle: PropTypes.func,
  /**
   * Callback on keydown on the switch
   */
  onKeyDown: PropTypes.func,
  /**
   * Value for controlled component
   */
  value: PropTypes.bool
}
