import {
  getMessageErrorRequired,
  getMessageErrorNumber,
  getMessageErrorPositive,
  getMessageErrorInRange
} from './helpers'

const isValidShowPages = (props, propName, componentName) => {
  const showPages = props[propName]
  const {totalPages} = props
  if (!showPages)
    return new Error(getMessageErrorRequired({propName, componentName}))
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
