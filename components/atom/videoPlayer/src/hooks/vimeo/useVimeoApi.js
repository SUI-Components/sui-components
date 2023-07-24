import {useEffect, useRef} from 'react'

import Player from '@vimeo/player'

const useVimeoApi = ({onPlay, onPause, onLoad, onCleanEffect, playerRef}) => {
  const player = useRef(null)

  useEffect(() => {
    player.current = new Player(playerRef.current)
    player.current.on('play', () => onPlay(player))
    player.current.on('pause', () => onPause(player))
    player.current.on('loaded', () => onLoad(player))

    return () => {
      onCleanEffect(player)
      player.current.destroy()
      player.current = null
    }
  }, [playerRef, onPlay, onPause, onLoad, onCleanEffect])
}

export default useVimeoApi
