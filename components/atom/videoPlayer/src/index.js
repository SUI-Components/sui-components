import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useVideoPlayer from './hooks/useVideoPlayer.js'
import {BASE_CLASS} from './settings.js'

const AtomVideoPlayer = forwardRef(({src = ''}, forwardedRef) => {
  const [Component, props] = useVideoPlayer({src})
  return (
    <div ref={forwardedRef} className={BASE_CLASS}>
      <Component {...props} />
    </div>
  )
})

AtomVideoPlayer.displayName = 'AtomVideoPlayer'

AtomVideoPlayer.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)])
}

export default AtomVideoPlayer
