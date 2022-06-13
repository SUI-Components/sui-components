export const BASE_CLASS = 'sui-MoleculeButtonGroup'

export const isFunction = fn => typeof fn === 'function'

export const combineProps = (childProp, wrapperProp) =>
  childProp === undefined ? wrapperProp : childProp
