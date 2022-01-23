import {inputStates} from '@s-ui/react-atom-input'

export const getErrorState = ({successText, errorText}) => {
  if (successText) return false
  if (errorText) return true
}

export const getState = ({successText, errorState, alertText}) => {
  if (successText) return inputStates.SUCCESS
  if (errorState) return inputStates.ERROR
  if (alertText) return inputStates.ALERT
}
