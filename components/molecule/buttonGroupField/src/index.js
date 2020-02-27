import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'

const MoleculeButtonGroupField = ({
  id,
  label,
  successText,
  errorText,
  alertText,
  helpText,
  onChange,
  children,
  ...props
}) => {
  return (
    <MoleculeField
      name={id}
      label={label}
      successText={successText}
      errorText={errorText}
      alertText={alertText}
      helpText={helpText}
      onChange={onChange}
    >
      <MoleculeButtonGroup id={id} {...props}>
        {children}
      </MoleculeButtonGroup>
    </MoleculeField>
  )
}

MoleculeButtonGroupField.displayName = 'MoleculeButtonGroupField'

MoleculeButtonGroupField.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string.isRequired,

  /* onChange callback */
  onChange: PropTypes.func,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Alert message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default MoleculeButtonGroupField
