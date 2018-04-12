import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomValidationText, {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'
import Addon, {AddonTypes} from './Addon'

const BASE_CLASS = 'sui-AtomInput'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const getInputClass = ({size, validationType}) =>
  cx(
    `${BASE_CLASS}-inputWrapper`,
    `${BASE_CLASS}--${size}`,
    `${BASE_CLASS}--${validationType}`
  )

const getClassNames = ({size, validationText, validationType}) =>
  cx(BASE_CLASS)

const InputWrapper = (props) => {
  const {
    addonLeft,
    addonRight,
    children,
    helpText,
    label,
    name,
    optionalText,
    size,
    validationText,
    validationType,
  } = props

  return (
    <div className={getClassNames({size, validationText, validationType})}>
      <AtomLabel
        name={name}
        for='labelName'
        text={label}
        optional={optionalText}
        type={validationType} />

      <div className={getInputClass({size, validationType})}>
        { addonLeft && <Addon label={addonLeft} type={AddonTypes.LEFT} /> }
        { children }
        { addonRight && <Addon label={addonRight} type={AddonTypes.RIGHT} /> }
      </div>
      { validationType && <AtomValidationText text={validationText} type={validationType} /> }
      { helpText && <AtomHelpText text={helpText} /> }
    </div>
  )
}

InputWrapper.propTypes = {
  addonLeft: PropTypes.string,
  addonRight: PropTypes.string,
  children: PropTypes.node.isRequired,
  helpText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  optionalText: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  validationText: PropTypes.string,
  validationType: PropTypes.oneOf(Object.values(AtomValidationTextTypes)),
}

InputWrapper.defaultProps = {
  size: SIZES.MEDIUM
}

export default InputWrapper
export {SIZES, AtomValidationTextTypes}
