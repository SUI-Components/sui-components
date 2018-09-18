import React from 'react'
import AddonHoc from './Features/Addon'
import Component, {inputSizes} from './Component'

const WithAddonComponent = AddonHoc(Component)

export default props => {
  const {leftAddon, rightAddon} = props // eslint-disable-line react/prop-types
  return leftAddon || rightAddon ? (
    <WithAddonComponent {...props} />
  ) : (
    <Component {...props} />
  )
}

export {inputSizes}
