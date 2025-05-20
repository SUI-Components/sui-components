import {Children, cloneElement} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomValidationText, {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'

import {
  BASE_CLASS,
  CLASS_AUTO_HIDE,
  CLASS_FULLWIDTH,
  CLASS_INLINE,
  CLASS_INLINE_REVERSE,
  CLASS_INPUT_CONTAINER,
  CLASS_LABEL_CONTAINER
} from './config.js'
import MoleculeLabel from './Label.js'
import useStatusValidationText from './useStatusValidationText.js'
import useTypeValidationLabel from './useTypeValidationLabel.js'

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
  statusText,
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

  const typeValidationLabel = useTypeValidationLabel({
    useContrastLabel,
    errorText,
    successText,
    alertText,
    disabled,
    status
  })

  const {text: validationTextValue, status: validationTextStatus} = useStatusValidationText({
    successText,
    errorText,
    alertText,
    status,
    statusText
  })

  const helpTextId = `${name}-help-text`
  const isHelpOrValidationText = helpText || validationTextValue

  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      return cloneElement(child, {
        onChange: onChangeFromProps,
        ...(isHelpOrValidationText && {[`aria-describedby`]: helpTextId})
      })
    })

  return (
    <div
      className={className}
      {...(validationTextStatus &&
        Object.values(AtomValidationTextTypes).includes(validationTextStatus) && {'data-status': validationTextStatus})}
    >
      {(label || nodeLabel) && (
        <div className={CLASS_LABEL_CONTAINER}>
          {inline && extendedChildren}
          <MoleculeLabel type={typeValidationLabel} name={name} onClick={onClickLabel}>
            {label || nodeLabel}
          </MoleculeLabel>
        </div>
      )}
      <div className={cx(CLASS_INPUT_CONTAINER, isAligned && `${CLASS_INPUT_CONTAINER}--aligned`)}>
        {!inline && extendedChildren}
        {!disabled && validationTextValue && (
          <AtomValidationText
            id={helpTextId}
            text={validationTextValue}
            type={validationTextStatus}
            {...(validationTextStatus === AtomValidationTextTypes.ERROR && {role: 'alert'})}
          />
        )}
        {helpText && <AtomHelpText id={helpTextId} text={helpText} />}
      </div>
    </div>
  )
}

MoleculeField.displayName = 'MoleculeField'

MoleculeField.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Text to be displayed as label of the textarea */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** React node to be displayed as label of the textarea if there is not a given label value */
  nodeLabel: PropTypes.element, // deprecated (use label)

  /** Makes nodeLabelContainer full width */
  fullWidth: PropTypes.bool,

  /** If true it will set the label type to 'CONTRAST' */
  useContrastLabel: PropTypes.bool,

  /** Text to be displayed as label of the textarea */
  onChange: PropTypes.func,

  /** used as for attribute. Must be the same as the input element id */
  name: PropTypes.string.isRequired,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool, PropTypes.node]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool, PropTypes.node]),

  /** Error message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool, PropTypes.node]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.element, PropTypes.bool, PropTypes.node]),

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
  status: PropTypes.oneOf(Object.values(AtomValidationTextTypes)),

  /** status field text **/
  statusText: PropTypes.string
}

export default MoleculeField

export {AtomValidationTextTypes as moleculeFieldStatus}
