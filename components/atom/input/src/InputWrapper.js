import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InputLabel from './Label'
import Addon, {AddonTypes} from './Addon'
import VerificationText, {getVerificationClass, VERIFICATION_TYPES} from './VerificationText'

const BASE_CLASS = 'sui-AtomInput'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const getInputClass = ({size}) => {
  return cx(
    `${BASE_CLASS}-input-wrapper`,
    `${BASE_CLASS}-${size}`
  )
}

const getClassNames = ({size, verificationText, verificationType}) =>
  cx(
    BASE_CLASS,
    getVerificationClass({sufixClass: BASE_CLASS, verificationText, verificationType})
  )

const InputWrapper = (props) => {
  const {
    name,
    label,
    children,
    helpText,
    size,
    verificationType,
    verificationText,
    addonLeft,
    addonRight
  } = props

  return (
    <div className={getClassNames({size, verificationText, verificationType})}>
      <InputLabel name={name}>
        {label}
      </InputLabel>
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  helpText: PropTypes.string,
  verificationText: PropTypes.string,
  verificationType: PropTypes.oneOf(Object.values(VERIFICATION_TYPES)),
  addonRight: PropTypes.string,
  addonLeft: PropTypes.string
}

InputWrapper.defaultProps = {
  size: SIZES.MEDIUM
}

export default InputWrapper
export {SIZES, VERIFICATION_TYPES}
