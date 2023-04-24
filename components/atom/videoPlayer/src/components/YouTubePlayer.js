import PropTypes from 'prop-types'

import useYouTubeProperties from '../hooks/useYouTubeProperties.js'

const YouTubePlayer = ({src}) => {
  const {getEmbeddableUrl} = useYouTubeProperties()
  const videoSrc = getEmbeddableUrl(src)

  // TODO: How to render the iframe with 100% width and height 👉🏾 https://www.h3xed.com/web-development/how-to-make-a-responsive-100-width-youtube-iframe-embed
  return (
    <iframe
      src={videoSrc}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

YouTubePlayer.propTypes = {
  src: PropTypes.string
}

export default YouTubePlayer
