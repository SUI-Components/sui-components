import {UNKNOWN, VIMEO, YOUTUBE} from '../settings.js'

const useDetectVideoType = () => {
  const detectVideoType = src => {
    if (src.includes(YOUTUBE.VIDEO_TYPE) || src.includes(YOUTUBE.SHORT_URL))
      return YOUTUBE.VIDEO_TYPE

    if (src.includes(VIMEO.VIDEO_TYPE)) return VIMEO.VIDEO_TYPE

    return UNKNOWN
  }
  return {detectVideoType}
}

export default useDetectVideoType
