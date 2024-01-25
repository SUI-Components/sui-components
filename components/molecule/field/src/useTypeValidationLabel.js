import {AtomLabelTypes} from '@s-ui/react-atom-label'

const useTypeValidationLabel = ({useContrastLabel, errorText, successText, alertText, disabled, status}) => {
  if (status && [AtomLabelTypes.SUCCESS, AtomLabelTypes.ERROR, AtomLabelTypes.ALERT].includes(status)) return status
  if (disabled) return AtomLabelTypes.DISABLED
  if (alertText) return AtomLabelTypes.ALERT
  if (successText) return AtomLabelTypes.SUCCESS
  if (errorText) return AtomLabelTypes.ERROR
  if (useContrastLabel) return AtomLabelTypes.CONTRAST
}

export default useTypeValidationLabel
