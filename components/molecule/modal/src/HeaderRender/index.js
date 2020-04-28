import React from 'react'
import PropTypes from 'prop-types'
import {suitClass} from '../helpers'
import cx from 'classnames'

export const HeaderRender = ({header, close, floatingIconClose}) => (
  <div
    className={cx({
      [suitClass({element: 'empty-header'})]: !header && floatingIconClose,
      [suitClass({element: 'no-header'})]: !header && !floatingIconClose,
      [suitClass({element: 'header'})]: !!header
    })}
  >
    {header}
    {close}
  </div>
)

HeaderRender.propTypes = {
  close: PropTypes.node,
  header: PropTypes.node,
  floatingIconClose: PropTypes.bool
}
