import {lazy} from 'react'

import {UNKNOWN} from '../settings/index.js'
import useDetectVideoType from './useDetectVideoType.js'

// Static imports for Vite compatibility (instead of dynamic template strings)
const HLSPlayer = lazy(() => import('../components/HLSPlayer.js'))
const NativePlayer = lazy(() => import('../components/NativePlayer.js'))
const VimeoPlayer = lazy(() => import('../components/VimeoPlayer.js'))
const YouTubePlayer = lazy(() => import('../components/YouTubePlayer.js'))

// Map player component names to actual components
const PLAYER_COMPONENTS = {
  HLSPlayer,
  NativePlayer,
  VimeoPlayer,
  YouTubePlayer
}

const useVideoPlayer = props => {
  const {src} = props
  const {detectVideoType} = useDetectVideoType()
  const videoType = detectVideoType(src)

  if (videoType === UNKNOWN) {
    return ['p', {...props, children: 'Not supported media type'}]
  }

  // Get the component from the map instead of using dynamic import
  const Component = PLAYER_COMPONENTS[videoType.PLAYER_COMPONENT]

  if (!Component) {
    console.error(`[useVideoPlayer] Unknown player component: ${videoType.PLAYER_COMPONENT}`)

    return ['p', {...props, children: 'Not supported media type'}]
  }

  return [Component, props]
}

export default useVideoPlayer
