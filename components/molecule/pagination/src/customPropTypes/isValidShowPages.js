import {
  getMessageErrorNumber,
  getMessageErrorPositive,
  getMessageErrorInRange
} from './helpers.js'

const isValidShowPages = (props, propName, componentName) => {
  const showPages = props[propName]
  const {totalPages} = props
  if (showPages === undefined) return null
  if (typeof showPages !== 'number')
    return new Error(getMessageErrorNumber({propName, componentName}))
  if (showPages <= 0)
    return new Error(getMessageErrorPositive({propName, componentName}))
  if (showPages > totalPages)
    return new Error(getMessageErrorInRange({propName, componentName}))

  // assume all ok
  return null
}

export default isValidShowPages
