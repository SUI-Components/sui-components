import {forwardRef, useRef} from 'react'

import PropTypes from 'prop-types'

import useScrollAutoplayEffect from './hooks/useScrollAutoplayEffect.js'
import useVideoPlayer from './hooks/useVideoPlayer.js'
import {
  AUTOPLAY_DEFAULT_VALUE,
  AUTOPLAY_OPTIONS,
  BASE_CLASS,
  INTERSECTION_OBSERVER_DEFAULT_CONFIGURATION
} from './settings/index.js'

const AtomVideoPlayer = forwardRef(
  (
    {
      autoPlay = AUTOPLAY_DEFAULT_VALUE,
      controls = true,
      intersectionObserverConfiguration = INTERSECTION_OBSERVER_DEFAULT_CONFIGURATION,
      muted = false,
      src = '',
      timeLimit,
      timeOffset
    },
    forwardedRef
  ) => {
    const [Component, props] = useVideoPlayer({
      autoPlay,
      controls,
      muted,
      src,
      timeLimit,
      timeOffset
    })

    const componentRef = useRef(null)
    const ref = forwardedRef || componentRef

    const autoPlayState = useScrollAutoplayEffect({
      autoPlay,
      intersectionObserverConfiguration,
      muted,
      ref
    })

    return (
      <div ref={ref} className={BASE_CLASS}>
        <Component
          {...{
            ...props,
            autoPlay: autoPlayState
          }}
        />
      </div>
    )
  }
)

AtomVideoPlayer.displayName = 'AtomVideoPlayer'

AtomVideoPlayer.propTypes = {
  autoPlay: PropTypes.oneOf(AUTOPLAY_OPTIONS),
  intersectionObserverConfiguration: PropTypes.shape({
    root: PropTypes.instanceOf(Element),
    rootMargin: PropTypes.string,
    threshold: PropTypes.number
  }),
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)])
}

export default AtomVideoPlayer
