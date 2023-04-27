import PropTypes from 'prop-types'

import useYouTubeProperties from '../hooks/useYouTubeProperties.js'
import {BASE_CLASS, YOUTUBE_DEFAULT_TITLE} from '../settings/index.js'

const YouTubePlayer = ({controls, src, title = YOUTUBE_DEFAULT_TITLE}) => {
  const {getEmbeddableUrl} = useYouTubeProperties()
  const videoSrc = `${getEmbeddableUrl(src)}${!controls ? '?controls=0' : ''}`

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
  controls: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string
}

export default YouTubePlayer
