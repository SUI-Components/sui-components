import {
  Children,
  cloneElement,
  useEffect,
  useState,
  useRef,
  forwardRef
} from 'react'
import PropTypes from 'prop-types'
import {useControlledState} from '@s-ui/react-hooks'
import loadable from '@loadable/component'
import {PLACEMENTS, TRIGGERS} from './config'

const BASE_CLASS = 'sui-AtomPopover'
const CLASS_INNER = `${BASE_CLASS}-inner`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const DEFAULT_OFFSET = 'auto,4px'
const DEFAULT_TRIGGER = TRIGGERS.LEGACY
const DEFAULT_DELAY = 0

// https://github.com/reactstrap/reactstrap/blob/7.1.0/src/TooltipPopoverWrapper.js
const Popover = loadable(() => import('reactstrap/lib/Popover'), {ssr: true})

const AtomPopover = forwardRef(
  (
    {
      children,
      closeIcon,
      content,
      onClose = () => {},
      onOpen = () => {},
      placement = PLACEMENTS.BOTTOM,
      isVisible,
      defaultIsVisible,
      hideArrow = true,
      trigger = DEFAULT_TRIGGER
    },
    outRef
  ) => {
    const targetRef = useRef()
    const [ready, setReady] = useState()
    const [isVisibleState, setIsVisibleState] = useControlledState(
      isVisible,
      defaultIsVisible
    )
    useEffect(() => {
      setReady(targetRef.current)
    }, [targetRef, setReady])

    const extendChildren = () => {
      const onClick = (onClickHandler = () => null) => ev => {
        onOpen()
        setIsVisibleState(true)
        onClickHandler(ev)
      }
      const childrenOnly =
        typeof children === 'string'
          ? [<span key={1}>{children}</span>]
          : Children.only(children)
      const response = Children.map(childrenOnly, (child, key) => {
        const attrs = {
          onClick: onClick(child.props.onClick)
        }
        attrs.ref = node => {
          ;[child.ref, targetRef].forEach(ref => {
            if (typeof ref === 'function') {
              ref(node)
            } else if (ref !== null) {
              ref.current = node
            }
          })
        }
        attrs.key = key
        return cloneElement(child, attrs)
      })
      return response
    }

    const handleToggle = ev => {
      setIsVisibleState(!isVisibleState)
      onClose(ev)
    }

    return (
      <>
        {extendChildren()}
        {isVisibleState && ready && (
          <Popover
            className={BASE_CLASS}
            delay={DEFAULT_DELAY}
            innerClassName={CLASS_INNER}
            hideArrow={hideArrow}
            arrowClassName={`${BASE_CLASS}-arrow`}
            isOpen={isVisibleState}
            offset={DEFAULT_OFFSET}
            placement={placement}
            placementPrefix={PREFIX_PLACEMENT}
            target={targetRef.current}
            toggle={handleToggle}
            trigger={Array.isArray(trigger) ? trigger.join(' ') : trigger}
            innerRef={outRef}
          >
            {closeIcon && (
              <div className={`${BASE_CLASS}-closeIcon`} onClick={handleToggle}>
                {closeIcon}
              </div>
            )}
            {content}
          </Popover>
        )}
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
  ])
}

export {PLACEMENTS as atomPopoverPositions}
export {TRIGGERS as atomPopoverTriggers}
export default AtomPopover
