import cx from 'classnames'
import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {
  ALPHA,
  BORDER_RADIUS,
  DEFAULT_ALPHA,
  ELEVATION,
  HORIZONTAL_ALIGNMENTS,
  VERTICAL_ALIGNMENTS
} from './constants.js'

const getClassNames = function ({
  verticalAlign,
  horizontalAlign,
  resized,
  overlayColor,
  overlayAlpha = ALPHA[DEFAULT_ALPHA],
  color,
  rounded,
  elevation,
  isFullWidth,
  isFullHeight
}) {
  const BASE_CLASS = 'sui-atom-panel'
  const IMAGE_PANEL_CLASS = `${BASE_CLASS}-image`

  return cx(
    BASE_CLASS,
    rounded !== BORDER_RADIUS.NONE && `${BASE_CLASS}--rounded-${rounded}`,
    `${IMAGE_PANEL_CLASS}--vertical-${verticalAlign}`,
    `${IMAGE_PANEL_CLASS}--horizontal-${horizontalAlign}`,
    overlayColor && `${BASE_CLASS}--${overlayColor}-overlay-${overlayAlpha}`,
    `${BASE_CLASS}-color--${color}`,
    resized && `${IMAGE_PANEL_CLASS}--resized`,
    isFullWidth && `${BASE_CLASS}--fullWidth`,
    isFullHeight && `${BASE_CLASS}--fullHeight`,
    elevation !== ELEVATION.NONE && `${BASE_CLASS}--elevation-${elevation}`
  )
}

const getStyles = function ({src}) {
  const url = `url(${src})`
  return {
    backgroundImage: url
  }
}

const ImagePanel = function ({as = 'div', id, children, ...props}) {
  return (
    <PolymorphicElement
      as={as}
      id={id}
      className={getClassNames(props)}
      style={getStyles(props)}
    >
      {children}
    </PolymorphicElement>
  )
}

ImagePanel.displayName = 'ImagePanel'

ImagePanel.propTypes = {
  as: PropTypes.elementType,
  id: PropTypes.string,
  children: PropTypes.node,
  isFullWidth: PropTypes.bool,
  isFullHeight: PropTypes.bool,
  /**
   * Background color while loading the image
   */
  color: PropTypes.string,
  resized: PropTypes.bool,
  /**
   * Background position x
   */
  horizontalAlign: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENTS)),
  overlayAlpha: PropTypes.string,
  overlayColor: PropTypes.string,
  /**
   * Background position y
   */
  verticalAlign: PropTypes.oneOf(Object.values(VERTICAL_ALIGNMENTS)),
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  elevation: PropTypes.oneOf(Object.values(ELEVATION))
}

export default ImagePanel
export {HORIZONTAL_ALIGNMENTS, VERTICAL_ALIGNMENTS}
