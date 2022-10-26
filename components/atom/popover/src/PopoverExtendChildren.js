import {cloneElement, forwardRef} from 'react'

import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {getChildrenAsReactNode} from './config.js'

const PopoverExtendChildren = forwardRef((props, forwardedRef) => {
  const childrenOnly = getChildrenAsReactNode(props.children)
  const {ref} = childrenOnly
  return cloneElement(childrenOnly, {
    ref: useMergeRefs(forwardedRef, ref)
  })
})

PopoverExtendChildren.displayName = 'PopoverExtendChildren'

PopoverExtendChildren.propTypes = {
  children: PropTypes.element.isRequired
}

export default PopoverExtendChildren
