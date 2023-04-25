import PropTypes from 'prop-types'

import useDetectVideoType from '../hooks/useDetectVideoType.js'
import {NATIVE, VIMEO, YOUTUBE} from '../settings.js'
import NativePlayer from './NativePlayer.js'
import VimeoPlayer from './VimeoPlayer.js'
import YouTubePlayer from './YouTubePlayer.js'

const Switcher = ({src}) => {
  const {detectVideoType} = useDetectVideoType()
  const videoType = detectVideoType(src)
  switch (videoType) {
    case NATIVE.VIDEO_TYPE:
      return <NativePlayer src={src} />

    case VIMEO.VIDEO_TYPE:
      return <VimeoPlayer src={src} />

    case YOUTUBE.VIDEO_TYPE:
      return <YouTubePlayer src={src} />

    default:
      return <h1>Not supported media type</h1>
  }
}

Switcher.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)])
}

export default Switcher
