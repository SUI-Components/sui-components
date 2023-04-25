import PropTypes from 'prop-types'

import useVimeoProperties from '../hooks/useVimeoProperties.js'
import {BASE_CLASS} from '../settings.js'

const VimeoPlayer = ({src}) => {
  const {getEmbeddableUrl} = useVimeoProperties()
  const videoSrc = getEmbeddableUrl(src)

  return (
    <div className={`${BASE_CLASS}-vimeoPlayer`}>
      <iframe
        className={`${BASE_CLASS}-vimeoPlayerFrame`}
        title="VIMEO video player"
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

VimeoPlayer.propTypes = {
  src: PropTypes.string
}

export default VimeoPlayer
