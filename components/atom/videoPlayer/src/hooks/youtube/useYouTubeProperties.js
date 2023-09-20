import {
  YOUTUBE,
  YOUTUBE_EMBEDDABLE_URL_PATTERN,
  YOUTUBE_READABLE_URL_PATTERN,
  YOUTUBE_SHORT_URL_PATTERN,
  YOUTUBE_STANDARD_URL_PATTERN
} from '../../settings/players.js'

const useYouTubeProperties = () => {
  const getEmbeddableUrl = src => {
    let videoSrc = _replaceNonEmbeddableUrl({
      src,
      nonEmbeddableUrl: YOUTUBE_EMBEDDABLE_URL_PATTERN
    })
    videoSrc = _replaceNonEmbeddableUrl({
      src: videoSrc,
      nonEmbeddableUrl: YOUTUBE_STANDARD_URL_PATTERN
    })
    videoSrc = _replaceNonEmbeddableUrl({
      src: videoSrc,
      nonEmbeddableUrl: YOUTUBE_SHORT_URL_PATTERN
    })
    videoSrc = _replaceNonEmbeddableUrl({
      src: videoSrc,
      nonEmbeddableUrl: YOUTUBE_READABLE_URL_PATTERN
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
