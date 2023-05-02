import {useCallback, useEffect, useRef} from 'react'

import Player from '@vimeo/player'

const ONE_SECOND = 1000

const useTimeLimitCheck = ({playerRef, timeLimit, timeOffset}) => {
  const checkTimeLimitInterval = useRef(null)
  const player = useRef(null)

  const stopTimeLimitInterval = useCallback(() => {
    if (checkTimeLimitInterval.current === null) return
    clearInterval(checkTimeLimitInterval.current)
    checkTimeLimitInterval.current = null
  }, [checkTimeLimitInterval])

  const startTimeLimitInterval = useCallback(() => {
    stopTimeLimitInterval()
    if (timeLimit === undefined) return

    checkTimeLimitInterval.current = setInterval(() => {
      player.current.getCurrentTime().then(currentTime => {
        const isTimeLimitReached =
          currentTime >= timeLimit && timeLimit !== undefined

        if (isTimeLimitReached) {
          player.current.pause()
          player.current.setCurrentTime(timeOffset || 0)
        }
      })
    }, ONE_SECOND)
  }, [
    checkTimeLimitInterval,
    player,
    stopTimeLimitInterval,
    timeLimit,
    timeOffset
  ])

  useEffect(() => {
    player.current = new Player(playerRef.current)
    player.current.on('play', () => startTimeLimitInterval())
    player.current.on('pause', () => stopTimeLimitInterval())

    return () => {
      stopTimeLimitInterval()
      player.current.destroy()
    }
  }, [playerRef, startTimeLimitInterval, stopTimeLimitInterval])
}

export default useTimeLimitCheck
