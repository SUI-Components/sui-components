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
export const IconEllipse = withIconSVGBounds(
  <ellipse cx={8} cy={8} rx={8} ry={4} />
)
export const IconStar = withIconSVGBounds(
  <polyline points="8,0 9,7 16,8 9,9 8,16 7,9 0,8 7,7" />
)
export const IconMinus = withIconSVGBounds(
  <line x1={0} y1={8} x2={16} y2={8} />
)
