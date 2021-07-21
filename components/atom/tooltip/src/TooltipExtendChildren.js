import {Children, cloneElement, forwardRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const TooltipExtendChildren = forwardRef(
  ({className: classNameTarget, children}, targetRef) => {
    const onClickHandler = handler => ev => {
      typeof handler === 'function' && handler(ev)
    }
    const childrenOnly =
      typeof children === 'string'
        ? [<span key={1}>{children}</span>]
        : Children.only(children)
    const response = Children.map(childrenOnly, (child, key) => {
      const {onClick, className} = child.props
      const attrs = {
        onClick: onClickHandler(onClick),
        className: cx(classNameTarget, className)
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
)

TooltipExtendChildren.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default TooltipExtendChildren
