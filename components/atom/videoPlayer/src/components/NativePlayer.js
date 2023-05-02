import {useRef} from 'react'

import PropTypes from 'prop-types'

import useGetBlobAsVideoSrcEffect from '../hooks/useGetBlobAsVideoSrcEffect.js'
import {BASE_CLASS, NATIVE_DEFAULT_TITLE} from '../settings/index.js'

const NativePlayer = ({
  autoPlay,
  controls,
  offset,
  src,
  title = NATIVE_DEFAULT_TITLE
}) => {
  const videoNode = useRef(null)
  let videoSrc = useGetBlobAsVideoSrcEffect({src, videoNode})

  if (videoSrc !== null && offset) {
    videoSrc = `${videoSrc}#t=${offset}`
  }

  return (
    <div className={`${BASE_CLASS}-nativePlayer`}>
      <video
        autoPlay={autoPlay}
        className={`${BASE_CLASS}-nativePlayerVideo`}
        ref={videoNode}
        title={title}
        controls={controls}
      >
        {videoSrc !== null && <source data-testid="videosrc" src={videoSrc} />}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

NativePlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  offset: PropTypes.number,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)]),
  title: PropTypes.string
}

export default NativePlayer
