import {forwardRef, useCallback, useRef} from 'react'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import loadable from '@loadable/component'
import cx from 'classnames'

const createClasses = (array, sufix = '') => {
  return array.reduce(
    (res, key) => ({...res, [key]: `${BASE_CLASS}--${key}${sufix}`}),
    {}
  )
}

const COLOR_CLASSES = createClasses(COLORS, 'Color')

import {
  BASE_CLASS,
  CLASS_INNER,
  CLASS_ARROW,
  PREFIX_PLACEMENT,
  CLASS_TARGET,
  COLORS,
  PLACEMENTS,
  DEFAULT_OFFSET
} from './config'
import TooltipExtendChildren from './TooltipExtendChildren'

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
        <TooltipExtendChildren ref={childrenRef}>
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

export default NewAtomTooltip
