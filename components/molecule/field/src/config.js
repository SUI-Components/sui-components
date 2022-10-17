import {isElement} from 'react-is'

import AtomLabel from '@s-ui/react-atom-label'

export const BASE_CLASS = 'sui-MoleculeField'
export const CLASS_INLINE = `${BASE_CLASS}--inline`
export const CLASS_AUTO_HIDE = `${BASE_CLASS}--autohide`
export const CLASS_FULLWIDTH = `${BASE_CLASS}--fullWidth`
export const CLASS_INLINE_REVERSE = `${CLASS_INLINE}-reverse`
export const CLASS_NODE_LABEL_CONTAINER = `${BASE_CLASS}-nodeLabelContainer`
export const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-inputContainer`
export const CLASS_LABEL_CONTAINER = `${BASE_CLASS}-labelContainer`

export function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string'
}

export function isCompositeTypeElement(element) {
  return isElement(element) && typeof element.type === 'function'
}

export const getLabeled = element => {
  if (
    (isDOMTypeElement(element) && element.type === 'label') ||
    (isCompositeTypeElement(element) && element.type === AtomLabel)
  ) {
    return element
  }
  return <AtomLabel text={element} />
}
