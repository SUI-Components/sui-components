import {memo, useCallback, useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Button from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'
import IconClose from '@s-ui/react-icons/lib/Close'

import {
  ALIGN_ITEMS,
  AUTO_CLOSE,
  AUTO_CLOSE_TIME,
  BRDS_SIZE,
  BUTTONS_MAX,
  CLASS,
  EMPTY_METHOD,
  ICONS,
  POSITION,
  TRANSITION_DELAY,
  TYPES,
  VARIATIONS
} from './settings.js'

const getContainer = ref => {
  const hasRef = ref !== undefined
  if (hasRef) {
    return ref.current
  }
  return document.body
}

const MoleculeNotification = memo(
  ({
    alignItems = ALIGN_ITEMS.FLEX_START,
    autoClose: autoCloseTiming = AUTO_CLOSE.short,
    onClose = EMPTY_METHOD,
    effect = true,
    buttons,
    children,
    icon,
    position = POSITION.relative,
    roundedCorners = null,
    showCloseButton = true,
    showLeftIconMobile = false,
    text,
    type = TYPES.info,
    variation = VARIATIONS.negative,
    show: showFromProps = true,
    overrideContainer = false,
    targetRef = undefined
  }) => {
    const [show, setShow] = useState(showFromProps)
    const [delay, setDelay] = useState(false)

    const transitionTimeout = useRef()
    const autoCloseTimeout = useRef()

    useEffect(() => {
      setShow(showFromProps)
    }, [showFromProps])

    const autoCloseTimeInSeconds = AUTO_CLOSE_TIME[autoCloseTiming] || AUTO_CLOSE_TIME.manual

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
    }, [show, effect, triggerAutoClose, autoCloseTimeInSeconds])

    const getButtons = () => buttons.slice(0, BUTTONS_MAX).map((button, i) => <Button key={i} {...button} />)

    const wrapperClassName = cx(`${CLASS} ${CLASS}--${type} ${CLASS}--${position} ${CLASS}--${variation}`, {
      [`${CLASS}-effect--${position}`]: effect,
      [`${CLASS}-effect--hide`]: effect && delay,
      [`${CLASS}-roundedCorners--${roundedCorners}`]: roundedCorners
    })
    const innerWrapperClassName = cx({
      [`${CLASS}-children`]: children,
      [`${CLASS}-text`]: text
    })
    const iconLeftClassName = cx(`${CLASS}-iconLeft`, {
      [`${CLASS}-iconLeft--show`]: showLeftIconMobile
    })

    const contentClassName = `${CLASS}-content ${CLASS}-content--alignItems-${alignItems}`

    if (!show && !delay) {
      return null
    }

    const render = () => {
      return (
        <div className={wrapperClassName}>
          <div className={contentClassName}>
            <div className={iconLeftClassName}>
              <span className={`${CLASS}-icon`}>
                {icon ?? (
                  <AtomIcon role="presentation" aria-hidden="true">
                    {ICONS[type]}
                  </AtomIcon>
                )}
              </span>
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
          {buttons && <div className={`${CLASS}-buttonsContainer`}>{getButtons()}</div>}
        </div>
      )
    }

    const notificationEl = render()

    if (overrideContainer) {
      const container = getContainer(targetRef)
      return container ? createPortal(notificationEl, container) : notificationEl
    }

    return notificationEl
  }
)

MoleculeNotification.displayName = 'MoleculeNotification'

MoleculeNotification.propTypes = {
  /** Vertical alignment for content */
  alignItems: PropTypes.oneOf(Object.keys(ALIGN_ITEMS)),

  /** Auto close time: 'short' (3s), 'medium' (6s), 'long' (9s), 'manual' or null (disabled) */
  autoClose: PropTypes.string,

  /** Array of props to sui-atom-buttons. Max: 3 buttons */
  buttons: PropTypes.array,

  /** Notification content */
  children: PropTypes.node,

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

  /** Show / hide left icon on mobile */
  showLeftIconMobile: PropTypes.bool,

  /** Content text. Deprecated, use children instead. */
  text: PropTypes.string,

  /** Notification type: 'info', 'success', 'warning', 'error', 'system'. */
  type: PropTypes.PropTypes.oneOf(Object.keys(TYPES)),

  /** Color variation of the notification: 'positive' with washed out colors, 'negative' with bold colors */
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),

  /** Allows to change the container of the notifaction. This can be specified on targetRef prop, otherwise will be use the div "notification-react-portal".  */
  overrideContainer: PropTypes.bool,

  /** Used along with overrideContainer let specify a dom elment to render the notification. */
  targetRef: PropTypes.string
}

export {
  POSITION,
  POSITION as moleculeNotificationPosition,
  ALIGN_ITEMS as moleculeNotificationAlignItems,
  AUTO_CLOSE,
  AUTO_CLOSE as moleculeNotificationAutoClose,
  TYPES,
  TYPES as moleculeNotificationTypes,
  VARIATIONS,
  VARIATIONS as moleculeNotificationVariations,
  BRDS_SIZE,
  BRDS_SIZE as moleculeNotificationBorderSizes
}
export default MoleculeNotification
