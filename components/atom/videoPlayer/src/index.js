import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import useVideoPlayer from './hooks/useVideoPlayer.js'

const AtomVideoPlayer = forwardRef((props, forwardedRef) => {
  const [Component, componentProps] = useVideoPlayer({
    ref: forwardedRef,
    ...props
  })
  return <Component {...componentProps} />
})

AtomVideoPlayer.displayName = 'AtomVideoPlayer'
AtomVideoPlayer.propTypes = {
  src: PropTypes.string
}

export default AtomVideoPlayer
