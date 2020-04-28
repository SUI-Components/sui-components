import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {suitClass} from '../helpers'

export const Close = ({icon, onClick, floating}) => (
  <button
    type="button"
    className={cx(suitClass({element: 'close'}), {
      [suitClass({element: 'close--floating'})]: floating
    })}
    onClick={onClick}
  >
    {icon}
  </button>
)

Close.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  floating: PropTypes.bool
}
