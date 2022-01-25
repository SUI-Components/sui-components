import {atomButtonSizes} from '@s-ui/react-atom-button'
import {inputSizes} from '@s-ui/react-atom-input'

export const BASE_CLASS = `sui-MoleculeDataCounter`
export const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

export const ACTIONS = {
  CHANGE: 'change',
  LESS: 'less',
  MORE: 'more'
}

export const sizeConversor = {
  [inputSizes.SMALL]: atomButtonSizes.SMALL,
  [inputSizes.LARGE]: atomButtonSizes.LARGE
}
