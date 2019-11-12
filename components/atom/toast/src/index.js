import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'react-AtomToast'

const POSITIONS = {
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
}

function AtomToast({children, position = 'bottom'}) {
  const wrapperClassName = cx(`${BASE_CLASS} ${BASE_CLASS}--${position}`)

  return <div className={wrapperClassName}>{children}</div>
}

AtomToast.displayName = 'AtomToast'

AtomToast.propTypes = {
  children: PropTypes.node.isRequired,
  /** Positions: 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right' */
  position: PropTypes.oneOf(Object.keys(POSITIONS))
}

export {POSITIONS as atomToastPosistions}
export default AtomToast
