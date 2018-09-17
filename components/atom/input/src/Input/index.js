import React from 'react'
import AddonHoc from './Features/Addon'
import Component, {inputSizes} from './Component'

export default props => {
  const {leftAddon, rightAddon} = props // eslint-disable-line react/prop-types
  const WithAddonComponent = AddonHoc(Component)
  return leftAddon || rightAddon ? (
    <WithAddonComponent {...props} />
  ) : (
    <Component {...props} />
  )
}

export {inputSizes}
