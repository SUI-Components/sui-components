import {getMessageErrorNumber, getMessageErrorPositive} from './helpers.js'

const isValidTotalPages = (props, propName, componentName) => {
  const totalPages = props[propName]
  if (totalPages === undefined) return null
  if (typeof totalPages !== 'number') return new Error(getMessageErrorNumber({propName, componentName}))
  if (totalPages <= 0) return new Error(getMessageErrorPositive({propName, componentName}))

  // assume all ok
  return null
}

export default isValidTotalPages
