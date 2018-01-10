import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

function ButtonBasic ({
  disabled,
  icon,
  text,
  layout,
  onClick,
  size,
  type
}) {
  const className = cx(
    'sui-ButtonBasic',
    `sui-ButtonBasic--${size}`,
    `sui-ButtonBasic--${type}`,
    {
      [`sui-ButtonBasic--${layout}`]: layout
    }
  )

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}

ButtonBasic.displayName = 'ButtonBasic'

ButtonBasic.defaultProps = {
  size: 'medium',
  type: 'primary'
}

ButtonBasic.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  layout: PropTypes.oneOf(['full']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    ['primary', 'secondary', 'accent', 'ghost', 'flat']
  )
}

export default ButtonBasic
