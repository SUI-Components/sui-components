import {getMessageErrorInRange, getMessageErrorNumber, getMessageErrorPositive} from './helpers.js'

const isValidPage = (props, propName, componentName) => {
  const page = props[propName]
  const {totalPages} = props
  if (page === undefined) return null
  if (typeof page !== 'number') return new Error(getMessageErrorNumber({propName, componentName}))
  if (page <= 0) return new Error(getMessageErrorPositive({propName, componentName}))
  if (page > totalPages) return new Error(getMessageErrorInRange({propName, componentName}))

  // assume all ok
  return null
}

export default isValidPage
