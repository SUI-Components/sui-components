export const BASE_CLASS = 'sui-AtomInput'
export const BASE_CLASS_TAG = 'sui-AtomTag'
export const BASE_CLASS_TAG_CONTAINER = `${BASE_CLASS_TAG}_Container`
export const CLASS_TAGS = `${BASE_CLASS}--withTags`
export const CLASS_TAGS_ERROR = `${CLASS_TAGS}--error`
export const CLASS_TAGS_SUCCESS = `${CLASS_TAGS}--success`
export const CLASS_TAGS_DISABLED = `${CLASS_TAGS}--disabled`

export const isDuplicate = (values, newValue) => {
  const upperTags = values.map(val => (typeof val === 'object' ? val.label.toUpperCase() : val.toUpperCase()))
  return upperTags.includes(newValue.toUpperCase())
}

export const isFunction = fn => typeof fn === 'function'

export const handleOnFocusBlur =
  (handler, {...args}) =>
  ev => {
    isFunction(handler) && handler(ev, {...args})
  }
