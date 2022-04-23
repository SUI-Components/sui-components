import PropTypes from 'prop-types'

import {
  inject,
  combineHandler,
  combineHandlers,
  combineStyles,
  combineClassNames,
  combineProps
} from './settings.js'

const PrimitiveInjector = ({children, combineProps, ...props}) => {
  return inject(props, children, combineProps)
}

PrimitiveInjector.displayName = 'PrimitiveInjector'

PrimitiveInjector.propTypes = {
  children: PropTypes.node,
  combineProps: PropTypes.func
}

export default PrimitiveInjector

export {
  inject,
  combineHandler,
  combineHandlers,
  combineStyles,
  combineClassNames,
  combineProps
}
