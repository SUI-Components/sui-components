import PropTypes from 'prop-types'

import useYouTubeProperties from '../hooks/useYouTubeProperties.js'
import {BASE_CLASS} from '../settings/index.js'

const YouTubePlayer = ({src}) => {
  const {getEmbeddableUrl} = useYouTubeProperties()
  const videoSrc = getEmbeddableUrl(src)

  return (
    <div className={`${BASE_CLASS}-youtubePlayer`}>
      <iframe
        className={`${BASE_CLASS}-youtubePlayerFrame`}
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

YouTubePlayer.propTypes = {
  src: PropTypes.string
}

export default YouTubePlayer
