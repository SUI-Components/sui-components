import {forwardRef, useRef} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import {
  BASE_CLASS,
  CLASS_INNER,
  DEFAULT_DELAY,
  DEFAULT_OFFSET,
  DEFAULT_TRIGGER,
  getClassName,
  PLACEMENTS,
  Popover,
  PREFIX_PLACEMENT,
  TRIGGERS,
  TYPES
} from './config.js'
import PopoverExtendChildren from './PopoverExtendChildren.js'

const AtomPopover = forwardRef(
  (
    {
      children,
      closeIcon,
      content: Content,
      onClose,
      onOpen,
      placement = PLACEMENTS.BOTTOM,
      isVisible,
      defaultIsVisible,
      hideArrow = true,
      trigger = DEFAULT_TRIGGER,
      type
    },
    outRef
  ) => {
    const targetRef = useRef()
    const [isVisibleState, setIsVisibleState] = useControlledState(isVisible, defaultIsVisible)
    const handleToggle = ev => {
      setIsVisibleState(!isVisibleState)
      isVisibleState ? typeof onClose === 'function' && onClose(ev) : typeof onOpen === 'function' && onOpen(ev)
    }

    return (
      <>
        <PopoverExtendChildren ref={targetRef} onToggle={handleToggle}>
          {children}
        </PopoverExtendChildren>
        <Popover
          trigger={Array.isArray(trigger) ? trigger.join(' ') : trigger}
          isOpen={isVisibleState}
          toggle={handleToggle}
          target={targetRef}
          className={BASE_CLASS}
          popperClassName="popperClassName"
          innerClassName={getClassName({defaultClass: CLASS_INNER, type})}
          arrowClassName={getClassName({
            defaultClass: `${BASE_CLASS}-arrow`,
            type
          })}
          innerRef={outRef}
          hideArrow={hideArrow}
          placementPrefix={PREFIX_PLACEMENT}
          delay={DEFAULT_DELAY}
          placement={placement}
          offset={DEFAULT_OFFSET}
        >
          {({scheduleUpdate: update}) => {
            return (
              <>
                {closeIcon && (
                  <div className={`${BASE_CLASS}-closeIcon`} onClick={handleToggle}>
                    {closeIcon}
                  </div>
                )}
                {typeof Content === 'function' ? <Content update={update} /> : Content}
              </>
            )
          }}
        </Popover>
      </>
    )
  }
)

AtomPopover.displayName = 'AtomPopover'

AtomPopover.propTypes = {
  /** HTML (component) to be displayed on the Popover */
  content: PropTypes.element.isRequired,
  /** Popover children */
  children: PropTypes.node.isRequired,
  /** initial value for the show pop over */
  defaultIsVisible: PropTypes.bool,
  /** Controlled value for the show pop over */
  isVisible: PropTypes.bool,
  /** Custom close icon  */
  closeIcon: PropTypes.node,
  /** On close callback */
  onClose: PropTypes.func,
  /** On open callback */
  onOpen: PropTypes.func,
  /** Popover position */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),
  /** Whether to show arrow or not. */
  hideArrow: PropTypes.bool,
  /** behavior of the popover handler methods fired **/
  trigger: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(TRIGGERS)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.values(TRIGGERS)))
  ]),
  /** Determine the type of the popover */
  type: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(TYPES)),
    PropTypes.string // Can even custom your own type
  ])
}

export {PLACEMENTS as atomPopoverPositions}
export {TRIGGERS as atomPopoverTriggers}
export default AtomPopover
