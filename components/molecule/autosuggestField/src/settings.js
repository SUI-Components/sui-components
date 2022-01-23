import {MoleculeAutosuggestStates} from '@s-ui/react-molecule-autosuggest'

export const getErrorState = ({successText, errorText}) => {
  if (successText) return false
  if (errorText) return true
}

export const getState = ({successText, errorState, alertText}) => {
  if (successText) return MoleculeAutosuggestStates.SUCCESS
  if (errorState) return MoleculeAutosuggestStates.ERROR
  if (alertText) return MoleculeAutosuggestStates.ALERT
}
