import {Children, cloneElement, forwardRef} from 'react'
import PropTypes from 'prop-types'

const PopoverExtendChildren = forwardRef(({children, onToggle}, targetRef) => {
  const onClickHandler = handler => ev => {
    typeof handler === 'function' && handler(ev)
    typeof onToggle === 'function' && onToggle(ev)
  }
  const childrenOnly =
    typeof children === 'string'
      ? [<span key={1}>{children}</span>]
      : Children.only(children)
  const response = Children.map(childrenOnly, (child, key) => {
    const {onClick} = child.props
    const attrs = {
      onClick: onClickHandler(onClick)
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
})

PopoverExtendChildren.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func
}

export default PopoverExtendChildren
