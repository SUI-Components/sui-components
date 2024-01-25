import {useRef} from 'react'

import PropTypes from 'prop-types'

import {CHECKBOX_SIZES, CHECKBOX_STATUS, className, pressedValue} from './config.js'

const CheckboxIcon = ({disabled, size, status, onClick, icon: SVGIcon, checked, indeterminate}) => {
  const buttonRef = useRef()
  if (!SVGIcon) return null
  return (
    <button
      ref={buttonRef}
      className={className({
        size,
        checked,
        disabled,
        indeterminate
      })}
      disabled={disabled}
      {...(Object.values(CHECKBOX_STATUS).includes(status) && {
        'data-status': status
      })}
      aria-pressed={pressedValue({checked, indeterminate})}
      type="button"
      onClick={onClick(buttonRef)}
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
  indeterminate: PropTypes.bool
}

export default CheckboxIcon
