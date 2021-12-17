import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'

const MoleculeButtonGroupField = ({
  id,
  label,
  nodeLabel,
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
      nodeLabel={nodeLabel}
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

  /** React node to be displayed as label if there is not a label */
  nodeLabel: PropTypes.element,

  /** used as label for attribute and input element id */
  id: PropTypes.string,

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
