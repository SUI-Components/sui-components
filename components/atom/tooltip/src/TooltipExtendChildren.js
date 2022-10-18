import {cloneElement, forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {getChildrenAsReactNode} from './config.js'

const TooltipExtendChildren = forwardRef((props, forwardedRef) => {
  const childrenOnly = getChildrenAsReactNode(props.children)
  const {
    props: {className},
    ref
  } = childrenOnly
  return cloneElement(childrenOnly, {
    className: cx(className, props.className),
    ref: useMergeRefs(ref, forwardedRef)
  })
})

TooltipExtendChildren.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
}

export default TooltipExtendChildren
