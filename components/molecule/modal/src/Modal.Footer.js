import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_FOOTER = `${BASE_CLASS}-Footer`

/** The body content of the modal. **/
const Footer = forwardRef(({as: As = 'footer', className, children, ...props}, forwardedRef) => {
  return (
    <As
      data-sui-component={Footer.displayName}
      className={cx(BASE_CLASS_FOOTER, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </As>
  )
})

Footer.displayName = 'MoleculeModal.Footer'

Footer.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** The content of the modal footer */
  children: PropTypes.node
}

export default Footer
