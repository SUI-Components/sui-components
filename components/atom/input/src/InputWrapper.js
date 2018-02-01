import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InputLabel from './Label'
import VerificationText, {getVerificationClass, VERIFICATION_TYPES} from './VerificationText'

const BASE_CLASS = 'sui-AtomInput'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const getSizeClass = ({size}) =>
  size === SIZES.MEDIUM
    ? `${BASE_CLASS}-medium`
    : `${BASE_CLASS}-small`

const getClassNames = ({size, verificationText, verificationType}) =>
  cx(
    BASE_CLASS,
    getSizeClass({size}),
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
    verificationText
  } = props

  return (
    <div className={getClassNames({size, verificationText, verificationType})}>
      <InputLabel name={name}>
        {label}
      </InputLabel>
      { children }
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
  verificationType: PropTypes.oneOf(Object.values(VERIFICATION_TYPES))
}

InputWrapper.defaultProps = {
  size: SIZES.MEDIUM
}

export default InputWrapper
export {SIZES, VERIFICATION_TYPES}
