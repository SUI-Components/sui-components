import {lazy} from 'react'

import {UNKNOWN} from '../settings/index.js'
import useDetectVideoType from './useDetectVideoType.js'
const useVideoPlayer = props => {
  const {src} = props
  const {detectVideoType} = useDetectVideoType()
  const videoType = detectVideoType(src)
  if (videoType === UNKNOWN) return ['p', {...props, children: 'Not supported media type'}]

  return [lazy(() => import(`../components/${videoType.PLAYER_COMPONENT}.js`)), props]
}

export default useVideoPlayer
