const useVideoMetadata = ({onLoadVideo}) => {
  const loadVideoMetadata = async player => {
    const duration = await player.current.getDuration()
    const videoWidth = await player.current.getVideoWidth()
    const videoHeight = await player.current.getVideoHeight()
    onLoadVideo({duration, videoWidth, videoHeight})
  }

  return {loadVideoMetadata}
}

export default useVideoMetadata
