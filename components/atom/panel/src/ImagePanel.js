import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {
  BORDER_RADIUS,
  ELEVATION,
  HORIZONTAL_ALIGNMENTS,
  VERTICAL_ALIGNMENTS,
  DEFAULT_VERTICAL_ALIGNMENT,
  DEFAULT_HORIZONTAL_ALIGNMENT,
  getImageClassNames,
  getImageStyles
} from './settings.js'

const ImagePanel = ({
  as = 'div',
  id,
  verticalAlign = DEFAULT_VERTICAL_ALIGNMENT,
  horizontalAlign = DEFAULT_HORIZONTAL_ALIGNMENT,
  children,
  className,
  ...props
}) => {
  return (
    <PolymorphicElement
      as={as}
      id={id}
      className={getImageClassNames({className, ...props})}
      style={getImageStyles(props)}
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
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),
  className: PropTypes.string
}

export default ImagePanel
export {HORIZONTAL_ALIGNMENTS, VERTICAL_ALIGNMENTS}
