import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'
import PrimitiveInjector from '@s-ui/react-primitive-injector'
import PrimitiveLoadingIcon from '@s-ui/react-primitive-loading-icon'

import {COLORS, DESIGNS, SIZES} from '../config.js'
import {suitClass, switchClassNames} from './helpers.js'

const AtomSwitchSingle = forwardRef(
  (
    {
      id,
      name,
      className,
      disabled,
      readOnly,
      label,
      labelLeft,
      labelRight,
      labelOptionalText,
      iconLeft,
      iconRight,
      isLoading,
      onBlur,
      onFocus,
      toggleHandler,
      size,
      type,
      value,
      fullWidth,
      checked,
      color,
      ...props
    },
    ref
  ) => {
    const showLabelLeft = Boolean(label) || !!labelLeft
    const showLabelRight = !label && !!labelRight && !labelLeft
    const hasId = !!id
    return (
      <div
        className={switchClassNames({
          size,
          design: 'single',
          color,
          fullWidth
        })}
      >
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
          {!!showLabelLeft && (
            <PrimitiveInjector
              text={label || labelLeft}
              optionalText={labelOptionalText}
              {...{
                ...(hasId && {htmlFor: id}),
                ...(!hasId && {onClick: toggleHandler({checked: true})})
              }}
            >
              {!!label && typeof label === 'string' ? <AtomLabel>{label}</AtomLabel> : label}
              {!label && labelLeft && typeof labelLeft === 'string' ? <AtomLabel>{labelLeft}</AtomLabel> : labelLeft}
            </PrimitiveInjector>
          )}
          <button
            id={id}
            name={name}
            type="button"
            className={cx(
              suitClass({element: 'inputContainer'}),
              {
                [suitClass({
                  element: 'inputContainer',
                  modifier: `position-${checked ? 'right' : 'left'}`
                })]: checked
              },
              className
            )}
            role="switch"
            onClick={toggleHandler({checked: !checked})}
            aria-checked={checked || type === DESIGNS.SELECT}
            data-state={checked || type === DESIGNS.SELECT}
            disabled={disabled}
            {...{
              ...(readOnly && {'data-read-only': readOnly}),
              ...props
            }}
          >
            {!isLoading && iconLeft ? <span className={cx(suitClass({element: 'icon-left'}))}>{iconLeft}</span> : null}
            <div className={cx(suitClass({element: 'circle'}))}>
              {isLoading ? (
                <div className={cx(suitClass({element: 'circleLoading'}))}>
                  <PrimitiveLoadingIcon />
                </div>
              ) : null}
            </div>
            {!isLoading && iconRight ? (
              <span className={cx(suitClass({element: 'icon-right'}))}>{iconRight}</span>
            ) : null}
          </button>
          {!!showLabelRight && (
            <PrimitiveInjector
              text={label || labelRight}
              optionalText={labelOptionalText}
              {...(hasId && {htmlFor: id})}
              {...{
                ...(hasId && {htmlFor: id}),
                ...(!hasId && {onClick: toggleHandler({checked: true})})
              }}
            >
              {typeof labelRight === 'string' ? <AtomLabel>{labelRight}</AtomLabel> : labelRight}
            </PrimitiveInjector>
          )}
        </div>
      </div>
    )
  }
)

AtomSwitchSingle.displayName = 'AtomSwitch.Single'

AtomSwitchSingle.propTypes = {
  /**
   * Id of the switch
   */
  id: PropTypes.string,

  /**
   * Form element name
   **/
  name: PropTypes.string,

  /**
   * Additional classes
   */
  className: PropTypes.string,
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
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Type of switch: 'toggle' (default), 'select', 'single'
   */
  type: PropTypes.oneOf(['toggle', 'select', 'single']),
  /**
   * Is Input disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Is Switch readOnly?
   */
  readOnly: PropTypes.bool,
  /**
   * The padding of the container is set to 0
   */
  isFitted: PropTypes.bool,
  /**
   * Is component toggle
   */
  isToggle: PropTypes.bool,
  /**
   * Is the switch loading
   */
  isLoading: PropTypes.bool,
  /**
   * Callback on focus element
   */
  onFocus: PropTypes.func,
  /**
   * Callback on toggle element
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
   * Color of the switch: 'primary', 'accent', 'success', 'alert', 'error', 'neutral', 'surface'
   */
  color: PropTypes.oneOf(Object.values(COLORS))
}

export default AtomSwitchSingle
