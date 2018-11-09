import {
  getMessageErrorRequired,
  getMessageErrorNumber,
  getMessageErrorPositive
} from './helpers'

const isValidTotalPages = (props, propName, componentName) => {
  const totalPages = props[propName]
  if (!totalPages)
    return new Error(getMessageErrorRequired({propName, componentName}))
  if (typeof totalPages !== 'number')
    return new Error(getMessageErrorNumber({propName, componentName}))
  if (totalPages <= 0)
    return new Error(getMessageErrorPositive({propName, componentName}))

  // assume all ok
  return null
}

export default isValidTotalPages
