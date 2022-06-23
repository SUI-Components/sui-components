import {Sticky, StickyProvider} from 'react-stickup'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS, CLASS_ANIMATE} from './settings.js'
import BehaviorStickyScrollUp from './StickyScrollUp.js'

const BehaviorSticky = ({children, animate, ...props}) => {
  return (
    <Sticky className={BASE_CLASS} {...props}>
      {({isSticky}) => (
        <div className={cx({[CLASS_ANIMATE]: isSticky && animate})}>
          {children}
        </div>
      )}
    </Sticky>
  )
}

BehaviorSticky.displayName = 'BehaviorSticky'

BehaviorSticky.propTypes = {
  children: PropTypes.node,
  animate: PropTypes.bool,
  container: PropTypes.exact({
    current: PropTypes.object
  })
}

export default BehaviorSticky
export {
  StickyProvider as BehaviorStickyProvider,
  BehaviorStickyScrollUp,
  BehaviorSticky
}
