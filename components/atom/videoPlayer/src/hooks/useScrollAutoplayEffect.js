import {useEffect, useRef, useState} from 'react'

import {AUTOPLAY} from '../settings/index.js'

const useScrollAutoplayEffect = ({
  autoPlay,
  muted,
  ref,
  intersectionObserverConfiguration: {root, rootMargin, threshold}
}) => {
  /* eslint no-console: "off" */
  if (!muted && autoPlay !== AUTOPLAY.FALSE) console.error('Autoplay is only available when muted is true')

  const observer = useRef(null)
  const [autoPlayState, setAutoPlayState] = useState(autoPlay !== AUTOPLAY.ON_VIEWPORT ? autoPlay : false)

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      setAutoPlayState(entry.isIntersecting)
    })
  }

  useEffect(() => {
    if (autoPlay !== AUTOPLAY.ON_VIEWPORT) return

    if (observer.current === null)
      observer.current = new IntersectionObserver(callback, {
        root,
        rootMargin,
        threshold
      })

    if (ref.current !== null) observer.current.observe(ref.current)

    return () => {
      observer.current !== null && observer.current.disconnect()
    }
  }, [autoPlay, ref, root, rootMargin, threshold])

  return autoPlayState
}

export default useScrollAutoplayEffect
