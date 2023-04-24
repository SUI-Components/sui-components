import PropTypes from 'prop-types'

import Switcher from './components/Switcher.js'
import {BASE_CLASS} from './settings.js'
export default function AtomVideoPlayer({src = ''}) {
  return (
    <div className={BASE_CLASS}>
      <Switcher src={src} />
    </div>
  )
}

AtomVideoPlayer.displayName = 'AtomVideoPlayer'
AtomVideoPlayer.propTypes = {
  src: PropTypes.string
}
