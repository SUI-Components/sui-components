import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InputLabel from './Label'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const VERIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const getClassNames = ({size, verificationtext, verificationtype}) => {
  const BASE_CLASS = 'sui-AtomInput'
  const sizeClass = size === SIZES.MEDIUM
    ? `${BASE_CLASS}-medium`
    : `${BASE_CLASS}-small`
  const verificationClass = verificationtype &&
    (
      verificationtype === VERIFICATION_TYPES.ERROR
        ? `${BASE_CLASS}-error`
        : `${BASE_CLASS}-success`
    )

  return cx(
    BASE_CLASS,
    sizeClass,
    verificationClass
  )
}

const getVerificationTextClassName = ({verificationtype}) =>
  verificationtype && `sui-AtomInput-${verificationtype}-validation-text`

const InputWrapper = (props) => {
  const {
    name,
    label,
    children,
    helpText,
    size,
    verificationtype,
    verificationtext
  } = props

  return (
    <div className={getClassNames({size, verificationtext, verificationtype})}>
      <InputLabel name={name}>
        {label}
      </InputLabel>
      { children }
      {
        verificationtype &&
          <span className={getVerificationTextClassName({verificationtype})}>
            {verificationtext}
          </span>
      }
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
  verificationtext: PropTypes.string,
  verificationtype: PropTypes.oneOf(Object.values(VERIFICATION_TYPES))
}

InputWrapper.defaultProps = {
  size: SIZES.MEDIUM
}

export default InputWrapper
export {SIZES, VERIFICATION_TYPES}
