/* eslint-disable */
import {useRef, useEffect} from 'react'

const useMouseHold = (onClickHandler, {interval, delay}) => {
  const delayedIntervalRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    return () => stopHold()
  }, [])

  const startHold = event => {
    if (delayedIntervalRef.current) return
    delayedIntervalRef.current = setTimeout(() => {
      if (intervalRef.current) return
      intervalRef.current = setInterval(() => {
        onClickHandler(event)
      }, interval)
    }, delay)
  }

  const stopHold = (event) => {
    if (delayedIntervalRef.current) {
      clearTimeout(delayedIntervalRef.current)
      delayedIntervalRef.current = null
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return {
    onClick: onClickHandler,
    onMouseDown: startHold,
    onMouseUp: stopHold,
    onMouseLeave: stopHold,
  }
}

export default useMouseHold