import React from 'react'
import PropTypes from 'prop-types'
import {suitClass} from '../helpers'

export const Close = ({icon, onClick}) => (
  <button
    type="button"
    className={suitClass({element: 'close'})}
    onClick={onClick}
  >
    {icon}
  </button>
)

Close.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
