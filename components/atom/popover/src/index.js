import React, {useState, useRef, Suspense} from 'react'
import PropTypes from 'prop-types'
import {PLACEMENTS} from './config'

const BASE_CLASS = 'sui-AtomPopover'
const CLASS_INNER = `${BASE_CLASS}-inner`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const DEFAULT_OFFSET = 'auto,4px'
const DEFAULT_TRIGGER = 'legacy'
const DEFAULT_DELAY = 0

const Popover = React.lazy(() => import('reactstrap/lib/Popover'))
let targetRef

function AtomPopover({
  children,
  closeIcon,
  content,
  id,
  onClose = () => {},
  onOpen = () => {},
  placement = PLACEMENTS.BOTTOM
}) {
  targetRef = useRef()
  const [showPopover, setShowPopover] = useState(false)

  const extendChildren = () => {
    const onClick = () => {
      onOpen()
      setShowPopover(true)
    }
    const ref = targetRef
    const childrenOnly = React.Children.only(children)
    return React.Children.map(childrenOnly, child => {
      const attrs = {
        onClick
      }
      if (id) {
        attrs.id = id
      } else {
        attrs.ref = ref
      }
      return React.cloneElement(child, attrs)
    })
  }

  const handleToggle = () => {
    setShowPopover(!showPopover)
    onClose()
  }

  return (
    <>
      <div>
        {extendChildren()}
        {showPopover && (
          <Suspense fallback={<></>}>
            <Popover
              className={BASE_CLASS}
              delay={DEFAULT_DELAY}
              innerClassName={CLASS_INNER}
              isOpen={showPopover}
              offset={DEFAULT_OFFSET}
              placement={placement}
              placementPrefix={PREFIX_PLACEMENT}
              target={id || targetRef.current}
              toggle={handleToggle}
              trigger={DEFAULT_TRIGGER}
            >
              {closeIcon && (
                <div
                  className={`${BASE_CLASS}-closeIcon`}
                  onClick={handleToggle}
                >
                  {closeIcon}
                </div>
              )}
              {content}
            </Popover>
          </Suspense>
        )}
      </div>
    </>
  )
}

AtomPopover.displayName = 'AtomPopover'

AtomPopover.propTypes = {
  /** HTML (component) to be displayed on the Popover */
  content: PropTypes.element.isRequired,
  /** Popover children */
  children: PropTypes.node.isRequired,
  /** Popover id: only is needed if use a children without ref */
  id: PropTypes.string,
  /** Custom close icon  */
  closeIcon: PropTypes.node,
  /** On close callback */
  onClose: PropTypes.func,
  /** On open callback */
  onOpen: PropTypes.func,
  /** Popover position */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS))
}

export {PLACEMENTS as atomPopoverPositions}
export default AtomPopover
