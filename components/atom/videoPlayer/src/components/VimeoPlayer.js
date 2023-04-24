import PropTypes from 'prop-types'

import useVimeoProperties from '../hooks/useVimeoProperties.js'

const VimeoPlayer = ({src}) => {
  const {getEmbeddableUrl} = useVimeoProperties()
  const videoSrc = getEmbeddableUrl(src)

  return (
    <>
      <div style={{padding: '73.33% 0 0 0', position: 'relative'}}>
        <iframe
          title="VIMEO video player"
          src={videoSrc}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Is this really needed? */}
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
    </>
  )
}

VimeoPlayer.propTypes = {
  src: PropTypes.string
}

export default VimeoPlayer
