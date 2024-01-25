export const BASE_CLASS = `sui-MoleculeAutosuggest`
export const CLASS_FOCUS = `${BASE_CLASS}--focus`
export const CLASS_DISABLED = `${BASE_CLASS}--disabled`

export const AUTOSUGGEST_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const CLOSE_KEYS_LIST = ['Escape']
export const SELECT_KEYS_LIST = [' ', 'Enter']

export const getIsTypeableKey = key => {
  const keysEdit = ['Backspace', 'Enter', 'Meta', 'Shift', 'ArrowLeft', 'ArrowRight']
  return key.length === 1 || keysEdit.includes(key)
}
