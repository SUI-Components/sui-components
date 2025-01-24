import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const AtomKbd = forwardRef(({children, ...props}, forwardedRef) => {
  return <kbd className={BASE_CLASS}>{children}</kbd>
})

AtomKbd.displayName = 'AtomKbd'

AtomKbd.propTypes = {
  children: PropTypes.node
}

export default AtomKbd
