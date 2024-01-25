import {useCallback, useEffect, useRef} from 'react'

const ONE_SECOND = 1000

const useTimeLimitCheck = ({playerRef, timeLimit, timeOffset}) => {
  const checkTimeLimitInterval = useRef(null)

  const stopTimeLimitInterval = useCallback(() => {
    if (checkTimeLimitInterval.current === null) return
    clearInterval(checkTimeLimitInterval.current)
    checkTimeLimitInterval.current = null
  }, [checkTimeLimitInterval])

  const startTimeLimitInterval = useCallback(() => {
    stopTimeLimitInterval()
    if (timeLimit === undefined) return

    checkTimeLimitInterval.current = setInterval(() => {
      const currentTime = playerRef.current?.currentTime
      const isPlaying = !playerRef.current?.paused
      const isTimeLimitReached = currentTime >= timeLimit && timeLimit !== undefined

      if (isPlaying && isTimeLimitReached) {
        playerRef.current?.pause()
        playerRef.current.currentTime = timeOffset || 0
      }
    }, ONE_SECOND)
  }, [checkTimeLimitInterval, playerRef, stopTimeLimitInterval, timeLimit, timeOffset])

  useEffect(() => {
    return () => {
      stopTimeLimitInterval()
    }
  }, [stopTimeLimitInterval])

  return {
    startTimeLimitInterval,
    stopTimeLimitInterval
  }
}

export default useTimeLimitCheck
