import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const AtomKbd = forwardRef(({children, className, ...props}, forwardedRef) => {
  return (
    <kbd className={cx(BASE_CLASS, className)} {...props}>
      {children}
    </kbd>
  )
})

AtomKbd.displayName = 'AtomKbd'

AtomKbd.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default AtomKbd
