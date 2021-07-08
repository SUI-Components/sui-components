const getTarget = value => {
  if (value instanceof HTMLElement) {
    return value
  } else if (value === window.document) {
    return value.body
  } else if (value instanceof Object) {
    return value.current
  } else {
    return value
  }
}

export const isDocumentElement = target => target === window.document

const calcBackToTopEngine = (target = window.document, minHeight) => {
  let properties = {}
  const element = getTarget(target)
  const isDocument = isDocumentElement(target)
  const scrollTop = isDocument ? window.scrollY : element.scrollTop
  const clientHeight = isDocument
    ? window.innerHeight - (element.offsetHeight - element.clientHeight)
    : element.clientHeight
  const offsetHeight = isDocument ? window.innerHeight : element.offsetHeight
  const scrollHeight = isDocument ? element.scrollHeight : element.scrollHeight
  const borderHeight = offsetHeight - clientHeight
  properties = {
    ...properties,
    scrollTop,
    clientHeight,
    offsetHeight,
    scrollHeight,
    borderHeight,
    minHeight
  }
  return [
    scrollTop > (minHeight !== undefined ? minHeight : clientHeight / 4),
    properties
  ]
}

export default calcBackToTopEngine
