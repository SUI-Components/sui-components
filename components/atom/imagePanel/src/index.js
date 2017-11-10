import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const H_ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
}

const V_ALIGNMENTS = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

const getClassNames = function (classNames) {
  return classnames('sui-AtomImagePanel', classNames)
}

const getBackgroundImage = function (backgroundImage) {
  return {
    backgroundImage: `url(${backgroundImage})`
  }
}

const AtomImagePanel = function ({backgroundImage, children, className, vAligment}) {
  return (
    <div className={getClassNames({className})} style={getBackgroundImage(backgroundImage)}>
      {children}
    </div>
  )
}

AtomImagePanel.displayName = 'AtomImagePanel'

AtomImagePanel.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  hAlignment: PropTypes.oneOf(Object.values(H_ALIGNMENTS)),
  vAligment: PropTypes.oneOf(Object.values(V_ALIGNMENTS))
}

export default AtomImagePanel
export {
  H_ALIGNMENTS, V_ALIGNMENTS
}
