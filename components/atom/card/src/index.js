import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  BASE_CLASS_CONTAINER,
  BASE_CLASS_CONTAINER_CONTENT,
  BASE_CLASS_PANEL,
  BASE_CLASS_WRAPPER,
  COLOR,
  CORNER_SIZE,
  DESIGN,
  ELEVATION
} from './config.js'

const Root = forwardRef(
  (
    {
      as: As = 'div',
      design = DESIGN.FILLED,
      color = COLOR.SURFACE,
      elevation = ELEVATION.NONE,
      className,
      isInset = false,
      children,
      cornerSize,
      style,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div className={BASE_CLASS_WRAPPER}>
        <div className={cx(BASE_CLASS)}>
          <As
            className={cx(
              BASE_CLASS_CONTAINER,
              {
                [`${BASE_CLASS_CONTAINER}-is-inset`]: isInset,
                [`${BASE_CLASS_CONTAINER}-design-${design}`]: Object.values(DESIGN).includes(design),
                [`${BASE_CLASS_CONTAINER}-color-${color}`]: Object.values(COLOR).includes(color),
                [`${BASE_CLASS_CONTAINER}-elevation-${elevation}`]: Object.values(ELEVATION).includes(elevation),
                [`${BASE_CLASS_CONTAINER}-cornerSize-${cornerSize}`]: Object.values(CORNER_SIZE).includes(cornerSize)
              },
              className
            )}
            {...props}
            ref={forwardedRef}
          >
            <span className={cx(BASE_CLASS_PANEL)} aria-hidden="true" />
            <div className={cx(BASE_CLASS_CONTAINER_CONTENT)} style={style}>
              {children}
            </div>
          </As>
        </div>
      </div>
    )
  }
)

Root.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  design: PropTypes.oneOf(Object.values(DESIGN)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  children: PropTypes.node,
  isInset: PropTypes.bool,
  shape: PropTypes.oneOf(),
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),
  cornerSize: PropTypes.oneOf(Object.values(CORNER_SIZE)),
  style: PropTypes.object
}

Root.displayName = 'Card.Root'

export {
  DESIGN as atomCardDesign,
  COLOR as atomCardColor,
  ELEVATION as atomCardElevation,
  CORNER_SIZE as atomCardCornerSize
} from './config.js'

export default Root
