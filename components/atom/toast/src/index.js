import React, {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import IconClose from '@schibstedspain/sui-svgiconset/lib/Close'
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

const EFFECT_DELAY_CLOSE = 1000
const EFFECT_DELAY_OPEN = 1

function AtomToast({
  autoClose = false,
  autoCloseTime = AUTO_CLOSE_TIMES.MANUAL,
  children,
  crossToClose = true,
  effect = false,
  iconClose = <IconClose />,
  onClose = () => {},
  position = POSITIONS.BOTTOM,
  show: showFromProps = true,
  size = SIZES.MEDIUM,
  margin = MARGINS.MEDIUM,
  globalClose = false
}) {
  const [show, setShow] = useState(showFromProps)
  const [delay, setDelay] = useState(true)

  const autoCloseTimeout = useRef()
  const delayTimeout = useRef()
  const toastRef = useRef()

  const wrapperClassName = cx(
    BASE_CLASS,
    `${BASE_CLASS}-position--${position}`,
    `${BASE_CLASS}-size--${size}`,
    `${BASE_CLASS}-margin--${margin}`,
    {
      [`${BASE_CLASS}-effect--${position}`]: effect,
      [`${BASE_CLASS}-effect--hide`]: effect && delay
    }
  )

  const handleClose = useCallback(() => {
    if (effect) setDelay(true)
    setShow(false)
    if (!effect) onClose()
  }, [effect, onClose])

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
  }, [autoClose, autoCloseTime, handleClose])

  useEffect(() => {
    // open effect
    if (effect && show && delay) {
      delayTimeout.current = setTimeout(() => {
        setDelay(false)
      }, EFFECT_DELAY_OPEN)
    }

    // close effect
    if (effect && !show) {
      delayTimeout.current = setTimeout(() => {
        setDelay(false)
        onClose()
      }, EFFECT_DELAY_CLOSE)
    }

    return () => clearTimeout(delayTimeout.current)
  }, [delay, effect, onClose, show])

  useEffect(() => {
    if (globalClose) {
      const handleClickOutside = e => {
        if (!toastRef.current.contains(e.target)) {
          handleClose()
        }
      }
      window.addEventListener('mousedown', handleClickOutside)

      return () => {
        window.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [globalClose, handleClose])

  if (!show && !delay) return null

  return (
    <div ref={toastRef} className={wrapperClassName}>
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
  effect: PropTypes.bool,
  iconClose: PropTypes.node,
  onClose: PropTypes.func,
  /** Positions: 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right' */
  position: PropTypes.oneOf(Object.keys(POSITIONS)),
  show: PropTypes.bool,
  globalClose: PropTypes.bool,
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
