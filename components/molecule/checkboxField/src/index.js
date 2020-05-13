import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomCheckbox from '@s-ui/react-atom-checkbox'

const BASE_CLASS = 'sui-MoleculeCheckboxField'

const MoleculeCheckboxField = ({
  id,
  label,
  nodeLabel,
  successText,
  errorText,
  alertText,
  helpText,
  onChange,
  toggleIcon: ToggleIcon,
  toggleIconOnChange = () => {},
  ...props
}) => {
  return (
    <div className={BASE_CLASS}>
      <MoleculeField
        name={id}
        label={label}
        nodeLabel={nodeLabel}
        successText={successText}
        errorText={errorText}
        alertText={alertText}
        helpText={helpText}
        onChange={onChange}
        inline
        reverse
      >
        <AtomCheckbox id={id} {...props} />
        {ToggleIcon && (
          <span
            className={`${BASE_CLASS}-toggleIcon`}
            onClick={toggleIconOnChange}
          >
            <ToggleIcon />
          </span>
        )}
      </MoleculeField>
    </div>
  )
}

MoleculeCheckboxField.displayName = 'MoleculeCheckboxField'

MoleculeCheckboxField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string,

  /** React node to be displayed as label if there is not a label */
  nodeLabel: PropTypes.element,

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
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /* Icon to show as toggle */
  toggleIcon: PropTypes.elementType,

  /* onChange callback for toggle icon */
  toggleIconOnChange: PropTypes.func
}

export default MoleculeCheckboxField
