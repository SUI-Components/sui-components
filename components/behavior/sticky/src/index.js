import React from 'react'
import * as ReactSticky from 'react-stickup'

const BASE_CLASS = 'sui-BehaviorSticky'

const BehaviorStickyProvider = ReactSticky.StickyProvider

// eslint-disable-next-line react/prop-types
const BehaviorSticky = ({children, ...props}) => {
  return (
    <ReactSticky.Sticky className={BASE_CLASS} {...props}>
      {children}
    </ReactSticky.Sticky>
  )
}

BehaviorSticky.displayName = 'BehaviorSticky'

export default BehaviorSticky
export {BehaviorStickyProvider}
