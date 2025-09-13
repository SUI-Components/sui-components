import type React from 'react'
import {type PropsWithChildren, useCallback, useEffect, useRef, useState} from 'react'

import cx from 'classnames'

import {type AutoCloseTime, type Position, AUTO_CLOSE_TIMES, BASE_CLASS} from './config'
import {EFFECT_DELAY} from './config'

export interface AtomToastProps {
  /** Enable/disable auto close */
  autoClose?: boolean
  /** Auto close times: 'short' (3000s), 'medium' (6000s), 'long' (9000s) */
  autoCloseTime?: AutoCloseTime
  /** Enable/disable toast transition */
  effect?: boolean
  /** Custom close icon  */
  iconClose?: React.ReactNode
  /** On close callback */
  onClose?: () => void
  /** Positions: 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right' */
  position?: Position
  show?: boolean
  /** Enable/disable global close */
  globalClose?: boolean
}

const AtomToast = ({
  autoClose = true,
  autoCloseTime = AUTO_CLOSE_TIMES.medium,
  effect = true,
  iconClose,
  onClose,
  position = 'top-right',
  show: showFromProps = true,
  globalClose = false,
  children
}: PropsWithChildren<AtomToastProps>) => {
  const [show, setShow] = useState(showFromProps)
  const [delay, setDelay] = useState(true)

  const autoCloseTimeout = useRef<NodeJS.Timeout>()
  const delayTimeout = useRef<NodeJS.Timeout>()
  const toastRef = useRef<HTMLDivElement>(null)

  const containerClassName = cx(`${BASE_CLASS}-container`, `${BASE_CLASS}-position--${position}`, {
    [`${BASE_CLASS}-effect--${position}`]: effect,
    [`${BASE_CLASS}-effect--hide`]: effect && delay
  })

  const handleClose = useCallback(() => {
    if (effect) setDelay(true)
    setShow(false)
    if (!effect && typeof onClose === 'function') onClose()
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
        typeof onClose === 'function' && onClose()
      }, EFFECT_DELAY.close)
    }

    return () => clearTimeout(delayTimeout.current)
  }, [delay, effect, onClose, show])

  useEffect(() => {
    if (globalClose) {
      const handleClickOutside = (e: MouseEvent) => {
        const targetNode = e.target as Node

        if (toastRef.current !== null && !toastRef.current.contains(targetNode)) {
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

export {AUTO_CLOSE_TIMES as atomToastAutoCloseTimes}

export default AtomToast
