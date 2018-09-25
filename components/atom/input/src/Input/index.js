import React from 'react'
import AddonHoc from './Features/Addon'
import Component, {inputSizes} from './Component'

const WithAddonComponent = AddonHoc(Component)

export default props => {
  const {leftAddon, leftIcon, rightAddon} = props // eslint-disable-line react/prop-types
  if (leftAddon || rightAddon || leftIcon)
    return <WithAddonComponent {...props} />
  return <Component {...props} />
}

export {inputSizes}
