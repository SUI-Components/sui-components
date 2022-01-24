import cx from 'classnames'

export const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

export const DELAY = 500 // ms
export const BASE_CLASS = 'sui-AtomSpinner'
export const CLASS_FULL = `${BASE_CLASS}--fullPage`
export const CLASS_NO_BACKGROUND = `${BASE_CLASS}--noBackground`

export const getParentClassName = ({type, noBackground}) =>
  cx({
    [BASE_CLASS]: type === TYPES.SECTION,
    [CLASS_FULL]: type === TYPES.FULL,
    [CLASS_NO_BACKGROUND]: noBackground
  })

export const addParentClass = parentNodeClassList => parentClassName =>
  parentNodeClassList.add(...parentClassName.split(' '))
export const removeParentClass = parentNodeClassList => parentClassName =>
  parentNodeClassList.remove(...parentClassName.split(' '))
