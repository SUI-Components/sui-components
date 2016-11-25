import React, { PropTypes } from 'react'
import cx from 'classnames'

export default function Basic (props) {
  const classNames = cx({
    'sui-Card': !props.className,
    [`${props.className}`]: props.className,
    'sui-Card--landscape': props.landscapeLayout,
    'sui-Card--contentfirst': props.landscapeLayout && props.contentFirst
  })

  return (
    <div className={classNames}>
      <div className='sui-Card-primary'>
        {props.primary}
      </div>
      {
        props.secondary &&
          <div className='sui-Card-secondary'>
            {props.secondary}
          </div>
      }
    </div>
  )
}

Basic.propTypes = {
  landscapeLayout: PropTypes.bool,
  contentFirst: PropTypes.bool,
  primary: PropTypes.any.isRequired,
  secondary: PropTypes.any,
  className: PropTypes.string
}

Basic.displayName = 'Basic'
