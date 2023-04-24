import {YOUTUBE} from '../settings.js'

const useDetectVideoType = () => {
  const detectVideoType = src => {
    if (src.includes(YOUTUBE.VIDEO_TYPE) || src.includes(YOUTUBE.SHORT_URL))
      return YOUTUBE.VIDEO_TYPE
    return 'unknown'
  }
  return {detectVideoType}
}

export default useDetectVideoType
