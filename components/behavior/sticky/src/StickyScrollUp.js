import {StickyScrollUp} from 'react-stickup'

import PropTypes from 'prop-types'

import {CLASS_SCROLL_UP, STICKY_CLASS_CONTAINER} from './settings.js'

const BehaviorStickyScrollUp = ({children, ...props}) => {
  return (
    <StickyScrollUp className={CLASS_SCROLL_UP} {...props}>
      {() => <div className={STICKY_CLASS_CONTAINER}>{children}</div>}
    </StickyScrollUp>
  )
}

BehaviorStickyScrollUp.propTypes = {
  children: PropTypes.node
}

BehaviorStickyScrollUp.displayName = 'BehaviorStickyScrollUp'

export default BehaviorStickyScrollUp
