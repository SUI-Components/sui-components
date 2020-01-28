import React, {useEffect, useState, useRef, Suspense} from 'react'
import PropTypes from 'prop-types'
import {PLACEMENTS} from './config'

const BASE_CLASS = 'sui-AtomPopover'
const CLASS_INNER = `${BASE_CLASS}-inner`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const DEFAULT_OFFSET = 'auto,4px'
const DEFAULT_TRIGGER = 'legacy'
const DEFAULT_DELAY = 0

const Popover = React.lazy(() => import('reactstrap/lib/Popover'))

function AtomPopover({
  children,
  closeIcon,
  content,
  id,
  onClose = () => {},
  onOpen = () => {},
  placement = PLACEMENTS.BOTTOM,
  showPopover
}) {
  const targetRef = useRef()
  const [internalShowPopover, setInternalShowPopover] = useState(showPopover)

  useEffect(() => {
    setInternalShowPopover(showPopover)
  }, [showPopover])

  const extendChildren = () => {
    const onClick = () => {
      onOpen()
      setInternalShowPopover(true)
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
    setInternalShowPopover(!internalShowPopover)
    onClose()
  }

  return (
    <div>
      {extendChildren()}
      {internalShowPopover && (
        <Suspense fallback={<></>}>
          <Popover
            className={BASE_CLASS}
            delay={DEFAULT_DELAY}
            innerClassName={CLASS_INNER}
            isOpen={internalShowPopover}
            offset={DEFAULT_OFFSET}
            placement={placement}
            placementPrefix={PREFIX_PLACEMENT}
            target={id || targetRef.current}
            toggle={handleToggle}
            trigger={DEFAULT_TRIGGER}
          >
            {closeIcon && (
              <div className={`${BASE_CLASS}-closeIcon`} onClick={handleToggle}>
                {closeIcon}
              </div>
            )}
            {content}
          </Popover>
        </Suspense>
      )}
    </div>
  )
}

AtomPopover.displayName = 'AtomPopover'

AtomPopover.propTypes = {
  /** HTML (component) to be displayed on the Popover */
  content: PropTypes.element.isRequired,
  /** Popover children */
  children: PropTypes.node.isRequired,
  /** Initial value for the show pop over */
  showPopover: PropTypes.bool,
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
