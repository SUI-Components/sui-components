import {UNKNOWN} from '../settings/index.js'
import useDetectVideoType from './useDetectVideoType.js'
const useVideoPlayer = props => {
  const {src} = props
  const {detectVideoType} = useDetectVideoType()
  const videoType = detectVideoType(src)
  if (videoType === UNKNOWN)
    return ['p', {...props, children: 'Not supported media type'}]

  return [videoType.PLAYER_COMPONENT, props]
}

export default useVideoPlayer
