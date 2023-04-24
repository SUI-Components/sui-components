import {VIMEO, YOUTUBE, BASE_CLASS} from '../settings.js'
import {VimeoPlayer, YouTubePlayer} from '../components/index.js'

const matcher = (arrayPattern, value) =>
  arrayPattern.find(pattern => value.includes(pattern))

const useVideoPlayer = ({
  as: As = 'h1',
  children = 'Not supported media type',
  className,
  src = '',
  ...props
} = {}) => {
  if (matcher([YOUTUBE.VIDEO_TYPE, YOUTUBE.SHORT_URL], src)) {
    return [
      YouTubePlayer,
      {
        classNames: [BASE_CLASS, `${BASE_CLASS}-youtubePlayer`].join(' '),
        src,
        ...props
      }
    ]
  } else if (matcher([VIMEO.VIDEO_TYPE], src)) {
    return [
      VimeoPlayer,
      {
        classNames: [BASE_CLASS, `${BASE_CLASS}-vimeoPlayer`].join(' '),
        src,
        ...props
      }
    ]
  }
  return [As, {children, ...props}]
}
export default useVideoPlayer
