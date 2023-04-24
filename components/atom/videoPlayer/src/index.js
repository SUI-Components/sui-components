import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import useVideoPlayer from './hooks/useVideoPlayer.js'

const AtomVideoPlayer = forwardRef((props, forwardedRef) => {
  const [Component, {className, as: As = 'div', ...componentProps}] =
    useVideoPlayer(props)
  return (
    <As className={className} ref={forwardedRef}>
      <Component {...componentProps} />
    </As>
  )
})

AtomVideoPlayer.displayName = 'AtomVideoPlayer'
AtomVideoPlayer.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,
  // TODO: document
  src: PropTypes.string
}

export default AtomVideoPlayer
