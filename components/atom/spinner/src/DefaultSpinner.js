import PropTypes from 'prop-types'
import {forwardRef} from 'react'

const DefaultSpinner = forwardRef(({delayed, loader}, forwardedRef) => {
  return <span ref={forwardedRef}>{!delayed ? loader : <noscript />}</span>
})

DefaultSpinner.propTypes = {
  delayed: PropTypes.bool,
  loader: PropTypes.object
}

DefaultSpinner.displayName = 'DefaultSpinner'

export default DefaultSpinner
