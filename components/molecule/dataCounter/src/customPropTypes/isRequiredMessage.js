const getMessagesError = relatedProp => ({propName, componentName}) =>
  `${propName} in ${componentName} is required when ${relatedProp} is set`

const getMessagesTypeError = ({propName, componentName}) =>
  `${propName} in ${componentName} must be a string`

const isRequiredMessage = relatedProp => (props, propName, componentName) => {
  console.log('isRequiredMessage...')
  const message = props[propName]
  const getRelatedPropMessagesError = getMessagesError(relatedProp)
  console.log({message, relatedProp, propName})
  if (!message && props[relatedProp])
    return new Error(getRelatedPropMessagesError({propName, componentName}))

  if (message && typeof message !== 'string')
    return new Error(getMessagesTypeError({propName, componentName}))

  // assume all ok
  return null
}

export default isRequiredMessage
