import {forwardRef, useRef} from 'react'

import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'

import useImperativeApi from '../hooks/useImperativeApi.js'
import useTimeLimitCheck from '../hooks/vimeo/useTimeLimitCheck.js'
import useVideoMetadata from '../hooks/vimeo/useVideoMetadata.js'
import useVimeoApi from '../hooks/vimeo/useVimeoApi.js'
import useVimeoProperties from '../hooks/vimeo/useVimeoProperties.js'
import {BASE_CLASS, VIMEO_DEFAULT_TITLE} from '../settings/index.js'

const VimeoPlayer = forwardRef(
  (
    {
      autoPlay,
      controls,
      muted,
      onLoadVideo,
      timeLimit,
      timeOffset,
      src,
      title = VIMEO_DEFAULT_TITLE
    },
    forwardedRef
  ) => {
    const {getEmbeddableUrl} = useVimeoProperties()
    const params = toQueryString({
      autoplay: autoPlay ? '1' : '0',
      controls: controls ? '1' : '0',
      muted: muted ? '1' : '0'
    })
    const time = `#t=${timeOffset}`
    const videoSrc = `${getEmbeddableUrl(src)}?${params}${time}`
    const playerRef = useRef(null)
    const vimeoPlayer = useRef(null)

    const {startTimeLimitInterval, stopTimeLimitInterval} = useTimeLimitCheck({
      playerRef,
      timeLimit,
      timeOffset
    })

    const {loadVideoMetadata} = useVideoMetadata({
      src,
      onLoadVideo
    })

    useVimeoApi({
      playerRef,
      onPlay: startTimeLimitInterval,
      onPause: stopTimeLimitInterval,
      onLoad: player => {
        vimeoPlayer.current = player.current
        loadVideoMetadata(player)
      },
      onCleanEffect: stopTimeLimitInterval
    })

    useImperativeApi({
      ref: forwardedRef,
      getCurrentTime: () => vimeoPlayer.current.getCurrentTime()
    })

    return (
      <div className={`${BASE_CLASS}-vimeoPlayer`}>
        <iframe
          className={`${BASE_CLASS}-vimeoPlayerFrame`}
          title={title}
          src={videoSrc}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          ref={playerRef}
        />
      </div>
    )
  }
)

VimeoPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  onLoadVideo: PropTypes.func,
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string
}

export default VimeoPlayer
