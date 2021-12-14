import {forwardRef, useCallback, useRef, useMemo} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import UAParser from 'ua-parser-js'
import loadable from '@loadable/component'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {
  BASE_CLASS,
  CLASS_ARROW,
  CLASS_INNER,
  CLASS_TARGET,
  COLORS,
  DEFAULT_OFFSET,
  PLACEMENTS,
  PREFIX_PLACEMENT,
  TRIGGERS
} from './config'
import useIntersection from 'react-use/lib/useIntersection'
import TooltipExtendChildren from './TooltipExtendChildren'

const Tooltip = loadable(() => import('reactstrap/lib/Tooltip'), {ssr: true})

const AtomTooltip = forwardRef(
  (
    {
      children,
      color,
      content,
      defaultIsVisible,
      delay,
      isArrowed = true,
      isVisible,
      onToggle,
      onOpen,
      onClose,
      placement,
      trigger
    },
    forwardedRef
  ) => {
    const [isVisibleState, setIsVisibleState] = useControlledState(
      isVisible,
      defaultIsVisible
    )
    const toggleHandler = useCallback(
      event => {
        const newState = !isVisibleState
        newState
          ? typeof onOpen === 'function' && onOpen(event, {isVisible: newState})
          : typeof onClose === 'function' &&
            onClose(event, {isVisible: newState})
        setIsVisibleState(newState)
        typeof onToggle === 'function' && onToggle(event, {isVisible: newState})
      },
      [setIsVisibleState, isVisibleState, onOpen, onClose, onToggle]
    )
    const childrenRef = useRef()
    const deviceType = useMemo(
      () =>
        trigger !== undefined &&
        new UAParser(navigator.userAgent).getDevice().type,
      [trigger]
    )
    const intersection = useIntersection(childrenRef, {threshold: 0})
    return (
      <>
        <TooltipExtendChildren ref={childrenRef} className={CLASS_TARGET}>
          {children}
        </TooltipExtendChildren>
        {intersection && intersection.isIntersecting && (
          <Tooltip
            arrowClassName={CLASS_ARROW}
            className={cx(BASE_CLASS, color && `${BASE_CLASS}--${color}Color`)}
            delay={delay}
            hideArrow={!isArrowed}
            innerClassName={CLASS_INNER}
            innerRef={forwardedRef}
            isOpen={isVisibleState}
            offset={DEFAULT_OFFSET}
            placement={placement}
            placementPrefix={PREFIX_PLACEMENT}
            target={childrenRef}
            toggle={toggleHandler}
            trigger={
              trigger ||
              (['mobile', 'tablet'].includes(deviceType) ? 'legacy' : 'hover')
            }
          >
            {content}
          </Tooltip>
        )}
      </>
    )
  }
)

AtomTooltip.propTypes = {
  /** inner element wrapped by the tooltip **/
  children: PropTypes.node,

  /**
   * Color of tooltip: 'primary', 'accent', 'neutral', 'success', 'alert', 'error'
   */
  color: PropTypes.oneOf(Object.values(COLORS)),

  /** the tooltip content **/
  content: PropTypes.node,

  delay: PropTypes.oneOfType([
    PropTypes.shape({show: PropTypes.number, hide: PropTypes.number}),
    PropTypes.number
  ]),
  /** Uncontrolled (initial) value for the show pop over */
  defaultIsVisible: PropTypes.bool,
  /** shows the arrow if true (default true) **/
  isArrowed: PropTypes.bool,
  /** Controlled value for the show pop over */
  isVisible: PropTypes.bool,
  /** handler fired everytime the tooltip is opened or closed **/
  onToggle: PropTypes.func,
  /** handler fired everytime the tooltip is opened **/
  onOpen: PropTypes.func,
  /** handler fired everytime the tooltip is closed **/
  onClose: PropTypes.func,
  /** the placement where the tooltip appears **/
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),
  /** defined the behavior of the tooltip **/
  trigger: PropTypes.oneOf(Object.values(TRIGGERS))
}

AtomTooltip.displayName = 'AtomTooltip'

export {AtomTooltip}

export {COLORS as AtomTooltipColors}
export {TRIGGERS as AtomTooltipTriggers}
export {PLACEMENTS as AtomTooltipPlacements}

export default AtomTooltip
