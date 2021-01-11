import {memo, useState, useEffect, useCallback, useRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import {
  CLASS,
  TYPES,
  ICONS,
  AUTO_CLOSE,
  AUTO_CLOSE_TIME,
  TRANSITION_DELAY,
  BUTTONS_MAX,
  VARIATIONS,
  BRDS_SIZE,
  POSITION
} from './settings'
import Button from '@s-ui/react-atom-button'
import IconClose from '@s-ui/react-icons/lib/Close'

const MoleculeNotification = ({
  autoClose: autoCloseTiming = AUTO_CLOSE.short,
  onClose = () => {},
  effect = true,
  buttons,
  children,
  icon,
  position = POSITION.relative,
  roundedCorners = null,
  showCloseButton = true,
  text,
  type = TYPES.info,
  variation = VARIATIONS.negative,
  show: showFromProps = true
}) => {
  const [show, setShow] = useState(showFromProps)
  const [delay, setDelay] = useState(false)

  const transitionTimeout = useRef()
  const autoCloseTimeout = useRef()

  useEffect(() => {
    setShow(showFromProps)
  }, [showFromProps])

  const autoCloseTimeInSeconds =
    AUTO_CLOSE_TIME[autoCloseTiming] || AUTO_CLOSE_TIME.manual

  const removeDelay = show => {
    const delay = show ? 1 : TRANSITION_DELAY
    transitionTimeout.current = setTimeout(() => {
      setDelay(false)
    }, delay)
  }

  const handleClose = useCallback(() => {
    setShow(false)
    onClose()
  }, [onClose])

  const triggerAutoClose = useCallback(
    time => {
      autoCloseTimeout.current = setTimeout(handleClose, time)
    },
    [handleClose]
  )

  useEffect(() => {
    if (show && autoCloseTimeInSeconds) triggerAutoClose(autoCloseTimeInSeconds)

    if (effect) {
      setDelay(true)
      removeDelay(show)
    }

    return () => {
      clearTimeout(autoCloseTimeout.current)
      clearTimeout(transitionTimeout.current)
    }
  }, [show, triggerAutoClose, effect, autoCloseTimeInSeconds])

  const getButtons = () =>
    buttons
      .slice(0, BUTTONS_MAX)
      .map((button, i) => <Button key={i} {...button} />)

  const wrapperClassName = cx(
    `${CLASS} ${CLASS}--${type} ${CLASS}--${position} ${CLASS}--${variation}`,
    {
      [`${CLASS}-effect--${position}`]: effect,
      [`${CLASS}-effect--hide`]: effect && delay,
      [`${CLASS}-roundedCorners--${roundedCorners}`]: roundedCorners
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
          <div className={`${CLASS}-iconClose`} onClick={handleClose}>
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

  /**
   * Border Radius sizes:
   * 'xl',
   * 'l',
   * 'm' (default),
   * 's',
   * 'xs',
   */
  roundedCorners: PropTypes.oneOf(Object.values(BRDS_SIZE)),

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

export {POSITION, AUTO_CLOSE, TYPES, VARIATIONS, BRDS_SIZE}
export default memo(MoleculeNotification)
