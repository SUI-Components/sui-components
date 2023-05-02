import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'

import useVimeoProperties from '../hooks/vimeo/useVimeoProperties.js'
import {BASE_CLASS, VIMEO_DEFAULT_TITLE} from '../settings/index.js'

const VimeoPlayer = ({
  autoPlay,
  controls,
  timeLimit,
  timeOffset,
  src,
  title = VIMEO_DEFAULT_TITLE
}) => {
  const {getEmbeddableUrl} = useVimeoProperties()

  const params = toQueryString({
    controls: controls ? '1' : '0',
    autoplay: autoPlay ? '1' : '0'
  })

  const time = `#t=${timeOffset}`

  const videoSrc = `${getEmbeddableUrl(src)}?${params}${time}`

  /*
  <script src="https://player.vimeo.com/api/player.js"></script>
  <script>
      var iframe = document.querySelector('iframe');
      var player = new Vimeo.Player(iframe);
      function foo() {
          
          player.getCurrentTime().then(function(time) {
              console.log('time:', time);
              if(time >= 110){  
                  player.pause()
              }
          });
          setTimeout(foo, 1000);
      }
      player.on('play', function() {
          foo();
      });
  </script>
  */

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
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string
}

export default VimeoPlayer
