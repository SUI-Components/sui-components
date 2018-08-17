import React from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'

const getClass = type => `sui-HeaderActions${type ? `-${type}` : ''}`

const HeaderActions = ({
  buttonLabel,
  icon,
  onButtonClick,
  onIconClick,
  title
}) => (
  <header className={getClass()}>
    <span className={getClass('icon')} onClick={onIconClick}>
      {icon}
    </span>
    <h1 className={getClass('title')}>{title}</h1>
    <span className={getClass('button')}>
      <Button type="primary" negative onClick={onButtonClick}>
        {buttonLabel}
      </Button>
    </span>
  </header>
)

HeaderActions.displayName = 'HeaderActions'

HeaderActions.propTypes = {
  /** Label used by the button */
  buttonLabel: PropTypes.string.isRequired,
  /** Icon to be shown */
  icon: PropTypes.node,
  /** Callback on button click */
  onButtonClick: PropTypes.func.isRequired,
  /** Callback on icon click */
  onIconClick: PropTypes.func.isRequired,
  /** Header title */
  title: PropTypes.string.isRequired
}

export default HeaderActions
