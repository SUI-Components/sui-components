import {moleculeSelectStates} from '@s-ui/react-molecule-select'

export const hasErrors = ({successText, errorText}) => {
  if (errorText) return true
  if (successText) return false
}

export const getState = ({successText, errorState, alertText}) => {
  if (successText) return moleculeSelectStates.SUCCESS
  if (errorState) return moleculeSelectStates.ERROR
  if (alertText) return moleculeSelectStates.ALERT
}
