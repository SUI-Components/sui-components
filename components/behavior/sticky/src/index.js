import React from 'react'
import * as ReactSticky from 'react-stickup'

const BASE_CLASS = 'sui-BehaviorSticky'

const BehaviorStickyProvider = ReactSticky.StickyProvider

const BehaviorSticky = props => {
  // eslint-disable-line react/prop-types
  return (
    <ReactSticky.Sticky className={BASE_CLASS} {...props}>
      {props.children}
    </ReactSticky.Sticky>
  )
}

BehaviorSticky.displayName = 'BehaviorSticky'

export {BehaviorStickyProvider, BehaviorSticky}
