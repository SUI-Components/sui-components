import {cloneElement, Children} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'
import AtomHelpText from '@s-ui/react-atom-help-text'

import {
  BASE_CLASS,
  CLASS_INLINE,
  CLASS_AUTO_HIDE,
  CLASS_FULLWIDTH,
  CLASS_INLINE_REVERSE,
  CLASS_NODE_LABEL_CONTAINER,
  CLASS_INPUT_CONTAINER,
  CLASS_LABEL_CONTAINER
} from './config.js'

const MoleculeLabel = ({
  label,
  nodeLabel,
  type: typeValidationLabel,
  name,
  onClick
}) => {
  const innerLabel = () => {
    if (label) {
      return (
        <AtomLabel
          type={typeValidationLabel}
          name={name}
          text={label}
          onClick={onClick}
        />
      )
    } else if (nodeLabel) {
      return cloneElement(nodeLabel, {
        type: typeValidationLabel,
        name,
        onClick
      })
    }
  }
  return <div className={CLASS_NODE_LABEL_CONTAINER}>{innerLabel()}</div>
}

MoleculeLabel.propTypes = {
  label: PropTypes.string,
  nodeLabel: PropTypes.element,
  type: PropTypes.oneOf(Object.values(AtomLabelTypes)),
  name: PropTypes.string,
  onClick: PropTypes.func
}

const MoleculeField = ({
  disabled,
  inline,
  reverse,
  errorText,
  successText,
  alertText,
  label,
  nodeLabel,
  fullWidth,
  useContrastLabel,
  helpText,
  name,
  onClickLabel,
  onChange: onChangeFromProps,
  children,
  autoHideHelpText,
  isAligned
}) => {
  const className = cx(
    BASE_CLASS,
    inline && CLASS_INLINE,
    inline && reverse && CLASS_INLINE_REVERSE,
    autoHideHelpText && CLASS_AUTO_HIDE,
    fullWidth && CLASS_FULLWIDTH
  )

  let statusValidationText, typeValidationLabel, typeValidationText
  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      return cloneElement(child, {
        onChange: onChangeFromProps
      })
    })

  if (useContrastLabel) {
    typeValidationLabel = AtomLabelTypes.CONTRAST
  }

  if (errorText) {
    statusValidationText = errorText
    typeValidationLabel = AtomLabelTypes.ERROR
    typeValidationText = AtomValidationTextTypes.ERROR
  }

  if (successText) {
    statusValidationText = successText
    typeValidationLabel = AtomLabelTypes.SUCCESS
    typeValidationText = AtomValidationTextTypes.SUCCESS
  }

  if (alertText) {
    statusValidationText = alertText
    typeValidationLabel = AtomLabelTypes.ALERT
    typeValidationText = AtomValidationTextTypes.ALERT
  }

  if (disabled) {
    typeValidationLabel = AtomLabelTypes.DISABLED
  }

  return (
    <div className={className}>
      {(label || nodeLabel) && (
        <div className={CLASS_LABEL_CONTAINER}>
          {inline && extendedChildren}
          <MoleculeLabel
            type={typeValidationLabel}
            name={name}
            label={label}
            nodeLabel={nodeLabel}
            onClick={onClickLabel}
          />
        </div>
      )}
      <div
        className={cx(
          CLASS_INPUT_CONTAINER,
          isAligned && `${CLASS_INPUT_CONTAINER}--aligned`
        )}
      >
        {!inline && extendedChildren}
        {!disabled && typeValidationText && (
          <AtomValidationText
            type={typeValidationText}
            text={statusValidationText}
          />
        )}
        {helpText && <AtomHelpText text={helpText} />}
      </div>
    </div>
  )
}

MoleculeField.displayName = 'MoleculeField'

MoleculeField.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Text to be displayed as label of the textarea */
  label: PropTypes.string,

  /** React node to be displayed as label of the textarea if there is not a given label value */
  nodeLabel: PropTypes.element,

  /** Makes nodeLabelContainer full width */
  fullWidth: PropTypes.bool,

  /** If true it will set the label type to 'CONTRAST' */
  useContrastLabel: PropTypes.bool,

  /** Text to be displayed as label of the textarea */
  onChange: PropTypes.func,

  /** used as for attribute. Must be the same as the input element id */
  name: PropTypes.string.isRequired,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),

  /** Error message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** Boolean to decide if the field should appear as disabled */
  disabled: PropTypes.bool,

  /** Boolean to decide if elements should be set inline but input first */
  reverse: PropTypes.bool,

  /** Function triggered when field's label is clicked */
  onClickLabel: PropTypes.func,

  /** Boolean to decide if helptext should be auto hide */
  autoHideHelpText: PropTypes.bool,

  /** Boolean to indicate if there is a checkbox or radiobutton & it has to be aligned  */
  isAligned: PropTypes.bool
}

export default MoleculeField
