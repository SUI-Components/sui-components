import {useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import AtomTextarea, {AtomTextareaSizes as SIZES, AtomTextareaStates} from '@s-ui/react-atom-textarea'
import MoleculeField from '@s-ui/react-molecule-field'

import {BASE_CLASS} from './config.js'

const hasErrors = ({successText, errorText}) => {
  if (errorText) return true
  if (successText) return false
}

const getState = ({successText, errorState, alertText}) => {
  if (successText) return AtomTextareaStates.SUCCESS
  if (errorState) return AtomTextareaStates.ERROR
  if (alertText) return AtomTextareaStates.ALERT
}

const NOOP = () => {}

const MoleculeTextareaField = ({
  alertText,
  autoHideHelpText = false,
  errorText,
  isMaxCharBlocked = false,
  helpText,
  id,
  label,
  nodeLabel,
  maxChars = 4000,
  onChange = NOOP,
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
    setInternalValue(value ?? '')
  }, [value])

  const computeHelpText = () => {
    if (showMaxLengthError) return ''
    const numCharacters = internalValue.length
    const dynamicText = `${numCharacters}/${maxChars} ${textCharacters}`
    return helpText ? `${helpText} - ${dynamicText}` : dynamicText
  }

  const onChangeHandler = ev => {
    ev.persist()
    const value = ev.target.value

    if (value.length <= maxChars || isMaxCharBlocked) {
      setInternalValue(value)
      onChange(ev, {value})
      setShowMaxLengthError(value.length > maxChars)
    }
  }

  const helpTextComputed = (
    <div aria-live="polite" aria-atomic="true">
      <p className={`${BASE_CLASS}-helpText`}>{computeHelpText()}</p>
    </div>
  )

  return (
    <MoleculeField
      name={id}
      label={label}
      nodeLabel={nodeLabel}
      successText={successText}
      errorText={errorText}
      alertText={alertText}
      helpText={helpTextComputed}
      autoHideHelpText={autoHideHelpText}
      maxChars={maxChars}
      onChange={onChangeHandler}
      disabled={disabled}
    >
      <AtomTextarea id={id} errorState={errorState} state={textAreaState} value={internalValue} {...props} />
    </MoleculeField>
  )
}

MoleculeTextareaField.displayName = 'MoleculeTextareaField'

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

  /** React node to be displayed as label if there is not a label */
  nodeLabel: PropTypes.element,

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
  isMaxCharBlocked: PropTypes.bool
}

export default MoleculeTextareaField

export const MoleculeTextareaSizes = SIZES
