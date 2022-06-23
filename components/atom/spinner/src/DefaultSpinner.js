import {forwardRef} from 'react'

import PropTypes from 'prop-types'

const DefaultSpinner = forwardRef(({isDelayed, loader}, forwardedRef) => {
  return <span ref={forwardedRef}>{!isDelayed ? loader : <noscript />}</span>
})

DefaultSpinner.propTypes = {
  isDelayed: PropTypes.bool,
  loader: PropTypes.object
}

DefaultSpinner.displayName = 'DefaultSpinner'

export default DefaultSpinner
