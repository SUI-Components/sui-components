import {cloneElement, Children} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'

import {
  BASE_CLASS,
  CLASS_INLINE,
  CLASS_AUTO_HIDE,
  CLASS_FULLWIDTH,
  CLASS_INLINE_REVERSE,
  CLASS_INPUT_CONTAINER,
  CLASS_LABEL_CONTAINER
} from './config.js'
import useStatusHelpText from './useStatusHelpText.js'
import useTypeValidationLabel from './useTypeValidationLabel.js'
import MoleculeLabel from './Label.js'

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
  status,
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

  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      return cloneElement(child, {
        onChange: onChangeFromProps
      })
    })

  const typeValidationLabel = useTypeValidationLabel({
    useContrastLabel,
    errorText,
    successText,
    alertText,
    disabled,
    status
  })

  const {
    text: helpTextValue,
    status: helpTextStatus,
    element: HelpTextElement
  } = useStatusHelpText({
    successText,
    errorText,
    alertText,
    helpText,
    status,
    disabled
  })

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
        <HelpTextElement type={helpTextStatus} text={helpTextValue} />
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
  isAligned: PropTypes.bool,

  /** set the field status (ERROR, SUCCESS, ALERT) */
  status: PropTypes.oneOf(Object.values(AtomValidationTextTypes))
}

export default MoleculeField
