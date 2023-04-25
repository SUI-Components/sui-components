import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import Switcher from './components/Switcher.js'
import {BASE_CLASS} from './settings.js'

const AtomVideoPlayer = forwardRef(({src = ''}, forwardedRef) => {
  return (
    <div ref={forwardedRef} className={BASE_CLASS}>
      <Switcher src={src} />
    </div>
  )
})

AtomVideoPlayer.displayName = 'AtomVideoPlayer'

AtomVideoPlayer.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)])
}

export default AtomVideoPlayer
