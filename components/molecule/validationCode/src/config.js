export {
  pinInputStatus as validationCodeStatus,
  pinInputSizes as validationCodeSizes,
  pinInputMask as validationCodeMask
} from '@s-ui/react-atom-pin-input'

export const BASE_CLASS = 'sui-MoleculeValidationCode'

export const normalizeValue = value => {
  if (value === undefined) {
    return value
  }
  return `${typeof value === 'string' ? value.split('') : value}`
}
