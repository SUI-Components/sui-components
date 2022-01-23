import cx from 'classnames'
import * as ReactSticky from 'react-stickup'

import {BASE_CLASS, CLASS_ANIMATE} from './settings.js'

const BehaviorStickyProvider = ReactSticky.StickyProvider

// eslint-disable-next-line react/prop-types
const BehaviorSticky = ({children, animate, ...props}) => {
  return (
    <ReactSticky.Sticky className={BASE_CLASS} {...props}>
      {({isSticky}) => (
        <div className={cx({[CLASS_ANIMATE]: isSticky && animate})}>
          {children}
        </div>
      )}
    </ReactSticky.Sticky>
  )
}

BehaviorSticky.displayName = 'BehaviorSticky'

BehaviorSticky.BehaviorStickyProvider = BehaviorStickyProvider

export default BehaviorSticky
export {BehaviorStickyProvider}
