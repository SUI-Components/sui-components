import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

export default function CardComposable({
  className,
  contentFirst,
  landscapeLayout,
  primary,
  secondary
}) {
  const classNames = cx(className, {
    'sui-CardComposable': !className,
    'sui-CardComposable--landscape': landscapeLayout,
    'sui-CardComposable--contentfirst': landscapeLayout && contentFirst
  })

  return (
    <div className={classNames}>
      <div className="sui-CardComposable-primary">{primary}</div>
      {secondary && (
        <div className="sui-CardComposable-secondary">{secondary}</div>
      )}
    </div>
  )
}

CardComposable.propTypes = {
  className: PropTypes.string,
  contentFirst: PropTypes.bool,
  landscapeLayout: PropTypes.bool,
  primary: PropTypes.any.isRequired,
  secondary: PropTypes.any
}

CardComposable.displayName = 'CardComposable'
