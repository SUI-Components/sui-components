import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const HORIZONTAL_ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
}

const VERTICAL_ALIGNMENTS = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

const getClassNames = function ({vAlignment, hAlignment, classNames}) {
  return classnames(
    'sui-AtomImagePanel',
    classNames,
    `sui-AtomImagePanel--v-${vAlignment}`,
    `sui-AtomImagePanel--h-${hAlignment}`
  )
}

const getBackgroundImageStyles = function (backgroundImage) {
  return {
    backgroundImage: `url(${backgroundImage})`
  }
}

const AtomImagePanel = function ({backgroundImage, children, ...props}) {
  return (
    <div className={getClassNames(props)} style={getBackgroundImageStyles(backgroundImage)}>
      {children}
    </div>
  )
}

AtomImagePanel.displayName = 'AtomImagePanel'

AtomImagePanel.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Horizontal alignment
   */
  hAlignment: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENTS)),
  /**
   * Vertical alignment
   */
  vAlignment: PropTypes.oneOf(Object.values(VERTICAL_ALIGNMENTS))
}

AtomImagePanel.defaultProps = {
  hAlignment: HORIZONTAL_ALIGNMENTS.CENTER,
  vAlignment: VERTICAL_ALIGNMENTS.CENTER
}

export default AtomImagePanel
export {
  HORIZONTAL_ALIGNMENTS as atomImagePanelAlignH,
  VERTICAL_ALIGNMENTS as atomImagePanelAlignV
}
