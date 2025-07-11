import cx from 'classnames'
import PropTypes from 'prop-types'

import {suitClass} from '../helpers.js'

export const Close = ({icon, onClick, floating}) => {
  const BUTTON_CLASS = cx(suitClass({element: 'close'}), {
    [suitClass({element: 'close--floating'})]: floating
  })

  return (
    <button type="button" className={BUTTON_CLASS} onClick={onClick}>
      {icon}
    </button>
  )
}

Close.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  floating: PropTypes.bool
}
