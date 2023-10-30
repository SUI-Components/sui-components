import {createRef, forwardRef} from 'react'

import Hls from 'hls.js'
import PropTypes from 'prop-types'

import useInitHlsEffect from '../hooks/hls/useInitHlsEffect.js'
import useTimeLimitCheck from '../hooks/hls/useTimeLimitCheck.js'
import useImperativeApi from '../hooks/useImperativeApi.js'
import {BASE_CLASS, HLS_DEFAULT_TITLE} from '../settings/index.js'

const HLSPlayer = forwardRef(
  (
    {
      autoPlay,
      controls,
      muted,
      onLoadVideo,
      playsInline,
      hlsConfig,
      timeLimit,
      timeOffset,
      playerRef = createRef(),
      src,
      title = HLS_DEFAULT_TITLE,
      ...props
    },
    forwardedRef
  ) => {
    useInitHlsEffect({
      autoPlay,
      hlsConfig,
      onLoadVideo,
      playerRef,
      src,
      timeOffset
    })

    const {startTimeLimitInterval, stopTimeLimitInterval} = useTimeLimitCheck({
      playerRef,
      timeLimit,
      timeOffset
    })

    useImperativeApi({
      ref: forwardedRef,
      getCurrentTime: () => Promise.resolve(playerRef.current.currentTime)
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
          playsInline={playsInline}
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
)

HLSPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  onLoadVideo: PropTypes.func,
  playsInline: PropTypes.bool,
  hlsConfig: PropTypes.object,
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  playerRef: PropTypes.object,
  src: PropTypes.string,
  title: PropTypes.string
}

export default HLSPlayer
