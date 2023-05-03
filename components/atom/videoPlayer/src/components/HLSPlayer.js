import {createRef} from 'react'

import Hls from 'hls.js'
import PropTypes from 'prop-types'

import useInitHlsEffect from '../hooks/hls/useInitHlsEffect.js'
import useTimeLimitCheck from '../hooks/hls/useTimeLimitCheck.js'
import {BASE_CLASS, HLS_DEFAULT_TITLE} from '../settings/index.js'

const HLSPlayer = ({
  autoPlay,
  controls,
  muted,
  hlsConfig,
  timeLimit,
  timeOffset,
  playerRef = createRef(),
  src,
  title = HLS_DEFAULT_TITLE,
  ...props
}) => {
  useInitHlsEffect({
    autoPlay,
    hlsConfig,
    playerRef,
    src,
    timeOffset
  })

  const {startTimeLimitInterval, stopTimeLimitInterval} = useTimeLimitCheck({
    playerRef,
    timeLimit,
    timeOffset
  })

  const nativePlayerProps = {
    autoPlay,
    src
  }

  return (
    <div className={`${BASE_CLASS}-hlsPlayer`}>
      <video
        onPlaying={startTimeLimitInterval}
        onPause={stopTimeLimitInterval}
        controls={controls}
        muted={muted}
        className={`${BASE_CLASS}-hlsPlayerVideo`}
        title={title}
        ref={playerRef}
        {...(Hls.isSupported() === false ? nativePlayerProps : {})}
        {...props}
      />
    </div>
  )
}

HLSPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  hlsConfig: PropTypes.object,
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  playerRef: PropTypes.object,
  src: PropTypes.string,
  title: PropTypes.string
}

export default HLSPlayer
