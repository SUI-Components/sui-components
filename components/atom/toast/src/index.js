import React, {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import IconClose from '@schibstedspain/sui-svgiconset/lib/Close'
import cx from 'classnames'
import {
  AUTO_CLOSE_TIMES,
  BASE_CLASS,
  EFFECT_DELAY,
  MARGINS,
  POSITIONS,
  SIZES
} from './config'

function AtomToast({
  autoClose = true,
  autoCloseTime = AUTO_CLOSE_TIMES.medium,
  children,
  crossToClose = true,
  effect = true,
  globalClose = false,
  iconClose = <IconClose />,
  margin = MARGINS.medium,
  onClose = () => {},
  position = POSITIONS.topRight,
  show: showFromProps = true,
  size = SIZES.medium
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
      }, EFFECT_DELAY.open)
    }

    // close effect
    if (effect && !show) {
      delayTimeout.current = setTimeout(() => {
        setDelay(false)
        onClose()
      }, EFFECT_DELAY.close)
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
  /** Enable/disable auto close */
  autoClose: PropTypes.bool,
  /** Auto close times: 'short' (3000s), 'medium' (6000s), 'long' (9000s) */
  autoCloseTime: PropTypes.oneOf(Object.keys(AUTO_CLOSE_TIMES)),
  /** Toast content */
  children: PropTypes.node.isRequired,
  /** Enable/disable cross to close */
  crossToClose: PropTypes.bool,
  /** Enable/disable toast transition */
  effect: PropTypes.bool,
  /** Custom close icon  */
  iconClose: PropTypes.node,
  /** On close callback */
  onClose: PropTypes.func,
  /** Positions: 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right' */
  position: PropTypes.oneOf(Object.values(POSITIONS)),
  /** Show/hide notification */
  show: PropTypes.bool,
  /** Enable/disable global close */
  globalClose: PropTypes.bool,
  /** Sizes: 's', 'm', 'l' */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /** Distance to the edge of the screen: 's', 'm', 'l'  */
  margin: PropTypes.oneOf(Object.values(MARGINS))
}

export {
  POSITIONS as atomToastPosistions,
  AUTO_CLOSE_TIMES as atomToastAutoCloseTimes,
  SIZES as atomToastSizes,
  MARGINS as atomToastMargins
}
export default AtomToast
