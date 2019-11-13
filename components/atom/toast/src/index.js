import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import IconClose from '@schibstedspain/sui-svgiconset/lib/Close'

const BASE_CLASS = 'react-AtomToast'

const POSITIONS = {
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
}

const AUTO_CLOSE_TIMES = {
  SHORT: 3000,
  MEDIUM: 6000,
  LONG: 9000
}

const SIZES = {
  SMALL: 's',
  MEDIUM: 'm',
  LARGE: 'l'
}

const MARGINS = {
  SMALL: 's',
  MEDIUM: 'm',
  LARGE: 'l'
}

function AtomToast({
  autoClose = false,
  autoCloseTime = AUTO_CLOSE_TIMES.MANUAL,
  children,
  crossToClose = true,
  iconClose = <IconClose />,
  onClose = () => {},
  position = POSITIONS.BOTTOM,
  show: showFromProps = true,
  size = SIZES.MEDIUM,
  margin = MARGINS.MEDIUM
}) {
  const [show, setShow] = useState(showFromProps)

  const autoCloseTimeout = useRef()

  const wrapperClassName = `${BASE_CLASS} ${BASE_CLASS}-position--${position} ${BASE_CLASS}-size--${size} ${BASE_CLASS}-margin--${margin}`

  useEffect(() => {
    setShow(showFromProps)
  }, [showFromProps])

  useEffect(() => {
    if (autoClose) {
      autoCloseTimeout.current = setTimeout(() => {
        handleClose()
      }, autoCloseTime)
    }

    return () => clearTimeout(autoCloseTimeout.current)
  })

  const handleClose = () => {
    setShow(false)
    onClose()
  }

  if (!show) return null

  return (
    <div className={wrapperClassName}>
      {crossToClose && (
        <div onClick={handleClose} className={`${BASE_CLASS}-icon`}>
          {iconClose}
        </div>
      )}
      {children}
    </div>
  )
}

AtomToast.displayName = 'AtomToast'

AtomToast.propTypes = {
  autoClose: PropTypes.bool,
  autoCloseTime: PropTypes.oneOf(Object.keys(AUTO_CLOSE_TIMES)),
  children: PropTypes.node.isRequired,
  crossToClose: PropTypes.bool,
  iconClose: PropTypes.node,
  onClose: PropTypes.func,
  /** Positions: 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right' */
  position: PropTypes.oneOf(Object.keys(POSITIONS)),
  show: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  margin: PropTypes.oneOf(Object.keys(MARGINS))
}

export {
  POSITIONS as atomToastPosistions,
  AUTO_CLOSE_TIMES as atomToastAutoCloseTimes,
  SIZES as atomToastSizes,
  MARGINS as atomToastMargins
}
export default AtomToast
