/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import AddonHoc from './Features/Addon'
import IconHoc from './Features/Icon'
import Component, {inputSizes} from './Component'

const WithFeatureComponent = props => {
  let FeaturedComponent = Component
  const {leftAddon, rightAddon, leftIcon, rightIcon} = props

  if (leftAddon || rightAddon) FeaturedComponent = AddonHoc(FeaturedComponent)
  if (leftIcon || rightIcon) FeaturedComponent = IconHoc(FeaturedComponent)
  // if (tags) FeaturedComponent = TagsHoc(FeaturedComponent)
  return <FeaturedComponent {...props} />
}

let FeaturedComponent = null

export default props => {
  FeaturedComponent = FeaturedComponent || WithFeatureComponent(props)
  return <WithFeatureComponent {...props} />
}

export {inputSizes}
