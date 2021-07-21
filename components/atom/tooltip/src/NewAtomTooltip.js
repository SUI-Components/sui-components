import {forwardRef, useCallback, useRef} from 'react'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
  BASE_CLASS,
  CLASS_INNER,
  CLASS_ARROW,
  PREFIX_PLACEMENT,
  CLASS_TARGET,
  COLORS,
  // PLACEMENTS,
  DEFAULT_OFFSET
} from './config'
import TooltipExtendChildren from './TooltipExtendChildren'

const createClasses = (array, sufix = '') => {
  return array.reduce(
    (res, key) => ({...res, [key]: `${BASE_CLASS}--${key}${sufix}`}),
    {}
  )
}

const COLOR_CLASSES = createClasses(COLORS, 'Color')

const Tooltip = loadable(() => import('reactstrap/lib/Tooltip'), {ssr: true})

const NewAtomTooltip = forwardRef(
  (
    {
      isVisible,
      defaultIsVisible,
      handleToggle,
      children,
      color,
      trigger = 'hover',
      placement,
      content
    },
    forwardedRef
  ) => {
    const [isVisibleState, setIsVisibleState] = useControlledState(
      isVisible,
      defaultIsVisible
    )
    const toggleHandler = useCallback(() => {
      setIsVisibleState(!isVisibleState)
    }, [setIsVisibleState, isVisibleState])
    const childrenRef = useRef()
    return (
      <>
        <TooltipExtendChildren ref={childrenRef} className={CLASS_TARGET}>
          {children}
        </TooltipExtendChildren>
        <Tooltip
          target={childrenRef}
          isOpen={isVisibleState}
          toggle={toggleHandler}
          className={cx(BASE_CLASS, color && COLOR_CLASSES[color])}
          innerClassName={CLASS_INNER}
          arrowClassName={CLASS_ARROW}
          placementPrefix={PREFIX_PLACEMENT}
          innerRef={forwardedRef}
          offset={DEFAULT_OFFSET}
          placement={placement}
          trigger={trigger}
        >
          {content}
        </Tooltip>
      </>
    )
  }
)

NewAtomTooltip.propTypes = {
  isVisible: PropTypes.any,
  defaultIsVisible: PropTypes.any,
  handleToggle: PropTypes.any,
  children: PropTypes.any,
  color: PropTypes.any,
  trigger: PropTypes.any,
  placement: PropTypes.any,
  content: PropTypes.any
}

export default NewAtomTooltip
