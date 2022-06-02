import PropTypes from 'prop-types'
import cx from 'classnames'
import * as ReactSticky from 'react-stickup'

import {BASE_CLASS, CLASS_ANIMATE} from './settings.js'

const {Sticky, StickyProvider, StickyScrollUp} = ReactSticky

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
  StickyScrollUp as BehaviorStickyScrollUp
}
