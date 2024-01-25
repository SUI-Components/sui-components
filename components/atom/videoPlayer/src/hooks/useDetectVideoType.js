import {UNKNOWN} from '../settings/index.js'
import {DETECTABLE_VIDEO_TYPES, DETECTION_TYPES} from '../settings/players.js'

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
    const type = DETECTABLE_VIDEO_TYPES.find(detectableType => {
      const {DETECTION_TYPE, TYPE_DESCRIPTION} = detectableType
      const extension = getVideoExtension(src)

      switch (DETECTION_TYPE) {
        case DETECTION_TYPES.FILE_EXTENSION:
          if (TYPE_DESCRIPTION.FILE_FORMATS.includes(extension)) return true
          break

        case DETECTION_TYPES.SRC_INSTANCE_TYPE:
          if (TYPE_DESCRIPTION.INSTANCE_TYPE && src instanceof TYPE_DESCRIPTION.INSTANCE_TYPE) return true
          break

        case DETECTION_TYPES.SRC_PATTERN:
          if (TYPE_DESCRIPTION.SRC_PATTERNS.some(pattern => typeof src === 'string' && src.includes(pattern)))
            return true
          break
      }
      return false
    })

    return type !== undefined ? type.TYPE_DESCRIPTION : UNKNOWN
  }
  return {detectVideoType}
}

export default useDetectVideoType
