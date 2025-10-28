import {useRef} from 'react'

import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeSelect from '@s-ui/react-molecule-select'

import {getState, hasErrors} from './config.js'

const MoleculeSelectField = ({
  children,
  errorText,
  helpText,
  id,
  inline,
  label,
  nodeLabel,
  successText,
  alertText,
  onChange: handleChange,
  className,
  disabled,
  ...props
}) => {
  const refSelect = useRef()

  const handleClick = () => {
    const {current: domSelect} = refSelect
    if (domSelect) domSelect.focus()
  }

  const errorState = hasErrors({successText, errorText})
  const selectState = getState({successText, errorState, alertText})

  return (
    <MoleculeField
      disabled={disabled}
      errorText={errorText}
      helpText={helpText}
      inline={inline}
      label={label}
      nodeLabel={nodeLabel}
      name={id}
      onChange={handleChange}
      onClickLabel={handleClick}
      successText={successText}
      alertText={alertText}
    >
      <MoleculeSelect
        className={className}
        disabled={disabled}
        errorState={errorState}
        refMoleculeSelect={refSelect}
        state={selectState}
        id={id}
        {...props}
      >
        {children}
      </MoleculeSelect>
    </MoleculeField>
  )
}

MoleculeSelectField.displayName = 'MoleculeSelectField'

MoleculeSelectField.propTypes = {
  /** children */
  children: PropTypes.any,

  /** className */
  className: PropTypes.string,

  /** Boolean to decide if element is disabled */
  disabled: PropTypes.bool,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Help Text to display */
  helpText: PropTypes.string,

  /** used as label for attribute and Select element id */
  id: PropTypes.string,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** React node to be displayed as label if there is not a label */
  nodeLabel: PropTypes.element,

  /* onChange callback */
  onChange: PropTypes.func,

  /** Success message to display when success state  */
  successText: PropTypes.string,

  /** Alert message to display when alert state  */
  alertText: PropTypes.string
}

export default MoleculeSelectField
