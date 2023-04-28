import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'

import useYouTubeProperties from '../hooks/useYouTubeProperties.js'
import {BASE_CLASS, YOUTUBE_DEFAULT_TITLE} from '../settings/index.js'

const YouTubePlayer = ({
  autoPlay,
  controls,
  src,
  title = YOUTUBE_DEFAULT_TITLE
}) => {
  const {getEmbeddableUrl} = useYouTubeProperties()

  const params = toQueryString({
    controls: controls ? '1' : '0',
    autoplay: autoPlay ? '1' : '0'
  })

  const videoSrc = `${getEmbeddableUrl(src)}?${params}`
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
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string
}

export default YouTubePlayer
