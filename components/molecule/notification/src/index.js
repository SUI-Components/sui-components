import React, {useState, useEffect, useCallback, useRef} from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import IconClose from '@schibstedspain/sui-svgiconset/lib/Close'
import IconSuccess from '@schibstedspain/sui-svgiconset/lib/Linecheck'
import IconError from '@schibstedspain/sui-svgiconset/lib/Lineerror'
import IconInfo from '@schibstedspain/sui-svgiconset/lib/Lineinfo'
import IconWarning from '@schibstedspain/sui-svgiconset/lib/Linewarning'
import cx from 'classnames'

const CLASS = 'sui-MoleculeNotification'

const ICONS = {
  info: <IconInfo />,
  error: <IconError />,
  success: <IconSuccess />,
  system: <IconInfo />,
  warning: <IconWarning />
}

const AUTO_CLOSE_TIME = {
  short: 3000,
  medium: 6000,
  long: 9000,
  manual: null
}

const TRANSITION_DELAY = 1000 // ms
const BUTTONS_MAX = 3 // buttons

const VARIATIONS = {
  negative: 'negative',
  positive: 'positive'
}

const MoleculeNotification = ({
  autoClose: autoCloseTiming,
  onClose,
  effect,
  buttons,
  children,
  icon,
  position,
  showCloseButton,
  text,
  type,
  variation,
  show: showFromProps
}) => {
  const [show, setShow] = useState(showFromProps)
  const [delay, setDelay] = useState(false)

  const transitionTimeout = useRef()
  const autoCloseTimeout = useRef()

  useEffect(() => {
    setShow(showFromProps)
  }, [showFromProps])

  const getAutoCloseTime = useCallback(() => {
    const time = AUTO_CLOSE_TIME[autoCloseTiming]
    return time
  }, [autoCloseTiming])

  const removeDelay = show => {
    const delay = show ? 1 : TRANSITION_DELAY
    transitionTimeout.current = setTimeout(() => {
      setDelay(false)
    }, delay)
  }

  const triggerAutoClose = useCallback(
    time => {
      autoCloseTimeout.current = setTimeout(() => {
        setShow(false)
      }, time)
    },
    [autoCloseTimeout]
  )

  const handleClickClose = e => {
    setShow(false)
  }

  useEffect(() => {
    const autoCloseTimeInSeconds = getAutoCloseTime()

    if (show && autoCloseTimeInSeconds) triggerAutoClose(autoCloseTimeInSeconds)

    if (effect) {
      setDelay(true)
      removeDelay(show)
    }

    if (show) {
      if (autoCloseTimeInSeconds) triggerAutoClose(autoCloseTimeInSeconds)
    } else {
      clearTimeout(autoCloseTimeout.current)
      onClose()
    }

    return () => {
      clearTimeout(autoCloseTimeout.current)
      clearTimeout(transitionTimeout.current)
    }
  }, [
    autoCloseTimeout,
    transitionTimeout,
    show,
    triggerAutoClose,
    effect,
    onClose,
    getAutoCloseTime
  ])

  const getButtons = () =>
    buttons
      .slice(0, BUTTONS_MAX)
      .map((button, i) => <Button key={i} {...button} />)

  const wrapperClassName = cx(
    `${CLASS} ${CLASS}--${type} ${CLASS}--${position}`,
    {
      [`${CLASS}--${variation}`]: variation === VARIATIONS.positive,
      [`${CLASS}-effect--${position}`]: effect,
      [`${CLASS}-effect--hide`]: effect && delay
    }
  )

  const innerWrapperClassName = cx({
    [`${CLASS}-children`]: children,
    [`${CLASS}-text`]: text
  })

  if (!show && !delay) {
    return null
  }

  return (
    <div className={wrapperClassName}>
      <div className={`${CLASS}-content`}>
        <div className={`${CLASS}-iconLeft`}>
          <span className={`${CLASS}-icon`}>{icon || ICONS[type]}</span>
        </div>
        <div className={innerWrapperClassName}>{children || text}</div>
        {showCloseButton && (
          <div className={`${CLASS}-iconClose`} onClick={handleClickClose}>
            <span className={`${CLASS}-icon`}>
              <IconClose />
            </span>
          </div>
        )}
      </div>
      {buttons && (
        <div className={`${CLASS}-buttonsContainer`}>{getButtons()}</div>
      )}
    </div>
  )
}

MoleculeNotification.displayName = 'MoleculeNotification'

MoleculeNotification.propTypes = {
  /** Auto close time: 'short' (3s), 'medium' (6s), 'long' (9s), 'manual' or null (disabled) */
  autoClose: PropTypes.string,

  /** Array of props to sui-atom-buttons. Max: 3 buttons */
  buttons: PropTypes.array,

  /** Notification content */
  children: PropTypes.node.isRequired,

  /** Transition enabled */
  effect: PropTypes.bool,

  /** Icon to be added on the left of the content */
  icon: PropTypes.node,

  /** On close callback */
  onClose: PropTypes.func,

  /** Positions: 'top', 'bottom', 'relative' */
  position: PropTypes.string,

  /** Show / hide notification */
  show: PropTypes.bool,

  /** Show / hide close button */
  showCloseButton: PropTypes.bool,

  /** Content text. Deprecated, use children instead. */
  text: PropTypes.string,

  /** Notification type: 'info', 'success', 'warning', 'error', 'system'. */
  type: PropTypes.string,

  /** Color variation of the notification: 'positive' with washed out colors, 'negative' with bold colors */
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

MoleculeNotification.defaultProps = {
  autoClose: 'short',
  effect: true,
  onClose: () => {},
  position: 'relative',
  show: true,
  showCloseButton: true,
  type: 'info',
  variation: VARIATIONS.negative
}

export default React.memo(MoleculeNotification)
