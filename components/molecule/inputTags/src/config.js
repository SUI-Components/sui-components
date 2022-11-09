import {inputSizes} from '@s-ui/react-atom-input'
import {atomTagSizes} from '@s-ui/react-atom-tag'

export const BASE_CLASS = 'sui-AtomInput'
export const CLASS_TAGS = `${BASE_CLASS}--withTags`
export const CLASS_TAGS_FOCUS = `${CLASS_TAGS}--focus`
export const CLASS_TAGS_ERROR = `${CLASS_TAGS}--error`
export const CLASS_TAGS_SUCCESS = `${CLASS_TAGS}--success`
export const CLASS_TAGS_DISABLED = `${CLASS_TAGS}--disabled`

export const isDuplicate = (values, newValue) => {
  const upperTags = values.map(val =>
    typeof val === 'object' ? val.label.toUpperCase() : val.toUpperCase()
  )
  return upperTags.includes(newValue.toUpperCase())
}

export const getInputToTagSize = inputSize => {
  const conversor = {
    [inputSizes.XSMALL]: atomTagSizes.XSMALL,
    [inputSizes.SMALL]: atomTagSizes.SMALL,
    [inputSizes.MEDIUM]: atomTagSizes.MEDIUM,
    [inputSizes.LARGE]: atomTagSizes.LARGE,
    [inputSizes.XLARGE]: atomTagSizes.XLARGE
  }
  return conversor[inputSize]
}

export const isFunction = fn => typeof fn === 'function'
