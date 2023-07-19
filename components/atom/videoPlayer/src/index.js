import {forwardRef, Suspense, useRef} from 'react'

import PropTypes from 'prop-types'

import useDetectVideoType from './hooks/useDetectVideoType.js'
import useScrollAutoplayEffect from './hooks/useScrollAutoplayEffect.js'
import useVideoPlayer from './hooks/useVideoPlayer.js'
import {
  AUTOPLAY,
  AUTOPLAY_DEFAULT_VALUE,
  AUTOPLAY_OPTIONS,
  BASE_CLASS,
  INTERSECTION_OBSERVER_DEFAULT_CONFIGURATION,
  UNKNOWN
} from './settings/index.js'

const AtomVideoPlayer = forwardRef(
  (
    {
      autoPlay = AUTOPLAY_DEFAULT_VALUE,
      controls = true,
      fallbackComponent = null,
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
        <Suspense fallback={fallbackComponent}>
          <Component
            {...{
              ...props,
              autoPlay: autoPlayState
            }}
          />
        </Suspense>
      </div>
    )
  }
)

AtomVideoPlayer.displayName = 'AtomVideoPlayer'

AtomVideoPlayer.propTypes = {
  autoPlay: PropTypes.oneOf(AUTOPLAY_OPTIONS),
  controls: PropTypes.bool,
  fallbackComponent: PropTypes.node,
  intersectionObserverConfiguration: PropTypes.shape({
    root: PropTypes.instanceOf(Element),
    rootMargin: PropTypes.string,
    threshold: PropTypes.number
  }),
  muted: PropTypes.bool,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)]),
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number
}

export default AtomVideoPlayer
export {AUTOPLAY, UNKNOWN, useDetectVideoType}
