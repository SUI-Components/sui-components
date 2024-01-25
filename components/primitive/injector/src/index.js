import PropTypes from 'prop-types'

import {combineClassNames, combineHandler, combineHandlers, combineProps, combineStyles, inject} from './settings.js'

const PrimitiveInjector = ({children, combine = combineProps, proviso = () => true, ...props}) => {
  return inject(children, [{combine, proviso, props}])
}

PrimitiveInjector.displayName = 'PrimitiveInjector'

PrimitiveInjector.propTypes = {
  /** inner virtual-dom elements **/
  children: PropTypes.node,
  /** function used to combine each children props with the injected given **/
  combine: PropTypes.func,
  /** function used to filter the desired injected children elements **/
  proviso: PropTypes.func
}

export default PrimitiveInjector

export {inject, combineHandler, combineHandlers, combineStyles, combineClassNames, combineProps}
