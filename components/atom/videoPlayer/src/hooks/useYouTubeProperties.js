import {YOUTUBE} from '../settings.js'

const useYouTubeProperties = () => {
  const getEmbeddableUrl = src => {
    let videoSrc = _replaceNonEmbeddableUrl({
      src,
      nonEmbeddableUrl: YOUTUBE.STANDARD_URL
    })
    videoSrc = _replaceNonEmbeddableUrl({
      src: videoSrc,
      nonEmbeddableUrl: YOUTUBE.SHORT_URL
    })
    return videoSrc
  }

  const _replaceNonEmbeddableUrl = ({src, nonEmbeddableUrl}) => {
    let videoSrc = src
    if (videoSrc.includes(nonEmbeddableUrl)) {
      const videoId = videoSrc.split(nonEmbeddableUrl)[1]
      videoSrc = `${YOUTUBE.EMBEDDABLE_URL}${videoId}`
    }
    return videoSrc
  }

  return {getEmbeddableUrl}
}

export default useYouTubeProperties
