import {VIMEO} from '../../settings/players.js'

const useVideoMetadata = ({src, onLoadVideo}) => {
  const loadVideoMetadata = async player => {
    const duration = await player.current.getDuration()
    const videoWidth = await player.current.getVideoWidth()
    const videoHeight = await player.current.getVideoHeight()
    onLoadVideo({
      src,
      type: VIMEO.VIDEO_TYPE,
      duration,
      videoWidth,
      videoHeight
    })
  }

  return {loadVideoMetadata}
}

export default useVideoMetadata
