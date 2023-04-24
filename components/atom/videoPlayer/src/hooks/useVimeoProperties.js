import {VIMEO} from '../settings.js'

const useVimeoProperties = () => {
  const getEmbeddableUrl = src => {
    const videoSrc = _replaceNonEmbeddableUrl({
      src,
      nonEmbeddableUrl: VIMEO.STANDARD_URL
    })
    return videoSrc
  }

  const _replaceNonEmbeddableUrl = ({src, nonEmbeddableUrl}) => {
    let videoSrc = src
    if (videoSrc.includes(nonEmbeddableUrl)) {
      const videoId = videoSrc.split(nonEmbeddableUrl)[1]
      videoSrc = `${VIMEO.EMBEDDABLE_URL}${videoId}`
    }
    return videoSrc
  }

  return {getEmbeddableUrl}
}

export default useVimeoProperties
