import cx from 'classnames'
import PropTypes from 'prop-types'

import {suitClass} from '../helpers.js'

export const HeaderRender = ({header, close, floatingIconClose}) => {
  const HEADER_CLASS = cx({
    [suitClass({element: 'empty-header'})]: !header && floatingIconClose,
    [suitClass({element: 'no-header'})]: !header && !floatingIconClose,
    [suitClass({element: 'header'})]: !!header
  })

  return (
    <div className={HEADER_CLASS}>
      {header}
      {close}
    </div>
  )
}

HeaderRender.propTypes = {
  close: PropTypes.node,
  header: PropTypes.node,
  floatingIconClose: PropTypes.bool
}
