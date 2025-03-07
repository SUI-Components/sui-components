import {useRef} from 'react'

import PropTypes from 'prop-types'

import {CHECKBOX_SIZES, CHECKBOX_STATUS, className, pressedValue} from './config.js'

const CheckboxIcon = ({
  disabled,
  size,
  status,
  onClick,
  icon: SVGIcon,
  checked,
  className: classNameProp,
  indeterminate,
  isNative,
  ...props
}) => {
  const buttonRef = useRef()
  if (!SVGIcon) return null
  const handleKeydown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
    }
  }
  return (
    <button
      ref={buttonRef}
      type="button"
      className={className({
        size,
        checked,
        disabled,
        indeterminate,
        className: classNameProp
      })}
      onClick={onClick(buttonRef)}
      onKeyDown={handleKeydown}
      disabled={disabled}
      {...(Object.values(CHECKBOX_STATUS).includes(status) && {
        'data-status': status
      })}
      aria-pressed={pressedValue({checked, indeterminate})}
      aria-hidden={isNative}
      {...props}
    >
      <SVGIcon size={size} />
    </button>
  )
}

CheckboxIcon.displayName = 'CheckboxIcon'
CheckboxIcon.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES)),
  status: PropTypes.oneOf(Object.values(CHECKBOX_STATUS)),
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  isNative: PropTypes.bool,
  className: PropTypes.string
}

export default CheckboxIcon
