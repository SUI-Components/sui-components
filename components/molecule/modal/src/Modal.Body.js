import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_BODY = `${BASE_CLASS}-Body`

/** The header content of the modal. **/
const Body = forwardRef(({as: As = 'div', className, isInset, children, ...props}, forwardedRef) => {
  return (
    <As
      data-sui-component={Body.displayName}
      className={cx(BASE_CLASS_BODY, {[`${BASE_CLASS_BODY}-is-inset`]: isInset}, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </As>
  )
})

Body.displayName = 'MoleculeModal.Body'

Body.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** The component is inset, borderless */
  isInset: PropTypes.bool,

  /** The content of the modal body */
  children: PropTypes.node
}

export default Body
