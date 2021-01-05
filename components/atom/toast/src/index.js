import {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {AUTO_CLOSE_TIMES, BASE_CLASS, EFFECT_DELAY, POSITIONS} from './config'

function AtomToast({
  autoClose = true,
  autoCloseTime = AUTO_CLOSE_TIMES.medium,
  children,
  effect = true,
  globalClose = false,
  iconClose = null,
  onClose = () => {},
  position = POSITIONS.topRight,
  show: showFromProps = true
}) {
  const [show, setShow] = useState(showFromProps)
  const [delay, setDelay] = useState(true)

  const autoCloseTimeout = useRef()
  const delayTimeout = useRef()
  const toastRef = useRef()

  const containerClassName = cx(
    `${BASE_CLASS}-container`,
    `${BASE_CLASS}-position--${position}`,
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
    <div className={containerClassName}>
      <div className={BASE_CLASS} ref={toastRef}>
        <div onClick={handleClose} className={`${BASE_CLASS}-icon`}>
          {iconClose}
        </div>
        {children}
      </div>
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
  globalClose: PropTypes.bool
}

export {
  POSITIONS as atomToastPositions,
  AUTO_CLOSE_TIMES as atomToastAutoCloseTimes
}
export default AtomToast
