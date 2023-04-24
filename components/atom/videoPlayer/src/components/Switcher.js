import PropTypes from 'prop-types'

import useDetectVideoType from '../hooks/useDetectVideoType.js'
import {YOUTUBE} from '../settings.js'
import YouTubePlayer from './YouTubePlayer.js'

const Switcher = ({src}) => {
  const {detectVideoType} = useDetectVideoType()
  const videoType = detectVideoType(src)
  switch (videoType) {
    case YOUTUBE.VIDEO_TYPE:
      return <YouTubePlayer src={src} />

    default:
      return <h1>Not supported media type</h1>
  }
}

Switcher.propTypes = {
  src: PropTypes.string
}

export default Switcher
