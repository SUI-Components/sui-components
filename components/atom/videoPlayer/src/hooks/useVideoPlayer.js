import {VIMEO, YOUTUBE, BASE_CLASS} from '../settings.js'
import {VimeoPlayer, YouTubePlayer} from '../components/index.js'

const matcher = (arrayPattern, value) =>
  arrayPattern.find(pattern => value.includes(pattern))

const useVideoPlayer = ({
  as: As = 'div',
  children = 'Not supported media type',
  className,
  src = '',
  ...props
} = {}) => {
  if (matcher([YOUTUBE.VIDEO_TYPE, YOUTUBE.SHORT_URL], src)) {
    return [
      YouTubePlayer,
      {
        className: [BASE_CLASS, `${BASE_CLASS}-youtubePlayer`].join(' '),
        src,
        ...props
      }
    ]
  } else if (matcher([VIMEO.VIDEO_TYPE], src)) {
    return [
      VimeoPlayer,
      {
        className: [BASE_CLASS, `${BASE_CLASS}-vimeoPlayer`].join(' '),
        src,
        ...props
      }
    ]
  }
  return ['h1', {className: BASE_CLASS, children, ...props}]
}
export default useVideoPlayer
