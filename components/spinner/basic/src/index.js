import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

export default function SpinnerBasic({size}) {
  const className = cx('sui-SpinnerBasic', `sui-SpinnerBasic--${size}`)

  return (
    <span className={className}>
      <span className="sui-SpinnerBasic-circle sui-SpinnerBasic-circleBackground" />
      <span className="sui-SpinnerBasic-circle sui-SpinnerBasic-circleArc" />
    </span>
  )
}

SpinnerBasic.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

SpinnerBasic.defaultProps = {
  size: 'medium'
}

SpinnerBasic.displayName = 'SpinnerBasic'
