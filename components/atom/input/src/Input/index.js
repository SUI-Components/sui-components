import React from 'react'
import AddonHoc from './Features/Addon'
import WithIconHoc from './Features/WithIcon'
import Component, {inputSizes} from './Component'

const WithAddonComponent = AddonHoc(Component)
const WithIconComponent = WithIconHoc(Component)

export default props => {
  const {leftAddon, leftIcon, rightAddon} = props // eslint-disable-line react/prop-types
  if (leftAddon || rightAddon) return <WithAddonComponent {...props} />
  if (leftIcon) return <WithIconComponent {...props} />
  return <Component {...props} />
}

export {inputSizes}
