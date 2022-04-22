import cx from 'classnames'

const isUpperCaseChar = char => char.length === 1 && char === char.toUpperCase()
const isFunction = handler => typeof handler === 'function'
const isHandler = propKey =>
  propKey.startsWith('on') && isUpperCaseChar(propKey['on'.length])

export const combineHandler = (...handlers) => (...args) =>
  handlers.filter(isFunction).forEach(handler => handler(...args))

export const combineHandlers = (ownProps = {}, childProps = {}) =>
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
