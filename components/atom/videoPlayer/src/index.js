import {createRef, forwardRef, Suspense, useEffect, useRef, useState} from 'react'

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
  NO_OP,
  UNKNOWN
} from './settings/index.js'

const AtomVideoPlayer = forwardRef(
  (
    {
      autoPlay = AUTOPLAY_DEFAULT_VALUE,
      controls = true,
      fallbackComponent = null,
      fallbackWhileNotOnViewport = false,
      intersectionObserverConfiguration = INTERSECTION_OBSERVER_DEFAULT_CONFIGURATION,
      muted = false,
      onLoadVideo = NO_OP,
      playsInline = false,
      src = '',
      timeLimit,
      timeOffset,
      title,
      loop = false
    },
    forwardedRef = createRef()
  ) => {
    // SSR-safe: Only render on client-side to avoid Suspense issues
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])

    const [Component, props] = useVideoPlayer({
      autoPlay,
      controls,
      muted,
      onLoadVideo,
      playsInline,
      src,
      timeLimit,
      title,
      timeOffset,
      loop
    })

    const componentRef = useRef(null)
    const autoPlayState = useScrollAutoplayEffect({
      autoPlay,
      intersectionObserverConfiguration,
      muted,
      ref: componentRef
    })

    const needsToRenderFallbackComponent =
      fallbackWhileNotOnViewport === true && autoPlay === AUTOPLAY.ON_VIEWPORT && !autoPlayState

    // Don't render during SSR - only on client
    if (!isClient) {
      return (
        <div ref={componentRef} className={BASE_CLASS}>
          {fallbackComponent}
        </div>
      )
    }

    return (
      <div ref={componentRef} className={BASE_CLASS}>
        {needsToRenderFallbackComponent ? (
          fallbackComponent
        ) : (
          <Suspense fallback={fallbackComponent}>
            <Component
              {...{
                ...props,
                autoPlay: autoPlayState,
                ref: forwardedRef
              }}
            />
          </Suspense>
        )}
      </div>
    )
  }
)

AtomVideoPlayer.displayName = 'AtomVideoPlayer'

AtomVideoPlayer.propTypes = {
  autoPlay: PropTypes.oneOf(AUTOPLAY_OPTIONS),
  controls: PropTypes.bool,
  fallbackComponent: PropTypes.node,
  fallbackWhileNotOnViewport: PropTypes.bool,
  intersectionObserverConfiguration: PropTypes.shape({
    root: PropTypes.instanceOf(Element),
    rootMargin: PropTypes.string,
    threshold: PropTypes.number
  }),
  muted: PropTypes.bool,
  onLoadVideo: PropTypes.func,
  playsInline: PropTypes.bool,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  title: PropTypes.string,
  loop: PropTypes.bool
}

export default AtomVideoPlayer
export {AUTOPLAY, UNKNOWN, useDetectVideoType}
