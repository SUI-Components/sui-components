import PropTypes from 'prop-types'

function PolymorphicElement({as: Component = 'span', ...props}) {
  return <Component {...props} />
}

PolymorphicElement.displayName = 'PolymorphicElement'
PolymorphicElement.propTypes = {
  as: PropTypes.elementType
}

export default PolymorphicElement
