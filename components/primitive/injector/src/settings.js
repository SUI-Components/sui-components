import {Children, cloneElement, isValidElement} from 'react'
import {isFragment} from 'react-is'

import cx from 'classnames'

import PrimitiveInjector from './index.js'

const isUpperCaseChar = char => char.length === 1 && char === char.toUpperCase()
const isFunction = handler => typeof handler === 'function'
const isHandler = propKey =>
  propKey.startsWith('on') && isUpperCaseChar(propKey['on'.length])

export const combineHandler =
  (...handlers) =>
  (...args) =>
    handlers.filter(isFunction).forEach(handler => handler(...args))

export const combineHandlers = (
  ownProps,
  childProps,
  cHandler = combineHandler
) =>
  Object.keys({...ownProps, ...childProps})
    .filter(isHandler)
    .reduce(
      (response, currentKey, index, combinedKeys) => ({
        ...response,
        [currentKey]: cHandler(
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
  {
    combineHandlers: cHandlers,
    combineStyles: cStyles,
    combineClassNames: cClassNames,
    combineHandler: cHandler
  } = {
    combineHandler,
    combineHandlers,
    combineStyles,
    combineClassNames
  }
) => {
  const combinedHandlers = cHandlers(ownProps, childProps, cHandler)
  const style = cStyles(ownStyle, childStyle)
  const className = cClassNames(childClassNames, ownClassNames)
  return {
    ...(className && {className}),
    ...(style && {style}),
    ...ownProps,
    ...childProps,
    ...combinedHandlers
  }
}

export const inject = (children, settings = []) =>
  Children.toArray(children).map(child => {
    if (!isValidElement(child)) {
      return child
    } else if (isFragment(child)) {
      return cloneElement(
        child,
        child?.props,
        inject(child?.props.children, settings)
      )
    } else if (child?.type === PrimitiveInjector) {
      const {
        proviso = () => true,
        combine = combineProps,
        children,
        ...otherProps
      } = child?.props || {}
      return inject(children, [
        {proviso, combine, props: otherProps},
        ...settings
      ])
    } else {
      return cloneElement(
        child,
        settings
          .filter(({proviso}) => proviso(child))
          .reduce((acc, {props, combine}) => {
            return combine(props, acc, {
              combineHandler,
              combineHandlers,
              combineStyles,
              combineClassNames
            })
          }, child?.props)
      )
    }
  })
