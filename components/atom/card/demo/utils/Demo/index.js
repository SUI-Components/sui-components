import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = 'Demo'

const Demo = forwardRef(({className, children, elementType: ElementType = 'div', ...props}, forwardedRef) => {
  return (
    <ElementType className={cx(BASE_CLASS, className)} {...props} ref={forwardedRef}>
      <div className={cx(`${BASE_CLASS}-Container`)}>{children}</div>
    </ElementType>
  )
})

Demo.propTypes = {
  children: PropTypes.node,
  elementType: PropTypes.elementType,
  className: PropTypes.string
}

Demo.displayName = 'Demo'

export default Demo
