import {forwardRef} from 'react'

import PropTypes from 'prop-types'
import cx from 'classnames'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_HEADER = `${BASE_CLASS}-Header`

/** The header content of the modal. **/
const Header = forwardRef(({as: As = 'header', className, children, ...props}, forwardedRef) => {
  return (
    <As
      data-sui-component={Header.displayName}
      className={cx(BASE_CLASS_HEADER, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </As>
  )
})

Header.displayName = 'MoleculeModal.Header'

Header.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** The content of the modal header */
  children: PropTypes.node
}

export default Header
