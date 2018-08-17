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
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  icon: PropTypes.node
}

export default HeaderActions
