import ReactHlsPlayer from 'react-hls-player'

import PropTypes from 'prop-types'

const NativePlayer = ({src}) => {
  return (
    <ReactHlsPlayer
      title="HLS video player"
      src={src}
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
    />
  )
}

NativePlayer.propTypes = {
  src: PropTypes.string
}

export default NativePlayer
