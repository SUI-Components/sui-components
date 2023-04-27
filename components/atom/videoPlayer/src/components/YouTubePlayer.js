import PropTypes from 'prop-types'

import useYouTubeProperties from '../hooks/useYouTubeProperties.js'
import {BASE_CLASS, YOUTUBE_DEFAULT_TITLE} from '../settings/index.js'

const YouTubePlayer = ({src, title = YOUTUBE_DEFAULT_TITLE}) => {
  const {getEmbeddableUrl} = useYouTubeProperties()
  const videoSrc = getEmbeddableUrl(src)

  return (
    <div className={`${BASE_CLASS}-youtubePlayer`}>
      <iframe
        className={`${BASE_CLASS}-youtubePlayerFrame`}
        src={videoSrc}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

YouTubePlayer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string
}

export default YouTubePlayer
