import {YOUTUBE_VIDEO_TYPE} from '../settings.js'

const useDetectVideoType = () => {
  const detectVideoType = src => {
    if (src.includes(YOUTUBE_VIDEO_TYPE)) return YOUTUBE_VIDEO_TYPE
  }
  return {detectVideoType}
}

export default useDetectVideoType
