import {forwardRef} from 'react'

import PropTypes from 'prop-types'

const ButtonLink = forwardRef(({children, ...props}, ref) => (
  <a {...props} ref={ref}>
    {children}
  </a>
))

ButtonLink.displayName = 'ButtonLink'

ButtonLink.propTypes = {
  children: PropTypes.node
}

export default ButtonLink
