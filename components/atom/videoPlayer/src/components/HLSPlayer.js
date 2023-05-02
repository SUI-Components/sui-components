import {createRef, useEffect} from 'react'

import Hls from 'hls.js'
import PropTypes from 'prop-types'

import {BASE_CLASS, HLS_DEFAULT_TITLE} from '../settings/index.js'

const HLSPlayer = ({
  autoPlay,
  controls,
  hlsConfig,
  offset,
  playerRef = createRef(),
  src,
  title = HLS_DEFAULT_TITLE,
  ...props
}) => {
  useEffect(() => {
    let hls

    function _initPlayer() {
      if (hls !== undefined) {
        hls.destroy()
      }

      const startOffsetConfig = offset
        ? {
            startPosition: offset
          }
        : {}

      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
        ...startOffsetConfig
      })

      if (playerRef.current !== null) {
        newHls.attachMedia(playerRef.current)
      }

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(`${src}`)

        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            /* eslint-disable no-console */
            playerRef?.current
              ?.play()
              .catch(() =>
                console.log(
                  'Unable to autoplay prior to user interaction with the dom.'
                )
              )
          }
        })
      })

      newHls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError()
              break
            default:
              _initPlayer()
              break
          }
        }
      })

      hls = newHls
    }

    // Check for Media Source support
    if (Hls.isSupported()) {
      _initPlayer()
    }

    return () => {
      if (hls !== undefined) {
        hls.destroy()
      }
    }
  }, [autoPlay, hlsConfig, offset, playerRef, src])

  const nativePlayerProps = {
    autoPlay,
    src
  }

  return (
    <div className={`${BASE_CLASS}-hlsPlayer`}>
      <video
        controls={controls}
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
  hlsConfig: PropTypes.object,
  offset: PropTypes.number,
  playerRef: PropTypes.object,
  src: PropTypes.string,
  title: PropTypes.string
}

export default HLSPlayer
