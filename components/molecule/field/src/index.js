import {cloneElement, Children} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'
import AtomHelpText from '@s-ui/react-atom-help-text'

const BASE_CLASS = 'sui-MoleculeField'
const CLASS_INLINE = `${BASE_CLASS}--inline`
const CLASS_AUTOHIDE = `${BASE_CLASS}--autohide`
const CLASS_FULLWIDTH = `${BASE_CLASS}--fullWidth`
const CLASS_INLINE_REVERSE = `${CLASS_INLINE}-reverse`
const CLASS_NODE_LABEL_CONTAINER = `${BASE_CLASS}-nodeLabelContainer`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-inputContainer`
const CLASS_LABEL_CONTAINER = `${BASE_CLASS}-labelContainer`

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
  withBox
}) => {
  const className = cx(
    BASE_CLASS,
    inline && CLASS_INLINE,
    inline && reverse && CLASS_INLINE_REVERSE,
    autoHideHelpText && CLASS_AUTOHIDE,
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
          withBox && `${CLASS_INPUT_CONTAINER}--with-box`
        )}
      >
        {!inline && extendedChildren}
        {typeValidationText && (
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

  /** Boolean to decide if elements should be set inline but input first */
  reverse: PropTypes.bool,

  /** Function triggered when field's label is clicked */
  onClickLabel: PropTypes.func,

  /** Boolean to decide if helptext should be auto hide */
  autoHideHelpText: PropTypes.bool,

  /** Boolean to indicate if there is a checkbox or radiobutton  */
  withBox: PropTypes.bool
}

export default MoleculeField
