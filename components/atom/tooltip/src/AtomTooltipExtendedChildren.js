import {
  forwardRef,
  createElement,
  cloneElement,
  Children,
  useEffect
} from 'react'
import PropTypes from 'prop-types'

const AtomTooltipExtendedChildren = forwardRef(
  (
    {
      children,
      className,
      onTouchEnd,
      disableTitle,
      restoreTitle,
      handleDragElement,
      handleClickOutsideElement,
      setter,
      ...otherProps
    },
    ref
  ) => {
    useEffect(() => {
      const eventsStack = [
        [ref.current, 'mouseover', disableTitle],
        [ref.current, 'mouseout', restoreTitle],
        [ref.current, 'touchstart', restoreTitle],
        [ref.current, 'mouseover', handleDragElement],
        [window, 'click', handleClickOutsideElement],
        [window, 'touchend', handleClickOutsideElement]
      ]
      eventsStack.map(([target, eventname, callback]) => {
        target.addEventListener(eventname, callback)
      })
      return () => {
        eventsStack.map(([target, eventname, callback]) => {
          target.removeEventListener(eventname, callback)
        })
      }
    }, [
      disableTitle,
      restoreTitle,
      handleDragElement,
      handleClickOutsideElement,
      ref
    ])
    return Children.map(Children.only(children), child => {
      const {onClick, title} = child.props
      setter({onClick, title})
      return typeof child.type !== 'string'
        ? createElement(
            'div',
            {
              ref,
              className: `${className} ${className}--wrapper`,
              onTouchEnd
            },
            cloneElement(child)
          )
        : cloneElement(child, {
            ref,
            className,
            onTouchEnd
          })
    })
  }
)

AtomTooltipExtendedChildren.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onTouchEnd: PropTypes.func,
  disableTitle: PropTypes.func,
  restoreTitle: PropTypes.func,
  handleDragElement: PropTypes.func,
  handleClickOutsideElement: PropTypes.func,
  setter: PropTypes.func
}

export default AtomTooltipExtendedChildren
