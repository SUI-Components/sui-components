import cx from 'classnames'
import * as ReactSticky from 'react-stickup'

const BASE_CLASS = 'sui-BehaviorSticky'
const CLASS_ANIMATE = `${BASE_CLASS}--animate`

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

export default BehaviorSticky
export {BehaviorStickyProvider}
