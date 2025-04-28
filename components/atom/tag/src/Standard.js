import {forwardRef} from 'react'

import cx from 'classnames'
import {emulateTab} from 'emulate-tab'
import PropTypes from 'prop-types'

import PrimitiveInjector from '@s-ui/react-primitive-injector'

import {onHandler} from './constants.js'

const StandardTag = forwardRef(
  (
    {
      className,
      as: As,
      closeIcon,
      icon,
      label,
      onClose = () => {},
      closeLabel,
      value,
      readOnly,
      disabled,
      title,
      ...props
    },
    forwardedRef
  ) => {
    const Component = As === undefined ? 'span' : As
    const handleKeyDown = event => {
      if (disabled || readOnly) return
      switch (event.key) {
        case 'Delete':
          onClose()
          emulateTab()
          emulateTab.backwards()
          break
        case 'Backspace':
          emulateTab.backwards()
          setTimeout(onClose(), 0)
          break
        default:
          break
      }
    }
    return (
      <PrimitiveInjector
        className={cx(className, closeIcon !== undefined && !(disabled || readOnly) && 'sui-AtomTag-hasClose')}
        {...(disabled && {'data-disabled': disabled})}
        {...(readOnly && !disabled && {'data-read-only': readOnly})}
      >
        <Component ref={forwardedRef} {...props}>
          {icon && <span className="sui-AtomTag-icon">{icon}</span>}
          {label ? (
            <span className="sui-AtomTag-label" title={title}>
              {label}
            </span>
          ) : null}
          {closeIcon && !(disabled || readOnly) && (
            <button
              className="sui-AtomTag-closeable"
              onClick={onHandler({disabled, readOnly}, onClose, {
                value,
                label
              })}
              onKeyDown={handleKeyDown}
              title={closeLabel}
              tabIndex={0}
            >
              <span className="sui-AtomTag-closeableIcon sui-AtomTag-secondary-icon">{closeIcon}</span>
            </button>
          )}
        </Component>
      </PrimitiveInjector>
    )
  }
)

StandardTag.propTypes = {
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.elementType,
  closeLabel: PropTypes.string
}

export default StandardTag
