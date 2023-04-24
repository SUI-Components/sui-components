import PropTypes from 'prop-types'

import useVimeoProperties from '../hooks/useVimeoProperties.js'

const VimeoPlayer = ({src}) => {
  const {getEmbeddableUrl} = useVimeoProperties()
  const videoSrc = getEmbeddableUrl(src)

  return (
    <iframe
      title="VIMEO video player"
      src={videoSrc}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  )
  /*
   ** Is this really needed?
   ** <script src="https://player.vimeo.com/api/player.js"></script>
   * */
}

VimeoPlayer.propTypes = {
  src: PropTypes.string
}

export default VimeoPlayer
