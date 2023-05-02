import {VIMEO} from '../../settings/players.js'

const useVimeoProperties = () => {
  const getEmbeddableUrl = src => {
    const videoSrc = _replaceNonEmbeddableUrl({
      src,
      nonEmbeddableUrl: VIMEO.SRC_PATTERNS[0]
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
