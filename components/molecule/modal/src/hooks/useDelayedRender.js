import {useCallback, useRef, useState} from 'react'

const useDelayedRender = (isActive, {enterDelay = 0, onEnterDelayed, exitDelay = 0, onExitDelayed}) => {
  const [, forceRender] = useState()
  const isMounted = useRef(isActive)
  const isRendered = useRef(false)
  const renderTimer = useRef(null)
  const unmountTimer = useRef(null)
  const previousIsActive = useRef(isActive)

  const update = useCallback(() => {
    if (previousIsActive.current) {
      // Mount immediately
      isMounted.current = true
      if (unmountTimer.current) clearTimeout(unmountTimer.current)

      if (enterDelay <= 0) {
        // Render immediately
        isRendered.current = true
      } else {
        if (renderTimer.current) return null

        // Render after a delay
        renderTimer.current = setTimeout(() => {
          isRendered.current = true
          renderTimer.current = null
          forceRender({})
          typeof onEnterDelayed === 'function' && onEnterDelayed()
        }, enterDelay)
      }
    } else {
      // Immediately set to un-rendered
      isRendered.current = false

      if (exitDelay <= 0) {
        isMounted.current = false
      } else {
        if (unmountTimer.current) return null

        // Unmount after a delay
        unmountTimer.current = setTimeout(() => {
          isMounted.current = false
          unmountTimer.current = null
          forceRender({})
          typeof onExitDelayed === 'function' && onExitDelayed()
        }, exitDelay)
      }
    }
  }, [enterDelay, onEnterDelayed, exitDelay, onExitDelayed])

  // When the active prop changes, need to update
  if (isActive !== previousIsActive.current) {
    previousIsActive.current = isActive
    // We want to do this synchronously with the render, not in an effect
    // this way when isActive → true, isMounted → true in the same pass
    update()
  }

  return {
    isMounted: isMounted.current,
    isRendered: isRendered.current
  }
}

export default useDelayedRender
