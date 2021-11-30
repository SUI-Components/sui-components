import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomTextarea, {
  AtomTextareaSizes as SIZES,
  AtomTextareaStates
} from '@s-ui/react-atom-textarea'

const hasErrors = ({successText, errorText}) => {
  if (errorText) return true
  if (successText) return false
}

const getState = ({successText, errorState, alertText}) => {
  if (successText) return AtomTextareaStates.SUCCESS
  if (errorState) return AtomTextareaStates.ERROR
  if (alertText) return AtomTextareaStates.ALERT
}

const MoleculeTextareaField = ({
  alertText,
  autoHideHelpText = false,
  errorText,
  exceedLength,
  helpText,
  id,
  label,
  maxChars,
  onChange = () => {},
  exceedLengthText,
  successText,
  textCharacters = 'characters',
  value = '',
  ...props
}) => {
  const errorState = hasErrors({successText, errorText})
  const textAreaState = getState({successText, errorState, alertText})
  const [showMaxLengthError, setShowMaxLengthError] = useState(false)

  const {disabled} = props

  const [internalValue, setInternalValue] = useState(value ?? '')

  useEffect(() => {
    setInternalValue(value)
  }, [value])

  const computeHelpText = () => {
    if (showMaxLengthError) return ''
    const numCharacters = internalValue.length
    const dynamicText = `${numCharacters}/${maxChars} ${textCharacters}`
    return helpText ? `${helpText} - ${dynamicText}` : dynamicText
  }

  const computeErrorText = () => {
    if (showMaxLengthError && exceedLengthText) {
      return `${
        internalValue.length
      }/${maxChars} ${textCharacters}. ${exceedLengthText(
        value.length - maxChars
      )}`
    }
    if (showMaxLengthError) {
      return `${internalValue.length}/${maxChars} ${textCharacters}.`
    }
    return errorText
  }

  const onChangeHandler = ev => {
    ev.persist()
    const value = ev.target.value
    if (value.length <= maxChars) {
      setInternalValue(value)
      onChange(ev, {value})
      setShowMaxLengthError(false)
    }
    if (value.length > maxChars && exceedLength) {
      setInternalValue(value)
      onChange(ev, {value})
      setShowMaxLengthError(true)
    }
  }

  const helpTextComputed = computeHelpText()
  const errorTextComputed = computeErrorText()

  return (
    <MoleculeField
      name={id}
      label={label}
      textCharacters={textCharacters}
      successText={successText}
      errorText={errorTextComputed}
      alertText={alertText}
      helpText={helpTextComputed}
      autoHideHelpText={autoHideHelpText}
      maxChars={maxChars}
      onChange={onChangeHandler}
      disabled={disabled}
    >
      <AtomTextarea
        id={id}
        errorState={errorState}
        state={textAreaState}
        value={internalValue}
        {...props}
      />
    </MoleculeField>
  )
}

MoleculeTextareaField.displayName = 'MoleculeTextareaField'

MoleculeTextareaField.defaultProps = {
  maxChars: 4000
}

MoleculeTextareaField.propTypes = {
  /** Maximum number of characters allowed  */
  maxChars: PropTypes.number,

  /** Text `characters` to be used in the character count HelpText */
  textCharacters: PropTypes.string,

  /** placeholder og the textarea */
  placeholder: PropTypes.string,

  /** Size of textarea: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Handler triggered on change */
  onChange: PropTypes.func,

  /** Value (content) of the textarea */
  value: PropTypes.string,

  /** Text to be displayed as label */
  label: PropTypes.string,

  /** used as for attribute and textarea id */
  id: PropTypes.string,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Alert message to display when error state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if field elements should be set inline */
  inline: PropTypes.bool,

  /** Boolean to decide if the field should appear as disabled */
  disabled: PropTypes.bool,

  /** Boolean to decide if helptext should be auto hide */
  autoHideHelpText: PropTypes.bool,

  /** Prop to handle if the user can exceed the maxChars length  */
  exceedLength: PropTypes.bool,

  /** Handler triggered when the user exceeds the maxChars length and returns the exceed ammount  */
  exceedLengthText: PropTypes.func
}

export default MoleculeTextareaField

export const MoleculeTextareaSizes = SIZES
