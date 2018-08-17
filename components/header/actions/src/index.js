import React from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'

const getClass = type => `sui-HeaderActions${type ? `-${type}` : ''}`

const HeaderActions = ({title, icon, buttonLabel}) => (
  <div className={getClass()}>
    <span className={getClass('icon')}>{icon}</span>
    <h1 className={getClass('title')}>{title}</h1>
    <span className={getClass('button')}>
      <Button type="primary" negative>
        {buttonLabel}
      </Button>
    </span>
  </div>
)

HeaderActions.displayName = 'HeaderActions'

HeaderActions.propTypes = {
  /** Label used by the button */
  buttonLabel: PropTypes.string.isRequired,
  /** Icon to be shown */
  icon: PropTypes.node,
  /** Header title */
  title: PropTypes.string.isRequired
}

export default HeaderActions
