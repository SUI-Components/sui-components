import React from 'react'
import AtomIcon from '@s-ui/react-atom-icon'

const withIconSVGBounds = SVGChildren => ({
  width = 16,
  height = 16,
  otherProps
}) => (
  <AtomIcon>
    <svg width={width} height={height} {...otherProps}>
      {SVGChildren}
    </svg>
  </AtomIcon>
)

export const IconSquare = withIconSVGBounds(<rect width={16} height={16} />)
export const IconTriangle = withIconSVGBounds(
  <polygon points="8,0 16,16 0,16" />
)
export const IconCircle = withIconSVGBounds(<circle cx={8} cy={8} r={8} />)
