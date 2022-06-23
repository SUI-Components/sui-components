import {forwardRef} from 'react'

import PropTypes from 'prop-types'

const PolymorphicElement = forwardRef(
  ({as: Component = 'span', ...props}, forwardedRef) => {
    return <Component ref={forwardedRef} {...props} />
  }
)

PolymorphicElement.displayName = 'PolymorphicElement'
PolymorphicElement.propTypes = {
  as: PropTypes.elementType
}

export default PolymorphicElement
