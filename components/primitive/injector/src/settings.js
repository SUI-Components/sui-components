import {Children, isValidElement, cloneElement} from 'react'
import {isFragment} from 'react-is'
import cx from 'classnames'

const isUpperCaseChar = char => char.length === 1 && char === char.toUpperCase()
const isFunction = handler => typeof handler === 'function'
const isHandler = propKey =>
  propKey.startsWith('on') && isUpperCaseChar(propKey['on'.length])

export const combineHandler =
  (...handlers) =>
  (...args) =>
    handlers.filter(isFunction).forEach(handler => handler(...args))

export const combineHandlers = (ownProps, childProps) =>
  Object.keys({...ownProps, ...childProps})
    .filter(isHandler)
    .reduce(
      (response, currentKey, index, combinedKeys) => ({
        ...response,
        [currentKey]: combineHandler(
          ...[ownProps[currentKey], childProps[currentKey]].filter(isFunction)
        )
      }),
      {}
    )

export const combineStyles = (...styles) => {
  const result = styles.reduce((resultingStyle, currentStyle) => {
    return {
      ...resultingStyle,
      ...currentStyle
    }
  }, {})
  return Object.keys(result).length === 0 ? null : result
}

export const combineClassNames = (...classNames) => cx(...classNames)

export const combineProps = (
  {className: ownClassNames, style: ownStyle = {}, ...ownProps},
  {className: childClassNames, style: childStyle = {}, ...childProps},
  {combineHandlers, combineStyles, combineClassNames}
) => {
  const combinedHandlers = combineHandlers(ownProps, childProps)
  const style = combineStyles(ownStyle, childStyle)
  const className = combineClassNames(childClassNames, ownClassNames)
  return {
    ...(className && {className}),
    ...(style && {style}),
    ...ownProps,
    ...childProps,
    ...combinedHandlers
  }
}

export const inject = (props, children, combinePropsFn = combineProps) =>
  Children.toArray(children).map((child, index) => {
    if (isFragment(child)) {
      return cloneElement(
        child,
        child?.props,
        inject(props, child?.props.children, combinePropsFn)
      )
    } else {
      return isValidElement(child)
        ? cloneElement(
            child,
            combinePropsFn(props, child?.props, {
              combineHandler,
              combineHandlers,
              combineStyles,
              combineClassNames
            })
          )
        : child
    }
  })
