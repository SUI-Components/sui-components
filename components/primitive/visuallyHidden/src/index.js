import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const PrimitiveVisuallyHidden = forwardRef(({children, as: Element = 'span', className, ...props}, forwardedRef) => {
  return (
    <Element className={cx(BASE_CLASS, className)} {...props} ref={forwardedRef}>
      {children}
    </Element>
  )
})

PrimitiveVisuallyHidden.displayName = 'AtomKbd'

PrimitiveVisuallyHidden.propTypes = {
  /**
   * Content to be non-visible but read by screen readers
   */
  children: PropTypes.node,
  /**
   * The elementType of the wrapper
   * **/
  as: PropTypes.elementType,
  /**
   * Classes to add to button (DEPRECATED)
   */
  className: PropTypes.string
}

export default PrimitiveVisuallyHidden
