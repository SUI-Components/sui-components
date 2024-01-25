import PropTypes from 'prop-types'

const CarouselArrow = ({label, role, disabled, onClick, hasArrows, className, children, ...props}) => {
  if (!hasArrows) return null
  return (
    <button type="button" aria-label={label} className={className} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

CarouselArrow.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  role: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  hasArrows: PropTypes.bool,
  className: PropTypes.string
}

export default CarouselArrow
