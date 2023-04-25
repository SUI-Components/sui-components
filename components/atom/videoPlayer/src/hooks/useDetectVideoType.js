import {NATIVE, UNKNOWN, VIMEO, YOUTUBE} from '../settings.js'

const useDetectVideoType = () => {
  const getVideoExtension = src => {
    if (typeof src !== 'string') {
      return ''
    }

    const srcSplittedByPoints = src.split('.')
    const extension = srcSplittedByPoints[srcSplittedByPoints.length - 1]
    return extension
  }

  const detectVideoType = src => {
    const extension = getVideoExtension(src)
    if (src instanceof Blob || NATIVE.VIDEO_FORMATS.includes(extension))
      return NATIVE.VIDEO_TYPE

    if (src.includes(YOUTUBE.VIDEO_TYPE) || src.includes(YOUTUBE.SHORT_URL))
      return YOUTUBE.VIDEO_TYPE

    if (src.includes(VIMEO.VIDEO_TYPE)) return VIMEO.VIDEO_TYPE

    return UNKNOWN
  }
  return {detectVideoType}
}

export default useDetectVideoType
