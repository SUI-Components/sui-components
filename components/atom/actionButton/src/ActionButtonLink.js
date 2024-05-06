import {forwardRef} from 'react'

import PropTypes from 'prop-types'

const ActionButtonLink = forwardRef(({children, ...props}, ref) => (
  <a {...props} ref={ref}>
    {children}
  </a>
))

ActionButtonLink.propTypes = {
  children: PropTypes.node
}

ActionButtonLink.displayName = 'ActionButtonLink'

export default ActionButtonLink
