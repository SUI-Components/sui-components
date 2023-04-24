import PropTypes from 'prop-types'

import Switcher from './components/Switcher.js'
export default function AtomVideoPlayer({src = ''}) {
  return (
    <div className="react-AtomVideoPlayer">
      <Switcher src={src} />
    </div>
  )
}

AtomVideoPlayer.displayName = 'AtomVideoPlayer'
AtomVideoPlayer.propTypes = {
  src: PropTypes.string
}
