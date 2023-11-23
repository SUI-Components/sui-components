import {useCallback, useRef} from 'react'

const ONE_SECOND = 1000

const useTimeLimitCheck = ({timeLimit, timeOffset}) => {
  const checkTimeLimitInterval = useRef(null)

  const stopTimeLimitInterval = useCallback(
    player => {
      if (checkTimeLimitInterval.current === null) return
      clearInterval(checkTimeLimitInterval.current)
      checkTimeLimitInterval.current = null
    },
    [checkTimeLimitInterval]
  )

  const startTimeLimitInterval = useCallback(
    player => {
      stopTimeLimitInterval()
      if (timeLimit === undefined) return

      checkTimeLimitInterval.current = setInterval(() => {
        player.current.getCurrentTime().then(currentTime => {
          const isTimeLimitReached = currentTime >= timeLimit && timeLimit !== undefined

          if (isTimeLimitReached) {
            player.current.pause()
            player.current.setCurrentTime(timeOffset || 0)
          }
        })
      }, ONE_SECOND)
    },
    [checkTimeLimitInterval, stopTimeLimitInterval, timeLimit, timeOffset]
  )

  return {startTimeLimitInterval, stopTimeLimitInterval}
}

export default useTimeLimitCheck
