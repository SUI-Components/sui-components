import PropTypes from 'prop-types'

import useVimeoProperties from '../hooks/useVimeoProperties.js'
import {BASE_CLASS, VIMEO_DEFAULT_TITLE} from '../settings/index.js'

const VimeoPlayer = ({src, title = VIMEO_DEFAULT_TITLE}) => {
  const {getEmbeddableUrl} = useVimeoProperties()
  const videoSrc = getEmbeddableUrl(src)

  return (
    <div className={`${BASE_CLASS}-vimeoPlayer`}>
      <iframe
        className={`${BASE_CLASS}-vimeoPlayerFrame`}
        title={title}
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

VimeoPlayer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string
}

export default VimeoPlayer
