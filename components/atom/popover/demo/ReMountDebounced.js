import {Children, cloneElement, useEffect, useState} from 'react'
import {
  ContextConsumer as isContextConsumer,
  ContextProvider as isContextProvider,
  Element as isElement,
  Fragment as isFragment,
  Portal as isPortal,
  typeOf
} from 'react-is'
import {useDebounce} from 'react-use'

import PropTypes from 'prop-types'

const style = {opacity: 0.2}

const applyRule = (node, addProps) => {
  const currentNode = typeof node === 'string' ? <span>{node}</span> : node
  let {children, style} = currentNode.props
  const props = node.props || {}
  switch (typeOf(currentNode)) {
    case isElement:
      break
    case isPortal:
    case isFragment:
    case isContextProvider:
    case isContextConsumer:
    default:
      children = Children.map(children, child => applyRule(child, addProps))
      break
  }
  return cloneElement(
    currentNode,
    {
      ...props,
      ...addProps,
      style: {...style, ...addProps.style}
    },
    children
  )
}

const ReMountDebounced = ({
  observe = [],
  timeout = 100,
  fallback = null,
  children
}) => {
  const [isFiltering, setIsFiltering] = useState(false)
  useDebounce(() => setIsFiltering(false), timeout, [...observe])
  useEffect(() => {
    setIsFiltering(true)
  }, [observe])
  return isFiltering
    ? fallback &&
        Children.map(
          fallback === 'string'
            ? [
                <span key={1} style={style}>
                  {fallback}
                </span>
              ]
            : Children.only(fallback),
          child => applyRule(child, {style})
        )
    : children
}

ReMountDebounced.propTypes = {
  observe: PropTypes.arrayOf(PropTypes.any),
  timeout: PropTypes.number,
  fallback: PropTypes.node,
  children: PropTypes.node
}

export default ReMountDebounced
