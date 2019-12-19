import React from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomInput-withButton'

const InlineFormHoc = WrappedInput => {
  const Input = ({button, ...props}) => {
    return button ? (
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-input`}>
          <WrappedInput {...props} />
        </div>
        <div className={`${BASE_CLASS}-button`}>{button}</div>
      </div>
    ) : (
      <WrappedInput {...props} />
    )
  }

  Input.propTypes = {
    button: PropTypes.node
  }

  return Input
}

export default InlineFormHoc
