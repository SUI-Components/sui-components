import React, {useState, useEffect, useRef} from 'react'
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

const AUTO_CLOSE_TIME = 6000

function AtomToast({
  autoClose = false,
  children,
  onClose = () => {},
  position = 'bottom',
  show: showFromProps = true
}) {
  const [show, setShow] = useState(showFromProps)

  const autoCloseTimeout = useRef()

  const wrapperClassName = cx(`${BASE_CLASS} ${BASE_CLASS}--${position}`)

  useEffect(() => {
    setShow(showFromProps)
  }, [showFromProps])

  useEffect(() => {
    if (autoClose) {
      autoCloseTimeout.current = setTimeout(() => {
        setShow(false)
        onClose()
      }, AUTO_CLOSE_TIME)
    }

    return () => clearTimeout(autoCloseTimeout.current)
  })

  if (!show) return null

  return <div className={wrapperClassName}>{children}</div>
}

AtomToast.displayName = 'AtomToast'

AtomToast.propTypes = {
  autoClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  /** Positions: 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right' */
  position: PropTypes.oneOf(Object.keys(POSITIONS)),
  show: PropTypes.bool
}

export {POSITIONS as atomToastPosistions}
export default AtomToast
