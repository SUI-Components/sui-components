import {forwardRef, useEffect, useRef} from 'react'

import PropTypes from 'prop-types'

import useGetBlobAsVideoSrcEffect from '../hooks/native/useGetBlobAsVideoSrcEffect.js'
import useGetSrcWithMediaFragments from '../hooks/native/useGetSrcWithMediaFragments.js'
import useImperativeApi from '../hooks/useImperativeApi.js'
import {BASE_CLASS, NATIVE_DEFAULT_TITLE} from '../settings/index.js'
import {NATIVE} from '../settings/players.js'

const NativePlayer = forwardRef(
  (
    {
      autoPlay,
      controls,
      muted,
      loop,
      onLoadVideo,
      playsInline,
      timeLimit,
      timeOffset,
      src,
      title = NATIVE_DEFAULT_TITLE
    },
    forwardedRef
  ) => {
    const playerRef = useRef(null)
    let videoSrc = useGetBlobAsVideoSrcEffect({src, playerRef})
    videoSrc = useGetSrcWithMediaFragments({videoSrc, timeOffset, timeLimit})

    useEffect(() => {
      if (autoPlay) {
        playerRef.current.play()
      } else {
        playerRef.current.pause()
      }
    }, [autoPlay])

    useImperativeApi({
      ref: forwardedRef,
      getCurrentTime: () => Promise.resolve(playerRef.current.currentTime)
    })

    const onLoadedMetadata = () => {
      const {duration, videoHeight, videoWidth} = playerRef.current
      onLoadVideo({
        src,
        type: NATIVE.VIDEO_TYPE,
        duration,
        videoHeight,
        videoWidth
      })
    }

    return (
      <div className={`${BASE_CLASS}-nativePlayer`}>
        <video
          autoPlay={autoPlay}
          className={`${BASE_CLASS}-nativePlayerVideo`}
          muted={muted}
          ref={playerRef}
          title={title}
          controls={controls}
          onLoadedMetadata={onLoadedMetadata}
          playsInline={playsInline}
          loop={loop}
        >
          {videoSrc !== null && <source data-testid="videosrc" src={videoSrc} />}
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
)

NativePlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  onLoadVideo: PropTypes.func,
  playsInline: PropTypes.bool,
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  title: PropTypes.string,
  loop: PropTypes.bool
}

export default NativePlayer
