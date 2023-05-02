import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'

import useVimeoProperties from '../hooks/useVimeoProperties.js'
import {BASE_CLASS, VIMEO_DEFAULT_TITLE} from '../settings/index.js'

const VimeoPlayer = ({
  autoPlay,
  controls,
  offset,
  src,
  title = VIMEO_DEFAULT_TITLE
}) => {
  const {getEmbeddableUrl} = useVimeoProperties()

  const params = toQueryString({
    controls: controls ? '1' : '0',
    autoplay: autoPlay ? '1' : '0'
  })

  const time = `#t=${offset}`

  const videoSrc = `${getEmbeddableUrl(src)}?${params}${time}`

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
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  offset: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string
}

export default VimeoPlayer
