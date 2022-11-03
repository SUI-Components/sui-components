import PropTypes from 'prop-types'

const CarouselArrow = ({
  as: As = 'span',
  label,
  role,
  disabled,
  onClick,
  showArrows,
  className,
  ...props
}) => {
  if (!showArrows) return null
  return (
    <As
      aria-label={label}
      role={role}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    />
  )
}

CarouselArrow.propTypes = {
  as: PropTypes.element,
  label: PropTypes.string,
  role: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  showArrows: PropTypes.bool,
  className: PropTypes.string
}

export default CarouselArrow
