import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import Addon, {AddonTypes} from './Addon'
import VerificationText, {getVerificationClass, VERIFICATION_TYPES} from './VerificationText'

const BASE_CLASS = 'sui-AtomInput'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const getInputClass = ({size}) => {
  return cx(
    `${BASE_CLASS}-inputWrapper`,
    `${BASE_CLASS}--${size}`
  )
}

const getClassNames = ({size, verificationText, verificationType}) =>
  cx(
    BASE_CLASS,
    getVerificationClass({sufixClass: BASE_CLASS, verificationText, verificationType})
  )

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
    verificationText,
    verificationType,
  } = props

  return (
    <div className={getClassNames({size, verificationText, verificationType})}>
      <AtomLabel
        name={name}
        for='labelName'
        text={label}
        optional={optionalText} />

      <div className={getInputClass({size})}>
        { addonLeft && <Addon label={addonLeft} type={AddonTypes.LEFT} /> }
        { children }
        { addonRight && <Addon label={addonRight} type={AddonTypes.RIGHT} /> }
      </div>
      { verificationType && <VerificationText text={verificationText} type={verificationType} /> }
      {
        helpText &&
          <span className='sui-AtomInput-help-text'>{helpText}</span>
      }
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
  verificationText: PropTypes.string,
  verificationType: PropTypes.oneOf(Object.values(VERIFICATION_TYPES)),
}

InputWrapper.defaultProps = {
  size: SIZES.MEDIUM
}

export default InputWrapper
export {SIZES, VERIFICATION_TYPES}
