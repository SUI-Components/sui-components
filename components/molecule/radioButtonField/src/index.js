import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomRadioButton from '@s-ui/react-atom-radio-button'

const BASE_CLASS = 'sui-MoleculeRadioButtonField'

const MoleculeRadioButtonField = ({
  id,
  label,
  nodeLabel,
  successText,
  errorText,
  alertText,
  helpText,
  onChange,
  onClickLabel,
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
        onClickLabel={onClickLabel}
        inline
        reverse
        isAligned
      >
        <AtomRadioButton id={id} {...props} />
      </MoleculeField>
    </div>
  )
}

MoleculeRadioButtonField.displayName = 'MoleculeRadioButtonField'

MoleculeRadioButtonField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string,

  /** React node to be displayed as label if there is not a label */
  nodeLabel: PropTypes.element,

  /** used as label for attribute and input element id */
  id: PropTypes.string,

  /* onChange callback */
  onChange: PropTypes.func,

  /* onClickLabel callback */
  onClickLabel: PropTypes.func,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Alert message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeRadioButtonField
