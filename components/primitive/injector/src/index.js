import {
  Children as ReactChildren,
  isValidElement,
  cloneElement,
  useMemo
} from 'react'
import PropTypes from 'prop-types'

import {
  combineHandler,
  combineHandlers,
  combineStyles,
  combineClassNames
} from './settings.js'

const PrimitiveInjector = ({
  children,
  combineProps = (
    {className: ownClassNames, style: ownStyle = {}, ...ownProps} = {},
    {className: childClassNames, style: childStyle = {}, ...childProps} = {},
    {combineHandlers, combineStyles, combineClassNames}
  ) => {
    const combinedHandlers = combineHandlers(ownProps, childProps)
    const style = useMemo(() => combineStyles(ownStyle, childStyle), [
      ownStyle,
      childStyle
    ])
    const className = useMemo(
      () => combineClassNames(childClassNames, ownClassNames),
      [childClassNames, ownClassNames]
    )
    return {
      ...(className && {className}),
      ...(style && {style}),
      ...ownProps,
      ...childProps,
      ...combinedHandlers
    }
  },
  ...props
}) => {
  return ReactChildren.toArray(children).map((child, index) =>
    isValidElement(child)
      ? cloneElement(
          child,
          combineProps(props, child?.props, {
            combineHandler,
            combineHandlers,
            combineStyles,
            combineClassNames
          })
        )
      : child
  )
}

PrimitiveInjector.displayName = 'PrimitiveInjector'

PrimitiveInjector.propTypes = {
  children: PropTypes.node,
  mergeProps: PropTypes.func
}

export default PrimitiveInjector
